<?php
/**
 * Plugin Name: Texas Roadhouse Email Notifications
 * Description: Complete email notification system for blog posts with OneSignal integration
 * Version: 2.0.0
 * Author: Texas Roadhouse Menu Team
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class TexasRoadhouseEmailNotifications {
    
    private $app_id = '7629b842-fb4e-4821-a9dd-e60ca450a208';
    private $rest_api_key;
    private $api_url = 'https://onesignal.com/api/v1/notifications';
    
    public function __construct() {
        // Initialize REST API key from options
        $this->rest_api_key = get_option('tr_onesignal_rest_api_key', '');
        
        // Hook into WordPress actions
        add_action('publish_post', array($this, 'send_post_notifications'), 10, 2);
        add_action('publish_page', array($this, 'send_post_notifications'), 10, 2);
        
        // Add admin menu for settings
        add_action('admin_menu', array($this, 'add_admin_menu'));
        
        // Add settings
        add_action('admin_init', array($this, 'settings_init'));
        
        // Add AJAX handlers for testing
        add_action('wp_ajax_send_test_email', array($this, 'send_test_email'));
        add_action('wp_ajax_send_test_push', array($this, 'send_test_push'));
        
        // Add AJAX handler for welcome email
        add_action('wp_ajax_send_welcome_email', array($this, 'send_welcome_email'));
        add_action('wp_ajax_nopriv_send_welcome_email', array($this, 'send_welcome_email'));
    }
    
    /**
     * Send both email and push notifications when post is published
     */
    public function send_post_notifications($post_id, $post) {
        // Skip if this is an auto-save, revision, or draft
        if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) {
            return;
        }
        
        // Skip if post is not published
        if ($post->post_status !== 'publish') {
            return;
        }
        
        // Skip if REST API key is not configured
        if (empty($this->rest_api_key)) {
            error_log('Texas Roadhouse: OneSignal REST API key not configured');
            return;
        }
        
        // Check if notifications were already sent for this post
        $email_sent = get_post_meta($post_id, '_tr_email_notification_sent', true);
        $push_sent = get_post_meta($post_id, '_tr_push_notification_sent', true);
        
        // Send email notification
        if (!$email_sent) {
            $this->send_email_notification($post_id, $post);
        }
        
        // Send push notification
        if (!$push_sent) {
            $this->send_push_notification($post_id, $post);
        }
    }
    
    /**
     * Send email notification via OneSignal
     */
    public function send_email_notification($post_id, $post) {
        $post_title = get_the_title($post_id);
        $post_url = get_permalink($post_id);
        $post_excerpt = get_the_excerpt($post_id);
        $featured_image = get_the_post_thumbnail_url($post_id, 'large');
        
        // Generate email content
        $email_subject = "New Blog Post: " . $post_title;
        $email_content = $this->generate_email_template($post, $post_url, $post_excerpt, $featured_image);
        
        // OneSignal email API payload
        $notification_data = array(
            'app_id' => $this->app_id,
            'included_segments' => array('All'),
            'email_subject' => $email_subject,
            'email_body' => $email_content,
            'email_from_name' => 'Texas Roadhouse Menu Updates',
            'email_from_address' => 'notifications@texasroadhouse-menus.us',
            'email_preheader' => wp_trim_words($post_excerpt, 20),
            'email_reply_to_address' => 'info@texasroadhouse-menus.us',
            'disable_email_click_tracking' => false,
            'disable_email_open_tracking' => false,
        );
        
        // Send the email
        $response = $this->send_notification($notification_data);
        
        // Log the result
        if ($response) {
            $response_body = json_decode($response, true);
            if (isset($response_body['id'])) {
                update_post_meta($post_id, '_tr_email_notification_sent', true);
                update_post_meta($post_id, '_tr_email_notification_id', $response_body['id']);
                error_log('Texas Roadhouse: Email notification sent for post ' . $post_id);
            } else {
                error_log('Texas Roadhouse: Failed to send email for post ' . $post_id . ' - ' . $response);
            }
        }
        
        return $response;
    }
    
    /**
     * Send push notification via OneSignal
     */
    public function send_push_notification($post_id, $post) {
        $post_title = get_the_title($post_id);
        $post_url = get_permalink($post_id);
        $post_excerpt = get_the_excerpt($post_id);
        
        // Push notification data
        $notification_data = array(
            'app_id' => $this->app_id,
            'included_segments' => array('All'),
            'headings' => array('en' => 'New Blog Post: Texas Roadhouse Menu'),
            'contents' => array('en' => $post_title),
            'url' => $post_url,
            'large_icon' => 'https://texasroadhouse-menus.us/favicon-192x192.png',
            'chrome_web_icon' => 'https://texasroadhouse-menus.us/favicon-192x192.png',
            'web_buttons' => array(
                array(
                    'id' => 'read-more-button',
                    'text' => 'Read Full Article',
                    'url' => $post_url
                )
            )
        );
        
        if (!empty($post_excerpt)) {
            $notification_data['subtitle'] = array('en' => wp_trim_words($post_excerpt, 20));
        }
        
        // Send the push notification
        $response = $this->send_notification($notification_data);
        
        // Log the result
        if ($response) {
            $response_body = json_decode($response, true);
            if (isset($response_body['id'])) {
                update_post_meta($post_id, '_tr_push_notification_sent', true);
                update_post_meta($post_id, '_tr_push_notification_id', $response_body['id']);
                error_log('Texas Roadhouse: Push notification sent for post ' . $post_id);
            }
        }
        
        return $response;
    }
    
    /**
     * Generate professional email template
     */
    private function generate_email_template($post, $post_url, $excerpt, $featured_image) {
        $site_name = get_bloginfo('name');
        $site_url = home_url();
        
        ob_start();
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title><?php echo esc_html($post->post_title); ?></title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
                .container { max-width: 600px; margin: 0 auto; background: #fff; }
                .header { background: #110302; color: #FCD705; padding: 30px 20px; text-align: center; }
                .header h1 { margin: 0; font-size: 28px; font-weight: bold; }
                .header p { margin: 10px 0 0 0; font-size: 16px; color: #ffffff; opacity: 0.9; }
                .content { padding: 40px 30px; }
                .post-title { font-size: 24px; font-weight: bold; color: #110302; margin: 0 0 20px 0; line-height: 1.3; }
                .featured-image { width: 100%; height: auto; border-radius: 8px; margin: 20px 0; }
                .excerpt { font-size: 16px; color: #555; margin: 20px 0; line-height: 1.6; }
                .cta-button { display: inline-block; background: #FCD705; color: #110302; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; margin: 25px 0; }
                .footer { background: #f8f8f8; padding: 30px 20px; text-align: center; font-size: 14px; color: #666; }
                @media only screen and (max-width: 480px) {
                    .content { padding: 20px 15px !important; }
                    .header { padding: 20px 15px !important; }
                    .cta-button { display: block !important; text-align: center !important; width: 80% !important; margin: 20px auto !important; }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Texas Roadhouse Menu Updates</h1>
                    <p>Fresh Menu Updates & Food News</p>
                </div>
                
                <div class="content">
                    <h2 class="post-title"><?php echo esc_html($post->post_title); ?></h2>
                    
                    <?php if ($featured_image): ?>
                        <img src="<?php echo esc_url($featured_image); ?>" alt="<?php echo esc_attr($post->post_title); ?>" class="featured-image">
                    <?php endif; ?>
                    
                    <div class="excerpt">
                        <?php echo esc_html($excerpt); ?>
                    </div>
                    
                    <p>We've just published a new blog post that we think you'll find interesting! Click below to read the full article and discover the latest updates about Texas Roadhouse menu items, prices, and delicious food news.</p>
                    
                    <div style="text-align: center;">
                        <a href="<?php echo esc_url($post_url); ?>" class="cta-button">Read Full Article →</a>
                    </div>
                    
                    <div style="margin: 30px 0; text-align: center;">
                        <p><strong>Stay Connected:</strong></p>
                        <a href="<?php echo esc_url($site_url); ?>" style="color: #FCD705; margin: 0 10px;">Visit Our Website</a> |
                        <a href="<?php echo esc_url($site_url . '/menus-prices'); ?>" style="color: #FCD705; margin: 0 10px;">Browse Menu & Prices</a> |
                        <a href="<?php echo esc_url($site_url . '/coupons'); ?>" style="color: #FCD705; margin: 0 10px;">View Current Coupons</a>
                    </div>
                </div>
                
                <div class="footer">
                    <p>You're receiving this email because you subscribed to updates from <?php echo esc_html($site_name); ?>.</p>
                    <p>© <?php echo date('Y'); ?> <?php echo esc_html($site_name); ?>. All rights reserved.</p>
                    <p><a href="<?php echo esc_url($site_url); ?>" style="color: #666;">Visit our website</a></p>
                </div>
            </div>
        </body>
        </html>
        <?php
        return ob_get_clean();
    }
    
    /**
     * Generate test email template
     */
    private function generate_test_email_template() {
        ob_start();
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Test Email - Texas Roadhouse Menu Updates</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
                .container { max-width: 600px; margin: 0 auto; background: #fff; }
                .header { background: #110302; color: #FCD705; padding: 30px 20px; text-align: center; }
                .header h1 { margin: 0; font-size: 28px; font-weight: bold; }
                .content { padding: 40px 30px; }
                .test-badge { background: #FCD705; color: #110302; padding: 10px 20px; border-radius: 5px; font-weight: bold; display: inline-block; margin: 20px 0; }
                .footer { background: #f8f8f8; padding: 30px 20px; text-align: center; font-size: 14px; color: #666; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Texas Roadhouse Menu Updates</h1>
                    <p>Fresh Menu Updates & Food News</p>
                </div>
                
                <div class="content">
                    <div class="test-badge">🧪 TEST EMAIL</div>
                    <h2>Email Notification System Test</h2>
                    <p>Congratulations! Your email notification system is working correctly.</p>
                    <p>This test email confirms that:</p>
                    <ul>
                        <li>✅ OneSignal API integration is working</li>
                        <li>✅ Email domain authentication is successful</li>
                        <li>✅ Email template rendering is functional</li>
                        <li>✅ Your subscribers will receive blog notifications</li>
                    </ul>
                    <p>Next time you publish a blog post, your subscribers will automatically receive a professional email notification!</p>
                </div>
                
                <div class="footer">
                    <p>This is a test email from Texas Roadhouse Menu Updates</p>
                    <p>© <?php echo date('Y'); ?> Texas Roadhouse Menu. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
        <?php
        return ob_get_clean();
    }
    
    /**
     * Generate welcome email template
     */
    private function generate_welcome_email_template($email) {
        $site_url = 'https://texasroadhouse-menus.us';
        
        ob_start();
        ?>
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Texas Roadhouse Menu Updates!</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
                .container { max-width: 600px; margin: 0 auto; background: #fff; }
                .header { background: #110302; color: #FCD705; padding: 40px 20px; text-align: center; }
                .header h1 { margin: 0; font-size: 32px; font-weight: bold; }
                .header p { margin: 15px 0 0 0; font-size: 18px; color: #ffffff; opacity: 0.9; }
                .content { padding: 40px 30px; }
                .welcome-badge { background: #FCD705; color: #110302; padding: 15px 25px; border-radius: 8px; font-weight: bold; display: inline-block; margin: 20px 0; font-size: 18px; }
                .benefits { background: #f8f8f8; padding: 25px; border-radius: 8px; margin: 25px 0; }
                .benefit-item { display: flex; align-items: center; margin: 15px 0; }
                .benefit-icon { width: 24px; height: 24px; background: #FCD705; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; color: #110302; }
                .cta-section { text-align: center; margin: 30px 0; padding: 25px; background: #110302; border-radius: 8px; }
                .cta-button { display: inline-block; background: #FCD705; color: #110302; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; margin: 10px; }
                .footer { background: #f8f8f8; padding: 30px 20px; text-align: center; font-size: 14px; color: #666; }
                @media only screen and (max-width: 480px) {
                    .content { padding: 20px 15px !important; }
                    .header { padding: 30px 15px !important; }
                    .cta-button { display: block !important; margin: 10px 0 !important; }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🍖 Welcome to Texas Roadhouse Menu Updates!</h1>
                    <p>Your gateway to the best steakhouse deals and menu updates</p>
                </div>
                
                <div class="content">
                    <div class="welcome-badge">🎉 Welcome Aboard!</div>
                    
                    <h2>Thank you for subscribing!</h2>
                    <p>Hey there, food lover! 👋</p>
                    <p>We're excited to have you join our community of Texas Roadhouse enthusiasts. You've just unlocked access to:</p>
                    
                    <div class="benefits">
                        <div class="benefit-item">
                            <div class="benefit-icon">📧</div>
                            <div>
                                <strong>Instant Blog Updates</strong><br>
                                <small>Get notified immediately when we publish new menu updates, pricing changes, and food reviews</small>
                            </div>
                        </div>
                        
                        <div class="benefit-item">
                            <div class="benefit-icon">🎫</div>
                            <div>
                                <strong>Exclusive Coupon Alerts</strong><br>
                                <small>Be the first to know about new coupons, deals, and special offers</small>
                            </div>
                        </div>
                        
                        <div class="benefit-item">
                            <div class="benefit-icon">💰</div>
                            <div>
                                <strong>Price Drop Notifications</strong><br>
                                <small>Never miss a price change on your favorite menu items</small>
                            </div>
                        </div>
                        
                        <div class="benefit-item">
                            <div class="benefit-icon">🍽️</div>
                            <div>
                                <strong>New Menu Item Alerts</strong><br>
                                <small>Discover new steaks, ribs, and seasonal specialties as soon as they're available</small>
                            </div>
                        </div>
                    </div>
                    
                    <p>We promise to only send you valuable content - no spam, just delicious updates about Texas Roadhouse menus, prices, and deals that can save you money on your next visit!</p>
                    
                    <div class="cta-section">
                        <h3 style="color: #FCD705; margin-top: 0;">🚀 Start Exploring Now!</h3>
                        <a href="<?php echo esc_url($site_url . '/menus-prices'); ?>" class="cta-button">Browse Full Menu & Prices</a>
                        <a href="<?php echo esc_url($site_url . '/coupons'); ?>" class="cta-button">View Current Coupons</a>
                        <a href="<?php echo esc_url($site_url . '/posts'); ?>" class="cta-button">Read Latest Blog Posts</a>
                    </div>
                    
                    <div style="margin: 30px 0; padding: 20px; background: #FCD705; border-radius: 8px; text-align: center;">
                        <h4 style="margin: 0 0 10px 0; color: #110302;">💡 Pro Tip</h4>
                        <p style="margin: 0; color: #110302; font-weight: 500;">Bookmark our coupons page and check it before every Texas Roadhouse visit to save money!</p>
                    </div>
                    
                    <p>Have questions or suggestions? Just reply to this email - we'd love to hear from you!</p>
                    
                    <p>Happy dining! 🍴<br>
                    <strong>The Texas Roadhouse Menu Team</strong></p>
                </div>
                
                <div class="footer">
                    <p><strong>You're subscribed as:</strong> <?php echo esc_html($email); ?></p>
                    <p>You're receiving this welcome email because you subscribed to updates from Texas Roadhouse Menu.</p>
                    <p>© <?php echo date('Y'); ?> Texas Roadhouse Menu. All rights reserved.</p>
                    <p>
                        <a href="<?php echo esc_url($site_url); ?>" style="color: #666;">Visit our website</a> | 
                        <a href="<?php echo esc_url($site_url . '/privacy-policy'); ?>" style="color: #666;">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </body>
        </html>
        <?php
        return ob_get_clean();
    }
    
    /**
     * Send notification to OneSignal API
     */
    private function send_notification($data) {
        $headers = array(
            'Content-Type: application/json; charset=utf-8',
            'Authorization: Basic ' . $this->rest_api_key
        );
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $this->api_url);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        
        $response = curl_exec($ch);
        $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($http_code !== 200) {
            error_log('Texas Roadhouse: HTTP Error ' . $http_code . ' - Response: ' . $response);
            return false;
        }
        
        return $response;
    }
    
    /**
     * Add admin menu
     */
    public function add_admin_menu() {
        add_options_page(
            'Email Notifications Settings',
            'Email Notifications',
            'manage_options',
            'tr-email-notifications',
            array($this, 'options_page')
        );
    }
    
    /**
     * Initialize settings
     */
    public function settings_init() {
        register_setting('tr_email_notifications', 'tr_onesignal_rest_api_key');
        
        add_settings_section(
            'tr_email_notifications_section',
            'OneSignal Configuration',
            null,
            'tr_email_notifications'
        );
        
        add_settings_field(
            'tr_onesignal_rest_api_key',
            'OneSignal REST API Key',
            array($this, 'rest_api_key_render'),
            'tr_email_notifications',
            'tr_email_notifications_section'
        );
    }
    
    /**
     * Render REST API key field
     */
    public function rest_api_key_render() {
        $value = get_option('tr_onesignal_rest_api_key', '');
        ?>
        <input type="password" name="tr_onesignal_rest_api_key" value="<?php echo esc_attr($value); ?>" style="width: 400px;" />
        <p class="description">Enter your OneSignal REST API Key from Settings → Keys & IDs</p>
        <?php
    }
    
    /**
     * AJAX handler for test email
     */
    public function send_test_email() {
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        // Test with specific email instead of segments
        $test_data = array(
            'app_id' => $this->app_id,
            'include_email_tokens' => array('cdwburhan@gmail.com'), // Your specific email
            'email_subject' => 'Test Email: Texas Roadhouse Menu Updates',
            'email_body' => $this->generate_test_email_template(),
            'email_from_name' => 'Texas Roadhouse Menu Updates',
            'email_from_address' => 'notifications@texasroadhouse-menus.us',
            'email_preheader' => 'This is a test email to verify your email notification system.',
            'email_reply_to_address' => 'info@texasroadhouse-menus.us'
        );
        
        $response = $this->send_notification($test_data);
        
        if ($response) {
            echo '<div class="notice notice-success"><p>✅ Test email sent successfully!</p></div>';
        } else {
            echo '<div class="notice notice-error"><p>❌ Failed to send test email. Check your API key.</p></div>';
        }
        
        wp_die();
    }
    
    /**
     * AJAX handler for test push notification
     */
    public function send_test_push() {
        if (!current_user_can('manage_options')) {
            wp_die('Unauthorized');
        }
        
        $test_data = array(
            'app_id' => $this->app_id,
            'included_segments' => array('All'),
            'headings' => array('en' => 'Test Push Notification'),
            'contents' => array('en' => 'This is a test push notification from Texas Roadhouse Menus!'),
            'url' => 'https://texasroadhouse-menus.us'
        );
        
        $response = $this->send_notification($test_data);
        
        if ($response) {
            echo '<div class="notice notice-success"><p>✅ Test push notification sent successfully!</p></div>';
        } else {
            echo '<div class="notice notice-error"><p>❌ Failed to send test push notification. Check your API key.</p></div>';
        }
        
        wp_die();
    }
    
    /**
     * Send welcome email to new subscriber
     */
    public function send_welcome_email() {
        // Get email from AJAX request
        $email = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
        
        if (empty($email) || !is_email($email)) {
            wp_send_json_error('Invalid email address');
            return;
        }
        
        // Skip if REST API key is not configured
        if (empty($this->rest_api_key)) {
            wp_send_json_error('OneSignal not configured');
            return;
        }
        
        // Generate welcome email content
        $email_subject = "Welcome to Texas Roadhouse Menu Updates! 🍖";
        $email_content = $this->generate_welcome_email_template($email);
        
        // OneSignal welcome email API payload
        $notification_data = array(
            'app_id' => $this->app_id,
            'include_email_tokens' => array($email),
            'email_subject' => $email_subject,
            'email_body' => $email_content,
            'email_from_name' => 'Texas Roadhouse Menu Updates',
            'email_from_address' => 'notifications@texasroadhouse-menus.us',
            'email_preheader' => 'Thank you for subscribing to Texas Roadhouse menu updates and exclusive offers!',
            'email_reply_to_address' => 'info@texasroadhouse-menus.us',
            'disable_email_click_tracking' => false,
            'disable_email_open_tracking' => false,
        );
        
        // Send the welcome email
        $response = $this->send_notification($notification_data);
        
        if ($response) {
            $response_body = json_decode($response, true);
            if (isset($response_body['id'])) {
                error_log('Texas Roadhouse: Welcome email sent to ' . $email);
                wp_send_json_success('Welcome email sent successfully!');
            } else {
                error_log('Texas Roadhouse: Failed to send welcome email to ' . $email . ' - ' . $response);
                wp_send_json_error('Failed to send welcome email');
            }
        } else {
            wp_send_json_error('Failed to send welcome email');
        }
        
        wp_die();
    }
    
    /**
     * Options page
     */
    public function options_page() {
        ?>
        <div class="wrap">
            <h1>📧 Texas Roadhouse Email Notifications</h1>
            
            <form action="options.php" method="post">
                <?php
                settings_fields('tr_email_notifications');
                do_settings_sections('tr_email_notifications');
                submit_button();
                ?>
            </form>
            
            <div class="card">
                <h2>🧪 Test Notifications</h2>
                <p>Test your email and push notification system:</p>
                
                <div id="test-results"></div>
                
                <p>
                    <button type="button" id="test-email-btn" class="button button-primary">📧 Send Test Email</button>
                    <button type="button" id="test-push-btn" class="button button-secondary">🔔 Send Test Push Notification</button>
                    <button type="button" id="test-welcome-btn" class="button">👋 Send Test Welcome Email</button>
                </p>
            </div>
            
            <div class="card">
                <h2>📊 System Status</h2>
                <table class="widefat">
                    <tr>
                        <td><strong>OneSignal App ID:</strong></td>
                        <td><?php echo esc_html($this->app_id); ?></td>
                    </tr>
                    <tr>
                        <td><strong>API Key Status:</strong></td>
                        <td>
                            <?php if (!empty($this->rest_api_key)): ?>
                                <span style="color: green;">✅ Configured</span>
                            <?php else: ?>
                                <span style="color: red;">❌ Not Configured</span>
                            <?php endif; ?>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Email From:</strong></td>
                        <td>notifications@texasroadhouse-menus.us</td>
                    </tr>
                    <tr>
                        <td><strong>Website URL:</strong></td>
                        <td>https://texasroadhouse-menus.us</td>
                    </tr>
                </table>
            </div>
            
            <div class="card">
                <h2>📝 How It Works</h2>
                <ol>
                    <li><strong>Add your OneSignal REST API Key</strong> above and save</li>
                    <li><strong>Test</strong> using the buttons above to verify everything works</li>
                    <li><strong>Publish blog posts</strong> - emails and push notifications send automatically</li>
                    <li><strong>Monitor</strong> performance in OneSignal dashboard</li>
                </ol>
            </div>
        </div>
        
        <script>
        jQuery(document).ready(function($) {
            $('#test-email-btn').click(function() {
                $('#test-results').html('<p>📧 Sending test email...</p>');
                $.post(ajaxurl, {action: 'send_test_email'}, function(response) {
                    $('#test-results').html(response);
                });
            });
            
            $('#test-push-btn').click(function() {
                $('#test-results').html('<p>🔔 Sending test push notification...</p>');
                $.post(ajaxurl, {action: 'send_test_push'}, function(response) {
                    $('#test-results').html(response);
                });
            });
            
            $('#test-welcome-btn').click(function() {
                var testEmail = prompt('Enter email address for welcome email test:', 'cdwburhan@gmail.com');
                if (testEmail) {
                    $('#test-results').html('<p>👋 Sending test welcome email to ' + testEmail + '...</p>');
                    $.post(ajaxurl, {action: 'send_welcome_email', email: testEmail}, function(response) {
                        $('#test-results').html(response);
                    });
                }
            });
        });
        </script>
        <?php
    }
}

// Initialize the email notifications system
new TexasRoadhouseEmailNotifications();

/**
 * Add meta box to post editor
 */
add_action('add_meta_boxes', 'tr_add_notification_meta_box');
function tr_add_notification_meta_box() {
    add_meta_box(
        'tr-notifications',
        '📧 Email & Push Notifications',
        'tr_notification_meta_box_callback',
        array('post', 'page'),
        'side',
        'high'
    );
}

function tr_notification_meta_box_callback($post) {
    $email_sent = get_post_meta($post->ID, '_tr_email_notification_sent', true);
    $push_sent = get_post_meta($post->ID, '_tr_push_notification_sent', true);
    $email_id = get_post_meta($post->ID, '_tr_email_notification_id', true);
    $push_id = get_post_meta($post->ID, '_tr_push_notification_id', true);
    
    echo '<div style="margin: 10px 0;">';
    echo '<h4>📧 Email Notification:</h4>';
    if ($email_sent) {
        echo '<span style="color: green;">✅ Sent</span>';
        if ($email_id) {
            echo '<br><small>ID: ' . esc_html($email_id) . '</small>';
        }
    } else {
        echo '<span style="color: orange;">⏳ Will send when published</span>';
    }
    echo '</div>';
    
    echo '<div style="margin: 10px 0;">';
    echo '<h4>🔔 Push Notification:</h4>';
    if ($push_sent) {
        echo '<span style="color: green;">✅ Sent</span>';
        if ($push_id) {
            echo '<br><small>ID: ' . esc_html($push_id) . '</small>';
        }
    } else {
        echo '<span style="color: orange;">⏳ Will send when published</span>';
    }
    echo '</div>';
}
?>

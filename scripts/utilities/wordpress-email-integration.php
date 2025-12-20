<?php
/**
 * Texas Roadhouse OneSignal Email Integration
 * Automatically sends email notifications when new blog posts are published
 * 
 * Installation: Add to functions.php or create as a plugin
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class TexasRoadhouseEmailNotifications {
    
    private $onesignal_app_id;
    private $onesignal_rest_api_key;
    
    public function __construct() {
        $this->onesignal_app_id = '7629b842-fb4e-4821-a9dd-e60ca450a208';
        $this->onesignal_rest_api_key = get_option('tr_onesignal_rest_api_key', '');
        
        // Hook into WordPress
        add_action('transition_post_status', array($this, 'send_email_on_publish'), 10, 3);
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_init', array($this, 'settings_init'));
    }
    
    /**
     * Send email notification when post is published
     */
    public function send_email_on_publish($new_status, $old_status, $post) {
        // Only send for blog posts that are being published for the first time
        if ($new_status === 'publish' && $old_status !== 'publish' && $post->post_type === 'post') {
            $this->send_blog_notification($post);
        }
    }
    
    /**
     * Send OneSignal email notification
     */
    private function send_blog_notification($post) {
        if (empty($this->onesignal_rest_api_key)) {
            error_log('OneSignal REST API key not configured');
            return false;
        }
        
        $post_url = get_permalink($post->ID);
        $post_excerpt = wp_trim_words(get_the_excerpt($post), 30);
        $featured_image = get_the_post_thumbnail_url($post->ID, 'large');
        
        // Email content
        $email_subject = "New Blog Post: " . $post->post_title;
        $email_content = $this->generate_email_template($post, $post_url, $post_excerpt, $featured_image);
        
        // OneSignal API payload
        $notification_data = array(
            'app_id' => $this->onesignal_app_id,
            'included_segments' => array('Subscribed Users'),
            'email_subject' => $email_subject,
            'email_body' => $email_content,
            'email_from_name' => 'Texas Roadhouse Menu Updates',
            'email_from_address' => 'notifications@texasroadhouse-menus.us',
            'email_preheader' => $post_excerpt,
            'email_reply_to_address' => 'info@texasroadhouse-menus.us',
            'disable_email_click_tracking' => false,
            'disable_email_open_tracking' => false,
        );
        
        // Send notification
        $response = $this->send_onesignal_request($notification_data);
        
        // Log the result
        if ($response) {
            update_post_meta($post->ID, '_email_notification_sent', current_time('mysql'));
            error_log("Email notification sent for post: " . $post->post_title);
        } else {
            error_log("Failed to send email notification for post: " . $post->post_title);
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
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title><?php echo esc_html($post->post_title); ?></title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                .container { max-width: 600px; margin: 0 auto; background: #fff; }
                .header { background: #110302; color: #FCD705; padding: 20px; text-align: center; }
                .content { padding: 30px 20px; }
                .featured-image { width: 100%; height: auto; border-radius: 8px; margin: 20px 0; }
                .cta-button { 
                    display: inline-block; 
                    background: #FCD705; 
                    color: #110302; 
                    padding: 15px 30px; 
                    text-decoration: none; 
                    border-radius: 8px; 
                    font-weight: bold; 
                    margin: 20px 0;
                }
                .footer { background: #f8f8f8; padding: 20px; text-align: center; font-size: 12px; color: #666; }
                .social-links { margin: 20px 0; }
                .social-links a { margin: 0 10px; color: #FCD705; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1><?php echo esc_html($site_name); ?></h1>
                    <p>Fresh Menu Updates & Food News</p>
                </div>
                
                <div class="content">
                    <h2><?php echo esc_html($post->post_title); ?></h2>
                    
                    <?php if ($featured_image): ?>
                        <img src="<?php echo esc_url($featured_image); ?>" alt="<?php echo esc_attr($post->post_title); ?>" class="featured-image">
                    <?php endif; ?>
                    
                    <p><?php echo esc_html($excerpt); ?></p>
                    
                    <p>We've just published a new blog post that we think you'll find interesting! Click below to read the full article and discover the latest updates about Texas Roadhouse menu items, prices, and delicious food news.</p>
                    
                    <div style="text-align: center;">
                        <a href="<?php echo esc_url($post_url); ?>" class="cta-button">Read Full Article →</a>
                    </div>
                    
                    <div class="social-links">
                        <p><strong>Stay Connected:</strong></p>
                        <a href="<?php echo esc_url($site_url); ?>">Visit Our Website</a> |
                        <a href="<?php echo esc_url($site_url . '/menus-prices'); ?>">Browse Menu & Prices</a> |
                        <a href="<?php echo esc_url($site_url . '/coupons'); ?>">View Current Coupons</a>
                    </div>
                </div>
                
                <div class="footer">
                    <p>You're receiving this email because you subscribed to updates from <?php echo esc_html($site_name); ?>.</p>
                    <p>© <?php echo date('Y'); ?> <?php echo esc_html($site_name); ?>. All rights reserved.</p>
                    <p><a href="<?php echo esc_url($site_url); ?>" style="color: #666;">Visit our website</a> | 
                       <a href="#" style="color: #666;">Unsubscribe</a></p>
                </div>
            </div>
        </body>
        </html>
        <?php
        return ob_get_clean();
    }
    
    /**
     * Send request to OneSignal API
     */
    private function send_onesignal_request($data) {
        $response = wp_remote_post('https://onesignal.com/api/v1/notifications', array(
            'method' => 'POST',
            'timeout' => 45,
            'headers' => array(
                'Content-Type' => 'application/json; charset=utf-8',
                'Authorization' => 'Basic ' . $this->onesignal_rest_api_key
            ),
            'body' => json_encode($data)
        ));
        
        if (is_wp_error($response)) {
            error_log('OneSignal API Error: ' . $response->get_error_message());
            return false;
        }
        
        $body = wp_remote_retrieve_body($response);
        $result = json_decode($body, true);
        
        if (isset($result['id'])) {
            return $result['id'];
        } else {
            error_log('OneSignal API Response: ' . $body);
            return false;
        }
    }
    
    /**
     * Add admin menu for settings
     */
    public function add_admin_menu() {
        add_options_page(
            'Email Notifications Settings',
            'Email Notifications',
            'manage_options',
            'tr-email-notifications',
            array($this, 'settings_page')
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
     * Settings page HTML
     */
    public function settings_page() {
        ?>
        <div class="wrap">
            <h1>Email Notifications Settings</h1>
            <form action="options.php" method="post">
                <?php
                settings_fields('tr_email_notifications');
                do_settings_sections('tr_email_notifications');
                submit_button();
                ?>
            </form>
            
            <div class="card" style="margin-top: 20px;">
                <h3>How to Get Your REST API Key:</h3>
                <ol>
                    <li>Go to <a href="https://app.onesignal.com" target="_blank">OneSignal Dashboard</a></li>
                    <li>Select your "Texas Roadhouse Menu Updates" app</li>
                    <li>Go to Settings → Keys & IDs</li>
                    <li>Copy the "REST API Key" (not the App ID)</li>
                    <li>Paste it in the field above and save</li>
                </ol>
            </div>
            
            <div class="card" style="margin-top: 20px;">
                <h3>Test Email Notification:</h3>
                <p>Publish or update any blog post to test the email notification system.</p>
                <p><strong>Status:</strong> 
                    <?php if (get_option('tr_onesignal_rest_api_key')): ?>
                        <span style="color: green;">✓ API Key Configured</span>
                    <?php else: ?>
                        <span style="color: red;">✗ API Key Required</span>
                    <?php endif; ?>
                </p>
            </div>
        </div>
        <?php
    }
}

// Initialize the email notifications system
new TexasRoadhouseEmailNotifications();

/**
 * Manual notification function for testing
 */
function tr_send_test_email_notification() {
    if (current_user_can('manage_options')) {
        $recent_post = get_posts(array('numberposts' => 1))[0];
        if ($recent_post) {
            $email_system = new TexasRoadhouseEmailNotifications();
            $email_system->send_email_on_publish('publish', 'draft', $recent_post);
            wp_die('Test email notification sent!');
        }
    }
}
add_action('wp_ajax_tr_test_email', 'tr_send_test_email_notification');
?>

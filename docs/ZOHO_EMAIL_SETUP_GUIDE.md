# 📧 Zoho Email Setup for OneSignal Notifications
## Texas Roadhouse Menu - Professional Email Configuration

### 🎯 **OVERVIEW**
This guide will help you configure your new Zoho email account to work seamlessly with OneSignal for sending professional blog notification emails.

---

## 📧 **Step 1: Create Email Aliases in Zoho**

### **In Your Current Zoho Screen:**

Click **"+ Add"** and create these aliases:

#### **Primary Notification Email:**
```
Alias Name: notifications
Full Address: notifications@texasroadhouse-menus.us
Purpose: Blog post notifications and automated updates
```

#### **Reply Email (Optional but Recommended):**
```
Alias Name: info
Full Address: info@texasroadhouse-menus.us
Purpose: Customer inquiries and replies
```

#### **No-Reply Email (Optional):**
```
Alias Name: noreply
Full Address: noreply@texasroadhouse-menus.us
Purpose: Automated emails where replies aren't expected
```

---

## 🔐 **Step 2: Create App-Specific Password**

For security, create a dedicated password for OneSignal:

### **In Zoho:**
1. Go to **Zoho Account Settings** (click your profile)
2. Navigate to **Security → App Passwords**
3. Click **"Generate New Password"**
4. **Application Name:** `OneSignal Email Service`
5. **Select Services:** Choose "Mail"
6. Click **"Generate"**
7. **Save this password** - you'll need it for OneSignal

---

## 🌐 **Step 3: Configure Domain Authentication**

### **DNS Records for Your Domain Provider:**

You'll need to add these DNS records to your domain (where you bought texasroadhouse-menus.us):

#### **SPF Record:**
```
Type: TXT
Name: @
Value: v=spf1 include:zoho.com ~all
```

#### **DKIM Record:**
```
Type: TXT
Name: zohomailcname._domainkey
Value: [Zoho will provide this in Mail Admin → Email Configuration → DKIM]
```

#### **DMARC Record:**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:info@texasroadhouse-menus.us
```

---

## ⚙️ **Step 4: Configure OneSignal Email Settings**

### **In OneSignal Dashboard:**

#### **Email Configuration Form:**
```
Default Sender Email: notifications@texasroadhouse-menus.us
Default Sender Name: Texas Roadhouse Menu Updates
Default Reply-To: info@texasroadhouse-menus.us
Sending Domain: texasroadhouse-menus.us
```

#### **SMTP Settings (if required):**
```
SMTP Server: smtp.zoho.com
Port: 587 (TLS) or 465 (SSL)
Username: notifications@texasroadhouse-menus.us
Password: [Your app-specific password from Step 2]
Encryption: TLS
```

---

## 🛠 **Step 5: Install WordPress Integration**

### **Method 1: Add to functions.php**

1. **WordPress Admin → Appearance → Theme Editor**
2. Select **functions.php**
3. Copy content from `wordpress-email-integration.php`
4. Paste at the end of functions.php
5. **Save Changes**

### **Method 2: Create Plugin (Recommended)**

1. Create folder: `/wp-content/plugins/tr-email-notifications/`
2. Create file: `tr-email-notifications.php`
3. Add plugin header:
```php
<?php
/**
 * Plugin Name: Texas Roadhouse Email Notifications
 * Description: Professional email notifications for blog posts via Zoho & OneSignal
 * Version: 1.0.0
 * Author: Texas Roadhouse Menu
 */

// Prevent direct access
if (!defined('ABSPATH')) exit;

// Include the integration code here
```
4. Add the integration code
5. **Activate in Plugins → Installed Plugins**

---

## 🔑 **Step 6: Configure WordPress Settings**

### **After Installing Integration:**

1. **WordPress Admin → Settings → Email Notifications**
2. **OneSignal REST API Key:** [Get from OneSignal Settings → Keys & IDs]
3. **Click "Save Changes"**
4. **Verify Status:** Should show "✓ API Key Configured"

---

## 🧪 **Step 7: Testing Your Setup**

### **Test Email Delivery:**

#### **Method 1: Publish New Post**
1. Create a new blog post
2. Add featured image and content
3. **Publish** the post
4. Check Zoho sent items for the notification email

#### **Method 2: Manual Test**
1. **WordPress Admin → Settings → Email Notifications**
2. Look for "Send Test Email" option
3. Or update an existing published post

### **Verify Email Appearance:**
- Professional Texas Roadhouse branding
- Featured image displays correctly
- Call-to-action button works
- Mobile-responsive design
- Unsubscribe link present

---

## 📊 **Step 8: Monitor Email Performance**

### **Zoho Mail Analytics:**
- **Sent Items** - View all outgoing emails
- **Delivery Reports** - Check delivery status
- **Bounce Reports** - Monitor failed deliveries

### **OneSignal Analytics:**
- **Messages** - View email campaign performance
- **Delivery Reports** - Open rates and click rates
- **Audience** - Email subscriber growth

---

## 🔧 **Advanced Configuration**

### **Email Template Customization:**

The email template includes:
- **Professional header** with Texas Roadhouse branding
- **Featured image** from blog post
- **Post excerpt** (first 30 words)
- **Call-to-action button** linking to full post
- **Social links** (Menu, Coupons, Website)
- **Professional footer** with unsubscribe

### **Delivery Optimization:**
```php
// In wordpress-email-integration.php, these are configured:
'email_reply_to_address' => 'info@texasroadhouse-menus.us',
'disable_email_click_tracking' => false,
'disable_email_open_tracking' => false,
```

---

## 🚨 **Troubleshooting Common Issues**

### **"Email not sending"**
**Solution:**
- Verify Zoho app password is correct
- Check OneSignal REST API key
- Ensure domain DNS records are properly configured
- Verify email aliases are active in Zoho

### **"Domain authentication failed"**
**Solution:**
- DNS changes can take 24-48 hours to propagate
- Double-check SPF, DKIM, and DMARC records
- Use DNS checker tools to verify records
- Contact your domain provider if needed

### **"WordPress integration not working"**
**Solution:**
- Check PHP error logs: `/wp-content/debug.log`
- Verify functions.php syntax is correct
- Ensure OneSignal app ID matches in code
- Test API connection manually

### **"Emails going to spam"**
**Solution:**
- Complete domain authentication (SPF, DKIM, DMARC)
- Use consistent "From" name and email
- Include unsubscribe link (already included)
- Monitor bounce rates and clean subscriber list

---

## 📋 **Pre-Launch Checklist**

### **Zoho Configuration:**
- [ ] Email aliases created (notifications@, info@)
- [ ] App-specific password generated
- [ ] Domain DNS records added (SPF, DKIM, DMARC)
- [ ] Email sending limits understood

### **OneSignal Configuration:**
- [ ] Email configuration completed
- [ ] Domain authentication verified
- [ ] REST API key obtained
- [ ] Test email sent successfully

### **WordPress Integration:**
- [ ] Integration code installed
- [ ] REST API key configured
- [ ] Settings page accessible
- [ ] Test post notification sent
- [ ] Email template displays correctly

### **Email Compliance:**
- [ ] Unsubscribe link working
- [ ] Professional sender information
- [ ] Clear email purpose and branding
- [ ] Privacy policy link included

---

## 💡 **Professional Tips**

### **Email Best Practices:**
1. **Consistent Schedule** - Don't overwhelm subscribers
2. **Quality Content** - Only send for valuable posts
3. **Mobile Optimization** - Template is already mobile-responsive
4. **Clear Subject Lines** - "New Blog Post: [Title]" format
5. **Engagement Tracking** - Monitor open and click rates

### **Zoho Limits:**
- **Free Plan:** 5GB storage, 25MB attachment limit
- **Paid Plans:** Higher limits and advanced features
- **Daily Sending Limits:** Check your plan's email sending limits

### **Deliverability Tips:**
- Use your domain email (not free email services)
- Maintain clean subscriber lists
- Monitor bounce rates and spam complaints
- Include physical address in email footer (recommended)

---

## 🔗 **Useful Resources**

### **Zoho Documentation:**
- [Zoho Mail Setup Guide](https://www.zoho.com/mail/help/)
- [Domain Authentication](https://www.zoho.com/mail/help/adminconsole/domain-authentication.html)
- [App Passwords](https://www.zoho.com/mail/help/app-passwords.html)

### **OneSignal Documentation:**
- [Email Setup Guide](https://documentation.onesignal.com/docs/email-setup)
- [Email API Reference](https://documentation.onesignal.com/reference/create-notification)

### **DNS Tools:**
- [DNS Checker](https://dnschecker.org/)
- [MX Toolbox](https://mxtoolbox.com/)
- [Mail Tester](https://www.mail-tester.com/)

---

## 🎉 **Congratulations!**

Your professional email notification system is now ready! Every time you publish a new blog post, your subscribers will automatically receive a beautifully designed email with:

✅ **Professional Texas Roadhouse branding**  
✅ **Mobile-responsive design**  
✅ **Featured images and excerpts**  
✅ **Direct links to your content**  
✅ **Full analytics and tracking**  

Your email setup will help build a loyal readership and drive more traffic to your Texas Roadhouse menu website!

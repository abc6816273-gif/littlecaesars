# 🌐 Vercel + OneSignal DNS Setup Guide
## Texas Roadhouse Menu - Email Domain Authentication

### 🎯 **OVERVIEW**
Since your domain `texasroadhouse-menus.us` is hosted on Vercel, you need to add OneSignal DNS records to your Vercel domain settings (or external DNS provider) for email authentication.

---

## 🔧 **Method 1: Vercel DNS (If Supported)**

### **Step 1: Access Vercel Domain Settings**
1. Go to **Vercel Dashboard** (vercel.com)
2. Navigate to your **Texas Roadhouse Menu** project
3. Go to **Settings → Domains**
4. Find `texasroadhouse-menus.us`
5. Look for **"DNS Records"** or **"Manage DNS"** option

### **Step 2: Add OneSignal DNS Records**

Add these records exactly as shown in your OneSignal dashboard:

#### **SPF Record (Email Authentication):**
```
Type: TXT
Name: mail
Value: v=spf1 include:spf.onesignal.email include:mailgun.org ~all
TTL: 3600 (default)
```

#### **DKIM Records (Email Signing):**
```
Type: CNAME
Name: os1._domainkey.mail
Value: dkim1.f9cd129a-fe95-4c92-b08e-6e561ea0686e.onesignal.email
TTL: 3600
```

```
Type: CNAME
Name: os2._domainkey.mail
Value: dkim2.f9cd129a-fe95-4c92-b08e-6e561ea0686e.onesignal.email
TTL: 3600
```

#### **DMARC Record (Email Policy):**
```
Type: TXT
Name: _dmarc.mail
Value: v=DMARC1; p=none;
TTL: 3600
```

#### **MX Records (Mail Routing):**
```
Type: MX
Name: mail
Value: mxa.onesignal.email
Priority: 10
TTL: 3600
```

```
Type: MX
Name: mail
Value: mxb.onesignal.email
Priority: 10
TTL: 3600
```

#### **CNAME Record (Click Tracking):**
```
Type: CNAME
Name: email.mail
Value: click.tr.onesignal.email
TTL: 3600
```

---

## 🌐 **Method 2: Cloudflare DNS (Recommended)**

If Vercel doesn't support all DNS record types, use Cloudflare:

### **Step 1: Setup Cloudflare**
1. **Create account** at cloudflare.com (free)
2. **Add site**: `texasroadhouse-menus.us`
3. **Choose Free plan**
4. **Copy nameservers** provided by Cloudflare

### **Step 2: Update Nameservers**
1. **Go to your domain registrar** (where you bought the domain)
2. **Find DNS/Nameserver settings**
3. **Replace current nameservers** with Cloudflare's:
   ```
   Example:
   ns1.cloudflare.com
   ns2.cloudflare.com
   ```

### **Step 3: Add DNS Records in Cloudflare**
1. **Go to Cloudflare Dashboard**
2. **Select your domain**
3. **Go to DNS → Records**
4. **Add all OneSignal records** (same as above)

### **Step 4: Point Back to Vercel**
Add these records to keep your website on Vercel:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
Proxy: Orange cloud OFF (DNS only)

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
Proxy: Orange cloud OFF (DNS only)
```

---

## 🔍 **Method 3: Domain Registrar DNS**

If you prefer to use your domain registrar:

### **Common Domain Providers:**
- **GoDaddy**: DNS Management → DNS Records
- **Namecheap**: Domain List → Manage → Advanced DNS
- **Google Domains**: DNS → Custom records
- **Hover**: DNS → Add Record

### **Add OneSignal Records:**
Use the same DNS records listed above, but in your registrar's interface.

---

## ✅ **Verification Steps**

### **Step 1: Wait for Propagation**
- **DNS changes take 15 minutes to 48 hours**
- **Most records propagate within 1-2 hours**

### **Step 2: Check DNS Propagation**
Use these tools to verify:
- **DNS Checker**: dnschecker.org
- **MX Toolbox**: mxtoolbox.com
- **Dig Tool**: dig mail.texasroadhouse-menus.us MX

### **Step 3: Verify in OneSignal**
1. **Return to OneSignal dashboard**
2. **Click "Continue"** on the DNS setup page
3. **OneSignal will verify** all records automatically
4. **Proceed to next step** once verified

---

## 🚨 **Troubleshooting**

### **"Vercel doesn't support MX records"**
**Solution**: Use Cloudflare or your domain registrar for DNS

### **"DNS records not found"**
**Solution**: 
- Double-check spelling and values
- Wait longer for propagation
- Use DNS checker tools

### **"Website stops working"**
**Solution**:
- Ensure you have proper A/CNAME records pointing to Vercel
- Check Vercel domain settings
- Contact Vercel support if needed

---

## 🎯 **Recommended Approach**

### **Best Setup for Your Use Case:**

1. **Use Cloudflare for DNS** (free, full-featured)
2. **Add all OneSignal records** to Cloudflare
3. **Keep website hosting** on Vercel
4. **Point domain to Vercel** via Cloudflare CNAME
5. **Get best of both worlds**: Full DNS control + Vercel hosting

### **Benefits:**
✅ **Full DNS record support** (MX, CNAME, TXT, etc.)  
✅ **Free CDN and security** from Cloudflare  
✅ **Better email deliverability** with proper DNS  
✅ **Keep Vercel hosting** for your website  
✅ **Professional email setup** with OneSignal  

---

## 📋 **Quick Action Plan**

### **Immediate Steps:**
1. **Check if Vercel supports MX records** in your DNS settings
2. **If yes**: Add all OneSignal records to Vercel
3. **If no**: Set up Cloudflare DNS (recommended)
4. **Add all DNS records** from your OneSignal screen
5. **Wait 2-4 hours** for propagation
6. **Verify in OneSignal** dashboard

### **Long-term Setup:**
- **Cloudflare DNS** for full control
- **Vercel hosting** for website
- **OneSignal email** for notifications
- **Zoho email** for business correspondence

---

## 🔗 **Useful Links**

- **Vercel DNS Docs**: vercel.com/docs/concepts/projects/domains
- **Cloudflare Setup**: cloudflare.com/dns
- **OneSignal Email Docs**: documentation.onesignal.com/docs/email-setup
- **DNS Checker Tool**: dnschecker.org

---

**🎉 Once DNS is configured, your professional email notification system will be ready to send beautiful emails to your Texas Roadhouse menu subscribers!**

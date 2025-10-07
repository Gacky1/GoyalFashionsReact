# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month)

## Step 2: Add Email Service
1. Go to Email Services
2. Click "Add New Service"
3. Choose Gmail and connect your `gfpl.skill@gmail.com` account

## Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template:

```
Subject: Contact Form: {{subject}}

New message from Goyal Fashions website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Division: {{division}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Goyal Fashions contact form.
```

## Step 4: Update Contact.jsx
Replace these values in `src/pages/Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'; // From EmailJS dashboard
const templateId = 'YOUR_TEMPLATE_ID'; // From EmailJS dashboard  
const publicKey = 'YOUR_PUBLIC_KEY'; // From EmailJS dashboard
```

## Step 5: Test the Form
1. Deploy to Cloudflare
2. Test the contact form
3. Check if emails are received at gfpl.skill@gmail.com

## Note about File Uploads
EmailJS free plan doesn't support file attachments. For CV uploads with Career inquiries, consider:
1. Upgrading to EmailJS paid plan ($15/month)
2. Using a separate file upload service like Cloudinary
3. Or mention in the email that CV should be sent separately

## Alternative: Formspree
If you prefer, you can also use Formspree:
1. Go to formspree.io
2. Create form endpoint
3. Replace EmailJS code with simple form action
# 📧 EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Follow the setup instructions to connect your Gmail account
5. **Copy the Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: Portfolio Contact: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key** (e.g., `user_abc123def456`)

## Step 5: Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_actual_service_id',
  TEMPLATE_ID: 'template_your_actual_template_id', 
  PUBLIC_KEY: 'your_actual_public_key',
}
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Go to the Contact section
3. Fill out the form and click "Send Message"
4. Check your Gmail inbox for the message

## Troubleshooting
- Make sure all IDs are correct (no extra spaces)
- Check that your Gmail account is properly connected
- Verify the template variables match exactly
- Check browser console for any error messages

## Free Tier Limits
- 200 emails per month
- Perfect for portfolio contact forms
- Upgrade if you need more volume

# 🔐 Secure EmailJS Setup Guide

## Step 1: Create Environment File
Create a `.env` file in your project root (this file is already in .gitignore):

```bash
# Create the .env file
touch .env
```

## Step 2: Add Your EmailJS Credentials
Add your actual EmailJS credentials to the `.env` file:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_0fu50fv
VITE_EMAILJS_TEMPLATE_ID=template_contact
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

## Step 3: Get Your Missing Credentials

### Template ID:
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Click "Email Templates"
3. Create a new template or use existing one
4. Copy the Template ID (e.g., `template_abc123`)

### Public Key:
1. Go to "Account" → "General" in EmailJS dashboard
2. Copy your Public Key (e.g., `user_abc123def456`)

## Step 4: Update .env File
Replace the placeholder values in your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=service_0fu50fv
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 5: Test the Configuration
1. Restart your dev server: `npm run dev`
2. Go to Contact section
3. Fill out the form and test

## Security Notes:
- ✅ `.env` file is already in `.gitignore`
- ✅ Secrets won't be committed to Git
- ✅ Environment variables are prefixed with `VITE_` for Vite
- ✅ Fallback values are provided for development

## What You Still Need:
1. **Template ID** from EmailJS dashboard
2. **Public Key** from EmailJS account settings

Once you have these, just update the `.env` file and you're all set! 🎉

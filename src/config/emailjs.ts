// EmailJS Configuration
// Environment variables are used to keep secrets secure

export const EMAILJS_CONFIG = {
  SERVICE_ID: (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || 'service_0fu50fv',
  TEMPLATE_ID: (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || 'template_contact',
  PUBLIC_KEY: (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || '',
}

// Instructions for setup:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create a new service (Gmail)
// 4. Create a new email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values above with your actual credentials
// 7. Update the template to include these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
//    - {{to_email}} - your email address

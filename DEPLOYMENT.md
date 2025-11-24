# Deployment Instructions

## Contact Form Setup (Resend)

Your contact forms are configured to use Resend for email delivery.

### Environment Variables

Add this to your hosting platform (Vercel/Netlify):

```
RESEND_API_KEY=re_aHbBzyV2_2UAJAqPgngcNVhYJp3i4HftM
```

### Vercel Deployment

1. Push your code to GitHub
2. Connect repository to Vercel
3. Add environment variable in Vercel dashboard: Settings → Environment Variables
4. Deploy!

### Netlify Deployment

1. Push your code to GitHub
2. Connect repository to Netlify
3. Add environment variable in Netlify dashboard: Site settings → Environment Variables
4. Deploy!

### Important Notes

- The API endpoint is at `/api/send-email`
- Emails are sent from `onboarding@resend.dev` (Resend default)
- To use a custom domain, verify it in Resend dashboard
- Free tier: 100 emails/day, 3,000/month

### Testing Locally

The forms will work immediately since the API key is hardcoded as a fallback. For production, make sure to add the environment variable to your hosting platform.


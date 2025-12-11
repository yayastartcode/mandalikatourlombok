# Quick Deployment Guide 🚀

## Deploy to Cloudflare Pages

### 1. Login to Cloudflare (First time only)
```bash
npx wrangler login
```

### 2. Deploy with one command
```bash
npm run deploy
```

That's it! Your site will be live on Cloudflare Pages.

## Manual Deploy (Alternative)

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# Deploy to Cloudflare
npx wrangler pages deploy dist --project-name=mandalikatour
```

## First Deployment Setup

When deploying for the first time, Wrangler will:
1. Create a new Pages project named "mandalikatour"
2. Upload all files from the `dist` folder
3. Provide you with a live URL (e.g., `mandalikatour.pages.dev`)

## Subsequent Deployments

For updates, just run:
```bash
npm run deploy
```

## Custom Domain

To use your custom domain `tourmandalikalombok.my.id`:

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **mandalikatour** → **Custom domains**
3. Click **"Set up a custom domain"**
4. Enter: `tourmandalikalombok.my.id`
5. Follow the DNS setup instructions

## Important: Before First Deploy

Update your contact information in:
```
src/config/contact.ts
```

Change:
- WhatsApp number
- Phone number
- Email addresses
- Social media links

## Need Help?

See detailed deployment guide: [DEPLOYMENT.md](./DEPLOYMENT.md)

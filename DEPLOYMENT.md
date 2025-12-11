# Deployment Guide - Mandalika Tour

## Prerequisites

- Node.js 20.19+ or 22.12+ (for local development)
- Cloudflare account
- Wrangler CLI installed (`npm install -g wrangler`)

## Cloudflare Pages Deployment

### Option 1: Deploy via Wrangler CLI

1. **Login to Cloudflare:**
   ```bash
   npx wrangler login
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy to Cloudflare Pages:**
   ```bash
   npx wrangler pages deploy dist --project-name=mandalikatour
   ```

### Option 2: Deploy via Cloudflare Dashboard

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Go to Cloudflare Dashboard:**
   - Navigate to Pages
   - Click "Create a project"
   - Connect to your Git repository (GitHub/GitLab)

3. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty if deploying entire repo)

4. **Environment Variables:**
   Set these in Cloudflare Dashboard if needed:
   - `NODE_VERSION`: `20.19` or `22.12`

### Option 3: Connect Git Repository (Recommended)

1. **Push to GitHub/GitLab**

2. **Connect to Cloudflare Pages:**
   - Go to Cloudflare Dashboard → Pages
   - Click "Connect to Git"
   - Select your repository
   - Configure build settings:
     ```
     Build command: npm run build
     Build output directory: dist
     ```

3. **Auto-deployment:**
   - Every push to main branch will trigger automatic deployment
   - Preview deployments for pull requests

## Configuration Files

### wrangler.jsonc
```jsonc
{
  "name": "mandalikatour",
  "compatibility_date": "2025-12-11",
  "assets": {
    "directory": "./dist"
  }
}
```

### _routes.json (for SPA routing)
Located in `public/_routes.json`:
```json
{
  "version": 1,
  "include": ["/*"],
  "exclude": ["/assets/*", "/images/*", "/vite.svg", "/favicon.png"]
}
```

This tells Cloudflare Pages to serve the SPA for all routes except static assets.

### _headers (for security)
Located in `public/_headers`:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-XSS-Protection: 1; mode=block
```

Adds security headers to all responses.

## Custom Domain Setup

1. **Add custom domain in Cloudflare Pages:**
   - Go to your project → Custom domains
   - Click "Set up a custom domain"
   - Enter your domain (e.g., `tourmandalikalombok.my.id`)

2. **Update DNS records:**
   - Add CNAME record pointing to your Pages URL

3. **Update SEO URLs:**
   After setting up custom domain, update these files:
   - `index.html` - Update og:url, twitter:url, canonical
   - `src/config/contact.ts` - Update company URL

## Before Deployment Checklist

- [ ] Update contact information in `src/config/contact.ts`:
  - WhatsApp number
  - Phone numbers
  - Email addresses
  - Physical address
  - Social media links

- [ ] Update domain URLs in `index.html`:
  - Open Graph URLs
  - Twitter URLs
  - Canonical URL
  - JSON-LD schema URL

- [ ] Test build locally:
  ```bash
  npm run build
  npm run preview
  ```

- [ ] Verify all images are loading from `/images/` folder

- [ ] Test all navigation links work

- [ ] Test WhatsApp buttons open correctly

## Post-Deployment

1. **Test the deployed site:**
   - Verify all sections load correctly
   - Test navigation links
   - Test WhatsApp buttons
   - Check mobile responsiveness
   - Verify SEO meta tags

2. **Monitor performance:**
   - Check Cloudflare Analytics
   - Monitor Core Web Vitals

3. **Submit to search engines:**
   - Google Search Console
   - Bing Webmaster Tools

## Troubleshooting

### Build Fails with Node Version Error
Update Node.js to 20.19+ or 22.12+:
```bash
nvm install 22
nvm use 22
```

### 404 Errors on Routes
Cloudflare Pages automatically handles SPA routing. If you experience issues:
1. Verify `_routes.json` is in `public/` folder
2. Rebuild: `npm run build`
3. Check that `dist/_routes.json` exists after build

### Images Not Loading
Verify images are in `public/images/` directory and referenced as `/images/filename.jpg`

## Support

For issues or questions about deployment, contact your development team.

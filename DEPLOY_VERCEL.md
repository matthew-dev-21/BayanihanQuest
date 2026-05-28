# Vercel Deployment Guide (BayanihanQuest)

This repository deploys the Vite + React site from `frontend/`.

The repo already includes a root [vercel.json](vercel.json) that tells Vercel how to build the Vite app inside `frontend/`.

## 1) Prerequisites

- Your code is pushed to GitHub: `https://github.com/matthew-dev-21/BayanihanQuest`
- You have a Vercel account (free tier works for static sites)

## 2) Create the Vercel Project

1. Go to Vercel Dashboard → **Add New…** → **Project**
2. Import the GitHub repo `matthew-dev-21/BayanihanQuest`
3. Vercel should detect the settings from [vercel.json](vercel.json)
4. Click **Deploy**

After a minute or two, you’ll get a URL like `https://<project>.vercel.app`.

## 3) Verify Build Settings (if Vercel asks)

If Vercel does not automatically pick up the root config, use these values:

- **Root Directory**: `frontend`
- **Framework Preset**: Vite
- **Install Command**: `npm install`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 4) SPA Routing (important)

This app is a single-page app (SPA). The repo’s [vercel.json](vercel.json) includes a rewrite to serve `index.html` for non-file routes.

- If you only use section scrolling (no React Router), this still doesn’t hurt.
- If you later add React Router routes like `/about`, this prevents 404s on refresh.

## 5) Environment Variables (optional)

If you later add API calls, follow Vite’s pattern:

- In Vercel Project → **Settings** → **Environment Variables**
- Add variables like:
  - `VITE_API_BASE_URL` = `https://your-api-host.example.com`

Then, in code you’d reference it via `import.meta.env.VITE_API_BASE_URL`.

After changing env vars, redeploy:

- Vercel → **Deployments** → **Redeploy** (or push a new commit)

## 6) Custom Domain (optional)

1. Vercel Project → **Settings** → **Domains**
2. Add your domain (e.g., `bayanihanquest.com`)
3. Follow Vercel’s DNS instructions (usually a CNAME or A record)

## 7) Common Issues

### Build fails on Vercel but works locally

- Ensure `package-lock.json` is committed (it is in this repo)
- Make sure Vercel uses Node 18+ (Vercel default is fine)
- Check the build logs in Vercel Deployments

### Images/CSS not loading

- Confirm assets are referenced via relative paths or imported through Vite
- The current build outputs assets into `dist/assets/` correctly

### Large repo / slow deploy

The repo includes several large images (game assets). If deploys feel slow, you can optimize images later, but it’s not required for a first deployment.

If you later add a backend API, the simplest approach is to host it separately (Render / Railway / Fly.io / Azure App Service) and set `VITE_API_BASE_URL` in Vercel.

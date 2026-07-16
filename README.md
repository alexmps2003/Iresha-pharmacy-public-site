# Iresha Pharmacy Public Site

The public website for Iresha Pharmacy in Wennappuwa, built with Next.js 16,
React 19, TypeScript, and the App Router.

## Local development

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands

- `npm run dev` starts the Next.js development server.
- `npm run build` creates the production build in `.next`.
- `npm run start` serves a completed production build.
- `npm run lint` checks the project with ESLint.

## Deploying to Vercel

Connect the repository to Vercel and keep the standard Next.js settings:

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: leave blank so Vercel uses `.next`

No vinext, Vite, Cloudflare Worker, or custom output-directory configuration is
required.

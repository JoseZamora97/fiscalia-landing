# Genia Ops — Enterprise AI

Public site for Genia Ops: enterprise AI, governance, human–AI and AI–AI orchestration, and AI-native businesses. https://geniaops.com

Closed release, invitation only. Contact: accounts@geniaops.com. No pricing is published.

## Develop

Next.js 16 App Router, React 19, Tailwind CSS 4, TypeScript.

```sh
npm ci
npm run dev
npm run build
npm run start
npx tsc --noEmit
```

## Content and routes

- English: `/`, `/use-cases`, `/use-cases/[slug]`, `/privacy`, `/terms`.
- Spanish: `/es`, `/es/casos-de-uso`, `/es/casos-de-uso/[slug]`, `/es/privacy`, `/es/terms`.
- Content dictionaries live in `src/content`; both locales have the same sections.
- Theme selection persists locally; the first visit follows the device preference.
- Separate solution pages: `/for/startups`, `/for/scaleups`, `/for/enterprises`, with Spanish equivalents under `/es`.
- The hero shows the actual product; CSS animates its ambient background and the explanatory workflow diagrams. Reduced motion disables continuous animation. No WebGL or third-party animation scripts.
- Product captures are paired by theme. English captures live in `public/shots/en`; Spanish captures live in `public/shots`.
- Privacy includes the Google API Services User Data Policy Limited Use disclosure. Public legal links remain accessible without authentication.

## Deployment

GitHub repository: `JoseZamora97/fiscalia-landing`. Vercel project: `geniaops-landing`; production branch: `main`.

Build and verify both locales, both themes, mobile navigation, legal pages and images before promoting. Use credentials injected by name from the project vault; never commit tokens.

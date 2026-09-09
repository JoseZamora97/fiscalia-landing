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
npm run typecheck
```

## Content and routes

- English: `/`, `/use-cases`, `/use-cases/[slug]`, `/privacy`, `/terms`.
- Spanish: `/es`, `/es/casos-de-uso`, `/es/casos-de-uso/[slug]`, `/es/privacy`, `/es/terms`.
- Content dictionaries live in `src/content`; both locales have the same sections.
- Theme selection persists locally; the first visit follows the device preference.
- Hero sculpture uses CSS 3D, respects reduced motion, and requires no WebGL or third-party scripts.
- Privacy includes the Google API Services User Data Policy Limited Use disclosure. Public legal links remain accessible without authentication.

## Deployment

GitHub repository: `JoseZamora97/fiscalia-landing`. Vercel project: `geniaops-landing`; production branch: `main`.

Build and verify both locales, both themes, mobile navigation, legal pages and images before promoting. Use credentials injected by name from the project vault; never commit tokens.

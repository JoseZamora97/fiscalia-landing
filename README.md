# geniaops.com

Holding page for Genia Ops: the wordmark and the slogan on black, nothing else.

The previous full landing (product sections, use cases, audience pages, ES/EN,
light/dark) lives on the `old` branch.

## Layout

```
src/app/layout.tsx    fonts (Geist, Zen Dots) and metadata
src/app/page.tsx      the wordmark and the slogan
src/app/globals.css   every style on the page
```

To change the slogan, edit the single `<p className="slogan">` in
`src/app/page.tsx` and the matching `description` in `src/app/layout.tsx`.

## Local

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Deploys to Vercel (project `geniaops-landing`) on push to `main`.

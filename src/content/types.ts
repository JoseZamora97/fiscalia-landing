/**
 * Inline markup accepted inside content strings: **bold**, `code`,
 * [label](/href). Rendered by <Rich>.
 */
export type Rich = string;

export type Block =
  | { h2: string }
  | { h3: string }
  | { p: Rich }
  | { ul: Rich[] };

export type NavItem = { href: string; label: string };

export type Stat = { value: string; label: string; emphasis?: boolean };

export type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  shot: string;
  shotAlt: string;
  url: string;
};

export type Step = { n: string; title: string; body: string };

export type Source = { name: string; detail: string; icon: string };

export type Card = { title: string; body: string };

export type Faq = { q: string; a: string };

export type UseCase = {
  slug: string;
  /** Short label used on the home page card and in the index. */
  title: string;
  /** Longer, self-contained name used as the <h1> of the detail page. */
  fullTitle: string;
  eyebrow: string;
  summary: string;
  metaDescription: string;
  who: string;
  scenario: Rich[];
  problems: string[];
  approach: { title: string; body: Rich }[];
  outcomes: string[];
  sources: string[];
  integration?: {
    name: string;
    url: string;
    urlLabel: string;
    body: Rich;
    bullets: Rich[];
  };
  quote?: { text: string; author: string };
};

export type LegalDoc = {
  title: string;
  description: string;
  updated: string;
  blocks: Block[];
};

export type Dict = {
  lang: string;
  tagline: string;
  description: string;
  keywords: string[];
  nav: NavItem[];
  navAria: string;
  skipToContent: string;
  homeAria: string;
  requestAccess: string;
  requestAccessSubject: string;
  themeToLight: string;
  themeToDark: string;
  languageLabel: string;

  hero: {
    badge: string;
    titleTop: string;
    titleAccent: string;
    lede: string;
    ctaSecondary: string;
    note: string;
    shotAlt: string;
  };
  stats: Stat[];

  whatIs: { title: string; paragraphs: Rich[] };

  product: { eyebrow: string; title: string; body: string; features: Feature[] };
  how: { eyebrow: string; title: string; steps: Step[] };
  sources: { eyebrow: string; title: string; body: string; items: Source[] };
  security: {
    eyebrow: string;
    title: string;
    body: string;
    items: Card[];
    footnote: Rich;
  };
  useCases: {
    eyebrow: string;
    title: string;
    body: string;
    readMore: string;
    indexTitle: string;
    indexMetaDescription: string;
    indexLede: string;
    backToIndex: string;
    allCases: string;
  };
  faq: { eyebrow: string; title: string; items: Faq[] };
  cta: { title: string; body: string; secondary: string };

  caseDetail: {
    who: string;
    scenario: string;
    problems: string;
    approach: string;
    outcomes: string;
    sourcesUsed: string;
    integration: string;
    ctaTitle: string;
    ctaBody: string;
  };

  footer: {
    blurb: string;
    product: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: Rich;
    madeIn: string;
  };

  backHome: string;
  lastUpdated: string;
  legalEyebrow: string;
};

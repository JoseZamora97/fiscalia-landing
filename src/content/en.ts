import { SITE } from "@/lib/site";
import { SOURCE_ICONS } from "./icons";
import type { Dict } from "./types";

export const en: Dict = {
  lang: "en",
  tagline: "AI agents that plan and execute on your own data",
  description:
    "Genia Ops is an AI-agent project platform. Connect your email, documents, cloud files and repositories, organise them into a private knowledge graph, and let AI agents plan, propose and carry out the work under your supervision.",
  keywords: [
    "Genia Ops",
    "AI agents",
    "autonomous agents",
    "AI project management",
    "knowledge graph",
    "business process automation",
    "AI for business",
    "connect Gmail and Outlook to AI",
    "AI invoice extraction",
    "AI assistant for documents",
  ],

  nav: [
    { href: "#product", label: "Product" },
    { href: "#how-it-works", label: "How it works" },
    { href: "/use-cases", label: "Use cases" },
    { href: "#integrations", label: "Integrations" },
    { href: "#security", label: "Security" },
    { href: "#faq", label: "FAQ" },
  ],
  navAria: "Primary",
  skipToContent: "Skip to content",
  homeAria: `${SITE.name} — home`,
  requestAccess: "Request access",
  requestAccessSubject: "Request access to Genia Ops",
  themeToLight: "Switch to light theme",
  themeToDark: "Switch to dark theme",
  languageLabel: "Language",

  hero: {
    badge: "Invite-only access",
    titleTop: "AI agents that work on",
    titleAccent: "your own data",
    lede: "connects your email, your documents, your files and your repositories, organises them into a private knowledge graph and puts AI agents to work planning and executing — with every step visible and under your supervision.",
    ctaSecondary: "See the product",
    note: "No credit card. Connect only the sources you want and revoke them whenever you want.",
    shotAlt:
      "Genia Ops: an open project with its plan of objectives on the left and the conversation with the agent in the centre",
  },

  stats: [
    { value: "∞", label: "connectable data sources", emphasis: true },
    { value: "ONE", label: "knowledge graph per organisation" },
    { value: "ALL", label: "agent actions, auditable" },
  ],

  whatIs: {
    title: `What is ${SITE.name}?`,
    paragraphs: [
      `**${SITE.name}** is a web application for project management assisted by artificial-intelligence agents, built by ${SITE.company}. It is designed for teams that accumulate scattered information — emails, invoices, contracts, documents, repositories — and need to turn it into finished work.`,
      `You connect your information sources through OAuth 2.0 authorisation. ${SITE.name} indexes that content into a private knowledge graph and enables two things: asking questions in natural language across all of it, and handing work to AI agents that use it as context to plan and carry out concrete tasks.`,
      "Every bit of the agent's work is visible and reversible: each source consulted and each action taken is recorded, and you can step in at any moment. You can read how we handle information in our [Privacy Policy](/privacy) and the conditions of use in the [Terms of Service](/terms).",
    ],
  },

  product: {
    eyebrow: "Product",
    title: "From the objective to the finished work, without losing the thread",
    body: "Four pieces that work together: a planner, agents that execute, your data as context, and traceability of everything that happens.",
    features: [
      {
        id: "planning",
        eyebrow: "Planning",
        title: "Describe the objective. The AI writes the plan.",
        body: "Write what you need in plain language and the assistant breaks it down into concrete objectives and tasks, grounded in the context that already exists in your own data. No generic templates: the plan is built by reading your real information.",
        bullets: [
          "Objectives and tasks generated from your own context",
          "Reorder, edit or discard any proposal",
          "Each objective can be run by its own agent",
        ],
        shot: "projects",
        shotAlt:
          "Genia Ops projects dashboard showing five projects with labels, task progress and status",
        url: "app.geniaops.com/projects",
      },
      {
        id: "agents",
        eyebrow: "Supervised execution",
        title: "Agents that work in plain sight, not in a black box.",
        body: "Each agent works in its own isolated environment and narrates what it does: which source it queries, which document it opens, which conclusion it draws. You can interrupt it, correct it or ask it to change course at any point.",
        bullets: [
          "Every tool call is recorded and visible",
          "Interrupt or redirect the agent mid-task",
          "The agent asks when it needs a decision from you",
        ],
        shot: "chat",
        shotAlt:
          "Conversation with a Genia Ops agent showing the tools it has run and their results",
        url: "app.geniaops.com/projects/tax-close",
      },
      {
        id: "data",
        eyebrow: "Your data",
        title: "Connect the sources where your information already lives.",
        body: "Email, documents, cloud files, repositories and video. Genia Ops indexes them into a private knowledge graph where everything is related, so a single question can cross an email with its attached invoice and the bank movement that backs it.",
        bullets: [
          "OAuth 2.0 authorisation: we never store your passwords",
          "Incremental, schedulable sync per account",
          "Revoke access whenever you want, from your provider or from here",
        ],
        shot: "data-sources",
        shotAlt:
          "Genia Ops data sources screen with connected Gmail and Outlook accounts",
        url: "app.geniaops.com/data-sources",
      },
      {
        id: "control",
        eyebrow: "Control and cost",
        title: "You know what each agent did and what it cost.",
        body: "Usage per project, per objective and per model, in real time. No end-of-month surprises and no need to take the agent's word for what it did.",
        bullets: [
          "Cost and tokens broken down by project and model",
          "Full action log for auditing",
          "Limits and budgets per team",
        ],
        shot: "usage",
        shotAlt:
          "Genia Ops usage dashboard with token and cost charts for the last seven days",
        url: "app.geniaops.com/usage",
      },
    ],
  },

  how: {
    eyebrow: "How it works",
    title: "Four steps, from connection to result",
    steps: [
      {
        n: "01",
        title: "Connect your sources",
        body: "You authorise the accounts you choose via OAuth 2.0: email, Drive, Dropbox, OneDrive, GitHub. Only the ones you decide, and you can revoke them whenever you want.",
      },
      {
        n: "02",
        title: "It is organised into a graph",
        body: "Genia Ops indexes the content into your organisation's private knowledge graph, where emails, documents and files are related and queryable.",
      },
      {
        n: "03",
        title: "The assistant proposes a plan",
        body: "You describe the objective and the AI breaks it into concrete objectives and tasks, with the context drawn from your own information.",
      },
      {
        n: "04",
        title: "Agents execute, you supervise",
        body: "Each objective is run by an agent in an isolated environment. You follow its progress, talk to it by chat and approve or redirect its work.",
      },
    ],
  },

  sources: {
    eyebrow: "Integrations",
    title: "Connect the sources you already use",
    body: "OAuth 2.0 authorisation and incremental sync. Connect only what you want and revoke it whenever you want.",
    items: [
      {
        name: "Gmail and Outlook",
        detail: "Emails, threads and attachments, with incremental sync.",
        icon: SOURCE_ICONS.mail,
      },
      {
        name: "Google Drive",
        detail: "Documents, spreadsheets and presentations.",
        icon: SOURCE_ICONS.drive,
      },
      {
        name: "Dropbox",
        detail: "Folders and files, synced both ways.",
        icon: SOURCE_ICONS.dropbox,
      },
      {
        name: "OneDrive and SharePoint",
        detail: "Your organisation's document libraries.",
        icon: SOURCE_ICONS.onedrive,
      },
      {
        name: "GitHub",
        detail: "Repositories, code and technical decisions.",
        icon: SOURCE_ICONS.github,
      },
      {
        name: "Google Calendar",
        detail: "Events, meetings and deadlines.",
        icon: SOURCE_ICONS.calendar,
      },
      {
        name: "Video and audio",
        detail: "Transcription, summary and a navigable time index.",
        icon: SOURCE_ICONS.video,
      },
      {
        name: "Your projects",
        detail: "Your record of previous work, as reusable context.",
        icon: SOURCE_ICONS.projects,
      },
    ],
  },

  security: {
    eyebrow: "Security and privacy",
    title: "Giving access to your data demands guarantees",
    body: "These are ours. The full legal detail is in the Privacy Policy.",
    items: [
      {
        title: "OAuth 2.0, never your passwords",
        body: "Access to your accounts is granted through each provider's official flow. Genia Ops receives a revocable token; your credentials never pass through our systems.",
      },
      {
        title: "Least privilege, objective by objective",
        body: "Data access is granted objective by objective, not globally. An agent reviewing invoices does not see your code repository.",
      },
      {
        title: "Execution isolation",
        body: "Each agent runs in an isolated container with no route to the internet except through a controlled proxy that logs every call.",
      },
      {
        title: "Full traceability",
        body: "Every action is recorded: which source it queried, which document it read and what it produced. You can reconstruct any decision.",
      },
      {
        title: "Your data does not train models",
        body: "Your content is processed to provide the service and nothing else. We do not sell it or hand it to third parties for advertising.",
      },
      {
        title: "Immediate revocation",
        body: "You can disconnect a source or request deletion of your data at any time, from the product or by writing to us.",
      },
    ],
    footnote: `Read the full [Privacy Policy](/privacy) or write to us at [${SITE.email}](mailto:${SITE.email}).`,
  },

  useCases: {
    eyebrow: "Use cases",
    title: "What teams use it for",
    body: "Six real scenarios told end to end: what hurts, what Genia Ops does about it and what is finished when it stops.",
    readMore: "Read the full case",
    indexTitle: "Use cases",
    indexMetaDescription:
      "How teams use Genia Ops: tax and accounting close, document due diligence, vendor spend audit, internal knowledge base, law-firm merger integration and multi-school education groups.",
    indexLede:
      "Each case starts from a concrete information problem and ends in a reviewable result. Pick the one that looks like yours.",
    backToIndex: "All use cases",
    allCases: "See all use cases",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "What exactly is Genia Ops?",
        a: "Genia Ops is a web platform for project management assisted by artificial-intelligence agents. It connects the sources where your information already lives (email, documents, cloud files, repositories), organises them into a private knowledge graph and lets AI agents plan and carry out work on them, always under your supervision.",
      },
      {
        q: "What data of mine does it need, and what for?",
        a: "Only the sources you explicitly connect. They are used to index your content and to let agents answer and work on it. We do not sell your data and we do not use it to train models. The full detail is in the Privacy Policy.",
      },
      {
        q: "How are my Google or Microsoft accounts connected?",
        a: "Through OAuth 2.0, each provider's official mechanism. You will see a consent screen stating exactly which permissions the application requests. You never type your password into Genia Ops and you can revoke access at any moment from your Google or Microsoft account.",
      },
      {
        q: "Can an agent do something without my approval?",
        a: "Agents read and propose autonomously, but every action is recorded and visible in the chat, and you can interrupt them mid-task to redirect them. Data access is also granted objective by objective: an agent only sees the sources you assigned to it.",
      },
      {
        q: "Does it integrate with the tools we already use?",
        a: "Yes. Beyond the standard data sources, Genia Ops connects with sector platforms such as SententIA for law firms or Kompa for schools, so the work the agent produces lands in the tool your team already works in.",
      },
      {
        q: "Where is my data stored?",
        a: `On infrastructure managed by ${SITE.company} inside the European Union. You can request deletion of your data at any time by writing to ${SITE.email}.`,
      },
      {
        q: "How do I get access?",
        a: `Genia Ops is invite-only while we complete the general rollout. Write to us at ${SITE.email} with a short description of your use case and we will give you access.`,
      },
    ],
  },

  cta: {
    title: "Put your data to work",
    body: `${SITE.name} is invite-only. Tell us your use case and we will give you access.`,
    secondary: "Talk to us",
  },

  caseDetail: {
    who: "Who it is for",
    scenario: "The scenario",
    problems: "Where it gets stuck today",
    approach: "How Genia Ops helps",
    outcomes: "What you end up with",
    sourcesUsed: "Sources in play",
    integration: "Integration",
    ctaTitle: "Does this sound familiar?",
    ctaBody: "Tell us how you work today and we will show you how it looks with Genia Ops.",
  },

  footer: {
    blurb: `${SITE.name} connects your information sources, organises them into a private knowledge graph and puts AI agents to work planning and executing under your supervision.`,
    product: "Product",
    legal: "Legal and contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    rights: `${SITE.name} is a product of ${SITE.company}.`,
    madeIn: "Made in Spain.",
  },

  backHome: "← Back to home",
  lastUpdated: "Last updated:",
  legalEyebrow: "Legal",
};

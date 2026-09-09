import { SITE } from "@/lib/site";
import { SOURCE_ICONS } from "./icons";
import type { Dict } from "./types";

export const en: Dict = {
  lang: "en",
  tagline: "Enterprise AI. Operational control.",

  description: "Genia Ops orchestrates people and AI agents to plan and execute operations with governance, reusable enterprise knowledge and human oversight. Closed release, by invitation only.",
  keywords: [
  "Genia Ops",
  "enterprise AI",
  "AI-native businesses",
  "AI governance",
  "human-AI orchestration",
  "AI-AI orchestration",
  "enterprise knowledge"
],

  nav: [
    { href: "#for-business", label: "For your business" },
    { href: "#product", label: "Product" },
    { href: "#how-it-works", label: "How it works" },
    { href: "/use-cases", label: "Use cases" },
    { href: "#integrations", label: "Integrations" },
    { href: "#security", label: "Governance" },
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
  "badge": "Closed release · Invitation only",
  "titleTop": "Build an AI-native",
  "titleAccent": "business. Stay in control.",
  "lede": "brings people and AI agents together around business objectives. Coordinate execution, govern access and retain the knowledge behind the work — so productivity becomes an organisational asset, not a one-off answer.",
  "ctaSecondary": "Explore the platform",
  "note": "Closed release. Request an invitation at accounts@geniaops.com.",
  "shotAlt": "Genia Ops project with objectives, agent conversation and execution progress"
},

  stats: [
  {
    "value": "Human + AI",
    "label": "shared objectives",
    "emphasis": true
  },
  {
    "value": "AI + AI",
    "label": "coordinated execution"
  },
  {
    "value": "Knowledge",
    "label": "retained by the business"
  }
],

  whatIs: {
  "title": "What is Genia Ops?",
  "paragraphs": [
    "**Genia Ops** is an enterprise AI platform for businesses that want AI embedded in how they operate. Genia refers to generative AI and is the platform name; Ops means operations.",
    "People set direction and make decisions. Agents plan, execute and coordinate dependent work using authorised business context. Human-AI and AI-AI orchestration belong in the same operating model.",
    "Plans, conversations and deliverables remain reusable context for future work, subject to access and retention settings. Read our [Privacy Policy](/privacy) and [Terms of Service](/terms)."
  ]
},

  audiences: {
  "eyebrow": "For your business",
  "title": "One operating model. Different stages.",
  "body": "Illustrative examples, not customer results. Start with an objective that matters and define who owns the decision.",
  "items": [
    {
      "id": "startups",
      "label": "Startups",
      "title": "Build AI-native from day one",
      "body": "Give a focused team a shared way to delegate, review and reuse work.",
      "example": "Example: prepare a customer onboarding plan from sales notes, agreements and product documentation.",
      "outcome": "Intended outcome: a reviewable plan and reusable onboarding context."
    },
    {
      "id": "scaleups",
      "label": "Scaleups",
      "title": "Scale execution, not fragmentation",
      "body": "Coordinate work across growing teams without losing the decisions behind it.",
      "example": "Example: agents gather vendor spend and renewal terms; finance and operations review the proposed actions.",
      "outcome": "Intended outcome: a shared renewal plan with documented decisions."
    },
    {
      "id": "enterprises",
      "label": "Enterprises",
      "title": "Bring AI into governed operations",
      "body": "Align teams and agents around scoped access, accountable decisions and enterprise knowledge.",
      "example": "Example: coordinate document review across business units, with legal teams validating findings.",
      "outcome": "Intended outcome: reviewable findings and retained context for subsequent work."
    }
  ]
},

  difference: {
  "eyebrow": "The difference",
  "title": "Orchestrate the work, not just the workflow.",
  "body": "Automation orchestrators connect triggers and actions. Genia Ops focuses on coordinating objectives, people, agents and business context. The approaches can complement each other.",
  "items": [
    {
      "title": "Objectives before sequences",
      "body": "Describe the result, review the plan and adapt execution as the work develops."
    },
    {
      "title": "People and agents, together",
      "body": "People direct and validate; agents coordinate tasks and hand over results according to dependencies."
    },
    {
      "title": "Context beyond a single run",
      "body": "Reuse prior plans, decisions and deliverables instead of treating each task as a fresh start."
    }
  ]
},

  ownership: {
  "eyebrow": "Retained productivity",
  "title": "The work ends. The knowledge stays.",
  "body": "Your business retains the working context: objectives, conversations, decisions and deliverables that authorised teams and agents can reuse. Productivity is not only completing a task; it is making the next one start with more knowledge. Retention and deletion remain subject to your settings and our Privacy Policy."
},

  product: {
    eyebrow: "Product",
    title: "From the objective to the finished work, without losing the thread",
    body: "Planning, coordinated agents, authorised context and usage visibility — in one place.",
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
          "Review tool activity in the conversation",
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
        body: "Bring email, documents, files, repositories and recordings into reusable business context. Agents work with the sources assigned to their objective.",
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
        body: "Review model usage alongside project activity to understand the resources used and the work produced.",
        bullets: [
          "Cost and tokens broken down by project and model",
          "Tool activity available for review",
          "Usage visibility for operational decisions",
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
        title: "Build reusable business context",
        body: "Genia Ops makes authorised information available as context for questions, plans and execution.",
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
        detail: "Connected folders and files.",
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
    eyebrow: "Governance, security and privacy",
    title: "Govern access. Keep people accountable.",
    body: "Define which sources each objective can use, review activity and retain human responsibility for consequential decisions. Read the Privacy Policy for data handling details.",
    items: [
      {
        title: "OAuth 2.0, never your passwords",
        body: "Access to your accounts is granted through each provider's official flow. Genia Ops receives a revocable token; your credentials never pass through our systems.",
      },
      {
        title: "Least privilege, objective by objective",
        body: "Assign data sources to each objective. Limit an invoice review to the information it needs rather than granting unrelated repository access.",
      },
      {
        title: "Execution isolation",
        body: "Agent execution uses isolated environments. Data access is scoped to the work you authorise.",
      },
      {
        title: "Reviewable activity",
        body: "Review tool activity, conversations and outputs to understand the work and validate its conclusions.",
      },
      {
        title: "Your data does not train models",
        body: "We do not use your content to train models, sell it or share it for advertising. Processing and service-provider protections are described in the Privacy Policy.",
      },
      {
        title: "Revocable access",
        body: "You can disconnect a source or request deletion of your data at any time, from the product or by writing to us.",
      },
    ],
    footnote: `Read the full [Privacy Policy](/privacy) or write to us at [${SITE.email}](mailto:${SITE.email}).`,
  },

  useCases: {
    eyebrow: "Use cases",
    title: "Where to put AI to work",
    body: "Six illustrative scenarios: the business problem, a supervised approach and intended outputs. These are not customer results or performance guarantees.",
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
        a: "Genia Ops is an enterprise AI platform for AI-native operations. Genia refers to generative AI and names the platform; Ops means operations. It coordinates people and AI agents around objectives, authorised knowledge and supervised execution.",
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
        a: "Agents can use enabled tools within the access you grant; not every action requires a separate approval. Review the task and permissions before execution, monitor activity and interrupt or redirect work when needed. Validate results before relying on them.",
      },
      {
        q: "Does it integrate with the tools we already use?",
        a: "Genia Ops works with connected business sources. The use cases also describe handoffs to SententIA for law firms and Kompa for schools; confirm the integration scope for your invitation.",
      },
      {
        q: "How do we assess data handling?",
        a: `Read the Privacy Policy for processing, retention and international transfers. Contact ${SITE.email} to discuss deployment requirements before connecting sensitive information.`,
      },
      {
        q: "How do I get access?",
        a: `Genia Ops is in closed release, by invitation only. Write to ${SITE.email} with your business context to request an invitation. Access is not automatic.`,
      },
    ],
  },

  cta: {
  "title": "Make AI part of how you operate.",
  "body": "Genia Ops is in closed release, by invitation only. Tell us your business context at accounts@geniaops.com to request an invitation.",
  "secondary": "Contact us"
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
    ctaBody: "Closed release, by invitation only. Describe your use case at accounts@geniaops.com to request an invitation.",
  },

  footer: {
    blurb: "Genia Ops orchestrates people and AI agents to plan and execute operations with governance, reusable enterprise knowledge and human oversight. Closed release, by invitation only.",
    product: "Product",
    legal: "Legal and contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    rights: "Closed release. By invitation only.",
    madeIn: "Made in Spain.",
  },

  backHome: "← Back to home",
  lastUpdated: "Last updated:",
  legalEyebrow: "Legal",
};

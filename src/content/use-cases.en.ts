import type { UseCase } from "./types";

export const useCasesEn: UseCase[] = [
  {
    slug: "tax-close",
    eyebrow: "Finance",
    title: "Tax and accounting close",
    fullTitle: "Closing the quarter without chasing receipts",
    summary:
      "Match bank movements against the invoices that arrived by email, find the receipts that are missing and hand the quarter over ready.",
    metaDescription:
      "How Genia Ops cross-references bank statements, emails and invoices to close the quarter: automatic reconciliation, a short list of missing receipts and a folder ready for your accountant.",
    who: "Finance and admin teams in small and mid-sized companies, high-volume freelancers, and firms preparing their clients' close.",
    scenario: [
      "Every quarter closes the same way: a bank statement in one tab, the inbox in another and a downloads folder full of invoices named `invoice_final_v2.pdf`. Each charge has to be identified, matched to the email that carried the invoice, checked against the amount and filed where it belongs.",
      "The problem is not difficulty, it is volume and dispersion. The information exists, but it lives split across the bank, three inboxes, the department's Drive and the attachments somebody forwarded to themselves. Nobody has the whole picture until they sit down and assemble it by hand — and by then the accountant is already asking for the numbers.",
      "The usual outcome is two or three days of mechanical work per quarter, plus the back and forth over receipts that never turn up and end up written off as non-deductible.",
    ],
    problems: [
      "A receipt may sit in an email, in an attachment or in a shared folder, with no way to know without looking",
      "Recurring subscriptions produce dozens of invoices identical except for the date and the amount",
      "Amounts do not always match: fees, currency conversion, bundled charges",
      "When a receipt is missing, nobody knows whether it never arrived or was simply misfiled",
      "The process only exists in one person's head",
    ],
    approach: [
      {
        title: "Index the inbox and folders where the invoices already are",
        body: "You connect Gmail or Outlook and whichever cloud storage you use. Genia Ops indexes emails, threads and attachments into the knowledge graph: every PDF stays linked to the email that carried it, the sender and the date.",
      },
      {
        title: "Upload the statement and the agent reconciles it",
        body: "You hand it the period's bank statement and describe the goal in one sentence. The planner breaks it down: one objective per recurring vendor and one for the one-off charges, each with its own tasks.",
      },
      {
        title: "Each agent searches, compares and documents",
        body: "The agent on each objective looks for the invoice behind every charge, checks the amount and the date, and records where it found it. When the amount does not add up — a fee, a currency conversion — it flags it instead of forcing the match.",
      },
      {
        title: "It asks instead of inventing",
        body: "If a charge has no locatable receipt, the agent does not wave it through: it raises the question in the chat with whatever it did find, and you decide whether to chase the vendor or mark it non-deductible.",
      },
    ],
    outcomes: [
      "A charge-by-charge reconciliation with each receipt linked to its origin",
      "The short, actionable list of what is missing and who to chase for it",
      "The invoices collected and filed in the folder you share with your accountant",
      "A record of how each conclusion was reached, reviewable months later",
    ],
    sources: ["Gmail and Outlook", "Google Drive", "Dropbox", "OneDrive"],
  },

  {
    slug: "document-due-diligence",
    eyebrow: "Legal",
    title: "Document due diligence",
    fullTitle: "Document due diligence across hundreds of contracts",
    summary:
      "Review hundreds of contracts, extract the clauses that matter and rank them by severity, each linked to the exact page of the original.",
    metaDescription:
      "How Genia Ops speeds up document due diligence: it reviews hundreds of contracts, extracts change-of-control, exclusivity and penalty clauses and ranks them by severity, citing the original.",
    who: "Legal teams, corporate transaction advisers and compliance leads who receive a data room and have a delivery date.",
    scenario: [
      "A data room lands with six hundred documents and a delivery date three weeks out. Framework agreements, addenda that amend contracts which themselves amend others, scans from the nineties and spreadsheets holding the vendor inventory.",
      "What you are looking for is specific: change-of-control clauses, exclusivities, penalties, automatic renewals, liability caps outside market practice. What eats the time is not analysing them, it is finding them. Screening reading takes most of the billable hours and it is precisely the part that adds the least value.",
      "And there is a worse risk than cost: a material clause buried in the annex of an addendum nobody got round to opening.",
    ],
    problems: [
      "The volume forces the reading to be split across people, with criteria that drift apart",
      "Scans without a text layer fall outside any search",
      "A clause may be amended by a later document filed in another folder",
      "Redoing the work when a new batch arrives costs almost as much as the first pass",
      "Justifying a finding means locating the exact page all over again",
    ],
    approach: [
      {
        title: "The whole data room becomes queryable",
        body: "You connect the shared folder — Drive, Dropbox, OneDrive or SharePoint — and Genia Ops indexes the content, scans included, into the knowledge graph. From there, any question is answered against the full corpus rather than what somebody remembers reading.",
      },
      {
        title: "You define the criteria once, they apply to everything",
        body: "You describe what you are looking for and at what severity. The planner turns that into concrete objectives and tasks, so the same yardstick is applied to all six hundred documents instead of one interpretation per reviewer.",
      },
      {
        title: "Every finding cites its source",
        body: "The agent returns the clause, the document and its exact position inside it. Human review stops being screening reading and becomes validation of specific findings.",
      },
      {
        title: "It relates a document to whatever amends it",
        body: "Because everything sits in the same graph, a contract shows up next to its addenda and next to the emails where it was negotiated, so a clause is never read outside the context that changed it.",
      },
    ],
    outcomes: [
      "An inventory of material clauses ranked by severity",
      "Every finding linked to the document and page of the original",
      "Explicit gaps: which documents are missing or could not be read",
      "A corpus that stays queryable when new questions come up",
    ],
    sources: ["Google Drive", "Dropbox", "OneDrive and SharePoint", "Gmail and Outlook"],
  },

  {
    slug: "vendor-spend-audit",
    eyebrow: "Operations",
    title: "Vendor spend audit",
    fullTitle: "Auditing recurring vendor and subscription spend",
    summary:
      "Rebuild the inventory of active subscriptions from emails and statements, and surface duplicates, price rises and automatic renewals.",
    metaDescription:
      "How Genia Ops rebuilds recurring spend: it cross-references statements and emails to surface duplicate subscriptions, silent price rises and automatic renewals before they are charged.",
    who: "Finance, operations and IT leads in organisations where several people can sign up for tools with a company card.",
    scenario: [
      "Nobody over-subscribed on purpose. Over three years, different teams simply signed up for tools with the company card: two task managers, three cloud storage plans, licences for people who have since left, and a plan that doubled when somebody opened a second account for a trial.",
      "Recurring spend is the least scrutinised because each line is small. Added up it is a serious budget item, and the only complete trace of what was signed and on what terms lives in signup emails and monthly invoices, scattered across personal inboxes.",
      "When somebody asks how much you spend on software, the honest answer is usually an estimate.",
    ],
    problems: [
      "The same vendor appears under different names on the statement and on the invoice",
      "Price rises arrive by email and nobody reviews them",
      "Annual renewals are charged before there is time to decide",
      "Licences are still assigned to people who have left",
      "The real cost per tool means adding up charges across currencies and periods",
    ],
    approach: [
      {
        title: "Rebuild the inventory from the real trail",
        body: "Genia Ops indexes signup emails, invoices and renewal notices and cross-references them with the charges on the statement. The inventory is not declared by hand: it is reconstructed from what has actually been paid.",
      },
      {
        title: "Group what is really the same vendor",
        body: "The agent recognises that a charge, an invoice and a welcome email refer to the same service even when the bank descriptor looks nothing like the commercial name, and folds them into a single line.",
      },
      {
        title: "Surface what deserves a decision",
        body: "Overlap between tools that do the same job, plans with more seats than active users, price rises against the previous period, and renewals falling due in the next ninety days.",
      },
      {
        title: "Give you the warning before the charge",
        body: "With renewal dates and notice periods extracted from the terms, the decision to renew or cancel is taken with room to move instead of when the charge shows up on the statement.",
      },
    ],
    outcomes: [
      "The inventory of active subscriptions with their annualised cost",
      "The list of duplicates and unused licences, with the estimated saving",
      "A renewal calendar including notice periods",
      "The price history per vendor, so you negotiate with data",
    ],
    sources: ["Gmail and Outlook", "Google Drive", "Dropbox", "Google Calendar"],
  },

  {
    slug: "internal-knowledge-base",
    eyebrow: "Knowledge",
    title: "Internal knowledge base",
    fullTitle: "An internal knowledge base built on what the team already wrote",
    summary:
      "Ask in plain language across your documentation, your repositories and your record of past decisions, and get the answer with its source cited.",
    metaDescription:
      "How Genia Ops turns documentation, emails, repositories and recordings into a knowledge base you can query in plain language, with the source cited in every answer.",
    who: "Product, engineering and operations teams carrying years of decisions spread across documents, email threads and repositories.",
    scenario: [
      "The question comes round every few weeks: “why did we do it this way?” The answer exists — in a document from two years ago, in an email thread with the client, in a commit message — but finding it costs more than deciding again, so it gets decided again. Sometimes differently.",
      "The cost is not just search time. It is onboarding somebody who has to interrupt the veterans to get anywhere, redoing an analysis that was already done, and losing the context behind decisions when the person who made them leaves.",
      "Formal documentation covers a small slice of that knowledge. Most of it sits in day-to-day working material that was never organised, because organising it was a project in itself.",
    ],
    problems: [
      "Each tool's search only looks inside that tool",
      "The context of a decision is split across the document, the email and the code",
      "Meeting recordings are inaccessible in practice",
      "When somebody leaves, their context leaves with them",
      "Documenting after the fact never becomes the priority",
    ],
    approach: [
      {
        title: "One graph across every source",
        body: "Documents, emails, repositories and video are indexed into the same knowledge graph. A question crosses all four without you having to know in advance which one holds the answer.",
      },
      {
        title: "Answers with the source in front of you",
        body: "Every answer comes with the document, email or file it came from. You can check it in one click instead of trusting it — which is the difference between a useful tool and a novelty.",
      },
      {
        title: "Meetings stop being a black hole",
        body: "Recordings are transcribed and indexed with a navigable time index: you ask about a topic and land on the minute where it was discussed.",
      },
      {
        title: "Past work becomes reusable context",
        body: "Projects already closed in Genia Ops stay available as a source. An analysis done six months ago is not repeated — it is consulted.",
      },
    ],
    outcomes: [
      "A single place to ask about any past decision",
      "Cited answers you can check against the original",
      "Faster onboarding that does not depend on interrupting the veterans",
      "Knowledge stops belonging to whoever happened to be there that day",
    ],
    sources: ["Google Drive", "GitHub", "Gmail and Outlook", "Video and audio", "Your projects"],
  },

  {
    slug: "law-firm-merger",
    eyebrow: "Law firms",
    title: "Law firm consolidation",
    fullTitle: "Unifying case files when law firms merge or integrate",
    summary:
      "Two firms, two ways of naming matters and twenty years of archives. Genia Ops unifies the archive and hands it over, ordered, to SententIA, the legal case-management platform.",
    metaDescription:
      "How Genia Ops unifies the document archive of two merging law firms — matters, emails and scans — and hands it normalised to SententIA for AI-assisted case management.",
    who: "Firms that are merging, absorbing a client portfolio, or integrating offices that until now ran on their own.",
    scenario: [
      "Two firms sign the integration. On paper it is an addition; in practice each one arrives with its own way of numbering matters, its own filing criteria and twenty years of archive in formats ranging from native PDF to the scan of a fax.",
      "For the first months the new firm works with two parallel archives. A partner from the incoming office cannot search the other side's archive, and vice versa. Conflicts of interest have to be checked twice, in two systems, under two naming schemes. And procedural deadlines do not wait for the integration to finish.",
      "The migration project gets budgeted at a year and outsourced to a team typing metadata. Meanwhile the archive — the firm's real asset — still cannot be searched as a whole.",
    ],
    problems: [
      "Two matter-numbering schemes that do not map onto each other",
      "The same client registered twice with different details",
      "Scans without a text layer that no search can reach",
      "Conflict checks require going through two archives separately",
      "Deadlines and hearings live in calendars that do not talk to each other",
      "Nobody wants to be the one deciding which version of a document is the good one",
    ],
    approach: [
      {
        title: "A real inventory before anything is moved",
        body: "Genia Ops indexes both archives exactly as they are — Drive, OneDrive, SharePoint, Dropbox and each office's inboxes — and builds the map of what exists: how many matters, which overlaps, what is duplicated and what is unreadable. The migration stops being planned blind.",
      },
      {
        title: "Normalise matters, clients and parties",
        body: "One agent per block of matters proposes the mapping between naming schemes, merges duplicate client records and links each document to its proceeding, its client and the parties involved. Anything doubtful it asks about rather than resolving on its own.",
      },
      {
        title: "Run conflict checks against the unified archive",
        body: "With both portfolios in the same graph, the conflict check runs once and across the whole, including opposing parties buried in the body of a filing rather than recorded on the matter sheet.",
      },
      {
        title: "Leave a record of every filing decision",
        body: "Every record merge and every assignment is logged with its rationale. If somebody asks in two years why two matters were unified, the answer is documented.",
      },
    ],
    outcomes: [
      "A single archive, searchable from any of the offices",
      "Deduplicated client and matter records, with the decisions justified",
      "The conflict check run against the complete portfolio",
      "Material normalised and ready to load into the case-management platform",
      "An explicit inventory of what could not be recovered, so you can decide what to do with it",
    ],
    sources: [
      "Google Drive",
      "OneDrive and SharePoint",
      "Dropbox",
      "Gmail and Outlook",
      "Video and audio",
    ],
    integration: {
      name: "SententIA",
      url: "https://sententia.studio",
      urlLabel: "sententia.studio",
      body: "Genia Ops handles the document archaeology: finding, relating and normalising what is scattered across inboxes and network drives. **SententIA** is the intelligent case-management platform where that material then lives and gets worked day to day: centralised matters, hearing transcription, key-fact extraction, case-law search and assisted drafting.",
      bullets: [
        "Genia Ops delivers the matter already unified; SententIA manages it through the proceeding",
        "The parties, dates and amounts the agent extracts enter as case facts, not loose text",
        "Hearing recordings indexed by Genia Ops complement SententIA's intelligent transcription",
        "For firms with strict confidentiality requirements, SententIA also offers an on-premise deployment",
      ],
    },
  },

  {
    slug: "education-group",
    eyebrow: "Education",
    title: "Education group consolidation",
    fullTitle: "Unifying the academic archive across the schools of an education group",
    summary:
      "Several schools, each with its own way of storing syllabuses and records. Genia Ops unifies the academic archive and hands it over, ordered, to Kompa, the teaching platform.",
    metaDescription:
      "How Genia Ops unifies syllabuses, records and teaching material across the schools of an education group and hands it normalised to Kompa so teachers can use it in class.",
    who: "Education groups with several schools, teaching cooperatives, and owners integrating a new school into their network.",
    scenario: [
      "An education group with four schools wants to operate as one. Each school arrives with its own history: syllabuses in the head of studies' Drive, assessment records as signed PDFs, classroom material scattered across teachers' personal accounts and an annual report written each year by whoever is available.",
      "On paper they share an educational project. In practice the same first-year subject is taught from three different syllabuses, and no leadership team can answer with data what is actually being taught across the network.",
      "When a teacher moves between schools they start from zero: their material does not travel with them, and the destination school's material is not anywhere they can find it. When an inspection or a certification renewal comes round, somebody spends weeks rebuilding by hand documentation that already exists.",
    ],
    problems: [
      "Syllabuses for the same subject diverging between schools",
      "Teaching material trapped in teachers' personal accounts",
      "Records and reports as scanned PDFs, outside any search",
      "No network-wide view to base decisions on",
      "Inspection and certification paperwork rebuilt from scratch every time",
      "Material lost when a teacher moves school or leaves",
    ],
    approach: [
      {
        title: "Bring together the academic archive of all four schools",
        body: "Genia Ops connects each school's Drive, OneDrive and inboxes and indexes syllabuses, records, reports and classroom material into a single graph — while each school keeps seeing only its own until leadership decides otherwise.",
      },
      {
        title: "Map the real curriculum, not the declared one",
        body: "One agent per education stage aligns the syllabuses for the same subject across schools, flags which content is covered in some and not in others, and locates the classroom material that already exists for each unit even when it is named differently.",
      },
      {
        title: "Rescue what is stuck in dead formats",
        body: "Scanned records, old reports and recordings of training sessions become queryable. Preparing an accreditation stops being an archaeology exercise.",
      },
      {
        title: "Leave the material ready for the classroom",
        body: "The output is not a report: it is the teaching material identified, attributed to its subject and unit, and prepared so teachers can use it directly in their working platform.",
      },
    ],
    outcomes: [
      "A single academic archive, searchable by every school in the group",
      "The real map of what is taught in each school, with divergences flagged",
      "Classroom material rescued from personal accounts and attributed to its subject",
      "Inspection and certification paperwork gathered rather than rebuilt",
      "Syllabuses and material ready to load into the teaching platform",
    ],
    sources: [
      "Google Drive",
      "OneDrive and SharePoint",
      "Gmail and Outlook",
      "Video and audio",
      "Google Calendar",
    ],
    integration: {
      name: "Kompa",
      url: "https://kompa.es",
      urlLabel: "kompa.es",
      body: "Genia Ops puts the group's archive in order; **Kompa** is the platform where that material turns into a lesson. Kompa centralises subjects and content, generates multiple-choice exams with AI from the material itself, and runs Live Mode, projecting slides with a QR code so students answer questions from their phones.",
      bullets: [
        "The material Genia Ops rescues and classifies enters Kompa already assigned to its subject",
        "Kompa's AI exams are generated from the school's real content, not a generic syllabus",
        "Kompa's school mode gives leadership aggregated metrics across the whole school",
        "A teacher moving between schools in the group keeps the material they already had",
      ],
    },
  },
];

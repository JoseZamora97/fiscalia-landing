import { SITE } from "@/lib/site";
import type { LegalDoc } from "./types";

const UPDATED = "27 July 2026";

export const privacyEn: LegalDoc = {
  title: "Privacy Policy",
  description:
    "How Genia Ops collects, uses, shares and protects your data, including the handling of data obtained from Google APIs.",
  updated: UPDATED,
  blocks: [
    {
      p: `This Privacy Policy describes how **${SITE.company}** (“we”) handles personal information in connection with the **${SITE.name}** application (the “Service”), available at [${SITE.url}](${SITE.url}).`,
    },
    {
      p: `${SITE.name} is a project management platform with artificial-intelligence agents. With your express authorisation, the Service connects to the data sources you choose (for example, your email account or your cloud storage), organises that content into a private knowledge graph and lets AI agents help you plan and carry out work on that information.`,
    },

    { h2: "1. Data controller" },
    { p: `**${SITE.company}**. Contact email: [${SITE.email}](mailto:${SITE.email}).` },
    {
      p: "For any question about this policy or about exercising your rights, you can write to the address above.",
    },

    { h2: "2. What information we collect" },
    { h3: "2.1 Account information" },
    {
      ul: [
        "Your email address, name and profile picture, to identify you and let you sign in.",
        "Basic technical data needed to operate the Service, such as access and error logs.",
      ],
    },
    { h3: "2.2 Content from the sources you connect" },
    {
      p: "When you connect a data source, we access the content needed to provide the features you have enabled. Depending on the source, this may include:",
    },
    {
      ul: [
        "**Email** (Gmail, Outlook): sender, recipients, subject, date, message body and attachments.",
        "**Cloud storage** (Google Drive, Dropbox, OneDrive): names, paths, metadata and content of the files and folders you grant access to.",
        "**Calendar**: events, dates and participants.",
        "**Code repositories** (GitHub): file structure and content of the repositories you authorise.",
        "**Video**: the files you upload and the transcriptions, summaries and indexes generated from them.",
      ],
    },
    {
      p: "We only access the sources you connect explicitly. We do not access any account you have not authorised.",
    },
    { h3: "2.3 Content you create in the Service" },
    {
      ul: [
        "Projects, objectives, tasks and directives you create.",
        "Conversations with the AI agents and the results they produce.",
      ],
    },

    { h2: "3. Data obtained from Google APIs" },
    {
      p: "If you connect a Google account, we request only the permissions (“scopes”) needed for the features you use. Here is what each one is for:",
    },
    {
      ul: [
        "**`userinfo.email`** and **`userinfo.profile`**: to identify you, create your account and show your profile inside the Service.",
        "**`gmail.readonly`**: to read and index your emails and attachments, so agents can search them and use them as context for the tasks you assign.",
        "**`gmail.modify`**: to perform, at your request, organising actions on your mailbox, such as marking messages as read or applying labels. We do not use this permission to send email on your behalf without your explicit instruction, nor to delete messages automatically.",
      ],
    },
    { h3: "3.1 Limited Use (Google API Services User Data Policy)" },
    {
      p: `${SITE.name}'s use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including its **Limited Use** requirements. Specifically:`,
    },
    {
      ul: [
        `We only use Google data to provide or improve user-facing features that are prominent in the ${SITE.name} interface.`,
        "**We do not transfer or sell this data for advertising, advertising profiling or market research purposes.**",
        "**We do not use Google data to train, retrain or fine-tune generalised artificial-intelligence models**, whether third-party or our own.",
        "We do not allow any person to read this data, unless (i) you have given us your express consent to read specific messages, (ii) it is necessary for security reasons (for example, investigating abuse), (iii) it is required to comply with the law, or (iv) the data is aggregated and anonymised and used for internal operations.",
      ],
    },

    { h2: "4. What we use the information for" },
    {
      ul: [
        "Providing and maintaining the Service and its features.",
        "Allowing AI agents to find, relate and use the information needed to complete the tasks you assign them.",
        "Authenticating you and protecting account security.",
        "Diagnosing incidents and improving the reliability of the Service.",
        "Complying with our legal obligations.",
      ],
    },
    {
      p: "**We do not sell your personal information and we do not use it for advertising purposes.**",
    },

    { h2: "5. Processing through language models" },
    {
      p: `${SITE.name} operates on top of language models from external providers. To answer your requests, fragments of the content you have granted access to may be sent to those providers acting as **data processors**, solely to generate the answer or complete the task you asked for.`,
    },
    {
      p: "We select providers that contractually commit to **not using content sent through their API to train their models**. Data obtained from Google APIs is never transferred for the training of generalised AI models.",
    },

    { h2: "6. Who we share information with" },
    {
      p: "We do not share your personal information with third parties except in the following cases:",
    },
    {
      ul: [
        "**Infrastructure and service providers** acting on our behalf (hosting, databases and the language-model providers described in section 5), subject to confidentiality obligations.",
        "**Legal obligation**: where necessary to comply with a law, a court order or a legitimate request from an authority.",
        "**Protection of rights**: where necessary to prevent fraud, abuse or a security threat.",
      ],
    },

    { h2: "7. Retention and deletion" },
    {
      p: "We keep your information for as long as you maintain an active account and the data source remains connected. You can:",
    },
    {
      ul: [
        "**Disconnect a source** at any time from the application; we stop syncing new content immediately.",
        "**Revoke Google access** directly from [your Google account permissions page](https://myaccount.google.com/permissions).",
        `**Request deletion** of your account and all associated data by writing to [${SITE.email}](mailto:${SITE.email}). We will action your request within a maximum of 30 days.`,
      ],
    },
    {
      p: "We may retain backups for a limited period and the records strictly necessary to meet legal obligations.",
    },

    { h2: "8. Security" },
    {
      p: "We apply technical and organisational measures to protect your information, including: encryption in transit via TLS, storage of access credentials as OAuth tokens (we never store your account passwords), temporary and narrowly scoped credentials for each agent, isolation of agent execution in separate environments, and access control on a least-privilege basis.",
    },
    {
      p: "No system is completely secure, but we work continuously to reduce risk and to respond quickly to any incident.",
    },

    { h2: "9. Your rights" },
    {
      p: "Under the General Data Protection Regulation (GDPR) and other applicable law, you have the right to access your data, rectify it, erase it, restrict or object to its processing and request its portability. You may also withdraw your consent at any time and lodge a complaint with the competent supervisory authority (in Spain, the Agencia Española de Protección de Datos).",
    },
    {
      p: `To exercise these rights, write to us at [${SITE.email}](mailto:${SITE.email}).`,
    },

    { h2: "10. Minors" },
    {
      p: "The Service is not directed at people under 16 and we do not knowingly collect information from anyone under that age.",
    },

    { h2: "11. International transfers" },
    {
      p: "Some of our providers may process information outside the European Economic Area. In those cases we make sure appropriate safeguards are in place, such as the standard contractual clauses approved by the European Commission.",
    },

    { h2: "12. Changes to this policy" },
    {
      p: "We may update this policy to reflect changes in the Service or in applicable law. We will publish the updated version on this same page, stating the date of the last change. If the changes are substantial, we will notify you by an appropriate means.",
    },

    { h2: "13. Contact" },
    {
      p: `If you have any question about this Privacy Policy, write to us at [${SITE.email}](mailto:${SITE.email}).`,
    },
  ],
};

export const termsEn: LegalDoc = {
  title: "Terms of Service",
  description:
    "Conditions of use for Genia Ops, the AI-agent project management platform by ZC Tech Partners.",
  updated: UPDATED,
  blocks: [
    {
      p: `These Terms govern access to and use of **${SITE.name}** (the “Service”), offered by **${SITE.company}**. By using the Service you accept these Terms.`,
    },

    { h2: "1. Description of the Service" },
    {
      p: `${SITE.name} is a project management platform that uses artificial-intelligence agents to analyse the information in the data sources the user connects and to help plan and carry out work. The Service is currently provided by invitation.`,
    },

    { h2: "2. Accounts and access" },
    {
      ul: [
        "You must provide accurate information when creating your account and keep it up to date.",
        "You are responsible for the confidentiality of your credentials and for the activity carried out from your account.",
        "You must have legal capacity to contract and be at least 16 years old.",
      ],
    },

    { h2: "3. Connected data sources" },
    {
      p: "By connecting a data source you declare that you are authorised to do so and that you hold the necessary rights over the information you grant access to. The processing of that information is governed by our [Privacy Policy](/privacy).",
    },

    { h2: "4. Acceptable use" },
    { p: "You may not use the Service to:" },
    {
      ul: [
        "Break the law or infringe third-party rights.",
        "Access information you are not legitimately authorised to access.",
        "Attempt to compromise the security of the Service, its systems or those of third parties.",
        "Generate or distribute unlawful, fraudulent or harmful content.",
        "Make automated use that degrades the performance of the Service for other users.",
      ],
    },

    { h2: "5. AI-generated results" },
    {
      p: "The Service generates plans, summaries and answers using artificial-intelligence models. These results **may contain errors or inaccuracies** and are provided as support, not as professional advice. You are responsible for reviewing and validating any result before acting on it, particularly in legal, tax, financial or medical contexts.",
    },

    { h2: "6. Intellectual property" },
    {
      p: `The Service, its software, its design and its trademarks belong to ${SITE.company}. The content you contribute and the results generated from it remain yours; you grant us only the licence needed to operate the Service and provide its features to you.`,
    },

    { h2: "7. Availability and changes" },
    {
      p: "We aim to keep the Service available, but we do not guarantee uninterrupted or error-free operation. We may modify, suspend or discontinue features, giving reasonable notice when the change is substantial.",
    },

    { h2: "8. Limitation of liability" },
    {
      p: `To the maximum extent permitted by law, ${SITE.company} will not be liable for indirect damages, loss of profit or loss of data arising from use of the Service. Nothing in these Terms excludes liability that cannot lawfully be excluded.`,
    },

    { h2: "9. Termination" },
    {
      p: "You may stop using the Service and request deletion of your account at any time. We may suspend access in the event of a serious breach of these Terms, informing you of the reason where possible.",
    },

    { h2: "10. Governing law" },
    {
      p: "These Terms are governed by Spanish law. Any dispute will be submitted to the competent courts, without prejudice to the rights granted to the user by consumer protection legislation.",
    },

    { h2: "11. Contact" },
    {
      p: `For any question about these Terms, write to us at [${SITE.email}](mailto:${SITE.email}).`,
    },
  ],
};

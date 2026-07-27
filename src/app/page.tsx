import Link from "next/link";
import type { Metadata } from "next";
import { Shot } from "@/components/shot";
import { SITE, MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
};

/* ------------------------------------------------------------------ data */

const STATS = [
  { value: "8", label: "fuentes de datos conectables" },
  { value: "1", label: "grafo de conocimiento por organización" },
  { value: "100 %", label: "de las acciones del agente, auditables" },
];

const FEATURES = [
  {
    id: "planificacion",
    eyebrow: "Planificación",
    title: "Describe el objetivo. El plan lo escribe la IA.",
    body: "Escribe lo que necesitas en lenguaje natural y el asistente lo descompone en objetivos y tareas concretas, apoyándose en el contexto que ya existe en tus propios datos. Nada de plantillas genéricas: el plan se construye leyendo tu información real.",
    bullets: [
      "Objetivos y tareas generados a partir de tu contexto",
      "Reordena, edita o descarta cualquier propuesta",
      "Cada objetivo puede ejecutarse por su propio agente",
    ],
    shot: "projects",
    shotAlt:
      "Panel de proyectos de Genia Ops mostrando cinco proyectos con etiquetas, progreso de tareas y estado",
    url: "app.geniaops.com/projects",
  },
  {
    id: "agentes",
    eyebrow: "Ejecución supervisada",
    title: "Agentes que trabajan a la vista, no en una caja negra.",
    body: "Cada agente trabaja en su propio entorno aislado y va narrando lo que hace: qué fuente consulta, qué documento abre, qué conclusión saca. Puedes interrumpirle, corregirle o pedirle que cambie de rumbo en cualquier momento.",
    bullets: [
      "Cada llamada a una herramienta queda registrada y visible",
      "Interrumpe o redirige al agente en mitad de la tarea",
      "El agente pregunta cuando necesita una decisión tuya",
    ],
    shot: "chat",
    shotAlt:
      "Conversación con un agente de Genia Ops mostrando las herramientas que ha ejecutado y sus resultados",
    url: "app.geniaops.com/projects/cierre-fiscal",
  },
  {
    id: "fuentes-feature",
    eyebrow: "Tus datos",
    title: "Conecta las fuentes donde ya vive tu información.",
    body: "Correo, documentos, archivos en la nube, repositorios y vídeo. Genia Ops los indexa en un grafo de conocimiento privado donde todo queda relacionado, de modo que una pregunta puede cruzar un correo con la factura adjunta y el movimiento bancario que la justifica.",
    bullets: [
      "Autorización por OAuth 2.0: nunca guardamos tus contraseñas",
      "Sincronización incremental y programable por cuenta",
      "Revoca el acceso cuando quieras, desde tu proveedor o desde aquí",
    ],
    shot: "data-sources",
    shotAlt:
      "Pantalla de fuentes de datos de Genia Ops con cuentas de Gmail y Outlook conectadas",
    url: "app.geniaops.com/data-sources",
  },
  {
    id: "control",
    eyebrow: "Control y coste",
    title: "Sabes qué ha hecho cada agente y cuánto ha costado.",
    body: "Consumo por proyecto, por objetivo y por modelo, en tiempo real. Sin sorpresas a fin de mes y sin tener que confiar en que el agente hizo lo que dijo que hacía.",
    bullets: [
      "Coste y tokens desglosados por proyecto y modelo",
      "Registro completo de acciones para auditoría",
      "Límites y presupuestos por equipo",
    ],
    shot: "usage",
    shotAlt:
      "Panel de uso y consumo de Genia Ops con gráficas de tokens y coste de los últimos siete días",
    url: "app.geniaops.com/usage",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Conecta tus fuentes",
    body: "Autorizas por OAuth 2.0 las cuentas que elijas: correo, Drive, Dropbox, OneDrive, GitHub. Solo las que tú decidas, y puedes revocarlas cuando quieras.",
  },
  {
    n: "02",
    title: "Se organiza en un grafo",
    body: "Genia Ops indexa el contenido en un grafo de conocimiento privado de tu organización, donde correos, documentos y archivos quedan relacionados y son consultables.",
  },
  {
    n: "03",
    title: "El asistente propone un plan",
    body: "Describes el objetivo y la IA lo descompone en objetivos y tareas concretas, con el contexto extraído de tu propia información.",
  },
  {
    n: "04",
    title: "Los agentes ejecutan y tú supervisas",
    body: "Cada objetivo lo ejecuta un agente en un entorno aislado. Sigues el avance, hablas con él por chat y apruebas o rediriges su trabajo.",
  },
];

const SOURCES = [
  {
    name: "Gmail y Outlook",
    detail: "Correos, hilos y adjuntos, con sincronización incremental.",
    icon: "M3 7l9 6 9-6M3 7h18v10H3z",
  },
  {
    name: "Google Drive",
    detail: "Documentos, hojas de cálculo y presentaciones.",
    icon: "M4 5h7l2 3h7v11H4z",
  },
  {
    name: "Dropbox",
    detail: "Carpetas y archivos, sincronizados en ambos sentidos.",
    icon: "M12 3l5 3-5 3-5-3zM7 12l5 3 5-3M2 9l5 3-5 3M17 9l5 3-5 3",
  },
  {
    name: "OneDrive y SharePoint",
    detail: "Bibliotecas de documentos de tu organización.",
    icon: "M6 17h11a3 3 0 0 0 .3-6A5 5 0 0 0 7.2 9.5 3.5 3.5 0 0 0 6 17z",
  },
  {
    name: "GitHub",
    detail: "Repositorios, código y decisiones técnicas.",
    icon: "M9 19c-4 1.5-4-2.5-6-3m12 5v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.6 4.7 4.7 0 0 0-.1-3.5S17.4 2.8 15 4.4a12 12 0 0 0-6 0C6.6 2.8 5.5 3.3 5.5 3.3a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 10.4c0 5 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V22",
  },
  {
    name: "Google Calendar",
    detail: "Eventos, reuniones y plazos.",
    icon: "M4 6h16v14H4zM4 10h16M9 3v4M15 3v4",
  },
  {
    name: "Vídeo y audio",
    detail: "Transcripción, resumen e índice temporal navegable.",
    icon: "M4 6h11v12H4zM15 10l5-3v10l-5-3z",
  },
  {
    name: "Tus proyectos",
    detail: "El histórico de trabajo previo, como contexto reutilizable.",
    icon: "M4 6h6l2 2h8v10H4zM8 13h8",
  },
];

const SECURITY = [
  {
    title: "OAuth 2.0, nunca tus contraseñas",
    body: "El acceso a tus cuentas se concede mediante los flujos oficiales de cada proveedor. Genia Ops recibe un token revocable; tus credenciales nunca pasan por nuestros sistemas.",
  },
  {
    title: "Mínimo privilegio por objetivo",
    body: "El acceso a los datos se concede objetivo a objetivo, no de forma global. Un agente que revisa facturas no ve tu repositorio de código.",
  },
  {
    title: "Aislamiento de ejecución",
    body: "Cada agente se ejecuta en un contenedor aislado, sin salida a Internet salvo a través de un proxy controlado que registra cada llamada.",
  },
  {
    title: "Trazabilidad completa",
    body: "Cada acción queda registrada: qué fuente consultó, qué documento leyó y qué produjo. Puedes reconstruir cualquier decisión.",
  },
  {
    title: "Tus datos no entrenan modelos",
    body: "Tu contenido se procesa para prestarte el servicio y para nada más. No lo vendemos ni lo cedemos a terceros con fines publicitarios.",
  },
  {
    title: "Revocación inmediata",
    body: "Puedes desconectar una fuente o solicitar la eliminación de tus datos en cualquier momento, desde el producto o escribiéndonos.",
  },
];

const USE_CASES = [
  {
    title: "Cierre fiscal y contable",
    body: "Cruza los movimientos bancarios con las facturas que llegaron por correo, localiza los justificantes que faltan y deja el trimestre listo para la asesoría.",
  },
  {
    title: "Due diligence documental",
    body: "Revisa cientos de contratos, extrae las cláusulas relevantes y clasifícalas por severidad, con enlace a la página exacta del original.",
  },
  {
    title: "Auditoría de gasto en proveedores",
    body: "Inventaría las suscripciones activas a partir de correos y extractos, y detecta duplicidades y renovaciones automáticas.",
  },
  {
    title: "Base de conocimiento interna",
    body: "Pregunta en lenguaje natural sobre tu documentación, tus repositorios y tu histórico de decisiones, y recibe la respuesta con la fuente citada.",
  },
];

const FAQ = [
  {
    q: "¿Qué es Genia Ops exactamente?",
    a: "Genia Ops es una plataforma web de gestión de proyectos asistida por agentes de inteligencia artificial. Conecta las fuentes donde ya vive tu información (correo, documentos, archivos en la nube, repositorios), las organiza en un grafo de conocimiento privado y permite que agentes de IA planifiquen y ejecuten trabajo sobre ellas, siempre bajo tu supervisión.",
  },
  {
    q: "¿Qué datos míos necesita y para qué?",
    a: "Solo los de las fuentes que conectes explícitamente. Se usan para indexar tu contenido y para que los agentes puedan responder y trabajar sobre él. No vendemos tus datos ni los usamos para entrenar modelos. El detalle completo está en la Política de Privacidad.",
  },
  {
    q: "¿Cómo se conectan mis cuentas de Google o Microsoft?",
    a: "Mediante OAuth 2.0, el mecanismo oficial de cada proveedor. Verás una pantalla de consentimiento que indica exactamente a qué permisos accede la aplicación. Nunca introduces tu contraseña en Genia Ops y puedes revocar el acceso en cualquier momento desde tu cuenta de Google o Microsoft.",
  },
  {
    q: "¿Puede un agente hacer algo sin que yo lo apruebe?",
    a: "Los agentes leen y proponen de forma autónoma, pero toda acción queda registrada y visible en el chat, y puedes interrumpirles en mitad de una tarea para redirigirles. Además, el acceso a datos se concede objetivo a objetivo: un agente solo ve las fuentes que le has asignado.",
  },
  {
    q: "¿Dónde se guardan mis datos?",
    a: `En infraestructura gestionada por ${SITE.company} dentro de la Unión Europea. Puedes solicitar la eliminación de tus datos en cualquier momento escribiendo a ${SITE.email}.`,
  },
  {
    q: "¿Cómo consigo acceso?",
    a: `Genia Ops está disponible por invitación mientras completamos el despliegue general. Escríbenos a ${SITE.email} contándonos brevemente tu caso de uso y te damos acceso.`,
  },
];

/* ------------------------------------------------------------- structured */

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.company,
        url: SITE.url,
        email: SITE.email,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "es-ES",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE.url}/#software`,
        name: SITE.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE.url,
        description: SITE.description,
        publisher: { "@id": `${SITE.url}/#organization` },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
          availability: "https://schema.org/LimitedAvailability",
          description: "Acceso por invitación durante la fase inicial.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ------------------------------------------------------------------- page */

function SectionHead({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-text">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[30px] font-semibold sm:text-[38px]">{title}</h2>
      {body && <p className="mt-4 text-[16px] leading-relaxed text-fg-muted">{body}</p>}
    </div>
  );
}

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="mt-0.5 shrink-0"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />

      {/* ------------------------------------------------------------ hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge badge-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Acceso por invitación
            </span>

            <h1 className="mt-6 text-[38px] font-semibold leading-[1.08] sm:text-[60px]">
              Agentes de IA que trabajan
              <br className="hidden sm:block" /> sobre{" "}
              <span className="text-accent-text">tus propios datos</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-fg-muted">
              <strong className="font-semibold text-fg">{SITE.name}</strong> conecta tu
              correo, tus documentos, tus archivos y tus repositorios, los organiza en un
              grafo de conocimiento privado y pone agentes de IA a planificar y ejecutar
              el trabajo — con cada paso a la vista y bajo tu supervisión.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href={MAILTO} className="btn btn-primary">
                Solicitar acceso
              </a>
              <Link href="#producto" className="btn">
                Ver el producto
              </Link>
            </div>

            <p className="mt-5 text-[13px] text-fg-dim">
              Sin tarjeta. Conectas solo las fuentes que quieras y las revocas cuando
              quieras.
            </p>
          </div>

          <div className="mt-14">
            <Shot
              name="project-detail"
              alt="Genia Ops: un proyecto abierto con su plan de objetivos a la izquierda y la conversación con el agente en el centro"
              url="app.geniaops.com/projects/cierre-fiscal-q1"
              priority
            />
          </div>

          <dl className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[var(--bg-elev)] px-6 py-7 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-[30px] font-semibold text-fg">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-[13.5px] text-fg-muted">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------------------------------------------------- qué es */}
      <section
        id="que-es"
        className="scroll-mt-24 border-y border-border bg-[var(--bg-elev)]"
      >
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-[28px] font-semibold sm:text-[34px]">
            ¿Qué es {SITE.name}?
          </h2>
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-fg-muted">
            <p>
              <strong className="font-semibold text-fg">{SITE.name}</strong> es una
              aplicación web de gestión de proyectos asistida por agentes de inteligencia
              artificial, desarrollada por {SITE.company}. Está pensada para equipos que
              acumulan información dispersa —correos, facturas, contratos, documentos,
              repositorios— y necesitan convertirla en trabajo hecho.
            </p>
            <p>
              El usuario conecta sus fuentes de información mediante autorización OAuth
              2.0. {SITE.name} indexa ese contenido en un grafo de conocimiento privado y
              permite dos cosas: preguntar en lenguaje natural sobre toda esa información,
              y encargar trabajo a agentes de IA que la usan como contexto para planificar
              y ejecutar tareas concretas.
            </p>
            <p>
              Todo el trabajo del agente es visible y reversible: cada fuente consultada y
              cada acción realizada quedan registradas, y el usuario puede intervenir en
              cualquier momento. Puedes consultar cómo tratamos la información en nuestra{" "}
              <Link href="/privacy" className="link-accent">
                Política de Privacidad
              </Link>{" "}
              y las condiciones de uso en los{" "}
              <Link href="/terms" className="link-accent">
                Términos del Servicio
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- producto */}
      <section id="producto" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            eyebrow="Producto"
            title="Del objetivo al trabajo hecho, sin perder el hilo"
            body="Cuatro piezas que funcionan juntas: un planificador, agentes que ejecutan, tus datos como contexto y trazabilidad de todo lo que ocurre."
          />

          <div className="mt-16 space-y-24">
            {FEATURES.map((f, i) => (
              <article
                key={f.id}
                id={f.id}
                className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-text">
                    {f.eyebrow}
                  </p>
                  <h3 className="mt-3 text-[26px] font-semibold sm:text-[30px]">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-[15.5px] leading-relaxed text-fg-muted">
                    {f.body}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {f.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[14.5px] text-fg-muted">
                        <Check />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                  <Shot name={f.shot} alt={f.shotAlt} url={f.url} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- cómo funciona */}
      <section
        id="como-funciona"
        className="scroll-mt-24 border-y border-border bg-[var(--bg-elev)]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            eyebrow="Cómo funciona"
            title="Cuatro pasos, de la conexión al resultado"
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="glass-card p-6">
                <span className="font-mono text-[13px] font-medium text-accent-text">
                  {s.n}
                </span>
                <h3 className="mt-3 text-[17px] font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-fg-muted">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* --------------------------------------------------------- fuentes */}
      <section id="fuentes" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            eyebrow="Integraciones"
            title="Conecta las fuentes que ya usas"
            body="Autorización mediante OAuth 2.0 y sincronización incremental. Conectas solo lo que quieras y lo revocas cuando quieras."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SOURCES.map((s) => (
              <li key={s.name} className="glass-card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-[var(--radius)] border border-accent-border bg-accent-soft">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d={s.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 text-[15px] font-semibold">{s.name}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-muted">
                  {s.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------- seguridad */}
      <section
        id="seguridad"
        className="scroll-mt-24 border-y border-border bg-[var(--bg-elev)]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead
            eyebrow="Seguridad y privacidad"
            title="Dar acceso a tus datos exige garantías"
            body="Estas son las nuestras. El detalle jurídico completo está en la Política de Privacidad."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SECURITY.map((s) => (
              <article key={s.title} className="glass-card p-6">
                <h3 className="text-[15.5px] font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-fg-muted">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-[14px] text-fg-muted">
            Lee la{" "}
            <Link href="/privacy" className="link-accent">
              Política de Privacidad
            </Link>{" "}
            completa o escríbenos a{" "}
            <a href={`mailto:${SITE.email}`} className="link-accent">
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- casos uso */}
      <section id="casos" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHead eyebrow="Casos de uso" title="Para qué lo usan los equipos" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {USE_CASES.map((c) => (
              <article key={c.title} className="glass-card p-7">
                <h3 className="text-[18px] font-semibold">{c.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-fg-muted">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- faq */}
      <section
        id="faq"
        className="scroll-mt-24 border-y border-border bg-[var(--bg-elev)]"
      >
        <div className="mx-auto max-w-3xl px-6 py-20">
          <SectionHead eyebrow="FAQ" title="Preguntas frecuentes" />
          <div className="mt-12 border-y border-border">
            {FAQ.map((item) => (
              <details key={item.q} className="group border-b border-border py-5 last:border-b-0">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15.5px] font-medium text-fg">
                  {item.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden
                    className="mt-1 shrink-0 text-fg-dim transition group-open:rotate-45"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-3 pr-8 text-[14.5px] leading-relaxed text-fg-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- cta */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="glass-card dot-grid px-8 py-16 text-center">
            <h2 className="text-[30px] font-semibold sm:text-[38px]">
              Pon tus datos a trabajar
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-fg-muted">
              {SITE.name} está en acceso por invitación. Cuéntanos tu caso de uso y te
              damos acceso.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={MAILTO} className="btn btn-primary">
                Solicitar acceso
              </a>
              <a href={`mailto:${SITE.email}`} className="btn">
                Hablar con nosotros
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

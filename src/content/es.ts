import { SITE } from "@/lib/site";
import { SOURCE_ICONS } from "./icons";
import type { Dict } from "./types";

export const es: Dict = {
  lang: "es",
  tagline: "IA empresarial. Control operativo.",

  description: "Genia Ops coordina personas y agentes de IA para planificar y ejecutar operaciones con gobierno, conocimiento empresarial reutilizable y supervisión humana. Versión cerrada, solo por invitación.",
  keywords: [
  "Genia Ops",
  "IA empresarial",
  "empresas nativas de IA",
  "gobierno de IA",
  "orquestación entre personas e IA",
  "orquestación entre agentes de IA",
  "conocimiento empresarial"
],

  nav: [
    { href: "#for-business", label: "Para tu empresa" },
    { href: "#product", label: "Producto" },
    { href: "#how-it-works", label: "Cómo funciona" },
    { href: "/use-cases", label: "Casos de uso" },
    { href: "#integrations", label: "Integraciones" },
    { href: "#security", label: "Gobierno" },
    { href: "#faq", label: "FAQ" },
  ],
  navAria: "Principal",
  skipToContent: "Saltar al contenido",
  homeAria: `${SITE.name} — inicio`,
  requestAccess: "Solicitar acceso",
  requestAccessSubject: "Solicitar acceso a Genia Ops",
  themeToLight: "Cambiar a tema claro",
  themeToDark: "Cambiar a tema oscuro",
  languageLabel: "Idioma",

  hero: {
  "badge": "Versión cerrada · Solo por invitación",
  "titleTop": "Construye una empresa",
  "titleAccent": "nativa de IA. Con control.",
  "lede": "reúne a personas y agentes de IA en torno a objetivos de negocio. Coordina la ejecución, gobierna los accesos y conserva el conocimiento del trabajo para que la productividad sea un activo de la organización, no una respuesta puntual.",
  "ctaSecondary": "Explorar la plataforma",
  "note": "Versión cerrada. Solicita una invitación en accounts@geniaops.com.",
  "shotAlt": "Proyecto de Genia Ops con objetivos, conversación con el agente y avance de ejecución"
},

  stats: [
  {
    "value": "Personas + IA",
    "label": "objetivos compartidos",
    "emphasis": true
  },
  {
    "value": "IA + IA",
    "label": "ejecución coordinada"
  },
  {
    "value": "Conocimiento",
    "label": "que conserva la empresa"
  }
],

  whatIs: {
  "title": "¿Qué es Genia Ops?",
  "paragraphs": [
    "**Genia Ops** es una plataforma de IA empresarial para organizaciones que quieren integrar la IA en su forma de operar. Genia alude a la IA generativa y es el nombre de la plataforma; Ops significa operaciones.",
    "Las personas fijan el rumbo y toman decisiones. Los agentes planifican, ejecutan y coordinan trabajo dependiente con el contexto empresarial autorizado. La orquestación entre personas e IA y entre agentes de IA forma parte del mismo modelo operativo.",
    "Los planes, las conversaciones y los entregables quedan como contexto reutilizable para el trabajo futuro, sujetos a los permisos y la conservación de datos. Consulta la [Política de Privacidad](/es/privacy) y los [Términos del Servicio](/es/terms)."
  ]
},

  audiences: {
  "eyebrow": "Para tu empresa",
  "title": "Un modelo operativo. Distintas etapas.",
  "body": "Ejemplos ilustrativos, no resultados de clientes. Empieza por un objetivo relevante y define quién decide.",
  "items": [
    {
      "id": "startups",
      "label": "Startups",
      "title": "Nativa de IA desde el primer día",
      "body": "Da a un equipo compacto una forma compartida de delegar, revisar y reutilizar trabajo.",
      "example": "Ejemplo: preparar un plan de incorporación de clientes a partir de notas comerciales, acuerdos y documentación de producto.",
      "outcome": "Resultado previsto: un plan revisable y contexto reutilizable para futuras incorporaciones."
    },
    {
      "id": "scaleups",
      "label": "Scaleups",
      "title": "Escala la ejecución, no la fragmentación",
      "body": "Coordina el trabajo de equipos en crecimiento sin perder las decisiones que lo sustentan.",
      "example": "Ejemplo: los agentes reúnen el gasto y las condiciones de renovación de proveedores; finanzas y operaciones revisan las acciones propuestas.",
      "outcome": "Resultado previsto: un plan de renovaciones compartido con decisiones documentadas."
    },
    {
      "id": "enterprises",
      "label": "Grandes empresas",
      "title": "Integra la IA en operaciones con gobierno",
      "body": "Alinea equipos y agentes con accesos delimitados, responsables de decisión y conocimiento empresarial.",
      "example": "Ejemplo: coordinar la revisión documental entre unidades de negocio, con validación de hallazgos por el equipo legal.",
      "outcome": "Resultado previsto: hallazgos revisables y contexto conservado para trabajos posteriores."
    }
  ]
},

  difference: {
  "eyebrow": "La diferencia",
  "title": "Orquesta el trabajo, no solo el flujo.",
  "body": "Los orquestadores de automatización conectan eventos y acciones. Genia Ops se centra en coordinar objetivos, personas, agentes y contexto empresarial. Ambos enfoques pueden complementarse.",
  "items": [
    {
      "title": "Objetivos antes que secuencias",
      "body": "Describe el resultado, revisa el plan y adapta la ejecución según avanza el trabajo."
    },
    {
      "title": "Personas y agentes, juntos",
      "body": "Las personas dirigen y validan; los agentes coordinan tareas y entregan resultados según sus dependencias."
    },
    {
      "title": "Contexto más allá de una ejecución",
      "body": "Reutiliza planes, decisiones y entregables previos en lugar de empezar cada tarea desde cero."
    }
  ]
},

  ownership: {
  "eyebrow": "Productividad que permanece",
  "title": "El trabajo termina. El conocimiento permanece.",
  "body": "Tu empresa conserva el contexto del trabajo: objetivos, conversaciones, decisiones y entregables que los equipos y agentes autorizados pueden reutilizar. La productividad no consiste solo en terminar una tarea, sino en empezar la siguiente con más conocimiento. La conservación y la eliminación de datos se rigen por tu configuración y nuestra Política de Privacidad."
},

  product: {
    eyebrow: "Producto",
    title: "Del objetivo al trabajo hecho, sin perder el hilo",
    body: "Planificación, agentes coordinados, contexto autorizado y visibilidad del consumo en un mismo lugar.",
    features: [
      {
        id: "planning",
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
        id: "agents",
        eyebrow: "Ejecución supervisada",
        title: "Agentes que trabajan a la vista, no en una caja negra.",
        body: "Cada agente trabaja en su propio entorno aislado y va narrando lo que hace: qué fuente consulta, qué documento abre, qué conclusión saca. Puedes interrumpirle, corregirle o pedirle que cambie de rumbo en cualquier momento.",
        bullets: [
          "Revisa la actividad de herramientas en la conversación",
          "Interrumpe o redirige al agente en mitad de la tarea",
          "El agente pregunta cuando necesita una decisión tuya",
        ],
        shot: "chat",
        shotAlt:
          "Conversación con un agente de Genia Ops mostrando las herramientas que ha ejecutado y sus resultados",
        url: "app.geniaops.com/projects/cierre-fiscal",
      },
      {
        id: "data",
        eyebrow: "Tus datos",
        title: "Conecta las fuentes donde ya vive tu información.",
        body: "Convierte correos, documentos, archivos, repositorios y grabaciones en contexto empresarial reutilizable. Los agentes trabajan con las fuentes asignadas a su objetivo.",
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
        body: "Revisa el consumo de modelos junto a la actividad de los proyectos para entender los recursos utilizados y el trabajo producido.",
        bullets: [
          "Coste y tokens desglosados por proyecto y modelo",
          "Actividad de herramientas disponible para revisión",
          "Visibilidad del consumo para decisiones operativas",
        ],
        shot: "usage",
        shotAlt:
          "Panel de uso y consumo de Genia Ops con gráficas de tokens y coste de los últimos siete días",
        url: "app.geniaops.com/usage",
      },
    ],
  },

  how: {
    eyebrow: "Cómo funciona",
    title: "Cuatro pasos, de la conexión al resultado",
    steps: [
      {
        n: "01",
        title: "Conecta tus fuentes",
        body: "Autorizas por OAuth 2.0 las cuentas que elijas: correo, Drive, Dropbox, OneDrive, GitHub. Solo las que tú decidas, y puedes revocarlas cuando quieras.",
      },
      {
        n: "02",
        title: "Construye contexto empresarial reutilizable",
        body: "Genia Ops pone la información autorizada a disposición de preguntas, planes y ejecución.",
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
    ],
  },

  sources: {
    eyebrow: "Integraciones",
    title: "Conecta las fuentes que ya usas",
    body: "Autorización mediante OAuth 2.0 y sincronización incremental. Conectas solo lo que quieras y lo revocas cuando quieras.",
    items: [
      {
        name: "Gmail y Outlook",
        detail: "Correos, hilos y adjuntos, con sincronización incremental.",
        icon: SOURCE_ICONS.mail,
      },
      {
        name: "Google Drive",
        detail: "Documentos, hojas de cálculo y presentaciones.",
        icon: SOURCE_ICONS.drive,
      },
      {
        name: "Dropbox",
        detail: "Carpetas y archivos conectados.",
        icon: SOURCE_ICONS.dropbox,
      },
      {
        name: "OneDrive y SharePoint",
        detail: "Bibliotecas de documentos de tu organización.",
        icon: SOURCE_ICONS.onedrive,
      },
      {
        name: "GitHub",
        detail: "Repositorios, código y decisiones técnicas.",
        icon: SOURCE_ICONS.github,
      },
      {
        name: "Google Calendar",
        detail: "Eventos, reuniones y plazos.",
        icon: SOURCE_ICONS.calendar,
      },
      {
        name: "Vídeo y audio",
        detail: "Transcripción, resumen e índice temporal navegable.",
        icon: SOURCE_ICONS.video,
      },
      {
        name: "Tus proyectos",
        detail: "El histórico de trabajo previo, como contexto reutilizable.",
        icon: SOURCE_ICONS.projects,
      },
    ],
  },

  security: {
    eyebrow: "Gobierno, seguridad y privacidad",
    title: "Gobierna los accesos. Mantén la responsabilidad humana.",
    body: "Define qué fuentes puede usar cada objetivo, revisa la actividad y mantén la responsabilidad humana en decisiones relevantes. Consulta el tratamiento de datos en la Política de Privacidad.",
    items: [
      {
        title: "OAuth 2.0, nunca tus contraseñas",
        body: "El acceso a tus cuentas se concede mediante los flujos oficiales de cada proveedor. Genia Ops recibe un token revocable; tus credenciales nunca pasan por nuestros sistemas.",
      },
      {
        title: "Mínimo privilegio por objetivo",
        body: "Asigna fuentes de datos a cada objetivo. Limita una revisión de facturas a la información que necesita, sin conceder acceso a repositorios ajenos a la tarea.",
      },
      {
        title: "Aislamiento de ejecución",
        body: "La ejecución de agentes utiliza entornos aislados. El acceso a los datos se delimita al trabajo que autorizas.",
      },
      {
        title: "Actividad revisable",
        body: "Revisa la actividad de herramientas, las conversaciones y los resultados para entender el trabajo y validar sus conclusiones.",
      },
      {
        title: "Tus datos no entrenan modelos",
        body: "No usamos tu contenido para entrenar modelos, no lo vendemos ni lo compartimos con fines publicitarios. La Política de Privacidad detalla el tratamiento y las garantías de los proveedores.",
      },
      {
        title: "Acceso revocable",
        body: "Puedes desconectar una fuente o solicitar la eliminación de tus datos en cualquier momento, desde el producto o escribiéndonos.",
      },
    ],
    footnote: `Lee la [Política de Privacidad](/es/privacy) completa o escríbenos a [${SITE.email}](mailto:${SITE.email}).`,
  },

  useCases: {
    eyebrow: "Casos de uso",
    title: "Dónde poner la IA a trabajar",
    body: "Seis escenarios ilustrativos: el problema de negocio, un enfoque supervisado y los resultados previstos. No son resultados de clientes ni garantías de rendimiento.",
    readMore: "Ver el caso completo",
    indexTitle: "Casos de uso",
    indexMetaDescription:
      "Cómo usan Genia Ops los equipos: cierre fiscal, due diligence documental, auditoría de gasto, base de conocimiento interna, unificación de despachos de abogados y grupos educativos.",
    indexLede:
      "Cada caso parte de un problema concreto de organización de la información y termina en un resultado revisable. Elige el que se parezca al tuyo.",
    backToIndex: "Todos los casos de uso",
    allCases: "Ver todos los casos de uso",
  },

  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es Genia Ops exactamente?",
        a: "Genia Ops es una plataforma de IA empresarial para operaciones nativas de IA. Genia alude a la IA generativa y da nombre a la plataforma; Ops significa operaciones. Coordina personas y agentes de IA con objetivos, conocimiento autorizado y ejecución supervisada.",
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
        a: "Los agentes pueden utilizar las herramientas habilitadas dentro del acceso concedido; no todas las acciones requieren una aprobación independiente. Revisa la tarea y los permisos antes de ejecutar, supervisa la actividad e interrumpe o redirige el trabajo cuando sea necesario. Valida los resultados antes de utilizarlos.",
      },
      {
        q: "¿Se integra con las herramientas que ya usamos?",
        a: "Genia Ops trabaja con fuentes empresariales conectadas. Los casos de uso también describen entregas a SententIA para despachos y Kompa para centros educativos; confirma el alcance de la integración al solicitar tu invitación.",
      },
      {
        q: "¿Cómo evaluamos el tratamiento de datos?",
        a: `Consulta el tratamiento, la conservación y las transferencias internacionales en la Política de Privacidad. Escribe a ${SITE.email} para revisar los requisitos de despliegue antes de conectar información sensible.`,
      },
      {
        q: "¿Cómo consigo acceso?",
        a: `Genia Ops está en versión cerrada, solo por invitación. Escribe a ${SITE.email} con tu contexto empresarial para solicitar una invitación. El acceso no es automático.`,
      },
    ],
  },

  cta: {
  "title": "Haz de la IA parte de tu forma de operar.",
  "body": "Genia Ops está en versión cerrada, solo por invitación. Cuéntanos tu contexto empresarial en accounts@geniaops.com para solicitar una invitación.",
  "secondary": "Contactar"
},

  caseDetail: {
    who: "Para quién",
    scenario: "El escenario",
    problems: "Dónde se atasca hoy",
    approach: "Cómo ayuda Genia Ops",
    outcomes: "Qué queda hecho",
    sourcesUsed: "Fuentes que entran en juego",
    integration: "Integración",
    ctaTitle: "¿Te suena este escenario?",
    ctaBody:
      "Versión cerrada, solo por invitación. Describe tu caso de uso en accounts@geniaops.com para solicitar una invitación.",
  },

  footer: {
    blurb: "Genia Ops coordina personas y agentes de IA para planificar y ejecutar operaciones con gobierno, conocimiento empresarial reutilizable y supervisión humana. Versión cerrada, solo por invitación.",
    product: "Producto",
    legal: "Legal y contacto",
    privacy: "Política de Privacidad",
    terms: "Términos del Servicio",
    rights: "Versión cerrada. Solo por invitación.",
    madeIn: "Hecho en España.",
  },

  backHome: "← Volver al inicio",
  lastUpdated: "Última actualización:",
  legalEyebrow: "Legal",
};

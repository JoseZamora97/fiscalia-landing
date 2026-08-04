import { SITE } from "@/lib/site";
import { SOURCE_ICONS } from "./icons";
import type { Dict } from "./types";

export const es: Dict = {
  lang: "es",
  tagline: "Agentes de IA que planifican y ejecutan sobre tus propios datos",
  description:
    "Genia Ops es una plataforma de gestión de proyectos con agentes de IA. Conecta tu correo, tus documentos, tus archivos y tus repositorios, los organiza en un grafo de conocimiento privado y deja que agentes de IA planifiquen, propongan y ejecuten el trabajo bajo tu supervisión.",
  keywords: [
    "Genia Ops",
    "agentes de IA",
    "agentes autónomos",
    "gestión de proyectos con IA",
    "grafo de conocimiento",
    "automatización de procesos",
    "IA para empresas",
    "conectar Gmail y Outlook con IA",
    "extracción de facturas con IA",
    "asistente de IA sobre documentos",
  ],

  nav: [
    { href: "#product", label: "Producto" },
    { href: "#how-it-works", label: "Cómo funciona" },
    { href: "/use-cases", label: "Casos de uso" },
    { href: "#integrations", label: "Integraciones" },
    { href: "#security", label: "Seguridad" },
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
    badge: "Acceso por invitación",
    titleTop: "Agentes de IA que trabajan",
    titleAccent: "tus propios datos",
    lede: "conecta tu correo, tus documentos, tus archivos y tus repositorios, los organiza en un grafo de conocimiento privado y pone agentes de IA a planificar y ejecutar el trabajo — con cada paso a la vista y bajo tu supervisión.",
    ctaSecondary: "Ver el producto",
    note: "Sin tarjeta. Conectas solo las fuentes que quieras y las revocas cuando quieras.",
    shotAlt:
      "Genia Ops: un proyecto abierto con su plan de objetivos a la izquierda y la conversación con el agente en el centro",
  },

  stats: [
    { value: "∞", label: "fuentes de datos conectables", emphasis: true },
    { value: "UN", label: "grafo de conocimiento por organización" },
    { value: "TODAS", label: "las acciones del agente, auditables" },
  ],

  whatIs: {
    title: `¿Qué es ${SITE.name}?`,
    paragraphs: [
      `**${SITE.name}** es una aplicación web de gestión de proyectos asistida por agentes de inteligencia artificial, desarrollada por ${SITE.company}. Está pensada para equipos que acumulan información dispersa —correos, facturas, contratos, documentos, repositorios— y necesitan convertirla en trabajo hecho.`,
      `El usuario conecta sus fuentes de información mediante autorización OAuth 2.0. ${SITE.name} indexa ese contenido en un grafo de conocimiento privado y permite dos cosas: preguntar en lenguaje natural sobre toda esa información, y encargar trabajo a agentes de IA que la usan como contexto para planificar y ejecutar tareas concretas.`,
      "Todo el trabajo del agente es visible y reversible: cada fuente consultada y cada acción realizada quedan registradas, y el usuario puede intervenir en cualquier momento. Puedes consultar cómo tratamos la información en nuestra [Política de Privacidad](/es/privacy) y las condiciones de uso en los [Términos del Servicio](/es/terms).",
    ],
  },

  product: {
    eyebrow: "Producto",
    title: "Del objetivo al trabajo hecho, sin perder el hilo",
    body: "Cuatro piezas que funcionan juntas: un planificador, agentes que ejecutan, tus datos como contexto y trazabilidad de todo lo que ocurre.",
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
        id: "data",
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
        detail: "Carpetas y archivos, sincronizados en ambos sentidos.",
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
    eyebrow: "Seguridad y privacidad",
    title: "Dar acceso a tus datos exige garantías",
    body: "Estas son las nuestras. El detalle jurídico completo está en la Política de Privacidad.",
    items: [
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
    ],
    footnote: `Lee la [Política de Privacidad](/es/privacy) completa o escríbenos a [${SITE.email}](mailto:${SITE.email}).`,
  },

  useCases: {
    eyebrow: "Casos de uso",
    title: "Para qué lo usan los equipos",
    body: "Seis escenarios reales, contados de principio a fin: qué duele, qué hace Genia Ops y qué queda hecho al terminar.",
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
        q: "¿Se integra con las herramientas que ya usamos?",
        a: "Sí. Además de las fuentes de datos estándar, Genia Ops se conecta con plataformas sectoriales como SententIA para despachos de abogados o Kompa para centros educativos, de modo que el trabajo que produce el agente aterriza en la herramienta donde tu equipo ya trabaja.",
      },
      {
        q: "¿Dónde se guardan mis datos?",
        a: `En infraestructura gestionada por ${SITE.company} dentro de la Unión Europea. Puedes solicitar la eliminación de tus datos en cualquier momento escribiendo a ${SITE.email}.`,
      },
      {
        q: "¿Cómo consigo acceso?",
        a: `Genia Ops está disponible por invitación mientras completamos el despliegue general. Escríbenos a ${SITE.email} contándonos brevemente tu caso de uso y te damos acceso.`,
      },
    ],
  },

  cta: {
    title: "Pon tus datos a trabajar",
    body: `${SITE.name} está en acceso por invitación. Cuéntanos tu caso de uso y te damos acceso.`,
    secondary: "Hablar con nosotros",
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
      "Cuéntanos cómo trabajáis hoy y te enseñamos cómo quedaría con Genia Ops.",
  },

  footer: {
    blurb: `${SITE.name} conecta tus fuentes de información, las organiza en un grafo de conocimiento privado y pone agentes de IA a planificar y ejecutar el trabajo bajo tu supervisión.`,
    product: "Producto",
    legal: "Legal y contacto",
    privacy: "Política de Privacidad",
    terms: "Términos del Servicio",
    rights: `${SITE.name} es un producto de ${SITE.company}.`,
    madeIn: "Hecho en España.",
  },

  backHome: "← Volver al inicio",
  lastUpdated: "Última actualización:",
  legalEyebrow: "Legal",
};

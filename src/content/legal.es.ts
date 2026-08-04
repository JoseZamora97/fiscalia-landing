import { SITE } from "@/lib/site";
import type { LegalDoc } from "./types";

const UPDATED = "27 de julio de 2026";

export const privacyEs: LegalDoc = {
  title: "Política de Privacidad",
  description:
    "Cómo Genia Ops recopila, utiliza, comparte y protege tus datos, incluido el tratamiento de los datos obtenidos de las APIs de Google.",
  updated: UPDATED,
  blocks: [
    {
      p: `Esta Política de Privacidad describe cómo **${SITE.company}** («nosotros») trata la información personal en relación con la aplicación **${SITE.name}** (el «Servicio»), accesible en [${SITE.url}](${SITE.url}).`,
    },
    {
      p: `${SITE.name} es una plataforma de gestión de proyectos con agentes de inteligencia artificial. El Servicio se conecta, con tu autorización expresa, a las fuentes de datos que tú elijas (por ejemplo, tu cuenta de correo o tu almacenamiento en la nube), organiza ese contenido en un grafo de conocimiento privado y permite que agentes de IA te ayuden a planificar y ejecutar trabajo sobre esa información.`,
    },

    { h2: "1. Responsable del tratamiento" },
    {
      p: `**${SITE.company}**. Correo de contacto: [${SITE.email}](mailto:${SITE.email}).`,
    },
    {
      p: "Para cualquier cuestión relativa a esta política o al ejercicio de tus derechos, puedes escribirnos a la dirección anterior.",
    },

    { h2: "2. Qué información recopilamos" },
    { h3: "2.1 Información de cuenta" },
    {
      ul: [
        "Tu dirección de correo electrónico, nombre e imagen de perfil, para identificarte y permitirte iniciar sesión.",
        "Datos técnicos básicos necesarios para operar el Servicio, como registros de acceso y errores.",
      ],
    },
    { h3: "2.2 Contenido de las fuentes que conectas" },
    {
      p: "Cuando conectas una fuente de datos, accedemos al contenido necesario para prestar las funciones que has activado. Según la fuente, esto puede incluir:",
    },
    {
      ul: [
        "**Correo electrónico** (Gmail, Outlook): remitente, destinatarios, asunto, fecha, cuerpo del mensaje y archivos adjuntos.",
        "**Almacenamiento en la nube** (Google Drive, Dropbox, OneDrive): nombres, rutas, metadatos y contenido de los archivos y carpetas a los que concedes acceso.",
        "**Calendario**: eventos, fechas y participantes.",
        "**Repositorios de código** (GitHub): estructura de archivos y contenido de los repositorios que autorices.",
        "**Vídeo**: los archivos que subas y las transcripciones, resúmenes e índices generados a partir de ellos.",
      ],
    },
    {
      p: "Solo accedemos a las fuentes que conectas de forma explícita. No accedemos a ninguna cuenta que no hayas autorizado.",
    },
    { h3: "2.3 Contenido que generas en el Servicio" },
    {
      ul: [
        "Proyectos, objetivos, tareas y directrices que creas.",
        "Conversaciones con los agentes de IA y los resultados que estos producen.",
      ],
    },

    { h2: "3. Datos obtenidos de las APIs de Google" },
    {
      p: "Si conectas una cuenta de Google, solicitamos únicamente los permisos («scopes») necesarios para las funciones que utilizas. Te explicamos cada uno:",
    },
    {
      ul: [
        "**`userinfo.email`** y **`userinfo.profile`**: para identificarte, crear tu cuenta y mostrar tu perfil dentro del Servicio.",
        "**`gmail.readonly`**: para leer e indexar tus correos y adjuntos, de modo que los agentes puedan buscar en ellos y utilizarlos como contexto en las tareas que les encargas.",
        "**`gmail.modify`**: para realizar, a petición tuya, acciones de organización sobre tu buzón, como marcar mensajes como leídos o aplicar etiquetas. No utilizamos este permiso para enviar correos en tu nombre sin tu instrucción explícita ni para eliminar mensajes de forma automática.",
      ],
    },
    { h3: "3.1 Uso Limitado (Google API Services User Data Policy)" },
    {
      p: `El uso y la transferencia por parte de ${SITE.name} de la información recibida de las APIs de Google se ajustará a la [Política de Datos de Usuario de los Servicios de API de Google](https://developers.google.com/terms/api-services-user-data-policy), incluidos sus requisitos de **Uso Limitado**. En concreto:`,
    },
    {
      ul: [
        `Solo utilizamos los datos de Google para proporcionar o mejorar las funciones visibles para el usuario que resultan evidentes en la interfaz de ${SITE.name}.`,
        "**No transferimos ni vendemos estos datos con fines publicitarios, de creación de perfiles publicitarios ni de estudios de mercado.**",
        "**No utilizamos los datos de Google para entrenar, reentrenar ni afinar modelos de inteligencia artificial generalizados** de terceros ni propios.",
        "No permitimos que ninguna persona lea estos datos, salvo que (i) nos hayas dado tu consentimiento expreso para leer mensajes concretos, (ii) sea necesario por motivos de seguridad (por ejemplo, investigar un abuso), (iii) sea necesario para cumplir la ley, o (iv) los datos estén agregados y anonimizados y se usen para operaciones internas.",
      ],
    },

    { h2: "4. Para qué usamos la información" },
    {
      ul: [
        "Prestar y mantener el Servicio y sus funciones.",
        "Permitir que los agentes de IA localicen, relacionen y utilicen la información necesaria para completar las tareas que les asignas.",
        "Autenticarte y proteger la seguridad de las cuentas.",
        "Diagnosticar incidencias y mejorar la fiabilidad del Servicio.",
        "Cumplir con nuestras obligaciones legales.",
      ],
    },
    {
      p: "**No vendemos tu información personal ni la utilizamos con fines publicitarios.**",
    },

    { h2: "5. Procesamiento mediante modelos de lenguaje" },
    {
      p: `${SITE.name} funciona apoyándose en modelos de lenguaje de proveedores externos. Para responder a tus peticiones, fragmentos del contenido al que has dado acceso pueden enviarse a esos proveedores en calidad de **encargados del tratamiento**, exclusivamente para generar la respuesta o completar la tarea que has solicitado.`,
    },
    {
      p: "Seleccionamos proveedores que se comprometen contractualmente a **no utilizar el contenido enviado a través de su API para entrenar sus modelos**. En ningún caso se transfieren datos obtenidos de las APIs de Google para el entrenamiento de modelos de IA generalizados.",
    },

    { h2: "6. Con quién compartimos la información" },
    {
      p: "No compartimos tu información personal con terceros salvo en los siguientes casos:",
    },
    {
      ul: [
        "**Proveedores de infraestructura y servicios** que actúan por cuenta nuestra (alojamiento, bases de datos y los proveedores de modelos de lenguaje descritos en el apartado 5), sujetos a obligaciones de confidencialidad.",
        "**Obligación legal**: cuando sea necesario para cumplir una ley, un requerimiento judicial o una solicitud legítima de una autoridad.",
        "**Protección de derechos**: cuando sea necesario para prevenir un fraude, un abuso o una amenaza a la seguridad.",
      ],
    },

    { h2: "7. Conservación y eliminación" },
    {
      p: "Conservamos tu información mientras mantengas una cuenta activa y la fuente de datos permanezca conectada. Puedes:",
    },
    {
      ul: [
        "**Desconectar una fuente** en cualquier momento desde la aplicación; dejaremos de sincronizar nuevo contenido de inmediato.",
        "**Revocar el acceso de Google** directamente desde [la página de permisos de tu cuenta de Google](https://myaccount.google.com/permissions).",
        `**Solicitar la eliminación** de tu cuenta y de todos los datos asociados escribiendo a [${SITE.email}](mailto:${SITE.email}). Atenderemos tu solicitud en un plazo máximo de 30 días.`,
      ],
    },
    {
      p: "Podremos conservar copias de seguridad durante un periodo limitado y los registros estrictamente necesarios para cumplir obligaciones legales.",
    },

    { h2: "8. Seguridad" },
    {
      p: "Aplicamos medidas técnicas y organizativas para proteger tu información, entre ellas: cifrado en tránsito mediante TLS, almacenamiento de credenciales de acceso en forma de tokens OAuth (nunca guardamos las contraseñas de tus cuentas), credenciales temporales y de alcance limitado para cada agente, aislamiento de la ejecución de los agentes en entornos separados y control de acceso según el principio de mínimo privilegio.",
    },
    {
      p: "Ningún sistema es completamente seguro, pero trabajamos de forma continua para reducir los riesgos y responder con rapidez ante cualquier incidente.",
    },

    { h2: "9. Tus derechos" },
    {
      p: "De acuerdo con el Reglamento General de Protección de Datos (RGPD) y demás normativa aplicable, tienes derecho a acceder a tus datos, rectificarlos, suprimirlos, limitar u oponerte a su tratamiento y solicitar su portabilidad. También puedes retirar tu consentimiento en cualquier momento y presentar una reclamación ante la autoridad de control competente (en España, la Agencia Española de Protección de Datos).",
    },
    {
      p: `Para ejercer estos derechos escríbenos a [${SITE.email}](mailto:${SITE.email}).`,
    },

    { h2: "10. Menores" },
    {
      p: "El Servicio no está dirigido a menores de 16 años y no recopilamos de forma consciente información de menores de esa edad.",
    },

    { h2: "11. Transferencias internacionales" },
    {
      p: "Algunos de nuestros proveedores pueden tratar información fuera del Espacio Económico Europeo. En esos casos, nos aseguramos de que existan garantías adecuadas, como las cláusulas contractuales tipo aprobadas por la Comisión Europea.",
    },

    { h2: "12. Cambios en esta política" },
    {
      p: "Podemos actualizar esta política para reflejar cambios en el Servicio o en la normativa aplicable. Publicaremos la versión actualizada en esta misma página, indicando la fecha de última modificación. Si los cambios son sustanciales, te lo notificaremos por un medio adecuado.",
    },

    { h2: "13. Contacto" },
    {
      p: `Si tienes cualquier duda sobre esta Política de Privacidad, escríbenos a [${SITE.email}](mailto:${SITE.email}).`,
    },
  ],
};

export const termsEs: LegalDoc = {
  title: "Términos del Servicio",
  description:
    "Condiciones de uso de Genia Ops, la plataforma de gestión de proyectos con agentes de IA de ZC Tech Partners.",
  updated: UPDATED,
  blocks: [
    {
      p: `Estos Términos regulan el acceso y uso de **${SITE.name}** (el «Servicio»), ofrecido por **${SITE.company}**. Al utilizar el Servicio aceptas estos Términos.`,
    },

    { h2: "1. Descripción del Servicio" },
    {
      p: `${SITE.name} es una plataforma de gestión de proyectos que utiliza agentes de inteligencia artificial para analizar la información de las fuentes de datos que el usuario conecta y ayudarle a planificar y ejecutar trabajo. El Servicio se presta actualmente por invitación.`,
    },

    { h2: "2. Cuentas y acceso" },
    {
      ul: [
        "Debes proporcionar información veraz al crear tu cuenta y mantenerla actualizada.",
        "Eres responsable de la confidencialidad de tus credenciales y de la actividad realizada desde tu cuenta.",
        "Debes tener capacidad legal para contratar y ser mayor de 16 años.",
      ],
    },

    { h2: "3. Fuentes de datos conectadas" },
    {
      p: "Al conectar una fuente de datos declaras que estás autorizado a hacerlo y que dispones de los derechos necesarios sobre la información a la que concedes acceso. El tratamiento de esa información se rige por nuestra [Política de Privacidad](/es/privacy).",
    },

    { h2: "4. Uso aceptable" },
    { p: "No está permitido utilizar el Servicio para:" },
    {
      ul: [
        "Infringir la ley o derechos de terceros.",
        "Acceder a información sobre la que no tengas autorización legítima.",
        "Intentar vulnerar la seguridad del Servicio, sus sistemas o los de terceros.",
        "Generar o distribuir contenido ilícito, fraudulento o dañino.",
        "Realizar un uso automatizado que degrade el rendimiento del Servicio para otros usuarios.",
      ],
    },

    { h2: "5. Resultados generados por IA" },
    {
      p: "El Servicio genera planes, resúmenes y respuestas mediante modelos de inteligencia artificial. Estos resultados **pueden contener errores o imprecisiones** y se proporcionan como apoyo, no como asesoramiento profesional. Eres responsable de revisar y validar cualquier resultado antes de actuar sobre él, especialmente en contextos legales, fiscales, financieros o médicos.",
    },

    { h2: "6. Propiedad intelectual" },
    {
      p: `El Servicio, su software, su diseño y sus marcas pertenecen a ${SITE.company}. Los contenidos que aportas y los resultados generados a partir de ellos siguen siendo tuyos; nos concedes únicamente la licencia necesaria para operar el Servicio y prestarte sus funciones.`,
    },

    { h2: "7. Disponibilidad y modificaciones" },
    {
      p: "Procuramos mantener el Servicio disponible, pero no garantizamos un funcionamiento ininterrumpido ni libre de errores. Podemos modificar, suspender o discontinuar funciones, informando con antelación razonable cuando el cambio sea sustancial.",
    },

    { h2: "8. Limitación de responsabilidad" },
    {
      p: `En la máxima medida permitida por la ley, ${SITE.company} no será responsable de daños indirectos, lucro cesante ni pérdida de datos derivados del uso del Servicio. Nada en estos Términos excluye la responsabilidad que no pueda excluirse legalmente.`,
    },

    { h2: "9. Terminación" },
    {
      p: "Puedes dejar de usar el Servicio y solicitar la eliminación de tu cuenta en cualquier momento. Podemos suspender el acceso en caso de incumplimiento grave de estos Términos, informándote del motivo cuando sea posible.",
    },

    { h2: "10. Ley aplicable" },
    {
      p: "Estos Términos se rigen por la legislación española. Cualquier controversia se someterá a los juzgados y tribunales competentes, respetando los derechos que la normativa de consumo reconozca al usuario.",
    },

    { h2: "11. Contacto" },
    {
      p: `Para cualquier consulta sobre estos Términos, escríbenos a [${SITE.email}](mailto:${SITE.email}).`,
    },
  ],
};

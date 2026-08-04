import type { UseCase } from "./types";

export const useCasesEs: UseCase[] = [
  {
    slug: "tax-close",
    eyebrow: "Finanzas",
    title: "Cierre fiscal y contable",
    fullTitle: "Cierre fiscal y contable trimestral sin perseguir justificantes",
    summary:
      "Cruza los movimientos bancarios con las facturas que llegaron por correo, localiza los justificantes que faltan y deja el trimestre listo para la asesoría.",
    metaDescription:
      "Cómo Genia Ops cruza extractos bancarios, correos y facturas para cerrar el trimestre: conciliación automática, lista de justificantes que faltan y carpeta lista para la asesoría.",
    who: "Equipos de administración y finanzas de pymes, autónomos con volumen y despachos que preparan el cierre de sus clientes.",
    scenario: [
      "El trimestre se cierra con la misma escena de siempre: un extracto bancario en una pestaña, el buzón de correo en otra y una carpeta de descargas con facturas nombradas `factura_final_v2.pdf`. Cada cargo hay que identificarlo, buscar el correo donde llegó la factura, comprobar que el importe cuadra y guardarla donde toca.",
      "El problema no es la dificultad: es el volumen y la dispersión. La información existe, pero vive repartida entre el banco, tres buzones, el Drive del departamento y los adjuntos que alguien se reenvió a sí mismo. Nadie tiene la foto completa hasta que se sienta a montarla a mano, y para entonces la asesoría ya está pidiendo los datos.",
      "El resultado típico son dos o tres días de trabajo mecánico al trimestre, más las idas y venidas por los justificantes que no aparecen y que acaban perdiéndose como gasto no deducible.",
    ],
    problems: [
      "El justificante de un cargo puede estar en un correo, en un adjunto o en una carpeta compartida, y no hay forma de saberlo sin mirar",
      "Las suscripciones recurrentes generan decenas de facturas idénticas salvo por la fecha y el importe",
      "Los importes no siempre coinciden: comisiones, cambio de divisa, cargos agrupados",
      "Cuando falta un justificante, nadie sabe si nunca llegó o si está traspapelado",
      "El conocimiento del proceso vive en la cabeza de una persona",
    ],
    approach: [
      {
        title: "Indexa el buzón y las carpetas donde ya están las facturas",
        body: "Conectas Gmail u Outlook y el almacenamiento en la nube que uséis. Genia Ops indexa correos, hilos y adjuntos en el grafo de conocimiento: cada PDF queda relacionado con el correo que lo trajo, el remitente y la fecha.",
      },
      {
        title: "Sube el extracto y el agente lo concilia",
        body: "Le pasas el extracto bancario del periodo y describes el objetivo en una frase. El planificador lo descompone: un objetivo por proveedor recurrente y otro para los cargos sueltos, cada uno con sus tareas.",
      },
      {
        title: "Cada agente busca, compara y documenta",
        body: "El agente asignado a cada objetivo busca la factura de cada cargo, comprueba el importe y la fecha, y deja anotado dónde la ha encontrado. Cuando el importe no cuadra —una comisión, un cambio de divisa— lo señala en lugar de forzar la coincidencia.",
      },
      {
        title: "Te pregunta en lugar de inventar",
        body: "Si un cargo no tiene justificante localizable, el agente no lo da por bueno: abre la duda en el chat con lo que sí ha encontrado, y tú decides si se reclama al proveedor o se marca como no deducible.",
      },
    ],
    outcomes: [
      "Una conciliación cargo a cargo con el justificante enlazado a su origen",
      "La lista corta y accionable de lo que falta, con el proveedor al que reclamarlo",
      "Las facturas recogidas y ordenadas en la carpeta que uséis con la asesoría",
      "Un registro de cómo se llegó a cada conclusión, revisable meses después",
    ],
    sources: ["Gmail y Outlook", "Google Drive", "Dropbox", "OneDrive"],
  },

  {
    slug: "document-due-diligence",
    eyebrow: "Legal",
    title: "Due diligence documental",
    fullTitle: "Due diligence documental sobre cientos de contratos",
    summary:
      "Revisa cientos de contratos, extrae las cláusulas relevantes y clasifícalas por severidad, con enlace a la página exacta del original.",
    metaDescription:
      "Cómo Genia Ops acelera una due diligence documental: revisa cientos de contratos, extrae cláusulas de cambio de control, exclusividad o penalización y las clasifica por severidad citando el original.",
    who: "Equipos legales, asesores en operaciones corporativas y responsables de compliance que reciben un data room y tienen fecha de entrega.",
    scenario: [
      "Llega un data room con seiscientos documentos y una fecha de entrega en tres semanas. Contratos marco, addenda que modifican contratos que a su vez modifican otros, escaneos de los años noventa y hojas de cálculo con el inventario de proveedores.",
      "Lo que se busca es concreto: cláusulas de cambio de control, exclusividades, penalizaciones, renovaciones automáticas, limitaciones de responsabilidad fuera de mercado. Lo que consume el tiempo no es analizarlas, es encontrarlas. La lectura de cribado se lleva la mayor parte de las horas facturables y es justo la parte que menos valor aporta.",
      "Y hay un riesgo peor que el coste: una cláusula relevante enterrada en el anexo de un addendum que nadie llegó a abrir.",
    ],
    problems: [
      "El volumen obliga a repartir la lectura entre varias personas, con criterios que divergen",
      "Los escaneos sin capa de texto se quedan fuera de cualquier búsqueda",
      "Una cláusula puede estar modificada por un documento posterior guardado en otra carpeta",
      "Rehacer el trabajo cuando llega una tanda nueva de documentos cuesta casi lo mismo que la primera vez",
      "Justificar un hallazgo exige volver a localizar la página exacta",
    ],
    approach: [
      {
        title: "El data room entero pasa a ser consultable",
        body: "Conectas la carpeta compartida —Drive, Dropbox, OneDrive o SharePoint— y Genia Ops indexa el contenido, incluidos los escaneos, en el grafo de conocimiento. A partir de ahí, cualquier pregunta se responde sobre el corpus completo, no sobre lo que alguien recuerda haber leído.",
      },
      {
        title: "Defines los criterios una vez, se aplican a todo",
        body: "Describes qué buscas y con qué severidad. El planificador convierte ese criterio en objetivos y tareas concretos, de modo que la misma vara de medir se aplica a los seiscientos documentos, no una interpretación distinta por revisor.",
      },
      {
        title: "Cada hallazgo cita su origen",
        body: "El agente devuelve la cláusula, el documento y la posición exacta dentro de él. La revisión humana deja de ser lectura de cribado y pasa a ser validación de hallazgos concretos.",
      },
      {
        title: "Relaciona el documento con lo que lo modifica",
        body: "Al estar todo en el mismo grafo, un contrato aparece junto a sus addenda y junto a los correos donde se negoció, de modo que una cláusula no se lee fuera del contexto que la cambió.",
      },
    ],
    outcomes: [
      "Un inventario de cláusulas relevantes clasificadas por severidad",
      "Cada hallazgo enlazado al documento y la página del original",
      "Las lagunas explícitas: qué documentos faltan o no se pudieron leer",
      "Un corpus que sigue siendo consultable cuando aparecen preguntas nuevas",
    ],
    sources: ["Google Drive", "Dropbox", "OneDrive y SharePoint", "Gmail y Outlook"],
  },

  {
    slug: "vendor-spend-audit",
    eyebrow: "Operaciones",
    title: "Auditoría de gasto en proveedores",
    fullTitle: "Auditoría del gasto recurrente en proveedores y suscripciones",
    summary:
      "Inventaría las suscripciones activas a partir de correos y extractos, y detecta duplicidades, subidas de precio y renovaciones automáticas.",
    metaDescription:
      "Cómo Genia Ops inventaría el gasto recurrente: cruza extractos y correos para encontrar suscripciones duplicadas, subidas de precio silenciosas y renovaciones automáticas antes de que se cobren.",
    who: "Dirección financiera, operaciones e IT en organizaciones donde varias personas pueden contratar herramientas con tarjeta.",
    scenario: [
      "Nadie contrató de más a propósito. Simplemente, durante tres años, distintos equipos fueron dando de alta herramientas con la tarjeta de empresa: dos gestores de tareas, tres almacenamientos en la nube, licencias de gente que ya no está y un plan que se duplicó cuando alguien creó una segunda cuenta para una prueba.",
      "El gasto recurrente es el que menos se mira porque cada línea es pequeña. Sumado, es una partida seria, y la única traza completa de qué se contrató y en qué condiciones son los correos de alta y las facturas mensuales, repartidos entre buzones personales.",
      "Cuando alguien pregunta cuánto se gasta en software, la respuesta honesta suele ser una estimación.",
    ],
    problems: [
      "El mismo proveedor aparece con nombres distintos en el extracto y en la factura",
      "Las subidas de precio llegan por correo y nadie las revisa",
      "Las renovaciones anuales se cobran antes de que dé tiempo a decidir",
      "Hay licencias asignadas a personas que ya no están en la organización",
      "El coste real por herramienta exige sumar cargos en varias divisas y periodos",
    ],
    approach: [
      {
        title: "Reconstruye el inventario desde el rastro real",
        body: "Genia Ops indexa los correos de alta, las facturas y los avisos de renovación, y los cruza con los cargos del extracto. El inventario no se declara a mano: se reconstruye a partir de lo que efectivamente se ha pagado.",
      },
      {
        title: "Agrupa lo que es el mismo proveedor",
        body: "El agente reconoce que un cargo, una factura y un correo de bienvenida se refieren al mismo servicio aunque el literal del banco no se parezca al nombre comercial, y lo agrupa en una sola línea.",
      },
      {
        title: "Señala lo que merece una decisión",
        body: "Duplicidades entre herramientas que hacen lo mismo, planes con más asientos que usuarios activos, subidas de precio respecto al periodo anterior y renovaciones que vencen en los próximos noventa días.",
      },
      {
        title: "Deja el aviso antes del cargo",
        body: "Con las renovaciones fechadas y los plazos de preaviso extraídos de las condiciones, la decisión de renovar o cancelar se toma con margen y no al ver el cargo en el extracto.",
      },
    ],
    outcomes: [
      "El inventario de suscripciones activas con su coste anualizado",
      "La lista de duplicidades y licencias sin uso, con el ahorro estimado",
      "Un calendario de renovaciones con sus plazos de preaviso",
      "El histórico de precios de cada proveedor, para negociar con datos",
    ],
    sources: ["Gmail y Outlook", "Google Drive", "Dropbox", "Google Calendar"],
  },

  {
    slug: "internal-knowledge-base",
    eyebrow: "Conocimiento",
    title: "Base de conocimiento interna",
    fullTitle: "Base de conocimiento interna sobre lo que el equipo ya escribió",
    summary:
      "Pregunta en lenguaje natural sobre tu documentación, tus repositorios y tu histórico de decisiones, y recibe la respuesta con la fuente citada.",
    metaDescription:
      "Cómo Genia Ops convierte documentación, correos, repositorios y grabaciones en una base de conocimiento consultable en lenguaje natural, con la fuente citada en cada respuesta.",
    who: "Equipos de producto, ingeniería y operaciones que arrastran años de decisiones repartidas entre documentos, hilos de correo y repositorios.",
    scenario: [
      "La pregunta se repite cada pocas semanas: «¿por qué hicimos esto así?». La respuesta existe —está en un documento de hace dos años, en un hilo de correo con el cliente o en el mensaje de un commit—, pero encontrarla cuesta más que volver a decidirlo, así que se vuelve a decidir. A veces distinto.",
      "El coste no es solo el tiempo de búsqueda. Es incorporar a alguien nuevo y que dependa de interrumpir a los veteranos, es repetir un análisis que ya se hizo, y es perder el contexto de las decisiones cuando quien las tomó se va.",
      "La documentación formal cubre una parte pequeña de ese conocimiento. La mayor parte está en el material de trabajo del día a día, que nunca se organizó porque organizarlo era un proyecto en sí mismo.",
    ],
    problems: [
      "El buscador de cada herramienta solo mira dentro de esa herramienta",
      "El contexto de una decisión está repartido entre el documento, el correo y el código",
      "Las grabaciones de reuniones son inaccesibles en la práctica",
      "Cuando alguien se va, su contexto se va con él",
      "Documentar a posteriori nunca llega a ser prioritario",
    ],
    approach: [
      {
        title: "Un grafo por encima de todas las fuentes",
        body: "Documentos, correos, repositorios y vídeo se indexan en el mismo grafo de conocimiento. Una pregunta cruza los cuatro sin que tengas que saber de antemano en cuál está la respuesta.",
      },
      {
        title: "Respuestas con la fuente delante",
        body: "Cada respuesta viene con el documento, el correo o el archivo del que sale. Puedes contrastarla en un clic en lugar de fiarte, que es la diferencia entre una herramienta útil y una anecdótica.",
      },
      {
        title: "Las reuniones dejan de ser un agujero negro",
        body: "Las grabaciones se transcriben y se indexan con un índice temporal navegable: preguntas por un tema y llegas al minuto donde se habló de él.",
      },
      {
        title: "El trabajo previo es contexto reutilizable",
        body: "Los proyectos ya cerrados en Genia Ops quedan disponibles como fuente. Un análisis hecho hace seis meses no se repite: se consulta.",
      },
    ],
    outcomes: [
      "Una única entrada para preguntar por cualquier decisión pasada",
      "Respuestas citadas, contrastables contra el original",
      "Incorporaciones más rápidas, sin depender de interrumpir a los veteranos",
      "El conocimiento deja de ser propiedad de quien estaba ese día",
    ],
    sources: ["Google Drive", "GitHub", "Gmail y Outlook", "Vídeo y audio", "Tus proyectos"],
  },

  {
    slug: "law-firm-merger",
    eyebrow: "Despachos de abogados",
    title: "Unificación de despachos de abogados",
    fullTitle:
      "Unificación documental de despachos de abogados tras una fusión o integración",
    summary:
      "Dos despachos, dos formas de nombrar los expedientes y veinte años de fondo documental. Genia Ops unifica el fondo y lo entrega ordenado a SententIA, la plataforma de gestión procesal.",
    metaDescription:
      "Cómo Genia Ops unifica el fondo documental de dos despachos que se fusionan —expedientes, correos y escaneos— y lo entrega normalizado a SententIA para su gestión procesal con IA.",
    who: "Despachos que se fusionan, absorben una cartera de clientes o integran las oficinas que hasta ahora funcionaban por su cuenta.",
    scenario: [
      "Dos despachos firman la integración. Sobre el papel es una suma; en la práctica, cada uno llega con su propio sistema de nombrar expedientes, su propio criterio de archivo y veinte años de fondo documental en formatos que van del PDF nativo al escaneo de un fax.",
      "Los primeros meses la nueva firma trabaja con dos archivos paralelos. Un socio de la oficina que se incorpora no sabe buscar en el fondo de la otra, y viceversa. El conflicto de intereses hay que comprobarlo dos veces, en dos sistemas, con dos nomenclaturas. Y los plazos procesales no esperan a que termine la integración.",
      "El proyecto de migración se presupuesta a un año y se subcontrata a un equipo que teclea metadatos. Mientras tanto, el fondo documental —que es el activo real del despacho— sigue sin ser consultable de forma unificada.",
    ],
    problems: [
      "Dos nomenclaturas de expediente que no se corresponden entre sí",
      "El mismo cliente dado de alta dos veces con datos distintos",
      "Escaneos sin capa de texto que ninguna búsqueda alcanza",
      "La comprobación de conflictos exige revisar dos archivos por separado",
      "Los plazos y señalamientos viven en agendas que no se hablan",
      "Nadie quiere ser quien decida qué versión de un documento es la buena",
    ],
    approach: [
      {
        title: "Un inventario real antes de mover nada",
        body: "Genia Ops indexa los dos fondos tal y como están —Drive, OneDrive, SharePoint, Dropbox y los buzones de cada oficina— y construye el mapa de lo que hay: cuántos expedientes, qué solapamientos, qué está duplicado y qué es ilegible. La migración deja de planificarse a ciegas.",
      },
      {
        title: "Normaliza expedientes, clientes y partes",
        body: "Un agente por bloque de expedientes propone la equivalencia entre nomenclaturas, unifica las fichas de cliente duplicadas y relaciona cada documento con su procedimiento, su cliente y las partes que intervienen. Lo dudoso lo pregunta; no lo resuelve por su cuenta.",
      },
      {
        title: "Detecta conflictos de interés sobre el fondo unificado",
        body: "Con las dos carteras en el mismo grafo, la comprobación de conflictos se hace una sola vez y sobre el conjunto, incluyendo partes contrarias que aparecen enterradas en el cuerpo de un escrito y no en la ficha del expediente.",
      },
      {
        title: "Deja constancia de cada decisión de archivo",
        body: "Cada fusión de fichas y cada asignación queda registrada con su justificación. Si dentro de dos años alguien pregunta por qué dos expedientes se unificaron, la respuesta está documentada.",
      },
    ],
    outcomes: [
      "Un fondo documental único, consultable desde cualquiera de las oficinas",
      "Fichas de cliente y expediente deduplicadas, con las decisiones justificadas",
      "La comprobación de conflictos hecha sobre la cartera completa",
      "El material normalizado y listo para cargarse en la plataforma de gestión procesal",
      "Un inventario explícito de lo que no se pudo recuperar, para decidir qué hacer con ello",
    ],
    sources: [
      "Google Drive",
      "OneDrive y SharePoint",
      "Dropbox",
      "Gmail y Outlook",
      "Vídeo y audio",
    ],
    integration: {
      name: "SententIA",
      url: "https://sententia.studio",
      urlLabel: "sententia.studio",
      body: "Genia Ops resuelve la parte de arqueología documental: encontrar, relacionar y normalizar lo que hay repartido entre buzones y unidades de red. **SententIA** es la plataforma de gestión procesal inteligente donde ese material pasa a vivir y a trabajarse en el día a día del despacho: expedientes centralizados, transcripción de vistas, extracción de hechos clave, búsqueda de jurisprudencia y redacción asistida.",
      bullets: [
        "Genia Ops entrega el expediente ya unificado; SententIA lo gestiona a lo largo del procedimiento",
        "Las partes, fechas e importes que extrae el agente entran como hechos del expediente, no como texto suelto",
        "Las grabaciones de vistas indexadas por Genia Ops complementan la transcripción inteligente de SententIA",
        "Para despachos con requisitos estrictos de confidencialidad, SententIA ofrece además un despliegue local",
      ],
    },
  },

  {
    slug: "education-group",
    eyebrow: "Educación",
    title: "Unificación de centros educativos",
    fullTitle:
      "Unificación documental y académica de los centros de un grupo educativo",
    summary:
      "Varios centros, cada uno con su forma de guardar programaciones y actas. Genia Ops unifica el fondo académico y lo entrega ordenado a Kompa, la plataforma docente.",
    metaDescription:
      "Cómo Genia Ops unifica programaciones, actas y material docente de varios centros de un grupo educativo y lo entrega normalizado a Kompa para que el profesorado lo use en clase.",
    who: "Grupos educativos con varios centros, cooperativas de enseñanza y titularidades que integran un colegio nuevo en su red.",
    scenario: [
      "Un grupo educativo con cuatro centros quiere trabajar como uno solo. Cada centro llega con su propia historia: programaciones didácticas en el Drive de la jefatura de estudios, actas de evaluación en PDF firmado, material de aula repartido entre las cuentas personales del profesorado y una memoria anual que cada año redacta quien puede.",
      "Sobre el papel comparten proyecto educativo. En la práctica, la misma asignatura de 1.º de la ESO se imparte con tres programaciones distintas y ningún equipo directivo puede responder con datos a la pregunta de qué se está enseñando realmente en la red.",
      "Cuando un docente cambia de centro, empieza de cero: su material no viaja con él, y el del centro de destino no está donde pueda encontrarlo. Cuando llega la inspección o la renovación de una certificación, alguien pasa semanas reconstruyendo a mano documentación que ya existe.",
    ],
    problems: [
      "Programaciones de la misma materia divergentes entre centros",
      "Material docente atrapado en cuentas personales del profesorado",
      "Actas y memorias en PDF escaneado, fuera de cualquier búsqueda",
      "Ninguna visión de conjunto de la red para tomar decisiones",
      "La documentación para inspección o certificación se rehace cada vez",
      "El material se pierde cuando un docente cambia de centro o se marcha",
    ],
    approach: [
      {
        title: "Reúne el fondo académico de los cuatro centros",
        body: "Genia Ops conecta los Drive, OneDrive y buzones de cada centro e indexa programaciones, actas, memorias y material de aula en un único grafo, respetando que cada centro solo vea lo suyo hasta que la dirección decida lo contrario.",
      },
      {
        title: "Mapea el currículo real, no el declarado",
        body: "Un agente por etapa educativa alinea las programaciones de la misma materia entre centros, señala qué contenidos están cubiertos en unos y no en otros y localiza el material de aula que ya existe para cada unidad, aunque esté nombrado de forma distinta.",
      },
      {
        title: "Rescata lo que está en formatos muertos",
        body: "Actas escaneadas, memorias antiguas y grabaciones de sesiones de formación pasan a ser consultables. Preparar una acreditación deja de ser un ejercicio de arqueología.",
      },
      {
        title: "Deja el material listo para el aula",
        body: "El resultado no es un informe: es el material docente identificado, atribuido a su asignatura y a su unidad, y preparado para que el profesorado lo use directamente en su plataforma de trabajo.",
      },
    ],
    outcomes: [
      "Un fondo académico único y consultable por todos los centros del grupo",
      "El mapa real de qué se enseña en cada centro, con las divergencias señaladas",
      "Material de aula rescatado de cuentas personales y atribuido a su materia",
      "Documentación de inspección y certificación reunida sin rehacerla",
      "Programaciones y material listos para cargarse en la plataforma docente",
    ],
    sources: [
      "Google Drive",
      "OneDrive y SharePoint",
      "Gmail y Outlook",
      "Vídeo y audio",
      "Google Calendar",
    ],
    integration: {
      name: "Kompa",
      url: "https://kompa.es",
      urlLabel: "kompa.es",
      body: "Genia Ops ordena el fondo documental del grupo; **Kompa** es la plataforma donde ese material se convierte en clase. Kompa centraliza asignaturas y contenidos, genera exámenes tipo test con IA a partir del propio material y activa el Modo en Vivo, que proyecta las diapositivas con un QR para que el alumnado responda preguntas desde el móvil.",
      bullets: [
        "El material que Genia Ops rescata y clasifica entra en Kompa ya asignado a su asignatura",
        "Los exámenes con IA de Kompa se generan sobre el contenido real del centro, no sobre un temario genérico",
        "El Modo Centro de Kompa da a la dirección métricas agregadas de todo el centro",
        "Un docente que cambia de centro dentro del grupo conserva el material que ya tenía",
      ],
    },
  },
];

import Link from "next/link";

const dataSources = [
  { name: "Gmail y Outlook", detail: "Correos y adjuntos" },
  { name: "Google Drive", detail: "Documentos y hojas de cálculo" },
  { name: "Dropbox y OneDrive", detail: "Archivos y carpetas" },
  { name: "GitHub", detail: "Repositorios y código" },
  { name: "Vídeo", detail: "Transcripción e índice temporal" },
  { name: "Google Calendar", detail: "Eventos y plazos" },
];

const steps = [
  {
    n: "01",
    title: "Conecta tus fuentes",
    body: "Autorizas el acceso a las cuentas que elijas mediante OAuth 2.0. Nunca almacenamos tus contraseñas y puedes revocar el acceso en cualquier momento.",
  },
  {
    n: "02",
    title: "Se organiza en un grafo",
    body: "Genia Ops indexa el contenido en un grafo de conocimiento privado, de modo que correos, documentos y archivos quedan relacionados entre sí y son consultables.",
  },
  {
    n: "03",
    title: "Los agentes planifican",
    body: "Un asistente de IA analiza la información disponible y propone un plan: objetivos concretos desglosados en tareas accionables.",
  },
  {
    n: "04",
    title: "Tú supervisas y decides",
    body: "Sigues el avance en un tablero Kanban, hablas con los agentes por chat y apruebas o rediriges su trabajo en cualquier momento.",
  },
];

const features = [
  {
    title: "Planificación asistida",
    body: "Describe tu objetivo en lenguaje natural. El asistente lo descompone en objetivos y tareas concretas, con contexto extraído de tus propios datos.",
  },
  {
    title: "Tablero Kanban",
    body: "Visualiza el estado real del proyecto: qué está pendiente, qué está en curso y qué ha completado cada agente.",
  },
  {
    title: "Agentes especializados",
    body: "Cada objetivo puede ejecutarse por un agente propio, en un entorno aislado y con acceso únicamente a las fuentes de datos que le asignes.",
  },
  {
    title: "Búsqueda sobre tu conocimiento",
    body: "Pregunta en lenguaje natural y obtén respuestas fundamentadas en tus correos, documentos y archivos, con la fuente citada.",
  },
  {
    title: "Trazabilidad completa",
    body: "Cada acción de cada agente queda registrada: qué leyó, qué hizo y por qué. Sin cajas negras.",
  },
  {
    title: "Control de acceso granular",
    body: "Decides qué ve cada agente. El acceso se concede por objetivo, no de forma global, siguiendo el principio de mínimo privilegio.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Plataforma de agentes de IA para equipos
          </div>

          <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
            Genia Ops
            <span className="mt-3 block bg-gradient-to-r from-indigo-300 via-violet-300 to-sky-300 bg-clip-text text-transparent">
              Agentes de IA que trabajan sobre tus datos
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            <strong className="font-semibold text-white">Genia Ops</strong> es
            una plataforma de gestión de proyectos con agentes de inteligencia
            artificial. Conecta las fuentes donde ya vive tu información —correo,
            documentos, archivos y repositorios—, la organiza en un grafo de
            conocimiento privado y permite que agentes de IA planifiquen,
            propongan y ejecuten el trabajo bajo tu supervisión.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="mailto:accounts@zctechpartners.com?subject=Solicitar%20acceso%20a%20Genia%20Ops"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-indigo-500/10 transition hover:bg-slate-100"
            >
              Solicitar acceso
            </a>
            <Link
              href="#producto"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver cómo funciona
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Al usar Genia Ops aceptas nuestros{" "}
            <Link href="/terms" className="text-indigo-300 underline">
              Términos del Servicio
            </Link>{" "}
            y nuestra{" "}
            <Link href="/privacy" className="text-indigo-300 underline">
              Política de Privacidad
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Qué es / propósito */}
      <section
        id="producto"
        className="border-t border-white/5 bg-[#070a14] py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            ¿Qué hace Genia Ops?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
            Gestionar un proyecto suele exigir cruzar información dispersa en
            muchos sitios: un correo con la factura, un documento con el
            contrato, una carpeta con los anexos. Genia Ops reúne todo eso en un
            único lugar consultable y pone agentes de IA a trabajar sobre ello,
            de forma que puedas pasar de la información en bruto a un plan
            ejecutable sin hacerlo a mano.
          </p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-[#070a14] p-6">
                <span className="text-xs font-semibold tracking-widest text-indigo-400">
                  {s.n}
                </span>
                <h3 className="mt-3 text-base font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Funcionalidades
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <h3 className="text-base font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fuentes de datos */}
      <section className="border-t border-white/5 bg-[#070a14] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Fuentes de datos que puedes conectar
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300">
            Conectas solo lo que necesitas. Cada integración se autoriza por
            separado mediante OAuth 2.0 y puede revocarse en cualquier momento
            desde la propia aplicación o desde el proveedor.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dataSources.map((d) => (
              <div
                key={d.name}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
                <div>
                  <p className="text-sm font-semibold text-white">{d.name}</p>
                  <p className="mt-0.5 text-sm text-slate-400">{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seguridad y datos */}
      <section id="seguridad" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Tus datos, bajo tu control
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-base font-semibold text-white">
                Uso limitado y explícito
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                Los datos que obtenemos de tus cuentas se utilizan únicamente
                para prestarte las funciones de Genia Ops que tú activas.{" "}
                <strong className="text-slate-200">
                  No vendemos tus datos ni los usamos para publicidad, ni para
                  entrenar modelos de IA generalistas.
                </strong>
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-base font-semibold text-white">
                Revocable en todo momento
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                Puedes desconectar cualquier cuenta y solicitar la eliminación
                de los datos asociados. La autorización de Google puede
                revocarse además desde tu propia cuenta de Google.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-base font-semibold text-white">
                Aislamiento por agente
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                Cada agente se ejecuta en un entorno aislado y solo accede a las
                fuentes que le asignas explícitamente, con credenciales
                temporales y de alcance limitado.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.07] p-6">
            <p className="text-sm leading-relaxed text-slate-300">
              El uso que Genia Ops hace de la información recibida de las APIs de
              Google se ajusta a la{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                className="text-indigo-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Datos de Usuario de los Servicios de API de Google
              </a>
              , incluidos los requisitos de Uso Limitado. Puedes consultar el
              detalle completo en nuestra{" "}
              <Link href="/privacy" className="text-indigo-300 underline">
                Política de Privacidad
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="border-t border-white/5 bg-[#070a14] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-transparent p-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              ¿Quieres probar Genia Ops?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
              Genia Ops está disponible por invitación mientras completamos el
              despliegue general. Escríbenos y te damos acceso.
            </p>
            <a
              href="mailto:accounts@zctechpartners.com?subject=Solicitar%20acceso%20a%20Genia%20Ops"
              className="mt-7 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              accounts@zctechpartners.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

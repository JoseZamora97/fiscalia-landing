import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo Genia Ops recopila, utiliza, comparte y protege tus datos, incluido el tratamiento de los datos obtenidos de las APIs de Google.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "27 de julio de 2026";

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium text-indigo-400">Legal</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">
        Política de Privacidad
      </h1>
      <p className="mt-3 text-sm text-slate-400">
        Última actualización: {LAST_UPDATED}
      </p>

      <div className="prose-legal mt-10">
        <p>
          Esta Política de Privacidad describe cómo{" "}
          <strong>ZC Tech Partners</strong> (&laquo;nosotros&raquo;) trata la
          información personal en relación con la aplicación{" "}
          <strong>Genia Ops</strong> (el &laquo;Servicio&raquo;), accesible en{" "}
          <a href="https://geniaops.com">https://geniaops.com</a>.
        </p>
        <p>
          Genia Ops es una plataforma de gestión de proyectos con agentes de
          inteligencia artificial. El Servicio se conecta, con tu autorización
          expresa, a las fuentes de datos que tú elijas (por ejemplo, tu cuenta
          de correo o tu almacenamiento en la nube), organiza ese contenido en un
          grafo de conocimiento privado y permite que agentes de IA te ayuden a
          planificar y ejecutar trabajo sobre esa información.
        </p>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          <strong>ZC Tech Partners</strong>
          <br />
          Correo de contacto:{" "}
          <a href="mailto:accounts@zctechpartners.com">
            accounts@zctechpartners.com
          </a>
        </p>
        <p>
          Para cualquier cuestión relativa a esta política o al ejercicio de tus
          derechos, puedes escribirnos a la dirección anterior.
        </p>

        <h2>2. Qué información recopilamos</h2>

        <h3>2.1 Información de cuenta</h3>
        <ul>
          <li>
            Tu dirección de correo electrónico, nombre e imagen de perfil, para
            identificarte y permitirte iniciar sesión.
          </li>
          <li>
            Datos técnicos básicos necesarios para operar el Servicio, como
            registros de acceso y errores.
          </li>
        </ul>

        <h3>2.2 Contenido de las fuentes que conectas</h3>
        <p>
          Cuando conectas una fuente de datos, accedemos al contenido necesario
          para prestar las funciones que has activado. Según la fuente, esto
          puede incluir:
        </p>
        <ul>
          <li>
            <strong>Correo electrónico</strong> (Gmail, Outlook): remitente,
            destinatarios, asunto, fecha, cuerpo del mensaje y archivos
            adjuntos.
          </li>
          <li>
            <strong>Almacenamiento en la nube</strong> (Google Drive, Dropbox,
            OneDrive): nombres, rutas, metadatos y contenido de los archivos y
            carpetas a los que concedes acceso.
          </li>
          <li>
            <strong>Calendario</strong>: eventos, fechas y participantes.
          </li>
          <li>
            <strong>Repositorios de código</strong> (GitHub): estructura de
            archivos y contenido de los repositorios que autorices.
          </li>
          <li>
            <strong>Vídeo</strong>: los archivos que subas y las
            transcripciones, resúmenes e índices generados a partir de ellos.
          </li>
        </ul>
        <p>
          Solo accedemos a las fuentes que conectas de forma explícita. No
          accedemos a ninguna cuenta que no hayas autorizado.
        </p>

        <h3>2.3 Contenido que generas en el Servicio</h3>
        <ul>
          <li>
            Proyectos, objetivos, tareas y directrices que creas.
          </li>
          <li>
            Conversaciones con los agentes de IA y los resultados que estos
            producen.
          </li>
        </ul>

        <h2>3. Datos obtenidos de las APIs de Google</h2>
        <p>
          Si conectas una cuenta de Google, solicitamos únicamente los permisos
          (&laquo;scopes&raquo;) necesarios para las funciones que utilizas. Te
          explicamos cada uno:
        </p>
        <ul>
          <li>
            <strong>
              <code>userinfo.email</code> y <code>userinfo.profile</code>
            </strong>
            : para identificarte, crear tu cuenta y mostrar tu perfil dentro del
            Servicio.
          </li>
          <li>
            <strong>
              <code>gmail.readonly</code>
            </strong>
            : para leer e indexar tus correos y adjuntos, de modo que los
            agentes puedan buscar en ellos y utilizarlos como contexto en las
            tareas que les encargas.
          </li>
          <li>
            <strong>
              <code>gmail.modify</code>
            </strong>
            : para realizar, a petición tuya, acciones de organización sobre tu
            buzón, como marcar mensajes como leídos o aplicar etiquetas. No
            utilizamos este permiso para enviar correos en tu nombre sin tu
            instrucción explícita ni para eliminar mensajes de forma
            automática.
          </li>
        </ul>

        <h3>3.1 Uso Limitado (Google API Services User Data Policy)</h3>
        <p>
          El uso y la transferencia por parte de Genia Ops de la información
          recibida de las APIs de Google se ajustará a la{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Datos de Usuario de los Servicios de API de Google
          </a>
          , incluidos sus requisitos de <strong>Uso Limitado</strong>. En
          concreto:
        </p>
        <ul>
          <li>
            Solo utilizamos los datos de Google para proporcionar o mejorar las
            funciones visibles para el usuario que resultan evidentes en la
            interfaz de Genia Ops.
          </li>
          <li>
            <strong>
              No transferimos ni vendemos estos datos con fines publicitarios,
              de creación de perfiles publicitarios ni de estudios de mercado.
            </strong>
          </li>
          <li>
            <strong>
              No utilizamos los datos de Google para entrenar, reentrenar ni
              afinar modelos de inteligencia artificial generalizados
            </strong>{" "}
            de terceros ni propios.
          </li>
          <li>
            No permitimos que ninguna persona lea estos datos, salvo que (i) nos
            hayas dado tu consentimiento expreso para leer mensajes concretos,
            (ii) sea necesario por motivos de seguridad (por ejemplo,
            investigar un abuso), (iii) sea necesario para cumplir la ley, o
            (iv) los datos estén agregados y anonimizados y se usen para
            operaciones internas.
          </li>
        </ul>

        <h2>4. Para qué usamos la información</h2>
        <ul>
          <li>Prestar y mantener el Servicio y sus funciones.</li>
          <li>
            Permitir que los agentes de IA localicen, relacionen y utilicen la
            información necesaria para completar las tareas que les asignas.
          </li>
          <li>Autenticarte y proteger la seguridad de las cuentas.</li>
          <li>Diagnosticar incidencias y mejorar la fiabilidad del Servicio.</li>
          <li>Cumplir con nuestras obligaciones legales.</li>
        </ul>
        <p>
          <strong>
            No vendemos tu información personal ni la utilizamos con fines
            publicitarios.
          </strong>
        </p>

        <h2>5. Procesamiento mediante modelos de lenguaje</h2>
        <p>
          Genia Ops funciona apoyándose en modelos de lenguaje de proveedores
          externos. Para responder a tus peticiones, fragmentos del contenido al
          que has dado acceso pueden enviarse a esos proveedores en calidad de{" "}
          <strong>encargados del tratamiento</strong>, exclusivamente para
          generar la respuesta o completar la tarea que has solicitado.
        </p>
        <p>
          Seleccionamos proveedores que se comprometen contractualmente a{" "}
          <strong>
            no utilizar el contenido enviado a través de su API para entrenar sus
            modelos
          </strong>
          . En ningún caso se transfieren datos obtenidos de las APIs de Google
          para el entrenamiento de modelos de IA generalizados.
        </p>

        <h2>6. Con quién compartimos la información</h2>
        <p>
          No compartimos tu información personal con terceros salvo en los
          siguientes casos:
        </p>
        <ul>
          <li>
            <strong>Proveedores de infraestructura y servicios</strong> que
            actúan por cuenta nuestra (alojamiento, bases de datos y los
            proveedores de modelos de lenguaje descritos en el apartado 5),
            sujetos a obligaciones de confidencialidad.
          </li>
          <li>
            <strong>Obligación legal</strong>: cuando sea necesario para cumplir
            una ley, un requerimiento judicial o una solicitud legítima de una
            autoridad.
          </li>
          <li>
            <strong>Protección de derechos</strong>: cuando sea necesario para
            prevenir un fraude, un abuso o una amenaza a la seguridad.
          </li>
        </ul>

        <h2>7. Conservación y eliminación</h2>
        <p>
          Conservamos tu información mientras mantengas una cuenta activa y la
          fuente de datos permanezca conectada. Puedes:
        </p>
        <ul>
          <li>
            <strong>Desconectar una fuente</strong> en cualquier momento desde la
            aplicación; dejaremos de sincronizar nuevo contenido de inmediato.
          </li>
          <li>
            <strong>Revocar el acceso de Google</strong> directamente desde{" "}
            <a
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noopener noreferrer"
            >
              la página de permisos de tu cuenta de Google
            </a>
            .
          </li>
          <li>
            <strong>Solicitar la eliminación</strong> de tu cuenta y de todos los
            datos asociados escribiendo a{" "}
            <a href="mailto:accounts@zctechpartners.com">
              accounts@zctechpartners.com
            </a>
            . Atenderemos tu solicitud en un plazo máximo de 30 días.
          </li>
        </ul>
        <p>
          Podremos conservar copias de seguridad durante un periodo limitado y
          los registros estrictamente necesarios para cumplir obligaciones
          legales.
        </p>

        <h2>8. Seguridad</h2>
        <p>
          Aplicamos medidas técnicas y organizativas para proteger tu
          información, entre ellas: cifrado en tránsito mediante TLS,
          almacenamiento de credenciales de acceso en forma de tokens OAuth
          (nunca guardamos las contraseñas de tus cuentas), credenciales
          temporales y de alcance limitado para cada agente, aislamiento de la
          ejecución de los agentes en entornos separados y control de acceso
          según el principio de mínimo privilegio.
        </p>
        <p>
          Ningún sistema es completamente seguro, pero trabajamos de forma
          continua para reducir los riesgos y responder con rapidez ante
          cualquier incidente.
        </p>

        <h2>9. Tus derechos</h2>
        <p>
          De acuerdo con el Reglamento General de Protección de Datos (RGPD) y
          demás normativa aplicable, tienes derecho a acceder a tus datos,
          rectificarlos, suprimirlos, limitar u oponerte a su tratamiento y
          solicitar su portabilidad. También puedes retirar tu consentimiento en
          cualquier momento y presentar una reclamación ante la autoridad de
          control competente (en España, la Agencia Española de Protección de
          Datos).
        </p>
        <p>
          Para ejercer estos derechos escríbenos a{" "}
          <a href="mailto:accounts@zctechpartners.com">
            accounts@zctechpartners.com
          </a>
          .
        </p>

        <h2>10. Menores</h2>
        <p>
          El Servicio no está dirigido a menores de 16 años y no recopilamos de
          forma consciente información de menores de esa edad.
        </p>

        <h2>11. Transferencias internacionales</h2>
        <p>
          Algunos de nuestros proveedores pueden tratar información fuera del
          Espacio Económico Europeo. En esos casos, nos aseguramos de que existan
          garantías adecuadas, como las cláusulas contractuales tipo aprobadas
          por la Comisión Europea.
        </p>

        <h2>12. Cambios en esta política</h2>
        <p>
          Podemos actualizar esta política para reflejar cambios en el Servicio o
          en la normativa aplicable. Publicaremos la versión actualizada en esta
          misma página, indicando la fecha de última modificación. Si los cambios
          son sustanciales, te lo notificaremos por un medio adecuado.
        </p>

        <h2>13. Contacto</h2>
        <p>
          Si tienes cualquier duda sobre esta Política de Privacidad, escríbenos
          a{" "}
          <a href="mailto:accounts@zctechpartners.com">
            accounts@zctechpartners.com
          </a>
          .
        </p>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6">
        <Link href="/" className="text-sm text-indigo-300 hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    </article>
  );
}

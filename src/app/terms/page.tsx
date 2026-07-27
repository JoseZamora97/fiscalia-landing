import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos del Servicio",
  description:
    "Condiciones de uso de Genia Ops, la plataforma de gestión de proyectos con agentes de IA de ZC Tech Partners.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "27 de julio de 2026";

export default function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-text">Legal</p>
      <h1 className="mt-3 text-[34px] font-semibold sm:text-[42px]">
        Términos del Servicio
      </h1>
      <p className="mt-3 text-[13.5px] text-fg-dim">
        Última actualización: {LAST_UPDATED}
      </p>

      <div className="prose-legal mt-10">
        <p>
          Estos Términos regulan el acceso y uso de <strong>Genia Ops</strong>{" "}
          (el &laquo;Servicio&raquo;), ofrecido por{" "}
          <strong>ZC Tech Partners</strong>. Al utilizar el Servicio aceptas
          estos Términos.
        </p>

        <h2>1. Descripción del Servicio</h2>
        <p>
          Genia Ops es una plataforma de gestión de proyectos que utiliza agentes
          de inteligencia artificial para analizar la información de las fuentes
          de datos que el usuario conecta y ayudarle a planificar y ejecutar
          trabajo. El Servicio se presta actualmente por invitación.
        </p>

        <h2>2. Cuentas y acceso</h2>
        <ul>
          <li>
            Debes proporcionar información veraz al crear tu cuenta y mantenerla
            actualizada.
          </li>
          <li>
            Eres responsable de la confidencialidad de tus credenciales y de la
            actividad realizada desde tu cuenta.
          </li>
          <li>
            Debes tener capacidad legal para contratar y ser mayor de 16 años.
          </li>
        </ul>

        <h2>3. Fuentes de datos conectadas</h2>
        <p>
          Al conectar una fuente de datos declaras que estás autorizado a hacerlo
          y que dispones de los derechos necesarios sobre la información a la que
          concedes acceso. El tratamiento de esa información se rige por nuestra{" "}
          <Link href="/privacy">Política de Privacidad</Link>.
        </p>

        <h2>4. Uso aceptable</h2>
        <p>No está permitido utilizar el Servicio para:</p>
        <ul>
          <li>Infringir la ley o derechos de terceros.</li>
          <li>
            Acceder a información sobre la que no tengas autorización legítima.
          </li>
          <li>
            Intentar vulnerar la seguridad del Servicio, sus sistemas o los de
            terceros.
          </li>
          <li>
            Generar o distribuir contenido ilícito, fraudulento o dañino.
          </li>
          <li>
            Realizar un uso automatizado que degrade el rendimiento del Servicio
            para otros usuarios.
          </li>
        </ul>

        <h2>5. Resultados generados por IA</h2>
        <p>
          El Servicio genera planes, resúmenes y respuestas mediante modelos de
          inteligencia artificial. Estos resultados{" "}
          <strong>pueden contener errores o imprecisiones</strong> y se
          proporcionan como apoyo, no como asesoramiento profesional. Eres
          responsable de revisar y validar cualquier resultado antes de actuar
          sobre él, especialmente en contextos legales, fiscales, financieros o
          médicos.
        </p>

        <h2>6. Propiedad intelectual</h2>
        <p>
          El Servicio, su software, su diseño y sus marcas pertenecen a ZC Tech
          Partners. Los contenidos que aportas y los resultados generados a
          partir de ellos siguen siendo tuyos; nos concedes únicamente la
          licencia necesaria para operar el Servicio y prestarte sus funciones.
        </p>

        <h2>7. Disponibilidad y modificaciones</h2>
        <p>
          Procuramos mantener el Servicio disponible, pero no garantizamos un
          funcionamiento ininterrumpido ni libre de errores. Podemos modificar,
          suspender o discontinuar funciones, informando con antelación razonable
          cuando el cambio sea sustancial.
        </p>

        <h2>8. Limitación de responsabilidad</h2>
        <p>
          En la máxima medida permitida por la ley, ZC Tech Partners no será
          responsable de daños indirectos, lucro cesante ni pérdida de datos
          derivados del uso del Servicio. Nada en estos Términos excluye la
          responsabilidad que no pueda excluirse legalmente.
        </p>

        <h2>9. Terminación</h2>
        <p>
          Puedes dejar de usar el Servicio y solicitar la eliminación de tu
          cuenta en cualquier momento. Podemos suspender el acceso en caso de
          incumplimiento grave de estos Términos, informándote del motivo cuando
          sea posible.
        </p>

        <h2>10. Ley aplicable</h2>
        <p>
          Estos Términos se rigen por la legislación española. Cualquier
          controversia se someterá a los juzgados y tribunales competentes,
          respetando los derechos que la normativa de consumo reconozca al
          usuario.
        </p>

        <h2>11. Contacto</h2>
        <p>
          Para cualquier consulta sobre estos Términos, escríbenos a{" "}
          <a href="mailto:accounts@zctechpartners.com">
            accounts@zctechpartners.com
          </a>
          .
        </p>
      </div>

      <div className="mt-12 border-t border-border pt-6">
        <Link href="/" className="link-accent text-[14px]">
          ← Volver al inicio
        </Link>
      </div>
    </article>
  );
}

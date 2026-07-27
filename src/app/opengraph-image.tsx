import { ImageResponse } from "next/og";
import { MARK_DATA_URI } from "@/lib/mark";

export const alt =
  "Genia Ops — agentes de IA que planifican y ejecutan sobre tus propios datos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 44,
          padding: "76px 72px",
          background: "#16181c",
          backgroundImage:
            "radial-gradient(700px 460px at 6% 0%, rgba(0,195,137,0.20), transparent 62%), radial-gradient(620px 420px at 96% 6%, rgba(91,141,255,0.18), transparent 62%), radial-gradient(520px 360px at 55% 100%, rgba(192,132,252,0.14), transparent 62%)",
          color: "#e8e9ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={MARK_DATA_URI} width={72} height={72} alt="" />
          <div
            style={{
              display: "flex",
              gap: 12,
              fontSize: 44,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            <span>Genia</span>
            <span style={{ color: "#00c389" }}>Ops</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 600,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              maxWidth: 940,
            }}
          >
            Agentes de IA que trabajan sobre tus propios datos
          </div>
          <div style={{ fontSize: 27, color: "#8a8f98", maxWidth: 880, lineHeight: 1.45 }}>
            Conecta tu correo, tus documentos y tus repositorios. Genia Ops los
            organiza en un grafo privado y planifica el trabajo bajo tu supervisión.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(0,195,137,0.32)",
              background: "rgba(0,195,137,0.12)",
              color: "#00c389",
              fontSize: 24,
            }}
          >
            geniaops.com
          </div>
          <div style={{ fontSize: 24, color: "#5a6068" }}>por ZC Tech Partners</div>
        </div>
      </div>
    ),
    size,
  );
}

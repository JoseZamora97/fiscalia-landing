# Genia Ops — Landing

Landing page pública de **Genia Ops**, la plataforma de gestión de proyectos con
agentes de IA de ZC Tech Partners.

Publicada en <https://geniaops.com>.

## Propósito

Además de presentar el producto, este sitio cubre los requisitos de la
verificación de Google Cloud / pantalla de consentimiento OAuth:

- Página principal pública y accesible, **sin muro de acceso**.
- El nombre de la aplicación (**Genia Ops**) coincide con el de la pantalla de
  consentimiento OAuth.
- La página principal explica el propósito de la aplicación.
- La página principal enlaza de forma visible a la política de privacidad
  (cabecera, cuerpo y pie).
- `/privacy` responde y contiene la divulgación de **Uso Limitado** exigida por
  la Google API Services User Data Policy para los scopes restringidos de Gmail.
- `/terms` con las condiciones del servicio.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Desplegado en Vercel

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
```

## Rutas

| Ruta       | Descripción                        |
|------------|------------------------------------|
| `/`        | Página principal                   |
| `/privacy` | Política de Privacidad             |
| `/terms`   | Términos del Servicio              |

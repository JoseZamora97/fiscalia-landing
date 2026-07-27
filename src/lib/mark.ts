import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The product's app icon, inlined for `next/og`, which cannot resolve relative
 * URLs while the OG image is generated at build time.
 */
const png = readFileSync(join(process.cwd(), "public", "icon-512.png"));

export const MARK_DATA_URI = `data:image/png;base64,${png.toString("base64")}`;

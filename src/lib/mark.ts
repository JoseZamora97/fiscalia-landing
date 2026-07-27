const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#00c389"/><path d="M21.657 10.343 A 8 8 0 1 0 24 16 L 18 16" fill="none" stroke="#001a11" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export const MARK_DATA_URI = `data:image/svg+xml;base64,${Buffer.from(MARK_SVG).toString("base64")}`;

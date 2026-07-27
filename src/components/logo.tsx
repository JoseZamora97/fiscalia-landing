/**
 * Brand mark, mirroring the product: the GENIA wordmark set in Zen Dots with
 * the leading "G" in the accent red. "Ops" trails it so the name on this page
 * matches the one on the OAuth consent screen.
 */
export function Logo({ size = 19 }: { size?: number }) {
  return (
    <span
      className="flex items-baseline leading-none whitespace-nowrap select-none"
      style={{ fontFamily: "var(--font-zen-dots), var(--font-heading)", fontSize: size }}
    >
      <span style={{ color: "var(--accent)" }}>G</span>
      <span className="text-fg">ENIA</span>
      <span className="ml-[0.42em] text-fg-muted" style={{ fontSize: "0.72em" }}>
        Ops
      </span>
    </span>
  );
}

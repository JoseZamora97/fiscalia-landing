export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden
      style={{ display: "block", flexShrink: 0 }}
    >
      <rect width="32" height="32" rx="8" fill="var(--accent)" />
      <path
        d="M21.657 10.343 A 8 8 0 1 0 24 16 L 18 16"
        fill="none"
        stroke="var(--accent-fg)"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ size = 30 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark size={size} />
      <span className="text-[17px] font-semibold tracking-tight text-fg">
        Genia <span className="text-accent-text">Ops</span>
      </span>
    </span>
  );
}

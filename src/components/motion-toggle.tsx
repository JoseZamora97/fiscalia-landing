"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

export function MotionToggle({ lang }: { lang: Lang }) {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("genia.motion") === "paused";
      document.documentElement.dataset.motion = saved ? "paused" : "running";
      setPaused(saved);
    } catch {
      // Storage may be unavailable in private or restricted browsers.
    }
  }, []);

  function toggle() {
    const next = !paused;
    setPaused(next);
    document.documentElement.dataset.motion = next ? "paused" : "running";
    try { localStorage.setItem("genia.motion", next ? "paused" : "running"); } catch { /* Optional persistence. */ }
  }

  return <button type="button" className="motion-toggle" aria-pressed={paused} onClick={toggle}>
    {lang === "es" ? (paused ? "Reanudar animaciones" : "Pausar animaciones") : (paused ? "Resume animations" : "Pause animations")}
  </button>;
}

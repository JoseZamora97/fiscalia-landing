"use client";

import { useEffect, useRef } from "react";

/** Decorative, pointer-responsive orbital sculpture; no WebGL or tracking. */
export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.setProperty("--pointer-x", `${(event.clientX / window.innerWidth - 0.5) * 12}deg`);
        element.style.setProperty("--pointer-y", `${(event.clientY / window.innerHeight - 0.5) * -8}deg`);
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(frame); };
  }, []);
  return (
    <div ref={ref} className="hero-scene" aria-hidden="true">
      <div className="scene-glow" />
      <div className="orbital-sculpture">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <div className="orbit orbit-four" />
        <div className="orbit-core" />
        <div className="orbit-satellite satellite-one" />
        <div className="orbit-satellite satellite-two" />
      </div>
      <div className="scene-grain" />
    </div>
  );
}

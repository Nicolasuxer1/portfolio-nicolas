"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  ix: number; iy: number;
  vx: number; vy: number;
  r: number;
  op: number;
  hue: number;
  phase: number;
}

const COUNT = 65;
const REPEL_R = 150;
const REPEL_F = 0.5;
const SPRING = 0.011;
const DAMP = 0.93;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Safe to assert non-null — useEffect runs after DOM mount
    const canvas = canvasRef.current!;
    const glow = glowRef.current!;
    const ctx = canvas.getContext("2d")!;

    const mouse = { x: -9999, y: -9999 };
    const smooth = { x: 0, y: 0 };
    let ps: Particle[] = [];
    let raf = 0;
    let W = 0, H = 0;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function init() {
      ps = Array.from({ length: COUNT }, (): Particle => {
        const x = Math.random() * W;
        const y = Math.random() * H;
        return {
          x, y,
          ix: x, iy: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 0.6,
          op: Math.random() * 0.4 + 0.12,
          hue: Math.floor(Math.random() * 55 + 235),
          phase: Math.random() * Math.PI * 2,
        };
      });
    }

    function frame(t: number) {
      ctx.clearRect(0, 0, W, H);

      smooth.x = lerp(smooth.x, mouse.x, 0.07);
      smooth.y = lerp(smooth.y, mouse.y, 0.07);
      glow.style.transform = `translate(${smooth.x - 400}px,${smooth.y - 400}px)`;

      for (const p of ps) {
        const bx = p.ix + Math.sin(t * 0.0003 + p.phase) * 26;
        const by = p.iy + Math.cos(t * 0.00022 + p.phase) * 20;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < REPEL_R * REPEL_R && d2 > 0.5) {
          const d = Math.sqrt(d2);
          const f = (1 - d / REPEL_R) * REPEL_F;
          p.vx += (dx / d) * f;
          p.vy += (dy / d) * f;
        }

        p.vx += (bx - p.x) * SPRING;
        p.vy += (by - p.y) * SPRING;
        p.vx *= DAMP;
        p.vy *= DAMP;
        p.x += p.vx;
        p.y += p.vy;

        // Halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},65%,72%,${p.op * 0.28})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},70%,82%,${p.op})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onVis = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(frame);
    };
    const onResize = () => { resize(); init(); };

    resize();
    init();
    raf = requestAnimationFrame(frame);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{ zIndex: -1 }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ zIndex: -1 }}
      >
        <div
          ref={glowRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 800,
            height: 800,
            background:
              "radial-gradient(ellipse at center, rgba(139,124,248,0.14) 0%, rgba(100,110,220,0.05) 45%, transparent 70%)",
          }}
        />
      </div>
    </>
  );
}

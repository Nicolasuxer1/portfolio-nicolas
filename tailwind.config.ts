import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Colors (CSS variable-backed for theme switching) ─────────────────
      // Variables are stored as raw RGB channels: "R G B"
      // This lets Tailwind opacity modifiers work: bg-canvas/90 → rgb(R G B / 0.9)
      colors: {
        canvas:  "rgb(var(--canvas)  / <alpha-value>)",

        surface: {
          DEFAULT: "rgb(var(--surface)         / <alpha-value>)",
          raised:  "rgb(var(--surface-raised)   / <alpha-value>)",
          overlay: "rgb(var(--surface-overlay)  / <alpha-value>)",
        },

        border: {
          DEFAULT: "rgb(var(--border)        / <alpha-value>)",
          subtle:  "rgb(var(--border-subtle) / <alpha-value>)",
          strong:  "rgb(var(--border-strong) / <alpha-value>)",
        },

        text: {
          primary:   "rgb(var(--text-primary)   / <alpha-value>)",
          secondary: "rgb(var(--text-secondary) / <alpha-value>)",
          muted:     "rgb(var(--text-muted)     / <alpha-value>)",
          disabled:  "rgb(var(--text-disabled)  / <alpha-value>)",
        },

        accent: {
          DEFAULT: "rgb(var(--accent)      / <alpha-value>)",
          soft:    "rgb(var(--accent-soft) / <alpha-value>)",
          fg:      "rgb(var(--accent-fg)   / <alpha-value>)",
        },

        // Pre-resolved hover token — adapts per theme, no opacity modifier needed
        "nav-hover": "var(--bg-hover)",
      },

      // ─── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },

      // ─── Animation ────────────────────────────────────────────────────────
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1",   transform: "scale(1)" },
          "50%":      { opacity: "0.4", transform: "scale(0.75)" },
        },
        // Hero gradient orbs — slow, independent drift paths
        orbDrift1: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%":      { transform: "translate(45px, -30px) scale(1.06)" },
          "66%":      { transform: "translate(-20px, 35px) scale(0.96)" },
        },
        orbDrift2: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%":      { transform: "translate(-35px, 40px) scale(0.94)" },
          "66%":      { transform: "translate(30px, -25px) scale(1.04)" },
        },
        orbDrift3: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%":      { transform: "translate(25px, 20px) scale(1.05)" },
        },
      },
      animation: {
        "fade-in":   "fadeIn 200ms ease-out forwards",
        "slide-up":  "slideUp 300ms ease-out forwards",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "orb-1":     "orbDrift1 20s ease-in-out infinite",
        "orb-2":     "orbDrift2 26s ease-in-out infinite",
        "orb-3":     "orbDrift3 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

/* ── Icons ─────────────────────────────────────────────────────────── */
function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <line x1="4" y1="7"  x2="20" y2="7"  />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ── Shared styles ──────────────────────────────────────────────────── */
const ghost    = "inline-flex items-center rounded-md px-2.5 py-1.5 text-sm text-text-secondary transition-colors duration-150 hover:bg-nav-hover hover:text-text-primary";
const linkedIn = "inline-flex items-center rounded-md bg-text-primary px-2.5 py-1.5 text-sm font-medium text-canvas transition-opacity hover:opacity-80";

const LINKEDIN = "https://www.linkedin.com/in/nicolas-vargas-galindo/";

/* ── Component ─────────────────────────────────────────────────────── */
export default function Navigation() {
  const [scrolled,  setScrolled]  = useState(false);
  const [theme,     setTheme]     = useState<Theme>("dark");
  const [mounted,   setMounted]   = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") as Theme | null;
    setTheme(current === "light" ? "light" : "dark");
    setMounted(true);

    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setMenuOpen(false); // close on scroll
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const close = () => setMenuOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-border backdrop-blur-md transition-colors duration-200 ${scrolled ? "bg-canvas/90" : "bg-canvas/75"}`}>

      {/* ── Top bar ──────────────────────────────────────────────────── */}
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">

        {/* Logo — full name on md+, initials on mobile */}
        <Link
          href="/"
          onClick={close}
          className="text-sm font-semibold tracking-tight text-text-secondary transition-colors duration-150 hover:text-text-primary"
        >
          <span className="hidden md:inline">NICOLAS VARGAS</span>
          <span className="md:hidden">NV</span>
        </Link>

        {/* Desktop nav — all items on the right */}
        <ul className="hidden md:flex items-center gap-0.5">
          {[
            { label: "Work",       href: "/#work"       },
            { label: "About",      href: "/#about"      },
            { label: "Experience", href: "/#experience" },
            { label: "Contact",    href: "/#contact"    },
          ].map(({ label, href }) => (
            <li key={label}>
              <Link href={href} className={ghost}>{label}</Link>
            </li>
          ))}

          <li className="mx-2 h-4 w-px bg-border" aria-hidden />

          {/* Theme toggle */}
          <li>
            {mounted ? (
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                className="inline-flex items-center justify-center rounded-md border border-border p-1.5 text-text-secondary transition-colors duration-150 hover:bg-nav-hover hover:text-text-primary"
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
            ) : (
              <span className="inline-flex h-[30px] w-[30px] rounded-md border border-border" />
            )}
          </li>

          {/* LinkedIn — filled */}
          <li className="ml-1">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={linkedIn}>
              LinkedIn
            </a>
          </li>
        </ul>

        {/* Mobile right — LinkedIn pill + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={linkedIn}>
            LinkedIn
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex items-center justify-center rounded-md p-1.5 text-text-secondary transition-colors hover:bg-nav-hover hover:text-text-primary"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden border-t border-border bg-canvas/80 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-4xl px-6 py-4 flex flex-col gap-1">
              {/* Nav links */}
              {[
                { label: "Work",       href: "/#work"       },
                { label: "About",      href: "/#about"      },
                { label: "Experience", href: "/#experience" },
                { label: "Contact",    href: "/#contact"    },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={close}
                  className="flex items-center rounded-lg px-3 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-nav-hover hover:text-text-primary"
                >
                  {label}
                </Link>
              ))}

              {/* Divider + theme toggle */}
              <div className="mt-2 border-t border-border pt-3">
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-nav-hover hover:text-text-primary"
                  >
                    <span className="flex h-5 w-5 items-center justify-center">
                      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                    </span>
                    {theme === "dark" ? "Light mode" : "Dark mode"}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

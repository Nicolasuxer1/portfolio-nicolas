export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-10">
        {/* Links row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex items-center gap-5">
            {[
              { label: "Work",    href: "#work" },
              { label: "About",   href: "#about" },
              { label: "Contact", href: "#contact" },
              { label: "Download CV", href: "/cv.pdf", download: true },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.download ? { download: true } : {})}
                  className="text-xs font-medium uppercase tracking-widest text-text-muted transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <span className="text-xs text-text-muted">
            © 2026 Nicolás Vargas Galindo · Cali, Colombia
          </span>
          <span className="text-xs text-text-muted">
            Product Designer · SaaS &amp; B2B ·{" "}
            <span className="text-emerald-400">Available</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

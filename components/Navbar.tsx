"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 1.5rem", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.3s",
        background: scrolled ? "rgba(5, 10, 18, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(59,130,246,0.15)" : "none",
      }}>
        <a href="#hero" style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.08em", color: "#3b82f6", textDecoration: "none" }}>
          &lt;Nielmharr Chavez /&gt;
        </a>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ gap: "2rem", listStyle: "none", alignItems: "center" }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.875rem", letterSpacing: "0.05em", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#3b82f6")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
              >{link.label}</a>
            </li>
          ))}
          <li>
          <a href="#contact" style={{ padding: "0.4rem 1rem", border: "1px solid #3b82f6", borderRadius: "4px", color: "#3b82f6", textDecoration: "none", fontSize: "0.875rem", transition: "all 0.2s" }}
            onMouseEnter={(e) => { const el = e.target as HTMLElement; el.style.background = "#3b82f6"; el.style.color = "#fff"; }}
            onMouseLeave={(e) => { const el = e.target as HTMLElement; el.style.background = "transparent"; el.style.color = "#3b82f6"; }}
          >Hire Me</a>
        </li>
        </ul>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer", alignItems: "center", padding: "0.25rem" }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "64px", left: 0, right: 0, zIndex: 99,
          background: "rgba(5,10,18,0.97)",
          borderBottom: "1px solid rgba(59,130,246,0.15)",
          padding: "1rem 1.5rem 1.5rem",
          backdropFilter: "blur(16px)",
        }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "0.85rem 0", color: "var(--text-secondary)", textDecoration: "none", borderBottom: "1px solid rgba(59,130,246,0.08)", fontSize: "1rem" }}
            >{link.label}</a>
          ))}
          <a href="/resume.pdf" target="_blank" onClick={() => setMenuOpen(false)}
            style={{ display: "block", marginTop: "1rem", padding: "0.75rem", textAlign: "center", border: "1px solid #3b82f6", borderRadius: "4px", color: "#3b82f6", textDecoration: "none", fontSize: "0.9rem" }}
          >Resume</a>
        </div>
      )}
    </>
  );
}

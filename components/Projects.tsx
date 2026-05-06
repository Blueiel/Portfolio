"use client";
import { ExternalLink, GitFork } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Intramurals Management System",
    description:
      "A web/mobile platform for managing intramural events, providing real-time schedules, game results, and leaderboards for better transparency and communication.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    live: "https://ims.sunn.edu.ph",
    featured: true,
  },
  {
    number: "02",
    title: "Writerity, Inc",
    description:
      "Corporate website for a Japanese IT company showcasing services, global presence, recruitment, and company information.",
    tech: ["WordPress", "CMS", "WPBakery", "SQL"],
    github: null,
    live: "https://writerity.com",
    featured: true,
  },
  {
    number: "03",
    title: "Scholr",
    description:
      "A mobile app that simplifies scholarship processes with features like schedule tracking, requirement submission, announcements, and appointment booking.",
    tech: ["React", "JavaScript", "Firebase"],
    github: "https://github.com/Blueiel/CCEAP",
    live: null,
    featured: false,
  },
  {
    number: "04",
    title: "Web Scraper",
    description:
      "A web-based tool that extracts and processes data from targeted websites, presenting it in a structured and user-friendly format.",
    tech: ["Python", "Nodejs", "Tailwind CSS", "React"],
    github: null,
    live: null,
    featured: false,
  },
  {
    number: "05",
    title: "AMSYS 2026",
    description:
      "A desktop application for monitoring employee activities, tracking project progress, and analyzing resource usage in real time.",
    tech: ["Electron", "TypeScript", "Node.js","Tailwind CSS", "React"],
    github: null,
    live: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "3rem" }}>
        <span style={{ color: "#3b82f6", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.2em" }}>
          04.
        </span>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
          Projects
        </h2>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(59,130,246,0.3), transparent)", marginLeft: "1rem" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((proj) => (
          <div
            key={proj.number}
            style={{
              background: "var(--bg-card)",
              border: `1px solid ${proj.featured ? "rgba(59,130,246,0.25)" : "var(--border)"}`,
              borderRadius: "8px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(59,130,246,0.5)";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = proj.featured ? "rgba(59,130,246,0.25)" : "var(--border)";
              el.style.transform = "translateY(0)";
            }}
          >
            {proj.featured && (
              <span
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  fontSize: "0.7rem",
                  padding: "0.2rem 0.5rem",
                  background: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  borderRadius: "3px",
                  color: "#60a5fa",
                  letterSpacing: "0.08em",
                }}
              >
                FEATURED
              </span>
            )}

            <div
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "rgba(59,130,246,0.15)",
                fontFamily: "monospace",
                marginBottom: "1rem",
                lineHeight: 1,
              }}
            >
              {proj.number}
            </div>

            <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.75rem" }}>
              {proj.title}
            </h3>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                flex: 1,
                marginBottom: "1.25rem",
              }}
            >
              {proj.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
              {proj.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.75rem",
                    color: "#60a5fa",
                    fontFamily: "monospace",
                    padding: "0.15rem 0.5rem",
                    background: "rgba(59,130,246,0.06)",
                    border: "1px solid rgba(59,130,246,0.1)",
                    borderRadius: "3px",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#3b82f6")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                >
                  <GitFork size={15} /> Code
                </a>
              )}
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#3b82f6")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                >
                  <ExternalLink size={15} /> Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

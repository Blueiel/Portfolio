"use client";
import Image from "next/image";
import { Mail, ExternalLink } from "lucide-react";

const references = [
  {
    name: "Kian Becera",
    title: "Software Engineer",
    company: "Thy Web Development Inc.",
    email: "becera.kian@gmail.com",
    portfolio: "https://kian-becera-portfolio.vercel.app",
  },
  {
    name: "Angelo Manzanares",
    title: "Software Engineer",
    company: "Thy Web Development Inc.",
    email: "agmanzanares.chmsu@gmail.com",
    portfolio: "https://angelo-manzanares-portfolio.vercel.app",
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "3rem" }}>
        <span style={{ color: "#3b82f6", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.2em" }}>01.</span>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>About Me</h2>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(59,130,246,0.3), transparent)", marginLeft: "1rem" }} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "3rem",
        alignItems: "center",
      }}>
        <div>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "1rem" }}>
            Hi! I&apos;m a passionate Software Engineer Intern and a graduating Information Technology.
            I love solving complex problems and building tools that make a real impact.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "1rem" }}>
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
            open-source projects, or leveling up my competitive programming skills.
          </p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1rem" }}>
            I&apos;m currently seeking full-time opportunities where I can contribute, grow,
            and continue learning from talented engineers.
          </p>

          <div style={{ display: "flex", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
            {[
              { label: "Projects", value: "5" },
              { label: "Technologies", value: "10+" },
              { label: "Matcha / day", value: "3" },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#3b82f6" }}>{stat.value}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* References */}
          <div style={{ marginTop: "2.5rem" }}>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
              References
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {references.map((ref) => (
                <div key={ref.name} style={{
                  padding: "1rem 1.25rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  transition: "border-color 0.2s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <p style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.15rem" }}>{ref.name}</p>
                  <p style={{ color: "#3b82f6", fontSize: "0.8rem", marginBottom: "0.6rem" }}>
                    {ref.title} · {ref.company}
                  </p>
                  <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
                    <a href={`mailto:${ref.email}`}
                      style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#3b82f6")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                    >
                      <Mail size={13} /> {ref.email}
                    </a>
                    <a href={ref.portfolio} target="_blank" rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#3b82f6")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
                    >
                      <ExternalLink size={13} /> Portfolio
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "260px", height: "340px" }}>
            <div style={{ position: "absolute", top: -10, left: -10, width: 30, height: 30, borderTop: "2px solid #3b82f6", borderLeft: "2px solid #3b82f6", zIndex: 1 }} />
            <div style={{ position: "absolute", bottom: -10, right: -10, width: 30, height: 30, borderBottom: "2px solid #3b82f6", borderRight: "2px solid #3b82f6", zIndex: 1 }} />
            <Image
              src="/profile.jpeg"
              alt="Nielmharr L. Chavez"
              width={260}
              height={340}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "8px",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
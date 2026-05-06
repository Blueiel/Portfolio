"use client";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Thy Web Development Inc.",
    period: "Feb 2026 – June 2026",
    location: "Bacolod City",
    description: [
      "Built and deployed an activity monitoring system for the company to track and manage internal processes.",
      "Collaborated with a team of 7 engineers using agile methodology.",
      "Contributed to documentation, web crawling, and deployment of the company website.",
      "Developed an automated workflow that integrates GitHub ticket issues, AI Copilot, and Vercel for seamless code generation and deployment.",
    ],
    tech: ["WordPress","React", "Node.js", "Docker","Vercel", "Appwrite", "GitHub Copilot"],
    current: true,
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "3rem" }}>
        <span style={{ color: "#3b82f6", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.2em" }}>
          03.
        </span>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
          Experience
        </h2>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(59,130,246,0.3), transparent)", marginLeft: "1rem" }} />
      </div>

      <div style={{ position: "relative", paddingLeft: "2rem" }}>
        {/* Vertical timeline line */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "8px",
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, #3b82f6, rgba(59,130,246,0.05))",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {experiences.map((exp, i) => (
            <div key={i} style={{ position: "relative" }}>
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "-2.4rem",
                  top: "6px",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: exp.current ? "#3b82f6" : "var(--bg-primary)",
                  border: `2px solid ${exp.current ? "#3b82f6" : "rgba(59,130,246,0.3)"}`,
                  boxShadow: exp.current ? "0 0 12px rgba(59,130,246,0.6)" : "none",
                }}
              />

              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1.5rem",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.35)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
                }
              >
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <div>
                    <h3 style={{ fontWeight: 600, fontSize: "1.05rem", marginBottom: "0.25rem" }}>{exp.role}</h3>
                    <p style={{ color: "#3b82f6", fontSize: "0.9rem", fontWeight: 500 }}>{exp.company}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{exp.period}</p>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{exp.location}</p>
                  </div>
                </div>

                <ul style={{ marginBottom: "1rem", paddingLeft: "1rem" }}>
                  {exp.description.map((point, j) => (
                    <li
                      key={j}
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        marginBottom: "0.35rem",
                        listStyle: "none",
                        display: "flex",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: "#3b82f6", flexShrink: 0 }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "0.2rem 0.6rem",
                        background: "rgba(59,130,246,0.08)",
                        border: "1px solid rgba(59,130,246,0.15)",
                        borderRadius: "3px",
                        fontSize: "0.75rem",
                        color: "#60a5fa",
                        fontFamily: "monospace",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

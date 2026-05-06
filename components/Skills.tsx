"use client";

const skillCategories = [
  {
    title: "Languages",
    icon: "{ }",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frontend",
    icon: "◈",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Blade", "Figma"],
  },
  {
    title: "Backend",
    icon: "⚙",
    skills: ["Node.js", "MySQL", "Firebase", "Supabase"],
  },
  {
    title: "Tools & DevOps",
    icon: "⬡",
    skills: ["Git", "GitHub", "Docker", "Linux", "Vercel", "Appwrite"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "3rem" }}>
        <span style={{ color: "#3b82f6", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.2em" }}>
          02.
        </span>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
          Skills
        </h2>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(59,130,246,0.3), transparent)", marginLeft: "1rem" }} />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.75rem",
              transition: "border-color 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "rgba(59,130,246,0.4)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")
            }
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span
                style={{
                  width: "36px",
                  height: "36px",
                  border: "1px solid rgba(59,130,246,0.3)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#3b82f6",
                  fontSize: "1rem",
                  fontFamily: "monospace",
                }}
              >
                {cat.icon}
              </span>
              <h3 style={{ fontWeight: 600, fontSize: "1rem", letterSpacing: "0.02em" }}>
                {cat.title}
              </h3>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "0.3rem 0.75rem",
                    background: "rgba(59,130,246,0.06)",
                    border: "1px solid rgba(59,130,246,0.12)",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                    color: "var(--text-secondary)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

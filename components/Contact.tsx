"use client";
import { useState } from "react";
import { Send, Mail, MapPin, Link2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "rgba(59,130,246,0.04)",
    border: "1px solid rgba(59,130,246,0.15)",
    borderRadius: "6px",
    color: "var(--text-primary)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  } as React.CSSProperties;

  return (
    <section id="contact" style={{ padding: "6rem 2rem 8rem", maxWidth: "1100px", margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "3rem" }}>
        <span style={{ color: "#3b82f6", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.2em" }}>05.</span>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>Contact</h2>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(59,130,246,0.3), transparent)", marginLeft: "1rem" }} />
      </div>

      {/* Responsive: stacks on mobile, side-by-side on desktop */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "3rem",
        alignItems: "start",
      }}>
        {/* Left info */}
        <div>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 600, marginBottom: "1rem" }}>
            Let&apos;s build something together.
          </h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
            I&apos;m currently open to internship and full-time opportunities.
            Whether you have a question or just want to say hi — my inbox is always open!
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: <Mail size={16} />, label: "chaveznielmharr@gmail.com", href: "mailto:chaveznielmharr@gmail.com" },
              { icon: <Link2 size={16} />, label: "linkedin.com/in/Blueiel", href: "https://linkedin.com/in/Blueiel" },
              { icon: <MapPin size={16} />, label: "Cadiz City, Philippines", href: null },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ color: "#3b82f6", flexShrink: 0 }}>{item.icon}</span>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer"
                    style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s", wordBreak: "break-all" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#3b82f6")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                  >{item.label}</a>
                ) : (
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "2rem",
        }}>
          {status === "sent" ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✓</div>
              <h3 style={{ color: "#3b82f6", marginBottom: "0.5rem" }}>Message sent!</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>I&apos;ll get back to you as soon as possible.</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { name: "name", label: "NAME", type: "text", placeholder: "Your Name" },
                { name: "email", label: "EMAIL", type: "email", placeholder: "you@email.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>{field.label}</label>
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.15)")}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi, I'd like to..."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => (e.target.style.borderColor = "#3b82f6")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(59,130,246,0.15)")}
                />
              </div>
              {status === "error" && (
                <p style={{ color: "#f87171", fontSize: "0.85rem", textAlign: "center" }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
              <button
                onClick={() => void handleSubmit()}
                disabled={status === "sending" || !form.name || !form.email || !form.message}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  padding: "0.85rem", background: "#3b82f6", color: "#fff",
                  border: "none", borderRadius: "6px", fontWeight: 600, fontSize: "0.9rem",
                  cursor: !form.name || !form.email || !form.message ? "not-allowed" : "pointer",
                  letterSpacing: "0.05em", transition: "all 0.2s",
                  opacity: !form.name || !form.email || !form.message ? 0.5 : 1,
                  fontFamily: "inherit", width: "100%",
                  WebkitAppearance: "none",
                  touchAction: "manipulation",
                }}
                onMouseEnter={(e) => { if (form.name && form.email && form.message) (e.currentTarget as HTMLElement).style.background = "#2563eb"; }}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#3b82f6")}
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

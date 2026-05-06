export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(59,130,246,0.08)",
        padding: "2rem",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
        Designed & Built by{" "}
        <span style={{ color: "#3b82f6" }}>Nielmharr Chavez</span>
        {" "}· {new Date().getFullYear()}
      </p>
      <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "0.4rem", opacity: 0.6 }}>
        Built with Next.js · Deployed on Vercel
      </p>
    </footer>
  );
}

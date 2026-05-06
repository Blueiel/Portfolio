"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, GitFork, Link2, Mail } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
        ctx.fill();
      });

      // Lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "2rem",
          maxWidth: "800px",
        }}
      >
        <p
          style={{
            color: "#3b82f6",
            fontSize: "0.875rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            fontWeight: 500,
          }}
        >
          Hello, World. I&apos;m
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "var(--text-primary)" }}>Nielmharr</span>{" "}
          <span
            style={{
              color: "#3b82f6",
              textShadow: "0 0 40px rgba(59,130,246,0.5)",
            }}
          >
            Chavez
          </span>
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              height: "1px",
              width: "40px",
              background: "linear-gradient(to right, transparent, #3b82f6)",
            }}
          />
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
            }}
          >
            Software Engineer Intern
          </p>
          <div
            style={{
              height: "1px",
              width: "40px",
              background: "linear-gradient(to left, transparent, #3b82f6)",
            }}
          />
        </div>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "1rem",
            maxWidth: "500px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Building scalable systems & elegant interfaces. Passionate about
          turning complex problems into clean, efficient code.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "0.75rem 2rem",
              background: "#3b82f6",
              color: "#fff",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#2563eb")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#3b82f6")
            }
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              padding: "0.75rem 2rem",
              border: "1px solid rgba(59,130,246,0.4)",
              color: "var(--text-primary)",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9rem",
              transition: "all 0.2s",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#3b82f6";
              el.style.background = "rgba(59,130,246,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(59,130,246,0.4)";
              el.style.background = "transparent";
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Social icons */}
        <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center" }}>
          {[
            { icon: <GitFork size={18} />, href: "https://github.com/Blueiel", label: "GitHub" },
            { icon: <Link2 size={18} />, href: "https://linkedin.com/in/Blueiel", label: "LinkedIn" },
            { icon: <Mail size={18} />, href: "chaveznielmharr@gmail.com", label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              style={{
                width: "40px",
                height: "40px",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#3b82f6";
                el.style.color = "#3b82f6";
                el.style.background = "rgba(59,130,246,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(59,130,246,0.2)";
                el.style.color = "var(--text-secondary)";
                el.style.background = "transparent";
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--text-muted)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          textDecoration: "none",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          animation: "bounce 2s infinite",
          zIndex: 1,
        }}
      >
        <span>scroll</span>
        <ArrowDown size={14} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}

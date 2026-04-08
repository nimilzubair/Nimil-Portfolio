"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  "Next.js",
  "React",
  "C/C++",
  "C#",
  "Python",
  "Java",
  "SQL",
  "Ethereum",
  "Solidity",
  "PostgreSQL",
  "MongoDB",
  "SQL Server",
];

const experience = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Ultimate Blend Pvt. Ltd.",
    period: "Nov 2025",
    summary:
      "Developed and launched a responsive company website in Next.js and managed the production deployment on Namecheap.",
  },
  {
    role: "Software Intern",
    company: "M3 Technologies Pakistan Pvt. Ltd.",
    period: "Jun 2025 - Aug 2025",
    summary:
      "Developed RESTful APIs in .NET Core and built a Windows Service for automated email notifications to users and admins.",
  },
];

const projects = [
  {
    title: "Sehat Vault",
    category: "Final Year Project",
    description:
      "Blockchain-based healthcare platform with Ethereum smart contracts for benefit generation and secure on-chain patient data management.",
    tech: ["Next.js", "Ethereum", "Solidity"],
    accent: "from-cyan-400 to-violet-500",
  },
  {
    title: "Prism",
    category: "AI Sign Language Recognition",
    description:
      "Real-time communication assistant using a custom Transformer model, MediaPipe hand tracking, and a LangChain + ChromaDB + Ollama RAG pipeline.",
    tech: ["Python", "LangChain", "ChromaDB"],
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    title: "NovaLang Compiler & IDE",
    category: "Compiler Project",
    description:
      "Custom C++ compiler with ASTs and symbol tables, plus a PyQt6 IDE with syntax highlighting, execution, and realtime error reporting.",
    tech: ["C++", "Python", "PyQt6"],
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Spam Email Classifier",
    category: "ML Pipeline",
    description:
      "Spam detection pipeline using Naive Bayes, SVM, Decision Tree, and hybrid models with TF-IDF and NLP feature engineering.",
    tech: ["Python", "ML", "NLP"],
    accent: "from-pink-400 to-rose-500",
  },
  {
    title: "Complaint Management System",
    category: "Full-Stack Application",
    description:
      "Complaint tracking system built with .NET C#, SQL Server, secure authentication, status filtering, and automated email notifications.",
    tech: [".NET C#", "SQL Server", "Web API"],
    accent: "from-violet-400 to-fuchsia-500",
  },
];

const achievements = [
  "National Skill Competency Test (NSCT): 73/100 marks, 98.5 percentile (Apr 2026)",
  "Dean's List of Honor, 7th Semester (2025)",
  "Co-Head, Blind Code Programming Competition (2025)",
  "Volunteer, PROCOM'23",
];

const education = [
  {
    school: "FAST-NUCES, Karachi",
    degree: "BS Computer Science",
    note: "CGPA: 3.2 · Expected: June 2026",
  },
  {
    school: "BAMM PECHS Govt College",
    degree: "Higher Secondary (HSC)",
    note: "2020 - 2022",
  },
  {
    school: "Karachi Public School",
    degree: "Senior Secondary (SSC)",
    note: "2018 - 2020",
  },
];

function SectionLabel({ children }: { children: string }) {
  return <span className="section-label">{children}</span>;
}

function SocialIcon({ type }: { type: "github" | "linkedin" | "mail" }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.77-1.6-2.66-.31-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.26 1.98-.4 3-.4 1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.61-5.47 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.13-.92 2.06-2.06 2.06ZM3.56 22.02V9h3.56v13.02H3.56Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isProfileFlipped, setIsProfileFlipped] = useState(false);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const projectsSectionRef = useRef<HTMLElement | null>(null);
  const scrollLockTimestampRef = useRef(0);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as "dark" | "light" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const nextTheme = storedTheme ?? systemTheme;
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const syncViewportMode = () => {
      setIsCompactViewport(mediaQuery.matches);
    };

    syncViewportMode();
    mediaQuery.addEventListener("change", syncViewportMode);

    return () => {
      mediaQuery.removeEventListener("change", syncViewportMode);
    };
  }, []);

  useEffect(() => {
    if (!isCompactViewport) {
      setIsMobileNavOpen(false);
    }
  }, [isCompactViewport]);

  useEffect(() => {
    if (isCompactViewport) {
      return;
    }

    const isProjectsSectionLocked = () => {
      const section = projectsSectionRef.current;
      if (!section) {
        return false;
      }

      const rect = section.getBoundingClientRect();
      const lockInset = Math.min(140, Math.max(84, window.innerHeight * 0.15));
      return rect.top <= lockInset && rect.bottom >= window.innerHeight - lockInset;
    };

    const navigateProjectsByDirection = (direction: number) => {
      const now = performance.now();
      if (now - scrollLockTimestampRef.current < 420) {
        return false;
      }

      let changed = false;
      setActiveProjectIndex((current) => {
        const next = Math.max(0, Math.min(projects.length - 1, current + direction));
        changed = next !== current;
        return next;
      });

      if (changed) {
        scrollLockTimestampRef.current = now;
      }

      return changed;
    };

    const onWheel = (event: WheelEvent) => {
      if (!isProjectsSectionLocked()) {
        return;
      }

      const delta = event.deltaY;
      if (Math.abs(delta) < 12) {
        return;
      }

      const direction = delta > 0 ? 1 : -1;
      if (navigateProjectsByDirection(direction) && event.cancelable) {
        event.preventDefault();
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartYRef.current = event.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!isProjectsSectionLocked() || touchStartYRef.current === null) {
        return;
      }

      const currentY = event.touches[0]?.clientY;
      if (typeof currentY !== "number") {
        return;
      }

      const delta = touchStartYRef.current - currentY;
      if (Math.abs(delta) < 28) {
        return;
      }

      const direction = delta > 0 ? 1 : -1;
      if (navigateProjectsByDirection(direction)) {
        touchStartYRef.current = currentY;
        if (event.cancelable) {
          event.preventDefault();
        }
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!isProjectsSectionLocked()) {
        return;
      }

      if (["ArrowDown", "PageDown"].includes(event.key)) {
        if (navigateProjectsByDirection(1)) {
          event.preventDefault();
        }
      }

      if (["ArrowUp", "PageUp"].includes(event.key)) {
        if (navigateProjectsByDirection(-1)) {
          event.preventDefault();
        }
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isCompactViewport]);

  useEffect(() => {
    if (isCompactViewport) {
      return;
    }

    let intervalId: number | null = null;
    const section = projectsSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && intervalId === null) {
          intervalId = window.setInterval(() => {
            setActiveProjectIndex((current) => (current + 1) % projects.length);
          }, 5800);
        }

        if (!entry.isIntersecting && intervalId !== null) {
          window.clearInterval(intervalId);
          intervalId = null;
        }
      },
      { threshold: 0.52 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, [isCompactViewport]);

  const activeProject = projects[activeProjectIndex];
  const projectCountLabel = `${String(activeProjectIndex + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;

  return (
    <main className="portfolio-shell min-h-screen overflow-hidden">
      <div className="portfolio-bg" aria-hidden="true">
        <div className="bg-orb orb-one" />
        <div className="bg-orb orb-two" />
        <div className="bg-orb orb-three" />
        <div className="bg-grid" />
      </div>

      <header className="site-header">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="brand-mark" aria-label="Back to top">
            <Image src="/Image.png" alt="Nimil Zubair" fill className="brand-image" sizes="64px" priority />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="inline-flex h-9 w-9 flex-col justify-center gap-1 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 text-[color:var(--foreground)] md:hidden"
              onClick={() => setIsMobileNavOpen((current) => !current)}
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-nav-panel"
              aria-label="Toggle navigation menu"
            >
              <span className="block h-[1.5px] w-full rounded-full bg-current" />
              <span className="block h-[1.5px] w-full rounded-full bg-current" />
            </button>
            <button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="theme-toggle" aria-label="Toggle dark and light theme">
              <span className="theme-toggle-icon" aria-hidden="true">
                {theme === "dark" ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                    <circle cx="12" cy="12" r="4" />
                    <path strokeLinecap="round" d="M12 2.75v2.2M12 19.05v2.2M4.75 12h2.2M17.05 12h2.2M5.9 5.9l1.55 1.55M16.55 16.55l1.55 1.55M18.1 5.9l-1.55 1.55M7.45 16.55L5.9 18.1" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.5A8.5 8.5 0 1 1 9.5 3.75a7 7 0 1 0 10.75 10.75Z" />
                  </svg>
                )}
              </span>
            </button>
            <a href="#contact" className="cta-link">
              Contact
            </a>
          </div>
        </div>

        <div
          id="mobile-nav-panel"
          className={`fixed left-3 right-3 top-[4.45rem] z-[70] rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)]/95 p-2 shadow-2xl backdrop-blur-lg transition-all duration-200 md:hidden ${
            isMobileNavOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <nav className="grid gap-2" aria-label="Mobile navigation links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm text-[color:var(--foreground)]"
                onClick={() => setIsMobileNavOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="top" className="mx-auto flex min-h-[98svh] max-w-6xl items-start px-5 pb-4 pt-11 sm:min-h-[calc(100svh-88px)] sm:items-center sm:px-6 sm:py-8 lg:px-8">
        <div className="grid w-full items-center gap-5 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-9">
          <div className="space-y-4 sm:space-y-6 lg:space-y-5">
            <div className="fade-up inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs text-[color:var(--muted)] sm:px-4 sm:py-2 sm:text-sm" style={{ animationDelay: "0.05s" }}>
              <span className="pulse-dot" />
              Software Developer · Karachi, Pakistan
            </div>

            <div className="space-y-3 sm:space-y-4 lg:space-y-3">
              <SectionLabel>Software Developer</SectionLabel>
              <h1 className="fade-up max-w-4xl text-[1.95rem] font-semibold tracking-tight leading-[1.05] sm:text-5xl lg:text-6xl" style={{ animationDelay: "0.1s" }}>
                Building polished web products, AI prototypes, and blockchain systems.
              </h1>
              <p className="fade-up max-w-2xl text-sm leading-6 text-[color:var(--muted)] sm:text-base sm:leading-7" style={{ animationDelay: "0.2s" }}>
                I&apos;m Nimil Zubair, a FAST-NUCES computer science student with hands-on experience in Next.js, .NET Core, Python, and Ethereum.
              </p>
            </div>

            <div className="fade-up flex flex-wrap gap-2.5 sm:gap-4" style={{ animationDelay: "0.25s" }}>
              <a href="#projects" className="primary-button text-sm sm:text-base">
                View Projects
              </a>
              <a href="mailto:nimilzubair1@gmail.com" className="secondary-button text-sm sm:text-base">
                Email Me
              </a>
            </div>

            <div className="fade-up hidden gap-4 sm:grid sm:grid-cols-3" style={{ animationDelay: "0.3s" }}>
              {[
                { value: "3.2", label: "CGPA" },
                { value: "2", label: "Work roles" },
                { value: "5", label: "Featured projects" },
              ].map((item) => (
                <div key={item.label} className="stat-card">
                  <div className="text-2xl font-semibold">{item.value}</div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="fade-up hero-card mt-[-0.25rem] p-4 sm:mt-0 sm:p-6 lg:p-5" style={{ animationDelay: "0.2s" }}>
            <button
              type="button"
              className="flip-toggle"
              onClick={() => setIsProfileFlipped((current) => !current)}
              aria-pressed={isProfileFlipped}
              aria-label="Flip profile card"
            >
              {isProfileFlipped ? "Show profile" : "Flip to image"}
            </button>

            <div className="profile-flip-wrap mt-3 sm:mt-4 lg:mt-3">
              <div className={`profile-flip-inner ${isProfileFlipped ? "is-flipped" : ""}`}>
                <div className="profile-face profile-front">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <SectionLabel>Profile</SectionLabel>
                      <h2 className="mt-3 text-2xl font-semibold sm:mt-4 sm:text-3xl">Nimil Zubair</h2>
                      <p className="mt-1.5 text-sm text-[color:var(--muted)] sm:mt-2 sm:text-base">Software Developer · Full-Stack · Blockchain</p>
                    </div>
                    <div className="hidden rounded-2xl border px-3 py-2 text-right text-xs text-[color:var(--muted)] sm:block">
                      Available for
                      <br />
                      opportunities
                    </div>
                  </div>

                  <div className="mt-4 space-y-1.5 text-xs text-[color:var(--muted)] sm:mt-6 sm:space-y-2.5 sm:text-sm lg:mt-5">
                    <p>FAST-NUCES Karachi · Expected June 2026</p>
                    <p>Karachi, Pakistan</p>
                    <p>nimilzubair1@gmail.com</p>
                  </div>

                  <div className="mt-4 hidden rounded-3xl border p-4 sm:mt-6 sm:block lg:mt-5">
                    <div className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">Core Focus</div>
                    <div className="mt-3 space-y-2.5">
                      {[
                        "Production Next.js and React interfaces",
                        "RESTful APIs and backend services",
                        "Blockchain and AI-assisted systems",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="profile-face profile-back">
                  <Image src="/Image.png" alt="Nimil Zubair portrait" fill className="profile-back-image" sizes="(max-width: 1024px) 90vw, 420px" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="fade-up glass-panel p-6 sm:p-8" style={{ animationDelay: "0.05s" }}>
            <SectionLabel>About</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">A practical builder with a broad stack</h2>
            <p className="mt-5 leading-8 text-[color:var(--muted)]">
              My resume shows a mix of freelance delivery, internship work, and technical projects across web, blockchain, machine learning, and compiler design. I like solving end-to-end problems and shipping work that feels deliberate, not generic.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {education.map((item) => (
                <div key={item.school} className="rounded-2xl border p-4">
                  <div className="text-sm text-[color:var(--muted)]">{item.degree}</div>
                  <div className="mt-1 font-medium">{item.school}</div>
                  <div className="mt-1 text-sm text-[color:var(--muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up glass-panel p-6 sm:p-8" style={{ animationDelay: "0.12s" }}>
            <SectionLabel>Skills</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Languages, frameworks, and platforms</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 hidden gap-3 sm:grid sm:grid-cols-3">
              {[
                "Next.js",
                ".NET Core",
                "Ethereum",
                "Python",
                "PostgreSQL",
                "Vercel",
              ].map((skill) => (
                <div key={skill} className="rounded-2xl border px-4 py-3 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="fade-up mb-10" style={{ animationDelay: "0.05s" }}>
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mt-4 text-2xl font-semibold sm:text-4xl">Recent roles</h2>
        </div>

        <div className="grid gap-4">
          {experience.map((item, index) => (
            <article key={item.company} className="fade-up glass-panel p-6 sm:p-8" style={{ animationDelay: `${0.1 + index * 0.08}s` }}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">{item.period}</div>
                  <h3 className="mt-2 text-2xl font-semibold">{item.role}</h3>
                  <div className="mt-1 text-[color:var(--muted)]">{item.company}</div>
                </div>
                <p className="max-w-3xl leading-8 text-[color:var(--muted)]">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" ref={projectsSectionRef} className="project-scroll-section mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="project-sticky-wrap">
          <div className="fade-up mb-10" style={{ animationDelay: "0.05s" }}>
            <SectionLabel>Projects</SectionLabel>
            <div className="project-head-shell mt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="project-counter">{projectCountLabel}</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
            <div className="hidden space-y-2 lg:block">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActiveProjectIndex(index)}
                  className={`project-nav-item ${index === activeProjectIndex ? "is-active" : ""}`}
                  aria-label={`Show project ${index + 1}: ${project.title}`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="truncate">{project.title}</span>
                </button>
              ))}
            </div>

            <article key={activeProject.title} className="project-card project-active-card p-6 sm:p-8">
              <div className={`h-1.5 w-28 rounded-full bg-gradient-to-r ${activeProject.accent}`} />
              <div className="mt-5 text-sm uppercase tracking-[0.18em] text-[color:var(--muted)]">{activeProject.category}</div>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{activeProject.title}</h3>
              <p className="mt-4 leading-7 text-[color:var(--muted)] sm:leading-8">{activeProject.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {activeProject.tech.map((tech) => (
                  <span key={tech} className="skill-pill text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                <button
                  type="button"
                  className="project-step-button"
                  onClick={() => setActiveProjectIndex((current) => Math.max(0, current - 1))}
                  disabled={activeProjectIndex === 0}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="project-step-button"
                  onClick={() => setActiveProjectIndex((current) => Math.min(projects.length - 1, current + 1))}
                  disabled={activeProjectIndex === projects.length - 1}
                >
                  Next
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="fade-up glass-panel p-6 sm:p-8" style={{ animationDelay: "0.05s" }}>
            <SectionLabel>Achievements</SectionLabel>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Recognition and leadership</h2>
            <div className="mt-6 space-y-3">
              {achievements.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border px-4 py-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="fade-up callout-panel p-6 sm:p-10" style={{ animationDelay: "0.1s" }}>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-2xl font-semibold sm:text-4xl">Let&apos;s talk about internships, freelance work, or a product idea.</h2>
            <p className="mt-4 max-w-2xl leading-8 text-[color:var(--muted)]">
              I&apos;m open to opportunities where I can build reliable software, learn quickly, and contribute across the stack.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:nimilzubair1@gmail.com" className="primary-button">
                nimilzubair1@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/nimil-zubair-b4bb39296" target="_blank" rel="noopener noreferrer" className="secondary-button">
                LinkedIn Profile
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://github.com/nimilzubair" target="_blank" rel="noopener noreferrer" className="icon-link">
                <SocialIcon type="github" />
              </a>
              <a href="https://www.linkedin.com/in/nimil-zubair-b4bb39296" target="_blank" rel="noopener noreferrer" className="icon-link">
                <SocialIcon type="linkedin" />
              </a>
              <a href="mailto:nimilzubair1@gmail.com" className="icon-link">
                <SocialIcon type="mail" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-5 pb-10 pt-8 text-sm text-[color:var(--muted)] sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span>Developed by Nimil Zubair</span>
          <span>© {new Date().getFullYear()} Nimil Zubair</span>
        </div>
      </footer>
    </main>
  );
}

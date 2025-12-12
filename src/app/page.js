"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import {
  Github,
  Mail,
  ExternalLink,
  Database,
  Terminal,
  ArrowUpRight,
  Sparkles,
  Briefcase,
  Calendar,
  MapPin,
  Code2
} from "lucide-react"
import Link from "next/link"

// --- FLOATING ICONS COMPONENT (Optimized for Performance) ---
const FloatingIcons = () => {
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Refs to manage animation directly without triggering React re-renders
  const requestRef = useRef()
  const iconRefs = useRef([])
  const physicsRef = useRef([])

  // Tech Stack Images
  const icons = useMemo(() => [
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", size: 50 },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", size: 45 },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", size: 45 },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", size: 50 },
    { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", size: 50 },
    { name: "TensorFlow", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", size: 50 },
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", size: 55 },
    { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", size: 60 },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", size: 45 },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", size: 45 },
  ], [])

  // 1. Setup Dimensions & Initial Physics State
  useEffect(() => {
    if (!containerRef.current) return

    const updateDimensions = () => {
      const { offsetWidth: width, offsetHeight: height } = containerRef.current
      setDimensions({ width, height })

      // Initialize physics for each icon if not already set or if resized
      if (physicsRef.current.length === 0 || physicsRef.current.length !== icons.length) {
        physicsRef.current = icons.map(() => ({
          x: Math.random() * (width - 80),
          y: Math.random() * (height - 80),
          vx: (Math.random() - 0.5) * 1.5, // Slightly increased speed
          vy: (Math.random() - 0.5) * 1.5,
        }))
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [icons])

  // 2. The Animation Loop (Runs outside of React render cycle)
  const animate = () => {
    if (!dimensions.width) return

    physicsRef.current.forEach((p, i) => {
      // Update Physics
      p.x += p.vx
      p.y += p.vy

      // Bounce Logic
      if (p.x <= 0 || p.x >= dimensions.width - 60) p.vx *= -1
      if (p.y <= 0 || p.y >= dimensions.height - 60) p.vy *= -1

      // Direct DOM Update (Fast!)
      const el = iconRefs.current[i]
      if (el) {
        el.style.transform = `translate(${p.x}px, ${p.y}px)`
      }
    })

    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [dimensions]) // Restart loop if dimensions change

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-inner shadow-primary/5 group"
    >
      {/* Background Label */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-6xl md:text-8xl font-bold text-foreground/5 uppercase tracking-widest select-none">
          Stack
        </span>
      </div>

      {/* Icons */}
      {icons.map((item, i) => (
        <div
          key={i}
          ref={el => iconRefs.current[i] = el} // Store ref to element
          className="absolute flex items-center justify-center p-3 bg-white/90 dark:bg-slate-800/90 border border-border/50 rounded-2xl shadow-lg backdrop-blur-md pointer-events-none will-change-transform"
          style={{
            zIndex: 10,
            // Initial position is handled by the loop immediately
          }}
        >
          <img
            src={item.src}
            alt={item.name}
            width={item.size}
            height={item.size}
            className={`object-contain ${item.name === "GitHub" ? "dark:invert" : ""}`}
          />
        </div>
      ))}
    </div>
  )
}

// --- MAIN PAGE COMPONENT ---
export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const sections = ["about", "experience", "projects", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const experiences = [
    {
      role: "BRILiaN Future Leader Program - IT",
      company: "PT Bank Rakyat Indonesia (Persero) Tbk",
      period: "Nov 2025 - Present",
      type: "On-site",
      location: "Jakarta, Indonesia",
      description: "Participating in the exclusive IT leadership development program at Indonesia's largest bank."
    },
    {
      role: "IDCamp 2024 Scholarship Awardee",
      company: "Indosat Ooredoo Hutchison Digital Camp",
      period: "Sep 2024 - Jul 2025",
      type: "Remote",
      location: "Indonesia",
      description: "Selected for the Backend Developer track. Successfully completed rigorous performance-based selections:",
      details: [
        "Beginner: Mastered REST API development using Node.js and Hapi.",
        "Intermediate: Built complex APIs (OpenMusic) using PostgreSQL, JWT, Redis, and RabbitMQ.",
        "Expert: Developed Forum API utilizing Clean Architecture, TDD, CI/CD, and security best practices."
      ]
    },
    {
      role: "IT Developer Intern",
      company: "PT Indonesia Satu Tujuh Group",
      period: "Jan 2024 - Mar 2024",
      type: "Internship",
      location: "Indonesia",
      description: "Contributed to software development projects, gaining hands-on experience in the professional IT workflow."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">

      {/* Navigation */}
      <nav className="fixed w-full top-4 z-50 px-4">
        <div className="max-w-5xl mx-auto bg-card/90 backdrop-blur-xl border border-border rounded-full shadow-2xl shadow-primary/10">
          <div className="px-6 py-3 flex justify-between items-center">
            <span className="font-bold text-lg bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              mailbau.
            </span>
            <div className="hidden md:flex gap-1 text-sm font-medium">
              {["about", "experience", "projects", "contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className={`capitalize px-4 py-2 rounded-full transition-all ${activeSection === item
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <Link href="#contact" className="p-2 text-primary">
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto min-h-screen flex items-center">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/15 text-primary rounded-full text-sm font-semibold border border-primary/30 shadow-lg shadow-primary/10">
                <Sparkles size={16} className="animate-pulse" />
                Information Engineering Student
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  Muhammad Ismail
                </span>
                .
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                I build software & analyze data. Passionate about{" "}
                <span className="text-foreground font-semibold">Machine Learning</span>,{" "}
                <span className="text-foreground font-semibold">Full Stack Development</span>, and solving real-world
                problems with code.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="https://github.com/mailbau"
                  target="_blank"
                  className="group flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-xl hover:scale-105 transition-all shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40"
                >
                  <Github size={20} />
                  <span className="font-semibold">GitHub Profile</span>
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </Link>

                <Link
                  href="mailto:muhammadismail1238@gmail.com"
                  className="group flex items-center gap-2 bg-card text-foreground border-2 border-border px-6 py-3 rounded-xl hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <Mail size={20} />
                  <span className="font-semibold">Get in Touch</span>
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center animate-fade-in animation-delay-400">
              <div className="relative animate-float" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 relative ring-2 ring-primary/10">
                  <img
                    src="https://avatars.githubusercontent.com/u/88268092?v=4"
                    alt="Muhammad Ismail Azmi"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>

                <div className="absolute -top-6 -right-6 bg-card p-4 rounded-2xl shadow-xl shadow-primary/20 border border-primary/30 animate-float animation-delay-200">
                  <Code2 className="text-primary" size={32} />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl shadow-accent/20 border border-accent/30 animate-float animation-delay-400">
                  <Database className="text-accent" size={32} />
                </div>
              </div>

              <div className="absolute top-1/4 -right-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-1/4 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </header>

      {/* Floating Technologies Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <p className="text-center text-muted-foreground font-semibold mb-12 uppercase tracking-wider text-sm animate-fade-in-up">
            Technologies I Work With
          </p>

          <div className="animate-fade-in-up animation-delay-200">
            <FloatingIcons />
          </div>

        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 max-w-6xl mx-auto px-6 relative">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">Experience</h2>
          <p className="text-muted-foreground text-lg">My professional journey so far</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active animate-fade-in-up">

              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card group-hover:bg-primary group-hover:border-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                <Briefcase size={16} className="text-muted-foreground group-hover:text-primary-foreground" />
              </div>

              {/* Card Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card border border-border p-6 rounded-3xl hover:border-primary hover:shadow-2xl hover:shadow-primary/10 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <span className="font-bold text-lg text-primary">{exp.company}</span>
                  <div className="flex items-center gap-2 text-xs font-semibold px-2 py-1 bg-secondary rounded-lg text-muted-foreground">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{exp.type}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {exp.description}
                </p>

                {exp.details && (
                  <ul className="space-y-2 mt-3">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">A selection of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-card rounded-3xl border border-border p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-purple-500/15 text-purple-400 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-purple-500/10">
                <Database size={28} />
              </div>
              <Link
                href="https://github.com/mailbau/AI-ML-finalproject"
                target="_blank"
                className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all"
              >
                <ExternalLink size={22} />
              </Link>
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
              White Wine Quality Analysis
            </h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              A Machine Learning project that analyzes physicochemical properties of white wine to predict quality.
              Utilizes data visualization and various classification algorithms.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Python", "Jupyter", "Scikit-learn"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="group bg-card rounded-3xl border border-border p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 animate-fade-in-up animation-delay-200">
            <div className="flex justify-between items-start mb-6">
              <div className="p-4 bg-blue-500/15 text-blue-400 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-500/10">
                <Terminal size={28} />
              </div>
              <Link
                href="https://github.com/izzatarroyyan12/SharenCare"
                target="_blank"
                className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all"
              >
                <ExternalLink size={22} />
              </Link>
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-foreground">
              Share n Care (SnC)
            </h3>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              A desktop application built with C# designed as a sharing platform for community support. Focuses on
              connecting people in need with available resources.
            </p>

            <div className="flex flex-wrap gap-2">
              {["C#", ".NET", "Desktop App"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-in-up animation-delay-400">
          <Link
            href="https://github.com/mailbau?tab=repositories"
            target="_blank"
            className="group inline-flex items-center gap-2 text-primary font-bold text-lg hover:gap-4 transition-all"
          >
            View All Projects
            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative mt-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-foreground">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                Amazing
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>

            <Link
              href="mailto:muhammadismail1238@gmail.com"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 transition-all"
            >
              <Mail size={24} />
              Say Hello
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </div>

          <div className="mt-20 pt-8 border-t border-border text-center">
            <div className="flex justify-center gap-6 mb-6">
              <Link
                href="https://github.com/mailbau"
                target="_blank"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all hover:scale-110"
              >
                <Github size={24} />
              </Link>
              <Link
                href="mailto:muhammadismail1238@gmail.com"
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-all hover:scale-110"
              >
                <Mail size={24} />
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Muhammad Ismail Azmi. Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
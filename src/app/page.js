"use client"

import { useEffect, useState } from "react"
import { Github, Mail, ExternalLink, Code2, Database, Terminal, ArrowUpRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ["about", "projects", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <nav className="fixed w-full top-4 z-50 px-4">
        <div className="max-w-4xl mx-auto bg-card/90 backdrop-blur-xl border border-border rounded-full shadow-2xl shadow-primary/10">
          <div className="px-6 py-3 flex justify-between items-center">
            <span className="font-bold text-lg bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              mailbau.
            </span>
            <div className="flex gap-1 text-sm font-medium">
              <Link
                href="#about"
                className={`px-4 py-2 rounded-full transition-all ${activeSection === "about" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
              >
                About
              </Link>
              <Link
                href="#projects"
                className={`px-4 py-2 rounded-full transition-all ${activeSection === "projects" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className={`px-4 py-2 rounded-full transition-all ${activeSection === "contact" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-secondary"}`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <header id="about" className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen flex items-center">
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
                  href="muhammadismail1238@gmail.com"
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

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <p className="text-center text-muted-foreground font-semibold mb-12 uppercase tracking-wider text-sm">
            Technologies I Work With
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Code2, name: "Python", color: "text-blue-400" },
              { icon: Database, name: "Data Science", color: "text-green-400" },
              { icon: Terminal, name: "C# / .NET", color: "text-purple-400" },
              { icon: Code2, name: "JavaScript", color: "text-yellow-400" },
            ].map((tech, i) => (
              <div
                key={tech.name}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <tech.icon className={`${tech.color} mb-3 group-hover:scale-110 transition-transform`} size={32} />
                <p className="font-bold text-lg text-foreground">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              href="muhammadismail1238@gmail.com"
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
                href="muhammadismail1238@gmail.com"
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

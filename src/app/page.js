import React from 'react';
import { Github, Mail, ExternalLink, Code2, Database, Terminal } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">

      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl text-blue-600">MIA.</span>
          <div className="space-x-6 text-sm font-medium text-slate-600">
            <Link href="#about" className="hover:text-blue-600 transition">About</Link>
            <Link href="#projects" className="hover:text-blue-600 transition">Projects</Link>
            <Link href="#contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Information Engineering Student
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-600">Muhammad Ismail</span>.
              <br />I build software & analyze data.
            </h1>
            <p className="text-lg text-slate-600 max-w-lg mx-auto md:mx-0">
              Passionate about Machine Learning, Full Stack Development, and solving real-world problems with code.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="https://github.com/mailbau"
                target="_blank"
                className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition shadow-lg hover:shadow-xl"
              >
                <Github size={20} />
                GitHub Profile
              </Link>
              <Link
                href="mailto:your-email@example.com"
                className="flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-lg hover:bg-slate-50 transition"
              >
                <Mail size={20} />
                Contact Me
              </Link>
            </div>
          </div>
          {/* Avatar Image */}
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="https://avatars.githubusercontent.com/u/88268092?v=4"
                alt="Muhammad Ismail Azmi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg animate-bounce">
              <Code2 className="text-blue-600" size={32} />
            </div>
          </div>
        </div>
      </header>

      {/* Skills / Tech Stack Section */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-slate-500 font-semibold mb-8 uppercase tracking-wider text-sm">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Text Logos for Cleanliness */}
            <span className="text-xl font-bold flex items-center gap-2"><Code2 size={24} /> Python</span>
            <span className="text-xl font-bold flex items-center gap-2"><Database size={24} /> Data Science</span>
            <span className="text-xl font-bold flex items-center gap-2"><Terminal size={24} /> C# / .NET</span>
            <span className="text-xl font-bold flex items-center gap-2"><Code2 size={24} /> JavaScript</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-slate-900">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Project Card 1 */}
          <div className="group bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
                <Database size={24} />
              </div>
              <Link href="https://github.com/mailbau/AI-ML-finalproject" target="_blank" className="text-slate-400 hover:text-blue-600">
                <ExternalLink size={20} />
              </Link>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">White Wine Quality Analysis</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">
              A Machine Learning project that analyzes physicochemical properties of white wine to predict quality. Utilizes data visualization and various classification algorithms.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">Python</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">Jupyter</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">Scikit-learn</span>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="group bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Terminal size={24} />
              </div>
              <Link href="https://github.com/izzatarroyyan12/SharenCare" target="_blank" className="text-slate-400 hover:text-blue-600">
                <ExternalLink size={20} />
              </Link>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">Share n Care (SnC)</h3>
            <p className="text-slate-600 mb-6 line-clamp-3">
              A desktop application built with C# designed as a sharing platform for community support. Focuses on connecting people in need with available resources.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">C#</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">.NET</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">Desktop App</span>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link href="https://github.com/mailbau?tab=repositories" target="_blank" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition">
            View all projects on GitHub <ExternalLink size={16} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Let's work together</h2>
          <p className="mb-8 max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:your-email@example.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Say Hello
          </a>
          <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Muhammad Ismail Azmi. Built with Next.js & Tailwind.
          </div>
        </div>
      </footer>
    </div>
  );
}
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import About from '../components/About';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <Projects />
      <Skills />
      <Certificates />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Nikita Sharma. Built with passion for data analytics.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://linkedin.com/in/nikitasharma-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nikitasharma-data27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:nikita.sharma.data@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

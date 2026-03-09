import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {year} Fahim. Built with React + Vite + Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/fahim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-sky-400 transition-colors"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/fahim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-sky-400 transition-colors"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:fahim@example.com"
            aria-label="Email"
            className="text-slate-500 hover:text-sky-400 transition-colors"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

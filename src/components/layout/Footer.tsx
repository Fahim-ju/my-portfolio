import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;
const EMAIL = import.meta.env.VITE_EMAIL;

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
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-sky-400 transition-colors"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-500 hover:text-sky-400 transition-colors"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
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

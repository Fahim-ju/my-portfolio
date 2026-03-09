import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mpqyqrle';
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;
const EMAIL = import.meta.env.VITE_EMAIL;

const SOCIALS = [
  {
    Icon: FiGithub,
    label: 'GitHub',
    href: GITHUB_URL,
    handle: '@Fahim-ju',
  },
  {
    Icon: FiLinkedin,
    label: 'LinkedIn',
    href: LINKEDIN_URL,
    handle: 'linkedin.com/in/fahimul1997',
  },
  {
    Icon: FiMail,
    label: 'Email',
    href: `mailto:${EMAIL}`,
    handle: EMAIL,
  },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const { ref, inView } = useSectionInView();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = (data.get('name') as string).trim();
    const email = (data.get('email') as string).trim();
    const message = (data.get('message') as string).trim();
    if (!name) errs.name = 'Name is required.';
    if (!email) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email.';
    if (!message) errs.message = 'Message is required.';
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('loading');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-5 gap-10"
        >
          {/* Social links */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-slate-200 font-semibold text-lg mb-4">Connect with me</h3>
              <div className="space-y-4">
                {SOCIALS.map(({ Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800 border border-slate-700 hover:border-sky-500/50 hover:text-sky-400 transition-colors group"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-sky-400 flex-shrink-0" />
                    <div>
                      <p className="text-slate-200 text-sm font-medium group-hover:text-sky-300 transition-colors">{label}</p>
                      <p className="text-slate-500 text-xs">{handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="md:col-span-3 bg-slate-800 border border-slate-700 rounded-xl p-6 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  className={`w-full bg-slate-700/50 border rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition ${
                    errors.name ? 'border-red-500' : 'border-slate-600'
                  }`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  className={`w-full bg-slate-700/50 border rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition ${
                    errors.email ? 'border-red-500' : 'border-slate-600'
                  }`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or just say hello..."
                className={`w-full bg-slate-700/50 border rounded-lg px-4 py-2.5 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition resize-none ${
                  errors.message ? 'border-red-500' : 'border-slate-600'
                }`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <div className="flex items-center justify-between gap-4">
              <Button type="submit" disabled={status === 'loading'} className="gap-2">
                <FiSend className="w-4 h-4" />
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <p className="flex items-center gap-1.5 text-emerald-400 text-sm">
                  <FiCheckCircle className="w-4 h-4" /> Message sent!
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-1.5 text-red-400 text-sm">
                  <FiAlertCircle className="w-4 h-4" /> Something went wrong.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

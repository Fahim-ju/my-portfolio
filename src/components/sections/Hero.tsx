import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Atmospheric gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-175 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-75 h-75 rounded-full bg-indigo-500/5 blur-2xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-indigo-400 font-mono text-sm md:text-base mb-4 tracking-widest uppercase"
        >
          Hey there, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight gradient-text"
        >
          Fahim
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-zinc-300 mb-6"
        >
          Full-Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          I build fast, accessible, and beautiful web &amp; mobile applications — from React frontends
          to cloud-native serverless backends on AWS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button href="#projects">View My Work</Button>
          <Button variant="ghost" href="#contact">Get In Touch</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/fahim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/fahim"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:fahim@example.com"
            aria-label="Email"
            className="text-zinc-500 hover:text-indigo-400 transition-colors"
          >
            <FiMail className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-indigo-400 transition-colors z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FiArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.a>
    </section>
  );
}

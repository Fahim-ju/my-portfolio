import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: ReactNode;
  href?: string;
}

export function Button({ variant = 'primary', children, href, className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400';
  const styles = {
    primary:
      'bg-sky-500 text-white hover:bg-sky-400 active:scale-95 shadow-lg shadow-sky-500/20',
    ghost:
      'border border-slate-600 text-slate-300 hover:border-sky-500 hover:text-sky-400 active:scale-95',
  };

  const combined = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combined}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      {...(props as object)}
    >
      {children}
    </motion.button>
  );
}

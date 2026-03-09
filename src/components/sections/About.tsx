import { motion } from 'framer-motion';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionTitle } from '../ui/SectionTitle';

export function About() {
  const { ref, inView } = useSectionInView();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 max-w-6xl mx-auto"
    >
      <SectionTitle
        title="About Me"
        subtitle="A little about who I am and what drives me"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Profile image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-2xl bg-sky-500/20 blur-xl" />
            <div className="relative w-full h-full rounded-2xl border-2 border-sky-500/30 overflow-hidden">
              <img
                src="/myImage.png"
                alt="Fahim"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-5 text-slate-400 leading-relaxed">
          <p className="text-lg text-slate-300 font-medium">
            I'm a passionate full-stack developer based in Bangladesh who loves turning complex
            problems into elegant, user-friendly solutions.
          </p>
          <p>
            With expertise spanning React, TypeScript, ASP.NET Core, Python, and AWS cloud services,
            I've shipped production applications across web, mobile, and serverless architectures.
          </p>
          <p>
            When I'm not coding, I'm exploring new technologies, contributing to open-source, or
            brewing a perfect cup of coffee to fuel the next feature.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { label: 'Location', value: 'Bangladesh 🇧🇩' },
              { label: 'Experience', value: '3+ Years' },
              { label: 'Focus', value: 'Full-Stack + Cloud' },
              { label: 'Available', value: 'Open to Work' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-slate-800/60 rounded-lg p-3 border border-slate-700">
                <p className="text-xs text-sky-400 font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-sm text-slate-200 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

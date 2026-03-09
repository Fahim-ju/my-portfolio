import { motion } from 'framer-motion';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionTitle } from '../ui/SectionTitle';
import { usePortfolioData } from '../../hooks/usePortfolioData';

export function Experience() {
  const { ref, inView } = useSectionInView();
  const { experience } = usePortfolioData();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-4 bg-slate-800/30"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey so far"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 -translate-x-px" />

          <div className="space-y-12">
            {experience.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col md:flex-row ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center gap-6 pl-12 md:pl-0`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-5 md:top-1/2 w-3 h-3 rounded-full bg-sky-500 border-2 border-slate-900 -translate-x-1/2 md:-translate-y-1/2 z-10" />

                {/* Card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] ${
                    idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-sky-500/40 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <h3 className="text-slate-100 font-bold text-base">{item.role}</h3>
                        <p className="text-sky-400 text-sm font-medium">{item.company}</p>
                      </div>
                      <span className="shrink-0 text-xs text-slate-500 bg-slate-700/60 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {item.description.map((point, i) => (
                        <li key={i} className="text-slate-400 text-sm flex gap-2 leading-relaxed">
                          <span className="text-sky-500 mt-1 shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

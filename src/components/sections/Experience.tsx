import { motion } from 'framer-motion';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionTitle } from '../ui/SectionTitle';
import { experience } from '../../data/experience';

export function Experience() {
  const { ref, inView } = useSectionInView();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-4 bg-zinc-900/30"
    >
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey so far"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-px" />

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
                <div className="absolute left-4 md:left-1/2 top-5 md:top-1/2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#09090b] -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-lg shadow-indigo-500/50" />

                {/* Card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] ${
                    idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <h3 className="text-zinc-100 font-bold text-base">{item.role}</h3>
                        <p className="text-indigo-400 text-sm font-medium">{item.company}</p>
                      </div>
                      <span className="shrink-0 text-xs text-zinc-500 bg-zinc-800/80 px-2.5 py-1 rounded-full whitespace-nowrap border border-zinc-700">
                        {item.period}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {item.description.map((point, i) => (
                        <li key={i} className="text-zinc-400 text-sm flex gap-2 leading-relaxed">
                          <span className="text-indigo-500 mt-1 shrink-0">▸</span>
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

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiAward, FiZap, FiExternalLink } from 'react-icons/fi';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionTitle } from '../ui/SectionTitle';
import { SkillBadge } from '../ui/SkillBadge';
import { skillCategories } from '../../data/skills';
import { contests } from '../../data/contests';
import { notableWork } from '../../data/notableWork';

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: '🖥️',
  "Backend & APIs": '⚙️',
  'Cloud & DevOps': '☁️',
  'Databases & Tools': '🛢️',
};

const CONTEST_CATEGORY_COLORS: Record<string, string> = {
  'Competitive Programming': 'bg-violet-500/15 text-violet-400 border-violet-500/30',
  Hackathon: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  CTF: 'bg-red-500/15 text-red-400 border-red-500/30',
  'Data Science': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Other: 'bg-slate-500/15 text-slate-400 border-slate-500/30',
};

const TABS = [
  { id: 'technologies', label: 'Technologies', icon: FiCode },
  { id: 'notable', label: 'Notable Work', icon: FiZap },
  { id: 'competitions', label: 'Competitions', icon: FiAward },
] as const;

type TabId = (typeof TABS)[number]['id'];

export function Skills() {
  const { ref, inView } = useSectionInView();
  const [activeTab, setActiveTab] = useState<TabId>('technologies');

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-4 bg-slate-800/30"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="What I know, what I've built, and where I've competed"
        />

        {/* Tab Bar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-800 border border-slate-700 rounded-xl p-1 gap-1">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === id
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* ── Technologies Tab ── */}
          {activeTab === 'technologies' && (
            <motion.div
              key="technologies"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {skillCategories.map((cat, catIdx) => (
                <motion.div
                  key={cat.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                  className="bg-slate-800 rounded-xl p-5 border border-slate-700"
                >
                  <h3 className="flex items-center gap-2 text-slate-200 font-semibold mb-4">
                    <span>{CATEGORY_ICONS[cat.category]}</span>
                    {cat.category}
                  </h3>
                  <div className="flex flex-col gap-2">
                    {cat.skills.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* ── Competitions Tab ── */}
          {activeTab === 'competitions' && (
            <motion.div
              key="competitions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {contests.map((contest) => (
                <div
                  key={contest.id}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-col gap-3 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
                        CONTEST_CATEGORY_COLORS[contest.category]
                      }`}
                    >
                      {contest.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono shrink-0">{contest.year}</span>
                  </div>

                  <div>
                    <h3 className="text-slate-100 font-bold text-base leading-snug mb-0.5">
                      {contest.name}
                    </h3>
                    <p className="text-sky-400 text-sm font-medium">{contest.organizer}</p>
                  </div>

                  {contest.description && (
                    <p className="text-slate-400 text-sm leading-relaxed">{contest.description}</p>
                  )}

                  <div className="mt-auto flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-700 text-slate-300 border border-slate-600">
                      {contest.result}
                    </span>
                    {contest.url && (
                      <a
                        href={contest.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-sky-400 hover:text-sky-300 underline-offset-2 transition-colors"
                      >
                        View →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* ── Notable Work Tab ── */}
          {activeTab === 'notable' && (
            <motion.div
              key="notable"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {notableWork.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col gap-4 hover:border-sky-500/40 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-slate-100 font-bold text-base leading-snug">
                      {item.title}
                    </h3>
                    <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-slate-700 text-slate-300 border border-slate-600 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-500/60 text-sky-400 hover:text-sky-300 text-sm font-semibold transition-all duration-200"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Learn More
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

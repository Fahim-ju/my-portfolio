import { motion } from 'framer-motion';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionTitle } from '../ui/SectionTitle';
import { SkillBadge } from '../ui/SkillBadge';
import { skillCategories } from '../../data/skills';

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: '🖥️',
  Backend: '⚙️',
  'Cloud & DevOps': '☁️',
  'Databases & Tools': '🛢️',
};

export function Skills() {
  const { ref, inView } = useSectionInView();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-4 bg-slate-800/30"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.12 }}
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
        </div>
      </div>
    </section>
  );
}

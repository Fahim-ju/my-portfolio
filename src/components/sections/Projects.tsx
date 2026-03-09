import { motion } from 'framer-motion';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export function Projects() {
  const { ref, inView } = useSectionInView();

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Projects"
          subtitle="A selection of things I've built"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={inView ? i : 99} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

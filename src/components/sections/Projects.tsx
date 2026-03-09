import { SectionTitle } from '../ui/SectionTitle';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Projects"
          subtitle="A selection of things I've built"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

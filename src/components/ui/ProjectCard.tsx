import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="flex flex-col bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-lg hover:border-sky-500/50 transition-colors duration-300"
    >
      <div className="flex-1">
        <h3 className="text-lg font-bold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-slate-700 text-sky-400 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-4 pt-4 border-t border-slate-700">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 text-sm transition-colors"
            aria-label={`GitHub — ${project.title}`}
          >
            <FiGithub className="w-4 h-4" />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 text-sm transition-colors"
            aria-label={`Live demo — ${project.title}`}
          >
            <FiExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}

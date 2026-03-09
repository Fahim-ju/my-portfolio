import type { Skill } from '../../types';

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-700/60 border border-slate-600 text-slate-300 text-sm font-medium hover:border-sky-500/60 hover:text-sky-300 transition-colors duration-200">
      {skill.name}
    </span>
  );
}

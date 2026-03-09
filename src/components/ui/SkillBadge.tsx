import type { Skill } from '../../types';

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800/60 border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-indigo-500/60 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all duration-200">
      {skill.name}
    </span>
  );
}

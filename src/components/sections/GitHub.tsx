import { motion } from 'framer-motion';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionTitle } from '../ui/SectionTitle';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './GitHub.css';

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'your-github-username';

export function GitHub() {
  const { ref, inView } = useSectionInView();

  return (
    <section id="github" ref={ref} className="py-24 px-4 max-w-6xl mx-auto">
      <SectionTitle 
        title="GitHub Activity" 
        subtitle="My contributions and coding journey" 
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center"
      >
        {/* Calendar Container */}
        <div className="w-full bg-slate-800/50 rounded-xl border border-slate-700/50 p-8 backdrop-blur-sm hover:border-slate-700 transition-all duration-300">
          <div className="flex justify-center overflow-x-auto pb-4">
            <GitHubCalendar
              username={GITHUB_USERNAME}
              colorScheme="dark"
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              showWeekdayLabels
              errorMessage="Unable to load GitHub calendar. Please set VITE_GITHUB_USERNAME in your environment variables."
            />
            <Tooltip id="github-tooltip" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-full">
          {[
            {
              label: 'Total Contributions',
              value: '2,500+',
              icon: '📊',
            },
            {
              label: 'Active Repositories',
              value: '30+',
              icon: '📦',
            },
            {
              label: 'GitHub Profile',
              value: 'Visit',
              icon: '🔗',
              action: () =>
                window.open(`https://github.com/${GITHUB_USERNAME}`, '_blank'),
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={stat.action}
              className={`bg-slate-800/40 rounded-lg p-4 border border-slate-700/30 ${
                stat.action ? 'cursor-pointer hover:border-sky-500/50 hover:bg-slate-800/60' : ''
              } transition-all duration-300`}
            >
              <p className="text-xl mb-2">{stat.icon}</p>
              <p className="text-xs text-sky-400 font-semibold uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-lg font-bold text-slate-100">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

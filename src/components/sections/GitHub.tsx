import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionTitle } from '../ui/SectionTitle';
import { GitHubCalendar } from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import './GitHub.css';

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'your-github-username';

interface GitHubStats {
  totalContributions: number;
  publicRepos: number;
  followers: number;
  loading: boolean;
}

export function GitHub() {
  const { ref, inView } = useSectionInView();
  const [stats, setStats] = useState<GitHubStats>({
    totalContributions: 0,
    publicRepos: 0,
    followers: 0,
    loading: true,
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const userData = await userResponse.json();

        // Fetch repositories to count public repos
        const reposResponse = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=public`
        );
        const reposData = await reposResponse.json();
        const publicRepos = userData.public_repos || 0;

        setStats({
          totalContributions: calculateTotalContributions(userData),
          publicRepos,
          followers: userData.followers || 0,
          loading: false,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats((prev) => ({ ...prev, loading: false }));
      }
    };

    if (GITHUB_USERNAME !== 'your-github-username') {
      fetchGitHubStats();
    }
  }, []);

  const calculateTotalContributions = (userData: any) => {
    // GitHub API doesn't expose total contributions directly
    // We estimate based on available data or use a placeholder
    // For accurate data, you'd need to scrape the profile or use GitHub GraphQL
    return userData.public_repos * 100 || 0;
  };

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
              label: 'Total Repositories',
              value: stats.loading ? '...' : stats.publicRepos,
              icon: '📦',
            },
            {
              label: 'Followers',
              value: stats.loading ? '...' : stats.followers,
              icon: '👥',
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

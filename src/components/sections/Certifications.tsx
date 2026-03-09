import { motion } from 'framer-motion';
import { FiExternalLink, FiAward, FiCalendar, FiShield } from 'react-icons/fi';
import { useSectionInView } from '../../hooks/useSectionInView';
import { SectionTitle } from '../ui/SectionTitle';
import { usePortfolioData } from '../../hooks/usePortfolioData';

export function Certifications() {
  const { ref, inView } = useSectionInView();
  const { certifications } = usePortfolioData();

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-24 px-4 bg-slate-800/30"
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Certifications"
          subtitle="Validated expertise and professional credentials"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col gap-4 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300"
            >
              {/* Badge + Level */}
              <div className="flex items-start justify-between gap-3">
                <div className="shrink-0">
                  {cert.badgeUrl ? (
                    <img
                      src={cert.badgeUrl}
                      alt={`${cert.name} badge`}
                      className="w-16 h-16 rounded-xl object-contain bg-slate-700 p-1"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-slate-700 flex items-center justify-center">
                      <FiAward className="w-8 h-8 text-sky-400" />
                    </div>
                  )}
                </div>
                {cert.level && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30 whitespace-nowrap">
                    {cert.level}
                  </span>
                )}
              </div>

              {/* Title & Issuer */}
              <div>
                <h3 className="text-slate-100 font-bold text-base leading-snug mb-1 group-hover:text-sky-300 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sky-400 text-sm font-medium">{cert.issuer}</p>
              </div>

              {/* Dates */}
              <div className="flex flex-wrap gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FiCalendar className="w-3.5 h-3.5 text-slate-500" />
                  Issued: <span className="text-slate-300 font-medium">{cert.issueDate}</span>
                </span>
                {cert.expiryDate && (
                  <span className="flex items-center gap-1.5">
                    <FiShield className="w-3.5 h-3.5 text-slate-500" />
                    Expires: <span className="text-slate-300 font-medium">{cert.expiryDate}</span>
                  </span>
                )}
              </div>

              {/* Credential ID */}
              <div className="text-xs text-slate-500">
                Credential ID:{' '}
                <span className="text-slate-400 font-mono">{cert.credentialId}</span>
              </div>

              {/* Verify Button */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-500/60 text-sky-400 hover:text-sky-300 text-sm font-semibold transition-all duration-200"
              >
                <FiExternalLink className="w-4 h-4" />
                Verify Credential
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

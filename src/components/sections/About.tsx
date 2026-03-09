import { motion } from "framer-motion";
import { useSectionInView } from "../../hooks/useSectionInView";
import { SectionTitle } from "../ui/SectionTitle";

export function About() {
  const { ref, inView } = useSectionInView();

  return (
    <section id="about" ref={ref} className="py-24 px-4 max-w-6xl mx-auto">
      <SectionTitle title="About Me" subtitle="A little about who I am and what drives me" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Profile image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-2xl bg-indigo-600/20 blur-xl" />
            <div className="relative w-full h-full rounded-2xl border-2 border-indigo-500/30 overflow-hidden">
              <img src="/myImage.png" alt="Fahim" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-5 text-zinc-400 leading-relaxed">
          <p className="text-lg text-zinc-200 font-medium">
            I'm a Full-Stack Developer with a passion for building scalable, high-performance web and cloud
            applications that solve complex business problems.
          </p>
          <p>
            With deep expertise in React, TypeScript, .NET, Python, and AWS, I have designed and delivered production-grade systems
            including serverless pipelines, enterprise workflows, and full-stack applications that handle real-world challenges.
          </p>
          <p>
            When I'm not coding, I explore new technologies, work on research projects like automated wildlife monitoring, or experiment with cloud automation to make systems smarter and more efficient.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { label: "Location", value: "Bangladesh 🇧🇩" },
              { label: "Experience", value: "3+ Years" },
              { label: "Focus", value: "Full-Stack + Cloud" },
              { label: "Available", value: "Open to Work" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-zinc-900/70 rounded-lg p-3 border border-zinc-800 hover:border-indigo-500/40 transition-colors">
                <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-sm text-zinc-200 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { Code2, Cpu, Database, Cloud, Layers, Server, Terminal } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  'Frontend': <Code2 size={20} />,
  'Backend': <Server size={20} />,
  'AI & Data': <Cpu size={20} />,
  'Testing & DB': <Database size={20} />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-24">
        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://piabirajdar.github.io/portfolioimages/Priyanka1.jpeg" 
                alt="Priyanka Birajdar"
                className="w-full h-full object-cover transition-all duration-700 scale-110 hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-black text-white mb-8 tracking-tighter">
              WHO <span className="text-blue-500">AM</span> I?
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p className="bg-zinc-950/90 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-xl">
                I’m passionate about creating solutions that not only work, but scale — architecting clean APIs, 
                responsive frontends, and resilient backend systems that can support growth and real-world workloads.
              </p>
              <p className="bg-zinc-950/90 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-xl">
                I enjoy working at the intersection of software design, distributed systems, and developer tooling — 
                with recent interest in agentic AI workflows, retrieval-augmented systems, and LLM-powered assistants.
              </p>
              <p className="bg-zinc-950/90 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-xl">
                My experience spans the full software development lifecycle: designing features, implementing 
                React/TypeScript frontends and Java/Python services, and shipping reliably through CI/CD pipelines.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div id="skills">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-8 py-3 bg-blue-950/40 border border-blue-500/30 rounded-full backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <h3 className="text-xl font-black tracking-[0.3em] text-white uppercase">Tech Stack</h3>
            </div>
            <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl hover:border-blue-500/50 transition-all group shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6 text-blue-400">
                  <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    {categoryIcons[cat.category]}
                  </div>
                  <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

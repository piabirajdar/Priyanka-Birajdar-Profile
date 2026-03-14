import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Layers, X } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-block px-8 py-3 bg-blue-950/40 border border-blue-500/30 rounded-full backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.15)]">
          <h2 className="text-xl font-black tracking-[0.3em] text-white uppercase">Projects</h2>
        </div>
        <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-8" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer p-8 rounded-3xl border border-white/10 bg-zinc-950/90 backdrop-blur-xl hover:border-blue-500/50 hover:bg-zinc-900 transition-all relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-4 text-white/5 group-hover:text-blue-500/10 transition-colors">
              <Layers size={80} strokeWidth={1} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors drop-shadow-sm">
                {project.title}
              </h3>
              <p className="text-gray-200 text-sm mb-6 line-clamp-3 leading-relaxed drop-shadow-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-blue-400/80">
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white z-10"
              >
                <X size={24} />
              </button>
              
              <div className="p-8 md:p-12">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                  Project Case Study
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      Live Demo <ExternalLink size={18} />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                      Source Code <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

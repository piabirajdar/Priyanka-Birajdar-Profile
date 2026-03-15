import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-block px-8 py-3 bg-blue-950/40 border border-blue-500/30 rounded-full backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.15)]">
          <h2 className="text-xl font-black tracking-[0.3em] text-white uppercase">Professional Journey</h2>
        </div>
        <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-8" />
      </motion.div>

      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-blue-500/30" />

        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={exp.company + exp.period}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-20 md:mb-32 flex flex-col md:flex-row items-center ${
              i % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
              <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] border-4 border-[#010101]" />
              
              {/* Desktop Date Label */}
              <div className={`absolute hidden md:block whitespace-nowrap px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-black tracking-[0.2em] text-blue-400 uppercase shadow-xl ${
                i % 2 === 0 ? 'right-12' : 'left-12'
              }`}>
                {exp.period}
              </div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-[45%] ml-12 md:ml-0 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <div className="p-8 rounded-3xl border border-white/10 bg-zinc-950/95 backdrop-blur-2xl hover:border-blue-500/50 transition-all shadow-2xl group relative overflow-hidden">
                {/* Mobile Date Label */}
                <div className="md:hidden mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-blue-400 font-black text-[10px] uppercase tracking-[0.2em]">
                    {exp.period}
                  </span>
                </div>

                {/* Subtle background glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
                
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-end' : 'items-start'} mb-6`}>
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-tight drop-shadow-sm group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300 font-semibold text-lg">
                    <Briefcase size={16} className="text-blue-500" />
                    {exp.company}
                  </div>
                </div>
                
                <ul className={`space-y-3 text-sm text-gray-300 ${i % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                  {exp.description.map((item, j) => (
                    <li key={j} className="leading-relaxed drop-shadow-sm relative">
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className={`mt-8 flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                  {exp.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-white/5 text-gray-300 text-[10px] font-bold border border-white/10 hover:border-blue-500/30 hover:text-white transition-all">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Spacer for the other side on desktop */}
            <div className="hidden md:block md:w-[45%]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

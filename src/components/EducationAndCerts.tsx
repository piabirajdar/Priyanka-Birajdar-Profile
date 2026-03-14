import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, ExternalLink, BookOpen } from 'lucide-react';

export const EducationAndCerts: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
      {/* Education */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-10">
          <div className="inline-block px-6 py-2 bg-blue-950/40 border border-blue-500/30 rounded-full backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.15)] mb-4">
            <div className="flex items-center gap-3">
              <GraduationCap size={20} className="text-blue-400" />
              <h2 className="text-lg font-black tracking-[0.2em] text-white uppercase">Education</h2>
            </div>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent" />
        </div>

        <div className="space-y-8">
          {EDUCATION.map((edu, i) => (
            <div key={edu.degree} className="p-8 rounded-3xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 p-4 text-white/5 group-hover:text-blue-500/10 transition-colors">
                <BookOpen size={60} />
              </div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-sm">{edu.degree}</h3>
                    <p className="text-blue-400 font-medium drop-shadow-sm">{edu.institution}</p>
                    <p className="text-xs text-gray-400 mt-1 font-mono uppercase tracking-wider">{edu.period}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold">
                    GPA: {edu.gpa}
                  </span>
                </div>
                <div className="mt-4">
                  <h4 className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-3">Key Coursework</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span key={course} className="text-xs text-gray-200 bg-white/10 px-2 py-1 rounded border border-white/10">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-10">
          <div className="inline-block px-6 py-2 bg-purple-950/40 border border-purple-500/30 rounded-full backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,0.15)] mb-4">
            <div className="flex items-center gap-3">
              <Award size={20} className="text-purple-400" />
              <h2 className="text-lg font-black tracking-[0.2em] text-white uppercase">Certifications</h2>
            </div>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-transparent" />
        </div>

        <div className="space-y-4">
          {CERTIFICATIONS.map((cert, i) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-zinc-950/95 backdrop-blur-xl hover:border-purple-500/50 hover:bg-zinc-900 transition-all group shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors drop-shadow-sm">{cert.name}</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{cert.issuer}</p>
                </div>
              </div>
              <ExternalLink size={18} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

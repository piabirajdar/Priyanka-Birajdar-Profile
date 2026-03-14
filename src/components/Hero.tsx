import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-6 py-2 mb-8 rounded-full border border-blue-500/40 bg-blue-950/40 text-blue-300 text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        >
          Senior Software Engineer
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
        >
          Priyanka <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Birajdar</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-white max-w-fit mx-auto mb-10 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] bg-black/30 backdrop-blur-sm rounded-2xl py-3 px-8 border border-white/5 md:whitespace-nowrap"
        >
          Architecting scalable distributed systems & agentic AI workflows
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-6"
        >
          <a
            href="https://piabirajdar.github.io/files/Resume_Priyanka_Birajdar.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2 group shadow-xl"
          >
            Resume
            <FileText size={18} className="group-hover:scale-110 transition-transform" />
          </a>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/piabirajdar"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/priyankabirajdar"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-400 drop-shadow-lg">Scroll</span>
        <motion.div 
          animate={{ height: [20, 60, 20], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 bg-gradient-to-b from-blue-400 to-transparent" 
        />
      </motion.div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[100px] -z-10" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              Let's build something <span className="text-blue-400">extraordinary</span>.
            </motion.h2>
            <p className="text-gray-200 text-lg mb-10 leading-relaxed drop-shadow-sm bg-zinc-950/80 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-xl">
              I'm always open to discussing innovative projects, AI integration, or distributed systems architecture.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:piabirajdar@gmail.com" className="flex items-center gap-4 text-gray-200 hover:text-white transition-colors group">
                <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 group-hover:border-blue-500/50 transition-all backdrop-blur-md">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <span className="text-lg font-medium drop-shadow-sm">piabirajdar@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-gray-200">
                <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 backdrop-blur-md">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <span className="text-lg font-medium drop-shadow-sm">San Francisco Bay Area</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-12">
              <a
                href="https://github.com/piabirajdar"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 transition-all backdrop-blur-md shadow-xl"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/priyankabirajdar"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-white hover:bg-zinc-800 transition-all backdrop-blur-md shadow-xl"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-zinc-950/95 backdrop-blur-2xl border border-white/20 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-blue-500 focus:outline-none transition-colors placeholder:text-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-blue-500 focus:outline-none transition-colors placeholder:text-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-widest">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none placeholder:text-gray-500"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <footer className="mt-24 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Priyanka Birajdar. Built with React & Framer Motion.</p>
      </footer>
    </section>
  );
};

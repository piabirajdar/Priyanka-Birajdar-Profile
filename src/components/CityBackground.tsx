import React from 'react';
import { motion } from 'motion/react';

export const CityBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#010101] pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Moving NYC Skyline - Guaranteed movement with a wide panning image */}
      <motion.div 
        animate={{ 
          x: ['0%', '-25%'],
        }}
        transition={{ 
          duration: 45, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "linear" 
        }}
        className="absolute inset-0 w-[140%] h-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2500&auto=format&fit=crop" 
          alt="New York City Skyline"
          className="w-full h-full object-cover opacity-90"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Video Overlay for extra life (traffic/lights) */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-new-york-city-skyline-at-night-4032-large.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Minimal Overlays for Maximum Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay" />
      
      {/* Subtle Floating Particles for depth */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`p-${i}`}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: 0 
            }}
            animate={{ 
              y: [null, '-=100px'],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.4)]" />
    </div>
  );
};

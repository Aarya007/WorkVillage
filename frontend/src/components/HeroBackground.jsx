import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary energy core */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-96 h-96 bg-gradient-to-br from-[#ec4899]/20 via-[#a855f7]/15 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      {/* Secondary energy fields */}
      <motion.div
        className="absolute top-1/4 right-1/4"
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-64 h-64 bg-gradient-to-br from-[#c084fc]/18 via-[#8b5cf6]/12 to-transparent rounded-full blur-2xl"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/4"
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.5, 0.2, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="w-80 h-80 bg-gradient-to-br from-[#e879f9]/16 via-[#ec4899]/10 to-transparent rounded-full blur-3xl"></div>
      </motion.div>

      {/* Floating energy particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-[#ec4899]/60 to-[#a855f7]/60 rounded-full blur-sm"
          style={{
            left: `${20 + (i % 4) * 20}%`,
            top: `${30 + Math.floor(i / 4) * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 4 + (i * 0.5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(236,72,153,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]/40"></div>
    </div>
  );
};

export default HeroBackground;

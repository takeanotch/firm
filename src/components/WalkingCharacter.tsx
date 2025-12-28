// components/WalkingCharacter.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const WalkingCharacter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Transformations pour l'animation de marche
  const x = useTransform(scrollYProgress, [0, 1], ['-100%', '100%']);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      <motion.div
        style={{ x, rotate, scale }}
        className="relative"
      >
        {/* Corps */}
        <motion.div
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="w-16 h-24 bg-blue-500 rounded-full relative mx-auto"
        >
          {/* Tête */}
          <div className="w-12 h-12 bg-blue-400 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2">
            {/* Yeux */}
            <div className="absolute top-3 left-3 w-2 h-2 bg-white rounded-full" />
            <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full" />
          </div>
          
          {/* Bras */}
          <motion.div
            animate={{
              rotate: [-20, 20, -20]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-4 h-12 bg-blue-400 rounded-full absolute top-4 -left-4 origin-bottom"
          />
          
          <motion.div
            animate={{
              rotate: [20, -20, 20]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-4 h-12 bg-blue-400 rounded-full absolute top-4 -right-4 origin-bottom"
          />
          
          {/* Jambes */}
          <motion.div
            animate={{
              rotate: [-10, 10, -10]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-4 h-16 bg-blue-600 rounded-full absolute bottom-0 left-4 origin-top"
          />
          
          <motion.div
            animate={{
              rotate: [10, -10, 10]
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-4 h-16 bg-blue-600 rounded-full absolute bottom-0 right-4 origin-top"
          />
        </motion.div>

        {/* Ombre */}
        <motion.div
          animate={{
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="w-20 h-4 bg-black/30 rounded-full blur-sm mt-4 mx-auto"
        />
      </motion.div>
    </div>
  );
};

export default WalkingCharacter;
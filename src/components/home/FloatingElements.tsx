"use client";

import React from 'react';
import { motion } from 'framer-motion';

function FloatingElements() {
  const floatingVariants = {
    animate: (custom: number) => ({
      y: [0, -20, 0],
      rotate: [0, 360],
      transition: {
        duration: 6 + custom,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <>
      {/* Floating orb 1 */}
      <motion.div
        custom={0}
        variants={floatingVariants}
        animate="animate"
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating orb 2 */}
      <motion.div
        custom={2}
        variants={floatingVariants}
        animate="animate"
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-500/15 to-blue-500/15 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating orb 3 */}
      <motion.div
        custom={1}
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(81, 162, 255, 0.1) 25%, rgba(81, 162, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(81, 162, 255, 0.1) 75%, rgba(81, 162, 255, 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(81, 162, 255, 0.1) 25%, rgba(81, 162, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(81, 162, 255, 0.1) 75%, rgba(81, 162, 255, 0.1) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>
    </>
  );
}

export default FloatingElements;
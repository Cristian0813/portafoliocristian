import React from 'react'
import { motion } from 'framer-motion';

const SkillSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="mx-auto max-w-2xl text-center"
    >
      <h2 className="text-4xl font-semibold text-ColorPurpleDark dark:text-ColorPurple">
        Habilidades
      </h2>
    </motion.div>
  );
}

export default SkillSection
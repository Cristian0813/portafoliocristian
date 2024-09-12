'use client';

import React from 'react';
import SkillGrid from './components/SkillGrid';
import { skills } from './data/SkillsData';
import { motion } from 'framer-motion';

export default function SkillPage() {
  return (
    <section className="flex items-center justify-center py-2 my-8">
      <div className="container mx-auto max-w-8xl">
        <div className="py-2">
          <div className="mx-auto py-2">
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
            <SkillGrid skills={skills} />
          </div>
        </div>
      </div>
    </section>
  );
}

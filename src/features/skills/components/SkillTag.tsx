import React from 'react';
import { motion } from 'framer-motion';

interface SkillTagProps {
  skill: string;
}

export const SkillTag: React.FC<SkillTagProps> = ({ skill }) => (
  <motion.li
    transition={{ delay: 0.2, staggerChildren: 0.6 }}
    initial={{ translateY: -100, opacity: 0 }}
    whileInView={{ translateY: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="inline-flex items-center px-3 py-1 m-1 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-full dark:bg-dark-secondary dark:text-gray-200 dark:border-gray-600"
  >
    <span className="mr-2 text-green-500">✓</span>
    {skill}
  </motion.li>
);

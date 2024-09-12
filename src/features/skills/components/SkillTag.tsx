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
    className="inline-flex items-center px-3 py-1 m-1 text-sm 2xl:text-base font-medium bg-white border border-gray-300 rounded-full dark:bg-slate-800 dark:border-gray-700"
  >
    <span className="mr-2 text-green-500">✓</span>
    {skill}
  </motion.li>
);

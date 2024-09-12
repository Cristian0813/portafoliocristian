import React from 'react';
import { motion } from 'framer-motion';
import { SkillTag } from './SkillTag';
import { SkillType} from '../type';

interface SkillCategoryProps {
  category: SkillType;
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ category }) => (
  <motion.div
    transition={{
      bounce: 0.45,
      damping: 30,
      duration: 0.6,
      staggerChildren: 0.6,
      type: 'spring',
    }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="w-80 bg-gray-100 dark:bg-gray-400 sm:w-96 flex flex-col items-center flex-wrap gap-6 px-6 py-9 rounded-xl shadow-Custom overflow-hidden dark:shadow-darkCustom text-center 2xl:w-80 2xl:gap-2 2xl:px-2 2xl:py-4"
  >
    <h3 className="uppercase tracking-wide text-sm md:text-lg xl:text-2xl text-indigo-500 font-bold mb-4">
      {category.title}
    </h3>
    <ul className="flex justify-center flex-wrap gap-2">
      {category.items &&
        category.items.map((item, index) => (
          <SkillTag key={index} skill={item} />
        ))}
    </ul>
  </motion.div>
);

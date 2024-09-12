import React from 'react';
import { SkillsArray } from '../type';
import { motion } from 'framer-motion';
import { SkillCategory } from '../type';

interface SkillGridProps {
  skills: SkillsArray;
}

const SkillTag = ({ skill }: { skill: string }) => (
  <motion.li
    transition={{ delay: 0.2, staggerChildren: 0.6 }}
    initial={{ translateY: -100, opacity: 0 }}
    whileInView={{ translateY: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="inline-flex items-center px-3 py-1 m-1 text-sm font-medium text-gray-800 bg-white/50 dark:bg-slate-900 border border-gray-300 rounded-full dark:bg-dark-secondary dark:text-gray-200 dark:border-gray-600"
  >
    <span className="mr-2 text-green-500">✓</span>
    {skill}
  </motion.li>
);

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <section className="flex flex-col items-center gap-2 py-12 2xl:gap-0 2xl:py-2 2xl:m-2">
      <article className="justify-center grid lg:grid-cols-2 gap-20 p-2 2xl:grid-cols-4 2xl:gap-14 2xl:m-7 ">
        {skills.map((element: SkillCategory, index) => (
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
            key={index}
            className="w-80 bg-gray-100 dark:bg-gray-900 sm:w-96 flex flex-col items-center flex-wrap gap-6 px-6 py-9 rounded-xl shadow-md overflow-hidden dark:shadow-darkCustom text-center 2xl:w-80 2xl:gap-2 2xl:px-2 2xl:py-4"
          >
            <h3 className="uppercase tracking-wide text-xl text-indigo-500 dark:text-slate-300 font-bold mb-4">
              {element.title}
            </h3>
            <ul className="flex justify-center flex-wrap gap-2">
              {element.items &&
                element.items.map((item, itemIndex) => (
                  <SkillTag key={itemIndex} skill={item} />
                ))}
            </ul>
          </motion.div>
        ))}
      </article>
    </section>
  );
}
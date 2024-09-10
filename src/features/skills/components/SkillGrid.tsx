import React from 'react';
import { SkillsArray } from '../type';
import { motion } from 'framer-motion';
import { SkillCategory } from '../type';

interface SkillGridProps {
  skills: SkillsArray;
}

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <section className="flex flex-col items-center gap-2 py-12 ">
      <article className="justify-center grid grid-cols-2 gap-20 px-11">
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
            className="max-[550px]:w-full w-[20rem] sm:w-[23em] flex flex-col items-center flex-wrap gap-6 px-6 py-9 rounded-lg shadow-custom dark:shadow-darkCustom"
          >
            <h3 className="dark:text-dark-sky font-bold text-strong text-3xl">
              {element.title}
            </h3>
            <ul className="flex justify-center flex-wrap gap-4">
              {element.items &&
                element.items.map((item, itemIndex) => (
                  <motion.li
                    transition={{ delay: 0.2, staggerChildren: 0.6 }}
                    initial={{ translateY: -100, opacity: 0 }}
                    whileInView={{ translateY: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    key={itemIndex}
                    className="border font-bold text-base sm:text-xs rounded-md p-1  relative before:absolute before:w-[0.5em] before:h-[0.5em] before:-left-3 md:before:-left-2 before:bottom-2 before:bg-light-800 before:rounded-full before:animate-[disc-shining_800ms_ease-out_alternate-reverse_infinite]"
                  >
                    {item}
                  </motion.li>
                ))}
            </ul>
          </motion.div>
        ))}
      </article>
    </section>
  );
}
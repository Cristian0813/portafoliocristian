import React from 'react';
import { SkillCategory } from './SkillCategory';
import { SkillsArray } from '../type';

interface SkillGridProps {
  skills:SkillsArray;
}

export const SkillGrid: React.FC<SkillGridProps> = ({ skills }) => {
  return (
    <section className="flex flex-col items-center gap-2 py-8 2xl:gap-0 2xl:py-4 2xl:m-2">
      <article className="justify-center grid lg:grid-cols-2 gap-20 p-2 2xl:grid-cols-4 2xl:gap-14 2xl:m-7 ">
        {skills.map((category, index) => (
          <SkillCategory key={index} category={category} />
        ))}
      </article>
    </section>
  );
};

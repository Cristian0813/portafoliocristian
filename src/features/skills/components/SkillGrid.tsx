import React from 'react';
import { SkillsArray } from '../type';

interface SkillGridProps {
  skills: SkillsArray;
}

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="mx-auto mt-6 max-w-4xl grid grid-cols-2 gap-x-16 gap-y-16 pl-8">
      {skills.map((skill) => (
        <article
          key={skill.id}
          className="flex max-w-xl flex-col items-start justify-between p-4 rounded-lg dark:shadow-inner dark:shadow-PurpleColor"
        >
          <div className="group relative">
            <h3 className="mt-3 text-xl font-semibold leading-6">
              <span className="absolute inset-0" />
              {skill.title}
            </h3>
            <ul className="mt-5 pl-6 list-disc list-inside text-lg">
              {skill.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
};

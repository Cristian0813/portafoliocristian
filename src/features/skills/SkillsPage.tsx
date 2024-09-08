'use client';

import React from 'react';
import SkillGrid from './components/SkillGrid';
import { skills } from './data/SkillsData';


export default function SkillPage() {
  return (
    <section className="flex items-center justify-center p-2">
      <div className="container mx-auto max-w-7xl">
        <div className="p-2">
          <div className="mx-auto p-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tight">Habilidades</h2>
            </div>
            <SkillGrid skills={skills} />
          </div>
        </div>
      </div>
    </section>
  );
}
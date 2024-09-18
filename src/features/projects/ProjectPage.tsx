'use client'

import React from 'react'
import { ProjectSection } from './components/ProjectSection';
import { projectData } from './data/ProjectData';
import { ProjectCategory } from './components/ProjectCategory';

export default function ProjectPage() {
  return (
    <section
      id="proyectos"
      className="scroll-to flex items-center justify-center py-4 my-4 sm:my-8 sm:py-8 md:my-9 md:py-9 lg:mt-9 lg:py-9 xl:my-10 xl:py-10 2xl:my-12 2xl:py-12"
    >
      <div className="container mx-auto max-w-8xl">
        <ProjectSection />
        <ProjectCategory projects={projectData} />
      </div>
    </section>
  );
}
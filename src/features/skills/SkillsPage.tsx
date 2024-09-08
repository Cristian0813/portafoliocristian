// src/features/skill/SkillPage.tsx

'use client';

import React from 'react';
import SkillsGrid from '@/components/skills/SkillGrid';

const skills = [
  {
    id: 1,
    title: 'FRONT END',
    description: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Bootstrap',
      'Tailwind Css',
    ],
  },
  {
    id: 2,
    title: 'BACK END',
    description: [
      'Node.js',
      'Express.js',
      'SQL',
      'PostgreSQL',
      'Java',
      'MongoDB',
      'Git',
      'APIs',
      'Python',
    ],
  },
  {
    id: 3,
    title: 'SOPORTE TÉCNICO',
    description: [
      'Soporte técnico en sistemas',
      'Paquetería de Microsoft',
      'Mantenimiento preventivo de equipos de cómputo',
      'Instalación y actualización de software',
      'Mantenimiento de drivers',
      'Gestión de backups',
      'Instalación y configuración de sistemas operativos Windows',
    ],
  },
  {
    id: 4,
    title: 'BLANDAS',
    description: [
      'Resolución de problemas',
      'Comunicación efectiva',
      'Gestión del tiempo',
      'Trabajo en equipo',
      'Gestión de proyectos y metodología Agile',
      'Aplicación del Marco de Trabajo Scrum',
    ],
  },
];

export default function SkillPage() {
  return (
    <section className="flex items-center justify-center p-2">
      <div className="container mx-auto max-w-7xl">
        <div className="p-2">
          <div className="mx-auto p-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-bold tracking-tight">Habilidades</h2>
            </div>
            <SkillsGrid skills={skills} />
          </div>
        </div>
      </div>
    </section>
  );
}
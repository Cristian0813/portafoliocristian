'use client';

import React from 'react';

const posts = [
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
      'Redux.js',
      'Bootstrap',
      'Tailwind',
    ],
  },
  {
    id: 2,
    title: 'BACK END',
    description: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Redux.js',
      'Bootstrap',
      'Tailwind',
    ],
  },
  {
    id: 3,
    title: 'SOPORTE TÉCNICO',
    description: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Redux.js',
      'Bootstrap',
      'Tailwind',
    ],
  },
  {
    id: 4,
    title: 'BLANDAS',
    description: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Redux.js',
      'Bootstrap',
      'Tailwind',
    ],
  },
];

export default function SkillsPage() {
  // Define an array of background colors
  const bgColors = [
    'bg-red-200',
    'bg-green-200',
    'bg-blue-200',
    'bg-yellow-200',
  ];

  return (
    <section className="flex items-center justify-center">
      <div className="container mx-auto max-w-7xl">
        <div className="p-2">
          <div className="mx-auto p-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-6xl font-bold tracking-tight">
                Habilidades.
              </h2>
            </div>
            <div className="mx-auto mt-6 max-w-6xl grid grid-cols-4 gap-x-4 gap-y-16p-2">
              {posts.map((post, index) => (
                <article
                  key={post.id}
                  className={`flex max-w-xl flex-col items-start justify-between p-4 rounded-lg ${
                    bgColors[index % bgColors.length]
                  }`}
                >
                  <div className="group relative">
                    <h3 className="mt-3 text-xl font-semibold leading-6">
                      <span className="absolute inset-0" />
                      {post.title}
                    </h3>
                    <ul className="mt-5 list-disc list-inside text-lg leading-6">
                      {post.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
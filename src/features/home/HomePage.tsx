'use client'

import React from 'react';
import { motion } from 'framer-motion';
import FlipCard from '@/components/flippedcard/FlipCard';

export default function HomePage() {
  return (
    <section className="bg-green-500 flex items-center justify-center phone:pt-96 tablet:pt-12 pb-20 sm:p-96 sm:bg-red-500 md:p-96 md:bg-purple-500 lg:p-96 lg:bg-orange-500 xl:p-96 xl:bg-cyan-400 2xl:p-96 2xl:bg-indigo-500">
      <div className="container mx-auto max-w-6xl ">
        <div className="flex flex-col md:flex-row p-1">
          <motion.div
            transition={{
              duration: 0.5,
              type: 'spring',
              bounce: 0.4,
            }}
            initial={{ translateX: '-20em', opacity: 0 }}
            whileInView={{ translateX: '0em', opacity: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 p-4 bg-blue-500"
          >
            <p className="text-2xl mb-2">Hola, mi nombre es</p>
            <h1 className="text-5xl font-bold mb-2 text-DarkPurpleColor dark:text-slate-300">
              Cristian Arias
            </h1>
            <p className="text-2xl mb-4">Desarrollador Web Full Stack</p>
            <hr className="mb-4" />
            <div className="space-y-4 text-xl">
              <p>
                Mi amor por la tecnología me llevó al mundo del desarrollo web,
                donde aprendí habilidades técnicas. He aprendido a usar
                lenguajes y frameworks como HTML, CSS, JavaScript, TypeScript,
                React, Bootstrap y Tailwind para asegurarme de que los diseños
                sean adaptables y funcionan bien en cualquier dispositivo.
                Además, tengo experiencia en el desarrollo de Back end.
              </p>
            </div>
          </motion.div>
          <FlipCard />
        </div>
      </div>
    </section>
  );
}

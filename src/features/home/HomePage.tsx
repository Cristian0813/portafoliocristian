'use client'

import React from 'react';
import { motion } from 'framer-motion';
import FlipCard from '@/components/flippedcard/FlipCard';

export default function HomePage() {
  return (
    <section className="flex items-center justify-center pt-20 pb-20 sm:pt-24 sm:pb-8 md:pt-22 md:pb-18 lg:pt-24 lg:pb-12 xl:pt-24 xl:pb-12 2xl:pt-24 2xl:pb-12">
      <div className="bg-lime-500 sm:bg-red-500 md:bg-purple-500 lg:bg-orange-500 xl:bg-cyan-400 2xl:bg-indigo-500 container mx-auto max-w-6xl ">
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
            <p className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-4xl 2xl:text-8xl mb-2">
              Hola, mi nombre es
            </p>
            <h1 className="text-5xl font-bold mb-2 text-DarkPurpleColor dark:text-slate-300">
              Cristian Arias
            </h1>
            <p className="text-2xl mb-4">Desarrollador Web Full Stack</p>
            <hr className="mb-4" />
            <div className="space-y-4 text-xl">
              <p>
                Mi pasión por la tecnología me llevó al mundo del desarrollo
                web, donde he estado aprendiendo y perfeccionando habilidades
                técnicas. Utilizo lenguajes y frameworks como HTML, CSS,
                JavaScript, TypeScript, React, Bootstrap y Tailwind para
                asegurarme de que los diseños sean adaptables y funcionen
                perfectamente en cualquier dispositivo. Además, tengo
                experiencia en desarrollo de backend.
              </p>
            </div>
          </motion.div>
          <FlipCard />
        </div>
      </div>
    </section>
  );
}

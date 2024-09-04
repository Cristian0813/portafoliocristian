'use client'

import React from 'react';
import { motion } from 'framer-motion';
import FlipCard from '@/components/flippedcard/FlipCard';
import { Divider } from '@nextui-org/react';

export default function HomePage() {
  return (
    /* bg-lime-500 sm:bg-red-500 md:bg-purple-500 lg:bg-orange-500 xl:bg-cyan-400 2xl:bg-indigo-500 */
    <section className="bg-lime-500 sm:bg-red-500 md:bg-purple-500 lg:bg-orange-500 xl:bg-cyan-400 2xl:bg-indigo-500 flex items-center justify-center pt-20 pb-20 sm:pt-24 sm:pb-8 md:pt-22 md:pb-18 lg:pt-24 lg:pb-12 xl:pt-24 xl:pb-12 2xl:pt-24 2xl:pb-12">
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
            className="w-full md:w-2/3 p-4"
          >
            <div className="text-center md:text-left">
              <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2">
                Hola, mi nombre es
              </p>
              <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold mb-2 text-DarkPurpleColor dark:text-slate-300">
                Cristian Arias
              </h1>
              <p className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-2">
                Desarrollador Full Stack
              </p>
            </div>
            <Divider className="my-4" />
            <div className="space-y-4 text-xl">
              <p>
                Mi pasión por la tecnología me llevó al mundo del desarrollo
                web, donde he estado aprendiendo y perfeccionando habilidades
                técnicas. Utilizo lenguajes y frameworks como
                <span className="text-orange-800 dark:text-orange-400">
                  {' '}
                  HTML
                </span>
                ,<span className="text-blue-800 dark:text-blue-400"> CSS</span>,
                <span className="text-amber-800 dark:text-amber-400">
                  {' '}
                  JavaScript
                </span>
                ,
                <span className="text-cyan-800 dark:text-cyan-400">
                  {' '}
                  TypeScript
                </span>
                ,<span className="text-sky-800 dark:text-sky-400"> React</span>,
                <span className="text-purple-800 dark:text-purple-400">
                  {' '}
                  Bootstrap
                </span>{' '}
                y
                <span className="text-indigo-800 dark:text-indigo-400">
                  {' '}
                  Tailwind
                </span>{' '}
                para asegurarme de que los diseños sean adaptables y funcionen
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

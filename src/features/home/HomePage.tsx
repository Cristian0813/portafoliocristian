'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FlipCard from '@/components/flipcard/FlipCard';
import { Divider } from '@nextui-org/react';

export default function HomePage() {
  return (
    <section className="bg-blue-800 pt-8 pb-20 sm:pt-24 sm:px-4 md:pt-16 md:px-6 lg:pt-24 lg:px-12 xl:pt-12 xl:px-14 2xl:pt-12 2xl:pb-12 2xl:px-2 ">
      <div className="container mx-auto max-w-6xl xl:max-w-6xl 2xl:max-w-7xl bg-white">
        <div className="flex items-center justify-center flex-col lg:flex-row p-2">
          <motion.div
            transition={{
              duration: 0.5,
              type: 'spring',
              bounce: 0.4,
            }}
            initial={{ translateX: '-20em', opacity: 0 }}
            whileInView={{ translateX: '0em', opacity: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 p-4"
          >
            <div className="text-center lg:text-left ">
              <p className="text-2xl sm:text-3xl lg:text-2xl 2xl:text-4xl mb-2">
                Hola, mi nombre es
              </p>
              <h1 className="text-6xl sm:text-7xl lg:text-6xl xl:text-5xl 2xl:text-6xl font-bold mb-2 text-DarkPurpleColor dark:text-slate-300">
                Cristian Arias
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-2xl 2xl:text-4xl mb-2">
                Desarrollador Full Stack
              </p>
            </div>
            <Divider className="my-4" />
            <div className="space-y-4 text-xl sm:text-2xl lg:text-xl 2xl:text-xl">
              <p>
                Soy un apasionado por la tecnología y el desarrollo web. Mi
                experiencia abarca tanto el frontend como el backend, asegurando
                que los diseños no solo sean visualmente atractivos, sino
                también funcionales en cualquier dispositivo. Utilizo
                tecnologías como
                <span className="text-orange-800 dark:text-orange-400">
                  {' '}
                  HTML,
                </span>
                <span className="text-blue-800 dark:text-blue-400"> CSS,</span>
                <span className="text-amber-800 dark:text-amber-400">
                  {' '}
                  JavaScript,
                </span>
                <span className="text-cyan-800 dark:text-cyan-400">
                  {' '}
                  TypeScript,
                </span>
                <span className="text-sky-800 dark:text-sky-400"> React,</span>
                <span className="text-purple-800 dark:text-purple-400">
                  {' '}
                  Node.js,
                </span>
                <span className="text-indigo-800 dark:text-indigo-400">
                  {' '}
                  APIs{' '}
                </span>
                y más para crear soluciones robustas y escalables.
              </p>
            </div>
          </motion.div>
          <FlipCard />
        </div>
      </div>
    </section>
  );
}

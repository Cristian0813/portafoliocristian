import React from 'react';
import { motion } from 'framer-motion';
import IntroductionText from './IntroductionText';
import { Divider } from '@nextui-org/react';

const HeroSection = () => {
  return (
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
      <div className="text-center lg:text-left">
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
      <Divider className="my-4 dark:bg-PurpleColor" />
      <IntroductionText />
    </motion.div>
  );
};

export default HeroSection;

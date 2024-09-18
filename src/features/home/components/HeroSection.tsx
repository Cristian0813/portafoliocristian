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
        <h1>
          <strong className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-4xl">
            Hola, mi nombre es
          </strong>
          <br></br>
          <strong className="text-6xl sm:text-7xl lg:text-6xl xl:text-5xl 2xl:text-6xl text-ColorPurpleDark dark:text-ColorPurple font-[family-name:var(--font-permanent-marker)]">
            Cristian Arias
          </strong>
          <br></br>
          <strong className="text-2xl sm:text-3xl lg:text-2xl 2xl:text-4xl mb-2">
            Desarrollador Full Stack.
          </strong>
        </h1>
      </div>
      <Divider className="my-4 dark:bg-PurpleColor" />
      <IntroductionText />
    </motion.div>
  );
};

export default HeroSection;

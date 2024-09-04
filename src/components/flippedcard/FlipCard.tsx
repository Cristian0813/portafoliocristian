'use client';

import React from 'react';
import useFlipHook from '@/hook/useFlipHook';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { Headset, Code, Braces} from 'lucide-react';

const FlipCard: React.FC = () => {
  const { isFlipped, flip } = useFlipHook();
  return (
    <motion.div
      className="md:w-2/4 lg:w-1/3 flex items-center justify-center p-4 [perspective:1000px] cursor-pointer"
      onClick={flip}
      transition={{
        duration: 0.5,
        type: 'spring',
        bounce: 0.4,
      }}
      initial={{ translateX: '20em', opacity: 0 }}
      whileInView={{ translateX: '0em', opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className={`relative w-full aspect-square transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image
            alt="Cristian Arias"
            src="/images/Cristian_A.webp"
            style={{ objectFit: 'cover' }}
            fill
            className="rounded-3xl dark:opacity-75"
          />
        </div>
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden rounded-3xl">
          <div className="absolute inset-0 z-0">
            <Image
              alt="Cristian Arias"
              src="/images/Cristian_A.webp"
              style={{ objectFit: 'cover' }}
              fill
              className="filter blur-md scale-110"
            />
          </div>
          <div className="relative z-10 flex flex-col justify-center items-start h-full text-white bg-black bg-opacity-50 p-7 tablet:p-12 sm:p-10 md:p-2 lg:p-4 xl:p-8">
            <ul className="space-y-4 text-xl tablet:space-y-6 sm:space-y-16 sm:text-2xl md:space-y-3 md:text-sm lg:space-y-6 lg:text-lg xl:space-y-8 xl:text-xl 2xl:text-2xl">
              <li className="flex items-center">
                <Code className="h-6 w-6 mr-2 text-blue-500" />
                <span>Desarrollador Front-end</span>
              </li>
              <li className="flex items-center">
                <Braces className="h-6 w-6 mr-2 text-green-500" />
                <span>Desarrollador Back-end</span>
              </li>
              <li className="flex items-center">
                <ComputerDesktopIcon className="h-6 w-6 mr-2 text-rose-700" />
                <span>Soporte técnico TI</span>
              </li>
              <li className="flex items-center">
                <Headset className="h-6 w-6 mr-2 text-amber-500" />
                <span>Asesor de servicio online</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FlipCard;

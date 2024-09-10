'use client';

import React from 'react';
import useFlipHook from '@/core/hook/useFlipHook';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { Headset, Code, Braces} from 'lucide-react';

const FlipCard: React.FC = () => {
  const { isFlipped, flip } = useFlipHook();
  return (
    <motion.div
      className="w-2/4 sm:w-1/3 mt-10 lg:w-1/4 flex items-center justify-center py-2 my-4 [perspective:1000px] cursor-pointer"
      onClick={flip}
      transition={{
        duration: 0.5,
        type: 'spring',
        bounce: 0.4,
      }}
      initial={{ translateX: 100, opacity: 0 }}
      whileInView={{ translateX: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className={`relative w-full xl:w-4/5 2xl:w-5/6 aspect-square transition-transform duration-500 [transform-style:preserve-3d] ${
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
          <div className="relative z-10 flex flex-col justify-center items-start h-full text-white bg-black bg-opacity-50 p-2 md:p-4 lg:p-2">
            <ul className="space-y-1 text-xs md:text-sm md:space-y-2 lg:text-sm lg:space-y-2 xl:text-sm 2xl:text-lg 2xl:space-y-3">
              <li className="flex items-center">
                <Code className="h-6 w-6 mr-2 text-blue-500" />
                <span>Desarrollador Front end</span>
              </li>
              <li className="flex items-center">
                <Braces className="h-6 w-6 mr-2 text-green-500" />
                <span>Desarrollador Back end</span>
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

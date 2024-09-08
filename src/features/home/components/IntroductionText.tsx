import React from 'react';

const IntroductionText = () => {
  return (
    <div className="space-y-4 text-xl sm:text-2xl lg:text-xl 2xl:text-xl">
      <p>
        Soy un apasionado por la tecnología y el desarrollo web. Mi experiencia
        abarca tanto el frontend como el backend, asegurando que los diseños no
        solo sean visualmente atractivos, sino también funcionales en cualquier
        dispositivo. Utilizo tecnologías como
        <span className="text-orange-800 dark:text-orange-400"> HTML,</span>
        <span className="text-blue-800 dark:text-blue-400"> CSS,</span>
        <span className="text-amber-800 dark:text-amber-400"> JavaScript,</span>
        <span className="text-cyan-800 dark:text-cyan-400"> TypeScript,</span>
        <span className="text-sky-800 dark:text-sky-400"> React,</span>
        <span className="text-purple-800 dark:text-purple-400"> Node.js,</span>
        <span className="text-indigo-800 dark:text-indigo-400"> APIs </span>y
        más para crear soluciones robustas y escalables.
      </p>
    </div>
  );
};

export default IntroductionText;

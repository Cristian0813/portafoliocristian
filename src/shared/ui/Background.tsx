import React from 'react';

export const Background = () => {
  return (
    /* TRIANGULO TOP */
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[50px] border-t-indigo-400/50 dark:border-t-indigo-800 z-10 animate-float-top"></div>
      {/* TRIANGULO BOTTOM */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[50px] border-b-sky-400/50 dark:border-b-rose-800 z-10 animate-float-bottom"></div>
      {/* TRIANGULO RIGHT */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 border-t-[100px] border-t-transparent border-b-[100px] border-b-transparent border-r-[50px] border-r-rose-400/50 dark:border-r-teal-800 z-10 animate-float-right"></div>
      {/* TRIANGULO LEFT */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 border-t-[100px] border-t-transparent border-b-[100px] border-b-transparent border-l-[50px] border-l-emerald-400/50 dark:border-r-purple-800 z-10 animate-float-left"></div>
      {/*ARRAY PARA GENERAR TRIANGULOS */}
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`absolute w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-amber-400/30 dark:border-b-orange-800/30 z-10 animate-float-random-${
            index + 1
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            right: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        ></div>
      ))}
    </div>
  );
};

import React from 'react';

export const AnimatedBackground = () => {

  const commonStyle = {
    left: `${Math.random() * 100}%`,
    right: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  };
  
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* TRIÁNGULO TOP */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[50px] border-t-indigo-400/50 dark:border-t-indigo-800 z-10 animate-float-top blur-2xl"></div>
      {/* TRIÁNGULO BOTTOM */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[50px] border-b-sky-400/50 dark:border-b-rose-800 z-10 animate-float-bottom blur-2xl"></div>
      {/* TRIÁNGULO RIGHT */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 border-t-[100px] border-t-transparent border-b-[100px] border-b-transparent border-r-[50px] border-r-rose-400/50 dark:border-r-teal-800 z-10 animate-float-right blur-2xl"></div>
      {/* TRIÁNGULO LEFT */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 border-t-[100px] border-t-transparent border-b-[100px] border-b-transparent border-l-[50px] border-l-emerald-400/50 dark:border-r-purple-800 z-10 animate-float-left blur-2xl"></div>
      {/* TRIÁNGULO ROTACIÓN */}
      <div
        className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[25px] border-b-yellow-400/30 dark:border-b-purple-800/30 z-10 animate-float-random-1 blur-[10px]"
        style={{
          top: `${Math.random() * 10}%`,
          left: `${Math.random() * 100}%`,
          right: `${Math.random() * 100}%`,
        }}
      ></div>
      <div
        className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[25px] border-b-blue-400/30 dark:border-b-rose-800/30 z-10 animate-float-random-1 blur-[10px]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          right: `${Math.random() * 100}%`,
        }}
      ></div>
      <div
        className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[25px] border-b-cyan-400/30 dark:border-b-red-800/30 z-10 animate-float-random-2 blur-[10px]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          right: `${Math.random() * 100}%`,
        }}
      ></div>
      <div
        className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[25px] border-b-gray-400/30 dark:border-b-violet-800/30 z-10 animate-float-random-2 blur-[10px]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          right: `${Math.random() * 100}%`,
        }}
      ></div>
      <div
        className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[25px] border-b-amber-400/30 dark:border-b-emerald-800/30 z-10 animate-float-random-3 blur-[10px]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          right: `${Math.random() * 100}%`,
        }}
      ></div>
      <div
        className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[25px] border-b-yellow-400/30 dark:border-b-purple-800/30 z-10 animate-float-random-3 blur-[10px]"
        style={{
          top: `${Math.random() * 10}%`,
          left: `${Math.random() * 100}%`,
          right: `${Math.random() * 100}%`,
        }}
      ></div>
      <div
        className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[25px] border-b--400/30 dark:border-b-rose-800/30 z-10 animate-float-random-4 blur-[10px]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          right: `${Math.random() * 100}%`,
        }}
      ></div>
      <div
        className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[25px] border-b-lime-400/30 dark:border-b-red-800/30 z-10 animate-float-random-4 blur-[10px]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          right: `${Math.random() * 100}%`,
        }}
      ></div>
      <div
        className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[25px] border-b-zinc-400/30 dark:border-b-violet-800/30 z-10 animate-float-random-5 blur-[10px]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          right: `${Math.random() * 100}%`,
        }}
      ></div>
      <div
        className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[25px] border-b-emerald-400/30 dark:border-b-emerald-800/30 z-10 animate-float-random-5 blur-[10px]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          right: `${Math.random() * 100}%`,
        }}
      ></div>
    </div>
  );
};

import React from 'react'

export const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute bg-gradient-to-r to-indigo-400 dark:to-indigo-800 from-purple-400 dark:from-purple-800 opacity-100 dark:opacity-40 rounded-full w-[300px] h-[400px] -top-[100px] -left-[100px] transform rotate-[45deg] blur-[200px] dark:blur-[100px] z-10 animate-float-slow"></div>
      <div className="absolute bg-gradient-to-r from-purple-400 dark:from-purple-800 to-indigo-400 dark:to-indigo-800 opacity-100 dark:opacity-40 rounded-full w-[300px] h-[400px] -bottom-[100px] -right-[100px] transform rotate-[45deg] blur-[200px] dark:blur-[100px] z-10 animate-float-fast"></div>
    </div>
  );
}

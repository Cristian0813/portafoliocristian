'use client';

import { Briefcase, Book, Map } from 'lucide-react';

const SideMenu = () => {
  return (
    <div className="hidden xl:flex fixed left-2 top-[30%] z-50 flex-col gap-8 [transition:all_600ms]">
      <nav className="w-[2px] h-full p-8 flex flex-col items-center justify-center space-y-8">
        <div className="relative">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <Briefcase size={20} color="white" />
          </div>
          <div className="absolute w-0.5 h-16 bg-black left-1/2 -bottom-16 transform -translate-x-1/2"></div>
        </div>
        <div className="relative">
          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
            <Book size={20} color="white" />
          </div>
          <div className="absolute w-0.5 h-16 bg-black left-1/2 -bottom-16 transform -translate-x-1/2"></div>
        </div>
        <div className="relative">
          <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
            <Map size={20} color="white" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;

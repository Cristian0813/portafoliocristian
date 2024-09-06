'use client'

import React, { useEffect, useState } from 'react';
import { HomeIcon, PuzzlePieceIcon, FolderOpenIcon } from '@heroicons/react/24/outline';

export const SideBar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 30;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const NavItem = ({
    id,
    icon,
    label,
  }: {
    id: string;
    icon: React.ReactNode;
    label: string;
  }) => (
    <div className="relative group">
      <button
        onClick={() => scrollToSection(id)}
        className={`nav-item ${id} w-10 h-10 rounded-full flex items-center justify-center transition-all duration-100 hover:scale-110 ${
          activeSection === id ? 'active:' : ''
        }`}
        style={{
          backgroundColor:
            id === 'skills'
              ? '#60A5FA'
              : id === 'projects'
              ? '#4ADE80'
              : '',
        }}
      >
        {icon}
      </button>
      <span className="text-xs absolute left-12 top-1/2 -translate-y-1/2 bg-slate-900 text-slate-300 dark:bg-slate-300 dark:text-slate-950 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-100 whitespace-nowrap">
        {label}
      </span>
    </div>
  );

  return (
    <div className="hidden xl:flex fixed left-1 top-[30%] z-50 flex-col gap-8">
      <nav className="w-[2px] h-full p-8 flex flex-col items-center justify-center space-y-4">
        <NavItem
          id="skills"
          icon={<PuzzlePieceIcon width={25} color="white" />}
          label="Habilidades"
        />
        <NavItem
          id="projects"
          icon={<FolderOpenIcon width={25} color="white" />}
          label="Proyectos"
        />
      </nav>
    </div>
  );
};
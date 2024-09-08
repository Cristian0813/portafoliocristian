// src/components/layout/Header/index.tsx
'use client';

import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Logo from '@/components/common/Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md dark:bg-slate-950/75">
      <nav className="mx-auto flex max-w-full items-center justify-between p-2 lg:px-8">
        <Logo />
        <DesktopMenu />
        <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      </nav>
    </header>
  );
}

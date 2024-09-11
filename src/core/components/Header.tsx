// src/components/layout/Header/index.tsx
'use client';

import { useState } from 'react';
import DesktopMenu from './header/DesktopMenu';
import MobileMenu from './header/MobileMenu';
import Logo from '@/shared/common/Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md">
      <nav className="mx-auto flex max-w-full items-center justify-between p-2 lg:px-8">
        <Logo />
        <DesktopMenu />
        <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      </nav>
    </header>
  );
}

//src/core/components/Layout.tsx

import React from 'react';
import Header from './Header';
import Footer from './footer/Footer';
import { AnimatedBackground } from '@/shared/ui/Background';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <AnimatedBackground />
      <Header />
        <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
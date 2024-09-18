import React from 'react';
import Header from './Header';
import Footer from './footer/Footer';
import { AnimatedBackground } from '@/shared/ui/Background';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedBackground />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

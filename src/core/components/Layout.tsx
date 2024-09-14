
import React from 'react';
import Header from './Header';
import ErrorBoundary from './ErrorBoundary';
import Footer from './footer/Footer';
import { Background } from '@/shared/ui/Background';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Background />
      <Header />
      <ErrorBoundary>
        <main className="min-h-screen">{children}</main>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default Layout;
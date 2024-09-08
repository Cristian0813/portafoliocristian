import React from 'react';
import Header from './Header';
import ErrorBoundary from './ErrorBoundary';
import Footer from './footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <main className="min-h-screen">{children}</main>
      </ErrorBoundary>
      <Footer />
    </>
  );
};
export default Layout;

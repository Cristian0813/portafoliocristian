import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { ThemeProvider } from '@/utils/providers';
import Footer from '@/components/footer/Footer';
import Header from '@/components/layout/header/Header';
import ErrorBoundary from './ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cristian Javier Arias Ordoñez',
  description:
    'Desarrollador web full-stack con experiencia en JavaScript, HTML, CSS, React, Node.js y Frameworks. Conoce mis proyectos y habilidades.',
  keywords:
    'Desarrollador web, JavaScript, React, Node.js, HTML, CSS, Soporte técnico, Mesa de ayuda, Cristian Javier Arias Ordoñez, Cristian J Arias O, Cristian Arias, Cristian Ordoñez, Javier Arias Ordoñez, Javier Arias, Javier Ordoñez',

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} bg-zinc-100 dark:bg-slate-950 text-slate-900 dark:text-slate-300 `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <ErrorBoundary >
          {children}
          </ErrorBoundary>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );

}

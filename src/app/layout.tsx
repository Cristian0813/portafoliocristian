import type { Metadata } from 'next';
import { Inter, Permanent_Marker, Sofadi_One } from 'next/font/google';
import '@/shared/styles/globals.css';
import { ThemeProvider } from '@/core/utils/providers';
import Layout from '@/core/components/Layout';

const inter = Inter({ subsets: ['latin'] });
const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-permanent-marker',
});

const sofadiOne = Sofadi_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sofadi-one',
});

export const metadata: Metadata = {
  title: 'Cristian Javier Arias Ordoñez',
  description:
    'Desarrollador web full-stack con experiencia en JavaScript, HTML, CSS, React, Node.js y Frameworks. Conoce mis proyectos y habilidades.',
  keywords:
    'Desarrollador web, JavaScript, React, Node.js, HTML, CSS, Soporte técnico, Mesa de ayuda, Cristian Javier Arias Ordoñez, Cristian J Arias O, Cristian Arias, Cristian Ordoñez, Javier Arias Ordoñez, Javier Arias, Javier Ordoñez',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://cristianjariaso.vercel.app',
    title: 'Cristian Javier Arias Ordoñez - Desarrollador Web Full-Stack',
    description:
      'Portafolio y proyectos de Cristian Javier Arias Ordoñez, desarrollador web full-stack.',
    images: [
      {
        url: 'https://cristianjariaso.vercel.app/LogoCA.svg',
        width: 1200,
        height: 630,
        alt: 'Cristian Javier Arias Ordoñez',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} ${permanentMarker.variable} ${sofadiOne.variable} bg-neutral-100 dark:bg-slate-950 text-slate-900 dark:text-slate-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

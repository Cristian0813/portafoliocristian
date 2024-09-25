import type { Metadata } from 'next';
import { Inter, Permanent_Marker, Sofadi_One } from 'next/font/google';
import '@/shared/styles/globals.css';
import { ThemeProvider } from '@/core/utils/providers';
import Layout from '@/core/components/Layout';
import Script from 'next/script';

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
    'Cristian J Arias O Desarrollador web, JavaScript, React, Node.js, HTML, CSS, Soporte técnico, Mesa de ayuda, Cristian Javier Arias Ordoñez, Cristian J Arias O, Cristian Javier Arias, Cristian Javier Ordoñez, Cristian Arias, Cristian Ordoñez, Javier Arias Ordoñez, Javier Arias, Javier Ordoñez',
  authors: [{ name: 'Cristian Javier Arias Ordoñez' }],
  creator: 'Cristian Javier Arias Ordoñez',
  publisher: 'Cristian Javier Arias Ordoñez',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://cristianjariaso.vercel.app',
    title: 'Cristian Javier Arias Ordoñez - Desarrollador Web Full Stack',
    description:
      'Portafolio y proyectos de Cristian Javier Arias Ordoñez, desarrollador web full-stack.',
    images: [
      {
        url: 'https://cristianjariaso.vercel.app/IsoCA.svg',
        width: 780,
        height: 340,
        alt: 'Cristian Javier Arias Ordoñez',
      },
    ],
    siteName: 'Portafolio de Cristian Javier Arias Ordoñez',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://cristianjariaso.vercel.app',
    languages: {
      'en-US': 'https://cristianjariaso.vercel.app/en',
    },
  },
  verification: {
    google: 'google479c089f46be40ca',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5CHSCFS7');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L2KTTS3J4F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L2KTTS3J4F');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} ${permanentMarker.variable} ${sofadiOne.variable} bg-neutral-100 dark:bg-slate-950 text-slate-900 dark:text-slate-300`}
      >
        {/* Noscript fallback for Google Tag Manager */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CHSCFS7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}

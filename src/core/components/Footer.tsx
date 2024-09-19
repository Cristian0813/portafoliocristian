'use client';

import { FooterSection } from './footer/components/FooterSection';

const Footer = () => {
  return (
    <footer className="z-10 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-neutral-800 dark:to-neutral-900 text-zinc-700 dark:text-zinc-300">
      <FooterSection />
    </footer>
  );
};

export default Footer;

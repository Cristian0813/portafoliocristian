'use client';

import Isotipo from '@/shared/common/Isotipo';
import Logo from '@/shared/common/Logo';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface LinkItem {
  name: string;
  href: string;
}

interface SocialItem {
  icon: React.ElementType;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const links: LinkItem[] = [
    { name: 'Sobre mí', href: '/Sobremi' },
    { name: 'Proyectos', href: '/#proyectos' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const socialLinks: SocialItem[] = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        const offset = 100; // Ajusta este valor según sea necesario
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      router.push(href);
    }
  };

  return (
    <footer className="z-10 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-neutral-800 dark:to-neutral-900 text-zinc-700 dark:text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo y descripción */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <Isotipo />
          <Logo />
            {/* <a href="/" className="inline-block mb-4">
              <Image
                src="/IsotipoCA.svg"
                alt="Cristian Arias"
                width={120}
                height={120}
                className="hover:opacity-80 transition-opacity duration-300 dark:invert mx-auto md:mx-0"
              />
            </a> */}
            <p className="text-base md:text-lg max-w-md mx-auto md:mx-0">
              Desarrollador web apasionado por crear experiencias digitales
              únicas y funcionales.
            </p>
          </div>

          {/* Columnas del lado derecho */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-end space-y-8 md:space-y-0 md:space-x-12">
            {/* Enlaces rápidos */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleClick(e, link.href)}
                      className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes sociales */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4">Sígueme en</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-300"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-zinc-300 dark:border-zinc-700 py-8 mt-8">
          <p className="text-sm text-center">
            © {currentYear} Cristian J Arias O™. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

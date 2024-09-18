'use client'

import Logo from '@/shared/common/Logo';
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const links = [
    { name: 'Sobre mí', href: '/Sobremi' },
    { name: 'Proyectos', href: '/#proyectos' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Si estamos en la página de inicio, realizamos el desplazamiento suave
    if (pathname === '/') {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 100; // Ajusta este valor según la altura de tu encabezado fijo
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      // Si no estamos en la página de inicio, navegamos a la página de inicio con el hash
      window.location.href = href;
    }
  };

  return (
    <footer className="z-10 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-neutral-800 dark:to-neutral-900 text-zinc-700 dark:text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo y descripción */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <Logo />
            {/* <Link href="/" className="inline-block mb-4">
              <Image
                src="/IsotipoCA.svg"
                alt="Cristian Arias"
                className="w-44 hover:brightness-150 dark:invert dark:brightness-0 hover:dark:invert-0 hover:dark:brightness-150"
                width={100}
                height={100}
              />
            </Link> */}
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
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300"
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
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Github, href: '#', label: 'GitHub' },
                ].map((social) => (
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

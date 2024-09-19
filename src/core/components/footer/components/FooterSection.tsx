import Isotipo from '@/shared/common/Isotipo';
import React from 'react'
import { FooterLinks } from './FooterLinks';
import { FooterSocials } from './FooterSocials';

export const FooterSection = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Logo y descripción */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <Isotipo />
          <p className="text-base md:text-lg max-w-md mx-auto md:mx-0">
            Desarrollador web apasionado por crear experiencias digitales únicas
            y funcionales.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-end space-y-8 md:space-y-0 md:space-x-12">
          <FooterLinks />
          <FooterSocials />
        </div>
      </div>
      <div className="border-t border-zinc-300 dark:border-zinc-700 py-8 mt-8">
        <p className="text-sm text-center">
          © {currentYear} Cristian J Arias O™. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

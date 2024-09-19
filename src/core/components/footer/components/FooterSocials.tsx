import React from 'react'
import { footerSocial } from '../data/footerData';

export const FooterSocials = () => {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-lg font-semibold mb-4">Sígueme en</h3>
      <div className="flex justify-center md:justify-start space-x-4">
        {footerSocial.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors duration-300"
            target="_blank"
          >
            <social.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
}

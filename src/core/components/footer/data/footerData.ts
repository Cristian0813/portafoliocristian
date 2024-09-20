import { FooterLink, FooterSocial } from "../type"
import { Facebook, Github, Instagram, Linkedin } from 'lucide-react';


export const footerLink: FooterLink = [
  {
    name: 'Sobre mí',
    href: '/Sobremi',
  },
  {
    name: 'Proyectos',
    href: '/#Proyectos',
  },
  {
    name: 'Contacto',
    href: '/Contacto',
  },
];

export const footerSocial: FooterSocial = [
  {
    icon: Facebook,
    href: 'https://www.facebook.com/CristianJavierAriasO',
    label: 'Facebook',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/javier.9013',
    label: 'Instagram',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/cristianarias-fullstack-frontend-backend/',
    label: 'LinkedIn',
  },
  { icon: Github,
    href: 'https://github.com/Cristian0813',
    label: 'GitHub', 

  },
];


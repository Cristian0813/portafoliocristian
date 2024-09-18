import Link from 'next/link';
import { PopoverGroup } from '@headlessui/react';
import ThemeSwitcher from '@/shared/ui/themeswitcher/ThemeSwitcher';

export default function DesktopMenu() {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
      <Link
        href="/"
        className="text-md font-semibold leading-6 hover:text-ColorPurple text-ColorPurpleDark dark:text-slate-300 hover:dark:text-ColorPurple"
      >
        Inicio
      </Link>
      <Link
        href="/Sobremi"
        className="text-md font-semibold leading-6 hover:text-ColorPurple text-ColorPurpleDark dark:text-slate-300 hover:dark:text-ColorPurple"
      >
        Sobre mí
      </Link>
      <Link
        href="/contacto"
        className="text-md font-semibold leading-6 hover:text-ColorPurple text-ColorPurpleDark dark:text-slate-300 hover:dark:text-ColorPurple"
      >
        Contacto
      </Link>
      <ThemeSwitcher />
    </PopoverGroup>
  );
}

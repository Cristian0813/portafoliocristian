// src/components/layout/Header/DesktopMenu.tsx
import Link from 'next/link';
import { PopoverGroup } from '@headlessui/react';
import ThemeSwitcher from '@/components/ui/themeswitcher/ThemeSwitcher';

export default function DesktopMenu() {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
      <Link
        href="/"
        className="text-md font-semibold leading-6 hover:text-PurpleColor hover:dark:text-DarkPurpleColor"
      >
        Inicio
      </Link>
      <Link
        href="/sobremi"
        className="text-md font-semibold leading-6 hover:text-PurpleColor hover:dark:text-DarkPurpleColor"
      >
        Sobre mí
      </Link>
      <Link
        href="/contacto"
        className="text-md font-semibold leading-6 hover:text-PurpleColor hover:dark:text-DarkPurpleColor"
      >
        Contacto
      </Link>
      <ThemeSwitcher />
    </PopoverGroup>
  );
}

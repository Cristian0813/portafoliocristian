'use client';

import { useState } from 'react';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ui/themeswitcher/ThemeSwitcher';
import Image from 'next/image';
import HomePage from '@/features/home/HomePage';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed  top-0 left-0 right-0 z-40 backdrop-blur-md dark:bg-slate-950/75">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Cristian Arias</span>
            <Image
              alt="Cristian Arias"
              src="/IsoTipoCA.svg"
              className="dark:brightness-0 dark:invert hover:contrast-150 hover:dark:invert-0 hover:dark:brightness-100"
              width={0}
              height={0}
              style={{ width: '50px', height: '50px' }}
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Abrir el menú principal</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-xl font-semibold leading-6 hover:text-PurpleColor hover:dark:text-DarkPurpleColor"
          >
            Inicio
          </Link>
          <Link
            href="/sobremi"
            className="text-xl font-semibold leading-6 hover:text-PurpleColor hover:dark:text-DarkPurpleColor"
          >
            Sobre mí
          </Link>
          <Link
            href="/contacto"
            className="text-xl font-semibold leading-6 hover:text-PurpleColor hover:dark:text-DarkPurpleColor"
          >
            Contacto
          </Link>
          <ThemeSwitcher />
        </PopoverGroup>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1">
          <div className="flex items-center justify-between">
            <ThemeSwitcher />
            <button
              type="button"
              onClick={closeMenu}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Cerrar el menú</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-PurpleColor hover:dark:text-DarkPurpleColor dark:hover:text-PurpleColor hover:dark:text-DarkPurpleColor"
                >
                  Inicio
                </Link>
                <Link
                  href="/sobremi"
                  onClick={closeMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-PurpleColor hover:dark:text-DarkPurpleColor dark:hover:text-PurpleColor hover:dark:text-DarkPurpleColor"
                >
                  Sobre mí
                </Link>
                <Link
                  href="/contacto"
                  onClick={closeMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-PurpleColor hover:dark:text-DarkPurpleColor dark:hover:text-PurpleColor hover:dark:text-DarkPurpleColor"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

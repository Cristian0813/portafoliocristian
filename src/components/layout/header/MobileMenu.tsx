import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ThemeSwitcher from '@/components/ui/themeswitcher/ThemeSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-950 dark:text-slate-300"
        >
          <span className="sr-only">Abrir el menú principal</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <Dialog as="div" className="lg:hidden" open={isOpen} onClose={setIsOpen}>
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-52 h-72 rounded-l-xl overflow-y-auto bg-white/50 dark:bg-slate-950/50 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1">
          <div className="flex items-center justify-between">
            <ThemeSwitcher />
            <button
              type="button"
              onClick={closeMenu}
              className="-m-2.5 rounded-md p-2.5 text-slate-950 dark:text-slate-300"
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
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 active:text-PurpleColor active:dark:text-DarkPurpleColor "
                >
                  Inicio
                </Link>
                <Link
                  href="/sobremi"
                  onClick={closeMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 active:text-PurpleColor active:dark:text-DarkPurpleColor "
                >
                  Sobre mí
                </Link>
                <Link
                  href="/contacto"
                  onClick={closeMenu}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 active:text-PurpleColor active:dark:text-DarkPurpleColor "
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}

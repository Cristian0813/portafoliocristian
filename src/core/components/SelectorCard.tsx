import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ProjectType, UserType } from '@/features/projects/type';
import { Image } from '@nextui-org/react';

interface SelectorCardProps {
  project: ProjectType | null;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SelectorCard({
  project,
  open,
  setOpen,
}: SelectorCardProps) {
  if (!project) {
    return null;
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto pt-36">
        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
          <DialogPanel
            transition
            className="flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl"
          >
            <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                  <Image
                    alt={project.title}
                    src={project.imageSrc}
                    className="object-cover object-center"
                  />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                  <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                    {project.title}
                  </h2>

                  <section
                    aria-labelledby="information-heading"
                    className="mt-2"
                  >
                    <div className="mt-6">
                      <h4 className="sr-only">Descripción</h4>
                      <p>{project.description}</p>
                    </div>

                    {project.users && (
                      <div className="mt-6">
                        <h4 className="font-semibold">Demo usuarios:</h4>
                        <ul className="list-disc pl-5 mt-2">
                          {project.users.map(
                            (user: UserType, index: number) => (
                              <li key={index}>
                                Usuario: {user.name}, Contraseña:{' '}
                                {user.password}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </section>
                  <section aria-labelledby="options-heading" className="mt-10">
                    <div className="mt-6 flex items-center space-x-4">
                      <a
                        href={project.hrefRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-center"
                      >
                        Ver repositorio
                      </a>
                      <a
                        href={project.hrefDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-center"
                      >
                        Ver Demo
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
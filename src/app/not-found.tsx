import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <main className="relative grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-xl font-semibold text-indigo-600 dark:text-indigo-300">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Página no encontrada
            </h1>
            <p className="mt-6 text-base leading-7">
              Lo sentimos, no hemos podido encontrar la página que busca.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Volver al inicio
            </Link>
            <Link href="/contacto" className="text-sm font-semibold">
              Contactar con asistencia <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

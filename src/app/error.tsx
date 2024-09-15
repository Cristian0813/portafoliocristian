'use client';

import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white dark:bg-gray-950 shadow-Custom dark:shadow-darkCustom rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4 animate-bounce">
          ¡Oops!
        </h1>
        <p className="mb-4 text-lg text-gray-700 dark:text-white">
          Algo salió mal, pero estamos trabajando en ello.
        </p>
        <p className="mb-6 text-sm text-gray-500 dark:text-white">
          {error.message
            ? error.message
            : 'Error inesperado. Por favor, inténtalo de nuevo.'}
        </p>

        <div className="grid gap-4 items-center justify-center grid-cols-1 sm:grid-cols-2 ">
          {/* Botón para reintentar */}
          <button
            onClick={reset}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
          >
            Reintentar
          </button>

          {/* Botón para volver a la página de inicio */}
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 bg-gray-300  text-gray-700 rounded hover:bg-gray-400 transition duration-300"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
}

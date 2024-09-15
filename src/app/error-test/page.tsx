// /app/error-test/page.tsx
import React from 'react';

const ErrorTestPage: React.FC = () => {
  // Simulamos un error lanzando una excepción en el componente
  throw new Error('Este es un error simulado para pruebas.');

  return (
    <div>
      <h1>Esta es una página de prueba de error.</h1>
    </div>
  );
};

export default ErrorTestPage;

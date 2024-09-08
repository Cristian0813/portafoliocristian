// src/components/BrokenComponent.tsx
import React from 'react';

const BrokenComponent = () => {
  // Lanzamos un error intencionalmente
  throw new Error('Este es un error de prueba para verificar el ErrorBoundary');

  return <div>Este texto no debería mostrarse.</div>;
};

export default BrokenComponent;

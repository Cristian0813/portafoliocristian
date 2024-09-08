// src/components/BrokenComponent.tsx
import React from 'react';

const BrokenComponent = () => {
  return (
    <div>
      {
        // Lanzamos un error intencionalmente dentro del método render
        (() => {
          throw new Error(
            'Este es un error de prueba para verificar el ErrorBoundary'
          );
        })()
      }
      Este texto no debería mostrarse.
    </div>
  );
};

export default BrokenComponent;

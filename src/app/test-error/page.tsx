// src/app/test-error/page.tsx
import React from 'react';
import BrokenComponent from '@/components/BrokenComponent'; // Importa el componente de prueba

const TestErrorPage = () => {
  return (
    <div>
      <h1>Prueba del Error Boundary</h1>
      <BrokenComponent />{' '}
      {/* El Error Boundary debería capturar el error aquí */}
    </div>
  );
};

export default TestErrorPage;

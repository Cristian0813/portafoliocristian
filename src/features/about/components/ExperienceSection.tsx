import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section>
      <div className="pt-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8">EXPERIENCIA</h2>
        <div className="border-t-4 border-gray-300 mb-8"></div>
        <div className="max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6">EXPERIENCIA</h3>
            <div className="space-y-8 grid md:grid-cols-2 gap-12">
              {[
                {
                  date: 'Nov 2023 - Ene 2024',
                  title: 'Desarrollador Web Autónomo',
                  company: 'Autónomo',
                  description:
                    'Desarrollar páginas web que cumplen con las características específicas que se requieren. Para lograr esto, utilizo lenguajes como Html5, Css3, JavaScript y Nodejs, con Frameworks como ExpressJS, Bootstrap, Tailwind; Que me permiten diseñar y programar sitios web atractivos y funcionales.',
                },
                {
                  date: 'Nov 2022 - Jul 2023',
                  title: 'Desarrollador Web Full Stack Aprendiz',
                  company: 'PROtalento',
                  description:
                    'Desarrollar páginas web que cumplen con las características específicas que se requieren. Para lograr esto, utilizo lenguajes como Html5, Css3, JavaScript y Nodejs, con Frameworks como ExpressJS, Bootstrap, Tailwind; Que me permiten diseñar y programar sitios web atractivos y funcionales.',
                },
                {
                  date: 'Ago 2020 - Ene 2023',
                  title: 'Asesor RAC vía Chat',
                  company: 'Atento Colombia',
                  description:
                    'Proporcionar un servicio de soporte técnico y comercial de alta calidad, gestionando eficientemente las solicitudes y quejas de los clientes, con el objetivo de lograr su plena satisfacción. Recibir reconocimiento y elogios por parte de la organización por la excelente gestión de las peticiones y quejas, destacando por un enfoque proactivo, soluciones efectivas y un trato amable y respetuoso con los clientes.',
                },
              ].map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-500">{exp.date}</p>
                  <h4 className="font-semibold">{exp.title}</h4>
                  <h5 className="text-gray-600 mb-2">{exp.company}</h5>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

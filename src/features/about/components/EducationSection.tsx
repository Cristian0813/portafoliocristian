import React from 'react'

const EducationSection: React.FC = () => {
  return (
    <section>
      <div className="pt-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8">ESTUDIOS</h2>
        <div className="border-t-4 border-gray-300 mb-8"></div>
        <div className="max-w-6xl mx-auto">
          <div>
            <div className="space-y-8 grid md:grid-cols-2 gap-12">
              {[
                {
                  date: '2023',
                  title: 'Desarrollador Full-Stack',
                  institution: 'Dev.F',
                  description:
                    'En Devf, un bootcamp tecnológico, adquirí habilidades avanzadas en diseño web con HTML5, CSS3, JavaScript y React. Trabajé en proyectos prácticos que fortalecieron mi capacidad para resolver problemas en entornos reales. Estoy preparado(a) para los desafíos del desarrollo web moderno.',
                },
                {
                  date: '2012',
                  title: 'Tecnología ADSI',
                  institution: 'Servicio Nacional de Aprendizaje (SENA)',
                  description:
                    'En mi experiencia en Programación de Sistemas de Información, he adquirido conocimientos en análisis, desarrollo y programación de sistemas informáticos. Destaco en Java y MySQL para crear soluciones eficientes que impulsen el crecimiento de organizaciones y comunidades.',
                },
                {
                  date: '2010',
                  title: 'Técnico en Sistemas',
                  institution: 'CompuBuga',
                  description:
                    'Tengo la capacidad de poder desarrollarme en varios frentes de trabajo, como el ensamble y mantenimiento de computadores, el montaje y soporte de redes de datos (alámbricas e inalámbricas) y el desarrollo de páginas web; lo que me permitirá tener mayores posibilidades de empleo una vez finalice mis estudios.',
                },
              ].map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-500">{edu.date}</p>
                  <h4 className="font-semibold">{edu.title}</h4>
                  <h5 className="text-gray-600 mb-2">{edu.institution}</h5>
                  <p className="text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection
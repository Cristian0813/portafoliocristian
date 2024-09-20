import React, { ReactNode } from 'react';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';

interface ColoredTextProps {
  children: ReactNode;
  color: string;
}

const ColoredText: React.FC<ColoredTextProps> = ({ children, color }) => (
  <span className={`${color}`}>{children}</span>
);

const AboutPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 pt-28 relative min-h-screen overflow-hidden my-4 sm:my-8 sm:py-8 md:my-9 md:py-9 lg:mt-9 lg:py-9 xl:my-10 xl:py-10 2xl:my-12 2xl:py-12">
      <h1 className="xl:text-5xl m-[0_auto] text-4xl font-black">
        Soy
        <br />
        <strong className="pl-6">Cristian Javier</strong>
        <br />
        <strong className="pl-12">Arias Ordoñez</strong>
      </h1>
      <div className="mt-8 text-lg leading-relaxed">
        <p>
          Tecnólogo en análisis y desarrollo de sistemas de información y
          Técnico en Sistemas. Con conocimientos y habilidades en soporte
          técnico TI realizando actividades de asistencia técnica tanto de
          manera presencial como remota a usuarios, mantenimiento preventivo y
          correctivo de equipos de cómputo, instalación y actualización de
          software, gestión de backups, copias de seguridad y antivirus.
          Instalación, configuración y actualización de sistema operativo
          Windows.
        </p>
        <br />
        <p>
          Con fundamentos en el desarrollo web utilizando diversos lenguajes de
          programación como
          <ColoredText color="text-[#E34F26] dark:text-[#FFA500]">
            {' '}
            HTML,
          </ColoredText>
          <ColoredText color="text-[#1572B6] dark:text-[#66D3FA]">
            {' '}
            CSS,
          </ColoredText>
          <ColoredText color="text-yellow-700 dark:text-[#F0DB4F]">
            {' '}
            JavaScript,
          </ColoredText>
          <ColoredText color="text-[#3178C6] dark:text-[#007ACC]">
            {' '}
            TypeScript,{' '}
          </ColoredText>
          a través del uso frameworks/librerías como
          <ColoredText color="text-[#06B6D4] dark:text-[#38B2AC]">
            {' '}
            TailwindCSS,
          </ColoredText>
          <ColoredText color="text-[#7952B3] dark:text-[#9B30FF]">
            {' '}
            Bootstrap,
          </ColoredText>
          <ColoredText color="text-[#000000] dark:text-[#FFFFFF]">
            {' '}
            Next.js,
          </ColoredText>
          <ColoredText color="text-sky-500 dark:text-sky-400">
            {' '}
            React,
          </ColoredText>
          <ColoredText color="text-[#339933] dark:text-[#68A063]">
            {' '}
            Node.js,
          </ColoredText>
          <ColoredText color="text-[#000000] dark:text-[#FFFFFF]">
            {' '}
            Express.js,{' '}
          </ColoredText>
          y en cuanto a bases de datos, tengo manejo de
          <ColoredText color="text-[#CC2927] dark:text-[#FF4444]">
            {' '}
            SQL,
          </ColoredText>
          <ColoredText color="text-[#47A248] dark:text-[#00ED64]">
            {' '}
            MongoDB,
          </ColoredText>
          <ColoredText color="text-[#336791] dark:text-[#0064A5]">
            {' '}
            PostgreSQL.{' '}
          </ColoredText>
          Además, con conocimiento en la metodología ágil (SCRUM), APIs y la
          herramienta Git.
        </p>
        <br />
        <p>
          Destacando mis habilidades socioemocionales, como el servicio al
          cliente, trabajo en equipo, organización, orientación al detalle y
          resolución de problemas.
        </p>
      </div>
      <h3 className="text-xl font-semibold mb-6">Curriculum vitae</h3>
      <div className="mb-8">
        <a
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          href="/documents/CV Cristian Javier Arias Ordoñez.pdf"
          download={'CV Cristian Javier Arias Ordoñez.pdf'}
          rel="noopener noreferrer"
        >
          Descargar CV
        </a>
      </div>
      <div className="mt-12">
        <EducationSection />
      </div>
      <div className="mt-12">
        <ExperienceSection />
      </div>
    </main>
  );
};

export default AboutPage;

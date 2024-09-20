import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";


export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8 pt-28 relative min-h-screen overflow-hidden my-4 sm:my-8 sm:py-8 md:my-9 md:py-9 lg:mt-9 lg:py-9 xl:my-10 xl:py-10 2xl:my-12 2xl:py-12">
      <h1 className="xl:text-5xl m-[0_auto] text-4xl font-black">
        Soy
        <br></br>
        <strong className="pl-6">Cristian Javier</strong>
        <br></br>
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
          programación como HTML, CSS, JavaScript, TypeScript, a través del uso
          frameworks/librerías como TailwindCSS, Bootstrap, Next.js, Node.js,
          Express.js y en cuanto a bases de datos, tengo manejo de MongoDB, SQL
          y PostgreSQL. Además, con conocimiento en la metodología ágil (SCRUM)
          y la herramienta Git.
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
        <EducationSection/>
      </div>
      <div className="mt-12">
        <ExperienceSection/>
      </div>
    </main>
  );
}

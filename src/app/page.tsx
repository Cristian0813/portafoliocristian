import HomePage from '@/features/home/HomePage';
import ProjectPage from '@/features/projects/ProjectPage';
import SkillsPage from '@/features/skills/SkillsPage';

export default function App() {
  return (
    <main className="relative py-2 min-h-screen overflow-hidden">
      {/* <section id="home"></section> */}
      <HomePage />
      <SkillsPage />
      <section id="Proyectos">
      <ProjectPage />
      </section>
    </main>
  );
}

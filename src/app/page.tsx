
import HomePage from '@/features/home/HomePage';
import ProjectsPage from '@/features/projects/ProjectsPage';
import SkillsPage from '@/features/skills/SkillsPage';

export default function App() {
  return (
    <main className="pt-4">
      <section id="home">
        <HomePage />
      </section>
      <section id="skills">
        <SkillsPage />
      </section>
      <section id="projects">
        <ProjectsPage />
      </section>
    </main>
  );
}

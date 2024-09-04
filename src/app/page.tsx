import SideMenu from '@/components/sidemenu/SideMenu';
import HomePage from '@/features/home/HomePage';
import ExperiencePage from '@/features/experience/ExperiencePage';
import ProjectsPage from '@/features/projects/ProjectsPage';
import SkillsPage from '@/features/skills/SkillsPage';

export default function App() {
  return (
    <main className="pt-4">
      <SideMenu />
      <HomePage />
      <SkillsPage />
      {/* <ExperiencePage />
      <ProjectsPage /> */}
    </main>
  );
}

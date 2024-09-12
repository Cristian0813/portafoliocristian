
import SelectorCard from '@/core/components/SelectorCard';
import HomePage from '@/features/home/HomePage';
import ProjectsPage from '@/features/projects/ProjectsPage';
import SkillsPage from '@/features/skills/SkillsPage';
import { Divider } from '@nextui-org/react';

export default function App() {
  return (
    <main className="py-2 min-h-screen">
      {/* <section id="home"></section> */}
      <HomePage />
      <SkillsPage />
      <ProjectsPage />
      <SelectorCard />
    </main>
  );
}

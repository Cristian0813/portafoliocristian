
import SelectorCard from '@/core/components/SelectorCard';
import HomePage from '@/features/home/HomePage';
import ProjectsPage from '@/features/projects/ProjectsPage';
import SkillsPage from '@/features/skills/SkillsPage';
import { Divider } from '@nextui-org/react';

export default function App() {
  return (
    <main className="py-2 min-h-screen">
      <Divider className="my-4 dark:bg-PurpleColor" />
      {/* <section id="home"></section> */}
      <HomePage />
      <Divider className="my-4 dark:bg-PurpleColor" />
      <SkillsPage />
      {/*         <ProjectsPage />
      <Divider className="my-4 dark:bg-PurpleColor" />
      <SelectorCard /> */}
      <Divider className="my-4 dark:bg-PurpleColor" />
    </main>
  );
}

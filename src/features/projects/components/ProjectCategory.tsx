import React, { useState } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { ProjectType } from '../type';
import SelectorCard from '@/features/projects/components/SelectorCard';
import {motion} from 'framer-motion'

interface ProjectCategoryProps {
  projects: ProjectType[];
}

export const ProjectCategory: React.FC<ProjectCategoryProps> = ({
  projects,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleCardPress = (project: ProjectType) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section className="flex flex-col items-center gap-2 py-8 2xl:gap-0 2xl:py-4 2xl:m-2">
      <article className="justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4 p-2 xl:gap-6 xl:grid-cols-4 2xl:gap-14 2xl:m-7 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Card
              key={index}
              shadow="sm"
              isPressable
              onPress={() => handleCardPress(project)}
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={project.title}
                  className="w-full object-cover h-[160px] xl:h-[170px] 2xl:h-full"
                  src={project.imageSrc}
                />
              </CardBody>
              <CardFooter className="text-xs md:text-sm  justify-between">
                <b>{project.title}</b>
                <p className="text-default-500">{project.date}</p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
        <SelectorCard
          project={selectedProject}
          open={isOpen}
          setOpen={setIsOpen}
        />
      </article>
    </section>
  );
};

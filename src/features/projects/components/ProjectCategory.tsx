import React, { useState } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { ProjectType } from '../type';
import SelectorCard from '@/core/components/SelectorCard';

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
    <>
      <div className="py-6 gap-2 grid grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
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
                className="w-full object-cover h-[140px]"
                src={project.imageSrc}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{project.title}</b>
              <p className="text-default-500">{project.date}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <SelectorCard
        project={selectedProject}
        open={isOpen}
        setOpen={setIsOpen}
      />
    </>
  );
};

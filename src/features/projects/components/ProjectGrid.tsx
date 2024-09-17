import React from 'react'
import { ProjectArray } from '../type'

interface ProjectGridProps {
    projects:ProjectArray;
}

export const ProjectGrid: React.FC<ProjectGridProps> = (projects) => {
  return (
    <div>ProjectGrid</div>
  )
}

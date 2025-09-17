// src/components/ProjectsGrid.tsx
import React from 'react';
import { BentoGrid, BentoCard } from './ui/bento-grid';

// Define types for your project data
interface Project {
  name: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  className: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

// Simple icon component - replace with your preferred icon library
const ProjectIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 2L2 7L12 12L22 7L12 2Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M2 17L12 22L22 17" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M2 12L12 17L22 12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// Background image component
const ProjectBackground = ({ imageSrc }: { imageSrc: string }) => (
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 group-hover:opacity-10 transition-opacity duration-300"
    style={{ 
      backgroundImage: `url(${imageSrc})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  />
);

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  return (
    <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <BentoCard
          key={project.name}
          name={project.name}
          description={project.description}
          href={project.href}
          cta={project.cta}
          className={project.className}
          background={<ProjectBackground imageSrc={project.image} />}
          Icon={ProjectIcon}
        />
      ))}
    </BentoGrid>
  );
};

export default ProjectsGrid;
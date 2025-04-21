import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Реализованные проекты
            </h2>
            <p className="text-gray-600 max-w-xl">
              Ознакомьтесь с нашими кейсами по оснащению автосервисов
            </p>
          </div>
          <Button className="mt-4 sm:mt-0">
            Все проекты <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

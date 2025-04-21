import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/data/projectsData';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-quadro-lightGray text-quadro-darkTeal">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-quadro-dark">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Button variant="ghost" className="text-quadro-teal hover:text-quadro-darkTeal hover:bg-quadro-lightGray p-0">
          Подробнее <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
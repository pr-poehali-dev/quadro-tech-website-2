import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  id, 
  title, 
  description, 
  image, 
  tags 
}) => {
  return (
    <Link to={`/projects/${id}`} className="block hover-scale">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full border border-gray-100">
        <div className="aspect-video overflow-hidden">
          <img 
            src={image || "/placeholder.svg"} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 line-clamp-1">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

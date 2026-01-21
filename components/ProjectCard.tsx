'use client';

import Image from 'next/image';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'project' | 'template';
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-[#7C3AED]/10 to-[#06b6d4]/10 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="lazy"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#7C3AED] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Hover indicator */}
      <div className="px-6 pb-4 text-sm text-[#7C3AED] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        View details →
      </div>
    </div>
  );
}

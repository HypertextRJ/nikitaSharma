'use client';

import { Project } from '@/data/projects';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <div
            onClick={onClick}
            className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-all cursor-pointer group flex flex-col"
        >
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-medium rounded-full"
                    >
                        {tool}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
            </h3>

            <p className="text-slate-400 text-sm mb-4 flex-grow">
                {project.shortDesc}
            </p>

            <div className="flex items-center text-blue-400 font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                View Details
                <span className="ml-2 group-hover:ml-0 transition-all">→</span>
            </div>
        </div>
    );
}

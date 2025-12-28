'use client';

import { Project } from '@/data/projects';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-slate-800 border border-slate-700 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-700"
                >
                    ×
                </button>

                {/* Content */}
                <div className="p-8">
                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tools.map((tool, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-white mb-2">
                        {project.title}
                    </h2>
                    <p className="text-lg text-slate-400 mb-8">
                        {project.shortDesc}
                    </p>

                    {/* Problem */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Problem</h3>
                        <p className="text-slate-300">{project.problem}</p>
                    </div>

                    {/* Approach */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Approach</h3>
                        <p className="text-slate-300">{project.approach}</p>
                    </div>

                    {/* Insight */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-white mb-2">Key Insight</h3>
                        <p className="text-slate-300">{project.insight}</p>
                    </div>

                    {/* Outcome */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-white mb-2">Outcome</h3>
                        <p className="text-slate-300">{project.outcome}</p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4">
                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                            >
                                Live Demo →
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border-2 border-slate-600 hover:bg-slate-700 rounded-lg font-semibold transition-colors"
                            >
                                View Code →
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

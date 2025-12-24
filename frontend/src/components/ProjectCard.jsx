import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ShieldCheck, Code } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="glass rounded-2xl overflow-hidden group border border-slate-200/50 dark:border-slate-800/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
        >
            {/* Project Image Placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                    {project.type === 'cyber' ? <ShieldCheck size={80} /> : <Code size={80} />}
                </div>
                <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${project.type === 'cyber' ? 'bg-red-500/20 text-red-500' : 'bg-blue-500/20 text-blue-500'
                        }`}>
                        {project.type === 'cyber' ? 'Security' : 'Full-Stack'}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                <p className="text-secondary text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-[10px] font-medium text-secondary">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm font-semibold hover:text-blue-500 transition-colors"
                    >
                        <Github size={18} className="mr-2" /> Code
                    </a>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-semibold hover:text-blue-500 transition-colors"
                        >
                            <ExternalLink size={18} className="mr-2" /> Live
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

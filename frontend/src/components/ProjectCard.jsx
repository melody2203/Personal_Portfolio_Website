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
            {/* Project Image */}
            <div className="relative h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="grid grid-cols-6 gap-4 transform -rotate-12 scale-150">
                                {[...Array(24)].map((_, i) => (
                                    <div key={i} className="text-white">
                                        {project.type === 'cyber' ? <ShieldCheck size={20} /> : <Code size={20} />}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative z-10 p-6 text-center">
                            <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                {project.type === 'cyber' ? <ShieldCheck size={40} className="text-red-500/50" /> : <Code size={40} className="text-blue-500/50" />}
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-slate-500">Preview coming soon</span>
                        </div>
                    </div>
                )}

            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-secondary text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-cyan-500/10 rounded text-[10px] font-medium text-cyan-500">
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
                        className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                    >
                        <Github size={18} className="mr-2" /> Code
                    </a>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
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

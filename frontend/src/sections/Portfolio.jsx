import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('fullstack');

    const fullStackProjects = [
        {
            title: "Rejoice Events & Decor",
            description: "A premium full-stack event décor platform featuring service bookings, rental inventory, and categorized galleries.",
            tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind"],
            github: "https://github.com/melody2203/Rejoice-Decor-and-Event.git",
            live: "https://rejoice-decor-and-event-site.vercel.app/",
            image: "/projects/rejoice-decor.png",
            type: "fullstack"
        },
        {
            title: "Movie Review App",
            description: "A modern full-stack movie platform for discovering films, reading reviews, and exploring content.",
            tech: ["React (Vite)", "Django REST Framework", "PostgreSQL", "Render"],
            github: "https://github.com/melody2203/Movie-Review-App",
            live: "https://movie-review-app-4wpr.vercel.app/",
            image: "/projects/movie-review.png",
            type: "fullstack"
        },
        {
            title: "Task Track App",
            description: "Team-based task management application that enables project managers to assign tasks and deadlines while allowing team members to track progress and mark completed work in real time.",
            tech: ["React", "Node.js", "Express.js", "PostgreSQL", "JWT"],
            github: "https://github.com/melody2203/TaskTrack.git",
            live: "https://task-track-coral.vercel.app/",
            image: "/projects/task-track.png",
            type: "fullstack"
        }
    ];

    const cyberProjects = [
        {
            title: "Password Strength Checker",
            description: "A tool that analyzes password complexity and provides security recommendations.",
            tech: ["Python", "Flask", "Security APIs"],
            github: "https://github.com/melody2203/PSC_project.git",
            live: "#",
            image: "/projects/password-checker.jpg",
            type: "cyber"
        },

    ];

    return (
        <section id="portfolio" className="py-24">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>

                    {/* Modern Tab Switcher */}
                    <div className="flex justify-center mb-16 px-4">
                        <div className="bg-slate-200/50 dark:bg-slate-800/40 p-1.5 rounded-[2rem] flex items-center gap-1 relative overflow-hidden backdrop-blur-md border border-white/5">
                            {['fullstack', 'cyber'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative z-10 px-8 md:px-12 py-3.5 rounded-full text-sm font-black tracking-widest uppercase transition-colors duration-500 whitespace-nowrap ${activeTab === tab
                                        ? 'text-white'
                                        : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                                        }`}
                                >
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-[0_4px_15px_-5px_rgba(6,182,212,0.5)]"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative z-10">{tab === 'fullstack' ? 'Full-Stack' : 'Cybersecurity'}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {activeTab === 'fullstack' ? (
                            fullStackProjects.map((project, index) => (
                                <ProjectCard key={project.title} project={project} index={index} />
                            ))
                        ) : (
                            cyberProjects.map((project, index) => (
                                <ProjectCard key={project.title} project={project} index={index} />
                            ))
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;

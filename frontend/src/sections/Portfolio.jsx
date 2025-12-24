import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('fullstack');

    const fullStackProjects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with payment integration, user auth, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "#",
            live: "#",
            type: "fullstack"
        },
        {
            title: "Task Management App",
            description: "Collaborative tool for teams to manage projects, track time, and assign tasks.",
            tech: ["React", "Express", "PostgreSQL", "Socket.io"],
            github: "#",
            live: "#",
            type: "fullstack"
        },
        {
            title: "Social Media Dashboard",
            description: "Real-time analytics for social media accounts with data visualization.",
            tech: ["React", "Node.js", "Chart.js", "Tailwind"],
            github: "#",
            live: "#",
            type: "fullstack"
        },
        {
            title: "Real-time Chat App",
            description: "Secure messaging application with end-to-end encryption features.",
            tech: ["React", "Node.js", "WebSockets", "Firebase"],
            github: "#",
            live: "#",
            type: "fullstack"
        }
    ];

    const cyberProjects = [
        {
            title: "Password Strength Checker",
            description: "A tool that analyzes password complexity and provides security recommendations.",
            tech: ["Python", "Flask", "Security APIs"],
            github: "#",
            type: "cyber"
        },
        {
            title: "Network Port Scanner",
            description: "Script to identify open ports and potential vulnerabilities in a given network range.",
            tech: ["Python", "Scapy", "Linux"],
            github: "#",
            type: "cyber"
        },
        {
            title: "Encryption Utility",
            description: "Suite of tools for AES-256 encryption and decryption of sensitive files.",
            tech: ["Node.js", "Crypto SDK", "React"],
            github: "#",
            type: "cyber"
        }
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
                    <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"></div>

                    {/* Tabs */}
                    <div className="flex justify-center space-x-4 mb-12">
                        <button
                            onClick={() => setActiveTab('fullstack')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${activeTab === 'fullstack' ? 'bg-blue-500 text-white shadow-lg' : 'bg-secondary/10 hover:bg-secondary/20'
                                }`}
                        >
                            Full-Stack
                        </button>
                        <button
                            onClick={() => setActiveTab('cyber')}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${activeTab === 'cyber' ? 'bg-red-500 text-white shadow-lg' : 'bg-secondary/10 hover:bg-secondary/20'
                                }`}
                        >
                            Cybersecurity
                        </button>
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

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Database,
    Globe,
    ShieldCheck,
    Cpu,
    Server,
    Layers,
    Layout
} from 'lucide-react';

const CircularSkill = ({ name, percentage, icon: Icon, delay }) => {
    const radius = 38;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <motion.div
            className="flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
        >
            <div className="relative w-20 h-20 flex items-center justify-center mb-3 group">
                {/* SVG Circle */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    {/* Track */}
                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        className="stroke-slate-800"
                        strokeWidth="6"
                        fill="transparent"
                    />
                    {/* Progress */}
                    <motion.circle
                        cx="60"
                        cy="60"
                        r={radius}
                        stroke="url(#gradient)"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
                        strokeLinecap="round"
                    />
                    {/* Defs for Gradient */}
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" /> {/* Blue-500 */}
                            <stop offset="100%" stopColor="#22d3ee" /> {/* Cyan-400 */}
                        </linearGradient>
                    </defs>
                </svg>

                {/* Inner Content (Percentage) */}
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-lg font-black text-slate-900 dark:text-white">{percentage}%</span>
                </div>
            </div>

            {/* Icon & Name */}
            <div className="flex flex-col items-center gap-1.5">
                <div className="p-1.5 rounded-lg bg-slate-900/50 border border-white/5 text-cyan-400">
                    <Icon size={18} />
                </div>
                <span className="font-bold text-xs uppercase tracking-wider text-slate-300">{name}</span>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const frontendSkills = [
        { name: "React", percentage: 85, icon: Code2 },
        { name: "Next.js", percentage: 75, icon: Layout },
        { name: "JavaScript", percentage: 65, icon: Cpu },
    ];

    const backendSkills = [
        { name: "Node.js", percentage: 80, icon: Server },
        { name: "Django", percentage: 70, icon: Layers },
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/20">
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="container max-w-5xl px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.8]">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                </motion.div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Frontend Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-3">
                            <Code2 className="text-blue-600 dark:text-cyan-400" />
                            Frontend
                        </h3>
                        <div className="w-full glass p-6 rounded-[2rem] border-white/5 shadow-2xl bg-slate-950/40">
                            {/* Mobile 2-cols with reduced gap, Desktop 2-cols */}
                            <div className="grid grid-cols-2 gap-3 md:gap-6 justify-items-center">
                                {frontendSkills.map((skill, idx) => (
                                    <CircularSkill
                                        key={idx}
                                        name={skill.name}
                                        percentage={skill.percentage}
                                        icon={skill.icon}
                                        delay={idx * 0.1}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Backend Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-3">
                            <Server className="text-blue-600 dark:text-blue-500" />
                            Backend
                        </h3>
                        <div className="w-full glass p-6 rounded-[2rem] border-white/5 shadow-2xl bg-slate-950/40">
                            {/* Mobile 2-cols with reduced gap, Desktop 2-cols */}
                            <div className="grid grid-cols-2 gap-3 md:gap-6 justify-items-center">
                                {backendSkills.map((skill, idx) => (
                                    <CircularSkill
                                        key={idx}
                                        name={skill.name}
                                        percentage={skill.percentage}
                                        icon={skill.icon}
                                        delay={idx * 0.1}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Globe, ShieldCheck, Zap } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Layout className="text-blue-500" size={40} />,
            title: "Frontend Development",
            description: "Building responsive, modern, and high-performance user interfaces using React and the latest web standards.",
        },
        {
            icon: <Globe className="text-purple-500" size={40} />,
            title: "Full-Stack Solutions",
            description: "End-to-end web application development with Node.js backends and secure database architectures.",
        },
        {
            icon: <ShieldCheck className="text-red-500" size={40} />,
            title: "Security Awareness",
            description: "Basic cybersecurity tool development and security audits to ensure your digital presence is safe.",
        },
        {
            icon: <Zap className="text-yellow-500" size={40} />,
            title: "Performance Optimization",
            description: "Auditing and improving load times, accessibility, and overall user experience for existing projects.",
        }
    ];

    return (
        <section id="services" className="py-24 bg-secondary/10">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Offer</h2>
                    <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"></div>
                    <p className="max-w-2xl mx-auto text-secondary text-lg">
                        Specializing in building robust digital products with a focus on clean code,
                        interactive design, and proactive security measures.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="glass p-8 rounded-3xl flex items-start gap-6 hover:shadow-xl transition-all duration-300"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-2xl">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-secondary leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

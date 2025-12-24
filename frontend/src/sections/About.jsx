import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, ShieldAlert, Heart } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: <GraduationCap className="text-blue-500" size={32} />,
            title: "Education",
            description: "Software Engineering & Cybersecurity Student. Focused on modern web architectures and threat mitigation.",
            delay: 0.1
        },
        {
            icon: <Code2 className="text-purple-500" size={32} />,
            title: "Full-Stack Dev",
            description: "Passionate about building robust backends with Node.js and dynamic frontends with React.",
            delay: 0.2
        },
        {
            icon: <ShieldAlert className="text-red-500" size={32} />,
            title: "Cybersecurity",
            description: "Enthusiastic about ethical hacking, network security, and developing secure coding practices.",
            delay: 0.3
        },
        {
            icon: <Heart className="text-pink-500" size={32} />,
            title: "Interests",
            description: "Combining creativity with logic to solve complex problems and create meaningful impact.",
            delay: 0.4
        }
    ];

    return (
        <section id="about" className="py-24 bg-secondary/30">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"></div>
                    <p className="max-w-3xl mx-auto text-lg text-secondary">
                        I'm a developer who loves to explore the intersection of functionality and security.
                        My goal is to build applications that are not only beautiful and fast but also resilient against modern threats.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="glass p-8 rounded-2xl hover:translate-y-[-10px] transition-all duration-300 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: card.delay, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                            <p className="text-secondary leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;

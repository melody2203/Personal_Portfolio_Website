import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20">
            <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-blue-500 font-semibold mb-4 tracking-wider uppercase text-sm">Welcome to my space</h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Hi, my name is <span className="text-gradient">Merertu Philipos</span>
                    </h1>
                    <p className="text-xl text-secondary mb-8 max-w-2xl">
                        Full-Stack Developer and Cybersecurity Enthusiast. I build secure, scalable, and user-centric digital experiences.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a href="#portfolio" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn glass">Get in Touch</a>
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    className="flex-1 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="relative">
                        {/* Animated background shape */}
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-blue-500 to-purple-500 shadow-2xl overflow-hidden">
                            <img
                                src={profileImg}
                                alt="Merertu Philipos"
                                className="w-full h-full object-cover rounded-full bg-slate-900"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;

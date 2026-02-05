import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 relative overflow-hidden mt-20">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent"></div>

            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand/Logo */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-extrabold tracking-tighter mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                            Merr<span className="text-gradient">.</span>
                        </h3>
                        <p className="text-secondary text-sm">Let's build something secure and beautiful.</p>
                    </div>

                    {/* Social links */}
                    <div className="flex gap-6">
                        <a href="https://github.com/melody2203" target="_blank" rel="noreferrer" className="p-3 glass rounded-xl hover:text-blue-500 hover:scale-110 transition-all">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 glass rounded-xl hover:text-blue-500 hover:scale-110 transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:merertuphilip@gmail.com" className="p-3 glass rounded-xl hover:text-blue-500 hover:scale-110 transition-all">
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Scroll to top */}
                    <button
                        onClick={scrollToTop}
                        className="p-4 glass rounded-2xl hover:bg-blue-500/10 transition-all group"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                <div className="mt-12 pt-8 border-t border-border/50 text-center">
                    <p className="text-secondary text-sm font-medium">
                        &copy; {new Date().getFullYear()} All rights reserved 2025 Merertu Philipos
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

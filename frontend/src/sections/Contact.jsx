import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, User, MessageSquare } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        let API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
        if (API_BASE_URL.endsWith('/')) {
            API_BASE_URL = API_BASE_URL.slice(0, -1);
        }
        console.log("Attempting to send message to:", `${API_BASE_URL}/api/contact`);

        try {
            const response = await axios.post(`${API_BASE_URL}/api/contact`, formData);
            if (response.status === 200) {
                setStatus({ type: 'success', msg: 'Perfect! Your message was sent successfully.' });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error("Submission error details:", error);
            if (!error.response) {
                setStatus({ type: 'error', msg: `Cannot connect to server. Please check your internet or if the server is running.` });
            } else {
                const errorMsg = error.response?.data?.message || 'The server responded with an error. Please email me directly while I fix this.';
                setStatus({ type: 'error', msg: errorMsg });
            }
        } finally {
            setLoading(false);
        }
    };

    const socialLinks = [
        { icon: <Mail size={24} />, href: 'mailto:merertuphilip@gmail.com', label: 'Email' },
        { icon: <Github size={24} />, href: 'https://github.com/melody2203', label: 'GitHub' },
        { icon: <Linkedin size={24} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    ];

    return (
        <section id="contact" className="py-24">
            <div className="container">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="max-w-xl mx-auto text-secondary text-lg">
                        Have a question or want to work together? Drop me a message below!
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Contact Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Contact Info */}
                        <motion.div
                            className="lg:col-span-5 space-y-8"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
                                <p className="text-secondary mb-8 text-lg leading-relaxed">
                                    I am always open to discussing new projects, creative ideas, or opportunities for internships.
                                </p>
                            </div>

                            <div className="flex flex-row flex-wrap gap-4 overflow-visible">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-5 glass rounded-2xl group hover:border-cyan-500/50 hover:scale-110 transition-all shadow-xl"
                                        aria-label={link.label}
                                    >
                                        <div className="group-hover:scale-110 transition-transform">
                                            {React.cloneElement(link.icon, { className: "text-cyan-500", size: 28 })}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="lg:col-span-7 glass p-10 rounded-[2.5rem]"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative">
                                        <span className="block text-sm font-semibold mb-2 ml-1">Full Name</span>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="John Doe"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-secondary border border-transparent focus:border-blue-500 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all shadow-inner"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <span className="block text-sm font-semibold mb-2 ml-1">Email Address</span>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="john@example.com"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-secondary border border-transparent focus:border-blue-500 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all shadow-inner"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <span className="block text-sm font-semibold mb-2 ml-1">Your Message</span>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                                        <textarea
                                            name="message"
                                            placeholder="Tell me about your project..."
                                            required
                                            rows="6"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full bg-secondary border border-transparent focus:border-blue-500 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all resize-none shadow-inner"
                                        ></textarea>
                                    </div>
                                </div>

                                {status.msg && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-2xl text-sm font-semibold ${status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                                            }`}>
                                        {status.msg}
                                    </motion.div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full btn btn-primary flex items-center justify-center gap-3 group py-5 text-lg"
                                >
                                    {loading ? 'Sending...' : (
                                        <>
                                            Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

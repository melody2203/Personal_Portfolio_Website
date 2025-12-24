import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, GitHub, Linkedin, Send, User, MessageSquare } from 'lucide-react';
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

        try {
            // Backend URL - Adjust based on environment
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            if (response.status === 200) {
                setStatus({ type: 'success', msg: 'Message sent successfully! I will get back to you soon.' });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            setStatus({ type: 'error', msg: 'Something went wrong. Please try again or email me directly.' });
        } finally {
            setLoading(false);
        }
    };

    const socialLinks = [
        { icon: <Mail size={24} />, href: 'mailto:merertu@example.com', label: 'Email' },
        { icon: <GitHub size={24} />, href: 'https://github.com/melody2203', label: 'GitHub' },
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
                    <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full mb-8"></div>
                    <p className="max-w-xl mx-auto text-secondary text-lg">
                        Have a question or want to work together? Drop me a message below!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                        <p className="text-secondary mb-8 text-lg">
                            I am always open to discussing new projects, creative ideas, or opportunities for internships.
                        </p>

                        <div className="flex flex-col gap-6 mb-12">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 group hover:text-blue-500 transition-colors"
                                >
                                    <div className="p-3 glass rounded-xl group-hover:scale-110 transition-transform">
                                        {link.icon}
                                    </div>
                                    <span className="font-medium text-lg">{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="glass p-8 rounded-3xl"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            {status.msg && (
                                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                    }`}>
                                    {status.msg}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn btn-primary flex items-center justify-center gap-2 group"
                            >
                                {loading ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

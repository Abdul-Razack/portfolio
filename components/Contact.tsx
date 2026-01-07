"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function Contact() {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-0 max-w-6xl mx-auto px-4 py-10 my-10 bg-white shadow-lg rounded-3xl will-change-opacity-transform dark:bg-gray-900"
        >
            {/* Section Header */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Get in Touch
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Contact Information */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                        <span className="w-8 h-1 bg-blue-500 rounded-full" />
                        Contact Info
                    </h3>

                    <div className="grid grid-cols-1 gap-3">
                        <a
                            href="mailto:abdulrazack.it@gmail.com"
                            className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent transition-all hover:border-blue-500/30 hover:bg-white dark:hover:bg-gray-800 group"
                        >
                            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Email Me</p>
                                <p className="text-base font-bold text-gray-900 dark:text-white">abdulrazack.it@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/in/abdul-razack"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent transition-all hover:border-blue-500/30 hover:bg-white dark:hover:bg-gray-800 group"
                        >
                            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <Linkedin size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">LinkedIn</p>
                                <p className="text-base font-bold text-gray-900 dark:text-white">in/abdul-razack</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/Abdul-Razack"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent transition-all hover:border-blue-500/30 hover:bg-white dark:hover:bg-gray-800 group"
                        >
                            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <Github size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">GitHub</p>
                                <p className="text-base font-bold text-gray-900 dark:text-white">github/Abdul-Razack</p>
                            </div>
                        </a>

                        <a
                            href="tel:+971556602353"
                            className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent transition-all hover:border-blue-500/30 hover:bg-white dark:hover:bg-gray-800 group"
                        >
                            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Call Me</p>
                                <p className="text-base font-bold text-gray-900 dark:text-white">+971 55 660 2353</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Status Card */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-6">
                        <span className="w-8 h-1 bg-green-500 rounded-full" />
                        Availability
                    </h3>

                    <div className="flex-1 p-6 rounded-3xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 flex flex-col justify-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                            I am currently based in Dubai, UAE, and open to remote opportunities worldwide or on-site roles in the region.
                        </p>
                        <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold bg-white dark:bg-gray-800 px-5 py-3 rounded-2xl shadow-sm w-fit border border-blue-100 dark:border-blue-900/30 text-sm">
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                            Open for new roles
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} Abdul Razack. All rights reserved.
                </p>
            </footer>
        </motion.section>
    );
}

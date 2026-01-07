"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center relative pt-20 pb-10 overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center will-change-opacity-transform"
            >
                {/* Profile Image Section */}
                <div className="relative w-48 h-48 mx-auto mb-8 group">
                    {/* Background Glow */}
                    <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-blue-500 to-purple-400 opacity-[0.06] blur-lg transition-all duration-700 group-hover:opacity-[0.09] group-hover:blur-xl" />

                    <Image
                        src="/images/pic.jpg"
                        alt="Abdul Razack"
                        width={192}
                        height={192}
                        className="relative z-10 w-full h-full rounded-full border-4 border-white object-cover object-top shadow-2xl transition-transform duration-500 group-hover:scale-105 dark:border-gray-800"
                        priority
                    />
                </div>

                {/* Hero Header */}
                <header className="mb-8">
                    <h1 className="pb-2 text-4xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 drop-shadow-sm">
                        Abdul Razack
                    </h1>
                    <h2 className="text-xl font-light text-gray-600 md:text-2xl dark:text-gray-300">
                        Front-End Developer
                    </h2>
                </header>

                {/* Hero Bio */}
                <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                    <p>
                        I build modern, scalable web applications with a focus on clean architecture, usability, and performance. I enjoy working on real-world products, translating business requirements into reliable, maintainable, and intuitive user interfaces.
                    </p>
                    <p>
                        At <span className="font-bold text-gray-900 dark:text-white">Numerique360</span>, I am working on live production projects across ERP platforms, dashboards, and business applications. My responsibilities include implementing UI components, integrating APIs, optimizing performance, handling state and navigation flows, and maintaining stable features in collaboration with cross-functional teams to ensure consistent user experience across modules.
                    </p>
                </div>

                {/* Call to Action Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="rounded-full px-8 py-3 font-medium text-white bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all transform hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(37,99,235,0.8)]"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full px-8 py-3 font-medium text-gray-900 bg-gray-200 shadow-md transition-all transform hover:scale-105 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}

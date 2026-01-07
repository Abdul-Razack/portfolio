"use client";

import { motion } from "framer-motion";

export default function Education() {
    return (
        <motion.section
            id="education"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-0 max-w-6xl mx-auto px-4 py-16 my-10 bg-white shadow-lg rounded-3xl will-change-opacity-transform dark:bg-gray-900"
        >
            {/* Section Header */}
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Education & Certifications
                </h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Education Section */}
                <div>
                    <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="w-8 h-1 bg-blue-500 rounded-full" />
                        Education
                    </h3>
                    <div className="space-y-8 border-l-2 border-gray-100 dark:border-gray-800 ml-1">
                        <div className="relative pl-6 group">
                            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-blue-500 transition-transform group-hover:scale-125 dark:border-gray-900" />
                            <h4 className="font-bold text-gray-800 dark:text-gray-200">B.Tech in Information Technology</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Anna University • 2021 — 2025</p>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 font-medium">CGPA: 7.52/10</p>
                        </div>
                        <div className="relative pl-6 group">
                            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-blue-500 transition-transform group-hover:scale-125 dark:border-gray-900" />
                            <h4 className="font-bold text-gray-800 dark:text-gray-200">Higher Secondary</h4>
                            <p className="text-sm text-blue-600 dark:text-blue-400">State Board • 2020 — 2021</p>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 font-medium">Result: 84%</p>
                        </div>
                    </div>
                </div>

                {/* Certifications Section */}
                <div>
                    <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <span className="w-8 h-1 bg-purple-500 rounded-full" />
                        Certifications
                    </h3>
                    <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent transition-all hover:border-purple-500/30 hover:bg-white dark:hover:bg-gray-800">
                            <h4 className="font-bold text-gray-800 dark:text-gray-200">DBMS MongoDB Exam</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">Elite Certificate • 2021</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-transparent transition-all hover:border-purple-500/30 hover:bg-white dark:hover:bg-gray-800">
                            <h4 className="font-bold text-gray-800 dark:text-gray-200">Web Development</h4>
                            <p className="text-sm text-purple-600 dark:text-purple-400">Dabotics India</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Skills() {
    const skills = [
        { name: "React.js / Next.js", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Typescript", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "PostgreSQL / Prisma", level: "Intermediate" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Git / GitHub", level: "Advanced" },
    ];

    return (
        <motion.section
            id="skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-0 max-w-6xl mx-auto px-4 py-16 my-10 bg-white shadow-lg rounded-3xl will-change-opacity-transform dark:bg-gray-900"
        >
            {/* Section Header */}
            <div className="mb-10 text-center">
                <h2 className="pt-6 text-3xl font-bold text-gray-900 dark:text-white">
                    Skills
                </h2>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative flex flex-col items-center justify-center p-4 text-center transition-all duration-300 bg-white border border-gray-100 rounded-3xl hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] dark:bg-gray-800 dark:border-gray-700 dark:hover:border-blue-500 dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                        {/* Interactive Background Glow */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        <CheckCircle className="relative z-10 w-8 h-8 mb-2 text-green-500 transition-colors duration-300 group-hover:text-blue-500" />

                        <h3 className="relative z-10 font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                        </h3>

                        <span className="relative z-10 mt-1 text-xs text-gray-500 transition-colors duration-300 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                            {skill.level}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

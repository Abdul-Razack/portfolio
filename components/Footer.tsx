"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="w-full py-6 mt-12 bg-transparent">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                    © {new Date().getFullYear()} Abdul Razack. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
}

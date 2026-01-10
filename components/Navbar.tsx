"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // ✅ CHANGE #1: use resolvedTheme instead of theme
    const { resolvedTheme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { name: "Home", href: "#hero" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Work Experience", href: "#work-experience" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    // ✅ CHANGE #2: toggle using resolvedTheme (always "light" or "dark")
    const toggleTheme = () => {
        const isDark = resolvedTheme === "dark";
        setTheme(isDark ? "light" : "dark");
    };

    const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 50);
    };

    // Scroll Handler
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Simple section spy (kept as-is)
            const sections = links.map((link) => link.href.substring(1));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        // setActiveSection(section); // Optional: active state logic
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b ${scrolled
                ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md border-gray-200 dark:border-gray-800"
                : "bg-white/10 dark:bg-black/10 backdrop-blur-sm border-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Brand */}
                    <div
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex-shrink-0 cursor-pointer select-none leading-tight"
                    >
                        <span className="block text-lg md:text-xl font-bold tracking-tight
                            bg-clip-text text-transparent
                            bg-gradient-to-r from-violet-500 to-blue-500">
                            Abdul Razack
                        </span>

                        <span className="block text-[11px] md:text-xs font-medium tracking-wide
                            text-slate-400">
                            Frontend Developer
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center space-x-2 mr-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Theme Toggle (Desktop) */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-800"
                            aria-label="Toggle Theme"
                            type="button"
                        >
                            {mounted && (
                                resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />
                            )}
                        </button>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex items-center md:hidden">
                        {/* Theme Toggle (Mobile) */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-2 rounded-full transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-800"
                            aria-label="Toggle Theme"
                            type="button"
                        >
                            {mounted && (
                                resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-lg text-gray-700 transition-all duration-200 hover:text-blue-500 focus:outline-none dark:text-gray-200"
                            aria-label="Toggle Menu"
                            type="button"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar / Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 overflow-hidden dark:bg-gray-900/95 dark:border-gray-800"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleMobileNavClick(e, link.href)}
                                    className="block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:bg-gray-100 hover:text-blue-500 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

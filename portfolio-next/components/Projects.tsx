"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github } from "lucide-react";
import Image from "next/image";

interface Project {
    title: string;
    description: string;
    image: string;
    github: string;
    demo?: string;
    tech: string[];
}

const projects: Project[] = [
    {
        title: "Marsad ERP",
        description: "ERP and WooCommerce-based dashboard for business management.",
        image: "/images/marsad.png",
        github: "https://github.com/tabbnow/marsad",
        tech: ["React", "WooCommerce", "ERP"],
    },
    {
        title: "SwapXe (CryptXe Portal)",
        description: "Crypto dashboard portal to display API results in a web UI.",
        image: "/images/swapxe.png",
        github: "https://github.com/NUMERIQUE-360-ORG/cryptxe_portal",
        tech: ["Next.js", "Crypto", "API"],
    },
    {
        title: "Crypto Exchange",
        description: "A simple cryptocurrency exchange built with React using REST APIs.",
        image: "/images/bchain.png",
        github: "https://github.com/Abdul-Razack/Blockchain",
        tech: ["React", "Blockchain", "REST"],
    },
    {
        title: "Job Application Bot",
        description: "Automation bot to apply for jobs with a monitoring dashboard.",
        image: "/images/jobbot.png",
        github: "https://github.com/Abdul-Razack/Job-Bot",
        tech: ["Node.js", "Puppeteer", "Express"],
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio website built with Next.js and Tailwind CSS.",
        image: "/images/pfolio.png",
        github: "https://github.com/Abdul-Razack/Portfolio",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
];

export default function Projects() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleScrollTo = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = container.clientWidth * 0.8;
        const targetScroll =
            direction === "left"
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

        container.scrollTo({
            left: targetScroll,
            behavior: "smooth",
        });
    };

    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (!container) return;

        setCanScrollLeft(container.scrollLeft > 10);
        setCanScrollRight(
            container.scrollLeft < container.scrollWidth - container.clientWidth - 10
        );
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        container.addEventListener("scroll", updateScrollButtons);
        updateScrollButtons();
        return () => container.removeEventListener("scroll", updateScrollButtons);
    }, []);

    return (
        <motion.section
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-0 max-w-6xl mx-auto px-4 py-16 my-10 bg-white shadow-lg rounded-3xl will-change-opacity-transform dark:bg-gray-900"
        >
            {/* Section Header */}
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Projects
                </h2>
            </div>

            {/* Project Slider Container */}
            <div
                className="group/slider relative px-4 md:px-12"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div
                    ref={scrollRef}
                    className="flex gap-6 pb-8 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="flex-none w-full md:w-[31.5%] snap-center transition-all duration-300"
                        >
                            <div className="h-full overflow-hidden bg-white border border-gray-100 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400/30 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-blue-400/30">
                                {/* Project Image Wrapper */}
                                <div className="group relative aspect-video overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>

                                    <p className="mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3 dark:text-gray-300">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2.5 py-1 text-xs font-semibold bg-blue-50 text-blue-600 rounded-lg transition-colors dark:bg-blue-900/30 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Project Links */}
                                    <div className="mt-6 flex items-center gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white bg-gray-900 transition-all hover:bg-black hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-600"
                                        >
                                            <Github size={16} />
                                            GitHub
                                        </a>
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-5 py-2 rounded-full text-sm font-medium text-blue-600 border border-blue-600 transition-all hover:bg-blue-50 hover:scale-105 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/10"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Slider Navigation Buttons */}
                <AnimatePresence>
                    {canScrollLeft && (
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            onClick={() => handleScrollTo("left")}
                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 border border-gray-200 shadow-xl text-gray-800 transition-all hover:bg-white hover:scale-110 md:-left-4 dark:bg-gray-800/90 dark:border-gray-700 dark:text-white"
                            aria-label="Previous project"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>
                    )}
                    {canScrollRight && (
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            onClick={() => handleScrollTo("right")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 border border-gray-200 shadow-xl text-gray-800 transition-all hover:bg-white hover:scale-110 md:-right-4 dark:bg-gray-800/90 dark:border-gray-700 dark:text-white"
                            aria-label="Next project"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
}

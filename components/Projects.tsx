"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, Circle } from "lucide-react";
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
        title: "Job Application Bot",
        description: "Automation bot to apply for jobs with a monitoring dashboard.",
        image: "/images/jobbot.png",
        github: "https://github.com/Abdul-Razack/Job-Bot",
        tech: ["Node.js", "Puppeteer", "Express"],
    },
    {
        title: "Crypto Exchange",
        description: "A simple cryptocurrency exchange built with React using REST APIs.",
        image: "/images/bchain.png",
        github: "https://github.com/Abdul-Razack/Blockchain",
        tech: ["React", "Blockchain", "REST"],
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
    const sliderRef = useRef<HTMLDivElement>(null);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);
    const [hovered, setHovered] = useState(false);
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    // Update total pages on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                // Desktop: 3 cards per view
                setTotalPages(Math.ceil(projects.length / 3));
            } else {
                // Mobile: 1 card per view
                setTotalPages(projects.length);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Scroll function
    const scrollSlider = (dir: "prev" | "next") => {
        const container = sliderRef.current;
        if (!container) return;

        const scrollAmount = container.clientWidth; // Scroll one viewport width
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        const newScroll =
            dir === "next"
                ? Math.min(container.scrollLeft + scrollAmount, maxScrollLeft)
                : Math.max(container.scrollLeft - scrollAmount, 0);

        container.scrollTo({ left: newScroll, behavior: "smooth" });
    };

    const scrollToSlide = (index: number) => {
        const container = sliderRef.current;
        if (!container) return;
        const scrollAmount = container.clientWidth * index;
        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
    };

    // Show/hide buttons & Track Active Slide/Page
    useEffect(() => {
        const container = sliderRef.current;
        if (!container) return;

        const handleScroll = () => {
            setIsUserScrolling(true);
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            setShowLeft(container.scrollLeft > 10);
            setShowRight(container.scrollLeft < maxScrollLeft - 10);

            // Calculate active page index
            const index = Math.round(container.scrollLeft / container.clientWidth);
            if (index !== currentSlide) {
                setCurrentSlide(index);
            }

            const timeout = setTimeout(() => setIsUserScrolling(false), 100);
            return () => clearTimeout(timeout);
        };

        container.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => container.removeEventListener("scroll", handleScroll);
    }, [currentSlide]);

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

            <div
                className="group/slider relative px-4 md:px-12"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Navigation Buttons (Desktop) */}
                <button
                    onClick={() => scrollSlider("prev")}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md transition-opacity duration-300 hover:scale-110 hidden md:inline-flex ${showLeft || hovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={() => scrollSlider("next")}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md transition-opacity duration-300 hover:scale-110 hidden md:inline-flex ${showRight || hovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    aria-label="Next slide"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Slider Container */}
                <div
                    ref={sliderRef}
                    className="flex gap-6 pb-8 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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

                {/* Indicator Dots */}
                <div className="flex justify-center gap-3 mt-6 pb-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToSlide(idx)}
                            className={`transition-all duration-300 p-1 ${idx === currentSlide
                                ? "text-blue-600 scale-125"
                                : "text-gray-400 dark:text-gray-600 hover:text-gray-500"
                                }`}
                            aria-label={`Go to page ${idx + 1}`}
                        >
                            <Circle size={12} className={idx === currentSlide ? "fill-current" : ""} />
                        </button>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

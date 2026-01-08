"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ChevronLeft, ChevronRight, Play, X, Circle } from "lucide-react";
import Portal from "./Portal";

interface Experience {
    key: string;
    title: string;
    roleLine: string;
    summary: string;
    bullets: string[];
    videoSrc: string;
}

const slides: Experience[] = [
    {
        key: "marsad",
        title: "ERP & WooCommerce (Marsad)",
        roleLine: "Front-End Developer – Numerique360 (Dubai, UAE)",
        summary:
            "Built ERP dashboards and WooCommerce-integrated modules for UAE clients using React.js and Next.js. Developed a custom WordPress plugin to expose a Menu REST API endpoint for headless frontend usage. Delivered scalable UI components with filters, pagination, analytics, and performance improvements.",
        bullets: [
            "Developed responsive ERP dashboards for Orders, Products, Categories, Customers, and Analytics.",
            "Integrated WooCommerce REST APIs for real-time data synchronization.",
            "Built a custom WordPress plugin exposing a Menu REST API endpoint for optimized frontend consumption.",
            "Implemented search, filters, pagination, and stable UI states for production usage."
        ],
        videoSrc: "/videos/marsad.mov",
    },
    {
        key: "jobbot",
        title: "Automation Platform (Job Bot)",
        roleLine: "Front-End Developer – Numerique360 (Dubai, UAE)",
        summary:
            "Built a full-stack automation platform with a monitoring dashboard to track bot runs and job application progress. Focused on structured UI, status visibility, and reliable execution feedback.",
        bullets: [
            "Built dashboards to monitor bot runs, statuses, and step-level progress.",
            "Implemented structured logs and clear UI feedback for each run.",
            "Designed the system to process one job at a time for stability."
        ],
        videoSrc: "/videos/jobbot.mov",
    },
    {
        key: "aviation",
        title: "Aviation ERP (Bug Fixing)",
        roleLine: "Front-End Developer – Numerique360 (Dubai, UAE)",
        summary:
            "Worked on an existing aviation ERP system primarily focused on bug fixing and maintenance. Resolved UI and functional issues and improved stability through better error handling and testing support.",
        bullets: [
            "Fixed UI and functional bugs across ERP screens and workflows.",
            "Resolved API integration issues and improved error handling.",
            "Assisted in validating fixes and reducing recurring production issues."
        ],
        videoSrc: "/videos/aviation_erp.mov",
    },
    {
        key: "blockchain",
        title: "Crypto Exchange (APIs)",
        roleLine: "Front-End Developer – Numerique360 (Dubai, UAE)",
        summary:
            "Implemented real-time crypto price/quote fetching with external APIs and refresh logic. Focused on reliable data display, API error handling, and performance-friendly UI updates.",
        bullets: [
            "Integrated pricing/quote APIs to show real-time market values.",
            "Implemented refresh logic and safe error handling for unstable APIs.",
            "Optimized UI update flow for smoother performance."
        ],
        videoSrc: "/videos/blockchain.mov",
    }
];

export default function WorkExperience() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);
    const [hovered, setHovered] = useState(false);
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState("");

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedVideo("");
    };

    const openModal = (videoUrl: string) => {
        setSelectedVideo(videoUrl);
        setIsModalOpen(true);
    };

    // Scroll function
    const scrollSlider = (dir: "prev" | "next") => {
        const container = sliderRef.current;
        if (!container) return;

        const scrollAmount = container.clientWidth;
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

    // Show/hide buttons & Track Active Slide
    useEffect(() => {
        const container = sliderRef.current;
        if (!container) return;

        const handleScroll = () => {
            setIsUserScrolling(true);
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            setShowLeft(container.scrollLeft > 5);
            setShowRight(container.scrollLeft < maxScrollLeft - 5);

            // Calculate active slide index
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

    // Auto-slide
    useEffect(() => {
        const container = sliderRef.current;
        if (!container) return;
        if (isModalOpen) return;

        const interval = setInterval(() => {
            if (!hovered && !isUserScrolling) {
                const maxScrollLeft = container.scrollWidth - container.clientWidth;
                const atEnd = container.scrollLeft >= maxScrollLeft - 5;

                if (atEnd) {
                    container.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    scrollSlider("next");
                }
            }
        }, 7000);

        return () => clearInterval(interval);
    }, [hovered, isUserScrolling, isModalOpen]);

    // Lock scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    }, [isModalOpen]);

    // Escape key listener for modal
    useEffect(() => {
        if (!isModalOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isModalOpen]);

    // Strict Autoplay Logic on Slide Change
    useEffect(() => {
        videoRefs.current.forEach((vid, idx) => {
            if (vid && idx !== currentSlide) {
                vid.pause();
            }
        });

        const playTimer = setTimeout(() => {
            const activeVideo = videoRefs.current[currentSlide];
            if (activeVideo) {
                activeVideo.play().catch(e => console.log('Autoplay deferred', e));
            }
        }, 150);

        return () => clearTimeout(playTimer);
    }, [currentSlide]);

    return (
        <motion.section
            id="experience"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-0 max-w-7xl mx-auto px-4 py-16 my-10 bg-white shadow-lg rounded-3xl will-change-opacity-transform dark:bg-gray-900"
        >
            {/* Section Header */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white pt-2">
                    Work Experience
                </h2>
            </div>

            <div
                className="relative"
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
                    className="flex gap-6 pb-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >

                    {slides.map((current, i) => (
                        <div
                            key={current.key}
                            className="w-full flex-shrink-0 snap-center"
                        >
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 px-6 md:px-12 py-8">
                                {/* Content Side */}
                                <div className="flex-1 text-center lg:text-left">
                                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block mb-2">
                                        {current.roleLine}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                        {current.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        {current.summary}
                                    </p>
                                    <ul className="text-left space-y-3 mb-8 hidden md:block">
                                        {current.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                                                <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="/abdul.pdf"
                                        download
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-full text-sm font-medium transition-all hover:bg-black dark:hover:bg-gray-700 hover:scale-105 hover:shadow-lg"
                                    >
                                        <Download size={18} />
                                        Download Resume
                                    </a>
                                </div>

                                {/* Visual Side */}
                                <div className="flex-1 w-full max-w-xl">
                                    <div
                                        onClick={() => openModal(current.videoSrc)}
                                        className="group relative aspect-video overflow-hidden rounded-3xl cursor-pointer border-2 border-transparent transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/50 hover:ring-4 hover:ring-blue-500/10"
                                    >
                                        <video
                                            ref={(el) => { videoRefs.current[i] = el; }}
                                            src={current.videoSrc}
                                            muted
                                            loop
                                            playsInline
                                            className="h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-500 group-hover:bg-black/60">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
                                                <Play className="fill-white text-white ml-1" size={32} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicator Dots */}
                <div className="flex justify-center gap-3 mt-6 pb-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToSlide(idx)}
                            className={`transition-all duration-300 p-1 ${idx === currentSlide
                                ? "text-blue-600 scale-125"
                                : "text-gray-400 dark:text-gray-600 hover:text-gray-500"
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        >
                            <Circle size={12} className={idx === currentSlide ? "fill-current" : ""} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <Portal>
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={closeModal}
                                    className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 text-white transition-transform hover:scale-110 hover:bg-black/70"
                                >
                                    <X size={24} />
                                </button>
                                <video
                                    src={selectedVideo}
                                    controls
                                    autoPlay
                                    className="h-full w-full object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Portal>
        </motion.section>
    );
}

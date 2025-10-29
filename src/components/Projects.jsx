import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import dash from "../assets/dash.png";
import tic from "../assets/tictactoe.png";
import age from "../assets/agec.png";
import product from "../assets/product.png";
import folio from "../assets/pfolio.png";
import bchain from "../assets/bchain.png";

const projects = [
  {
    title: "Crypto Exchange",
    description: "A simple cryptocurrency exchange built with React using REST APIs.",
    image: bchain,
    github: "https://github.com/Abdul-Razack/Blockchain",
  },
  {
    title: "Tic Tac Toe Game",
    description: "A simple Tic Tac Toe game built with React.",
    image: tic,
    github: "https://github.com/Abdul-Razack/Tic-Tac-Toe",
  },
  {
    title: "Dashboard",
    description: "Real-time dashboard using React and Tailwind CSS.",
    image: dash,
    github: "https://github.com/Abdul-Razack/dashboard",
  },
  {
    title: "Product Catalogue",
    description: "A simple product catalogue built with React.",
    image: product,
    github: "https://github.com/Abdul-Razack/Product-Catalog",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with React and Tailwind CSS.",
    image: folio,
    github: "https://github.com/Abdul-Razack/Portfolio",
  },
  {
    title: "Age Calculator",
    description: "A simple age calculator built with JavaScript.",
    image: age,
    github: "https://github.com/Abdul-Razack/Age-Calculator",
  },
];

export default function Projects() {
  const sliderRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  // Scroll function
  const scrollSlider = (dir) => {
    const container = sliderRef.current;
    if (!container) return;
    const firstCard = container.querySelector(".flex-shrink-0");
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 16;
    const isMobile = window.innerWidth < 640;

    const scrollAmount = isMobile ? cardWidth + gap : container.clientWidth;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    const newScroll =
      dir === "next"
        ? Math.min(container.scrollLeft + scrollAmount, maxScrollLeft)
        : Math.max(container.scrollLeft - scrollAmount, 0);

    container.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  // Show/hide desktop buttons
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsUserScrolling(true);
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setShowLeft(container.scrollLeft > 5);
      setShowRight(container.scrollLeft < maxScrollLeft - 5);

      const timeout = setTimeout(() => setIsUserScrolling(false), 3000);
      return () => clearTimeout(timeout);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

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
    }, 4000);

    return () => clearInterval(interval);
  }, [hovered, isUserScrolling]);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="py-20 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div
        className="relative px-5 sm:px-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left Button (desktop only) */}
        <button
          onClick={() => scrollSlider("prev")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full z-20 hover:scale-110 transition-opacity duration-300 shadow-md
            ${showLeft || hovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            hidden sm:inline-flex`}
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="
            flex gap-4
            overflow-x-auto overflow-y-auto
            touch-pan-x touch-pan-y
            scroll-smooth
            snap-x snap-mandatory
            scrollbar-thin
            scrollbar-thumb-transparent scrollbar-track-transparent
            hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-600
            transition-all duration-300
          "
          style={{
            scrollSnapType: "x proximity",
            maxHeight: "600px", // allow vertical scroll on mobile
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="
                w-72 sm:w-1/2 lg:w-1/3
                flex-shrink-0 rounded-3xl
                shadow-lg overflow-visible
                bg-gradient-to-b from-gray-100 to-gray-200
                dark:from-gray-800 dark:to-gray-900
                snap-center
              "
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{p.description}</p>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-4 inline-flex items-center gap-2 px-4 py-2
                    rounded-lg font-medium shadow-sm
                    transition-all duration-300
                    bg-[#0d1117] text-[#f0f6fc] border border-gray-800
                    hover:bg-[#161b22] hover:border-gray-700
                    dark:bg-[#0d1117] dark:text-[#f0f6fc]
                    dark:border-gray-700 dark:hover:bg-[#161b22] dark:hover:border-gray-600
                  "
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Button (desktop only) */}
        <button
          onClick={() => scrollSlider("next")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full z-20 hover:scale-110 transition-opacity duration-300 shadow-md
            ${showRight || hovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            hidden sm:inline-flex`}
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>
      </div>
    </motion.section>
  );
}

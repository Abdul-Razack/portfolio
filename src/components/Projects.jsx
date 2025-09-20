import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import dash from "../assets/dash.png";
import tic from "../assets/tictactoe.png";
import age from "../assets/agec.png";
import product from "../assets/product.png";
import folio from "../assets/pfolio.png";

const projects = [
  { title: "Tic Tac Toe Game", description: "A simple Tic Tac Toe game built with React.", image: tic, github: "https://github.com/Abdul-Razack/Tic-Tac-Toe" },
  { title: "Dashboard", description: "Real-time dashboard using React and Tailwind CSS.", image: dash, github: "https://github.com/Abdul-Razack/dashboard" },
  { title: "Product Catalog", description: "A simple product catalog built with React.", image: product, github: "https://github.com/Abdul-Razack/Product-Catalog" },
  { title: "Portfolio Website", description: "My personal portfolio website built with React and Tailwind CSS.", image: folio, github: "https://github.com/Abdul-Razack/Portfolio" },
  { title: "Age Calculator", description: "A simple age calculator built with Js.", image: age, github: "https://github.com/Abdul-Razack/Age-Calculator" }
]

export default function Projects() {
  const sliderRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [hovered, setHovered] = useState(false);

  // This function handles the smooth scrolling
  const scrollSlider = (dir) => {
    const container = sliderRef.current;
    if (!container) return;

    // Get the width of a single card
    const firstCard = container.querySelector('.flex-shrink-0');
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 24; // Tailwind's `gap-6`
    
    // Check if the screen is mobile based on Tailwind's sm breakpoint (640px)
    const isMobile = window.innerWidth < 640;

    let scrollAmount;
    if (isMobile) {
      // On mobile, scroll by the width of one card plus the gap
      scrollAmount = cardWidth + gap;
    } else {
      // On desktop, scroll by the container's full visible width (current behavior)
      scrollAmount = container.clientWidth;
    }

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const newScroll = dir === "next"
      ? Math.min(container.scrollLeft + scrollAmount, maxScrollLeft)
      : Math.max(container.scrollLeft - scrollAmount, 0);

    // `behavior: "smooth"` provides the smooth slide animation
    container.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const handleScroll = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setShowLeft(container.scrollLeft > 5);
      setShowRight(container.scrollLeft < maxScrollLeft - 5);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="px-0 py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div
        className="relative px-5 sm:px-10"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left Button */}
        <button
          onClick={() => scrollSlider("prev")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full z-20 hover:scale-110 transition-opacity duration-300 shadow-md ${showLeft || hovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-hidden snap-x snap-mandatory touch-pan-x"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 rounded-3xl shadow-lg overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
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
                  className="mt-4 inline-flex items-center gap-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scrollSlider("next")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full z-20 hover:scale-110 transition-opacity duration-300 shadow-md ${showRight || hovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
}
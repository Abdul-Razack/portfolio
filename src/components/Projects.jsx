import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import dash from "../assets/dash.png";
import tic from "../assets/tictactoe.png";
import age from "../assets/agec.png";
import product from "../assets/product.png";
import counter from "../assets/counter.png";

// Sample project data

const projects = [
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
    title: "Age Calculator",
    description: "A simple age calculator built with Js.",
    image: age,
    github: "https://github.com/Abdul-Razack/Age-Calculator",

  },
  {
    title: "Product Catalog",
    description: "A simple product catalog built with React.",
    image: product,
    github: "https://github.com/Abdul-Razack/Product-Catalog",

  },
  {
    title: "Counter App",
    description: "A simple counter app built with React.",
    image: counter,
    github: "https://github.com/Abdul-Razack/mini-project-counter-app-react",

  }
];

export default function Projects() {
  const sliderRef = useRef(null);

  const scrollSlider = (dir) => {
    const container = sliderRef.current;
    if (!container) return;
    const cardWidth = 320 + 24; // width + gap
    container.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  return (
    <section id="projects" className="px-4 ">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scrollSlider("prev")}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full z-10 hover:scale-110 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Horizontal Slider */}
        <div
          ref={sliderRef}
          className="flex gap-10 overflow-x-auto overflow-y-hidden  scroll-smooth no-scrollbar px-4whitespace-nowrap"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[320px] rounded-3xl shadow-lg overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{p.title}</h3>
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
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full z-10 hover:scale-110 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
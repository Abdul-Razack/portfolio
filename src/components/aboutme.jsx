import { motion } from "framer-motion";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import pdf from "../assets/ABDUL RAZACK A Resume.pdf";
import workImage1 from "../assets/avi.png";
import workImage2 from "../assets/avi2.png";
import workImage3 from "../assets/avi3.png";

const workImages = [workImage1, workImage2, workImage3];

export default function WorkExperience() {
  const sliderRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [hovered, setHovered] = useState(false);

  const scrollSlider = (dir) => {
    const container = sliderRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    let newScroll =
      dir === "next"
        ? Math.min(container.scrollLeft + cardWidth, maxScrollLeft)
        : Math.max(container.scrollLeft - cardWidth, 0);

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
    <motion.section
      id="wxp"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-4 py-12 bg-white dark:bg-gray-900 rounded-xl shadow-1xl"
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white pt-20">
        Work Experience
      </h2>

      <div className="flex flex-col items-center gap-8">
        {/* Text Content */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Front-End Developer at <span className="text-blue-600">Numerique360</span>
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            During my tenure at <span className="font-medium">Numerique360</span>, I contributed
            to building responsive and high-performance web applications. My role focused on
            creating clean, user-friendly interfaces using <span className="font-medium">React.js, Tailwind CSS, and JavaScript</span>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I am passionate about crafting accessible, efficient, and visually appealing front-end
            solutions that enhance user engagement and overall web performance.
          </p>

          <a
            href={pdf}
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <Download className="w-5 h-5" /> Download Resume
          </a>
        </div>

        {/* Slider */}
        <div
          className="relative w-full max-w-xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Left Button */}
          <button
            onClick={() => scrollSlider("prev")}
            className={`absolute left-0 -translate-x-full top-1/2 -translate-y-1/2
              bg-gray-200 dark:bg-gray-700 p-1 rounded-full z-10
              hover:scale-110 transition-opacity duration-300 shadow-md
              ${showLeft || hovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Slider */}
          <div
            ref={sliderRef}
            className="flex flex-nowrap overflow-x-auto md:overflow-hidden snap-x snap-mandatory touch-pan-x"
          >
            {workImages.map((img, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full snap-start p-2"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img}
                  alt={`Work Experience ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scrollSlider("next")}
            className={`absolute right-0 translate-x-full top-1/2 -translate-y-1/2
              bg-gray-200 dark:bg-gray-700 p-1 rounded-full z-10
              hover:scale-110 transition-opacity duration-300 shadow-md
              ${showRight || hovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
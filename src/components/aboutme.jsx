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

  const scrollSlider = (dir) => {
    const container = sliderRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.9; // slide almost one view width
    container.scrollBy({
      left: dir === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowLeft(container.scrollLeft > 10); // Show left button after slight scroll
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 py-12 bg-white dark:bg-gray-900 rounded-xl shadow-1xl"
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Work Experience
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Text Content */}
        <div className="md:w-3/5 lg:w-2/3 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Front-End Developer at{" "}
            <span className="text-blue-600">Numerique360</span>
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            During my tenure at{" "}
            <span className="font-medium">Numerique360</span>, I contributed
            to building responsive and high-performance web applications. My
            role focused on creating clean, user-friendly interfaces using{" "}
            <span className="font-medium">React.js, Tailwind CSS, and JavaScript</span>. I
            collaborated closely with designers and back-end developers to
            integrate <span className="font-medium">RESTful APIs</span> and
            deliver seamless user experiences.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I am passionate about crafting accessible, efficient, and visually
            appealing front-end solutions that enhance user engagement and
            overall web performance.
          </p>

          <a
            href={pdf}
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>

        {/* Image Slider Wrapper */}
        <div className="relative md:w-3/5">
          {/* Left Button - shown only after scrolling */}
          {showLeft && (
            <button
              onClick={() => scrollSlider("prev")}
              className="absolute left-0 top-1/2 -translate-y-1/2 
                         bg-gray-200 dark:bg-gray-700 p-1 rounded-full z-10 
                         hover:scale-110 transition shadow-md"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide snap-x snap-mandatory h-80 rounded-lg"
          >
            {workImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Work Experience ${index + 1}`}
                className="h-full w-auto object-contain rounded-lg shadow-lg flex-shrink-0 snap-start"
              />
            ))}
          </div>

          {/* Right Button - always visible */}
          <button
  onClick={() => scrollSlider("next")}
  className="absolute right-0 top-1/2 -translate-y-1/2 
             bg-gray-200 dark:bg-gray-700 
             p-1 rounded-full z-10 
             hover:scale-110 transition shadow-md"
  aria-label="Next"
>
  <ChevronRight className="w-4 h-4" />
</button>

        </div>
      </div>
    </motion.section>
  );
}

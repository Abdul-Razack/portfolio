import { motion } from "framer-motion";
import { Download } from "lucide-react"
import pdf from "../assets/ABDUL RAZACK A Resume.pdf"   

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        About Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Hi, I’m <span className="font-semibold">Abdul Razack</span>, a
        front-end developer passionate about building responsive, user-friendly
        web applications. I love working with modern JavaScript frameworks like
        <span className="font-medium"> React</span> and <span className="font-medium">Next.js</span>, 
        and I enjoy crafting clean, accessible, and performant interfaces.
      </p>

      <a
        href={pdf}
        download
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        <Download className="w-5 h-5" />
        Download Resume
      </a>
    </motion.section>
  );
}

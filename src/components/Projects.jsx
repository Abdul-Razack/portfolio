import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import dash from "../assets/dash.png";
import tic from "../assets/tictactoe.png";
import age from "../assets/agec.png";

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
    
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-4"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }} // Slight lift on hover
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
>
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Overlay for text */}
            <div className="p-6 flex flex-col flex-1 justify-between bg-gradient-to-t from-white/90 to-transparent dark:from-gray-900/90 dark:to-transparent">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  <Github className="w-4 h-4" /> Code
                </a>
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

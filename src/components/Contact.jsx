import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Get In Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Feel free to reach out if you want to collaborate or just say hi!
      </p>
      <div className='flex justify-center gap-6 items-center flex-wrap mt-4'>
        <a
          href="tel:+919342217586"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center gap-1"
        >
          <Phone className="w-6 h-6" />
          <span className="hidden sm:inline">+91 9342217586</span>
        </a>
      </div>
      <div className="flex justify-center gap-6 items-center flex-wrap pt-4">
        
        <a
          href="mailto:abdulrazackabu2003@gmail.com"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdul-razack-a-84a7b9249"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/Abdul-Razack"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          <Github className="w-6 h-6" />
        </a>
        
      </div>
      
    </motion.section>
  );
}

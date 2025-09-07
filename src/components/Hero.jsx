import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section id="hero" initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Hi, I'm Abdul Razack </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Front-end developer passionate about building responsive, user-friendly web applications using React.js and modern JavaScript frameworks.
      </p>
    </motion.section>
  );
}
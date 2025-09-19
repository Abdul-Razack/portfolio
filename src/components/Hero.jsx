import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      id="hero" 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      className="text-center px-4"
    >
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Hi, I'm Abdul Razack <span className="text-red-500"></span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
        I am a B.Tech Information Technology graduate with a strong focus on front-end development. I specialize in React.js, JavaScript, Tailwind CSS, and CSS, building responsive and user-friendly web applications.
      </p>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
       <span className="font-bold">At Numerique360</span> , I contributed to real-time projects by developing dynamic interfaces using<span className="font-bold"> React (functional components and hooks), managing state with Context API, implementing navigation with React Router, and integrating RESTful APIs.</span> This experience strengthened both my technical expertise and collaborative skills, preparing me to deliver high-quality front-end solutions.
      </p>
    </motion.section>
  );
}

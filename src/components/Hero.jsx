import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center px-4 py-16"
    >
      {/* Profile Photo */}
      <div className="mx-auto mb-6 w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-500 -mt-12">
        <img
          src="/profile.jpg" // place your image in the public folder
          alt="Abdul Razack"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Hi, I'm Abdul Razack
      </h1>

      {/* Intro Paragraph */}
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-6xl mx-auto mb-6">
        I am a B.Tech Information Technology graduate with a strong focus on front-end development. I specialize in React.js, JavaScript, Tailwind CSS, and CSS, building responsive and user-friendly web applications.
      </p>

      {/* Experience Paragraph */}
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-6xl mx-auto">
        <span className="font-bold">At Numerique360</span>, I contributed to real-time projects by developing dynamic interfaces using{' '}
        <span className="font-bold">
          React (functional components and hooks), managing state with Context API, implementing navigation with React Router, and integrating RESTful APIs.
        </span>{' '}
        This experience strengthened both my technical expertise and collaborative skills, preparing me to deliver high-quality front-end solutions.
      </p>
    </motion.section>
  );
}

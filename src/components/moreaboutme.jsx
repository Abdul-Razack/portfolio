import { motion } from "framer-motion";

export default function EducationCertifications() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Education & Certifications
        </h1>

        {/* Education */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Education
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-base md:text-lg">
            <li>
              <span className="font-medium">B.Tech in Information Technology</span> – MNM Jain Engineering College, Anna University (2021–2025) | CGPA: 7.52/10
            </li>
            <li>
              <span className="font-medium">Higher Secondary (State Board)</span> – Dominic Savio Mat. Hr. Sec. School, Chennai (2020–2021) | 84%
            </li>
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Certifications
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-base md:text-lg">
            <li>
              <span className="font-medium">DBMS MongoDB Exam</span> – Elite Certificate (2021)
            </li>
            <li>
              <span className="font-medium">Web Development</span> – Dabotics India
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

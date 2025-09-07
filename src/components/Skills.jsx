import { motion } from 'framer-motion';
const skills = ["React","Next.js","Node.js","Tailwind CSS","TypeScript","MongoDB"];
export default function Skills() {
  return (
    <motion.section id="skills" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill,index)=>(
          <span key={index} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 font-medium shadow-sm">{skill}</span>
        ))}
      </div>
    </motion.section>
  );
}
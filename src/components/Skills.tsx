import { motion } from 'framer-motion';
import { Shield, Code, Wrench, Server } from 'lucide-react';
import SkillCategory from './SkillCategory';

const skillCategories = [
  {
    title: 'Core Skills',
    icon: Shield,
    skills: ['Pentesting', 'Red Team Assessment', 'Security Auditing', 'Networking']
  },
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'Java', 'C', 'SQL', 'Selenium']
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    skills: ['VS Code', 'Eclipse', 'AWS Cloud', 'Google Cloud Platform', 'Android Studio']
  },
  {
    title: 'Technologies/Frameworks',
    icon: Server,
    skills: ['Linux', 'GitHub', 'Vulnerability Assessment Tools', 'SIEM', 'Splunk']
  }
];

export default function Skills() {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
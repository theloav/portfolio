import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCategoryProps {
  category: {
    title: string;
    icon: LucideIcon;
    skills: string[];
  };
  index: number;
}

export default function SkillCategory({ category, index }: SkillCategoryProps) {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg p-6"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-400 mr-3" />
        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
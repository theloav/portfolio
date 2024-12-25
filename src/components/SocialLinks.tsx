import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/theloav"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white"
      >
        <Github className="w-6 h-6" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://www.linkedin.com/in/shri-arshan-743717270"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white"
      >
        <Linkedin className="w-6 h-6" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:shrivarshan81@gmail.com"
        className="text-gray-300 hover:text-white"
      >
        <Mail className="w-6 h-6" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="tel:+918637406402"
        className="text-gray-300 hover:text-white"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
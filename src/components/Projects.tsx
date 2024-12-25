import { motion } from 'framer-motion';
import { Shield, Smartphone, Network, MessageCircle } from 'lucide-react';

const projects = [
  {
    title: 'Securify',
    description: 'ML-powered system to detect spam, malicious, and phishing websites using CNN, SVM, and Logistic Regression.',
    icon: Shield,
    tech: ['Python', 'CNN', 'SVM', 'Fast API'],
    date: 'April 2024'
  },
  {
    title: 'Mobile APKs Malware Identifier',
    description: 'Web API for analyzing APK files using Multi-Layer Perceptron Classifier with 98% accuracy.',
    icon: Smartphone,
    tech: ['Python', 'MLPClassifier', 'Google Colab'],
    date: 'September 2024'
  },
  {
    title: 'Advanced Intrusion Detection System',
    description: 'LSTM-based system for network traffic monitoring with 99% accuracy.',
    icon: Network,
    tech: ['Python', 'LSTM', 'Deep Learning'],
    date: 'September 2024'
  },
  {
    title: 'Telegram Sentinel',
    description: 'AI-powered Telegram bot for detecting scams and malicious activities using NLP.',
    icon: MessageCircle,
    tech: ['Python', 'NLP', 'DistilBERT'],
    date: 'December 2024'
  }
];

export default function Projects() {
  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-600 text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-400">{project.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
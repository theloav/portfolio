import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/3">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src="varsh.jpeg"
              alt="Profile"
              className="rounded-full w-48 h-48 object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Shrivarshan Kasi Arul
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-gray-300">
              Cybersecurity & AI/ML Professional
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              A focused and detail-oriented professional specializing in blue teaming, VAPT, and ethical hacking. 
              Combining cybersecurity expertise with AI/ML to create robust defense strategies.
            </p>
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </motion.div>
  );
}

export default App;
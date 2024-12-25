import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SocialLinks from './SocialLinks';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Contact Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:shrivarshan81@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-3" />
                shrivarshan81@gmail.com
              </a>
              <a
                href="tel:+918637406402"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-3" />
                +91 8637406402
              </a>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white mb-2">Follow Me</h4>
              <SocialLinks />
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-lg p-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="user_name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="user_email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-4 text-green-400">Message sent successfully!</div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 text-red-400">Failed to send message. Please try again.</div>
            )}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Mail className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
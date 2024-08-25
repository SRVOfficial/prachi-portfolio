



import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ from_name: '', user_email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    // Get current date and time
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    });
  
    // Add date and time to formData as separate fields
    const updatedFormData = {
      ...formData,
      Date: date,
      Time: time
    };
  
    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        updatedFormData,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Your message has been successfully sent!');
      setIsLoading(false);
      setFormData({ from_name: '', user_email: '', message: '' }); // Reset form fields
    } catch (error) {
      console.error('FAILED...', error);
      toast.error('Failed to send the message. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <motion.section 
      className="py-20 bg-white"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-5">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-[#8B4513]"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Get In Touch
        </motion.h2>
        <motion.form 
          className="max-w-lg mx-auto"
          onSubmit={handleSubmit}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div 
            className="mb-6"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          >
            <input 
              type="text" 
              name="from_name" 
              value={formData.from_name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              className="w-full px-4 py-3 border border-[#D2691E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0522D] bg-white text-[#5D4037]" 
              required
            />
          </motion.div>
          <motion.div 
            className="mb-6"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          >
            <input 
              type="email" 
              name="user_email" 
              value={formData.user_email} 
              onChange={handleChange} 
              placeholder="Your Email" 
              className="w-full px-4 py-3 border border-[#D2691E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0522D] bg-white text-[#5D4037]" 
              required
            />
          </motion.div>
          <motion.div 
            className="mb-6"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          >
            <textarea 
              rows="5" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your Message" 
              className="w-full px-4 py-3 border border-[#D2691E] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0522D] bg-white text-[#5D4037]"
              required
            ></textarea>
          </motion.div>
          <motion.button 
            type="submit" 
            className="bg-[#8B4513] text-white px-6 py-3 rounded-full font-bold text-lg w-full hover:bg-[#A0522D] transition-colors"
            disabled={isLoading}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
        <ToastContainer />
      </div>
    </motion.section>
  );
};

export default Contact;
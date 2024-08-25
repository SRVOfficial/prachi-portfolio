




import React, { useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  { name: "Saurav Kumar, Kamjritztex", text: "Prachi's skills as a BA are exceptional, especially considering this is her first job in the role. Her ability to understand complex business needs and translate them into clear requirements has been invaluable to our projects." },
  { name: "Pranav Kumar, Kamjritztex", text: "I'm amazed at how efficiently Prachi manages our 15-member IT team at such a young age. Her leadership and communication skills have significantly improved our team's productivity and morale." },
  { name: "Sangram Mohapatra, Kamjritztex", text: "Prachi's attention to detail and analytical skills have helped us identify and solve problems we didn't even know we had. She's a true asset to our organization." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      className="bg-[#8B4513] text-[#F1E3D3] py-20"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-5">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-[#A0522D] bg-opacity-50 p-8 rounded-lg shadow-lg"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 + index * 0.3 }}
            >
              <FaQuoteLeft className="text-4xl text-[#D2691E] mb-4" />
              <p className="text-lg mb-6 italic">"{t.text}"</p>
              <p className="font-semibold">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;

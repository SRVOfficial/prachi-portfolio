







import React, { useRef } from 'react';
import { FaTrophy, FaMedal, FaAward, FaCertificate, FaStar } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const awards = [
  { title: "Annual Day - Dance, Patna", icon: FaTrophy, date: "March 2023" },
  { title: "Founder's Day - Dance, Patna", icon: FaMedal, date: "August 2022" },
  { title: "Carmel Feast Program - Dance, Patna", icon: FaAward, date: "July 2022" },
  { title: "Year's Scholarship Exam, Patna", icon: FaCertificate, date: "December 2018" },
  { title: "Abacus and Brain Gym, Patna", icon: FaStar, date: "March 2012" },
];

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      className="py-20 bg-[#F1E3D3]"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-5">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-[#8B4513]"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Awards and Certifications
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 p-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
            >
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="bg-[#A0522D] p-4 flex items-center justify-between"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + 0.1 * index }}
                >
                  <award.icon className="text-4xl text-[#F1E3D3]" />
                  <span className="text-[#F1E3D3] font-semibold">{award.date}</span>
                </motion.div>
                <motion.div 
                  className="p-6"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + 0.1 * index }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#8B4513]">{award.title}</h3>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Awards;
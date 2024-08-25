


import React, { useRef } from 'react';
import { FaStar, FaClock, FaUsers, FaChartLine, FaMicrosoft, FaFileExcel } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const skills = [
  { title: "Leadership Skills", icon: FaStar, description: "Proven ability to lead teams and drive results" },
  { title: "Problem Solving", icon: FaChartLine, description: "Effective problem-solving skills to drive business solutions" },
  { title: "Effective Time Management", icon: FaClock, description: "Ability to prioritize tasks and manage time efficiently" },
  { title: "Fast Learner", icon: FaStar, description: "Quickly adapt to new technologies and processes" },
  { title: "Ability to work in a Team", icon: FaUsers, description: "Collaborative mindset to work effectively with cross-functional teams" },
  { title: "Microsoft Excel", icon: FaFileExcel, description: "Proficient in using Microsoft Excel for data analysis and reporting" },
  { title: "Microsoft Office", icon: FaMicrosoft, description: "Skilled in using Microsoft Office tools for productivity and communication" },
  { title: "Business Analysis", icon: FaChartLine, description: "Ability to analyze business needs and develop effective solutions" },
  { title: "Strategic Planning", icon: FaChartLine, description: "Skilled in developing strategic plans to drive business growth" },
];

const Portfolio = () => {
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
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-[#D2691E]"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
            >
              <div className="p-6 text-center">
                <motion.div
                  whileInView={{ scale: 1, opacity: 1 }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + 0.1 * index }}
                >
                  <skill.icon className="text-5xl text-[#A0522D] mx-auto mb-4" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-2 text-[#8B4513]"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + 0.1 * index }}
                >
                  {skill.title}
                </motion.h3>
                <motion.p 
                  className="text-[#5D4037]"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + 0.1 * index }}
                >
                  {skill.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
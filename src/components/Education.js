




import React, { useRef } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const educations = [
  { year: "October 2020 - May 2023", organization: "Patna Womens's College", course: "BCOM HONS. (Accountancy)", icon: FaGraduationCap },
  { year: "April 2019 - March 2020", organization: "DAV PUBLIC SCHOOL, PATNA BIHAR", course: "12th", icon: FaGraduationCap },
  { year: "April 2017 - March 2018", organization: "DAV PUBLIC SCHOOL, PATNA BIHAR", course: "10th", icon: FaGraduationCap },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section 
      className="bg-white py-20 pb-20"
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
          Education
        </motion.h2>
        <div className="space-y-12">
          {educations.map((edu, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col md:flex-row items-start"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 + index * 0.3 }}
            >
              <div className="w-full md:w-1/4 mb-4 md:mb-0 text-center md:text-right">
                <motion.p 
                  className="text-[#A0522D] font-bold text-lg mr-2"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 + index * 0.3 }}
                >
                  {edu.year}
                </motion.p>
              </div>
              <div className="w-full md:w-3/4 pl-0 md:pl-12 border-l-4 border-[#D2691E] flex items-start">
                <motion.div 
                  className="text-3xl text-[#A0522D] mr-4 mt-1 ml-2 md:ml-0"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 + index * 0.3 }}
                >
                  <edu.icon />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-2xl font-semibold text-[#8B4513]"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 + index * 0.3 }}
                  >
                    {edu.course}
                  </motion.h3>
                  <motion.p 
                    className="text-[#5D4037]"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 + index * 0.3 }}
                  >
                    {edu.organization}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
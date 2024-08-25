


import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import image from "../images/prachi2.jpeg";
import image1 from "../images/prachi3.jpeg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const slideUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageRevealVariants = {
    hidden: { 
      clipPath: "circle(0% at 50% 50%)",
      opacity: 0
    },
    visible: { 
      clipPath: "circle(100% at 50% 50%)",
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: "easeInOut",
        delay: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="py-20 px-5 bg-[#F1E3D3]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    > 
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:gap-24">
        <motion.div 
          className="mb-8 lg:mb-0 lg:w-[15%] flex-shrink-0"
          variants={imageRevealVariants}
        >
          <div className="bg-[#8B4513] rounded-full p-2 shadow-lg overflow-hidden">
            <picture>
              <source media="(min-width: 1024px)" srcSet={image} />
              <motion.img 
                src={image1}
                alt="prachi-sharan" 
                className="w-64 h-64 lg:w-full lg:h-auto rounded-full object-cover border-2 border-[#D2691E]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </picture>
          </div>
        </motion.div>
        <div className="text-center lg:text-left lg:w-[85%]">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-[#8B4513]"
            variants={slideUpVariants}
          >
            About Me
          </motion.h2> 
          <motion.p 
            className="text-xl font-bold py-5 text-[#A0522D]"
            variants={slideUpVariants}
          >
            Prachi Sharan - IT Business Analyst
          </motion.p> 
          <motion.p 
            className="mb-6 text-[#5D4037]"
            variants={fadeInVariants}
          >
            Results-driven IT Business Analyst with a track record of leveraging data-driven insights to drive strategic decision-making. Experienced in managing frontend and backend processes, supporting IT initiatives, and enhancing operational efficiency. Skilled in business analysis, leadership, Microsoft Excel, Office, communication, strategic planning, and data analysis. Seeking to contribute expertise in process improvement and collaborate with cross-functional teams to support business growth. My goal is to deliver actionable recommendations that align with organizational objectives and drive impactful solutions.
          </motion.p>
          <motion.div 
            className="flex justify-center lg:justify-start space-x-4"
            variants={fadeInVariants}
          >
            <motion.a 
              href="https://www.linkedin.com/in/prachi-sharan-2878b1213" 
              className="text-[#D2691E] text-2xl hover:text-[#8B4513] transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="https://x.com/Prachiii29?t=Po6SBDCtcDiOo2-nuNwF6A&s=08" 
              className="text-[#D2691E] text-2xl hover:text-[#8B4513] transition-colors"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaTwitter />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
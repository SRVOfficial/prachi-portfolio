



import React, { useRef } from 'react';
import { FaBriefcase, FaChartLine, FaHandsHelping, FaBullhorn } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    icon: FaBriefcase,
    year: "March 2024 - August 2024",
    organization: "Kamjritztex IT Solutions",
    title: "IT Business Analyst & Team Lead",
    description: "Spearheading a team of 15 developers while bridging the gap between business needs and technical solutions. Leveraging expertise in Agile methodologies, JIRA, and Microsoft Office Suite to drive process optimization and digital transformation initiatives. Key achievements include:"
  },
  {
    icon: FaChartLine,
    year: "June 2022 - July 2022",
    organization: "Exthetix Media, Patna",
    title: "Business Strategy Intern",
    description: "Contributed to the company's growth through innovative research and strategic planning. Notable accomplishments:"
  },
  {
    icon: FaHandsHelping,
    year: "May 2022 - June 2022",
    organization: "Umeed India Foundation, Delhi",
    title: "Social Work HR Coordinator",
    description: "Played a crucial role in enhancing organizational efficiency and client well-being. Key contributions include:"
  },
  {
    icon: FaBullhorn,
    year: "April 2022 - May 2022",
    organization: "Homeflic Living, Patna",
    title: "Marketing Intern",
    description: "Gained hands-on experience in marketing. Notable accomplishments:"
  },
  {
    icon: FaBullhorn,
    year: "February 2022 - March 2022",
    organization: "Homeflic Wegrow, Patna",
    title: "Marketing & Sales Intern",
    description: "Gained comprehensive exposure to marketing and sales strategies in the real estate sector. Significant achievements include:"
  }
];

const experienceDetails = [
  [
    "Orchestrated seamless communication between stakeholders and development team, ensuring 100% alignment with business objectives.",
    "Implemented data-driven decision-making processes, leading to a 25% reduction in operational costs.",
    "Analyzed and translated complex business requirements into clear, actionable IT solutions, resulting in a 30% increase in project delivery efficiency.",
    "Developed comprehensive documentation and user manuals, improving team productivity by 20%."
    
  ],
  [
    "Assisted in producing and curating content for various media platforms.",
    "Supported the development and execution of media campaigns.",
    "Analyzed audience metrics to refine content strategies and improve engagement.",
    "Coordinated with production teams to ensure timely delivery of media projects.",
    "Contributed to brainstorming sessions and content planning for promotional initiatives."
  ],
  [
    "Developed and implemented effective policies and procedures for HR, finance, and other administrative functions.",
    "Facilitated social activities and outings for clients, providing them with greater opportunites for social engagement and personal growth."
  ],
  [
    "Assisted with digital marketing strategies and content creation.",
    "Conducted competitor analysis and monitored campaign metrics.",
    "Supported event planning and marketing activities.",
    "Collaborated with the team to improve marketing processes."
  ],
  [
    "Developed and executed marketing campaigns, boosting brand awareness.",
    "Conducted market research to identify trends and customer preferences.",
    "Created sales presentations and promotional materials.",
    "Coordinated with teams to align marketing strategies with business goals.",
    "Managed social media accounts, increasing online engagement.",
    "Tracked campaign performance and provided actionable insights."
  ]
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section 
      className="bg-[#F1E3D3] py-20 pb-20"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-5">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-[#8B4513]"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Professional Journey
        </motion.h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col md:flex-row items-start"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
            >
              <div className="w-full md:w-1/4 mb-4 md:mb-0 text-center md:text-right">
                <motion.p 
                  className="text-[#A0522D] font-bold text-lg mr-2"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                >
                  {exp.year}
                </motion.p>
              </div>
              <div className="w-full md:w-3/4 pl-0 md:pl-12 border-l-4 border-[#D2691E] flex items-start">
                <motion.div 
                  className="text-3xl text-[#A0522D] mr-4 mt-1 ml-2 md:ml-0"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                >
                  <exp.icon />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-2xl font-semibold text-[#8B4513]"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                  >
                    {exp.title}
                  </motion.h3>
                  <motion.p 
                    className="text-[#5D4037] font-medium mb-2"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                  >
                    {exp.organization}
                  </motion.p>
                  <motion.p 
                    className="text-[#8B4513] mb-4"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                  >
                    {exp.description}
                  </motion.p>
                  <motion.ul className="list-disc list-inside text-[#5D4037]">
                    {experienceDetails[index].map((detail, i) => (
                      <motion.li 
                        key={i} 
                        className="mb-2"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index + 0.05 * i }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
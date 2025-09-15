import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Eye } from 'lucide-react'

const Experience: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      title: 'Senior Associate',
      company: 'Bank Of New York',
      location: 'Pittsburgh, PA',
      period: '05/2022 - Present',
      description: 'Driving enhancements to WSS trade flows across FX, Money Market, and Futures, ensuring regulatory compliance, accurate settlement, and reliability for high-volume trading. Collaborate with cross-functional teams to integrate real-time data and modernize Java-based microservices using Spring Boot, Kafka, Docker, and Kubernetes, maintaining a secure and scalable infrastructure for global Markets & Execution Services.',
      technologies: ['Backend Development', 'Microservice Architecture', 'Application Modernization', 'Financial Systems', 'Database Management', 'Trade Flow Management'],
      achievements: []
    },
    {
      title: 'Java Developer (Contractor)',
      company: 'Wells Fargo',
      location: 'Remote',
      period: '09/2021 – 05/2022',
      description: 'Contributed to the modernization of a high-volume banking application, ensuring alignment with Wells Fargo\'s business objectives. Key responsibilities included managing system vulnerabilities, resolving code quality issues identified by SonarQube, and establishing CI/CD pipelines to automate deployment. These efforts streamlined data processing, improved system security, and enhanced user experiences.',
      technologies: ['Full Stack Development', 'Vulnerability Management', 'Code Quality Assurance', 'CI/CD Automation', 'Microservice Architecture'],
      achievements: []
    },
    {
      title: 'Teaching Assistant',
      company: 'University of North Texas',
      location: 'Denton, TX',
      period: '12/2020 - 06/2021',
      description: 'Assisting the professor in grading student projects and programming assignments for Undergraduates, also helping the students in clarifying their queries for the course Computer Science 1 Laboratory (CSCE 1030).',
      technologies: ['Technical Mentoring', 'Academic Support', 'Code Review'],
      achievements: []
    },
    {
      title: 'Junior Developer',
      company: 'OpenText',
      location: 'Remote',
      period: '06/2019 - 12/2020',
      description: 'Contributed to the enhancement of OpenText\'s core ECM platform, optimizing front-end Angular and jQuery components and improving back-end services with Java and Spring Boot. Implemented Agile practices and collaborated with product and QA teams to deliver high-quality, well-tested releases, improving performance and system reliability.',
      technologies: ['Full-Stack Development', 'API Development', 'Frontend Optimization', 'Performance Tuning'],
      achievements: []
    }
  ]

  return (
    <motion.section 
      id="experience" 
      ref={ref} 
      className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-white relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
               <motion.div
                 initial={{ opacity: 0, y: 50 }}
                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 className="text-center mb-16"
               >
                 <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-wider">
                   WORK EXPERIENCE
                 </h2>
               </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="bg-white border border-black p-8 rounded-2xl shadow-lg flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8"
            >
              <div className="flex-shrink-0 w-full lg:w-1/4 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-black mb-2 tracking-wide">{exp.company}</h3>
                <p className="text-xl font-semibold text-black mb-2">{exp.title}</p>
                <p className="text-base text-black mb-1">{exp.location}</p>
                <p className="text-sm text-black font-medium">{exp.period}</p>
              </div>
                     <div className="flex-grow w-full lg:w-3/4">
                       <p className="text-black leading-relaxed mb-4">{exp.description}</p>
                       {exp.achievements.length > 0 && (
                         <div className="space-y-2 text-black mb-4">
                           {exp.achievements.map((achievement, i) => (
                             <p key={i} className="text-black">{achievement}</p>
                           ))}
                         </div>
                       )}
                       <div className="flex flex-wrap gap-2">
                         {exp.technologies.map((tech, i) => (
                           <span key={i} className="px-3 py-1 bg-black text-white rounded-full text-sm">
                             {tech}
                           </span>
                         ))}
                       </div>
                     </div>
            </motion.div>
          ))}
        </div>

        {/* View Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.open('./resume.pdf', '_blank');
            }}
            className="bg-black text-white px-8 py-4 rounded-lg flex items-center space-x-3 mx-auto hover:bg-gray-800 transition-all duration-300"
          >
            <Eye className="w-5 h-5" style={{ color: 'white' }} />
            <span className="text-lg font-medium">VIEW RESUME</span>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
      
    </motion.section>
  )
}

export default Experience

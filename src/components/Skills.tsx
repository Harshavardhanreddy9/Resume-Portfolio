import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Java' },
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'TypeScript' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot' },
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'Tailwind CSS' }
      ]
    },
    {
      title: 'AI & Emerging Tech',
      skills: [
        { name: 'TensorFlow' },
        { name: 'PyTorch' },
        { name: 'OpenAI' },
        { name: 'Hugging Face' },
        { name: 'LangChain' },
        { name: 'scikit-learn' },
        { name: 'Pandas' },
        { name: 'NumPy' }
      ]
    },
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS' },
        { name: 'Google Cloud' },
        { name: 'Databricks' },
        { name: 'DigitalOcean' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL' },
        { name: 'MongoDB' },
        { name: 'PostgreSQL' }
      ]
    },
    {
      title: 'Web & API Development',
      skills: [
        { name: 'RESTful APIs' },
        { name: 'GraphQL' }
      ]
    },
    {
      title: 'Monitoring & Performance',
      skills: [
        { name: 'Grafana' },
        { name: 'Splunk' },
        { name: 'Prometheus' }
      ]
    },
    {
      title: 'Version Control & CI/CD',
      skills: [
        { name: 'Git' },
        { name: 'Jenkins' },
        { name: 'GitHub Actions' },
        { name: 'GitLab CI' }
      ]
    },
    {
      title: 'DevOps & Infrastructure',
      skills: [
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Kafka' },
        { name: 'Terraform' }
      ]
    }
  ]

  return (
    <motion.section 
      id="skills" 
      ref={ref} 
      className="min-h-screen w-full flex items-center justify-center bg-white py-32 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            TECHNICAL SKILLS
          </h2>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: categoryIndex * 0.15, ease: "easeOut" }}
              className="bg-white border border-black p-6 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-black mb-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 bg-black text-white rounded-lg text-center text-sm font-medium hover:bg-gray-800 transition-all duration-300"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
      
    </motion.section>
  )
}

export default Skills

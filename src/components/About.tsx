import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })


  return (
    <section id="about" ref={ref} className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-black/5 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-light text-black tracking-tight">
                ABOUT
              </h2>
              <div className="w-16 h-0.5 bg-black"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-black leading-relaxed">
                Hello there! I'm Harsha Vardhan Reddy Goli, a software developer with a strong focus 
                on building robust, user-friendly applications that solve real-world challenges. My skill 
                set spans front-end and back-end technologies, allowing me to craft end-to-end solutions 
                that are efficient, scalable, and maintainable.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Outside of my core development work, I have a keen interest in AI. While my day-to-day 
                involves coding, architecture design, and performance tuning, I'm always excited to see 
                how emerging AI tools and machine learning techniques can enhance existing applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-light text-black mb-2">5+</div>
                <div className="text-sm text-black uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-black mb-2">50+</div>
                <div className="text-sm text-black uppercase tracking-wider">Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

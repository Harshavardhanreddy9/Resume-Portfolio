import React from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {

  return (
    <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
      <div className="w-full max-w-6xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Left side - Text content like yeezy.com */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-black leading-none">
                HARSHA
              </h1>
              <div className="w-24 h-0.5 bg-black mx-auto lg:mx-0"></div>
            </div>
            
                   <div className="space-y-6">
                     <h2 className="text-xl lg:text-2xl font-light text-black whitespace-nowrap">
                       SOFTWARE ENGINEER | AI ENTHUSIAST
                     </h2>
                     <p className="text-lg text-black max-w-lg leading-relaxed">
                       Software engineer with 5+ years of experience building scalable, user-friendly applications. 
                       Skilled across front-end and back-end development with a strong focus on performance, 
                       architecture, and maintainability. Passionate about exploring AI and machine learning 
                       to enhance modern applications.
                     </p>
                   </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 pt-8 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const experienceSection = document.getElementById('experience');
                  if (experienceSection) {
                    experienceSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-white border border-black text-black font-normal text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                VIEW WORK
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-white border border-black text-black font-normal text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative h-80 w-64 lg:h-96 lg:w-80">
              <div className="absolute inset-0 bg-gray-100 rounded-lg border-2 border-black p-2">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img 
                    src="./images/profile-photo.jpg" 
                    alt="Harsha Vardhan Reddy Goli"
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center hidden">
                    <div className="w-48 h-48 bg-black/5 rounded-full flex items-center justify-center">
                      <div className="text-6xl text-black/20 font-light">H</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero

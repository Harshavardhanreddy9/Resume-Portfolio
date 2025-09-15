import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullName = 'HARSHA VARDHAN REDDY GOLI'
  const typingSpeed = 100 // milliseconds per character
  const pauseAtEnd = 2000 // pause at the end before restarting

  useEffect(() => {
    let timeoutId: number
    let currentIndex = 0
    let isActive = true

    const typeText = () => {
      if (!isActive) return
      
      if (currentIndex < fullName.length) {
        setDisplayedText(fullName.slice(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeText, typingSpeed)
      } else {
        // Pause at the end, then restart
        timeoutId = setTimeout(() => {
          if (!isActive) return
          currentIndex = 0
          setDisplayedText('')
          timeoutId = setTimeout(typeText, 500) // Brief pause before restarting
        }, pauseAtEnd)
      }
    }

    // Start typing after a short delay
    timeoutId = setTimeout(typeText, 1000)

    return () => {
      isActive = false
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [fullName, typingSpeed, pauseAtEnd])

  return (
    <motion.section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white py-8 sm:py-12 lg:py-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
      
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-center">
            {/* Centered text content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8 text-center max-w-4xl"
            >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center min-h-[2.5rem] sm:min-h-[3rem] lg:min-h-[3.5rem]">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-black leading-tight sm:leading-none">
                  <span className="typewriter-text">
                    {displayedText}
                  </span>
                  <span className="typewriter-cursor text-black ml-1">|</span>
                </h1>
              </div>
              <div className="w-16 sm:w-24 h-0.5 bg-black mx-auto"></div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-light text-black">
                SOFTWARE ENGINEER | AI ENTHUSIAST
              </h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-base sm:text-lg text-black leading-relaxed">
                  Software engineer with 5+ years of experience building scalable, user-friendly applications. 
                  Skilled across front-end and back-end development with a strong focus on performance, 
                  architecture, and maintainability. Passionate about exploring AI and machine learning 
                  to enhance modern applications.
                </p>
              </div>
            </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-8 pt-6 sm:pt-8 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const experienceSection = document.getElementById('experience');
                    if (experienceSection) {
                      experienceSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white border border-black text-black font-normal text-xs sm:text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto"
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
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white border border-black text-black font-normal text-xs sm:text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto"
                >
                  CONTACT
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/contactharshavardhanreddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white border border-black text-black font-normal text-xs sm:text-sm tracking-wider uppercase hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto group"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-black group-hover:fill-white transition-colors duration-300" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>CONNECT</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
    </motion.section>
  )
}

export default Hero

import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen: React.FC = () => {

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: i * 0.01,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        {/* Game-style LOADING text with cool animations */}
        <div className="relative mb-8">
          <motion.h1
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ 
              y: 0, 
              opacity: 1, 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              delay: 0.3, 
              duration: 0.8,
              scale: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white tracking-wider font-mono"
            style={{
              textShadow: '0 0 20px #ffffff, 0 0 40px #ffffff, 0 0 60px #ffffff',
              fontFamily: 'Courier New, Monaco, monospace'
            }}
          >
            LOADING
          </motion.h1>
          
          {/* Glitch overlay effects */}
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            animate={{ 
              x: [0, -3, 3, -2, 2, 0],
              opacity: [0, 0.8, 0, 0.6, 0, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 0.15,
              delay: 1.5,
              repeat: Infinity,
              repeatDelay: 2.5
            }}
            className="absolute top-0 left-0 text-6xl sm:text-7xl lg:text-8xl font-bold text-red-500 tracking-wider font-mono pointer-events-none"
            style={{ fontFamily: 'Courier New, Monaco, monospace' }}
          >
            LOADING
          </motion.h1>
          
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            animate={{ 
              x: [0, 3, -3, 2, -2, 0],
              opacity: [0, 0.6, 0, 0.4, 0, 0],
              scale: [1, 0.98, 1]
            }}
            transition={{ 
              duration: 0.15,
              delay: 1.6,
              repeat: Infinity,
              repeatDelay: 2.5
            }}
            className="absolute top-0 left-0 text-6xl sm:text-7xl lg:text-8xl font-bold text-blue-500 tracking-wider font-mono pointer-events-none"
            style={{ fontFamily: 'Courier New, Monaco, monospace' }}
          >
            LOADING
          </motion.h1>
        </div>

        {/* Animated loading dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center space-x-2 mb-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 0.5
              }}
              style={{
                boxShadow: '0 0 10px #ffffff'
              }}
            />
          ))}
        </motion.div>

        {/* Loading bar */}
        <div className="w-80 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              boxShadow: '0 0 10px #ffffff, 0 0 20px #ffffff'
            }}
          />
        </div>

        {/* Matrix-style falling characters */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/10 font-mono text-sm"
              initial={{ 
                y: -100, 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                opacity: 0
              }}
              animate={{ 
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3
              }}
              style={{ fontFamily: 'Courier New, Monaco, monospace' }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default LoadingScreen

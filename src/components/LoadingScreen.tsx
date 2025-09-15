import React from 'react'
import { motion } from 'framer-motion'

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-green-500/30"
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
        {/* Glitch effect container */}
        <div className="relative">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-7xl font-bold text-white mb-4 tracking-wider font-mono"
            style={{
              textShadow: '0 0 20px #ffffff, 0 0 40px #ffffff, 0 0 60px #ffffff'
            }}
          >
            LOADING
          </motion.h1>
          
          {/* Glitch overlay effects */}
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            animate={{ 
              x: [0, -2, 2, -1, 1, 0],
              opacity: [0, 0.7, 0, 0.5, 0, 0]
            }}
            transition={{ 
              duration: 0.1,
              delay: 1.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="absolute top-0 left-0 text-7xl font-bold text-red-500 mb-4 tracking-wider font-mono pointer-events-none"
          >
            LOADING
          </motion.h1>
          
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            animate={{ 
              x: [0, 2, -2, 1, -1, 0],
              opacity: [0, 0.5, 0, 0.3, 0, 0]
            }}
            transition={{ 
              duration: 0.1,
              delay: 1.6,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="absolute top-0 left-0 text-7xl font-bold text-blue-500 mb-4 tracking-wider font-mono pointer-events-none"
          >
            LOADING
          </motion.h1>
        </div>

        {/* Loading bar */}
        <div className="w-80 h-1 bg-gray-800 rounded-full mx-auto mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              boxShadow: '0 0 10px #10b981, 0 0 20px #10b981'
            }}
          />
        </div>

        {/* Loading text with typewriter effect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-white font-mono text-lg tracking-wider"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          >
            INITIALIZING SYSTEM...
          </motion.span>
        </motion.div>

        {/* Matrix-style falling characters */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-500/20 font-mono text-sm"
              initial={{ 
                y: -100, 
                x: Math.random() * window.innerWidth,
                opacity: 0
              }}
              animate={{ 
                y: window.innerHeight + 100,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3
              }}
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

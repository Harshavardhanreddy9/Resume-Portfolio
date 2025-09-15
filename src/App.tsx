import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'
import { useAppStore } from './hooks/useAppStore'

function App() {
  const { isLoading, setLoading } = useAppStore()

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // Very short loading time for better UX

    return () => clearTimeout(timer)
  }, [setLoading])

  // Enhanced scroll behavior for section-based navigation
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            // Update active section in store if needed
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen bg-white text-black overflow-x-hidden">
      {/* Pure white background like yeezy.com */}
      <div className="fixed inset-0 z-0 bg-white"></div>

      {/* Content with Yeezy-inspired spacing and section snap scrolling */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App

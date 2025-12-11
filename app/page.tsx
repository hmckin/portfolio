'use client'

import { useEffect, useRef, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

export default function Home() {
  const mainContentRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const mainContent = mainContentRef.current
    if (!mainContent) return

    const sections = mainContent.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id')
            if (sectionId) {
              setActiveSection(sectionId)
            }
          }
        })
      },
      {
        rootMargin: '-40% 0px -60% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`#${sectionId}`) as HTMLElement
    if (section) {
        const yOffset = -112; // 7rem in pixels (16 * 7)
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  }

  return (
    <div className="relative">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <main
        ref={mainContentRef}
        className="ml-[50%] w-1/2 pr-16 my-28 space-y-28"
      >
        <About />
        <Experience />
        <Projects />
        <div className="mt-28 ml-6 mr-48 text-left text-text-secondary text-sm">
          This website was created in Next.js using Tailwind CSS and deployed to Vercel by me, Harry McKinney.
        </div>
      </main>
    </div>
  )
}


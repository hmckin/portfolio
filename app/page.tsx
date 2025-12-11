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
    <div className="flex flex-col lg:flex-row">
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />
      <main
        ref={mainContentRef}
        className="w-full lg:w-1/2 lg:ml-[50%] px-8 lg:pr-16 my-10 space-y-10 lg:mb-12 lg:mt-0 lg:space-y-28"
      >
        <div className="lg:hidden">
          <h2 className="font-bold text-text-primary ml-6 mb-4">ABOUT</h2>
        </div>
        <About />
        <div className="lg:hidden">
          <h2 className="font-bold text-text-primary ml-6 -mb-4">EXPERIENCE</h2>
        </div>
        <Experience />
        <div className="lg:hidden">
          <h2 className="font-bold text-text-primary ml-6 mb-4">PROJECTS</h2>
        </div>
        <Projects />
        <div className="mt-28 mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 text-left text-text-secondary text-sm">
          This website was created in Next.js using Tailwind CSS and deployed to Vercel by me, Harry McKinney.
        </div>
      </main>
    </div>
  )
}


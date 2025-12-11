import { useState, useCallback } from 'react'

interface SidebarProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

export default function Sidebar({
  activeSection,
  onNavigate,
}: SidebarProps) {
  const [showTooltip, setShowTooltip] = useState(false)

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText('harrymckinney97@gmail.com').then(() => {
      setShowTooltip(true)
      setTimeout(() => {
        setShowTooltip(false)
      }, 2000)
    })
  }, [])

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
  ]

  return (
    <aside
      data-sidebar
      className="lg:flex flex-col lg:fixed left-0 top-0 w-full lg:w-1/2 h-auto lg:h-screen bg-cardstock z-50 overflow-hidden p-8 lg:p-0"
    >
      <div className="flex-col mx-6 my-10 lg:mx-28 lg:my-28 h-full flex">
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold text-text-primary mb-2 tracking-tight">
            Harry McKinney
          </h1>
          <p className="text-[0.95rem] text-text-secondary my-2 lg:my-8 leading-relaxed">
            I like to solve hard problems and build software.
          </p>

          <nav className="hidden lg:flex flex-col gap-2 pt-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate(item.id)
                  }}
                  className={`flex items-center gap-3 text-[0.85rem] font-medium tracking-wider py-2 transition-colors ${
                    isActive
                      ? 'text-text-primary font-bold text-[1rem]'
                      : 'text-text-tertiary hover:text-text-primary'
                  }`}
                >
                  <span
                    className={`w-0.5 h-4 bg-text-primary transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </nav>
        </div>

        <div className="flex gap-6 pt-4 lg:pt-8 mt-auto">
          <a
            href="https://github.com/hmckin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-secondary text-2xl transition-colors hover:text-text-primary"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/hmckin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-secondary text-2xl transition-colors hover:text-text-primary"
          >
            <i className="fab fa-linkedin" />
          </a>
          <div className="relative">
            <button
              onClick={copyToClipboard}
              aria-label="Email"
              className="text-text-secondary text-2xl transition-colors hover:text-text-primary"
            >
              <i className="fas fa-envelope" />
            </button>
            {showTooltip && (
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-gray-700 text-white text-xs rounded-md">
                Copied!
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}

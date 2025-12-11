import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface ProjectItem {
  title: string
  description: string
  link: string
  imageUrl: string
}

const projects: ProjectItem[] = [
  {
    title: 'Barebones',
    description:
      'A bare bones project management application, inspired by Jira without the fluff.',
    link: 'https://barebones-h1.vercel.app/',
    imageUrl: '/barebones.png',
  },
  {
    title: 'Prison Break',
    description:
      'A website showcasing progress and outcomes from our weekly meetups with tech professionals.',
    link: 'https://www.prisonbreakwednesdays.com/',
    imageUrl: '/PrisonBreak.png',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card
              className="transition-all hover:shadow-md group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="w-1/3">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={200}
                      height={200}
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-1 flex items-baseline">
                      {project.title}
                      <i className="fas fa-external-link-alt text-xs opacity-70 ml-2" />
                    </h3>
                    <p className="text-text-secondary leading-[1.7] mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  )
}
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ExperienceItem {
  title: string
  company: string
  companyUrl: string
  date: string
  description: string
  skills: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Product Analyst',
    company: 'Intellifi',
    companyUrl: 'https://intellifi.ca',
    date: 'January 2024 - December 2025',
    description:
      'Served in a forward-facing analytics role, partnering with clients to scope problems, build data pipelines and custom Python + SQL solutions. I also collaborated closely with PMs and SWEs to create impactful user stories for our development team.',
    skills: ['Python', 'SQL','Git', 'DevOps', 'ETL'],
  },
  {
    title: 'Research Engineer',
    company: 'General Fusion',
    companyUrl: 'https://generalfusion.com',
    date: 'September 2020 - June 2021',
    description:
    'Developed computational models to analyze high-volume experimental data, built visualizations, and presented findings to inform strategic recommendations.',
    skills: [
      'Python',
      'MATLAB',
      'Data Visualization',
      'Statistical Analysis',
    ],
  },
  {
    title: 'Research Engineer',
    company: 'C.H.U.M. Hospital',
    companyUrl: 'https://www.chumontreal.qc.ca',
    date: 'May 2019 - September 2019',
    description:
      'Modeled viscoelastic properties of vascular tissue using MATLAB and polynomial curve fitting to guide the design of research materials. Built automated validation scripts and monitoring tools in Python to ensure reproducible analysis and reliable data quality.',
    skills: ['Python', 'MATLAB', 'Data Validation', 'Modeling'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="transition-all hover:shadow-md group cursor-pointer"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-baseline mb-4 flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-1 flex items-baseline">
                    {exp.title}{' '}
                    <span className="text-text-secondary ml-2 font-normal">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                      >
                        {exp.company}
                        <i className="fas fa-external-link text-xs opacity-70" />
                      </a>
                    </span>
                  </h3>
                </div>
                <span className="text-[0.85rem] text-text-secondary whitespace-nowrap">
                  {exp.date}
                </span>
              </div>
              <p className="text-text-secondary leading-[1.7] mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


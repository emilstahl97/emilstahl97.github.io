'use client'

import { Server, Code, Network, Database, Cloud, Container } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'Backend Development', icon: Server, description: 'Python, Java, C, Bash, Swift' },
  { name: 'Frontend Development', icon: Code, description: 'React, Next.js, Tailwind CSS' },
  { name: 'Networking', icon: Network, description: 'BGP, FRRouting, Open vSwitch, OpenFlow' },
  { name: 'Databases', icon: Database, description: 'PostgreSQL, Cassandra, MongoDB, Redis' },
  { name: 'Big Data', icon: Cloud, description: 'Spark, Hadoop, Kafka, Elasticsearch' },
  { name: 'Containerization', icon: Container, description: 'Docker, Kubernetes, OpenShift' },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="py-12 bg-white" id="skills" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Full Stack Expertise
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            With a strong foundation in both frontend and backend technologies, coupled with extensive networking knowledge, I bring a comprehensive skill set to every project.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <skill.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{skill.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{skill.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


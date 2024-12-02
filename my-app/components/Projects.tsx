'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: "Network Monitoring Dashboard",
    description: "A real-time dashboard for monitoring network performance and detecting anomalies.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "WebSocket", "D3.js"],
    link: "#"
  },
  {
    title: "Distributed File System",
    description: "A scalable and fault-tolerant distributed file system implemented from scratch.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Go", "gRPC", "Raft Consensus", "Distributed Systems"],
    link: "#"
  },
  {
    title: "Secure Chat Application",
    description: "An end-to-end encrypted chat application with perfect forward secrecy.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "Cryptography", "WebRTC", "React"],
    link: "#"
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12 bg-gray-50" id="projects" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Work
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Here are some of my recent projects that showcase my skills in fullstack development and networking.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <a href={project.link}>View Project</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


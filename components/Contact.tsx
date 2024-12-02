'use client'

import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12 bg-white" id="contact" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Feel free to connect with me on LinkedIn or check out my projects on GitHub.
          </p>
        </div>

        <motion.div 
          className="mt-10 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="flex items-center gap-2"
              size="lg"
            >
              <a href="https://linkedin.com/in/emil-ståhl-6bb423b7" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
              size="lg"
            >
              <a href="https://github.com/emilstahl97" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                Follow on GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


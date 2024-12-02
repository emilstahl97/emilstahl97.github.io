'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const roles = [
  "Fullstack Engineer",
  "Network Specialist",
  "Backend Developer",
  "Cloud Architect"
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const targetRole = roles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentRole.length < targetRole.length) {
          setCurrentRole(targetRole.slice(0, currentRole.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500) // Pause at complete word
        }
      } else {
        if (currentRole.length === 0) {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % roles.length)
        } else {
          setCurrentRole(currentRole.slice(0, currentRole.length - 1))
        }
      }
    }, isDeleting ? 50 : 100) // Deleting is faster than typing

    return () => clearTimeout(timeout)
  }, [currentRole, currentIndex, isDeleting])

  return (
    <div className="relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left bg-white/80 backdrop-blur-sm p-8 rounded-lg lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block">Emil Ståhl</span>{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                  {currentRole}<span className="animate-pulse">|</span>
                </span>
              </motion.h1>
              <motion.p 
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Specializing in networking and building robust, scalable applications. With a passion for clean code and innovative solutions, I bring ideas to life in the digital realm.
              </motion.p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button asChild className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10">
                    <Link href="#projects">
                      View Projects
                    </Link>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button asChild variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-primary/10 hover:bg-primary/20 md:py-4 md:text-lg md:px-10">
                    <Link href="#contact">
                      Contact Me
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center">
        <motion.div
          className="relative h-[500px] w-[500px] lg:h-[600px] lg:w-[600px] mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/emil-stahl-profile-pic.png"
            alt="Emil Ståhl"
            width={600}
            height={600}
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  )
}


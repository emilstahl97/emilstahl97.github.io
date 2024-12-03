'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { courses } from '@/data/courses'
import Link from 'next/link'

export default function CoursePreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Get the 3 most recent courses with grade A
  const featuredCourses = courses
    .filter(course => course.grade === 'A')
    .sort((a, b) => {
      const semesterA = new Date(a.semester.split(' ')[1])
      const semesterB = new Date(b.semester.split(' ')[1])
      return semesterB.getTime() - semesterA.getTime()
    })
    .slice(0, 3)

  return (
    <section className="py-12 bg-white" id="courses-preview" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Education</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Courses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Highlighting some of my top academic achievements at KTH Royal Institute of Technology
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start gap-2">
                      <span className="text-lg font-bold">{course.name}</span>
                      <Badge variant="secondary" className="shrink-0">
                        {course.grade}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Course Code: {course.code}</p>
                      <p className="text-sm text-gray-500 mb-4">{course.semester}</p>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {course.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/courses">
                View All Courses
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const courses = [
  {
    name: "Introduction to Computer Science",
    code: "CS101",
    grade: "A",
    semester: "Fall 2020",
    category: "Core"
  },
  {
    name: "Data Structures and Algorithms",
    code: "CS201",
    grade: "A-",
    semester: "Spring 2021",
    category: "Core"
  },
  {
    name: "Computer Networks",
    code: "CS301",
    grade: "A",
    semester: "Fall 2021",
    category: "Networking"
  },
  {
    name: "Database Systems",
    code: "CS401",
    grade: "B+",
    semester: "Spring 2022",
    category: "Systems"
  },
  {
    name: "Operating Systems",
    code: "CS402",
    grade: "A-",
    semester: "Fall 2022",
    category: "Systems"
  }
]

export default function Courses() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-12 bg-gray-50" id="courses" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Education</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            University Courses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A comprehensive list of key courses completed during my academic journey
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{course.name}</span>
                      <Badge variant="secondary">{course.grade}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500">Course Code: {course.code}</p>
                      <p className="text-sm text-gray-500">Semester: {course.semester}</p>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
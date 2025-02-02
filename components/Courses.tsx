'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'
import { courses } from '@/data/courses'

type SortKey = 'grade' | 'category'

export default function Courses() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: isMobile
  })

  const [sortKey, setSortKey] = useState<SortKey>('grade')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const gradeOrder = ['A', 'B', 'C', 'D', 'E', 'P']

  const sortedCourses = [...courses].sort((a, b) => {
    if (sortKey === 'grade') {
      return (gradeOrder.indexOf(a.grade) - gradeOrder.indexOf(b.grade)) * (sortOrder === 'asc' ? 1 : -1)
    } else {
      return a.category.localeCompare(b.category) * (sortOrder === 'asc' ? 1 : -1)
    }
  })

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortOrder('asc')
    }
  }

  return (
    <section className="py-12 bg-gray-50" id="courses" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Education</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            KTH Royal Institute of Technology Courses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A comprehensive list of key courses completed during my academic journey at KTH Royal Institute of Technology
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button
            variant={sortKey === 'grade' ? 'default' : 'outline'}
            onClick={() => handleSort('grade')}
          >
            Sort by Grade {sortKey === 'grade' && (sortOrder === 'asc' ? '↑' : '↓')}
          </Button>
          <Button
            variant={sortKey === 'category' ? 'default' : 'outline'}
            onClick={() => handleSort('category')}
          >
            Sort by Category {sortKey === 'category' && (sortOrder === 'asc' ? '↑' : '↓')}
          </Button>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sortedCourses.map((course, index) => (
              <motion.div
                key={course.code}
                initial={{ opacity: 0, y: 20 }}
                animate={isMobile || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="w-full"
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start gap-2">
                      <span className="text-lg font-bold">{course.name}</span>
                      <Badge variant="secondary" className="shrink-0">
                        {course.grade}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-sm text-gray-500 mb-4">Course Code: {course.code}</p>
                    <Badge variant="outline" className="w-fit">
                      {course.category}
                    </Badge>
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
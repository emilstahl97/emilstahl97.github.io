import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}


'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const getHref = (hash: string) => {
    return pathname === '/' ? hash : `/${hash}`
  }

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="text-primary hover:text-primary/90">
              <span className="sr-only">Emil Ståhl</span>
              <FontAwesomeIcon 
                icon={faCode} 
                className="h-10 w-10"
                style={{ color: 'var(--primary)' }}
              />
            </Link>
            <div className="hidden lg:flex ml-10 space-x-8">
              <Link href={getHref('#about')} className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link href={getHref('#skills')} className="text-base font-medium text-gray-500 hover:text-gray-900">
                Skills
              </Link>
              <Link href="/courses" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Courses
              </Link>
              <Link href={getHref('#projects')} className="text-base font-medium text-gray-500 hover:text-gray-900">
                Projects
              </Link>
              <Link href={getHref('#contact')} className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-500" />
            ) : (
              <Menu className="h-6 w-6 text-gray-500" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-2">
            <div className="flex flex-col space-y-2">
              <Link href={getHref('#about')} className="text-base font-medium text-gray-500 hover:text-gray-900 px-2 py-1">
                About
              </Link>
              <Link href={getHref('#skills')} className="text-base font-medium text-gray-500 hover:text-gray-900 px-2 py-1">
                Skills
              </Link>
              <Link href="/courses" className="text-base font-medium text-gray-500 hover:text-gray-900 px-2 py-1">
                Courses
              </Link>
              <Link href={getHref('#projects')} className="text-base font-medium text-gray-500 hover:text-gray-900 px-2 py-1">
                Projects
              </Link>
              <Link href={getHref('#contact')} className="text-base font-medium text-gray-500 hover:text-gray-900 px-2 py-1">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}


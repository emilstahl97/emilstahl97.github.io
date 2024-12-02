import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="text-primary hover:text-primary/90">
              <span className="sr-only">John Doe</span>
              <FontAwesomeIcon 
                icon={faCode} 
                className="h-10 w-10"
                style={{ color: 'var(--primary)' }}
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="#about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
              <Link href="#skills" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Skills
              </Link>
              <Link href="#projects" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Projects
              </Link>
              <Link href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}


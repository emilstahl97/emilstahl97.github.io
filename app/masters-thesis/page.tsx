import React from 'react'
import { mastersThesisContent } from './content'

const DownloadButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center text-sm sm:text-base w-full sm:w-auto justify-center mb-2 sm:mb-0"
    download
  >
    <svg
      className="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
    {children}
  </a>
)

const GithubButton = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center text-sm sm:text-base w-full sm:w-auto justify-center mb-2 sm:mb-0"
  >
    <svg
      className="w-5 h-5 mr-2"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
    View on GitHub
  </a>
)

const RedHatGithubButton = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center text-sm sm:text-base w-full sm:w-auto justify-center mb-2 sm:mb-0"
  >
    <img
      src="/images/Red_Hat_logo.svg.png"
      alt="Red Hat Logo"
      className="w-5 h-5 mr-2"
    />
    View on Red Hat GitHub
  </a>
)

const SourceCodeButton = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center text-sm sm:text-base w-full sm:w-auto justify-center mb-2 sm:mb-0"
  >
    <svg
      className="w-5 h-5 mr-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>
    View Source Code
  </a>
)

export default function MastersThesis() {
  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      <h2 className="text-2xl sm:text-[2.75rem] font-extrabold leading-tight mb-4 sm:mb-8">
        Degree Project in Information and Communication Technology
      </h2>

      {/* Thesis Section */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Master's Thesis</h2>
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          {mastersThesisContent.thesis.title}
        </h3>
        
        {/* Add contributors section */}
        <div className="mb-6">
          {mastersThesisContent.thesis.authors.map((author) => (
            <div key={author.name} className="mb-2">
              <span className="font-semibold">{author.role}:</span>{' '}
              {author.name} ({author.affiliation})
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-4 mt-4 sm:mt-6 mb-4 sm:mb-6">
          <DownloadButton href={mastersThesisContent.thesis.pdfPath}>
            Download Thesis
          </DownloadButton>
          <GithubButton href={mastersThesisContent.thesis.githubUrl} />
          <RedHatGithubButton href={mastersThesisContent.thesis.redHatGithubUrl} />
          <SourceCodeButton href={mastersThesisContent.thesis.sourceCodeUrl} />
        </div>
        <div className="prose prose-sm sm:prose lg:prose-xl max-w-full">
          <p>{mastersThesisContent.thesis.description}</p>
        </div>
      </section>

      {/* Thesis Presentation Section */}
      <section className="mb-8 sm:mb-16">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Master's Thesis Presentation and Defense</h2>
        <div className="prose prose-sm sm:prose lg:prose-xl mb-4 sm:mb-6">
          <p>{mastersThesisContent.thesis.presentationDescription}</p>
        </div>
        <div className="max-w-3xl mx-auto px-0 sm:px-4">
          <div className="relative w-full aspect-video">
            <iframe
              src={mastersThesisContent.thesis.presentationVideoUrl}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Paper Section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Research Paper</h2>
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          {mastersThesisContent.paper.title}
        </h3>
        
        {/* Modified authors section - names only */}
        <div className="mb-6">
          <span className="font-bold">Authors: </span>
          {mastersThesisContent.paper.authors.map((author, index) => (
            <span key={author.name}>
              {author.name}
              {index < mastersThesisContent.paper.authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-4 mt-4 sm:mt-6 mb-4 sm:mb-6">
          <DownloadButton href={mastersThesisContent.paper.pdfPath}>
            Download Paper
          </DownloadButton>
          <GithubButton href={mastersThesisContent.paper.githubUrl} />
          <RedHatGithubButton href={mastersThesisContent.paper.redHatGithubUrl} />
          <SourceCodeButton href={mastersThesisContent.paper.sourceCodeUrl} />
        </div>
        <div className="prose prose-sm sm:prose lg:prose-xl max-w-full">
          <p>{mastersThesisContent.paper.description}</p>
        </div>
      </section>

      {/* OVSCON Presentation Section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">OVSCON 2024 Presentation</h2>
        <div className="prose prose-sm sm:prose lg:prose-xl mb-4 sm:mb-6">
          <p>{mastersThesisContent.paper.presentationDescription}</p>
        </div>
        <div className="max-w-3xl mx-auto px-0 sm:px-4">
          <div className="relative w-full aspect-video">
            <iframe
              src={mastersThesisContent.paper.videoUrl}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  )
} 
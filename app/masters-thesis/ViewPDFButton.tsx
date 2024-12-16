'use client'

import React from 'react'
import PDFViewer from './PDFViewer'
import { mastersThesisContent } from './content'

interface ViewPDFButtonProps {
  href: string
  type: 'thesis' | 'paper'
}

const ViewPDFButton = ({ href, type }: ViewPDFButtonProps) => {
  const pdfUrl = type === 'thesis' 
    ? mastersThesisContent.thesis.pdfPath 
    : mastersThesisContent.paper.pdfPath

  return <PDFViewer pdfUrl={pdfUrl} />
}

export default ViewPDFButton 
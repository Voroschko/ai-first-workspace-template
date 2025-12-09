import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - Career Strategy, Resume Building, LinkedIn Optimization | Go Offer',
  description: 'Go Offer offers comprehensive career services: career strategy development, ATS-friendly resume building, LinkedIn profile optimization, AI-powered job search automation, mock interviews, and offer negotiation training.',
  keywords: [
    'career strategy',
    'resume building',
    'LinkedIn optimization',
    'job search automation',
    'mock interviews',
    'offer negotiation',
    'career services',
    'job search help',
  ],
  openGraph: {
    title: 'Services - Go Offer Career Services',
    description: 'Comprehensive career services including strategy, resume building, LinkedIn optimization, and job search automation.',
    url: 'https://go-offer.us/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Go Offer Career Services',
    description: 'Comprehensive career services for job seekers.',
  },
  alternates: {
    canonical: 'https://go-offer.us/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}




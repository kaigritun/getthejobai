import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GetTheJobAI - Land Your Next Job Faster with AI',
  description: 'Practical guides, prompts, and tools to use ChatGPT and AI assistants for resumes, cover letters, interview prep, and job applications.',
  keywords: ['AI resume', 'ChatGPT resume', 'AI cover letter', 'job search AI', 'AI interview prep'],
  openGraph: {
    title: 'GetTheJobAI - Land Your Next Job Faster with AI',
    description: 'Use AI to optimize your resume, write cover letters, and prepare for interviews.',
    url: 'https://getthejobai.com',
    siteName: 'GetTheJobAI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetTheJobAI - Land Your Next Job Faster with AI',
    description: 'Use AI to optimize your resume, write cover letters, and prepare for interviews.',
  },
  other: {
    'impact-site-verification': 'add25e44-59d0-4212-b76d-6e212bea06a9',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${inter.className} bg-[#0c0c0c]`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

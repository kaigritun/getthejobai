import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'GetTheJobAI - Land Your Next Job Faster with AI',
    template: '%s | GetTheJobAI',
  },
  description: 'Practical guides, prompts, and tools to use ChatGPT and AI assistants for resumes, cover letters, interview prep, and job applications.',
  keywords: ['AI resume', 'ChatGPT resume', 'AI cover letter', 'job search AI', 'AI interview prep'],
  authors: [{ name: 'GetTheJobAI' }],
  creator: 'GetTheJobAI',
  metadataBase: new URL('https://getthejobai.com'),
  openGraph: {
    title: 'GetTheJobAI - Land Your Next Job Faster with AI',
    description: 'Use AI to optimize your resume, write cover letters, and prepare for interviews.',
    url: 'https://getthejobai.com',
    siteName: 'GetTheJobAI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GetTheJobAI - Land Your Next Job Faster with AI',
    description: 'Use AI to optimize your resume, write cover letters, and prepare for interviews.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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
    <html lang="en" className="dark scroll-smooth" style={{ colorScheme: 'dark' }}>
      <body className={`${inter.className} bg-[#0c0c0c] text-white antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}

import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Resume Score Calculator | GetTheJobAI',
  description: 'Get instant feedback on your resume. Our AI-powered scorer analyzes formatting, keywords, impact, and ATS compatibility.',
  keywords: ['resume score', 'resume checker', 'ATS resume checker', 'resume analyzer', 'resume feedback'],
}

export default function ResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Resume Score Calculator"
        subtitle="Paste your resume text below for instant AI feedback"
        placeholder={`Paste your resume here...

Example:
JOHN DOE
Software Engineer

EXPERIENCE
Senior Software Engineer | TechCorp | 2020-Present
• Led development of payment platform processing $50M annually
• Reduced API response time by 40% through optimization
• Managed team of 5 engineers across 3 time zones

EDUCATION
BS Computer Science, State University

SKILLS
Python, JavaScript, React, AWS, PostgreSQL`}
        ctaText="See our resume guides"
        ctaHref="/guides/chatgpt-resume-prompts"
        variant="general"
      />
    </div>
  )
}

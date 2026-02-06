import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Summary Score | GetTheJobAI',
  description: 'Get feedback on your professional summary or career objective. Optimize for impact, keywords, and recruiter attention.',
  keywords: ['career summary', 'professional summary', 'resume objective', 'career objective', 'resume summary statement'],
}

export default function CareerSummaryScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Career Summary Score"
        subtitle="Optimize your professional summary to grab recruiter attention"
        placeholder={`Paste your professional summary:

Results-driven software engineer with 8+ years of experience building scalable web applications. Led cross-functional teams at Fortune 500 companies, delivering products used by 10M+ users. Specialized in Python, cloud architecture, and agile methodologies. Seeking a senior technical role where I can drive innovation and mentor the next generation of engineers.`}
        ctaText="Professional summary guide"
        ctaHref="/guides/resume-professional-summary"
        variant="general"
      />
    </div>
  )
}

import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Science Resume Score | GetTheJobAI',
  description: 'Analyze your data science resume. Checks for ML/AI keywords, project metrics, and technical depth.',
  keywords: ['data science resume', 'ML resume checker', 'data analyst resume', 'AI resume score'],
}

export default function DataScienceResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Data Science Resume Score"
        subtitle="Optimized for ML, AI, and data analytics roles"
        placeholder="Paste your data science resume here..."
        ctaText="Data science tips"
        ctaHref="/guides/ai-resume-review"
        variant="tech"
      />
    </div>
  )
}

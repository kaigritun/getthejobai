import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Change Resume Score | GetTheJobAI',
  description: 'Optimize your resume for a career pivot. Highlights transferable skills and reframes experience.',
  keywords: ['career change resume', 'career pivot resume', 'transitioning careers'],
}

export default function CareerChangeResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Career Change Resume Score"
        subtitle="Optimize for career pivots and industry changes"
        placeholder="Paste your resume here..."
        ctaText="Career change guide"
        ctaHref="/guides/ai-career-pivot"
        variant="general"
      />
    </div>
  )
}

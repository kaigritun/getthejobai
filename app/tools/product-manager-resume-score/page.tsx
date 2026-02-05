import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product Manager Resume Score | GetTheJobAI',
  description: 'Analyze your PM resume. Checks for product metrics, strategy language, and cross-functional experience.',
  keywords: ['product manager resume', 'PM resume checker', 'product resume score'],
}

export default function ProductManagerResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Product Manager Resume Score"
        subtitle="Optimized for PM and product leadership roles"
        placeholder="Paste your product manager resume here..."
        ctaText="PM resume tips"
        ctaHref="/guides/ai-resume-review"
        variant="tech"
      />
    </div>
  )
}

import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sales Resume Score | GetTheJobAI',
  description: 'Analyze your sales resume. Checks for quota attainment, deal metrics, and sales process.',
  keywords: ["sales resume","sales resume checker","bdr resume","account executive resume"],
}

export default function SalesResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Sales Resume Score"
        subtitle="Optimized for sales and business development"
        placeholder="Paste your resume here..."
        ctaText="Get more tips"
        ctaHref="/guides/ai-resume-review"
        variant="sales"
      />
    </div>
  )
}

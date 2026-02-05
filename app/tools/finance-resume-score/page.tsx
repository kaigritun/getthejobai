import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finance Resume Score | GetTheJobAI',
  description: 'Analyze your finance resume. Checks for deal metrics, financial modeling, and investment keywords.',
  keywords: ['finance resume', 'investment banking resume', 'financial analyst resume'],
}

export default function FinanceResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Finance Resume Score"
        subtitle="Optimized for IB, PE, and corporate finance roles"
        placeholder="Paste your finance resume here..."
        ctaText="Finance resume tips"
        ctaHref="/guides/ai-resume-review"
        variant="executive"
      />
    </div>
  )
}

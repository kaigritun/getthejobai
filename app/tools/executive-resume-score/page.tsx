import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Executive Resume Score | GetTheJobAI',
  description: 'Analyze your executive resume. Checks for P&L ownership, transformation, and board experience.',
  keywords: ["executive resume","c-suite resume","vp resume checker","ceo resume"],
}

export default function ExecutiveResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Executive Resume Score"
        subtitle="Optimized for C-suite and VP-level roles"
        placeholder="Paste your resume here..."
        ctaText="Get more tips"
        ctaHref="/guides/ai-executive-job-search"
        variant="executive"
      />
    </div>
  )
}

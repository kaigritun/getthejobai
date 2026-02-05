import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Resume Score | GetTheJobAI',
  description: 'Analyze your marketing resume. Checks for campaign metrics, channel expertise, and growth results.',
  keywords: ["marketing resume","growth resume checker","digital marketing resume"],
}

export default function MarketingResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Marketing Resume Score"
        subtitle="Optimized for marketing and growth roles"
        placeholder="Paste your resume here..."
        ctaText="Get more tips"
        ctaHref="/guides/ai-resume-review"
        variant="marketing"
      />
    </div>
  )
}

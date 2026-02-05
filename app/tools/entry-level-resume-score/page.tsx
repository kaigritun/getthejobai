import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Entry Level Resume Score | GetTheJobAI',
  description: 'Perfect for new grads and career starters. Analyzes transferable skills and potential.',
  keywords: ['entry level resume', 'new grad resume', 'first job resume', 'college resume'],
}

export default function EntryLevelResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Entry Level Resume Score"
        subtitle="Perfect for new grads and career starters"
        placeholder="Paste your resume here..."
        ctaText="New grad tips"
        ctaHref="/guides/ai-resume-review"
        variant="general"
      />
    </div>
  )
}

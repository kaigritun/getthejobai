import CoverLetterScorer from '@/components/tools/CoverLetterScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Cover Letter Score | GetTheJobAI',
  description: 'Get instant feedback on your cover letter. Analyze personalization, value proposition, tone, and more.',
  keywords: ['cover letter score', 'cover letter checker', 'cover letter analyzer', 'cover letter feedback'],
}

export default function CoverLetterScorePage() {
  return (
    <div className="py-16 px-6">
      <CoverLetterScorer />
    </div>
  )
}

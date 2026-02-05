import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consulting Resume Score | GetTheJobAI',
  description: 'Analyze your consulting resume. Checks for case metrics, client impact, and strategy language.',
  keywords: ['consulting resume', 'MBB resume', 'management consulting resume'],
}

export default function ConsultingResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Consulting Resume Score"
        subtitle="Optimized for MBB and strategy consulting roles"
        placeholder="Paste your consulting resume here..."
        ctaText="Consulting tips"
        ctaHref="/guides/ai-resume-review"
        variant="executive"
      />
    </div>
  )
}

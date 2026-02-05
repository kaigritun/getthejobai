import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Remote Job Resume Score | GetTheJobAI',
  description: 'Optimize your resume for remote positions. Highlights async communication and self-management.',
  keywords: ['remote job resume', 'work from home resume', 'distributed team resume'],
}

export default function RemoteJobResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Remote Job Resume Score"
        subtitle="Optimized for remote and distributed team roles"
        placeholder="Paste your resume here..."
        ctaText="Remote job guide"
        ctaHref="/guides/remote-job-search-ai"
        variant="general"
      />
    </div>
  )
}

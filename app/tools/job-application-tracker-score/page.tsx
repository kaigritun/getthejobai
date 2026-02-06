import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job Application Strategy Score | GetTheJobAI',
  description: 'Evaluate your job search strategy. Get feedback on application volume, targeting, follow-up cadence, and optimization opportunities.',
  keywords: ['job application tracker', 'job search strategy', 'application optimization', 'job hunt tracker', 'career search'],
}

export default function JobApplicationTrackerScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Job Application Strategy Score"
        subtitle="Evaluate your job search approach and identify improvements"
        placeholder={`Describe your current job search:

Applications sent this month: 45
Response rate: 8%
Interview conversion: 50%
Target role: Senior Product Manager

Approach:
- Using LinkedIn Easy Apply (60%)
- Direct applications (30%)
- Referrals (10%)

Follow-up strategy: Email after 1 week`}
        ctaText="Job search guide"
        ctaHref="/guides/job-search-strategy"
        variant="general"
      />
    </div>
  )
}

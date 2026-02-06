import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Pivot Score | GetTheJobAI',
  description: 'Evaluate how well you position a career change. Get AI feedback on transferable skills and compelling narrative.',
  keywords: ['career pivot', 'career change', 'transferable skills', 'career transition', 'industry change', 'career switch'],
}

export default function CareerPivotScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Career Pivot Score"
        subtitle="Make your career change story compelling and credible"
        placeholder={`Describe your career pivot:

CURRENT ROLE: Marketing Manager at a B2B SaaS company (5 years)

TARGET ROLE: Product Manager at a tech startup

TRANSFERABLE SKILLS:
- Customer research and user interviews
- Cross-functional team collaboration
- Data analysis and A/B testing
- Roadmap planning for marketing campaigns

WHY THE CHANGE:
I want to be closer to product decisions and directly impact user experience...`}
        ctaText="Career change guide"
        ctaHref="/guides/career-change-resume"
        variant="general"
      />
    </div>
  )
}

import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Gap Explanation Score | GetTheJobAI',
  description: 'Score how well you explain employment gaps. Get feedback on framing and impact.',
  keywords: ['career gap', 'employment gap', 'resume gap', 'gap explanation'],
}

export default function CareerGapScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Career Gap Explanation Score"
        subtitle="Paste your career gap explanation for instant feedback"
        placeholder={`Paste how you explain your career gap...

Example:
During my 18-month career break, I pursued professional development and personal growth. I completed AWS Solutions Architect certification, contributed to 3 open-source projects, and built a portfolio of freelance consulting work with small businesses. I also served as primary caregiver for a family member, developing strong time management and prioritization skills. I'm now energized and ready to bring fresh perspective and updated technical skills to a full-time role.`}
        ctaText="Career transition guide"
        ctaHref="/guides/chatgpt-career-change-prompts"
        variant="general"
      />
    </div>
  )
}

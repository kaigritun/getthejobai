import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance Review Score | GetTheJobAI',
  description: 'Score your self-assessment for performance reviews. Maximize your impact.',
  keywords: ['performance review', 'self assessment', 'annual review', 'employee evaluation'],
}

export default function PerformanceReviewScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Performance Review Score"
        subtitle="Paste your self-assessment for instant feedback"
        placeholder={`Paste your performance review self-assessment...

Example:
Q4 2025 Self-Assessment

Key Accomplishments:
• Led migration to new CRM, completing 2 weeks ahead of schedule and under budget
• Improved team velocity by 23% through process improvements and automation
• Mentored 2 junior engineers, both received promotions
• Reduced customer support tickets by 40% with new knowledge base

Areas of Growth:
• Expanding cross-functional collaboration with marketing team
• Developing presentation skills through Toastmasters

Goals for Next Quarter:
• Lead API redesign project (estimated $200K annual savings)
• Complete leadership training program
• Increase team NPS from 72 to 80`}
        ctaText="Interview prep guide"
        ctaHref="/guides/chatgpt-interview-prompts"
        variant="general"
      />
    </div>
  )
}

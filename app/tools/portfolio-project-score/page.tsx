import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Project Score | GetTheJobAI',
  description: 'Score your portfolio project descriptions. Optimize for recruiter and hiring manager impact.',
  keywords: ['portfolio project', 'project description', 'case study', 'portfolio review'],
}

export default function PortfolioProjectScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Portfolio Project Score"
        subtitle="Paste your project description for instant feedback"
        placeholder={`Paste your portfolio project description...

Example:
E-commerce Checkout Optimization
Redesigned checkout flow for a D2C fashion brand, reducing cart abandonment by 34%.

Challenge: High drop-off at payment step (68% abandonment rate)

Solution: Implemented progressive disclosure form, added trust signals, guest checkout option, and multiple payment methods including Apple Pay.

Results:
• Cart abandonment reduced from 68% to 44%
• Mobile conversion increased 52%
• Average order value up 18%

Tech: React, Stripe API, A/B testing with Optimizely`}
        ctaText="Portfolio building tips"
        ctaHref="/guides/chatgpt-resume-prompts"
        variant="general"
      />
    </div>
  )
}

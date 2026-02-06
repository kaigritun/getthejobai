import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Networking Email Score | GetTheJobAI',
  description: 'Get feedback on your professional networking emails. Optimize cold outreach, informational interview requests, and follow-ups.',
  keywords: ['networking email', 'cold outreach', 'informational interview', 'professional networking', 'linkedin message'],
}

export default function NetworkingEmailScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Networking Email Score"
        subtitle="Optimize your professional outreach for higher response rates"
        placeholder={`Paste your networking email:

Subject: Quick question about product management at Stripe

Hi Sarah,

I came across your profile while researching product leaders in fintech. Your work on Stripe Terminal caught my attention.

I'm a PM at a Series B startup and would love to learn more about the product culture at Stripe. Would you have 15 minutes for a quick call?

Best,
Alex`}
        ctaText="Networking guide"
        ctaHref="/guides/networking-tips"
        variant="general"
      />
    </div>
  )
}

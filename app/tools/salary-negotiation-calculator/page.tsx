import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Salary Negotiation Calculator | GetTheJobAI',
  description: 'Calculate your negotiation leverage and optimal salary ask. Input your offer details and market data for personalized negotiation strategy.',
  keywords: ['salary negotiation', 'salary calculator', 'job offer negotiation', 'compensation calculator', 'salary benchmark'],
}

export default function SalaryNegotiationCalculatorPage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Salary Negotiation Calculator"
        subtitle="Calculate your negotiation leverage and optimal counter-offer"
        placeholder={`Enter your offer details:

Current offer: $120,000
Target salary: $140,000
Years of experience: 5
Industry: Technology
Location: San Francisco
Other offers: Yes (competing offer at $135K)
Current salary: $110,000

Market data (if known):
- Glassdoor range: $115K-$150K`}
        ctaText="Negotiation guide"
        ctaHref="/guides/salary-negotiation"
        variant="general"
      />
    </div>
  )
}

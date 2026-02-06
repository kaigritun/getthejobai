import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Resume Score Calculator | GetTheJobAI',
  description: 'Get instant feedback on your legal resume. Our AI analyzes bar admissions, practice areas, case outcomes, and law firm formatting.',
  keywords: ['legal resume', 'lawyer resume', 'attorney resume', 'law firm resume', 'paralegal resume', 'resume checker'],
}

export default function LegalResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Legal Resume Score"
        subtitle="Get AI feedback on your legal resume"
        placeholder={`Paste your legal resume here...

Example:
MICHAEL CHEN, ESQ.
Corporate Attorney

EXPERIENCE
Associate | White & Case LLP | 2019-Present
• Advised on M&A transactions totaling $3.2B across technology sector
• Led due diligence for 15+ acquisitions, identifying $50M in risk exposure
• Drafted and negotiated complex commercial agreements
• Second-chaired arbitration proceedings resulting in favorable settlement

EDUCATION
JD, Columbia Law School (cum laude)
BA Political Science, Yale University

BAR ADMISSIONS
New York State Bar
California State Bar

SKILLS
M&A, Securities Law, Contract Negotiation, Due Diligence, Westlaw, LexisNexis`}
        ctaText="See our legal career guides"
        ctaHref="/guides/chatgpt-resume-prompts"
        variant="executive"
      />
    </div>
  )
}

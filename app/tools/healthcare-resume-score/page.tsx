import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare Resume Score | GetTheJobAI',
  description: 'Analyze your healthcare resume. Checks for clinical metrics, certifications, and patient care.',
  keywords: ['healthcare resume', 'nursing resume', 'medical resume checker'],
}

export default function HealthcareResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Healthcare Resume Score"
        subtitle="Optimized for clinical and healthcare roles"
        placeholder="Paste your healthcare resume here..."
        ctaText="Healthcare tips"
        ctaHref="/guides/ai-resume-review"
        variant="general"
      />
    </div>
  )
}

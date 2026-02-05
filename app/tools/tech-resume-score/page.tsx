import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tech Resume Score | GetTheJobAI',
  description: 'Analyze your software engineering resume. Checks for tech stack, project metrics, and system ownership.',
  keywords: ["tech resume","software engineer resume","developer resume checker"],
}

export default function TechResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Tech Resume Score"
        subtitle="Optimized for software engineering roles"
        placeholder="Paste your resume here..."
        ctaText="Get more tips"
        ctaHref="/guides/ai-resume-review"
        variant="tech"
      />
    </div>
  )
}

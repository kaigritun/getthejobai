import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interview Answer Score | GetTheJobAI',
  description: 'Score your interview answers. Check for STAR method, specificity, and impact.',
  keywords: ['interview answer checker', 'star method', 'behavioral interview', 'interview practice'],
}

export default function InterviewAnswerScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Interview Answer Score"
        subtitle="Paste your interview answer for instant STAR method feedback"
        placeholder="Paste your interview answer here... (e.g., Tell me about a time you led a project)"
        ctaText="Interview prep guide"
        ctaHref="/guides/chatgpt-interview-prompts"
        variant="general"
      />
    </div>
  )
}

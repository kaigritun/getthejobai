import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interview Weakness Answer Score | GetTheJobAI',
  description: 'Get AI feedback on your "what is your weakness" answer. Learn to frame weaknesses as growth opportunities.',
  keywords: ['interview weakness', 'weakness answer', 'job interview tips', 'behavioral interview', 'interview preparation'],
}

export default function InterviewWeaknessScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Interview Weakness Score"
        subtitle="Turn your weakness answer into a strength demonstration"
        placeholder={`Paste your weakness answer:

My biggest weakness is that I can be overly detail-oriented. In the past, I've spent too much time perfecting small aspects of a project. I've learned to set time limits for tasks and prioritize based on impact. Now I use the 80/20 rule to focus on what matters most while maintaining quality standards.`}
        ctaText="Weakness answer guide"
        ctaHref="/guides/interview-weakness-questions"
        variant="general"
      />
    </div>
  )
}

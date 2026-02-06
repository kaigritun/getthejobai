import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application Follow-Up Score | GetTheJobAI',
  description: 'Get feedback on your job application follow-up emails. Optimize timing, tone, and content for better response rates.',
  keywords: ['follow up email', 'job application follow up', 'hiring manager email', 'application status check', 'interview follow up'],
}

export default function ApplicationFollowupScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Application Follow-Up Score"
        subtitle="Optimize your follow-up emails to stand out and get responses"
        placeholder={`Paste your follow-up email:

Subject: Following up - Senior Engineer application

Hi [Hiring Manager],

I wanted to follow up on my application for the Senior Engineer position submitted last week.

I remain very excited about the opportunity to contribute to your team. Since applying, I've completed a relevant project that demonstrates my skills in distributed systems.

Would you have a few minutes to discuss how I might add value to your engineering team?

Best regards,
[Your name]`}
        ctaText="Follow-up email guide"
        ctaHref="/guides/job-application-follow-up-email"
        variant="general"
      />
    </div>
  )
}

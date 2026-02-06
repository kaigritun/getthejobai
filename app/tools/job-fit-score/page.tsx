import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job Fit Score Calculator | GetTheJobAI',
  description: 'Analyze how well your skills match a job posting. Get AI feedback on keyword alignment, qualification gaps, and application strategy.',
  keywords: ['job fit', 'job match', 'skills gap analysis', 'job qualification checker', 'job compatibility'],
}

export default function JobFitScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Job Fit Score Calculator"
        subtitle="Paste a job description and your skills to see how well you match"
        placeholder={`Paste the job description and your skills below:

JOB DESCRIPTION:
Senior Software Engineer
Requirements:
- 5+ years experience with Python
- Experience with AWS and cloud infrastructure
- Strong communication skills
- Leadership experience

MY SKILLS:
- 6 years Python development
- AWS certified, 3 years cloud experience
- Led team of 4 engineers
- Built microservices architecture`}
        ctaText="Tailoring your resume"
        ctaHref="/guides/tailoring-resume-job-description"
        variant="general"
      />
    </div>
  )
}

import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job Match Score | GetTheJobAI',
  description: 'Compare your resume against a job description. Get AI analysis of skills match, gaps, and optimization tips.',
  keywords: ['job match', 'resume match', 'skills gap', 'job fit analysis', 'ATS optimization', 'keyword match'],
}

export default function JobMatchScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Job Match Score"
        subtitle="See how well your resume matches the job requirements"
        placeholder={`Paste your resume AND the job description (separated by ---):

RESUME:
Software Engineer with 5 years experience in Python, AWS, and React...

---

JOB DESCRIPTION:
We're looking for a Senior Software Engineer with experience in Python, cloud infrastructure, and frontend development...`}
        ctaText="Resume tailoring guide"
        ctaHref="/guides/tailor-resume-to-job"
        variant="general"
      />
    </div>
  )
}

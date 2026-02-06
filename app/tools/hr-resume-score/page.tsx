import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HR Resume Score Calculator | GetTheJobAI',
  description: 'Get instant feedback on your HR resume. Our AI analyzes people skills, HR certifications, metrics, and ATS compatibility.',
  keywords: ['hr resume', 'human resources resume', 'recruiter resume', 'talent acquisition resume', 'resume checker'],
}

export default function HRResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="HR Resume Score"
        subtitle="Get AI feedback on your Human Resources resume"
        placeholder={`Paste your HR resume here...

Example:
SARAH JOHNSON
Human Resources Manager

EXPERIENCE
HR Manager | TechStartup Inc | 2020-Present
• Built recruiting pipeline that reduced time-to-hire from 45 to 21 days
• Implemented HRIS system (Workday) for 500+ employees
• Reduced turnover by 30% through employee engagement initiatives
• Managed $1.5M annual benefits budget

EDUCATION
MBA, Human Resources, UCLA
BA Psychology, UC Berkeley

CERTIFICATIONS
SHRM-SCP
PHR (Professional in Human Resources)

SKILLS
Workday, BambooHR, LinkedIn Recruiter, Employee Relations, Benefits Admin, HRIS`}
        ctaText="See our HR career guides"
        ctaHref="/guides/chatgpt-resume-prompts"
        variant="general"
      />
    </div>
  )
}

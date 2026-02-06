import ResumeScorer from '@/components/tools/ResumeScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engineering Resume Score Calculator | GetTheJobAI',
  description: 'Get instant feedback on your engineering resume. Our AI analyzes technical skills, projects, certifications, and ATS compatibility.',
  keywords: ['engineering resume', 'mechanical engineer resume', 'civil engineer resume', 'electrical engineer resume', 'resume checker'],
}

export default function EngineeringResumeScorePage() {
  return (
    <div className="py-16 px-6">
      <ResumeScorer
        title="Engineering Resume Score"
        subtitle="Get AI feedback on your engineering resume"
        placeholder={`Paste your engineering resume here...

Example:
JANE SMITH, PE
Mechanical Engineer

EXPERIENCE
Senior Mechanical Engineer | EngiCorp | 2019-Present
• Designed HVAC systems for 15 commercial buildings, reducing energy costs by 25%
• Led FEA analysis for product redesign, improving structural integrity by 40%
• Managed $2M equipment procurement and installation projects

EDUCATION
MS Mechanical Engineering, MIT
BS Mechanical Engineering, Georgia Tech

CERTIFICATIONS
Professional Engineer (PE) License
Six Sigma Green Belt

SKILLS
AutoCAD, SolidWorks, ANSYS, MATLAB, FEA, CFD, GD&T`}
        ctaText="See our engineering guides"
        ctaHref="/guides/chatgpt-resume-prompts"
        variant="tech"
      />
    </div>
  )
}

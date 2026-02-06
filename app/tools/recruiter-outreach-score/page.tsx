'use client'

import ScoreTool from '@/components/tools/ScoreTool'

const metadata = {
  title: 'Recruiter Outreach Score | GetTheJobAI',
  description: 'Score your LinkedIn message or email to recruiters. Get feedback on personalization, value proposition, and call-to-action.',
  keywords: ['recruiter message', 'linkedin outreach', 'recruiter email', 'job search networking'],
}

const criteria = [
  {
    id: 'personalization',
    name: 'Personalization',
    weight: 25,
    description: 'Does it reference something specific about them or their company?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasName = /\b(hi|hey|hello|dear)\s+[a-z]+/i.test(text)
      const hasCompany = lower.includes('company') || lower.includes('team') || /at\s+\w+/.test(lower)
      const hasSpecific = lower.includes('noticed') || lower.includes('saw') || lower.includes('impressed') || lower.includes('read')
      
      if (hasName && hasSpecific) return { score: 1, feedback: 'Great personalization with specific details' }
      if (hasName && hasCompany) return { score: 0.7, feedback: 'Good but add something specific you noticed' }
      if (hasName) return { score: 0.4, feedback: 'Add company-specific details' }
      return { score: 0.2, feedback: 'Start with their name and reference something specific' }
    }
  },
  {
    id: 'value',
    name: 'Value Proposition',
    weight: 30,
    description: 'Do you clearly state what you bring to the table?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasExperience = /\d+\s*(years?|yrs?)/.test(lower) || lower.includes('experience')
      const hasSkills = lower.includes('skills') || lower.includes('expertise') || lower.includes('specialize')
      const hasResults = /\d+%/.test(text) || lower.includes('led') || lower.includes('built') || lower.includes('grew')
      
      if (hasResults && hasExperience) return { score: 1, feedback: 'Strong value prop with quantified results' }
      if (hasExperience && hasSkills) return { score: 0.7, feedback: 'Good but add specific achievements' }
      if (hasExperience || hasSkills) return { score: 0.4, feedback: 'Quantify your impact with numbers' }
      return { score: 0.2, feedback: 'Clearly state your experience and key achievements' }
    }
  },
  {
    id: 'relevance',
    name: 'Role Relevance',
    weight: 20,
    description: 'Is it clear what role or type of opportunity you want?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasRole = lower.includes('role') || lower.includes('position') || lower.includes('opportunity')
      const hasTitle = /\b(engineer|manager|designer|developer|analyst|director|lead)\b/i.test(text)
      const hasInterest = lower.includes('interested') || lower.includes('looking') || lower.includes('seeking')
      
      if (hasTitle && hasInterest) return { score: 1, feedback: 'Clear about the role you want' }
      if (hasRole && hasInterest) return { score: 0.7, feedback: 'Add the specific title you\'re targeting' }
      if (hasInterest) return { score: 0.4, feedback: 'Specify the type of role' }
      return { score: 0.2, feedback: 'State what kind of role you\'re looking for' }
    }
  },
  {
    id: 'cta',
    name: 'Call to Action',
    weight: 15,
    description: 'Is there a clear, easy next step?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasCTA = lower.includes('connect') || lower.includes('chat') || lower.includes('call') || lower.includes('meet')
      const hasQuestion = text.includes('?')
      const hasEasy = lower.includes('15 min') || lower.includes('quick') || lower.includes('brief')
      
      if (hasCTA && hasEasy) return { score: 1, feedback: 'Clear, low-commitment ask' }
      if (hasCTA && hasQuestion) return { score: 0.7, feedback: 'Good CTA but make it easier to say yes' }
      if (hasCTA) return { score: 0.5, feedback: 'Add a specific time commitment (e.g., 15 min chat)' }
      return { score: 0.2, feedback: 'End with a clear, easy ask' }
    }
  },
  {
    id: 'length',
    name: 'Length & Clarity',
    weight: 10,
    description: 'Is it concise and easy to read?',
    checkFn: (text: string) => {
      const words = text.split(/\s+/).length
      const sentences = text.split(/[.!?]+/).length
      
      if (words >= 50 && words <= 120) return { score: 1, feedback: 'Perfect length - concise but complete' }
      if (words >= 40 && words <= 150) return { score: 0.7, feedback: 'Good length' }
      if (words < 40) return { score: 0.4, feedback: 'Too short - add more substance' }
      return { score: 0.3, feedback: 'Too long - recruiters skim, keep it under 120 words' }
    }
  }
]

const tipsByScore = [
  { min: 0, max: 39, tips: ['Start with their name and something specific about them or their company', 'Mention 2-3 key achievements with numbers', 'End with a simple ask like "15 minute chat"'] },
  { min: 40, max: 59, tips: ['Add more personalization - what caught your eye about them?', 'Quantify your impact (percentages, dollars, team sizes)', 'Make the next step crystal clear'] },
  { min: 60, max: 79, tips: ['Consider adding a specific project or achievement that matches their company', 'Keep refining your value proposition', 'Test different CTAs to see what gets responses'] },
  { min: 80, max: 100, tips: ['Great message! A/B test small variations', 'Track response rates and iterate', 'Build relationships even when not job hunting'] }
]

export default function RecruiterOutreachScorePage() {
  return (
    <div className="py-16 px-6">
      <ScoreTool
        title="Recruiter Outreach Score"
        subtitle="Paste your LinkedIn message or email to a recruiter"
        placeholder={`Example:

Hi Sarah,

I noticed TechCorp is expanding the payments team - exciting times! I've spent 5 years building payment systems, including leading a migration that processed $50M+ annually with 99.9% uptime.

I'm exploring senior engineering roles and would love to learn more about what you're building. Do you have 15 minutes for a quick chat this week?

Thanks,
John`}
        criteria={criteria}
        tipsByScore={tipsByScore}
        ctaText="See our networking guides"
        ctaHref="/guides/networking-chatgpt-prompts"
      />
    </div>
  )
}

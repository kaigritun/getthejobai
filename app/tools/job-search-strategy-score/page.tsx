'use client'

import ScoreTool from '@/components/tools/ScoreTool'

// Metadata must be in a separate layout.tsx for client components
const metadata = {
  title: 'Job Search Strategy Score | GetTheJobAI',
  description: 'Evaluate your job search strategy. Get feedback on targeting, channels, networking, and daily activities.',
  keywords: ['job search strategy', 'job hunting tips', 'job search plan', 'career planning'],
}

const criteria = [
  {
    id: 'targeting',
    name: 'Role Targeting',
    weight: 25,
    description: 'How specific is your target role and company list?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasTitle = /\b(engineer|manager|designer|developer|analyst|director|lead|specialist)\b/i.test(text)
      const hasIndustry = lower.includes('industry') || lower.includes('startup') || lower.includes('enterprise') || lower.includes('saas') || lower.includes('tech')
      const hasCompanyList = lower.includes('target companies') || lower.includes('company list') || /\d+\s*companies/.test(lower)
      const hasLevel = lower.includes('senior') || lower.includes('junior') || lower.includes('mid') || lower.includes('entry')
      
      if (hasTitle && hasIndustry && (hasCompanyList || hasLevel)) return { score: 1, feedback: 'Excellent targeting specificity' }
      if (hasTitle && (hasIndustry || hasLevel)) return { score: 0.7, feedback: 'Good but add a target company list' }
      if (hasTitle) return { score: 0.4, feedback: 'Add industry preference and seniority level' }
      return { score: 0.2, feedback: 'Define specific role titles, industries, and company types' }
    }
  },
  {
    id: 'channels',
    name: 'Multi-Channel Approach',
    weight: 20,
    description: 'Are you using multiple job search channels?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const channels = [
        lower.includes('linkedin'),
        lower.includes('indeed') || lower.includes('job board'),
        lower.includes('network') || lower.includes('referral'),
        lower.includes('company career') || lower.includes('direct'),
        lower.includes('recruiter'),
        lower.includes('meetup') || lower.includes('event')
      ].filter(Boolean).length
      
      if (channels >= 4) return { score: 1, feedback: `Great - using ${channels} channels` }
      if (channels >= 3) return { score: 0.7, feedback: 'Good multi-channel approach' }
      if (channels >= 2) return { score: 0.5, feedback: 'Add more channels - referrals are most effective' }
      return { score: 0.2, feedback: 'Diversify: LinkedIn, referrals, direct applications, recruiters' }
    }
  },
  {
    id: 'networking',
    name: 'Networking Plan',
    weight: 25,
    description: 'Do you have a networking strategy?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasOutreach = lower.includes('reach out') || lower.includes('connect') || lower.includes('coffee chat') || lower.includes('informational')
      const hasReferral = lower.includes('referral') || lower.includes('introduction') || lower.includes('warm intro')
      const hasNumber = /\d+\s*(people|connections|outreach|messages)/.test(lower)
      
      if (hasReferral && hasNumber) return { score: 1, feedback: 'Strong networking strategy with targets' }
      if (hasOutreach && hasReferral) return { score: 0.8, feedback: 'Good plan - add weekly targets' }
      if (hasOutreach || hasReferral) return { score: 0.5, feedback: 'Add specific outreach targets (e.g., 10 people/week)' }
      return { score: 0.2, feedback: '80% of jobs come from networking - add an outreach plan' }
    }
  },
  {
    id: 'dailyActivities',
    name: 'Daily Activities',
    weight: 20,
    description: 'Do you have structured daily activities?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasDaily = lower.includes('daily') || lower.includes('every day') || lower.includes('each day')
      const hasNumber = /\d+\s*(application|hour|minute|outreach)/.test(lower)
      const hasRoutine = lower.includes('morning') || lower.includes('schedule') || lower.includes('routine') || lower.includes('block')
      
      if (hasDaily && hasNumber && hasRoutine) return { score: 1, feedback: 'Excellent - structured daily routine' }
      if (hasDaily && hasNumber) return { score: 0.7, feedback: 'Good targets - consider time blocking' }
      if (hasDaily || hasNumber) return { score: 0.4, feedback: 'Add specific daily targets (applications, outreach)' }
      return { score: 0.2, feedback: 'Define daily activities: X applications, Y outreach messages' }
    }
  },
  {
    id: 'tracking',
    name: 'Tracking System',
    weight: 10,
    description: 'How are you tracking applications and follow-ups?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasTracking = lower.includes('track') || lower.includes('spreadsheet') || lower.includes('notion') || lower.includes('airtable') || lower.includes('trello')
      const hasFollowUp = lower.includes('follow up') || lower.includes('follow-up')
      
      if (hasTracking && hasFollowUp) return { score: 1, feedback: 'Great - tracking with follow-up system' }
      if (hasTracking) return { score: 0.7, feedback: 'Add follow-up reminders to your system' }
      return { score: 0.3, feedback: 'Track all applications and set follow-up reminders' }
    }
  }
]

const tipsByScore = [
  { min: 0, max: 39, tips: ['Define your target: specific roles, industries, and 20-30 target companies', 'Create a daily routine: 5 applications + 5 networking messages', 'Set up a tracking spreadsheet with follow-up dates'] },
  { min: 40, max: 59, tips: ['Focus more on networking - it has 5x the success rate of applications', 'Add time blocks to your calendar for job search activities', 'Track conversion rates to optimize your approach'] },
  { min: 60, max: 79, tips: ['Great foundation! Consider adding recruiter relationships', 'Optimize your LinkedIn for inbound opportunities', 'Follow up on all applications after 1 week'] },
  { min: 80, max: 100, tips: ['Excellent strategy! Stay consistent with execution', 'Analyze what\'s working and double down', 'Help others in your network - it often comes back'] }
]

export default function JobSearchStrategyScorePage() {
  return (
    <div className="py-16 px-6">
      <ScoreTool
        title="Job Search Strategy Score"
        subtitle="Describe your current job search strategy"
        placeholder={`Example:

I'm targeting Senior Product Manager roles at B2B SaaS companies (50-500 employees). I have a list of 30 target companies.

Channels:
- LinkedIn: optimized profile, applying to posted roles
- Networking: reaching out to 10 people/week for coffee chats
- Referrals: asking connections for intros to hiring managers
- Direct: applying through company career pages

Daily routine:
- 2 hours/day dedicated to job search (9-11am)
- 3 tailored applications
- 5 LinkedIn outreach messages
- 1 follow-up on pending applications

I track everything in Notion with follow-up reminders.`}
        criteria={criteria}
        tipsByScore={tipsByScore}
        ctaText="See our job search guides"
        ctaHref="/guides/chatgpt-job-search-prompts"
      />
    </div>
  )
}

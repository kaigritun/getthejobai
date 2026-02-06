'use client'

import ScoreTool from '@/components/tools/ScoreTool'

const metadata = {
  title: 'Thank You Note Score | GetTheJobAI',
  description: 'Score your post-interview thank you email. Get feedback on personalization, enthusiasm, and follow-up strategy.',
  keywords: ['thank you email', 'interview follow up', 'post interview email', 'thank you note after interview'],
}

const criteria = [
  {
    id: 'timing',
    name: 'Urgency Signal',
    weight: 15,
    description: 'Does it reference sending promptly?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasTimely = lower.includes('today') || lower.includes('earlier') || lower.includes('this morning') || lower.includes('this afternoon')
      
      if (hasTimely) return { score: 1, feedback: 'Good - references the recent conversation' }
      return { score: 0.5, feedback: 'Add a time reference (e.g., "following our conversation this morning")' }
    }
  },
  {
    id: 'personalization',
    name: 'Personalization',
    weight: 25,
    description: 'Does it reference specific discussion points?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasDiscussion = lower.includes('discussed') || lower.includes('mentioned') || lower.includes('talked about') || lower.includes('conversation about')
      const hasSpecific = lower.includes('project') || lower.includes('challenge') || lower.includes('initiative') || lower.includes('team')
      const hasQuote = text.includes('"') || lower.includes('you said') || lower.includes('you mentioned')
      
      if (hasDiscussion && hasSpecific && hasQuote) return { score: 1, feedback: 'Excellent - specific details from the conversation' }
      if (hasDiscussion && hasSpecific) return { score: 0.8, feedback: 'Good personalization' }
      if (hasDiscussion) return { score: 0.5, feedback: 'Add specific topics or projects discussed' }
      return { score: 0.2, feedback: 'Reference something specific from your interview' }
    }
  },
  {
    id: 'enthusiasm',
    name: 'Enthusiasm',
    weight: 20,
    description: 'Does it convey genuine interest?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasExcited = lower.includes('excited') || lower.includes('enthusiasm') || lower.includes('eager')
      const hasInterest = lower.includes('interested') || lower.includes('looking forward') || lower.includes('can\'t wait')
      const hasWhy = lower.includes('because') || lower.includes('especially') || lower.includes('particularly')
      
      if ((hasExcited || hasInterest) && hasWhy) return { score: 1, feedback: 'Genuine enthusiasm with reasons' }
      if (hasExcited || hasInterest) return { score: 0.6, feedback: 'Good but explain WHY you\'re excited' }
      return { score: 0.3, feedback: 'Express enthusiasm about the role or company' }
    }
  },
  {
    id: 'value',
    name: 'Value Add',
    weight: 25,
    description: 'Does it reinforce what you bring?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasContribute = lower.includes('contribute') || lower.includes('bring') || lower.includes('help') || lower.includes('add')
      const hasSkills = lower.includes('experience') || lower.includes('skills') || lower.includes('background')
      const hasResults = /\d+/.test(text) || lower.includes('successfully') || lower.includes('achieved')
      
      if (hasContribute && hasResults) return { score: 1, feedback: 'Strong - reinforces your value with specifics' }
      if (hasContribute && hasSkills) return { score: 0.7, feedback: 'Good but add a specific achievement' }
      if (hasContribute) return { score: 0.4, feedback: 'Tie your experience to their needs' }
      return { score: 0.2, feedback: 'Briefly reinforce how your skills match their needs' }
    }
  },
  {
    id: 'closing',
    name: 'Professional Close',
    weight: 15,
    description: 'Is the closing appropriate?',
    checkFn: (text: string) => {
      const lower = text.toLowerCase()
      const hasNextStep = lower.includes('next step') || lower.includes('hear from you') || lower.includes('looking forward')
      const hasAvailable = lower.includes('available') || lower.includes('reach out') || lower.includes('questions')
      const hasThanks = lower.includes('thank') || lower.includes('grateful') || lower.includes('appreciate')
      
      if (hasThanks && hasNextStep) return { score: 1, feedback: 'Professional close with clear interest' }
      if (hasThanks && hasAvailable) return { score: 0.8, feedback: 'Good professional close' }
      if (hasThanks) return { score: 0.5, feedback: 'Add a line about next steps or availability' }
      return { score: 0.2, feedback: 'Close with thanks and openness to next steps' }
    }
  }
]

const tipsByScore = [
  { min: 0, max: 39, tips: ['Send within 24 hours of your interview', 'Reference 2-3 specific things discussed', 'Briefly reinforce why you\'re a great fit'] },
  { min: 40, max: 59, tips: ['Add more specific details from the conversation', 'Express genuine enthusiasm with reasons why', 'Mention something you can contribute'] },
  { min: 60, max: 79, tips: ['Consider referencing a follow-up thought or resource', 'Make sure enthusiasm feels authentic, not generic', 'Keep it concise - 3-4 paragraphs max'] },
  { min: 80, max: 100, tips: ['Great thank you note!', 'Send to each interviewer with personalized details', 'Follow up if you haven\'t heard back in a week'] }
]

export default function ThankYouNoteScorePage() {
  return (
    <div className="py-16 px-6">
      <ScoreTool
        title="Thank You Note Score"
        subtitle="Paste your post-interview thank you email"
        placeholder={`Example:

Hi Alex,

Thank you for taking the time to speak with me this morning about the Senior Product Manager role at TechCorp.

I really enjoyed our discussion about the challenges with user onboarding - the "aha moment" framework you mentioned resonated with how I approached similar problems at my current role. When we reduced time-to-value by 40%, it was exactly that kind of focus on early user wins.

I'm excited about the opportunity to bring my B2B SaaS experience to help tackle your growth challenges, especially given your expansion plans you shared.

Thank you again for your time. I look forward to hearing about next steps.

Best,
John`}
        criteria={criteria}
        tipsByScore={tipsByScore}
        ctaText="See our interview guides"
        ctaHref="/guides/chatgpt-interview-prompts"
      />
    </div>
  )
}

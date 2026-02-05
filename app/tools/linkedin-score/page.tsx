import LinkedInScorer from '@/components/tools/LinkedInScorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Profile Score | GetTheJobAI',
  description: 'Analyze your LinkedIn profile. Get feedback on headline, about section, keywords, and personal brand.',
  keywords: ['linkedin profile score', 'linkedin checker', 'linkedin optimization', 'linkedin analyzer'],
}

export default function LinkedInScorePage() {
  return <div className="py-16 px-6"><LinkedInScorer /></div>
}

import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Executive Job Search: C-Suite and VP-Level Strategies | GetTheJobAI',
  description: 'Executive job search strategies using AI. Build thought leadership, work the hidden job market, and prepare for board-level interviews.',
  keywords: ['executive job search', 'c-suite job search', 'vp job search ai', 'executive recruiter', 'board interview prep'],
}

export default function AIExecutiveJobSearchPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link 
          href="/guides" 
          className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article className="prose-custom">
          <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Executive
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI-Powered Executive Job Search: C-Suite and VP-Level Strategies
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Executive job searches are a different game. You&apos;re not applying to job boards—you&apos;re 
            being recruited or making strategic connections. Here&apos;s how AI supercharges the executive 
            job search process.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Executive Job Search Is Different</h2>
              <p className="text-white/70 mb-4">At the VP and C-suite level:</p>
              <ul className="space-y-2 text-white/70">
                <li>• 70%+ of roles are never posted publicly</li>
                <li>• Relationships and reputation drive opportunities</li>
                <li>• Recruiters find you, not the other way around</li>
                <li>• Board connections and investor networks matter</li>
                <li>• Your digital presence is heavily scrutinized</li>
              </ul>
              <p className="text-white/50 mt-4 text-sm">
                AI helps you work these channels more effectively while maintaining the polish expected at senior levels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Building Your Executive Brand with AI</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Thought Leadership Content</h3>
              <p className="text-white/70 mb-4">Use ChatGPT to develop a content strategy:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/50 mb-2">Prompt:</p>
                <p className="text-white/80 font-mono text-sm">
                  I&apos;m a [title] in [industry] with expertise in [areas]. Help me create a 
                  3-month thought leadership content plan for LinkedIn that positions me 
                  as an expert in [specific trend/topic]. Include weekly post topics, 
                  2 long-form articles per month, key themes, and engagement strategy.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">LinkedIn Profile Optimization</h3>
              <p className="text-white/70 mb-4">Your profile needs to speak to boards, investors, and executive recruiters:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/50 mb-2">Prompt:</p>
                <p className="text-white/80 font-mono text-sm">
                  Rewrite my LinkedIn summary for a [title] targeting [next role]. Make it 
                  lead with measurable business impact, include relevant keywords for 
                  executive search, sound confident but not arrogant, end with a clear 
                  value proposition, and keep it under 300 words.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Executive Bio Development</h3>
              <p className="text-white/70 mb-4">You need multiple bio versions—AI makes maintaining them easy:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/50 mb-2">Prompt:</p>
                <p className="text-white/80 font-mono text-sm">
                  Create 3 versions of my executive bio: 1) Formal board bio (150 words) 
                  for board materials and investor decks, 2) Conference speaker bio (100 words) 
                  for event programs, 3) Media bio (75 words) for press releases.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Working the Hidden Job Market</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Identifying Target Companies</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/50 mb-2">Prompt:</p>
                <p className="text-white/80 font-mono text-sm">
                  I&apos;m seeking a [target role] in [industry]. Help me identify: 20 companies 
                  that recently raised Series B-D funding, signs a company might need a 
                  [your function] leader, key executives I should connect with at each, 
                  and recent news that creates an opening conversation.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Warm Introduction Requests</h3>
              <p className="text-white/70 mb-4">Never cold-connect. Use AI to craft introduction requests:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/50 mb-2">Prompt:</p>
                <p className="text-white/80 font-mono text-sm">
                  Write a message asking [mutual connection] to introduce me to [target person] 
                  at [company]. I want to discuss [topic, not job]. Keep it under 100 words, 
                  specific about why this connection makes sense, easy for them to forward, 
                  and not directly asking for a job.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Executive Recruiter Outreach</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/50 mb-2">Prompt:</p>
                <p className="text-white/80 font-mono text-sm">
                  Write an email to an executive recruiter at [firm] introducing myself as a 
                  [current title] open to [target roles]. Include brief background (2 sentences), 
                  what I&apos;m looking for (specific, not desperate), why I&apos;m reaching out to them 
                  specifically. Tone: confident peer, not job seeker.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Interview Preparation at the Executive Level</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Board and Investor Questions</h3>
              <p className="text-white/70 mb-4">Executive interviews include strategic questions:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/50 mb-2">Prompt:</p>
                <p className="text-white/80 font-mono text-sm">
                  I&apos;m interviewing for [role] at [company type]. Generate 15 board-level 
                  interview questions about: strategic vision and execution, team building 
                  and culture, financial acumen and P&L management, crisis management and 
                  pivots, board and investor relations. Then provide framework answers for each.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Case Study Preparation</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/50 mb-2">Prompt:</p>
                <p className="text-white/80 font-mono text-sm">
                  I need to present a 30-minute case study on [topic] for my [role] interview. 
                  Help me structure: situation analysis framework, key metrics I should address, 
                  strategic recommendations structure, anticipated tough questions, and data I 
                  should request beforehand.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Compensation Negotiation</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/50 mb-2">Prompt:</p>
                <p className="text-white/80 font-mono text-sm">
                  I&apos;m negotiating a [title] offer with base $X, bonus Y%, equity Z shares. 
                  Help me: identify what&apos;s negotiable vs standard, calculate total comp scenarios, 
                  prepare counter-offer language, anticipate their responses, and know my 
                  walk-away points.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Due Diligence on Opportunities</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Company Research Deep Dive</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/50 mb-2">Prompt:</p>
                <p className="text-white/80 font-mono text-sm">
                  I&apos;m considering a [role] at [company]. Do a deep analysis: business model 
                  and competitive position, recent funding/revenue trends/runway, leadership 
                  team backgrounds and tenure, Glassdoor/Blind sentiment from executives, 
                  recent press (good and concerning), board composition and investor quality, 
                  red flags I should investigate.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Culture Assessment</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/50 mb-2">Prompt:</p>
                <p className="text-white/80 font-mono text-sm">
                  Based on these signals about [company]: CEO background, recent executive 
                  departures, company values stated, Glassdoor executive reviews, LinkedIn 
                  posts from leadership. Analyze the likely executive culture. What questions 
                  should I ask to validate my hypotheses?
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <span><strong>Executive search is relationship-driven</strong> — AI helps you maintain more relationships at higher quality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <span><strong>Your brand precedes you</strong> — Use AI to build consistent thought leadership</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <span><strong>Due diligence is critical</strong> — Research deeply before committing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  <span><strong>Negotiations are complex</strong> — Model scenarios before conversations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5.</span>
                  <span><strong>Stay warm, not cold</strong> — AI enables systematic but personal networking</span>
                </li>
              </ul>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold mb-4">Related Guides</h2>
              <div className="grid gap-4">
                <Link href="/guides/linkedin-ai-optimization" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-emerald-400 font-semibold">AI for LinkedIn Optimization</span>
                  <p className="text-white/50 text-sm mt-1">Build your executive presence</p>
                </Link>
                <Link href="/guides/ai-salary-negotiation" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-emerald-400 font-semibold">AI Salary Negotiation</span>
                  <p className="text-white/50 text-sm mt-1">Master complex comp discussions</p>
                </Link>
                <Link href="/guides/ai-company-research" className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span className="text-emerald-400 font-semibold">AI Company Research</span>
                  <p className="text-white/50 text-sm mt-1">Due diligence frameworks</p>
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'ai-networking-emails',
                              title: 'Networking Emails',
                              description: 'Executive-level networking outreach.'
                    },
                    {
                              slug: 'ai-salary-negotiation',
                              title: 'Salary Negotiation',
                              description: 'Negotiate executive compensation.'
                    },
                    {
                              slug: 'linkedin-ai-optimization',
                              title: 'LinkedIn Optimization',
                              description: 'Executive LinkedIn presence.'
                    }
          ]} />
        </article>
    </div>
  )
}

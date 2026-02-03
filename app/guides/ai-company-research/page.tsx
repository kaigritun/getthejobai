import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Using AI to Research Companies Before Your Interview | GetTheJobAI',
  description: 'Use AI to research companies before interviews. Prompts for company overview, culture analysis, interviewer research, and Glassdoor deep dives.',
  keywords: ['research company before interview', 'ai interview prep', 'company research for interview', 'interview preparation'],
}

export default function AICompanyResearchPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg hover:text-emerald-400 transition-colors">
            GetTheJobAI
          </Link>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
            <Link href="/prompts" className="hover:text-white transition-colors">Prompts</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link 
          href="/guides" 
          className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article className="prose-custom">
          <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Interview
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Using AI to Research Companies Before Your Interview
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Company research used to take hours. AI compresses it into 20 minutes. Here&apos;s how to walk into any interview more prepared than 90% of candidates.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">What You Need to Know Before Any Interview</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Company Basics</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• What do they actually do?</li>
                    <li>• Who are their customers?</li>
                    <li>• How do they make money?</li>
                    <li>• What&apos;s their competitive advantage?</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Recent Context</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Recent news (funding, acquisitions)?</li>
                    <li>• New products launched?</li>
                    <li>• Leadership changes?</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Culture Signals</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• What do employees say on Glassdoor?</li>
                    <li>• What does their careers page emphasize?</li>
                    <li>• How do they talk about work on LinkedIn?</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Role-Specific</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Why is this position open?</li>
                    <li>• What challenges is the team facing?</li>
                    <li>• What does success look like in 90 days?</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Company Overview Prompt</h2>
              <p className="text-white/70 mb-4">
                Start with the basics:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Give me a comprehensive overview of [COMPANY] including:
1. What they do in simple terms
2. Their business model (how they make money)
3. Main competitors and how they differentiate
4. Company size and growth trajectory
5. Recent news or developments (last 12 months)
6. Any red flags I should know about

I'm interviewing for [POSITION] there.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Deep Dive on the Role</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm interviewing for [POSITION] at [COMPANY].

Based on typical responsibilities for this role and what I can find about the company:
1. What are the likely top priorities for this position?
2. What challenges might someone in this role face?
3. What skills or experiences would they value most?
4. What questions might they ask about my background?

Help me understand what success looks like for this role.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Interviewer Research</h2>
              <p className="text-white/70 mb-4">
                If you know who you&apos;re meeting with:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm interviewing with [INTERVIEWER NAME], [TITLE] at [COMPANY].

Help me prepare by:
1. Understanding their likely background and priorities
2. Suggesting topics they might care about based on their role
3. Identifying potential connection points (shared experiences, interests)
4. Preparing thoughtful questions I could ask them

Keep it professional—I want to build rapport, not seem like I stalked them.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Glassdoor Deep Dive</h2>
              <p className="text-white/70 mb-4">
                Copy a few Glassdoor reviews and analyze them:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Here are recent Glassdoor reviews for [COMPANY]:

[Paste 3-5 reviews]

Analyze these for:
1. Recurring themes (positive and negative)
2. What employees consistently praise
3. Common complaints or red flags
4. What this suggests about the culture
5. Questions I should ask to verify these patterns`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Build Your Research Cheat Sheet</h2>
              <p className="text-white/70 mb-4">
                Create a one-page document you can review before the interview:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-white/90 text-sm whitespace-pre-wrap">{`COMPANY AT A GLANCE:
• [One sentence: what they do]
• [Founded/HQ/Size]
• [Recent milestone or news]

WHY I WANT TO WORK HERE:
• [Genuine reason 1]
• [Genuine reason 2]

THEIR LIKELY PRIORITIES:
• [Priority 1 based on research]
• [Priority 2 based on research]

QUESTIONS TO ASK:
• [Thoughtful question about the team]
• [Question about a recent development]
• [Question about growth/success metrics]

THINGS TO AVOID:
• [Any sensitive topics from Glassdoor]
• [Recent negative news to handle carefully]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Advanced Research Prompts</h2>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Tech Stack (for technical roles)</p>
                  <p className="text-white/70 text-sm">&ldquo;What technology stack does [COMPANY] likely use based on their job postings, engineering blog, or public information? I&apos;m interviewing for [ROLE].&rdquo;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Customer Understanding</p>
                  <p className="text-white/70 text-sm">&ldquo;Who are [COMPANY&apos;s] ideal customers? What problems do they solve for them? Give me specific examples so I can speak intelligently about their market.&rdquo;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Culture Fit Prep</p>
                  <p className="text-white/70 text-sm">&ldquo;Based on [COMPANY&apos;s] values page and public messaging, what culture-fit questions might they ask? How should I frame my answers to align with what they value?&rdquo;</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Questions That Show You Did Your Homework</h2>
              <p className="text-white/70 mb-4">
                Generic questions signal lazy research. These show you actually prepared:
              </p>
              <div className="space-y-3">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <p className="text-sm text-red-400">Instead of: &ldquo;Tell me about the company culture&rdquo;</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                  <p className="text-sm text-emerald-400">Ask: &ldquo;I noticed on Glassdoor that employees mention fast pace and high autonomy. How does the team balance moving quickly with avoiding burnout?&rdquo;</p>
                </div>
              </div>
              <div className="space-y-3 mt-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <p className="text-sm text-red-400">Instead of: &ldquo;What&apos;s the growth trajectory?&rdquo;</p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                  <p className="text-sm text-emerald-400">Ask: &ldquo;I saw you raised Series B last year. How has that changed the team&apos;s priorities or the role I&apos;m interviewing for?&rdquo;</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Time Budget: 20-30 Minutes</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">5 min</span>
                  Company overview prompt
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5 min</span>
                  Role-specific deep dive
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5 min</span>
                  Interviewer research
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5 min</span>
                  Glassdoor analysis
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5 min</span>
                  Build your cheat sheet
                </li>
              </ul>
              <p className="text-white/50 text-sm mt-4">
                That&apos;s it. You&apos;ll walk in more prepared than 90% of candidates.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">The Payoff</h2>
              <p className="text-white/70 mb-4">
                Good research does three things:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <strong className="text-white">Confidence:</strong> You know what you&apos;re talking about
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <strong className="text-white">Better answers:</strong> You can connect your experience to their specific needs
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <strong className="text-white">Better questions:</strong> You ask things that show genuine interest
                </li>
              </ul>
              <p className="text-white/70 mt-4">
                Companies want candidates who want <em>them</em>, not just any job. Twenty minutes of AI-powered research is the difference between a forgettable interview and an offer.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-interview-prep"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Interview Prep →
                </Link>
                <Link 
                  href="/guides/ai-interview-followup"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Interview Follow-Ups →
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-sm text-white/40">
            © 2025 GetTheJobAI. Helping job seekers use AI effectively.
          </p>
        </div>
      </footer>
    </div>
  )
}

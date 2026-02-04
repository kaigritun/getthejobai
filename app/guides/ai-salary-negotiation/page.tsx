import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Salary Negotiation: Scripts, Prompts & Strategies | GetTheJobAI',
  description: 'Use ChatGPT to prepare for salary negotiations. Get scripts, handle objections, run mock negotiations, and negotiate confidently.',
  keywords: ['ai salary negotiation', 'chatgpt salary negotiation', 'salary negotiation scripts', 'negotiate salary ai'],
}

export default function AISalaryNegotiationPage() {
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
            Career Growth
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Salary Negotiation: Scripts, Prompts, and Strategies That Work
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Negotiating salary is uncomfortable. Use AI to prepare for every objection, 
            craft your scripts, and run mock negotiations until you&apos;re confident.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why AI Changes Salary Negotiation</h2>
              <p className="text-white/70 mb-4">
                The #1 reason people fail at negotiation: they&apos;re unprepared. They don&apos;t know 
                what to say when the hiring manager says &quot;that&apos;s above our budget.&quot;
              </p>
              <p className="text-white/70 mb-4">AI solves this by:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Generating scripts</strong> you can practice until they feel natural
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Predicting objections</strong> and crafting responses for each one
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Running mock negotiations</strong> so you&apos;ve heard &quot;no&quot; 20 times before the real conversation
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Researching market rates</strong> so you anchor confidently
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Research Your Market Value</h2>
              <p className="text-white/70 mb-4">Before any negotiation, you need data:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [your title] with [X years] experience in [industry] in [city/region]. My key skills include [list 3-5 skills]. I'm negotiating salary for a [target role] at a [company size] company.

Help me research:
1. Salary range for this role in my market (low/median/high)
2. What factors would put me at the high end vs. low end
3. Additional compensation to negotiate (bonus, equity, benefits)
4. 3 specific data points I can cite in negotiation`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Pro tip:</strong> Cross-reference with Glassdoor, 
                Levels.fyi (for tech), and LinkedIn Salary Insights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Define Your Numbers</h2>
              <p className="text-white/70 mb-4">Every negotiation needs three numbers:</p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <strong>Target:</strong> What you actually want
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <strong>Anchor:</strong> First number you state (10-15% above target)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <strong>Walk-away:</strong> The minimum you&apos;d accept
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on this market research [paste research], help me define:
1. My target salary
2. My anchor number (what I should initially ask for)
3. My walk-away point
4. Reasoning I can use to justify my anchor

Context: [Current salary, competing offers, unique qualifications]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Craft Your Initial Response</h2>
              <p className="text-white/70 mb-4">When they make an offer, don&apos;t react. Use a prepared script:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`The company offered me $[X]. I'm targeting $[Y]. Write me a professional, warm response that:
1. Expresses genuine enthusiasm about the role
2. Asks if there's flexibility on compensation
3. Doesn't reveal my exact number yet
4. Keeps the door open for discussion

Keep it conversational, not corporate.`}</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-sm text-emerald-400 mb-2 font-mono">EXAMPLE OUTPUT</p>
                <p className="text-white/80 text-sm italic">
                  &quot;I&apos;m really excited about this opportunity—the team, the mission, everything we 
                  discussed aligns perfectly. I do want to be transparent: based on my research 
                  and what I&apos;d be bringing to the role, I was expecting something a bit higher. 
                  Is there flexibility on the compensation?&quot;
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Handle Every Objection</h2>
              <p className="text-white/70 mb-4">This is where AI shines. Generate responses to every possible pushback:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm negotiating for $[target]. Generate responses to these common objections:

1. "That's above our budget for this role."
2. "We don't negotiate starting salaries."
3. "You'd be at the top of our pay band."
4. "Can you justify that number?"
5. "We can revisit compensation after 6 months."
6. "That's more than people with more experience make here."

For each: give me 2-3 response options ranging from firm to flexible.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 5: Run Mock Negotiations</h2>
              <p className="text-white/70 mb-4">This is the secret weapon. Practice until the real thing feels easy:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Let's do a mock salary negotiation. You play the hiring manager for [company type] hiring a [role]. Be realistic—push back, use common objections, test my responses. I'll negotiate. After each exchange, briefly coach me on what I did well and what I could improve.

Start by making me an offer of $[below my target].`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Run this 5-10 times.</strong> By the end, you&apos;ll have heard 
                every objection and practiced your responses until they&apos;re automatic.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 6: Negotiate Beyond Base Salary</h2>
              <p className="text-white/70 mb-4">If base salary is stuck, expand the conversation:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`The company won't budge on base salary ($[X]). Help me negotiate these alternatives:
1. Signing bonus
2. Annual bonus target increase
3. Extra PTO days
4. Equity/stock options
5. Earlier performance review
6. Remote work flexibility
7. Professional development budget
8. Title upgrade

For each, give me the ask and the justification.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Real Numbers: What&apos;s Negotiable</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <strong>Signing bonus:</strong> $5K-25K mid-level, $25K-100K+ senior/exec
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <strong>Extra PTO:</strong> 5-10 additional days is common
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <strong>Early review:</strong> 6 months instead of 12, with defined raise criteria
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <strong>Remote work:</strong> 1-2 extra days per week
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <strong>Dev budget:</strong> $2K-10K/year for conferences, courses, certifications
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Sample Conversation Flow</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-4">
                <div>
                  <p className="text-white/50 text-sm">Them:</p>
                  <p className="text-white/80">&quot;We&apos;d like to offer you $95,000.&quot;</p>
                </div>
                <div>
                  <p className="text-emerald-400 text-sm">You:</p>
                  <p className="text-white/80">&quot;Thank you—I&apos;m genuinely excited about this role. Based on my research and the specific experience I&apos;d bring, I was targeting $115,000. Is there flexibility on the compensation?&quot;</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm">Them:</p>
                  <p className="text-white/80">&quot;That&apos;s higher than our budget. We could maybe do $100,000.&quot;</p>
                </div>
                <div>
                  <p className="text-emerald-400 text-sm">You:</p>
                  <p className="text-white/80">&quot;I appreciate you working with me. If $115K isn&apos;t possible, could we look at the total package? A signing bonus to bridge the gap, or perhaps an accelerated review at 6 months with clear criteria for adjustment?&quot;</p>
                </div>
                <div>
                  <p className="text-white/50 text-sm">Them:</p>
                  <p className="text-white/80">&quot;We could do a $10K signing bonus.&quot;</p>
                </div>
                <div>
                  <p className="text-emerald-400 text-sm">You:</p>
                  <p className="text-white/80">&quot;That helps. If we can also add 3 extra PTO days and lock in a 6-month review, I&apos;d be ready to accept.&quot;</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Psychology of Negotiation</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <strong>Silence is power.</strong> After stating your number, stop talking. Let them respond.
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <strong>Enthusiasm is leverage.</strong> Genuine excitement makes them want to close you.
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <strong>Options create confidence.</strong> Even a theoretical other offer changes your posture.
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  <strong>They expect negotiation.</strong> Offers have buffer built in. Not negotiating leaves money on the table.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Start Your Negotiation Today</h2>
              <p className="text-white/70 mb-4">
                Copy the prompts above. Run the mock negotiation at least 5 times. Go into your 
                next salary conversation knowing exactly what you&apos;ll say to every possible response.
              </p>
              <p className="text-white/70">
                The people who negotiate earn <strong className="text-emerald-400">$500K+ more</strong> over their careers 
                than those who don&apos;t. AI just made becoming a negotiator easier than ever.
              </p>
            </section>
          </div>
        </article>

        <RelatedGuides 
          guides={[
            { slug: 'ai-interview-prep', title: 'AI Interview Preparation', description: 'Practice interview questions with AI coaching and feedback.' },
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Copy-paste prompts to improve your resume with AI.' },
            { slug: 'ai-career-pivot', title: 'AI Career Pivot Guide', description: 'Use AI to plan and execute your career transition.' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 py-8 px-6 mt-16">
        <div className="max-w-3xl mx-auto text-center text-white/40 text-sm">
          © 2025 GetTheJobAI. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

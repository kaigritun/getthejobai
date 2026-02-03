import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use AI for Salary Negotiation (Scripts That Work) | GetTheJobAI',
  description: 'Use ChatGPT to research market rates, generate negotiation scripts, and prepare for every objection. Get the salary you deserve.',
  keywords: ['salary negotiation AI', 'ChatGPT salary negotiation', 'negotiate salary with AI', 'AI salary research'],
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
            Salary
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Use AI for Salary Negotiation (Scripts That Actually Work)
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Most people leave money on the table during salary negotiations. Not because they&apos;re bad negotiators—because they&apos;re unprepared. AI changes that.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why AI Makes You a Better Negotiator</h2>
              <p className="text-white/70 mb-4">
                Salary negotiation is an information game. The side with better information wins. AI gives you:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Market data synthesis</strong> - Process salary ranges from multiple sources instantly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Script generation</strong> - Get word-for-word responses to tough questions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Objection handling</strong> - Prepare for every possible pushback</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Confidence through preparation</strong> - Know exactly what to say before you say it</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Research Your Market Value</h2>
              <p className="text-white/70 mb-4">
                Before any negotiation, you need data. Use this prompt:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [job title] with [X years] experience in [industry/location]. 
My key skills include [list 3-5 skills].

Research and provide:
1. Salary range for this role (low/mid/high)
2. Factors that push toward the high end
3. What companies in [target companies/industry] typically pay
4. Benefits and perks commonly negotiated beyond base salary`}</p>
              </div>
              <p className="text-white/50 text-sm">
                AI will synthesize data from Glassdoor, Levels.fyi, LinkedIn, and other sources into actionable intelligence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Build Your Case</h2>
              <p className="text-white/70 mb-4">
                Generic &ldquo;I deserve more&rdquo; doesn&apos;t work. You need specific value statements:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me build a salary negotiation case. My accomplishments:
- [Accomplishment 1 with numbers if possible]
- [Accomplishment 2]
- [Accomplishment 3]

Turn these into compelling value statements that justify a higher salary.
Format: "I [action] which resulted in [measurable outcome]"`}</p>
              </div>
              <p className="text-white/70 mb-2"><strong className="text-white">Example output:</strong></p>
              <ul className="space-y-2 text-white/70">
                <li>&ldquo;I led the migration to the new CRM, reducing customer response time by 40%&rdquo;</li>
                <li>&ldquo;I closed $2.3M in new business last quarter, exceeding quota by 115%&rdquo;</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Generate Negotiation Scripts</h2>
              <p className="text-white/70 mb-4">
                Here&apos;s where AI shines. Get exact words to use:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I received an offer of $[amount] for [role]. I want to negotiate to $[target].

Generate:
1. Opening statement to start the negotiation
2. Response if they say "this is our final offer"
3. Response if they say "we don't have budget"
4. How to ask for time to consider
5. Closing statement to seal the deal`}</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-sm text-emerald-400 mb-2 font-mono">SAMPLE SCRIPT</p>
                <p className="text-white/90 text-sm mb-4">
                  <strong>Opening:</strong> &ldquo;Thank you for the offer—I&apos;m genuinely excited about this role. Based on my research and the value I&apos;ll bring, I was expecting something closer to $[target]. Can we discuss how to bridge that gap?&rdquo;
                </p>
                <p className="text-white/90 text-sm">
                  <strong>If &ldquo;final offer&rdquo;:</strong> &ldquo;I understand budget constraints. Could we explore other forms of compensation? Additional equity, signing bonus, or an accelerated review timeline would help me get comfortable with the base.&rdquo;
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Practice Objection Handling</h2>
              <p className="text-white/70 mb-4">
                Hiring managers have standard objections. Prepare for all of them:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Give me responses to these salary negotiation objections:
1. "That's above our budget for this role"
2. "We pay based on a standardized scale"
3. "You don't have enough experience for that salary"
4. "We can revisit salary after 6 months"
5. "Other candidates accepted lower offers"`}</p>
              </div>
              <p className="text-white/50 text-sm">
                Having answers ready means you won&apos;t freeze when pushback comes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 5: The Follow-Up Email</h2>
              <p className="text-white/70 mb-4">
                After verbal negotiation, always document in writing:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a professional follow-up email summarizing our salary negotiation.
- Offer received: $[X]
- My counter: $[Y]  
- Their response: [what they said]
- Next steps: [what was agreed]

Keep it professional but clearly document what was discussed.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Negotiation Tips That AI Can&apos;t Replace</h2>
              <p className="text-white/70 mb-4">
                AI prepares you. But in the moment:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Silence is powerful</strong> - State your number, then stop talking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Be collaborative, not combative</strong> - &ldquo;How can we make this work?&rdquo; not &ldquo;I demand&rdquo;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Have a BATNA</strong> - Best Alternative to Negotiated Agreement. Know your walkaway point</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Negotiate everything</strong> - Title, equity, start date, remote work, PTO, signing bonus</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Real Numbers: What Good Negotiation Looks Like</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 text-2xl font-bold">5-10%</p>
                  <p className="text-white/50 text-sm">Average raise from negotiation</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 text-2xl font-bold">15-25%</p>
                  <p className="text-white/50 text-sm">Best case (strong leverage)</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 text-2xl font-bold">2-3 hrs</p>
                  <p className="text-white/50 text-sm">Time investment for AI prep</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 text-2xl font-bold">$120K+</p>
                  <p className="text-white/50 text-sm">10-year value of $10K raise</p>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                A $10K salary increase, compounded over 10 years with 3% annual raises, equals ~$120K+ in additional earnings. Worth a few hours of preparation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Prompt That Ties It All Together</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">MASTER PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Act as my salary negotiation coach. I'm negotiating for [role] at [company].

Current offer: $[X]
My target: $[Y]
My leverage: [why they should pay more]
My concerns: [what might work against me]

Create a complete negotiation strategy including:
1. Opening approach
2. Key talking points with specific language
3. Responses to likely objections
4. When to walk away vs. accept
5. Non-salary items to negotiate if base is stuck`}</p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Start Your Negotiation Prep Now</h2>
              <p className="text-white/70 mb-4">
                Don&apos;t wing your next salary conversation. Use AI to:
              </p>
              <ul className="space-y-2 text-white/70 mb-6">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  Research your market value
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  Build your case with specific accomplishments
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  Generate word-for-word scripts
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  Prepare for every objection
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5.</span>
                  Follow up professionally
                </li>
              </ul>
              <p className="text-white/70">
                The best negotiators aren&apos;t naturally gifted—they&apos;re prepared. AI makes preparation accessible to everyone.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <p className="text-white/70 mb-4">
                For more AI career tools:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/chatgpt-resume-prompts"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Resume Optimization →
                </Link>
                <Link 
                  href="/guides/ai-interview-prep"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Interview Prep →
                </Link>
                <Link 
                  href="/guides/ats-resume-optimization"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  ATS Resume Optimization →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'ai-interview-prep',
                              title: 'AI Interview Prep',
                              description: 'Ace the interview before negotiating your salary.'
                    },
                    {
                              slug: 'ai-interview-followup',
                              title: 'AI Interview Follow-up',
                              description: 'Follow up professionally after negotiations.'
                    },
                    {
                              slug: 'ai-job-market-research',
                              title: 'AI Job Market Research',
                              description: 'Know your market value before negotiating.'
                    }
          ]} />
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

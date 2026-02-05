import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Salary Negotiation Scripts Using ChatGPT | GetTheJobAI',
  description: 'Get exact words for salary negotiation. ChatGPT prompts for counter-offers, handling pushback, and negotiating non-salary benefits.',
  keywords: ['salary negotiation', 'salary negotiation scripts', 'counter offer template', 'chatgpt salary', 'how to negotiate salary'],
}

export default function SalaryNegotiationScriptsPage() {
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
            Career Growth
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Salary Negotiation Scripts Using ChatGPT
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Most people leave money on the table because they don&apos;t know what to say. Here&apos;s exactly how to negotiate.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Before You Negotiate: Know Your Numbers</h2>
              <p className="text-white/70 mb-4">
                Research is leverage. Get your data first:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Research salary data for [job title] in [location] with [X years] experience. Consider:
- Company size: [startup/mid/enterprise]
- Industry: [specific industry]
- Skills: [your key skills]

Give me a salary range with low, median, and high targets.`}</p>
              </div>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 my-4">
                <p className="text-emerald-400 font-semibold mb-2">Key Resources</p>
                <p className="text-white/80 text-sm">Glassdoor, Levels.fyi, Payscale, LinkedIn Salary Insights</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Responding to &quot;What Are Your Salary Expectations?&quot;</h2>
              <p className="text-white/70 mb-4">
                Never answer first if you can avoid it.
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Deflection (early in process)</p>
                  <p className="text-white/80 text-sm italic">&quot;I&apos;m flexible and more focused on finding the right fit. What&apos;s the budgeted range for this role?&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">If pushed</p>
                  <p className="text-white/80 text-sm italic">&quot;Based on my research and experience, I&apos;m targeting [range]. But I&apos;m open to discussing the full compensation package.&quot;</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm interviewing for [role] at [company]. They asked my salary expectations. The market range is [X-Y]. I have [relevant strengths]. Write a response that:
- Deflects initially
- Gives a range if pushed (slightly above market)
- Keeps focus on value, not just money`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">When You Get an Offer</h2>
              <p className="text-white/70 mb-4">
                NEVER accept immediately. Even if it&apos;s perfect.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-white/80 text-sm italic">&quot;Thank you so much for the offer! I&apos;m very excited about the role. I&apos;d like to review the full package and get back to you by [date, 2-3 days out]. Does that work?&quot;</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Negotiation Script</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a salary negotiation script for this situation:
- Offered: [amount]
- My target: [amount]
- My leverage: [experience, competing offers, skills]
- Their likely concerns: [budget, equity, timeline]

Include:
- Opening that expresses enthusiasm
- Specific justification for my ask
- Flexibility on other terms
- Closing that makes it easy to say yes`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Counter-Offer Email Template</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-white/60 text-sm mb-2">Subject: [Position] Offer Discussion</p>
                <p className="text-white/80 text-sm whitespace-pre-wrap">{`Hi [Name],

Thank you again for the offer to join [Company] as [Position]. I'm genuinely excited about the opportunity to [specific thing you'll contribute].

After reviewing the offer and considering [market data/my experience/competing opportunity], I'd like to discuss the base salary. I'm targeting [amount] based on [1-2 specific justifications].

I'm flexible on [other elements: start date, title, equity, signing bonus] if that helps. My goal is to find something that works for both of us so I can hit the ground running.

Would you have time to discuss this week?

[Your name]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Negotiating Non-Salary Items</h2>
              <p className="text-white/70 mb-4">
                If salary is firm, negotiate these instead:
              </p>
              <div className="space-y-3 text-white/70">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Signing bonus</span>
                  <span className="text-emerald-400 font-semibold">One-time cost, easier to approve</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Equity/RSUs</span>
                  <span className="text-emerald-400 font-semibold">Often more flexible than base</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Review timeline</span>
                  <span className="text-emerald-400 font-semibold">6-month vs 1-year review</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Remote flexibility</span>
                  <span className="text-emerald-400 font-semibold">Valuable hidden benefit</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Title</span>
                  <span className="text-emerald-400 font-semibold">Affects future salary</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>PTO / Professional development</span>
                  <span className="text-emerald-400 font-semibold">Costs them nothing</span>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`The company can't budge on base salary ([amount]). Write a counter asking for [2-3 alternatives from list above] instead. Frame it as a win-win.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Handling Pushback</h2>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">&quot;That&apos;s above our budget&quot;</p>
                  <p className="text-white/80 text-sm italic">&quot;I understand budgets are real constraints. Is there flexibility in signing bonus/equity/review timeline to bridge the gap?&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">&quot;We&apos;ve already stretched for you&quot;</p>
                  <p className="text-white/80 text-sm italic">&quot;I really appreciate that. Given [your leverage], I believe [target] reflects the value I&apos;ll bring. What would need to be true for us to get there?&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">&quot;This is our final offer&quot;</p>
                  <p className="text-white/80 text-sm italic">&quot;I hear you. Let me think it over and get back to you by [date]. I want to make sure I can commit fully.&quot;</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Numbers to Ask For</h2>
              <div className="space-y-3 text-white/70">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Entry level</span>
                  <span className="text-emerald-400 font-semibold">10-15% above offer</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Mid-level</span>
                  <span className="text-emerald-400 font-semibold">15-20% above offer</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Senior</span>
                  <span className="text-emerald-400 font-semibold">20-30% above offer</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Executive</span>
                  <span className="text-emerald-400 font-semibold">Everything is negotiable</span>
                </div>
              </div>
              <p className="text-white/50 text-sm mt-4">
                Always ask. 84% of employers expect negotiation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/ai-interview-preparation" className="text-emerald-400 hover:underline">Ace the interview that leads to the offer</Link>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/chatgpt-resume-prompts" className="text-emerald-400 hover:underline">Update your resume for the next opportunity</Link>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <EmailSignup headline="Get more salary negotiation scripts" />

        <RelatedGuides 
          guides={[
            { slug: 'ai-interview-preparation', title: 'AI Interview Preparation', description: 'Ace the interview that leads to the offer' },
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Update your resume for the next opportunity' },
            { slug: 'linkedin-profile-optimization', title: 'LinkedIn Optimization', description: 'Get recruiters to find you on LinkedIn' },
          ]}
        />
    </div>
  )
}

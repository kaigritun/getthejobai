import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use AI for Salary Negotiation (Scripts & Prompts) | GetTheJobAI',
  description: 'Use AI to research your market value, prepare negotiation scripts, and practice conversations. Get $5,000-$15,000 more with the right preparation.',
  keywords: ['salary negotiation AI', 'chatgpt salary negotiation', 'ai salary research', 'negotiation scripts AI', 'counter offer AI'],
}

export default function SalaryNegotiationAIPage() {
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
            Salary Negotiation
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Use AI for Salary Negotiation (Scripts & Prompts)
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Most people leave $5,000-$15,000 on the table in salary negotiations because they don&apos;t know what to say. AI changes that.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why AI Helps With Salary Negotiation</h2>
              <p className="text-white/70 mb-4">
                Negotiation is a skill most people never learn. AI gives you:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Data-backed salary ranges for your role</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Scripts for every scenario (first offer, counter, benefits)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Practice conversations before the real thing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Confidence from preparation</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Research Your Market Value</h2>
              <p className="text-white/70 mb-4">
                Before any negotiation, know your number. Use AI to analyze:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [job title] with [X years] experience in [city]. My skills include [key skills]. Based on current market data, what salary range should I expect? Include factors that could push me toward the higher end.`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                <strong className="text-white/70">Key data points to gather:</strong> Glassdoor/Levels.fyi salary ranges, company-specific compensation, cost of living adjustments, your unique value factors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Prepare Your Negotiation Script</h2>
              <p className="text-white/70 mb-4">
                The hardest part is knowing what to say. AI solves this:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">COUNTER-OFFER PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I received a job offer for [role] at [company] with a salary of $[X]. Based on my research, the market rate is $[Y]. Write a professional counter-offer email asking for $[Z], emphasizing my [key qualifications].`}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">VERBAL NEGOTIATION PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Give me 5 different ways to respond when an employer says "this is our final offer" during salary negotiation. Make them professional but firm.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Handle Common Objections</h2>
              <p className="text-white/70 mb-4">
                AI can prepare you for every pushback:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 text-white/70">They Say</th>
                      <th className="text-left py-2 text-white/70">You Say</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/60">
                    <tr className="border-b border-white/5">
                      <td className="py-3">&ldquo;That&apos;s above our budget&rdquo;</td>
                      <td className="py-3">&ldquo;I understand budget constraints. Could we discuss performance bonuses or a 6-month salary review?&rdquo;</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3">&ldquo;We don&apos;t negotiate for this role&rdquo;</td>
                      <td className="py-3">&ldquo;I appreciate that. What about additional PTO, signing bonus, or remote work flexibility?&rdquo;</td>
                    </tr>
                    <tr>
                      <td className="py-3">&ldquo;You don&apos;t have enough experience&rdquo;</td>
                      <td className="py-3">&ldquo;While my years are developing, my [specific achievement] demonstrates I deliver at the level this role requires.&rdquo;</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Practice With AI</h2>
              <p className="text-white/70 mb-4">
                Use AI as your negotiation coach:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">MOCK NEGOTIATION PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Act as a hiring manager at a tech company. I'm going to practice negotiating my salary. Start by giving me an offer of $85,000 for a Senior Marketing role. Push back on my counter-offers realistically.`}</p>
              </div>
              <p className="text-white/50 text-sm">Run this conversation 3-5 times with different scenarios.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Email Counter-Offer Script</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">TEMPLATE</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Subject: Re: [Role] Offer - Compensation Discussion

Hi [Name],

Thank you for the offer for [role]. I'm excited about joining [company] and contributing to [specific initiative].

After researching market rates for this role in [city], I'd like to discuss a base salary of $[X] to better reflect my [experience/skills/achievements].

I'm confident in my ability to deliver immediate value, particularly in [specific area]. Would you be open to discussing this?

Best,
[Name]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Accepting the first offer</strong> - Always negotiate (even just 5-10%)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Not having a specific number</strong> - &ldquo;More&rdquo; isn&apos;t a negotiation strategy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Sharing your current salary</strong> - Focus on market value, not history</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Negotiating only base salary</strong> - Total comp includes equity, bonus, PTO, remote work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Being apologetic</strong> - You&apos;re not asking for a favor, you&apos;re discussing fair value</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The 3-2-1 Rule</h2>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">3</span>
                  <span><strong className="text-white">backup options</strong> (other offers, staying put, freelance)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">2</span>
                  <span><strong className="text-white">specific numbers</strong> (ideal salary, walk-away minimum)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">1</span>
                  <span><strong className="text-white">clear value prop</strong> (why you&apos;re worth it)</span>
                </li>
              </ul>
              <p className="text-white/70">AI helps you prepare all three.</p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Bottom Line</h2>
              <p className="text-white/70 mb-4">
                Salary negotiation is preparation + communication. AI handles both. Use it to research your value, script your responses, and practice until you&apos;re confident.
              </p>
              <p className="text-emerald-400 font-semibold">
                The 15 minutes you spend with AI could mean $10,000+ more per year.
              </p>
            </section>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-interview-preparation',
              title: 'AI Interview Preparation',
              description: 'Prepare for interviews with AI-powered practice.'
            },
            {
              slug: 'chatgpt-resume-prompts',
              title: 'ChatGPT Resume Prompts',
              description: '50 prompts to optimize your resume.'
            },
            {
              slug: 'ai-job-search-tools',
              title: 'AI Job Search Tools',
              description: 'Best AI tools for your job search.'
            }
          ]} />
        </article>
    </div>
  )
}

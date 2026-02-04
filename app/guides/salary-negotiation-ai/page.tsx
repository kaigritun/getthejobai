import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use AI for Salary Negotiation (Scripts & Prompts) | GetTheJobAI',
  description: 'Use AI to research your market value, prepare negotiation scripts, and practice counter-offers. Get data-backed salary ranges and handle any objection.',
  keywords: ['ai salary negotiation', 'chatgpt salary negotiation', 'salary negotiation prompts', 'negotiation scripts ai', 'counter offer ai'],
}

export default function SalaryNegotiationAIPage() {
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
            Salary & Negotiation
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
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  Data-backed salary ranges for your role
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  Scripts for every scenario (first offer, counter, benefits)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  Practice conversations before the real thing
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  Confidence from preparation
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Research Your Market Value</h2>
              <p className="text-white/70 mb-4">
                Before any negotiation, know your number. Use AI to analyze:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT FOR CHATGPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [job title] with [X years] experience in [city]. My skills include [key skills]. Based on current market data, what salary range should I expect? Include factors that could push me toward the higher end.`}</p>
              </div>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 my-4">
                <p className="text-emerald-400 font-semibold mb-2">Key Data Points to Gather</p>
                <p className="text-white/80 text-sm">Glassdoor/Levels.fyi salary ranges • Company-specific compensation (if public) • Cost of living adjustments • Your unique value factors</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Prepare Your Negotiation Script</h2>
              <p className="text-white/70 mb-4">
                The hardest part is knowing what to say. AI solves this:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT FOR COUNTER-OFFER</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I received a job offer for [role] at [company] with a salary of $[X]. Based on my research, the market rate is $[Y]. Write a professional counter-offer email asking for $[Z], emphasizing my [key qualifications].`}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT FOR VERBAL NEGOTIATION</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Give me 5 different ways to respond when an employer says "this is our final offer" during salary negotiation. Make them professional but firm.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Handle Common Objections</h2>
              <p className="text-white/70 mb-4">
                AI can prepare you for every pushback:
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">&quot;That&apos;s above our budget&quot;</p>
                  <p className="text-white/80 text-sm italic">&quot;I understand budget constraints. Could we discuss performance bonuses or a 6-month salary review?&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">&quot;We don&apos;t negotiate for this role&quot;</p>
                  <p className="text-white/80 text-sm italic">&quot;I appreciate that. What about additional PTO, signing bonus, or remote work flexibility?&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">&quot;You don&apos;t have enough experience&quot;</p>
                  <p className="text-white/80 text-sm italic">&quot;While my years of experience are developing, my [specific achievement] demonstrates I can deliver at the level this role requires.&quot;</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Practice With AI</h2>
              <p className="text-white/70 mb-4">
                Use AI as your negotiation coach:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">ROLEPLAY PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Act as a hiring manager at a tech company. I'm going to practice negotiating my salary. Start by giving me an offer of $85,000 for a Senior Marketing role. Push back on my counter-offers realistically.`}</p>
              </div>
              <p className="text-white/50 text-sm mt-4">
                Run this conversation 3-5 times with different scenarios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Best AI Tools for Salary Negotiation</h2>
              <div className="space-y-3 text-white/70">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>ChatGPT/Claude</span>
                  <span className="text-emerald-400 font-semibold">Script writing, practice conversations</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Payscale AI</span>
                  <span className="text-emerald-400 font-semibold">Salary data analysis</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Levels.fyi</span>
                  <span className="text-emerald-400 font-semibold">Tech salary benchmarks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Glassdoor</span>
                  <span className="text-emerald-400 font-semibold">Company-specific data</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Email Counter-Offer Script</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-white/60 text-sm mb-2">Subject: Re: [Role] Offer - Compensation Discussion</p>
                <p className="text-white/80 text-sm whitespace-pre-wrap">{`Hi [Name],

Thank you for the offer for [role]. I'm excited about joining [company] and contributing to [specific initiative].

After researching market rates for this role in [city], I'd like to discuss a base salary of $[X] to better reflect my [experience/skills/achievements].

I'm confident in my ability to deliver immediate value, particularly in [specific area]. Would you be open to discussing this?

Best,
[Name]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Phone/Video Counter Script</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-white/80 text-sm italic">&quot;I&apos;m really excited about this opportunity. I&apos;ve done some research on market rates for this role, and I was hoping we could discuss a salary closer to [X]. Given my background in [specific skill] and my track record of [achievement], I believe that reflects the value I&apos;d bring.&quot;</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong>Accepting the first offer</strong> — Always negotiate (even just 5-10%)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong>Not having a specific number</strong> — &quot;More&quot; isn&apos;t a negotiation strategy</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong>Sharing your current salary</strong> — Focus on market value, not history</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong>Negotiating only base salary</strong> — Total comp includes equity, bonus, PTO</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong>Being apologetic</strong> — You&apos;re not asking for a favor</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The 3-2-1 Rule</h2>
              <div className="space-y-3 text-white/70">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>3 backup options</span>
                  <span className="text-emerald-400 font-semibold">Other offers, staying put, freelance</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>2 specific numbers</span>
                  <span className="text-emerald-400 font-semibold">Ideal salary, walk-away minimum</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>1 clear value prop</span>
                  <span className="text-emerald-400 font-semibold">Why you&apos;re worth it</span>
                </div>
              </div>
              <p className="text-white/50 text-sm mt-4">
                AI helps you prepare all three.
              </p>
            </section>

            <section>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-6">
                <p className="text-emerald-400 font-semibold mb-2">Bottom Line</p>
                <p className="text-white/80">Salary negotiation is preparation + communication. AI handles both. Use it to research your value, script your responses, and practice until you&apos;re confident.</p>
                <p className="text-white/60 text-sm mt-4">The 15 minutes you spend with AI could mean $10,000+ more per year.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/salary-negotiation-scripts" className="text-emerald-400 hover:underline">Get more salary negotiation scripts</Link>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/ai-interview-preparation" className="text-emerald-400 hover:underline">Ace the interview that leads to the offer</Link>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <EmailSignup headline="Get more negotiation scripts & AI prompts" />

        <RelatedGuides 
          guides={[
            { slug: 'salary-negotiation-scripts', title: 'Salary Negotiation Scripts', description: 'Exact words for every negotiation scenario' },
            { slug: 'ai-interview-preparation', title: 'AI Interview Preparation', description: 'Ace the interview that leads to the offer' },
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Optimize your resume with AI' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 px-6 py-12">
        <div className="max-w-5xl mx-auto text-center text-white/40 text-sm">
          <p>© 2026 GetTheJobAI. Land your dream job with AI.</p>
        </div>
      </footer>
    </div>
  )
}

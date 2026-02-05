import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Salary Negotiation Scripts (Exact Words to Use) | GetTheJobAI',
  description: 'Use ChatGPT to prepare salary negotiation scripts. Counter-offer templates, pushback responses, and the exact words to ask for more money.',
  keywords: ['salary negotiation scripts', 'chatgpt salary negotiation', 'how to negotiate salary', 'counter offer email', 'salary negotiation prompts'],
}

export default function ChatGPTSalaryNegotiationPage() {
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
            ChatGPT Salary Negotiation Scripts (Exact Words to Use)
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Most people leave $5-15K on the table because negotiating feels awkward. 
            Use ChatGPT to prepare so you know exactly what to say.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Before Negotiation: Research</h2>
              <p className="text-white/70 mb-4">
                Knowledge is leverage. Get the numbers first:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm negotiating salary for [ROLE] at [COMPANY] in [LOCATION].
Find:
1. Salary range for this role (use Levels.fyi, Glassdoor, Payscale data)
2. How this company pays vs market
3. Total comp breakdown (base, bonus, equity, benefits)
4. Recent funding/financial health that affects budget`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Initial Response</h2>
              <p className="text-white/70 mb-4">
                Never accept immediately. Buy time:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a response to this job offer that:
1. Expresses enthusiasm without accepting
2. Asks for time to review (24-48 hours)
3. Requests full offer details in writing
4. Doesn't tip my hand on negotiation

Offer: [BASE SALARY, TITLE, START DATE]`}</p>
              </div>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 my-4">
                <p className="text-emerald-400 font-semibold mb-2">Example Response</p>
                <p className="text-white/80 text-sm italic">&quot;Thank you so much—I&apos;m really excited about this opportunity. I&apos;d love to review the complete offer details. Could you send over the full package including benefits and any equity/bonus structure? I&apos;ll get back to you within 48 hours.&quot;</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Counter-Offer Script</h2>
              <p className="text-white/70 mb-4">
                Ready to ask for more? Here&apos;s how:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a salary counter-offer script.
They offered: $[X]
I want: $[Y] (based on research showing market rate)
My leverage: [COMPETING OFFER / UNIQUE SKILLS / THEIR URGENCY]

Make it:
1. Confident but not aggressive
2. Based on market data, not personal need
3. Focused on value I bring
4. Leave room for compromise`}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 my-4">
                <p className="text-white/60 font-semibold mb-2 text-sm">Structure That Works</p>
                <p className="text-white/80 text-sm italic">&quot;I&apos;m thrilled about the offer and genuinely excited to join the team. After reviewing the compensation and researching market rates for this role, I was hoping we could discuss the base salary. Based on my [specific experience/skills] and current market data showing [RANGE] for similar roles, I was thinking [TARGET NUMBER] would be more aligned. Is there flexibility there?&quot;</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Handling &quot;Final Offer&quot;</h2>
              <p className="text-white/70 mb-4">
                They say it&apos;s final. Here&apos;s what to do:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`They said the offer is final. Write a response that:
1. Accepts gracefully OR
2. Asks about non-salary compensation (signing bonus, equity, PTO, remote work)
3. Doesn't burn the bridge`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Handling &quot;No Budget&quot;</h2>
              <p className="text-white/70 mb-4">
                Can&apos;t increase base? Negotiate other things:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`They can't increase base salary.
Write scripts to negotiate:
1. Signing bonus
2. Earlier performance review (3-6 months vs 1 year)
3. Additional PTO
4. Remote work flexibility
5. Professional development budget
6. Better title`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Deflecting Salary History Questions</h2>
              <p className="text-white/70 mb-4">
                Don&apos;t let past pay limit future earnings:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write 3 ways to deflect salary history questions without lying.
Keep focus on the value of the role, not my past pay.`}</p>
              </div>
              <div className="space-y-2 mt-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <p className="text-white/80 text-sm">&quot;I&apos;d prefer to focus on the value I&apos;ll bring to this role. What&apos;s the budgeted range for this position?&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <p className="text-white/80 text-sm">&quot;My current compensation isn&apos;t directly comparable due to [different location/structure]. I&apos;m targeting [RANGE] for this role.&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <p className="text-white/80 text-sm">&quot;I&apos;m focused on finding the right fit—can you share the range you&apos;ve budgeted?&quot;</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Phone Call Prep</h2>
              <p className="text-white/70 mb-4">
                Nervous about the call? Prepare everything:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I have a salary negotiation call in 1 hour.
They offered: [X]
I want: [Y]
My talking points: [LIST KEY POINTS]

Give me:
1. Opening statement
2. 3 responses to common pushback
3. Walk-away line (if they can't meet minimum)
4. Closing statement`}</p>
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

        <RelatedGuides 
          guides={[
            { slug: 'ai-interview-preparation', title: 'AI Interview Preparation', description: 'Ace the interview that leads to the offer' },
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Update your resume for the next opportunity' },
            { slug: 'ai-linkedin-optimization', title: 'LinkedIn Optimization', description: 'Get recruiters to find you on LinkedIn' },
          ]}
        />
    </div>
  )
}

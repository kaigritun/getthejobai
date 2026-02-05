import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tools for Salary Negotiation (Get Paid What You\'re Worth) | GetTheJobAI',
  description: 'Use AI tools and ChatGPT to research salaries, practice negotiations, and get the best offer. Data-driven strategies that work.',
  keywords: ['ai salary negotiation', 'chatgpt salary negotiation', 'salary research tools', 'negotiation practice'],
}

export default function AISalaryNegotiationPage() {
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
            AI Tools for Salary Negotiation (Get Paid What You&apos;re Worth)
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            You got the offer. Now comes the part most people dread: negotiating salary. 
            AI tools can give you a serious edge.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Data Advantage</h2>
              <p className="text-white/70 mb-4">
                Negotiation is won before the conversation starts. You need to know:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  Market rate for your role, level, and location
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  The company&apos;s typical salary bands
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  Your specific leverage points
                </li>
              </ul>
              <p className="text-white/70 mt-4">
                AI tools help you gather and analyze this data in minutes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Best AI Tools for Salary Research</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">1. ChatGPT + Levels.fyi/Glassdoor</h3>
              <p className="text-white/70 mb-4">
                Use ChatGPT to synthesize data from multiple sources:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on Glassdoor and Levels.fyi data, what's the typical salary range for a Senior Product Manager in Austin, Texas at a Series B startup? Include base, bonus, and equity.`}</p>
              </div>
              <p className="text-white/70 mb-6">
                Then verify with the actual sites. ChatGPT gives you a starting framework.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">2. Payscale&apos;s Salary Tool</h3>
              <p className="text-white/70 mb-6">
                Their AI-powered tool calculates your market value based on skills, experience, 
                and location. It&apos;s free and surprisingly accurate.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">3. LinkedIn Salary Insights</h3>
              <p className="text-white/70">
                If you have Premium, the salary insights show you ranges for specific roles at 
                specific companies. Worth it during job searches.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Using ChatGPT to Practice Negotiations</h2>
              <p className="text-white/70 mb-4">
                The best negotiators practice. Use ChatGPT as your sparring partner:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`You're a hiring manager at a tech startup. I'm a candidate who just received an offer of $120K base. I want to negotiate to $140K. Have a realistic negotiation conversation with me. Push back on my asks like a real hiring manager would.`}</p>
              </div>
              <p className="text-white/70 mb-4">Practice the hard questions:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  &quot;That&apos;s above our budget&quot;
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  &quot;We can&apos;t go higher on base, but we can offer more equity&quot;
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  &quot;This is our final offer&quot;
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Negotiation Script</h2>
              <p className="text-white/70 mb-4">Here&apos;s a framework that works:</p>
              
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 1: Express enthusiasm</p>
                  <p className="text-white/70">&quot;I&apos;m really excited about this role and the team. Thank you for the offer.&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 2: Anchor high (but reasonable)</p>
                  <p className="text-white/70">&quot;Based on my research and experience, I was expecting something closer to [X]. Is there flexibility on the base salary?&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 3: Have a backup ask</p>
                  <p className="text-white/70">If they can&apos;t move on base: &quot;What about signing bonus or additional equity?&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 4: Get it in writing</p>
                  <p className="text-white/70">&quot;Great—can you send over the updated offer letter?&quot;</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What NOT to Say</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  &quot;I need more money because of personal expenses&quot; (not their problem)
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  &quot;My friend at another company makes more&quot; (irrelevant)
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  &quot;This is my minimum&quot; (backs you into a corner)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Negotiation Email Template</h2>
              <p className="text-white/70 mb-4">
                Sometimes it&apos;s easier to negotiate via email:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-white/80">
                <p className="text-white/50 text-sm mb-2">Subject: Offer Discussion - [Your Name]</p>
                <p className="mb-4">Hi [Recruiter],</p>
                <p className="mb-4">
                  Thank you again for the offer to join [Company] as [Role]. I&apos;m genuinely excited 
                  about the opportunity.
                </p>
                <p className="mb-4">
                  After reviewing the compensation package and researching market rates for similar roles, 
                  I&apos;d like to discuss the base salary. Based on my [X years] of experience and 
                  [specific valuable skill], I was hoping we could get closer to [target number].
                </p>
                <p className="mb-4">
                  I&apos;m confident I can deliver significant value in this role, and I&apos;d love to find 
                  a number that works for both of us.
                </p>
                <p>Looking forward to your thoughts.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Numbers That Matter</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-emerald-400">71%</p>
                  <p className="text-white/60 text-sm">of employers expect candidates to negotiate</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-emerald-400">10-20%</p>
                  <p className="text-white/60 text-sm">first offer is typically below what they&apos;ll pay</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-emerald-400">$10K+</p>
                  <p className="text-white/60 text-sm">annual difference from negotiating</p>
                </div>
              </div>
            </section>

            <section className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-emerald-400">Bottom Line</h2>
              <p className="text-white/70 mb-4">
                Salary negotiation isn&apos;t about being greedy. It&apos;s about being informed, prepared, 
                and professional. AI tools give you the data and practice you need to walk in confident.
              </p>
              <p className="text-white/70">
                The difference between accepting the first offer and negotiating could be $10,000+ 
                annually. Compound that over a career. Worth spending 30 minutes preparing.
              </p>
            </section>

            <section className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-emerald-400">Want More Prompts?</h2>
              <p className="text-white/70 mb-4">
                Get 50+ tested ChatGPT prompts for your entire job search — resumes, cover letters, 
                interviews, networking, and salary negotiation.
              </p>
              <Link 
                href="/prompts"
                className="inline-block bg-emerald-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-emerald-300 transition-colors"
              >
                Get the Prompt Pack — $19
              </Link>
            </section>
          </div>
        </article>

        <RelatedGuides 
          guides={[
            { slug: 'ai-interview-preparation', title: 'AI Interview Preparation', description: 'Ace your interviews with AI practice' },
            { slug: 'chatgpt-linkedin-profile', title: 'ChatGPT LinkedIn Profile', description: 'Optimize your profile for recruiters' },
            { slug: 'chatgpt-cover-letter', title: 'ChatGPT Cover Letters', description: 'Write compelling cover letters with AI' },
          ]}
        />
    </div>
  )
}

import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tools for Salary Negotiation (Get Paid What You\'re Worth) | GetTheJobAI',
  description: 'Use AI tools and ChatGPT to research salaries, practice negotiations, and get the compensation you deserve. Free scripts and prompts included.',
  keywords: ['ai salary negotiation', 'chatgpt salary negotiation', 'negotiate salary with ai', 'salary research tools', 'how to negotiate salary'],
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
            Salary Negotiation
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Tools for Salary Negotiation
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            You got the offer. Now comes the part most people dread: negotiating salary. 
            Companies expect you to negotiate—and AI tools can give you a serious edge.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Data Advantage</h2>
              <p className="text-white/70 mb-4">
                Negotiation is won before the conversation starts. You need to know:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Market rate for your role, level, and location
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  The company&apos;s typical salary bands
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Your specific leverage points
                </li>
              </ul>
              <p className="text-white/70 mt-4">
                AI tools help you gather and analyze this data in minutes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Best AI Tools for Salary Research</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">1. ChatGPT + Levels.fyi/Glassdoor</h3>
              <p className="text-white/70 mb-4">
                Use ChatGPT to synthesize data from multiple sources:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on Glassdoor and Levels.fyi data, what's the typical salary range for a Senior Product Manager in Austin, Texas at a Series B startup? Include base, bonus, and equity.`}</p>
              </div>
              <p className="text-white/50 text-sm mb-6">
                Then verify with the actual sites. ChatGPT gives you a starting framework.
              </p>

              <h3 className="text-xl font-semibold mb-3">2. Payscale&apos;s Salary Negotiation Guide</h3>
              <p className="text-white/70 mb-4">
                Their AI-powered tool calculates your market value based on skills, experience, and location. It&apos;s free and surprisingly accurate.
              </p>

              <h3 className="text-xl font-semibold mb-3">3. LinkedIn Salary Insights</h3>
              <p className="text-white/70 mb-4">
                If you have Premium, the salary insights show you ranges for specific roles at specific companies. Worth it during job searches.
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
              <p className="text-white/70 mt-4 mb-2">
                Practice the hard questions:
              </p>
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
              <p className="text-white/70 mb-4">
                Here&apos;s a framework that works:
              </p>
              <div className="space-y-4 text-white/70">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 1: Express enthusiasm</p>
                  <p>&quot;I&apos;m really excited about this role and the team. Thank you for the offer.&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 2: Anchor high (but reasonable)</p>
                  <p>&quot;Based on my research and experience, I was expecting something closer to [X]. Is there flexibility on the base salary?&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 3: Have a backup ask</p>
                  <p>If they can&apos;t move on base: &quot;What about signing bonus or additional equity?&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 4: Get it in writing</p>
                  <p>&quot;Great—can you send over the updated offer letter?&quot;</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What NOT to Say</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span>&quot;I need more money because of personal expenses&quot; (not their problem)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span>&quot;My friend at another company makes more&quot; (irrelevant)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span>&quot;This is my minimum&quot; (backs you into a corner)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Negotiation Email Template</h2>
              <p className="text-white/70 mb-4">
                Sometimes it&apos;s easier to negotiate via email. Here&apos;s a template:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">EMAIL TEMPLATE</p>
                <div className="text-white/90 text-sm">
                  <p className="mb-2"><strong>Subject:</strong> Offer Discussion - [Your Name]</p>
                  <p className="mb-2">Hi [Recruiter],</p>
                  <p className="mb-2">Thank you again for the offer to join [Company] as [Role]. I&apos;m genuinely excited about the opportunity.</p>
                  <p className="mb-2">After reviewing the compensation package and researching market rates for similar roles, I&apos;d like to discuss the base salary. Based on my [X years] of experience and [specific valuable skill], I was hoping we could get closer to [target number].</p>
                  <p className="mb-2">I&apos;m confident I can deliver significant value in this role, and I&apos;d love to find a number that works for both of us.</p>
                  <p>Looking forward to your thoughts.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Numbers That Matter</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">71%</span>
                  <span>of employers expect candidates to negotiate</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">10-20%</span>
                  <span>below what they&apos;re willing to pay—that&apos;s the typical first offer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">$10K+</span>
                  <span>annual difference between accepting first offer vs. negotiating</span>
                </li>
              </ul>
            </section>

            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold mb-3">Salary Negotiation Scripts & Prompts</h3>
              <p className="text-white/70 mb-4">
                Get word-for-word scripts for every negotiation scenario—plus research prompts, 
                counter-offer templates, and follow-up emails.
              </p>
              <Link 
                href="/prompts" 
                className="inline-block bg-emerald-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-emerald-400 transition-colors"
              >
                Get the Prompt Pack — $19
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">Bottom Line</h2>
              <p className="text-white/70 mb-4">
                Salary negotiation isn&apos;t about being greedy. It&apos;s about being informed, prepared, and professional. AI tools give you the data and practice you need to walk in confident.
              </p>
              <p className="text-white/70">
                The difference between accepting the first offer and negotiating could be $10,000+ annually. Compound that over a career. Worth spending 30 minutes preparing.
              </p>
            </section>
          </div>
        </article>

        <EmailSignup headline="Get weekly AI job search tips" />

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-mock-interview', title: 'ChatGPT Mock Interview', description: 'Practice interviews with AI feedback' },
            { slug: 'chatgpt-thank-you-email', title: 'ChatGPT Thank You Email', description: 'Follow up professionally after interviews' },
            { slug: 'ai-job-search-tools', title: 'AI Job Search Tools', description: 'Best AI tools for job seekers' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/40 text-sm">
        <p>© 2025 GetTheJobAI. All rights reserved.</p>
      </footer>
    </div>
  )
}

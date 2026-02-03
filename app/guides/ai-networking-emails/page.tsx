import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Networking Emails (Templates That Get Responses) | GetTheJobAI',
  description: 'Use AI to write personalized networking emails that actually get responses. Templates, prompts, and follow-up strategies.',
  keywords: ['networking email AI', 'ChatGPT networking', 'cold email templates', 'professional networking AI'],
}

export default function AINetworkingEmailsPage() {
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
            Networking
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI-Powered Networking Emails (Templates That Get Responses)
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Cold networking emails have a 5-10% response rate. But the right email—personalized, concise, with a clear ask—can hit 30%+. AI helps you write those emails faster.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Most Networking Emails Fail</h2>
              <p className="text-white/70 mb-4">
                Your emails get ignored because they:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Too long</strong> - Nobody reads 4 paragraphs from a stranger</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Too generic</strong> - &ldquo;I&apos;d love to pick your brain&rdquo; means nothing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Ask too much</strong> - An hour-long call is a big commitment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">No easy out</strong> - Feels like pressure to respond</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Perfect Networking Email Formula</h2>
              <p className="text-white/70 mb-4">
                Keep it under 100 words. Hit these four points:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-bold mb-1">1. Specific Connection</p>
                  <p className="text-white/50 text-sm">How you found them</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-bold mb-1">2. Genuine Compliment</p>
                  <p className="text-white/50 text-sm">Not generic flattery</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-bold mb-1">3. Clear, Small Ask</p>
                  <p className="text-white/50 text-sm">15-minute call, one question</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-bold mb-1">4. Easy Out</p>
                  <p className="text-white/50 text-sm">No pressure if they&apos;re busy</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Master Networking Email Prompt</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to reach out to [name] who is [their role] at [company].
I found them through: [LinkedIn, podcast, article, mutual connection].
What caught my attention: [specific thing they said/did].
My goal: [informational interview, advice on X, potential referral].

Write a networking email under 100 words that:
- Opens with how I found them
- Has a specific, genuine compliment
- Makes a small, clear ask (15-min call)
- Gives them an easy out
- Sounds human, not templated`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Example Output</h2>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">SUBJECT: Your take on breaking into product management</p>
                <p className="text-white/90 text-sm leading-relaxed">
                  Hi Sarah,<br/><br/>
                  I caught your interview on Lenny&apos;s Podcast—your point about PMs needing to &ldquo;fall in love with the problem, not the solution&rdquo; stuck with me.<br/><br/>
                  I&apos;m a software engineer exploring product management and would love to hear how you made the transition from engineering.<br/><br/>
                  Would you have 15 minutes for a quick call? Totally understand if you&apos;re swamped.<br/><br/>
                  Best,<br/>
                  [Name]
                </p>
              </div>
              <p className="text-white/50 text-sm mt-2">
                67 words. Specific. Clear ask. Easy to say yes to.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Follow-Up (The Part Everyone Skips)</h2>
              <p className="text-white/70 mb-4">
                80% of responses come from follow-ups. Most people send one email and give up.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">FOLLOW-UP PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I sent a networking email to [name] [X days] ago with no response.
Original email topic: [brief summary]

Write a short, friendly follow-up that:
- Acknowledges they're busy
- Restates value in one sentence
- Keeps the ask the same
- Is under 50 words`}</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">EXAMPLE FOLLOW-UP</p>
                <p className="text-white/90 text-sm">
                  Hi Sarah,<br/><br/>
                  Just floating this back up—know your inbox is probably chaos. Still would love 15 minutes on your PM transition if you have time. No worries if not!<br/><br/>
                  Best,<br/>
                  [Name]
                </p>
              </div>
              <p className="text-white/50 text-sm mt-2">
                40 words. Zero pressure. Works.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Asking for Warm Introductions</h2>
              <p className="text-white/70 mb-4">
                Asking for introductions is an art. Too direct feels pushy. Too indirect gets ignored.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">INTRO REQUEST PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to ask [contact name] to introduce me to [target person].
My relationship with [contact]: [how you know them]
Why I want to meet [target]: [specific reason]

Write an intro request that:
- Is easy for them to forward
- Doesn't put them in an awkward spot
- Includes a "no pressure" escape valve
- Has a forwardable blurb about me`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Batch Processing: 5 Emails in 5 Minutes</h2>
              <p className="text-white/70 mb-4">
                Here&apos;s where AI really shines. Instead of writing one email at a time:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">BATCH PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm reaching out to 5 people in [industry/role].
For each person below, write a personalized networking email.

1. [Name, company, how you found them, what interested you]
2. [Name, company, how you found them, what interested you]
3. [Name, company, how you found them, what interested you]
4. [Name, company, how you found them, what interested you]
5. [Name, company, how you found them, what interested you]

Keep each under 100 words. Make them sound different—not templated.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                You just did an hour of work in 5 minutes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Networking Email Stats That Matter</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 text-2xl font-bold">5-10%</p>
                  <p className="text-white/50 text-sm">Generic email response rate</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 text-2xl font-bold">25-35%</p>
                  <p className="text-white/50 text-sm">Personalized email response rate</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 text-2xl font-bold">80%</p>
                  <p className="text-white/50 text-sm">Responses come from follow-ups</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 text-2xl font-bold">100 words</p>
                  <p className="text-white/50 text-sm">Ideal email length</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">&ldquo;I&apos;d love to pick your brain&rdquo;</strong> - Vague and overused</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">&ldquo;Let me know when you&apos;re free&rdquo;</strong> - Puts work on them</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Attaching your resume</strong> - Too forward for initial contact</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Asking for a job</strong> - Networking first, opportunities follow</span>
                </li>
              </ul>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Your Networking Workflow</h2>
              <p className="text-white/70 mb-4">
                The compounding effect of consistent networking:
              </p>
              <ul className="space-y-2 text-white/70 mb-6">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  Send 10 personalized emails per week (batch with AI)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  Follow up on non-responses after 5-7 days
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  Track responses, iterate on what works
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  Convert calls to ongoing relationships
                </li>
              </ul>
              <p className="text-white/70">
                Your next opportunity probably comes from someone you haven&apos;t met yet. Start today.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <p className="text-white/70 mb-4">
                More AI career tools:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/linkedin-ai-optimization"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  LinkedIn AI Optimization →
                </Link>
                <Link 
                  href="/guides/ai-interview-prep"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Interview Prep →
                </Link>
                <Link 
                  href="/guides/ai-salary-negotiation"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Salary Negotiation →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'chatgpt-linkedin-outreach',
                              title: 'LinkedIn Outreach',
                              description: 'Network on LinkedIn with AI assistance.'
                    },
                    {
                              slug: 'ai-interview-followup',
                              title: 'AI Interview Follow-up',
                              description: 'Write professional follow-up emails.'
                    },
                    {
                              slug: 'linkedin-ai-optimization',
                              title: 'LinkedIn Optimization',
                              description: 'Build your network with an optimized profile.'
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

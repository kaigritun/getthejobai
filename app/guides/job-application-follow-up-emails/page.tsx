import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Job Application Follow-Up Emails Using ChatGPT | GetTheJobAI',
  description: 'Write follow-up emails that actually get responses. ChatGPT prompts for after applying, post-interview thank-yous, and breaking the silence.',
  keywords: ['follow-up email', 'job application follow up', 'thank you email after interview', 'chatgpt follow up email', 'job search follow up'],
}

export default function JobApplicationFollowUpEmailsPage() {
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
            Job Search
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Job Application Follow-Up Emails Using ChatGPT
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Silence after applying feels terrible. Here&apos;s how to write follow-ups that actually get responses.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">When to Follow Up</h2>
              <div className="space-y-3 text-white/70">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>After applying</span>
                  <span className="text-emerald-400 font-semibold">5-7 business days</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>After interview (thank you)</span>
                  <span className="text-emerald-400 font-semibold">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>After interview (follow up)</span>
                  <span className="text-emerald-400 font-semibold">1 week</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>After networking</span>
                  <span className="text-emerald-400 font-semibold">Within 48 hours</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Follow-Up That Works</h2>
              <p className="text-white/70 mb-4">
                Most follow-ups fail because they&apos;re needy (&quot;Just checking in...&quot;) or generic. Here&apos;s the formula:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a follow-up email for a [job title] position at [company]. I applied [X days/weeks] ago. Include:
- A specific reason I'm interested in THIS company (not generic)
- One new piece of value I can offer (insight, idea, article)
- A soft close that makes replying easy
- Keep under 100 words
- Professional but warm tone`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Thank-You Email After Interview</h2>
              <p className="text-white/70 mb-4">
                This is non-negotiable. Send within 24 hours.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a thank-you email after interviewing for [role] at [company]. The interviewer was [name/title]. We discussed [2-3 key topics]. Include:
- Specific callback to something they said
- Reinforcement of why I'm the right fit
- Address any concern they raised (optional)
- Clear enthusiasm without being desperate`}</p>
              </div>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 my-4">
                <p className="text-emerald-400 font-semibold mb-2">Pro Tip</p>
                <p className="text-white/80 text-sm">Reference something specific from your conversation. Generic thank-yous get ignored.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Networking Follow-Up</h2>
              <p className="text-white/70 mb-4">
                Met someone at an event or on LinkedIn? Strike while the iron&apos;s hot.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a follow-up message to [name] who I met [where/how]. We discussed [topic]. I want to [goal: get advice, referral, stay connected]. Make it:
- Personal (reference something specific)
- Give before asking
- Have a clear but low-pressure ask
- Under 75 words`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Breaking the Silence</h2>
              <p className="text-white/70 mb-4">
                No response after 2 follow-ups? Try these approaches:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">THE VALUE-ADD</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I noticed [company] just [news/announcement]. Here's an idea that might help with [relevant challenge]: [brief idea].

No pressure to respond—just wanted to share something useful.`}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">THE SOFT CLOSE</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I understand you're busy. Would it be helpful if I check back [specific timeframe], or should I assume the position has been filled?`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What NOT to Do</h2>
              <div className="space-y-2 text-white/70">
                <div className="flex gap-3 items-center bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <span className="text-red-400">❌</span>
                  <span>&quot;Just checking in&quot; — says nothing</span>
                </div>
                <div className="flex gap-3 items-center bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <span className="text-red-400">❌</span>
                  <span>Multiple emails in one week — desperation</span>
                </div>
                <div className="flex gap-3 items-center bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <span className="text-red-400">❌</span>
                  <span>Guilt trips — burns bridges</span>
                </div>
                <div className="flex gap-3 items-center bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <span className="text-red-400">❌</span>
                  <span>&quot;Did you get my application?&quot; — they did</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Email Templates by Situation</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-3">No Response After Application</p>
                  <p className="text-white/60 text-sm mb-2">Subject: [Job Title] Application - [Your Name]</p>
                  <p className="text-white/80 text-sm whitespace-pre-wrap">{`Hi [Name],

I applied for the [Position] role last week and wanted to reiterate my interest. [One sentence about why this company specifically].

I recently [relevant accomplishment/insight] and believe it would directly help with [company challenge]. Happy to share more details.

Would a brief call this week work?

[Your name]`}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-3">Post-Interview Silence</p>
                  <p className="text-white/60 text-sm mb-2">Subject: Following Up - [Position] Interview</p>
                  <p className="text-white/80 text-sm whitespace-pre-wrap">{`Hi [Name],

Great speaking with you about the [Position] role. I've been thinking about [specific topic discussed] and have some ideas for [relevant solution].

Is there any additional information I can provide to help with your decision?

[Your name]`}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/chatgpt-thank-you-email" className="text-emerald-400 hover:underline">More thank-you email templates</Link>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/ai-interview-preparation" className="text-emerald-400 hover:underline">Prepare for your next interview</Link>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <EmailSignup headline="Get follow-up email templates that work" />

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-thank-you-email', title: 'ChatGPT Thank-You Emails', description: 'Post-interview thank-you templates' },
            { slug: 'ai-interview-preparation', title: 'AI Interview Preparation', description: 'Ace your next interview with AI coaching' },
            { slug: 'ai-networking-emails', title: 'AI Networking Emails', description: 'Write cold outreach that gets responses' },
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

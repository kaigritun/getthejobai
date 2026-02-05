import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Thank You Email After Interview: Templates & Prompts That Work | GetTheJobAI',
  description: 'Write perfect interview thank you emails with ChatGPT. Copy-paste prompts, real examples, and timing tips to stand out from other candidates.',
  keywords: ['chatgpt thank you email', 'interview follow up email', 'thank you email after interview', 'ai thank you email'],
}

export default function ChatGPTThankYouEmailPage() {
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
            Interview
          </p>
          <h1 className="text-4xl font-bold mb-6">
            ChatGPT Thank You Email After Interview: Templates & Prompts That Work
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            You nailed the interview. Now you&apos;re staring at a blank email wondering how to follow up 
            without sounding generic or desperate. Here&apos;s how to use ChatGPT to write thank you emails 
            that actually get remembered.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The 24-Hour Rule</h2>
              <p className="text-white/70 mb-4">
                Send your thank you email within 24 hours. Same day is better. Waiting longer makes you 
                look uninterested or disorganized.
              </p>
              <p className="text-white/70">
                If you interviewed with multiple people, send personalized emails to each one. Yes, this 
                takes more effort. That&apos;s the point.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Perfect Thank You Email Formula</h2>
              <p className="text-white/70 mb-4">
                A standout thank you email has three parts:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <span><strong className="text-white">Specific callback</strong> — Reference something unique from your conversation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <span><strong className="text-white">Value reinforcement</strong> — Remind them why you&apos;re the right fit</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <span><strong className="text-white">Forward momentum</strong> — Show enthusiasm without being pushy</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Basic Thank You Email Prompt</h2>
              <p className="text-white/70 mb-4">
                The go-to prompt for most interviews.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I just interviewed for a [Job Title] position at [Company]. The interviewer was [Name] and we discussed [2-3 specific topics from interview].

Write a thank you email that:
- References our specific conversation
- Reinforces my fit for the role
- Is professional but not stiff
- Is under 150 words

My relevant background: [1-2 sentences about your experience]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. After a Panel Interview</h2>
              <p className="text-white/70 mb-4">
                When you need to write multiple personalized emails.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I just completed a panel interview for [Job Title] at [Company]. The interviewers were:
- [Name 1]: We discussed [topic]
- [Name 2]: We discussed [topic]
- [Name 3]: We discussed [topic]

Write 3 separate thank you emails (one for each person) that:
- Reference our specific conversation
- Are personalized to what each person cares about
- Don't repeat the same phrases across emails
- Are 100-150 words each`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. When You Forgot to Mention Something</h2>
              <p className="text-white/70 mb-4">
                Turn your follow-up into an opportunity.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I just interviewed for [Job Title] at [Company]. During the interview, I forgot to mention [specific experience/skill/project] that's directly relevant to [something they emphasized].

Write a thank you email that naturally weaves in this information without making it obvious I forgot to mention it.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. After a Tough Interview</h2>
              <p className="text-white/70 mb-4">
                When you stumbled on a question and want to recover.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I just had a challenging interview for [Job Title] at [Company]. I feel like I stumbled on the question about [topic]. I want to address this without being defensive.

Write a thank you email that:
- Acknowledges I could have answered that question better
- Provides a stronger, more thoughtful answer now
- Turns this into a positive (shows I'm reflective and prepared)`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Real Example: Before and After</h2>
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-sm text-red-400 mb-2 font-mono">BEFORE (GENERIC)</p>
                  <p className="text-white/70 italic">
                    Thank you for taking the time to meet with me today. I enjoyed learning more about 
                    the role and am excited about the opportunity to join the team. Please let me know 
                    if you need any additional information.
                  </p>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-sm text-emerald-400 mb-2 font-mono">AFTER (USING CHATGPT)</p>
                  <p className="text-white/70 italic">
                    Thank you for the conversation about the customer success challenges at Acme Corp. 
                    Your point about the 30-day onboarding bottleneck stuck with me — it&apos;s similar to 
                    what we solved at my current company by implementing async video tutorials. I&apos;d 
                    love to bring that approach to your team.
                    <br /><br />
                    Looking forward to hearing about next steps.
                  </p>
                </div>
              </div>
              <p className="text-white/50 text-sm mt-4">
                The second one gets remembered because it proves you were actually listening.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Follow-Up After No Response</h2>
              <p className="text-white/70 mb-4">
                If you don&apos;t hear back after a week, one follow-up is appropriate.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I interviewed for [Job Title] at [Company] on [date] and sent a thank you email. It's been [X days] and I haven't heard back. Write a polite follow-up email that:
- Isn't pushy or desperate
- Reaffirms my interest
- Gives them an easy out if they've gone another direction`}</p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Sending a generic template</strong> — The hiring manager has seen it a thousand times</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Waiting more than 24 hours</strong> — Same day is best</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Writing more than 200 words</strong> — Keep it scannable</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Asking about salary or benefits</strong> — Wrong time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Sounding desperate</strong> — &ldquo;I really need this job&rdquo;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Reference specific conversation points</strong> — Proves you listened</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Match the company&apos;s tone</strong> — Formal for finance, casual for startups</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Proofread for name spelling</strong> — Nothing kills a follow-up faster</span>
                </li>
              </ul>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
              <p className="text-white/70">
                A great thank you email takes 10 minutes with ChatGPT and can be the difference 
                between getting the offer and getting ghosted. Be specific. Be brief. Be memorable.
              </p>
            </section>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-interview-followup',
              title: 'AI Interview Follow-Ups',
              description: 'Write memorable thank you emails that actually get responses.'
            },
            {
              slug: 'chatgpt-interview-preparation',
              title: 'ChatGPT Interview Preparation',
              description: 'Use ChatGPT to prepare for interviews and nail your answers.'
            },
            {
              slug: 'ai-company-research',
              title: 'Research Companies with AI',
              description: '20 minutes of AI research beats 90% of candidates.'
            }
          ]} />
        </article>
    </div>
  )
}

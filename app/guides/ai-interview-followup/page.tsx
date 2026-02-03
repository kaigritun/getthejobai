import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use AI for Interview Follow-Ups and Thank You Notes | GetTheJobAI',
  description: 'Write memorable thank you emails after interviews using AI. Templates and prompts for follow-ups that actually get responses.',
  keywords: ['interview follow up email', 'thank you email after interview', 'ai thank you note', 'interview follow up template'],
}

export default function AIInterviewFollowupPage() {
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
            Interview
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Use AI for Interview Follow-Ups and Thank You Notes
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            The follow-up email you send in the next 24 hours can be the difference between getting the offer and being forgotten. AI helps you write something memorable in minutes.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Follow-Up Emails Matter</h2>
              <p className="text-white/70 mb-4">
                Hiring managers interview 5-10 candidates for every role. By day three, you&apos;re a blur. A strong follow-up email:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Reinforces your best moments from the interview
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Shows you&apos;re serious about the role
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Addresses any concerns that came up
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Keeps you top of mind
                </li>
              </ul>
              <p className="text-white/50 text-sm mt-4">
                According to a CareerBuilder survey, 22% of hiring managers are less likely to hire someone who doesn&apos;t send a thank you note. That&apos;s nearly 1 in 4 opportunities killed by doing nothing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Perfect Follow-Up Framework</h2>
              <p className="text-white/70 mb-4">
                Here&apos;s what works:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <strong className="text-white">Subject line:</strong> Thank you - [Position] interview
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <strong className="text-white">Paragraph 1:</strong> Thank them for their time. Mention something specific from the conversation.
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <strong className="text-white">Paragraph 2:</strong> Reinforce why you&apos;re the right fit. Reference a problem they mentioned and how you&apos;d solve it.
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  <strong className="text-white">Paragraph 3:</strong> Address any concerns. If something didn&apos;t go perfectly, this is your chance to clarify.
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5.</span>
                  <strong className="text-white">Paragraph 4:</strong> Express enthusiasm and next steps.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Using ChatGPT to Write Follow-Ups</h2>
              <p className="text-white/70 mb-4">
                Here&apos;s a prompt that works:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I just interviewed for [POSITION] at [COMPANY] with [INTERVIEWER NAME].

Key discussion points:
- [Topic 1 discussed]
- [Topic 2 discussed]
- [Challenge/problem they mentioned]

My relevant experience:
- [Relevant point 1]
- [Relevant point 2]

Write a professional thank you email that:
1. Thanks them genuinely (not generically)
2. References our specific conversation
3. Reinforces how my experience solves their problem
4. Shows enthusiasm without being desperate

Keep it under 200 words. Professional but warm tone.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Real Example: Generic vs Memorable</h2>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-red-400 mb-2 font-mono">BAD (generic, forgettable)</p>
                <p className="text-white/70 text-sm italic">
                  Thank you for taking the time to meet with me today. I enjoyed learning about the role and believe my experience makes me a strong candidate. Please let me know if you have any questions.
                </p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-emerald-400 mb-2 font-mono">GOOD (specific, memorable)</p>
                <p className="text-white/70 text-sm italic">
                  Thank you for the conversation today about the product manager role. Your point about the challenge of aligning engineering priorities with customer feedback really resonated with me—I faced a similar situation at my previous company where we implemented a feature voting system that reduced scope creep by 40%.
                </p>
                <p className="text-white/70 text-sm italic mt-2">
                  I&apos;m excited about the opportunity to bring that same structured approach to your team, especially as you scale the B2B product line. Looking forward to the next steps.
                </p>
              </div>
              <p className="text-white/50 text-sm">
                The second version shows you were listening, connects your experience to their problems, and gives them a reason to remember you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Timing Your Follow-Up</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <strong className="text-white">Within 24 hours:</strong> Send your thank you email
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <strong className="text-white">1 week later:</strong> If no response, send a brief check-in
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <strong className="text-white">2 weeks later:</strong> One final follow-up, then move on
                </li>
              </ul>
              <p className="text-white/50 text-sm mt-4">
                AI can help with all three messages while keeping them consistent but not repetitive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Handling Panel Interviews</h2>
              <p className="text-white/70 mb-4">
                Interviewed with multiple people? Send individual emails to each person, customized based on what you discussed with them specifically.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I need to send thank you emails to 3 interviewers from the same panel. Help me write personalized versions for each:

1. [Name] - Hiring Manager - Discussed [topics]
2. [Name] - Team Lead - Discussed [topics]  
3. [Name] - HR - Discussed [topics]

Each should feel personal, not like I copied the same email to everyone.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">When Things Didn&apos;t Go Perfectly</h2>
              <p className="text-white/70 mb-4">
                Had a moment where you stumbled? The follow-up is your recovery window.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`During my interview for [POSITION], I didn't fully answer the question about [TOPIC]. 

Write a brief, professional clarification I can include in my thank you email that addresses this without being defensive or over-explaining.`}</p>
              </div>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">The Bottom Line</h2>
              <p className="text-white/70 mb-4">
                A thoughtful follow-up takes 15 minutes and can change the outcome. AI makes it faster to write something personalized.
              </p>
              <p className="text-white/70">
                Don&apos;t let your dream job slip away because you sent the same thank you note as everyone else—or worse, none at all.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-interview-prep"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Interview Prep →
                </Link>
                <Link 
                  href="/guides/ai-company-research"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Company Research →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'ai-interview-prep',
                              title: 'AI Interview Prep',
                              description: 'Prepare for interviews with AI-generated questions.'
                    },
                    {
                              slug: 'ai-salary-negotiation',
                              title: 'AI Salary Negotiation',
                              description: 'Negotiate your offer after a successful interview.'
                    },
                    {
                              slug: 'ai-networking-emails',
                              title: 'AI Networking Emails',
                              description: 'Write professional emails that get responses.'
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

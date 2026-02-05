import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Respond to Recruiters with ChatGPT (Templates) | GetTheJobAI',
  description: 'Perfect responses for when recruiters reach out. ChatGPT prompts for interested, not interested, and need-more-info situations.',
  keywords: ['how to respond to recruiter', 'recruiter response template', 'chatgpt recruiter message', 'respond to linkedin recruiter'],
}

export default function ChatGPTRecruiterResponsePage() {
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
            Networking
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Respond to Recruiters: ChatGPT Templates That Work
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            A recruiter reached out. Now what? Your response can open doors or close them. 
            Here are the exact prompts and templates for every situation.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Golden Rule</h2>
              <p className="text-white/70 mb-4">
                Always respond to recruiters. Even if you&apos;re not interested. Even if the role is wrong. 
                Why? Because:
              </p>
              <ul className="space-y-2 text-white/70 mb-6">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  They might have better roles later
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  They can refer you to colleagues with better fits
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  You never know when you&apos;ll need to job search again
                </li>
              </ul>
              <p className="text-white/50 text-sm italic">
                Building recruiter relationships is a long game. Play it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Scenario 1: You&apos;re Interested</h2>
              <p className="text-white/70 mb-4">
                Great opportunity, great company. Here&apos;s how to respond without sounding desperate:
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`A recruiter reached out about a [job title] role at [company]. I'm interested. Write a response that:
- Shows enthusiasm without being over-eager
- Briefly mentions why I'm a fit (1-2 sentences max)
- Asks one smart question about the role
- Proposes next steps (call, more info, etc.)

My relevant background: [brief experience]
What excites me: [specific aspect of role/company]`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template: Interested Response</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

Thanks for reaching out—this role caught my attention. [Company]'s work on [specific thing] aligns well with what I've been doing in [your area].

Quick question: is this role more focused on [aspect A] or [aspect B]? That would help me understand if my [specific experience] is the right fit.

Happy to jump on a call this week if helpful. What works for you?

[Your name]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Scenario 2: You Need More Info</h2>
              <p className="text-white/70 mb-4">
                The message was vague. You don&apos;t know enough to decide. Get what you need:
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`A recruiter sent me a vague message about a role. I need to know:
- Salary range
- Remote/hybrid/onsite requirements
- Team size and reporting structure
- [any other must-know]

Write a friendly response that asks for these details without sounding demanding or like I'm just fishing for salary info. Keep the relationship warm.`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template: Need More Info</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

Thanks for thinking of me for this. I'd love to learn more before we go further.

A few quick questions:
• What's the team structure like? Who would I be working with?
• Is this role remote, hybrid, or onsite?
• What's the compensation range you're working with?

Happy to share more about my background once I understand the fit better.

[Your name]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Scenario 3: You&apos;re Not Interested (But Want to Stay Connected)</h2>
              <p className="text-white/70 mb-4">
                Wrong role, but you don&apos;t want to burn the bridge. This is the most important response to get right:
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`A recruiter reached out about a role I'm not interested in. I want to:
- Politely decline
- Keep the door open for future roles
- Tell them what I AM looking for (so they can match me better next time)
- Not burn the relationship

Role they offered: [description]
What I actually want: [your preferences]`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template: Decline But Stay Connected</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

Thanks for reaching out. This particular role isn't quite the right fit for where I'm headed—I'm more focused on [what you want] right now.

But I'd love to stay on your radar for future opportunities in that space. Feel free to reach out if something like that comes across your desk.

Appreciate you thinking of me.

[Your name]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Scenario 4: Salary Is Too Low</h2>
              <p className="text-white/70 mb-4">
                They named a number that doesn&apos;t work. Handle it gracefully:
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`A recruiter told me the salary range for a role I'm interested in. It's [their range], but I need at least [your minimum]. Write a response that:
- Doesn't immediately say no
- Asks if there's flexibility
- Justifies my ask briefly (market rate, my experience)
- Keeps the door open if they can't move`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template: Salary Discussion</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

Thanks for the transparency on compensation. The role sounds interesting, but that range is below what I'm targeting based on my [X years] of experience and current market rates for [your specialty].

Is there any flexibility in the budget for the right candidate? I'm looking for something in the [your range] range.

If that's too far apart, no worries—I'd still love to hear about other roles that might be a better match.

[Your name]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Scenario 5: You&apos;re Happy Where You Are</h2>
              <p className="text-white/70 mb-4">
                Not looking, but want to keep the relationship warm for later:
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template: Not Looking Right Now</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

Appreciate you reaching out. I'm not actively looking right now—pretty happy with what I'm working on at [current company].

That said, I'm always open to hearing about exceptional opportunities, especially anything involving [your dream role/company/type of work]. Feel free to keep me in mind if something like that comes up.

Thanks again.

[Your name]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Response Speed Matters</h2>
              <p className="text-white/70 mb-4">
                How fast should you respond?
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Interested in the role</p>
                  <p className="text-white/60 text-sm">Within 24 hours. Hot roles get filled fast.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Not interested</p>
                  <p className="text-white/60 text-sm">Within 48-72 hours. Don&apos;t leave them hanging.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Red Flags to Watch For</h2>
              <p className="text-white/70 mb-4">
                Not all recruiter messages are worth responding to:
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">⚠</span>
                  <span><strong className="text-white">No company name</strong> — &quot;Exciting opportunity at a stealth startup&quot; is often a waste of time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">⚠</span>
                  <span><strong className="text-white">Wrong fit entirely</strong> — If you&apos;re a software engineer and they&apos;re pitching sales roles, they&apos;re just spamming</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">⚠</span>
                  <span><strong className="text-white">No details + &quot;send your resume&quot;</strong> — They should tell you about the role first</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Batch Processing with ChatGPT</h2>
              <p className="text-white/70 mb-4">
                Getting multiple recruiter messages? Process them efficiently:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">BATCH PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I have 5 recruiter messages to respond to. For each, I'll give you:
- The recruiter's message
- My interest level (interested / need info / not interested)
- Any specific concerns or questions

Write personalized responses for each. Match tone to context—more formal for big companies, more casual for startups.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">1.</span>
                  <span>Always respond—even to decline</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">2.</span>
                  <span>Be specific about what you want (so they can match you better)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">3.</span>
                  <span>Keep it short—3-5 sentences is plenty</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">4.</span>
                  <span>Ask smart questions to show you&apos;re engaged</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5.</span>
                  <span>Play the long game—build relationships, not transactions</span>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <div className="mt-16">
          <EmailSignup />
        </div>

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-cold-email-recruiter', title: 'Cold Email Recruiters', description: 'How to reach out first when they haven\'t contacted you.' },
            { slug: 'chatgpt-linkedin-outreach', title: 'LinkedIn Outreach', description: 'Templates for connecting on LinkedIn.' },
            { slug: 'ai-salary-negotiation', title: 'AI Salary Negotiation', description: 'Negotiate your offer with AI-powered scripts.' },
          ]}
        />
    </div>
  )
}

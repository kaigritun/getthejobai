import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Cold Email to Recruiter: Templates That Get Responses (2025) | GetTheJobAI',
  description: 'Learn to write cold emails that recruiters actually respond to. ChatGPT prompts, templates, and examples for job seekers.',
  keywords: ['cold email recruiter', 'chatgpt recruiter email', 'email recruiter template', 'how to email recruiters'],
}

export default function ChatGPTColdEmailRecruiterPage() {
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
            ChatGPT Cold Email to Recruiter: Templates That Actually Get Responses
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Cold emailing recruiters works—when done right. The problem? Most cold emails are terrible. 
            They&apos;re generic, self-centered, and give the recruiter no reason to respond.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Most Cold Emails Fail</h2>
              <p className="text-white/70 mb-4">
                Recruiters get hundreds of emails. Here&apos;s what they delete immediately:
              </p>
              <ul className="space-y-2 text-white/70 mb-6">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  &quot;I&apos;m reaching out to explore opportunities...&quot; (vague)
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  &quot;I&apos;m a highly motivated professional...&quot; (everyone says this)
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  Wall of text about your entire career (no one reads this)
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  No clear ask (what do you want them to do?)
                </li>
              </ul>
              <p className="text-white/70 mb-4">What gets responses:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Specific mention of something they posted or said
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Clear value proposition in one sentence
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Explicit, easy ask
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Framework That Works</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-white/90 space-y-2">
                  <span className="block"><strong className="text-emerald-400">Line 1:</strong> Hook (why you&apos;re reaching out to THEM specifically)</span>
                  <span className="block"><strong className="text-emerald-400">Line 2-3:</strong> Value prop (what you bring in one sentence)</span>
                  <span className="block"><strong className="text-emerald-400">Line 4:</strong> Ask (what you want, make it easy)</span>
                </p>
              </div>
              <p className="text-white/50 text-sm">That&apos;s it. 4 sentences max.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">ChatGPT Prompts for Recruiter Emails</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white/90">The Basic Cold Email</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a cold email to a recruiter who posts [type of roles] on LinkedIn. I'm a [your title] with [X years] experience in [your field]. 

My strongest selling point is [your key achievement or skill].

Keep it under 5 sentences. Make the ask specific and easy to say yes to.`}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white/90">The Job Posting Response</h3>
              <p className="text-white/70 mb-4">When there&apos;s no apply button:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`A recruiter posted about a [job title] role at [company]. The post mentioned they're looking for someone who can [key requirement from post].

Write a cold email highlighting that I have exactly that skill. Reference the specific post. Keep it to 4 sentences max.

My relevant experience: [brief background]`}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white/90">The &quot;Saw Your Content&quot; Approach</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to reach out to a recruiter who [posted/commented/shared] about [topic] on LinkedIn. I have genuine thoughts on this topic and want to connect over it while also expressing interest in roles they might have.

Write an email that:
1. References their specific content authentically
2. Adds a brief insight or agreement (not just "great post!")
3. Transitions naturally to mentioning I'm exploring opportunities
4. Asks if they have 10 minutes to chat

Keep it conversational, not salesy.`}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white/90">The Referral Ask</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm trying to get introduced to [company]. I know someone who works there but we're not close. Write an email asking them if they'd be willing to refer me for a [job title] role.

Include:
- Acknowledge we don't know each other well
- Explain briefly why I'm a fit (1 sentence)
- Make it easy to say no without awkwardness
- Offer to send more info if they're open to it`}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white/90">The Follow-Up (No Response)</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I emailed a recruiter [X days] ago about [type of role] and haven't heard back. Write a follow-up that:
- Isn't passive aggressive
- Adds one new piece of value (news about me or the company)
- Re-states the ask clearly
- Is shorter than the original email`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Templates You Can Steal</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template 1: Direct and Confident</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">Subject: [Role type] candidate - [your key differentiator]</p>
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

Saw you recruit for [company/industry] and wanted to reach out directly. I'm a [title] with [X years] in [field] - my last project [one impressive result].

Any [role type] openings where that background would be relevant? Happy to send my resume if so.

[Your name]`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template 2: Content-Based Connection</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">Subject: Your post on [topic]</p>
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

Your post about [topic] resonated - especially [specific point]. I've seen the same thing in my work [brief example].

I'm currently exploring [role type] roles and noticed you recruit in this space. Would you have 10 minutes to chat about what you're seeing in the market?

[Your name]`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template 3: The Warm Introduction Request</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">Subject: Quick ask - [Company] intro</p>
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

We met briefly at [event] / we're connected through [person/group]. I'm exploring a [role] at [Company] and saw you might know people there.

Would you be comfortable making an intro, or pointing me to the right person? Totally understand if not - just thought I'd ask.

Either way, appreciate you.

[Your name]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Making It Scale with ChatGPT</h2>
              <p className="text-white/70 mb-4">
                The real power is personalization at scale. Here&apos;s how:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">BATCH PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm reaching out to 20 recruiters today. For each one, I'll give you:
- Their name
- Their company
- Something specific from their LinkedIn (a post, their specialty, recent placement)

Write a personalized cold email for each using this template:
[paste your preferred template]

Make each one feel individually written, not templated.`}</p>
              </div>
              <p className="text-white/50 text-sm">Then feed it recruiter details one at a time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What NOT to Do</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Don&apos;t attach your resume unsolicited.</strong> Say you&apos;ll send it if they&apos;re interested.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Don&apos;t write more than 5 sentences.</strong> They won&apos;t read it.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Don&apos;t use &quot;I hope this email finds you well.&quot;</strong> Dead giveaway that you don&apos;t respect their time.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Don&apos;t be vague about what you want.</strong> &quot;Looking for opportunities&quot; means nothing.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Don&apos;t follow up more than twice.</strong> After two, move on.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Numbers Game</h2>
              <p className="text-white/70 mb-4">Cold email is a volume game. Expect:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-emerald-400 mb-1">10-20%</p>
                  <p className="text-white/50 text-sm">Open rate</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-emerald-400 mb-1">2-5%</p>
                  <p className="text-white/50 text-sm">Response rate</p>
                </div>
              </div>
              <p className="text-white/70">
                That means you need to send 50-100 emails to get 2-5 conversations. 
                ChatGPT makes this sustainable by handling the personalization.
              </p>
              <p className="text-white/50 text-sm mt-4 italic">
                But here&apos;s the thing: one great placement is worth 100 emails. Keep sending.
              </p>
            </section>

            <section className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">Beyond Email: The Full Toolkit</h2>
              <p className="text-white/70 mb-6">
                Cold emailing is one piece of the job search puzzle. For prompts covering LinkedIn outreach, 
                networking follow-ups, informational interview requests, and thank-you notes that get remembered, 
                check out the{' '}
                <Link href="/guides/chatgpt-resume-prompts" className="text-emerald-400 hover:text-emerald-300 underline">
                  complete ChatGPT job search prompts collection
                </Link>.
              </p>
              <p className="text-white/70">
                It covers every touchpoint in the job search process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">1.</span>
                  <span>Keep it short (4-5 sentences max)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">2.</span>
                  <span>Reference something specific about them</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">3.</span>
                  <span>Lead with value, not need</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">4.</span>
                  <span>Make the ask easy to say yes to</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5.</span>
                  <span>Follow up once, then move on</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">6.</span>
                  <span>It&apos;s a numbers game—send volume</span>
                </li>
              </ul>
              <p className="text-white/60 mt-6 italic">
                Recruiting is relationship-based, even in cold outreach. ChatGPT helps you scale the personalization. 
                Your job is to be genuinely helpful once they respond.
              </p>
            </section>
          </div>
        </article>

        <div className="mt-16">
          <EmailSignup />
        </div>

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-linkedin-outreach', title: 'ChatGPT LinkedIn Outreach', description: 'Templates for reaching out to connections.' },
            { slug: 'ai-networking-emails', title: 'AI Networking Emails', description: 'Build professional relationships with AI-written emails.' },
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Copy-paste prompts to improve your resume with AI.' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 px-6 py-12">
        <div className="max-w-5xl mx-auto text-center text-white/40 text-sm">
          © 2025 GetTheJobAI. Built to help job seekers win.
        </div>
      </footer>
    </div>
  )
}

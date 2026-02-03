import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finding Remote Jobs with AI: The 2026 Playbook | GetTheJobAI',
  description: 'Use AI to find hidden remote jobs, tailor applications at scale, and prove your remote readiness. Beat global competition.',
  keywords: ['remote job search AI', 'find remote jobs chatgpt', 'AI remote work', 'remote job application tips'],
}

export default function RemoteJobSearchAIPage() {
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
            Remote Work
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Finding Remote Jobs with AI: The 2026 Playbook
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Remote work listings get 10x more applications than on-site roles. 
            Here&apos;s how to use AI to actually stand out.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Remote Job Hunting Is Different</h2>
              <p className="text-white/70 mb-4">
                When a company posts a remote role, they&apos;re flooded with applications from everywhere. 
                Your competition isn&apos;t just local—it&apos;s global.
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Your application needs to stand out in seconds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Time zones and async communication skills matter</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Proving you can work independently is crucial</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Companies filter harder because volume is insane</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Strategy 1: Find Hidden Remote Jobs</h2>
              <p className="text-white/70 mb-4">
                The best remote roles often aren&apos;t on major job boards. They&apos;re buried in company 
                career pages, remote-specific boards (We Work Remotely, Remote.co, FlexJobs), 
                and industry communities.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm looking for remote [job type] positions. Beyond LinkedIn and Indeed, what are:

1. Five niche job boards specific to [industry/role]
2. Five companies known for remote-first culture that might be hiring
3. Three communities/forums where remote jobs get posted
4. Keywords I should use to find unlisted remote opportunities`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Strategy 2: Tailor at Scale Without Sounding Generic</h2>
              <p className="text-white/70 mb-4">
                You need to customize each application. But you&apos;re applying to dozens of roles. 
                AI helps you do both.
              </p>
              <p className="text-white/70 mb-4">
                <strong className="text-white">The rapid tailoring system:</strong> First, create a master 
                document with your full background. Then for each application:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Here's the job posting:
[paste full job description]

Here's my background:
[paste your master document]

Write a cover letter that:
- Opens with something specific about this company (research their recent news)
- Matches my experience to their top 3 requirements
- Addresses remote work directly (mention time zone, async experience, home office setup)
- Closes with a specific call to action

Keep it under 250 words. No generic phrases.`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                This gives you customization at speed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Strategy 3: Prove Your Remote Readiness</h2>
              <p className="text-white/70 mb-4">
                Companies hiring remote have one fear: Will this person actually get work done 
                without supervision?
              </p>
              <p className="text-white/70 mb-4">
                <strong className="text-white">Build proof into your application:</strong>
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Mention specific remote tools you use (Slack, Notion, Loom, Zoom)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Reference async communication experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Note your time zone and overlap with their team</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>If you&apos;ve worked remote before, quantify it</span>
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for remote positions. Rewrite these resume bullets to emphasize remote work competencies:

[paste your bullets]

Add references to:
- Self-direction and accountability
- Async communication
- Remote collaboration tools
- Time management and productivity`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Strategy 4: Optimize for Async Screening</h2>
              <p className="text-white/70 mb-4">
                Many remote companies use async video interviews (Loom, HireVue) as first screens. 
                This filters for communication skills.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I have an async video interview for [role] at [company]. The questions are:

[paste questions if you have them]

For each question, give me:
1. A structured answer framework (30-60 seconds each)
2. Key points to hit
3. One specific example I should include
4. Common mistakes to avoid`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                Then practice on camera. Remote companies judge your video presence heavily.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Strategy 5: Network Into Remote Roles</h2>
              <p className="text-white/70 mb-4">
                Cold applications have low success rates. Warm intros still win.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm targeting remote roles in [industry/function]. Help me identify:

1. LinkedIn search terms to find people who work remotely at my target companies
2. Questions to ask in informational interviews about their remote culture
3. Online communities where remote workers in my field hang out
4. Influencers/thought leaders in the remote work space worth following`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                One conversation with someone inside a remote company is worth 50 cold applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Remote Job Search Stack</h2>
              <p className="text-white/70 mb-4">Tools to use:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">AI (ChatGPT/Claude):</strong> Application customization, research, interview prep</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Notion/Airtable:</strong> Track applications, follow-ups, company research</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Loom:</strong> Practice async video responses</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Calendly:</strong> Easy scheduling across time zones</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">LinkedIn Sales Navigator:</strong> Find decision-makers (free trial works)</span>
                </li>
              </ul>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Real Talk: The Remote Premium</h2>
              <p className="text-white/70 mb-4">
                Remote roles often pay less because companies know you value the flexibility. 
                Decide what tradeoffs you&apos;ll accept.
              </p>
              <p className="text-white/70 mb-4">
                Some roles demand specific time zones. Others are truly async. Know the difference 
                before you apply.
              </p>
              <p className="text-white/70">
                And remember: &ldquo;Remote&rdquo; sometimes means &ldquo;remote until we change our mind.&rdquo; 
                Ask about their long-term remote commitment in interviews.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Action Step</h2>
              <p className="text-white/70 mb-4">
                Run the hidden jobs prompt above and find 5 opportunities you didn&apos;t know existed. 
                That&apos;s your starting list for this week.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-cover-letter-generator"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Cover Letter Generator →
                </Link>
                <Link 
                  href="/guides/ai-interview-prep"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Interview Prep →
                </Link>
              </div>
            </section>
          </div>
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

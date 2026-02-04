import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use ChatGPT for Career Change: A Practical Guide (2026) | GetTheJobAI',
  description: 'Use ChatGPT to plan and execute a career change. Learn to assess transferable skills, research industries, rewrite your resume, and craft your career change narrative.',
  keywords: ['chatgpt career change', 'career pivot ai', 'chatgpt new career', 'ai career transition', 'switch careers with chatgpt', 'career change guide'],
}

export default function ChatGPTCareerChangePage() {
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
            Career Pivot
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Use ChatGPT for Career Change: A Practical Guide
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Thinking about changing careers? It&apos;s one of the biggest decisions you&apos;ll make—and AI can help you navigate it more strategically. Here&apos;s how to use ChatGPT to plan and execute a career change in 2026.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Assess Your Transferable Skills</h2>
              <p className="text-white/70 mb-4">
                Most people underestimate how many of their skills transfer to new fields.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I currently work as a [current role] and want to transition to [target role/industry]. What transferable skills do I likely have? Be specific about how each skill applies.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                This helps you see your experience through a new lens.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Research Target Industries</h2>
              <p className="text-white/70 mb-4">
                Before committing to a new direction, do your homework.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`What are the biggest challenges facing [industry] in 2026? What skills are most in-demand? What does a typical career path look like?`}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">FOLLOW-UP</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`What are the realistic salary ranges for [role] at entry, mid, and senior levels?`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Identify Your Gaps</h2>
              <p className="text-white/70 mb-4">
                Be honest about what you&apos;re missing.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on typical [target role] job descriptions, what skills or qualifications am I likely missing coming from [current role]? Prioritize by importance.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                This gives you a learning roadmap.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Rewrite Your Resume for the Pivot</h2>
              <p className="text-white/70 mb-4">
                Your resume needs to tell a new story—one where your past experience leads naturally to your target role.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite my resume experience from [current role] to emphasize relevance to [target role]. Focus on transferable achievements, not just duties.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 5: Prepare Your Narrative</h2>
              <p className="text-white/70 mb-4">
                In interviews, you&apos;ll be asked &quot;why the change?&quot; Have a compelling answer.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me articulate why I'm transitioning from [current field] to [target field]. Make it sound authentic and forward-looking, not like I'm running from something.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                Practice this until it flows naturally.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 6: Network Into Your Target Industry</h2>
              <p className="text-white/70 mb-4">
                Cold applications rarely work for career changers. Warm introductions do.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm transitioning from [current] to [target]. What types of people should I network with? What questions should I ask them to learn about the industry?`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 7: Consider Intermediate Steps</h2>
              <p className="text-white/70 mb-4">
                Sometimes the best career change isn&apos;t direct—it&apos;s a two-step move.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Is there an intermediate role between [current role] and [target role] that would help me build relevant experience? What bridge roles exist?`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Career Change Mistakes</h2>
              <ul className="space-y-4 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Applying cold to hundreds of jobs</strong> — Your resume won&apos;t make it past ATS without relevant keywords
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Not building skills first</strong> — Take courses, do projects, get certifications if needed
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Underselling yourself</strong> — Your experience has value, even if it&apos;s not a direct match
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Waiting until you&apos;re &quot;ready&quot;</strong> — You&apos;ll never feel 100% ready. Start networking now.
                  </div>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tools Beyond ChatGPT</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">LinkedIn Learning:</strong> Build skills with recognized certificates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Coursera/edX:</strong> University-backed programs for serious credentials</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Side projects:</strong> Build a portfolio in your target field</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Informational interviews:</strong> Nothing beats talking to people doing what you want to do</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">Make It Real This Week</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  Use the prompts above to map out your transferable skills
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  Identify 3 people in your target industry to reach out to
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  Start one course or project that builds relevant experience
                </li>
              </ul>
              <p className="text-white/70 mt-4">
                Career changes take time. AI helps you move faster and smarter—but you still have to put in the work.
              </p>
            </section>

            <p className="text-white/50 italic border-t border-white/10 pt-8">
              Your past doesn&apos;t define your future. Use every tool available to bridge the gap.
            </p>
          </div>
        </article>

        <RelatedGuides 
          guides={[
            { slug: 'ai-skills-gap-analysis', title: 'AI Skills Gap Analysis', description: 'Identify skill gaps and close them' },
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Copy-paste prompts to improve your resume' },
            { slug: 'ai-networking-tips', title: 'AI Networking Tips', description: 'Expand your professional network with AI' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-sm text-white/40">
            © 2026 GetTheJobAI. Helping job seekers use AI effectively.
          </p>
        </div>
      </footer>
    </div>
  )
}

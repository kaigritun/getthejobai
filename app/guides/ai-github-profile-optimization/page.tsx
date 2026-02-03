import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Optimize Your GitHub Profile with AI: The Developer\'s Secret Weapon | GetTheJobAI',
  description: 'Use AI to optimize your GitHub profile, write better READMEs, and impress recruiters. 70% of tech recruiters check GitHub before interviews.',
  keywords: ['github profile optimization', 'github ai', 'github readme', 'developer portfolio', 'tech recruiter github'],
}

export default function AIGitHubProfileOptimizationPage() {
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
            GitHub
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Optimize Your GitHub Profile with AI: The Developer&apos;s Secret Weapon
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your GitHub profile is your developer resume. Recruiters spend less than 30 seconds scanning it. 
            Here&apos;s how to use AI to make every second count.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Your GitHub Profile Matters</h2>
              <p className="text-white/70 mb-4">
                70% of tech recruiters check GitHub before interviews. A weak profile loses opportunities 
                before you even know they existed.
              </p>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold mb-2">What recruiters scan for:</p>
                <ul className="space-y-1 text-white/70">
                  <li>• Active contribution history (that green grid)</li>
                  <li>• Quality README files</li>
                  <li>• Clean, documented code</li>
                  <li>• Professional bio</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">AI-Powered Profile Optimization</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">1.</span>
                    Bio That Converts
                  </h3>
                  <p className="text-white/70 mb-4">
                    Your bio has 160 characters. Every word matters.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a GitHub bio for a [your role] with [X] years experience. 
Include: specialty in [tech stack], open to [opportunities].
Keep under 160 characters. Make it memorable, not generic.`}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 font-semibold text-sm mb-2">Before:</p>
                      <p className="text-white/70 text-sm">&ldquo;Software developer who likes coding&rdquo;</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <p className="text-emerald-400 font-semibold text-sm mb-2">After:</p>
                      <p className="text-white/70 text-sm">&ldquo;Full-stack engineer | React + Node | Building tools that ship fast | Open to collabs&rdquo;</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">2.</span>
                    README That Sells
                  </h3>
                  <p className="text-white/70 mb-4">
                    Your profile README is prime real estate. Use AI to structure it.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">WHAT TO INCLUDE</p>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• One-line hook about what you build</li>
                      <li>• 3-4 key skills with icons</li>
                      <li>• Current project spotlight</li>
                      <li>• How to reach you</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a GitHub profile README for a developer specializing in [stack].
Include: brief intro, skill badges, current project highlight, contact links.
Keep it scannable. Use emojis sparingly.`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">3.</span>
                    Repository Documentation
                  </h3>
                  <p className="text-white/70 mb-4">
                    Every public repo should have a README. AI makes this painless.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a README for a [project type] that does [function].
Include: what it does, how to install, basic usage example, tech stack.
Keep it under 200 words.`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">4.</span>
                    Better Commit Messages
                  </h3>
                  <p className="text-white/70 mb-4">
                    Better commit messages and PR descriptions show professionalism.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite this commit message to be clear and professional:
[your rough description]
Format: imperative mood, under 50 chars for title`}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Green Grid Strategy</h2>
              <p className="text-white/70 mb-4">
                Consistent activity matters. Use AI to help:
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Find contribution opportunities</strong> — Ask ChatGPT for beginner-friendly issues in repos using your tech stack</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Documentation PRs</strong> — Easiest way to contribute. Fix typos, improve explanations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Personal projects</strong> — Small daily commits add up</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tools That Help</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-white/10 rounded-lg p-4">
                  <p className="font-bold mb-1">GitHub Copilot</p>
                  <p className="text-sm text-white/50">Write better code faster</p>
                </div>
                <div className="border border-white/10 rounded-lg p-4">
                  <p className="font-bold mb-1">ChatGPT</p>
                  <p className="text-sm text-white/50">Documentation, READMEs, bios</p>
                </div>
                <div className="border border-white/10 rounded-lg p-4">
                  <p className="font-bold mb-1">Claude</p>
                  <p className="text-sm text-white/50">Code reviews, explaining repos</p>
                </div>
              </div>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Quick Wins (Do Today)</h2>
              <ol className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5 min</span>
                  <span>Update your bio</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">15 min</span>
                  <span>Add a profile README</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">20 min</span>
                  <span>Document your best repo</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5 min</span>
                  <span>Pin 6 repos that showcase your range</span>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What Recruiters Actually Check</h2>
              <p className="text-white/70 mb-4">From talking to tech recruiters:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Contribution consistency &gt; one big project</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Documentation quality &gt; code complexity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Evidence of collaboration (PRs, issues)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Projects relevant to job you want</span>
                </li>
              </ul>
              <p className="text-white/50 text-sm mt-4">
                Your GitHub is a living portfolio. AI helps you maintain it without burning hours.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/linkedin-ai-optimization"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  LinkedIn AI Optimization →
                </Link>
                <Link 
                  href="/guides/chatgpt-resume-prompts"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  ChatGPT Resume Prompts →
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
            © 2026 GetTheJobAI. Helping job seekers use AI effectively.
          </p>
        </div>
      </footer>
    </div>
  )
}

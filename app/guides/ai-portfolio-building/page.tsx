import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Build a Killer Portfolio with AI in 2026 | GetTheJobAI',
  description: 'Use AI to build portfolio projects fast. Generate ideas, scaffold projects, create case studies, and stand out from the competition.',
  keywords: ['ai portfolio', 'portfolio building ai', 'chatgpt portfolio', 'ai portfolio projects', 'career portfolio ai'],
}

export default function AIPortfolioBuildingPage() {
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
            Portfolio
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Build a Killer Portfolio with AI in 2026
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your portfolio is often the difference between landing an interview and getting ghosted. 
            Here&apos;s how to use AI to build one that actually converts.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Your Portfolio Matters More Than Your Resume</h2>
              <p className="text-white/70 mb-4">
                Hiring managers spend 6 seconds on resumes. But portfolios? They actually look at those. A strong portfolio:
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Shows what you can actually do (not just what you claim)</li>
                <li>• Demonstrates your thinking process</li>
                <li>• Gives interviewers talking points</li>
                <li>• Sets you apart from candidates with identical resumes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Using AI to Build Portfolio Projects Fast</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">1. Generate Project Ideas That Match Job Descriptions</h3>
                  <p className="text-white/70 mb-4">
                    Feed ChatGPT a job description and ask:
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on this job description, what 3 portfolio projects would demonstrate I'm qualified? Focus on projects I can complete in a weekend that showcase relevant skills.

[paste job description]`}</p>
                  </div>
                  <p className="text-white/50 text-sm">
                    This gives you targeted projects instead of generic ones nobody cares about.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">2. Scaffold Projects with AI Assistance</h3>
                  <p className="text-white/70 mb-4">Use Claude or ChatGPT to:</p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Generate boilerplate code</li>
                    <li>• Create realistic sample data</li>
                    <li>• Write documentation</li>
                    <li>• Build out edge cases</li>
                  </ul>
                  <p className="text-white/50 text-sm mt-4">
                    The key: AI handles the tedious parts so you can focus on the interesting problems.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">3. Create Case Studies That Tell Stories</h3>
                  <p className="text-white/70 mb-4">
                    Every portfolio project needs context. Use AI to structure your case studies:
                  </p>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mb-4">
                    <p className="text-emerald-400 font-bold mb-2">Problem → Process → Solution → Results</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me write a case study for [project]. Include the business problem, my approach, key decisions I made, and measurable outcomes.`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">4. Generate Visual Assets</h3>
                  <p className="text-white/70 mb-4">Tools like Midjourney or DALL-E can create:</p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Project mockups</li>
                    <li>• Before/after comparisons</li>
                    <li>• Process diagrams</li>
                    <li>• Professional screenshots</li>
                  </ul>
                  <p className="text-white/50 text-sm mt-4">
                    Don&apos;t ship ugly screenshots. Polish matters.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Platform-Specific Tips</h2>
              
              <div className="grid gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-emerald-400">For Developers</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Use GitHub Copilot to build projects faster</li>
                    <li>• Let AI write your README files</li>
                    <li>• Generate comprehensive test suites to show quality focus</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-emerald-400">For Designers</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Use AI to generate copy for mockups</li>
                    <li>• Create realistic user personas for case studies</li>
                    <li>• Build out user flows with AI-generated scenarios</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-emerald-400">For Marketers</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Create sample campaigns with AI-generated assets</li>
                    <li>• Build mock analytics dashboards</li>
                    <li>• Write case studies for hypothetical clients</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-red-400">Don&apos;t:</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Show AI-generated work as your own without modification</li>
                    <li>• Include obviously templated projects</li>
                    <li>• Skip the &ldquo;why&rdquo; behind your decisions</li>
                    <li>• Use generic project names (&ldquo;E-commerce Site&rdquo;)</li>
                  </ul>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-emerald-400">Do:</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Customize AI output heavily</li>
                    <li>• Explain your thinking process</li>
                    <li>• Show iteration and improvement</li>
                    <li>• Give projects memorable names</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Portfolio Stack for 2026</h2>
              <ol className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">1.</span>
                  <span><strong className="text-white">Notion or Framer</strong> for hosting (free, fast)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">2.</span>
                  <span><strong className="text-white">ChatGPT/Claude</strong> for content and planning</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">3.</span>
                  <span><strong className="text-white">Midjourney/DALL-E</strong> for visuals</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">4.</span>
                  <span><strong className="text-white">Loom</strong> for walkthrough videos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5.</span>
                  <span><strong className="text-white">GitHub</strong> for code projects</span>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Quick Win: The Weekend Portfolio Sprint</h2>
              
              <div className="space-y-6">
                <div className="border-l-2 border-emerald-500 pl-6">
                  <h3 className="font-bold mb-2">Friday Night</h3>
                  <ul className="space-y-1 text-white/70">
                    <li>• Identify target role, find 3 job postings</li>
                    <li>• Use AI to brainstorm project ideas</li>
                    <li>• Pick one project, scope it down</li>
                  </ul>
                </div>

                <div className="border-l-2 border-emerald-500 pl-6">
                  <h3 className="font-bold mb-2">Saturday</h3>
                  <ul className="space-y-1 text-white/70">
                    <li>• Build the core project with AI assistance</li>
                    <li>• Document as you go</li>
                  </ul>
                </div>

                <div className="border-l-2 border-emerald-500 pl-6">
                  <h3 className="font-bold mb-2">Sunday</h3>
                  <ul className="space-y-1 text-white/70">
                    <li>• Polish visuals and copy</li>
                    <li>• Write the case study</li>
                    <li>• Deploy and share</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/50 text-sm mt-6">
                One weekend, one solid portfolio piece. Repeat until you have 3-4 strong projects.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
              <p className="text-white/70">
                AI won&apos;t build your portfolio for you. But it will 10x your speed. The candidates 
                winning in 2026 are using AI to ship more portfolio projects faster while maintaining quality.
              </p>
              <p className="text-emerald-400 mt-4 font-medium">
                Your competition is still manually writing boilerplate. Take advantage.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <p className="text-white/70 mb-4">
                Level up the rest of your job search:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-personal-branding"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Personal Branding →
                </Link>
                <Link 
                  href="/guides/linkedin-ai-optimization"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  LinkedIn AI Optimization →
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

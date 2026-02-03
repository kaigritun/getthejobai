import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Build a Killer Portfolio with AI in 2026 | GetTheJobAI',
  description: 'Use AI to build a portfolio that lands interviews. Learn to generate project ideas, scaffold projects fast, and create compelling case studies.',
  keywords: ['ai portfolio', 'portfolio building ai', 'chatgpt portfolio', 'ai project ideas', 'portfolio case study'],
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
                Hiring managers spend 6 seconds on resumes. But portfolios? They actually look at those. 
                A strong portfolio:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Shows what you can actually do (not just what you claim)</li>
                <li>• Demonstrates your thinking process</li>
                <li>• Gives interviewers talking points</li>
                <li>• Sets you apart from candidates with identical resumes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Generate Project Ideas That Match Job Descriptions</h2>
              <p className="text-white/70 mb-4">
                Feed ChatGPT a job description and ask:
              </p>
              <div className="bg-white/5 rounded-lg p-4 font-mono text-sm text-white/80 mb-4">
                Based on this job description, what 3 portfolio projects would demonstrate I&apos;m qualified? 
                Focus on projects I can complete in a weekend that showcase relevant skills.
                <br/><br/>
                [paste job description]
              </div>
              <p className="text-white/70">
                This gives you targeted projects instead of generic ones nobody cares about.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Scaffold Projects with AI Assistance</h2>
              <p className="text-white/70 mb-4">
                Use Claude or ChatGPT to:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Generate boilerplate code</li>
                <li>• Create realistic sample data</li>
                <li>• Write documentation</li>
                <li>• Build out edge cases</li>
              </ul>
              <p className="text-white/70">
                The key: AI handles the tedious parts so you can focus on the interesting problems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Create Case Studies That Tell Stories</h2>
              <p className="text-white/70 mb-4">
                Every portfolio project needs context. Use AI to structure your case studies:
              </p>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mb-4">
                <p className="font-bold text-emerald-400 mb-2">Problem → Process → Solution → Results</p>
                <p className="text-white/70 text-sm">
                  Prompt: &quot;Help me write a case study for [project]. Include the business problem, 
                  my approach, key decisions I made, and measurable outcomes.&quot;
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Generate Visual Assets</h2>
              <p className="text-white/70 mb-4">
                Tools like Midjourney or DALL-E can create:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Project mockups</li>
                <li>• Before/after comparisons</li>
                <li>• Process diagrams</li>
                <li>• Professional screenshots</li>
              </ul>
              <p className="text-white/70">
                Don&apos;t ship ugly screenshots. Polish matters.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Platform-Specific Tips</h2>
              <div className="grid gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-emerald-400">For Developers</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Use GitHub Copilot to build projects faster</li>
                    <li>• Let AI write your README files</li>
                    <li>• Generate comprehensive test suites to show quality focus</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-emerald-400">For Designers</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Use AI to generate copy for mockups</li>
                    <li>• Create realistic user personas for case studies</li>
                    <li>• Build out user flows with AI-generated scenarios</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-emerald-400">For Marketers</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
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
                    <li>• Skip the &quot;why&quot; behind your decisions</li>
                    <li>• Use generic project names (&quot;E-commerce Site&quot;)</li>
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
              <ol className="space-y-2 text-white/70">
                <li><span className="text-emerald-400 font-bold">1.</span> Notion or Framer for hosting (free, fast)</li>
                <li><span className="text-emerald-400 font-bold">2.</span> ChatGPT/Claude for content and planning</li>
                <li><span className="text-emerald-400 font-bold">3.</span> Midjourney/DALL-E for visuals</li>
                <li><span className="text-emerald-400 font-bold">4.</span> Loom for walkthrough videos</li>
                <li><span className="text-emerald-400 font-bold">5.</span> GitHub for code projects</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Quick Win: The Weekend Portfolio Sprint</h2>
              <div className="bg-white/5 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-emerald-400 mb-1">Friday night:</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• Identify target role, find 3 job postings</li>
                      <li>• Use AI to brainstorm project ideas</li>
                      <li>• Pick one project, scope it down</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-emerald-400 mb-1">Saturday:</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• Build the core project with AI assistance</li>
                      <li>• Document as you go</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-emerald-400 mb-1">Sunday:</p>
                    <ul className="text-white/70 text-sm space-y-1">
                      <li>• Polish visuals and copy</li>
                      <li>• Write the case study</li>
                      <li>• Deploy and share</li>
                    </ul>
                  </div>
                </div>
                <p className="text-white/50 text-sm mt-4 pt-4 border-t border-white/10">
                  One weekend, one solid portfolio piece. Repeat until you have 3-4 strong projects.
                </p>
              </div>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Bottom Line</h2>
              <p className="text-white/70">
                AI won&apos;t build your portfolio for you. But it will 10x your speed. The candidates 
                winning in 2026 are using AI to ship more portfolio projects faster while maintaining quality.
              </p>
              <p className="text-white/70 mt-4">
                Your competition is still manually writing boilerplate. Take advantage.
              </p>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'ai-freelance-portfolio',
                              title: 'Freelance Portfolio',
                              description: 'Build a portfolio for freelance work.'
                    },
                    {
                              slug: 'ai-github-profile-optimization',
                              title: 'GitHub Profile',
                              description: 'Tech portfolios on GitHub.'
                    },
                    {
                              slug: 'ai-personal-branding',
                              title: 'Personal Branding',
                              description: 'Your portfolio is part of your brand.'
                    }
          ]} />
        </article>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-4">Related Guides</p>
          <div className="grid gap-4">
            <Link 
              href="/guides/chatgpt-resume-prompts"
              className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors block"
            >
              <p className="font-semibold">ChatGPT Resume Prompts That Actually Work</p>
              <p className="text-white/50 text-sm mt-1">Prompts for writing, optimizing, and tailoring your resume</p>
            </Link>
            <Link 
              href="/guides/linkedin-ai-optimization"
              className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors block"
            >
              <p className="font-semibold">LinkedIn Optimization with AI</p>
              <p className="text-white/50 text-sm mt-1">Optimize your profile to get found by recruiters</p>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 mt-16">
        <div className="max-w-5xl mx-auto text-center text-white/40 text-sm">
          <p>© 2026 GetTheJobAI. AI-powered tools for job seekers.</p>
        </div>
      </footer>
    </div>
  )
}

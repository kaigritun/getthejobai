import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building a Freelance Portfolio with AI | GetTheJobAI',
  description: 'Use AI to build impressive portfolio projects without client work. Generate ideas, create spec work, and write compelling case studies.',
  keywords: ['ai portfolio', 'freelance portfolio', 'spec work ai', 'portfolio projects', 'chatgpt portfolio'],
}

export default function AIFreelancePortfolioPage() {
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
            Building a Freelance Portfolio with AI
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            You don&apos;t need client work to build a portfolio. AI can help you create impressive 
            sample projects that showcase your skills to potential employers and clients.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why a Portfolio Matters</h2>
              <p className="text-white/70 mb-4">
                Hiring managers spend 7 seconds scanning your resume. But they&apos;ll spend 7 minutes 
                exploring a good portfolio. A portfolio shows what you can actually DO, not just what you claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The AI Portfolio Strategy</h2>
              
              <h3 className="text-xl font-semibold mb-3">1. Identify Your Target Role</h3>
              <p className="text-white/70 mb-4">
                Before creating anything, get specific:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• What job title are you targeting?</li>
                <li>• What skills do they need?</li>
                <li>• What projects would impress them?</li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm targeting [role] at [type of company]. What portfolio projects would demonstrate the skills they're looking for?`}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3">2. Create Spec Work That Looks Real</h3>
              <p className="text-white/70 mb-4">
                Spec work (speculative projects) shows your thinking without needing a real client.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-emerald-400">For Designers:</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Redesign a company&apos;s landing page</li>
                    <li>• Create a brand identity</li>
                    <li>• Design a mobile app concept</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-emerald-400">For Developers:</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Build an improved clone</li>
                    <li>• Create an open-source tool</li>
                    <li>• Contribute to projects</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="font-bold mb-2 text-emerald-400">For Marketers:</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Write a content strategy</li>
                    <li>• Create sample ad campaigns</li>
                    <li>• Develop a social playbook</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">3. Use AI to Accelerate Creation</h3>
              <p className="text-white/70 mb-4">
                ChatGPT prompts for portfolio projects:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-sm text-white/40 mb-2 font-mono">PROJECT BRIEF GENERATOR</p>
                  <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a detailed project brief for a [type of project] that would impress a hiring manager at [target company type]. Include objectives, constraints, and success metrics.`}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-sm text-white/40 mb-2 font-mono">CASE STUDY WRITER</p>
                  <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me write a case study for my [project]. Include: the challenge, my approach, the solution, and results (use realistic hypothetical metrics if spec work).`}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-sm text-white/40 mb-2 font-mono">PORTFOLIO DESCRIPTION</p>
                  <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a compelling 2-paragraph description of my [project] for my portfolio. Highlight the skills demonstrated and business value created.`}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Document Your Process</h2>
              <p className="text-white/70 mb-4">
                Process is often more impressive than output:
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Screenshot your research and planning</li>
                <li>• Document design iterations and why you made changes</li>
                <li>• Show your decision-making framework</li>
                <li>• Include what you learned and would do differently</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Present Projects Professionally</h2>
              <p className="text-white/70 mb-4">
                Structure each portfolio piece:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <ol className="space-y-2 text-white/70">
                  <li><strong className="text-emerald-400">1. Hero image</strong> — Best visual from the project</li>
                  <li><strong className="text-emerald-400">2. One-line summary</strong> — What you did and the result</li>
                  <li><strong className="text-emerald-400">3. The challenge</strong> — Context and constraints</li>
                  <li><strong className="text-emerald-400">4. Your approach</strong> — How you tackled it</li>
                  <li><strong className="text-emerald-400">5. The solution</strong> — What you created</li>
                  <li><strong className="text-emerald-400">6. Results</strong> — Metrics or outcomes (hypothetical if spec)</li>
                  <li><strong className="text-emerald-400">7. Learnings</strong> — Shows growth mindset</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Quick Portfolio Builders</h2>
              <p className="text-white/70 mb-4">
                Build a professional portfolio site in hours:
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• <strong className="text-white">Notion</strong> — Free, easy to customize</li>
                <li>• <strong className="text-white">Framer</strong> — Design-focused, looks premium</li>
                <li>• <strong className="text-white">Webflow</strong> — More control, shows technical skills</li>
                <li>• <strong className="text-white">GitHub Pages</strong> — Perfect for developers</li>
                <li>• <strong className="text-white">Behance/Dribbble</strong> — Built-in audience for designers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Quantity Strategy</h2>
              <p className="text-white/70 mb-4">
                Don&apos;t obsess over one perfect project. Better to have 5-7 solid projects showing range:
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Different industries</li>
                <li>• Different scales</li>
                <li>• Different challenges</li>
              </ul>
              <p className="text-white/50 mt-4 text-sm">
                AI helps you produce more projects faster while maintaining quality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Making Spec Work Legitimate</h2>
              <p className="text-white/70 mb-4">
                Worried spec work looks &ldquo;fake&rdquo;? Frame it properly:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• &ldquo;Concept project exploring...&rdquo;</li>
                <li>• &ldquo;Self-directed case study...&rdquo;</li>
                <li>• &ldquo;Skills demonstration for...&rdquo;</li>
              </ul>
              <p className="text-white/50 text-sm">
                Being transparent about spec work is fine. What matters is the quality of thinking it demonstrates.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <ol className="space-y-2 text-white/70">
                <li><span className="text-emerald-400 font-mono">1.</span> Define your target role and required skills</li>
                <li><span className="text-emerald-400 font-mono">2.</span> Brainstorm 5-7 project ideas with ChatGPT</li>
                <li><span className="text-emerald-400 font-mono">3.</span> Create one project this week</li>
                <li><span className="text-emerald-400 font-mono">4.</span> Write the case study using AI assistance</li>
                <li><span className="text-emerald-400 font-mono">5.</span> Repeat until portfolio is complete</li>
              </ol>
              <p className="text-emerald-400 mt-6 font-medium">
                A strong portfolio can be built in 2-3 weeks with focused effort and AI assistance. Start today.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <p className="text-white/70 mb-4">
                Build out the rest of your job search materials:
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
                  LinkedIn Optimization →
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

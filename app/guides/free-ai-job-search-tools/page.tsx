import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '15 Free AI Tools for Job Search in 2026 (Actually Free) | GetTheJobAI',
  description: 'The best free AI tools for job searching — resume builders, interview prep, and application automation. No credit card required.',
  keywords: ['free ai job search tools', 'free resume builder', 'free interview prep', 'ai job search free'],
}

export default function FreeAIJobSearchToolsPage() {
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
            Tools
          </p>
          <h1 className="text-4xl font-bold mb-6">
            15 Free AI Tools for Job Search in 2026
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Every &ldquo;free AI tool&rdquo; list is full of tools that are free for 7 days then charge you $30/month. 
            This list is different. These are tools that are actually free — either completely free, or have 
            generous free tiers that cover what job seekers need.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">Resume & Cover Letter Tools</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">1.</span>
                    <h3 className="font-bold text-lg">ChatGPT (Free Tier)</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Write and optimize resumes, cover letters, and LinkedIn content
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> GPT-4o with usage limits, unlimited GPT-4o mini
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> Everything — this should be your primary tool
                  </p>
                  <p className="text-emerald-400/70 text-sm mt-3">
                    Pro tip: Use the &ldquo;Projects&rdquo; feature to save your resume and job descriptions for context across conversations.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">2.</span>
                    <h3 className="font-bold text-lg">Google Gemini</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Similar to ChatGPT, with access to Google&apos;s latest AI
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> Full access to Gemini 1.5 Pro
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> When you want a second opinion on ChatGPT&apos;s output
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">3.</span>
                    <h3 className="font-bold text-lg">Teal Resume Builder</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    ATS-friendly resume builder with AI suggestions
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> Unlimited resumes, basic AI features
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> People who want a guided resume building experience
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">4.</span>
                    <h3 className="font-bold text-lg">Rezi</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    AI resume builder focused on ATS optimization
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> 1 resume, AI content generation
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> First-time job seekers who need structure
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Interview Prep Tools</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">5.</span>
                    <h3 className="font-bold text-lg">Claude (Free Tier)</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Practice interviews, get feedback on answers, research companies
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> Generous daily limits
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> Detailed company research and thoughtful interview prep
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">6.</span>
                    <h3 className="font-bold text-lg">Interview Warmup by Google</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Practice answering interview questions with AI feedback
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> Completely free
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> Entry-level candidates practicing fundamentals
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">7.</span>
                    <h3 className="font-bold text-lg">Pramp</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Practice technical interviews with peers
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> Unlimited mock interviews
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> Software engineers preparing for coding interviews
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Job Search & Application Tools</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">8.</span>
                    <h3 className="font-bold text-lg">LinkedIn (Free Features)</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Job alerts, company research, AI-assisted applications
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> Most features are free
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> The core of any professional job search
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">9.</span>
                    <h3 className="font-bold text-lg">Otta</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Curated job matches based on your preferences
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> Completely free
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> Tech workers who want quality over quantity
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">10.</span>
                    <h3 className="font-bold text-lg">Simplify</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Auto-fill job applications with your saved info
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> Free browser extension
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> Anyone applying to lots of jobs (reduces form fatigue)
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Networking & Outreach Tools</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">11.</span>
                    <h3 className="font-bold text-lg">Apollo.io</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Find contact info for hiring managers and recruiters
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> 10,000 email credits/month
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> Direct outreach to decision makers
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">12.</span>
                    <h3 className="font-bold text-lg">Hunter.io</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Find and verify email addresses
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> 25 searches/month
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> Verifying emails before cold outreach
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Learning & Skill Development</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">13.</span>
                    <h3 className="font-bold text-lg">Coursera</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Free courses from top universities
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> Audit most courses for free (no certificate)
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> Adding in-demand skills to your resume
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">14.</span>
                    <h3 className="font-bold text-lg">Khan Academy</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Free education on fundamentals
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> Completely free
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> Brushing up on basics before technical interviews
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-400 font-bold">15.</span>
                    <h3 className="font-bold text-lg">freeCodeCamp</h3>
                  </div>
                  <p className="text-white/70 mb-3">
                    Learn coding and get certifications
                  </p>
                  <p className="text-white/50 text-sm mb-2">
                    <strong className="text-white/70">Free tier:</strong> Completely free
                  </p>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Best for:</strong> Career switchers moving into tech
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How to Use These Tools Together</h2>
              <p className="text-white/70 mb-4">
                Here&apos;s a workflow that combines these free tools:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <span><strong className="text-white">Research</strong> — Use ChatGPT/Claude to research target companies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <span><strong className="text-white">Resume</strong> — Build in Teal, optimize with ChatGPT</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <span><strong className="text-white">Apply</strong> — Use Simplify to auto-fill applications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  <span><strong className="text-white">Outreach</strong> — Find contacts on Apollo, verify with Hunter</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5.</span>
                  <span><strong className="text-white">Interview prep</strong> — Practice with Interview Warmup, deep prep with Claude</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">6.</span>
                  <span><strong className="text-white">Follow up</strong> — Write thank you emails with ChatGPT</span>
                </li>
              </ul>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">The Catch: What Free Tiers Don&apos;t Cover</h2>
              <p className="text-white/70 mb-4">
                Most free tiers limit:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-white/40">•</span>
                  Number of applications/exports
                </li>
                <li className="flex gap-3">
                  <span className="text-white/40">•</span>
                  Advanced AI features (GPT-4 vs GPT-4o)
                </li>
                <li className="flex gap-3">
                  <span className="text-white/40">•</span>
                  Team/collaboration features
                </li>
              </ul>
              <p className="text-white/70">
                For 90% of job seekers, free tiers are enough. If you&apos;re applying to 100+ jobs or need 
                advanced features, you might hit limits.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">My Recommendation</h2>
              <p className="text-white/70 mb-4">
                Start with these three:
              </p>
              <ol className="space-y-2 text-white/70 mb-4">
                <li><strong className="text-white">1. ChatGPT</strong> — Your AI assistant for everything</li>
                <li><strong className="text-white">2. Teal</strong> — Structured resume building</li>
                <li><strong className="text-white">3. Simplify</strong> — Saves hours on applications</li>
              </ol>
              <p className="text-white/70">
                Add the others as needed. Most people don&apos;t need 15 tools — they need 3-4 tools used well.
              </p>
            </section>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-job-search-tools',
              title: 'AI Job Search Tools',
              description: 'Comprehensive guide to all AI tools for job searching.'
            },
            {
              slug: 'best-ai-resume-builders-2026',
              title: 'Best AI Resume Builders 2026',
              description: 'Honest reviews of every major AI resume builder.'
            },
            {
              slug: 'chatgpt-resume-prompts',
              title: 'ChatGPT Resume Prompts',
              description: 'Copy-paste prompts to improve your resume with AI.'
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

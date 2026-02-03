import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Optimize Your LinkedIn with AI (2026 Guide) | GetTheJobAI',
  description: 'Use AI to optimize your LinkedIn profile for recruiter searches. Audit, keywords, headline, and About section—in an afternoon.',
  keywords: ['linkedin optimization', 'linkedin ai', 'linkedin profile optimization', 'linkedin recruiter', 'linkedin keywords'],
}

export default function LinkedInAIOptimizationPage() {
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
            LinkedIn
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Optimize Your LinkedIn with AI (2026 Guide)
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your LinkedIn profile is a search engine. Recruiters type keywords, LinkedIn shows results. 
            If you&apos;re not optimized, you&apos;re invisible. Here&apos;s how to fix that in an afternoon.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why LinkedIn Matters More Than Your Resume</h2>
              <p className="text-white/70 mb-4">
                Recruiters don&apos;t read resumes first anymore. They search LinkedIn, find candidates, then ask for resumes. 
                If your profile sucks, your perfect resume never gets seen.
              </p>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold mb-2">The math:</p>
                <p className="text-white/70">
                  87% of recruiters use LinkedIn to vet candidates. Your profile is your landing page.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">The AI Optimization Process</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">Step 1:</span>
                    Audit Your Current Profile
                  </h3>
                  <p className="text-white/70 mb-4">
                    Paste your entire LinkedIn profile (headline, about, experience) into ChatGPT:
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Review this LinkedIn profile for a [your role] looking for [target role] positions. 
Identify:
1. Missing keywords recruiters search for
2. Weak sections that need improvement
3. What's working well

[paste profile]`}</p>
                  </div>
                  <p className="text-white/50 text-sm mt-4">
                    You&apos;ll get a specific list of what to fix.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">Step 2:</span>
                    Research Keywords
                  </h3>
                  <p className="text-white/70 mb-4">
                    Find 3-5 job postings for your target role. Paste them into ChatGPT:
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Extract the top 20 keywords and skills from these job postings 
that should appear on my LinkedIn profile:

[paste job postings]`}</p>
                  </div>
                  <p className="text-white/50 text-sm mt-4">
                    These are the exact terms recruiters search for. Use them.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">Step 3:</span>
                    Rewrite Your Headline
                  </h3>
                  <p className="text-white/70 mb-4">
                    Your headline is the most important line on LinkedIn. It shows up in search results, messages, and comments.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 font-semibold text-sm mb-2">Bad:</p>
                      <p className="text-white/70 text-sm">&ldquo;Marketing Manager at XYZ Corp&rdquo;</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <p className="text-emerald-400 font-semibold text-sm mb-2">Good:</p>
                      <p className="text-white/70 text-sm">&ldquo;B2B Marketing Manager | Content Strategy & Demand Gen | SaaS&rdquo;</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write 5 LinkedIn headlines for a [role] with experience in [skills]. 
Include keywords that recruiters search for. 
Keep each under 120 characters.`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">Step 4:</span>
                    Fix Your About Section
                  </h3>
                  <p className="text-white/70 mb-4">
                    Your About section should be:
                  </p>
                  <ul className="space-y-1 text-white/70 mb-4">
                    <li>• First person (sounds human)</li>
                    <li>• Keyword-rich (gets found)</li>
                    <li>• Results-focused (proves value)</li>
                  </ul>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite this LinkedIn About section to be:
- First person, conversational tone
- Include these keywords naturally: [your keyword list]
- Lead with a hook that makes recruiters keep reading
- End with a call to action

[paste current About]`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">Step 5:</span>
                    Optimize Experience Bullets
                  </h3>
                  <p className="text-white/70 mb-4">
                    Each role needs accomplishments, not job descriptions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 font-semibold text-sm mb-2">Bad:</p>
                      <p className="text-white/70 text-sm">&ldquo;Responsible for email marketing campaigns&rdquo;</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <p className="text-emerald-400 font-semibold text-sm mb-2">Good:</p>
                      <p className="text-white/70 text-sm">&ldquo;Grew email list from 5K to 45K subscribers, averaging 42% open rates&rdquo;</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite these job bullets to be achievement-focused with metrics. 
Include relevant keywords for [target role].

[paste bullets]`}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Advanced: Use AI for Weekly Posts</h2>
              <p className="text-white/70 mb-4">
                LinkedIn rewards consistent posting. Use AI to batch-create content:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Generate 4 LinkedIn post ideas for a [role] sharing insights about [topic].
Each post should:
- Start with a hook (question or bold statement)
- Be 150-200 words
- End with engagement question`}</p>
              </div>
              <p className="text-white/50 text-sm">
                Schedule them weekly. Consistency beats perfection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes</h2>
              <div className="space-y-3">
                <div className="flex gap-3 text-white/70">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Keyword stuffing</strong> — Reads like spam, turns off humans</span>
                </div>
                <div className="flex gap-3 text-white/70">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">No profile photo</strong> — Looks fake or abandoned</span>
                </div>
                <div className="flex gap-3 text-white/70">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Generic headline</strong> — &ldquo;Seeking opportunities&rdquo; = invisible</span>
                </div>
                <div className="flex gap-3 text-white/70">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Empty About</strong> — Wastes prime real estate</span>
                </div>
              </div>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">The 1-Hour LinkedIn Overhaul</h2>
              <p className="text-white/70 mb-4">If you only have an hour:</p>
              <ol className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">10 min</span>
                  <span>Run the audit prompt, get keyword list</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">15 min</span>
                  <span>Rewrite headline and About</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">25 min</span>
                  <span>Update top 2 job experiences</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">10 min</span>
                  <span>Add relevant skills, request recommendations</span>
                </li>
              </ol>
              <p className="text-emerald-400 mt-4 font-medium">
                You&apos;ll have a better profile than 90% of candidates.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <p className="text-white/70 mb-4">
                Complete your job search optimization:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/chatgpt-resume-prompts"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  ChatGPT Resume Prompts →
                </Link>
                <Link 
                  href="/guides/best-ai-resume-builders-2026"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Best AI Resume Builders →
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
        
          <RelatedGuides guides={[
                    {
                              slug: 'chatgpt-linkedin-outreach',
                              title: 'LinkedIn Outreach',
                              description: 'Craft messages that get responses on LinkedIn.'
                    },
                    {
                              slug: 'ai-personal-branding',
                              title: 'AI Personal Branding',
                              description: 'Build a compelling professional presence.'
                    },
                    {
                              slug: 'ai-networking-emails',
                              title: 'AI Networking Emails',
                              description: 'Connect with people beyond LinkedIn.'
                    }
          ]} />
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

import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Resume for Software Engineers: Complete 2026 Guide | GetTheJobAI',
  description: 'Use AI to build a software engineer resume that beats ATS systems. Prompts for bullet points, technical skills sections, and portfolio projects.',
  keywords: ['software engineer resume', 'developer resume ai', 'tech resume prompts', 'ats resume software engineer'],
}

export default function AiResumeSoftwareEngineerPage() {
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
            Resume
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Resume for Software Engineers: The Complete 2026 Guide
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your resume has 6 seconds to pass the ATS. Here&apos;s how to use AI to make every second count.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Software Engineer Resumes Fail</h2>
              <p className="text-white/70 mb-4">
                Most dev resumes fail for predictable reasons:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Generic tech stacks</strong> — listing every language you&apos;ve touched</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">No quantifiable impact</strong> — &ldquo;built features&rdquo; says nothing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">ATS keyword gaps</strong> — missing terms the system scans for</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Poor formatting</strong> — fancy designs that parsers can&apos;t read</span>
                </li>
              </ul>
              <p className="text-white/70 mt-4">AI fixes all of this.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Analyze the Job Description</h2>
              <p className="text-white/70 mb-4">
                Before writing anything, feed the job posting to ChatGPT or Claude:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Analyze this software engineer job posting. Extract:
1. Required technical skills (languages, frameworks, tools)
2. Soft skills mentioned
3. Experience level expected
4. Key responsibilities
5. ATS keywords I should include

[Paste job description]`}</p>
              </div>
              <p className="text-white/50 text-sm">
                This gives you the exact keywords and skills to emphasize.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Rewrite Your Bullet Points with Impact</h2>
              <p className="text-white/70 mb-4">
                Bad: &ldquo;Built REST APIs using Node.js&rdquo;
              </p>
              <p className="text-white/70 mb-4">
                Better: &ldquo;Designed and deployed REST APIs serving 50K+ daily requests, reducing response latency by 40%&rdquo;
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite these resume bullets for a software engineer role. For each bullet:
- Add a specific metric or quantifiable result
- Start with a strong action verb
- Include relevant technologies
- Keep under 2 lines

My bullets:
[Paste your current bullets]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Optimize for ATS</h2>
              <p className="text-white/70 mb-4">
                Run your resume through an ATS checker like Jobscan, then use AI to fill gaps:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`My resume is missing these keywords for a [role] position: [keywords]

Suggest natural ways to incorporate these into my experience bullets without keyword stuffing.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Technical Skills Section</h2>
              <p className="text-white/70 mb-4">
                Don&apos;t just list technologies. Group them strategically:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Languages: Python, JavaScript, TypeScript, Go
Frameworks: React, Node.js, Django, FastAPI
Cloud/DevOps: AWS (EC2, Lambda, S3), Docker, Kubernetes, CI/CD
Databases: PostgreSQL, MongoDB, Redis
Tools: Git, Jira, Datadog, Terraform`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">AI tip:</strong> Ask ChatGPT to organize your skills based on the job description&apos;s priorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Projects That Get Callbacks</h2>
              <p className="text-white/70 mb-4">
                Include 2-3 projects with this structure:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Name</strong> — What it does in one sentence</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Tech stack</strong> — Languages/frameworks used</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Impact</strong> — Users, scale, or problem solved</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Link</strong> — GitHub or live demo</span>
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me describe this side project for my resume:
[Brief description of your project]

Make it sound professional, mention the tech stack, and highlight any impressive metrics (users, performance, complexity).`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Listing every technology</strong> — Focus on what&apos;s relevant to the role</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">No links</strong> — Always include GitHub, portfolio, or LinkedIn</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Same resume for every job</strong> — Customize keywords per application</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Ignoring soft skills</strong> — &ldquo;Led team of 4&rdquo; shows leadership</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Sample AI-Optimized Bullets</h2>
              <div className="mb-4">
                <p className="text-white/50 text-sm mb-2">Before AI:</p>
                <ul className="space-y-1 text-white/70">
                  <li>• Worked on backend services</li>
                  <li>• Fixed bugs in production</li>
                  <li>• Attended code reviews</li>
                </ul>
              </div>
              <div>
                <p className="text-emerald-400 text-sm mb-2">After AI optimization:</p>
                <ul className="space-y-1 text-white/90">
                  <li>• Architected microservices handling 1M+ daily transactions, achieving 99.9% uptime</li>
                  <li>• Reduced production incidents by 60% through automated testing and monitoring implementation</li>
                  <li>• Led code reviews for team of 8 engineers, establishing coding standards adopted org-wide</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tools to Use</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <span><strong className="text-white">ChatGPT/Claude</strong> — Rewriting bullets, keyword analysis</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <span><strong className="text-white">Jobscan</strong> — ATS compatibility scoring</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <span><strong className="text-white">Grammarly</strong> — Final polish</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  <span><strong className="text-white">JSON Resume</strong> — Clean, parseable format</span>
                </li>
              </ul>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Next Steps</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  Pick your target role and analyze 3-5 job postings
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  Run your current resume through AI analysis
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  Rewrite every bullet with quantified impact
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  Test against ATS checkers
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5.</span>
                  Apply with confidence
                </li>
              </ul>
            </section>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'chatgpt-resume-prompts',
              title: 'ChatGPT Resume Prompts',
              description: 'Copy-paste prompts to improve any resume with AI.'
            },
            {
              slug: 'ai-github-profile-optimization',
              title: 'AI GitHub Profile Optimization',
              description: 'Optimize your GitHub profile to impress recruiters.'
            },
            {
              slug: 'ats-resume-optimization',
              title: 'ATS Resume Optimization',
              description: 'Get past applicant tracking systems with AI-optimized formatting.'
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

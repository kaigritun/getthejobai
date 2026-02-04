import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Resume Review: Free Tools & Prompts to Fix Your Resume | GetTheJobAI',
  description: 'Get a professional-quality resume review for free using ChatGPT, Claude, and specialized tools. Copy-paste prompts that find real problems.',
  keywords: ['ai resume review', 'free resume review', 'chatgpt resume review', 'resume checker ai'],
}

export default function AIResumeReviewPage() {
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
            AI Resume Review: Free Tools and Prompts to Fix Your Resume in Minutes
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your resume has 6-8 seconds to make an impression. Get a professional-quality 
            review for free using these AI prompts and tools.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why AI Resume Review Works</h2>
              <p className="text-white/70 mb-4">
                Human resume reviewers are expensive ($100-500) and slow (days to weeks). 
                AI is instant and free. More importantly, AI can:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Check against job descriptions</strong> to find missing keywords
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Quantify vague achievements</strong> by asking the right questions
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Compare to industry standards</strong> based on millions of resumes
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Catch formatting issues</strong> that confuse ATS systems
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The 5-Minute AI Resume Audit</h2>
              <p className="text-white/70 mb-6">Run these five prompts in order. Each targets a specific weakness:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">Prompt 1: First Impression Test</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Read this resume and give me your gut reaction in 10 seconds—what stands out, what's confusing, and what's your overall impression? Then list the top 3 things a recruiter would notice first.

[Paste resume]`}</p>
                  </div>
                  <p className="text-white/50 text-sm mt-2">Catches big-picture problems: unclear positioning, missing title, confusing layout.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">Prompt 2: Achievement Analyzer</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Review each bullet point on this resume. For each one, tell me:
1. Is it an achievement or a responsibility?
2. Is it quantified?
3. What question would you ask to make it stronger?

If it's weak, rewrite it with a placeholder for the number I need to provide.

[Paste resume]`}</p>
                  </div>
                  <p className="text-white/50 text-sm mt-2">Transforms &quot;managed social media&quot; into &quot;Grew Instagram followers from 5K to 25K in 6 months.&quot;</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">Prompt 3: Keyword Gap Analysis</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Here's my resume and a job description I'm targeting.

1. List keywords from the job description that are missing from my resume
2. List keywords I have that aren't relevant to this role
3. Suggest where to naturally add the missing keywords

Resume:
[Paste resume]

Job Description:
[Paste job posting]`}</p>
                  </div>
                  <p className="text-white/50 text-sm mt-2">Critical for ATS systems. Missing keywords = automatic rejection.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">Prompt 4: Harsh Critic Mode</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Pretend you're a senior recruiter who's reviewed 10,000 resumes and you're tired of generic ones. Tear this resume apart. What's cliché? What's vague? What would make you pass after 5 seconds? Don't be nice—be useful.

[Paste resume]`}</p>
                  </div>
                  <p className="text-white/50 text-sm mt-2">The politeness of AI is usually a weakness. This prompt removes it.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2">Prompt 5: Rewrite Request</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on all the issues identified, rewrite the top 5 bullet points from my resume to be:
- Achievement-focused (not responsibility-focused)
- Quantified where possible (use [X] if I need to fill in a number)
- Using strong action verbs
- Concise (under 2 lines each)

[Paste problematic bullets]`}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Free AI Resume Review Tools</h2>
              <p className="text-white/70 mb-4">Beyond ChatGPT/Claude, these tools offer specialized analysis:</p>
              
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-400">Jobscan (Free Tier)</h3>
                  <p className="text-white/70 text-sm mt-1"><strong>Best for:</strong> ATS keyword matching</p>
                  <p className="text-white/50 text-sm">Paste resume + job description, get match score. 5 scans/month free.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-400">Resume Worded (Free Tier)</h3>
                  <p className="text-white/70 text-sm mt-1"><strong>Best for:</strong> Overall scoring and line-by-line feedback</p>
                  <p className="text-white/50 text-sm">Upload PDF, get instant analysis. 1 detailed review free.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-400">Teal Resume Builder</h3>
                  <p className="text-white/70 text-sm mt-1"><strong>Best for:</strong> Keyword tracking across applications</p>
                  <p className="text-white/50 text-sm">Build resume in tool, match to job descriptions. Unlimited basic features free.</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-400">Rezi (Free Tier)</h3>
                  <p className="text-white/70 text-sm mt-1"><strong>Best for:</strong> ATS formatting</p>
                  <p className="text-white/50 text-sm">Upload or build resume, get ATS score. 1 resume free.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Issues AI Catches</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">1. Responsibilities vs. Achievements</h3>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-2">
                    <p className="text-red-400 text-sm">❌ &quot;Managed team of 5 engineers&quot;</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                    <p className="text-emerald-400 text-sm">✅ &quot;Led team of 5 engineers to deliver $2M product 3 weeks ahead of schedule&quot;</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">2. Missing Numbers</h3>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-2">
                    <p className="text-red-400 text-sm">❌ &quot;Increased sales significantly&quot;</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                    <p className="text-emerald-400 text-sm">✅ &quot;Increased sales 34% ($1.2M) in Q3 by implementing automated follow-up sequences&quot;</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">3. Generic Summary</h3>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-2">
                    <p className="text-red-400 text-sm">❌ &quot;Results-driven professional with excellent communication skills&quot;</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-3">
                    <p className="text-emerald-400 text-sm">✅ &quot;Product manager with 5 years scaling B2B SaaS products from $0 to $5M ARR&quot;</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Complete Review Workflow</h2>
              <ol className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <strong>Paste full resume</strong> into ChatGPT/Claude
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <strong>Run Prompt 1</strong> (First Impression) - 2 minutes
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <strong>Run Prompt 2</strong> (Achievement Analysis) - 5 minutes
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  <strong>Run Prompt 3</strong> (Keyword Gap) with target job - 5 minutes
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5.</span>
                  <strong>Run Prompt 4</strong> (Harsh Critic) - 3 minutes
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">6.</span>
                  <strong>Run Prompt 5</strong> (Rewrite) for weak bullets - 5 minutes
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">7.</span>
                  <strong>Cross-check</strong> with one free tool (Jobscan or Resume Worded)
                </li>
              </ol>
              <p className="text-white/50 text-sm mt-4">
                <strong className="text-white/70">Total time:</strong> 20-30 minutes for a complete professional review.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What AI Can&apos;t Catch</h2>
              <p className="text-white/70 mb-4">Be aware of limitations:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-white/40">•</span>
                  <strong>Industry-specific nuances</strong> - AI may not know your field&apos;s conventions
                </li>
                <li className="flex gap-3">
                  <span className="text-white/40">•</span>
                  <strong>Company culture fit</strong> - Some prefer creativity, others want corporate
                </li>
                <li className="flex gap-3">
                  <span className="text-white/40">•</span>
                  <strong>Over-reliance on templates</strong> - AI can homogenize your voice
                </li>
                <li className="flex gap-3">
                  <span className="text-white/40">•</span>
                  <strong>Truth verification</strong> - AI can&apos;t fact-check your claims
                </li>
              </ul>
              <p className="text-white/50 text-sm mt-4">
                <strong className="text-white/70">Rule of thumb:</strong> Use AI for structure, keywords, and clarity. Keep your authentic voice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Start Your Review Now</h2>
              <p className="text-white/70 mb-4">
                Copy Prompt 1 above. Paste your resume into ChatGPT or Claude. 
                Get your first impression analysis in 30 seconds.
              </p>
              <p className="text-white/70">
                Your resume is likely better than you think—but has 2-3 specific issues holding it back. 
                <strong className="text-emerald-400"> AI will find them.</strong>
              </p>
            </section>
          </div>
        </article>

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Copy-paste prompts to improve your resume with AI.' },
            { slug: 'ai-cover-letter-generator', title: 'AI Cover Letter Generator', description: 'Generate personalized cover letters in minutes.' },
            { slug: 'ai-job-search-tools', title: 'AI Job Search Tools', description: 'The best AI tools to accelerate your job search.' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 py-8 px-6 mt-16">
        <div className="max-w-3xl mx-auto text-center text-white/40 text-sm">
          © 2025 GetTheJobAI. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

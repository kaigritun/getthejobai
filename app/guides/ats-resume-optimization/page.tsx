import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ATS Resume Optimization: Beat the Bots in 2026 | GetTheJobAI',
  description: 'Learn how to optimize your resume for Applicant Tracking Systems. Keywords, formatting, and AI prompts to get past the bots and land interviews.',
  keywords: ['ATS resume optimization', 'ATS friendly resume', 'beat applicant tracking system', 'ATS keywords'],
}

export default function ATSResumeOptimizationPage() {
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
            ATS Resume Optimization: How to Beat the Bots in 2026
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            75% of resumes never reach human eyes. They get filtered out by Applicant Tracking Systems (ATS) before a recruiter sees them. Here&apos;s how to use AI to optimize your resume for ATS and actually get interviews.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">What is an ATS and Why Does It Matter?</h2>
              <p className="text-white/70 mb-4">
                An Applicant Tracking System scans, parses, and ranks resumes before humans review them. Companies like Workday, Greenhouse, Lever, and Taleo power most corporate hiring.
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-red-400 font-semibold mb-2">The Problem</p>
                <p className="text-white/70">ATS software looks for specific patterns. Creative formatting, fancy designs, or missing keywords = automatic rejection.</p>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold mb-2">The Solution</p>
                <p className="text-white/70">Optimize your resume for both bots AND humans. AI helps you do both.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The 5 ATS Killers (And How to Fix Them)</h2>
              
              <div className="space-y-6">
                <div className="border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">1. Wrong File Format</h3>
                  <p className="text-red-400 text-sm mb-1">Problem: PDFs with complex formatting often parse incorrectly.</p>
                  <p className="text-emerald-400 text-sm">Fix: Use .docx for ATS submission, PDF only for direct sends.</p>
                </div>
                
                <div className="border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">2. Missing Keywords</h3>
                  <p className="text-red-400 text-sm mb-1">Problem: ATS searches for exact keyword matches from the job posting.</p>
                  <p className="text-emerald-400 text-sm">Fix: Use AI to extract and match keywords (see prompts below).</p>
                </div>
                
                <div className="border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">3. Creative Formatting</h3>
                  <p className="text-red-400 text-sm mb-1">Problem: Tables, columns, headers/footers, text boxes break parsing.</p>
                  <p className="text-emerald-400 text-sm">Fix: Simple single-column format. No graphics, no tables.</p>
                </div>
                
                <div className="border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">4. Unusual Section Headers</h3>
                  <p className="text-red-400 text-sm mb-1">Problem: &ldquo;My Journey&rdquo; instead of &ldquo;Experience&rdquo; confuses parsers.</p>
                  <p className="text-emerald-400 text-sm">Fix: Standard headers: Summary, Experience, Education, Skills.</p>
                </div>
                
                <div className="border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-2">5. Missing Contact Info</h3>
                  <p className="text-red-400 text-sm mb-1">Problem: Info in headers/footers often gets ignored.</p>
                  <p className="text-emerald-400 text-sm">Fix: Put name, email, phone, LinkedIn in main body text.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">AI Prompts for ATS Optimization</h2>
              
              <h3 className="font-bold text-lg mb-3">Keyword Extraction</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Analyze this job posting and extract:
1. Required skills (must-have keywords)
2. Preferred skills (nice-to-have keywords)
3. Industry-specific terms
4. Action verbs used
5. Qualifications mentioned

Job posting:
[Paste job posting here]`}</p>
              </div>

              <h3 className="font-bold text-lg mb-3">Keyword Matching</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Compare my resume against this job posting.

My resume:
[Paste resume]

Job posting:
[Paste posting]

Identify:
1. Keywords I'm missing entirely
2. Keywords I mention but should emphasize more
3. My keywords that aren't relevant (remove)
4. Suggested additions with exact placement`}</p>
              </div>

              <h3 className="font-bold text-lg mb-3">ATS-Safe Reformatting</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Reformat my resume to be ATS-compatible:
- Single column layout
- Standard section headers
- No tables or text boxes
- Contact info in body (not header)
- Clean bullet points (• or -)

Keep the content but make it parse-friendly.

[Paste resume]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Keyword Density Sweet Spot</h2>
              <p className="text-white/70 mb-4">
                Too few keywords = filtered out. Too many keywords = looks like spam.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-emerald-400 font-semibold mb-2">Target:</p>
                <ul className="space-y-2 text-white/70">
                  <li>• Primary keywords: 2-3 mentions each</li>
                  <li>• Secondary keywords: 1-2 mentions</li>
                  <li>• Spread naturally across Summary, Experience, and Skills</li>
                </ul>
              </div>

              <h3 className="font-bold text-lg mb-3">Natural Keyword Integration</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I need to add these keywords to my resume naturally:
[List keywords]

Current resume:
[Paste resume]

Integrate these keywords without making the resume sound stuffed or robotic. 
Maintain professional tone and readability.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Section-by-Section ATS Optimization</h2>
              
              <h3 className="font-bold text-lg mb-3">Professional Summary (ATS Gold Mine)</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write an ATS-optimized professional summary for [job title].
Include these keywords naturally: [list from job posting]
Keep it under 4 sentences.
Focus on years of experience, key skills, and measurable achievements.`}</p>
              </div>

              <h3 className="font-bold text-lg mb-3">Experience Section</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite these bullet points to be ATS-optimized:
[Your current bullets]

Requirements:
- Start each with strong action verb
- Include relevant keywords from: [job posting keywords]
- Add metrics where possible
- Keep each bullet under 2 lines`}</p>
              </div>

              <h3 className="font-bold text-lg mb-3">Skills Section</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create an ATS-optimized skills section based on:
Job requirements: [paste from posting]
My actual skills: [your skills]

Format as comma-separated list.
Put exact matches to job posting first.
Include both spelled out and abbreviated versions (e.g., "Search Engine Optimization (SEO)")`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Testing Your ATS Optimization</h2>
              
              <h3 className="font-bold text-lg mb-3">Free ATS Checkers</h3>
              <ul className="space-y-2 text-white/70 mb-6">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <span><strong className="text-white">Jobscan</strong> - Compares resume to job posting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <span><strong className="text-white">Resume Worded</strong> - ATS scoring and feedback</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <span><strong className="text-white">SkillSyncer</strong> - Keyword matching analysis</span>
                </li>
              </ul>

              <h3 className="font-bold text-lg mb-3">AI Self-Test</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Score this resume for ATS compatibility (1-100):

[Paste resume]

Job posting:
[Paste posting]

Evaluate:
1. Keyword match percentage
2. Formatting compatibility
3. Section header recognition
4. Contact info parsability
5. Overall ATS score

List specific improvements needed.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The ATS + Human Balance</h2>
              <p className="text-white/70 mb-4">
                ATS gets you past the bots. But humans make the decision.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">For ATS:</p>
                  <p className="text-white/70">Keywords, standard format, .docx</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">For Humans:</p>
                  <p className="text-white/70">Clear achievements, personality, readability</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT FOR BOTH</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Optimize this resume for both ATS parsing AND human readers.

[Paste resume]

Target job: [job posting]

Make it:
1. Keyword-rich enough to pass ATS filters
2. Readable and compelling for human reviewers
3. Specific with measurable achievements
4. Professional but not robotic`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common ATS Myths (Debunked)</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Myth: White text keywords trick the ATS</strong><br />Truth: Modern ATS detects this. You&apos;ll get blacklisted.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Myth: Graphics and icons are fine</strong><br />Truth: Most ATS can&apos;t parse images. Skip them.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Myth: One resume works for all jobs</strong><br />Truth: Customize keywords for each application.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Myth: ATS only checks the first page</strong><br />Truth: Entire document is parsed. But humans often stop at page one.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Quick ATS Checklist</h2>
              <p className="text-white/70 mb-4">Before submitting any application:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">☐</span>
                  <span>Saved as .docx (not PDF)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">☐</span>
                  <span>Single column, no tables</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">☐</span>
                  <span>Standard section headers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">☐</span>
                  <span>Contact info in body text</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">☐</span>
                  <span>Keywords from job posting included</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">☐</span>
                  <span>Tested with ATS checker tool</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">☐</span>
                  <span>Still reads well for humans</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The 5-Minute ATS Fix</h2>
              <p className="text-white/70 mb-4">Short on time? Use this all-in-one prompt:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">QUICK FIX PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Quick ATS optimization needed.

Job posting:
[Paste posting]

My resume:
[Paste resume]

Give me:
1. Top 10 keywords I must add
2. Exact bullet points to modify (with new versions)
3. Any formatting issues to fix
4. ATS score estimate (before and after)`}</p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <p className="text-xl text-white/70 mb-6">
                Get past the bots. Get to the humans. Get the job.
              </p>
            </section>

            <EmailSignup 
              headline="Get ATS optimization tips weekly"
              buttonText="Subscribe"
            />

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Next Steps</h2>
              <p className="text-white/70 mb-4">
                Once you land the interview:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-interview-prep"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Interview Prep Guide →
                </Link>
                <Link 
                  href="/guides/ai-salary-negotiation"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Salary Negotiation →
                </Link>
                <Link 
                  href="/guides/chatgpt-resume-prompts"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  More Resume Prompts →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'chatgpt-resume-prompts',
                              title: 'ChatGPT Resume Prompts',
                              description: 'AI prompts to strengthen every section of your resume.'
                    },
                    {
                              slug: 'best-ai-resume-builders-2026',
                              title: 'Best AI Resume Builders',
                              description: 'Tools that automatically optimize for ATS compatibility.'
                    },
                    {
                              slug: 'job-search-automation',
                              title: 'Job Search Automation',
                              description: 'Automate your entire job search workflow with AI.'
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

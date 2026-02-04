import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7 Best Free AI Resume Scanners (2026) - Tested & Ranked | GetTheJobAI',
  description: 'Compare the best free AI resume scanners: Jobscan, Resume Worded, SkillSyncer, and more. Find ATS issues, missing keywords, and improve your match score.',
  keywords: ['free ai resume scanner', 'ats resume checker', 'resume scanner free', 'jobscan alternative', 'ai resume checker'],
}

export default function AIResumeScannerFreePage() {
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
            Resume Tools
          </p>
          <h1 className="text-4xl font-bold mb-6">
            7 Best Free AI Resume Scanners (2026) - Tested & Ranked
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            You submit 50 applications and hear nothing. The problem isn&apos;t you—it&apos;s the ATS filtering you out before a human sees your resume.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">What AI Resume Scanners Actually Do</h2>
              <p className="text-white/70 mb-4">
                These tools analyze your resume against:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Job description keywords</strong> — Are you using the right terms?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>ATS formatting</strong> — Will the system parse your resume correctly?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Content quality</strong> — Do your bullets show impact?</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Match score</strong> — How well do you fit the role?</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Jobscan (Best Overall)</h2>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 mb-4">
                <p className="text-emerald-400 font-semibold">Free tier: 5 scans/month</p>
              </div>
              <p className="text-white/70 mb-4">What it does:</p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Compares your resume to specific job descriptions</li>
                <li>• Shows keyword match percentage</li>
                <li>• Identifies missing skills and terms</li>
                <li>• ATS formatting check</li>
              </ul>
              <div className="flex gap-4 text-sm">
                <span className="text-emerald-400">✓ Most accurate matching, detailed reports</span>
              </div>
              <div className="flex gap-4 text-sm mt-2">
                <span className="text-white/50">✗ Limited free scans, upsells constantly</span>
              </div>
              <p className="text-white/50 text-sm mt-2">Best for: Targeted applications to specific jobs</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Resume Worded (Best Feedback Quality)</h2>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 mb-4">
                <p className="text-emerald-400 font-semibold">Free tier: 1 detailed scan</p>
              </div>
              <p className="text-white/70 mb-4">What it does:</p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• AI-powered content analysis</li>
                <li>• Bullet point strength scoring</li>
                <li>• LinkedIn profile review</li>
                <li>• Industry-specific suggestions</li>
              </ul>
              <div className="flex gap-4 text-sm">
                <span className="text-emerald-400">✓ Actionable feedback, clean interface</span>
              </div>
              <div className="flex gap-4 text-sm mt-2">
                <span className="text-white/50">✗ Very limited free tier</span>
              </div>
              <p className="text-white/50 text-sm mt-2">Best for: Overall resume quality improvement</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. SkillSyncer</h2>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 mb-4">
                <p className="text-emerald-400 font-semibold">Free tier: 3 scans/month</p>
              </div>
              <p className="text-white/70 mb-4">What it does:</p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Side-by-side resume vs job description comparison</li>
                <li>• Keyword extraction from job posts</li>
                <li>• Skills gap analysis</li>
                <li>• Match percentage scoring</li>
              </ul>
              <div className="flex gap-4 text-sm">
                <span className="text-emerald-400">✓ Clear visual comparison, easy to use</span>
              </div>
              <div className="flex gap-4 text-sm mt-2">
                <span className="text-white/50">✗ Less detailed than Jobscan</span>
              </div>
              <p className="text-white/50 text-sm mt-2">Best for: Quick keyword checks</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Enhancv Resume Checker</h2>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 mb-4">
                <p className="text-emerald-400 font-semibold">Free tier: Unlimited basic scans</p>
              </div>
              <p className="text-white/70 mb-4">What it does:</p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• ATS compatibility check</li>
                <li>• Content suggestions</li>
                <li>• Design feedback</li>
                <li>• Section-by-section analysis</li>
              </ul>
              <div className="flex gap-4 text-sm">
                <span className="text-emerald-400">✓ Unlimited scans, good for formatting</span>
              </div>
              <div className="flex gap-4 text-sm mt-2">
                <span className="text-white/50">✗ Premium features locked</span>
              </div>
              <p className="text-white/50 text-sm mt-2">Best for: Formatting and ATS compatibility</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Kickresume AI Checker</h2>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 mb-4">
                <p className="text-emerald-400 font-semibold">Free tier: 2 scans</p>
              </div>
              <p className="text-white/70 mb-4">What it does:</p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• AI-powered content review</li>
                <li>• Grammar and clarity check</li>
                <li>• Impact word suggestions</li>
                <li>• Structure analysis</li>
              </ul>
              <div className="flex gap-4 text-sm">
                <span className="text-emerald-400">✓ Good content feedback</span>
              </div>
              <div className="flex gap-4 text-sm mt-2">
                <span className="text-white/50">✗ Very limited free tier</span>
              </div>
              <p className="text-white/50 text-sm mt-2">Best for: Writing quality</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Rezi AI (Best for Tech)</h2>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 mb-4">
                <p className="text-emerald-400 font-semibold">Free tier: Limited features</p>
              </div>
              <p className="text-white/70 mb-4">What it does:</p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• ATS optimization</li>
                <li>• Real-time writing suggestions</li>
                <li>• Job-specific tailoring</li>
                <li>• Tech industry focus</li>
              </ul>
              <div className="flex gap-4 text-sm">
                <span className="text-emerald-400">✓ Great for tech roles</span>
              </div>
              <div className="flex gap-4 text-sm mt-2">
                <span className="text-white/50">✗ Full features require subscription</span>
              </div>
              <p className="text-white/50 text-sm mt-2">Best for: Software engineers, tech professionals</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. ChatGPT/Claude (Best for Unlimited Use)</h2>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 mb-4">
                <p className="text-emerald-400 font-semibold">Free tier: Unlimited (with free accounts)</p>
              </div>
              <p className="text-white/70 mb-4">What it does:</p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Anything you prompt it to do</li>
                <li>• Keyword analysis, rewriting, feedback</li>
                <li>• No scan limits</li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT TO USE</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Review my resume against this job description. Identify: 1) Missing keywords I should add, 2) Weak bullet points to strengthen, 3) ATS formatting issues, 4) Overall match percentage estimate.

[Paste resume]

[Paste job description]`}</p>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-emerald-400">✓ Unlimited, flexible, conversational</span>
              </div>
              <div className="flex gap-4 text-sm mt-2">
                <span className="text-white/50">✗ Requires good prompts, no visual interface</span>
              </div>
              <p className="text-white/50 text-sm mt-2">Best for: Power users, unlimited scanning</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Quick Comparison</h2>
              <div className="space-y-3 text-white/70">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Jobscan</span>
                  <span className="text-emerald-400 font-semibold">5/month • Keyword matching</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Resume Worded</span>
                  <span className="text-emerald-400 font-semibold">1 scan • Detailed feedback</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>SkillSyncer</span>
                  <span className="text-emerald-400 font-semibold">3/month • Visual comparison</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Enhancv</span>
                  <span className="text-emerald-400 font-semibold">Unlimited • ATS formatting</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Kickresume</span>
                  <span className="text-emerald-400 font-semibold">2 scans • Content writing</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Rezi</span>
                  <span className="text-emerald-400 font-semibold">Limited • Tech focus</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ChatGPT/Claude</span>
                  <span className="text-emerald-400 font-semibold">Unlimited • Flexibility</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How to Use Resume Scanners Effectively</h2>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 1: Get a Baseline Score</p>
                  <p className="text-white/80 text-sm">Run your current resume through 2-3 scanners. Note common issues.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 2: Extract Job Keywords</p>
                  <p className="text-white/80 text-sm">Copy the exact job description. Look for required skills, preferred skills, action verbs, and industry terminology.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 3: Optimize Your Resume</p>
                  <p className="text-white/80 text-sm">Add missing keywords naturally. Don&apos;t keyword-stuff—integrate them into real achievements.</p>
                  <p className="text-white/50 text-xs mt-2">Before: &quot;Managed marketing campaigns&quot;</p>
                  <p className="text-emerald-400 text-xs">After: &quot;Led digital marketing campaigns using HubSpot, increasing qualified leads 40%&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Step 4: Re-scan and Iterate</p>
                  <p className="text-white/80 text-sm">Target 75%+ match score. Below 60% = likely ATS rejection.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Resume Scanner Mistakes</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong>Only scanning once</strong> — Scan for each job (keywords differ)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong>Keyword stuffing</strong> — Scanners detect unnatural keyword usage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong>Ignoring formatting feedback</strong> — Fancy designs often break ATS</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong>Not reading the actual feedback</strong> — Don&apos;t just chase the number</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-6">
                <p className="text-emerald-400 font-semibold mb-2">The Real Secret</p>
                <p className="text-white/80">The best resume isn&apos;t the one with the highest scan score—it&apos;s the one optimized for BOTH the ATS and the human who reads it after.</p>
                <p className="text-white/60 text-sm mt-4">Use scanners to pass the robot. Use good writing to convince the human.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/ats-resume-optimization" className="text-emerald-400 hover:underline">Deep dive into ATS optimization</Link>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/chatgpt-resume-prompts" className="text-emerald-400 hover:underline">ChatGPT prompts to rewrite your resume</Link>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <EmailSignup headline="Get more resume optimization tips" />

        <RelatedGuides 
          guides={[
            { slug: 'ats-resume-optimization', title: 'ATS Resume Optimization', description: 'Beat the applicant tracking system' },
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'AI prompts to rewrite your resume' },
            { slug: 'best-ai-resume-tools-2026', title: 'Best AI Resume Tools 2026', description: 'Complete guide to AI resume builders' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 px-6 py-12">
        <div className="max-w-5xl mx-auto text-center text-white/40 text-sm">
          <p>© 2026 GetTheJobAI. Land your dream job with AI.</p>
        </div>
      </footer>
    </div>
  )
}

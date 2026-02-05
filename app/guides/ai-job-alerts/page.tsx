import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Job Alerts: Never Miss Your Dream Role | GetTheJobAI',
  description: 'Set up AI-powered job alerts that find roles matching your exact criteria. Early applicants are 8x more likely to get interviews.',
  keywords: ['job alerts', 'ai job search', 'linkedin job alerts', 'job notifications', 'automated job search'],
}

export default function AIJobAlertsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link 
          href="/guides" 
          className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article className="prose-custom">
          <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Job Search
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI-Powered Job Alerts: Never Miss Your Dream Role
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Stop manually searching job boards. Set up AI-powered alerts that find roles matching 
            your exact criteria and notify you before the competition.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Problem with Manual Job Searching</h2>
              <p className="text-white/70 mb-4">
                The average job seeker spends 11 hours per week searching job boards. Most of that time is wasted:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Scrolling through irrelevant listings</li>
                <li>• Seeing the same posts repeatedly</li>
                <li>• Missing new postings buried in noise</li>
                <li>• Applying late when roles already have 200+ applicants</li>
              </ul>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold">
                  Early applicants are 8x more likely to get interviews.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">AI Job Alert Strategy</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">Level 1:</span>
                    Smart Boolean Alerts
                  </h3>
                  <p className="text-white/70 mb-4">
                    Most job boards support boolean search. AI helps you build killer queries.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a boolean search query for [job title] roles.
Must include: [required skills]
Exclude: [things you don't want - senior, contractor, etc.]
Location: [city/remote]
Optimize for LinkedIn job search.`}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">EXAMPLE OUTPUT</p>
                    <p className="text-white/90 font-mono text-sm">
                      {`("product manager" OR "PM") AND ("B2B" OR "SaaS") AND ("remote" OR "San Francisco") NOT "senior" NOT "director" NOT "contractor"`}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">Level 2:</span>
                    Multi-Platform Monitoring
                  </h3>
                  <p className="text-white/70 mb-4">Set alerts on all major platforms:</p>
                  <div className="space-y-4">
                    <div className="border border-white/10 rounded-lg p-4">
                      <p className="font-bold mb-2">LinkedIn</p>
                      <ul className="text-sm text-white/60 space-y-1">
                        <li>• Create saved searches with your boolean query</li>
                        <li>• Turn on instant notifications</li>
                        <li>• Create 3-4 variations targeting different job titles</li>
                      </ul>
                    </div>
                    <div className="border border-white/10 rounded-lg p-4">
                      <p className="font-bold mb-2">Indeed + Glassdoor</p>
                      <ul className="text-sm text-white/60 space-y-1">
                        <li>• Email alerts for specific searches</li>
                        <li>• Company-specific alerts for target employers</li>
                        <li>• Salary-filtered searches</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT FOR VARIATIONS</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Give me 10 alternative job titles for [your target role] 
that recruiters might use in postings.
Include industry-specific variations.`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">Level 3:</span>
                    AI-Enhanced Filtering
                  </h3>
                  <p className="text-white/70 mb-4">
                    Use ChatGPT to evaluate job listings quickly.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">DAILY WORKFLOW PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Evaluate this job posting for fit:

[paste job description]

My background: [brief summary]
Must-haves: [deal breakers]
Preferences: [nice to haves]

Rate 1-10 and give 2-sentence reasoning.
Flag any red flags (unrealistic requirements, salary concerns).`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-emerald-400 font-mono">Level 4:</span>
                    Company Tracking
                  </h3>
                  <p className="text-white/70 mb-4">
                    Don&apos;t just track jobs—track companies.
                  </p>
                  <ol className="space-y-2 text-white/70 mb-4">
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-mono">1.</span>
                      <span>List 20-30 target companies</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-mono">2.</span>
                      <span>Set Google Alerts for &ldquo;[company] hiring&rdquo; and &ldquo;[company] jobs&rdquo;</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-mono">3.</span>
                      <span>Follow their LinkedIn pages</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-emerald-400 font-mono">4.</span>
                      <span>Check their careers pages weekly</span>
                    </li>
                  </ol>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">AI ASSIST PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on my skills in [your skills], suggest 15 companies 
that frequently hire for these roles and are known for 
[good culture/remote-friendly/growth opportunities].
Include: company name, typical job titles, why they're a good fit.`}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tools That Automate This</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-white/10 rounded-lg p-4">
                  <p className="font-bold mb-2 text-emerald-400">Free</p>
                  <ul className="text-sm text-white/60 space-y-1">
                    <li>• LinkedIn saved searches (3 max)</li>
                    <li>• Indeed email alerts</li>
                    <li>• Google Alerts for companies</li>
                    <li>• IFTTT for custom triggers</li>
                  </ul>
                </div>
                <div className="border border-white/10 rounded-lg p-4">
                  <p className="font-bold mb-2 text-emerald-400">Paid</p>
                  <ul className="text-sm text-white/60 space-y-1">
                    <li>• LinkedIn Premium (unlimited alerts)</li>
                    <li>• Teal - AI job tracking dashboard</li>
                    <li>• Huntr - application pipeline</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">The 10-Minute Daily Routine</h2>
              <ol className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">3 min</span>
                  <span>Check alerts — Review new matches</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">4 min</span>
                  <span>AI filter — Paste top 3 into ChatGPT for quick eval</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">3 min</span>
                  <span>Apply to best — Use saved resume + cover letter templates</span>
                </li>
              </ol>
              <p className="text-emerald-400 mt-4 font-medium">
                Consistency beats marathon sessions. 10 minutes daily &gt; 3 hours on Saturday.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Red Flags AI Can Spot</h2>
              <p className="text-white/70 mb-4">Train yourself to notice:</p>
              <div className="space-y-2 text-white/70">
                <div className="flex gap-3">
                  <span className="text-red-400">⚠</span>
                  <span><strong className="text-white">&ldquo;Fast-paced environment&rdquo;</strong> = understaffed</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-400">⚠</span>
                  <span><strong className="text-white">&ldquo;Wear many hats&rdquo;</strong> = no clear role</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-400">⚠</span>
                  <span><strong className="text-white">&ldquo;Competitive salary&rdquo;</strong> = won&apos;t share range</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-red-400">⚠</span>
                  <span><strong className="text-white">&ldquo;5+ years for entry level&rdquo;</strong> = unrealistic expectations</span>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-4">
                <p className="text-sm text-white/40 mb-2 font-mono">RED FLAG PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Analyze this job posting for potential red flags. 
Look for unrealistic requirements, vague descriptions,
or common phrases that indicate problems.
Be direct about concerns.`}</p>
              </div>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Quick Setup (30 Minutes)</h2>
              <ol className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5 min</span>
                  <span>Write your boolean query with AI</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5 min</span>
                  <span>Set up LinkedIn saved search</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5 min</span>
                  <span>Set up Indeed alerts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5 min</span>
                  <span>Set up Google Alerts for 5 target companies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">10 min</span>
                  <span>Create your AI evaluation prompt</span>
                </li>
              </ol>
              <p className="text-white/50 text-sm mt-4">
                Tomorrow, jobs come to you instead of you hunting them.
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
                  href="/guides/ai-company-research"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Company Research →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'job-search-automation',
                              title: 'Job Search Automation',
                              description: 'Automate beyond just alerts.'
                    },
                    {
                              slug: 'remote-job-search-ai',
                              title: 'Remote Job Search',
                              description: 'Set alerts for remote positions.'
                    },
                    {
                              slug: 'ai-job-tracker',
                              title: 'AI Job Tracker',
                              description: 'Track the jobs you find via alerts.'
                    }
          ]} />
        </article>
    </div>
  )
}

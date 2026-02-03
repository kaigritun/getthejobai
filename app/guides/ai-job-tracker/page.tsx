import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Building an AI-Powered Job Application Tracker | GetTheJobAI',
  description: 'Track job applications with AI. Build a system that helps you follow up, analyze patterns, and improve your job search strategy.',
  keywords: ['job application tracker', 'ai job tracker', 'job search organization', 'application tracking', 'job search spreadsheet'],
}

export default function AIJobTrackerPage() {
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
            Organization
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Building an AI-Powered Job Application Tracker
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Applying to 50+ jobs without a system is chaos. An AI-enhanced tracker keeps you organized, 
            helps you follow up at the right time, and learns what&apos;s working.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Track Applications</h2>
              <p className="text-white/70 mb-4">
                Most job seekers apply randomly and wonder why they hear nothing. Tracking reveals patterns:
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Which job titles get responses?</li>
                <li>• Which companies engage?</li>
                <li>• What application methods work best?</li>
                <li>• When should you follow up?</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Basic Tracker Structure</h2>
              <p className="text-white/70 mb-4">
                Start with these columns:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 overflow-x-auto mb-4">
                <div className="text-sm font-mono text-white/70">
                  <div className="grid grid-cols-7 gap-2 text-emerald-400 mb-2">
                    <span>Company</span><span>Role</span><span>Date</span><span>Source</span><span>Status</span><span>Next Action</span><span>Notes</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-white/50">
                    <span>Acme Co</span><span>PM</span><span>Jan 15</span><span>LinkedIn</span><span>Interview</span><span>Prep call</span><span>HM: Jane</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-emerald-400">Status Options</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Applied</li>
                    <li>• Screening</li>
                    <li>• Interview 1/2/Final</li>
                    <li>• Offer</li>
                    <li>• Rejected</li>
                    <li>• No Response</li>
                    <li>• Withdrawn</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-emerald-400">Source Options</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• LinkedIn Easy Apply</li>
                    <li>• Company Website</li>
                    <li>• Referral</li>
                    <li>• Recruiter Outreach</li>
                    <li>• Job Board</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">AI Enhancement Layer</h2>

              <h3 className="text-xl font-semibold mb-3">1. Application Quality Scoring</h3>
              <p className="text-white/70 mb-4">
                After each application, have ChatGPT evaluate fit:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I applied to [role] at [company]. My background is [summary]. The job requirements were [paste key requirements]. Score my fit 1-10 and explain why.`}</p>
              </div>
              <p className="text-white/50 text-sm mb-6">
                Add the score to your tracker. Over time, you&apos;ll see that higher-fit applications get more responses.
              </p>

              <h3 className="text-xl font-semibold mb-3">2. Automated Follow-Up Reminders</h3>
              <p className="text-white/70 mb-4">
                Use ChatGPT to generate follow-up timing:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I applied to [role] at [company] on [date] via [method]. When should I follow up and what should I say?`}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <h4 className="font-bold mb-2 text-white/80">General Rules:</h4>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• LinkedIn Easy Apply: Follow up in 1 week</li>
                  <li>• Direct application: Wait 2 weeks</li>
                  <li>• Referral: Check with referrer in 1 week</li>
                  <li>• After interview: Same day thank you, 1 week follow-up</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3">3. Pattern Analysis</h3>
              <p className="text-white/70 mb-4">
                Monthly, export your data and analyze:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Here's my job application data from last month [paste]. What patterns do you see? What's working and what isn't? What should I change?`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Building Your Tracker</h2>

              <div className="space-y-4">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-emerald-400">Option 1: Notion (Recommended)</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• All columns above</li>
                    <li>• Views filtered by status</li>
                    <li>• Calendar view for follow-ups</li>
                    <li>• Linked database for company research</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-white/80">Option 2: Google Sheets + Apps Script</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Conditional formatting for statuses</li>
                    <li>• Automatic date calculations</li>
                    <li>• Custom formulas for metrics</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-white/80">Option 3: Airtable</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Built-in views and filters</li>
                    <li>• Zapier integration for notifications</li>
                    <li>• Mobile app for updates on the go</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Advanced Tracking</h2>

              <h3 className="text-lg font-semibold mb-3">Company Research Notes</h3>
              <p className="text-white/70 mb-4">
                Add a linked section for each company:
              </p>
              <ul className="space-y-2 text-white/70 mb-6">
                <li>• Company size and funding</li>
                <li>• Recent news</li>
                <li>• Hiring manager LinkedIn</li>
                <li>• Glassdoor reviews summary</li>
                <li>• Interview process from reviews</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Interview Prep Tracker</h3>
              <p className="text-white/70 mb-4">
                When you get interviews, expand tracking:
              </p>
              <ul className="space-y-2 text-white/70 mb-6">
                <li>• Interview date and format</li>
                <li>• Interviewer names and roles</li>
                <li>• Questions asked</li>
                <li>• Your answers and their reactions</li>
                <li>• Post-interview reflections</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Offer Comparison</h3>
              <p className="text-white/70 mb-4">
                If you get multiple offers:
              </p>
              <ul className="space-y-2 text-white/70">
                <li>• Base salary</li>
                <li>• Bonus structure</li>
                <li>• Equity</li>
                <li>• Benefits value</li>
                <li>• Remote policy</li>
                <li>• Growth potential</li>
                <li>• Commute/lifestyle impact</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Metrics That Matter</h2>
              <p className="text-white/70 mb-4">
                Track these monthly:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Applications sent</li>
                <li>• Response rate</li>
                <li>• Interview rate</li>
                <li>• Offer rate</li>
                <li>• Average time in each stage</li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <h4 className="font-bold mb-2 text-emerald-400">Industry Benchmarks:</h4>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• 2-5% response rate for cold applications</li>
                  <li>• 10-20% for referrals</li>
                  <li>• 20-40% interview-to-next-round rate</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Automation Ideas</h2>

              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-white/80">Email Parsing</h3>
                  <p className="text-white/70 text-sm">
                    Use Zapier or Make to auto-add applications when you get confirmation emails, 
                    update status on interview invites, and flag rejections for review.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-white/80">Calendar Integration</h3>
                  <p className="text-white/70 text-sm">
                    Auto-create calendar events for follow-ups, block time for application batches, 
                    and schedule interview prep sessions.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-white/80">Notification System</h3>
                  <p className="text-white/70 text-sm">
                    Slack/email alerts for follow-up dates, weekly summary of pipeline status, 
                    and alerts when response rates drop.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Weekly Review</h2>
              <p className="text-white/70 mb-4">
                Every Sunday, spend 30 minutes:
              </p>
              <ol className="space-y-2 text-white/70">
                <li><span className="text-emerald-400 font-mono">1.</span> Update all application statuses</li>
                <li><span className="text-emerald-400 font-mono">2.</span> Clear follow-up backlog</li>
                <li><span className="text-emerald-400 font-mono">3.</span> Analyze what&apos;s working</li>
                <li><span className="text-emerald-400 font-mono">4.</span> Plan next week&apos;s applications</li>
                <li><span className="text-emerald-400 font-mono">5.</span> Research new target companies</li>
              </ol>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
              <ol className="space-y-2 text-white/70">
                <li><span className="text-emerald-400 font-mono">1.</span> Choose your tool (Notion for most people)</li>
                <li><span className="text-emerald-400 font-mono">2.</span> Create the basic structure</li>
                <li><span className="text-emerald-400 font-mono">3.</span> Input your last 2 weeks of applications</li>
                <li><span className="text-emerald-400 font-mono">4.</span> Set up your first follow-up reminders</li>
                <li><span className="text-emerald-400 font-mono">5.</span> Commit to updating daily</li>
              </ol>
              <p className="text-emerald-400 mt-6 font-medium">
                A tracking system takes 5 minutes daily but saves hours of confusion and missed opportunities. Start today.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <p className="text-white/70 mb-4">
                Improve other parts of your job search:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-networking-emails"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Networking Emails →
                </Link>
                <Link 
                  href="/guides/ai-interview-followup"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Interview Follow-Ups →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'ai-job-application-tracking',
                              title: 'Application Tracking',
                              description: 'Track your entire application process.'
                    },
                    {
                              slug: 'ai-job-alerts',
                              title: 'AI Job Alerts',
                              description: 'Feed alerts into your tracker.'
                    },
                    {
                              slug: 'job-search-automation',
                              title: 'Job Search Automation',
                              description: 'Automate your tracking workflow.'
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

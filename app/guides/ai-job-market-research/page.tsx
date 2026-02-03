import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Using AI to Research Job Markets and Industries | GetTheJobAI',
  description: 'AI makes industry research 10x faster, helping you target the right companies, understand market trends, and position yourself as the ideal candidate.',
  keywords: ['ai job market research', 'industry research ai', 'chatgpt career research', 'ai company research'],
}

export default function AIJobMarketResearchPage() {
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
            Research
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Using AI to Research Job Markets and Industries
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Before you apply anywhere, research. AI makes industry research 10x faster, 
            helping you target the right companies, understand market trends, and position 
            yourself as the ideal candidate.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Job Market Research Matters</h2>
              <p className="text-white/70 mb-4">Informed candidates:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Apply to companies actually hiring</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Know salary ranges before negotiating</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Understand industry trends interviewers care about</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Position themselves as solutions to real problems</span>
                </li>
              </ul>
              <p className="text-white/70 mt-4">
                AI turns hours of research into minutes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Research Framework: The 4 Layers</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Layer 1: Industry Overview</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Give me a comprehensive overview of the [industry] job market in 2026:
1. Overall growth trajectory
2. Most in-demand roles
3. Emerging skills employers want
4. Average salary ranges by experience level
5. Top 10 companies hiring`}</p>
                  </div>
                  <p className="text-white/50 text-sm">
                    <strong className="text-white/70">Follow-up questions:</strong> &ldquo;What&apos;s driving growth?&rdquo; 
                    &ldquo;Which companies have good culture?&rdquo; &ldquo;What certifications matter?&rdquo;
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Layer 2: Company Deep Dive</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Research [Company Name] as a potential employer:
1. Recent news (last 6 months)
2. Funding/financial health
3. Employee reviews sentiment
4. Current job openings
5. Key executives and their backgrounds
6. Company culture signals
7. Challenges they're publicly facing`}</p>
                  </div>
                  <p className="text-white/70 mb-2">
                    <strong className="text-white">Red flags to look for:</strong>
                  </p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Recent layoffs</li>
                    <li>• High turnover in your target role</li>
                    <li>• Negative Glassdoor trends</li>
                    <li>• Leadership instability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Layer 3: Role-Specific Intelligence</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`For a [Job Title] role at companies like [Company 1, 2, 3]:
1. What does day-to-day work look like?
2. What tools/technologies are standard?
3. Typical career progression
4. Interview process and common questions
5. What separates good from great candidates?`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Layer 4: Competitive Positioning</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for [Role] at [Company]. My background is [brief summary].
Based on typical requirements for this role:
1. What are my strongest selling points?
2. What gaps should I address proactively?
3. How should I position my experience?
4. What would make me stand out from other candidates?`}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">AI Research Tools</h2>
              
              <div className="space-y-4">
                <div className="border border-white/10 rounded-lg p-5">
                  <h3 className="text-lg font-bold mb-2">ChatGPT/Claude (Free/Paid)</h3>
                  <p className="text-white/70">Best for: General research, analysis, strategy</p>
                </div>

                <div className="border border-white/10 rounded-lg p-5">
                  <h3 className="text-lg font-bold mb-2">Perplexity AI (Free)</h3>
                  <p className="text-white/70 mb-2">Best for: Real-time information with sources</p>
                  <p className="text-white/50 text-sm italic">
                    Example: &ldquo;What companies in [city] are hiring [role] in 2026? Include company size and recent funding.&rdquo;
                  </p>
                </div>

                <div className="border border-white/10 rounded-lg p-5">
                  <h3 className="text-lg font-bold mb-2">LinkedIn Sales Navigator (Paid)</h3>
                  <p className="text-white/70 mb-2">Best for: Finding decision-makers, company insights</p>
                  <p className="text-white/50 text-sm">
                    Use AI to analyze who&apos;s hiring, career paths of people in your target role, and growth trends.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Company Research Template</h2>
              <p className="text-white/70 mb-4">
                Create a structured research doc for each target company:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`# [Company Name]

## Quick Facts
- Industry: 
- Size: 
- Funding: 
- Headquarters: 

## Why I'm Interested
[Your notes]

## Key People to Know
- Hiring Manager: 
- Recruiter: 
- Potential team members: 

## Recent News
[AI-generated summary]

## Challenges I Can Solve
[Based on research]

## Questions to Ask
[AI-generated]

## Red Flags
[Any concerns]

## Application Status
[Track progress]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Salary Research Strategy</h2>
              <p className="text-white/70 mb-4">
                Never go into negotiations blind.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">SALARY RESEARCH PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Research salary for [Job Title] in [City]:
1. Base salary range (25th, 50th, 75th percentile)
2. Common bonus structures
3. Equity expectations at different company stages
4. Benefits that vary significantly
5. What factors increase compensation?

Sources to consider: Levels.fyi, Glassdoor, LinkedIn Salary, Payscale`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Identifying Hidden Job Markets</h2>
              <p className="text-white/70 mb-4">
                AI can help find opportunities before they&apos;re posted:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">HIDDEN OPPORTUNITIES PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm looking for [Role] opportunities. Help me identify:
1. Growing startups in [industry] likely to hire soon
2. Companies that recently raised funding
3. Industries with skill shortages in my area
4. Companies expanding to my city
5. Networking events or communities where hiring happens`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Research-to-Action Pipeline</h2>
              <p className="text-white/70 mb-4">Don&apos;t just research—use it:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-emerald-400">Before Applying</h3>
                  <ul className="space-y-1 text-white/70">
                    <li>• Customize resume with company-specific keywords</li>
                    <li>• Reference company challenges in cover letter</li>
                    <li>• Identify mutual connections for referrals</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2 text-emerald-400">Before Interviewing</h3>
                  <ul className="space-y-1 text-white/70">
                    <li>• Prepare company-specific questions</li>
                    <li>• Plan stories that address their challenges</li>
                    <li>• Know recent news to reference</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2 text-emerald-400">During Negotiation</h3>
                  <ul className="space-y-1 text-white/70">
                    <li>• Use salary data confidently</li>
                    <li>• Know competitor compensation</li>
                    <li>• Understand total comp structure</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Weekly Research Routine</h2>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <span className="text-emerald-400 font-bold w-24">Monday</span>
                  <span className="text-white/70">Industry news scan with AI summary (30 min)</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-emerald-400 font-bold w-24">Wednesday</span>
                  <span className="text-white/70">Deep dive on 2-3 target companies (20 min)</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-emerald-400 font-bold w-24">Friday</span>
                  <span className="text-white/70">Update research database, identify new targets (20 min)</span>
                </div>
              </div>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Tools Summary</h2>
              <ul className="space-y-2 text-white/70">
                <li>• <strong className="text-white">ChatGPT/Claude</strong> - Analysis, strategy (Free tier)</li>
                <li>• <strong className="text-white">Perplexity</strong> - Real-time research (Free)</li>
                <li>• <strong className="text-white">Glassdoor</strong> - Salary, reviews (Free)</li>
                <li>• <strong className="text-white">LinkedIn</strong> - People, companies (Free/Premium)</li>
                <li>• <strong className="text-white">Levels.fyi</strong> - Tech salaries (Free)</li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-emerald-500/30">
                <Link 
                  href="/guides/ai-company-research"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Company Research Deep Dive →
                </Link>
                <Link 
                  href="/guides/ai-interview-prep"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Interview Preparation with AI →
                </Link>
                <Link 
                  href="/guides/ai-salary-negotiation"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Salary Negotiation Scripts →
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

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use AI for a Career Pivot in 2026 | GetTheJobAI',
  description: 'Use AI to identify transferable skills, fill knowledge gaps fast, and rewrite your narrative for a successful career change.',
  keywords: ['career pivot AI', 'career change chatgpt', 'ai career transition', 'transferable skills AI'],
}

export default function AICareerPivotPage() {
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
            Career Change
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Use AI for a Career Pivot in 2026
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Switching industries feels impossible when you lack &ldquo;relevant experience.&rdquo; 
            Here&apos;s how AI changes that equation.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Career Pivot Problem</h2>
              <p className="text-white/70 mb-4">
                You&apos;re stuck. Your current industry is dying, boring, or just not you anymore. 
                But every job posting wants 3-5 years of experience you don&apos;t have.
              </p>
              <p className="text-white/70 mb-4">
                Traditional advice says: take a pay cut, go back to school, network for months. 
                All valid. All slow.
              </p>
              <p className="text-white/70">
                AI gives you a shortcut—not by faking experience, but by accelerating your transition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Identify Transferable Skills</h2>
              <p className="text-white/70 mb-4">
                Most people undersell their transferable skills because they describe them in 
                industry-specific jargon.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm pivoting from [current role/industry] to [target role/industry]. 

Here's what I do now:
[paste your current job responsibilities]

Analyze my transferable skills and reframe them using terminology that [target industry] hiring managers use. Focus on:
- Quantifiable achievements
- Universal business skills
- Technical skills that cross over`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                <strong className="text-white/70">Why it works:</strong> A &ldquo;customer success manager&rdquo; 
                becomes a &ldquo;stakeholder relationship expert.&rdquo; A &ldquo;warehouse supervisor&rdquo; 
                becomes an &ldquo;operations and logistics leader.&rdquo;
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Fill Knowledge Gaps Fast</h2>
              <p className="text-white/70 mb-4">
                You don&apos;t need a degree. You need to demonstrate competence.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm transitioning to [target role]. I have experience in [your background].

Create a 30-day learning plan that covers:
1. Essential terminology I must know
2. Key tools/software used in this field
3. Common challenges and how professionals solve them
4. Free resources (YouTube, courses, articles)

Prioritize practical knowledge over theory.`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                Then actually do it. AI gives you the map. You still have to walk the path.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Build Proof Without the Job</h2>
              <p className="text-white/70 mb-4">
                Here&apos;s the career pivot hack nobody talks about: <strong className="text-white">create 
                evidence of capability before you get hired.</strong>
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Portfolio projects:</strong> Use AI to help you build sample work for your target role</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Case studies:</strong> Analyze real companies and write up how you&apos;d solve their problems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Content creation:</strong> Write about your target industry (LinkedIn, blog, Twitter)</span>
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to break into [target role/industry]. Suggest 3 portfolio projects I could complete in 2-4 weeks each that would demonstrate relevant skills. 

For each project, include:
- What it demonstrates
- Tools/skills required
- How to present it to employers`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Rewrite Your Narrative</h2>
              <p className="text-white/70 mb-4">
                Your resume and LinkedIn need to tell a story of intentional transition, not desperate escape.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a professional summary for someone transitioning from [current role] to [target role]. 

Key points to include:
- Why this transition makes sense
- Transferable skills that apply
- Recent steps taken toward this goal

Tone: Confident, forward-looking, not apologetic.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 5: Find Pivot-Friendly Companies</h2>
              <p className="text-white/70 mb-4">
                Some companies love career changers. Others only hire from competitors. Target the right ones.
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Startups (value adaptability over pedigree)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Companies with training programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Roles with &ldquo;no experience required&rdquo; variants</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Companies that promote internal culture fit</span>
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm targeting [target role]. Find 10 companies known for:
- Hiring career changers
- Strong training programs
- Valuing diverse backgrounds

Include why each company might be receptive to a pivot candidate.`}</p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">The Real Talk</h2>
              <p className="text-white/70 mb-4">
                AI won&apos;t make you qualified overnight. But it will:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Help you see your existing value clearly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Accelerate your knowledge acquisition</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Create proof of capability faster</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Optimize how you present your transition</span>
                </li>
              </ul>
              <p className="text-white/70">
                The career pivot is still hard. AI just makes it faster.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Ready to Pivot?</h2>
              <p className="text-white/70 mb-4">
                Start with the transferable skills prompt above. You&apos;ll be surprised what you 
                already bring to the table.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-skills-gap-analysis"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Skills Gap Analysis →
                </Link>
                <Link 
                  href="/guides/chatgpt-resume-prompts"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Resume Prompts →
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

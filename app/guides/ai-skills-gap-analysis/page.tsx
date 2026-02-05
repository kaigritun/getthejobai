import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Skills Gap Analysis: Find What\'s Missing and Fix It Fast | GetTheJobAI',
  description: 'Use AI to identify exactly what skills you need for your target job, prioritize what to learn, and close gaps quickly.',
  keywords: ['skills gap analysis AI', 'career skills chatgpt', 'identify skill gaps', 'job requirements analysis'],
}

export default function AISkillsGapAnalysisPage() {
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
            Skills Development
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Skills Gap Analysis: Find What&apos;s Missing and Fix It Fast
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Don&apos;t waste months learning things employers don&apos;t care about. 
            Here&apos;s how to identify exactly what skills you need—and close the gap quickly.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Skills Gap Problem</h2>
              <p className="text-white/70 mb-4">
                You see a dream job. Requirements list 15 things. You have 8 of them.
              </p>
              <p className="text-white/70 mb-4">
                Do you apply? What do you learn first? Is that certification worth it?
              </p>
              <p className="text-white/70">
                Most people guess. Or worse, they try to learn everything and master nothing. 
                AI helps you prioritize ruthlessly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Extract What Actually Matters</h2>
              <p className="text-white/70 mb-4">
                Job postings mix must-haves with nice-to-haves. AI can help you decode which is which.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Analyze this job posting and categorize the requirements:

[paste full job posting]

Sort into:
1. MUST-HAVE: Dealbreakers they'll filter on
2. STRONG PREFERENCE: Will definitely ask about
3. NICE-TO-HAVE: Bonus points but not required
4. BUZZWORDS: Listed for SEO/HR but rarely tested

Explain your reasoning for each categorization.`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                Now you know where to focus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Honest Self-Assessment</h2>
              <p className="text-white/70 mb-4">
                Be brutally honest about your current level. Overconfidence wastes time. 
                Underconfidence creates unnecessary anxiety.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm evaluating myself against this role: [paste job title and key requirements]

Here's my honest background:
[describe your actual experience level with each requirement]

For each skill/requirement, rate me:
- STRONG: Could do this day one
- DEVELOPING: Have basics, need practice
- GAP: Need to learn this
- UNKNOWN: Not sure what this even means

Then prioritize which gaps would have the highest impact to close.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Create a Targeted Learning Plan</h2>
              <p className="text-white/70 mb-4">
                Don&apos;t boil the ocean. Close 2-3 critical gaps. That&apos;s usually enough.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I need to close these skill gaps for [target role]:

1. [Gap 1]
2. [Gap 2]
3. [Gap 3]

For each gap, give me:
- The fastest way to reach "competent" level (not expert)
- One project that proves I have this skill
- Free resources to learn (specific courses, tutorials, docs)
- Realistic timeline (be honest, not optimistic)

I have [X hours per week] to dedicate to learning.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Validate Your Progress</h2>
              <p className="text-white/70 mb-4">
                Learning without feedback is dangerous. You might think you understand something 
                but be completely wrong.
              </p>
              <p className="text-white/70 mb-4">
                <strong className="text-white">Ways to validate skills:</strong>
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Build something:</strong> Create a project that uses the skill</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Teach someone:</strong> Explain it simply to a friend or in writing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Take assessments:</strong> LinkedIn Skill Assessments, HackerRank, etc.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Get reviewed:</strong> For technical skills, have experts critique your work</span>
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I've been learning [skill] and think I'm ready. Test my knowledge:

1. Ask me 5 interview-level questions about [skill]
2. Give me a small practical problem to solve
3. After I answer, rate my responses and identify any gaps

Be tough. I'd rather fail with you than in an interview.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 5: Reframe Gaps as Stories</h2>
              <p className="text-white/70 mb-4">
                You won&apos;t close every gap before applying. For the ones that remain, have a narrative ready.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for a role requiring [skill I don't have yet]. I have:
- [Related experience]
- [What I've been learning]
- [Quick wins I've achieved]

Write a response for when they ask about my experience with [skill] that:
- Acknowledges I'm still developing
- Highlights my trajectory and commitment
- Connects to adjacent strengths I do have
- Shows self-awareness without being self-deprecating`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                This turns a weakness into a demonstration of growth mindset.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">The 80/20 of Skills Gaps</h2>
              <p className="text-white/70 mb-4">
                Most roles really need 3-5 core competencies. The rest is padding.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">USUALLY MUST-HAVES</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Industry-specific technical skills</li>
                    <li>• Communication (written and verbal)</li>
                    <li>• Problem-solving approach</li>
                    <li>• Cultural fit indicators</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white/40 font-mono text-sm mb-2">USUALLY NICE-TO-HAVES</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Specific years of experience</li>
                    <li>• Industry-specific experience</li>
                    <li>• Advanced certifications</li>
                    <li>• Long list of tools/technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Stop Learning, Start Applying</h2>
              <p className="text-white/70 mb-4">
                Here&apos;s the uncomfortable truth: You can learn your way out of any job.
              </p>
              <p className="text-white/70 mb-4">
                Perfectionists study forever. Pragmatists apply when they&apos;re 70% ready and 
                learn the rest on the job.
              </p>
              <p className="text-white/70">
                If you meet the must-haves and half the strong preferences, apply. Worst case, 
                the interview becomes a skills gap analysis session—you&apos;ll learn exactly what to study next.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Action Step</h2>
              <p className="text-white/70 mb-4">
                Take one job posting you&apos;re interested in. Run the requirements analysis prompt. 
                You might realize you&apos;re closer than you thought.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-career-pivot"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Career Pivot Guide →
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
        
          <RelatedGuides guides={[
                    {
                              slug: 'ai-career-pivot',
                              title: 'AI Career Pivot',
                              description: 'Use skill insights to change careers.'
                    },
                    {
                              slug: 'ai-job-market-research',
                              title: 'Job Market Research',
                              description: 'Align skills with market demand.'
                    },
                    {
                              slug: 'ai-interview-prep',
                              title: 'AI Interview Prep',
                              description: 'Prepare to discuss your skills in interviews.'
                    }
          ]} />
        </article>
    </div>
  )
}

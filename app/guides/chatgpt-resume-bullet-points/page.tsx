import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Resume Bullet Points: Transform Job Duties Into Interview Magnets | GetTheJobAI',
  description: 'Learn how to use ChatGPT to write powerful resume bullet points. Prompts and examples to turn boring job duties into achievement-focused statements.',
  keywords: ['chatgpt resume bullet points', 'resume bullet points', 'ai resume writing', 'achievement statements', 'resume prompts'],
}

export default function ChatGPTResumeBulletPointsPage() {
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
            Resume Writing
          </p>
          <h1 className="text-4xl font-bold mb-6">
            ChatGPT Resume Bullet Points: Transform Boring Job Duties Into Interview Magnets
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your resume bullet points are doing the heavy lifting. Most resumes get 6-7 seconds of attention. 
            In that time, your bullets need to scream &quot;interview this person.&quot;
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Formula That Works</h2>
              <p className="text-white/70 mb-4">
                Strong bullet points follow this structure:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-lg font-semibold text-emerald-400 mb-2">
                  Action Verb + What You Did + Measurable Result
                </p>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">❌</span>
                  <span>&quot;Responsible for customer service&quot;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>&quot;Resolved 50+ customer inquiries daily, maintaining 98% satisfaction rating&quot;</span>
                </li>
              </ul>
              <p className="text-white/70 mt-4">
                <strong className="text-white">The difference?</strong> One tells them what your job was. The other tells them you were good at it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Basic Transformation Prompt</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Transform this resume bullet point into a stronger version using the formula: Action Verb + Achievement + Measurable Result

Original: "Handled customer complaints"

Make it specific, quantified, and achievement-focused.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Output example:</strong> &quot;Resolved 40+ customer escalations weekly, improving satisfaction scores 
                from 3.2 to 4.6 stars and reducing complaint resolution time by 35%&quot;
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Job-Specific Optimizer</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for a [target job title]. Here's a bullet point from my current resume:

"[your bullet point]"

Rewrite it to emphasize skills relevant to [target job] while keeping it factually accurate to what I actually did.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Number Finder</h2>
              <p className="text-white/70 mb-4">
                Don&apos;t have metrics? ChatGPT can help you think of them:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I worked as a [job title] and my main responsibilities included:
- [responsibility 1]
- [responsibility 2]
- [responsibility 3]

Help me identify metrics I could use to quantify these achievements. Ask me questions about volume, frequency, improvements, or outcomes that I might not have thought to measure.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Weak-to-Strong Converter</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Here are my current resume bullet points for my [job title] role:
[paste bullets]

Rate each bullet 1-10 on impact and suggest a stronger rewrite for any below 7. Focus on:
- Specific achievements over vague duties
- Numbers and percentages where possible
- Results that matter to employers`}</p>
              </div>
            </section>

            <EmailSignup 
              headline="Get more resume prompts like these"
              buttonText="Subscribe Free"
            />

            <section>
              <h2 className="text-2xl font-bold mb-4">Real Examples: Before and After</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Marketing Coordinator</h3>
              <div className="mb-6">
                <p className="text-white/50 text-sm mb-2">Before:</p>
                <ul className="space-y-1 text-white/70 mb-4">
                  <li>• Managed social media accounts</li>
                  <li>• Created content for campaigns</li>
                  <li>• Worked with the marketing team</li>
                </ul>
                <p className="text-white/50 text-sm mb-2">After:</p>
                <ul className="space-y-1 text-white/70">
                  <li className="text-emerald-400/90">• Grew Instagram following from 5K to 25K in 8 months through consistent content strategy</li>
                  <li className="text-emerald-400/90">• Produced 200+ pieces of content generating 2M+ impressions and $50K attributed revenue</li>
                  <li className="text-emerald-400/90">• Collaborated with 6-person team to launch 4 product campaigns, each exceeding engagement targets by 20%+</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Software Developer</h3>
              <div className="mb-6">
                <p className="text-white/50 text-sm mb-2">Before:</p>
                <ul className="space-y-1 text-white/70 mb-4">
                  <li>• Fixed bugs in the codebase</li>
                  <li>• Participated in code reviews</li>
                  <li>• Worked on various features</li>
                </ul>
                <p className="text-white/50 text-sm mb-2">After:</p>
                <ul className="space-y-1 text-white/70">
                  <li className="text-emerald-400/90">• Reduced production bugs by 60% through implementing comprehensive test coverage and automated CI/CD pipelines</li>
                  <li className="text-emerald-400/90">• Reviewed 500+ pull requests, mentoring 3 junior developers and improving team code quality scores</li>
                  <li className="text-emerald-400/90">• Delivered 12 customer-facing features ahead of schedule, directly impacting $200K ARR growth</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Sales Representative</h3>
              <div>
                <p className="text-white/50 text-sm mb-2">Before:</p>
                <ul className="space-y-1 text-white/70 mb-4">
                  <li>• Made sales calls and closed deals</li>
                  <li>• Met quarterly targets</li>
                  <li>• Built relationships with clients</li>
                </ul>
                <p className="text-white/50 text-sm mb-2">After:</p>
                <ul className="space-y-1 text-white/70">
                  <li className="text-emerald-400/90">• Closed $1.2M in new business in 2024, exceeding quota by 140% and ranking #2 of 35 reps</li>
                  <li className="text-emerald-400/90">• Maintained 115% average quota attainment over 8 consecutive quarters</li>
                  <li className="text-emerald-400/90">• Built portfolio of 45 enterprise accounts with 92% retention rate and $400K expansion revenue</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Best Action Verbs by Category</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="font-semibold text-emerald-400 mb-2">Leadership</p>
                  <p className="text-white/70 text-sm">Spearheaded, Directed, Orchestrated, Championed, Mobilized</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="font-semibold text-emerald-400 mb-2">Achievement</p>
                  <p className="text-white/70 text-sm">Exceeded, Surpassed, Achieved, Delivered, Attained</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="font-semibold text-emerald-400 mb-2">Creation</p>
                  <p className="text-white/70 text-sm">Developed, Launched, Built, Designed, Established</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="font-semibold text-emerald-400 mb-2">Improvement</p>
                  <p className="text-white/70 text-sm">Transformed, Optimized, Streamlined, Revamped, Enhanced</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Ultimate Prompt (Does Everything)</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Act as a resume optimization expert. I'm applying for [target job] at [company type]. 

Here's a bullet point describing something I did at my last job:
"[your bullet]"

Improve it by:
1. Starting with a powerful action verb
2. Adding specific numbers or percentages (suggest realistic ones if I need to estimate)
3. Focusing on the result/impact, not just the task
4. Keeping it under 2 lines
5. Making it relevant to my target role

Give me 3 variations, from conservative to aggressive.`}</p>
              </div>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Go Beyond Basic Prompts</h2>
              <p className="text-white/70 mb-4">
                These prompts will improve your bullets significantly. But if you want the complete system—prompts 
                for every industry, situation, and experience level—check out the <Link href="/guides/chatgpt-resume-prompts" className="text-emerald-400 hover:text-emerald-300">full ChatGPT resume prompts collection</Link>.
              </p>
              <p className="text-white/70 mb-4">
                It includes prompts for:
              </p>
              <ul className="space-y-1 text-white/70 mb-4">
                <li>• Career changers reframing experience</li>
                <li>• Gaps in employment</li>
                <li>• Entry-level candidates with limited experience</li>
                <li>• Executives emphasizing strategy over tactics</li>
                <li>• Industry-specific language optimization</li>
              </ul>
              <div className="mt-4">
                <Link 
                  href="/guides/chatgpt-resume-prompts"
                  className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
                >
                  Get All Resume Prompts →
                </Link>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Quick Tips</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <span><strong className="text-white">One achievement per bullet.</strong> Don&apos;t cram multiple accomplishments together.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <span><strong className="text-white">Most impressive first.</strong> Lead each job section with your strongest bullet.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <span><strong className="text-white">Match the job description.</strong> Use similar language to what they&apos;re asking for.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  <span><strong className="text-white">Be honest.</strong> Enhance, don&apos;t fabricate. You&apos;ll have to defend these in interviews.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5.</span>
                  <span><strong className="text-white">Test readability.</strong> If you can&apos;t explain a bullet in conversation, simplify it.</span>
                </li>
              </ul>
              <p className="text-white/70 mt-6">
                Your resume bullets are your highlight reel. Make every word count.
              </p>
            </section>
          </div>

          <RelatedGuides guides={[
            {
              slug: 'chatgpt-resume-prompts',
              title: 'ChatGPT Resume Prompts',
              description: 'The complete collection of prompts for resume optimization.'
            },
            {
              slug: 'ats-resume-optimization',
              title: 'ATS Resume Optimization',
              description: 'Get past applicant tracking systems with AI-optimized formatting.'
            },
            {
              slug: 'ai-resume-review',
              title: 'AI Resume Review',
              description: 'Get AI feedback on your resume before applying.'
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

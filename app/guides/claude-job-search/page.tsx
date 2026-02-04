import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use Claude for Job Searching (Better Than ChatGPT?) | GetTheJobAI',
  description: 'Claude has specific advantages for job search tasks. Learn the best prompts for resume review, cover letters, interview prep, and salary negotiation with Claude AI.',
  keywords: ['claude job search', 'claude resume help', 'claude vs chatgpt jobs', 'claude cover letter', 'claude interview prep'],
}

export default function ClaudeJobSearchPage() {
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
            AI Tools
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Use Claude for Job Searching (Better Than ChatGPT?)
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Most job seekers default to ChatGPT. But Claude has specific advantages for job search tasks—especially for nuanced writing and honest feedback.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Claude for Job Search?</h2>
              <p className="text-white/70 mb-4">
                Claude excels at:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Longer context</strong> - Paste entire job descriptions + resume in one prompt</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Nuanced writing</strong> - Cover letters that don&apos;t sound AI-generated</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Honest feedback</strong> - Less sycophantic, more useful criticism</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Detailed analysis</strong> - Better at complex comparison tasks</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Resume Review & Optimization</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for [role] at [company]. Review my resume against the job description. Be brutally honest.

Rate my fit from 1-10 and explain why. List the top 5 changes that would improve my match.

My resume:
[paste resume]

Job description:
[paste JD]`}</p>
              </div>
              <p className="text-white/50 text-sm">Claude will give you direct feedback without the excessive positivity you get from ChatGPT.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Cover Letter Writing</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a cover letter for [role] at [company]. Make it sound human, not AI-generated.

Key requirements from my research:
- [Requirement 1 from job posting]
- [Requirement 2]
- [Something I know about the company]

My relevant experience:
- [Achievement 1]
- [Achievement 2]

Tone: Professional but personable. No buzzwords.`}</p>
              </div>
              <p className="text-white/50 text-sm">Why Claude is better: Its writing tends to be less formulaic and more naturally varied than ChatGPT&apos;s.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Interview Preparation</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I have an interview for [role] at [company] in [industry]. 

Based on the job description below, generate:
1. The 10 most likely interview questions
2. For each question, a framework for answering (not a script)
3. 3 questions I should ask them that show I've done my research

Job description:
[paste JD]

Company background: [brief notes about company]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Salary Research</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm negotiating salary for a [role] position in [city] with [X years] experience.

Analyze the market and give me:
1. Salary range (low/mid/high)
2. Factors that would push me toward higher end
3. Non-salary compensation to negotiate
4. A script for asking for 15% above their initial offer

My background: [brief relevant experience]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. LinkedIn Optimization</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Review my LinkedIn headline and summary. Optimize for [target role] while keeping it human and searchable.

Current headline: [your headline]
Current summary: [your summary]

I want to be found by recruiters searching for: [target keywords]

Rewrite both. Make the summary compelling in the first 2 lines (before "see more").`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Job Description Analysis</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Analyze this job description. Tell me:
1. The 3 things they actually care about most (reading between the lines)
2. Red flags I should ask about in interviews
3. What kind of person they're really looking for
4. Key terms I must include in my application

Job description:
[paste JD]`}</p>
              </div>
              <p className="text-white/50 text-sm">Claude is particularly good at this nuanced analysis.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Mock Interviews</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Conduct a mock interview with me for [role] at [company]. 

Rules:
- Ask one question at a time
- Wait for my response before asking the next
- After each answer, give brief feedback on what was strong and what could improve
- Include a mix of behavioral and technical questions
- Push back occasionally like a real interviewer would

Start the interview.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Claude vs ChatGPT for Job Search</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 text-white/70">Task</th>
                      <th className="text-left py-2 text-white/70">Winner</th>
                      <th className="text-left py-2 text-white/70">Why</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/60">
                    <tr className="border-b border-white/5">
                      <td className="py-2">Resume rewriting</td>
                      <td className="py-2 text-white/80">Tie</td>
                      <td className="py-2">Both good</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Cover letters</td>
                      <td className="py-2 text-emerald-400">Claude</td>
                      <td className="py-2">More natural writing</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Honest feedback</td>
                      <td className="py-2 text-emerald-400">Claude</td>
                      <td className="py-2">Less sycophantic</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Interview prep</td>
                      <td className="py-2 text-emerald-400">Claude</td>
                      <td className="py-2">Better at complex roleplay</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Salary data</td>
                      <td className="py-2 text-blue-400">ChatGPT</td>
                      <td className="py-2">Web access (with Plus)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">Quick tasks</td>
                      <td className="py-2 text-blue-400">ChatGPT</td>
                      <td className="py-2">Faster responses</td>
                    </tr>
                    <tr>
                      <td className="py-2">Long documents</td>
                      <td className="py-2 text-emerald-400">Claude</td>
                      <td className="py-2">Larger context window</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Pro Tips for Using Claude</h2>
              <ul className="space-y-4 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">1.</span>
                  <span><strong className="text-white">Upload your resume</strong> - Claude can read PDFs directly. Better formatting preservation.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">2.</span>
                  <span><strong className="text-white">Use Projects (Claude Pro)</strong> - Create a &ldquo;Job Search&rdquo; project with your resume and target JDs saved. Context persists.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">3.</span>
                  <span><strong className="text-white">Ask for criticism</strong> - Claude sugarcoats by default. Explicitly ask for &ldquo;brutal feedback&rdquo; to get useful input.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">4.</span>
                  <span><strong className="text-white">Iterate, don&apos;t accept first draft</strong> - Ask Claude to &ldquo;make it more concise,&rdquo; &ldquo;add specific achievements,&rdquo; or &ldquo;reduce AI-sounding language.&rdquo;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">5.</span>
                  <span><strong className="text-white">Fact-check everything</strong> - Claude can hallucinate salary data or company facts. Verify before using.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Sample Workflow: Applying to a Job</h2>
              <ol className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">1.</span>
                  <span>Paste job description to Claude → Get analysis of what they really want</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">2.</span>
                  <span>Upload resume → Get tailored feedback and keyword suggestions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">3.</span>
                  <span>Write cover letter → Use Claude&apos;s draft, heavily edit for your voice</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">4.</span>
                  <span>Prepare for interview → Generate likely questions, practice answers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">5.</span>
                  <span>After offer → Use Claude for negotiation scripts</span>
                </li>
              </ol>
              <p className="text-white/50 text-sm mt-4">Total time: ~45 minutes vs 3+ hours doing it manually.</p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Bottom Line</h2>
              <p className="text-white/70 mb-4">
                Claude is particularly strong for nuanced writing tasks and honest feedback. Use it for cover letters, interview prep, and resume analysis. Use ChatGPT Plus for tasks needing web access (current salary data, company news).
              </p>
              <p className="text-emerald-400 font-semibold">
                Best approach? Use both strategically.
              </p>
            </section>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'chatgpt-resume-prompts',
              title: 'ChatGPT Resume Prompts',
              description: '50 prompts for resume optimization.'
            },
            {
              slug: 'ai-interview-preparation',
              title: 'AI Interview Preparation',
              description: 'Prepare for interviews with AI practice.'
            },
            {
              slug: 'ai-job-search-tools',
              title: 'AI Job Search Tools',
              description: 'Compare all the AI job search tools.'
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

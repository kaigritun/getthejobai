import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use Claude for Job Searching (Better Than ChatGPT?) | GetTheJobAI',
  description: 'Claude prompts for resume review, cover letters, interview prep, and salary negotiation. Compare Claude vs ChatGPT for job search tasks.',
  keywords: ['claude job search', 'claude ai resume', 'claude vs chatgpt', 'claude cover letter', 'claude interview prep'],
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
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Longer context</strong> — Paste entire job descriptions + resume in one prompt</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Nuanced writing</strong> — Cover letters that don&apos;t sound AI-generated</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Honest feedback</strong> — Less sycophantic, more useful criticism</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Detailed analysis</strong> — Better at complex comparison tasks</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Resume Review & Optimization</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">CLAUDE PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for [role] at [company]. Review my resume against the job description. Be brutally honest.

Rate my fit from 1-10 and explain why. List the top 5 changes that would improve my match.

My resume:
[paste resume]

Job description:
[paste JD]`}</p>
              </div>
              <p className="text-white/50 text-sm mt-4">
                Claude will give you direct feedback without the excessive positivity you get from ChatGPT.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Cover Letter Writing</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">CLAUDE PROMPT</p>
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
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 my-4">
                <p className="text-emerald-400 font-semibold mb-2">Why Claude is Better</p>
                <p className="text-white/80 text-sm">Its writing tends to be less formulaic and more naturally varied than ChatGPT&apos;s.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Interview Preparation</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">CLAUDE PROMPT</p>
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
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">CLAUDE PROMPT</p>
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
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">CLAUDE PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Review my LinkedIn headline and summary. Optimize for [target role] while keeping it human and searchable.

Current headline: [your headline]
Current summary: [your summary]

I want to be found by recruiters searching for: [target keywords]

Rewrite both. Make the summary compelling in the first 2 lines (before "see more").`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Job Description Analysis</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">CLAUDE PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Analyze this job description. Tell me:
1. The 3 things they actually care about most (reading between the lines)
2. Red flags I should ask about in interviews
3. What kind of person they're really looking for
4. Key terms I must include in my application

Job description:
[paste JD]`}</p>
              </div>
              <p className="text-white/50 text-sm mt-4">
                Claude is particularly good at this nuanced analysis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Mock Interviews</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">CLAUDE PROMPT</p>
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
              <div className="space-y-3 text-white/70">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Resume rewriting</span>
                  <span className="text-white/50 font-semibold">Tie — Both good</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Cover letters</span>
                  <span className="text-emerald-400 font-semibold">Claude — More natural writing</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Honest feedback</span>
                  <span className="text-emerald-400 font-semibold">Claude — Less sycophantic</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Interview prep</span>
                  <span className="text-emerald-400 font-semibold">Claude — Better roleplay</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Salary data</span>
                  <span className="text-blue-400 font-semibold">ChatGPT — Web access (with Plus)</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Quick tasks</span>
                  <span className="text-blue-400 font-semibold">ChatGPT — Faster responses</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Long documents</span>
                  <span className="text-emerald-400 font-semibold">Claude — Larger context window</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Pro Tips for Using Claude</h2>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">1. Upload Your Resume</p>
                  <p className="text-white/80 text-sm">Claude can read PDFs and documents. Upload your resume directly instead of copy-pasting for better formatting preservation.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">2. Use Projects (Claude Pro)</p>
                  <p className="text-white/80 text-sm">Create a &quot;Job Search&quot; project with your resume, target job descriptions, and company research saved. Claude remembers context across conversations.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">3. Ask for Criticism</p>
                  <p className="text-white/80 text-sm">Claude will sugarcoat by default. Explicitly ask for &quot;brutal feedback&quot; or &quot;honest criticism&quot; to get useful input.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">4. Iterate, Don&apos;t Accept First Draft</p>
                  <p className="text-white/80 text-sm">First outputs are starting points. Ask Claude to: &quot;Make it more concise&quot; • &quot;Add more specific achievements&quot; • &quot;Reduce the AI-sounding language&quot;</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">5. Fact-Check Everything</p>
                  <p className="text-white/80 text-sm">Claude can hallucinate salary data or company facts. Verify any specific claims before using them.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Sample Workflow: Applying to a Job</h2>
              <div className="space-y-3 text-white/70">
                <div className="flex gap-4 items-center border-b border-white/10 pb-2">
                  <span className="text-emerald-400 font-mono text-sm">1</span>
                  <span>Paste job description to Claude → Get analysis of what they really want</span>
                </div>
                <div className="flex gap-4 items-center border-b border-white/10 pb-2">
                  <span className="text-emerald-400 font-mono text-sm">2</span>
                  <span>Upload resume → Get tailored feedback and keyword suggestions</span>
                </div>
                <div className="flex gap-4 items-center border-b border-white/10 pb-2">
                  <span className="text-emerald-400 font-mono text-sm">3</span>
                  <span>Write cover letter → Use Claude&apos;s draft, heavily edit for your voice</span>
                </div>
                <div className="flex gap-4 items-center border-b border-white/10 pb-2">
                  <span className="text-emerald-400 font-mono text-sm">4</span>
                  <span>Prepare for interview → Generate likely questions, practice answers</span>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="text-emerald-400 font-mono text-sm">5</span>
                  <span>After offer → Use Claude for negotiation scripts</span>
                </div>
              </div>
              <p className="text-white/50 text-sm mt-4">
                Total time: ~45 minutes vs 3+ hours doing it manually.
              </p>
            </section>

            <section>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-6">
                <p className="text-emerald-400 font-semibold mb-2">Bottom Line</p>
                <p className="text-white/80">Claude is particularly strong for nuanced writing tasks and honest feedback. Use it for cover letters, interview prep, and resume analysis. Use ChatGPT Plus for tasks needing web access (current salary data, company news).</p>
                <p className="text-white/60 text-sm mt-4">Best approach? Use both strategically.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/chatgpt-job-search" className="text-emerald-400 hover:underline">ChatGPT prompts for job search</Link>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/ai-cover-letter-generator" className="text-emerald-400 hover:underline">AI cover letter writing guide</Link>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <EmailSignup headline="Get more Claude prompts for job searching" />

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-job-search', title: 'ChatGPT Job Search', description: 'Complete ChatGPT prompts for job seekers' },
            { slug: 'ai-cover-letter-generator', title: 'AI Cover Letter Generator', description: 'Write compelling cover letters with AI' },
            { slug: 'ai-interview-preparation', title: 'AI Interview Preparation', description: 'Ace any interview with AI practice' },
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

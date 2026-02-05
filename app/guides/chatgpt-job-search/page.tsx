import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT for Job Search: The Complete Guide to AI-Powered Job Hunting | GetTheJobAI',
  description: 'Learn how to use ChatGPT for job searching. AI-powered prompts for resumes, cover letters, company research, interview prep, and salary negotiation.',
  keywords: ['chatgpt job search', 'ai job hunting', 'chatgpt resume', 'chatgpt cover letter', 'ai interview prep'],
}

export default function ChatGPTJobSearchPage() {
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
            Complete Guide
          </p>
          <h1 className="text-4xl font-bold mb-6">
            ChatGPT for Job Search: The Complete Guide to AI-Powered Job Hunting
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Looking for a job is exhausting. But ChatGPT can handle most of the tedious work for you. 
            Here&apos;s everything you need to know about using AI to land your next job faster.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why ChatGPT Changes Everything for Job Seekers</h2>
              <p className="text-white/70 mb-4">
                The old job search looked like this:
              </p>
              <ul className="space-y-2 text-white/70 mb-6">
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  Spend 45 minutes customizing each resume
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  Write a new cover letter from scratch every time
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  Research companies one Google search at a time
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">•</span>
                  Practice interview answers alone in your car
                </li>
              </ul>
              <p className="text-white/70 mb-4">
                The AI-powered job search:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Tailor your resume to any job in 5 minutes
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Generate compelling cover letters that actually sound like you
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Get comprehensive company research instantly
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Practice interviews with an AI that adapts to your answers
                </li>
              </ul>
              <p className="text-white/70 mt-4">
                <strong className="text-white">The math is simple:</strong> if you can apply to 5x more jobs with the same quality, 
                your odds of landing interviews go up dramatically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Resume Optimization</h2>
              <p className="text-white/70 mb-4">
                Your resume needs to match each job description. Not just the keywords—the entire framing.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for [job title] at [company]. Here's the job description:
[paste description]

Here's my current resume:
[paste resume]

Rewrite my resume to emphasize the skills and experience most relevant to this role. Keep it to one page. Use strong action verbs and quantify results where possible.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Pro tip:</strong> Always review the output. ChatGPT might embellish or 
                misinterpret your experience. The goal is enhancement, not fabrication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Cover Letter Generation</h2>
              <p className="text-white/70 mb-4">
                Nobody likes writing cover letters. ChatGPT makes them painless.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a cover letter for [job title] at [company]. 

Key points to include:
- I have [X years] experience in [field]
- My biggest relevant achievement is [achievement]
- I'm excited about this company because [genuine reason]

Make it conversational, not formal. Show enthusiasm without sounding desperate. Keep it under 300 words.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Company Research</h2>
              <p className="text-white/70 mb-4">
                Walking into an interview without researching the company is a rookie mistake. 
                ChatGPT can prep you in minutes.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I have an interview at [company] for a [role] position. Give me:
1. A summary of what the company does
2. Recent news or achievements I should mention
3. Likely challenges they're facing that I could help solve
4. Questions I should ask that show I've done my research`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Interview Preparation</h2>
              <p className="text-white/70 mb-4">
                Practice makes perfect, and ChatGPT is the most patient practice partner you&apos;ll ever have.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Act as an interviewer for [company] hiring a [job title]. Ask me common interview questions for this role, one at a time. After each answer, give me brief feedback on how I could improve, then move to the next question.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Salary Negotiation</h2>
              <p className="text-white/70 mb-4">
                Most people leave money on the table because they don&apos;t know how to negotiate. 
                ChatGPT can be your negotiation coach.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I received a job offer for [title] at [company] with a salary of $[amount]. Based on my [X years] of experience and the market rate, I believe I should ask for $[target]. Help me craft a negotiation email that's confident but not aggressive.`}</p>
              </div>
            </section>

            <EmailSignup 
              headline="Get the complete AI job search toolkit"
              buttonText="Get Free Tips"
            />

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">1.</span>
                  <span><strong className="text-white">Copying ChatGPT output word-for-word.</strong> Always edit. Always personalize. Hiring managers can spot generic AI content.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">2.</span>
                  <span><strong className="text-white">Letting ChatGPT lie for you.</strong> It will embellish if you let it. Review everything for accuracy.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">3.</span>
                  <span><strong className="text-white">Using the same prompts everyone else uses.</strong> Generic prompts = generic results. The more context you give, the better the output.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">4.</span>
                  <span><strong className="text-white">Skipping the human touch.</strong> AI handles the grunt work. Your personality, stories, and genuine interest still matter.</span>
                </li>
              </ul>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Taking It Further</h2>
              <p className="text-white/70 mb-4">
                If you&apos;re serious about using AI in your job search, you need more than basic prompts. 
                I&apos;ve compiled <Link href="/guides/chatgpt-resume-prompts" className="text-emerald-400 hover:text-emerald-300">50 battle-tested ChatGPT prompts</Link> specifically 
                for job seekers—covering resumes, cover letters, interviews, networking, and salary negotiation.
              </p>
              <p className="text-white/70">
                The prompts I&apos;ve shared here are just the beginning. The full collection includes prompts for 
                specific industries, career changers, and situations most guides never cover.
              </p>
              <div className="mt-4">
                <Link 
                  href="/guides/chatgpt-resume-prompts"
                  className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
                >
                  Get All 50 Prompts →
                </Link>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
              <p className="text-white/70 mb-4">
                ChatGPT won&apos;t get you hired by itself. But it removes the friction from every part of the 
                job search process. Instead of spending your energy on formatting and wordsmithing, you can 
                focus on what actually matters: finding the right opportunities and preparing to crush the interview.
              </p>
              <p className="text-white/70">
                Start with the prompts above. Customize them for your situation. And remember: the best 
                job search strategy is one you&apos;ll actually execute consistently.
              </p>
            </section>
          </div>

          <RelatedGuides guides={[
            {
              slug: 'chatgpt-resume-prompts',
              title: 'ChatGPT Resume Prompts',
              description: 'Copy-paste prompts to improve your resume fast.'
            },
            {
              slug: 'chatgpt-interview-preparation',
              title: 'ChatGPT Interview Prep',
              description: 'Practice interviews with AI and nail your responses.'
            },
            {
              slug: 'ai-job-search-tools',
              title: 'AI Job Search Tools',
              description: 'The best AI tools for every stage of your job hunt.'
            }
          ]} />
        </article>
    </div>
  )
}

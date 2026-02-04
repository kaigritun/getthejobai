import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use ChatGPT to Prepare for Job Interviews (Complete Guide) | GetTheJobAI',
  description: 'Use ChatGPT for interview prep: analyze job descriptions, prepare STAR stories, research companies, and practice common questions. Complete 2026 guide.',
  keywords: ['chatgpt interview prep', 'chatgpt interview preparation', 'ai interview practice', 'chatgpt job interview', 'interview prep prompts'],
}

export default function ChatGPTInterviewPreparationPage() {
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
            Interview
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Use ChatGPT to Prepare for Job Interviews
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Interview prep is tedious. ChatGPT makes it 10x faster—if you use it right. 
            Here&apos;s the complete system.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Analyze the Job Description</h2>
              <p className="text-white/70 mb-4">
                Before anything else, understand what they&apos;re really looking for.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Analyze this job description and identify:
1. The top 5 skills they need
2. The problems this role solves
3. What success looks like in this role
4. Hidden requirements not explicitly stated

Job description: [paste JD]`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Why this matters:</strong> Interviewers ask about what&apos;s in the JD. 
                Knowing their priorities lets you prepare relevant stories.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Prepare STAR Stories</h2>
              <p className="text-white/70 mb-4">
                Behavioral interviews follow a pattern. Prepare stories in advance using the 
                STAR method (Situation, Task, Action, Result).
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT — Generate Questions</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm interviewing for [role]. Generate 10 likely behavioral interview questions based on this job description: [paste JD]

For each question, tell me what skill they're assessing.`}</p>
              </div>
              <p className="text-white/70 mb-4">
                Then for each question, structure your response:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT — Structure STAR Response</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me structure a STAR response for: "[interview question]"

My relevant experience: [brief context]

Give me a framework with specific prompts to fill in each section:
- Situation (2 sentences max)
- Task (what was your responsibility)
- Action (specific steps YOU took)
- Result (quantifiable outcome)`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Pro tip:</strong> Prepare 5-7 STAR stories that can be adapted 
                to different questions. Cover: leadership, conflict, failure, success, teamwork.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Research the Company</h2>
              <p className="text-white/70 mb-4">
                20 minutes of research beats 90% of candidates.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm interviewing at [Company]. Help me prepare:
1. Their recent news and developments
2. Their main competitors and market position
3. Challenges they might be facing
4. 5 thoughtful questions I could ask the interviewer`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">What to look for:</strong> Recent funding, product launches, 
                leadership changes, expansion plans, industry challenges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Practice Common Questions</h2>
              <p className="text-white/70 mb-4">
                Use ChatGPT as your mock interviewer.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Act as an interviewer for [role] at [company]. Ask me common interview questions one at a time. After I respond, give me feedback on:
- What was strong
- What could be improved
- A better way to phrase my answer`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Practice out loud:</strong> Speaking your answers is different 
                from thinking them. Practice verbally at least 3 times.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Prepare Your Questions</h2>
              <p className="text-white/70 mb-4">
                &ldquo;Do you have any questions?&rdquo; is not optional. Have 5-7 ready.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Generate 10 impressive questions to ask at the end of an interview for [role]. They should:
- Show I've researched the company
- Demonstrate strategic thinking
- Not be easily answered by the website`}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2">EXAMPLES</p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• &ldquo;What does success look like in the first 90 days?&rdquo;</li>
                  <li>• &ldquo;What&apos;s the biggest challenge the team is facing right now?&rdquo;</li>
                  <li>• &ldquo;How does this role contribute to [specific company goal]?&rdquo;</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Post-Interview Follow-Up</h2>
              <p className="text-white/70 mb-4">
                Send a thank-you email within 24 hours. Make it specific.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a thank-you email after my interview for [role] at [company]. Reference: [something specific discussed]. Keep it under 150 words, professional but warm.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">What to include:</strong> Thank them for their time, reference 
                a specific topic discussed, reiterate your interest, keep it brief.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Pro Tips for Interview Success</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Do a mock interview the day before</strong> — Fresh practice builds confidence</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Prepare stories for your 5 biggest achievements</strong> — Numbers and impact</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Research your interviewer on LinkedIn</strong> — Find common ground</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Have questions about team dynamics and success metrics</strong> — Shows you think long-term</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Record yourself practicing</strong> — You&apos;ll catch filler words and weak answers</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Get the Complete Interview Prep Prompt Pack</h2>
              <p className="text-white/70 mb-4">
                50 ChatGPT prompts for every stage of your job search: resumes, cover letters, 
                LinkedIn, interviews, salary negotiation, and follow-ups.
              </p>
              <Link 
                href="/prompts"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get 50 ChatGPT Prompts — $19 →
              </Link>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Next Steps</h2>
              <p className="text-white/70 mb-4">
                Before your interview, make sure the rest of your application is solid:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-company-research"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Deep Company Research →
                </Link>
                <Link 
                  href="/guides/ai-interview-followup"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Interview Follow-Up Guide →
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
        
          <RelatedGuides guides={[
            {
              slug: 'ai-interview-prep',
              title: 'AI Interview Prep',
              description: 'Additional interview prep strategies and tool recommendations.'
            },
            {
              slug: 'ai-company-research',
              title: 'Company Research with AI',
              description: '20 minutes of research that beats 90% of candidates.'
            },
            {
              slug: 'ai-salary-negotiation',
              title: 'AI Salary Negotiation',
              description: 'Get the salary you deserve with AI-powered scripts.'
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

import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Mock Interview Practice: Prepare With ChatGPT & Claude | GetTheJobAI',
  description: 'Practice interviews with AI before the real thing. Step-by-step guide to using ChatGPT and Claude for mock interviews with feedback.',
  keywords: ['ai mock interview', 'chatgpt interview practice', 'ai interview prep', 'mock interview ai'],
}

export default function AIMockInterviewPage() {
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
            Interview Prep
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Mock Interview Practice: Prepare With ChatGPT & Claude
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Practice interviews anytime, get instant feedback, and walk into the real thing 
            confident. Here&apos;s how to use AI as your personal interview coach.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Best AI Tools for Mock Interviews</h2>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-400 mb-2">ChatGPT (GPT-4)</h3>
                  <p className="text-white/70 text-sm">Best for: Behavioral questions, STAR method practice, conversational interviews</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-400 mb-2">Claude</h3>
                  <p className="text-white/70 text-sm">Best for: Detailed feedback, nuanced questions, longer practice sessions</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-400 mb-2">Google Interview Warmup</h3>
                  <p className="text-white/70 text-sm">Best for: Voice practice, Google-specific roles, structured feedback</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Set Up a Realistic Mock Interview</h2>
              <p className="text-white/70 mb-4">
                The key is giving AI enough context to ask relevant questions.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`You are a hiring manager at [Company Name] interviewing me for [Job Title].

Here's the job description:
[Paste job description]

Here's my resume:
[Paste resume or key points]

Conduct a realistic 30-minute interview:
1. Start with a brief intro about yourself and the role
2. Ask 5-6 questions mixing behavioral and role-specific
3. Leave time for my questions at the end
4. After each answer, briefly note if I should elaborate or move on
5. At the end, give me honest feedback

Start the interview now.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Behavioral Interview Practice (STAR Method)</h2>
              <p className="text-white/70 mb-4">
                Most interviews include &quot;Tell me about a time when...&quot; questions. Practice until 
                STAR responses feel natural.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I need to practice behavioral interview questions using the STAR method.

My background: [Brief description of your experience]

Ask me 5 behavioral questions one at a time. After each answer:
1. Evaluate if I followed STAR (Situation, Task, Action, Result)
2. Score my answer 1-10
3. Tell me what was strong and what to improve
4. Give me a better version of my answer if it was below 7

Focus on these competencies: [leadership, problem-solving, teamwork, etc.]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Technical Interview Practice</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Software Engineering</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Conduct a technical interview for a [Junior/Senior] [Frontend/Backend/Full-stack] role.

Ask me:
1. One system design question (if senior)
2. Two coding problems (medium difficulty)
3. Questions about my experience with [specific tech stack]

For coding: Give me the problem, let me explain my approach, then evaluate.
Don't give hints unless I'm completely stuck.`}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Product Management</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Conduct a PM interview with these question types:
1. Product sense: "How would you improve [product]?"
2. Metrics: "How would you measure success for [feature]?"
3. Strategy: "Should [company] enter [market]?"
4. Execution: "Walk me through launching [feature]"

After each answer, give feedback on structure, creativity, and business acumen.`}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Case Interviews (Consulting)</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Give me a consulting case interview. You're the interviewer at [McKinsey/BCG/Bain].

Case type: [Market entry / Profitability / M&A / Operations]

Present the case, then let me:
1. Ask clarifying questions
2. Structure my approach
3. Work through the analysis
4. Give a recommendation

Provide data when I ask for it. Push back on weak logic. At the end, evaluate my framework, math, and communication.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Get Constructive Feedback</h2>
              <p className="text-white/70 mb-4">
                After practicing, use this prompt to get actionable improvement areas.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on our mock interview, give me detailed feedback:

1. Top 3 strengths I demonstrated
2. Top 3 areas to improve (with specific examples)
3. Answers that need rework (and how to fix them)
4. Body language/communication tips (based on how I phrased things)
5. One thing to practice before my real interview

Be direct. I want honest feedback, not encouragement.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Prepare for Curveball Questions</h2>
              <p className="text-white/70 mb-4">
                Practice the questions that catch people off guard.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Give me 10 difficult interview questions I might not expect, including:
- "What's your biggest weakness?" (but make me actually answer honestly)
- "Why should we hire you over other candidates?"
- "Tell me about a time you failed"
- Questions specific to [industry/role]
- One truly weird question (like Google used to ask)

Ask them one at a time. After each, tell me if my answer was defensive, authentic, or impressive.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Pro Tips for AI Mock Interviews</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong>Speak out loud</strong> — Type your answers as if you&apos;re speaking. This catches verbal tics.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong>Set a timer</strong> — Aim for 1-2 minutes per answer. AI can&apos;t tell if you&apos;re rambling.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong>Record yourself</strong> — Use Voice Memos and listen back for filler words.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong>Do multiple rounds</strong> — Practice the same questions until answers feel natural.</span>
                </li>
              </ul>
            </section>

            <section className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-emerald-400">Get Interview-Ready Faster</h2>
              <p className="text-white/70 mb-4">
                Our prompt pack includes 15+ interview prompts covering behavioral, technical, 
                and situational questions — plus prompts for researching companies and preparing questions to ask.
              </p>
              <Link 
                href="/prompts"
                className="inline-block bg-emerald-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-emerald-300 transition-colors"
              >
                Get the Prompt Pack — $19
              </Link>
            </section>
          </div>
        </article>

        <RelatedGuides 
          guides={[
            { slug: 'ai-interview-preparation', title: 'AI Interview Preparation', description: 'Complete guide to preparing for interviews with AI' },
            { slug: 'chatgpt-interview-preparation', title: 'ChatGPT Interview Preparation', description: 'Use ChatGPT to prepare for your next interview' },
            { slug: 'chatgpt-elevator-pitch', title: 'ChatGPT Elevator Pitch', description: 'Craft your 30-second pitch with AI' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 mt-24 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center text-white/40 text-sm">
          © 2026 GetTheJobAI. Land your next role with AI.
        </div>
      </footer>
    </div>
  )
}

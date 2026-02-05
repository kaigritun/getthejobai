import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Mock Interview Practice (Free Prompts) | GetTheJobAI',
  description: 'Use ChatGPT as your personal interview coach. Free prompts for behavioral questions, technical interviews, and tough questions. Practice 24/7.',
  keywords: ['chatgpt mock interview', 'ai interview practice', 'chatgpt interview prep', 'practice interview with ai', 'chatgpt behavioral questions'],
}

export default function ChatGPTMockInterviewPage() {
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
            Interview Prep
          </p>
          <h1 className="text-4xl font-bold mb-6">
            ChatGPT Mock Interview: Practice Anytime
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Turn ChatGPT into your personal interview coach. Practice behavioral questions, 
            get feedback on your answers, and walk into interviews confident.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Practice With AI?</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Available 24/7—practice at midnight before your interview
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  No judgment—stumble through answers until you nail them
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Instant feedback—know exactly what to improve
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Customized to your role—not generic questions
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Set Up Your Mock Interview</h2>
              <p className="text-white/70 mb-4">
                Tell ChatGPT who to be and what role you&apos;re interviewing for.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`You are a senior hiring manager at [COMPANY OR INDUSTRY] interviewing me for a [JOB TITLE] role.

Conduct a realistic interview:
- Ask one question at a time
- Wait for my response before continuing
- Give brief feedback after each answer
- Ask follow-up questions like a real interviewer would
- Be somewhat skeptical—push back on vague answers
- Cover behavioral, situational, and role-specific questions

Start with "Tell me about yourself."`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Practice Behavioral Questions (STAR Method)</h2>
              <p className="text-white/70 mb-4">
                Get coached on specific behavioral questions using the STAR method.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me prepare for this behavioral interview question:

"Tell me about a time you had to deal with a difficult coworker."

My experience: [BRIEF DESCRIPTION OF YOUR SITUATION]

Help me structure this as a STAR response:
- Situation: Set the context
- Task: What was your responsibility
- Action: What you specifically did
- Result: Quantifiable outcome

Then critique my answer and suggest improvements.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                Pro tip: Prepare 5-6 stories that can flex to answer multiple behavioral questions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Handle Tough Questions</h2>
              <p className="text-white/70 mb-4">
                Practice the questions that make you nervous.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm interviewing for [ROLE] and I'm worried about this question:

"[TOUGH QUESTION - e.g., Why did you leave your last job? / What's your biggest weakness? / Why should we hire you over other candidates?]"

My honest situation: [THE REAL ANSWER YOU'RE NERVOUS ABOUT]

Help me:
1. Craft a professional, honest answer
2. Reframe any negatives as positives
3. Practice 2-3 variations so I'm not scripted
4. Prepare for likely follow-up questions`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Technical/Role-Specific Practice</h2>
              <p className="text-white/70 mb-4">
                Get questions specific to your target role.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Generate 10 interview questions specific to a [JOB TITLE] role at a [COMPANY TYPE - startup/enterprise/agency].

Include:
- 3 technical/skill-based questions
- 3 situational questions
- 2 culture-fit questions
- 2 questions about my experience

For each question, give me:
- Why interviewers ask this
- What a strong answer includes
- Red flags to avoid`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Get Answer Feedback</h2>
              <p className="text-white/70 mb-4">
                Paste your practice answers and get specific improvement suggestions.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rate this interview answer on a scale of 1-10 and explain why:

Question: "[THE INTERVIEW QUESTION]"

My answer: "[YOUR ANSWER]"

Evaluate:
- Clarity and structure (did I ramble?)
- Specificity (concrete examples vs. vague claims)
- Relevance (did I actually answer the question?)
- Impact (did I show value?)

Then rewrite my answer to make it a 9/10.`}</p>
              </div>
            </section>

            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold mb-3">50+ Interview Prompts Ready to Copy</h3>
              <p className="text-white/70 mb-4">
                Get every prompt you need—mock interviews, behavioral questions, technical prep, 
                salary negotiation, and follow-up emails.
              </p>
              <Link 
                href="/prompts" 
                className="inline-block bg-emerald-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-emerald-400 transition-colors"
              >
                Get the Prompt Pack — $19
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">Interview Prep Checklist</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">□</span>
                  Research company (mission, recent news, challenges)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">□</span>
                  Prepare 5-6 STAR stories that flex to multiple questions
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">□</span>
                  Practice &quot;tell me about yourself&quot; until it&apos;s natural
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">□</span>
                  Prepare 3-5 questions to ask them
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">□</span>
                  Do at least one full mock interview with ChatGPT
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">□</span>
                  Practice tough questions specific to your situation
                </li>
              </ul>
            </section>
          </div>
        </article>

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-interview-preparation', title: 'ChatGPT Interview Preparation', description: 'Complete interview prep guide' },
            { slug: 'ai-interview-prep', title: 'AI Interview Prep', description: 'Use AI for interview success' },
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Copy-paste prompts to improve your resume' },
          ]}
        />
    </div>
  )
}

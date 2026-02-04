import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '30 Common Interview Questions + ChatGPT Prompts to Prepare | GetTheJobAI',
  description: 'Stop memorizing scripts. Use AI to prepare authentic interview answers. ChatGPT prompts for behavioral questions, technical questions, and questions to ask.',
  keywords: ['interview questions', 'chatgpt interview prep', 'ai interview preparation', 'behavioral interview questions', 'common interview questions'],
}

export default function InterviewQuestionsPage() {
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
            30 Common Interview Questions + ChatGPT Prompts to Prepare
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Stop memorizing scripts. Use AI to prepare authentic answers that highlight your experience.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">Behavioral Questions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400">&ldquo;Tell me about yourself&rdquo;</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm interviewing for [role] at [company type]. My background:
- Current role: [title]
- Key achievement: [biggest win]
- Why I'm looking: [honest reason]

Write a 60-second "tell me about yourself" that:
- Starts with a hook, not "I graduated from..."
- Connects my past to this role
- Ends with why I'm excited about this opportunity`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400">&ldquo;What&apos;s your greatest weakness?&rdquo;</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me answer "what's your greatest weakness" for a [role] interview.

My actual areas for growth:
- [Real weakness 1]
- [Real weakness 2]

Write an answer that:
- Is honest, not fake ("I work too hard")
- Shows self-awareness
- Explains what I'm doing to improve
- Takes 30 seconds to deliver`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400">&ldquo;Tell me about a time you failed&rdquo;</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I need to answer "tell me about a failure" in an interview.

Here's a real situation:
[Describe what happened]

Reframe this using the STAR method:
- Situation (brief context)
- Task (what I was responsible for)
- Action (what I did, including the mistake)
- Result (what I learned/changed)

Make it sound reflective, not defensive.`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400">&ldquo;Why do you want to work here?&rdquo;</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm interviewing at [company name] for [role].

What I know about them:
- [Something from their website/news]
- [Their product/service]
- [Their culture/values]

Write a "why this company" answer that:
- References something specific about them
- Connects to my career goals
- Sounds genuine, not like I'm reading their About page`}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Technical/Role Questions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400">&ldquo;Walk me through your experience&rdquo;</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a 2-minute walkthrough of my career for a [target role] interview:

Career history:
- [Job 1]: [dates], [key accomplishment]
- [Job 2]: [dates], [key accomplishment]
- [Job 3]: [dates], [key accomplishment]

Focus on:
- Progression and growth
- Skills relevant to target role
- Clear narrative thread`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400">&ldquo;What&apos;s your approach to [specific task]?&rdquo;</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I might be asked "what's your approach to [task]" in my [role] interview.

Outline a clear, structured approach that:
- Shows I have a methodology
- Includes 3-4 steps
- References real tools/techniques
- Can be explained in 90 seconds`}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Situational Questions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400">&ldquo;How would you handle [conflict scenario]?&rdquo;</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Prepare me for "how would you handle a conflict with [coworker/manager/client]?"

Give me a framework that:
- Shows emotional intelligence
- Has specific steps
- Focuses on resolution, not blame
- I can adapt to different scenarios`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-emerald-400">&ldquo;What would you do in your first 90 days?&rdquo;</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a 90-day plan for starting as [role] at [company type]:

Days 1-30: [Learning phase priorities]
Days 31-60: [Building phase priorities]
Days 61-90: [Execution phase priorities]

Make it specific to the role, not generic.`}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Questions to Ask Them</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Generate 10 interview questions I can ask for a [role] at [company type]:

Mix of:
- Questions about the role day-to-day
- Questions about team/culture
- Questions about growth opportunities
- Questions that show I've done research

Avoid questions easily answered on their website.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Rapid-Fire Prep</h2>
              <p className="text-white/70 mb-4">
                Last-minute interview coming up? Use this all-in-one prompt:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I have an interview in [X hours] for [role] at [company].

Key things about me:
- [Top 3 achievements]
- [Top 3 skills]

Quick prep:
1. 3 likely questions they'll ask
2. Brief answers for each
3. 2 questions I should ask them
4. 1 thing to research about them before the call`}</p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Practice Out Loud</h2>
              <p className="text-white/70 mb-4">
                AI helps you prepare content, but delivery matters. After generating answers:
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <span>Read them out loud 3 times</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <span>Time yourself (most answers should be 60-90 seconds)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <span>Record yourself and watch back</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  <span>Adjust for natural speech patterns</span>
                </li>
              </ul>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">More Interview Resources</h2>
              <p className="text-white/70 mb-4">
                Continue your interview preparation:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-interview-prep"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Full AI Interview Guide →
                </Link>
                <Link 
                  href="/guides/ai-salary-negotiation"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Salary Negotiation →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-interview-prep',
              title: 'AI Interview Prep',
              description: 'Practice with AI before your real interview.'
            },
            {
              slug: 'linkedin-optimization',
              title: 'LinkedIn Optimization',
              description: 'Use ChatGPT to optimize your LinkedIn profile.'
            },
            {
              slug: 'ai-salary-negotiation',
              title: 'AI Salary Negotiation',
              description: 'Scripts and strategies to negotiate your offer.'
            }
          ]} />
        </article>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-sm text-white/40">
            © 2026 GetTheJobAI. Helping job seekers use AI effectively.
          </p>
        </div>
      </footer>
    </div>
  )
}

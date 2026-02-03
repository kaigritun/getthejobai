import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Interview Prep: How to Use ChatGPT to Ace Your Next Interview | GetTheJobAI',
  description: 'Use AI to prepare for job interviews. Generate practice questions, build STAR answers, and role-play mock interviews with ChatGPT.',
  keywords: ['ai interview prep', 'chatgpt interview', 'ai interview practice', 'mock interview ai', 'interview questions ai'],
}

export default function AIInterviewPrepPage() {
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
            AI Interview Prep: How to Use ChatGPT to Ace Your Next Interview
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Job interviews are nerve-wracking. AI can be your interview prep coach—not a replacement 
            for actual practice, but a tool that helps you prepare better answers, faster.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">What AI Can (and Can&apos;t) Do for Interview Prep</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-emerald-400">AI is great at:</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Generating likely interview questions based on job descriptions</li>
                    <li>• Helping you structure STAR-format answers</li>
                    <li>• Role-playing as an interviewer</li>
                    <li>• Researching company info quickly</li>
                    <li>• Identifying gaps in your preparation</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-red-400">AI won&apos;t:</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Replace actual speaking practice</li>
                    <li>• Give you confidence (that comes from repetition)</li>
                    <li>• Know what the specific interviewer cares about</li>
                    <li>• Read the room for you</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/50 mt-4 text-sm">
                Use AI for prep. Use humans (or a mirror) for practice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Generate Interview Questions</h2>
              <p className="text-white/70 mb-4">
                Start by feeding the job description to ChatGPT, Claude, or Gemini:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on this job description, generate 15 likely interview questions:
- 5 behavioral questions (STAR format)
- 5 technical/role-specific questions
- 5 questions about my background

Job description:
[paste full description]`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                This gives you a targeted question list instead of generic &ldquo;tell me about yourself&rdquo; prep.
              </p>

              <h3 className="text-lg font-semibold mb-3">Follow-up Prompt for Hard Questions</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Now generate 5 difficult questions they might ask to test my weaknesses or probe gaps in my experience.`}</p>
              </div>
              <p className="text-white/50 text-sm mt-4">
                These &ldquo;hard questions&rdquo; are where most people stumble. Prep for them specifically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Build STAR-Format Answers</h2>
              <p className="text-white/70 mb-4">
                For behavioral questions, use the STAR method:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <ul className="space-y-2 text-white/70">
                  <li><strong className="text-emerald-400">S</strong>ituation: Set the context</li>
                  <li><strong className="text-emerald-400">T</strong>ask: What was your responsibility</li>
                  <li><strong className="text-emerald-400">A</strong>ction: What you specifically did</li>
                  <li><strong className="text-emerald-400">R</strong>esult: The outcome (with numbers if possible)</li>
                </ul>
              </div>

              <h3 className="text-lg font-semibold mb-3">Prompt for Building STAR Answers</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me create a STAR-format answer for this question:
"Tell me about a time you handled a difficult stakeholder."

Here's the situation I want to use:
[Brief description of what happened]

Make the answer:
- Under 2 minutes when spoken
- Focused on MY actions, not the team's
- Include a specific, measurable result`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Role-Play with AI</h2>
              <p className="text-white/70 mb-4">
                This is where AI gets genuinely useful. Set up a mock interview:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`You are a hiring manager interviewing me for [job title] at [company]. 

Conduct a realistic interview:
- Ask one question at a time
- Wait for my response before moving on
- Follow up with probing questions if my answer is vague
- At the end, give me feedback on my responses

Start with an introductory question.`}</p>
              </div>
              <p className="text-white/70 mb-4">
                Then actually answer out loud (or type). The AI will follow up like a real interviewer would.
              </p>

              <h3 className="text-lg font-semibold mb-3">Getting Feedback</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on my interview responses, what are:
1. My strongest answers
2. Answers that need more specific examples
3. Questions I seemed underprepared for
4. Suggestions for improvement`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Research the Company</h2>
              <p className="text-white/70 mb-4">
                AI can speed up company research significantly:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm interviewing at [Company Name] for [Role]. Give me:

1. Recent news (last 6 months)
2. Their main products/services
3. Key competitors
4. Their stated mission/values
5. Any challenges they're likely facing
6. Good questions to ask the interviewer`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Important:</strong> Verify this info. AI can hallucinate company details. 
                Cross-check anything important on the company&apos;s actual website or recent news.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 5: Prepare Your Questions</h2>
              <p className="text-white/70 mb-4">
                Every interview ends with &ldquo;Do you have questions for us?&rdquo; Bad candidates ask generic questions. Good candidates ask specific ones.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Generate 10 thoughtful questions I could ask at the end of my interview for [role] at [company].

Avoid generic questions like "what's the culture like?"
Focus on:
- The specific team/role
- Current challenges
- Success metrics
- Growth opportunities

Make them sound natural, not scripted.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                Pick 3-5 favorites and memorize them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Interview Questions + AI-Assisted Answers</h2>

              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-3">&ldquo;Tell me about yourself&rdquo;</h3>
                  <p className="text-white/70 text-sm mb-3">
                    This isn&apos;t your life story. It&apos;s your professional highlight reel.
                  </p>
                  <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me write a 60-second "tell me about yourself" answer that:
- Covers my current role briefly
- Highlights 2-3 key achievements
- Connects to why I want THIS job
- Ends with enthusiasm for the opportunity

My background:
[Your details]`}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-3">&ldquo;Why do you want to work here?&rdquo;</h3>
                  <p className="text-white/70 text-sm mb-3">
                    This needs to be specific to the company.
                  </p>
                  <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me craft a genuine answer to "why do you want to work at [Company]?"

Include:
- Something specific about their product/mission
- How it connects to my experience
- Why now (timing)

Avoid: Generic praise, sounding desperate`}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-3">&ldquo;What&apos;s your biggest weakness?&rdquo;</h3>
                  <p className="text-white/70 text-sm mb-3">
                    The classic trap question.
                  </p>
                  <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me answer "what's your biggest weakness?" in a way that:
- Is honest (not "I work too hard")
- Shows self-awareness
- Demonstrates what I'm doing to improve
- Doesn't disqualify me for the role

My actual weakness: [be honest]`}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Night-Before Checklist</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">☐</span>
                    Review your STAR answers out loud
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">☐</span>
                    Read company&apos;s latest blog post/news
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">☐</span>
                    Check interviewer&apos;s LinkedIn (if you know who)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">☐</span>
                    Prepare your questions to ask
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">☐</span>
                    Review the job description one more time
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">☐</span>
                    Test your tech setup (if virtual)
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Day-Of Tips</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">1.</span>
                  <span><strong className="text-white">Arrive 10 minutes early</strong> - Late = instant negative impression</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">2.</span>
                  <span><strong className="text-white">Bring copies of your resume</strong> - Even if they have it</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">3.</span>
                  <span><strong className="text-white">Take a breath before answering</strong> - Pausing is okay</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">4.</span>
                  <span><strong className="text-white">Ask for clarification</strong> - If you don&apos;t understand, ask</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5.</span>
                  <span><strong className="text-white">Send a thank-you email</strong> - Within 24 hours, reference something specific discussed</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Using AI Post-Interview</h2>
              <p className="text-white/70 mb-4">
                After the interview, use AI to improve:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I just finished an interview. Here are the questions I was asked and how I answered:

[List questions and your answers]

Help me:
1. Identify answers that could have been stronger
2. Prepare better versions for next time
3. Note any red flags I might have missed`}</p>
              </div>
              <p className="text-white/50 text-sm mt-4">
                This turns every interview into a learning opportunity.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
              <p className="text-white/70">
                AI won&apos;t interview for you, but it can make your prep dramatically more effective. 
                Use it to generate questions, build STAR answers, role-play practice, and research companies.
              </p>
              <p className="text-white/70 mt-4">
                The candidates who prepare the most thoroughly usually win. AI just makes that preparation faster.
              </p>
              <p className="text-emerald-400 mt-4 font-medium">Good luck.</p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Continue Your Prep</h2>
              <p className="text-white/70 mb-4">
                Make sure the rest of your application is solid:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/chatgpt-resume-prompts"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  ChatGPT Resume Prompts →
                </Link>
                <Link 
                  href="/guides/ai-cover-letter-generator"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Cover Letter Generator →
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

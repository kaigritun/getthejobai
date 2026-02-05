import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Interview Preparation: The Complete Guide | GetTheJobAI',
  description: 'Learn how to use AI for interview preparation. Mock interviews with ChatGPT, company research, answer preparation, and follow-up strategies.',
  keywords: ['ai interview preparation', 'interview preparation ai', 'chatgpt interview prep', 'ai mock interview', 'interview prep tools', 'ai interview practice'],
}

export default function AIInterviewPreparationPage() {
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
            Interview
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Interview Preparation: The Complete Guide
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            AI has changed how candidates prepare for interviews. From unlimited mock interviews 
            with ChatGPT to instant company research, you can now prepare more thoroughly in less time. 
            Here&apos;s how to use AI to walk into every interview confident and ready.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The AI Interview Prep Framework</h2>
              <p className="text-white/70 mb-4">
                Effective interview preparation has four phases. AI helps with all of them:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-emerald-400 font-mono text-2xl mb-2">01</div>
                  <h3 className="font-bold mb-1">Research</h3>
                  <p className="text-white/60 text-sm">Know the company, role, and interviewers</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-emerald-400 font-mono text-2xl mb-2">02</div>
                  <h3 className="font-bold mb-1">Prepare Answers</h3>
                  <p className="text-white/60 text-sm">Build STAR stories and anticipate questions</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-emerald-400 font-mono text-2xl mb-2">03</div>
                  <h3 className="font-bold mb-1">Practice</h3>
                  <p className="text-white/60 text-sm">Mock interviews until answers flow naturally</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-emerald-400 font-mono text-2xl mb-2">04</div>
                  <h3 className="font-bold mb-1">Follow Up</h3>
                  <p className="text-white/60 text-sm">Thank you notes and continued engagement</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Mock Interviews with ChatGPT</h2>
              <p className="text-white/70 mb-4">
                This is where AI shines. You can practice interviews at 2 AM, repeat questions 
                indefinitely, and get instant feedback—all free.
              </p>

              <h3 className="text-lg font-semibold mb-3">Setting Up an AI Interviewer</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`You are a hiring manager at [Company] interviewing me for [Role].

Conduct a realistic 30-minute interview:
- Ask one question at a time
- Wait for my response before continuing
- Follow up on vague answers
- Mix behavioral and role-specific questions
- Be slightly skeptical (like real interviewers)

At the end, give me honest feedback on:
1. My strongest answer
2. My weakest answer  
3. Overall impression
4. Specific improvements

Start with a brief introduction and your first question.`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3">Practice Specific Question Types</h3>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="font-bold text-emerald-400 mb-2">Behavioral Questions</h4>
                  <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Give me 5 behavioral interview questions for a [Role] position, focusing on:
- Leadership
- Conflict resolution  
- Problem-solving under pressure
- Working with difficult stakeholders
- Failure and learning from mistakes

For each question, tell me what the interviewer is really trying to assess.`}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="font-bold text-emerald-400 mb-2">Technical Questions</h4>
                  <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on this job description, generate 10 technical questions they might ask:

[Paste job description]

Include:
- 3 fundamental/basic questions
- 4 intermediate questions  
- 3 advanced/edge case questions`}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="font-bold text-emerald-400 mb-2">&ldquo;Curveball&rdquo; Questions</h4>
                  <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Generate 5 unexpected or difficult interview questions that could throw me off.

These should be questions that:
- Probe gaps in my resume
- Challenge my career decisions
- Test how I handle ambiguity
- Assess cultural fit in subtle ways`}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Researching Companies with AI</h2>
              <p className="text-white/70 mb-4">
                20 minutes of AI-assisted research beats 90% of candidates. Here&apos;s how to do it:
              </p>

              <h3 className="text-lg font-semibold mb-3">The Company Deep Dive Prompt</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm interviewing at [Company] for [Role]. Help me research:

1. BUSINESS MODEL
- How do they make money?
- Who are their main customers?
- What's their competitive advantage?

2. RECENT NEWS (Last 6 months)
- Any major announcements, launches, or changes?
- Leadership changes?
- Funding rounds or acquisitions?

3. CHALLENGES
- What problems are they likely facing?
- Industry headwinds?
- Competitor pressure?

4. CULTURE SIGNALS
- What do they emphasize in job postings and their careers page?
- Glassdoor themes (if you know them)?

5. QUESTIONS I SHOULD ASK
- Give me 5 thoughtful questions that show I've done research`}</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                <p className="text-red-400 font-semibold mb-2">⚠️ Important: Verify Everything</p>
                <p className="text-white/70 text-sm">
                  AI can hallucinate company details. Always verify news, funding info, and specific facts 
                  on the company&apos;s website, LinkedIn, or recent news articles. Getting facts wrong in an 
                  interview is worse than not knowing them.
                </p>
              </div>

              <h3 className="text-lg font-semibold mb-3">Researching Your Interviewer</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Based on this LinkedIn profile, help me prepare for an interview with this person:

[Paste LinkedIn info - name, title, background]

Tell me:
1. Their likely priorities based on their role
2. Topics they might care about
3. Common ground I could reference
4. Questions they're likely to focus on`}</p>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mt-4">
                <p className="text-emerald-400 font-semibold mb-2">Related Guide:</p>
                <p className="text-white/70">
                  For a complete company research playbook, see <Link href="/guides/ai-company-research" className="text-emerald-400 hover:underline">Research Companies with AI Before Interviews</Link>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Preparing Your Answers</h2>
              <p className="text-white/70 mb-4">
                Don&apos;t memorize scripts—that sounds robotic. Instead, prepare flexible frameworks.
              </p>

              <h3 className="text-lg font-semibold mb-3">Building STAR Stories</h3>
              <p className="text-white/70 mb-4">
                For behavioral questions, the STAR format (Situation, Task, Action, Result) is your friend:
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me build a STAR-format answer for this question:
"Tell me about a time you had to influence without authority."

Here's the situation I want to use:
[Your brief description]

Make my answer:
- 90 seconds when spoken (under 2 minutes max)
- Focused on MY specific actions
- Include a quantifiable result
- Sound natural, not scripted`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 mt-6">The Weakness Question</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me answer "What's your biggest weakness?" authentically.

My actual weakness: [be honest]

Criteria:
- Sounds genuine (not "I work too hard")
- Shows self-awareness
- Demonstrates I'm actively working on it
- Won't disqualify me for this specific role`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 mt-6">&ldquo;Tell Me About Yourself&rdquo;</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a 60-second "tell me about yourself" answer for [Role] at [Company].

My background:
[Brief work history]

Structure it as:
1. Current role (15 seconds)
2. Key achievements relevant to this role (30 seconds)
3. Why this opportunity excites me (15 seconds)

Make it conversational, not a resume recitation.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Preparing Questions to Ask</h2>
              <p className="text-white/70 mb-4">
                Good candidates ask generic questions. Great candidates ask specific, thoughtful ones 
                that show they&apos;ve done their homework.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Generate 10 interview questions I can ask for a [Role] at [Company].

Avoid generic questions like "what's the culture like?"

Categories:
- 3 about the specific team and role
- 3 about current challenges and priorities
- 2 about success metrics and growth
- 2 about the interviewer's experience

Make them sound natural and genuinely curious.`}</p>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-emerald-400 font-semibold mb-2">Pro Tip:</p>
                <p className="text-white/70">
                  Prepare 8-10 questions but only ask 3-4. Some will get answered during the interview. 
                  Having extras shows you&apos;re prepared.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Follow-Up Strategies</h2>
              <p className="text-white/70 mb-4">
                The interview doesn&apos;t end when you walk out. Your follow-up can set you apart.
              </p>

              <h3 className="text-lg font-semibold mb-3">The Thank You Email</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a thank you email after my interview for [Role] at [Company].

Interview details:
- Interviewer: [Name, Title]
- Topics we discussed: [Key points]
- Something specific they mentioned: [Detail]

Make it:
- Under 150 words
- Reference something specific from our conversation
- Reiterate my interest without being desperate
- Professional but warm`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3">Following Up After Silence</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a follow-up email. It's been [X days] since my interview and I haven't heard back.

Context: [Any details about timeline they mentioned]

Make it:
- Polite and professional
- Not pushy or desperate
- Include a reason for reaching out if possible (e.g., sharing something relevant)
- Under 100 words`}</p>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mt-4">
                <p className="text-emerald-400 font-semibold mb-2">Deep Dive:</p>
                <p className="text-white/70">
                  For complete follow-up strategies, see <Link href="/guides/ai-interview-followup" className="text-emerald-400 hover:underline">AI Interview Follow-Ups and Thank You Notes</Link>.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">AI Interview Prep Checklist</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="font-bold mb-4 text-emerald-400">One Week Before</h3>
                <ul className="space-y-2 text-white/70 mb-6">
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Research company with AI deep dive prompt
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Generate likely interview questions from job description
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Build 5-7 STAR stories for behavioral questions
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Prepare questions to ask the interviewer
                  </li>
                </ul>

                <h3 className="font-bold mb-4 text-emerald-400">Two-Three Days Before</h3>
                <ul className="space-y-2 text-white/70 mb-6">
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Do 2-3 full mock interviews with AI
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Practice answers out loud (not just typing)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Research your specific interviewers on LinkedIn
                  </li>
                </ul>

                <h3 className="font-bold mb-4 text-emerald-400">Night Before</h3>
                <ul className="space-y-2 text-white/70 mb-6">
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Review STAR stories one more time
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Check company&apos;s latest news/social media
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Test tech setup if virtual interview
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Get good sleep (seriously)
                  </li>
                </ul>

                <h3 className="font-bold mb-4 text-emerald-400">After Interview</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Send thank you email within 24 hours
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Note questions asked for future prep
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white/40">☐</span>
                    Use AI to analyze what could have gone better
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tools for AI Interview Preparation</h2>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white font-semibold">Tool</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Best For</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium text-emerald-400">ChatGPT / Claude</td>
                      <td className="py-3 px-4">Mock interviews, answer prep, research</td>
                      <td className="py-3 px-4">Free / $20 mo</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Google Interview Warmup</td>
                      <td className="py-3 px-4">Speaking practice with AI feedback</td>
                      <td className="py-3 px-4">Free</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Yoodli</td>
                      <td className="py-3 px-4">Speech analysis, filler word tracking</td>
                      <td className="py-3 px-4">Free / Premium</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-medium">Pramp</td>
                      <td className="py-3 px-4">Technical interview practice (coding)</td>
                      <td className="py-3 px-4">Free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">The Bottom Line</h2>
              <p className="text-white/70 mb-4">
                AI gives you a massive advantage in interview preparation—if you use it right. 
                The key is using AI for research and practice, not as a crutch for memorized scripts.
              </p>
              <p className="text-white/70 mb-4">
                The candidates who prepare most thoroughly tend to win. AI just makes that preparation 
                faster and more comprehensive.
              </p>
              <p className="text-emerald-400 font-medium">
                Your next interview is an opportunity. Prepare like it matters—because it does.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Continue Your Prep</h2>
              <p className="text-white/70 mb-4">
                Make sure the rest of your application is solid:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-interview-prep"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Interview Prep (Detailed) →
                </Link>
                <Link 
                  href="/guides/ai-interview-followup"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Follow-Up Emails →
                </Link>
                <Link 
                  href="/guides/ai-company-research"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Company Research →
                </Link>
              </div>
            </section>
          </div>

          <RelatedGuides guides={[
            {
              slug: 'ai-interview-prep',
              title: 'AI Interview Prep',
              description: 'Detailed prompts and strategies for interview practice.'
            },
            {
              slug: 'ai-interview-followup',
              title: 'AI Interview Follow-up',
              description: 'Write perfect thank-you emails and follow-ups.'
            },
            {
              slug: 'ai-company-research',
              title: 'AI Company Research',
              description: 'Research companies thoroughly before interviews.'
            }
          ]} />
        </article>
    </div>
  )
}

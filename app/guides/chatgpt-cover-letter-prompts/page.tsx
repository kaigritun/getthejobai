import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Cover Letter Prompts That Actually Get Interviews | GetTheJobAI',
  description: 'Copy-paste ChatGPT prompts to write cover letters that sound human and get responses. Templates for career changers, FAANG applications, and cold outreach.',
  keywords: ['chatgpt cover letter', 'ai cover letter', 'cover letter prompts', 'cover letter generator', 'chatgpt job application'],
}

export default function ChatGPTCoverLetterPromptsPage() {
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
            Applications
          </p>
          <h1 className="text-4xl font-bold mb-6">
            ChatGPT Cover Letter Prompts That Actually Get Interviews
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Writing cover letters sucks. Use these ChatGPT prompts to generate ones 
            that sound human and actually get responses.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Foundation Prompt</h2>
              <p className="text-white/70 mb-4">
                Before generating any cover letter, give ChatGPT context about you:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for [JOB TITLE] at [COMPANY]. Here's my relevant experience:
- [Key achievement 1]
- [Key achievement 2]
- [Key achievement 3]

Here's the job description:
[PASTE JOB DESCRIPTION]

Write a cover letter that:
1. Opens with a specific hook (not "I'm excited to apply")
2. Connects my experience to their requirements
3. Shows I researched the company
4. Ends with a clear call to action
5. Keeps it under 300 words`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">For Jobs Where You&apos;re Underqualified</h2>
              <p className="text-white/70 mb-4">
                Missing some requirements? Reframe your experience:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for [ROLE] but I'm missing [SPECIFIC REQUIREMENT].
Reframe my experience with [RELATED SKILL] to show transferable value.
Focus on learning speed and adaptability over exact match.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">For Career Changers</h2>
              <p className="text-white/70 mb-4">
                Switching industries? This prompt addresses it head-on:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm transitioning from [OLD FIELD] to [NEW FIELD].
Write a cover letter that:
1. Explains my transition motivation (genuine, not desperate)
2. Highlights transferable skills
3. Shows I've already started learning (mention any courses, projects)
4. Addresses the experience gap head-on`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">For Competitive Companies (FAANG, etc.)</h2>
              <p className="text-white/70 mb-4">
                Top-tier companies want results and specificity:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`This is for [COMPANY], known for [THEIR CULTURE/VALUES].
Make the letter more direct and results-focused.
Include specific metrics from my experience.
Reference something specific about the company that isn't on their careers page.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The &quot;Sound Human&quot; Fix</h2>
              <p className="text-white/70 mb-4">
                If your cover letter sounds like AI wrote it, run this:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite this cover letter to:
1. Use contractions (I'm, I've, don't)
2. Start at least one sentence with "But" or "And"
3. Include one slightly informal phrase
4. Remove any sentence that starts with "I am confident that"
5. Cut anything that sounds like a LinkedIn bio`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cold Outreach Cover Letter</h2>
              <p className="text-white/70 mb-4">
                Not responding to a posting? Different approach:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a cold outreach cover letter to [CONTACT NAME], [TITLE] at [COMPANY].
I want to explore opportunities in [AREA].
My hook: [Something specific about their work you admire]
Keep it to 150 words max—this is going in an email.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Follow-Up Email</h2>
              <p className="text-white/70 mb-4">
                After sending your application:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a follow-up email for my [ROLE] application at [COMPANY].
It's been [X] days since I applied.
Be brief, add one new piece of value (recent relevant news, idea, etc.)
Don't sound desperate.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Using the default opening</strong> - &quot;I am writing to express my interest&quot; is a dead giveaway it&apos;s AI</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Not editing</strong> - ChatGPT gives you 80%, you provide the 20% that makes it yours</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Generic company research</strong> - Don&apos;t just say their mission statement back to them</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Too long</strong> - 300 words max. Hiring managers skim.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <p className="text-white/70 mb-4">
                Got your cover letter? Keep optimizing:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/chatgpt-resume-prompts" className="text-emerald-400 hover:underline">ChatGPT Resume Prompts</Link>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/ai-interview-preparation" className="text-emerald-400 hover:underline">AI Interview Preparation Guide</Link>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Optimize your resume with AI-powered prompts' },
            { slug: 'ai-interview-preparation', title: 'AI Interview Preparation', description: 'Prepare for interviews with ChatGPT coaching' },
            { slug: 'ai-linkedin-optimization', title: 'LinkedIn Optimization', description: 'Get recruiters to find you on LinkedIn' },
          ]}
        />
    </div>
  )
}

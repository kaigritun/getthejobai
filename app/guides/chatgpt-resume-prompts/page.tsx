import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Resume Prompts That Actually Work (2025) | GetTheJobAI',
  description: 'Copy-paste ChatGPT prompts to improve your resume. Tested prompts for bullet points, summaries, ATS optimization, and tailoring to job descriptions.',
  keywords: ['chatgpt resume prompts', 'ai resume prompts', 'chatgpt resume help', 'ai resume writing'],
}

export default function ChatGPTResumePromptsPage() {
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
            Resume
          </p>
          <h1 className="text-4xl font-bold mb-6">
            ChatGPT Resume Prompts That Actually Work
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Stop getting generic advice. These are the exact prompts I use to improve resumes 
            with ChatGPT. Copy, paste, customize.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Before You Start</h2>
              <p className="text-white/70 mb-4">
                ChatGPT works best when you give it context. Before using these prompts:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  Have your current resume ready (or a rough draft)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  Copy the job description you&apos;re targeting
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  Know your key achievements (even rough numbers)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Improve Weak Bullet Points</h2>
              <p className="text-white/70 mb-4">
                Turn vague job duties into achievement-focused bullet points.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I need to improve this resume bullet point. Make it achievement-focused using the XYZ formula (Accomplished X, as measured by Y, by doing Z).

Current bullet: "Responsible for managing social media accounts"

My context: I grew our Instagram from 2k to 15k followers in 8 months.

Give me 3 options, each under 2 lines.`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                <strong className="text-white/70">Why it works:</strong> The XYZ formula forces quantifiable achievements. 
                Giving context ensures ChatGPT doesn&apos;t make up numbers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Write a Professional Summary</h2>
              <p className="text-white/70 mb-4">
                Generate a compelling summary that hooks recruiters in 6 seconds.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a professional summary for my resume. Keep it to 3-4 sentences max.

About me:
- Current role: [Your current/most recent job]
- Years of experience: [X years]
- Key skills: [3-4 main skills]
- Biggest achievement: [Your best accomplishment]
- Target role: [Job you're applying for]

Make it confident but not arrogant. No clichés like "passionate" or "results-driven."`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Tailor Resume to Job Description</h2>
              <p className="text-white/70 mb-4">
                This is the most powerful prompt. Use it for every application.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for this job. Help me tailor my resume.

JOB DESCRIPTION:
[Paste the full job description here]

MY CURRENT RESUME:
[Paste your resume here]

Please:
1. List the top 5 keywords/skills from the job description I should emphasize
2. Identify which of my experiences best match their requirements
3. Suggest specific changes to my bullet points to better match this role
4. Flag any gaps between my experience and their requirements

Be specific and actionable.`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                <strong className="text-white/70">Pro tip:</strong> Run this for every job you really want. 
                Tailored resumes get 3x more callbacks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. ATS Optimization</h2>
              <p className="text-white/70 mb-4">
                Make sure your resume gets past Applicant Tracking Systems.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Analyze my resume for ATS compatibility.

MY RESUME:
[Paste your resume]

TARGET JOB POSTING:
[Paste the job description]

Check for:
1. Keyword match rate (what % of their required skills appear in my resume?)
2. Missing keywords I should add
3. Formatting issues that might confuse ATS (tables, graphics, headers)
4. Action verbs I should use from their industry

Give me a score out of 100 and specific fixes.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Quantify Vague Achievements</h2>
              <p className="text-white/70 mb-4">
                When you don&apos;t have exact numbers, ChatGPT can help you estimate reasonably.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me quantify this achievement for my resume.

What I did: "Improved the onboarding process for new hires"

Context:
- Company size: ~200 employees
- I was on a team of 3 HR people
- We reduced the time it took to get new hires productive
- This was over about 6 months

Help me estimate reasonable metrics I could use (time saved, satisfaction scores, etc.) 
and write 2-3 bullet point options. Don't make up fake numbers - help me think through 
what I could reasonably claim or measure.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Rewrite for a Different Industry</h2>
              <p className="text-white/70 mb-4">
                Translating your experience to a new field.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm transitioning from [Current Industry] to [Target Industry].

My current resume focuses on: [Current focus/skills]

Target role: [Job title you want]

Help me:
1. Identify transferable skills that translate well
2. Reframe my experience using industry terminology for [Target Industry]
3. Rewrite my top 3 bullet points to emphasize relevant skills
4. Suggest what to de-emphasize or remove

Keep the content honest - just help me frame it better for this new audience.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Gap Explanation Helper</h2>
              <p className="text-white/70 mb-4">
                How to address employment gaps professionally.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I have a gap in my resume from [Start Date] to [End Date].

The real reason: [Be honest - layoff, health, caregiving, travel, etc.]

During this time, I actually: [Any skills learned, freelance work, courses, volunteering]

Help me:
1. Write a brief, professional explanation (1-2 sentences max)
2. Suggest how to frame any productive activities from this period
3. Advise whether to address it on the resume or save it for interviews

I want to be honest but also present myself well.`}</p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Don&apos;t use ChatGPT&apos;s output verbatim.</strong> Always edit for your voice and verify facts.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Don&apos;t let it make up numbers.</strong> Give it real context or ask for estimation frameworks.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Don&apos;t ignore the generic suggestions.</strong> If it gives you buzzwords, push back and ask for specifics.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Do iterate.</strong> First output is rarely best. Say &ldquo;make it more specific&rdquo; or &ldquo;less corporate.&rdquo;</span>
                </li>
              </ul>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Next Steps</h2>
              <p className="text-white/70 mb-4">
                Once your resume is solid, work on the rest of your application:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-cover-letter-generator"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Cover Letter Generator →
                </Link>
                <Link 
                  href="/guides/ai-interview-prep"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Interview Prep →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'best-ai-resume-builders-2026',
                              title: 'Best AI Resume Builders',
                              description: 'Top tools to build an ATS-optimized resume automatically.'
                    },
                    {
                              slug: 'ats-resume-optimization',
                              title: 'ATS Resume Optimization',
                              description: 'Get past applicant tracking systems with AI-optimized formatting.'
                    },
                    {
                              slug: 'ai-cover-letter-generator',
                              title: 'AI Cover Letter Generator',
                              description: 'Write compelling cover letters that match job descriptions.'
                    }
          ]} />
        </article>
    </div>
  )
}

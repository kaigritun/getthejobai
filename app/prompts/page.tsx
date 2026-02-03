import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free ChatGPT Prompts for Job Search | GetTheJobAI',
  description: 'Copy-paste ChatGPT prompts for resumes, cover letters, interview prep, and job applications. All free, all tested.',
}

const promptCategories = [
  {
    title: 'Resume Prompts',
    desc: 'Improve bullets, write summaries, optimize for ATS',
    prompts: [
      {
        name: 'Improve Bullet Points',
        prompt: `Improve this resume bullet point using the XYZ formula (Accomplished X, as measured by Y, by doing Z):

"[Your current bullet point]"

Context about what I actually achieved: [Add your context]

Give me 3 options, each under 2 lines.`,
      },
      {
        name: 'Professional Summary',
        prompt: `Write a 3-sentence professional summary for my resume.

Role: [Your current role]
Experience: [X] years in [field]
Key skills: [Your top 3-4 skills]
Target job: [What you're applying for]

No clichés like "passionate" or "results-driven."`,
      },
      {
        name: 'ATS Keyword Check',
        prompt: `Compare my resume to this job posting and identify missing keywords.

JOB POSTING:
[Paste job description]

MY RESUME:
[Paste your resume]

List the top 10 keywords I'm missing and suggest where to add them naturally.`,
      },
    ],
  },
  {
    title: 'Cover Letter Prompts',
    desc: 'Generate personalized cover letters quickly',
    prompts: [
      {
        name: 'Full Cover Letter',
        prompt: `Write a cover letter for this job. Keep it under 300 words.

JOB POSTING:
[Paste job description]

MY BACKGROUND:
- Current role: [Your role]
- Relevant experience: [Key experience that matches]
- Why this company: [What genuinely interests you]

Tone: Professional but human. No generic phrases.`,
      },
      {
        name: 'Opening Hook',
        prompt: `Write 3 different opening lines for my cover letter that will grab attention.

I'm applying for: [Job title] at [Company]
My strongest qualification: [Your best match to this role]
Something unique about me: [What sets you apart]

Avoid clichés. Make it memorable.`,
      },
    ],
  },
  {
    title: 'Interview Prep Prompts',
    desc: 'Practice answers and prepare questions',
    prompts: [
      {
        name: 'STAR Story Generator',
        prompt: `Help me structure this experience as a STAR story for interviews.

What happened: [Describe a work accomplishment]

Format it as:
- Situation (1 sentence): The context
- Task (1 sentence): What I needed to do
- Action (2-3 sentences): Specific steps I took
- Result (1 sentence): Quantified outcome

Keep it under 90 seconds when spoken.`,
      },
      {
        name: 'Behavioral Questions Practice',
        prompt: `I'm interviewing for [Job Title]. Generate 10 likely behavioral interview questions based on this job description:

[Paste job description]

For each question, note which competency it's testing and give me a hint about what they want to hear.`,
      },
      {
        name: 'Questions to Ask Interviewer',
        prompt: `I'm interviewing at [Company] for [Role]. 

What I know about them: [What you've researched]
What I care about: [Your priorities - growth, culture, tech, etc.]

Generate 5 thoughtful questions that show I've done research and will help me evaluate if this is the right fit.`,
      },
    ],
  },
  {
    title: 'Networking Prompts',
    desc: 'LinkedIn messages and cold outreach',
    prompts: [
      {
        name: 'LinkedIn Connection Request',
        prompt: `Write a LinkedIn connection request (under 300 characters).

Who I'm reaching out to: [Their role/how you found them]
Why I want to connect: [Genuine reason]
What we have in common: [Shared interest, school, company, etc.]

Be genuine, not salesy.`,
      },
      {
        name: 'Informational Interview Request',
        prompt: `Write an email asking for a 20-minute informational interview.

To: [Their name and role]
How I found them: [Referral, LinkedIn, etc.]
Why them specifically: [What about their career interests you]
My background: [Brief relevant context]

Keep it under 150 words. Make it easy to say yes.`,
      },
    ],
  },
]

export default function PromptsPage() {
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
            <Link href="/prompts" className="text-white">Prompts</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-16">
          <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Prompts Library
          </p>
          <h1 className="text-4xl font-bold mb-6">
            ChatGPT Prompts for Job Search
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Copy-paste prompts that actually work. Fill in the brackets with your info 
            and let AI do the heavy lifting.
          </p>
        </div>

        <div className="space-y-16">
          {promptCategories.map((category) => (
            <section key={category.title}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                <p className="text-white/50">{category.desc}</p>
              </div>
              
              <div className="space-y-4">
                {category.prompts.map((item) => (
                  <details 
                    key={item.name}
                    className="border border-white/10 rounded-lg group"
                  >
                    <summary className="p-4 cursor-pointer hover:bg-white/[0.02] transition-colors flex justify-between items-center">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-white/30 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-4 pb-4">
                      <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-xs text-white/40 font-mono">COPY THIS PROMPT</p>
                          <span className="text-xs text-emerald-400 font-mono">
                            Select All + Copy
                          </span>
                        </div>
                        <pre className="text-sm text-white/80 whitespace-pre-wrap font-mono">{item.prompt}</pre>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3">Want More Detailed Prompts?</h2>
          <p className="text-white/70 mb-4">
            Check out our in-depth guides with examples and variations:
          </p>
          <Link 
            href="/guides/chatgpt-resume-prompts"
            className="text-emerald-400 hover:text-emerald-300"
          >
            ChatGPT Resume Prompts (Full Guide) →
          </Link>
        </section>
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

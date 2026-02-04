import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Resume Templates: Free ChatGPT-Powered Formats (2025) | GetTheJobAI',
  description: 'Free resume templates optimized for ATS with AI-powered customization prompts. Modern formats for tech, finance, healthcare, and more.',
  keywords: ['ai resume template', 'chatgpt resume template', 'free resume template 2025', 'ats resume template'],
}

export default function AIResumeTemplatesPage() {
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
            Resume
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Resume Templates That Pass ATS and Impress Humans
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Most resume templates look good but fail ATS scans. These templates are designed for both—
            plus ChatGPT prompts to customize them for any job in minutes.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">What Makes a Resume ATS-Friendly?</h2>
              <p className="text-white/70 mb-4">
                Before picking a template, understand what breaks ATS systems:
              </p>
              <ul className="space-y-2 text-white/70 mb-6">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  Tables and columns (ATS reads left-to-right, jumbles multi-column layouts)
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  Images, logos, or graphics (can&apos;t be parsed)
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  Headers and footers (often skipped entirely)
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  Custom fonts or icons (replaced with question marks)
                </li>
              </ul>
              <p className="text-white/70 mb-4">What passes every ATS:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Single-column layout
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Standard section headings (Experience, Education, Skills)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Simple formatting (bold, bullets, line breaks)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Standard fonts (Arial, Calibri, Georgia)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Template 1: The Classic (Works for Everything)</h2>
              <p className="text-white/70 mb-4">
                Clean, scannable, works in any industry. This is the safe choice.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6 font-mono text-sm">
                <p className="text-emerald-400 text-lg font-bold mb-1">[YOUR NAME]</p>
                <p className="text-white/60 mb-4">City, State | email@email.com | (555) 555-5555 | linkedin.com/in/yourname</p>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">SUMMARY</p>
                <p className="text-white/60 mb-4">[1-2 sentences: your title, years of experience, key strength, what you&apos;re looking for]</p>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">EXPERIENCE</p>
                <p className="text-white/80 font-semibold">[Job Title] | [Company Name]</p>
                <p className="text-white/50 text-xs mb-2">[City, State] | [Month Year – Month Year]</p>
                <ul className="text-white/60 space-y-1 mb-4">
                  <li>• [Achievement with metric]</li>
                  <li>• [Achievement with metric]</li>
                  <li>• [Achievement with metric]</li>
                </ul>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">EDUCATION</p>
                <p className="text-white/80">[Degree] in [Field] | [University Name]</p>
                <p className="text-white/50 text-xs mb-4">[Graduation Year]</p>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">SKILLS</p>
                <p className="text-white/60">[Skill 1] • [Skill 2] • [Skill 3] • [Skill 4] • [Skill 5]</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">ChatGPT Prompt to Fill This Template</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I need to fill out my resume for a [job title] role at [company type].

My background:
- Current role: [title] at [company] for [X years]
- Previous role: [title] at [company] for [X years]
- Education: [degree] from [school]
- Key skills: [list 5-7 skills]
- Biggest achievements: [2-3 things you're proud of]

Using the classic single-column resume format, write:
1. A 2-sentence professional summary targeting this role
2. 3-4 bullet points per job (achievement-focused, with metrics where possible)
3. A skills section relevant to the target role`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Template 2: Tech/Engineering Focus</h2>
              <p className="text-white/70 mb-4">
                Emphasizes technical skills and projects. Good for software, data, and engineering roles.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6 font-mono text-sm">
                <p className="text-emerald-400 text-lg font-bold mb-1">[YOUR NAME]</p>
                <p className="text-white/60 mb-4">email@email.com | github.com/you | linkedin.com/in/you</p>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">TECHNICAL SKILLS</p>
                <p className="text-white/60 mb-1"><span className="text-white/80">Languages:</span> [Python, JavaScript, etc.]</p>
                <p className="text-white/60 mb-1"><span className="text-white/80">Frameworks:</span> [React, Django, etc.]</p>
                <p className="text-white/60 mb-1"><span className="text-white/80">Tools:</span> [AWS, Docker, etc.]</p>
                <p className="text-white/60 mb-4"><span className="text-white/80">Databases:</span> [PostgreSQL, MongoDB, etc.]</p>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">EXPERIENCE</p>
                <p className="text-white/80 font-semibold">[Job Title] | [Company Name]</p>
                <p className="text-white/50 text-xs mb-2">[Month Year – Present]</p>
                <ul className="text-white/60 space-y-1 mb-4">
                  <li>• Built [what] using [tech], resulting in [outcome]</li>
                  <li>• Reduced [metric] by [X%] by implementing [solution]</li>
                  <li>• Led [project/team] to deliver [result]</li>
                </ul>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">PROJECTS</p>
                <p className="text-white/80 font-semibold">[Project Name] | <span className="text-white/50">github.com/you/project</span></p>
                <p className="text-white/60 mb-4">[Brief description of what it does and tech stack used]</p>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">EDUCATION</p>
                <p className="text-white/60">[Degree] in [Field] | [University] | [Year]</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">ChatGPT Prompt for Tech Resume</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for a [specific tech role] at [company type]. 

My tech stack: [list languages, frameworks, tools]
My experience: [X years] as a [current role]

Write bullet points for my experience section that:
1. Start with strong action verbs (Built, Designed, Optimized, Led)
2. Include specific technologies used
3. Show measurable impact (performance, scale, time saved)
4. Match keywords from this job description: [paste key requirements]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Template 3: Career Changer</h2>
              <p className="text-white/70 mb-4">
                When your experience doesn&apos;t match the job directly. Leads with transferable skills.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-6 font-mono text-sm">
                <p className="text-emerald-400 text-lg font-bold mb-1">[YOUR NAME]</p>
                <p className="text-white/60 mb-4">City, State | email@email.com | linkedin.com/in/yourname</p>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">SUMMARY</p>
                <p className="text-white/60 mb-4">[Emphasize transferable skills and passion for new field. Don&apos;t apologize for the switch.]</p>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">RELEVANT SKILLS</p>
                <p className="text-white/60 mb-4">[Group skills by category, emphasizing those that transfer to target role]</p>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">RELEVANT EXPERIENCE</p>
                <p className="text-white/50 text-xs mb-2">(Reframe past roles to highlight transferable achievements)</p>
                <p className="text-white/80 font-semibold">[Past Title] | [Company]</p>
                <ul className="text-white/60 space-y-1 mb-4">
                  <li>• [Achievement reframed for target field]</li>
                  <li>• [Transferable skill demonstrated with results]</li>
                </ul>
                
                <p className="text-white/80 font-bold mb-2 border-b border-white/20 pb-1">EDUCATION & CERTIFICATIONS</p>
                <p className="text-white/60">[Include any relevant courses, bootcamps, or certifications for new field]</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">ChatGPT Prompt for Career Change</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm switching careers from [old field] to [new field].

My background: [describe current/past experience]
Target role: [what you're applying for]
Transferable skills: [what carries over]
New skills/certs: [what you've learned for the switch]

Write a resume that:
1. Opens with a summary that frames the transition positively
2. Reframes past achievements using language from my target field
3. Emphasizes transferable skills over field-specific experience
4. Includes any new training or certifications prominently`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tailoring Any Template to a Job</h2>
              <p className="text-white/70 mb-4">
                The magic isn&apos;t in the template—it&apos;s in customizing it for each job.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">UNIVERSAL TAILORING PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Here's my current resume:
[paste resume]

Here's the job description I'm applying to:
[paste job description]

1. Identify the top 5 keywords/skills from the job description
2. Rewrite my summary to directly address their needs
3. Adjust my bullet points to emphasize relevant experience
4. Suggest which skills to add/remove from my skills section
5. Flag anything in my resume that might be a red flag for this role`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Using a fancy template that breaks ATS.</strong> Pretty ≠ effective. Test it at jobscan.co.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Listing duties instead of achievements.</strong> &quot;Responsible for X&quot; → &quot;Achieved Y by doing X&quot;</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Sending the same resume everywhere.</strong> 10 tailored applications beat 50 generic ones.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Making it too long.</strong> 1 page for &lt;10 years experience, 2 pages max otherwise.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Testing Your Resume</h2>
              <p className="text-white/70 mb-4">Before you send:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Review this resume for ATS compatibility and human readability:
[paste resume]

Check for:
1. ATS red flags (tables, graphics, unusual formatting)
2. Keyword density vs. the target job description
3. Achievement vs. duty focus in bullet points
4. Clarity and scannability
5. Any typos or inconsistencies

Give me specific fixes.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">1.</span>
                  <span>ATS-friendly &gt; pretty (single column, standard fonts, simple formatting)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">2.</span>
                  <span>Tailor every resume to the job (keywords matter)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">3.</span>
                  <span>Lead with achievements, not responsibilities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">4.</span>
                  <span>Use ChatGPT to customize fast—don&apos;t start from scratch each time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5.</span>
                  <span>Test before sending (ATS simulators catch issues you won&apos;t see)</span>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <div className="mt-16">
          <EmailSignup />
        </div>

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Copy-paste prompts for any resume section.' },
            { slug: 'ats-resume-optimization', title: 'ATS Optimization Guide', description: 'Make sure your resume passes the bots.' },
            { slug: 'best-ai-resume-tools-2026', title: 'Best AI Resume Tools', description: 'Tools that help you build better resumes.' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 px-6 py-12">
        <div className="max-w-5xl mx-auto text-center text-white/40 text-sm">
          © 2025 GetTheJobAI. Built to help job seekers win.
        </div>
      </footer>
    </div>
  )
}

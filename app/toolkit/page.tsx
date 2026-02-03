import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '50 ChatGPT Resume Prompts That Actually Work | GetTheJobAI',
  description: 'Free toolkit: 50 proven ChatGPT prompts to transform your resume, optimize for ATS, and land more interviews.',
}

export default function ToolkitPage() {
  return (
    <main style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '4rem 2rem',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <a href="/" style={{ 
        color: '#22c55e', 
        textDecoration: 'none',
        fontSize: '0.875rem',
        display: 'inline-block',
        marginBottom: '2rem'
      }}>
        ← Back to GetTheJobAI
      </a>

      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700,
        marginBottom: '1rem',
        background: 'linear-gradient(to right, #22c55e, #10b981)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        50 ChatGPT Resume Prompts That Actually Work
      </h1>
      
      <p style={{ 
        fontSize: '1.25rem', 
        color: '#a3a3a3',
        marginBottom: '2rem',
        maxWidth: '600px'
      }}>
        Copy-paste prompts to transform weak bullet points into achievement statements, 
        optimize for ATS, and tailor your resume in minutes.
      </p>

      {/* Email Capture CTA */}
      <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, #064e3b, #065f46)',
        borderRadius: '12px',
        marginBottom: '3rem',
        border: '1px solid #10b981'
      }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#fff' }}>
          📬 Get the Full PDF + Bonus Prompts
        </h2>
        <p style={{ color: '#d1fae5', marginBottom: '1rem', fontSize: '0.95rem' }}>
          Enter your email to get the complete toolkit as a downloadable PDF, plus 10 exclusive bonus prompts for cover letters and LinkedIn.
        </p>
        <form 
          action="https://buttondown.email/api/emails/embed-subscribe/getthejobai"
          method="post"
          target="popupwindow"
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
        >
          <input 
            type="email" 
            name="email" 
            placeholder="you@email.com"
            required
            style={{
              flex: 1,
              minWidth: '200px',
              padding: '0.75rem 1rem',
              borderRadius: '6px',
              border: 'none',
              fontSize: '1rem',
              background: '#fff',
              color: '#171717'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              background: '#22c55e',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Send Me the Toolkit
          </button>
        </form>
      </div>

      {/* Prompt Sections */}
      <Section title="📝 Section 1: Resume Bullet Points" prompts={bulletPointPrompts} />
      <Section title="📋 Section 2: Summary & Objective" prompts={summaryPrompts} />
      <Section title="💼 Section 3: Skills Section" prompts={skillsPrompts} />
      <Section title="🤖 Section 4: ATS Optimization" prompts={atsPrompts} />
      <Section title="🎯 Section 5: Tailoring & Customization" prompts={tailoringPrompts} />

      {/* How to Use */}
      <div style={{
        padding: '1.5rem',
        background: '#171717',
        borderRadius: '8px',
        border: '1px solid #262626',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#22c55e' }}>
          ✨ How to Use These Prompts
        </h2>
        <ol style={{ color: '#a3a3a3', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
          <li><strong style={{ color: '#fff' }}>Copy the prompt</strong> that fits your need</li>
          <li><strong style={{ color: '#fff' }}>Replace the brackets</strong> with your actual content</li>
          <li><strong style={{ color: '#fff' }}>Paste into ChatGPT</strong> (GPT-4 works best)</li>
          <li><strong style={{ color: '#fff' }}>Iterate</strong> — ask follow-up questions to refine</li>
        </ol>
        <p style={{ color: '#10b981', marginTop: '1rem', fontSize: '0.95rem' }}>
          💡 <strong>Pro tip:</strong> Start with #40 (Full ATS Audit) for any new application, then use specific prompts to fix what it finds.
        </p>
      </div>

      {/* Bottom CTA */}
      <div style={{
        padding: '2rem',
        background: 'linear-gradient(135deg, #064e3b, #065f46)',
        borderRadius: '12px',
        border: '1px solid #10b981',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#fff' }}>
          Want More AI Job Search Strategies?
        </h2>
        <p style={{ color: '#d1fae5', marginBottom: '1.5rem' }}>
          Get weekly tips on using AI to land your dream job.
        </p>
        <a 
          href="/"
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            background: '#22c55e',
            color: '#fff',
            borderRadius: '6px',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          Explore GetTheJobAI →
        </a>
      </div>

      <p style={{ color: '#737373', fontSize: '0.875rem', marginTop: '3rem', textAlign: 'center' }}>
        © 2025 GetTheJobAI. Made with AI, for humans who want jobs.
      </p>
    </main>
  )
}

function Section({ title, prompts }: { title: string; prompts: { name: string; prompt: string }[] }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        marginBottom: '1rem',
        color: '#fff'
      }}>
        {title}
      </h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {prompts.map((p, i) => (
          <PromptCard key={i} name={p.name} prompt={p.prompt} />
        ))}
      </div>
    </div>
  )
}

function PromptCard({ name, prompt }: { name: string; prompt: string }) {
  return (
    <div style={{
      padding: '1rem 1.25rem',
      background: '#171717',
      borderRadius: '8px',
      border: '1px solid #262626'
    }}>
      <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#22c55e' }}>{name}</h3>
      <pre style={{ 
        background: '#0a0a0a', 
        padding: '0.75rem', 
        borderRadius: '4px',
        fontSize: '0.875rem',
        color: '#d4d4d4',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        margin: 0,
        overflowX: 'auto'
      }}>
        {prompt}
      </pre>
    </div>
  )
}

// Prompt Data
const bulletPointPrompts = [
  { name: "1. Achievement Transformer", prompt: "Transform this job duty into an achievement-focused bullet point with metrics:\n[paste your duty]" },
  { name: "2. STAR Method Converter", prompt: "Rewrite this experience using the STAR method (Situation, Task, Action, Result):\n[paste experience]" },
  { name: "3. Action Verb Upgrader", prompt: "Replace weak verbs in these bullet points with powerful action verbs:\n[paste bullets]" },
  { name: "4. Metrics Finder", prompt: "Help me identify quantifiable metrics I could add to this accomplishment:\n[paste accomplishment]" },
  { name: "5. Industry Translator", prompt: "Translate this experience from [old industry] to be relevant for [new industry]:\n[paste experience]" },
  { name: "6. Scope Clarifier", prompt: "Make the scope and impact clearer in this bullet point:\n[paste bullet]" },
  { name: "7. Redundancy Eliminator", prompt: "Remove redundancy and tighten this bullet point to under 15 words:\n[paste bullet]" },
  { name: "8. Skill Highlighter", prompt: "Rewrite this to better highlight [specific skill]:\n[paste bullet]" },
  { name: "9. Leadership Emphasizer", prompt: "Reframe this to emphasize leadership and initiative:\n[paste experience]" },
  { name: "10. Technical Translator", prompt: "Make this technical achievement understandable to a non-technical recruiter:\n[paste achievement]" },
]

const summaryPrompts = [
  { name: "11. Professional Summary Generator", prompt: "Write a 3-sentence professional summary for a [role] with [X years] experience in [industry]. Key strengths: [list 3 strengths]" },
  { name: "12. Career Pivot Summary", prompt: "Write a professional summary for someone transitioning from [old role] to [new role]. Transferable skills: [list skills]" },
  { name: "13. Summary A/B Tester", prompt: "Write 3 different versions of a professional summary for this background:\n[paste background]" },
  { name: "14. Objective Statement (Entry Level)", prompt: "Write a concise objective statement for a recent [major] graduate seeking [role]" },
  { name: "15. Value Proposition Summary", prompt: "Write a professional summary focused on the unique value I bring:\n[paste your differentiators]" },
  { name: "16. Industry-Specific Summary", prompt: "Write a professional summary optimized for the [industry] industry, incorporating these keywords:\n[list keywords]" },
  { name: "17. Executive Summary", prompt: "Write an executive-level professional summary for someone with [X years] leadership experience in [industry]" },
  { name: "18. Summary Length Optimizer", prompt: "Condense this professional summary to 50 words without losing impact:\n[paste summary]" },
  { name: "19. Tone Adjuster", prompt: "Rewrite this summary to sound more [confident/humble/innovative/traditional]:\n[paste summary]" },
  { name: "20. Keyword-Optimized Summary", prompt: "Rewrite this summary to naturally include these ATS keywords: [list keywords]\n[paste current summary]" },
]

const skillsPrompts = [
  { name: "21. Skills Extractor", prompt: "Extract all relevant skills from this job description:\n[paste job description]" },
  { name: "22. Skill Categorizer", prompt: "Organize these skills into logical categories for a resume:\n[list skills]" },
  { name: "23. Skills Gap Finder", prompt: "Compare my skills [list your skills] to this job description and identify gaps:\n[paste job description]" },
  { name: "24. Soft Skills Translator", prompt: "Turn these soft skills into concrete, demonstrable skills with examples:\n[list soft skills]" },
  { name: "25. Technical Skills Prioritizer", prompt: "For a [role] position, rank these technical skills by importance:\n[list skills]" },
  { name: "26. Skill Level Descriptor", prompt: "Write proficiency levels for these skills (beginner/intermediate/expert) based on this experience:\n[paste experience]" },
  { name: "27. Emerging Skills Identifier", prompt: "What in-demand skills for [role/industry] am I missing from this list?\n[list current skills]" },
  { name: "28. Skills to Achievements", prompt: "Turn this skill into an achievement statement:\nSkill: [skill]\nContext: [how you used it]" },
  { name: "29. ATS Skills Optimizer", prompt: "Which of these skills should I list exactly as written vs. use synonyms for ATS?\n[list skills from job posting]" },
  { name: "30. Skills Section Formatter", prompt: "Format these skills into a clean, scannable resume section:\n[list all skills]" },
]

const atsPrompts = [
  { name: "31. Keyword Extraction", prompt: "Extract the most important ATS keywords from this job posting:\n[paste job description]" },
  { name: "32. Keyword Integration", prompt: "Naturally integrate these keywords into my resume bullet points:\nKeywords: [list]\nBullets: [paste]" },
  { name: "33. Format Check", prompt: "Identify any formatting in my resume that might confuse ATS systems:\n[paste resume]" },
  { name: "34. Job Title Optimizer", prompt: "My actual title was [title]. Should I adjust it to [alternative] for ATS, or keep it exact? Job posting uses [their title]." },
  { name: "35. Match Score Estimator", prompt: "Estimate the ATS match percentage between my resume and this job posting:\nResume: [paste]\nJob: [paste]" },
  { name: "36. Section Header Standardizer", prompt: "Are these section headers ATS-friendly? Suggest alternatives if not:\n[list headers]" },
  { name: "37. Date Format Checker", prompt: "Is this date format ATS-friendly? [your format]\nWhat format should I use?" },
  { name: "38. File Type Advisor", prompt: "For a company using [ATS name if known], should I submit PDF or DOCX?" },
  { name: "39. Synonym Variator", prompt: "Provide ATS-friendly synonyms for these overused words:\n[list words]" },
  { name: "40. Full ATS Audit", prompt: "Perform a complete ATS optimization audit on this resume for this job:\nResume: [paste]\nJob: [paste]" },
]

const tailoringPrompts = [
  { name: "41. Quick Tailor", prompt: "Quickly tailor my resume summary for this job in 2 minutes:\nSummary: [paste]\nJob: [paste key requirements]" },
  { name: "42. Company Research Integration", prompt: "Research [company name] and suggest how to tailor my resume to their culture/values" },
  { name: "43. Job Description Decoder", prompt: "What is this job REALLY asking for beneath the requirements?\n[paste job description]" },
  { name: "44. Emphasis Shifter", prompt: "Shift emphasis in my resume from [current focus] to [new focus] for this role:\n[paste relevant sections]" },
  { name: "45. Experience Relevance Ranker", prompt: "Rank my experiences by relevance for this job. What should go first?\nMy experiences: [list]\nJob: [paste]" },
  { name: "46. Bullet Point Selector", prompt: "I have 8 bullet points for [job]. Select the 4 most relevant for [target role]:\n[paste bullets]" },
  { name: "47. Project Highlighter", prompt: "Which of my projects should I highlight for a [role] position?\nProjects: [list]" },
  { name: "48. Cover Letter Bridge", prompt: "What aspects of my resume need more explanation in a cover letter for this role?\nResume: [paste]\nJob: [paste]" },
  { name: "49. Multiple Version Advisor", prompt: "Should I create different resume versions for these roles, or can one work for all?\nRoles: [list target roles]" },
  { name: "50. Final Pre-Submit Check", prompt: "Final check: anything I should change before submitting this resume for [role] at [company]?\n[paste resume]\n[paste job description]" },
]

import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Resume for Nurses & Healthcare Professionals (2026 Guide) | GetTheJobAI',
  description: 'Use AI to build a healthcare resume that meets industry requirements. Prompts for nursing bullets, certifications, EMR systems, and clinical experience.',
  keywords: ['nursing resume ai', 'healthcare resume prompts', 'nurse resume builder', 'medical resume ats'],
}

export default function AiResumeHealthcarePage() {
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
            AI Resume for Nurses & Healthcare Professionals (2026 Guide)
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Healthcare hiring is competitive. AI can help your resume stand out while meeting strict industry requirements.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Healthcare Resumes Are Different</h2>
              <p className="text-white/70 mb-4">
                Unlike tech resumes, nursing and healthcare CVs need:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Certifications front and center</strong> — RN, BSN, ACLS, BLS</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">License information</strong> — State, number, expiration</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Clinical hours and rotations</strong> — Specific departments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Compliance language</strong> — HIPAA, patient safety, quality metrics</span>
                </li>
              </ul>
              <p className="text-white/70 mt-4">AI helps you emphasize these while still beating the ATS.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Analyze Healthcare Job Postings</h2>
              <p className="text-white/70 mb-4">
                Use this prompt to extract requirements:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Analyze this nursing/healthcare job posting. Extract:
1. Required certifications and licenses
2. Required years of experience
3. Specific skills (EMR systems, specialties)
4. Soft skills emphasized (patient care, communication)
5. ATS keywords to include

[Paste job posting]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Translate Clinical Experience into Results</h2>
              <p className="text-white/70 mb-4">
                Bad: &ldquo;Provided patient care on med-surg unit&rdquo;
              </p>
              <p className="text-white/70 mb-4">
                Better: &ldquo;Delivered comprehensive care to 6-8 patients per shift on 40-bed med-surg unit, maintaining 95%+ patient satisfaction scores&rdquo;
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite these nursing resume bullets. For each one:
- Add patient load or unit size
- Include measurable outcomes (satisfaction, safety metrics)
- Mention specific skills (IV therapy, wound care, EMR)
- Use healthcare-appropriate action verbs

My bullets:
[Paste current experience]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Certifications Section</h2>
              <p className="text-white/70 mb-4">
                List certifications prominently with expiration dates:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`CERTIFICATIONS
- Registered Nurse (RN), [State] License #[Number] — Exp. [Date]
- Basic Life Support (BLS) — American Heart Association — Exp. [Date]
- Advanced Cardiac Life Support (ACLS) — Exp. [Date]
- [Specialty certifications]`}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm applying for a [specialty] nursing position. Based on this job posting, what certifications should I highlight or consider obtaining?

[Job posting]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">EMR/EHR Systems</h2>
              <p className="text-white/70 mb-4">
                Healthcare facilities care deeply about system experience. List relevant ones:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Epic
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Cerner
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  MEDITECH
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Allscripts
                </li>
              </ul>
              <p className="text-white/50 text-sm mt-4">
                If you have experience with the facility&apos;s specific system, make it prominent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Quantifying Healthcare Impact</h2>
              <p className="text-white/70 mb-4">
                Use these metrics in your bullets:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Patient loads (patients per shift)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Unit census and bed count
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Satisfaction scores
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Safety incidents (or lack thereof)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Training/mentoring numbers
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Process improvements
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me quantify this nursing experience:
[Describe what you did]

Add specific numbers for patient load, outcomes, or improvements.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Sample AI-Optimized Bullets</h2>
              <div className="mb-4">
                <p className="text-white/50 text-sm mb-2">Before:</p>
                <ul className="space-y-1 text-white/70">
                  <li>• Worked on ICU unit</li>
                  <li>• Administered medications</li>
                  <li>• Documented in EMR</li>
                </ul>
              </div>
              <div>
                <p className="text-emerald-400 text-sm mb-2">After:</p>
                <ul className="space-y-1 text-white/90">
                  <li>• Provided critical care to 2-3 high-acuity patients in 20-bed MICU, managing ventilators, vasopressors, and continuous renal replacement therapy</li>
                  <li>• Administered 50+ medications per shift via IV, PO, and IM routes with zero medication errors over 18-month period</li>
                  <li>• Maintained comprehensive documentation in Epic EMR, ensuring 100% compliance with Joint Commission standards</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Specialties That Need Custom Approaches</h2>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">ICU/Critical Care</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Emphasize acuity levels, equipment proficiency</li>
                    <li>• Include code team participation</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">ER/Emergency</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Highlight triage experience, patient volume</li>
                    <li>• Mention trauma levels handled</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">OR/Surgical</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Specify procedure types and volumes</li>
                    <li>• Include sterile technique expertise</li>
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Pediatrics</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>• Emphasize family-centered care</li>
                    <li>• Include developmental assessment skills</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Healthcare Resume Mistakes</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Burying certifications</strong> — Put them near the top</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Generic descriptions</strong> — Quantify everything</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Missing EMR experience</strong> — Facilities filter on this</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">No specialty keywords</strong> — Match the posting language</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Outdated license info</strong> — Always include current expiration</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tools for Healthcare Resumes</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <span><strong className="text-white">ChatGPT/Claude</strong> — Bullet rewriting, keyword optimization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <span><strong className="text-white">Jobscan</strong> — ATS matching for healthcare roles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <span><strong className="text-white">Professional resume templates</strong> — Clean, parseable formats</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  <span><strong className="text-white">State board websites</strong> — License verification links</span>
                </li>
              </ul>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Your Action Plan</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  Gather all certifications with current dates
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  List every EMR system you&apos;ve used
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  Analyze 3-5 target job postings
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  Rewrite bullets with patient loads and outcomes
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">5.</span>
                  Run through ATS checker
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">6.</span>
                  Apply confidently
                </li>
              </ul>
            </section>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'chatgpt-resume-prompts',
              title: 'ChatGPT Resume Prompts',
              description: 'Copy-paste prompts to improve any resume with AI.'
            },
            {
              slug: 'ats-resume-optimization',
              title: 'ATS Resume Optimization',
              description: 'Get past applicant tracking systems with AI-optimized formatting.'
            },
            {
              slug: 'ai-interview-prep',
              title: 'AI Interview Prep',
              description: 'Practice with AI before your real interview.'
            }
          ]} />
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

// Tool configurations for dynamic tool generation
// Add tools here, pages auto-generate from config

export type ToolType = 'score' | 'quiz' | 'generator'

export interface ScoreCriteria {
  name: string
  weight: number
  keywords: string[]
  description: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: { value: string; label: string; points: Record<string, number> }[]
}

export interface QuizResult {
  id: string
  title: string
  description: string
  recommendations: string[]
}

export interface GeneratorField {
  id: string
  label: string
  type: 'text' | 'textarea' | 'select'
  placeholder?: string
  options?: { value: string; label: string }[]
  required?: boolean
}

export interface BaseTool {
  slug: string
  name: string
  description: string
  category: string
  type: ToolType
  seo: {
    title: string
    description: string
  }
}

export interface ScoreTool extends BaseTool {
  type: 'score'
  inputLabel: string
  inputPlaceholder: string
  criteria: ScoreCriteria[]
  tips: string[]
}

export interface QuizTool extends BaseTool {
  type: 'quiz'
  questions: QuizQuestion[]
  results: QuizResult[]
}

export interface GeneratorTool extends BaseTool {
  type: 'generator'
  fields: GeneratorField[]
  template: string // Template with {{field_id}} placeholders
  outputLabel: string
}

export type Tool = ScoreTool | QuizTool | GeneratorTool

// ============ RESUME TOOLS ============

export const resumeScoreCalculator: ScoreTool = {
  slug: 'resume-score-calculator',
  name: 'Resume Score Calculator',
  description: 'Get instant feedback on your resume with our AI-powered scoring system',
  category: 'Resume',
  type: 'score',
  seo: {
    title: 'Free Resume Score Calculator | Rate Your Resume Instantly',
    description: 'Paste your resume and get an instant ATS score with actionable feedback. Free AI-powered resume analysis tool.',
  },
  inputLabel: 'Paste Your Resume',
  inputPlaceholder: 'Paste the full text of your resume here...',
  criteria: [
    {
      name: 'Contact Info',
      weight: 10,
      keywords: ['email', '@', 'phone', 'linkedin', 'github', 'portfolio'],
      description: 'Complete contact information including email and professional links',
    },
    {
      name: 'Quantified Achievements',
      weight: 20,
      keywords: ['%', 'increased', 'decreased', 'reduced', 'improved', 'grew', 'saved', '$', 'million', 'thousand', '10x', '2x', '3x'],
      description: 'Measurable results with numbers, percentages, or dollar amounts',
    },
    {
      name: 'Action Verbs',
      weight: 15,
      keywords: ['led', 'managed', 'developed', 'created', 'built', 'designed', 'implemented', 'launched', 'drove', 'achieved', 'delivered', 'optimized', 'automated', 'scaled'],
      description: 'Strong action verbs that demonstrate impact',
    },
    {
      name: 'Technical Skills',
      weight: 15,
      keywords: ['python', 'javascript', 'react', 'node', 'sql', 'aws', 'docker', 'kubernetes', 'api', 'database', 'machine learning', 'ai', 'typescript', 'java', 'c++', 'excel', 'tableau', 'figma', 'jira'],
      description: 'Relevant technical skills and tools',
    },
    {
      name: 'Experience Section',
      weight: 20,
      keywords: ['experience', 'work', 'company', 'role', 'position', 'responsibilities', '2024', '2023', '2022', '2021', 'present', 'current'],
      description: 'Clear work experience with dates and company names',
    },
    {
      name: 'Education',
      weight: 10,
      keywords: ['bachelor', 'master', 'phd', 'degree', 'university', 'college', 'certification', 'certified', 'course', 'bootcamp'],
      description: 'Education background and relevant certifications',
    },
    {
      name: 'Length & Format',
      weight: 10,
      keywords: [], // Special: check word count
      description: 'Appropriate length (400-800 words for most roles)',
    },
  ],
  tips: [
    'Add specific numbers to your achievements (e.g., "Increased sales by 25%")',
    'Start bullet points with strong action verbs',
    'Include relevant keywords from the job description',
    'Keep it to 1-2 pages max',
    'Add a LinkedIn profile URL',
  ],
}

export const coverLetterScoreCalculator: ScoreTool = {
  slug: 'cover-letter-score-calculator',
  name: 'Cover Letter Score Calculator',
  description: 'Analyze your cover letter for impact, personalization, and ATS compatibility',
  category: 'Cover Letter',
  type: 'score',
  seo: {
    title: 'Free Cover Letter Score Calculator | Instant Cover Letter Analysis',
    description: 'Get instant feedback on your cover letter with AI-powered analysis. Check tone, personalization, and hiring manager appeal.',
  },
  inputLabel: 'Paste Your Cover Letter',
  inputPlaceholder: 'Paste your cover letter here...',
  criteria: [
    {
      name: 'Personalization',
      weight: 25,
      keywords: ['dear', 'hiring manager', 'team', 'company', 'role', 'position', 'excited', 'passionate', 'interested'],
      description: 'Shows you researched the company and role',
    },
    {
      name: 'Value Proposition',
      weight: 25,
      keywords: ['experience', 'skills', 'achieved', 'delivered', 'contributed', 'helped', 'can bring', 'will add', 'unique', 'standout'],
      description: 'Clearly states what you can offer the company',
    },
    {
      name: 'Specific Examples',
      weight: 20,
      keywords: ['%', '$', 'increased', 'led', 'managed', 'project', 'initiative', 'example', 'specifically', 'instance'],
      description: 'Concrete examples backing up your claims',
    },
    {
      name: 'Call to Action',
      weight: 15,
      keywords: ['interview', 'discuss', 'call', 'meet', 'opportunity', 'look forward', 'eager', 'available', 'contact'],
      description: 'Clear next steps and enthusiasm for moving forward',
    },
    {
      name: 'Professional Tone',
      weight: 15,
      keywords: ['sincerely', 'regards', 'thank you', 'appreciate', 'opportunity', 'contribute'],
      description: 'Professional but personable tone throughout',
    },
  ],
  tips: [
    'Address a specific person if possible (check LinkedIn)',
    'Open with a hook, not "I am writing to apply"',
    'Include 1-2 specific achievements with numbers',
    'Keep it under 400 words',
    'End with a clear call to action',
  ],
}

export const linkedinScoreCalculator: ScoreTool = {
  slug: 'linkedin-profile-score',
  name: 'LinkedIn Profile Score',
  description: 'Rate your LinkedIn profile for recruiter visibility and professional impact',
  category: 'LinkedIn',
  type: 'score',
  seo: {
    title: 'Free LinkedIn Profile Score Calculator | Optimize for Recruiters',
    description: 'Paste your LinkedIn profile and get instant feedback on recruiter visibility, keyword optimization, and professional impact.',
  },
  inputLabel: 'Paste Your LinkedIn Summary & Experience',
  inputPlaceholder: 'Copy and paste your LinkedIn headline, summary, and experience sections...',
  criteria: [
    {
      name: 'Headline Impact',
      weight: 20,
      keywords: ['|', 'helping', 'specialist', 'expert', 'leader', 'manager', 'developer', 'designer', 'consultant', 'at'],
      description: 'Compelling headline beyond just job title',
    },
    {
      name: 'Keyword Rich',
      weight: 25,
      keywords: [], // Dynamic based on industry
      description: 'Industry-relevant keywords for search visibility',
    },
    {
      name: 'Story/Summary',
      weight: 20,
      keywords: ['passionate', 'driven', 'experience', 'years', 'helped', 'love', 'mission', 'impact', 'journey'],
      description: 'Engaging personal summary that tells your story',
    },
    {
      name: 'Achievements',
      weight: 20,
      keywords: ['%', 'increased', 'grew', 'led', 'achieved', '$', 'million', 'team of', 'launched', 'built'],
      description: 'Quantified accomplishments throughout',
    },
    {
      name: 'Contact & CTA',
      weight: 15,
      keywords: ['reach out', 'connect', 'email', 'let\'s', 'open to', 'available', 'contact', 'dm'],
      description: 'Clear way to contact you',
    },
  ],
  tips: [
    'Use all 220 characters in your headline',
    'Include industry keywords naturally in your summary',
    'Add accomplishments with numbers to each role',
    'Enable "Open to Work" for recruiters',
    'Ask for recommendations from colleagues',
  ],
}

// ============ QUIZ TOOLS ============

export const careerPathQuiz: QuizTool = {
  slug: 'career-path-quiz',
  name: 'AI Career Path Quiz',
  description: 'Discover which AI-enhanced career paths match your skills and interests',
  category: 'Career',
  type: 'quiz',
  seo: {
    title: 'AI Career Path Quiz | Find Your Ideal AI-Enhanced Career',
    description: 'Take our free quiz to discover which AI-powered career paths match your skills, interests, and goals. Get personalized recommendations.',
  },
  questions: [
    {
      id: 'work_style',
      question: 'How do you prefer to work?',
      options: [
        { value: 'independent', label: 'Independently on focused tasks', points: { creative: 2, technical: 2, strategic: 0 } },
        { value: 'collaborative', label: 'Collaborating with a team', points: { creative: 1, technical: 0, strategic: 2 } },
        { value: 'leading', label: 'Leading and directing others', points: { creative: 0, technical: 0, strategic: 3 } },
        { value: 'mixed', label: 'A mix of all three', points: { creative: 1, technical: 1, strategic: 1 } },
      ],
    },
    {
      id: 'skills',
      question: 'Which skill set resonates most with you?',
      options: [
        { value: 'writing', label: 'Writing & Communication', points: { creative: 3, technical: 0, strategic: 1 } },
        { value: 'analysis', label: 'Data & Analysis', points: { creative: 0, technical: 3, strategic: 1 } },
        { value: 'design', label: 'Design & Visual', points: { creative: 3, technical: 1, strategic: 0 } },
        { value: 'strategy', label: 'Planning & Strategy', points: { creative: 1, technical: 1, strategic: 3 } },
      ],
    },
    {
      id: 'ai_interest',
      question: 'What interests you most about AI?',
      options: [
        { value: 'create', label: 'Creating content faster', points: { creative: 3, technical: 0, strategic: 0 } },
        { value: 'automate', label: 'Automating repetitive tasks', points: { creative: 0, technical: 3, strategic: 1 } },
        { value: 'insights', label: 'Getting better insights', points: { creative: 1, technical: 2, strategic: 2 } },
        { value: 'scale', label: 'Scaling my impact', points: { creative: 1, technical: 1, strategic: 3 } },
      ],
    },
    {
      id: 'learning',
      question: 'How do you prefer to learn new tools?',
      options: [
        { value: 'experiment', label: 'Experimenting and playing around', points: { creative: 3, technical: 1, strategic: 0 } },
        { value: 'structured', label: 'Following structured courses', points: { creative: 0, technical: 3, strategic: 1 } },
        { value: 'practical', label: 'Learning by doing real projects', points: { creative: 2, technical: 2, strategic: 1 } },
        { value: 'teaching', label: 'Teaching others what I learn', points: { creative: 1, technical: 1, strategic: 3 } },
      ],
    },
    {
      id: 'goal',
      question: 'What\'s your primary career goal?',
      options: [
        { value: 'freelance', label: 'Freelance flexibility', points: { creative: 3, technical: 1, strategic: 0 } },
        { value: 'promotion', label: 'Get promoted faster', points: { creative: 0, technical: 2, strategic: 3 } },
        { value: 'switch', label: 'Switch to a new field', points: { creative: 2, technical: 2, strategic: 1 } },
        { value: 'side', label: 'Build a side income', points: { creative: 2, technical: 1, strategic: 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'creative',
      title: 'AI Content Creator',
      description: 'You\'re a natural creator who can leverage AI for writing, design, and multimedia content. Consider roles in content marketing, copywriting, or creative direction with AI tools.',
      recommendations: [
        'Learn prompt engineering for content creation',
        'Explore AI writing tools (Claude, ChatGPT, Jasper)',
        'Build a portfolio of AI-assisted content',
        'Consider freelance content creation',
      ],
    },
    {
      id: 'technical',
      title: 'AI-Augmented Analyst',
      description: 'Your analytical mind pairs perfectly with AI for data analysis, automation, and technical problem-solving. Look into data science, business intelligence, or technical roles.',
      recommendations: [
        'Learn AI-powered data analysis tools',
        'Explore automation with AI (Zapier, Make)',
        'Build Python + AI skills',
        'Consider data analyst or BI roles',
      ],
    },
    {
      id: 'strategic',
      title: 'AI Strategy Leader',
      description: 'You think big picture and can lead AI adoption in organizations. Consider roles in product management, consulting, or AI strategy.',
      recommendations: [
        'Understand AI capabilities and limitations',
        'Learn change management for AI adoption',
        'Build case studies of AI implementation',
        'Consider PM, consulting, or leadership roles',
      ],
    },
  ],
}

// ============ GENERATOR TOOLS ============

export const elevatorPitchGenerator: GeneratorTool = {
  slug: 'elevator-pitch-generator',
  name: 'Elevator Pitch Generator',
  description: 'Create a compelling 30-second pitch for networking and interviews',
  category: 'Interview',
  type: 'generator',
  seo: {
    title: 'Free Elevator Pitch Generator | Create Your 30-Second Pitch',
    description: 'Generate a professional elevator pitch in seconds. Perfect for networking events, job interviews, and LinkedIn summaries.',
  },
  fields: [
    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Smith', required: true },
    { id: 'role', label: 'Current/Target Role', type: 'text', placeholder: 'Software Engineer', required: true },
    { id: 'experience', label: 'Years of Experience', type: 'select', options: [
      { value: 'entry', label: 'Entry Level (0-2 years)' },
      { value: 'mid', label: 'Mid Level (3-5 years)' },
      { value: 'senior', label: 'Senior (6-10 years)' },
      { value: 'executive', label: 'Executive (10+ years)' },
    ], required: true },
    { id: 'specialty', label: 'Key Specialty/Skill', type: 'text', placeholder: 'React development, Machine Learning, etc.', required: true },
    { id: 'achievement', label: 'Top Achievement', type: 'textarea', placeholder: 'Led a team that increased revenue by 40%...', required: true },
    { id: 'goal', label: 'What You\'re Looking For', type: 'text', placeholder: 'Senior role at a growth-stage startup', required: true },
  ],
  template: `Hi, I'm {{name}}. I'm a {{role}} with {{experience}} of experience specializing in {{specialty}}.

Most recently, {{achievement}}

I'm currently looking for {{goal}}.

I'd love to connect and learn more about opportunities at your company.`,
  outputLabel: 'Your Elevator Pitch',
}

export const linkedinHeadlineGenerator: GeneratorTool = {
  slug: 'linkedin-headline-generator',
  name: 'LinkedIn Headline Generator',
  description: 'Create an attention-grabbing LinkedIn headline that gets noticed by recruiters',
  category: 'LinkedIn',
  type: 'generator',
  seo: {
    title: 'Free LinkedIn Headline Generator | Stand Out to Recruiters',
    description: 'Generate a compelling LinkedIn headline that attracts recruiters. Multiple formats including formula-based and creative options.',
  },
  fields: [
    { id: 'role', label: 'Current/Target Role', type: 'text', placeholder: 'Product Manager', required: true },
    { id: 'industry', label: 'Industry', type: 'text', placeholder: 'SaaS, Healthcare, Finance, etc.', required: true },
    { id: 'specialty', label: 'Key Specialty', type: 'text', placeholder: 'Growth strategy, AI/ML, etc.', required: true },
    { id: 'achievement', label: 'Impressive Stat or Achievement', type: 'text', placeholder: '10x revenue growth, $50M managed, etc.' },
    { id: 'company', label: 'Current Company (optional)', type: 'text', placeholder: 'Google, Startup, etc.' },
  ],
  template: `🎯 Classic: {{role}} | {{specialty}} | {{industry}}

💼 Achievement-Led: {{role}} who {{achievement}} | {{specialty}} Expert

🚀 Results-Focused: {{specialty}} {{role}} → {{achievement}}

🏢 Company + Value: {{role}} at {{company}} | Helping teams {{specialty}}

✨ Personal Brand: {{role}} | Passionate about {{specialty}} in {{industry}}`,
  outputLabel: 'LinkedIn Headline Options',
}

export const thankYouEmailGenerator: GeneratorTool = {
  slug: 'thank-you-email-generator',
  name: 'Interview Thank You Email Generator',
  description: 'Write a professional thank you email after your job interview',
  category: 'Interview',
  type: 'generator',
  seo: {
    title: 'Free Thank You Email Generator | Post-Interview Follow Up',
    description: 'Generate a professional thank you email after your job interview. Stand out from other candidates with a personalized follow-up.',
  },
  fields: [
    { id: 'interviewer', label: 'Interviewer Name', type: 'text', placeholder: 'Sarah Johnson', required: true },
    { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Corp', required: true },
    { id: 'role', label: 'Role You Applied For', type: 'text', placeholder: 'Senior Software Engineer', required: true },
    { id: 'topic', label: 'Interesting Topic Discussed', type: 'text', placeholder: 'The new AI initiative...', required: true },
    { id: 'strength', label: 'Key Strength You Want to Reinforce', type: 'text', placeholder: 'My experience leading cross-functional teams...', required: true },
  ],
  template: `Subject: Thank you for the {{role}} interview

Hi {{interviewer}},

Thank you so much for taking the time to meet with me today about the {{role}} position at {{company}}.

I especially enjoyed our conversation about {{topic}}. It reinforced my excitement about the opportunity to contribute to your team.

I wanted to reiterate {{strength}}, which I believe would help me make an immediate impact in this role.

Please don't hesitate to reach out if you have any additional questions. I'm very excited about the possibility of joining {{company}} and look forward to hearing from you.

Best regards,
[Your name]`,
  outputLabel: 'Your Thank You Email',
}

// ============ INTERVIEW TOOLS ============

export const interviewAnswerGenerator: GeneratorTool = {
  slug: 'interview-answer-generator',
  name: 'Interview Answer Generator',
  description: 'Generate compelling STAR-method answers for common interview questions',
  category: 'Interview',
  type: 'generator',
  seo: {
    title: 'Free Interview Answer Generator | STAR Method Responses',
    description: 'Create powerful interview answers using the STAR method. Get tailored responses for behavioral questions.',
  },
  fields: [
    {
      id: 'question',
      label: 'Interview Question',
      type: 'select',
      options: [
        { value: 'tell-me-about-yourself', label: 'Tell me about yourself' },
        { value: 'greatest-strength', label: 'What is your greatest strength?' },
        { value: 'greatest-weakness', label: 'What is your greatest weakness?' },
        { value: 'challenge-overcome', label: 'Tell me about a challenge you overcame' },
        { value: 'conflict-resolution', label: 'Describe a time you resolved a conflict' },
        { value: 'leadership', label: 'Tell me about a time you showed leadership' },
        { value: 'failure', label: 'Tell me about a time you failed' },
        { value: 'why-this-company', label: 'Why do you want to work here?' },
      ],
      required: true,
    },
    { id: 'role', label: 'Target Role', type: 'text', placeholder: 'Software Engineer', required: true },
    { id: 'situation', label: 'Brief Situation/Context', type: 'textarea', placeholder: 'At my previous company, we had a critical deadline...', required: true },
    { id: 'action', label: 'Actions You Took', type: 'textarea', placeholder: 'I organized daily standups and prioritized tasks...', required: true },
    { id: 'result', label: 'Results Achieved', type: 'text', placeholder: 'Delivered project 2 weeks early, saved $50K', required: true },
  ],
  template: `**STAR Method Answer**

**Situation:**
{{situation}}

**Task:**
As the {{role}}, I needed to address this challenge and deliver results.

**Action:**
{{action}}

**Result:**
{{result}}

---

**Polished Response:**

"{{situation}} As part of my role, {{action}} The outcome was significant: {{result}}. This experience taught me the importance of taking initiative and focusing on measurable outcomes."`,
  outputLabel: 'Your STAR Method Answer',
}

export const salaryNegotiationGenerator: GeneratorTool = {
  slug: 'salary-negotiation-script',
  name: 'Salary Negotiation Script Generator',
  description: 'Get a personalized script to negotiate your salary confidently',
  category: 'Negotiation',
  type: 'generator',
  seo: {
    title: 'Free Salary Negotiation Script | Negotiate Your Offer',
    description: 'Generate a professional salary negotiation script. Get the compensation you deserve with proven negotiation tactics.',
  },
  fields: [
    { id: 'currentOffer', label: 'Current Offer', type: 'text', placeholder: '$85,000', required: true },
    { id: 'targetSalary', label: 'Target Salary', type: 'text', placeholder: '$95,000', required: true },
    { id: 'role', label: 'Job Title', type: 'text', placeholder: 'Senior Product Manager', required: true },
    { id: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp', required: true },
    { id: 'experience', label: 'Years of Experience', type: 'text', placeholder: '7 years', required: true },
    { id: 'uniqueValue', label: 'Your Unique Value', type: 'textarea', placeholder: 'I have direct experience scaling products from 0 to 1M users...', required: true },
  ],
  template: `**Salary Negotiation Script**

---

**Opening (Express Enthusiasm First):**

"Thank you so much for the offer. I'm genuinely excited about the {{role}} position at {{company}} and the opportunity to contribute to the team."

---

**The Ask:**

"I've done research on market rates for {{role}} positions with {{experience}} experience, and I was hoping we could discuss the compensation. Based on my background and {{uniqueValue}}, I was targeting something closer to {{targetSalary}}."

---

**If They Push Back:**

"I understand there may be budget constraints. Are there other components we could discuss, such as a signing bonus, additional equity, flexible work arrangements, or an accelerated review timeline?"

---

**Closing:**

"I'm confident we can find something that works for both of us. I'm committed to bringing value to {{company}} and excited to get started."

---

**Key Tips:**
• Never give a number first if you can help it
• Always negotiate - 70% of employers expect it
• Get the offer in writing before accepting
• Consider total compensation, not just base salary`,
  outputLabel: 'Your Negotiation Script',
}

export const jobSearchTrackerScore: ScoreTool = {
  slug: 'job-search-tracker-score',
  name: 'Job Search Organization Score',
  description: 'Rate how organized your job search is and get tips to improve',
  category: 'Job Search',
  type: 'score',
  seo: {
    title: 'Job Search Organization Score | Track Your Progress',
    description: 'Find out if your job search is organized for success. Get personalized tips to improve your job hunting strategy.',
  },
  inputLabel: 'Describe Your Current Job Search Process',
  inputPlaceholder: 'Describe how you are tracking applications, following up, networking, etc...',
  criteria: [
    {
      name: 'Application Tracking',
      weight: 20,
      keywords: ['spreadsheet', 'tracker', 'notion', 'airtable', 'list', 'database', 'log', 'record', 'tracking', 'organized'],
      description: 'Using a system to track all applications and their status',
    },
    {
      name: 'Follow-Up System',
      weight: 20,
      keywords: ['follow up', 'followup', 'reminder', 'calendar', 'schedule', 'check in', 'reach out', 'email again', 'weekly'],
      description: 'Systematic follow-up process for applications',
    },
    {
      name: 'Networking Activity',
      weight: 20,
      keywords: ['linkedin', 'network', 'connect', 'reach out', 'coffee chat', 'informational', 'referral', 'introduction', 'event', 'meetup'],
      description: 'Active networking and relationship building',
    },
    {
      name: 'Target Companies',
      weight: 15,
      keywords: ['target', 'wishlist', 'dream companies', 'research', 'priority', 'top choice', 'tier', 'focus', 'specific'],
      description: 'Defined list of target companies to pursue',
    },
    {
      name: 'Daily/Weekly Goals',
      weight: 15,
      keywords: ['daily', 'weekly', 'goal', 'applications per', 'per day', 'per week', 'routine', 'schedule', 'consistent'],
      description: 'Clear goals for application volume and activity',
    },
    {
      name: 'Interview Prep',
      weight: 10,
      keywords: ['practice', 'mock', 'prepare', 'research company', 'questions', 'star method', 'behavioral', 'prep'],
      description: 'Systematic interview preparation process',
    },
  ],
  tips: [
    'Use a spreadsheet or tool like Notion/Airtable to track every application',
    'Set calendar reminders to follow up 1 week after applying',
    'Aim to send 5-10 quality applications per day, not 50 spray-and-pray',
    'Spend 30% of job search time networking, not just applying',
    'Research every company before you apply - customize each application',
    'Practice STAR method answers for common behavioral questions',
  ],
}

// ============ ALL TOOLS ============

export const allTools: Tool[] = [
  resumeScoreCalculator,
  coverLetterScoreCalculator,
  linkedinScoreCalculator,
  careerPathQuiz,
  elevatorPitchGenerator,
  linkedinHeadlineGenerator,
  thankYouEmailGenerator,
  interviewAnswerGenerator,
  salaryNegotiationGenerator,
  jobSearchTrackerScore,
]

export function getToolBySlug(slug: string): Tool | undefined {
  return allTools.find(t => t.slug === slug)
}

export function getToolsByCategory(category: string): Tool[] {
  return allTools.filter(t => t.category === category)
}

export function getToolsByType(type: ToolType): Tool[] {
  return allTools.filter(t => t.type === type)
}

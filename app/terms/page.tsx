import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | GetTheJobAI',
  description: 'Terms of service for GetTheJobAI.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-6 text-white/70 text-sm">
        <p><strong className="text-white">Last updated:</strong> February 2026</p>

        <h2 className="text-xl font-semibold text-white mt-8">Use of Service</h2>
        <p>By using GetTheJobAI, you agree to these terms. Our content is for informational purposes only.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Content</h2>
        <p>Our guides and tools are provided as-is. While we strive for accuracy, we cannot guarantee specific job search outcomes.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Intellectual Property</h2>
        <p>Content on this site is owned by GetTheJobAI. You may use it for personal, non-commercial purposes.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Disclaimer</h2>
        <p>We are not responsible for hiring decisions made by employers. Our tools and advice are meant to assist, not guarantee employment.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Changes</h2>
        <p>We may update these terms. Continued use constitutes acceptance of changes.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
        <p>Questions? Email <a href="mailto:hello@getthejobai.com" className="text-emerald-400">hello@getthejobai.com</a></p>
      </div>
    </div>
  )
}

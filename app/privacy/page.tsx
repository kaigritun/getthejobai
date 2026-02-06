import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | GetTheJobAI',
  description: 'Privacy policy for GetTheJobAI.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-6 text-white/70 text-sm">
        <p><strong className="text-white">Last updated:</strong> February 2026</p>
        
        <h2 className="text-xl font-semibold text-white mt-8">Information We Collect</h2>
        <p>We collect minimal information to provide our services:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Email address (if you subscribe to updates)</li>
          <li>Usage analytics (pages visited, features used)</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8">How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Send updates and newsletters (with your consent)</li>
          <li>Improve our guides and tools</li>
          <li>Analyze site usage patterns</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-8">Data Security</h2>
        <p>We implement reasonable security measures to protect your information.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Third-Party Services</h2>
        <p>We use Vercel Analytics for usage statistics. These services have their own privacy policies.</p>

        <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
        <p>Questions? Email <a href="mailto:hello@getthejobai.com" className="text-emerald-400">hello@getthejobai.com</a></p>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | GetTheJobAI',
  description: 'Get in touch with the GetTheJobAI team.',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="space-y-6 text-white/70">
        <p>Have questions, feedback, or suggestions? We would love to hear from you.</p>
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Get in Touch</h2>
          <p>Email: <a href="mailto:hello@getthejobai.com" className="text-emerald-400 hover:text-emerald-300">hello@getthejobai.com</a></p>
        </div>
        <p className="text-sm text-white/50">We typically respond within 24-48 hours.</p>
      </div>
    </div>
  )
}

import Link from 'next/link'

export const metadata = {
  title: 'Thank You! - GetTheJobAI',
  description: 'Your download is ready.',
}

export default function ThankYou() {
  return (
    <>
      <main className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <span className="text-6xl">🎉</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Thank you for your purchase!
        </h1>
        
        <p className="text-xl text-white/60 mb-8">
          Your 50+ ChatGPT Job Search Prompts pack is ready to download.
        </p>

        <a 
          href="/chatgpt-job-search-prompts.pdf"
          download
          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-lg transition-colors text-lg mb-8"
        >
          Download Your Prompts (PDF) ↓
        </a>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-12 text-left">
          <h2 className="font-semibold mb-4">Quick Start Tips:</h2>
          <ol className="space-y-3 text-white/70">
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono">1.</span>
              <span>Open ChatGPT (or your preferred AI assistant)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono">2.</span>
              <span>Copy a prompt from the PDF and paste your job details</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono">3.</span>
              <span>Iterate on the output until it matches your voice</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-400 font-mono">4.</span>
              <span>Use the interview prep prompts to practice before calls</span>
            </li>
          </ol>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/50 mb-4">Need more help with your job search?</p>
          <Link 
            href="/guides"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Browse our free guides →
          </Link>
        </div>
      </main>
    </>
  )
}
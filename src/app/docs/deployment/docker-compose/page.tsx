export default function DockerComposePage() {
  return (
    <div>
      <div className="mb-6">
        <a href="/" className="inline-flex items-center gap-2 text-sm hover:text-[var(--primary)] transition-colors" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </a>
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Docker Compose Deployment</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Recommended deployment for small to medium teams.</p>
      <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
        <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>See the <a href="/docs/quick-start" className="text-[var(--primary)] hover:underline">Quick Start Guide</a> for detailed deployment steps.</p>
      </div>
    </div>
  );
}

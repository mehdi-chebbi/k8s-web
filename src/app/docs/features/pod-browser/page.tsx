export default function PodBrowserPage() {
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Pod Browser</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Inspect pods, logs, and files safely without kubectl.</p>
      <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: 'rgba(144, 224, 239, 0.1)', border: '1px solid var(--accent)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Capabilities</h2>
        <ul className="space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>• Browse all pods across namespaces</li>
          <li>• View real-time logs (last N lines)</li>
          <li>• Get full kubectl describe output</li>
          <li>• File browser inside pods</li>
          <li>• Read config files safely</li>
          <li>• Read-only - no risk of breaking anything</li>
        </ul>
      </div>
    </div>
  );
}

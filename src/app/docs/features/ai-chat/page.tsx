export default function AIChatPage() {
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>AI Chat Assistant</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>ChatGPT meets kubectl - ask questions in plain English.</p>
      <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)', border: '1px solid var(--primary)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Example Questions</h2>
        <ul className="space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>• "Show me all failing pods"</li>
          <li>• "Why is my deployment stuck?"</li>
          <li>• "What's consuming the most CPU?"</li>
          <li>• "Check logs for pod xyz-123"</li>
        </ul>
      </div>
      <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Features</h2>
        <ul className="space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>• Context-aware conversations</li>
          <li>• Safe, read-only commands only</li>
          <li>• Streaming responses</li>
          <li>• Multiple LLM providers supported</li>
        </ul>
      </div>
    </div>
  );
}

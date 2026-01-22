export default function LLMProvidersPage() {
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>LLM Providers</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Switch between different AI models via OpenRouter.</p>
      
      <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)', border: '1px solid var(--primary)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>What is OpenRouter?</h2>
        <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          OpenRouter is an API gateway that provides access to multiple LLM providers through a single interface. This means you can switch between different AI models without changing your code.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Supported Models</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>GPT</span>
              GPT-4, GPT-4 Turbo
            </h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>OpenAI's most capable models. Best for complex reasoning and coding tasks.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary-foreground)' }}>Claude</span>
              Claude 3 Opus, Claude 3 Sonnet
            </h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Anthropic's Claude models. Excellent at following instructions and safe coding.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>And Many More</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>OpenRouter supports dozens of models from various providers including Google, Meta, Mistral, and more.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Switching Models</h2>
        <ol className="list-decimal list-inside space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>Navigate to Admin Dashboard</li>
          <li>Go to LLM Configuration</li>
          <li>Select your preferred model from the dropdown</li>
          <li>The change takes effect immediately for new conversations</li>
        </ol>
      </section>

      <section className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Cost Considerations</h2>
        <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          Different models have different costs. Monitor your OpenRouter usage and choose models based on your needs and budget. OpenRouter provides a free tier to get started.
        </p>
      </section>
    </div>
  );
}

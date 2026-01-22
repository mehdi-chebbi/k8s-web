export default function APIKeysPage() {
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>API Keys</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Configure OpenRouter API keys for AI features.</p>
      
      <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)', border: '1px solid var(--primary)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Getting an OpenRouter API Key</h2>
        <ol className="list-decimal list-inside space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>Visit <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline font-semibold">openrouter.ai</a></li>
          <li>Sign up for an account (free tier available)</li>
          <li>Generate an API key in your dashboard</li>
          <li>Copy the API key</li>
        </ol>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Configuration Methods</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Via .env File</h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Add your key to the environment file:</p>
            <div className="p-3 rounded-lg text-xs font-mono overflow-x-auto" style={{ backgroundColor: 'var(--background)', color: 'var(--accent)' }}>
              OPENROUTER_API_KEY=your_api_key_here
            </div>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Via Admin Dashboard</h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Add your key in the Admin Dashboard → API Keys section:</p>
            <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              <li>Navigate to Admin Dashboard</li>
              <li>Go to API Keys management</li>
              <li>Click "Add API Key"</li>
              <li>Provide a name and paste your key</li>
              <li>Click "Save"</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Key Security</h2>
        <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--warning)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              <strong>Important:</strong> API keys are stored encrypted in the database and never exposed in logs or responses. Keep your OpenRouter keys secure and never share them.
            </p>
          </div>
        </div>
      </section>

      <section className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)', border: '1px solid var(--primary)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Testing Your Setup</h2>
        <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          After adding your API key, try asking a question in the AI Chat Assistant to verify everything is working correctly.
        </p>
      </section>
    </div>
  );
}

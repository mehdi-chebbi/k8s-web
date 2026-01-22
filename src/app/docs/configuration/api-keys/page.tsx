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

      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
        API Keys
      </h1>

      <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
        Configure OpenRouter API keys for AI features. Connect your OpenRouter account to power the AI Chat Assistant with access to multiple LLM providers including GPT-4, Claude, and others.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            What It Does
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            API key management is the absolute minimum you need to enable AI features:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Manage OpenRouter API keys for LLM integration
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Switch between multiple AI models and providers
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Add, update, or remove keys without code changes
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl mt-6" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
            <p className="font-semibold" style={{ color: 'var(--foreground)' }}>
              that's it!
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Getting an OpenRouter API Key
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            The absolute minimum steps to get your API key:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <span className="text-xs font-bold">1</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Visit OpenRouter
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Go to <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline font-semibold">openrouter.ai</a> and create an account
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Sign up or log in
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Create a free account or sign into your existing OpenRouter account. Free tier includes generous usage limits.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Generate an API key
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Navigate to your OpenRouter dashboard and generate a new API key for your application.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <span className="text-xs font-bold">4</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Copy your API key
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Copy the generated API key to your clipboard. You'll need this for the next step.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl mt-6" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
            <p className="font-semibold" style={{ color: 'var(--foreground)' }}>
              that's it!
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Adding Your API Key to Kubemate
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            The absolute minimum steps to configure your API key in Kubemate:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">1</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Navigate to Admin Dashboard
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Access to Admin Dashboard from the main menu (requires admin role).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Go to API Keys Management
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Find the API Keys section in the Admin Dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Click "Add API Key"
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Start the process to add a new API key to your Kubemate instance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">4</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Provide a name and paste your key
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Give your API key a descriptive name like "Production" or "Development" and paste your key from OpenRouter.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">5</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Click "Save"
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Your API key is securely stored and ready to use. No code changes needed.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl mt-6" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
            <p className="font-semibold" style={{ color: 'var(--foreground)' }}>
              that's it!
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Technical Details
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Multiple LLM Providers
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                OpenRouter provides access to multiple AI models through a single API. Switch between GPT-4, Claude, and others based on your needs and budget.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Secure Storage
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                API keys are encrypted at rest using the same Fernet encryption as kubeconfigs. Keys are never exposed in logs or responses.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                No Code Changes Required
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Add, update, or remove API keys entirely through the Admin Dashboard UI. No configuration file editing or code deployment needed.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Admin Role Required
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Only users with admin role can manage API keys. Regular users can use AI features but cannot change configuration.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Testing Your Setup
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Test with AI Chat
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  After adding your API key, try asking a question in the AI Chat Assistant to verify everything is working correctly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Verify Model Selection
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  Confirm you can select different LLM models and they're working as expected. OpenRouter supports GPT-4, Claude, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Check Usage Metrics
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  Monitor your OpenRouter usage in their dashboard to stay within free tier limits or track costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Configuration Details
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            To make things even easier, API key management is integrated into the Admin Dashboard. You can add, update, and remove keys without touching any configuration files or code. All keys are securely stored and managed entirely through the UI.
          </p>
          <p className="leading-relaxed mt-4" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            So you don't need to do anything more to start enabling AI features right now, however take your time reading the information below to get a deeper understanding about how these concepts work.
          </p>
        </section>
      </div>
    </div>
  );
}

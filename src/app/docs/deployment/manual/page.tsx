export default function ManualDeploymentPage() {
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
        Manual Deployment
      </h1>

      <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
        Deploy KubeMate manually for maximum control and customization. This method is ideal for developers who want full visibility into each component and prefer to run services separately.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Prerequisites
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Python 3.8 or higher
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Node.js 18 or higher with npm
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                PostgreSQL 15 or higher (should be running)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                kubectl configured with your cluster
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                An LLM provider API key
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Quick Start
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            The absolute minimum setup to start using KubeMate manually is:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">1</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Clone the repository
                </p>
                <code className="block p-3 rounded-lg text-sm overflow-x-auto" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--accent)' }}>
                  git clone https://github.com/mehdi-chebbi/kubemate.git<br />
                  cd kubemate
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Install backend dependencies
                </p>
                <code className="block p-3 rounded-lg text-sm overflow-x-auto" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--accent)' }}>
                  cd project/<br />
                  pip install -r requirements.txt
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Configure environment variables
                </p>
                <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Make sure PostgreSQL 15 or higher is running, then configure the .env file with your database credentials.
                </p>

              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">4</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Start the backend server
                </p>
                <code className="block p-3 rounded-lg text-sm overflow-x-auto" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--accent)' }}>
                  python app.py
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">5</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Install frontend dependencies
                </p>
                <code className="block p-3 rounded-lg text-sm overflow-x-auto" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--accent)' }}>
                  cd main-app<br />
                  npm install
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">6</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Start the frontend development server
                </p>
                <code className="block p-3 rounded-lg text-sm overflow-x-auto" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--accent)' }}>
                  npm run dev
                </code>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
            <p className="font-semibold" style={{ color: 'var(--foreground)' }}>
              that's it!
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Running Both Services
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            You'll need to run the backend and frontend in separate terminal windows. The backend typically runs on port 8000 (or as configured), and the frontend on port 3000.
          </p>
          <p className="leading-relaxed mt-4" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            Access the application at <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--accent)' }}>http://localhost:3000</code>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Configuration Details
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            To make things even easier, the manual setup gives you complete control over every aspect of the application. You can customize the database connection, LLM provider settings, authentication methods, and more by editing the .env file.
          </p>
          <p className="leading-relaxed mt-4" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            So you don't need to do anything more to start exploring your clusters right now, however take your time reading the information below to get a deeper understanding about how these concepts work.
          </p>
        </section>
      </div>
    </div>
  );
}

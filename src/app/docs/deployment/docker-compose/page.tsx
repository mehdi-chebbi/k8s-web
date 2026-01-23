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

      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
        Docker Compose Deployment
      </h1>

      <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
        Deploy KubeMate quickly and easily using Docker Compose. This method is ideal for development environments, small teams, or anyone who wants to get up and running with minimal configuration.
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
                Docker installed on your system
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Docker Compose v2 or later
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                A Kubernetes cluster with valid kubeconfig
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                An LLM provider API key (OpenAI, Anthropic, or compatible)
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Quick Start
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            The absolute minimum setup to start using KubeMate with Docker Compose is:
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
                  git clone https://github.com/mehdi-chebbi/k8s-web.git<br />
                  cd k8s-web
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Copy the example environment file
                </p>
                <code className="block p-3 rounded-lg text-sm overflow-x-auto" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--accent)' }}>
                  cp .env.example .env
                </code>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Edit the .env file with your configuration
                </p>
                <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Set your LLM provider API key and kubeconfig path
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <span className="text-xs font-bold">4</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Start the application
                </p>
                <code className="block p-3 rounded-lg text-sm overflow-x-auto" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--accent)' }}>
                  docker-compose up -d
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
            Accessing KubeMate
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            Once the containers are running, you can access KubeMate at:
          </p>
          <code className="block p-4 rounded-lg text-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--accent)' }}>
            http://localhost:3000
          </code>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Configuration Details
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            To make things even easier, the Docker Compose setup includes sensible defaults and automatic container orchestration. All data is persisted using Docker volumes, so your configuration will be preserved even if you restart the containers.
          </p>
          <p className="leading-relaxed mt-4" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            So you don't need to do anything more to start exploring your clusters right now, however take your time reading the information below to get a deeper understanding about how these concepts work.
          </p>
        </section>
      </div>
    </div>
  );
}

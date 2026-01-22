export default function RequirementsPage() {
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
        Requirements
      </h1>

      <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
        Prerequisites and system requirements to run Kubemate.
      </p>

      {/* System Requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
          System Requirements
        </h2>

        <div className="grid gap-4">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Minimum</h3>
            <ul className="space-y-1 text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              <li>• 1 CPU core</li>
              <li>• 2GB RAM</li>
              <li>• 10GB disk space</li>
              <li>• Docker & Docker Compose</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Recommended</h3>
            <ul className="space-y-1 text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              <li>• 2 CPU cores</li>
              <li>• 4GB RAM</li>
              <li>• 20GB disk space</li>
              <li>• Docker & Docker Compose</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
          Prerequisites
        </h2>

        <div className="space-y-4">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
              <svg className="w-5 h-5" style={{ color: 'var(--primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Docker & Docker Compose
            </h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Required for containerized deployment. Install from <a href="https://docs.docker.com/get-docker/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Docker's official website</a>.
            </p>
            <div className="p-3 rounded-lg text-xs font-mono" style={{ backgroundColor: 'var(--background)', color: 'var(--accent)' }}>
              docker --version && docker-compose --version
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
              <svg className="w-5 h-5" style={{ color: 'var(--secondary)' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 9V15H9V17H2V7H9V9H4Z" fill="currentColor" />
                <path d="M11 7V17H13V13H17V17H19V7H17V11H13V7H11Z" fill="currentColor" />
                <circle cx="10" cy="6" r="2" fill="currentColor" />
                <circle cx="14" cy="18" r="2" fill="currentColor" />
              </svg>
              kubectl
            </h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Required to interact with your Kubernetes clusters. Install from <a href="https://kubernetes.io/docs/tasks/tools/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">Kubernetes documentation</a>.
            </p>
            <div className="p-3 rounded-lg text-xs font-mono" style={{ backgroundColor: 'var(--background)', color: 'var(--accent)' }}>
              kubectl version --client
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
              <svg className="w-5 h-5" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              OpenRouter API Key
            </h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Required for AI chat features. Sign up at <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline">openrouter.ai</a>. OpenRouter has a free tier.
            </p>
            <div className="p-3 rounded-lg text-xs" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
              <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>AI features will not work without a valid API key.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2 flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
              <svg className="w-5 h-5" style={{ color: 'var(--warning)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Kubernetes Cluster
            </h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              You need access to at least one Kubernetes cluster (v1.19+ recommended). Can be:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              <li>Local cluster (minikube, kind, k3s)</li>
              <li>Cloud provider (EKS, GKE, AKS)</li>
              <li>Self-hosted</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Database Requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
          Database Requirements
        </h2>
        <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            <li><strong>PostgreSQL</strong> 12+ (automatically provisioned by Docker Compose)</li>
            <li>Minimum: 1GB RAM allocated to PostgreSQL</li>
            <li>Recommended: 2GB RAM for production use</li>
          </ul>
        </div>
      </section>

      {/* Network Requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
          Network Requirements
        </h2>
        <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            <li>Internet connection for OpenRouter API (AI features)</li>
            <li>Network access to Kubernetes clusters</li>
            <li>Port 3000 for frontend</li>
            <li>Port 5000 for backend API</li>
            <li>Port 5432 for PostgreSQL (if accessing directly)</li>
          </ul>
        </div>
      </section>

      {/* Next Steps */}
      <section className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)', border: '1px solid var(--primary)' }}>
        <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
          Ready to Install?
        </h2>
        <p className="mb-4" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          If you have all the prerequisites, proceed to the <a href="/docs/quick-start" className="text-[var(--primary)] hover:underline font-semibold">Quick Start Guide</a>.
        </p>
      </section>
    </div>
  );
}

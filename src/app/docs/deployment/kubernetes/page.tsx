export default function K8sDeploymentPage() {
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
        Kubernetes Deployment
      </h1>

      <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
        Deploy Kubemate on Kubernetes itself for production environments. This method is ideal for teams who want high availability, scalability, and want to leverage Kubernetes' orchestration capabilities.
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
                Kubernetes cluster running (version 1.20+ recommended)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                kubectl configured with cluster access
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Helm 3 installed (for Helm installation) OR kubectl (for manifests)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Persistent storage available (for database)
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
            The absolute minimum setup to start using Kubemate on Kubernetes is:
          </p>

          <div className="p-6 rounded-2xl mb-6" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)', border: '1px solid var(--primary)' }}>
            <p className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
              Choose your deployment method
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              You can deploy Kubemate using Helm charts for a simplified experience, or apply Kubernetes manifests directly using kubectl for full control.
            </p>
          </div>

          <div className="space-y-8 mb-6">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Option 1: Helm Charts (Recommended)
              </h3>
              <div className="space-y-4">
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
                      Install using Helm
                    </p>
                    <code className="block p-3 rounded-lg text-sm overflow-x-auto" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--accent)' }}>
                      helm install kubemate ./helm/kubemate<br />
                      # Or with custom values<br />
                      helm install kubemate ./helm/kubemate -f values.yaml
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                Option 2: Kubernetes Manifests
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
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
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                      Apply Kubernetes manifests
                    </p>
                    <code className="block p-3 rounded-lg text-sm overflow-x-auto" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--accent)' }}>
                      # Apply all manifests at once<br />
                      kubectl apply -f k8s/<br /><br />
                      # Or apply individually<br />
                      kubectl apply -f k8s/db.yaml<br />
                      kubectl apply -f k8s/pvc.yaml<br />
                      kubectl apply -f k8s/backend.yaml<br />
                      kubectl apply -f k8s/frontend.yaml<br />
                      kubectl apply -f k8s/svc.yaml
                    </code>
                  </div>
                </div>
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
            Accessing Kubemate
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            After deployment, you can access Kubemate through the Kubernetes service. To get the external IP or URL:
          </p>
          <code className="block p-4 rounded-lg text-sm mt-4 overflow-x-auto" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--accent)' }}>
            kubectl get svc kubemate-frontend<br /><br />
            # For LoadBalancer type<br />
            kubectl get svc kubemate-frontend<br /><br />
            # For NodePort type<br />
            kubectl get nodes -o wide
          </code>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Configuration Details
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            To make things even easier, both Helm charts and Kubernetes manifests include sensible defaults for production use. Persistent volumes are configured for database storage, services are set up for proper networking, and health checks ensure high availability.
          </p>
          <p className="leading-relaxed mt-4" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            So you don't need to do anything more to start exploring your clusters right now, however take your time reading the information below to get a deeper understanding about how these concepts work.
          </p>
        </section>
      </div>
    </div>
  );
}

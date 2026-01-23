export default function ReadOnlyPage() {
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
        Read-Only Enforcement
      </h1>

      <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
        Safe by default - can't accidentally break production. KubeMate is designed for troubleshooting and monitoring, not for making changes to your cluster. By enforcing read-only access, we ensure you can investigate issues without risking production outages.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            What It Does
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            Read-only enforcement is to absolute minimum you need to stay safe:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Prevents accidental deletions
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Blocks dangerous modifications
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Allows safe troubleshooting and monitoring
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Protects production clusters from accidents
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
            What's Prevented
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            By enforcing read-only access, we ensure you can't accidentally:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--danger)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12m0 0-12 12l12 12" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Delete deployments, pods, or services
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--danger)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12m0 0-12 12l12 12" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Modify configurations
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--danger)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12m0 0-12 12l12 12" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Apply changes that break production
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--danger)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12m0 0-12 12l12 12" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Execute arbitrary commands
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Allowed Commands
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            KubeMate only permits safe, read-only kubectl commands:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <code className="block text-center font-mono mb-2" style={{ color: 'var(--accent)' }}>
                kubectl get
              </code>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                List resources (pods, nodes, services, etc.)
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <code className="block text-center font-mono mb-2" style={{ color: 'var(--accent)' }}>
                kubectl describe
              </code>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Show detailed information about resources
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <code className="block text-center font-mono mb-2" style={{ color: 'var(--accent)' }}>
                kubectl logs
              </code>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                View pod logs with tail and follow options
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <code className="block text-center font-mono mb-2" style={{ color: 'var(--accent)' }}>
                kubectl top
              </code>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Show resource usage (CPU, memory)
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <code className="block text-center font-mono mb-2" style={{ color: 'var(--accent)' }}>
                kubectl events
              </code>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                View cluster events
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Blocked Commands
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            The following commands are strictly prohibited:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)' }}>
              <code className="block text-center font-mono mb-2" style={{ color: 'var(--danger)' }}>
                kubectl delete
              </code>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Delete resources
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)' }}>
              <code className="block text-center font-mono mb-2" style={{ color: 'var(--danger)' }}>
                kubectl apply
              </code>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Apply configuration changes
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)' }}>
              <code className="block text-center font-mono mb-2" style={{ color: 'var(--danger)' }}>
                kubectl edit
              </code>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Modify resources in-place
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)' }}>
              <code className="block text-center font-mono mb-2" style={{ color: 'var(--danger)' }}>
                kubectl create
              </code>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Create new resources
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)' }}>
              <code className="block text-center font-mono mb-2" style={{ color: 'var(--danger)' }}>
                kubectl patch
              </code>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Partially update resources
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)' }}>
              <code className="block text-center font-mono mb-2" style={{ color: 'var(--danger)' }}>
                kubectl exec (interactive)
              </code>
              <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Interactive shell access
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Technical Details
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Command Verification
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                All commands are verified before execution. Any attempt to run a blocked command is rejected immediately with a clear error message. This multi-layer protection ensures your production clusters stay safe.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Kubectl Wrapper Security
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Commands are wrapped with security verification to prevent unauthorized operations. The wrapper validates command types before passing to kubectl.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Safe File Access
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                File browser implements path sanitization to prevent directory traversal attacks. Only files within pod boundaries can be accessed, and all paths are validated before execution.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Why Users Love It
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <strong>Can't accidentally delete production</strong> - No risk of accidentally removing critical services
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <strong>Peace of mind for troubleshooting</strong> - Investigate issues safely without fear of breaking things
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <strong>Safe for development teams</strong> - Junior developers can explore without production access
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <strong>Perfect for consultants and MSPs</strong> - Provide read-only access to client clusters
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Configuration Details
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            To make things even easier, read-only enforcement is automatic. All kubectl commands are validated before execution, and dangerous operations are blocked by default. You can troubleshoot and monitor with complete peace of mind.
          </p>
          <p className="leading-relaxed mt-4" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            So you don't need to do anything more to stay safe right now, however take your time reading the information below to get a deeper understanding about how these concepts work.
          </p>
        </section>
      </div>
    </div>
  );
}

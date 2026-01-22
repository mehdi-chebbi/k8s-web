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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Read-Only Enforcement</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Safe by default - can't accidentally break production.</p>
      
      <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Why Read-Only?</h2>
        <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          Kubemate is designed for troubleshooting and monitoring, not for making changes to your cluster. By enforcing read-only access, we ensure you can't accidentally:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>Delete deployments, pods, or services</li>
          <li>Modify configurations</li>
          <li>Apply changes that break production</li>
          <li>Execute arbitrary commands</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Allowed Commands</h2>
        <p className="mb-4" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Kubemate only permits safe, read-only kubectl commands:</p>
        <div className="grid gap-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-sm font-mono mb-1" style={{ color: 'var(--accent)' }}>kubectl get</code>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>List resources (pods, nodes, services, etc.)</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-sm font-mono mb-1" style={{ color: 'var(--accent)' }}>kubectl describe</code>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Show detailed information about resources</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-sm font-mono mb-1" style={{ color: 'var(--accent)' }}>kubectl logs</code>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>View pod logs with tail and follow options</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-sm font-mono mb-1" style={{ color: 'var(--accent)' }}>kubectl top</code>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Show resource usage (CPU, memory)</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-sm font-mono mb-1" style={{ color: 'var(--accent)' }}>kubectl events</code>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>View cluster events</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Blocked Commands</h2>
        <p className="mb-4" style={{ color: 'var(--foreground)', opacity: 0.7 }}>The following commands are strictly prohibited:</p>
        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid var(--danger)' }}>
          <ul className="grid grid-cols-2 gap-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--danger)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <code className="font-mono">delete</code>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--danger)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <code className="font-mono">apply</code>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--danger)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <code className="font-mono">edit</code>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--danger)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <code className="font-mono">create</code>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--danger)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <code className="font-mono">patch</code>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--danger)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <code className="font-mono">exec</code> (interactive shell)
            </li>
          </ul>
        </div>
      </section>

      <section className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)', border: '1px solid var(--primary)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Command Verification</h2>
        <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          All commands are verified before execution. Any attempt to run a blocked command is rejected immediately with a clear error message. This multi-layer protection ensures your production clusters stay safe.
        </p>
      </section>
    </div>
  );
}

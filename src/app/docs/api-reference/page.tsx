export default function APIReferencePage() {
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>API Reference</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Complete API documentation for Kubemate.</p>
      
      <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)', border: '1px solid var(--primary)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Base URL</h2>
        <div className="p-4 rounded-lg text-sm font-mono overflow-x-auto" style={{ backgroundColor: 'var(--background)', color: 'var(--accent)' }}>
          /api/v1
        </div>
        <p className="mt-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>All API endpoints are prefixed with <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--accent)' }}>/api/v1</code>. Use the <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--accent)' }}>XTransformPort</code> query parameter for different services.</p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Authentication</h2>
        <p className="mb-4" style={{ color: 'var(--foreground)', opacity: 0.7 }}>All API requests require authentication via session cookie.</p>
        <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
          <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Login Endpoint</h3>
          <code className="text-xs font-mono" style={{ color: 'var(--accent)' }}>POST /api/v1/auth/login</code>
          <p className="text-sm mt-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            <strong>Body:</strong> {`{ username: string, password: string }`}
          </p>
          <p className="text-sm mt-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
            <strong>Response:</strong> Sets HttpOnly session cookie
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Chat Endpoints</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-xs font-mono" style={{ color: 'var(--accent)' }}>POST /api/v1/chat/message</code>
            <p className="text-sm mt-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Send a message to AI chat (SSE streaming)</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-xs font-mono" style={{ color: 'var(--accent)' }}>GET /api/v1/chat/history</code>
            <p className="text-sm mt-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Get conversation history</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Kubernetes Endpoints</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-xs font-mono" style={{ color: 'var(--accent)' }}>GET /api/v1/k8s/pods</code>
            <p className="text-sm mt-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>List all pods across namespaces</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-xs font-mono" style={{ color: 'var(--accent)' }}>GET /api/v1/k8s/pods/:name/logs</code>
            <p className="text-sm mt-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Get logs for a specific pod</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-xs font-mono" style={{ color: 'var(--accent)' }}>GET /api/v1/k8s/nodes</code>
            <p className="text-sm mt-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>List all nodes in cluster</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Admin Endpoints</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-xs font-mono" style={{ color: 'var(--accent)' }}>GET /api/v1/admin/users</code>
            <p className="text-sm mt-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>List all users (admin only)</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <code className="text-xs font-mono" style={{ color: 'var(--accent)' }}>POST /api/v1/admin/kubeconfigs</code>
            <p className="text-sm mt-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Add encrypted kubeconfig (admin only)</p>
          </div>
        </div>
      </section>

      <section className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Coming Soon</h2>
        <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          Full OpenAPI/Swagger documentation is coming soon. For now, refer to this page for endpoint details and use your browser's developer tools to inspect response formats.
        </p>
      </section>
    </div>
  );
}

export default function TroubleshootingPage() {
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Troubleshooting</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Common issues and solutions.</p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Installation Issues</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Services Won't Start</h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>If services fail to start, check:</p>
            <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              <li>Port conflicts (ensure ports 3000, 5000, 5432 are available)</li>
              <li>.env file exists with all required variables</li>
              <li>Docker is running: <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background)', color: 'var(--accent)' }}>docker ps</code></li>
            </ul>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Database Connection Errors</h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>If you see database connection errors:</p>
            <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              <li>Check PostgreSQL is running: <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background)', color: 'var(--accent)' }}>docker-compose ps postgres</code></li>
              <li>Verify .env database credentials are correct</li>
              <li>Check database logs: <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background)', color: 'var(--accent)' }}>docker-compose logs postgres</code></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>AI Chat Issues</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>AI Not Responding</h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>If AI chat doesn't respond:</p>
            <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              <li>Verify OPENROUTER_API_KEY is set in .env</li>
              <li>Check you have credits on OpenRouter</li>
              <li>Test the API key with curl or their playground</li>
              <li>Check backend logs: <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background)', color: 'var(--accent)' }}>docker-compose logs backend</code></li>
            </ul>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Streaming Errors</h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>If SSE streaming fails:</p>
            <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              <li>Check network connectivity is stable</li>
              <li>Verify XTransformPort query parameter is correct</li>
              <li>Check browser console for JavaScript errors</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Kubernetes Connection Issues</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Can't Connect to Cluster</h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>If cluster connection fails:</p>
            <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              <li>Verify kubectl works locally: <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background)', color: 'var(--accent)' }}>kubectl get nodes</code></li>
              <li>Test kubeconfig is valid and not expired</li>
              <li>Check network connectivity from Kubemate to cluster API server</li>
              <li>Verify firewall rules allow traffic</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>Permission Denied Errors</h3>
            <p className="text-sm mb-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>If you see permission errors:</p>
            <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              <li>Check kubeconfig user has appropriate RBAC permissions</li>
              <li>Verify service accounts are correctly configured</li>
              <li>Test with <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--background)', color: 'var(--accent)' }}>kubectl auth can-i get pods</code></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Getting Help</h2>
        <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)', border: '1px solid var(--primary)' }}>
          <ul className="space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            <li>• Check logs: <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--accent)' }}>docker-compose logs -f</code></li>
            <li>• Restart services: <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--accent)' }}>docker-compose restart</code></li>
            <li>• Rebuild containers: <code className="px-2 py-1 rounded" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--accent)' }}>docker-compose up -d --build</code></li>
            <li>• Check system resources (CPU, memory, disk)</li>
            <li>• Report bugs on GitHub with logs and error messages</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

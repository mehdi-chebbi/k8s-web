export default function KubeconfigPage() {
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Kubeconfig Setup</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Add and manage multiple kubeconfigs securely.</p>
      <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Adding a Kubeconfig</h2>
        <ol className="list-decimal list-inside space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>Navigate to Admin Dashboard</li>
          <li>Go to Kubeconfig Management section</li>
          <li>Click "Add Kubeconfig" button</li>
          <li>Paste your kubeconfig file content</li>
          <li>Provide a name for your cluster (e.g., "production")</li>
          <li>Click "Save" to store securely</li>
        </ol>
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Security Features</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>AES-128 + HMAC Encryption</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Kubeconfigs are encrypted at rest using Fernet encryption with AES-128 cipher and HMAC for authentication.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Never in Plain Text</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Credentials are never stored in plain text or exposed in logs.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Multi-Cluster Support</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Add multiple kubeconfigs and switch between them easily from the interface.</p>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Managing Kubeconfigs</h2>
        <ul className="space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Click the test button to verify cluster connectivity before saving</span>
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 01-6 0" />
            </svg>
            <span>Activate a kubeconfig to make it the default for new sessions</span>
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--warning)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0117.138 21H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a2 2 0 001.414 1.414" />
            </svg>
            <span>Delete kubeconfigs when no longer needed - this removes the encrypted data</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

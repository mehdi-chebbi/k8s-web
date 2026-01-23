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

      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
        Kubeconfig Setup
      </h1>

      <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
        Add and manage multiple kubeconfigs securely. Connect your Kubernetes clusters to KubeMate by uploading kubeconfig files. All credentials are encrypted at rest and never exposed in plain text.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            What It Does
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            Kubeconfig management is the absolute minimum you need to connect your clusters:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Add multiple kubeconfig files
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Encrypt credentials using Fernet (AES-128 + HMAC)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Test cluster connectivity before saving
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--success)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Activate clusters and switch between them
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
            Adding a Kubeconfig
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            The absolute minimum steps to add your first kubeconfig:
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <span className="text-xs font-bold">1</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Navigate to Admin Dashboard
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Access the Admin Dashboard from the main menu
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Go to Kubeconfig Management
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Find the Kubeconfig Management section in Admin Dashboard
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Click "Add Kubeconfig"
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Start the process to add a new cluster configuration
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <span className="text-xs font-bold">4</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Paste your kubeconfig file content
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Copy the entire kubeconfig file and paste it into the text area
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <span className="text-xs font-bold">5</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Provide a name for your cluster
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Give your cluster a descriptive name like "production" or "development"
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                <span className="text-xs font-bold">6</span>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Click "Save" to store securely
                </p>
                <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Your kubeconfig is automatically encrypted and saved to the database
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
            Managing Kubeconfigs
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Test Connectivity
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  Click the test button to verify cluster connectivity before saving. This ensures your credentials are valid and the cluster is accessible.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 01-6 0" />
                </svg>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Activate Clusters
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  Activate a kubeconfig to make it the default cluster for new sessions. Only one cluster can be active at a time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0117.138 21H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a2 2 0 001.414 1.414" />
                </svg>
              </div>
              <div>
                <p className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>
                  Delete Kubeconfigs
                </p>
                <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  Delete kubeconfigs when no longer needed. This removes the encrypted data from the database and is irreversible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Security Features
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                AES-128 + HMAC Encryption
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Kubeconfigs are encrypted at rest using Fernet encryption with AES-128 cipher and HMAC for authentication. Credentials are only decrypted when needed for cluster connections.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Never in Plain Text
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Credentials are never stored in plain text or exposed in logs. All sensitive data is encrypted before being written to the database.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Multi-Cluster Support
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Add multiple kubeconfigs and switch between them easily from the interface. Each cluster's kubeconfig is isolated and encrypted independently.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Configuration Details
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            To make things even easier, Kubeconfig management is integrated into the Admin Dashboard. You can test connections before saving, activate clusters for quick access, and manage multiple clusters from one central location.
          </p>
          <p className="leading-relaxed mt-4" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            So you don't need to do anything more to start connecting your clusters right now, however take your time reading the information below to get a deeper understanding about how these concepts work.
          </p>
        </section>
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
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
        Admin Dashboard
      </h1>

      <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
        Complete control over users, clusters, and AI. Manage team access, configure multiple Kubernetes clusters, switch between LLM providers, and track all activity from one central interface.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            What It Does
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            The Admin Dashboard is the absolute minimum you need to manage your KubeMate instance:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                User Management: Create users, assign roles (admin/user), ban/unban
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Kubeconfig Management: Add multiple kubeconfigs, activate/deactivate, test connections
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                API Key Management: Manage OpenRouter API keys
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                LLM Configuration: Configure different LLM providers, switch between them
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Activity Logs: See what users are doing, audit trail
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
            Key Features
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                User Management
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Create new user accounts, assign admin or user roles, and manage user access. Ban or unban users as needed for security.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Kubeconfig Management
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Add multiple Kubernetes kubeconfigs, activate or deactivate clusters, and test connections directly from the dashboard. All kubeconfigs are encrypted at rest.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                API Key Management
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Manage OpenRouter API keys for LLM integration. Add, update, or remove keys without code changes. Keys are securely stored.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                LLM Configuration
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Configure different LLM providers through OpenRouter. Switch between GPT-4, Claude, and other AI models based on your needs and budget.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Activity Logs
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Complete audit trail showing what users are doing. Track pod browsing, AI queries, and configuration changes for compliance and security.
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
                Role-Based Access Control (RBAC)
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Admin and user roles with different permission levels. Admins can manage users and clusters, while users have read-only access to configured clusters.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Encrypted Kubeconfig Storage
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                All kubeconfigs are encrypted using Fernet (AES-128 + HMAC) at rest. Only decrypted when needed for Kubernetes connections, ensuring credentials never leak.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Multi-Cluster Support
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Add multiple Kubernetes clusters to a single instance. Switch between clusters with one click. Each cluster's kubeconfig is isolated and encrypted independently.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Audit Logging
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                All administrative and user actions are logged for compliance. Track who accessed which cluster, ran which commands, and made configuration changes.
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
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <strong>Manage team access easily</strong> - Create users, assign roles, control access
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <strong>Support multiple clusters from one instance</strong> - Add, switch, and test connections easily
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <strong>Switch AI providers without code changes</strong> - Configure and swap LLM models from UI
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Configuration Details
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            To make things even easier, Admin Dashboard provides a centralized interface for all management tasks. You can manage users, clusters, API keys, and AI configuration without touching any configuration files.
          </p>
          <p className="leading-relaxed mt-4" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            So you don't need to do anything more to start managing your KubeMate instance right now, however take your time reading information below to get a deeper understanding about how these concepts work.
          </p>
        </section>
      </div>
    </div>
  );
}

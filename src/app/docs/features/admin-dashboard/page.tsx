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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Admin Dashboard</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Complete control over users, clusters, and AI configuration.</p>
      <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Management</h2>
        <ul className="space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>• User Management: Create users, assign roles (admin/user), ban/unban</li>
          <li>• Kubeconfig Management: Add multiple kubeconfigs, activate/deactivate, test connections</li>
          <li>• API Key Management: Manage OpenRouter API keys</li>
          <li>• LLM Configuration: Switch between different AI models</li>
          <li>• Activity Logs: See what users are doing, audit trail</li>
        </ul>
      </div>
      <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Access Control</h2>
        <ul className="space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>• Role-based access control (RBAC)</li>
          <li>• Encrypted kubeconfig storage</li>
          <li>• Multi-cluster support</li>
          <li>• Audit logging for compliance</li>
        </ul>
      </div>
    </div>
  );
}

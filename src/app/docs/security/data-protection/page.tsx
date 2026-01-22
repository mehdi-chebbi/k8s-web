export default function DataProtectionPage() {
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Data Protection</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Encryption and security practices for your data.</p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Kubeconfig Encryption</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>AES-128 + HMAC</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Uses Fernet encryption with AES-128 cipher and HMAC for authentication and integrity verification.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Encrypted at Rest</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Kubeconfigs are encrypted before being stored in PostgreSQL database.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Decryption on Use</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Kubeconfigs are only decrypted in memory when needed to connect to clusters.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>API Key Protection</h2>
        <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              OpenRouter API keys are encrypted at rest using the same Fernet encryption as kubeconfigs. Keys are never logged or exposed in API responses.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Database Security</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>PostgreSQL</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Production-grade database with parameterized queries to prevent SQL injection.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>SQL Injection Protection</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>All database queries use parameterized statements, eliminating SQL injection risks.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Database Backups</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Configure regular PostgreSQL backups for your production deployment.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Network Security</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>CORS Configuration</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Properly configured CORS headers restrict API access to authorized origins only.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>HTTPS Required</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Always use HTTPS in production to encrypt data in transit.</p>
          </div>
        </div>
      </section>

      <section className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Best Practices</h2>
        <ul className="space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>• Regularly update Kubemate to get security patches</li>
          <li>• Use strong, unique passwords for all accounts</li>
          <li>• Rotate API keys periodically</li>
          <li>• Enable PostgreSQL backups</li>
          <li>• Monitor access logs for suspicious activity</li>
        </ul>
      </section>
    </div>
  );
}

export default function AuthenticationPage() {
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Authentication</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Secure user management and access control.</p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Password Security</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Bcrypt Hashing</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Passwords are hashed using bcrypt before storage. This means we never see or store your actual password.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Secure Session Management</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Sessions use HttpOnly cookies which are not accessible via JavaScript, protecting against XSS attacks.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>User Management</h2>
        <div className="space-y-3">
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Create Users</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Admins can create new users with username and initial password.</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Role-Based Access Control</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Two roles available: <strong>Admin</strong> (full access) and <strong>User</strong> (limited access to assigned clusters).</p>
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <h3 className="font-semibold mb-1" style={{ color: 'var(--foreground)' }}>Ban/Unban Users</h3>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.7 }}>Admins can ban users to prevent access. Banned users cannot log in even with correct credentials.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>Session Management</h2>
        <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--warning)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l0 0l0 0l0 0l0 0l0 0l0 0m0 0l0 0m0 0l0 0l0 0l0 0m0 0l0 0l0 0l0 0m0 0l0 0l0 0m0 0l0 0l0 0l0 0" />
            </svg>
            <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              <strong>Session Expiration:</strong> Sessions automatically expire after 24 hours for security. Users must log in again after this period.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

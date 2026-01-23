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

      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
        Authentication
      </h1>

      <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
        Secure user management and access control. KubeMate uses industry-standard security practices to protect your account and data. All authentication features are designed to prevent unauthorized access while providing a smooth user experience.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            What It Does
          </h2>
          <p className="mb-4 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            Authentication is the absolute minimum you need to secure your account:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Secure login and signup with password hashing
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Role-based access control (Admin/User)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                24-hour session expiration
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                User banning for security enforcement
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
            Password Security
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Bcrypt Hashing
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Passwords are hashed using bcrypt before storage. This one-way hashing ensures we never see or store your actual password. Bcrypt is a proven, industry-standard algorithm for password security.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Secure Session Management
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Sessions use HttpOnly cookies which are not accessible via JavaScript. This protects against XSS (cross-site scripting) attacks where malicious code could steal session tokens.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                24-Hour Session Expiration
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Sessions automatically expire after 24 hours for security. Users must log in again after this period, reducing the window of opportunity if credentials are compromised.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            User Management
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Create Users
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Admins can create new user accounts with username and initial password. This is useful for onboarding new team members without sharing personal credentials.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Role-Based Access Control (RBAC)
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Two roles available: <strong>Admin</strong> (full access to all features including user and cluster management) and <strong>User</strong> (limited access to assigned clusters and AI features).
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Ban/Unban Users
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Admins can ban users to prevent access. Banned users cannot log in even with correct credentials. Unban to restore access when needed.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Session Management
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                HttpOnly Cookies
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Sessions use HttpOnly cookies which are not accessible via JavaScript. This protects against XSS (cross-site scripting) attacks where malicious code could steal session tokens.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                24-Hour Expiration
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Sessions automatically expire after 24 hours for security. Users must log in again after this period, reducing the window of opportunity if credentials are compromised.
              </p>
            </div>

            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning)' }}>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                Secure Token Generation
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                Session tokens are generated using cryptographically secure methods and validated on each request. Tokens are rotated periodically.
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
                <strong>Simple and secure</strong> - Industry-standard bcrypt hashing protects passwords without complexity
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <strong>Automatic session management</strong> - Sessions expire after 24 hours for security
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: 'var(--warning)', color: 'white' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <strong>Role-based permissions</strong> - Admins have full control, users limited to clusters
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Configuration Details
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            To make things even easier, authentication is handled automatically by the application. You don't need to configure any authentication settings manually. All security features are enabled by default for maximum protection.
          </p>
          <p className="leading-relaxed mt-4" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
            So you don't need to do anything more to start securing your account right now, however take your time reading the information below to get a deeper understanding about how these concepts work.
          </p>
        </section>
      </div>
    </div>
  );
}

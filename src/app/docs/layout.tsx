import React from 'react';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docsNav = [
    {
      category: 'Getting Started',
      href: '/docs',
      items: [
      ],
    },
    {
      category: 'Deployment',
      items: [
        { href: '/docs/deployment/docker-compose', title: 'Docker Compose' },
        { href: '/docs/deployment/manual', title: 'Manual Deployment' },
        { href: '/docs/deployment/kubernetes', title: 'Kubernetes Deployment' },
      ],
    },
    {
      category: 'Features',
      items: [
        { href: '/docs/features/ai-chat', title: 'AI Chat Assistant' },
        { href: '/docs/features/topology-viewer', title: 'Topology Viewer' },
        { href: '/docs/features/pod-browser', title: 'Pod Browser' },
        { href: '/docs/features/admin-dashboard', title: 'Admin Dashboard' },
      ],
    },
    {
      category: 'Configuration',
      items: [
        { href: '/docs/configuration/kubeconfig', title: 'Kubeconfig Setup' },
        { href: '/docs/configuration/api-keys', title: 'API Keys' },
        { href: '/docs/configuration/llm-providers', title: 'LLM Providers' },
      ],
    },
    {
      category: 'Security',
      items: [
        { href: '/docs/security/authentication', title: 'Authentication' },
        { href: '/docs/security/read-only', title: 'Read-Only Enforcement' },
        { href: '/docs/security/data-protection', title: 'Data Protection' },
      ],
    },

  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="flex">
        {/* Sidebar */}
        <aside
          className="w-72 fixed top-16 bottom-0 left-0 overflow-y-auto border-r hidden lg:block"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
          }}
        >
          <div className="p-6">
            {/* Nav */}
            <nav>
              {docsNav.map((section) => (
                <div key={section.category} className="mb-6">
                  {/* Category title */}
                  {section.href ? (
                    <a
                      href={section.href}
                      className="block text-xs font-semibold uppercase tracking-wider mb-3 hover:text-[var(--primary)] transition-colors"
                      style={{ color: 'var(--foreground)', opacity: 0.5 }}
                    >
                      {section.category}
                    </a>
                  ) : (
                    <h3
                      className="text-xs font-semibold uppercase tracking-wider mb-3"
                      style={{ color: 'var(--foreground)', opacity: 0.5 }}
                    >
                      {section.category}
                    </h3>
                  )}

                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="block py-2 px-3 rounded-lg text-sm transition-colors hover:text-[var(--primary)]"
                          style={{
                            color: 'var(--foreground)',
                            opacity: 0.7,
                          }}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-72">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

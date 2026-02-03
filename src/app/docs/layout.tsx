'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

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

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="flex">
        {/* Sidebar - Desktop (Left fixed) */}
        <aside
          className="w-72 fixed top-16 bottom-0 left-0 overflow-y-auto border-r hidden lg:block"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
          }}
        >
          <div className="p-6">
            <nav>
              {docsNav.map((section) => (
                <div key={section.category} className="mb-6">
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
                          className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                            isActive(item.href)
                              ? 'text-[var(--primary)] font-medium'
                              : 'hover:text-[var(--primary)]'
                          }`}
                          style={{
                            color: isActive(item.href) ? 'var(--primary)' : 'var(--foreground)',
                            opacity: isActive(item.href) ? 1 : 0.7,
                            backgroundColor: isActive(item.href) ? 'rgba(50, 108, 229, 0.1)' : 'transparent',
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

        {/* Mobile Sidebar Toggle Button (Top Right) */}
        <button
          className="lg:hidden fixed top-20 right-4 z-40 px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-2"
          style={{
            backgroundColor: 'var(--card-bg)',
            color: 'var(--foreground)',
            border: '1px solid var(--card-border)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileSidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
          {mobileSidebarOpen ? 'Close' : 'Docs'}
        </button>

        {/* Mobile Sidebar Overlay */}
        {mobileSidebarOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 lg:hidden"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              onClick={() => setMobileSidebarOpen(false)}
            />

            {/* Sliding Sidebar */}
            <aside
              className="fixed top-0 right-0 bottom-0 w-80 z-50 lg:hidden overflow-y-auto transform transition-transform duration-300 ease-in-out"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderLeft: '1px solid var(--card-border)',
              }}
            >
              <div className="p-6">
                {/* Header with Close */}
                <div className="flex items-center justify-between mb-6">
                  <h2
                    className="text-lg font-bold"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Documentation
                  </h2>
                  <button
                    onClick={() => setMobileSidebarOpen(false)}
                    className="p-2 rounded-lg"
                    style={{
                      backgroundColor: 'var(--background)',
                      color: 'var(--foreground)',
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation */}
                <nav>
                  {docsNav.map((section) => (
                    <div key={section.category} className="mb-6">
                      {section.href ? (
                        <a
                          href={section.href}
                          onClick={() => setMobileSidebarOpen(false)}
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

                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <a
                              href={item.href}
                              onClick={() => setMobileSidebarOpen(false)}
                              className={`block py-3 px-4 rounded-lg text-sm transition-colors ${
                                isActive(item.href)
                                  ? 'text-[var(--primary)] font-medium'
                                  : 'hover:text-[var(--primary)]'
                              }`}
                              style={{
                                color: isActive(item.href) ? 'var(--primary)' : 'var(--foreground)',
                                opacity: isActive(item.href) ? 1 : 0.8,
                                backgroundColor: isActive(item.href) ? 'rgba(50, 108, 229, 0.1)' : 'transparent',
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
          </>
        )}

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

'use client';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--primary)' }}></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--secondary)' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--success)' }}></span>
              <span className="text-sm" style={{ color: 'var(--foreground)' }}>Open Source • MIT Licensed</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: 'var(--foreground)' }}>
              Talk to your{' '}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                Kubernetes cluster
              </span>
              <br />
              don't command it
            </h1>

            <p className="text-xl sm:text-2xl mb-10 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              ChatGPT meets kubectl. Ask questions in plain English and get instant,
              intelligent answers about your clusters. No commands to memorize.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/docs"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                View Documentation
              </a>
              <a
                href="https://github.com"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--foreground)', border: '1px solid var(--card-border)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-16 flex flex-wrap justify-center gap-8 items-center" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Read-Only Safe</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Multi-Cluster</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>100% Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Everything you need to master K8s
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Powerful features that make Kubernetes management effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1: AI Chat */}
            <div className="p-6 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--primary)' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>AI Chat Assistant</h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Ask questions in plain English. Get instant, streaming responses. AI suggests and executes safe kubectl commands for you.
              </p>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                <code className="text-sm px-3 py-1 rounded-lg" style={{ backgroundColor: 'var(--background)', color: 'var(--accent)' }}>
                  "Why is my nginx pod crashing?"
                </code>
              </div>
            </div>

            {/* Feature 2: Topology Viewer */}
            <div className="p-6 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--secondary)' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Cluster Topology</h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Interactive 2D visualization of your entire cluster. Drag and drop nodes, view health indicators, understand architecture instantly.
              </p>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                <span className="text-sm flex items-center gap-2" style={{ color: 'var(--success)' }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--success)' }}></span>
                  Real-time updates
                </span>
              </div>
            </div>

            {/* Feature 3: Pod Browser */}
            <div className="p-6 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--accent)' }}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Pod Browser</h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Inspect pods without ever touching kubectl. View logs, describe pods, browse files inside containers safely and read-only.
              </p>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                <span className="text-sm flex items-center gap-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Read-only protection
                </span>
              </div>
            </div>

            {/* Feature 4: Multi-Cluster */}
            <div className="p-6 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--success)' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Multi-Cluster Support</h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Manage all your Kubernetes clusters from one place. Add multiple kubeconfigs, switch between them instantly.
              </p>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                <span className="text-sm flex items-center gap-2" style={{ color: 'var(--success)' }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Encrypted storage
                </span>
              </div>
            </div>

            {/* Feature 5: Admin Dashboard */}
            <div className="p-6 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--warning)' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Admin Dashboard</h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Complete control over users, clusters, and AI. Manage team access, configure LLM providers, view activity logs.
              </p>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                <span className="text-sm flex items-center gap-2" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Role-based access
                </span>
              </div>
            </div>

            {/* Feature 6: Security */}
            <div className="p-6 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--danger)' }}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Enterprise Security</h3>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Read-only command enforcement, AES-128 encryption, audit trails. Safe by default for production clusters.
              </p>
              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                <span className="text-sm flex items-center gap-2" style={{ color: 'var(--success)' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Compliance ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--primary)' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Built for everyone who works with K8s
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Whether you're a DevOps pro or just getting started, KubeMate makes your life easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* DevOps Engineers */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>DevOps Engineers</h3>
              </div>
              <ul className="space-y-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Faster troubleshooting of cluster issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quick pod inspection without SSH</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Visual cluster health monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-cluster management from one UI</span>
                </li>
              </ul>
            </div>

            {/* Developers */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--secondary)' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>Developers</h3>
              </div>
              <ul className="space-y-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Understand K8s without learning kubectl</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Debug application issues in pods</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Check logs from anywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Learn from AI explanations</span>
                </li>
              </ul>
            </div>

            {/* Teams */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent)' }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>Teams</h3>
              </div>
              <ul className="space-y-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Onboard new developers faster</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reduce dependency on senior DevOps</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Centralized cluster access management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Audit trail for compliance</span>
                </li>
              </ul>
            </div>

            {/* Consultants/MSPs */}
            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--success)' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>Consultants & MSPs</h3>
              </div>
              <ul className="space-y-3" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Manage multiple client clusters</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quick assessments and debugging</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Generate reports from topology view</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Safe read-only access to client clusters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Security First, Always
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Built with security as a core principle, not an afterthought
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Read-Only Enforcement</h3>
              <p style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Only safe kubectl commands allowed. No delete, apply, or modify operations. Can't accidentally break production.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>AES-128 Encryption</h3>
              <p style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Kubeconfigs encrypted at rest with AES-128 + HMAC. Credentials never exposed in logs or stored in plain text.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(0, 180, 216, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--secondary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>Audit Logging</h3>
              <p style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                Complete activity trail for compliance. See what users are doing with detailed audit logs.
              </p>
            </div>
          </div>
        </div>
              </section>

      <Footer />
    </>
  );
}

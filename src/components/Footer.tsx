import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-auto" style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--card-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                <Image
                                src="/kube.svg"
                                alt="KubeMate"
                       width={80}
                                height={80}
                                className="w-full h-full object-cover"
                              />
              </div>
              <span className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>KubeMate</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
              Talk to your Kubernetes cluster, don't command it. AI-powered cluster management made simple.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#features" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#security" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Security
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs/faq" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs/features/ai-chat" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  AI Chat Assistant
                </Link>
              </li>
              <li>
                <Link href="/docs/features/topology-viewer" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Topology Viewer
                </Link>
              </li>
              <li>
                <Link href="/docs/features/pod-browser" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Pod Browser
                </Link>
              </li>
              <li>
                <Link href="/docs/deployment" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Deployment
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--foreground)' }}>Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/mehdi-chebbi/k8s-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-[var(--primary)] flex items-center gap-2"
                  style={{ color: 'var(--foreground)', opacity: 0.7 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/docs/features/admin-dashboard" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.7 }}>
                  Admin Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--card-border)' }}>
          <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
            © {new Date().getFullYear()} KubeMate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm transition-colors hover:text-[var(--primary)]" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
              License
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

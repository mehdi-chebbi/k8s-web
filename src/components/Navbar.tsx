'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/contact') return pathname === '/contact';
    if (href.startsWith('/docs/faq')) return pathname === '/docs/faq';
    return false;
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/docs/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--card-border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 9V15H9V17H2V7H9V9H4Z" fill="white" />
                <path d="M11 7V17H13V13H17V17H19V7H17V11H13V7H11Z" fill="white" />
                <circle cx="10" cy="6" r="2" fill="white" />
                <circle cx="14" cy="18" r="2" fill="white" />
              </svg>
            </div>
            <span className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>Kubemate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  isActive(link.href)
                    ? 'text-[var(--primary)] font-medium'
                    : 'hover:text-[var(--primary)]'
                }`}
                style={{ color: isActive(link.href) ? 'var(--primary)' : 'var(--foreground)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/docs"
              className="px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--card-bg)', color: 'var(--foreground)', border: '1px solid var(--card-border)' }}
            >
              Documentation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg" style={{ color: 'var(--foreground)' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

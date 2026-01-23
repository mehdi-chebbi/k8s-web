'use client';

import Link from 'next/link';
import Image from 'next/image';
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
       <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
  <Image
    src="/kube.svg"
    alt="KubeMate"
    width={80}
    height={80}
    className="object-cover"
  />
  <span
    className="text-4xl font-bold"
    style={{ color: 'var(--foreground)' }}
  >
    KubeMate
  </span>
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

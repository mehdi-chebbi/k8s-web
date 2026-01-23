'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              Get in Touch
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Have questions about KubeMate? We'd love to hear from you.
            </p>
          </div>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mb-8 p-6 rounded-2xl" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--success)' }}>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-semibold" style={{ color: 'var(--success)' }}>
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--card-border)'
                  }}
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--card-border)'
                  }}
                  placeholder="you@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--card-border)'
                  }}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                  <option value="enterprise">Enterprise Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 resize-none"
                  style={{
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--card-border)'
                  }}
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>Email</h3>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                support@KubeMate.io
              </p>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                We typically respond within 24 hours
              </p>
            </div>

            <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--secondary)' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>GitHub</h3>
              </div>
              <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                github.com/mehdi-chebbi/k8s-web
              </p>
              <p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                Star us, report issues, contribute
              </p>
            </div>
          </div>

          {/* Community Section */}
          <div className="mt-12 p-8 rounded-2xl" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)', border: '1px solid var(--primary)' }}>
            <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--foreground)' }}>
              Join Our Community
            </h2>
            <p className="text-center leading-relaxed mb-6" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Connect with other Kubernetes enthusiasts and get help from the community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--foreground)', border: '1px solid var(--card-border)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--card-bg)', color: 'var(--foreground)', border: '1px solid var(--card-border)' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

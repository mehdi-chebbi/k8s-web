'use client';

import Image from 'next/image';

export default function DeploymentPage() {
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Deployment</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Choose your deployment method.</p>
      
      <div className="space-y-4">
        <a href="/docs/deployment/docker-compose" className="block p-6 rounded-xl hover:scale-[1.02] transition-transform" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>Docker Compose</h2>
          <p style={{ color: 'var(--foreground)', opacity: 0.7 }}>Recommended for small to medium teams and quick setup.</p>
          <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
            <svg className="w-5 h-5" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Quick setup • Single server • Development ready
          </div>
        </a>
        
        <a href="/docs/deployment/manual" className="block p-6 rounded-xl hover:scale-[1.02] transition-transform" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--warning)' }}>Manual Deployment</h2>
          <p style={{ color: 'var(--foreground)', opacity: 0.7 }}>For custom configurations and separate component management.</p>
          <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
            <svg className="w-5 h-5" style={{ color: 'var(--warning)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35 0a1.724 1.724 0 00-1.065-2.572l-5 5v-5z" />
            </svg>
            Full control • Custom setup • Advanced users
          </div>
        </a>
        
        <a href="/docs/deployment/kubernetes" className="block p-6 rounded-xl hover:scale-[1.02] transition-transform" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--primary)' }}>Kubernetes Deployment</h2>
          <p style={{ color: 'var(--foreground)', opacity: 0.7 }}>Run Kubemate on Kubernetes itself for production HA.</p>
          <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
            <Image
              src="/icon.png"
              alt="Kubemate"
              width={20}
              height={20}
              className="w-5 h-5 rounded"
              style={{ color: 'var(--primary)' }}
            />
            Production ready • High availability • Cloud native
          </div>
        </a>
      </div>
    </div>
  );
}

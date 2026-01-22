export default function TopologyViewerPage() {
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
      <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>Topology Viewer</h1>
      <p className="text-xl mb-8" style={{ color: 'var(--foreground)', opacity: 0.8 }}>Interactive 2D visualization of your cluster.</p>
      <div className="p-6 rounded-2xl mb-8" style={{ backgroundColor: 'rgba(0, 180, 216, 0.1)', border: '1px solid var(--secondary)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>View Modes</h2>
        <ul className="space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>• Nodes View: Shows master/worker nodes with health status</li>
          <li>• Pods View: Pod distribution across nodes, namespace grouping</li>
          <li>• Services View: Service-to-pod connections</li>
        </ul>
      </div>
      <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
        <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>Features</h2>
        <ul className="space-y-2" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
          <li>• Drag and drop nodes to customize layout</li>
          <li>• Real-time data refresh</li>
          <li>• Color-coded health indicators</li>
          <li>• Click-to-inspect for details</li>
        </ul>
      </div>
    </div>
  );
}

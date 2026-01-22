export default function FAQPage() {
  const faqs = [
    {
      question: "What is Kubemate?",
      answer: "Kubemate is an AI-powered Kubernetes assistant that lets you interact with your Kubernetes clusters using natural language. Instead of memorizing kubectl commands, you can simply ask questions in plain English and get instant, intelligent answers about your clusters. It combines ChatGPT-like AI with powerful Kubernetes visualization tools to make cluster management effortless."
    },
    {
      question: "Do I need to know kubectl to use Kubemate?",
      answer: "No! Kubemate is specifically designed for users who want to interact with Kubernetes without memorizing complex kubectl commands. The AI understands plain English questions like 'Why is my nginx pod crashing?' or 'Show me all failing deployments' and translates them into appropriate kubectl commands automatically. You only need basic knowledge of what you want to accomplish."
    },
    {
      question: "Is Kubemate safe to use with production clusters?",
      answer: "Yes, Kubemate is designed with security as a top priority. By default, all kubectl operations are restricted to read-only commands (get, describe, logs, top, events). This means you can safely inspect and troubleshoot your production clusters without any risk of accidental modifications. For teams that need write access, optional authentication and authorization controls are available."
    },
    {
      question: "What LLM providers does Kubemate support?",
      answer: "Kubemate integrates with OpenRouter API, which gives you access to multiple AI models through a single interface. This includes OpenAI's GPT models, Anthropic's Claude, and other leading LLM providers. You can choose your preferred model based on your needs, budget, or existing API subscriptions. The configuration is done through the Admin Dashboard."
    },
    {
      question: "How does Kubemate connect to my Kubernetes cluster?",
      answer: "Kubemate uses standard kubeconfig files to connect to your Kubernetes clusters. You can upload your kubeconfig file through the Admin Dashboard, and it will be stored securely with encryption. The application supports multiple kubeconfigs, allowing you to manage and switch between different clusters (dev, staging, production) from a single interface."
    },
    {
      question: "Can I use Kubemate with multiple clusters?",
      answer: "Absolutely! Kubemate has full multi-cluster support. You can add multiple kubeconfig files, each representing a different cluster. The Admin Dashboard lets you easily switch between clusters, and the AI Chat Assistant automatically operates in the context of your currently selected cluster. This makes managing complex multi-cluster environments much easier."
    },
    {
      question: "What can I do with the AI Chat Assistant?",
      answer: "The AI Chat Assistant helps you understand and troubleshoot your clusters through natural language. You can ask about pod status, resource usage, deployment issues, service connectivity, and much more. Common questions include: 'Show me all pods with high CPU usage', 'Why is my deployment stuck in Pending state?', 'Check logs for the frontend pods', and 'How many nodes are unhealthy?'. The AI maintains context across conversations, allowing for detailed follow-up questions."
    },
    {
      question: "What is the Topology Viewer?",
      answer: "The Topology Viewer is an interactive 2D visualization of your Kubernetes cluster. Instead of parsing through text output from kubectl commands, you can see your entire cluster architecture at a glance. It shows nodes, pods, and their relationships in a visual format with color-coded health indicators. You can drag and drop nodes to customize the layout, click on any element to see detailed information, and the visualization updates in real-time."
    },
    {
      question: "How does the Pod Browser work?",
      answer: "The Pod Browser gives you a read-only interface to inspect your pods. You can browse pods by namespace, view their status, check resource consumption, read logs, and even browse files inside containers - all without ever touching kubectl. Everything is designed to be safe and read-only, so you can investigate issues in production without risk. It's like having a GUI for kubectl get pods, kubectl describe pod, and kubectl logs combined."
    },
    {
      question: "What deployment options are available?",
      answer: "Kubemate offers multiple deployment options to fit your needs: (1) Docker Compose - the easiest way to get started locally, (2) Manual Deployment - gives you full control over the installation process, (3) Kubernetes Deployment - deploy Kubemate itself on Kubernetes for production use. Each option is documented with step-by-step instructions in the Deployment section."
    },
    {
      question: "How is my data protected?",
      answer: "Kubemate takes data protection seriously. Kubeconfig files are encrypted at rest using industry-standard encryption. All cluster communications use secure protocols. The application itself is read-only by default, preventing accidental modifications. For enterprise deployments, additional security features include authentication, access logging, and the ability to run Kubemate entirely within your private infrastructure without external dependencies."
    },
    {
      question: "Is Kubemate open source?",
      answer: "Yes! Kubemate is 100% open source and released under the MIT license. This means you can freely use, modify, and distribute it for both personal and commercial purposes. The source code is available on GitHub, and contributions from the community are welcome. Open source ensures transparency, allows you to audit the code for security, and means you're not locked into any vendor."
    },
    {
      question: "What are the system requirements?",
      answer: "The basic requirements are minimal: (1) A Kubernetes cluster to connect to, (2) A valid kubeconfig file with read permissions, (3) An API key from an LLM provider (OpenRouter or compatible). Kubemate itself can run on any modern system with Docker support. For the Kubemate application, resource requirements are modest - a standard development machine or small cloud instance is sufficient. Detailed requirements are documented in the Requirements section."
    },
    {
      question: "Can I run Kubemate offline or air-gapped?",
      answer: "Yes, Kubemate can be deployed in air-gapped environments. The application can be run entirely within your private network. For the AI features, you would need either (1) an internal LLM service that's compatible with the OpenRouter API format, or (2) internet connectivity to reach external LLM providers. The Kubernetes connectivity doesn't require internet access as long as your cluster is reachable from the Kubemate instance."
    },
    {
      question: "How do I get started?",
      answer: "Getting started with Kubemate is straightforward: (1) Clone the repository and deploy using your preferred method (Docker Compose is recommended for first-time users), (2) Upload your kubeconfig file through the Admin Dashboard, (3) Add your LLM provider API key in the settings, (4) Start chatting with your cluster! That's really all you need. The Getting Started guide in the documentation walks you through each step with detailed instructions."
    },
    {
      question: "Does Kubemate store my conversation history?",
      answer: "Yes, Kubemate maintains conversation history for each chat session. This allows the AI to maintain context across follow-up questions, making conversations more natural and productive. The history is stored securely and can be managed through the Admin Dashboard. You can delete conversations, create new sessions, and control how long history is retained. For compliance-sensitive environments, you can configure shorter retention periods or disable history entirely."
    },
    {
      question: "Can I customize which kubectl commands are allowed?",
      answer: "By default, Kubemate only allows read-only commands (get, describe, logs, top, events, etc.). This whitelist can be customized for your specific security requirements. If your team needs to enable certain write operations, you can configure which commands are permitted. This is done through configuration files and requires careful consideration of security implications. The documentation provides guidance on safe command whitelisting."
    },
    {
      question: "What kind of support is available?",
      answer: "As an open source project, Kubemate is supported by the community. You can file issues on GitHub, participate in discussions, and contribute improvements. For enterprise customers who need guaranteed support, commercial support options are available. The documentation is comprehensive and covers most common use cases. Additionally, the community is active and responsive to questions on GitHub and other platforms."
    },
    {
      question: "Can I extend Kubemate with custom features?",
      answer: "Yes, Kubemate is designed to be extensible. Being open source, you can modify the codebase to add custom features. The architecture separates concerns clearly, making it easier to add new visualizations, extend the AI capabilities, or integrate with other tools. If you build something useful, consider contributing it back to the community! The project welcomes pull requests and feature requests."
    }
  ];

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
        Frequently Asked Questions
      </h1>

      <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
        Got questions about Kubemate? We've got answers. Here are the most common questions people ask.
      </p>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl transition-all hover:shadow-xl"
            style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
          >
            <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
              {faq.question}
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-2xl" style={{ backgroundColor: 'rgba(50, 108, 229, 0.1)', border: '1px solid var(--primary)' }}>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground)' }}>
          <strong>Still have questions?</strong> Feel free to open an issue on GitHub or check out our detailed documentation for more in-depth information.
        </p>
      </div>
    </div>
  );
}

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const visionblock3md = `# System Architecture (Big Picture)

Users
  │
  ▼
Application
  ├─ Business logic
  ├─ Interfaces
  └─ APIs
  │
  ▼
Infrastructure
  ├─ Compute
  ├─ Networking
  └─ Storage
  │
  ▼
Automation
  ├─ CI/CD pipelines
  ├─ Infrastructure as Code
  └─ Version control
  │
  ▼
Observability
  ├─ Logs
  ├─ Metrics
  └─ Traces
  │
  ▼
Evolution
  └─ Designed for future scale
`;

export function VisionBlock3MD() {
    return (
        <SyntaxHighlighter
            language="markdown"
            style={vscDarkPlus}
            customStyle={{ borderRadius: 16, fontSize: 'var(--font-size-xxs)', margin: 0 }}
            className="codeBlock"
        >
            {visionblock3md}
        </SyntaxHighlighter>
    );
}

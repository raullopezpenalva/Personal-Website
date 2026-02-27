import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const proyectsPersonalWebsiteCompactMD = `User
  │
Frontend (React)
  │
Reverse Proxy (Nginx)
  │
Docker Container
  │
Future Architecture
  ├─ Newsletter Service (Spring Boot)
  ├─ Auth Service
  ├─ Admin Panel (Private)
  │
CI/CD Pipeline
  ├─ Build
  ├─ Test
  ├─ Docker Build
  └─ Deploy on merge
`;

export function ProyectsPersonalwebsiteCompactMD() {
    return (
        <SyntaxHighlighter
            language="markdown"
            style={vscDarkPlus}
            customStyle={{ borderRadius: 16, fontSize: 'var(--font-size-xxs)', margin: 0 }}
            className="codeBlock"
        >
            {proyectsPersonalWebsiteCompactMD}
        </SyntaxHighlighter>
    );
}

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const proyectsWeaverCompactMD = `
    

    Users (physical communities)
        │
    Frontend (Mobile App)
        │
    API Layer
        │
    Core Services
    - User Service
    - Auth Service
    - Community Logic
        │
    Database


    
`;

export function ProyectsWeaverCompactMD() {
    return (
        <SyntaxHighlighter
            language="markdown"
            style={vscDarkPlus}
            customStyle={{ borderRadius: 16, fontSize: 'var(--font-size-xxs)', margin: 0 }}
            className="codeBlock"
        >
            {proyectsWeaverCompactMD}
        </SyntaxHighlighter>
    );
}

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const proyectsHomelabCompactMD = `Internet
   │
UDM SE (Gateway / Firewall / VLANs)
   │
Reverse Proxy (Nginx)
   │
Docker Network
   ├─ Personal Website
   ├─ Newsletter Service
   ├─ Wiki / Tools
   │
Monitoring & Logs
   │
Energy & IoT VLAN
   ├─ Tesla Powerwall
   ├─ Solax Inverter
   └─ IoT Devices
`;

export function ProyectsHomelabCompactMD() {
    return (
        <SyntaxHighlighter
            language="markdown"
            style={vscDarkPlus}
            customStyle={{ borderRadius: 16, fontSize: 'var(--font-size-xxs)', margin: 0 }}
            className="codeBlock"
        >
            {proyectsHomelabCompactMD}
        </SyntaxHighlighter>
    );
}

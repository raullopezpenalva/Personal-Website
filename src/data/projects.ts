export interface Project {
  id: string;
  compactMD: string;
  externalLink?: string;
  githubLink?: string;
}

const homelabCompactMD = `Internet
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

const personalWebsiteCompactMD = `User
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

const weaverCompactMD = `Users (physical communities)
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

export const projects: Project[] = [
  {
    id: 'homelab',
    compactMD: homelabCompactMD,
  },
  {
    id: 'personalwebsite',
    compactMD: personalWebsiteCompactMD,
    githubLink: 'https://github.com/raullopezpenalva/Personal-Website',
  },
  {
    id: 'weaver',
    compactMD: weaverCompactMD,
    externalLink: 'https://weaver.cat',
  },
];

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const pipelineYaml = `# .github/workflows/pipeline.yaml
name: CI/CD Pipeline

on:
    push:
        branches: [ main ]

environment:
    REGISTRY: ghcr.io
    IMAGE_NAME: my-app
jobs:
    build:
        - npm ci
        - npm run build
        - npm run test
    deploy:
        - docker build
        - docker push ghcr.io/...
        - deploy on merge
`;

export function PipelineYaml() {
    return (
        <SyntaxHighlighter
            language="yaml"
            style={vscDarkPlus}
            customStyle={{ borderRadius: 16, fontSize: 'var(--font-size-xs)', margin: 0 }}
            className="codeBlock"
        >
            {pipelineYaml}
        </SyntaxHighlighter>
    );
}
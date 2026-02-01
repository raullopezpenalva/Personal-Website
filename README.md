# Personal Website

This repository contains the source code for my personal website, built as static application using React and Vite.

The website serves as a professional portfolio and a space to present my background, experience, and technical perspective.

Beyond being a portfolio, this project is also an exercise in clean frontend architecture, component-driven design, and modern deployment workflows.

## 🎯 Purpose

The purpose of this project is to serve as a clear and honest representation of my professional profile through a simple, well-structured personal website.

Rather than focusing on visual complexity or unnecessary features, the website is intentionally designed to prioritize clarity, readability, and long-term maintainability.

From a technical perspective, this project is used as a controlled environment to apply and refine frontend fundamentals such as component composition, layout systems, design consistency, and clean project structure, as well as to experiment with modern build and deployment workflows.

The scope of the project is deliberately limited to a static website, allowing full focus on design decisions, code quality, and infrastructure practices without the overhead of backend complexity.

## 🛠 Technology Stack

This project is built using a small and intentionally selected technology stack, chosen to keep the website fast, maintainable, and easy to evolve over time.

- **React**  
  Used for building a component-driven UI with clear separation of concerns and reusable layout and content components.

- **Vite**  
  Provides a fast development environment and optimized production builds with minimal configuration overhead.

- **TypeScript**  
  Adds type safety and improves code clarity, refactoring confidence, and long-term maintainability.

- **CSS (custom, utility-free)**  
  Styling is handled using plain CSS with a focus on layout primitives, spacing consistency, and predictable visual behavior, avoiding heavy frameworks or utility-first abstractions.

- **Git & GitHub**  
  Used for version control, code review, and as the foundation for the deployment workflow.

## 🗂 Project Structure

The codebase is organized to keep concerns separated and make the UI easy to evolve over time. The structure follows a component-driven approach, distinguishing between layout components, UI primitives, higher-level patterns, and domain-specific components.

### Root

- `index.html`, `vite.config.ts`, `tsconfig*.json`  
  Project entry and tooling configuration (Vite + TypeScript).

- `eslint.config.js`  
  Linting configuration for consistent code quality.

- `public/`  
  Static public assets.

### Source (`src/`)

- `main.tsx`  
  Application entry point. Routing is initialized from here using React Router.

- `router.tsx`  
  Centralized route definitions and page mapping.

- `pages/`  
  Route-level components (pages). Each file represents a top-level view:
  `HomePage`, `AboutPage`, `PortfolioPage`, `VisionPage`, `BlogPage`, `ContactPage`.

- `components/`  
  Reusable UI components, grouped by responsibility:

  - `components/layout/`  
    App shell and layout building blocks (`Layout`, `Header`, `Footer`, `Container`).

  - `components/ui-primitives/`  
    Low-level building blocks used everywhere (`Text`, `Stack`, `Grid`, `Button`, `icons/`).
    These components are intentionally minimal and composable.

  - `components/ui-patterns/`  
    Higher-level composition patterns built from primitives (`Section`, `SubSection`, `BulletList`, `Bullet`).
    They encode consistent layout and content patterns across pages.

  - `components/domain/`  
    Components tied to content/domain concepts (e.g. `ServiceCard`), kept separate from generic UI.

- `data/`  
  Static content/data structures used by the UI (e.g. `services.ts`).

### Styling (`src/styles/`)

Styles are organized to mirror the component structure and keep styling predictable:

- `layout.css`, `pages.css`, `components.css`  
  High-level style entry points.

- `layouts/`  
  Layout-specific styles (`Header.css`, `Footer.css`, `Container.css`).

- `pages/`  
  Page-specific styles (e.g. `HomePage.css`).

- `components/`  
  Component-category style folders mirroring `components/` (domain/icons/ui-patterns/ui-primitives).

### Testing (`src/tests/`)

- `tests/setup.ts` and `App.test.tsx`  
  Test setup and example tests to validate key behavior.

## 🚀 Local Development

### Requirements
- **Node.js** (recommended: LTS)
- **npm**

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview the production build locally
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

#### Fix lint issues automatically:
```bash
npm run lint:fix
```

### Test

#### Run tests in watch mode:
```bash
npm test
```

#### Run tests once:
```bash
npm run test:run
```

#### Run CI-style tests with coverage:
```bash
npm run test:ci
```





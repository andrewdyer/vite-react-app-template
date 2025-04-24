![Vite + React App Template](https://raw.githubusercontent.com/andrewdyer/andrewdyer/refs/heads/main/assets/images/covers/vite-react-app-template.png)

# Vite + React App Template

A template for building frontend applications using [Vite](https://vitejs.dev/) and [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/).

## ⚖️ License

Licensed under the [MIT license](https://opensource.org/licenses/MIT) and is free for private or commercial projects.

## ✨ Introduction

This template enhances the official Vite template for React with TypeScript and SWC (Speedy Web Compiler) by integrating additional tools and configurations, while implementing an architecture that focuses on clarity, modularity, and maintainability. It serves the purpose of providing a solid foundation to help you hit the ground running and save valuable time when starting a new project.

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 20.x (as specified in [.nvmrc](.nvmrc)) is required.
- **Yarn**: Dependency management tool for Node.js.
- **Docker** (optional): For containerizing the application.

## 🛠️ Features

This template includes the following additional tools and configurations:

- [Vitest](https://vitest.dev/) for unit testing, along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components, Vitest UI, and coverage reports.
- [Storybook](https://storybook.js.org/) for building and testing UI components in isolation.
- [React Router](https://reactrouter.com/) for client-side routing.
- [Vite PWA](https://vite-pwa-org.netlify.app/) (Progressive Web App) support for offline capabilities and better performance on mobile devices.
- [Prettier](https://prettier.io/) for consistent code formatting across the codebase.
- [Husky](https://typicode.github.io/husky/#/) for Git hooks to automate tasks such as linting, formatting, type-checking, and testing before commits.
- CI (Continuous Integration) setup with [GitHub Actions](https://github.com/features/actions) for automated testing, building, and type-checking.
- [Docker](https://www.docker.com/) support for containerizing the application.

## 🏗️ Architecture

The primary source code is located in the `src/` folder, organized into two key directories: `app/` and `packages/`.

Here's a breakdown of the directory structure:

```plaintext
src/
├── app/                     # Core application code
│   ├── providers/           # Context providers
│   ├── router/              # Application routing
│   ├── App.tsx              # Main App component
│   └── index.tsx            # Entry point of the application
│
├── packages/                # Feature-specific code
│   └── demo/                # Demo package
│       ├── assets/          # Static assets for the demo package
│       ├── components/      # Components specific to the demo package
│       └── pages/           # Pages specific to the demo package
│
└── setupTests.ts            # Test setup file
```

The `app/` directory contains core application code, including the main `App` component, providers and router configuration. These elements collectively establish the application's structure. The `index.tsx` file serves as the entry point, where the `App` component is rendered into the DOM.

The `packages/` directory is designed for feature-specific code. Each package is organized into its own subfolder (e.g., `demo/`), containing related components. You're not limited to any structure — feel free to add folders or adjust as needed for your package. This modular approach ensures that each package remains encapsulated and easy to maintain, promoting scalability as the project grows.

To simplify imports and maintain organization, path aliases are configured in both `vite.config.ts` and `tsconfig.app.json`. By default, the `@` alias points to `app/`, and `@package-name` patterns are used for subdirectories in `packages/` (e.g., `@demo`). These aliases help keep imports clean, consistent, and scalable as the project grows.

## 🚀 Getting Started

If you like what you've seen so far and think this setup fits your needs, you can quickly get started by clicking the **Use this template** button at the top of the repository on GitHub.

### Quick Start

Once you've created your project, follow these steps to get up and running:

1. **Clone Your Repository**

   Clone your repository and navigate into the project directory:

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_PROJECT.git
   cd YOUR_PROJECT
   ```

2. **Install Dependencies**

   Ensure you have the [required tools](#-prerequisites) installed and then run:

   ```bash
   yarn install
   ```

3. **Start the Development Server**

   Start the Vite development server:

   ```bash
   yarn start
   ```

Your development environment is now ready and your application is running at http://localhost:5173.

> Note: For a more in-depth setup guide, including details on running tests and Storybook, check out the [development setup](./CONTRIBUTING.md#development-setup) section in the contributing documentation.

## 🐳 Dockerizing

You can containerize your application with Docker for consistent deployment across environments.

1. **Build the Docker Image**

   Build the Docker image using the Dockerfile in the project root:

   ```bash
   docker build -t vite-react-app-template .
   ```

2. **Run the Docker Container**

   Start a container from the built image, mapping port `80` in the container to port `8080` on your local machine:

   ```bash
   docker run --name vite-react-app -p 8080:80 -d vite-react-app-template
   ```

Your application will now be accessible at http://localhost:8080.

## 🤝 Contributing

Before contributing to this project, please refer to the [contributing](./CONTRIBUTING.md) documentation.

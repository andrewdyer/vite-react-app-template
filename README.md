# Vite + React App Template

A template for building frontend applications using [Vite](https://vitejs.dev/) and [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/).

## License

Licensed under the [MIT license](https://opensource.org/licenses/MIT) and is free for private or commercial projects.

## Introduction

This template enhances the official Vite template for React with TypeScript and SWC (Speedy Web Compiler) by integrating additional tools and configurations, while implementing an architecture that focuses on clarity, modularity, and maintainability. It serves the purpose of providing a solid foundation to help you hit the ground running and save valuable time when starting a new project.

### Project Features Overview

This template includes the following additional tools and configurations:

- [Vitest](https://vitest.dev/) for unit testing, along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components, Vitest UI, and coverage reports.
- [Storybook](https://storybook.js.org/) for building and testing UI components in isolation.
- [React Router](https://reactrouter.com/) for client-side routing.
- [Redux](https://redux.js.org/) for state management, integrated with [Redux Toolkit](https://redux-toolkit.js.org/) and [React Redux](https://react-redux.js.org/).
- [Vite PWA](https://vite-pwa-org.netlify.app/) (Progressive Web App) support for offline capabilities and better performance on mobile devices.
- [Prettier](https://prettier.io/) for code formatting.
- [Husky](https://typicode.github.io/husky/#/) for Git hooks to automate tasks such as linting, formatting, type-checking, and testing before commits.
- CI (Continuous Integration) setup with [GitHub Actions](https://github.com/features/actions) for automated testing, building, and type-checking.
- [Docker](https://www.docker.com/) support for containerizing the application.

### Project Architecture Overview

The primary source code is located in the `src/` folder, organized into two key directories: `app/` and `modules/`.

Here’s a breakdown of the directory structure:

```plaintext
src/
├── app/                     # Core application code
│   ├── components/          # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── providers/           # Context providers
│   ├── router/              # Application routing
│   ├── store/               # Redux store configuration
│   ├── App.tsx              # Main App component
│   └── index.tsx            # Entry point of the application
├── modules/                 # Feature-specific code
│   └── demo/                # Demo feature module
│       ├── assets/          # Static assets for the demo module
│       ├── components/      # Components specific to the demo module
│       ├── hooks/           # Custom hooks for the demo module
│       ├── pages/           # Pages specific to the demo module
│       └── slices/          # Redux slices for the demo module
└── setupTests.ts            # Test setup file
```

The `app/` directory contains core application code, including the `App` component, components, hooks, providers, routing, and store configuration. Together, these elements set up the application's overall structure. The `index.tsx` file serves as the entry point, where the `App` component is rendered into the DOM.

The `modules/` directory is designed for feature-specific code. Each feature is organized into its own subfolder (e.g., `demo/`), containing related components and pages. You’re not limited to these — feel free to add folders or any other structure that suits your feature’s needs. This modular approach ensures that each feature remains encapsulated and easy to maintain, promoting scalability as the project grows.

To simplify imports and maintain organization, path aliases are configured in both `vite.config.ts` and `tsconfig.json`. By default, the `@` alias points to `app/`, and `@module-name` patterns are used for subdirectories in `modules/` (e.g., @demo). These aliases help keep imports clean, consistent, and scalable as the project grows.

### When to use

If you like what you’ve seen so far and think this setup fits your needs, you can quickly get started by clicking the **Use this template** button at the top of the repository on GitHub.

## Available Scripts

| Script                 | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `yarn start`           | Starts the development server using Vite.                    |
| `yarn build`           | Builds the project using TypeScript and Vite.                |
| `yarn build:storybook` | Builds the Storybook instance.                               |
| `yarn start:storybook` | Starts the Storybook server on port 6006.                    |
| `yarn test`            | Runs the tests using Vitest.                                 |
| `yarn test:watch`      | Runs the tests in watch mode using Vitest.                   |
| `yarn test:coverage`   | Runs the tests and generates a coverage report using Vitest. |
| `yarn test:ui`         | Runs the tests with the Vitest UI.                           |
| `yarn lint`            | Lints the project using ESLint.                              |
| `yarn prettier`        | Formats the code using Prettier.                             |
| `yarn preview`         | Previews the built project using Vite.                       |

## Dockerizing

### Building the Docker Image

To build a Docker image for the application, run the following command:

```sh
docker build -t vite-react-app .
```

This command creates a Docker image named `vite-react-app` using the Dockerfile in the current directory.

### Running the Docker Container

To run a container from the previously built Docker image, use the following command:

```sh
docker run --name my-app --publish 8080:80 --detach vite-react-app
```

This command runs a container named `my-app` from the `vite-react-app` image in detached mode.

## Learn More

Before contributing to this project, please refer to the [contributing](./CONTRIBUTING.md) documentation.

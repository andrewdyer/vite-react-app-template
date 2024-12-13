# Vite + React App Template

A template for building frontend applications using Vite and React with TypeScript.

This template is built using the official Vite template for React with TypeScript and SWC (Speedy Web Compiler) and includes the following extended setup:

- [Prettier](https://prettier.io/) for code formatting.
- [Vitest](https://vitest.dev/) for unit testing, along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components, Vitest UI, and coverage reports.
- [Storybook](https://storybook.js.org/) for building and testing UI components in isolation.
- [React Router](https://reactrouter.com/) for routing with `react-router-dom`.
- [Vite PWA](https://vite-pwa-org.netlify.app/) (Progressive Web App) support for offline capabilities and better performance on mobile devices.

## Project Structure

This project emphasizes clarity, modularity, and separation of concerns.

The entry point of the application is `src/main.tsx`, where initialization and execution begin.

The `src/app/` directory contains core configuration, including the root component, routing, and global providers. This directory sets up the application’s overall structure.

Feature-specific code resides in `src/modules/`. Each module has its own components, layouts, pages, hooks, and related resources. This modular approach makes the project easier to expand and maintain.

Shared resources, such as utilities and components, are located in `src/shared/`, promoting consistency and adhering to the DRY (Don’t Repeat Yourself) principle.

```text
my-project/
├── src/
│   ├── app/
│   │   └── core/
│   ├── modules/
│   │   └── demo/
│   │       ├── assets/
│   │       ├── components/
│   │       └── pages/
│   ├── shared/
│   │   └── components/
│   ├── main.ts
│   ├── setupTests.ts
│   └── vite-env.d.ts
├── package.json
├── index.html
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.config.ts
```

To simplify imports and maintain organization, path aliases are configured in both `vite.config.ts` and `tsconfig.json`, allowing key directories within the `src/` folder to be referenced without complex relative paths.

The `@` alias points to `src/app/` for core application logic, `@shared` is used to access `src/shared/`, while subdirectories in `src/modules/` use the pattern `@module-name` (e.g., @demo). These aliases ensure consistent and scalable imports, making it easier to reference modules throughout the codebase.

## Available Scripts

### `yarn dev`

Starts the development server using Vite.

### `yarn build`

Builds the project using TypeScript and Vite.

### `yarn build:storybook`

Builds the Storybook instance.

### `yarn start:storybook`

Starts the Storybook server on port 6006.

### `yarn test`

Runs the tests using Vitest.

### `yarn test:watch`

Runs the tests in watch mode using Vitest.

### `yarn test:coverage`

Runs the tests and generates a coverage report using Vitest.

### `yarn test:ui`

Runs the tests with the Vitest UI.

### `yarn lint`

Lints the project using ESLint.

### `yarn prettier`

Formats the code using Prettier.

### `yarn preview`

Previews the built project using Vite.

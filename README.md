# Vite + React App Template

A template for building frontend applications using Vite and React with TypeScript.

This template is built using the official Vite template for React with TypeScript and SWC (Speedy Web Compiler) and includes the following extended setup:

- Vite aliases for cleaner imports.
- [Prettier](https://prettier.io/) for code formatting.
- [Vitest](https://vitest.dev/) for unit testing, along with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing React components, Vitest UI, and coverage reports.
- [Storybook](https://storybook.js.org/) for building and testing UI components in isolation.
- [React Router](https://reactrouter.com/) for routing with `react-router-dom`.

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

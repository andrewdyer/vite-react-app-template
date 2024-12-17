# Contributing

Thank you for your interest in contributing! We welcome improvements and suggestions to make this project even better. Please follow the guidelines below for a smooth experience.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Development Setup](#development-setup)
3. [Upgrading Dependencies](#upgrading-dependencies)
4. [Coding Standards](#coding-standards)
5. [Commit Guidelines](#commit-guidelines)
6. [Testing](#testing)
7. [Submitting Changes](#submitting-changes)
8. [Creating a Module](#creating-a-module)

## Code of Conduct

Please adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) in all interactions. Respectful and inclusive behavior is expected from all contributors.

## Development Setup

1. Begin by cloning the repository and navigating to its directory.
2. Install all project dependencies to ensure a complete setup with `yarn install`.
3. Start the development server using `yarn start` to begin working on the project.
4. Start Storybook using `yarn start:storybook` to develop and test UI components in isolation.
5. Run tests with `yarn test` to verify that the environment is working correctly.

## Upgrading Dependencies

Keeping dependencies up-to-date is crucial for maintaining the security and performance of the project. Follow these steps to upgrade dependencies:

1. Check for outdated dependencies with `yarn outdated`.
2. Update dependencies using all with `yarn upgrade` or update a specific package with `yarn add <package-name>@latest`.
3. Ensure everything works after the upgrade by running the tests with `yarn test`.
4. Make sure the `yarn.lock` file is updated with the latest dependency versions by running `yarn install`.
5. Commit the changes to the repository with a clear commit message.
6. Push the changes to your branch and create a pull request for review.

## Coding Standards

To maintain code quality and consistency, please follow these guidelines:

- Run `yarn prettier` to format code using Prettier and `yarn lint` for linting with ESLint.
- Organize imports into clearly separated groups, following this order: React imports, third-party packages, app-level aliases, and local imports within the same module or folder.
- Arrange imports alphabetically by package name to improve readability within each group.

## Commit Guidelines

Use clear, descriptive commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format. Add emojis to quickly convey the type of change if desired, following [Git Commit Emoji](https://dev.andrewdyer.rocks/git-commit-emoji) conventions.

## Testing

Please write tests for any new features or modifications to the project. Run tests using `yarn test` and check coverage using `yarn test:coverage` to ensure all tests pass and that adequate test coverage is maintained before submitting changes. You can also use the Vitest UI with `yarn test:ui` for an interactive testing experience.

For consistency and modularity, organize test code into structured sections. Start with mocks of dependencies or libraries, followed by helper functions that streamline repetitive logic, such as rendering components or managing state. Next, define constants for any mock data or configuration used across tests. Finally, structure the main test suite using descriptive describe blocks and focused test cases to capture specific behaviors and outcomes. This approach ensures your tests are clear, reusable, and easy to maintain.

## Submitting Changes

1. Create a feature branch with `git checkout -b feature/your-feature-name`.
2. Commit your changes following the commit guidelines.
3. Push your branch with `git push origin feature/your-feature-name`.
4. Open a pull request with a title and description that clearly explain your changes.

## Creating a Module

To create a new module in this project, follow these steps:

1. Create a new directory for the module inside `src/modules/`.
2. Add the necessary files and folders based on your feature’s needs, such as components, pages, hooks, and slices.
3. Update `vite.config.ts` and `tsconfig.app.json` to include the module's alias.
4. Start building your module, following the project’s coding standards and adding tests as needed.

This approach keeps the project modular and maintainable as it grows.

# Contributing

Thank you for your interest in contributing! We welcome improvements and suggestions to make this project even better. Please follow the guidelines below for a smooth experience.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Development Setup](#development-setup)
3. [Coding Standards](#coding-standards)
4. [Commit Guidelines](#commit-guidelines)
5. [Testing](#testing)
6. [Submitting Changes](#submitting-changes)

## Code of Conduct

Please adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md) in all interactions. Respectful and inclusive behavior is expected from all contributors.

## Development Setup

1. Begin by cloning the repository and navigating to its directory.
2. Install all project dependencies to ensure a complete setup with `yarn install`.
3. Start the development server using `yarn start` to begin working on the project.
4. Start Storybook using `yarn start:storybook` to develop and test UI components in isolation.
5. Run tests with `yarn test` to verify that the environment is working correctly.

## Coding Standards

To maintain code quality and consistency, please follow these guidelines:

- Run `yarn prettier` to format code using Prettier and `yarn lint` for linting with ESLint.
- Organize imports into clearly separated groups, following this order: React imports, third-party packages, app-level aliases, and local imports within the same package or folder. Within each group, arrange imports alphabetically by package name to improve readability.

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

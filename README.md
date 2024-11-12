# Frontend task

This project is a Vue 3 application built with TypeScript, using Vite as the build tool. The application includes a searchable autocomplete feature with results that dynamically update based on user input. It leverages Pinia for state management, and all components, stores, and utility functions are tested with Vitest for reliable, maintainable code.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Project Structure](#project-structure)

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/download/) (version 18 or later)
- npm (comes with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/abdallahgeha/frontend-task.git
cd frontend-task
npm install
```

### Running the Project

#### Development Server

To start a local development server with hot-reloading, use:

```bash
npm run dev
```

By default, the application runs on `http://localhost:5173`. Open this URL in your browser to see the app.

#### Building for Production

To build the project for production, use:

```bash
npm run build
```

The production-ready files will be generated in the dist folder. You can preview the build with:

```bash
npm run preview
```

### Testing

This project uses Vitest for unit and integration tests, which are configured to work with TypeScript and Vite.

#### Running All Tests

To run all tests, execute:

```bash
npm run test:unit
```

#### Running Tests in Watch Mode

To run tests in watch mode for continuous feedback during development:

```bash
npm run test:unit:watch
```

#### Testing Strategy

- **Unit Tests**: Unit tests cover utility functions, the Pinia store, and helper functions associated with the store.
- **Integration Tests**: The Autocomplete component has integration tests to verify that the UI behaves correctly based on state and props, ensuring interactions like keyboard navigation, input, and display of search results work as expected.

### Project Structure

The project is organized as follows:

```bash
src/
├── assets/            # Static assets (.css)
├── components/        # Vue components
│   ├── autocomplete/  # Folder for Autocomplete component and related subcomponents
│   └── icons/         # Icon components like SearchIcon, CloseIcon, etc.
├── stores/            # Pinia store modules
├── common/            # Common files
│   ├── utils.ts       # Utility functions used across the application
│   ├── constants.ts   # Constants used in the project
│   └── types.ts       # Shared type across all the app
└── App.vue            # Root component
└── main.ts            # Mounting the app
└── index.html         # Base HTML
```

#### Explanation

- **Components**: The Autocomplete component is modularized into smaller components for maintainability. Each subcomponent is focused on a specific task, improving readability and ease of testing.
- **Pinia Store**: Pinia is used to manage the application state, such as search parameters and results. This allows easy reactivity and provides a centralized store for managing search-related state.
- **Utilities**: Functions used in multiple places are stored in utils.ts, promoting reusability and reducing redundancy.

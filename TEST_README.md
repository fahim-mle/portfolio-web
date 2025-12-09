# Test Suite Documentation

This project uses Jest with React Testing Library for comprehensive unit testing.

## Overview

The test suite covers all new and modified TypeScript files in this branch, including:
- UI Components (Button, Input, Card, Container, Textarea, Separator)
- Utility Functions (cn, blog utilities)
- API Routes (auth, test endpoint)
- Authentication Setup (better-auth configuration)
- Middleware (proxy protection)
- Database Scripts (seed, test-db)

## Installation

All testing dependencies are included in package.json. Install them with:

```bash
npm install
```

## Running Tests

### Run all tests
```bash
npm test
```

### Watch mode (for development)
```bash
npm run test:watch
```

### Generate coverage report
```bash
npm run test:coverage
```

### CI mode
```bash
npm run test:ci
```

## Test Structure
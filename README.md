# My Serverless Frontend

A modern frontend application designed to work seamlessly with serverless backends. This project is containerized for development and optimized for deployment in cloud environments.

## Features

- **Serverless Integration**: Connects easily to serverless APIs (e.g., AWS Lambda, Azure Functions).
- **Containerized Development**: Uses a dev container for consistent development environments.
- **Responsive UI**: Built with modern frontend frameworks for mobile and desktop.
- **Environment Configuration**: Supports multiple environments via `.env` files.
- **CI/CD Ready**: Easily integrates with GitHub Actions and other CI/CD pipelines.
- **Extensible Architecture**: Modular codebase for easy feature addition.

## Getting Started

### Prerequisites

- Docker
- Node.js (see `.devcontainer/Dockerfile` for version)
- A serverless backend endpoint (optional for local development)

### Development Setup

1. **Clone the repository**
   ```sh
   git clone <repo-url>
   cd my-serverless-frontend
   ```

2. **Open in Dev Container**
   - Use VS Code's "Remote - Containers" extension or run:
     ```sh
     docker compose up
     ```

3. **Install dependencies**
   ```sh
   npm install
   ```

4. **Start the development server**
   ```sh
   npm run dev
   ```

5. **Open the app**
   - In the dev container, use:
     ```sh
     $BROWSER http://localhost:3000
     ```

### Environment Variables

- Configure API endpoints and secrets in `.env` files.
- Example:
  ```
  API_URL=https://your-serverless-api.com
  ```

## Project Structure

```
/src         # Application source code
/public      # Static assets
/.devcontainer # Dev container config
```

## Developer Guide

### Adding Features

- Place new components in `/src/components`.
- Use environment variables for API endpoints.
- Follow existing code style and linting rules (`npm run lint`).

### Testing

- Run unit tests:
  ```sh
  npm test
  ```
- Add tests in `/src/__tests__`.

### Deployment

- Build for production:
  ```sh
  npm run build
  ```
- Deploy static files to your preferred hosting (e.g., Vercel, Netlify).

### Useful Commands

- **Lint:** `npm run lint`
- **Format:** `npm run format`
- **Test:** `npm test`

## Contributing

1. Fork the repo and create a feature branch.
2. Submit a pull request with a clear description.

## License

Apache 2.0

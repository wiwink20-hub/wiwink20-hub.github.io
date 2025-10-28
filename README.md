# Lumière - Natural Beauty E-commerce

A modern, elegant e-commerce website for natural beauty products built with React, TypeScript, and Tailwind CSS.

## Features

- Modern and responsive design
- Shopping cart functionality
- Product catalog
- Contact page
- Built with shadcn/ui components

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router
- TanStack Query
- Radix UI

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:5000`

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Instructions

1. Go to your GitHub repository settings
2. Navigate to **Pages** in the sidebar
3. Under **Build and deployment**, select:
   - Source: **GitHub Actions**
4. Push your code to the `main` branch
5. The GitHub Actions workflow will automatically build and deploy your site

Your site will be available at: `https://wiwink20-hub.github.io/`

### What's Configured

- ✅ Vite base path set to `/` for root deployment
- ✅ GitHub Actions workflow for automatic deployment
- ✅ `.nojekyll` file to prevent Jekyll processing
- ✅ Build optimizations for production

## Project Structure

- `/src` - React application source code
- `/public` - Static assets
- `/dist` - Build output (generated)
- `/.github/workflows` - GitHub Actions workflows

## Editing This Project

You can edit this project in several ways:

**Local Development**
- Clone the repository and use your preferred IDE
- Install dependencies with `npm install`
- Run development server with `npm run dev`

**Edit Directly on GitHub**
- Navigate to the desired file(s)
- Click the "Edit" button (pencil icon) at the top right
- Make your changes and commit

**GitHub Codespaces**
- Navigate to the main page of your repository
- Click on the "Code" button (green button) near the top right
- Select the "Codespaces" tab
- Click on "New codespace" to launch a new Codespace environment

## License

Private

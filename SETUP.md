# Setup Instructions

## Prerequisites

This project requires **Node.js 18.x or higher** and **npm**.

### Windows Setup

1. **Install Node.js**
   - Download from https://nodejs.org/ (LTS version recommended)
   - Run the installer and follow the prompts
   - Make sure to check "Add to PATH" during installation
   - Restart your computer after installation

2. **Verify Installation**
   ```powershell
   node --version
   npm --version
   ```

### macOS/Linux Setup

```bash
# Using Homebrew (macOS)
brew install node

# Using apt (Ubuntu/Debian)
sudo apt-get install nodejs npm

# Using snap (Ubuntu)
sudo snap install node --classic

# Verify installation
node --version
npm --version
```

## Installation Steps

Once Node.js and npm are installed:

```bash
# Navigate to the project directory
cd Grand_konark

# Install all dependencies
npm install

# Start development server
npm run dev
```

The application will be available at **http://localhost:3000**

## Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Troubleshooting

### Port 3000 already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issues with Swiper or other packages
```bash
# Ensure all peer dependencies are installed
npm install
npm run dev
```

## Next Steps

1. Install Node.js if not already installed
2. Run `npm install` in the project directory
3. Run `npm run dev` to start the development server
4. Open http://localhost:3000 in your browser
5. Start customizing with your own content and images!

#!/bin/bash

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Build the project
echo "📦 Building project for production..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy:gh-pages

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your portfolio is now available at:"
    echo "   https://harshavardhanreddy9.github.io/Resume-Portfolio"
    echo ""
    echo "📝 Don't forget to:"
    echo "   1. Go to your GitHub repository settings"
    echo "   2. Enable GitHub Pages from the 'gh-pages' branch"
    echo "   3. Wait a few minutes for the site to be available"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi

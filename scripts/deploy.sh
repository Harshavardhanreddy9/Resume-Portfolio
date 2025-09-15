#!/bin/bash

echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Interactive 3D Resume Portfolio"
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Please add your GitHub repository URL:"
    echo "git remote add origin https://github.com/yourusername/your-repo.git"
    echo "Then run this script again."
    exit 1
fi

# Build and deploy
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Commit and push
    git add .
    git commit -m "Deploy: Update portfolio $(date)"
    git push origin main
    
    echo "🌐 Deploying to Vercel..."
    if command -v vercel &> /dev/null; then
        vercel --prod
    else
        echo "📦 Install Vercel CLI: npm i -g vercel"
        echo "Then run: vercel --prod"
    fi
else
    echo "❌ Build failed!"
    exit 1
fi

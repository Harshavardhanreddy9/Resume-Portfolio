#!/bin/bash

echo "🚀 Quick Deploy Script for Resume Portfolio"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📋 Step 1: Checking Git status..."
git status

echo ""
echo "📋 Step 2: Attempting to push to GitHub..."
echo "Note: Make sure you've created the repository on GitHub first!"
echo "Repository URL: https://github.com/Harshavardhanreddy9/Resume-Portfolio"
echo ""

# Try to push to GitHub
echo "🔄 Pushing code to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Code pushed successfully to GitHub!"
    echo ""
    
    echo "📋 Step 3: Building project for production..."
    npm run build
    
    if [ $? -eq 0 ]; then
        echo "✅ Build successful!"
        echo ""
        
        echo "📋 Step 4: Deploying to GitHub Pages..."
        npm run deploy:gh-pages
        
        if [ $? -eq 0 ]; then
            echo "✅ Deployment successful!"
            echo ""
            echo "🌐 Your portfolio is now available at:"
            echo "   https://harshavardhanreddy9.github.io/Resume-Portfolio"
            echo ""
            echo "📝 Don't forget to:"
            echo "   1. Go to your GitHub repository settings"
            echo "   2. Enable GitHub Pages from the 'gh-pages' branch"
            echo "   3. Wait a few minutes for the site to be available"
        else
            echo "❌ Deployment failed. Please check the error messages above."
        fi
    else
        echo "❌ Build failed. Please fix the errors and try again."
    fi
else
    echo "❌ Push failed. Please make sure:"
    echo "   1. You've created the repository on GitHub"
    echo "   2. The repository is public"
    echo "   3. You have the correct permissions"
    echo ""
    echo "Repository URL: https://github.com/Harshavardhanreddy9/Resume-Portfolio"
fi

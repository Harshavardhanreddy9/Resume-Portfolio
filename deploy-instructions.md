# 🚀 Deployment Instructions

## Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `Resume-Portfolio`
5. Description: `Interactive 3D Resume Portfolio built with React, Vite, TypeScript, and Tailwind CSS`
6. Make it **Public** (required for GitHub Pages)
7. **Don't** initialize with README, .gitignore, or license (we already have these)
8. Click "Create repository"

## Step 2: Push Code to GitHub
After creating the repository, run these commands in your terminal:

```bash
# Push the code to GitHub
git push -u origin main

# Deploy to GitHub Pages
npm run deploy:gh-pages
```

## Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "gh-pages" branch and "/ (root)" folder
6. Click "Save"

## Step 4: Access Your Portfolio
Your portfolio will be available at:
**https://harshavardhanreddy9.github.io/Resume-Portfolio**

## Alternative: Manual Deployment
If the automatic deployment doesn't work, you can manually deploy:

```bash
# Build the project
npm run build

# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy manually
npx gh-pages -d dist
```

## Troubleshooting
- Make sure the repository is public
- Check that GitHub Pages is enabled in repository settings
- Verify the base path is correct in vite.config.ts
- Clear browser cache if you don't see updates

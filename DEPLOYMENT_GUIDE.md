# 🚀 Complete Deployment Guide

## Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the details:**
   - Repository name: `Resume-Portfolio`
   - Description: `Interactive 3D Resume Portfolio built with React, Vite, TypeScript, and Tailwind CSS`
   - Make it **Public** (required for GitHub Pages)
   - **DO NOT** check "Add a README file"
   - **DO NOT** check "Add .gitignore"
   - **DO NOT** check "Choose a license"
5. **Click "Create repository"**

## Step 2: Push Code to GitHub

After creating the repository, run these commands in your terminal:

```bash
# Push your code to GitHub
git push -u origin main
```

## Step 3: Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
./deploy.sh
```

## Step 4: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click on "Settings"** tab
3. **Scroll down to "Pages"** section (in the left sidebar)
4. **Under "Source"**, select "Deploy from a branch"
5. **Select "gh-pages"** branch and **"/ (root)"** folder
6. **Click "Save"**

## Step 5: Access Your Portfolio

Your portfolio will be available at:
**https://harshavardhanreddy9.github.io/Resume-Portfolio**

## Alternative: Manual Commands

If you prefer to run commands manually:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy:gh-pages

# Or use the deployment script
./deploy.sh
```

## Troubleshooting

- **Repository not found**: Make sure you created the repository on GitHub first
- **Permission denied**: Make sure you're logged into GitHub in your browser
- **Pages not loading**: Wait 5-10 minutes after enabling GitHub Pages
- **404 error**: Check that the repository is public and Pages is enabled
- **Assets not loading**: Verify the base path in vite.config.ts is correct

## What's Already Configured

✅ Git repository initialized  
✅ All files committed locally  
✅ GitHub Pages configuration added  
✅ Production build tested  
✅ Deployment script created  
✅ Vite config updated for GitHub Pages  
✅ Package.json updated with homepage URL  

## Next Steps After Deployment

1. **Test your portfolio** at the GitHub Pages URL
2. **Share the link** with potential employers
3. **Update your LinkedIn** with the portfolio link
4. **Add the URL to your resume**

---

**Ready to deploy?** Just create the GitHub repository and run the commands above!

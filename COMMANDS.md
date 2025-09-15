# 🚀 Interactive 3D Resume Portfolio - Commands Guide

## 📋 Quick Start Commands

### 1. **Start Development Server with Health Check**
```bash
npm run start:check
```
*This starts the dev server and automatically checks if localhost:5173 is running*

### 2. **Manual Health Check**
```bash
./scripts/health-check.sh
```
*Checks if server is running on localhost:5173*

### 3. **TypeScript Check**
```bash
npm run type-check
```
*Runs TypeScript compiler to check for errors*

### 4. **Build & Test**
```bash
npm run build:check
```
*Builds project and starts preview server*

## 🔧 Development Commands

### Start Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

## 🚀 Deployment Commands

### Deploy to Vercel
```bash
npm run deploy:vercel
```

### Deploy to GitHub Pages
```bash
npm run deploy:gh-pages
```

### Full Deployment (Git + Vercel)
```bash
./scripts/deploy.sh
```

## 🎯 Step-by-Step Build Process

### Step 1: Verify Project Setup
```bash
# Check if server is running
curl -s -o /dev/null -w "%{http_code}" http://localhost:5173

# Should return: 200
```

### Step 2: Run Health Check
```bash
./scripts/health-check.sh
```

### Step 3: Type Check
```bash
npm run type-check
```

### Step 4: Build Test
```bash
npm run build
```

### Step 5: Preview Build
```bash
npm run preview
```

### Step 6: Deploy
```bash
# Option A: Vercel
npm run deploy:vercel

# Option B: GitHub Pages
npm run deploy:gh-pages

# Option C: Full deployment
./scripts/deploy.sh
```

## 🔍 Health Check Status

The health check script will show:
- ✅ **Success**: Server running on http://localhost:5173
- ❌ **Failed**: Server not responding after 30 seconds

## 🎨 Yeezy-Inspired Features

- **Minimal Black Design**: Clean, spacious layout
- **Large Typography**: Bold, light font weights
- **Subtle 3D Elements**: Performance-optimized 3D background
- **Smooth Animations**: Framer Motion transitions
- **Responsive Design**: Works on all devices

## 📱 View Your Portfolio

Once running, visit: **http://localhost:5173**

## 🛠️ Troubleshooting

### Server Not Starting
```bash
# Kill any existing processes
pkill -f "vite"

# Start fresh
npm run dev
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
```bash
npm run type-check
# Fix any reported errors
```

## 📊 Performance Tips

- 3D elements are optimized for performance
- Uses low device pixel ratio for mobile
- Lazy loading for heavy components
- Minimal bundle size

---

**🎯 Always run health checks after each step to ensure everything is working!**

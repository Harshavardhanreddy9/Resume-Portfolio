# Interactive 3D Resume

A modern, interactive 3D resume built with React, TypeScript, Three.js, and Framer Motion. Features a stunning 3D background, smooth animations, and a responsive design.

## 🚀 Features

- **3D Interactive Background** - Powered by Three.js and React Three Fiber
- **Smooth Animations** - Framer Motion for fluid transitions
- **Responsive Design** - Tailwind CSS for modern styling
- **TypeScript** - Type-safe development
- **Modern Stack** - Vite for fast development and building

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **State Management**: Zustand

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd interactive-3d-resume
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
npm run deploy:vercel
```

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy:
```bash
npm run deploy:gh-pages
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Scene3D.tsx     # 3D scene component
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── Skills.tsx      # Skills showcase
│   ├── Projects.tsx    # Projects portfolio
│   ├── Contact.tsx     # Contact form
│   └── Navigation.tsx  # Navigation bar
├── hooks/              # Custom hooks
│   └── useAppStore.ts  # Zustand store
├── types/              # TypeScript types
├── utils/              # Utility functions
└── assets/             # Static assets
```

## 🎨 Customization

1. **Personal Information**: Update the content in each component with your information
2. **3D Scene**: Modify `Scene3D.tsx` to customize the 3D elements
3. **Colors**: Update the color scheme in `tailwind.config.js`
4. **Animations**: Adjust animation parameters in Framer Motion components

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy:vercel` - Deploy to Vercel
- `npm run deploy:gh-pages` - Deploy to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

Made with ❤️ and modern web technologies

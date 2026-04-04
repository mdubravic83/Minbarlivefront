# 🚀 Emergent.sh Deployment Checklist

> **Step-by-step guide za deployment dizajna iz Figma Make na emergent.sh**

---

## ⚠️ PROBLEM: Zašto dizajn nije identičan?

Figma Make koristi svoj **internal build system** koji:
- ✅ Automatski kompajlira Tailwind CSS
- ✅ Učitava fontove iz njihovog CDN-a
- ✅ Optimizuje assete
- ✅ Injektuje runtime CSS

**Emergent.sh** deploy-uje **raw kod** koji:
- ❌ NE kompajlira Tailwind automatski
- ❌ NE učitava fontove bez eksplicitnih instrukcija
- ❌ NE procesira CSS bez build step-a
- ❌ Koristi browser default fontove

---

## ✅ Pre-Deployment Checklist

### **Step 1: Font Setup (NAJVAŽNIJE!)**

**1.1 Download Inter Font**
```bash
# Visit: https://fonts.google.com/specimen/Inter
# Download weights: 400, 500, 600, 700
# Format: WOFF2 (best compression)
```

**1.2 Create Font Directory**
```bash
mkdir -p public/fonts
```

**1.3 Add Font Files**
```
public/fonts/
  ├── Inter-Regular.woff2
  ├── Inter-Medium.woff2
  ├── Inter-SemiBold.woff2
  └── Inter-Bold.woff2
```

**1.4 Create `/src/styles/fonts.css`**
```css
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/Inter-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('/fonts/Inter-Medium.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/fonts/Inter-SemiBold.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/fonts/Inter-Bold.woff2') format('woff2');
}
```

**1.5 Update `/src/styles/theme.css`**
```css
/* At the top of theme.css */
@import './fonts.css';

/* Apply to body */
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

### **Step 2: Tailwind Configuration**

**2.1 Verify `tailwind.config.js` Exists**
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0F766E',
          700: '#14B8A6',
          100: '#F0FDFA',
          50: '#E6FAF5',
        },
        gold: {
          500: '#D4AF37',
          600: '#C49B2F',
          700: '#B38B1F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

**2.2 Check `postcss.config.js`**
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**2.3 Verify Tailwind Import in Main CSS**
```css
/* /src/styles/globals.css or index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### **Step 3: Package.json Dependencies**

**3.1 Required Packages**
```json
{
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.17",
    "@types/node": "^20.11.5",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "typescript": "^5.3.3",
    "vite": "^5.0.12"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router": "^7.1.3",
    "lucide-react": "^0.344.0"
  }
}
```

**3.2 Build Scripts**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

---

### **Step 4: Vite Configuration**

**4.1 Check `vite.config.ts`**
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
```

---

### **Step 5: Import Order in main.tsx**

**CRITICAL:** CSS fajlovi moraju biti importovani u **OVOM redoslijedu**:

```tsx
// /src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './app/routes'

// CSS IMPORTS - ORDER MATTERS!
import './styles/fonts.css'      // 1. Fonts first
import './styles/theme.css'      // 2. Design tokens
import './styles/globals.css'    // 3. Tailwind & global styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
```

---

### **Step 6: Git Repository Structure**

**6.1 Required Files for Emergent.sh**
```
repo/
├── /src/
│   ├── /app/
│   │   ├── App.tsx
│   │   ├── routes.tsx
│   │   └── /components/
│   └── /styles/
│       ├── fonts.css       ← MUST HAVE
│       ├── theme.css       ← MUST HAVE
│       └── globals.css     ← MUST HAVE
├── /public/
│   └── /fonts/            ← MUST HAVE
│       ├── Inter-Regular.woff2
│       ├── Inter-Medium.woff2
│       ├── Inter-SemiBold.woff2
│       └── Inter-Bold.woff2
├── package.json
├── vite.config.ts
├── tailwind.config.js     ← MUST HAVE
├── postcss.config.js      ← MUST HAVE
├── tsconfig.json
├── index.html
├── DESIGN_SYSTEM.md       ← This guide
└── .gitignore
```

**6.2 .gitignore**
```
node_modules/
dist/
.DS_Store
*.log
.env
.vite/
```

---

### **Step 7: Build & Deploy Process**

**7.1 Local Test Build**
```bash
# Install dependencies
npm install

# Build production version
npm run build

# Test production build locally
npm run preview

# Check localhost:4173 - should match Figma
```

**7.2 Verify Build Output**
```bash
# Check dist/ folder
ls -la dist/

# Should contain:
# - index.html
# - /assets/*.css (compiled Tailwind)
# - /assets/*.js (bundled React)
# - /fonts/*.woff2 (copied fonts)
```

**7.3 Deploy to Emergent.sh**
```bash
# Push to git
git add .
git commit -m "Deploy with font and build fixes"
git push origin main

# Deploy via emergent.sh CLI or dashboard
emergent deploy
```

---

### **Step 8: Post-Deployment Verification**

**8.1 Check Font Loading**
1. Open deployed URL
2. Open DevTools → Network tab
3. Filter: "font"
4. Verify all .woff2 files load (200 status)

**8.2 Check Tailwind Classes**
1. Inspect any element
2. Check if classes like `bg-[#0F766E]` have actual styles
3. If no styles → Tailwind wasn't compiled

**8.3 Visual Comparison**
1. Open Figma Make preview side-by-side
2. Open Emergent.sh deployment
3. Compare:
   - [ ] Font looks identical
   - [ ] Spacing identical
   - [ ] Colors identical
   - [ ] Shadows identical
   - [ ] Border radius identical

---

## 🐛 Troubleshooting

### **Issue: Fonts Not Loading**

**Symptoms:** Text shows in Arial/Times, not Inter

**Debug:**
```bash
# Check browser console for 404 errors
# Common causes:
1. Font path incorrect (should be /fonts/ not /public/fonts/)
2. Font files not in public/ folder
3. fonts.css not imported
4. MIME type error
```

**Fix:**
```tsx
// Verify font path in fonts.css
src: url('/fonts/Inter-Regular.woff2') format('woff2');
//       ↑ starts with / (root)

// Check public folder structure
public/
  └── fonts/
      └── Inter-Regular.woff2
```

---

### **Issue: Tailwind Classes Not Applied**

**Symptoms:** No background colors, padding, etc.

**Debug:**
```bash
# Check if Tailwind compiled
cat dist/assets/*.css | grep "bg-\[#0F766E\]"

# If empty → Tailwind didn't compile
```

**Fix:**
```bash
# 1. Verify tailwind.config.js exists
# 2. Verify postcss.config.js exists
# 3. Check content paths in tailwind.config.js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]

# 4. Rebuild
rm -rf node_modules dist
npm install
npm run build
```

---

### **Issue: Build Fails on Emergent.sh**

**Symptoms:** Deployment shows error

**Debug:**
```bash
# Check emergent.sh logs
emergent logs

# Common errors:
1. "Cannot find module 'tailwindcss'"
   → Missing in package.json devDependencies

2. "PostCSS plugin not found"
   → Missing postcss.config.js

3. "Failed to resolve import"
   → Path alias issue in vite.config.ts
```

**Fix:**
```bash
# Ensure all deps installed
npm install tailwindcss postcss autoprefixer --save-dev

# Verify build works locally
npm run build

# Only push if local build succeeds
```

---

### **Issue: Colors Look Different**

**Symptoms:** Teal looks lighter, gold looks different

**Fix:**
```tsx
// Use exact HEX values, not Tailwind defaults
❌ className="bg-teal-700"        // Could be #0d9488
✅ className="bg-[#0F766E]"       // Exact match

// Or extend Tailwind theme
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'primary-teal': '#0F766E',
    }
  }
}
```

---

### **Issue: Spacing Looks Off**

**Symptoms:** Elements too close or too far

**Fix:**
```tsx
// Check Figma Auto Layout values
// Figma: padding 24px → Tailwind: p-6 (24px)

// Common mappings:
4px → space-1
8px → space-2
12px → space-3
16px → space-4
24px → space-6
32px → space-8
48px → space-12

// Use exact values
❌ className="p-5"        // 20px - might not match
✅ className="p-6"        // 24px - exact Figma match
```

---

## 📋 Final Checklist

Before marking deployment complete:

### **Critical**
- [ ] Fonts load correctly (check Network tab)
- [ ] Tailwind classes applied (inspect elements)
- [ ] Build completes without errors
- [ ] No 404s in console

### **Visual QA**
- [ ] Typography matches Figma
- [ ] Colors 100% match
- [ ] Spacing matches
- [ ] Border radius matches
- [ ] Shadows match
- [ ] Icons same size

### **Responsive**
- [ ] Mobile (375px) looks good
- [ ] Tablet (768px) looks good
- [ ] Desktop (1440px) looks good
- [ ] No horizontal scroll
- [ ] Touch targets >= 44px

### **Performance**
- [ ] Fonts preloaded
- [ ] Images optimized
- [ ] No console errors
- [ ] Load time < 3s

---

## 🎯 Success Metrics

**Deployment is successful when:**

1. ✅ **Font Match:** Figma and deployed use exact same Inter font
2. ✅ **Pixel Perfect:** Spacing within 4px tolerance
3. ✅ **Color Exact:** HEX codes identical
4. ✅ **No Errors:** Console clean, no 404s
5. ✅ **Responsive:** Works on all screen sizes
6. ✅ **Fast Load:** < 3 second initial load

---

## 📞 Need Help?

If deployment still doesn't match:

1. **Check `DESIGN_SYSTEM.md`** for design tokens
2. **Compare screenshots** side-by-side
3. **Use browser DevTools** to inspect differences
4. **Check emergent.sh logs** for build errors
5. **Document any custom fixes** in comments

---

**Last Updated:** Saturday, April 4, 2026  
**Version:** 1.0.0  
**Maintained By:** MinbarLive Team

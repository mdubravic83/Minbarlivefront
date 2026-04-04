# 🔧 Figma Make → Emergent.sh Troubleshooting

> **Practical guide for fixing visual differences between Figma Make and emergent.sh deployment**

---

## 🎯 The Core Problem

**Figma Make** has a **built-in build pipeline** that:
- ✅ Compiles Tailwind CSS automatically
- ✅ Serves fonts from internal CDN
- ✅ Processes CSS at runtime
- ✅ Optimizes assets on-the-fly

**Emergent.sh** deploys **raw source code** that:
- ❌ Requires explicit build step
- ❌ Needs fonts manually configured
- ❌ No automatic CSS processing
- ❌ No runtime optimizations

**Result:** Same code looks different on both platforms!

---

## 🔍 Visual Diff Checklist

When comparing Figma Make vs emergent.sh, check these in order:

### **1. Typography (Most Common Issue)**

**Check:**
```bash
# In browser DevTools
Inspect any text element → Computed → font-family
```

**Expected:**
```
font-family: Inter, system-ui, sans-serif
```

**If you see:**
```
font-family: Arial, Helvetica, sans-serif  ← WRONG
```

**Fix:**
1. Verify `/public/fonts/` exists with .woff2 files
2. Check `/src/styles/fonts.css` has @font-face declarations
3. Verify fonts.css is imported FIRST in main.tsx
4. Clear cache and rebuild

---

### **2. Colors**

**Check:**
```bash
# Inspect element
background-color: rgb(15, 118, 110)  # Should be #0F766E
```

**If colors are wrong:**
- Tailwind classes not applied → Build issue
- Using wrong shade → Check HEX values in code

**Fix:**
```tsx
// ❌ WRONG - Tailwind default (might be different shade)
className="bg-teal-700"

// ✅ CORRECT - Exact HEX
className="bg-[#0F766E]"
```

---

### **3. Spacing**

**Check:**
```bash
# Measure padding/margin in DevTools
padding: 16px  # Should match Figma
```

**If spacing is off:**
- Check Tailwind class values
- Verify Figma Auto Layout settings
- Compare side-by-side screenshots

**Common Issues:**
```tsx
// Figma: 24px padding
❌ className="p-5"  // 20px - close but wrong
✅ className="p-6"  // 24px - exact match

// Figma: 12px gap
❌ className="gap-3"  // 12px - correct!
✅ className="gap-3"  // ✓
```

---

### **4. Shadows**

**Check:**
```bash
# In DevTools Computed tab
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
```

**If shadow is missing or wrong:**
- Tailwind not compiled
- Wrong shadow class used

**Fix:**
```tsx
// Use predefined shadows
className="shadow-lg"  // 0 10px 15px -3px

// Or custom (avoid if possible)
className="shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"
```

---

### **5. Border Radius**

**Check:**
```bash
border-radius: 16px  # Should match Figma
```

**Common mapping:**
```
Figma → Tailwind
6px   → rounded-sm
8px   → rounded-md
12px  → rounded-lg
16px  → rounded-xl
24px  → rounded-2xl
```

---

## 🐛 Specific Issues & Solutions

### **Issue 1: Text Looks Different (Wrong Font)**

**Symptoms:**
- Text appears in Arial, Times, or another system font
- Letter spacing looks off
- Line heights don't match

**Debug:**
```bash
# Open DevTools → Network tab
# Filter: "font"
# Reload page
# Check if .woff2 files show "200 OK" status
```

**Solution:**
```bash
# 1. Download Inter font
# https://fonts.google.com/specimen/Inter
# Weights: 400, 500, 600, 700
# Format: WOFF2

# 2. Place in /public/fonts/
public/fonts/
  ├── Inter-Regular.woff2
  ├── Inter-Medium.woff2
  ├── Inter-SemiBold.woff2
  └── Inter-Bold.woff2

# 3. Create /src/styles/fonts.css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
# ... repeat for other weights

# 4. Import in main.tsx (FIRST!)
import './styles/fonts.css'
import './styles/theme.css'
import './styles/globals.css'

# 5. Apply to body in theme.css
body {
  font-family: 'Inter', sans-serif;
}

# 6. Rebuild
npm run build
```

---

### **Issue 2: No Styles Applied (Tailwind Not Compiled)**

**Symptoms:**
- Elements have no background colors
- No padding/margin
- Plain HTML appearance

**Debug:**
```bash
# Check if Tailwind compiled
cat dist/assets/*.css | grep "bg-\[#0F766E\]"

# If empty output → Tailwind didn't compile
```

**Solution:**
```bash
# 1. Verify tailwind.config.js exists
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { /* ... */ },
}

# 2. Verify postcss.config.js/mjs exists
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

# 3. Check package.json has dependencies
"devDependencies": {
  "tailwindcss": "^3.4.1",
  "postcss": "^8.4.35",
  "autoprefixer": "^10.4.17"
}

# 4. Install if missing
npm install -D tailwindcss postcss autoprefixer

# 5. Verify CSS imports in globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# 6. Clean rebuild
rm -rf node_modules dist
npm install
npm run build
```

---

### **Issue 3: Build Fails on Emergent.sh**

**Symptoms:**
- Deployment shows error
- Build log shows missing modules
- 500 error on site

**Debug:**
```bash
# Check emergent logs
emergent logs

# Common errors:
# "Cannot find module 'X'"
# "Failed to resolve import"
# "PostCSS plugin not found"
```

**Solution:**
```bash
# 1. Ensure all dependencies in package.json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router": "^7.1.3",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.17",
    "vite": "^5.0.12",
    "typescript": "^5.3.3",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18"
  }
}

# 2. Test build locally BEFORE pushing
npm run build
npm run preview
# Check localhost:4173

# 3. Only push if local build succeeds
git add .
git commit -m "Fix: Add missing dependencies"
git push
```

---

### **Issue 4: Layout Breaks on Mobile**

**Symptoms:**
- Elements overflow screen width
- Horizontal scrolling
- Text too small or too large

**Debug:**
```bash
# Test at these widths:
# 375px (iPhone)
# 768px (iPad)
# 1024px (Desktop)
```

**Solution:**
```tsx
// Use responsive classes
❌ <div className="w-[800px]">  // Fixed width
✅ <div className="w-full max-w-4xl mx-auto">  // Responsive

// Mobile-first padding
❌ <div className="p-8">  // Too much on mobile
✅ <div className="p-4 sm:p-6 lg:p-8">  // Scales up

// Responsive text
❌ <h1 className="text-4xl">  // Too big on mobile
✅ <h1 className="text-2xl sm:text-3xl lg:text-4xl">

// Responsive grid
❌ <div className="grid grid-cols-4">  // Too many columns
✅ <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
```

---

### **Issue 5: Images Not Loading**

**Symptoms:**
- Broken image icons
- 404 errors in console
- Missing logos/assets

**Debug:**
```bash
# Check Network tab for 404s
# Check image paths
```

**Solution:**
```tsx
// Images in /public/ folder
❌ <img src="../public/logo.png" />
✅ <img src="/logo.png" />

// Images imported from /src/
✅ import logo from './assets/logo.png'
   <img src={logo} />

// External images (Unsplash)
✅ <img src="https://images.unsplash.com/..." />
```

---

### **Issue 6: Gradients Look Different**

**Symptoms:**
- Gradient angle wrong
- Colors not matching
- Banding visible

**Solution:**
```tsx
// Use exact Tailwind gradients
<div className="bg-gradient-to-r from-[#0F766E] to-[#14B8A6]">

// Check Figma gradient:
// Angle: 90° → to-r (right)
// Angle: 135° → to-br (bottom-right)
// Angle: 180° → to-b (bottom)

// Multiple stops
<div className="bg-gradient-to-br from-[#0F766E] via-[#14B8A6] to-[#0F766E]">
```

---

### **Issue 7: Hover States Not Working**

**Symptoms:**
- No color change on hover
- No cursor change
- No visual feedback

**Solution:**
```tsx
// Add hover classes
<button className="bg-[#0F766E] hover:bg-[#14B8A6] transition-colors">

// Add cursor pointer
<div className="cursor-pointer">

// Add transition
<button className="transition-all duration-300">

// Combine
<button className="bg-[#0F766E] hover:bg-[#14B8A6] transition-all duration-300 cursor-pointer">
```

---

## 📋 Pre-Push Checklist

Before pushing to emergent.sh:

```bash
# 1. Build locally
npm run build

# 2. Test production build
npm run preview

# 3. Check these URLs work:
http://localhost:4173/
http://localhost:4173/login
http://localhost:4173/hutba-live/sessions

# 4. Open DevTools and verify:
✓ No console errors
✓ Fonts load (Network tab)
✓ No 404s
✓ Styles applied

# 5. Test responsive
✓ 375px width
✓ 768px width
✓ 1440px width

# 6. Compare to Figma Make
✓ Typography matches
✓ Colors match
✓ Spacing matches
✓ Layout matches

# 7. If all pass, push!
git push origin main
```

---

## 🎯 The "Nuclear Option"

If nothing works, start fresh:

```bash
# 1. Backup your components
cp -r src/app/components /tmp/backup-components

# 2. Fresh install
rm -rf node_modules dist package-lock.json
npm install

# 3. Verify config files
# - tailwind.config.js
# - postcss.config.js
# - vite.config.ts

# 4. Verify fonts
ls public/fonts/
# Should show .woff2 files

# 5. Clean build
npm run build

# 6. Test
npm run preview

# 7. If works, push
git push
```

---

## 🔍 Side-by-Side Comparison Tool

**Method 1: Browser DevTools**
```bash
# 1. Open Figma Make preview
# 2. Open emergent.sh deployment
# 3. Right-click → Inspect
# 4. Compare:
#    - Computed styles
#    - Box model
#    - Applied styles
```

**Method 2: Screenshot Overlay**
```bash
# 1. Full-screen screenshot of Figma Make (Cmd/Ctrl + Shift + 4)
# 2. Full-screen screenshot of emergent.sh
# 3. Open both in Photoshop/Figma
# 4. Overlay with 50% opacity
# 5. Identify differences visually
```

**Method 3: Online Diff Tool**
```bash
# Upload both screenshots to:
https://www.diffchecker.com/image-diff/
# Visual diff will highlight differences
```

---

## 📞 When to Ask for Help

If after following this guide:

- [ ] Fonts still not loading after adding to /public/fonts/
- [ ] Tailwind not compiling despite config being correct
- [ ] Build succeeds locally but fails on emergent.sh
- [ ] Visual differences remain unexplained
- [ ] Critical functionality broken

**Then:**
1. Document exact steps taken
2. Share error messages
3. Share screenshots (Figma Make vs emergent.sh)
4. Share browser console output
5. Share build logs from emergent.sh

---

## ✅ Success Metrics

Deployment is correct when:

1. ✅ **Typography exact match** - Same font family, size, weight
2. ✅ **Colors identical** - HEX values match exactly
3. ✅ **Spacing within 4px** - Padding, margin, gap close enough
4. ✅ **Layout identical** - Same structure on all screen sizes
5. ✅ **No console errors** - Clean browser console
6. ✅ **Fast load time** - Under 3 seconds initial load
7. ✅ **Responsive works** - Mobile, tablet, desktop all functional

---

**Remember:** Perfect pixel match is nearly impossible, but you should get within 95% similarity. Small anti-aliasing differences are acceptable!

---

**Last Updated:** Saturday, April 4, 2026  
**Version:** 1.0.0

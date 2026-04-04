# 🎨 MinbarLive Design System Guide

> **Kritična dokumentacija za održavanje identičnog dizajna između Figma Make i emergent.sh deployment-a**

---

## 📌 Problem Statement

Dizajn napravljen u **Figma Make** izgleda drugačije kada se deploy-uje na **emergent.sh** zbog:
- Neučitanih fontova
- Nekompatibilnog Tailwind CSS kompajliranja
- Različitih CSS reset pravila
- Nestandardnog asset loadinga
- Nedostajućih build konfiguracija

---

## 🎯 Design Tokens (CENTRAL SOURCE OF TRUTH)

### **Colors**
```css
:root {
  /* Primary - Teal */
  --primary-900: #0F766E;
  --primary-700: #14B8A6;
  --primary-100: #F0FDFA;
  --primary-50: #E6FAF5;

  /* Accent - Gold */
  --gold-500: #D4AF37;
  --gold-600: #C49B2F;
  --gold-700: #B38B1F;

  /* Neutrals - Grayscale */
  --neutral-950: #0F172A;
  --neutral-700: #475569;
  --neutral-400: #94A3B8;
  --neutral-300: #CBD5E1;
  --neutral-200: #E2E8F0;
  --neutral-100: #F8FAFC;
  --neutral-50: #FFFFFF;

  /* Status Colors */
  --red-600: #DC2626;
  --red-100: #FEE2E2;
  --green-600: #16A34A;
  --green-100: #DCFCE7;
  --blue-600: #2563EB;
  --blue-100: #DBEAFE;
  --yellow-600: #CA8A04;
  --yellow-100: #FEF3C7;
}
```

### **Typography**
```css
:root {
  /* Font Family */
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "Fira Code", "Courier New", monospace;

  /* Font Sizes */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */

  /* Font Weights */
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### **Spacing**
```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
}
```

### **Border Radius**
```css
:root {
  --radius-sm: 0.375rem;   /* 6px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;   /* Circle */
}
```

### **Shadows**
```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### **Breakpoints**
```css
/* Mobile First Approach */
--mobile: 375px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
```

---

## 📦 Required Files Structure

```
project/
├── /src/
│   ├── /styles/
│   │   ├── fonts.css          ← Font imports (CRITICAL)
│   │   ├── theme.css          ← Design tokens
│   │   └── globals.css        ← CSS reset
│   └── /app/
│       ├── App.tsx
│       └── /components/
├── /public/
│   └── /fonts/                ← Local font files
├── package.json
├── vite.config.ts
└── tailwind.config.js         ← MUST MATCH Figma tokens
```

---

## 🔤 Font Setup (CRITICAL!)

### **1. Font Files**
Lokalno hostujte fontove u `/public/fonts/`:
```
/public/fonts/
  ├── Inter-Regular.woff2
  ├── Inter-Medium.woff2
  ├── Inter-SemiBold.woff2
  └── Inter-Bold.woff2
```

### **2. Font Face Declarations** (`/src/styles/fonts.css`)
```css
/* Inter Font Family */
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

### **3. Apply to Body**
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 🎨 Tailwind Configuration

**File:** `tailwind.config.js`

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
        neutral: {
          950: '#0F172A',
          700: '#475569',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F8FAFC',
          50: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
```

---

## 🧩 Component Standards

### **Button Variants**

```tsx
// Primary Button
<button className="px-6 py-3 bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white font-semibold rounded-xl hover:from-[#14B8A6] hover:to-[#0F766E] transition-all shadow-lg">
  Primary Action
</button>

// Gold Premium Button
<button className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C49B2F] text-white font-semibold rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] transition-all shadow-lg">
  Premium Action
</button>

// Secondary Button
<button className="px-6 py-3 bg-white border-2 border-[#CBD5E1] text-[#0F172A] font-semibold rounded-xl hover:bg-[#F8FAFC] transition-all">
  Secondary Action
</button>
```

### **Input Fields**

```tsx
<input
  type="text"
  className="w-full px-4 py-3 bg-white border-2 border-[#CBD5E1] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition-all"
  placeholder="Enter text..."
/>
```

### **Card Component**

```tsx
<div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
  {/* Card Content */}
</div>
```

---

## ✅ Pre-Deployment Checklist

### **Phase 1: Foundation (CRITICAL)**
- [ ] Fontovi učitani lokalno u `/public/fonts/`
- [ ] `fonts.css` kreiran i importovan
- [ ] `theme.css` sa design tokens kreiran
- [ ] `globals.css` CSS reset applied
- [ ] `tailwind.config.js` ažuriran sa exact tokenima
- [ ] Tailwind kompajliran (`npm run build`)

### **Phase 2: Visual QA**
- [ ] Typography match (font family, size, weight)
- [ ] Spacing identičan (padding, margin, gap)
- [ ] Colors 100% match (HEX kodovi)
- [ ] Border radius identičan
- [ ] Shadows match
- [ ] Icon sizes identični

### **Phase 3: Component Pass**
- [ ] Buttons izgledaju identično
- [ ] Inputs identični
- [ ] Cards identične
- [ ] Navigation identična
- [ ] Modals identični

### **Phase 4: Responsive Pass**
- [ ] Desktop (1440px+) match
- [ ] Tablet (768px-1024px) match
- [ ] Mobile (375px-768px) match
- [ ] Touch targets >= 44px
- [ ] Text readable na svim veličinama

### **Phase 5: Assets**
- [ ] SVG ikone identične
- [ ] Raster images optimized (WebP)
- [ ] Logo crisp na svim veličinama
- [ ] Aspect ratios preserved

---

## 🚨 Common Issues & Solutions

### **Issue 1: Font Not Loading**
**Problem:** Tekst se prikazuje u fallback fontu (Arial/Times)

**Solution:**
```tsx
// Check browser console for 404 errors
// Verify font path is correct
// Add font preload to index.html:
<link rel="preload" href="/fonts/Inter-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
```

### **Issue 2: Tailwind Classes Not Applied**
**Problem:** Element nema stilove

**Solution:**
```bash
# Rebuild Tailwind
npm run build

# Check if tailwind.config.js content paths are correct
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]

# Verify CSS import order in main.tsx
import './styles/fonts.css'
import './styles/theme.css'
import './styles/globals.css'
```

### **Issue 3: Spacing Different**
**Problem:** Elementi nisu na pravoj distanci

**Solution:**
```tsx
// Use exact Tailwind classes, avoid arbitrary values
❌ className="p-[13px]"
✅ className="p-3"

// Check Auto Layout settings in Figma
// Gap should match: gap-4 = 16px
```

### **Issue 4: Colors Not Matching**
**Problem:** Boje su light ili different shade

**Solution:**
```tsx
// Use HEX values directly instead of Tailwind defaults
❌ className="bg-teal-600"
✅ className="bg-[#0F766E]"

// Or extend theme in tailwind.config.js
```

### **Issue 5: Border Radius Different**
**Problem:** Uglovi izgledaju drugačije

**Solution:**
```tsx
// Use consistent values
❌ className="rounded-lg"  // Could be 8px or 12px
✅ className="rounded-xl"  // Exactly 16px

// Check Figma corner radius
```

---

## 🔍 Visual Diff Process

### **Step-by-Step Comparison**

1. **Screenshot Figma Frame**
   - Full screen capture
   - Save as `figma-reference.png`

2. **Screenshot Deployed App**
   - Same viewport size
   - Save as `deployed-app.png`

3. **Overlay Comparison**
   - Use Photoshop/Figma overlay
   - Or online tool: https://www.diffchecker.com/image-diff/

4. **Document Differences**
   ```markdown
   ## Differences Found:
   - [ ] Header padding: Figma 48px vs Deployed 40px
   - [ ] Button font weight: Figma 600 vs Deployed 500
   - [ ] Card shadow: Not matching
   ```

5. **Fix Iteratively**
   - Fix one section at a time
   - Don't change multiple things at once
   - Test after each fix

---

## 📐 Layout Standards

### **Container Widths**
```tsx
// Desktop container
<div className="max-w-7xl mx-auto px-6">
  {/* Content */}
</div>

// Full width with constraints
<div className="w-full max-w-screen-2xl mx-auto">
  {/* Content */}
</div>
```

### **Grid Systems**
```tsx
// 12-column grid
<div className="grid grid-cols-12 gap-6">
  <div className="col-span-12 lg:col-span-8">{/* Main */}</div>
  <div className="col-span-12 lg:col-span-4">{/* Sidebar */}</div>
</div>

// Auto-fit cards
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Cards */}
</div>
```

### **Flexbox Patterns**
```tsx
// Center everything
<div className="flex items-center justify-center min-h-screen">
  {/* Centered content */}
</div>

// Space between
<div className="flex items-center justify-between">
  <div>Left</div>
  <div>Right</div>
</div>

// Vertical stack
<div className="flex flex-col gap-4">
  {/* Stacked items */}
</div>
```

---

## 🎯 Acceptance Criteria

### **Typography**
- ✅ Font family match
- ✅ Font size within 1px
- ✅ Font weight exact
- ✅ Line height within 2px
- ✅ Letter spacing match

### **Spacing**
- ✅ Padding within 4px
- ✅ Margin within 4px
- ✅ Gap within 4px

### **Colors**
- ✅ Exact HEX match
- ✅ Opacity match
- ✅ Gradient angles match

### **Effects**
- ✅ Border radius exact
- ✅ Shadow match (blur, spread, offset, color)
- ✅ Transitions match

### **Responsive**
- ✅ Mobile breakpoint: 640px
- ✅ Tablet breakpoint: 768px
- ✅ Desktop breakpoint: 1024px
- ✅ Touch targets: 44px minimum

---

## 📝 Agent Instructions

**For Future Emergent Agents:**

When you receive this project:

1. **READ THIS FILE FIRST** before making any changes
2. **Check fonts.css** - verify all fonts are loaded
3. **Check tailwind.config.js** - verify tokens match this guide
4. **Run build** before deployment
5. **Do visual diff** between Figma and deployed version
6. **Fix issues iteratively** - one component at a time
7. **Document any deviations** in comments
8. **Never change design tokens** without updating this file

**Critical Files - DO NOT MODIFY WITHOUT REASON:**
- `/src/styles/fonts.css`
- `/src/styles/theme.css`
- `tailwind.config.js`

**Safe to Modify:**
- Component logic
- State management
- Data fetching
- Routing

---

## 🔗 Resources

- **Figma Make Preview:** Check live preview for reference
- **Tailwind Docs:** https://tailwindcss.com/docs
- **CSS Variables:** https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- **Font Loading:** https://web.dev/font-best-practices/

---

**Last Updated:** Saturday, April 4, 2026  
**Version:** 1.0.0  
**Maintained By:** MinbarLive Team

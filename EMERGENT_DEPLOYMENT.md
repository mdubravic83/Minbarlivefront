# 🚀 EMERGENT.SH DEPLOYMENT GUIDE - MinbarLive Admin

## ⚠️ CRITICAL: Postizanje 100% Design Match-a

Ovaj guide osigurava **identičan dizajn** između Figma Make i emergent.sh deployment-a.

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### ✅ **1. Provjeri Package.json Dependencies**

Obavezni packages:
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router": "^7.1.1",
    "lucide-react": "latest",
    "motion": "latest"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.11",
    "typescript": "^5.7.3",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.4.49"
  }
}
```

### ✅ **2. Provjeri File Structure**

```
/src
  /app
    App.tsx              ← MORA importovati ../styles/index.css
    routes.tsx
    /components
      MainLayout.tsx
      Dashboard.tsx
      HutbaLive.tsx
      ... ostali komponenti
  /styles
    index.css            ← Master CSS file
    fonts.css            ← Font imports (Inter)
    tailwind.css         ← Tailwind v4 config
    theme.css            ← Brand colors + base styles
```

---

## 🎨 STYLING FILES - TAČAN SADRŽAJ

### **1. `/src/styles/fonts.css`**

```css
/* Font Imports - Add all font imports at the top of this file */

/* Inter - Primary Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

/* Optional: Add any additional fonts here */
```

---

### **2. `/src/styles/theme.css`**

```css
@import 'tailwindcss';

/* MinbarLive Brand Colors V2 */
:root {
  --color-primary: #0F766E;
  --color-deep-green: #14532D;
  --color-brand-green: #2E7D32;
  --color-gold: #D4AF37;
  --color-gold-light: #F4C542;
  --color-text: #0F172A;
  --color-muted-text: #475569;
  --color-border: #CBD5E1;
  --color-surface: #F8FAFC;
}

/* Base styles */
body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-surface);
  color: var(--color-text);
}

* {
  box-sizing: border-box;
}
```

---

### **3. `/src/styles/tailwind.css`**

```css
@import 'tailwindcss' source(none);
@source '../**/*.{js,ts,jsx,tsx}';

@import 'tw-animate-css';
```

---

### **4. `/src/styles/index.css`**

```css
@import './fonts.css';
@import './tailwind.css';
@import './theme.css';
```

---

### **5. `/src/app/App.tsx`**

```tsx
import { RouterProvider } from "react-router";
import { router } from "./routes";
import "../styles/index.css"; // ← KRITIČNO!

export default function App() {
  return <RouterProvider router={router} />;
}
```

---

## 🔧 BUILD CONFIGURATION

### **`postcss.config.mjs`**

```js
export default {
  plugins: {
    tailwindcss: {},
  },
};
```

### **`vite.config.ts`**

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.mjs',
  },
});
```

---

## 🚀 DEPLOYMENT KORACI

### **Korak 1: Upload Svih Fajlova**
```bash
# Provjerite da su svi fajlovi prisutni:
- /src/styles/fonts.css (sa Inter importom)
- /src/styles/theme.css (sa Inter u body font-family)
- /src/app/App.tsx (sa CSS importom)
```

### **Korak 2: Install Dependencies**
```bash
npm install
# ili
pnpm install
```

### **Korak 3: Build**
```bash
npm run build
# ili
pnpm build
```

### **Korak 4: Deploy**
```bash
# emergent.sh automatski deploy-a nakon build-a
```

---

## 🐛 TROUBLESHOOTING - Ako Dizajn Ne Odgovara

### **Problem 1: Fontovi ne učitavaju**
❌ **Simptom:** Tekst izgleda kao system font  
✅ **Rješenje:**
1. Provjeri `/src/styles/fonts.css` da li postoji Inter import
2. Provjeri `/src/styles/theme.css` da li body ima `font-family: 'Inter',...`
3. Provjeri `/src/app/App.tsx` da li importuje `../styles/index.css`

### **Problem 2: Boje nisu tačne**
❌ **Simptom:** Zelena, zlatna ili siva boja nisu kao u Figma Make  
✅ **Rješenje:**
1. Provjeri `/src/styles/theme.css` da li su boje:
   - Primary: `#0F766E`
   - Gold: `#D4AF37`
   - Border: `#CBD5E1`
   - Surface: `#F8FAFC`

### **Problem 3: Layout je pokvaren**
❌ **Simptom:** Elementi nisu pozicionirani dobro  
✅ **Rješenje:**
1. Provjeri da li je `@import 'tailwindcss'` na vrhu `theme.css`
2. Provjeri `postcss.config.mjs` konfiguraciju
3. Obriši `node_modules` i ponovo instaliraj

### **Problem 4: Stilovi uopšte ne rade**
❌ **Simptom:** Sve bijelo, nema stilova  
✅ **Rješenje:**
1. **NAJČEŠĆI PROBLEM:** `/src/app/App.tsx` NE importuje CSS!
   ```tsx
   import "../styles/index.css"; // ← Dodaj ovu liniju!
   ```

---

## ✅ VERIFICATION CHECKLIST

Nakon deploy-a, provjeri:

- [ ] Font je Inter (ne system font)
- [ ] Primary teal boja je `#0F766E`
- [ ] Gold button je `#D4AF37`
- [ ] Background je `#F8FAFC` (light gray)
- [ ] Sidebar ima gradient logo
- [ ] Islamic star bullets u podmenu-ima
- [ ] Accordion behavior (samo jedan podmenu otvoren)
- [ ] View switcher buttons (List/Grid/Card)
- [ ] Hover effects rade
- [ ] Mobile responsive menu radi

---

## 📸 VISUAL COMPARISON

### **Figma Make ↔ emergent.sh**

1. Otvori Figma Make verziju
2. Otvori emergent.sh deployment
3. Side-by-side poređenje:
   - Header height: 64px
   - Sidebar width: 256px (expanded), 64px (collapsed)
   - Font size: 14px (body), 16px (headings)
   - Border radius: 8px (cards), 12px (buttons)
   - Shadows: `shadow-sm`, `shadow-md`, `shadow-lg`

---

## 🎯 FINAL CHECK COMMANDS

```bash
# 1. Provjeri da li fajlovi postoje
ls -la src/styles/

# 2. Provjeri da li App.tsx importuje CSS
grep "import.*index.css" src/app/App.tsx

# 3. Provjeri da li Inter font je u theme.css
grep "font-family.*Inter" src/styles/theme.css

# 4. Rebuild
rm -rf node_modules
npm install
npm run build
```

---

## 🆘 HITNA POMOĆ

Ako nakon svega dizajn još uvijek ne odgovara:

### **Quick Fix Script:**

1. Obriši `src/styles/fonts.css` i kreiraj ponovo sa Inter importom
2. U `src/styles/theme.css` dodaj `'Inter'` na početak `font-family`
3. U `src/app/App.tsx` dodaj `import "../styles/index.css";`
4. Rebuild i deploy ponovo

### **Nuclear Option (ako ništa ne radi):**

```bash
# 1. Obriši sve node_modules i build foldere
rm -rf node_modules dist .vite

# 2. Reinstaliraj sve
npm install

# 3. Rebuild
npm run build

# 4. Force refresh u browseru
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

---

## 📞 KONTAKT

Ako problem i dalje postoji:
1. Screenshot Figma Make verzije
2. Screenshot emergent.sh verzije
3. Browser DevTools Console errors
4. Network tab provjera (da li se CSS učitava)

---

**Zadnja ažuracija:** 4. April 2026  
**Verzija:** 2.0 - Emergent.sh Optimized

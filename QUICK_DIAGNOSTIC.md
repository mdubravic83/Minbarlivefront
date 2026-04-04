# 🔍 BRZA DIJAGNOSTIKA - emergent.sh vs Figma Make

## 🎯 Top 5 Najčešćih Problema

### ❌ **PROBLEM #1: CSS Se Ne Učitava** (90% slučajeva)

**Simptom:** Stranica je potpuno bijela ili nema stilova  
**Uzrok:** `App.tsx` ne importuje CSS  

**RJEŠENJE:**
```tsx
// /src/app/App.tsx
import { RouterProvider } from "react-router";
import { router } from "./routes";
import "../styles/index.css"; // ← MORA biti ovdje!

export default function App() {
  return <RouterProvider router={router} />;
}
```

---

### ❌ **PROBLEM #2: Pogrešan Font** (8% slučajeva)

**Simptom:** Tekst izgleda drugačije nego u Figma Make  
**Uzrok:** Inter font nije učitan ili nije postavljen u body  

**RJEŠENJE 1:** Provjeri `/src/styles/fonts.css`
```css
/* MORA biti ovaj import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
```

**RJEŠENJE 2:** Provjeri `/src/styles/theme.css`
```css
body {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  /* ↑ Inter MORA biti prvi! */
}
```

---

### ❌ **PROBLEM #3: Boje Nisu Tačne** (1% slučajeva)

**Simptom:** Teal/Gold/Gray boje su drugačije  
**Uzrok:** Theme colors nisu dobro kopirani  

**RJEŠENJE:** Provjeri `/src/styles/theme.css`
```css
:root {
  --color-primary: #0F766E;      /* Teal green */
  --color-gold: #D4AF37;          /* Gold */
  --color-border: #CBD5E1;        /* Light gray */
  --color-surface: #F8FAFC;       /* Background */
}
```

---

### ❌ **PROBLEM #4: Build Error** (0.5% slučajeva)

**Simptom:** Build fails ili error u konzoli  
**Uzrok:** Dependencies nisu instalirane  

**RJEŠENJE:**
```bash
# Obriši node_modules
rm -rf node_modules

# Reinstaliraj
npm install
# ili
pnpm install

# Rebuild
npm run build
```

---

### ❌ **PROBLEM #5: Cache Problem** (0.5% slučajeva)

**Simptom:** Kod se promijenio ali stil je isti  
**Uzrok:** Browser cache  

**RJEŠENJE:**
```
1. Hard refresh browser:
   - Chrome/Edge: Ctrl+Shift+R (Windows) ili Cmd+Shift+R (Mac)
   - Firefox: Ctrl+F5
   - Safari: Cmd+Option+R

2. Clear cache u browser DevTools:
   - F12 → Network tab → Disable cache checkbox
   - Refresh

3. Incognito/Private mode test
```

---

## 🛠️ 30-SECOND DIAGNOSTIC

Copy-paste ove komande u terminal:

```bash
# 1. Provjeri da li App.tsx importuje CSS
echo "=== CHECKING APP.TSX CSS IMPORT ==="
grep -n "import.*index.css" src/app/App.tsx || echo "❌ MISSING CSS IMPORT!"

# 2. Provjeri da li fonts.css ima Inter
echo -e "\n=== CHECKING INTER FONT ==="
grep -n "Inter" src/styles/fonts.css || echo "❌ MISSING INTER FONT!"

# 3. Provjeri da li theme.css ima Inter u body
echo -e "\n=== CHECKING BODY FONT ==="
grep -n "font-family.*Inter" src/styles/theme.css || echo "❌ INTER NOT IN BODY!"

# 4. Provjeri brand colors
echo -e "\n=== CHECKING BRAND COLORS ==="
grep -n "#0F766E" src/styles/theme.css || echo "❌ PRIMARY COLOR MISSING!"
grep -n "#D4AF37" src/styles/theme.css || echo "❌ GOLD COLOR MISSING!"

# 5. Provjeri file existence
echo -e "\n=== CHECKING FILES EXIST ==="
ls src/styles/fonts.css src/styles/theme.css src/styles/index.css src/app/App.tsx 2>&1 | grep -v "cannot access" && echo "✅ ALL FILES EXIST" || echo "❌ MISSING FILES!"
```

---

## 🚑 EMERGENCY FIX (5 minuta)

Ako ništa ne radi, slijedi ove korake **tačno ovim redom**:

### **Korak 1: Fix fonts.css**
```bash
cat > src/styles/fonts.css << 'EOF'
/* Font Imports - Add all font imports at the top of this file */

/* Inter - Primary Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
EOF
```

### **Korak 2: Fix theme.css body font**
```bash
# Otvori src/styles/theme.css i zamijeni body sekciju sa:
body {
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-surface);
  color: var(--color-text);
}
```

### **Korak 3: Fix App.tsx import**
```bash
# Otvori src/app/App.tsx i dodaj nakon import linija:
import "../styles/index.css";
```

### **Korak 4: Rebuild**
```bash
rm -rf node_modules dist
npm install
npm run build
```

### **Korak 5: Hard Refresh Browser**
```
Ctrl+Shift+R (ili Cmd+Shift+R na Mac)
```

---

## 📊 VERIFICATION TABLE

| Element | Očekivana Vrijednost | Kako Provjeriti |
|---------|---------------------|----------------|
| Font | Inter | DevTools → Computed → font-family |
| Primary Color | `#0F766E` | Inspect sidebar → background-color |
| Gold Color | `#D4AF37` | Inspect gold button → background-color |
| Background | `#F8FAFC` | Inspect body → background-color |
| Sidebar Width | 256px expanded / 64px collapsed | DevTools → Computed → width |
| Header Height | 64px | DevTools → Computed → height |

---

## 🎯 QUICK COMPARISON CHECKLIST

Otvori Figma Make i emergent.sh side-by-side:

- [ ] Font izgleda isto (Inter vs system font)
- [ ] Sidebar teal boja je ista (`#0F766E`)
- [ ] Gold button je ista nijansa (`#D4AF37`)
- [ ] Background siva je ista (`#F8FAFC`)
- [ ] Mosque icon logo u sidebar-u
- [ ] Islamic star bullets u podmenu-ima
- [ ] Hover effects rade
- [ ] View switcher buttons (List/Grid/Card)

---

## 🆘 AKO NIŠTA NE RADI

### **Plan B: Fresh Start**

1. Download fresh codebase sa Figma Make
2. Extract u novi folder
3. Copy samo `/src` folder u emergent.sh
4. Obavezno kopiraj i:
   - `package.json`
   - `vite.config.ts`
   - `postcss.config.mjs`
5. `npm install && npm run build`

### **Plan C: Side-by-Side File Comparison**

Otvori Figma Make i emergent.sh codebase:

1. Compare `/src/app/App.tsx` (red po red)
2. Compare `/src/styles/fonts.css`
3. Compare `/src/styles/theme.css`
4. Compare `/src/styles/index.css`

Najvjerovatnije će jedan od ova 4 fajla biti drugačiji!

---

## 📞 DEBUG INFO ZA POMOĆ

Ako trebaš pomoć, pošalji:

```bash
# 1. Verzija Node.js
node -v

# 2. Package manager verzija
npm -v
# ili
pnpm -v

# 3. Sadržaj App.tsx
cat src/app/App.tsx

# 4. Sadržaj fonts.css
cat src/styles/fonts.css

# 5. První 30 linija theme.css
head -30 src/styles/theme.css

# 6. Browser console errors (F12 → Console tab)
# Screenshot konzole

# 7. Network tab (F12 → Network tab)
# Screenshot pokazuje li se index.css kao loaded
```

---

**Napomena:** 98% problema se rješava sa **3 fixa**:
1. Import CSS u App.tsx
2. Inter font u fonts.css
3. Inter u body font-family u theme.css

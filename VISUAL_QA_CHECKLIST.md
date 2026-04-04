# ✅ Visual QA Checklist

> **Quick reference for verifying design consistency between Figma Make and emergent.sh**

---

## 🎯 How to Use This Checklist

1. Open **Figma Make preview** in one browser window
2. Open **emergent.sh deployment** in another window
3. Go through each section below
4. Check ✅ or ❌ for each item
5. Fix ❌ items using [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)

---

## 📱 Testing Viewports

Test at these exact widths:

```
Mobile:   375px × 667px  (iPhone SE)
Tablet:   768px × 1024px (iPad)
Desktop:  1440px × 900px (MacBook Pro)
Wide:     1920px × 1080px (Full HD)
```

**How to test:**
- Chrome DevTools → Toggle device toolbar (Cmd/Ctrl + Shift + M)
- Set custom dimensions
- Compare side-by-side

---

## 1️⃣ Typography

### **Font Family**
- [ ] All text uses Inter font (not Arial, Times, or Helvetica)
- [ ] No Times New Roman fallback visible
- [ ] Font loads within 1 second

**Check:** Inspect any text element → Computed tab → font-family

**Expected:**
```
font-family: Inter, system-ui, -apple-system, sans-serif
```

---

### **Font Sizes**
- [ ] Headings match Figma (h1, h2, h3)
- [ ] Body text matches (14px, 16px, 18px)
- [ ] Small text matches (12px)
- [ ] Responsive text scales correctly

**Check:** Measure text in DevTools

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| H1 | 24px | 30px | 36px |
| H2 | 20px | 24px | 30px |
| Body | 14px | 16px | 16px |

---

### **Font Weights**
- [ ] Regular (400) used for body text
- [ ] Medium (500) used for labels
- [ ] SemiBold (600) used for subheadings
- [ ] Bold (700) used for headings

---

### **Line Height**
- [ ] Headings: 1.2 - 1.3
- [ ] Body: 1.5 - 1.75
- [ ] Buttons: 1.0 (tight)

---

## 2️⃣ Colors

### **Primary Colors**
- [ ] Teal dark: `#0F766E` (primary buttons, links)
- [ ] Teal light: `#14B8A6` (hover states, accents)
- [ ] Teal ultra-light: `#F0FDFA` (backgrounds)

**Check:** Use color picker extension or DevTools

---

### **Accent Colors**
- [ ] Gold: `#D4AF37` (premium buttons)
- [ ] Gold dark: `#C49B2F` (hover states)

---

### **Neutrals**
- [ ] Text primary: `#0F172A` (nearly black)
- [ ] Text secondary: `#475569` (gray)
- [ ] Border: `#CBD5E1` (light gray)
- [ ] Background: `#F8FAFC` (off-white)

---

### **Status Colors**
- [ ] Red (Live): `#DC2626` / `#FEE2E2`
- [ ] Green (Complete): `#16A34A` / `#DCFCE7`
- [ ] Blue (Processing): `#2563EB` / `#DBEAFE`
- [ ] Yellow (Warning): `#CA8A04` / `#FEF3C7`

---

## 3️⃣ Spacing

### **Padding**
- [ ] Cards: 24px (p-6)
- [ ] Buttons: 12px horizontal, 8px vertical
- [ ] Containers: 24px (p-6) on desktop, 16px (p-4) on mobile
- [ ] Sections: 48px top/bottom (py-12)

**Check:** Hover element → Box Model tab in DevTools

---

### **Margin / Gap**
- [ ] Between cards: 16px - 24px (gap-4 to gap-6)
- [ ] Between sections: 24px - 32px (space-y-6 to space-y-8)
- [ ] Grid gaps: 16px on mobile, 24px on desktop

---

### **Container Widths**
- [ ] Max-width: 1280px (max-w-7xl)
- [ ] Centered: mx-auto
- [ ] Horizontal padding: px-6 (24px)

---

## 4️⃣ Borders & Radius

### **Border Widths**
- [ ] Standard: 1px (border)
- [ ] Focused inputs: 2px (border-2)
- [ ] Cards: 1px (border)

---

### **Border Radius**
- [ ] Small: 8px (rounded-lg) - small cards, inputs
- [ ] Medium: 16px (rounded-xl) - cards, buttons
- [ ] Large: 24px (rounded-2xl) - large sections
- [ ] Full: Circle (rounded-full) - badges, avatars

**Check:** Measure corner radius in DevTools

---

### **Border Colors**
- [ ] Default: `#CBD5E1`
- [ ] Focused: `#0F766E`
- [ ] Error: `#DC2626`

---

## 5️⃣ Shadows

### **Card Shadows**
- [ ] Default: subtle (shadow-sm)
- [ ] Hover: medium (shadow-lg)
- [ ] Modal: large (shadow-xl)

**Check:** box-shadow in Computed tab

**Expected values:**
```css
shadow-sm:  0 1px 2px rgba(0,0,0,0.05)
shadow-md:  0 4px 6px rgba(0,0,0,0.1)
shadow-lg:  0 10px 15px rgba(0,0,0,0.1)
shadow-xl:  0 20px 25px rgba(0,0,0,0.1)
```

---

## 6️⃣ Buttons

### **Primary Button (Teal)**
- [ ] Background: gradient from `#0F766E` to `#14B8A6`
- [ ] Text: white
- [ ] Padding: px-6 py-3 (24px × 12px)
- [ ] Border radius: 16px (rounded-xl)
- [ ] Shadow: shadow-lg
- [ ] Hover: gradient reverses direction
- [ ] Transition: smooth (300ms)

---

### **Gold Button (Premium)**
- [ ] Background: gradient from `#D4AF37` to `#C49B2F`
- [ ] Text: white
- [ ] Same dimensions as primary
- [ ] Hover: gradient reverses

---

### **Secondary Button**
- [ ] Background: white
- [ ] Border: 2px solid `#CBD5E1`
- [ ] Text: `#0F172A`
- [ ] Hover: background `#F8FAFC`

---

### **Ghost Button**
- [ ] Background: transparent
- [ ] Text: `#475569`
- [ ] Hover: background `#F8FAFC`
- [ ] Padding: px-4 py-2

---

## 7️⃣ Inputs

### **Text Input**
- [ ] Border: 2px solid `#CBD5E1`
- [ ] Border radius: 16px (rounded-xl)
- [ ] Padding: px-4 py-3
- [ ] Background: white
- [ ] Placeholder: `#94A3B8`
- [ ] Focus: border `#0F766E`, ring effect
- [ ] Text: `#0F172A`

---

### **Input with Icon**
- [ ] Icon: left-aligned, `#475569`
- [ ] Icon size: 18px
- [ ] Padding left: 48px (pl-12)

---

### **Search Input**
- [ ] Border radius: 12px (rounded-lg)
- [ ] Height: 40px
- [ ] Icon: magnifying glass, left side

---

## 8️⃣ Cards

### **Basic Card**
- [ ] Background: white
- [ ] Border: 1px solid `#CBD5E1`
- [ ] Border radius: 16px (rounded-xl)
- [ ] Padding: 24px (p-6)
- [ ] Shadow: shadow-sm
- [ ] Hover: shadow-lg

---

### **Gradient Card (Primary)**
- [ ] Background: gradient from `#F0FDFA` to white
- [ ] Border: 2px solid `#0F766E` at 30% opacity
- [ ] Border radius: 16px

---

### **Gradient Card (Gold)**
- [ ] Background: gradient from `#FFFBEB` to white
- [ ] Border: 2px solid `#D4AF37` at 30% opacity

---

## 9️⃣ Navigation

### **Sidebar**
- [ ] Width: 280px (w-70) expanded, 80px collapsed
- [ ] Background: white
- [ ] Border right: 1px solid `#CBD5E1`
- [ ] Logo section: 64px height (h-16)
- [ ] Active item: `#F0FDFA` background, `#0F766E` text
- [ ] Hover: `#F8FAFC` background

---

### **Top Header**
- [ ] Height: 64px (h-16)
- [ ] Border bottom: 1px solid `#CBD5E1`
- [ ] Background: white
- [ ] Padding: px-6

---

### **Mobile Menu**
- [ ] Hamburger icon: 24px
- [ ] Drawer: slides from left
- [ ] Overlay: backdrop blur
- [ ] Close animation: smooth

---

## 🔟 Badges & Status

### **Live Badge**
- [ ] Background: `#FEE2E2` (red-100)
- [ ] Text: `#DC2626` (red-700)
- [ ] Pulsing dot: animate-pulse
- [ ] Border radius: full (rounded-full)
- [ ] Padding: px-2 py-1
- [ ] Font size: 12px (text-xs)

---

### **Processing Badge**
- [ ] Background: `#DBEAFE` (blue-100)
- [ ] Text: `#2563EB` (blue-700)

---

### **Complete Badge**
- [ ] Background: `#DCFCE7` (green-100)
- [ ] Text: `#16A34A` (green-700)

---

## 1️⃣1️⃣ Icons

### **Icon Sizes**
- [ ] Small: 14px (buttons, inline)
- [ ] Standard: 18px (navigation, inputs)
- [ ] Large: 24px (headers, features)
- [ ] XL: 32px (hero sections)

---

### **Icon Colors**
- [ ] Primary: `#0F766E`
- [ ] Secondary: `#475569`
- [ ] Disabled: `#CBD5E1`
- [ ] On colored bg: white

---

### **Custom Icons**
- [ ] Mosque icon: renders correctly
- [ ] Minaret icon: renders correctly
- [ ] No broken SVGs

---

## 1️⃣2️⃣ Responsive Behavior

### **Mobile (375px)**
- [ ] No horizontal scroll
- [ ] Touch targets >= 44px
- [ ] Text readable (not too small)
- [ ] Hamburger menu works
- [ ] Grid: 1 column
- [ ] Padding: p-4 (16px)

---

### **Tablet (768px)**
- [ ] Layout adapts
- [ ] Grid: 2 columns where appropriate
- [ ] Sidebar remains visible
- [ ] Text size increases
- [ ] Padding: p-6 (24px)

---

### **Desktop (1440px)**
- [ ] Full layout visible
- [ ] Grid: 3-4 columns
- [ ] Max container width: 1280px
- [ ] All features accessible
- [ ] Proper whitespace

---

## 1️⃣3️⃣ Interactions

### **Hover States**
- [ ] Buttons change color
- [ ] Cards lift (shadow increases)
- [ ] Links underline or change color
- [ ] Cursor changes to pointer
- [ ] Smooth transitions (300ms)

---

### **Focus States**
- [ ] Visible focus ring on inputs
- [ ] Ring color: `#0F766E` at 20% opacity
- [ ] Tab navigation works
- [ ] Skip links available

---

### **Transitions**
- [ ] All transitions: 300ms ease
- [ ] No janky animations
- [ ] Smooth color changes
- [ ] Smooth shadow changes

---

## 1️⃣4️⃣ Loading States

### **Skeleton Loaders**
- [ ] Gray pulse animation
- [ ] Matches content shape
- [ ] Smooth transition to content

---

### **Spinners**
- [ ] Circular spinner
- [ ] Centered in container
- [ ] Color: `#0F766E`
- [ ] Smooth rotation

---

## 1️⃣5️⃣ Empty States

### **No Data**
- [ ] Icon displayed (48px)
- [ ] Message text: 18px
- [ ] Subtext: 14px, `#475569`
- [ ] Action button if applicable
- [ ] Centered vertically

---

## 1️⃣6️⃣ Forms

### **Form Layout**
- [ ] Labels: 14px, `#0F172A`, mb-2
- [ ] Inputs: consistent height (48px)
- [ ] Spacing between fields: 20px (space-y-5)
- [ ] Submit button: full width on mobile

---

### **Validation**
- [ ] Error messages: red text, below input
- [ ] Error borders: `#DC2626`
- [ ] Success: green border/icon
- [ ] Helper text: 12px, `#475569`

---

## 1️⃣7️⃣ Tables (Desktop)

### **Table Header**
- [ ] Background: `#F8FAFC`
- [ ] Border: 1px solid `#CBD5E1`
- [ ] Text: 12px uppercase, `#475569`
- [ ] Padding: px-6 py-3

---

### **Table Row**
- [ ] Border: 1px solid `#CBD5E1` (dividers)
- [ ] Hover: `#F8FAFC` background
- [ ] Padding: px-6 py-4
- [ ] Text: 14px, `#0F172A`

---

## 1️⃣8️⃣ Modals & Dialogs

### **Modal**
- [ ] Backdrop: semi-transparent black
- [ ] Container: white, rounded-2xl
- [ ] Max-width: 500px
- [ ] Shadow: shadow-2xl
- [ ] Padding: p-6
- [ ] Close button: top-right, 24px

---

### **Drawer (Mobile)**
- [ ] Slides from left/right
- [ ] Full height
- [ ] Backdrop blur
- [ ] Close animation smooth

---

## 1️⃣9️⃣ Performance

### **Load Times**
- [ ] First paint: < 1s
- [ ] Font load: < 1s
- [ ] Images load: < 2s
- [ ] Full interactive: < 3s

---

### **Console**
- [ ] No errors
- [ ] No warnings
- [ ] No 404s
- [ ] Fonts loaded successfully

---

## 2️⃣0️⃣ Accessibility

### **Semantic HTML**
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Buttons are `<button>` not `<div>`
- [ ] Links are `<a>` not `<div>`
- [ ] Forms use `<form>` tag

---

### **ARIA**
- [ ] Images have alt text
- [ ] Buttons have aria-labels
- [ ] Hidden elements: aria-hidden="true"
- [ ] Live regions for dynamic content

---

### **Keyboard Navigation**
- [ ] Tab order logical
- [ ] Focus visible
- [ ] Skip to main content link
- [ ] Modal traps focus
- [ ] Escape closes modal

---

## ✅ Final Checks

### **Cross-Browser**
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (Mac/iOS)

---

### **Device Testing**
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (all browsers)

---

### **Screenshot Comparison**
- [ ] Take screenshots of Figma Make
- [ ] Take screenshots of emergent.sh
- [ ] Overlay in image editor
- [ ] Differences < 5%

---

## 📊 Scoring

**Total items:** ~150

**Passing score:** 95% (143/150)

**Excellent:** 98%+ (147/150)

**Perfect:** 100% (150/150) - Nearly impossible, but aim high!

---

## 📝 How to Document Issues

When you find a mismatch:

```markdown
## Issue: Button Color Wrong

**Component:** Primary Button (Login page)
**Expected:** #0F766E
**Actual:** #14B8A6
**Screenshot:** [attach]
**Fix:** Update className to bg-[#0F766E]
```

---

## 🎯 Priority Levels

### **P0 - Critical (Must Fix)**
- Font not loading
- Layout completely broken
- No styles applied
- Site unusable on mobile

### **P1 - High (Should Fix)**
- Wrong colors
- Spacing off by >8px
- Broken responsive behavior
- Hover states missing

### **P2 - Medium (Nice to Fix)**
- Spacing off by 2-4px
- Shadow slightly different
- Minor animation differences

### **P3 - Low (Acceptable)**
- Font rendering (anti-aliasing)
- Sub-pixel differences
- Minor contrast variations

---

**Remember:** Aim for 95%+ match. Pixel-perfect is nearly impossible due to browser rendering differences!

---

**Last Updated:** Saturday, April 4, 2026  
**Version:** 1.0.0

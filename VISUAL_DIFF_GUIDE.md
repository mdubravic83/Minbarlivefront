# 👀 VIZUELNA PROVJERA - Figma Make vs emergent.sh

## 🎨 SIDE-BY-SIDE COMPARISON

### **1. FONT CHECK** 
```
┌─────────────────────────────────────────────────────────┐
│  Figma Make           │  emergent.sh                    │
├───────────────────────┼─────────────────────────────────┤
│  Font: Inter          │  Font: Inter ✅                 │
│  (clean, geometric)   │  NOT system-ui ❌               │
│                       │  NOT Arial ❌                    │
└───────────────────────┴─────────────────────────────────┘

👁️ KAKO PROVJERITI:
F12 → Elements → <body> → Computed → font-family
OČEKIVANO: "Inter", system-ui, -apple-system...
```

---

### **2. COLOR PALETTE**
```
┌────────────────────────────────────────────────────────────┐
│ Element            │ Figma Make    │ emergent.sh          │
├────────────────────┼───────────────┼──────────────────────┤
│ Sidebar BG         │ White         │ White ✅             │
│ Active Item        │ #F0FDFA       │ #F0FDFA ✅           │
│ Hover Item         │ #F8FAFC       │ #F8FAFC ✅           │
│ Primary Button     │ #D4AF37 (gold)│ #D4AF37 ✅           │
│ Teal Accent        │ #0F766E       │ #0F766E ✅           │
│ Body BG            │ #F8FAFC       │ #F8FAFC ✅           │
│ Border             │ #CBD5E1       │ #CBD5E1 ✅           │
│ Text               │ #0F172A       │ #0F172A ✅           │
└────────────────────┴───────────────┴──────────────────────┘

👁️ KAKO PROVJERITI:
1. Inspect element (F12)
2. Computed tab → background-color / color
3. Uporedi hex vrijednosti
```

---

### **3. SIDEBAR MEASUREMENTS**
```
┌──────────────────────────────────────────┐
│  EXPANDED SIDEBAR                        │
│  ┌────────────────┐                      │
│  │  256px wide    │  ✅ Correct          │
│  │                │                      │
│  │  [Logo]        │  64px height         │
│  │  ─────────     │                      │
│  │  [Nav Items]   │  40px each           │
│  │  • Dashboard   │  8px star bullet     │
│  │  • HutbaLive   │  left: 36px margin   │
│  │                │                      │
│  └────────────────┘                      │
│                                          │
│  COLLAPSED SIDEBAR                       │
│  ┌──┐                                    │
│  │64│  ✅ Correct                        │
│  │px│  Icons only                        │
│  │  │  Tooltips on hover                 │
│  └──┘                                    │
└──────────────────────────────────────────┘

👁️ KAKO PROVJERITI:
F12 → Select sidebar <aside> → Computed → width
EXPANDED: 256px (16rem)
COLLAPSED: 64px (4rem)
```

---

### **4. HEADER MEASUREMENTS**
```
┌─────────────────────────────────────────────────────────┐
│  HEADER BAR                                 64px height │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [Scope] [Quick Actions] ... [Search] [🔔] [👤] │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Quick Actions Button:                                 │
│  - Background: gradient #D4AF37 → #C49B2F              │
│  - Padding: 12px 16px                                  │
│  - Border radius: 12px (rounded-xl)                    │
│  - Shadow: shadow-md                                   │
└─────────────────────────────────────────────────────────┘

👁️ KAKO PROVJERITI:
F12 → Select header → Computed → height
OČEKIVANO: 64px (4rem)
```

---

### **5. BUTTONS & INTERACTIONS**
```
┌────────────────────────────────────────────────────────┐
│  PRIMARY BUTTON (Quick Actions)                       │
│  ┌──────────────────┐                                 │
│  │ ⚡ Quick Actions │  ← Gold gradient                │
│  └──────────────────┘                                 │
│  Normal: #D4AF37 → #C49B2F                            │
│  Hover:  #C49B2F → #B38B1F (darker)                   │
│  Shadow: shadow-md → shadow-lg (on hover)             │
│                                                        │
│  VIEW SWITCHER                                        │
│  ┌───┬───┬───┐                                        │
│  │📋│🎴│📄│  ← 16px icons                             │
│  └───┴───┴───┘                                        │
│  Active: white bg + #0F766E color + shadow-sm        │
│  Inactive: transparent + #475569 + hover effect      │
└────────────────────────────────────────────────────────┘

👁️ KAKO PROVJERITI:
1. Hover preko buttona
2. Provjeri da li se boja mijenja
3. Provjeri shadow transition
```

---

### **6. TYPOGRAPHY**
```
┌────────────────────────────────────────────────────────┐
│  Element           │  Size   │  Weight  │  Color      │
├────────────────────┼─────────┼──────────┼─────────────┤
│  Page Title (h1)   │  24px   │  600     │  #0F172A    │
│  Section Header    │  16px   │  600     │  #0F172A    │
│  Body Text         │  14px   │  400     │  #475569    │
│  Nav Item          │  14px   │  500     │  #475569    │
│  Nav Item (active) │  14px   │  500     │  #0F766E    │
│  Button Text       │  14px   │  600     │  white      │
│  Caption / Label   │  12px   │  400     │  #94A3B8    │
└────────────────────┴─────────┴──────────┴─────────────┘

👁️ KAKO PROVJERITI:
F12 → Computed → font-size, font-weight, color
```

---

### **7. SPACING & PADDING**
```
┌────────────────────────────────────────────────────────┐
│  MAIN CONTENT AREA                                    │
│  ┌────────────────────────────────────────────┐       │
│  │  Padding: 24px (p-6)                       │       │
│  │  ┌──────────────────────────────────┐      │       │
│  │  │  Card padding: 20px (p-5)        │      │       │
│  │  │  Border radius: 12px (rounded-lg)│      │       │
│  │  │  Border: 1px #CBD5E1             │      │       │
│  │  └──────────────────────────────────┘      │       │
│  │  Gap between cards: 16px (space-y-4)       │       │
│  └────────────────────────────────────────────┘       │
└────────────────────────────────────────────────────────┘

👁️ KAKO PROVJERITI:
F12 → Computed → padding, margin, gap
```

---

### **8. ICONS**
```
┌────────────────────────────────────────────────────────┐
│  MOSQUE LOGO (Sidebar)                                │
│  ┌────┐                                               │
│  │ 🕌 │  32x32px                                      │
│  └────┘  Gradient: #0F766E → #14B8A6                 │
│          Rounded: 8px (rounded-lg)                    │
│          Shadow: shadow-md                            │
│                                                        │
│  ISLAMIC STAR BULLETS (Submenu)                       │
│  ⭐ 8px size                                           │
│     Active: #0F766E                                   │
│     Inactive: #CBD5E1                                 │
│                                                        │
│  LUCIDE ICONS (General)                               │
│  📋 List: 16-18px                                     │
│  🎴 Grid: 16-18px                                     │
│  ⚙️ Settings: 16-18px                                │
└────────────────────────────────────────────────────────┘

👁️ KAKO PROVJERITI:
F12 → Select icon → Computed → width, height
```

---

### **9. ANIMATIONS & TRANSITIONS**
```
┌────────────────────────────────────────────────────────┐
│  HOVER EFFECTS                                        │
│  • Sidebar items: bg-[#F8FAFC] (200ms ease)          │
│  • Buttons: shadow lift (300ms ease)                 │
│  • Cards: border-[#0F766E] (200ms ease)              │
│                                                        │
│  LIVE INDICATORS                                      │
│  • Red dot: animate-pulse (infinite)                 │
│  • Status badge: 1.5s pulse cycle                    │
│                                                        │
│  SIDEBAR COLLAPSE                                     │
│  • Width: 256px → 64px (300ms ease)                  │
│  • Icons remain visible                              │
│  • Text fades out                                     │
└────────────────────────────────────────────────────────┘

👁️ KAKO PROVJERITI:
1. Hover elements
2. Provjeri smooth transitions
3. Check console za animation errors
```

---

### **10. RESPONSIVE BREAKPOINTS**
```
┌────────────────────────────────────────────────────────┐
│  BREAKPOINT        │  SIDEBAR     │  GRID COLUMNS      │
├────────────────────┼──────────────┼────────────────────┤
│  Mobile (<768px)   │  Drawer      │  1 column          │
│  Tablet (768-1024) │  Fixed 256px │  2 columns         │
│  Desktop (>1024)   │  Fixed 256px │  3 columns         │
└────────────────────┴──────────────┴────────────────────┘

👁️ KAKO PROVJERITI:
F12 → Device Toolbar (Ctrl+Shift+M)
Testiraj: 375px, 768px, 1024px, 1440px
```

---

## 🎯 QUICK VISUAL TEST

### **30-Second Eye Test**

1. **Otvori Figma Make verziju**
2. **Otvori emergent.sh verziju**
3. **Side-by-side comparison:**

```
┌─────────────────────┬─────────────────────┐
│   Figma Make        │   emergent.sh       │
├─────────────────────┼─────────────────────┤
│ Font crisp & clean? │ Font crisp & clean? │
│ Gold buttons same?  │ Gold buttons same?  │
│ Teal sidebar same?  │ Teal sidebar same?  │
│ Stars in bullets?   │ Stars in bullets?   │
│ Hover works?        │ Hover works?        │
│ Live pulse animates?│ Live pulse animates?│
│ View switcher works?│ View switcher works?│
└─────────────────────┴─────────────────────┘
```

**Ako svi check-ovi su ✅ → Perfect match!**  
**Ako bilo koji check je ❌ → Vidi QUICK_DIAGNOSTIC.md**

---

## 🔬 PIXEL-PERFECT COMPARISON

### **Screenshot Overlay Method**

1. Screenshot Figma Make (full page)
2. Screenshot emergent.sh (full page)
3. Overlay u Photoshop/GIMP
4. Set top layer to 50% opacity
5. Look for misalignments

**Cijela stranica bi trebala biti 95%+ aligned!**

---

## 📊 ACCEPTANCE CRITERIA

| Criteria | Target | How to Verify |
|----------|--------|---------------|
| Font Match | 100% | DevTools font-family = Inter |
| Color Match | 100% | Hex values identical |
| Layout Match | 95%+ | Measurements within 2px |
| Interaction Match | 100% | All hovers/clicks work |
| Responsive Match | 100% | Same breakpoints |
| Animation Match | 100% | Same timing functions |

---

**Ako sve provjere prolaze → SUCCESS! 🎉**  
**Ako nešto ne prolazi → QUICK_DIAGNOSTIC.md za fix**

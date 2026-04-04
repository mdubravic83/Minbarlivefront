# 🤖 Agent Instructions for MinbarLive Design

> **Critical instructions for AI agents (Emergent, Claude, ChatGPT, etc.) working on this project**

---

## 🎯 Your Mission

You are maintaining a **B2B SaaS Admin Dashboard** for MinbarLive - a platform for live khutbah translation, podcast transcripts, and video processing for Islamic organizations.

**PRIMARY GOAL:** Maintain **pixel-perfect consistency** between Figma design and deployed application.

---

## ⚠️ CRITICAL RULES - READ FIRST

### **🚫 NEVER MODIFY THESE FILES WITHOUT EXPLICIT PERMISSION:**

```
/src/styles/fonts.css          ← Font loading (CRITICAL)
/src/styles/theme.css          ← Design tokens (CRITICAL)
/tailwind.config.js            ← Tailwind config (CRITICAL)
/public/fonts/*                ← Font files (DO NOT DELETE)
/DESIGN_SYSTEM.md              ← This is your bible
/DEPLOYMENT.md                 ← Deployment checklist
```

**Why?** These files define the entire visual system. Changing them will break design consistency.

---

## 📖 Required Reading Before ANY Changes

1. **Read `/DESIGN_SYSTEM.md` first** - Contains all design tokens, standards, and acceptance criteria
2. **Read `/DEPLOYMENT.md` second** - Contains deployment and troubleshooting guide
3. **Check Figma Make preview** - Your source of truth for visual design

---

## ✅ What You CAN Modify Freely

### **Safe to Change:**
- Component logic (state, props, handlers)
- Data fetching and API calls
- Business logic
- Form validation
- Routing logic
- Mock data
- TypeScript types/interfaces
- Comments and documentation

### **Change WITH CAUTION:**
- Component structure (JSX)
- Tailwind classes (must match design system)
- Layout (spacing, flex, grid)
- New components (must follow design system)

---

## 🎨 Design System Quick Reference

### **Colors (USE EXACT HEX VALUES)**

```tsx
// ✅ CORRECT
className="bg-[#0F766E]"      // Primary Teal
className="bg-[#14B8A6]"      // Primary Teal Light
className="bg-[#D4AF37]"      // Gold
className="text-[#0F172A]"    // Text Primary
className="text-[#475569]"    // Text Secondary

// ❌ WRONG
className="bg-teal-700"       // DON'T use Tailwind defaults
className="bg-primary"        // DON'T create custom names
```

### **Spacing (USE TAILWIND CLASSES)**

```tsx
// ✅ CORRECT
className="p-6"         // 24px padding
className="gap-4"       // 16px gap
className="space-y-6"   // 24px vertical spacing

// ❌ WRONG
className="p-[23px]"    // DON'T use arbitrary values
className="padding: 24px"  // DON'T use inline styles
```

### **Typography**

```tsx
// ✅ CORRECT - Font already set in theme.css
className="text-sm font-medium"
className="text-2xl font-bold"

// ❌ WRONG - DON'T override font family
className="font-sans"      // Already default
className="font-[Inter]"   // Redundant
style={{ fontFamily: 'Arial' }}  // NEVER
```

### **Border Radius**

```tsx
// ✅ CORRECT
className="rounded-xl"    // 16px
className="rounded-2xl"   // 24px
className="rounded-full"  // Circle

// ❌ WRONG
className="rounded-[15px]"  // Use standard values
```

### **Shadows**

```tsx
// ✅ CORRECT
className="shadow-sm"     // Subtle
className="shadow-lg"     // Cards
className="shadow-xl"     // Modals

// ❌ WRONG
style={{ boxShadow: '...' }}  // Use Tailwind
```

---

## 🧩 Component Patterns

### **Button Pattern**

```tsx
// Primary Button (Teal Gradient)
<button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white font-semibold rounded-xl hover:from-[#14B8A6] hover:to-[#0F766E] transition-all shadow-lg">
  {/* Content */}
</button>

// Gold Premium Button
<button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C49B2F] text-white font-semibold rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] transition-all shadow-lg">
  {/* Content */}
</button>

// Secondary Button
<button className="px-6 py-3 bg-white border-2 border-[#CBD5E1] text-[#0F172A] font-semibold rounded-xl hover:bg-[#F8FAFC] transition-all">
  {/* Content */}
</button>
```

### **Input Pattern**

```tsx
<input
  type="text"
  className="w-full px-4 py-3 bg-white border-2 border-[#CBD5E1] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition-all"
  placeholder="Enter text..."
/>
```

### **Card Pattern**

```tsx
<div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">
  {/* Card Content */}
</div>
```

### **Status Badge Pattern**

```tsx
// Live Status
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
  Live
</span>

// Processing Status
<span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
  Processing
</span>

// Complete Status
<span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
  Complete
</span>
```

---

## 🚨 Common Mistakes to AVOID

### **1. Don't Break Responsive Design**

```tsx
// ❌ WRONG - Fixed widths
className="w-[800px]"

// ✅ CORRECT - Responsive
className="w-full max-w-7xl mx-auto"
```

### **2. Don't Use Inline Styles**

```tsx
// ❌ WRONG
style={{ backgroundColor: '#0F766E', padding: '16px' }}

// ✅ CORRECT
className="bg-[#0F766E] p-4"
```

### **3. Don't Override Font Family**

```tsx
// ❌ WRONG
className="font-[Inter]"
style={{ fontFamily: 'Inter' }}

// ✅ CORRECT
// Font already set globally - don't specify
className="text-sm font-medium"
```

### **4. Don't Create Custom Colors**

```tsx
// ❌ WRONG
const primaryColor = '#0F766E';
style={{ color: primaryColor }}

// ✅ CORRECT
className="text-[#0F766E]"
```

### **5. Don't Forget Mobile Responsive**

```tsx
// ❌ WRONG - Desktop only
<div className="grid grid-cols-4 gap-6">

// ✅ CORRECT - Mobile first
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
```

---

## 📱 Responsive Breakpoints

**Mobile First Approach:**

```tsx
// Base: Mobile (0px+)
className="text-sm"

// Small: Small tablets (640px+)
className="sm:text-base"

// Medium: Tablets (768px+)
className="md:text-lg"

// Large: Desktops (1024px+)
className="lg:text-xl"

// Extra Large: Wide screens (1280px+)
className="xl:text-2xl"
```

**Example:**
```tsx
<div className="p-4 sm:p-6 lg:p-8">
  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
    Responsive Heading
  </h1>
</div>
```

---

## 🎯 When Adding New Features

### **Step 1: Check Design System**
- Does component already exist?
- What colors should be used?
- What spacing is standard?

### **Step 2: Follow Existing Patterns**
- Find similar component
- Copy structure and classes
- Modify content only

### **Step 3: Test Responsive**
```bash
# Test at these widths:
375px  # Mobile
768px  # Tablet
1024px # Desktop
1440px # Wide screen
```

### **Step 4: Visual QA**
- Does it match Figma?
- Is spacing consistent?
- Are colors exact?
- Does hover state work?

---

## 🐛 If Something Looks Wrong

### **Debugging Process:**

1. **Check Browser Console**
   - Any errors?
   - Any 404s (fonts, images)?

2. **Inspect Element**
   - Are Tailwind classes applied?
   - Are colors correct?
   - Is spacing correct?

3. **Compare to Figma**
   - Screenshot both
   - Measure differences
   - Check design tokens

4. **Check CSS Import Order**
   ```tsx
   // main.tsx - must be in this order:
   import './styles/fonts.css'
   import './styles/theme.css'
   import './styles/globals.css'
   ```

5. **Rebuild**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📋 Pre-Commit Checklist

Before committing ANY changes:

- [ ] Code compiles without errors
- [ ] No console errors in browser
- [ ] Visual check against Figma
- [ ] Responsive check (mobile, tablet, desktop)
- [ ] No inline styles added
- [ ] No font-family overrides
- [ ] Colors match design system
- [ ] Spacing matches design system
- [ ] Documented any non-obvious logic

---

## 🎨 Icons

**Use Lucide React:**

```tsx
import { Icon } from 'lucide-react';

// Standard size: 18-20px
<Icon size={18} className="text-[#475569]" />

// Small size: 14-16px
<Icon size={14} className="text-[#475569]" />

// Large size: 24px
<Icon size={24} className="text-[#0F766E]" />
```

**Custom Mosque Icons:**
```tsx
import { MosqueIconSimple, MinaretIcon } from './components/icons/MosqueIcon';

<MosqueIconSimple size={24} className="text-[#0F766E]" />
<MinaretIcon size={20} className="text-white" />
```

---

## 🔍 Quality Checklist

Every component you create or modify must pass:

### **Visual**
- [ ] Matches Figma design
- [ ] Colors exact (HEX codes)
- [ ] Spacing correct (within 4px)
- [ ] Typography correct
- [ ] Icons correct size
- [ ] Shadows correct

### **Responsive**
- [ ] Works on mobile (375px)
- [ ] Works on tablet (768px)
- [ ] Works on desktop (1440px)
- [ ] No horizontal scroll
- [ ] Touch targets >= 44px

### **Code Quality**
- [ ] No inline styles
- [ ] No arbitrary Tailwind values (unless necessary)
- [ ] No font-family overrides
- [ ] Follows existing patterns
- [ ] Properly typed (TypeScript)
- [ ] Commented where needed

### **Accessibility**
- [ ] Proper semantic HTML
- [ ] Alt text on images
- [ ] ARIA labels where needed
- [ ] Keyboard navigable
- [ ] Focus states visible

---

## 💡 Pro Tips

1. **When in doubt, copy existing components** - Don't reinvent the wheel
2. **Test on real devices** - Emulator isn't enough
3. **Use DevTools responsive mode** - Test all breakpoints
4. **Check Figma comments** - Designer may have left notes
5. **Ask before major changes** - Especially to design system files
6. **Document workarounds** - Leave comments explaining why
7. **Keep commits atomic** - One feature/fix per commit
8. **Write descriptive commit messages** - Future you will thank you

---

## 📞 Need Help?

If you're stuck:

1. **Read `/DESIGN_SYSTEM.md`** - Most answers are there
2. **Read `/DEPLOYMENT.md`** - For deployment issues
3. **Check existing components** - Look for similar patterns
4. **Search codebase** - Someone might have solved it already
5. **Document the problem** - Write down what you tried

---

## 🎓 Learning Resources

- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **React Router Docs:** https://reactrouter.com/
- **Lucide Icons:** https://lucide.dev/icons
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/

---

## 🚀 Success Criteria

You're doing a great job when:

1. ✅ New features match Figma designs
2. ✅ No visual regressions in existing features
3. ✅ Responsive on all screen sizes
4. ✅ No console errors
5. ✅ Code follows established patterns
6. ✅ Deployment matches Figma Make preview
7. ✅ Other developers can understand your code
8. ✅ You're proud of the result! 😊

---

**Remember:** This is a production B2B SaaS application used by real Islamic organizations. Quality and consistency matter!

**Last Updated:** Saturday, April 4, 2026  
**Version:** 1.0.0  
**Maintained By:** MinbarLive Team

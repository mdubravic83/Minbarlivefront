# 🎨 MinbarLive Design Quick Reference

> **One-page cheat sheet for common design patterns**

---

## 🎨 Brand Colors (HEX)

```css
/* Primary */
#0F766E  → Teal Dark (primary-900)
#14B8A6  → Teal Light (primary-700)
#F0FDFA  → Teal Ultra Light (primary-100)

/* Accent */
#D4AF37  → Gold (Premium actions)
#C49B2F  → Gold Dark
#B38B1F  → Gold Darker

/* Neutrals */
#0F172A  → Text Primary (nearly black)
#475569  → Text Secondary (gray)
#94A3B8  → Text Tertiary (light gray)
#CBD5E1  → Border (light gray)
#F8FAFC  → Background (off-white)
#FFFFFF  → White
```

---

## 📐 Spacing Scale

```
4px  → space-1  → gap-1, p-1
8px  → space-2  → gap-2, p-2
12px → space-3  → gap-3, p-3
16px → space-4  → gap-4, p-4
24px → space-6  → gap-6, p-6
32px → space-8  → gap-8, p-8
48px → space-12 → gap-12, p-12
```

---

## 🔤 Typography

```tsx
// Headings
<h1 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
<h2 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">
<h3 className="text-lg font-semibold text-[#0F172A]">

// Body
<p className="text-base text-[#475569]">
<p className="text-sm text-[#475569]">
<p className="text-xs text-[#475569]">
```

---

## 🎯 Button Patterns

```tsx
// Primary (Teal)
<button className="px-6 py-3 bg-gradient-to-r from-[#0F766E] to-[#14B8A6] text-white font-semibold rounded-xl hover:from-[#14B8A6] hover:to-[#0F766E] transition-all shadow-lg">

// Gold (Premium)
<button className="px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#C49B2F] text-white font-semibold rounded-xl hover:from-[#C49B2F] hover:to-[#B38B1F] transition-all shadow-lg">

// Secondary
<button className="px-6 py-3 bg-white border-2 border-[#CBD5E1] text-[#0F172A] font-semibold rounded-xl hover:bg-[#F8FAFC] transition-all">

// Ghost
<button className="px-4 py-2 text-[#475569] hover:bg-[#F8FAFC] rounded-lg transition-colors">

// Icon Only
<button className="p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors">
  <Icon size={18} />
</button>
```

---

## 📝 Input Patterns

```tsx
// Text Input
<input
  type="text"
  className="w-full px-4 py-3 bg-white border-2 border-[#CBD5E1] rounded-xl text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10 transition-all"
/>

// With Icon
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
    <Icon size={18} className="text-[#475569]" />
  </div>
  <input className="w-full pl-12 pr-4 py-3 ..." />
</div>

// Search Input
<input
  type="search"
  className="w-full pl-10 pr-4 py-2 bg-white border border-[#CBD5E1] rounded-lg text-sm"
/>
```

---

## 📦 Card Patterns

```tsx
// Basic Card
<div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm p-6">

// Hover Card
<div className="bg-white border border-[#CBD5E1] rounded-xl shadow-sm p-6 hover:shadow-lg transition-shadow">

// Gradient Card (Primary)
<div className="bg-gradient-to-br from-[#F0FDFA] to-white border-2 border-[#0F766E]/30 rounded-xl p-6">

// Gradient Card (Gold)
<div className="bg-gradient-to-br from-[#FFFBEB] to-white border-2 border-[#D4AF37]/30 rounded-xl p-6">
```

---

## 🏷️ Badge Patterns

```tsx
// Live Status
<span className="inline-flex items-center gap-1.5 px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
  Live
</span>

// Processing
<span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
  Processing
</span>

// Complete
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
  Complete
</span>

// Neutral
<span className="px-2 py-1 bg-[#F8FAFC] text-[#475569] text-xs rounded-full">
  Draft
</span>
```

---

## 📱 Responsive Patterns

```tsx
// Mobile → Desktop Padding
<div className="p-4 sm:p-6 lg:p-8">

// Mobile → Desktop Text
<h1 className="text-xl sm:text-2xl lg:text-3xl">

// Mobile → Desktop Grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

// Mobile → Desktop Flex Direction
<div className="flex flex-col sm:flex-row gap-4">

// Hide on Mobile
<div className="hidden lg:block">

// Show on Mobile Only
<div className="lg:hidden">
```

---

## 🎭 Icon Sizes

```tsx
// Small (14-16px)
<Icon size={14} className="text-[#475569]" />

// Standard (18-20px)
<Icon size={18} className="text-[#475569]" />

// Large (24px)
<Icon size={24} className="text-[#0F766E]" />

// Extra Large (32px)
<Icon size={32} className="text-white" />
```

---

## 🔗 Link Patterns

```tsx
// Primary Link
<Link to="/path" className="text-[#0F766E] hover:text-[#14B8A6] font-medium transition-colors">

// Secondary Link
<Link to="/path" className="text-[#475569] hover:text-[#0F172A] transition-colors">

// Underline Link
<a href="#" className="text-[#0F766E] hover:underline">
```

---

## 📊 Table Patterns

```tsx
<table className="w-full">
  <thead className="bg-[#F8FAFC] border-b border-[#CBD5E1]">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-[#475569] uppercase">
        Header
      </th>
    </tr>
  </thead>
  <tbody className="divide-y divide-[#CBD5E1]">
    <tr className="hover:bg-[#F8FAFC]">
      <td className="px-6 py-4 text-sm text-[#0F172A]">
        Cell
      </td>
    </tr>
  </tbody>
</table>
```

---

## 🎨 Gradient Backgrounds

```tsx
// Teal Gradient
<div className="bg-gradient-to-br from-[#0F766E] via-[#14B8A6] to-[#0F766E]">

// Gold Gradient
<div className="bg-gradient-to-r from-[#D4AF37] to-[#C49B2F]">

// Light Teal Background
<div className="bg-gradient-to-br from-[#F0FDFA] to-white">

// Light Gold Background
<div className="bg-gradient-to-br from-[#FFFBEB] to-white">
```

---

## 🌟 Shadow Values

```css
shadow-sm   → Subtle shadow (inputs, small cards)
shadow-md   → Medium shadow (cards)
shadow-lg   → Large shadow (hover cards, buttons)
shadow-xl   → Extra large (modals, dropdowns)
shadow-2xl  → Massive (hero sections)
```

---

## 📐 Border Radius

```css
rounded-lg   → 12px (small elements)
rounded-xl   → 16px (cards, buttons)
rounded-2xl  → 24px (large cards, sections)
rounded-full → Circle (badges, avatars)
```

---

## 🎯 Container Widths

```tsx
// Content Container
<div className="max-w-7xl mx-auto px-6">

// Narrow Container
<div className="max-w-4xl mx-auto px-6">

// Wide Container
<div className="max-w-screen-2xl mx-auto px-6">

// Full Width with Padding
<div className="w-full px-6">
```

---

## ⚡ Transition Classes

```tsx
// Standard
transition-all

// Colors Only
transition-colors

// Transform Only
transition-transform

// Shadow Only
transition-shadow

// Duration
duration-150  → Fast
duration-300  → Standard (default)
duration-500  → Slow
```

---

## 🎪 Animation Classes

```tsx
// Pulse (for live indicators)
<div className="animate-pulse" />

// Spin (for loaders)
<div className="animate-spin" />

// Bounce
<div className="animate-bounce" />
```

---

## 🔍 Focus States

```tsx
// Standard Focus
focus:outline-none focus:ring-4 focus:ring-[#0F766E]/20

// Border Focus
focus:border-[#0F766E] focus:ring-4 focus:ring-[#0F766E]/10
```

---

## 📋 Common Layouts

```tsx
// Sidebar Layout
<div className="flex h-screen">
  <aside className="w-64 border-r" />
  <main className="flex-1 overflow-auto" />
</div>

// Split Screen
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
  <div />
  <div />
</div>

// Center Content
<div className="flex items-center justify-center min-h-screen">
  <div className="max-w-md w-full" />
</div>
```

---

## ✅ Quick Checklist

When creating any component:

- [ ] Use exact HEX colors (#0F766E, not teal-700)
- [ ] Use standard spacing (p-6, not p-[23px])
- [ ] Add hover states to interactive elements
- [ ] Add transition classes for smooth animations
- [ ] Test on mobile, tablet, desktop
- [ ] Check against Figma design
- [ ] No inline styles
- [ ] No font-family overrides

---

**Pro Tip:** Copy-paste these patterns directly. They're battle-tested! 🚀

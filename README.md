# 🕌 MinbarLive Admin Dashboard

**B2B SaaS Platform for Live Khutbah Translation, Podcast Transcripts, Video Processing & Content Management**

> Professional admin dashboard for mosques and Islamic organizations worldwide

---

## 📚 Documentation Index

👉 **[Complete Documentation Index](./DOCUMENTATION_INDEX.md)** - Find what you need fast!

### **🚨 START HERE - Critical Reading**
1. **[EMERGENT_DEPLOYMENT.md](./EMERGENT_DEPLOYMENT.md)** - ⭐ emergent.sh deployment (100% design match)
2. **[QUICK_DIAGNOSTIC.md](./QUICK_DIAGNOSTIC.md)** - ⭐ 30-second troubleshooting
3. **[VISUAL_DIFF_GUIDE.md](./VISUAL_DIFF_GUIDE.md)** - ⭐ Visual comparison guide
4. **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Complete design system documentation
5. **[AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md)** - Instructions for AI agents

### **📖 Additional Resources**
- [DEPLOYMENT.md](./DEPLOYMENT.md) - General deployment guide
- [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) - Figma Make → emergent.sh fixes
- [DESIGN_QUICK_REFERENCE.md](./DESIGN_QUICK_REFERENCE.md) - One-page cheat sheet
- [VISUAL_QA_CHECKLIST.md](./VISUAL_QA_CHECKLIST.md) - 150-point quality checklist
- [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md) - Master index & navigation
- [Guidelines.md](./guidelines/Guidelines.md) - General development guidelines
- [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) - Third-party credits

---

## 🎯 Project Overview

MinbarLive is a B2B SaaS platform that provides:
- **HutbaLive**: Real-time khutbah translation and live broadcasting
- **Podcast Companion**: AI-powered podcast transcription and publishing
- **Studio**: Professional video processing and content creation
- **HutbaAsistent**: AI-assisted khutbah preparation tool
- **Library**: Comprehensive content management system
- **Platform Control**: Multi-organization hierarchy management (Owner-only)

---

## 🏗️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Routing**: React Router v7 (Data Mode)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Build Tool**: Vite
- **UI Components**: Custom component library + shadcn/ui

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ 
- npm or pnpm

### **Installation**
```bash
# Clone repository
git clone <repo-url>
cd minbarlive-admin

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:5173
```

### **Build for Production**
```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
minbarlive-admin/
├── /src/
│   ├── /app/
│   │   ├── App.tsx                    # Root component
│   │   ├── routes.tsx                 # React Router configuration
│   │   └── /components/
│   │       ├── MainLayout.tsx         # Main dashboard layout
│   │       ├── Dashboard.tsx          # Role-based dashboard
│   │       ├── Login.tsx              # Authentication page
│   │       ├── Signup.tsx             # Registration page
│   │       ├── HutbaLive.tsx          # Live translation module
│   │       ├── PodcastCompanion.tsx   # Podcast module
│   │       ├── Studio.tsx             # Video processing module
│   │       ├── HutbaAsistent.tsx      # AI assistant module
│   │       ├── Library.tsx            # Content library
│   │       ├── PlatformControl.tsx    # Owner admin panel
│   │       ├── Organization.tsx       # Org settings
│   │       ├── Billing.tsx            # Billing module
│   │       └── /icons/
│   │           ├── MosqueIcon.tsx     # Custom oriental icons
│   │           └── MinberIcon.tsx
│   └── /styles/
│       ├── fonts.css                  # Font declarations (CRITICAL)
│       ├── theme.css                  # Design tokens (CRITICAL)
│       ├── tailwind.css               # Tailwind imports
│       └── index.css                  # Global styles
├── /public/
│   └── /fonts/                        # Local font files (REQUIRED)
├── DESIGN_SYSTEM.md                   # Design system guide ⭐
├── DEPLOYMENT.md                      # Deployment checklist ⭐
├── AGENT_INSTRUCTIONS.md              # AI agent instructions ⭐
├── TROUBLESHOOTING.md                 # Figma Make → emergent.sh fixes ⭐
├── DESIGN_QUICK_REFERENCE.md          # Quick cheat sheet ⭐
├── package.json
├── tailwind.config.js                 # Tailwind configuration
├── vite.config.ts                     # Vite build config
└── tsconfig.json                      # TypeScript config
```

---

## 🎨 Design System

### **Brand Colors**
- **Primary Teal**: `#0F766E` (primary-900), `#14B8A6` (primary-700)
- **Accent Gold**: `#D4AF37` (premium actions)
- **Neutrals**: `#0F172A` (text), `#475569` (secondary text), `#CBD5E1` (borders)

### **Typography**
- **Font Family**: Inter (locally hosted)
- **Sizes**: 12px - 48px (responsive scale)
- **Weights**: Regular (400), Medium (500), SemiBold (600), Bold (700)

### **Spacing**
- **Scale**: 4px base unit (space-1 to space-20)
- **Container**: max-w-7xl with px-6 padding

### **Components**
- Buttons: Primary (teal gradient), Gold (premium), Secondary (outlined)
- Cards: White with border, hover shadows
- Inputs: 2px border, focus ring effects
- Badges: Status indicators (Live, Processing, Complete)

👉 **Full details:** [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)

---

## 👥 User Roles & Permissions

### **Owner**
- Full platform access
- Platform Control panel (organization hierarchy)
- All module access
- Billing & usage analytics
- Scope switcher (Owner ↔ Super Admin view)

### **Super Admin**
- Organization-wide access
- All modules for their organization
- Admin management
- Billing (view only)
- No Platform Control access

### **Admin**
- Limited module access based on permissions
- Content management
- Session monitoring
- No billing access
- No admin management

---

## 🗺️ Routes

### **Public Routes**
- `/login` - Sign in page
- `/signup` - Registration page
- `/watch/:id` - Public video viewer
- `/p/:id` - Public podcast viewer

### **Protected Routes (Require Authentication)**
- `/` - Dashboard (role-based)
- `/hutba-live/*` - HutbaLive module
- `/podcast-companion/*` - Podcast module
- `/studio/*` - Studio module
- `/hutba-asistent/*` - AI assistant module
- `/library/*` - Content library
- `/billing/*` - Billing & invoices
- `/organization/*` - Organization settings
- `/platform/*` - Platform Control (Owner only)

---

## 🔐 Authentication

**Current Status**: Mock authentication (no backend)

**Planned Implementation**:
- JWT token-based auth
- Role-based access control (RBAC)
- Organization-scoped permissions
- Session management
- Password reset flow

---

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: 375px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px - 1439px
- **Wide**: 1440px+

### **Mobile Features**
- Hamburger menu navigation
- Drawer sidebar
- Optimized touch targets (44px minimum)
- Responsive grid layouts
- Collapsible sections

---

## 🧩 Key Features

### **1. Module-Aware Navigation**
Only displays modules the organization has access to (configured in mock data)

### **2. Role-Based UI**
- Owner sees Platform Control section
- Scope switcher for Owner/Super Admin view
- Different dashboards per role

### **3. Collapsible Submenus**
Two-level navigation structure with expandable sections

### **4. Custom Oriental Icons**
Custom mosque and minaret icons instead of generic radio icons

### **5. Live Session Monitoring**
Real-time statistics, transcript display, network quality monitoring

### **6. Podcast Publishing**
Public/private toggle, customizable URLs, embed codes

### **7. Video Processing Pipeline**
Upload, process, export with quality presets

### **8. AI Khutbah Assistant**
Draft creation, reference integration, export options

---

## 🚨 Critical Files (DO NOT MODIFY WITHOUT REASON)

```
/src/styles/fonts.css          ← Font loading
/src/styles/theme.css          ← Design tokens
/tailwind.config.js            ← Tailwind config
/public/fonts/*                ← Font files
/DESIGN_SYSTEM.md              ← Design documentation
```

**Why?** These files define the visual system. Changes will break design consistency.

---

## 🐛 Troubleshooting

### **Fonts Not Loading?**
1. Check `/public/fonts/` directory exists
2. Verify `fonts.css` is imported in main.tsx
3. Check browser DevTools Network tab for 404s

### **Tailwind Classes Not Applied?**
1. Verify `tailwind.config.js` exists
2. Check `postcss.config.mjs` is configured
3. Rebuild: `npm run build`

### **Layout Broken on Mobile?**
1. Check responsive classes (sm:, md:, lg:)
2. Test at 375px viewport width
3. Verify touch targets >= 44px

👉 **Full troubleshooting guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📊 Module Overview

### **HutbaLive** 🕌
- Live session control
- Real-time Arabic → Multi-language translation
- Viewer statistics
- Network quality monitoring
- Archive management
- Public sharing URLs

### **Podcast Companion** 🎙️
- Session creation & management
- AI-powered transcription
- Multi-language support
- Public/private publishing
- Custom URLs & embed codes
- Analytics & viewer tracking

### **Studio** 🎬
- Video upload & processing
- Quality presets (SD, HD, 4K)
- Export management
- Public video gallery
- Batch processing

### **HutbaAsistent** ✍️
- AI-assisted khutbah drafting
- Topic suggestions
- Reference integration
- Collaborative editing
- Export to PDF/DOCX

### **Library** 📚
- Centralized content repository
- Videos, khutbahs, podcasts
- Search & filtering
- Categorization & tagging
- Featured content

### **Platform Control** 👑 (Owner Only)
- Organization hierarchy
- Multi-tenant management
- Billing oversight
- Analytics aggregation
- System logs & debugging

---

## 🎓 For Developers

### **Before Making Changes**
1. ✅ Read [AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md)
2. ✅ Check [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for design tokens
3. ✅ Review existing components for patterns
4. ✅ Test on mobile, tablet, desktop

### **Code Standards**
- ✅ TypeScript for all components
- ✅ Tailwind CSS (no inline styles)
- ✅ Mobile-first responsive design
- ✅ Semantic HTML
- ✅ Accessible components (ARIA, keyboard nav)
- ✅ Lucide React for icons

### **Component Patterns**
```tsx
// Use exact HEX colors
className="bg-[#0F766E]"

// Use standard spacing
className="p-6 gap-4"

// Responsive classes
className="text-sm sm:text-base lg:text-lg"

// Hover states
className="hover:bg-[#F8FAFC] transition-colors"
```

---

## 📦 Dependencies

### **Core**
- react ^18.2.0
- react-dom ^18.2.0
- react-router ^7.1.3

### **UI & Icons**
- lucide-react ^0.344.0
- tailwindcss ^3.4.1

### **Build Tools**
- vite ^5.0.12
- typescript ^5.3.3
- postcss ^8.4.35
- autoprefixer ^10.4.17

### **Optional (Future)**
- @supabase/supabase-js (backend)
- react-hook-form (forms)
- recharts (analytics charts)

---

## 🚀 Deployment

### **Emergent.sh Deployment**
```bash
# 1. Verify fonts are in /public/fonts/
# 2. Build project
npm run build

# 3. Push to git
git push origin main

# 4. Deploy via emergent CLI
emergent deploy
```

👉 **Full deployment guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📝 Version History

- **v1.0.0** (April 4, 2026) - Initial release
  - Complete admin dashboard
  - 8 modules implemented
  - Role-based access control
  - Mobile responsive design
  - Custom oriental design system
  - Login/Signup pages

---

## 🤝 Contributing

1. Read [AGENT_INSTRUCTIONS.md](./AGENT_INSTRUCTIONS.md)
2. Check [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for design standards
3. Follow existing component patterns
4. Test responsive design
5. No inline styles or font overrides
6. Commit with descriptive messages

---

## 📄 License

Proprietary - MinbarLive Platform

---

## 📧 Contact

- **Support**: support@minbarlive.com
- **Platform**: https://minbarlive.com
- **Documentation**: This README + linked docs

---

## ⭐ Quick Links

- 📖 [Design System](./DESIGN_SYSTEM.md)
- 🚀 [Deployment Guide](./DEPLOYMENT.md)
- 🔧 [Troubleshooting](./TROUBLESHOOTING.md)
- ✅ [Visual QA Checklist](./VISUAL_QA_CHECKLIST.md)
- 🤖 [Agent Instructions](./AGENT_INSTRUCTIONS.md)
- 📝 [Quick Reference](./DESIGN_QUICK_REFERENCE.md)

---

**Built with ❤️ for the Muslim community worldwide** 🌍🕌
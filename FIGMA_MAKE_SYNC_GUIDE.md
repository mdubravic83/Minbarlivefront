# 🎨 **Figma Make as Source of Truth - Sync Guide**
## Ensuring Design Consistency Between Figma Make and GitHub Deployment

**Date:** Saturday, April 4, 2026  
**Version:** 1.0  
**Status:** Active

---

## 📜 **Design System Contract**

### **🎯 Core Principle:**
> **Figma Make is the SINGLE SOURCE OF TRUTH for all frontend design.**  
> Any changes in GitHub repo must be validated and synced back to Figma Make before deployment.

---

## 🏗️ **Architecture Overview**

```
┌─────────────────────────────────────────────────────────────┐
│                   FIGMA MAKE (Master)                       │
│              /src/app/* + /src/styles/*                     │
│         ✅ Source of Truth for Design                       │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ ONE-WAY SYNC
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              GitHub (mdubravic83/hutbalive)                 │
│          /frontend/src/app/* + /frontend/src/components/*   │
│         ⚠️  Production Deployment (emergent.sh)            │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ VALIDATION REQUIRED
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                  Pull Request Validation                    │
│         ✅ Must match Figma Make design tokens             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📋 **Design Token Registry**

### **Immutable Design Tokens (Cannot Change Without Figma Make Approval)**

```css
/* /src/styles/design-tokens.css - MASTER FILE */

/**
 * ⚠️  CRITICAL: These values are LOCKED.
 * Any changes must originate from Figma Make and be synced to GitHub.
 * DO NOT modify directly in GitHub repo!
 */

:root {
  /* === BRAND COLORS === */
  --color-primary: #0F766E;           /* Primary Teal */
  --color-primary-dark: #134E4A;      /* Dark Teal */
  --color-primary-light: #14B8A6;     /* Light Teal */
  
  --color-gold: #D4AF37;              /* Gold */
  --color-gold-light: #F4C542;        /* Light Gold */
  --color-gold-dark: #C49B2F;         /* Dark Gold */
  --color-gold-darker: #B38B1F;       /* Darker Gold */
  
  --color-deep-green: #14532D;        /* Deep Green */
  --color-brand-green: #2E7D32;       /* Brand Green */
  
  /* === NEUTRALS === */
  --color-text: #0F172A;              /* Primary Text */
  --color-muted: #475569;             /* Muted Text */
  --color-light-muted: #64748B;       /* Light Muted */
  --color-border: #CBD5E1;            /* Borders */
  --color-surface: #F8FAFC;           /* Surface/Background */
  
  /* === EXTENDED PALETTE (GitHub Compatibility) === */
  --color-primary-50: #F0FDFA;
  --color-primary-100: #CCFBF1;
  --color-primary-700: #14B8A6;
  --color-primary-900: #0F766E;
  
  --color-neutral-50: #FFFFFF;
  --color-neutral-100: #F8FAFC;
  --color-neutral-200: #E2E8F0;
  --color-neutral-300: #CBD5E1;
  --color-neutral-400: #94A3B8;
  --color-neutral-700: #475569;
  --color-neutral-950: #0F172A;
  
  --color-teal-50: #F0FDFA;
  --color-teal-100: #CCFBF1;
  --color-teal-light: #E6FAF5;
  
  /* === LAYOUT DIMENSIONS === */
  --sidebar-width-expanded: 16rem;    /* 256px */
  --sidebar-width-collapsed: 4rem;    /* 64px */
  --header-height-mobile: 3.5rem;     /* 56px */
  --header-height-desktop: 4rem;      /* 64px */
  --logo-size-mobile: 1.75rem;        /* 28px */
  --logo-size-desktop: 2rem;          /* 32px */
  
  /* === TYPOGRAPHY === */
  --font-family-primary: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  
  /* === TRANSITIONS === */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 200ms ease-in-out;
  --transition-slow: 300ms ease-in-out;
  
  /* === SHADOWS === */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  
  /* === BORDER RADIUS === */
  --radius-sm: 0.375rem;   /* 6px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  
  /* === SPACING === */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
}
```

---

## ✅ **Sync Workflow: Figma Make → GitHub**

### **Step 1: Make Changes in Figma Make**
```bash
# Work in Figma Make environment
cd /path/to/figma-make-project

# Make your design changes
# - Update /src/styles/design-tokens.css
# - Modify /src/app/components/*
# - Test locally
```

### **Step 2: Extract Design Tokens**
```bash
# Run extraction script (create if doesn't exist)
npm run extract-design-tokens

# This generates:
# - design-tokens.json (machine-readable)
# - design-tokens.css (for GitHub sync)
```

### **Step 3: Validate Changes**
```bash
# Run validation suite
npm run validate-design

# Checks:
# ✅ All colors are defined
# ✅ Font weights are correct (300-800)
# ✅ Layout dimensions are consistent
# ✅ No hardcoded values in components
```

### **Step 4: Sync to GitHub**
```bash
# Navigate to GitHub repo
cd /path/to/hutbalive/frontend

# Copy design tokens
cp /path/to/figma-make/src/styles/design-tokens.css \
   ./src/app/design-tokens.css

# Sync components (if needed)
# Only sync components that exist in both environments

# Commit with special tag
git add .
git commit -m "[FIGMA-SYNC] Updated design tokens from Figma Make"
git push origin web2
```

---

## 🔒 **Reverse Sync: GitHub → Figma Make (With Validation)**

### **⚠️  CRITICAL: Pull Requests from GitHub MUST Be Validated**

When pulling changes FROM GitHub repo INTO Figma Make:

### **Step 1: Review Changes**
```bash
cd /path/to/hutbalive
git fetch origin web2
git diff origin/web2 -- frontend/src/
```

### **Step 2: Check for Design Token Violations**
Run this validation before accepting ANY changes:

```bash
# Check if design tokens were modified
git diff origin/web2 -- frontend/src/app/globals.css
git diff origin/web2 -- frontend/src/app/design-tokens.css

# ⚠️  If design tokens changed in GitHub without Figma Make approval:
# REJECT the changes!
```

### **Step 3: Run Design Consistency Check**
```bash
cd /path/to/figma-make-project

# Run consistency validator (see script below)
npm run check-github-consistency

# This compares:
# ✅ Color values
# ✅ Font family and weights
# ✅ Layout dimensions
# ✅ Component structure
```

### **Step 4: Merge Only Safe Changes**
```bash
# Safe to merge:
✅ Bug fixes (logic only, no styling)
✅ New features (that follow design tokens)
✅ Performance improvements
✅ Accessibility enhancements

# REJECT if:
❌ Color values changed
❌ Font family or weights modified
❌ Layout dimensions altered
❌ Design tokens overridden
❌ Brand identity compromised
```

### **Step 5: Update Figma Make Components**
```bash
# If GitHub has NEW components that follow design system:
# 1. Copy component to Figma Make
# 2. Refactor to match Figma Make structure
# 3. Validate design tokens usage
# 4. Test in Figma Make environment
# 5. Commit to Figma Make

# Example:
cp /path/to/hutbalive/frontend/src/components/layout/NewComponent.jsx \
   /path/to/figma-make/src/app/components/NewComponent.tsx

# Convert JSX to TSX
# Refactor imports
# Validate design tokens
# Test locally
git add .
git commit -m "feat: Add NewComponent from GitHub (validated)"
```

---

## 🛠️ **Validation Scripts**

### **1. Design Token Validator**

Create `/scripts/validate-design-tokens.js`:

```javascript
#!/usr/bin/env node

/**
 * Design Token Validator
 * Ensures GitHub repo matches Figma Make design tokens
 */

const fs = require('fs');
const path = require('path');

// Master tokens from Figma Make
const FIGMA_MAKE_TOKENS = {
  colors: {
    primary: '#0F766E',
    gold: '#D4AF37',
    text: '#0F172A',
    surface: '#F8FAFC',
    // ... all tokens
  },
  fonts: {
    family: 'Inter',
    weights: [300, 400, 500, 600, 700, 800],
  },
  dimensions: {
    sidebarExpanded: '16rem',
    sidebarCollapsed: '4rem',
    headerMobile: '3.5rem',
    headerDesktop: '4rem',
  }
};

// Read GitHub tokens
function extractGitHubTokens(cssPath) {
  const css = fs.readFileSync(cssPath, 'utf8');
  
  // Extract CSS variables
  const colorRegex = /--color-primary:\s*([^;]+);/;
  const match = css.match(colorRegex);
  
  return {
    primary: match ? match[1].trim() : null,
    // ... extract all tokens
  };
}

// Validate
function validate() {
  const githubTokens = extractGitHubTokens(
    '/path/to/hutbalive/frontend/src/app/globals.css'
  );
  
  const errors = [];
  
  // Check colors
  if (githubTokens.primary !== FIGMA_MAKE_TOKENS.colors.primary) {
    errors.push(`❌ Primary color mismatch: ${githubTokens.primary} vs ${FIGMA_MAKE_TOKENS.colors.primary}`);
  }
  
  // Check fonts
  // Check dimensions
  
  if (errors.length > 0) {
    console.error('🚨 DESIGN TOKEN VALIDATION FAILED:');
    errors.forEach(err => console.error(err));
    process.exit(1);
  }
  
  console.log('✅ Design tokens validated successfully!');
}

validate();
```

Add to `package.json`:
```json
{
  "scripts": {
    "validate-design": "node scripts/validate-design-tokens.js",
    "check-github-consistency": "node scripts/check-github-consistency.js"
  }
}
```

---

### **2. GitHub Consistency Checker**

Create `/scripts/check-github-consistency.js`:

```javascript
#!/usr/bin/env node

/**
 * GitHub Consistency Checker
 * Compares GitHub repo against Figma Make and reports differences
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const GITHUB_REPO_PATH = '/path/to/hutbalive/frontend';
const FIGMA_MAKE_PATH = '/path/to/figma-make';

function checkConsistency() {
  console.log('🔍 Checking consistency between Figma Make and GitHub...\n');
  
  const checks = [];
  
  // Check 1: CSS Variables
  checks.push(checkCSSVariables());
  
  // Check 2: Font Loading
  checks.push(checkFontLoading());
  
  // Check 3: Component Structure
  checks.push(checkComponentStructure());
  
  // Check 4: Tailwind Config
  checks.push(checkTailwindConfig());
  
  // Report
  const failed = checks.filter(c => !c.passed);
  
  if (failed.length > 0) {
    console.error('\n🚨 CONSISTENCY CHECK FAILED:\n');
    failed.forEach(f => {
      console.error(`❌ ${f.name}: ${f.error}`);
    });
    console.error('\n⚠️  Do NOT merge changes from GitHub until issues are resolved!');
    process.exit(1);
  }
  
  console.log('\n✅ All consistency checks passed!');
  console.log('✅ Safe to merge changes from GitHub.');
}

function checkCSSVariables() {
  // Compare CSS variables
  const figmaCSS = fs.readFileSync(
    path.join(FIGMA_MAKE_PATH, 'src/styles/theme.css'),
    'utf8'
  );
  
  const githubCSS = fs.readFileSync(
    path.join(GITHUB_REPO_PATH, 'src/app/globals.css'),
    'utf8'
  );
  
  // Extract --color-primary from both
  const figmaPrimary = figmaCSS.match(/--color-primary:\s*([^;]+);/)?.[1];
  const githubPrimary = githubCSS.match(/--color-primary(?:-900)?:\s*([^;]+);/)?.[1];
  
  if (figmaPrimary !== githubPrimary) {
    return {
      name: 'CSS Variables',
      passed: false,
      error: `Primary color mismatch (Figma: ${figmaPrimary}, GitHub: ${githubPrimary})`
    };
  }
  
  return { name: 'CSS Variables', passed: true };
}

function checkFontLoading() {
  // Check if Inter font weights match
  const figmaFonts = fs.readFileSync(
    path.join(FIGMA_MAKE_PATH, 'src/styles/fonts.css'),
    'utf8'
  );
  
  const githubFonts = fs.readFileSync(
    path.join(GITHUB_REPO_PATH, 'src/app/globals.css'),
    'utf8'
  );
  
  const figmaWeights = figmaFonts.match(/wght@([\d;]+)/)?.[1].split(';');
  const githubWeights = githubFonts.match(/wght@([\d;]+)/)?.[1].split(';');
  
  const missing = figmaWeights?.filter(w => !githubWeights?.includes(w));
  
  if (missing && missing.length > 0) {
    return {
      name: 'Font Loading',
      passed: false,
      error: `Missing font weights in GitHub: ${missing.join(', ')}`
    };
  }
  
  return { name: 'Font Loading', passed: true };
}

function checkComponentStructure() {
  // Check if critical components exist
  const criticalComponents = [
    'MainLayout',
    'Dashboard',
    'HutbaLive',
    'Login',
    'Signup'
  ];
  
  const missing = [];
  
  criticalComponents.forEach(component => {
    const figmaPath = path.join(
      FIGMA_MAKE_PATH,
      `src/app/components/${component}.tsx`
    );
    
    if (!fs.existsSync(figmaPath)) {
      missing.push(component);
    }
  });
  
  if (missing.length > 0) {
    return {
      name: 'Component Structure',
      passed: false,
      error: `Missing components in Figma Make: ${missing.join(', ')}`
    };
  }
  
  return { name: 'Component Structure', passed: true };
}

function checkTailwindConfig() {
  // Verify Tailwind version consistency
  const figmaPackage = JSON.parse(
    fs.readFileSync(
      path.join(FIGMA_MAKE_PATH, 'package.json'),
      'utf8'
    )
  );
  
  const githubPackage = JSON.parse(
    fs.readFileSync(
      path.join(GITHUB_REPO_PATH, '../package.json'),
      'utf8'
    )
  );
  
  const figmaTailwind = figmaPackage.devDependencies?.tailwindcss;
  const githubTailwind = githubPackage.devDependencies?.tailwindcss;
  
  if (figmaTailwind && githubTailwind && figmaTailwind !== githubTailwind) {
    return {
      name: 'Tailwind Config',
      passed: false,
      error: `Tailwind version mismatch (Figma: ${figmaTailwind}, GitHub: ${githubTailwind})`
    };
  }
  
  return { name: 'Tailwind Config', passed: true };
}

checkConsistency();
```

---

## 📝 **Pre-Deployment Checklist**

Before deploying to emergent.sh, verify:

### **✅ Design Token Integrity**
- [ ] All CSS variables match Figma Make
- [ ] No hardcoded colors in components
- [ ] Font family is 'Inter'
- [ ] Font weights 300-800 are available
- [ ] Layout dimensions match design tokens

### **✅ Component Consistency**
- [ ] Sidebar width: 256px expanded, 64px collapsed
- [ ] Header height: 56px mobile, 64px desktop
- [ ] Logo size: 28px mobile, 32px desktop
- [ ] Navigation padding: px-3 py-2.5
- [ ] Border radius follows design tokens

### **✅ Visual Verification**
- [ ] Primary teal (#0F766E) renders correctly
- [ ] Gold (#D4AF37) renders correctly
- [ ] Gradients match Figma Make
- [ ] Hover states match Figma Make
- [ ] Mobile responsive breakpoints work
- [ ] Islamic star bullets render
- [ ] Mosque icons render

### **✅ Functional Tests**
- [ ] Sidebar collapse/expand works
- [ ] Mobile hamburger menu works
- [ ] Navigation accordion behavior
- [ ] Quick Actions modal
- [ ] Profile dropdown
- [ ] Notifications dropdown

---

## 🚨 **Red Flags: When to REJECT GitHub Changes**

### **❌ NEVER Accept These Changes Without Approval:**

1. **Color Changes**
   ```css
   /* ❌ REJECT */
   --color-primary: #1A7F7A; /* Different from #0F766E */
   ```

2. **Font Changes**
   ```css
   /* ❌ REJECT */
   font-family: 'Roboto', sans-serif; /* Not Inter */
   ```

3. **Layout Dimension Changes**
   ```css
   /* ❌ REJECT */
   .sidebar { width: 280px; } /* Should be 256px */
   ```

4. **Hardcoded Colors**
   ```jsx
   {/* ❌ REJECT */}
   <div className="bg-[#1A7F7A]"> {/* Not using design token */}
   ```

5. **Inline Styles**
   ```jsx
   {/* ❌ REJECT */}
   <div style={{ color: '#0F766E' }}> {/* Should use Tailwind */}
   ```

6. **Brand Identity Changes**
   ```jsx
   {/* ❌ REJECT */}
   <span>HutbaStream</span> {/* Should be MinbarLive */}
   ```

---

## ✅ **Safe Changes to Accept from GitHub**

### **✅ OK to Merge:**

1. **Bug Fixes (Logic Only)**
   ```jsx
   // ✅ OK - No design impact
   const handleClick = () => {
     console.log('Clicked'); // Fixed console typo
   };
   ```

2. **Performance Optimizations**
   ```jsx
   // ✅ OK - Same visual output
   const MemoizedComponent = React.memo(Component);
   ```

3. **Accessibility Improvements**
   ```jsx
   // ✅ OK - Enhances UX
   <button aria-label="Close menu" onClick={...}>
   ```

4. **New Components (If Follow Design System)**
   ```jsx
   // ✅ OK - Uses design tokens
   <div className="bg-[var(--color-primary)] text-white">
   ```

5. **API Integration (Backend Only)**
   ```jsx
   // ✅ OK - No UI changes
   const { data } = await fetch('/api/sessions');
   ```

---

## 🔄 **Sync Frequency Recommendations**

### **Daily Sync (If Active Development)**
```bash
# Every morning:
cd /path/to/figma-make
npm run check-github-consistency

# If changes detected:
# 1. Review changes
# 2. Validate design tokens
# 3. Merge safe changes
# 4. Reject design violations
```

### **Pre-Deployment Sync (Mandatory)**
```bash
# Before every emergent.sh deployment:
npm run validate-design
npm run check-github-consistency

# Only deploy if both pass!
```

### **Post-Pull Validation (Always)**
```bash
# After pulling from GitHub:
git pull origin web2
npm run validate-design

# If fails, revert:
git reset --hard HEAD~1
```

---

## 📄 **Design System Change Request Template**

If someone wants to change design tokens, they MUST fill this form:

```markdown
# Design System Change Request

## Requester
**Name:** [Your Name]  
**Date:** [Date]  
**Priority:** [ ] Critical [ ] High [ ] Medium [ ] Low

## Proposed Change
**What:** [Describe the change]  
**Why:** [Business justification]  
**Where:** [Which component(s) affected]

## Design Tokens Affected
- [ ] Colors
- [ ] Typography
- [ ] Layout Dimensions
- [ ] Spacing
- [ ] Shadows
- [ ] Border Radius

## Current Values
```css
/* Before */
--color-primary: #0F766E;
```

## Proposed Values
```css
/* After */
--color-primary: #1A7F7A;
```

## Impact Analysis
**Components Affected:** [List all components]  
**Breaking Changes:** [ ] Yes [ ] No  
**Backward Compatible:** [ ] Yes [ ] No

## Approval Required From
- [ ] Design Lead
- [ ] Frontend Lead
- [ ] Product Owner

## Implementation Plan
1. Update Figma Make design tokens
2. Test in Figma Make environment
3. Run visual regression tests
4. Sync to GitHub
5. Deploy to emergent.sh
6. Monitor for issues

---

**Approval Status:** [ ] Approved [ ] Rejected [ ] Pending
**Approved By:** _______________  
**Date:** _______________
```

---

## 🎓 **Best Practices**

### **DO:**
✅ Always make design changes in Figma Make first  
✅ Run validation scripts before committing  
✅ Use design tokens (CSS variables) everywhere  
✅ Document all design decisions  
✅ Test in both environments before deployment  
✅ Use `[FIGMA-SYNC]` prefix in commit messages  
✅ Keep design-tokens.css in sync  

### **DON'T:**
❌ Never modify design tokens directly in GitHub  
❌ Never hardcode colors/fonts in components  
❌ Never use inline styles  
❌ Never merge GitHub changes without validation  
❌ Never deploy without running consistency checks  
❌ Never override design tokens with !important  
❌ Never change brand identity without approval  

---

## 🆘 **Troubleshooting**

### **Problem: GitHub design differs from Figma Make**

**Solution:**
```bash
# 1. Identify differences
npm run check-github-consistency

# 2. Extract Figma Make design tokens
npm run extract-design-tokens

# 3. Force sync to GitHub
cp design-tokens.css /path/to/github/repo

# 4. Commit with override flag
git commit -m "[FIGMA-SYNC][OVERRIDE] Force design token sync"

# 5. Deploy to emergent.sh
```

### **Problem: Validation script fails**

**Solution:**
```bash
# 1. Check which test failed
npm run validate-design -- --verbose

# 2. Compare files manually
diff /figma-make/src/styles/theme.css \
     /github/frontend/src/app/globals.css

# 3. Fix discrepancies in Figma Make
# 4. Re-run validation
# 5. Sync to GitHub
```

### **Problem: GitHub has new features we want**

**Solution:**
```bash
# 1. Review GitHub changes
git diff origin/web2 -- frontend/src/

# 2. Check if design tokens modified
grep -r "color-primary" frontend/src/

# 3. If safe, cherry-pick to Figma Make
git cherry-pick <commit-sha>

# 4. Refactor to Figma Make structure
# 5. Validate and test
# 6. Commit to Figma Make
```

---

## 📚 **Related Documentation**

- [`DESIGN_COMPARISON_REPORT.md`](./DESIGN_COMPARISON_REPORT.md) - Full comparison analysis
- [`QUICK_DIAGNOSTIC.md`](./QUICK_DIAGNOSTIC.md) - Fast diagnostic guide (if exists)
- [`VISUAL_DIFF_GUIDE.md`](./VISUAL_DIFF_GUIDE.md) - Visual comparison checklist (if exists)
- `/src/styles/design-tokens.css` - Master design token file

---

## 🚀 **Quick Reference Commands**

```bash
# Validate Figma Make design
npm run validate-design

# Check GitHub consistency
npm run check-github-consistency

# Extract design tokens
npm run extract-design-tokens

# Sync to GitHub
npm run sync-to-github

# Force override GitHub
npm run force-sync-github

# Revert GitHub changes
cd /path/to/github && git reset --hard HEAD~1
```

---

## 📧 **Contact**

**Questions or need approval for design changes?**  
Contact: [Design Lead / Product Owner]  
Process: Submit Design System Change Request (see template above)

---

**Last Updated:** Saturday, April 4, 2026  
**Document Version:** 1.0  
**Status:** ✅ Active

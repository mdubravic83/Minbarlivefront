# ⚡ Quick Reference: Figma Make as Source of Truth

## 🎯 Core Principle
> **Figma Make = Master** | GitHub = Deployment Copy

---

## 📋 Daily Checklist

### **✅ Before Starting Work:**
```bash
cd /path/to/figma-make
npm run check-github-consistency
```

### **✅ Before Committing:**
```bash
npm run validate-design
git add .
git commit -m "feat: Your change"
```

### **✅ Before Deploying:**
```bash
npm run validate-design
npm run check-github-consistency
# Only deploy if BOTH pass!
```

### **✅ After Pulling from GitHub:**
```bash
cd /path/to/github/repo
git pull origin web2
cd /path/to/figma-make
npm run check-github-consistency
# If fails, revert immediately!
```

---

## 🚦 Decision Matrix

| Change Type | Allowed in GitHub? | Requires Approval? | Sync Direction |
|-------------|-------------------|-------------------|----------------|
| **CSS Variables** | ❌ NO | ✅ YES | Figma Make → GitHub |
| **Font Config** | ❌ NO | ✅ YES | Figma Make → GitHub |
| **Layout Dimensions** | ❌ NO | ✅ YES | Figma Make → GitHub |
| **Brand Colors** | ❌ NO | ✅ YES | Figma Make → GitHub |
| **Component Logic** | ✅ YES | ❌ NO | Can go either way |
| **Bug Fixes** | ✅ YES | ❌ NO | Can go either way |
| **API Integration** | ✅ YES | ❌ NO | Can go either way |
| **New Features** | ⚠️ MAYBE | ⚠️ MAYBE | Review first |

---

## 🔴 REJECT Immediately

These changes from GitHub are **ALWAYS REJECTED** without review:

```css
/* ❌ REJECT - Color changed */
--color-primary: #1A7F7A;

/* ❌ REJECT - Font changed */
font-family: 'Roboto', sans-serif;

/* ❌ REJECT - Hardcoded color */
<div className="bg-[#FF0000]">

/* ❌ REJECT - Layout dimension changed */
.sidebar { width: 280px; }

/* ❌ REJECT - Brand name changed */
<span>HutbaStream</span>
```

---

## ✅ Safe to Accept

These changes from GitHub are **SAFE to merge**:

```tsx
// ✅ OK - Bug fix (logic only)
const handleClick = () => {
  console.log('Fixed typo');
};

// ✅ OK - Performance optimization
const MemoizedComponent = React.memo(Component);

// ✅ OK - Accessibility
<button aria-label="Close">

// ✅ OK - Uses design tokens
<div className="bg-[var(--color-primary)]">

// ✅ OK - API integration
const { data } = await fetch('/api/data');
```

---

## 🔧 Quick Commands

```bash
# Validate Figma Make
npm run validate-design

# Check GitHub consistency
npm run check-github-consistency

# Verbose output
npm run check-github-verbose

# Generate report
npm run check-github-report

# Set paths
export FIGMA_MAKE_PATH="/path/to/figma-make"
export GITHUB_REPO_PATH="/path/to/github/repo"
```

---

## 🆘 Emergency Procedures

### **If GitHub has breaking changes:**
```bash
cd /path/to/github/repo
git fetch origin web2
git reset --hard HEAD~1
git push origin web2 --force
```

### **If design is broken after pull:**
```bash
cd /path/to/figma-make
git log --oneline -5
git revert <commit-hash>
npm run validate-design
```

### **If sync is corrupted:**
```bash
# Force sync from Figma Make
cp -r /path/to/figma-make/src/styles/* \
      /path/to/github/repo/frontend/src/app/
cd /path/to/github/repo
git add .
git commit -m "[FIGMA-SYNC][OVERRIDE] Force design token sync"
git push origin web2 --force
```

---

## 📞 Contacts

| Issue | Contact | Process |
|-------|---------|---------|
| Design Token Changes | Design Lead | Submit Change Request |
| Sync Failures | DevOps Team | Check logs |
| Breaking Changes | Tech Lead | Review & Approve |
| Deployment Issues | Platform Team | Check emergent.sh |

---

## 🔗 Quick Links

- [Full Sync Guide](./FIGMA_MAKE_SYNC_GUIDE.md)
- [Design Comparison Report](./DESIGN_COMPARISON_REPORT.md)
- [Scripts Documentation](./scripts/README.md)
- [Design Tokens Master](./src/styles/design-tokens.css)

---

**Last Updated:** Saturday, April 4, 2026  
**Version:** 1.0

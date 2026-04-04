# 📚 Design System Documentation Index

Welcome to the **MinbarLive Frontend Design System** documentation. This is your central hub for maintaining design consistency between **Figma Make** (source of truth) and **GitHub deployment** (emergent.sh).

---

## 🎯 Core Principle

> **Figma Make is the SINGLE SOURCE OF TRUTH for all frontend design.**
> 
> All design changes must originate in Figma Make and be validated before syncing to GitHub.

---

## 📖 Documentation Structure

### **🚀 Quick Start**

Start here if you're new or need a quick reference:

- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** ⚡
  - Daily checklists
  - Decision matrix
  - Quick commands
  - Emergency procedures
  - 📄 **~2 min read**

---

### **📊 Analysis & Comparison**

Understand the differences between Figma Make and GitHub:

- **[DESIGN_COMPARISON_REPORT.md](./DESIGN_COMPARISON_REPORT.md)** 📈
  - Full architecture comparison
  - CSS structure differences
  - Brand colors analysis
  - Font loading differences
  - Component structure comparison
  - Root cause analysis
  - 📄 **~15 min read**

---

### **🔄 Sync Workflow**

Learn how to maintain consistency between environments:

- **[FIGMA_MAKE_SYNC_GUIDE.md](./FIGMA_MAKE_SYNC_GUIDE.md)** 🔄
  - Design token registry
  - Sync workflow (Figma Make → GitHub)
  - Reverse sync validation (GitHub → Figma Make)
  - Validation scripts
  - Pre-deployment checklist
  - Red flags & safe changes
  - Design system change request template
  - 📄 **~20 min read**

---

### **🛠️ Technical Implementation**

Automated validation tools and scripts:

- **[/scripts/README.md](./scripts/README.md)** 🔧
  - `validate-design-tokens.js` documentation
  - `check-github-consistency.js` documentation
  - Configuration guide
  - Output examples
  - Troubleshooting
  - 📄 **~10 min read**

---

## 🔧 Available Commands

### **Validation**
```bash
# Validate Figma Make design tokens
npm run validate-design

# Check GitHub consistency
npm run check-github-consistency

# Verbose mode
npm run check-github-verbose

# Generate JSON report
npm run check-github-report
```

### **Quick Checks**
```bash
# Before starting work
npm run check-github-consistency

# Before committing
npm run validate-design

# Before deploying
npm run validate-design && npm run check-github-consistency
```

---

## 📋 File Organization

```
/
├── DESIGN_COMPARISON_REPORT.md      # Full analysis report
├── FIGMA_MAKE_SYNC_GUIDE.md         # Complete sync workflow
├── QUICK_REFERENCE.md                # Quick reference guide
├── README.md                         # This file
│
├── /scripts/                         # Automation scripts
│   ├── README.md                     # Scripts documentation
│   ├── validate-design-tokens.js    # Design validation
│   └── check-github-consistency.js  # GitHub comparison
│
├── /src/                             # Source code
│   ├── /app/                         # Application components
│   │   ├── App.tsx                   # Entry point
│   │   ├── routes.tsx                # Routing config
│   │   └── /components/              # All components
│   │
│   └── /styles/                      # Design tokens (MASTER)
│       ├── index.css                 # Main import
│       ├── fonts.css                 # Font definitions
│       ├── theme.css                 # Color tokens & theme
│       ├── tailwind.css              # Tailwind config
│       └── design-tokens.css         # Shared tokens (optional)
│
└── package.json                      # Scripts configuration
```

---

## 🎨 Design Token Locations

### **Master Tokens (Figma Make)**
```
/src/styles/theme.css          ✅ Source of Truth
/src/styles/fonts.css          ✅ Source of Truth
```

### **Production Deployment (GitHub/emergent.sh)**
```
/frontend/src/app/globals.css  ⚠️  Must match Figma Make
```

---

## 🚦 Workflow Overview

```
┌──────────────────────────────────────────────────┐
│  1. Make Changes in Figma Make                   │
│     Edit /src/styles/theme.css                   │
│     Edit /src/app/components/*                   │
└──────────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────────┐
│  2. Validate Locally                             │
│     npm run validate-design                      │
└──────────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────────┐
│  3. Commit to Figma Make                         │
│     git commit -m "feat: Update colors"          │
└──────────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────────┐
│  4. Sync to GitHub                               │
│     Copy design tokens to GitHub repo            │
│     git commit -m "[FIGMA-SYNC] Update tokens"   │
└──────────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────────┐
│  5. Validate GitHub                              │
│     npm run check-github-consistency             │
└──────────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────────┐
│  6. Deploy to emergent.sh                        │
│     Push to web2 branch                          │
└──────────────────────────────────────────────────┘
```

---

## ⚠️ Protected Files

These files **CANNOT BE CHANGED** in GitHub without approval:

- `frontend/src/app/globals.css`
- `frontend/src/app/design-tokens.css`

Any modification to these files will trigger validation failure.

---

## ✅ Change Approval Matrix

| Change Type | GitHub OK? | Approval? | Sync Direction |
|-------------|-----------|-----------|----------------|
| **CSS Variables** | ❌ NO | ✅ YES | Figma → GitHub |
| **Font Config** | ❌ NO | ✅ YES | Figma → GitHub |
| **Layout Dims** | ❌ NO | ✅ YES | Figma → GitHub |
| **Brand Colors** | ❌ NO | ✅ YES | Figma → GitHub |
| **Bug Fixes** | ✅ YES | ❌ NO | Either way |
| **New Features** | ⚠️ REVIEW | ⚠️ MAYBE | Review first |

---

## 🆘 Emergency Contacts

| Issue | Contact | Process |
|-------|---------|---------|
| Design Token Changes | Design Lead | Submit change request |
| Sync Failures | DevOps | Check logs |
| Breaking Changes | Tech Lead | Review & approve |
| Deployment Issues | Platform Team | Check emergent.sh |

---

## 📖 Reading Path

### **For New Developers:**
1. Read [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) (2 min)
2. Skim [DESIGN_COMPARISON_REPORT.md](./DESIGN_COMPARISON_REPORT.md) (5 min)
3. Read [/scripts/README.md](./scripts/README.md) (5 min)
4. Bookmark [FIGMA_MAKE_SYNC_GUIDE.md](./FIGMA_MAKE_SYNC_GUIDE.md) for reference

### **For Design Changes:**
1. Read [FIGMA_MAKE_SYNC_GUIDE.md](./FIGMA_MAKE_SYNC_GUIDE.md) fully (20 min)
2. Follow workflow in sync guide
3. Use scripts to validate
4. Refer to [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) as needed

### **For Bug Fixes:**
1. Read [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) decision matrix
2. Run `npm run validate-design` before committing
3. Check if change affects design tokens
4. If yes, follow sync guide; if no, commit normally

---

## 🎓 Key Concepts

### **Design Tokens**
CSS variables that define colors, typography, spacing, etc. These are the foundation of the design system.

**Example:**
```css
:root {
  --color-primary: #0F766E;
  --color-gold: #D4AF37;
}
```

### **Source of Truth**
Figma Make is the master version. All design decisions originate here.

### **Sync Direction**
Design changes flow **one-way**: Figma Make → GitHub (emergent.sh)

### **Validation**
Automated checks ensure consistency between environments.

---

## 🔍 Common Questions

### **Q: Can I change colors in GitHub?**
**A:** ❌ NO. All color changes must originate in Figma Make.

### **Q: How do I know if my change is safe?**
**A:** Run `npm run validate-design` before committing.

### **Q: What if GitHub has a feature I want?**
**A:** Use `npm run check-github-consistency` to review. Safe changes can be merged after validation.

### **Q: How do I sync changes to GitHub?**
**A:** Follow the workflow in [FIGMA_MAKE_SYNC_GUIDE.md](./FIGMA_MAKE_SYNC_GUIDE.md).

### **Q: What if validation fails?**
**A:** Check error messages, fix issues in Figma Make, then re-run validation.

---

## 🚀 Quick Start Checklist

- [ ] Read [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
- [ ] Set environment variables:
  ```bash
  export FIGMA_MAKE_PATH="/path/to/figma-make"
  export GITHUB_REPO_PATH="/path/to/github/repo"
  ```
- [ ] Run initial validation:
  ```bash
  npm run validate-design
  npm run check-github-consistency
  ```
- [ ] Bookmark this README for reference
- [ ] Join design system Slack channel (if exists)

---

## 📊 Metrics & Reporting

### **Design Token Changes**
Track all design token modifications:
- Date
- Changed by
- Change reason
- Approval status

### **Sync Failures**
Monitor validation failures:
- Failure rate
- Common errors
- Resolution time

### **Deployment Issues**
Track emergent.sh deployment problems:
- Visual differences
- Performance issues
- Browser compatibility

---

## 🔄 Maintenance Schedule

### **Daily**
- [ ] Check GitHub consistency before starting work
- [ ] Validate design before committing
- [ ] Review sync failures

### **Weekly**
- [ ] Review design token changes
- [ ] Update documentation if needed
- [ ] Clean up old validation reports

### **Monthly**
- [ ] Full design audit
- [ ] Review sync workflow efficiency
- [ ] Update validation scripts if needed

---

## 📝 Contributing to Documentation

If you find errors or have suggestions:

1. Create issue with `[DOCS]` prefix
2. Describe the problem/suggestion
3. Provide examples if applicable
4. Tag design lead for review

**Example:**
```
[DOCS] Add example for component migration

The sync guide should include an example of migrating
a component from GitHub to Figma Make.
```

---

## 🎯 Success Metrics

Our design system is successful when:

- ✅ 100% of design changes originate in Figma Make
- ✅ 0 validation failures in production
- ✅ < 5 min sync time from Figma Make to GitHub
- ✅ 100% visual parity between environments
- ✅ < 1 day approval time for design changes

---

## 🌟 Best Practices

1. **Always validate before committing**
2. **Use design tokens, never hardcode values**
3. **Document all design decisions**
4. **Test in both environments**
5. **Keep sync workflow fast**
6. **Communicate design changes to team**
7. **Review GitHub changes carefully**
8. **Maintain single source of truth**

---

## 📞 Support

Need help? Check these resources in order:

1. **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Fast answers
2. **[FIGMA_MAKE_SYNC_GUIDE.md](./FIGMA_MAKE_SYNC_GUIDE.md)** - Detailed guide
3. **Scripts troubleshooting** - Check [/scripts/README.md](./scripts/README.md)
4. **Team Slack** - Ask in #design-system channel
5. **Design Lead** - For approval and escalation

---

**Last Updated:** Saturday, April 4, 2026  
**Version:** 1.0  
**Status:** ✅ Active

---

**Happy building! 🚀**

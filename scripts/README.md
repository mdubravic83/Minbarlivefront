# 🛠️ Design Validation Scripts

This folder contains automated scripts to maintain design consistency between **Figma Make** (source of truth) and **GitHub repo** (production deployment).

---

## 📜 **Available Scripts**

### 1. **validate-design-tokens.js**
Validates that all design tokens in Figma Make are correct and consistent.

**Usage:**
```bash
npm run validate-design
```

**What it checks:**
- ✅ Color variables are defined
- ✅ Font family and weights are correct
- ✅ Layout dimensions match design system
- ✅ No hardcoded colors in components

**Exit Codes:**
- `0` = All validations passed ✅
- `1` = Validation failed ❌

---

### 2. **check-github-consistency.js**
Compares GitHub repo against Figma Make to detect design violations.

**Usage:**
```bash
# Basic check
npm run check-github-consistency

# Verbose output
npm run check-github-verbose

# Generate JSON report
npm run check-github-report
```

**What it checks:**
- ✅ Git status (uncommitted changes)
- ✅ Protected files (design tokens)
- ✅ CSS variables consistency
- ✅ Font configuration
- ✅ Component structure changes
- ✅ Package dependencies
- ✅ Breaking changes detection

**Exit Codes:**
- `0` = Safe to merge from GitHub ✅
- `1` = Design violations detected ❌

---

## 🚀 **Quick Start**

### **Before Deploying to emergent.sh:**
```bash
# 1. Validate Figma Make design
npm run validate-design

# 2. Check GitHub consistency
npm run check-github-consistency

# 3. Only deploy if both pass!
```

### **Before Pulling Changes from GitHub:**
```bash
cd /path/to/github/repo
git fetch origin web2

# Check what changed
npm run check-github-verbose

# If safe, merge
git pull origin web2

# Validate after merge
npm run validate-design
```

---

## ⚙️ **Configuration**

Both scripts use environment variables for paths:

```bash
# Set these in your environment or .env file
export FIGMA_MAKE_PATH="/path/to/figma-make-project"
export GITHUB_REPO_PATH="/path/to/hutbalive"
```

Or run with inline variables:
```bash
FIGMA_MAKE_PATH=/path/to/project npm run validate-design
```

---

## 📊 **Output Examples**

### **Successful Validation:**
```
🎨 Design Token Validation

═══════════════════════════════════════════════════════════
🔍 Checking color variables...
✅ All color variables match!
🔍 Checking font configuration...
✅ Font configuration matches!
🔍 Checking layout dimensions...
✅ Layout dimensions match!
🔍 Checking for hardcoded colors in components...
✅ No hardcoded colors found!

═══════════════════════════════════════════════════════════

📊 Validation Summary:

✅ colors: PASS
✅ fonts: PASS
✅ dimensions: PASS
✅ hardcoded: PASS

═══════════════════════════════════════════════════════════
✅ All validations passed! ✨

✅ Safe to sync to GitHub and deploy.
```

### **Failed Validation:**
```
🎨 Design Token Validation

═══════════════════════════════════════════════════════════
🔍 Checking color variables...
❌ Color mismatch for --color-primary: Figma=#0F766E, GitHub=#1A7F7A
🔍 Checking font configuration...
❌ Missing font weights in GitHub: 300, 800

═══════════════════════════════════════════════════════════

❌ Errors:
❌ Color mismatch for --color-primary
❌ Missing font weights: 300, 800

═══════════════════════════════════════════════════════════
❌ Validation failed! ⚠️

❌ Do NOT sync to GitHub until issues are resolved.
```

---

## 🔒 **Protected Files**

These files are **LOCKED** and cannot be modified in GitHub without approval:

- `frontend/src/app/globals.css`
- `frontend/src/app/design-tokens.css`

If these files are modified in GitHub, `check-github-consistency` will **FAIL** and prevent merge.

---

## 🛡️ **Design Token Registry**

Master design tokens are defined in:
- `/src/styles/design-tokens.css` (Figma Make)
- `/src/styles/theme.css` (Figma Make)

Any changes to these values must:
1. ✅ Be approved via Design System Change Request
2. ✅ Originate in Figma Make
3. ✅ Pass validation scripts
4. ✅ Be synced to GitHub manually

---

## 🚨 **When Scripts Fail**

### **If `validate-design` fails:**
1. Check error messages
2. Fix design tokens in Figma Make
3. Re-run validation
4. Commit changes
5. Sync to GitHub

### **If `check-github-consistency` fails:**
1. Review what changed in GitHub
2. Check if design tokens were modified
3. Revert GitHub changes if necessary
4. Request design approval if needed
5. Re-run check after fixes

---

## 📝 **Adding New Checks**

To add a new validation check:

1. **In `validate-design-tokens.js`:**
```javascript
validateNewCheck() {
  log('check', 'Checking new thing...');
  
  // Your validation logic here
  
  if (allGood) {
    log('success', 'Check passed!');
    return true;
  }
  
  this.errors.push('Check failed');
  return false;
}
```

2. **Add to `runAll()` method:**
```javascript
const results = {
  colors: this.validateColors(),
  fonts: this.validateFonts(),
  newCheck: this.validateNewCheck(), // Add here
};
```

3. **Test:**
```bash
npm run validate-design
```

---

## 🆘 **Troubleshooting**

### **Script won't run:**
```bash
# Make sure scripts are executable
chmod +x scripts/*.js

# Check Node.js version (need v14+)
node --version

# Try running directly
node scripts/validate-design-tokens.js
```

### **Cannot find files:**
```bash
# Set correct paths
export FIGMA_MAKE_PATH="$(pwd)"
export GITHUB_REPO_PATH="/path/to/github/repo"

# Verify paths
echo $FIGMA_MAKE_PATH
ls $FIGMA_MAKE_PATH/src/styles
```

### **Git commands fail:**
```bash
# Make sure you're in git repo
cd $GITHUB_REPO_PATH
git status

# Fetch latest changes
git fetch origin web2
```

---

## 📚 **Related Documentation**

- [`FIGMA_MAKE_SYNC_GUIDE.md`](../FIGMA_MAKE_SYNC_GUIDE.md) - Complete sync workflow
- [`DESIGN_COMPARISON_REPORT.md`](../DESIGN_COMPARISON_REPORT.md) - Detailed comparison
- [`/src/styles/design-tokens.css`](../src/styles/design-tokens.css) - Master tokens

---

## 🤝 **Contributing**

Before submitting changes to these scripts:

1. ✅ Test with both passing and failing scenarios
2. ✅ Update this README
3. ✅ Add comments to your code
4. ✅ Follow existing code style

---

**Questions?** Check the main sync guide or contact the design lead.

**Last Updated:** Saturday, April 4, 2026

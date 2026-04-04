#!/usr/bin/env node

/**
 * 🔍 GitHub Consistency Checker
 * 
 * Purpose: Validates GitHub repo changes before accepting them into Figma Make
 * Usage: npm run check-github-consistency
 * 
 * This script ensures that any changes pulled from GitHub repo
 * maintain design consistency with Figma Make (source of truth)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  FIGMA_MAKE_PATH: process.env.FIGMA_MAKE_PATH || path.join(__dirname, '..'),
  GITHUB_REPO_PATH: process.env.GITHUB_REPO_PATH || '/path/to/hutbalive',
  
  // Git branch to check
  GITHUB_BRANCH: 'web2',
  
  // Critical files that cannot change without approval
  PROTECTED_FILES: [
    'frontend/src/app/globals.css',
    'frontend/src/app/design-tokens.css',
  ],
  
  // Report settings
  VERBOSE: process.argv.includes('--verbose'),
  GENERATE_REPORT: process.argv.includes('--report'),
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function log(type, message, details = null) {
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
    check: '🔍',
    file: '📄',
  };
  
  console.log(`${icons[type]} ${message}`);
  
  if (details && CONFIG.VERBOSE) {
    console.log(`   ${details}`);
  }
}

function execCommand(command, options = {}) {
  try {
    return execSync(command, {
      encoding: 'utf8',
      cwd: CONFIG.GITHUB_REPO_PATH,
      ...options,
    });
  } catch (error) {
    return null;
  }
}

function readFileIfExists(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch {
    return null;
  }
}

function extractCSSVariables(css) {
  const variables = {};
  const patterns = [
    /--color-([a-z-]+):\s*([^;]+);/gi,
    /--([a-z-]+):\s*([^;]+);/gi,
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(css)) !== null) {
      variables[match[1]] = match[2].trim();
    }
  });
  
  return variables;
}

// ============================================================================
// CONSISTENCY CHECKS
// ============================================================================

class ConsistencyChecker {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.info = [];
    this.report = {
      timestamp: new Date().toISOString(),
      checks: [],
    };
  }
  
  // Check 1: Git Status
  checkGitStatus() {
    log('check', 'Checking git status...');
    
    const status = execCommand('git status --porcelain');
    
    if (!status) {
      this.errors.push('Cannot read git status - ensure repo path is correct');
      return false;
    }
    
    if (status.trim()) {
      this.warnings.push('Repository has uncommitted changes');
      log('warning', 'Uncommitted changes detected', status.substring(0, 200));
    }
    
    this.report.checks.push({
      name: 'Git Status',
      passed: true,
      details: status ? 'Repository clean' : 'Has changes',
    });
    
    return true;
  }
  
  // Check 2: Protected Files Modified
  checkProtectedFiles() {
    log('check', 'Checking protected files...');
    
    const diff = execCommand(`git diff origin/${CONFIG.GITHUB_BRANCH} --name-only`);
    
    if (!diff) {
      log('info', 'No changes detected from origin');
      return true;
    }
    
    const changedFiles = diff.split('\n').filter(Boolean);
    const protectedChanged = changedFiles.filter(file =>
      CONFIG.PROTECTED_FILES.some(pf => file.includes(pf))
    );
    
    if (protectedChanged.length > 0) {
      protectedChanged.forEach(file => {
        this.errors.push(`Protected file modified: ${file}`);
        log('error', `Protected file modified: ${file}`);
      });
      
      this.report.checks.push({
        name: 'Protected Files',
        passed: false,
        details: `Modified: ${protectedChanged.join(', ')}`,
      });
      
      return false;
    }
    
    log('success', 'No protected files modified');
    
    this.report.checks.push({
      name: 'Protected Files',
      passed: true,
      details: 'No modifications',
    });
    
    return true;
  }
  
  // Check 3: CSS Variables Consistency
  checkCSSVariables() {
    log('check', 'Checking CSS variable consistency...');
    
    const figmaCSS = readFileIfExists(
      path.join(CONFIG.FIGMA_MAKE_PATH, 'src/styles/theme.css')
    );
    
    const githubCSS = readFileIfExists(
      path.join(CONFIG.GITHUB_REPO_PATH, 'frontend/src/app/globals.css')
    );
    
    if (!figmaCSS || !githubCSS) {
      this.errors.push('Cannot read CSS files for comparison');
      return false;
    }
    
    const figmaVars = extractCSSVariables(figmaCSS);
    const githubVars = extractCSSVariables(githubCSS);
    
    // Check critical variables
    const criticalVars = [
      'color-primary',
      'color-gold',
      'color-text',
      'color-surface',
    ];
    
    let allMatch = true;
    
    criticalVars.forEach(varName => {
      const figmaValue = figmaVars[varName];
      const githubValue = githubVars[varName] || githubVars[`${varName}-900`]; // Handle GitHub's numbered variants
      
      if (figmaValue && githubValue && figmaValue !== githubValue) {
        this.errors.push(
          `CSS variable mismatch: --${varName} ` +
          `(Figma: ${figmaValue}, GitHub: ${githubValue})`
        );
        allMatch = false;
      }
    });
    
    if (allMatch) {
      log('success', 'CSS variables are consistent');
    }
    
    this.report.checks.push({
      name: 'CSS Variables',
      passed: allMatch,
      details: allMatch ? 'All match' : 'Mismatches found',
    });
    
    return allMatch;
  }
  
  // Check 4: Font Configuration
  checkFontConfiguration() {
    log('check', 'Checking font configuration...');
    
    const figmaFonts = readFileIfExists(
      path.join(CONFIG.FIGMA_MAKE_PATH, 'src/styles/fonts.css')
    );
    
    const githubCSS = readFileIfExists(
      path.join(CONFIG.GITHUB_REPO_PATH, 'frontend/src/app/globals.css')
    );
    
    if (!figmaFonts || !githubCSS) {
      this.warnings.push('Cannot compare font configurations');
      return true; // Non-critical
    }
    
    // Extract font family
    const figmaFamily = figmaFonts.match(/family=([^:&]+)/)?.[1];
    const githubFamily = githubCSS.match(/family=([^:&]+)/)?.[1];
    
    if (figmaFamily !== githubFamily) {
      this.warnings.push(
        `Font family differs: Figma=${figmaFamily}, GitHub=${githubFamily}`
      );
    }
    
    // Extract font weights
    const figmaWeightsStr = figmaFonts.match(/wght@([\d;]+)/)?.[1];
    const githubWeightsStr = githubCSS.match(/wght@([\d;]+)/)?.[1];
    
    if (figmaWeightsStr !== githubWeightsStr) {
      this.warnings.push(
        `Font weights differ: Figma=${figmaWeightsStr}, GitHub=${githubWeightsStr}`
      );
    } else {
      log('success', 'Font configuration matches');
    }
    
    this.report.checks.push({
      name: 'Font Configuration',
      passed: true,
      details: 'Checked',
    });
    
    return true;
  }
  
  // Check 5: Component Structure Changes
  checkComponentStructure() {
    log('check', 'Checking component structure...');
    
    const diff = execCommand(
      `git diff origin/${CONFIG.GITHUB_BRANCH} --stat -- frontend/src/components/`
    );
    
    if (!diff) {
      log('info', 'No component changes detected');
      return true;
    }
    
    // Parse diff to find new/modified components
    const lines = diff.split('\n').filter(Boolean);
    const changedComponents = lines
      .filter(line => line.includes('.jsx') || line.includes('.tsx'))
      .map(line => line.trim().split('|')[0].trim());
    
    if (changedComponents.length > 0) {
      this.info.push(`Components modified: ${changedComponents.length}`);
      changedComponents.forEach(comp => {
        log('info', `Modified: ${comp}`);
      });
    }
    
    this.report.checks.push({
      name: 'Component Structure',
      passed: true,
      details: `${changedComponents.length} components modified`,
    });
    
    return true;
  }
  
  // Check 6: Package Dependencies
  checkPackageDependencies() {
    log('check', 'Checking package dependencies...');
    
    const figmaPackage = JSON.parse(
      readFileIfExists(path.join(CONFIG.FIGMA_MAKE_PATH, 'package.json'))
    );
    
    const githubPackage = JSON.parse(
      readFileIfExists(
        path.join(CONFIG.GITHUB_REPO_PATH, 'frontend/package.json')
      )
    );
    
    if (!figmaPackage || !githubPackage) {
      this.warnings.push('Cannot compare package.json files');
      return true;
    }
    
    // Check critical dependencies
    const criticalDeps = [
      'react',
      'tailwindcss',
      'lucide-react',
    ];
    
    criticalDeps.forEach(dep => {
      const figmaVersion = figmaPackage.dependencies?.[dep] || 
                          figmaPackage.devDependencies?.[dep];
      const githubVersion = githubPackage.dependencies?.[dep] || 
                           githubPackage.devDependencies?.[dep];
      
      if (figmaVersion && githubVersion && figmaVersion !== githubVersion) {
        this.warnings.push(
          `${dep} version mismatch: Figma=${figmaVersion}, GitHub=${githubVersion}`
        );
      }
    });
    
    log('success', 'Package dependencies checked');
    
    this.report.checks.push({
      name: 'Package Dependencies',
      passed: true,
      details: 'Checked critical dependencies',
    });
    
    return true;
  }
  
  // Check 7: Detect Breaking Changes
  detectBreakingChanges() {
    log('check', 'Detecting potential breaking changes...');
    
    const diff = execCommand(
      `git diff origin/${CONFIG.GITHUB_BRANCH} -- frontend/src/`
    );
    
    if (!diff) {
      log('info', 'No changes detected');
      return true;
    }
    
    // Patterns that indicate breaking changes
    const breakingPatterns = [
      { pattern: /export\s+default/g, desc: 'Default export changed' },
      { pattern: /interface\s+\w+/g, desc: 'Interface definition changed' },
      { pattern: /type\s+\w+\s*=/g, desc: 'Type definition changed' },
      { pattern: /@tailwindcss/g, desc: 'Tailwind import changed' },
    ];
    
    let hasBreaking = false;
    
    breakingPatterns.forEach(({ pattern, desc }) => {
      if (pattern.test(diff)) {
        this.warnings.push(`Potential breaking change: ${desc}`);
        hasBreaking = true;
      }
    });
    
    if (!hasBreaking) {
      log('success', 'No obvious breaking changes detected');
    }
    
    this.report.checks.push({
      name: 'Breaking Changes',
      passed: !hasBreaking,
      details: hasBreaking ? 'Potential issues found' : 'None detected',
    });
    
    return true;
  }
  
  // Generate Report
  generateReport() {
    if (!CONFIG.GENERATE_REPORT) return;
    
    const reportPath = path.join(
      CONFIG.FIGMA_MAKE_PATH,
      'consistency-report.json'
    );
    
    this.report.summary = {
      totalChecks: this.report.checks.length,
      passed: this.report.checks.filter(c => c.passed).length,
      errors: this.errors.length,
      warnings: this.warnings.length,
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(this.report, null, 2));
    
    log('file', `Report generated: consistency-report.json`);
  }
  
  // Run all checks
  runAll() {
    console.log('\n🔍 GitHub Consistency Check\n');
    console.log('═'.repeat(60));
    
    const checks = [
      () => this.checkGitStatus(),
      () => this.checkProtectedFiles(),
      () => this.checkCSSVariables(),
      () => this.checkFontConfiguration(),
      () => this.checkComponentStructure(),
      () => this.checkPackageDependencies(),
      () => this.detectBreakingChanges(),
    ];
    
    checks.forEach(check => {
      try {
        check();
      } catch (error) {
        this.errors.push(`Check failed: ${error.message}`);
      }
    });
    
    console.log('\n' + '═'.repeat(60));
    console.log('\n📊 Consistency Summary:\n');
    
    if (this.errors.length > 0) {
      console.log('❌ ERRORS:');
      this.errors.forEach(e => log('error', e));
      console.log('');
    }
    
    if (this.warnings.length > 0) {
      console.log('⚠️  WARNINGS:');
      this.warnings.forEach(w => log('warning', w));
      console.log('');
    }
    
    if (this.info.length > 0 && CONFIG.VERBOSE) {
      console.log('ℹ️  INFO:');
      this.info.forEach(i => log('info', i));
      console.log('');
    }
    
    this.generateReport();
    
    console.log('═'.repeat(60));
    
    if (this.errors.length === 0) {
      log('success', 'All consistency checks passed! ✨');
      console.log('\n✅ Safe to merge changes from GitHub.');
      return 0;
    } else {
      log('error', 'Consistency check failed! ⚠️');
      console.log('\n❌ Do NOT merge changes from GitHub until issues are resolved.');
      console.log('\nRecommended actions:');
      console.log('  1. Review errors above');
      console.log('  2. Revert GitHub changes that violate design system');
      console.log('  3. Re-run this check: npm run check-github-consistency');
      return 1;
    }
  }
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  // Parse args
  if (process.argv.includes('--help')) {
    console.log(`
🔍 GitHub Consistency Checker

Usage: npm run check-github-consistency [options]

Options:
  --verbose     Show detailed information
  --report      Generate JSON report
  --help        Show this help message

Environment Variables:
  FIGMA_MAKE_PATH      Path to Figma Make project
  GITHUB_REPO_PATH     Path to GitHub repository

Examples:
  npm run check-github-consistency
  npm run check-github-consistency -- --verbose
  npm run check-github-consistency -- --report
`);
    process.exit(0);
  }
  
  const checker = new ConsistencyChecker();
  const exitCode = checker.runAll();
  process.exit(exitCode);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { ConsistencyChecker };

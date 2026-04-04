#!/usr/bin/env node

/**
 * 🎨 Design Token Validator
 * 
 * Purpose: Ensures GitHub repo matches Figma Make design tokens
 * Usage: npm run validate-design
 * 
 * This script compares design tokens between:
 * - Figma Make (Source of Truth)
 * - GitHub repo (Production deployment)
 */

const fs = require('fs');
const path = require('path');

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  // Update these paths to match your setup
  FIGMA_MAKE_PATH: process.env.FIGMA_MAKE_PATH || path.join(__dirname, '..'),
  GITHUB_REPO_PATH: process.env.GITHUB_REPO_PATH || '/path/to/hutbalive/frontend',
  
  // Files to check
  FIGMA_THEME_CSS: 'src/styles/theme.css',
  FIGMA_FONTS_CSS: 'src/styles/fonts.css',
  GITHUB_GLOBALS_CSS: 'src/app/globals.css',
  
  // Strictness level
  STRICT_MODE: true, // Fail on any mismatch
};

// ============================================================================
// MASTER DESIGN TOKENS (From Figma Make)
// ============================================================================

const DESIGN_TOKENS = {
  colors: {
    primary: '#0F766E',
    'primary-dark': '#134E4A',
    'primary-light': '#14B8A6',
    gold: '#D4AF37',
    'gold-light': '#F4C542',
    'gold-dark': '#C49B2F',
    'gold-darker': '#B38B1F',
    'deep-green': '#14532D',
    'brand-green': '#2E7D32',
    text: '#0F172A',
    muted: '#475569',
    'light-muted': '#64748B',
    border: '#CBD5E1',
    surface: '#F8FAFC',
  },
  
  fonts: {
    family: 'Inter',
    weights: [300, 400, 500, 600, 700, 800],
  },
  
  dimensions: {
    'sidebar-width-expanded': '16rem',
    'sidebar-width-collapsed': '4rem',
    'header-height-mobile': '3.5rem',
    'header-height-desktop': '4rem',
    'logo-size-mobile': '1.75rem',
    'logo-size-desktop': '2rem',
  },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function log(type, message) {
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️',
    check: '🔍',
  };
  console.log(`${icons[type]} ${message}`);
}

function extractCSSVariable(css, varName) {
  // Handle both :root and @theme syntax
  const patterns = [
    new RegExp(`--${varName}:\\s*([^;]+);`, 'i'),
    new RegExp(`--${varName}-\\d+:\\s*([^;]+);`, 'i'), // For GitHub's numbered variants
  ];
  
  for (const pattern of patterns) {
    const match = css.match(pattern);
    if (match) return match[1].trim();
  }
  
  return null;
}

function extractFontWeights(css) {
  const match = css.match(/wght@([\d;]+)/);
  if (!match) return [];
  return match[1].split(';').map(w => parseInt(w, 10));
}

function readFileIfExists(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    log('error', `Cannot read file: ${filePath}`);
    return null;
  }
}

// ============================================================================
// VALIDATION TESTS
// ============================================================================

class DesignValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.checks = [];
  }
  
  // Check 1: CSS Color Variables
  validateColors() {
    log('check', 'Checking color variables...');
    
    const figmaCSS = readFileIfExists(
      path.join(CONFIG.FIGMA_MAKE_PATH, CONFIG.FIGMA_THEME_CSS)
    );
    
    const githubCSS = readFileIfExists(
      path.join(CONFIG.GITHUB_REPO_PATH, CONFIG.GITHUB_GLOBALS_CSS)
    );
    
    if (!figmaCSS || !githubCSS) {
      this.errors.push('Cannot compare CSS files - one or both not found');
      return false;
    }
    
    let allMatch = true;
    
    Object.entries(DESIGN_TOKENS.colors).forEach(([name, expectedValue]) => {
      const figmaValue = extractCSSVariable(figmaCSS, `color-${name}`);
      const githubValue = extractCSSVariable(githubCSS, `color-${name}`);
      
      if (figmaValue && githubValue && figmaValue !== githubValue) {
        this.errors.push(
          `Color mismatch for --color-${name}: ` +
          `Figma=${figmaValue}, GitHub=${githubValue}`
        );
        allMatch = false;
      } else if (figmaValue && !githubValue) {
        this.warnings.push(
          `Color --color-${name} exists in Figma but not in GitHub`
        );
      }
    });
    
    if (allMatch) {
      log('success', 'All color variables match!');
    }
    
    return allMatch;
  }
  
  // Check 2: Font Loading
  validateFonts() {
    log('check', 'Checking font configuration...');
    
    const figmaFonts = readFileIfExists(
      path.join(CONFIG.FIGMA_MAKE_PATH, CONFIG.FIGMA_FONTS_CSS)
    );
    
    const githubCSS = readFileIfExists(
      path.join(CONFIG.GITHUB_REPO_PATH, CONFIG.GITHUB_GLOBALS_CSS)
    );
    
    if (!figmaFonts || !githubCSS) {
      this.errors.push('Cannot compare font files');
      return false;
    }
    
    let allMatch = true;
    
    // Check font family
    const figmaFamily = figmaFonts.match(/family=([^:&]+)/)?.[1];
    const githubFamily = githubCSS.match(/family=([^:&]+)/)?.[1];
    
    if (figmaFamily !== githubFamily) {
      this.errors.push(
        `Font family mismatch: Figma=${figmaFamily}, GitHub=${githubFamily}`
      );
      allMatch = false;
    }
    
    // Check font weights
    const figmaWeights = extractFontWeights(figmaFonts);
    const githubWeights = extractFontWeights(githubCSS);
    
    const missingWeights = figmaWeights.filter(w => !githubWeights.includes(w));
    
    if (missingWeights.length > 0) {
      this.errors.push(
        `Missing font weights in GitHub: ${missingWeights.join(', ')}`
      );
      allMatch = false;
    }
    
    // Check for extra weights (warning only)
    const extraWeights = githubWeights.filter(w => !figmaWeights.includes(w));
    if (extraWeights.length > 0) {
      this.warnings.push(
        `Extra font weights in GitHub: ${extraWeights.join(', ')}`
      );
    }
    
    if (allMatch) {
      log('success', 'Font configuration matches!');
    }
    
    return allMatch;
  }
  
  // Check 3: Layout Dimensions
  validateDimensions() {
    log('check', 'Checking layout dimensions...');
    
    const figmaCSS = readFileIfExists(
      path.join(CONFIG.FIGMA_MAKE_PATH, CONFIG.FIGMA_THEME_CSS)
    );
    
    const githubCSS = readFileIfExists(
      path.join(CONFIG.GITHUB_REPO_PATH, CONFIG.GITHUB_GLOBALS_CSS)
    );
    
    if (!figmaCSS || !githubCSS) {
      this.errors.push('Cannot compare dimension files');
      return false;
    }
    
    let allMatch = true;
    
    Object.entries(DESIGN_TOKENS.dimensions).forEach(([name, expectedValue]) => {
      const figmaValue = extractCSSVariable(figmaCSS, name);
      const githubValue = extractCSSVariable(githubCSS, name);
      
      if (figmaValue && githubValue && figmaValue !== githubValue) {
        this.errors.push(
          `Dimension mismatch for --${name}: ` +
          `Figma=${figmaValue}, GitHub=${githubValue}`
        );
        allMatch = false;
      }
    });
    
    if (allMatch) {
      log('success', 'Layout dimensions match!');
    }
    
    return allMatch;
  }
  
  // Check 4: No Hardcoded Colors in Components
  validateNoHardcodedColors(directory) {
    log('check', 'Checking for hardcoded colors in components...');
    
    const componentsPath = path.join(CONFIG.FIGMA_MAKE_PATH, directory);
    
    if (!fs.existsSync(componentsPath)) {
      this.warnings.push(`Components directory not found: ${directory}`);
      return true;
    }
    
    const files = fs.readdirSync(componentsPath, { recursive: true });
    const componentFiles = files.filter(f => 
      f.endsWith('.tsx') || f.endsWith('.jsx')
    );
    
    let noViolations = true;
    
    componentFiles.forEach(file => {
      const content = fs.readFileSync(
        path.join(componentsPath, file),
        'utf8'
      );
      
      // Check for hex colors (excluding comments and imports)
      const hexPattern = /#[0-9A-Fa-f]{6}\b/g;
      const matches = content.match(hexPattern);
      
      if (matches) {
        // Filter out allowed cases (imports, comments)
        const violations = matches.filter(hex => {
          const index = content.indexOf(hex);
          const before = content.substring(Math.max(0, index - 50), index);
          
          // Allowed: import statements, comments
          return !before.includes('import') && 
                 !before.includes('//') && 
                 !before.includes('/*');
        });
        
        if (violations.length > 0) {
          this.warnings.push(
            `Potential hardcoded colors in ${file}: ${violations.join(', ')}`
          );
          noViolations = false;
        }
      }
    });
    
    if (noViolations) {
      log('success', 'No hardcoded colors found!');
    }
    
    return noViolations;
  }
  
  // Run all validations
  runAll() {
    console.log('\n🎨 Design Token Validation\n');
    console.log('═'.repeat(60));
    
    const results = {
      colors: this.validateColors(),
      fonts: this.validateFonts(),
      dimensions: this.validateDimensions(),
      hardcoded: this.validateNoHardcodedColors('src/app/components'),
    };
    
    console.log('\n' + '═'.repeat(60));
    console.log('\n📊 Validation Summary:\n');
    
    Object.entries(results).forEach(([test, passed]) => {
      log(passed ? 'success' : 'error', `${test}: ${passed ? 'PASS' : 'FAIL'}`);
    });
    
    if (this.warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      this.warnings.forEach(w => log('warning', w));
    }
    
    if (this.errors.length > 0) {
      console.log('\n❌ Errors:');
      this.errors.forEach(e => log('error', e));
    }
    
    const allPassed = Object.values(results).every(r => r);
    
    console.log('\n' + '═'.repeat(60));
    
    if (allPassed && this.errors.length === 0) {
      log('success', 'All validations passed! ✨');
      console.log('\n✅ Safe to sync to GitHub and deploy.');
      return 0;
    } else {
      log('error', 'Validation failed! ⚠️');
      console.log('\n❌ Do NOT sync to GitHub until issues are resolved.');
      return 1;
    }
  }
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  const validator = new DesignValidator();
  const exitCode = validator.runAll();
  process.exit(exitCode);
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { DesignValidator, DESIGN_TOKENS };

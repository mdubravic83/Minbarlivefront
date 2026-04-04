Create a **Version 4 final low-to-mid fidelity web admin product design** for **MinbarLive**, based on an existing modular admin design.

This is a **web-first SaaS platform** for mosques, Islamic organizations, and imams.

## Product modules

MinbarLive is modular and includes:

* **HutbaLive / KhutbaLive** — live khutbah session module
* **Studio** — recorded video processing
* **Podcast Companion** — live external media companion with transcript and translation
* **HutbaAsistent / Khutbah Assistant** — AI-assisted khutbah preparation using imported khutbah sources
* **Library** — shared searchable content layer

It also includes **owner-only platform control areas** for:

* organization management
* admin management
* hierarchy setup
* module rights assignment
* imports
* cookies
* khutbah KB source setup
* raw costs
* cost adjustments
* dev logs
* analytics
* session quality

---

## Critical system truth

The UI must support:

### 1. Role-based access

* Owner
* Super Admin
* Admin
* Public

### 2. Scope-based access

* global
* super organization
* child organizations
* single organization

### 3. Module-based access

Different organizations may have different enabled modules:

* HutbaLive only
* Studio only
* Studio + Podcast
* full bundle
* HutbaAsistent only if enabled

### 4. Owner-only operational privileges

Only Owner can access:

* Quality Dashboard
* Imports
* Cookies
* Khutbah KB Sources
* Raw Costs
* Cost Adjustments
* Dev Logs
* global analytics
* organization/admin governance

---

## Important naming rule

Do **not** call the live khutbah section “Live Sermons”.

Use:

* **HutbaLive** for local/BHS-facing product naming
* **KhutbaLive** for English-facing product naming if needed

Treat it as a real product/module name, not a generic label.

---

## Design goal

Refine the current design into a **final product-structure wireframe / low-to-mid fidelity UI handoff**.

The design should be:

* calm
* clean
* highly readable
* professional
* operational
* structured
* realistic for implementation

Do **not** make it flashy.
Do **not** make it crypto/trading-like.
Do **not** make it look like a generic analytics dashboard.
Do **not** turn it into a consumer mobile app.

This should feel like a **serious SaaS control platform** for multilingual religious and educational content workflows.

---

## Brand direction

Use a visual direction inspired by MinbarLive:

* green as the primary brand foundation
* gold as a reserved accent for important CTAs / premium emphasis
* neutral backgrounds
* subtle borders
* clean typography
* generous spacing
* strong contrast and accessibility

---

## Very important navigation requirement

The product now needs **main navigation + subnavigation**.

Do **not** keep the sidebar flat.

The UI should support:

* grouped sidebar sections
* collapsible navigation groups
* submenus / secondary navigation
* active state for both main section and submenu item
* breadcrumb in topbar or content header when useful

This is very important because the product is now too large for single-level navigation.

---

## Main sidebar structure

### Dashboard

Submenu:

* Overview
* Activity
* Alerts

### HutbaLive

Submenu:

* Sessions
* Active Session
* Archive
* Templates / Presets

### Podcast Companion

Submenu:

* Sessions
* Live Viewer
* Published / Shared
* QR / Access

### Studio

Submenu:

* Jobs
* Upload
* Public Videos
* Exports

### HutbaAsistent

Submenu:

* Overview
* New Draft
* Drafts
* References / Sources

### Library

Submenu:

* All Content
* Videos
* Hutbe
* Podcasts
* Featured

### Billing

Submenu:

* Overview
* Invoices
* Usage
* Cost Breakdown

### Organization

Submenu:

* Profile
* Admins
* Branding
* Modules
* Hierarchy

### Platform Control (owner only)

Submenu:

* Overview
* Organizations & Admins
* Imports
* Cookies
* Khutbah KB Sources
* Raw Costs
* Cost Adjustments
* Dev Logs
* Analytics
* Session Quality

### Settings

Submenu:

* General
* Notifications
* Public Pages
* Defaults

---

## Topbar requirements

Topbar should include:

* organization scope switcher
* search
* notifications
* current plan badge
* current role badge
* profile menu

The topbar must feel product-specific, not generic template-like.

For Owner and Super Admin, the scope switcher is critical:

* All organizations
* Super organization
* Child organizations
* Single organization

---

## Required design improvements

### 1. Show modular navigation states

Include examples of sidebar states for:

* Owner full access
* Super Admin scoped access
* Admin single-org access
* Studio-only organization
* HutbaLive-only organization
* Studio + Podcast organization

This can be shown as separate variants or examples.

---

### 2. Make Dashboard role-aware and module-aware

Create dashboard variants for:

* Owner
* Super Admin
* Admin

#### Owner dashboard

Should include:

* global metrics
* super organization filter
* single organization filter
* costs
* sessions
* usage
* quality
* pending review / publish queue

#### Super Admin dashboard

Should include:

* managed organizations aggregate
* child organization filter
* scoped analytics
* sessions and cost visibility only within allowed scope

#### Admin dashboard

Should include:

* single organization only
* no global governance widgets

Dashboard widgets must be module-aware:

* if organization has only Studio, do not show HutbaLive widgets
* if no Podcast, do not show Podcast widgets
* if HutbaAsistent enabled, show relevant draft/reference widgets

---

### 3. Add owner-only Platform Control screens

Create owner-only screens for:

#### A. Platform Control Overview

* owner-only entry dashboard
* cards linking to organizations, imports, costs, logs, analytics, session quality

#### B. Organizations & Admins

* parent-child organization tree
* assigned admins
* edit organization
* assign modules
* assign permissions
* hierarchy overview

#### C. Imports

* Cookies management
* Khutbah KB Sources
* source list
* add source
* import status
* run import
* sync/error state

#### D. Raw Costs / Cost Adjustments

* raw cost table
* add adjustment
* delete adjustment
* filters by org / time / type

#### E. Dev Logs

* searchable logs
* severity badges
* detail side panel or drawer

#### F. Analytics

* account-level analytics
* super organization analytics
* single organization analytics
* session quality section
* filters by scope

#### G. Session Quality

* quality reports
* flagged sessions
* terminology issues
* correction/suggestion workflow

---

### 4. Add Organization Hierarchy screen

This is separate from simple organization profile/settings.

Show:

* parent organization
* child organizations
* hierarchy tree
* assigned admins
* enabled modules per org
* access summary
* rights management entry point

---

### 5. Complete HutbaAsistent flow

Create these screens:

#### A. HutbaAsistent Dashboard

* Create new draft
* Recent drafts
* Suggested topics
* Recent exports
* reference corpus summary

#### B. New Outline / Draft Builder

* topic input
* audience/context
* language
* reference sources
* AI generate action
* section builder

#### C. Draft Detail / Editor

* generated outline
* editable draft
* source references
* regenerate / edit controls
* export to Word
* export to PDF

#### D. References / Sources view

* imported corpus summary
* source categories
* source quality / freshness
* maybe source reference list

Important:
The imam/admin-facing HutbaAsistent screens should feel distinct from owner-only import/source governance screens.

---

### 6. Refine HutbaLive

This module should feel like a real-time operational workflow, not a generic content list.

Create/refine:

* session list
* active session control
* archive view
* detail view

Use stronger real-time visual language:

* status badges
* live indicators
* session health
* audience / viewer information
* language setup visibility

---

### 7. Refine Podcast Companion

This module should feel different from HutbaLive.

It is about:

* external live media
* transcript companion workflow
* QR/share/publish logic
* public viewer access

Create/refine:

* session list
* detail/control view
* status model
* publish/share actions
* QR access

---

### 8. Refine Studio

Keep Studio strong as a content processing workflow.

Create/refine:

* jobs
* upload
* public video management
* exports
* detailed processing status

---

### 9. Improve Library

Library must feel like a true discovery layer.

Include:

* strong search
* filters by type, speaker, language, tags, category, featured
* source type badges
* summary snippets
* public/private state
* featured content area

It should aggregate content across:

* HutbaLive
* Studio
* Podcast Companion
* possibly HutbaAsistent outputs if appropriate

---

### 10. Refine Billing

Billing must reflect scoped product usage, not just generic SaaS invoices.

Include:

* current plan
* module access summary
* usage limits
* invoice history
* billing visibility by role/scope
* distinction between standard billing and owner-only raw cost controls

---

### 11. Keep Quality as a privileged operational surface

Quality should feel more like an operational review tool than a generic analytics page.

Show:

* quality KPIs
* issue lists
* correction suggestions
* terminology / subtitle / transcript quality breakdown

---

### 12. Improve public surfaces

Keep and polish these public-facing screens:

#### A. Organization Public Page

Show two states:

1. normal organization landing page
2. active live HutbaLive session mode

When a live session is active, the organization page should transform into a live mode showing:

* QR code
* transcript area
* default English transcript
* TV / hall display concept

#### B. Public Videos Listing

* `/videos`
* searchable public video list

#### C. Public Video Detail

* `/videos/:slug`
* player
* transcript / translation tabs
* summary
* language selection
* related content

#### D. Podcast Viewer / Companion

* embedded live video
* transcript-first layout
* translated transcript
* bilingual mode
* language selector
* QR/share/session info

---

### 13. Add one fullscreen subtitle UX concept

Create one conceptual UI screen for:

* video/embed
* subtitle overlay
* custom fullscreen wrapper behavior
* viewer controls
* transcript area

This does not need to be fully polished, but it should communicate how subtitle overlay remains visible in fullscreen-like viewing mode.

---

## Design quality target

This should be:

* more refined than basic wireframes
* still realistic and implementation-friendly
* aligned with a Next.js admin shell and theme foundation
* reusable for engineering handoff
* structurally complete enough for AI implementation

---

## Implementation alignment

Design with the assumption that:

* a Next.js admin theme like WowDash will be used as the shell foundation
* tables, forms, cards, settings layouts, role/admin/invoice style pages can be adapted from a dashboard theme
* but transcript-heavy, viewer-heavy, public-facing, and HutbaAsistent flows must feel custom to MinbarLive

---

## Final output expectation

Create a coherent product design set that clearly communicates:

* role-aware navigation
* scope-aware admin usage
* module-aware sidebar and dashboard
* owner-only control surfaces
* public organization mode
* public content mode
* imam-facing HutbaAsistent workflow
* real multi-level navigation with submenus

This should feel ready for final design review before engineering handoff.

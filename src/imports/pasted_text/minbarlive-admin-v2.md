Create a **Version 2 low-to-mid fidelity web admin design** for **MinbarLive**, improving an existing V1 wireframe.

## Product context

MinbarLive is a multilingual platform for:

* live sermon translation
* podcast companion sessions with live transcript/translation
* recorded video processing
* searchable content library
* quality monitoring
* billing and organization management

This is a **serious web-first SaaS admin product**, not a crypto dashboard, not a generic analytics template, and not a consumer app.

## Design goal

Improve the current V1 wireframe by making it:

* more structured
* more product-specific
* more operationally useful
* more visually mature
* cleaner for desktop admin workflows

Keep the design **professional, calm, and highly readable**.

## Important design direction

Use a **clean modern SaaS admin aesthetic** with:

* left sidebar
* top bar
* clear grouping
* spacious layout
* subtle cards
* tables + filters + detail panels
* minimal noise
* serious B2B look

Do **not** make it flashy.
Do **not** make it look like a crypto/trading dashboard.
Do **not** use startup-style gradients or decorative hero sections.

## Brand direction

Use a style inspired by MinbarLive:

* trust-focused
* calm and elegant
* multilingual / accessibility-first
* suitable for mosques, institutions, and educators

Use:

* green as main brand color
* gold as a reserved accent for important CTAs or premium emphasis
* neutral backgrounds and clean typography

## Required improvements over V1

### 1. Sidebar must be grouped

Do not keep all navigation items flat.
Group sidebar navigation into sections like:

#### Operations

* Dashboard
* Live Sermons
* Podcast Companion
* Studio

#### Content

* Library
* Quality

#### Admin

* Billing
* Organization
* Settings

### 2. Top bar must feel product-specific

Include:

* organization switcher
* search
* notifications
* current plan badge
* current role badge
* profile menu

Make the top bar feel less generic and more like a real operational product.

### 3. Dashboard must feel like a control center

Not just generic stats.
Include:

* Active live sessions
* Active viewers now
* Studio jobs this week
* Podcast sessions
* Monthly processing cost
* Pending publish actions
* Quality issues requiring review
* Recent activity
* Quick actions
* Alerts / reminders

### 4. Make Live Sermons and Podcast Companion feel clearly different

#### Live Sermons should feel like:

* real-time event control
* session management
* language setup
* archive continuity

#### Podcast Companion should feel like:

* external live media session management
* embed-based companion workflow
* QR/share/publish flow
* public companion access

The two sections must not look like clones with different titles.

### 5. Improve Library

Library must feel like:

* a discovery layer
* a knowledge base
* a searchable content center

Include filters for:

* type
* speaker
* language
* tags
* category
* featured

Include:

* content cards or list rows
* summary snippet
* source type badge
* publish state
* tags

### 6. Create a reusable detail-page pattern

Introduce one consistent detail-page layout pattern for:

* Live Sermon detail
* Podcast Companion detail
* Studio detail
* Video / public detail

Use this structure:

* page header
* status badges
* primary actions row
* tabs
* content area
* right-side metadata panel

## Required screens

### 1. Dashboard

Include:

* grouped summary cards
* recent activity table/list
* alerts panel
* quick actions section
* pending publish or review queue

### 2. Live Sermons

Include:

* page header
* Start Sermon button
* tabs: Active / Archive / Templates
* structured table
* clear status badges
* quick actions like View Live, Open Control, Archive

### 3. Podcast Companion

Include:

* New Companion Session button
* source platform badge
* filters: Live / Scheduled / Ended / Public / Private
* list/table/cards with:

  * title
  * source platform
  * source language
  * target languages
  * status
  * viewers
  * QR
  * share/publish
* right-side detail panel concept

### 4. Studio

Include:

* Upload Video
* Import from URL
* processing filters
* richer job table
* detail page concept with:

  * video preview
  * transcript tab
  * translation tab
  * subtitles tab
  * export actions
  * publish settings

### 5. Library

Include:

* strong search bar
* discovery filters
* cards or hybrid list/grid
* featured section
* source type badges
* summaries
* tags

### 6. Quality

Include:

* KPI cards
* quality reports table
* suggestions panel
* improvement guide section

### 7. Billing

Include:

* current plan card
* monthly usage
* invoice history
* download invoice action
* billing email/report settings
* limits / usage clarity

### 8. Organization / Settings

Include:

* organization profile
* branding
* users
* notifications
* defaults
* public page settings
* placeholder for custom domains

### 9. Public Video Detail page

Add one public-facing content screen showing:

* video player area
* transcript / translation tabs
* summary
* language toggle
* related content or metadata
* CTA area for sharing or viewing more content

### 10. Podcast Viewer / Companion screen

Add one public-facing viewer screen showing:

* embedded video
* live transcript
* translated transcript
* language toggle
* bilingual mode option
* QR/share area or session info
* transcript-first reading layout

## UX requirements

* prioritize desktop-first
* make all admin pages feel part of one coherent shell
* strong hierarchy
* modular layout system
* reusable page patterns
* suitable for a future Next.js implementation
* transcript/video-heavy product, not just analytics

## Output style

Create:

* low-to-mid fidelity admin/product UI
* more refined than rough wireframes
* but not yet final polished marketing-quality visuals

Keep it realistic for implementation by an engineering agent.

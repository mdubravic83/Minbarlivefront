Create a **Version 3 / Version 4 web-first admin design refinement** for **MinbarLive**, based on an existing dashboard/product wireframe and using a **clean modern SaaS admin style** compatible with a **Next.js admin template foundation** like WowDash.

## Product context

MinbarLive is a **modular platform** for mosques, Islamic organizations, and imams.

It includes these modules:

* **HutbaLive / KhutbaLive** — live khutbah session module
* **Studio** — recorded video processing
* **Podcast Companion** — live external podcast/video companion with transcript and translation
* **HutbaAsistent / Khutbah Assistant** — AI-assisted khutbah preparation using imported khutbah sources
* **Library** — shared searchable content layer

It also includes **owner-only platform control surfaces** for:

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
* global analytics
* session quality

## Important product truth

This is **not** a flat admin dashboard.
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

Different organizations may have:

* only Studio
* only HutbaLive
* Studio + Podcast
* full bundle
* HutbaAsistent access only if enabled for the organization

### 4. Owner-only privileges

Some screens must be visible only to Owner:

* Quality Dashboard
* Imports
* Raw Costs
* Cost Adjustments
* Dev Logs
* global analytics
* organization/admin governance

## Design goal

Refine the current design into a more complete product-ready admin structure.

The design should feel:

* calm
* clean
* serious
* professional
* operational
* suitable for religious institutions and multilingual education workflows

Do not make it flashy.
Do not make it crypto-like.
Do not make it look like a generic analytics demo.

## Brand direction

Use a MinbarLive-inspired visual system:

* green as main brand tone
* gold as reserved accent for important CTA or premium emphasis
* neutral backgrounds
* clean typography
* spacious layout

## Layout system

Use a **left sidebar + topbar** SaaS admin shell.

### Topbar must include

* organization scope switcher
* search
* notifications
* current plan badge
* current role badge
* profile menu

## Sidebar must be grouped

### Operations

* Dashboard
* HutbaLive
* Podcast Companion
* Studio
* HutbaAsistent

### Content

* Library
* Quality

### Admin

* Billing
* Organization

### Platform Control (owner only)

* Organizations & Admins
* Imports
* Raw Costs / Adjustments
* Dev Logs
* Analytics

### Settings

* Settings

## Important naming rule

Do not call the live khutbah section “Live Sermons”.
Use:

* **HutbaLive** in local/BHS context
* **KhutbaLive** in English-facing context if needed

## Required improvements

### 1. Show modular navigation states

Create examples for:

* full access organization
* Studio-only organization
* HutbaLive-only organization
* Studio + Podcast organization

This can be done as sidebar variations or mini reference states.

### 2. Make Dashboard role-aware and module-aware

Design 3 dashboard variants:

#### Owner Dashboard

* global metrics
* super organization filter
* single organization filter
* costs
* sessions
* usage
* quality
* pending review / publish queue

#### Super Admin Dashboard

* managed organizations aggregate
* child organization filter
* scoped analytics
* session and cost views

#### Admin Dashboard

* single organization only
* no global governance widgets

Also make dashboard widgets module-aware:

* if org has only Studio, do not show HutbaLive widgets
* if org has no Podcast, do not show Podcast widgets

### 3. Add Organization Management / Hierarchy screen

This is very important.
Create a dedicated owner-facing screen with:

* organization tree
* parent / child structure
* assigned admins
* module access per organization
* actions to edit org
* actions to manage admins
* hierarchy overview

### 4. Add HutbaAsistent screens

Create these screens:

#### A. HutbaAsistent Dashboard

* Create new draft
* Recent outlines
* Recent exports
* Suggested topics
* corpus / references summary

#### B. New Outline / Draft Builder

* topic input
* audience/context
* language
* reference sources
* AI generate action
* section builder

#### C. Draft Detail / Editor

* generated outline
* editable draft content
* source references
* export to Word
* export to PDF
* regenerate/edit actions

#### D. Owner-only Khutbah KB / Imports screen

* source list
* source type
* last sync
* add source
* run import
* status / error states

### 5. Add Platform Control screens

Create owner-only screens for:

#### Organizations & Admins

* edit organization
* assign admins
* module rights
* hierarchy

#### Imports

* Cookies
* Khutbah KB Sources
* import setup / refresh

#### Raw Costs / Adjustments

* raw cost list
* add/delete adjustment
* cost detail table

#### Dev Logs

* searchable logs
* severity/status
* detail drawer

#### Analytics

* global analytics
* super organization analytics
* organization analytics
* session quality area

### 6. Improve Library

Library must feel like a real content discovery layer.
Include:

* search
* type filter
* language filter
* speaker filter
* tags
* category
* featured section
* source type badges
* summary snippets
* public/private state

### 7. Improve public surfaces

Create or refine these public-facing screens:

#### A. Organization Public Page

Show two states:

1. normal organization landing
2. active live session mode

When a live HutbaLive session is active, the organization page should transform into a live display mode showing:

* QR code
* transcript area
* default English transcript
* TV / in-mosque display concept

#### B. Public Videos Listing

* `/videos`
* searchable public video content list

#### C. Public Video Detail

* `/videos/:slug`
* player
* transcript / translation tabs
* summary
* language selection
* related content

#### D. Podcast Viewer / Companion

* embedded live video or platform embed
* transcript-first layout
* translated transcript
* bilingual mode
* language selector
* session info and share area

### 8. Add one fullscreen subtitle UX concept

Create a UI concept showing how subtitle overlay should remain visible in fullscreen-like viewing mode for video/embed surfaces.
This can be a conceptual screen showing:

* video/embed
* subtitle overlay
* custom fullscreen wrapper idea
* viewer controls

## Design quality target

This should be:

* more refined than a rough wireframe
* still practical for engineering implementation
* clearly structured for a Next.js frontend rewrite
* aligned with a reusable admin shell and modular product system

## Important implementation alignment

Design with the assumption that:

* a Next.js admin template like WowDash will be used as the frontend foundation
* the final UI should reuse admin shell patterns, forms, tables, cards, settings layouts, and invoice/admin structures from a dashboard theme
* but transcript-heavy, viewer-heavy, and HutbaAsistent screens must feel custom to MinbarLive

## Output

Create a coherent set of wireframes / low-to-mid fidelity product UI screens that clearly communicate:

* modular access
* role-aware experience
* hierarchy-aware navigation
* owner-only platform control
* public organization mode
* public content mode
* imam-facing HutbaAsistent workflow

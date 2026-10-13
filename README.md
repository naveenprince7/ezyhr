# EzyHR — Complete HRMS & Payroll SaaS Platform

> **HR made easy. People made productive.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Static Site](https://img.shields.io/badge/Deploy-Render%20Static%20Site-teal.svg)](https://render.com)
[![Vanilla JS](https://img.shields.io/badge/Framework-Zero%20Dependencies%20(Pure%20Vanilla)-purple.svg)](#)

---

## 1. Project Overview

**EzyHR** is a modern, premium, comprehensive Human Resource Management System (HRMS) and payroll SaaS web platform designed and built entirely from scratch. 

It features an end-to-end multi-page marketing experience, in-depth product modules, educational playbooks, and a **fully functional, interactive HR application demo** (`app-demo.html`) with client-side state management for employee records, leave approvals, attendance tracking, notifications, and analytics.

The website uses a **distinctive tinted visual design system** with lavender, pale blue, mint/teal, pale pink, and peach surfaces, layered gradients, and clean card aesthetics—avoiding plain white backgrounds and generic frameworks.

---

## 2. Core Objectives & Principles

- **Zero Build Dependencies:** Built exclusively using semantic HTML5, modern CSS3, and vanilla ES6+ JavaScript. No React, Next.js, Webpack, or Node server required.
- **Render Ready:** Pre-configured for direct, instant one-click deployment as a Static Site on Render.
- **Deep Feature Completeness:** All 27 pages are fully realized with rich, meaningful, page-specific copy, custom SVG/CSS illustrations, and interactive controls.
- **Interactive HR Dashboard (`app-demo.html`):**
  - Live employee directory with real-time search, department filtering, employee detail inspection modal, and dynamic employee creation modal.
  - Interactive leave management with functional **Approve** and **Decline** buttons that update state in real time.
  - Live attendance overview with weekly charts and stats.
  - Instant payslip preview and payroll run simulation.
  - Interactive recruitment Kanban pipeline and onboarding checklists.
  - Functional notification dropdown with mark-as-read toggles.

---

## 3. Brand Identity & Visual Design System

- **Brand Name:** EzyHR
- **Tagline:** *HR made easy. People made productive.*
- **Typography:** Modern typography using clean system fallbacks and fluid `clamp()` sizing.
- **Tinted Color Palette:**
  - Brand Primary: `#5146E5` (Indigo/Violet)
  - Brand Secondary: `#7667F5` (Lavender Violet)
  - Brand Accent: `#39B8A5` / `#198B70` (Mint/Teal)
  - Background Main: `#F1F0FF` (Soft Lavender Tint)
  - Card & Surface: Soft tinted surfaces (`#FFFFFF` used selectively with colored borders `#DEDCF5`)
  - Module Accents:
    - *Employee Management:* Lavender (`#EDE9FE`, `#5146E5`)
    - *Payroll:* Pale Blue (`#E4F1FF`, `#2563EB`)
    - *Attendance:* Mint/Teal (`#E2F7F1`, `#198B70`)
    - *Leave Management:* Pale Pink/Rose (`#FBEAF3`, `#C0448F`)
    - *Recruitment:* Pale Peach (`#FFF0E4`, `#A05A28`)
    - *Onboarding:* Peach/Orange (`#FFF0E4`, `#E65100`)
    - *Performance:* Violet (`#E8E5FF`, `#5146E5`)
    - *Self-Service:* Fuchsia (`#FBEAF3`, `#9333EA`)
    - *Analytics:* Periwinkle/Blue (`#E4F1FF`, `#0284C7`)
    - *Compliance:* Teal (`#E2F7F1`, `#0D9488`)

---

## 4. Project Structure

```text
ezyhr/
├── index.html                   # Marketing Homepage (Hero mockup, tabs, testimonials)
├── about.html                   # About EzyHR (Story, mission, values, milestones)
├── features.html                # Complete Platform Overview (Interactive category filters)
├── pricing.html                 # Pricing & Plan Comparison (Monthly/Annual billing toggle)
├── contact.html                 # Contact Us (Interactive form validation & office cards)
├── book-demo.html               # Book a Demo (Multi-field validation & slot picker)
├── employee-management.html     # Product: Core Employee Directory & Profiles
├── payroll.html                 # Product: Automated Payroll Engine & Payslips
├── attendance.html              # Product: Shift Tracking & Biometric Clock-ins
├── leave-management.html        # Product: Leave Policies & Approval Routing
├── recruitment.html             # Product: ATS & Kanban Candidate Pipeline
├── onboarding.html              # Product: Digital Onboarding & Checklists
├── performance.html             # Product: Goals, 360 Reviews & OKR Tracking
├── employee-self-service.html   # Product: Mobile ESS Portal & Expense Claims
├── hr-analytics.html            # Product: Real-Time Workforce Analytics & Charts
├── compliance.html              # Product: Statutory Registers & Filing Calendars
├── resources.html               # Resource Center (Search, filter, salary calculator)
├── blog.html                    # Blog (Article cards + interactive modal reader)
├── payroll-guide.html           # 6-Step Educational Payroll Processing Guide
├── faq.html                     # Categorized FAQs with search & accordions
├── privacy-policy.html          # Privacy Policy & Data Processing Terms
├── terms.html                   # Terms of Service & SaaS Agreement
├── cookie-policy.html           # Cookie Policy with live preference toggles
├── support.html                 # Support Portal with ticket lookup simulator
├── account-deletion.html        # Account Deletion Request with safety checks
├── 404.html                     # Custom 404 Page with quick search
├── app-demo.html                # Interactive HR Application Demo (The Core App)
├── assets/
│   ├── css/
│   │   ├── styles.css           # Core design system tokens, typography, utilities
│   │   ├── responsive.css       # Mobile & tablet media queries (320px to 1440px)
│   │   └── dashboard.css        # Full CSS for the app-demo.html application
│   └── js/
│       ├── components.js        # Shared navbar, footer, toast, modals, tabs, accordions
│       └── dashboard.js         # Interactive dashboard state, employee CRUD, leave approvals
├── README.md                    # Comprehensive documentation (this file)
└── LICENSE                      # MIT Open Source License
```

---

## 5. Complete Feature Breakdown

### A. Marketing & Growth Pages
1. **Homepage (`index.html`)**: Rich hero with layered CSS dashboard mockup, floating stat badges, interactive tabbed feature switcher (People, Payroll, Attendance, Analytics), employee lifecycle roadmap, pricing preview, testimonials, and FAQ.
2. **About (`about.html`)**: Company vision, core principles, milestones, and challenges EzyHR solves.
3. **Features (`features.html`)**: Categorized view of all 10 platform modules with category navigation buttons, comparative capability matrix, and role-based benefits.
4. **Pricing (`pricing.html`)**: Starter, Growth, and Enterprise tiers with interactive **Monthly/Annual billing toggle** (20% discount applied dynamically) and feature comparison checklist.
5. **Contact (`contact.html`)**: Interactive contact form with real-time field validation, error states, and illustrative office locations.
6. **Book a Demo (`book-demo.html`)**: Multi-field booking request form with live time slot selection and animated confirmation card.

### B. Product Module Pages (10 Dedicated Modules)
Every product page includes:
- Category-tinted hero section with breadcrumb.
- Interactive interface illustration / mockup.
- 6 detailed capability cards with icons.
- Workflow visualization steps.
- Product-specific FAQs with working accordions.
- Direct links to connected modules and interactive demo CTA.

### C. Resources & Guides
1. **Resource Center (`resources.html`)**: Searchable and filterable guide cards plus an **interactive Gross-to-Net Take-Home Salary Calculator** with CTC preset buttons.
2. **Blog (`blog.html`)**: Curated articles on remote work, day-one onboarding, and spreadsheet payroll replacement, with an **interactive modal article reader**.
3. **Payroll Guide (`payroll-guide.html`)**: Comprehensive 6-step playbook explaining salary structures, attendance locking, statutory deductions (PF/ESI/PT/TDS), bank payout files, and payslip generation.
4. **FAQ (`faq.html`)**: Grouped accordion questions with a **live search filter** that highlights matching queries in real time.

### D. Legal & Support
1. **Privacy Policy (`privacy-policy.html`)**: Full GDPR/compliance-aligned data privacy terms.
2. **Terms of Service (`terms.html`)**: SaaS subscription terms, service limitations, and intellectual property.
3. **Cookie Policy (`cookie-policy.html`)**: Detailed cookie explanations with an **interactive cookie preference toggle simulator** that saves settings with toast feedback.
4. **Support Portal (`support.html`)**: Support ticket creation form with live ticket ID generator and an **interactive Ticket Status Lookup simulator** (`#TICK-1049`).
5. **Account Deletion (`account-deletion.html`)**: Safe deletion workflow with data export options and safety confirmation input (`DELETE-MY-ORGANIZATION`).
6. **404 Not Found (`404.html`)**: Branded not-found error page with search bar and quick links.

### E. The Interactive HR Dashboard Demo (`app-demo.html`)
The centerpiece of the technical demonstration:
- **Responsive Shell:** Sidebar navigation with active state, search bar, notification counter, user profile menu, and mobile hamburger toggle.
- **Multi-View Navigation:**
  - *Overview:* Key metric stat cards (Total employees, present, on leave, payroll MTD), attendance bar charts, pending leave requests, recent activity timeline.
  - *Employee Directory:* Complete employee table with live search by name/ID, department filter dropdown, **Add Employee Modal** with form validation that appends new records to the session table, and an **Employee Profile Modal**.
  - *Leave Management:* Filterable leave request table with working **Approve** and **Reject** buttons that immediately update badge status and overview counts.
  - *Payroll Hub:* Salary breakdown summary, payroll processing progress bar, and downloadable/inspectable payslip modal.
  - *Attendance Pulse:* Daily attendance table with clock-in times and status badges.
  - *Recruitment Kanban:* Candidate cards grouped across Screening, Interview, and Offered stages.
  - *Onboarding Checklists:* Step-by-step progress checklists for new hires.
  - *Performance Reviews:* OKR goal progress bars and peer praise cards.
- **Toast Notifications:** Client-side toast system providing instant feedback on user actions.

---

## 6. How to Deploy to Render (Static Site)

EzyHR is configured for **zero-configuration deployment** to Render as a Static Site.

### Step-by-Step Instructions:
1. **Push to GitHub / GitLab:**
   Push the `ezyhr` folder contents to your Git repository.
   
2. **Log into Render:**
   Navigate to [dashboard.render.com](https://dashboard.render.com).

3. **Create a New Static Site:**
   - Click **New +** > **Static Site**.
   - Connect your GitHub repository.

4. **Configure Settings:**
   - **Name:** `ezyhr-saas` (or any preferred name)
   - **Branch:** `main` (or `master`)
   - **Root Directory:** leave empty (or specify subdirectory if applicable)
   - **Build Command:** leave **EMPTY** (no build step required!)
   - **Publish Directory:** `.` (or `./` — the directory containing `index.html`)

5. **Deploy:**
   - Click **Create Static Site**.
   - Render will deploy the site in under 10 seconds.
   - Your site will be live at `https://ezyhr-saas.onrender.com`.

---

## 7. Running Locally

Because EzyHR uses zero build tools, you can run it locally with any simple static file server:

### Option A: Using Python (Built-in)
```bash
cd /path/to/ezyhr
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option B: Using Node / npx
```bash
cd /path/to/ezyhr
npx serve .
```

### Option C: Direct File Opening
You can open `index.html` directly in any modern browser (Chrome, Safari, Firefox, Edge). All relative links, styles, and scripts will load seamlessly.

---

## 8. Testing & Verification Checklist

- [x] **All 27 HTML pages exist** and contain complete, page-specific content.
- [x] **Tinted visual styling** is consistently maintained across all pages (lavender, blue, mint, pink, peach).
- [x] **Navigation & Shared Components:** Navbar and footer inject automatically via `assets/js/components.js`.
- [x] **Mobile Responsiveness:** Tested and responsive across breakpoints (320px mobile to 1440px desktop).
- [x] **Forms Validation:** Contact form, Book Demo form, and Support Ticket form validate required fields and display loading feedback.
- [x] **Pricing Billing Toggle:** Switching between Monthly and Annual updates pricing figures dynamically with 20% savings.
- [x] **Salary Calculator:** CTC slider and presets dynamically update monthly take-home, PF, and tax estimations.
- [x] **Interactive Dashboard (`app-demo.html`):**
  - Search filter updates employee table rows.
  - Adding an employee adds a new row to the table.
  - Approving or rejecting a leave request updates its status.
  - Notifications dropdown can mark alerts as read.
- [x] **Custom 404 Page:** Accessible at `404.html` with interactive search redirection.

---

## 9. Known Limitations

- **Frontend-Only Demonstration:** There is no server-side database or live payment gateway integration. Form submissions, employee additions, and leave approvals persist in memory for the duration of the browser session.
- **Sample Financial Data:** All tax formulas, PF deduction percentages, and salary figures are illustrative educational approximations and do not constitute certified accounting advice.

---

## 10. License

This project is licensed under the [MIT License](LICENSE).

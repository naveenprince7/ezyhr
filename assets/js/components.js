/* ============================================================
   EzyHR — Shared Components (Navbar, Footer, Toast, Modal)
   ============================================================ */

/* ============================================================
   NAVIGATION COMPONENT
   ============================================================ */
const NAV_HTML = `
<div class="announcement-bar" id="announcementBar">
  <div class="container">
    <span>🎉 <strong>New:</strong> EzyHR Performance Reviews 2.0 is here — <a href="performance.html">Explore what's new →</a></span>
  </div>
  <button class="announcement-close" id="closeAnnouncement" aria-label="Close announcement">✕</button>
</div>

<nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo" aria-label="EzyHR Home">
      <div class="nav-logo-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2L3 6V14L10 18L17 14V6L10 2Z" stroke="white" stroke-width="1.5" fill="none"/>
          <circle cx="10" cy="10" r="3" fill="white"/>
        </svg>
      </div>
      <span class="nav-logo-text">Ezy<span>HR</span></span>
    </a>

    <ul class="nav-links" role="list">
      <!-- Product Dropdown -->
      <li class="nav-dropdown">
        <button class="nav-link" id="productDropTrigger" aria-haspopup="true" aria-expanded="false" aria-controls="productDrop">
          Product
          <svg class="chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="dropdown-menu" id="productDrop" role="menu">
          <a href="employee-management.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#EDE9FE;color:#5146E5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <div>
              <div class="dropdown-item-title">Employee Management</div>
              <div class="dropdown-item-desc">Profiles, directories, departments</div>
            </div>
          </a>
          <a href="payroll.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#E4F1FF;color:#2563EB">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
            </div>
            <div>
              <div class="dropdown-item-title">Payroll</div>
              <div class="dropdown-item-desc">Salaries, payslips, deductions</div>
            </div>
          </a>
          <a href="attendance.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#E2F7F1;color:#198B70">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            </div>
            <div>
              <div class="dropdown-item-title">Attendance</div>
              <div class="dropdown-item-desc">Check-ins, shifts, time tracking</div>
            </div>
          </a>
          <a href="leave-management.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#FBEAF3;color:#C0448F">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </div>
            <div>
              <div class="dropdown-item-title">Leave Management</div>
              <div class="dropdown-item-desc">Requests, approvals, balances</div>
            </div>
          </a>
          <a href="recruitment.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#FFF0E4;color:#A05A28">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            </div>
            <div>
              <div class="dropdown-item-title">Recruitment</div>
              <div class="dropdown-item-desc">Job postings, ATS, interviews</div>
            </div>
          </a>
          <a href="performance.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#E8E5FF;color:#5146E5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div>
              <div class="dropdown-item-title">Performance</div>
              <div class="dropdown-item-desc">Goals, reviews, feedback</div>
            </div>
          </a>
          <a href="hr-analytics.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#E4F1FF;color:#2563EB">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            </div>
            <div>
              <div class="dropdown-item-title">HR Analytics</div>
              <div class="dropdown-item-desc">Workforce insights and reports</div>
            </div>
          </a>
          <a href="compliance.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#E2F7F1;color:#198B70">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <div class="dropdown-item-title">Compliance</div>
              <div class="dropdown-item-desc">Document workflows, reminders</div>
            </div>
          </a>
          <a href="onboarding.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#FFF0E4;color:#A05A28">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
            </div>
            <div>
              <div class="dropdown-item-title">Onboarding</div>
              <div class="dropdown-item-desc">Checklists, documents, tasks</div>
            </div>
          </a>
          <a href="employee-self-service.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#FBEAF3;color:#C0448F">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <div class="dropdown-item-title">Self-Service</div>
              <div class="dropdown-item-desc">Employee portal and requests</div>
            </div>
          </a>
        </div>
      </li>

      <li><a href="features.html" class="nav-link">Features</a></li>

      <!-- Resources Dropdown -->
      <li class="nav-dropdown">
        <button class="nav-link" id="resourceDropTrigger" aria-haspopup="true" aria-expanded="false" aria-controls="resourceDrop">
          Resources
          <svg class="chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <div class="dropdown-menu" id="resourceDrop" role="menu" style="min-width:240px">
          <a href="resources.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#E8E5FF;color:#5146E5">📚</div>
            <div><div class="dropdown-item-title">Resource Center</div><div class="dropdown-item-desc">Guides, templates, and more</div></div>
          </a>
          <a href="blog.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#E4F1FF;color:#2563EB">✍️</div>
            <div><div class="dropdown-item-title">Blog</div><div class="dropdown-item-desc">HR insights and trends</div></div>
          </a>
          <a href="payroll-guide.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#E2F7F1;color:#198B70">💰</div>
            <div><div class="dropdown-item-title">Payroll Guide</div><div class="dropdown-item-desc">Step-by-step payroll walkthrough</div></div>
          </a>
          <a href="faq.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#FBEAF3;color:#C0448F">❓</div>
            <div><div class="dropdown-item-title">FAQ</div><div class="dropdown-item-desc">Common questions answered</div></div>
          </a>
        </div>
      </li>

      <li><a href="pricing.html" class="nav-link">Pricing</a></li>
      <li><a href="about.html" class="nav-link">About</a></li>
      <li><a href="contact.html" class="nav-link">Contact</a></li>
    </ul>

    <div class="nav-actions">
      <a href="app-demo.html" class="nav-signin">Dashboard Demo</a>
      <a href="book-demo.html" class="btn btn-primary btn-sm">Book a Demo</a>
      <button class="nav-hamburger" id="navHamburger" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobileMenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- Mobile Menu -->
<div class="mobile-overlay" id="mobileOverlay" role="presentation"></div>
<div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Mobile navigation" aria-modal="true">
  <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close mobile menu">✕</button>

  <div class="mobile-nav-section">
    <div class="mobile-nav-section-title">Product</div>
    <a href="employee-management.html" class="mobile-nav-link">Employee Management</a>
    <a href="payroll.html" class="mobile-nav-link">Payroll</a>
    <a href="attendance.html" class="mobile-nav-link">Attendance</a>
    <a href="leave-management.html" class="mobile-nav-link">Leave Management</a>
    <a href="recruitment.html" class="mobile-nav-link">Recruitment</a>
    <a href="onboarding.html" class="mobile-nav-link">Onboarding</a>
    <a href="performance.html" class="mobile-nav-link">Performance</a>
    <a href="employee-self-service.html" class="mobile-nav-link">Self-Service</a>
    <a href="hr-analytics.html" class="mobile-nav-link">HR Analytics</a>
    <a href="compliance.html" class="mobile-nav-link">Compliance</a>
  </div>

  <div class="mobile-nav-section">
    <div class="mobile-nav-section-title">Company</div>
    <a href="features.html" class="mobile-nav-link">Features</a>
    <a href="pricing.html" class="mobile-nav-link">Pricing</a>
    <a href="about.html" class="mobile-nav-link">About</a>
    <a href="contact.html" class="mobile-nav-link">Contact</a>
  </div>

  <div class="mobile-nav-section">
    <div class="mobile-nav-section-title">Resources</div>
    <a href="resources.html" class="mobile-nav-link">Resource Center</a>
    <a href="blog.html" class="mobile-nav-link">Blog</a>
    <a href="faq.html" class="mobile-nav-link">FAQ</a>
    <a href="support.html" class="mobile-nav-link">Support</a>
  </div>

  <div style="margin-top:24px;display:flex;flex-direction:column;gap:12px">
    <a href="app-demo.html" class="btn btn-ghost" style="justify-content:center">Dashboard Demo</a>
    <a href="book-demo.html" class="btn btn-primary" style="justify-content:center">Book a Demo</a>
  </div>
</div>
`;

/* ============================================================
   FOOTER COMPONENT
   ============================================================ */
const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="footer-logo" aria-label="EzyHR Home">
          <div class="nav-logo-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L3 6V14L10 18L17 14V6L10 2Z" stroke="white" stroke-width="1.5" fill="none"/>
              <circle cx="10" cy="10" r="3" fill="white"/>
            </svg>
          </div>
          <span class="footer-logo-text">Ezy<span>HR</span></span>
        </a>
        <p>A modern HR platform designed to simplify people operations, payroll, and workforce productivity for growing teams.</p>
        <div class="footer-social">
          <a href="#" class="footer-social-link" aria-label="Twitter/X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-2.7A10.28 10.28 0 0012 4a10.28 10.28 0 00-3.82.99 4.83 4.83 0 01-3.77 2.7A2 2 0 002.5 8.63v6.74a2 2 0 001.91 1.94 4.83 4.83 0 013.77 2.7A10.28 10.28 0 0012 21a10.28 10.28 0 003.82-.99 4.83 4.83 0 013.77-2.7 2 2 0 001.91-1.94V8.63a2 2 0 00-1.91-1.94zM10 14.5v-5l4 2.5-4 2.5z"/></svg>
          </a>
        </div>
      </div>

      <div>
        <div class="footer-col-title">Product</div>
        <div class="footer-links">
          <a href="employee-management.html" class="footer-link">Employee Management</a>
          <a href="payroll.html" class="footer-link">Payroll</a>
          <a href="attendance.html" class="footer-link">Attendance</a>
          <a href="leave-management.html" class="footer-link">Leave Management</a>
          <a href="recruitment.html" class="footer-link">Recruitment</a>
          <a href="onboarding.html" class="footer-link">Onboarding</a>
          <a href="performance.html" class="footer-link">Performance</a>
          <a href="hr-analytics.html" class="footer-link">HR Analytics</a>
          <a href="compliance.html" class="footer-link">Compliance</a>
          <a href="employee-self-service.html" class="footer-link">Self-Service</a>
        </div>
      </div>

      <div>
        <div class="footer-col-title">Company</div>
        <div class="footer-links">
          <a href="about.html" class="footer-link">About EzyHR</a>
          <a href="features.html" class="footer-link">Features</a>
          <a href="pricing.html" class="footer-link">Pricing</a>
          <a href="contact.html" class="footer-link">Contact</a>
          <a href="book-demo.html" class="footer-link">Book a Demo</a>
          <a href="app-demo.html" class="footer-link">Dashboard Demo</a>
        </div>
      </div>

      <div>
        <div class="footer-col-title">Resources</div>
        <div class="footer-links">
          <a href="resources.html" class="footer-link">Resource Center</a>
          <a href="blog.html" class="footer-link">Blog</a>
          <a href="payroll-guide.html" class="footer-link">Payroll Guide</a>
          <a href="faq.html" class="footer-link">FAQ</a>
          <a href="support.html" class="footer-link">Support</a>
          <a href="account-deletion.html" class="footer-link">Account Deletion</a>
        </div>
      </div>

      <div>
        <div class="footer-col-title">Legal</div>
        <div class="footer-links">
          <a href="privacy-policy.html" class="footer-link">Privacy Policy</a>
          <a href="terms.html" class="footer-link">Terms of Service</a>
          <a href="cookie-policy.html" class="footer-link">Cookie Policy</a>
        </div>

        <div class="footer-col-title" style="margin-top:24px">Contact <small style="font-style:italic;font-size:0.7em">(Illustrative)</small></div>
        <div class="footer-links">
          <span class="footer-link" style="cursor:default">📧 hello@ezyhr.example</span>
          <span class="footer-link" style="cursor:default">📞 +1 (555) 000-1234</span>
          <span class="footer-link" style="cursor:default">🏢 123 HR Avenue, Tech District</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="footer-copyright">© 2024 EzyHR. All rights reserved. Demo project — illustrative content only.</p>
      <div class="footer-legal">
        <a href="privacy-policy.html">Privacy</a>
        <a href="terms.html">Terms</a>
        <a href="cookie-policy.html">Cookies</a>
        <a href="sitemap.html">Sitemap</a>
      </div>
      <button class="back-to-top" id="backToTop" aria-label="Back to top">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 15l-6-6-6 6"/></svg>
        Top
      </button>
    </div>
  </div>
</footer>

<!-- Toast Container -->
<div class="toast-container" id="toastContainer" aria-live="polite" aria-atomic="true"></div>
`;

/* ============================================================
   INJECT COMPONENTS
   ============================================================ */
function injectComponents() {
  // Inject nav before first element
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = NAV_HTML;
  } else {
    const firstChild = document.body.firstElementChild;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = NAV_HTML;
    document.body.insertBefore(wrapper, firstChild);
  }

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FOOTER_HTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  }

  // Init all components
  initNav();
  initFooter();
}

/* ============================================================
   NAVIGATION LOGIC
   ============================================================ */
function initNav() {
  // Announcement Bar
  const annBar = document.getElementById('announcementBar');
  const closeAnn = document.getElementById('closeAnnouncement');

  if (annBar && sessionStorage.getItem('annClosed')) {
    annBar.style.display = 'none';
  }

  if (closeAnn) {
    closeAnn.addEventListener('click', () => {
      annBar.style.display = 'none';
      sessionStorage.setItem('annClosed', '1');
    });
  }

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // Active nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Dropdown menus
  setupDropdown('productDropTrigger', 'productDrop');
  setupDropdown('resourceDropTrigger', 'resourceDrop');

  // Mobile menu
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileClose = document.getElementById('mobileMenuClose');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileOverlay.classList.add('show');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    mobileClose.focus();
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileOverlay.classList.remove('show');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  if (hamburger) hamburger.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeAllDropdowns();
    }
  });
}

function setupDropdown(triggerId, menuId) {
  const trigger = document.getElementById(triggerId);
  const menu = document.getElementById(menuId);
  if (!trigger || !menu) return;

  let isOpen = false;

  function openDrop() {
    isOpen = true;
    menu.classList.add('show');
    trigger.setAttribute('aria-expanded', 'true');
  }

  function closeDrop() {
    isOpen = false;
    menu.classList.remove('show');
    trigger.setAttribute('aria-expanded', 'false');
  }

  trigger.addEventListener('click', e => {
    e.stopPropagation();
    if (isOpen) closeDrop(); else { closeAllDropdowns(); openDrop(); }
  });

  trigger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isOpen) closeDrop(); else { closeAllDropdowns(); openDrop(); }
    }
    if (e.key === 'ArrowDown' && isOpen) {
      const firstItem = menu.querySelector('.dropdown-item');
      if (firstItem) firstItem.focus();
    }
  });

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!trigger.contains(e.target) && !menu.contains(e.target)) {
      closeDrop();
    }
  });

  // Keyboard nav inside dropdown
  menu.addEventListener('keydown', e => {
    const items = [...menu.querySelectorAll('.dropdown-item')];
    const current = document.activeElement;
    const idx = items.indexOf(current);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[Math.min(idx + 1, items.length - 1)]?.focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); if (idx <= 0) { trigger.focus(); closeDrop(); } else items[idx - 1]?.focus(); }
    if (e.key === 'Escape') { closeDrop(); trigger.focus(); }
    if (e.key === 'Tab' && idx === items.length - 1) closeDrop();
  });
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
  document.querySelectorAll('[aria-expanded="true"]').forEach(b => b.setAttribute('aria-expanded', 'false'));
}

/* ============================================================
   FOOTER LOGIC
   ============================================================ */
function initFooter() {
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
function showToast(title, message = '', type = 'info', duration = 4000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = {
    success: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#198B70" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    warning: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#B97817" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    error: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#D94B62" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info: `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#5146E5" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `
    ${icons[type] || icons.info}
    <div class="toast-body">
      ${title ? `<div class="toast-title">${title}</div>` : ''}
      ${message ? `<div class="toast-message">${message}</div>` : ''}
    </div>
    <button onclick="this.parentElement.remove()" style="background:none;border:none;cursor:pointer;color:#8989A5;font-size:1rem;padding:0 0 0 8px;align-self:flex-start" aria-label="Dismiss">✕</button>
  `;

  container.appendChild(toast);

  if (duration > 0) {
    setTimeout(() => toast.remove(), duration);
  }
}

/* ============================================================
   MODAL HELPERS
   ============================================================ */
function openModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  const firstFocusable = overlay.querySelector('button, input, select, textarea, [tabindex="0"]');
  firstFocusable?.focus();
}

function closeModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function setupModal(modalId) {
  const overlay = document.getElementById(modalId);
  if (!overlay) return;

  // Close on overlay click
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal(modalId);
  });

  // Close buttons
  overlay.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(modalId));
  });
}

/* ============================================================
   ACCORDION
   ============================================================ */
function initAccordions(selector = '.accordion-item') {
  document.querySelectorAll(selector).forEach(item => {
    const header = item.querySelector('.accordion-header');
    const body = item.querySelector('.accordion-body');
    if (!header || !body) return;

    header.setAttribute('aria-expanded', 'false');
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');

    function toggle() {
      const isOpen = item.classList.contains('open');
      // Close all siblings
      item.closest('.accordion-list, .accordion-wrap, section')
        ?.querySelectorAll('.accordion-item.open')
        .forEach(sibling => {
          if (sibling !== item) {
            sibling.classList.remove('open');
            sibling.querySelector('.accordion-header')?.setAttribute('aria-expanded', 'false');
            const sibBody = sibling.querySelector('.accordion-body');
            if (sibBody) sibBody.style.maxHeight = null;
          }
        });

      if (isOpen) {
        item.classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    }

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
}

/* ============================================================
   TABS
   ============================================================ */
function initTabs(tabsContainerId) {
  const container = document.getElementById(tabsContainerId);
  if (!container) return;

  const buttons = container.querySelectorAll('.tab-btn');
  const panels = container.querySelectorAll('.tab-panel');

  buttons.forEach((btn, idx) => {
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', idx === 0 ? 'true' : 'false');
    btn.setAttribute('tabindex', idx === 0 ? '0' : '-1');

    btn.addEventListener('click', () => {
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); b.setAttribute('tabindex', '-1'); });
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      btn.setAttribute('tabindex', '0');
      const target = btn.dataset.tab;
      const panel = container.querySelector(`[data-tab-panel="${target}"]`);
      if (panel) panel.classList.add('active');
    });

    btn.addEventListener('keydown', e => {
      let newIdx = idx;
      if (e.key === 'ArrowRight') newIdx = (idx + 1) % buttons.length;
      if (e.key === 'ArrowLeft') newIdx = (idx - 1 + buttons.length) % buttons.length;
      if (newIdx !== idx) { e.preventDefault(); buttons[newIdx].click(); buttons[newIdx].focus(); }
    });
  });
}

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================================================
   COUNTER ANIMATION
   ============================================================ */
function animateCounter(el, target, suffix = '', duration = 1800) {
  const start = performance.now();
  const isDecimal = String(target).includes('.');
  const numTarget = parseFloat(target);

  function update(time) {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = numTarget * eased;
    el.textContent = (isDecimal ? value.toFixed(1) : Math.floor(value).toLocaleString()) + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = (isDecimal ? numTarget.toFixed(1) : numTarget.toLocaleString()) + suffix;
  }
  requestAnimationFrame(update);
}

function initCounters() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, el.dataset.target, el.dataset.suffix || '');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => observer.observe(el));
}

/* ============================================================
   STICKY NAV OFFSET FOR ANCHOR LINKS
   ============================================================ */
function initAnchorOffset() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   EXPORT / AUTO-INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  injectComponents();
  initReveal();
  initCounters();
  initAnchorOffset();
});

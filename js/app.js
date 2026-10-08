/**
 * HAIRÉA - Main Application Engine
 * Handles Navigation, Cart Drawer, Wishlist, Themes, Currency, Modals, and Shared Components
 */

const CURRENCIES = {
  USD: { symbol: "$", rate: 1.0 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.79 },
  CAD: { symbol: "CA$", rate: 1.35 }
};

const App = {
  currency: Storage.getCurrency(),
  theme: localStorage.getItem("hairea_theme") || "light",
  dir: localStorage.getItem("hairea_dir") || "ltr",

  init() {
    this.applyTheme(this.theme);
    this.applyDirection(this.dir);
    this.renderHeader();
    this.renderFooter();
    this.renderCartDrawer();
    this.renderSearchModal();
    this.renderQuickViewModal();
    this.renderAuthModal();
    this.initEventListeners();
    this.updateBadges();
    this.initComparisonSliders();
  },

  formatPrice(amountInUSD) {
    const cur = CURRENCIES[this.currency] || CURRENCIES.USD;
    const converted = (amountInUSD * cur.rate).toFixed(2);
    return `${cur.symbol}${converted}`;
  },

  setCurrency(code) {
    if (CURRENCIES[code]) {
      this.currency = code;
      Storage.setCurrency(code);
      window.location.reload();
    }
  },

  applyTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("hairea_theme", theme);
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) {
      themeBtn.innerHTML = theme === "dark" 
        ? `<i data-lucide="sun" class="w-5 h-5"></i>` 
        : `<i data-lucide="moon" class="w-5 h-5"></i>`;
      if (window.lucide) lucide.createIcons();
    }
  },

  toggleTheme() {
    const newTheme = this.theme === "dark" ? "light" : "dark";
    this.applyTheme(newTheme);
    this.toast(`Switched to ${newTheme.toUpperCase()} theme`);
  },

  applyDirection(dir) {
    this.dir = dir;
    document.documentElement.setAttribute("dir", dir);
    localStorage.setItem("hairea_dir", dir);
  },

  toggleDirection() {
    const newDir = this.dir === "rtl" ? "ltr" : "rtl";
    this.applyDirection(newDir);
    this.toast(`Layout set to ${newDir.toUpperCase()}`);
  },

  toast(message, type = "info") {
    let container = document.getElementById("haireaToastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "haireaToastContainer";
      container.className = "toast-container-custom";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast-hairea";
    toast.innerHTML = `
      <i data-lucide="sparkles" style="color: var(--accent-champagne); width: 18px; height: 18px;"></i>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  // Header Component Rendering
  renderHeader() {
    const headerContainer = document.getElementById("header-placeholder");
    if (!headerContainer) return;

    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    headerContainer.innerHTML = `
      <div class="hairea-topbar">
        <div class="container-fluid px-lg-5 d-flex justify-content-between align-items-center">
          <div class="d-none d-md-flex align-items-center gap-3">
            <span>✨ Complimentary Bespoke Sample with every ritual</span>
            <span class="opacity-50">|</span>
            <span>🌿 100% Bio-Identical Ingredients & Cruelty-Free</span>
          </div>
          <div class="d-flex align-items-center gap-3 ms-auto">
            <!-- Currency Switcher -->
            <div class="dropdown">
              <button class="btn btn-sm text-light dropdown-toggle p-0 border-0" type="button" data-bs-toggle="dropdown">
                ${this.currency} (${CURRENCIES[this.currency]?.symbol})
              </button>
              <ul class="dropdown-menu dropdown-menu-end glass-card p-2">
                <li><a class="dropdown-item py-1" href="#" onclick="App.setCurrency('USD')">USD ($)</a></li>
                <li><a class="dropdown-item py-1" href="#" onclick="App.setCurrency('EUR')">EUR (€)</a></li>
                <li><a class="dropdown-item py-1" href="#" onclick="App.setCurrency('GBP')">GBP (£)</a></li>
                <li><a class="dropdown-item py-1" href="#" onclick="App.setCurrency('CAD')">CAD (CA$)</a></li>
              </ul>
            </div>
            <span class="opacity-50">|</span>
            <!-- RTL Toggle -->
            <button class="btn btn-sm text-light p-0 border-0" onclick="App.toggleDirection()" title="Toggle RTL/LTR">
              <i data-lucide="languages" style="width: 15px; height: 15px;"></i>
            </button>
            <span class="opacity-50">|</span>
            <!-- Theme Toggle -->
            <button id="themeToggleBtn" class="btn btn-sm text-light p-0 border-0" onclick="App.toggleTheme()" title="Toggle Dark/Light">
              <i data-lucide="${this.theme === 'dark' ? 'sun' : 'moon'}" style="width: 15px; height: 15px;"></i>
            </button>
          </div>
        </div>
      </div>

      <header class="hairea-header">
        <div class="container-fluid px-3 px-md-4 py-2 d-flex align-items-center justify-content-between">
          <!-- LEFT: Brand Logo (Always on left, always clickable to Home) -->
          <a href="index.html" class="brand-logo text-decoration-none" title="HAIRÉA Home">
            HAIRÉA
            <span>Cosmetics Atelier</span>
          </a>

          <!-- DESKTOP ONLY: Navigation Links (Strictly hidden on <= 1024px) -->
          <nav class="hairea-desktop-nav align-items-center gap-1 mx-auto">
            <a href="index.html" class="nav-link-editorial ${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">Home</a>
            <a href="shop.html" class="nav-link-editorial ${currentPath === 'shop.html' ? 'active' : ''}">Shop All</a>
            <a href="quiz.html" class="nav-link-editorial text-primary fw-bold ${currentPath === 'quiz.html' ? 'active' : ''}">
              <span class="badge bg-warning text-dark me-1" style="font-size:0.58rem; letter-spacing:0.04em;">AI</span> Diagnostic Quiz
            </a>
            <a href="routines.html" class="nav-link-editorial ${currentPath === 'routines.html' ? 'active' : ''}">Routines</a>
            <a href="transformations.html" class="nav-link-editorial ${currentPath === 'transformations.html' ? 'active' : ''}">Transformations</a>
            <a href="reviews.html" class="nav-link-editorial ${currentPath === 'reviews.html' ? 'active' : ''}">Reviews</a>
            <a href="subscriptions.html" class="nav-link-editorial ${currentPath === 'subscriptions.html' ? 'active' : ''}">Subscriptions</a>
            
            <!-- Atelier Editorial Dropdown -->
            <div class="dropdown">
              <a href="#" class="nav-link-editorial dropdown-toggle text-decoration-none" role="button" data-bs-toggle="dropdown">
                Atelier ▾
              </a>
              <ul class="dropdown-menu dropdown-menu-end glass-card p-2 shadow-luxe border">
                <li><a class="dropdown-item py-2 small ${currentPath === 'journal.html' ? 'active' : ''}" href="journal.html">🔬 The Hair Journal</a></li>
                <li><a class="dropdown-item py-2 small ${currentPath === 'about.html' ? 'active' : ''}" href="about.html">🌿 Brand Story & Lab</a></li>
                <li><a class="dropdown-item py-2 small ${currentPath === 'contact.html' ? 'active' : ''}" href="contact.html">💬 Concierge & Help</a></li>
              </ul>
            </div>
          </nav>

          <!-- DESKTOP ONLY: Action Icons & Admin Pill (Strictly hidden on <= 1024px) -->
          <div class="hairea-desktop-actions align-items-center gap-1 gap-sm-2 ms-2">
            <!-- Search -->
            <button class="nav-icon-btn" onclick="App.openSearchModal()" title="Search catalog">
              <i data-lucide="search"></i>
            </button>
            <!-- Customer Authentication -->
            <a href="login.html" class="nav-icon-btn" title="Customer Authentication">
              <i data-lucide="user"></i>
            </a>
            <!-- Wishlist -->
            <a href="wishlist.html" class="nav-icon-btn position-relative" title="Wishlist">
              <i data-lucide="heart"></i>
              <span id="wishlistCountBadge" class="badge-count">0</span>
            </a>
            <!-- Cart Drawer Button -->
            <button class="nav-icon-btn position-relative" onclick="App.openCartDrawer()" title="Cart">
              <i data-lucide="shopping-bag"></i>
              <span id="cartCountBadge" class="badge-count">0</span>
            </button>
            <!-- Admin Dashboard Portal -->
            <a href="admin.html" class="btn btn-sm btn-hairea-outline py-1 px-2 ms-1" style="font-size: 0.7rem; white-space: nowrap;">
              <i data-lucide="shield-check" style="width: 12px; height: 12px;"></i> Admin
            </a>
          </div>

          <!-- RIGHT: Mobile/Tablet/1024px Hamburger Button (Strictly visible ONLY at <= 1024px) -->
          <button class="hairea-hamburger-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenuDrawer" aria-label="Open Navigation Menu" title="Open Navigation Menu">
            <i data-lucide="menu" style="width: 24px; height: 24px;"></i>
          </button>
        </div>
      </header>

      <!-- Mobile / Tablet / 1024px Offcanvas Navigation Drawer -->
      <div class="offcanvas offcanvas-end" tabindex="-1" id="mobileMenuDrawer" style="max-width: 380px;">
        <div class="offcanvas-header border-bottom py-3">
          <a href="index.html" class="brand-logo text-decoration-none" data-bs-dismiss="offcanvas">
            HAIRÉA
            <span>Cosmetics Atelier</span>
          </a>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        
        <div class="offcanvas-body p-4 d-flex flex-column justify-content-between" style="overflow-y: auto;">
          <div>
            <!-- Quick Actions Grid (Search, Cart, Wishlist, Account) inside drawer -->
            <div class="d-grid grid-cols-2 gap-2 mb-4">
              <div class="d-flex gap-2">
                <button class="btn btn-sm btn-hairea-outline w-100 d-flex align-items-center justify-content-center gap-2" onclick="bootstrap.Offcanvas.getInstance(document.getElementById('mobileMenuDrawer')).hide(); App.openSearchModal();">
                  <i data-lucide="search" style="width: 14px; height: 14px;"></i> Search
                </button>
                <button class="btn btn-sm btn-hairea-outline w-100 d-flex align-items-center justify-content-center gap-2" onclick="bootstrap.Offcanvas.getInstance(document.getElementById('mobileMenuDrawer')).hide(); App.openCartDrawer();">
                  <i data-lucide="shopping-bag" style="width: 14px; height: 14px;"></i> Bag (<span id="mobileCartCount">0</span>)
                </button>
              </div>
              <div class="d-flex gap-2 mt-2">
                <a href="wishlist.html" class="btn btn-sm btn-hairea-outline w-100 d-flex align-items-center justify-content-center gap-2">
                  <i data-lucide="heart" style="width: 14px; height: 14px;"></i> Wishlist (<span id="mobileWishCount">0</span>)
                </a>
                <a href="login.html" class="btn btn-sm btn-hairea-outline w-100 d-flex align-items-center justify-content-center gap-2">
                  <i data-lucide="user" style="width: 14px; height: 14px;"></i> Sign In / Register
                </a>
              </div>
            </div>

            <!-- Main Navigation Links List -->
            <div class="d-flex flex-column gap-2 mb-4">
              <a href="index.html" class="d-flex justify-content-between align-items-center py-2 px-3 rounded text-decoration-none ${currentPath === 'index.html' || currentPath === '' ? 'bg-secondary fw-bold text-dark' : 'text-secondary'}">
                <span>01. Home</span>
                <i data-lucide="chevron-right" style="width: 14px; height: 14px;" class="opacity-50"></i>
              </a>
              <a href="shop.html" class="d-flex justify-content-between align-items-center py-2 px-3 rounded text-decoration-none ${currentPath === 'shop.html' ? 'bg-secondary fw-bold text-dark' : 'text-secondary'}">
                <span>02. Shop All Formulations</span>
                <i data-lucide="chevron-right" style="width: 14px; height: 14px;" class="opacity-50"></i>
              </a>
              <a href="quiz.html" class="d-flex justify-content-between align-items-center py-2 px-3 rounded text-decoration-none bg-warning bg-opacity-25 text-dark fw-bold border border-warning">
                <span>03. 🧬 Hair Diagnostic Quiz</span>
                <span class="badge bg-warning text-dark" style="font-size: 0.6rem;">AI BESPOKE</span>
              </a>
              <a href="routines.html" class="d-flex justify-content-between align-items-center py-2 px-3 rounded text-decoration-none ${currentPath === 'routines.html' ? 'bg-secondary fw-bold text-dark' : 'text-secondary'}">
                <span>04. Curated Hair Routines</span>
                <i data-lucide="chevron-right" style="width: 14px; height: 14px;" class="opacity-50"></i>
              </a>
              <a href="transformations.html" class="d-flex justify-content-between align-items-center py-2 px-3 rounded text-decoration-none ${currentPath === 'transformations.html' ? 'bg-secondary fw-bold text-dark' : 'text-secondary'}">
                <span>05. Transformations Gallery</span>
                <i data-lucide="chevron-right" style="width: 14px; height: 14px;" class="opacity-50"></i>
              </a>
              <a href="reviews.html" class="d-flex justify-content-between align-items-center py-2 px-3 rounded text-decoration-none ${currentPath === 'reviews.html' ? 'bg-secondary fw-bold text-dark' : 'text-secondary'}">
                <span>06. Verified Client Reviews</span>
                <i data-lucide="chevron-right" style="width: 14px; height: 14px;" class="opacity-50"></i>
              </a>
              <a href="subscriptions.html" class="d-flex justify-content-between align-items-center py-2 px-3 rounded text-decoration-none ${currentPath === 'subscriptions.html' ? 'bg-secondary fw-bold text-dark' : 'text-secondary'}">
                <span>07. Subscriptions Club</span>
                <span class="badge bg-success text-white" style="font-size: 0.6rem;">20% OFF</span>
              </a>
              <a href="journal.html" class="d-flex justify-content-between align-items-center py-2 px-3 rounded text-decoration-none ${currentPath === 'journal.html' ? 'bg-secondary fw-bold text-dark' : 'text-secondary'}">
                <span>08. The Hair Journal & Science</span>
                <i data-lucide="chevron-right" style="width: 14px; height: 14px;" class="opacity-50"></i>
              </a>
              <a href="about.html" class="d-flex justify-content-between align-items-center py-2 px-3 rounded text-decoration-none ${currentPath === 'about.html' ? 'bg-secondary fw-bold text-dark' : 'text-secondary'}">
                <span>09. Brand Story & Lab</span>
                <i data-lucide="chevron-right" style="width: 14px; height: 14px;" class="opacity-50"></i>
              </a>
              <a href="contact.html" class="d-flex justify-content-between align-items-center py-2 px-3 rounded text-decoration-none ${currentPath === 'contact.html' ? 'bg-secondary fw-bold text-dark' : 'text-secondary'}">
                <span>10. Concierge & Help</span>
                <i data-lucide="chevron-right" style="width: 14px; height: 14px;" class="opacity-50"></i>
              </a>
              <a href="admin.html" class="d-flex justify-content-between align-items-center py-2 px-3 rounded text-decoration-none text-muted small">
                <span>11. Studio Admin Dashboard</span>
                <i data-lucide="shield-check" style="width: 14px; height: 14px;" class="opacity-50"></i>
              </a>
            </div>
          </div>

          <!-- Bottom Drawer CTA & Preferences -->
          <div class="pt-3 border-top">
            <a href="quiz.html" class="btn btn-hairea-gold w-100 py-3 mb-3 font-serif fw-bold">
              Start Hair Diagnostic Quiz →
            </a>
            <div class="d-flex justify-content-between align-items-center small text-muted">
              <span>Theme & Direction:</span>
              <div class="d-flex gap-2">
                <button class="btn btn-sm btn-outline-secondary py-0 px-2" onclick="App.toggleTheme()">
                  ${this.theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                </button>
                <button class="btn btn-sm btn-outline-secondary py-0 px-2" onclick="App.toggleDirection()">
                  ${this.dir === 'rtl' ? 'LTR' : 'RTL'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) lucide.createIcons();

    window.addEventListener("scroll", () => {
      const h = document.querySelector(".hairea-header");
      if (h) {
        if (window.scrollY > 40) {
          h.classList.add("scrolled");
        } else {
          h.classList.remove("scrolled");
        }
      }
    });
  },

  // Footer Component Rendering — Strict 1-Row Layout & Full Width Crystal Clear Legibility
  renderFooter() {
    const footerContainer = document.getElementById("footer-placeholder");
    if (!footerContainer) return;

    footerContainer.innerHTML = `
      <footer class="hairea-footer">
        <div class="container-fluid">
          <div class="row g-4 g-xl-5 mb-5 align-items-start">
            <!-- 1. Brand & Newsletter (3 Cols) -->
            <div class="col-xl-3 col-lg-3 col-md-6 col-12">
              <a href="index.html" class="d-inline-block text-decoration-none mb-2">
                <h2 class="footer-brand-title">HAIRÉA</h2>
              </a>
              <p class="footer-desc mb-3">
                Where molecular trichology meets Parisian couture hair rituals. Bespoke formulas engineered to heal your strand genetics.
              </p>
              <div class="newsletter-box mt-3">
                <span class="editorial-tag text-white mb-2 d-inline-block" style="font-size: 0.68rem; background: rgba(214, 185, 140, 0.2); border-color: rgba(214, 185, 140, 0.4); color: #E8CA9E !important;">The Gazette</span>
                <p class="footer-subtext mb-2">Receive private diagnostic invites & 15% off.</p>
                <form onsubmit="App.handleNewsletter(event)" class="d-flex gap-2">
                  <input type="email" id="newsletterEmail" class="form-control newsletter-input" placeholder="Your email..." required>
                  <button type="submit" class="btn btn-sm btn-hairea-gold px-3 rounded-pill fw-semibold" style="font-size: 0.82rem; white-space: nowrap;">Join</button>
                </form>
              </div>
            </div>

            <!-- 2. Discover Links (2 Cols) -->
            <div class="col-xl-2 col-lg-2 col-md-3 col-6">
              <h4 class="footer-heading">Discover</h4>
              <ul class="footer-links">
                <li><a href="shop.html">Shop All Formulas</a></li>
                <li><a href="shop.html?category=Shampoo">Silk Cleansers</a></li>
                <li><a href="shop.html?category=Conditioner">Lipid Melts</a></li>
                <li><a href="shop.html?category=Treatment">Peptide Masks</a></li>
                <li><a href="shop.html?category=Scalp+Care">Scalp Serums</a></li>
                <li><a href="shop.html?category=Styling+%26+Oil">Glossing Oils</a></li>
                <li><a href="subscriptions.html">Refill Subscriptions</a></li>
              </ul>
            </div>

            <!-- 3. Diagnostic Links (2 Cols) -->
            <div class="col-xl-2 col-lg-2 col-md-3 col-6">
              <h4 class="footer-heading">Diagnostic</h4>
              <ul class="footer-links">
                <li><a href="quiz.html">Hair-Type Quiz</a></li>
                <li><a href="routines.html">Curated Rituals</a></li>
                <li><a href="transformations.html">Before / After Gallery</a></li>
                <li><a href="reviews.html">Verified Reviews</a></li>
                <li><a href="journal.html">Ingredient Library</a></li>
                <li><a href="journal.html">Trichology Research</a></li>
              </ul>
            </div>

            <!-- 4. Atelier Links (2 Cols) -->
            <div class="col-xl-2 col-lg-2 col-md-3 col-6">
              <h4 class="footer-heading">Atelier</h4>
              <ul class="footer-links">
                <li><a href="about.html">Our Formulation Lab</a></li>
                <li><a href="about.html#sustainability">Ethical Sourcing</a></li>
                <li><a href="contact.html">Salon Concierge</a></li>
                <li><a href="contact.html#faq">FAQ & Shipping</a></li>
                <li><a href="account.html">Customer Portal</a></li>
                <li><a href="admin.html">Studio Admin</a></li>
              </ul>
            </div>

            <!-- 5. Standards & Social Icons (3 Cols) -->
            <div class="col-xl-3 col-lg-3 col-md-5 col-12">
              <h4 class="footer-heading">Standards & Atelier</h4>
              <div class="footer-standards-list mb-4">
                <span>✦ 100% Sulfate-Free Formulas</span>
                <span>✦ Zero Silicones or Phthalates</span>
                <span>✦ Leaping Bunny Certified</span>
                <span>✦ 100% Recycled Aluminum & Glass</span>
              </div>
              <div>
                <span class="footer-social-label">Connect With Us</span>
                <div class="d-flex flex-wrap gap-2 text-white align-items-center">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="Instagram" title="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="Facebook" title="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="X (Twitter)" title="X (Twitter)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="YouTube" title="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="LinkedIn" title="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-bottom-bar d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p class="footer-copyright mb-0">© 2026 HAIRÉA Cosmetics Atelier Inc. All rights reserved. "Know Your Hair. Love Your Ritual."</p>
            <div class="footer-bottom-links d-flex flex-wrap gap-4">
              <a href="about.html">Privacy Policy</a>
              <a href="about.html">Terms of Service</a>
              <a href="contact.html">Accessibility</a>
              <a href="admin.html">Admin Login</a>
            </div>
          </div>
        </div>
      </footer>
    `;
    if (window.lucide) lucide.createIcons();
  },

  // Cart Drawer
  renderCartDrawer() {
    let drawer = document.getElementById("cartDrawerContainer");
    if (!drawer) {
      drawer = document.createElement("div");
      drawer.id = "cartDrawerContainer";
      document.body.appendChild(drawer);
    }

    const cart = Storage.getCart();
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const freeShippingThreshold = 75;
    const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
    const amountNeeded = (freeShippingThreshold - subtotal).toFixed(2);

    drawer.innerHTML = `
      <div class="cart-drawer-backdrop" id="cartBackdrop" onclick="App.closeCartDrawer()"></div>
      <div class="cart-drawer" id="cartDrawer">
        <div class="cart-drawer-header">
          <h4 class="font-serif m-0">Your Ritual Bag (${cart.length})</h4>
          <button class="btn-close" onclick="App.closeCartDrawer()"></button>
        </div>

        <div class="free-shipping-progress">
          <div class="d-flex justify-content-between align-items-center">
            <span>${subtotal >= freeShippingThreshold ? '🎉 Free Express Shipping Unlocked!' : `Add <strong>${this.formatPrice(amountNeeded)}</strong> more for <strong>Free Shipping</strong>`}</span>
            <span class="small fw-bold">${Math.round(progressPercent)}%</span>
          </div>
          <div class="shipping-bar-track">
            <div class="shipping-bar-fill" style="width: ${progressPercent}%"></div>
          </div>
        </div>

        <div class="cart-drawer-body">
          ${cart.length === 0 ? `
            <div class="text-center py-5">
              <i data-lucide="shopping-bag" class="w-12 h-12 text-muted mb-3 mx-auto opacity-50" style="width: 48px; height: 48px;"></i>
              <h5 class="font-serif mb-2">Your Bag is Empty</h5>
              <p class="text-muted small mb-4">Discover your personalized formula or browse bestselling hair rituals.</p>
              <a href="quiz.html" class="btn btn-hairea-gold btn-sm mb-2 w-100" onclick="App.closeCartDrawer()">Take Hair Diagnostic</a>
              <a href="shop.html" class="btn btn-hairea-outline btn-sm w-100" onclick="App.closeCartDrawer()">Shop Catalog</a>
            </div>
          ` : `
            ${cart.map((item, idx) => `
              <div class="cart-item-row">
                <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
                <div class="flex-grow-1">
                  <div class="d-flex justify-content-between">
                    <h6 class="font-serif mb-1">${item.name}</h6>
                    <button class="btn btn-sm text-danger p-0 border-0" onclick="App.removeFromCart(${idx})" title="Remove item">
                      <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                    </button>
                  </div>
                  <p class="small text-muted mb-2">${item.isSubscription ? `🔄 ${item.frequency || 'Subscription (Every 6 Wks)'}` : 'One-time purchase'}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="qty-stepper">
                      <button onclick="App.updateCartQty(${idx}, ${item.quantity - 1})">-</button>
                      <span>${item.quantity}</span>
                      <button onclick="App.updateCartQty(${idx}, ${item.quantity + 1})">+</button>
                    </div>
                    <span class="fw-bold">${this.formatPrice(item.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            `).join("")}
          `}
        </div>

        ${cart.length > 0 ? `
          <div class="cart-drawer-footer">
            <div class="d-flex justify-content-between mb-2">
              <span class="text-muted">Subtotal</span>
              <span class="fw-bold fs-5">${this.formatPrice(subtotal)}</span>
            </div>
            <p class="small text-muted mb-3">Taxes & shipping calculated at checkout. 30-day money-back guarantee.</p>
            <button class="btn btn-hairea-gold w-100 mb-2 py-3" onclick="App.checkout()">
              Proceed to Checkout • ${this.formatPrice(subtotal)}
            </button>
            <a href="shop.html" class="btn btn-hairea-outline w-100 btn-sm" onclick="App.closeCartDrawer()">
              Continue Shopping
            </a>
          </div>
        ` : ''}
      </div>
    `;
    if (window.lucide) lucide.createIcons();
  },

  openCartDrawer() {
    this.renderCartDrawer();
    const backdrop = document.getElementById("cartBackdrop");
    const drawer = document.getElementById("cartDrawer");
    if (backdrop && drawer) {
      backdrop.classList.add("show");
      drawer.classList.add("show");
    }
  },

  closeCartDrawer() {
    const backdrop = document.getElementById("cartBackdrop");
    const drawer = document.getElementById("cartDrawer");
    if (backdrop && drawer) {
      backdrop.classList.remove("show");
      drawer.classList.remove("show");
    }
  },

  addToCart(product, isSubscription = false, frequency = "Every 6 Weeks") {
    const cart = Storage.getCart();
    const finalPrice = isSubscription ? Number((product.price * 0.8).toFixed(2)) : Number(product.price);
    
    const existingIndex = cart.findIndex(i => i.id === product.id && i.isSubscription === isSubscription);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: finalPrice,
        image: product.image,
        quantity: 1,
        isSubscription: isSubscription,
        frequency: frequency
      });
    }
    Storage.setCart(cart);
    this.updateBadges();
    this.renderCartDrawer();
    this.openCartDrawer();
    this.toast(`Added ${product.name} to ritual bag!`);
  },

  updateCartQty(index, newQty) {
    const cart = Storage.getCart();
    if (newQty <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = newQty;
    }
    Storage.setCart(cart);
    this.renderCartDrawer();
    this.updateBadges();
  },

  removeFromCart(index) {
    const cart = Storage.getCart();
    const removed = cart.splice(index, 1)[0];
    Storage.setCart(cart);
    this.renderCartDrawer();
    this.updateBadges();
    if (removed) this.toast(`Removed ${removed.name} from bag.`);
  },

  checkout() {
    const cart = Storage.getCart();
    if (cart.length === 0) return;

    // Simulate order placement
    const newOrder = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      date: "Just now",
      items: cart,
      total: cart.reduce((acc, i) => acc + i.price * i.quantity, 0),
      status: "Processing",
      tracking: "Pending dispatch",
      destination: "New York, USA"
    };

    const orders = Storage.getOrders();
    orders.unshift(newOrder);
    Storage.setOrders(orders);

    Storage.setCart([]);
    this.closeCartDrawer();
    this.updateBadges();
    
    alert(`🎉 Order ${newOrder.id} Placed Successfully!\n\nThank you for choosing HAIRÉA. A confirmation email with your bespoke formulation details has been sent.`);
    window.location.href = "account.html";
  },

  // Wishlist
  toggleWishlist(product) {
    let wishlist = Storage.getWishlist();
    const index = wishlist.findIndex(p => p.id === product.id);
    if (index > -1) {
      wishlist.splice(index, 1);
      this.toast(`Removed ${product.name} from Wishlist`);
    } else {
      wishlist.push(product);
      this.toast(`Saved ${product.name} to Wishlist!`);
    }
    Storage.setWishlist(wishlist);
    this.updateBadges();
    this.updateWishlistIcons();
  },

  updateWishlistIcons() {
    const wishlist = Storage.getWishlist();
    document.querySelectorAll("[data-wishlist-id]").forEach(btn => {
      const id = btn.getAttribute("data-wishlist-id");
      const isSaved = wishlist.some(p => p.id === id);
      if (isSaved) {
        btn.classList.add("active");
        btn.innerHTML = `<i data-lucide="heart" fill="#E63946"></i>`;
      } else {
        btn.classList.remove("active");
        btn.innerHTML = `<i data-lucide="heart"></i>`;
      }
    });
    if (window.lucide) lucide.createIcons();
  },

  updateBadges() {
    const cart = Storage.getCart();
    const wishlist = Storage.getWishlist();
    const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const cartBadge = document.getElementById("cartCountBadge");
    if (cartBadge) cartBadge.innerText = cartTotalCount;

    const wishBadge = document.getElementById("wishlistCountBadge");
    if (wishBadge) wishBadge.innerText = wishlist.length;

    const mobileCart = document.getElementById("mobileCartCount");
    if (mobileCart) mobileCart.innerText = cartTotalCount;

    const mobileWish = document.getElementById("mobileWishCount");
    if (mobileWish) mobileWish.innerText = wishlist.length;
  },

  // Live Search Modal
  renderSearchModal() {
    let modal = document.getElementById("searchModalContainer");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "searchModalContainer";
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered search-modal-dialog">
          <div class="modal-content glass-card border-0 p-3 p-sm-4 shadow-luxe">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="editorial-tag" id="searchModalLabel">Bespoke Catalog Search</span>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="position-relative mb-3">
              <input type="text" id="globalSearchInput" class="form-control form-control-lg bg-light border-0 px-3 px-sm-4 py-2 py-sm-3 rounded-pill" placeholder="Search hair concerns, ingredients, products..." oninput="App.handleLiveSearch(this.value)">
            </div>
            
            <div class="search-trending-wrapper d-flex gap-2 flex-wrap mb-3 align-items-center">
              <span class="small text-muted me-1">Trending:</span>
              <button class="btn btn-sm btn-hairea-outline py-1 px-2 px-sm-3 text-nowrap" onclick="App.setSearchTerm('Sulfate-Free')">Sulfate-Free</button>
              <button class="btn btn-sm btn-hairea-outline py-1 px-2 px-sm-3 text-nowrap" onclick="App.setSearchTerm('Curly')">Curly Hair</button>
              <button class="btn btn-sm btn-hairea-outline py-1 px-2 px-sm-3 text-nowrap" onclick="App.setSearchTerm('Rosemary')">Rosemary Stem Cells</button>
              <button class="btn btn-sm btn-hairea-outline py-1 px-2 px-sm-3 text-nowrap" onclick="App.setSearchTerm('Peptide')">Peptide Bond Repair</button>
            </div>

            <div id="searchResultsGrid" class="row g-2 g-sm-3 search-results-scrollable">
              <!-- Results populated dynamically -->
            </div>
          </div>
        </div>
      </div>
    `;
  },

  openSearchModal() {
    const modalEl = document.getElementById("searchModal");
    if (modalEl && window.bootstrap) {
      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
      setTimeout(() => {
        document.getElementById("globalSearchInput")?.focus();
        this.handleLiveSearch("");
      }, 300);
    }
  },

  setSearchTerm(term) {
    const input = document.getElementById("globalSearchInput");
    if (input) {
      input.value = term;
      this.handleLiveSearch(term);
    }
  },

  handleLiveSearch(query) {
    const container = document.getElementById("searchResultsGrid");
    if (!container) return;
    const products = Storage.getProducts();
    const q = query.toLowerCase().trim();

    const filtered = products.filter(p => 
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.concerns.some(c => c.toLowerCase().includes(q)) ||
      p.hairType.some(h => h.toLowerCase().includes(q)) ||
      p.freeFrom.some(f => f.toLowerCase().includes(q)) ||
      p.ingredientsKey.some(ing => ing.name.toLowerCase().includes(q))
    );

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-12 text-center py-4 text-muted">
          <p>No formulations matched "<strong>${query}</strong>". Try searching for <em>Shampoo</em>, <em>Mask</em>, or <em>Rosemary</em>.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(p => `
      <div class="col-12 col-md-6">
        <div class="search-result-card d-flex align-items-center justify-content-between gap-2 gap-sm-3 p-2 p-sm-3 rounded glass-card border w-100">
          <div class="d-flex align-items-center gap-2 gap-sm-3 flex-grow-1 min-w-0">
            <img src="${p.image}" alt="${p.name}" class="search-result-thumb" style="width: 46px; height: 46px; min-width: 46px; object-fit: cover; border-radius: 8px;">
            <div class="min-w-0 flex-grow-1">
              <h6 class="font-serif mb-1 text-truncate"><a href="product.html?id=${p.id}" class="search-result-title fw-bold d-block text-truncate">${p.name}</a></h6>
              <div class="small search-result-meta text-truncate">${p.category} • <strong class="text-primary">${this.formatPrice(p.price)}</strong></div>
            </div>
          </div>
          <a href="product.html?id=${p.id}" class="btn btn-sm btn-hairea-gold px-2 px-sm-3 flex-shrink-0">View</a>
        </div>
      </div>
    `).join("");
  },

  // Quick View Modal
  renderQuickViewModal() {
    let modal = document.getElementById("quickViewContainer");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "quickViewContainer";
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal fade" id="quickViewModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content glass-card border-0 p-4" id="quickViewBody">
            <!-- Populated on open -->
          </div>
        </div>
      </div>
    `;
  },

  openQuickView(productId) {
    const products = Storage.getProducts();
    const p = products.find(prod => prod.id === productId);
    if (!p) return;

    const modalBody = document.getElementById("quickViewBody");
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="row g-4 align-items-center">
        <div class="col-md-6">
          <div class="rounded-4 overflow-hidden shadow-sm">
            <img src="${p.image}" alt="${p.name}" class="w-100 object-fit-cover" style="height: 380px;">
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-between align-items-start mb-2">
            <span class="editorial-tag">${p.category}</span>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <h3 class="font-serif mb-1">${p.name}</h3>
          <p class="text-muted small mb-2">${p.subtitle}</p>
          <div class="d-flex align-items-center gap-2 mb-3">
            <span class="stars-rating">★★★★★</span>
            <span class="small fw-bold">${p.rating}</span>
            <span class="small text-muted">(${p.reviewsCount} reviews)</span>
          </div>
          <p class="small text-secondary mb-4">${p.description}</p>
          
          <div class="p-3 bg-light rounded-3 mb-4 border">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <span class="fw-bold">One-Time Purchase:</span>
              <span class="fw-bold fs-5">${this.formatPrice(p.price)}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center text-success small">
              <span>Subscribe & Save (20% Off):</span>
              <span class="fw-bold">${this.formatPrice(p.price * 0.8)} / delivery</span>
            </div>
          </div>

          <div class="d-flex gap-2">
            <button class="btn btn-hairea-gold flex-grow-1" onclick="App.addToCartById('${p.id}', false); bootstrap.Modal.getInstance(document.getElementById('quickViewModal')).hide();">
              Add to Bag • ${this.formatPrice(p.price)}
            </button>
            <a href="product.html?id=${p.id}" class="btn btn-hairea-outline">Full Details</a>
          </div>
        </div>
      </div>
    `;

    const modalEl = document.getElementById("quickViewModal");
    if (modalEl && window.bootstrap) {
      const bsModal = new bootstrap.Modal(modalEl);
      bsModal.show();
    }
  },

  addToCartById(id, isSub = false) {
    const products = Storage.getProducts();
    const p = products.find(prod => prod.id === id);
    if (p) this.addToCart(p, isSub);
  },

  // Auth Modal
  renderAuthModal() {
    let modal = document.getElementById("authModalContainer");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "authModalContainer";
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content glass-card border-0 p-4 p-md-5">
            <div class="d-flex justify-content-end mb-2">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            
            <!-- Centered Clickable Brand Logo -->
            <div class="text-center mb-4">
              <a href="index.html" class="brand-logo text-decoration-none d-inline-flex flex-column align-items-center mb-2" title="Navigate to Home">
                HAIRÉA
                <span>Cosmetics Atelier</span>
              </a>
              <p class="small text-muted mb-0">Atelier Privé Customer Portal</p>
            </div>

            <!-- Social Sign-In Buttons -->
            <div class="d-flex flex-column gap-2 mb-3">
              <button type="button" class="btn btn-hairea-outline w-100 py-2 d-flex align-items-center justify-content-center gap-2 rounded-pill" onclick="App.toast('Authenticated with Google!'); setTimeout(() => window.location.href='account.html', 500)">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span class="small fw-semibold">Continue with Google</span>
              </button>

              <button type="button" class="btn btn-hairea-outline w-100 py-2 d-flex align-items-center justify-content-center gap-2 rounded-pill" onclick="App.toast('Authenticated with Apple!'); setTimeout(() => window.location.href='account.html', 500)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.34-.55.63-1.03 1.66-.9 2.69 1 .08 2.01-.48 2.59-1.18z"/>
                </svg>
                <span class="small fw-semibold">Continue with Apple</span>
              </button>
            </div>

            <div class="d-flex align-items-center mb-3">
              <div class="flex-grow-1 border-top"></div>
              <span class="px-3 text-muted small text-uppercase" style="font-size: 0.7rem; letter-spacing: 0.08em;">or with email</span>
              <div class="flex-grow-1 border-top"></div>
            </div>

            <ul class="nav nav-pills nav-fill mb-4 p-1 bg-secondary rounded-pill" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active rounded-pill text-uppercase small" data-bs-toggle="pill" data-bs-target="#loginTab">Login</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link rounded-pill text-uppercase small" data-bs-toggle="pill" data-bs-target="#registerTab">Register</button>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="loginTab">
                <form onsubmit="App.handleLogin(event)">
                  <div class="mb-3">
                    <label class="form-label small text-muted">Email Address</label>
                    <input type="email" id="loginEmail" class="form-control rounded-pill px-3" value="genevieve.moreau@editorial.com" required>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex justify-content-between">
                      <label class="form-label small text-muted">Password</label>
                      <a href="#" class="small text-muted" onclick="App.toast('Password reset link sent to demo email!')">Forgot?</a>
                    </div>
                    <div class="position-relative">
                      <input type="password" id="loginPass" class="form-control rounded-pill px-3 pe-5" value="password123" required>
                      <button type="button" class="btn position-absolute top-50 end-0 translate-middle-y me-2 border-0 bg-transparent p-1 text-muted" onclick="App.togglePassword('loginPass', this)" aria-label="Toggle password visibility">
                        <i data-lucide="eye" style="width: 18px; height: 18px;"></i>
                      </button>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-hairea-gold w-100 mb-3 rounded-pill py-2">Enter Atelier</button>
                  <div class="text-center">
                    <a href="admin.html" class="small text-muted">Are you a Salon Administrator? Access Studio Admin →</a>
                  </div>
                </form>
              </div>
              <div class="tab-pane fade" id="registerTab">
                <form onsubmit="App.handleRegister(event)">
                  <div class="mb-3">
                    <label class="form-label small text-muted">Full Name</label>
                    <input type="text" id="regName" class="form-control rounded-pill px-3" placeholder="e.g. Elena Rostova" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label small text-muted">Email Address</label>
                    <input type="email" id="regEmail" class="form-control rounded-pill px-3" placeholder="name@domain.com" required>
                  </div>
                  <div class="mb-3">
                    <label class="form-label small text-muted">Create Password</label>
                    <div class="position-relative">
                      <input type="password" id="regPass" class="form-control rounded-pill px-3 pe-5" placeholder="Minimum 8 characters" required minlength="6">
                      <button type="button" class="btn position-absolute top-50 end-0 translate-middle-y me-2 border-0 bg-transparent p-1 text-muted" onclick="App.togglePassword('regPass', this)" aria-label="Toggle password visibility">
                        <i data-lucide="eye" style="width: 18px; height: 18px;"></i>
                      </button>
                    </div>
                  </div>
                  <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="regModalTerms" required>
                    <label class="form-check-label small text-muted" for="regModalTerms">
                      I agree to the <a href="#" class="text-decoration-underline text-reset" onclick="event.preventDefault(); App.toast('Terms & Conditions accepted');">Terms</a> and <a href="#" class="text-decoration-underline text-reset" onclick="event.preventDefault(); App.toast('Privacy Policy accepted');">Privacy Policy</a>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-hairea-gold w-100 rounded-pill py-2">Create Private Account</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
  },

  togglePassword(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPass = input.type === "password";
    input.type = isPass ? "text" : "password";
    btn.innerHTML = `<i data-lucide="${isPass ? 'eye-off' : 'eye'}" style="width: 18px; height: 18px;"></i>`;
    if (window.lucide) lucide.createIcons();
  },

  handleLogin(e) {
    e.preventDefault();
    this.toast("Welcome back to HAIRÉA Atelier!");
    setTimeout(() => {
      window.location.href = "account.html";
    }, 600);
  },

  handleRegister(e) {
    e.preventDefault();
    const terms = document.getElementById("regModalTerms");
    if (terms && !terms.checked) {
      this.toast("Please agree to the Terms and Privacy Policy.");
      return;
    }
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    Storage.setUser({
      name: name,
      email: email,
      tier: "Silver Atelier Member",
      points: 100,
      hairProfile: "Complete diagnostic to customize",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    });
    this.toast("Account created! 100 Loyalty Points credited.");
    setTimeout(() => {
      window.location.href = "account.html";
    }, 600);
  },

  handleNewsletter(e) {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value;
    this.toast(`Welcome to the Gazette! Promo code RITUAL15 sent to ${email}`);
    document.getElementById("newsletterEmail").value = "";
  },

  initComparisonSliders() {
    document.querySelectorAll(".comparison-container").forEach(container => {
      const handle = container.querySelector(".comparison-slider-handle");
      const afterImg = container.querySelector(".comparison-image-after");
      if (!handle || !afterImg) return;

      let isDragging = false;

      const move = (e) => {
        if (!isDragging) return;
        const rect = container.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        let x = clientX - rect.left;
        x = Math.max(0, Math.min(x, rect.width));
        const percent = (x / rect.width) * 100;
        handle.style.left = `${percent}%`;
        afterImg.style.clipPath = `inset(0 0 0 ${percent}%)`;
      };

      const start = () => { isDragging = true; };
      const stop = () => { isDragging = false; };

      handle.addEventListener("mousedown", start);
      window.addEventListener("mouseup", stop);
      window.addEventListener("mousemove", move);

      handle.addEventListener("touchstart", start);
      window.addEventListener("touchend", stop);
      window.addEventListener("touchmove", move);
    });
  },

  initEventListeners() {
    this.updateWishlistIcons();
    this.updateBadges();
    try {
      if (window.AOS) AOS.init({ duration: 800, once: true });
    } catch(err) {
      console.warn("AOS init notice:", err);
    }
  }
};

// Initialize globally on load
window.App = App;
window.addEventListener("DOMContentLoaded", () => App.init());

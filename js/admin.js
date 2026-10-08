/**
 * HAIRÉA - Studio Admin Dashboard Engine
 * Complete CRUD management for Products, Orders, Subscriptions, Reviews, and Transformations
 */

const AdminApp = {
  currentTab: "dashboard",

  init() {
    this.renderMetrics();
    this.renderProductsTable();
    this.renderOrdersTable();
    this.renderReviewsTable();
    this.renderTransformationsTable();
    this.renderQuizLogTable();
    this.bindSidebar();
  },

  switchTab(tab) {
    this.currentTab = tab;
    document.querySelectorAll(".admin-tab-content").forEach(el => el.classList.add("d-none"));
    document.querySelectorAll(".admin-nav-item").forEach(el => el.classList.remove("active"));
    
    const targetContent = document.getElementById(`tab-${tab}`);
    const targetNav = document.getElementById(`nav-${tab}`);
    if (targetContent) targetContent.classList.remove("d-none");
    if (targetNav) targetNav.classList.add("active");
    if (window.lucide) lucide.createIcons();

    // Automatically close mobile/tablet drawer when tab is chosen
    this.closeSidebar();
  },

  renderMetrics() {
    const products = Storage.getProducts();
    const orders = Storage.getOrders();
    const reviews = Storage.getReviews();
    const subs = Storage.getSubscriptions();

    const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0) + 14850.00;
    
    document.getElementById("kpiRevenue").innerText = `$${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById("kpiOrders").innerText = (orders.length + 142).toString();
    document.getElementById("kpiActiveSubs").innerText = (subs.length + 84).toString();
    document.getElementById("kpiReviewsCount").innerText = (reviews.length + 940).toString();
  },

  renderProductsTable() {
    const tbody = document.getElementById("adminProductsTableBody");
    if (!tbody) return;
    const products = Storage.getProducts();

    tbody.innerHTML = products.map((p, idx) => `
      <tr>
        <td>
          <div class="d-flex align-items-center gap-3">
            <img src="${p.image}" class="rounded" style="width: 44px; height: 44px; object-fit: cover;">
            <div>
              <div class="fw-bold">${p.name}</div>
              <span class="small text-muted">${p.category} • ${p.volume || '250 ml'}</span>
            </div>
          </div>
        </td>
        <td>${App.formatPrice(p.price)}</td>
        <td>
          <span class="badge ${p.inStock ? 'bg-success' : 'bg-danger'}">
            ${p.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </td>
        <td>⭐ ${p.rating} (${p.reviewsCount})</td>
        <td>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-outline-secondary" onclick="AdminApp.editProduct('${p.id}')">Edit</button>
            <button class="btn btn-sm btn-outline-danger" onclick="AdminApp.deleteProduct('${p.id}')">Delete</button>
          </div>
        </td>
      </tr>
    `).join("");
  },

  renderOrdersTable() {
    const tbody = document.getElementById("adminOrdersTableBody");
    if (!tbody) return;
    const orders = Storage.getOrders();

    tbody.innerHTML = orders.map((o) => `
      <tr>
        <td class="font-monospace fw-bold">${o.id}</td>
        <td>${o.date}</td>
        <td>${o.items.map(i => `${i.name} (x${i.quantity || i.qty || 1})`).join(", ")}</td>
        <td class="fw-bold">${App.formatPrice(o.total)}</td>
        <td>
          <select class="form-select form-select-sm" onchange="AdminApp.updateOrderStatus('${o.id}', this.value)">
            <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>Processing</option>
            <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
            <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
            <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </td>
        <td class="small"><span class="badge bg-secondary font-monospace" style="color: var(--accent-champagne) !important; letter-spacing: 0.05em;">${o.tracking || 'N/A'}</span></td>
      </tr>
    `).join("");
  },

  renderReviewsTable() {
    const tbody = document.getElementById("adminReviewsTableBody");
    if (!tbody) return;
    const reviews = Storage.getReviews();

    tbody.innerHTML = reviews.map((r) => `
      <tr>
        <td>
          <div class="fw-bold">${r.author}</div>
          <span class="badge bg-secondary mt-1" style="font-size: 0.72rem; color: #DDD5CD !important;">${r.hairType}</span>
        </td>
        <td>${r.productName}</td>
        <td>⭐ ${r.rating}/5</td>
        <td class="small" style="max-width: 250px;">
          <strong>"${r.title}"</strong>: ${r.content}
        </td>
        <td>
          <span class="badge bg-success">Verified</span>
        </td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="AdminApp.deleteReview('${r.id}')">Remove</button>
        </td>
      </tr>
    `).join("");
  },

  renderTransformationsTable() {
    const tbody = document.getElementById("adminTransformationsTableBody");
    if (!tbody) return;
    const list = Storage.getTransformations();

    tbody.innerHTML = list.map((t) => `
      <tr>
        <td>
          <div class="d-flex align-items-center gap-2">
            <img src="${t.beforeImage}" class="rounded" style="width: 40px; height: 40px; object-fit: cover;">
            <span>→</span>
            <img src="${t.afterImage}" class="rounded" style="width: 40px; height: 40px; object-fit: cover;">
          </div>
        </td>
        <td class="fw-bold">${t.clientName}</td>
        <td>${t.hairType}</td>
        <td>${t.concern}</td>
        <td>${t.timeframe}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="AdminApp.deleteTransformation('${t.id}')">Delete</button>
        </td>
      </tr>
    `).join("");
  },

  renderQuizLogTable() {
    const tbody = document.getElementById("adminQuizLogTableBody");
    if (!tbody) return;
    const res = Storage.getQuizResult();

    if (!res) {
      tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4" style="color: #DDD5CD !important; font-size: 0.95rem;">🔬 No completed quizzes logged yet in this session. Take the hair diagnostic quiz to see live telemetry!</td></tr>`;
      return;
    }

    tbody.innerHTML = `
      <tr>
        <td class="font-monospace fw-bold" style="color: var(--accent-champagne) !important;">#${res.formulaCode}</td>
        <td class="fw-bold">${res.monogramName}</td>
        <td>${res.hairType}</td>
        <td>${res.scalpCondition}</td>
        <td><span class="badge bg-secondary" style="color: #FAF6F0 !important;">${res.primaryGoals.join(", ")}</span></td>
        <td>${res.date}</td>
      </tr>
    `;
  },

  openAddProductModal() {
    const modalEl = document.getElementById("addProductModal");
    if (modalEl && window.bootstrap) {
      new bootstrap.Modal(modalEl).show();
    }
  },

  saveNewProduct(e) {
    e.preventDefault();
    const name = document.getElementById("newProdName").value;
    const category = document.getElementById("newProdCategory").value;
    const price = parseFloat(document.getElementById("newProdPrice").value);
    const image = document.getElementById("newProdImage").value || "IMAGE/Product.jpg";
    const description = document.getElementById("newProdDesc").value;

    const newProduct = {
      id: `hrea-custom-${Date.now()}`,
      name: name,
      subtitle: `${category} Bespoke Formula`,
      category: category,
      price: price,
      rating: 5.0,
      reviewsCount: 1,
      badge: "New Release",
      hairType: ["Straight", "Wavy", "Curly", "Coily"],
      scalpType: ["Normal", "Dry"],
      concerns: ["Deep Hydration", "Frizz Control"],
      freeFrom: ["Sulfate-Free", "Silicone-Free", "Vegan"],
      image: image,
      gallery: [image],
      description: description,
      volume: "250 ml / 8.45 fl oz",
      scent: "Sandalwood & White Jasmine",
      benefits: ["Nourishes strands", "Enhances luster", "Protects barrier"],
      ingredientsKey: [
        { name: "Active Botanical Matrix", role: "Cellular Nourishment", origin: "France" }
      ],
      inStock: true,
      featured: true
    };

    const products = Storage.getProducts();
    products.unshift(newProduct);
    Storage.setProducts(products);

    bootstrap.Modal.getInstance(document.getElementById("addProductModal")).hide();
    this.renderProductsTable();
    App.toast(`Created new formulation: ${name}!`);
  },

  deleteProduct(id) {
    if (!confirm("Are you sure you want to remove this formulation from the catalog?")) return;
    let products = Storage.getProducts();
    products = products.filter(p => p.id !== id);
    Storage.setProducts(products);
    this.renderProductsTable();
    App.toast("Product removed from catalog.");
  },

  updateOrderStatus(orderId, newStatus) {
    let orders = Storage.getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = newStatus;
      Storage.setOrders(orders);
      App.toast(`Order ${orderId} updated to ${newStatus}`);
    }
  },

  deleteReview(id) {
    let reviews = Storage.getReviews();
    reviews = reviews.filter(r => r.id !== id);
    Storage.setReviews(reviews);
    this.renderReviewsTable();
    App.toast("Review removed.");
  },

  deleteTransformation(id) {
    let list = Storage.getTransformations();
    list = list.filter(t => t.id !== id);
    Storage.setTransformations(list);
    this.renderTransformationsTable();
    App.toast("Transformation removed from portfolio gallery.");
  },

  resetDemoData() {
    if (!confirm("Reset all catalog, reviews, orders, and diagnostic logs to default factory state?")) return;
    localStorage.removeItem("hairea_products");
    localStorage.removeItem("hairea_routines");
    localStorage.removeItem("hairea_transformations");
    localStorage.removeItem("hairea_reviews");
    localStorage.removeItem("hairea_cart");
    localStorage.removeItem("hairea_wishlist");
    localStorage.removeItem("hairea_quiz_result");
    localStorage.removeItem("hairea_orders");
    localStorage.removeItem("hairea_subscriptions");
    App.toast("Database restored to pristine editorial preset.");
    setTimeout(() => window.location.reload(), 800);
  },

  toggleSidebar() {
    const sidebar = document.getElementById("adminSidebar");
    const backdrop = document.getElementById("adminSidebarBackdrop");
    const isOpen = sidebar && sidebar.classList.contains("show");
    if (isOpen) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  },

  openSidebar() {
    const sidebar = document.getElementById("adminSidebar");
    const backdrop = document.getElementById("adminSidebarBackdrop");
    if (sidebar) sidebar.classList.add("show");
    if (backdrop) backdrop.classList.add("show");
    document.body.style.overflow = window.innerWidth < 992 ? "hidden" : "";
  },

  closeSidebar() {
    const sidebar = document.getElementById("adminSidebar");
    const backdrop = document.getElementById("adminSidebarBackdrop");
    if (sidebar) sidebar.classList.remove("show");
    if (backdrop) backdrop.classList.remove("show");
    document.body.style.overflow = "";
  },

  bindSidebar() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeSidebar();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        this.closeSidebar();
      }
    });
  }
};

window.AdminApp = AdminApp;

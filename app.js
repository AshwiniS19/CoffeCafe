/**
 * Aurora Specialty Coffee Roasters - Core Application Logic
 */

// Product Data Store
const PRODUCTS = [
  {
    id: 'ethiopia-yirgacheffe',
    category: 'beans',
    name: 'Highland Reserve: Ethiopia Yirgacheffe',
    origin: 'Gedeo Zone, Ethiopia',
    price: 24.50,
    badge: 'Single Origin',
    description: 'Heirloom variety cultivated at high altitudes. Delivers exceptional jasmine floral aromatics with vibrant citrus clarity and candied lemon finish.',
    flavorNotes: ['Jasmine Floral', 'Bergamot', 'Candied Meyer Lemon', 'White Peach'],
    altitude: '2,100 - 2,300m',
    process: 'Washed, Sun-dried on Raised African Beds',
    cuppingScore: '94.5',
    roastLevel: 'Light - Medium',
    tastingRadar: { acidity: 90, body: 65, sweetness: 85, floral: 95, roast: 35 }
  },
  {
    id: 'colombia-geisha',
    category: 'beans',
    name: 'El Paraiso: Colombia Pink Bourbon',
    origin: 'Huila, Colombia',
    price: 28.00,
    badge: 'Micro-Lot',
    description: 'An exceptional rare pink bourbon lot with thermal shock anaerobic fermentation. Unbelievable tropical nectar notes and silky champagne-like effervescence.',
    flavorNotes: ['Passionfruit', 'Wild Strawberry', 'Pink Guava', 'Raw Honey'],
    altitude: '1,950m',
    process: 'Double Anaerobic Thermal Shock',
    cuppingScore: '95.0',
    roastLevel: 'Light',
    tastingRadar: { acidity: 92, body: 70, sweetness: 95, floral: 88, roast: 28 }
  },
  {
    id: 'guatemala-antigua',
    category: 'beans',
    name: 'Volcanic Mist: Guatemala Antigua',
    origin: 'Antigua Valley, Guatemala',
    price: 22.00,
    badge: 'Estate Reserve',
    description: 'Shade-grown in volcanic soil surrounded by three volcanoes. Rich velvet body, refined cocoa nibs, warm spiced hazelnut, and dark plum sweetness.',
    flavorNotes: ['Dark Chocolate', 'Roasted Hazelnut', 'Black Plum', 'Cinnamon Bark'],
    altitude: '1,700m',
    process: 'Fully Washed & Patio Dried',
    cuppingScore: '92.5',
    roastLevel: 'Medium',
    tastingRadar: { acidity: 65, body: 88, sweetness: 82, floral: 45, roast: 60 }
  },
  {
    id: 'aurora-house-espresso',
    category: 'espresso',
    name: 'Velvet Meridian Espresso',
    origin: 'Ethiopia & Colombia Blend',
    price: 5.75,
    badge: 'Signature Bar',
    description: 'Double shot pulled on our customized Synesso MVP. Silky crema layered with salted caramel, dark roasted cacao, and a hint of wild blackberry.',
    flavorNotes: ['Salted Toffee', 'Dutch Cocoa', 'Blackberry Compote'],
    altitude: 'Mixed Microlots',
    process: 'Split Washed & Natural',
    cuppingScore: '93.0',
    roastLevel: 'Medium Roast',
    tastingRadar: { acidity: 68, body: 94, sweetness: 90, floral: 55, roast: 65 }
  },
  {
    id: 'golden-cortado',
    category: 'espresso',
    name: 'Bourbon Smoked Sea Salt Cortado',
    origin: 'Guatemala Antigua Single Origin',
    price: 6.25,
    badge: 'Barista Special',
    description: 'Equal parts textured steamed oat or whole milk and intense double espresso, infused with smoked oak stave bourbon essence and mineral sea salt flakes.',
    flavorNotes: ['Smoked Vanilla', 'Caramelized Malt', 'Cacao Truffle'],
    altitude: '1,700m',
    process: 'Specialty Infusion',
    cuppingScore: '93.5',
    roastLevel: 'Medium',
    tastingRadar: { acidity: 50, body: 95, sweetness: 88, floral: 30, roast: 62 }
  },
  {
    id: 'nitro-draft-cascara',
    category: 'cold',
    name: 'Nitro Cold Brew & Cascara Elixir',
    origin: 'Cold-steeped 20 Hours',
    price: 6.75,
    badge: 'On Tap',
    description: 'Poured nitrogen-charged for a Guinness-like creamy cascade head. Crafted with slow cold-extracted Colombia beans and organic coffee cherry tea.',
    flavorNotes: ['Black Cherry', 'Cranberry Tart', 'Molasses', 'Creamy Head'],
    altitude: 'Craft Cold Extract',
    process: 'Nitrogen Draft Conditioning',
    cuppingScore: '91.8',
    roastLevel: 'Light - Medium',
    tastingRadar: { acidity: 75, body: 80, sweetness: 85, floral: 70, roast: 40 }
  },
  {
    id: 'yuzu-espresso-tonic',
    category: 'cold',
    name: 'Kyoto Yuzu Botanical Tonic',
    origin: 'Cold Extracted Espresso',
    price: 7.25,
    badge: 'Summer Craft',
    description: 'Sparkling artisanal elderflower tonic layered with fresh Japanese yuzu reduction and an unhurried float of bright washed Ethiopian espresso.',
    flavorNotes: ['Yuzu Citrus', 'Elderflower', 'Sparkling Crisp', 'Jasmine'],
    altitude: 'Botanical Fusion',
    process: 'Layered Craft Mocktail',
    cuppingScore: '92.0',
    roastLevel: 'Light',
    tastingRadar: { acidity: 96, body: 40, sweetness: 75, floral: 92, roast: 25 }
  },
  {
    id: 'cardamom-bun',
    category: 'pastry',
    name: 'Swedish Kardemummabulle',
    origin: 'Daily In-House Bake',
    price: 5.50,
    badge: 'Artisanal Bake',
    description: 'Slow-proved enriched sourdough twisted with aromatic freshly cracked black cardamom pods, browned European butter, and pearl rock sugar.',
    flavorNotes: ['Cracked Cardamom', 'Brown Butter', 'Caramelized Sourdough'],
    altitude: 'Fresh Daily',
    process: 'Stone-Oven Baked',
    cuppingScore: 'House Favorite',
    roastLevel: 'Golden Crisp',
    tastingRadar: { acidity: 20, body: 90, sweetness: 85, floral: 60, roast: 50 }
  },
  {
    id: 'pain-au-chocolat',
    category: 'pastry',
    name: 'Valrhona 70% Dark Cruffin',
    origin: 'Normandy Butter Pastry',
    price: 6.00,
    badge: 'Freshly Laminated',
    description: 'A hybrid muffin-croissant laminated with cultured French butter, filled with single-origin Valrhona Guanaja dark chocolate ganache.',
    flavorNotes: ['Single-Origin Cocoa', 'Flaky Brioche', 'Toasted Hazelnut'],
    altitude: 'Baked at 6:00 AM',
    process: '72-Hour Lamination',
    cuppingScore: 'Chef Selection',
    roastLevel: 'Dark Golden',
    tastingRadar: { acidity: 25, body: 95, sweetness: 80, floral: 35, roast: 60 }
  }
];

// App State
let cart = [];
let currentFilter = 'all';

// DOM Selectors
const menuGrid = document.getElementById('menu-grid');
const filterButtons = document.querySelectorAll('.tab-btn');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartOpenBtn = document.getElementById('cart-open-btn');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartTotalEl = document.getElementById('cart-total');
const cartBadgeEl = document.getElementById('cart-badge');
const checkoutBtn = document.getElementById('checkout-btn');

// Modal Elements
const modalOverlay = document.getElementById('tasting-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalTitle = document.getElementById('modal-title');
const modalOrigin = document.getElementById('modal-origin');
const modalDesc = document.getElementById('modal-desc');
const modalAltitude = document.getElementById('modal-altitude');
const modalProcess = document.getElementById('modal-process');
const modalCupping = document.getElementById('modal-cupping');
const modalRoast = document.getElementById('modal-roast');
const modalRadarContainer = document.getElementById('modal-radar');
const modalAddCartBtn = document.getElementById('modal-add-cart-btn');
const modalGrindSelect = document.getElementById('modal-grind-select');

// Reservation and Forms
const reservationForm = document.getElementById('reservation-form');
const newsletterForm = document.getElementById('newsletter-form');
const toastContainer = document.getElementById('toast-container');
const liveStatusDot = document.getElementById('live-status-dot');
const liveStatusText = document.getElementById('live-status-text');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderMenu(PRODUCTS);
  setupFilters();
  setupCartDrawer();
  setupTastingModal();
  setupReservation();
  setupNewsletter();
  updateLiveHoursStatus();
  setupDateConstraints();
  setupMobileNav();
});

// Render Menu Cards
function renderMenu(items) {
  menuGrid.innerHTML = '';
  
  if (items.length === 0) {
    menuGrid.innerHTML = '<p class="text-muted" style="grid-column: 1/-1; text-align: center; padding: 3rem;">No offerings found in this category.</p>';
    return;
  }

  items.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);

    const flavorPillsHtml = product.flavorNotes
      .map(note => `<span class="flavor-pill">${note}</span>`)
      .join('');

    card.innerHTML = `
      <div class="product-top">
        <span class="product-badge">${product.badge}</span>
        <span class="product-price">$${product.price.toFixed(2)}</span>
      </div>
      <h3 class="product-title">${product.name}</h3>
      <div class="product-origin">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
        ${product.origin}
      </div>
      <p class="product-desc">${product.description}</p>
      <div class="flavor-pills">
        ${flavorPillsHtml}
      </div>
      <div class="product-actions">
        <button class="btn btn-outline-gold btn-sm view-profile-btn" data-id="${product.id}">
          Sensory Profile
        </button>
        <button class="btn btn-primary btn-sm add-cart-btn" data-id="${product.id}">
          Add to Order
        </button>
      </div>
    `;

    // Event listeners
    card.querySelector('.view-profile-btn').addEventListener('click', () => openTastingModal(product));
    card.querySelector('.add-cart-btn').addEventListener('click', () => {
      addToCart(product);
      showToast(`Added "${product.name}" to your order`);
    });

    menuGrid.appendChild(card);
  });
}

// Setup Filters
function setupFilters() {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      currentFilter = filter;

      if (filter === 'all') {
        renderMenu(PRODUCTS);
      } else {
        const filtered = PRODUCTS.filter(p => p.category === filter);
        renderMenu(filtered);
      }
    });
  });
}

// Modal Functions
let activeModalProduct = null;

function setupTastingModal() {
  modalCloseBtn.addEventListener('click', closeTastingModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeTastingModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeTastingModal();
      closeCartDrawer();
    }
  });

  modalAddCartBtn.addEventListener('click', () => {
    if (!activeModalProduct) return;
    const grind = modalGrindSelect ? modalGrindSelect.value : 'Default';
    addToCart(activeModalProduct, grind);
    showToast(`Added "${activeModalProduct.name}" (${grind}) to order`);
    closeTastingModal();
  });
}

function openTastingModal(product) {
  activeModalProduct = product;
  modalTitle.textContent = product.name;
  modalOrigin.textContent = product.origin;
  modalDesc.textContent = product.description;
  modalAltitude.textContent = product.altitude;
  modalProcess.textContent = product.process;
  modalCupping.textContent = product.cuppingScore;
  modalRoast.textContent = product.roastLevel;

  // Render radar bars
  const radar = product.tastingRadar;
  modalRadarContainer.innerHTML = `
    <div class="radar-bar-item">
      <div class="radar-bar-label">
        <span>Vibrant Acidity / Brightness</span>
        <span>${radar.acidity}%</span>
      </div>
      <div class="radar-track"><div class="radar-fill" style="width: ${radar.acidity}%"></div></div>
    </div>
    <div class="radar-bar-item">
      <div class="radar-bar-label">
        <span>Velvet Body & Mouthfeel</span>
        <span>${radar.body}%</span>
      </div>
      <div class="radar-track"><div class="radar-fill" style="width: ${radar.body}%"></div></div>
    </div>
    <div class="radar-bar-item">
      <div class="radar-bar-label">
        <span>Natural Sweetness & Caramel</span>
        <span>${radar.sweetness}%</span>
      </div>
      <div class="radar-track"><div class="radar-fill" style="width: ${radar.sweetness}%"></div></div>
    </div>
    <div class="radar-bar-item">
      <div class="radar-bar-label">
        <span>Aromatics & Floral Complexity</span>
        <span>${radar.floral}%</span>
      </div>
      <div class="radar-track"><div class="radar-fill" style="width: ${radar.floral}%"></div></div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTastingModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  activeModalProduct = null;
}

// Cart Drawer System
function setupCartDrawer() {
  cartOpenBtn.addEventListener('click', openCartDrawer);
  cartCloseBtn.addEventListener('click', closeCartDrawer);
  cartOverlay.addEventListener('click', closeCartDrawer);

  checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your order bag is currently empty.');
      return;
    }
    const orderRef = 'AURORA-' + Math.floor(100000 + Math.random() * 900000);
    showToast(`Order Confirmed! Ref #${orderRef}. Thank you for supporting ethical roasting.`);
    cart = [];
    updateCartUI();
    closeCartDrawer();
  });
}

function openCartDrawer() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function addToCart(product, grind = 'Whole Bean') {
  const cartKey = `${product.id}-${grind}`;
  const existingItem = cart.find(item => item.key === cartKey);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({
      key: cartKey,
      id: product.id,
      name: product.name,
      price: product.price,
      grind: grind,
      qty: 1
    });
  }

  updateCartUI();
}

function updateCartUI() {
  // Update total badge count
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadgeEl.textContent = totalCount;

  // Render items
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Your order bag is empty.</p>
        <p style="font-size: 0.85rem; margin-top: 0.5rem; color: var(--text-dim);">Explore our single-origin coffees and artisan offerings above.</p>
      </div>
    `;
    cartSubtotalEl.textContent = '$0.00';
    cartTotalEl.textContent = '$0.00';
    return;
  }

  cartItemsContainer.innerHTML = '';
  let subtotal = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="cart-item-meta">${item.grind}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
      </div>
      <div class="cart-item-ctrls">
        <button class="qty-btn dec-btn" data-key="${item.key}">−</button>
        <span class="qty-count">${item.qty}</span>
        <button class="qty-btn inc-btn" data-key="${item.key}">+</button>
        <button class="remove-btn" data-key="${item.key}" title="Remove item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `;

    // Controls
    itemEl.querySelector('.dec-btn').addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty -= 1;
      } else {
        cart = cart.filter(i => i.key !== item.key);
      }
      updateCartUI();
    });

    itemEl.querySelector('.inc-btn').addEventListener('click', () => {
      item.qty += 1;
      updateCartUI();
    });

    itemEl.querySelector('.remove-btn').addEventListener('click', () => {
      cart = cart.filter(i => i.key !== item.key);
      updateCartUI();
    });

    cartItemsContainer.appendChild(itemEl);
  });

  const estimatedTax = subtotal * 0.08875;
  const total = subtotal + estimatedTax;

  cartSubtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  cartTotalEl.textContent = `$${total.toFixed(2)}`;
}

// Reservation System
function setupReservation() {
  if (!reservationForm) return;

  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('res-name').value;
    const guests = document.getElementById('res-guests').value;
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const flight = document.getElementById('res-flight').value;

    const bookingRef = 'TGT-' + Math.floor(10000 + Math.random() * 90000);

    showToast(`Table confirmed! Reference #${bookingRef} for ${guests} guests on ${date} at ${time}. Welcome email sent to your inbox!`);
    reservationForm.reset();
  });
}

function setupDateConstraints() {
  const dateInput = document.getElementById('res-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }
}

// Newsletter
function setupNewsletter() {
  if (!newsletterForm) return;

  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
      showToast(`Welcome to the Reserve Club! A 15% promo code has been dispatched to ${emailInput.value}.`);
      emailInput.value = '';
    }
  });
}

// Live Hours Indicator
function updateLiveHoursStatus() {
  if (!liveStatusText || !liveStatusDot) return;

  const now = new Date();
  const currentHour = now.getHours();
  // Roastery opens at 7:00 AM (7) and closes at 7:00 PM (19)
  const isOpen = currentHour >= 7 && currentHour < 19;

  if (isOpen) {
    liveStatusDot.className = 'status-dot pulse';
    liveStatusDot.style.background = '#10b981';
    liveStatusDot.style.boxShadow = '0 0 10px #10b981';
    liveStatusText.textContent = 'Open Now • Roasting until 7:00 PM';
  } else {
    liveStatusDot.className = 'status-dot';
    liveStatusDot.style.background = '#f59e0b';
    liveStatusDot.style.boxShadow = '0 0 10px #f59e0b';
    liveStatusText.textContent = 'Closed Now • Opens 7:00 AM Tomorrow';
  }

  // Highlight current day in hours table
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = days[now.getDay()];
  const tableRows = document.querySelectorAll('.hours-table tr');
  tableRows.forEach(row => {
    const dayCell = row.querySelector('td:first-child');
    if (dayCell && dayCell.textContent.trim().startsWith(todayName)) {
      row.classList.add('today-row');
    }
  });
}

// Toast Notifications
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e5a964" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4200);
}

// Mobile Nav Toggle
function setupMobileNav() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'var(--bg-surface)';
        navLinks.style.padding = '1.5rem';
        navLinks.style.borderBottom = '1px solid var(--border-subtle)';
      }
    });
  }
}

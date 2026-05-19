/* ═══════════════════════════════════════════════════════════════
   Telecom Albania — Professional Improvements v1.0
   Implements 12 professional enhancements:
   1.  Favicon & Branding
   2.  Loading / Skeleton States
   3.  Empty States
   4.  Toast Notifications
   5.  404 Page (separate file)
   6.  Mobile Drawer Sidebar
   7.  Print / PDF for Invoice
   8.  Accessibility (aria, keyboard nav)
   9.  Real-time Form Validation
   10. Global Footer
   11. CSV Export
   12. Breadcrumbs
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   1. FAVICON — inject dynamically
───────────────────────────────────────────────────────── */
(function injectFavicon() {
  if (document.querySelector('link[rel="icon"]')) return;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="8" fill="#6366f1"/>
    <text x="50%" y="22" font-size="18" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="700">T</text>
  </svg>`;
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('link');
  link.rel = 'icon'; link.type = 'image/svg+xml'; link.href = url;
  document.head.appendChild(link);
})();

/* ─────────────────────────────────────────────────────────
   4. TOAST NOTIFICATION SYSTEM
   Usage: window.toast.show('Mesazhi', 'success'|'error'|'warning'|'info')
───────────────────────────────────────────────────────── */
window.toast = (() => {
  let container;

  function ensureContainer() {
    if (!container || !document.body.contains(container)) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.setAttribute('aria-live', 'polite');
      container.setAttribute('aria-atomic', 'false');
      document.body.appendChild(container);
    }
    return container;
  }

  function show(message, type = 'info', duration = 4000) {
    const c = ensureContainer();
    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
    const safeType = Object.prototype.hasOwnProperty.call(icons, type) ? type : 'info';
    const toast = document.createElement('div');
    toast.className = `tc-toast tc-toast--${safeType}`;
    toast.setAttribute('role', 'alert');

    const icon = document.createElement('span');
    icon.className = 'tc-toast__icon';
    icon.textContent = icons[safeType];

    const msg = document.createElement('span');
    msg.className = 'tc-toast__msg';
    msg.textContent = String(message ?? '');

    const close = document.createElement('button');
    close.className = 'tc-toast__close';
    close.type = 'button';
    close.setAttribute('aria-label', 'Mbyll njoftimin');
    close.textContent = '×';

    toast.append(icon, msg, close);
    c.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add('tc-toast--visible'));
    });

    const dismiss = () => {
      toast.classList.remove('tc-toast--visible');
      toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    };

    close.addEventListener('click', dismiss);
    if (duration > 0) setTimeout(dismiss, duration);
    return { dismiss };
  }

  return { show };
})();

/* ─────────────────────────────────────────────────────────
   2. SKELETON LOADER SYSTEM
───────────────────────────────────────────────────────── */
window.skeleton = (() => {
  function showTable(tbodyId, cols = 4, rows = 3) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;
    const colsHTML = Array(cols).fill(0).map(() =>
      `<td><div class="skeleton-line" style="width:${60 + Math.random()*30|0}%"></div></td>`
    ).join('');
    tbody.innerHTML = Array(rows).fill(0).map(() => `<tr>${colsHTML}</tr>`).join('');
  }

  function showCards(containerId, count = 4) {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = Array(count).fill(0).map(() =>
      `<div class="skeleton-card"><div class="skeleton-line w-40"></div><div class="skeleton-line w-70 mt-2"></div><div class="skeleton-line w-55 mt-2"></div></div>`
    ).join('');
  }

  function showStat(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = `<div class="skeleton-line w-50 skeleton-line--lg"></div>`;
  }

  return { showTable, showCards, showStat };
})();

/* ─────────────────────────────────────────────────────────
   3. EMPTY STATE HELPER
───────────────────────────────────────────────────────── */
window.emptyState = (() => {
  const messages = {
    bills:        { icon: '◈', title: 'Nuk keni fatura', desc: 'Faturat tuaja do të shfaqen këtu sapo të gjenerohen.' },
    transactions: { icon: '⇄', title: 'Asnjë transaksion', desc: 'Nuk keni ende transaksione të regjistruara.' },
    notifications:{ icon: '◉', title: 'Asnjë njoftim', desc: 'Do të njoftoheni këtu për ngjarje të rëndësishme.' },
    search:       { icon: '○', title: 'Asnjë rezultat', desc: 'Provo të ndryshosh filtrat ose fjalën kyçe.' },
    default:      { icon: '▣', title: 'Asnjë të dhënë', desc: 'Nuk u gjet asnjë rekord.' }
  };

  function render(type = 'default') {
    const m = messages[type] || messages.default;
    return `
      <tr><td colspan="99">
        <div class="tc-empty-state">
          <div class="tc-empty-state__icon">${m.icon}</div>
          <div class="tc-empty-state__title">${m.title}</div>
          <div class="tc-empty-state__desc">${m.desc}</div>
        </div>
      </td></tr>
    `;
  }

  function renderDiv(type = 'default') {
    const m = messages[type] || messages.default;
    return `
      <div class="tc-empty-state">
        <div class="tc-empty-state__icon">${m.icon}</div>
        <div class="tc-empty-state__title">${m.title}</div>
        <div class="tc-empty-state__desc">${m.desc}</div>
      </div>
    `;
  }

  return { render, renderDiv };
})();

/* ─────────────────────────────────────────────────────────
   6. MOBILE DRAWER SIDEBAR
───────────────────────────────────────────────────────── */
function initMobileDrawer() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  const mobileQuery = window.matchMedia('(max-width: 992px)');

  // Prevent duplicate toolbar / overlay elements on re-init
  document.querySelectorAll('.tc-drawer-overlay').forEach((node, index) => {
    if (index > 0) node.remove();
  });
  document.querySelectorAll('.tc-hamburger').forEach((node, index) => {
    if (index > 0) node.remove();
  });

  // Always reset sidebar state on page load (fixes stuck-open state across navigation)
  sidebar.classList.remove('tc-sidebar--open');
  document.body.style.overflow = '';

  let overlay = document.querySelector('.tc-drawer-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'tc-drawer-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
  }

  let hamburger = document.querySelector('.tc-hamburger');
  const topbar = document.querySelector('.topbar');
  if (!hamburger && topbar) {
    hamburger = document.createElement('button');
    hamburger.className = 'tc-hamburger';
    hamburger.type = 'button';
    hamburger.setAttribute('aria-label', 'Hap menunë');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.innerHTML = `<span></span><span></span><span></span>`;
    topbar.prepend(hamburger);
  }

  if (!hamburger) return;

  sidebar.id = 'tc-sidebar';
  hamburger.setAttribute('aria-controls', 'tc-sidebar');

  function setDrawerState(isOpen) {
    const shouldOpen = !!isOpen && mobileQuery.matches;
    sidebar.classList.toggle('tc-sidebar--open', shouldOpen);
    overlay.classList.toggle('tc-drawer-overlay--visible', shouldOpen);
    overlay.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');
    hamburger.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    hamburger.classList.toggle('is-open', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  }

  function openDrawer() {
    setDrawerState(true);
  }

  function closeDrawer() {
    setDrawerState(false);
  }

  function toggleDrawer(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    sidebar.classList.contains('tc-sidebar--open') ? closeDrawer() : openDrawer();
  }

  if (hamburger.dataset.drawerBound !== 'true') {
    hamburger.dataset.drawerBound = 'true';
    hamburger.addEventListener('click', toggleDrawer);
    hamburger.addEventListener('touchend', toggleDrawer, { passive: false });
  }

  if (overlay.dataset.drawerBound !== 'true') {
    overlay.dataset.drawerBound = 'true';
    overlay.addEventListener('click', closeDrawer);
    overlay.addEventListener('touchend', closeDrawer, { passive: true });
  }

  const closeOnNavigate = () => closeDrawer();
  sidebar.querySelectorAll('a, button').forEach(node => {
    if (node.dataset.drawerNavBound === 'true') return;
    node.dataset.drawerNavBound = 'true';
    node.addEventListener('click', closeOnNavigate, true);
    node.addEventListener('touchend', closeOnNavigate, { capture: true, passive: true });
  });

  const syncForViewport = () => {
    if (!mobileQuery.matches) closeDrawer();
  };

  if (!document.body.dataset.drawerViewportBound) {
    document.body.dataset.drawerViewportBound = 'true';
    mobileQuery.addEventListener('change', syncForViewport);
    window.addEventListener('resize', syncForViewport);
    window.addEventListener('pageshow', closeDrawer);
    window.addEventListener('pagehide', closeDrawer);
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
  });

  closeDrawer();
}

/* ─────────────────────────────────────────────────────────
   7. PRINT / PDF FOR INVOICE
───────────────────────────────────────────────────────── */
function initInvoicePrint() {
  const printBtn = document.getElementById('printInvoiceBtn');
  if (!printBtn) return;

  printBtn.innerHTML = '🖨 Printo / PDF';
  if (printBtn.dataset.printBound === 'true') return;
  printBtn.dataset.printBound = 'true';
  printBtn.addEventListener('click', () => {
    window.toast?.show('Duke përgatitur faturën për printim…', 'info', 2000);
    setTimeout(() => window.print(), 600);
  });
}

/* ─────────────────────────────────────────────────────────
   8. ACCESSIBILITY — aria labels, keyboard nav
───────────────────────────────────────────────────────── */
function initAccessibility() {
  // Skip-to-content link
  if (!document.getElementById('tc-skip-link')) {
    const skip = document.createElement('a');
    skip.id = 'tc-skip-link';
    skip.href = '#main-content';
    skip.textContent = 'Kalo te përmbajtja kryesore';
    skip.className = 'tc-skip-link';
    document.body.prepend(skip);
  }

  // Tag main
  const main = document.querySelector('.dashboard-main, main');
  if (main && !main.id) main.id = 'main-content';
  if (main) main.setAttribute('tabindex', '-1');

  // Role for nav
  const sidebar = document.querySelector('.sidebar-nav');
  if (sidebar) {
    sidebar.setAttribute('role', 'navigation');
    sidebar.setAttribute('aria-label', 'Navigimi kryesor');
  }

  // Status badges — add role
  document.querySelectorAll('.status-badge').forEach(badge => {
    badge.setAttribute('role', 'status');
    badge.setAttribute('aria-label', `Statusi: ${badge.textContent.trim()}`);
  });

  // Tables — add scope
  document.querySelectorAll('th').forEach(th => {
    if (!th.hasAttribute('scope')) th.setAttribute('scope', 'col');
  });

  // Buttons without text
  document.querySelectorAll('button:not([aria-label])').forEach(btn => {
    if (!btn.textContent.trim()) {
      btn.setAttribute('aria-label', 'Buton veprimi');
    }
  });

  // Form labels check
  document.querySelectorAll('input, select, textarea').forEach(field => {
    if (field.id && !document.querySelector(`label[for="${field.id}"]`)) {
      if (field.placeholder) {
        field.setAttribute('aria-label', field.placeholder);
      }
    }
  });
}

/* ─────────────────────────────────────────────────────────
   9. ENHANCED REAL-TIME FORM VALIDATION (visual indicator)
───────────────────────────────────────────────────────── */
function initEnhancedValidation() {
  const forms = document.querySelectorAll('.needs-validation-custom');
  forms.forEach(form => {
    const fields = [...form.querySelectorAll('input[required], select[required], textarea[required]')];

    fields.forEach(field => {
      const syncFieldState = () => {
        const container = field.closest('.col-12, .col-md-12, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .mb-3') || field.closest("[class*='col-']");
        if (!container) return;

        let isValid = false;
        if (typeof validateField === 'function') {
          isValid = validateField(field);
        } else {
          isValid = field.checkValidity() && String(field.value || '').trim() !== '';
        }

        if (!String(field.value || '').trim() && field.type !== 'checkbox') {
          isValid = false;
        }

        if (['loginEmail', 'loginPassword'].includes(field.id)) isValid = false;

         field.classList.toggle('is-valid-field', isValid);
      };

      field.addEventListener('blur', syncFieldState);
      field.addEventListener('input', syncFieldState);
      field.addEventListener('change', syncFieldState);

      // Password strength for password fields
      if ((field.id === 'registerPassword' || field.id === 'newPassword') && field.dataset.passwordStrengthBound !== 'true') {
        field.dataset.passwordStrengthBound = 'true';
        const indicator = document.createElement('div');
        indicator.className = 'tc-password-strength';
        field.parentElement?.appendChild(indicator);

        field.addEventListener('input', () => {
          const v = field.value;
          const score = [v.length >= 8, /[a-z]/.test(v), /[A-Z]/.test(v), /[0-9]/.test(v)].filter(Boolean).length;
          const labels = ['', 'Dobët', 'Mesatare', 'Mirë', 'Shumë mirë'];
          const classes = ['', 'weak', 'fair', 'good', 'strong'];
          indicator.innerHTML = v.length > 0
            ? `<div class="tc-ps-bar"><div class="tc-ps-fill tc-ps-fill--${classes[score]}" style="width:${score * 25}%"></div></div><span>${labels[score]}</span>`
            : '';
        });
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────
   10. GLOBAL FOOTER
───────────────────────────────────────────────────────── */
function injectFooter() {
  // Only on non-dashboard pages (public pages)
  const isDashboard = document.querySelector('.dashboard-layout');
  if (isDashboard) return;

  const existing = document.querySelector('.tc-footer, .site-footer');
  if (existing) return;

  const footer = document.createElement('footer');
  footer.className = 'tc-footer';
  footer.innerHTML = `
    <div class="tc-footer__inner">
      <div class="tc-footer__brand">
        <span class="tc-footer__logo">Telecom Albania</span>
        <span class="tc-footer__tagline">Lidhja që të mban gjithmonë aktiv.</span>
      </div>
      <nav class="tc-footer__links" aria-label="Footer navigim">
        <a href="index.html">Kreu</a>
        <a href="about-platform.html">Rreth nesh</a>
        <a href="customer-service.html">Mbështetja</a>
      </nav>
      <div class="tc-footer__copy">
        &copy; ${new Date().getFullYear()} Telecom Albania. Të gjitha të drejtat të rezervuara.
      </div>
    </div>
  `;
  document.body.appendChild(footer);
}

/* ─────────────────────────────────────────────────────────
   11. CSV EXPORT
───────────────────────────────────────────────────────── */
window.exportCSV = function(rows, columns, filename = 'export.csv') {
  if (!rows || rows.length === 0) {
    window.toast.show('Nuk ka të dhëna për eksportim.', 'warning');
    return;
  }

  const header = columns.map(c => `"${c.label}"`).join(',');
  const body = rows.map(row =>
    columns.map(c => {
      const val = typeof c.key === 'function' ? c.key(row) : (row[c.key] ?? '');
      return `"${String(val).replace(/"/g, '""')}"`;
    }).join(',')
  ).join('\n');

  const csv = '\uFEFF' + header + '\n' + body; // BOM for Excel
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  window.toast.show(`"${filename}" u eksportua me sukses.`, 'success');
};

function injectCSVButtons() {
  const page = window.location.pathname.split('/').pop();

  // Transactions page
  if (page === 'transactions.html') {
    const topbar = document.querySelector('.topbar');
    if (topbar && !document.getElementById('csvExportBtn')) {
      const topbarActions = topbar.querySelector('.topbar-actions') || (() => {
        const div = document.createElement('div');
        div.className = 'topbar-actions';
        topbar.appendChild(div);
        return div;
      })();
      const btn = document.createElement('button');
      btn.id = 'csvExportBtn';
      btn.type = 'button';
      btn.className = 'btn btn-outline-primary';
      btn.innerHTML = '⬇ Eksporto CSV';
      btn.addEventListener('click', () => {
        const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
        const rows = user
          ? (typeof telecomData !== 'undefined' ? telecomData.transactions.filter(t => t.userEmail === user.email) : [])
          : [];
        window.exportCSV(rows, [
          { label: 'ID', key: 'id' },
          { label: 'Data', key: 'date' },
          { label: 'Metoda', key: 'method' },
          { label: 'Shuma (ALL)', key: 'amount' },
          { label: 'Statusi', key: 'status' }
        ], `transaksionet_${new Date().toISOString().slice(0,10)}.csv`);
      });
      topbarActions.appendChild(btn);
    }
  }

  // Bills page
  if (page === 'bills.html') {
    const topbar = document.querySelector('.topbar');
    if (topbar && !document.getElementById('billsCSVBtn')) {
      const topbarActions = topbar.querySelector('.topbar-actions') || (() => {
        const div = document.createElement('div'); div.className = 'topbar-actions'; topbar.appendChild(div); return div;
      })();
      const btn = document.createElement('button');
      btn.id = 'billsCSVBtn';
      btn.type = 'button';
      btn.className = 'btn btn-outline-primary';
      btn.innerHTML = '⬇ Eksporto CSV';
      btn.addEventListener('click', () => {
        const user = typeof getCurrentUser === 'function' ? getCurrentUser() : null;
        const rows = user
          ? (typeof telecomData !== 'undefined' ? telecomData.bills.filter(b => b.userEmail === user.email) : [])
          : [];
        window.exportCSV(rows, [
          { label: 'Nr. Faturës', key: 'id' },
          { label: 'Shërbimi', key: 'service' },
          { label: 'Data', key: 'date' },
          { label: 'Afati', key: 'dueDate' },
          { label: 'Shuma (ALL)', key: 'amount' },
          { label: 'Statusi', key: 'status' }
        ], `faturat_${new Date().toISOString().slice(0,10)}.csv`);
      });
      topbarActions.appendChild(btn);
    }
  }
}

/* ─────────────────────────────────────────────────────────
   12. BREADCRUMBS
───────────────────────────────────────────────────────── */
function injectBreadcrumbs() {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const breadcrumbMap = {
    'dashboard.html':      [{ label: 'Dashboard', href: null }],
    'bills.html':          [{ label: 'Dashboard', href: 'dashboard.html' }, { label: 'Faturat', href: null }],
    'invoice-details.html':[{ label: 'Dashboard', href: 'dashboard.html' }, { label: 'Faturat', href: 'bills.html' }, { label: 'Detajet e Faturës', href: null }],
    'payments.html':       [{ label: 'Dashboard', href: 'dashboard.html' }, { label: 'Pagesat', href: null }],
    'transactions.html':   [{ label: 'Dashboard', href: 'dashboard.html' }, { label: 'Transaksionet', href: null }],
    'notifications.html':  [{ label: 'Dashboard', href: 'dashboard.html' }, { label: 'Njoftimet', href: null }],
    'services.html':       [{ label: 'Dashboard', href: 'dashboard.html' }, { label: 'Shërbimet', href: null }],
    'profile.html':        [{ label: 'Dashboard', href: 'dashboard.html' }, { label: 'Profili', href: null }],
    'admin.html':          [{ label: 'Dashboard', href: 'dashboard.html' }, { label: 'Admin', href: null }],
    'customer-service.html':[{ label: 'Kreu', href: 'index.html' }, { label: 'Customer Service', href: null }],
    'about-platform.html': [{ label: 'Kreu', href: 'index.html' }, { label: 'Rreth Platformës', href: null }],
  };

  const crumbs = breadcrumbMap[page];
  if (!crumbs || crumbs.length < 2) return;

  const topbar = document.querySelector('.topbar > div:first-child');
  if (!topbar || topbar.querySelector('.tc-breadcrumb')) return;

  const nav = document.createElement('nav');
  nav.className = 'tc-breadcrumb';
  nav.setAttribute('aria-label', 'Navigimi breadcrumb');

  nav.innerHTML = crumbs.map((crumb, i) => {
    const isLast = i === crumbs.length - 1;
    if (isLast) return `<span class="tc-breadcrumb__item tc-breadcrumb__item--active" aria-current="page">${crumb.label}</span>`;
    return `<a class="tc-breadcrumb__item" href="${crumb.href}">${crumb.label}</a><span class="tc-breadcrumb__sep" aria-hidden="true">›</span>`;
  }).join('');

  // Insert before the h2
  const h2 = topbar.querySelector('h2, h1');
  if (h2) topbar.insertBefore(nav, h2);
  else topbar.appendChild(nav);
}

/* ─────────────────────────────────────────────────────────
   PATCH: intercept alert() calls → toast
───────────────────────────────────────────────────────── */
(function patchAlert() {
  const _native = window.alert.bind(window);
  window.alert = function(msg) {
    if (typeof msg === 'string' && msg.length < 300) {
      const type = /error|gabim|dështu/i.test(msg) ? 'error'
                 : /sukses|paguar|regjistruar|u krye/i.test(msg) ? 'success'
                 : /kujdes|paralajmërim|afat/i.test(msg) ? 'warning'
                 : 'info';
      window.toast.show(msg, type);
    } else {
      _native(msg);
    }
  };
})();

/* ─────────────────────────────────────────────────────────
   INIT — run after DOM is ready
───────────────────────────────────────────────────────── */


/* ─────────────────────────────────────────────────────────
   15. KEYBOARD SHORTCUTS
───────────────────────────────────────────────────────── */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', e => {
    // Ctrl+/ or Cmd+/ → focus quick search
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
      e.preventDefault();
      const search = document.getElementById('dashboardQuickSearch')
        || document.getElementById('billSearchInput')
        || document.getElementById('transactionSearchInput')
        || document.getElementById('adminCustomerSearch');
      if (search) {
        search.focus();
        search.select();
        window.toast?.show('Shortcut: Ctrl+/ → Kërkim i shpejtë', 'info', 1500);
      }
    }

    // Escape → close any open simple modals
    if (e.key === 'Escape') {
      document.querySelectorAll('.simple-modal-overlay.active').forEach(m => {
        m.classList.remove('active');
      });
    }
  });
}

/* ─────────────────────────────────────────────────────────
   13. SIDEBAR USER INFO — populate logged-in user name
───────────────────────────────────────────────────────── */
function initSidebarUserInfo() {
  const nameEl = document.getElementById('sidebarUserName');
  const roleEl = document.getElementById('sidebarUserRole');
  if (!nameEl) return;

  try {
    const localAuth  = JSON.parse(localStorage.getItem('telecomAuth') || 'null');
    const sessionAuth = JSON.parse(sessionStorage.getItem('telecomAuthSession') || 'null');
    const auth = localAuth || sessionAuth;
    if (!auth || !auth.isLoggedIn) return;

    const users = JSON.parse(localStorage.getItem('telecomUsers') || '[]');
    const user = users.find(u => u.email && u.email.toLowerCase() === auth.email.toLowerCase());
    if (!user) return;

    const brandCase = value => String(value || '').replace(/telecom/ig, 'TeleCom');
    const fullName = `${brandCase(user.profile?.firstName || '')} ${brandCase(user.profile?.lastName || '')}`.trim() || auth.email;
    nameEl.textContent = fullName;
    if (roleEl) {
      roleEl.textContent = auth.role === 'admin' ? '⚙ Admin Aktiv' : '◉ Klient Aktiv';
      roleEl.classList.add('active-account-badge');
    }
  } catch(e) {}
}

/* ─────────────────────────────────────────────────────────
   14. NOTIFICATION BADGE — show unread count in sidebar
───────────────────────────────────────────────────────── */
function initNotificationBadge() {
  const notifLink = document.querySelector('.sidebar-nav a[href="notifications.html"]');
  if (!notifLink) return;

  try {
    const localAuth = JSON.parse(localStorage.getItem('telecomAuth') || 'null');
    const sessionAuth = JSON.parse(sessionStorage.getItem('telecomAuthSession') || 'null');
    const auth = localAuth || sessionAuth;
    if (!auth || !auth.email) return;

    const readKey = `telecomReadNotifs_${auth.email}`;
    const readIds = JSON.parse(localStorage.getItem(readKey) || '[]');

    let unreadCount = 0;
    if (typeof telecomData !== 'undefined' && Array.isArray(telecomData.notifications)) {
      unreadCount = telecomData.notifications.filter(item => {
        const allowed = item.audience === 'all' || item.userEmail === auth.email || auth.role === 'admin';
        return allowed && !readIds.includes(item.id);
      }).length;
    }

    let dot = document.getElementById('notifBadgeDot');
    if (!dot) {
      dot = document.createElement('span');
      dot.id = 'notifBadgeDot';
      dot.style.cssText = 'display:none;width:7px;height:7px;background:#f87171;border-radius:50%;margin-left:auto;flex-shrink:0;animation:pulse-dot 2s infinite';
      notifLink.appendChild(dot);
    }

    const onNotificationsPage = window.location.pathname.includes('notifications');
    dot.style.display = unreadCount > 0 && !onNotificationsPage ? 'inline-block' : 'none';
  } catch(e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  injectFooter();
  injectBreadcrumbs();
  initMobileDrawer();
  initInvoicePrint();
  initEnhancedValidation();
  initAccessibility();
  injectCSVButtons();
  initSidebarUserInfo();
  initNotificationBadge();
  initKeyboardShortcuts();
});

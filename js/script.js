const DEFAULT_USERS = [
  {
    email: "admin@telecomplus.al",
    password: "admin12345",
    role: "admin",
    status: "Aktiv",
    profile: {
      firstName: "Admin",
      lastName: "TeleCom",
      phone: "+355 69 000 0001",
      address: "Tiranë, Albania",
      plan: "Business Fiber Pro",
      customerType: "Business"
    }
  },
  {
    email: "arber.kola@telecomplus.al",
    password: "user12345",
    role: "user",
    status: "Aktiv",
    profile: {
      firstName: "Arbër",
      lastName: "Kola",
      phone: "+355 69 245 7812",
      address: "Rruga e Kavajës, Tiranë",
      plan: "Internet Unlimited 300 Mbps",
      customerType: "Individual"
    }
  }
];

const APP_STORAGE = {
  auth: "telecomAuth",
  authSession: "telecomAuthSession",
  users: "telecomUsers",
  resetAllowed: "allowResetPassword",
  resetEmail: "pendingResetEmail",
  theme: "telecomTheme",
  flash: "telecomFlashMessage"
};

const telecomStoreData = {
  Tirane: {
    cityMapQuery: "ONE Albania stores in Tirane, Albania",
    stores: [
      {
        name: "Telecom Albania - Square21",
        address: "Rr. Muhedin Llagami, Kompleksi Square21, Tiranë",
        mapQuery: "ONE Albania Square21, Muhedin Llagami, Kompleksi Square21, Tirana, Albania"
      },
      {
        name: "Telecom Albania - TEG",
        address: "Tirana East Gate (TEG), Tiranë",
        mapQuery: "ONE Albania, Tirana East Gate, Tirana 1045, Albania"
      },
      {
        name: "Telecom Albania - Laprakë",
        address: "Laprakë, Tiranë",
        mapQuery: "One Albania Lapraka Office, Tirana, Albania"
      }
    ]
  },
  Durres: {
    cityMapQuery: "ONE Albania stores in Durres, Albania",
    stores: [
      {
        name: "Telecom Albania - Aleksandër Goga",
        address: "Lagjja nr. 6, Rruga Aleksandër Goga, Durrës",
        mapQuery: "ONE Albania, Lagjja nr.6, Rruga Aleksander Goga, Durres, Albania"
      },
      {
        name: "Telecom Albania - Rruga Dëshmorët",
        address: "Lagjja nr. 12, Rruga Dëshmorët, Durrës",
        mapQuery: "ONE Albania, Lagjja nr.12, Rruga Deshmoret, Durres, Albania"
      },
      {
        name: "Telecom Albania - Plazh",
        address: "Lagjja nr. 13, Rruga Pavarësia, Durrës",
        mapQuery: "ONE Albania, Lagjja nr. 13, Rruga Pavaresia, Durres, Albania"
      }
    ]
  },
  Vlore: {
    cityMapQuery: "ONE Albania Vlore Albania&ll=40.4664,19.4897",
    stores: [
      {
        name: "Telecom Albania - Bulevardi Skele",
        address: "Lagjia Lef Sallata, Bulevardi Skele, Vlorë",
        mapQuery: "ONE Albania, Lagjia Lef Sallata, Bulevardi Skele, Vlore, Albania"
      },
      {
        name: "Telecom Albania - Aranit Serbi",
        address: "Lagjia 29 Nëntori, Rruga Aranit Serbi, Vlorë",
        mapQuery: "ONE Albania, Lagjia 29 Nentori, Rruga Aranit Serbi, Vlore, Albania"
      },
      {
        name: "Telecom Albania - Çole",
        address: "Lagjia Çole, Rruga Qeriba Derri, Vlorë",
        mapQuery: "ONE Albania, Lagjia Cole, Rruga Qeriba Derri, Vlore, Albania"
      }
    ]
  },
  Shkoder: {
    cityMapQuery: "ONE Albania stores in Shkoder, Albania",
    stores: [
      {
        name: "Telecom Albania - Rruga Europa",
        address: "Lagjja Partizani, Rruga Europa, Shkodër",
        mapQuery: "ONE Albania, Lagjja Partizani, Rruga Europa, Shkoder, Albania"
      },
      {
        name: "Telecom Albania - Kole Heqimi",
        address: "Lagjia Skënderbeg, Rr. Kole Heqimi 56, Shkodër",
        mapQuery: "ONE Albania, Lagjia Skenderbeg, Rruga Kole Heqimi 56, Shkoder, Albania"
      }
    ]
  },
  Elbasan: {
    cityMapQuery: "ONE Albania stores in Elbasan, Albania",
    stores: [
      {
        name: "Telecom Albania - Emin Matraxhiu",
        address: "Lagjja Emin Matraxhiu, Elbasan",
        mapQuery: "One Corner Elbasan, Lagjja Emin Matraxhiu, Elbasan, Albania"
      },
      {
        name: "Telecom Albania - Bulevardi Qemal Stafa",
        address: "Lagjia Kongresi i Elbasanit, Bulevardi Qemal Stafa, Elbasan",
        mapQuery: "ONE Albania, Lagjia Kongresi i Elbasanit, Bulevardi Qemal Stafa, Elbasan, Albania"
      },
      {
        name: "Telecom Albania - 11 Nëntori",
        address: "Lagjja Luigj Gurakuqi, Rruga 11 Nëntori, Elbasan",
        mapQuery: "ONE Albania, Lagjja Luigj Gurakuqi, Rruga 11 Nentori, Elbasan, Albania"
      }
    ]
  }
};

const TELECOM_SERVICES = [
  {
    id: "svc-000",
    name: "No active plan",
    category: "Free",
    price: 0,
    speed: "-",
    data: "-",
    features: ["Pa pagesë", "Akses bazë në platformë", "Zgjidh një paketë kur të jesh gati"]
  },
  {
    id: "svc-001",
    name: "Internet Unlimited 300 Mbps",
    category: "Internet",
    price: 2700,
    speed: "300 Mbps",
    data: "Unlimited",
    features: ["Router i përfshirë", "Mbështetje 24/7", "Instalim standard"]
  },
  {
    id: "svc-002",
    name: "Mobile Premium 25GB",
    category: "Mobile",
    price: 1500,
    speed: "5G Ready",
    data: "25 GB",
    features: ["Telefonata kombëtare", "SMS pa limit", "Roaming bazë"]
  },
  {
    id: "svc-003",
    name: "TV + Internet Family",
    category: "Combo",
    price: 2400,
    speed: "200 Mbps",
    data: "Combo",
    features: ["120+ kanale", "Internet në shtëpi", "Kontroll prindëror"]
  },
  {
    id: "svc-004",
    name: "Business Fiber Pro",
    category: "Business",
    price: 4800,
    speed: "1 Gbps",
    data: "Business",
    features: ["IP statike", "SLA prioritar", "Mbështetje premium"]
  }
];

const DEFAULT_TELECOM_DATA = {
  bills: [
    {
      id: "FAT-2026-041",
      service: "Internet Unlimited 300 Mbps",
      date: "12/04/2026",
      dueDate: "20/04/2026",
      amount: 2700,
      status: "Paguar",
      customer: "Arbër Kola",
      userEmail: "arber.kola@telecomplus.al",
      items: [
        { description: "Abonim interneti mujor", qty: 1, price: 2400 },
        { description: "TVSH dhe tarifa shërbimi", qty: 1, price: 300 }
      ]
    },
    {
      id: "FAT-2026-042",
      service: "Mobile Premium 25GB",
      date: "14/04/2026",
      dueDate: "22/04/2026",
      amount: 1500,
      status: "Papaguar",
      customer: "Arbër Kola",
      userEmail: "arber.kola@telecomplus.al",
      items: [
        { description: "Abonim mobil mujor", qty: 1, price: 1300 },
        { description: "TVSH dhe tarifa shërbimi", qty: 1, price: 200 }
      ]
    },
    {
      id: "FAT-2026-043",
      service: "TV + Internet Family",
      date: "15/04/2026",
      dueDate: "18/04/2026",
      amount: 2400,
      status: "Vonuar",
      customer: "Arbër Kola",
      userEmail: "arber.kola@telecomplus.al",
      items: [
        { description: "Paketë TV + Internet", qty: 1, price: 2100 },
        { description: "TVSH dhe tarifa shërbimi", qty: 1, price: 300 }
      ]
    },
    {
      id: "FAT-2026-032",
      service: "Internet Unlimited 300 Mbps",
      date: "01/03/2026",
      dueDate: "08/03/2026",
      amount: 2700,
      status: "Paguar",
      customer: "Arbër Kola",
      userEmail: "arber.kola@telecomplus.al",
      items: [
        { description: "Abonim interneti mujor", qty: 1, price: 2400 },
        { description: "TVSH dhe tarifa shërbimi", qty: 1, price: 300 }
      ]
    }
  ],
  transactions: [
    { id: "TRX-2026-1001", date: "05/04/2026", method: "Kartë Debiti", amount: 2700, status: "Sukses", userEmail: "arber.kola@telecomplus.al" },
    { id: "TRX-2026-1002", date: "21/03/2026", method: "Kartë Krediti", amount: 1800, status: "Sukses", userEmail: "arber.kola@telecomplus.al" },
    { id: "TRX-2026-1003", date: "28/02/2026", method: "Transfer Bankar", amount: 2500, status: "Në proces", userEmail: "arber.kola@telecomplus.al" },
    { id: "TRX-2026-1004", date: "15/02/2026", method: "Kartë Debiti", amount: 1700, status: "Dështuar", userEmail: "arber.kola@telecomplus.al" }
  ],
  notifications: [
    {
      id: "NTF-001",
      title: "Afati i pagesës po afron",
      message: "Fatura FAT-2026-043 skadon pas 3 ditësh. Rekomandohet kryerja e pagesës për të shmangur vonesat.",
      type: "billing",
      date: "16/04/2026",
      audience: "user",
      userEmail: "arber.kola@telecomplus.al"
    },
    {
      id: "NTF-002",
      title: "Pagesa u regjistrua me sukses",
      message: "Transaksioni TRX-2026-1001 është regjistruar me sukses dhe u shtua në historik.",
      type: "payment",
      date: "05/04/2026",
      audience: "user",
      userEmail: "arber.kola@telecomplus.al"
    },
    {
      id: "NTF-003",
      title: "Mirëmbajtje e planifikuar",
      message: "Do të ketë ndërhyrje të planifikuar në rrjet të dielën nga ora 02:00 deri në 04:00.",
      type: "system",
      date: "14/04/2026",
      audience: "all"
    },
    {
      id: "NTF-004",
      title: "Paketa është rinovuar",
      message: "Paketa Mobile Premium 25GB u rinovua automatikisht në fund të muajit të kaluar.",
      type: "service",
      date: "01/04/2026",
      audience: "user",
      userEmail: "arber.kola@telecomplus.al"
    }
  ],
  faqs: [
    "Kur skadon fatura ime?",
    "Si mund ta kryej pagesën online?",
    "Si mund ta ndryshoj paketën?",
    "Ku ndodhet dyqani më i afërt?",
    "Kam problem me internetin."
  ]
};

const DATA_STORAGE_KEY = "telecomRuntimeData";

function cloneDeep(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadTelecomData() {
  const fallback = cloneDeep(DEFAULT_TELECOM_DATA);
  try {
    const stored = JSON.parse(localStorage.getItem(DATA_STORAGE_KEY) || "null");
    if (!stored || typeof stored !== "object") return fallback;

    if (Array.isArray(stored.bills)) fallback.bills = stored.bills;
    if (Array.isArray(stored.transactions)) fallback.transactions = stored.transactions;
    if (Array.isArray(stored.notifications)) fallback.notifications = stored.notifications;
    if (Array.isArray(stored.faqs)) fallback.faqs = stored.faqs;
    return fallback;
  } catch {
    return fallback;
  }
}

const telecomData = loadTelecomData();

function persistTelecomData() {
  try {
    localStorage.setItem(DATA_STORAGE_KEY, JSON.stringify({
      bills: telecomData.bills,
      transactions: telecomData.transactions,
      notifications: telecomData.notifications,
      faqs: telecomData.faqs
    }));
  } catch {}
}


const PROTECTED_PAGES = [
  "dashboard.html",
  "bills.html",
  "payments.html",
  "transactions.html",
  "profile.html",
  "admin.html",
  "notifications.html",
  "services.html",
  "invoice-details.html"
];

const ADMIN_ONLY_PAGES = ["admin.html"];
const GUEST_ONLY_PAGES = ["login.html", "register.html", "forgot-password.html", "reset-password.html"];

let currentSupportChannel = "employee";
let currentManagedUserEmail = null;
let adminCustomerModalInstance = null;
let broadcastModalInstance = null;

function seedUsers() {
  if (!localStorage.getItem(APP_STORAGE.users)) {
    localStorage.setItem(APP_STORAGE.users, JSON.stringify(DEFAULT_USERS));
  }
}

function getUsers() {
  seedUsers();
  try {
    return JSON.parse(localStorage.getItem(APP_STORAGE.users)) || [];
  } catch {
    return [...DEFAULT_USERS];
  }
}

function saveUsers(users) {
  localStorage.setItem(APP_STORAGE.users, JSON.stringify(users));
}

function findUserByEmail(email) {
  return getUsers().find(user => user.email.toLowerCase() === String(email).toLowerCase()) || null;
}

function updateUser(email, patch) {
  const users = getUsers();
  const idx = users.findIndex(user => user.email.toLowerCase() === String(email).toLowerCase());
  if (idx === -1) return;
  users[idx] = {
    ...users[idx],
    ...patch,
    profile: {
      ...users[idx].profile,
      ...(patch.profile || {})
    }
  };
  saveUsers(users);
}

function emailExistsForAnotherUser(email, currentEmail = "") {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const normalizedCurrent = String(currentEmail || "").trim().toLowerCase();
  return getUsers().some(user => {
    const userEmail = String(user.email || "").trim().toLowerCase();
    return userEmail === normalizedEmail && userEmail !== normalizedCurrent;
  });
}

function updateLinkedUserEmail(oldEmail, newEmail) {
  const previousEmail = String(oldEmail || "").trim().toLowerCase();
  const updatedEmail = String(newEmail || "").trim().toLowerCase();
  if (!previousEmail || !updatedEmail || previousEmail === updatedEmail) return;

  telecomData.bills.forEach(bill => {
    if (String(bill.userEmail || "").toLowerCase() === previousEmail) {
      bill.userEmail = updatedEmail;
    }
  });

  telecomData.transactions.forEach(transaction => {
    if (String(transaction.userEmail || "").toLowerCase() === previousEmail) {
      transaction.userEmail = updatedEmail;
    }
  });

  telecomData.notifications.forEach(notification => {
    if (String(notification.userEmail || "").toLowerCase() === previousEmail) {
      notification.userEmail = updatedEmail;
    }
  });

  persistTelecomData();
}

function setFlashMessage(message, type = "info") {
  try {
    sessionStorage.setItem(APP_STORAGE.flash, JSON.stringify({ message, type }));
  } catch {}
}

function consumeFlashMessage() {
  try {
    const raw = sessionStorage.getItem(APP_STORAGE.flash);
    if (!raw) return;
    sessionStorage.removeItem(APP_STORAGE.flash);
    const parsed = JSON.parse(raw);
    if (parsed?.message && window.toast) {
      window.toast.show(parsed.message, parsed.type || "info");
    }
  } catch {}
}

function deleteUserAccount(email) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  if (!normalizedEmail) return false;

  const users = getUsers();
  const userToDelete = users.find(user => String(user.email || "").trim().toLowerCase() === normalizedEmail);
  if (!userToDelete) return false;
  if (userToDelete.role === "admin") return false;

  saveUsers(users.filter(user => String(user.email || "").trim().toLowerCase() !== normalizedEmail));

  telecomData.bills = telecomData.bills.filter(item => String(item.userEmail || "").trim().toLowerCase() !== normalizedEmail);
  telecomData.transactions = telecomData.transactions.filter(item => String(item.userEmail || "").trim().toLowerCase() !== normalizedEmail);
  telecomData.notifications = telecomData.notifications.filter(item => {
    const audience = String(item.audience || "").trim().toLowerCase();
    const userEmail = String(item.userEmail || "").trim().toLowerCase();
    if (audience === "all") return true;
    return userEmail !== normalizedEmail;
  });
  persistTelecomData();

  if (String(sessionStorage.getItem(APP_STORAGE.resetEmail) || "").trim().toLowerCase() === normalizedEmail) {
    sessionStorage.removeItem(APP_STORAGE.resetEmail);
    sessionStorage.removeItem(APP_STORAGE.resetAllowed);
  }

  const auth = getAuthData();
  if (String(auth?.email || "").trim().toLowerCase() === normalizedEmail) {
    clearAuth();
  }

  return true;
}

function getCurrentPage() {
  const path = window.location.pathname.split("/").pop();
  return path || "index.html";
}

function getAuthData() {
  try {
    const localAuth = JSON.parse(localStorage.getItem(APP_STORAGE.auth)) || null;
    const sessionAuth = JSON.parse(sessionStorage.getItem(APP_STORAGE.authSession)) || null;
    return localAuth || sessionAuth;
  } catch {
    return null;
  }
}

function isLoggedIn() {
  return !!getAuthData()?.isLoggedIn;
}

function isAdmin() {
  return getAuthData()?.role === "admin";
}

function getCurrentUser() {
  const auth = getAuthData();
  if (!auth?.email) return null;
  return findUserByEmail(auth.email);
}

function setAuth(role, email, rememberUser = false) {
  const authPayload = JSON.stringify({ isLoggedIn: true, role, email });
  clearAuth();
  if (rememberUser) {
    localStorage.setItem(APP_STORAGE.auth, authPayload);
  } else {
    sessionStorage.setItem(APP_STORAGE.authSession, authPayload);
  }
}

function clearAuth() {
  localStorage.removeItem(APP_STORAGE.auth);
  sessionStorage.removeItem(APP_STORAGE.authSession);
}

function redirectAfterLogin() {
  window.location.href = "index.html";
}

function signOutToHomepage() {
  clearAuth();
  window.location.href = "index.html";
}

function formatAmount(value) {
  return `${Number(value || 0).toLocaleString()} ALL`;
}

function parseLocalDateString(value) {
  const match = String(value || "").trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) return new Date(0);
  const [, day, month, year] = match;
  return new Date(Number(year), Number(month) - 1, Number(day));
}

function getStatusBadgeClass(status) {
  if (["Paguar", "Sukses", "Aktiv"].includes(status)) return "success";
  if (["Papaguar", "Në proces", "Në pritje"].includes(status)) return "warning";
  return "danger";
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function getUserBills(email) {
  return telecomData.bills.filter(bill => bill.userEmail === email);
}

function getUserTransactions(email) {
  return telecomData.transactions.filter(item => item.userEmail === email);
}

function getNotificationsForUser(user) {
  if (!user) return telecomData.notifications.filter(item => item.audience === "all");
  if (user.role === "admin") {
    return telecomData.notifications;
  }
  return telecomData.notifications.filter(item => item.audience === "all" || item.userEmail === user.email);
}

function guardPageAccess() {
  const page = getCurrentPage();

  if (PROTECTED_PAGES.includes(page) && !isLoggedIn()) {
    window.location.href = "login.html";
    return true;
  }

  if (ADMIN_ONLY_PAGES.includes(page) && isLoggedIn() && !isAdmin()) {
    window.location.href = "dashboard.html";
    return true;
  }

  if (GUEST_ONLY_PAGES.includes(page) && isLoggedIn()) {
    redirectAfterLogin();
    return true;
  }

  if (page === "reset-password.html" && sessionStorage.getItem(APP_STORAGE.resetAllowed) !== "true") {
    window.location.href = "forgot-password.html";
    return true;
  }

  return false;
}

function protectLinks() {
  document.querySelectorAll('a[href]').forEach(link => {
    const rawHref = link.getAttribute("href");
    if (!rawHref) return;
    const href = rawHref.split("#")[0].split("?")[0];
    if (!href) return;

    if (PROTECTED_PAGES.includes(href)) {
      link.addEventListener("click", event => {
        if (!isLoggedIn()) {
          event.preventDefault();
          window.location.href = "login.html";
          return;
        }

        if (href === "admin.html" && !isAdmin()) {
          event.preventDefault();
          window.location.href = "dashboard.html";
        }
      });
    }
  });
}

function updateSessionLinks() {
  document.querySelectorAll(".sidebar-footer a").forEach(link => {
    link.textContent = "Kthehu në homepage";
    link.setAttribute("href", "index.html");
  });
}

function syncRoleUI() {
  if (!isAdmin()) {
    document.querySelectorAll('a[href="admin.html"]').forEach(link => {
      link.style.display = "none";
    });
  }
}

function injectThemeToggle() {
  if (document.getElementById("themeFab")) return;
  const btn = document.createElement("button");
  btn.id = "themeFab";
  btn.className = "theme-fab";
  btn.type = "button";
  btn.setAttribute("aria-label", "Ndrysho temën");
  btn.innerHTML = "🌙";
  btn.addEventListener("click", toggleTheme);
  document.body.appendChild(btn);
  syncThemeIcon();
}

function applyThemePreference() {
  // Default is dark (no attribute = dark). Light mode is opt-in.
  const theme = localStorage.getItem(APP_STORAGE.theme) || "dark";
  if (theme === "light") {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.removeAttribute("data-theme");
  }
}

function syncThemeIcon() {
  const btn = document.getElementById("themeFab");
  if (!btn) return;
  btn.innerHTML = document.body.getAttribute("data-theme") === "light" ? "🌙" : "☀️";
}

function toggleTheme() {
  const isLight = document.body.getAttribute("data-theme") === "light";
  if (isLight) {
    document.body.removeAttribute("data-theme");
    localStorage.setItem(APP_STORAGE.theme, "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem(APP_STORAGE.theme, "light");
  }
  syncThemeIcon();
}

function renderHeroCard() {
  const heroCard = document.getElementById("heroCard");
  if (!heroCard) return;

  if (!isLoggedIn()) {
    heroCard.innerHTML = `
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <span class="text-secondary small">Çfarë të pret brenda</span>
          <h2 class="mb-0">Llogaria jote</h2>
        </div>
        <span class="status-badge success">Online 24/7</span>
      </div>
      <div class="hero-bill-list">
        <div class="hero-bill-item">
          <div class="d-flex align-items-center gap-2">
            <span style="font-size:1.2rem;">🧾</span>
            <div>
              <h6 class="mb-0">Faturat &amp; Pagesat</h6>
              <small>Kontrollo afatet dhe paguaj me disa klikime</small>
            </div>
          </div>
          <span class="status-badge" style="font-size:0.7rem;">Live</span>
        </div>
        <div class="hero-bill-item">
          <div class="d-flex align-items-center gap-2">
            <span style="font-size:1.2rem;">📊</span>
            <div>
              <h6 class="mb-0">Dashboard personal</h6>
              <small>Statistika, historiku dhe gjendja e llogarisë</small>
            </div>
          </div>
          <span class="status-badge" style="font-size:0.7rem;">Live</span>
        </div>
        <div class="hero-bill-item">
          <div class="d-flex align-items-center gap-2">
            <span style="font-size:1.2rem;">📦</span>
            <div>
              <h6 class="mb-0">Paketat aktive</h6>
              <small>Shiko dhe ndrysho planin tënd në çdo moment</small>
            </div>
          </div>
          <span class="status-badge" style="font-size:0.7rem;">Live</span>
        </div>
      </div>
      <a href="register.html" class="btn btn-primary w-100 mt-4">Krijo Llogari</a>
    `;
    return;
  }

  const userEmail = getAuthData()?.email;
  const userBills = telecomData.bills.filter(b => b.userEmail === userEmail);
  const unpaidBills = userBills.filter(b => b.status !== "Paguar");
  const totalUnpaid = unpaidBills.reduce((sum, b) => sum + Number(b.amount || 0), 0);
  const recentBills = unpaidBills.length > 0 ? unpaidBills.slice(0, 2) : userBills.slice(0, 2);
  const hasUnpaid = unpaidBills.length > 0;

  const billRows = recentBills.map(b => `
    <div class="hero-bill-item">
      <div>
        <h6>${b.service}</h6>
        <small>${b.id} | ${b.date}</small>
      </div>
      <strong>${Number(b.amount).toLocaleString()} ALL</strong>
    </div>
  `).join("") || `<p class="text-secondary small text-center py-2">Nuk ka fatura të fundit.</p>`;

  heroCard.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-4">
      <div>
        <span class="text-secondary small">${hasUnpaid ? "Fatura të papaguara" : "Gjendje e llogarisë"}</span>
        <h2 class="mb-0">${hasUnpaid ? `${totalUnpaid.toLocaleString()} ALL` : "Asnjë detyrim"}</h2>
      </div>
      <span class="status-badge ${hasUnpaid ? "warning" : "success"}">${hasUnpaid ? "Papaguar" : "Rregull ✓"}</span>
    </div>
    <div class="hero-bill-list">${billRows}</div>
    <a href="bills.html" class="btn btn-primary w-100 mt-4">Shiko Faturat</a>
  `;
}

function updateHomepageUI() {
  const navAuthArea = document.getElementById("navAuthArea");
  const heroActionArea = document.getElementById("heroActionArea");
  const bottomCtaSection = document.getElementById("bottomCtaArea")?.closest("section");

  if (!navAuthArea && !heroActionArea && !bottomCtaSection) return;

  renderHeroCard();

  if (bottomCtaSection) {
    bottomCtaSection.style.display = "none";
  }

  if (!isLoggedIn()) {
    if (navAuthArea) {
      navAuthArea.innerHTML = `
        <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
        <li class="nav-item"><a class="nav-link" href="register.html">Register</a></li>
      `;
    }

    if (heroActionArea) {
      heroActionArea.innerHTML = `
        <a href="login.html" class="btn btn-primary btn-lg px-4">Futu në Sistem</a>
      `;
    }
    return;
  }

  if (navAuthArea) {
    navAuthArea.innerHTML = isAdmin()
      ? `
        <li class="nav-item"><a class="nav-link" href="admin.html">Paneli Admin</a></li>
        <li class="nav-item"><button class="btn btn-light btn-sm rounded-pill px-3" id="homepageSignOutBtn" type="button">Sign Out</button></li>
      `
      : `
        <li class="nav-item"><a class="nav-link" href="dashboard.html">Dashboard</a></li>
        <li class="nav-item"><a class="nav-link" href="services.html">Shërbimet</a></li>
        <li class="nav-item"><button class="btn btn-light btn-sm rounded-pill px-3" id="homepageSignOutBtn" type="button">Sign Out</button></li>
      `;
  }

  if (heroActionArea) {
    heroActionArea.innerHTML = isAdmin()
      ? `
        <a href="admin.html" class="btn btn-primary btn-lg px-4">Shko te Paneli Admin</a>
        <a href="notifications.html" class="btn btn-outline-light btn-lg px-4">Njoftimet</a>
      `
      : `
        <a href="dashboard.html" class="btn btn-primary btn-lg px-4">Shko te Dashboard</a>
        <a href="services.html" class="btn btn-outline-light btn-lg px-4">Shiko Paketat</a>
      `;
  }

  document.getElementById("homepageSignOutBtn")?.addEventListener("click", signOutToHomepage);
}


function getErrorElement(field) {
  if (!field) return null;
  return field.parentElement?.querySelector(".error-message") ||
    field.closest(".input-group")?.parentElement?.querySelector(".error-message") ||
    field.closest(".col-12, .col-md-12, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .mb-3")?.querySelector(".error-message") ||
    field.closest("[class*='col-']")?.querySelector(".error-message") ||
    null;
}

function setFieldError(field, message = "") {
  const errorEl = getErrorElement(field);
  if (errorEl) errorEl.textContent = message;
  field?.classList.toggle("is-invalid", !!message);
  return !message;
}

function normalizeDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function normalizeTextSpaces(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function normalizePhoneValue(value) {
  return String(value || "").replace(/[^\d+\s()-]/g, "").trim();
}

function normalizePhoneStorage(value) {
  const digits = normalizeDigits(value);
  if (/^355\d+$/.test(digits)) return `+${digits}`;
  return digits;
}

function formatPhoneInput(value) {
  const hasPlus = String(value || "").trim().startsWith("+");
  const digits = normalizeDigits(value).slice(0, 12);
  if (!digits) return hasPlus ? "+" : "";

  if (digits.startsWith("355")) {
    const rest = digits.slice(3);
    const parts = ["+355"];
    if (rest.length > 0) parts.push(rest.slice(0, 2));
    if (rest.length > 2) parts.push(rest.slice(2, 5));
    if (rest.length > 5) parts.push(rest.slice(5, 8));
    if (rest.length > 8) parts.push(rest.slice(8, 12));
    return parts.join(" ").trim();
  }

  if (digits.startsWith("0")) {
    const parts = [digits.slice(0, 2)];
    if (digits.length > 2) parts.push(digits.slice(2, 5));
    if (digits.length > 5) parts.push(digits.slice(5, 8));
    if (digits.length > 8) parts.push(digits.slice(8, 10));
    return parts.join(" ").trim();
  }

  return (hasPlus ? "+" : "") + digits;
}

function isValidPersonName(value) {
  return /^[A-Za-zÀ-ÿÇçËëÖöÜüŽžŠš'’\- ]{2,40}$/.test(normalizeTextSpaces(value));
}

function isStrongPassword(value) {
  const password = String(value || "");
  return password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password);
}

function isValidAlbanianPhone(value) {
  const digits = normalizeDigits(value);
  return /^(?:3556\d{8}|06\d{8})$/.test(digits);
}

function normalizeIban(value) {
  return String(value || "").replace(/\s+/g, "").toUpperCase();
}

function isCardMethod(method) {
  return ["Kartë Krediti", "Kartë Debiti"].includes(method);
}

function isPayPalMethod(method) {
  return method === "PayPal";
}

function isBankTransferMethod(method) {
  return method === "Transfer Bankar";
}

function getCardBrand(cardNumber) {
  const digits = normalizeDigits(cardNumber);
  if (/^3[47]\d{13}$/.test(digits)) return "amex";
  if (/^4\d{12}(?:\d{3})?$/.test(digits)) return "visa";
  if (/^(?:5[1-5]\d{14}|2(?:2[2-9]\d{12}|[3-6]\d{13}|7(?:[01]\d{12}|20\d{12})))$/.test(digits)) return "mastercard";
  if (/^3(?:0[0-5]|[68]\d)\d{11}$/.test(digits)) return "diners";
  if (/^6(?:011|5\d{2})\d{12}$/.test(digits)) return "discover";
  return "generic";
}

function getExpectedCardLength(cardNumber) {
  return getCardBrand(cardNumber) === "amex" ? 15 : 16;
}

function getExpectedCvvLength(cardNumber) {
  return getCardBrand(cardNumber) === "amex" ? 4 : 3;
}

function isValidLuhn(cardNumber) {
  const digits = normalizeDigits(cardNumber);
  const expectedLength = getExpectedCardLength(digits);
  if (digits.length !== expectedLength) return false;

  let sum = 0;
  let shouldDouble = false;

  for (let i = digits.length - 1; i >= 0; i -= 1) {
    let digit = Number(digits[i]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

function parseExpiry(value) {
  const match = String(value || "").trim().match(/^(\d{2})\/(\d{2})$/);
  if (!match) return null;

  const month = Number(match[1]);
  const year = Number(`20${match[2]}`);
  if (month < 1 || month > 12) return null;

  return { month, year };
}

function isFutureExpiry(value) {
  const parsed = parseExpiry(value);
  if (!parsed) return false;

  const now = new Date();
  const expiry = new Date(parsed.year, parsed.month, 0, 23, 59, 59, 999);
  return expiry >= now;
}

function formatCardNumberInput(value) {
  const digits = normalizeDigits(value);
  const brand = getCardBrand(digits);
  const maxLength = brand === "amex" ? 15 : 16;
  const trimmed = digits.slice(0, maxLength);

  if (brand === "amex") {
    const parts = [];
    if (trimmed.length > 0) parts.push(trimmed.slice(0, 4));
    if (trimmed.length > 4) parts.push(trimmed.slice(4, 10));
    if (trimmed.length > 10) parts.push(trimmed.slice(10, 15));
    return parts.join(" ");
  }

  return trimmed.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiryInput(value) {
  const digits = normalizeDigits(value).slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function formatIbanInput(value) {
  return normalizeIban(value).replace(/(.{4})/g, "$1 ").trim();
}

function attachInputFormatter(input, formatter) {
  if (!input || input.dataset.formatterBound === "true") return;
  input.dataset.formatterBound = "true";
  input.addEventListener("input", () => {
    input.value = formatter(input.value);
  });
}

function updateCardUiState(cardInput, cvvInput) {
  if (!cardInput || !cvvInput) return;

  const brand = getCardBrand(cardInput.value);
  const expectedCardLength = getExpectedCardLength(cardInput.value);
  const expectedCvvLength = getExpectedCvvLength(cardInput.value);

  cardInput.maxLength = brand === "amex" ? 17 : 19;
  cardInput.placeholder = brand === "amex" ? "1234 567890 12345" : "1234 5678 9012 3456";
  cardInput.dataset.expectedCardLength = String(expectedCardLength);

  cvvInput.maxLength = expectedCvvLength;
  cvvInput.placeholder = expectedCvvLength === 4 ? "1234" : "123";
  cvvInput.dataset.expectedCvvLength = String(expectedCvvLength);

  const cvvDigits = normalizeDigits(cvvInput.value);
  if (cvvDigits.length > expectedCvvLength) {
    cvvInput.value = cvvDigits.slice(0, expectedCvvLength);
  }
}

function bindCardCvvBehavior(cardInput, cvvInput) {
  if (!cardInput || !cvvInput || cardInput.dataset.cardCvvBehaviorBound === "true") return;
  cardInput.dataset.cardCvvBehaviorBound = "true";

  const sync = () => updateCardUiState(cardInput, cvvInput);
  cardInput.addEventListener("input", sync);
  cardInput.addEventListener("change", sync);
  sync();
}

function togglePaymentFields(config) {
  const methodSelect = document.getElementById(config.methodSelectId);
  if (!methodSelect) return () => {};

  const cardSection = document.getElementById(config.cardSectionId);
  const paypalSection = document.getElementById(config.paypalSectionId);
  const bankSection = document.getElementById(config.bankSectionId);

  const cardFields = (config.cardFieldIds || []).map(id => document.getElementById(id)).filter(Boolean);
  const paypalFields = (config.paypalFieldIds || []).map(id => document.getElementById(id)).filter(Boolean);
  const bankFields = (config.bankFieldIds || []).map(id => document.getElementById(id)).filter(Boolean);

  [...cardFields, ...paypalFields, ...bankFields].forEach(field => {
    if (!field.dataset.originalRequired) {
      field.dataset.originalRequired = field.required ? "true" : "false";
    }
  });

  const applyState = (fields, section, visible) => {
    if (section) section.style.display = visible ? "" : "none";
    fields.forEach(field => {
      field.disabled = !visible;
      field.required = visible && field.dataset.originalRequired === "true";
      if (!visible) {
        setFieldError(field, "");
        field.classList.remove("is-valid-field");
      }
    });
  };

  const update = () => {
    const method = methodSelect.value || "";
    applyState(cardFields, cardSection, isCardMethod(method));
    applyState(paypalFields, paypalSection, isPayPalMethod(method));
    applyState(bankFields, bankSection, isBankTransferMethod(method));
    setFieldError(methodSelect, "");
  };

  methodSelect.addEventListener("change", update);
  update();
  return update;
}

function validateField(field) {
  if (!field) return true;
  if (field.disabled) return setFieldError(field, "");

  const rawValue = typeof field.value === "string" ? field.value : "";
  const value = rawValue.trim();
  let message = "";

  if (field.type === "checkbox") {
    if (field.required && !field.checked) message = "Ky opsion është i detyrueshëm.";
    return setFieldError(field, message);
  }

  if (field.validity.valueMissing) {
    message = "Kjo fushë është e detyrueshme.";
  } else if (field.type === "email" && !field.validity.valid) {
    message = "Vendos një email të vlefshëm.";
  } else if (["firstName", "lastName", "profileFirstName", "profileLastName"].includes(field.id)) {
    if (!isValidPersonName(value)) message = "Lejohen vetëm shkronja, hapësira, apostrof dhe lidhëza.";
  } else if (["phoneNumber", "profilePhone"].includes(field.id)) {
    if (!isValidAlbanianPhone(value)) message = "Vendos një numër shqiptar të vlefshëm, p.sh. 0691234567 ose +355691234567.";
  } else if (["registerPassword", "newPassword", "newPasswordProfile"].includes(field.id)) {
    if (!isStrongPassword(rawValue)) message = "Fjalëkalimi duhet të ketë të paktën 8 karaktere, një shkronjë të madhe, një të vogël dhe një numër.";
  } else if (field.id === "confirmPassword") {
    const pass = document.getElementById("registerPassword")?.value || "";
    if (!isStrongPassword(pass)) {
      message = "Plotëso fillimisht një fjalëkalim të vlefshëm.";
    } else if (field.value !== pass) {
      message = "Password-et nuk përputhen.";
    }
  } else if (field.id === "confirmNewPassword") {
    const pass = document.getElementById("newPassword")?.value || "";
    if (!isStrongPassword(pass)) {
      message = "Plotëso fillimisht një fjalëkalim të vlefshëm.";
    } else if (field.value !== pass) {
      message = "Fjalëkalimet nuk përputhen.";
    }
  } else if (field.id === "confirmNewPasswordProfile") {
    const pass = document.getElementById("newPasswordProfile")?.value || "";
    if (!isStrongPassword(pass)) {
      message = "Plotëso fillimisht një fjalëkalim të vlefshëm.";
    } else if (field.value !== pass) {
      message = "Fjalëkalimet nuk përputhen.";
    }
  } else if (["cardHolder", "serviceCardHolder", "registerCardHolder"].includes(field.id)) {
    if (!/^[A-Za-zÀ-ÿ'\- ]{3,}$/.test(value)) message = "Vendos emrin e saktë si në kartë.";
  } else if (["cardNumber", "serviceCardNumber", "registerCardNumber"].includes(field.id)) {
    const expectedCardLength = getExpectedCardLength(value);
    if (!isValidLuhn(value)) message = `Numri i kartës duhet të ketë saktësisht ${expectedCardLength} shifra të vlefshme.`;
  } else if (["expiryDate", "serviceExpiryDate", "registerExpiryDate"].includes(field.id)) {
    if (!isFutureExpiry(value)) message = "Vendos një datë skadence të vlefshme MM/YY.";
  } else if (["cvv", "serviceCvv", "registerCvv"].includes(field.id)) {
    const relatedCardFieldId = field.id === "serviceCvv" ? "serviceCardNumber" : field.id === "registerCvv" ? "registerCardNumber" : "cardNumber";
    const relatedCardValue = document.getElementById(relatedCardFieldId)?.value || "";
    const expectedCvvLength = getExpectedCvvLength(relatedCardValue);
    const cvvRegex = expectedCvvLength === 4 ? /^\d{4}$/ : /^\d{3}$/;
    if (!cvvRegex.test(normalizeDigits(value))) message = `CVV duhet të ketë saktësisht ${expectedCvvLength} shifra.`;
  } else if (["paypalEmail", "servicePaypalEmail", "registerPaypalEmail"].includes(field.id)) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Vendos një email të vlefshëm për PayPal.";
  } else if (["bankIban", "serviceBankIban", "registerBankIban"].includes(field.id)) {
    if (!/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/.test(normalizeIban(value))) {
      message = "Vendos një IBAN të vlefshëm.";
    }
  } else if (["bankName", "serviceBankName", "registerBankName"].includes(field.id)) {
    if (value.length < 2) message = "Vendos emrin e bankës.";
  } else if (field.validity.tooShort) {
    message = "Vlera është shumë e shkurtër.";
  }

  return setFieldError(field, message);
}

function handleCustomValidation(form, onSuccess) {
  if (!form) return;
  const fields = [...form.querySelectorAll("input, select, textarea")];

  fields.forEach(field => {
    field.addEventListener("input", () => validateField(field));
    field.addEventListener("change", () => validateField(field));
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    let isValid = true;
    fields.forEach(field => {
      if (!validateField(field)) isValid = false;
    });
    if (isValid && typeof onSuccess === "function") onSuccess();
  });
}

function initForms() {
  const loginForm = document.getElementById("loginForm");
  handleCustomValidation(loginForm, () => {
    const email = document.getElementById("loginEmail")?.value.trim().toLowerCase() || "";
    const password = document.getElementById("loginPassword")?.value || "";
    const rememberUser = document.getElementById("rememberMe")?.checked || false;
    const loginError = document.getElementById("loginErrorMessage");
    const user = findUserByEmail(email);

    if (!user || user.password !== password) {
      loginError?.classList.remove("d-none");
      return;
    }

    loginError?.classList.add("d-none");
    setAuth(user.role, user.email, rememberUser);
    redirectAfterLogin();
  });

  const registerPhone = document.getElementById("phoneNumber");
  attachInputFormatter(registerPhone, formatPhoneInput);

  const registerForm = document.getElementById("registerForm");
  if (!registerForm) return;

  const registerError = document.getElementById("registerErrorMessage");

  handleCustomValidation(registerForm, () => {
    const email = document.getElementById("registerEmail")?.value.trim().toLowerCase() || "";

    if (findUserByEmail(email)) {
      registerError?.classList.remove("d-none");
      return;
    }

    registerError?.classList.add("d-none");

    const city = document.getElementById("registerCity")?.value || "";

    const users = getUsers();
    users.push({
      email,
      password: document.getElementById("registerPassword")?.value || "",
      role: "user",
      status: "Aktiv",
      profile: {
        firstName: normalizeTextSpaces(document.getElementById("firstName")?.value || ""),
        lastName: normalizeTextSpaces(document.getElementById("lastName")?.value || ""),
        phone: normalizePhoneStorage(document.getElementById("phoneNumber")?.value || ""),
        address: city || "Adresa nuk është specifikuar",
        plan: "No active plan",
        customerType: "Individual"
      }
    });
    saveUsers(users);

    const now = new Date();
    const pad = value => String(value).padStart(2, "0");
    const currentDate = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;

    telecomData.notifications.unshift({
      id: `NTF-${now.getTime()}`,
      title: "Regjistrimi u përfundua me sukses",
      message: `Mirë se erdhe! Llogaria jote u krijua me sukses. Mund të zgjedhësh një paketë te seksioni Shërbimet.`,
      type: "service",
      date: currentDate,
      audience: "user",
      userEmail: email
    });

    persistTelecomData();

    if (window.toast) {
      window.toast.show("Llogaria u krijua me sukses!", "success");
    } else {
      alert("Llogaria u krijua me sukses.");
    }

    window.location.href = "login.html";
  });
}

function initForgotPasswordForm() {
  const form = document.getElementById("forgotPasswordForm");
  if (!form) return;

  handleCustomValidation(form, () => {
    const successMessage = document.getElementById("forgotSuccessMessage");
    const errorMessage = document.getElementById("forgotErrorMessage");
    const email = document.getElementById("forgotEmail")?.value.trim().toLowerCase() || "";
    const user = findUserByEmail(email);

    if (!user) {
      errorMessage?.classList.remove("d-none");
      successMessage?.classList.add("d-none");
      return;
    }

    errorMessage?.classList.add("d-none");
    sessionStorage.setItem(APP_STORAGE.resetAllowed, "true");
    sessionStorage.setItem(APP_STORAGE.resetEmail, email);

    successMessage?.classList.remove("d-none");

    setTimeout(() => {
      window.location.href = "reset-password.html";
    }, 1200);
  });
}

function initResetPasswordForm() {
  const form = document.getElementById("resetPasswordForm");
  if (!form) return;

  const resetEmail = document.getElementById("resetEmail");
  const storedEmail = sessionStorage.getItem(APP_STORAGE.resetEmail);

  if (resetEmail && storedEmail) {
    resetEmail.value = storedEmail;
    resetEmail.readOnly = true;
  }

  handleCustomValidation(form, () => {
    const successMessage = document.getElementById("resetSuccessMessage");
    const email = document.getElementById("resetEmail")?.value.trim().toLowerCase() || "";
    const newPassword = document.getElementById("newPassword")?.value || "";
    const user = findUserByEmail(email);

    if (user) {
      updateUser(email, { password: newPassword });
    }

    sessionStorage.removeItem(APP_STORAGE.resetAllowed);
    sessionStorage.removeItem(APP_STORAGE.resetEmail);

    successMessage?.classList.remove("d-none");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);
  });
}

function renderDashboard() {
  const user = getCurrentUser();
  if (!user || user.role === "admin") return;

  const bills = getUserBills(user.email);
  const transactions = getUserTransactions(user.email);
  const notifications = getNotificationsForUser(user).slice(0, 3);

  const unpaidBills = bills.filter(bill => bill.status === "Papaguar" || bill.status === "Vonuar");
  const successfulTransactions = transactions.filter(item => item.status === "Sukses");
  const lastTransaction = successfulTransactions[0] || transactions[0];

  setText("dashboardCustomerName", user.profile.firstName);
  setText("currentBillAmount", formatAmount(unpaidBills.reduce((sum, bill) => sum + bill.amount, 0)));
  setText("unpaidBillsCount", String(unpaidBills.length));
  setText("lastPaymentAmount", formatAmount(lastTransaction?.amount || 0));
  setText("activeServicePlan", user.profile.plan);

  const table = document.getElementById("dashboardBillsTable");
  if (table) {
    table.innerHTML = bills.slice(0, 3).map(bill => `
      <tr>
        <td>${bill.id}</td>
        <td>${bill.service}</td>
        <td>${bill.date}</td>
        <td>${formatAmount(bill.amount)}</td>
        <td><span class="status-badge ${getStatusBadgeClass(bill.status)}">${bill.status}</span></td>
      </tr>
    `).join("") || `<tr><td colspan="5" class="empty-row py-4">Nuk ka të dhëna faturash për këtë llogari.</td></tr>`;
  }

  const dashboardNotifications = document.getElementById("dashboardNotifications");
  if (dashboardNotifications) {
    dashboardNotifications.innerHTML = notifications.map(item => `
      <div class="notification-item">
        <strong>${item.title}</strong>
        <p>${item.message}</p>
      </div>
    `).join("") || `<div class="notification-item"><strong>Nuk ka njoftime</strong><p>Qendra e njoftimeve është bosh për momentin.</p></div>`;
  }

  renderMonthlyPaymentsChart(transactions);
  renderBillStatusChart(bills);
  initDashboardQuickSearch();

  // Overdue / urgent bill warning banner
  const overdueAlert = document.getElementById("overdueAlert");
  if (overdueAlert) {
    const overdueBills = bills.filter(b => b.status === "Vonuar");
    const dueSoonBills = bills.filter(b => {
      if (b.status === "Paguar") return false;
      if (!b.dueDate) return false;
      const parts = b.dueDate.split("/");
      if (parts.length < 3) return false;
      const due = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
      const diff = (due - new Date()) / (1000 * 60 * 60 * 24);
      return diff >= 0 && diff <= 3;
    });

    if (overdueBills.length > 0) {
      overdueAlert.style.display = "flex";
      document.getElementById("overdueAlertTitle").textContent =
        `⚠ Ke ${overdueBills.length} faturë${overdueBills.length > 1 ? " të vonuara" : " të vonuar"}!`;
      document.getElementById("overdueAlertDesc").textContent =
        "Kryej pagesën sa më shpejt për të shmangur penalitete shtesë.";
    } else if (dueSoonBills.length > 0) {
      overdueAlert.style.display = "flex";
      overdueAlert.style.background = "rgba(251,191,36,0.07)";
      overdueAlert.style.borderColor = "rgba(251,191,36,0.25)";
      document.getElementById("overdueAlertTitle").style.color = "var(--warning)";
      document.getElementById("overdueAlertTitle").textContent =
        `⏰ Ke ${dueSoonBills.length} faturë${dueSoonBills.length > 1 ? " me afat brenda 3 ditëve" : " me afat nesër ose sot"}!`;
      document.getElementById("overdueAlertDesc").textContent =
        "Kontrollo faturat dhe kryej pagesën para afatit.";
    }
  }
}

function renderMonthlyPaymentsChart(transactions) {
  const container = document.getElementById("monthlyPaymentsChart");
  if (!container) return;

  const monthly = [
    { label: "Jan", value: 900 },
    { label: "Shk", value: 1700 },
    { label: "Mar", value: 1800 },
    { label: "Pri", value: transactions.filter(item => item.status === "Sukses").reduce((sum, item) => sum + item.amount, 0) || 2700 }
  ];

  const max = Math.max(...monthly.map(item => item.value), 1);
  container.innerHTML = monthly.map(item => `
    <div class="simple-chart-row">
      <span class="chart-label">${item.label}</span>
      <div class="chart-track"><div class="chart-bar" style="width:${(item.value / max) * 100}%"></div></div>
      <span class="chart-value">${item.value}</span>
    </div>
  `).join("");
}

function renderBillStatusChart(bills) {
  const container = document.getElementById("billStatusChart");
  if (!container) return;

  const paid = bills.filter(item => item.status === "Paguar").length;
  const unpaid = bills.filter(item => item.status === "Papaguar").length;
  const overdue = bills.filter(item => item.status === "Vonuar").length;

  container.innerHTML = `
    <div class="donut-visual"></div>
    <div class="donut-legend">
      <div class="legend-item"><span class="legend-label"><span class="legend-dot" style="background:#16a34a"></span>Paguar</span><strong>${paid}</strong></div>
      <div class="legend-item"><span class="legend-label"><span class="legend-dot" style="background:#d97706"></span>Papaguar</span><strong>${unpaid}</strong></div>
      <div class="legend-item"><span class="legend-label"><span class="legend-dot" style="background:#dc2626"></span>Vonuar</span><strong>${overdue}</strong></div>
    </div>
  `;
}

function initDashboardQuickSearch() {
  const input = document.getElementById("dashboardQuickSearch");
  if (!input) return;

  input.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    const value = input.value.trim().toLowerCase();
    if (!value) return;

    if (value.includes("fatur") || value.startsWith("fat-")) {
      window.location.href = "bills.html";
    } else if (value.includes("trans") || value.startsWith("trx-")) {
      window.location.href = "transactions.html";
    } else if (value.includes("paket") || value.includes("internet") || value.includes("mobile")) {
      window.location.href = "services.html";
    } else if (value.includes("njoft")) {
      window.location.href = "notifications.html";
    } else {
      window.location.href = "customer-service.html";
    }
  });
}

function renderBills() {
  const user = getCurrentUser();
  const table = document.getElementById("billsTableBody");
  const statusFilter = document.getElementById("billStatusFilter");
  const searchInput = document.getElementById("billSearchInput");
  const sortSelect = document.getElementById("billSortSelect");
  if (!table || !user) return;

  function updateTable() {
    const statusValue = statusFilter?.value || "all";
    const searchValue = (searchInput?.value || "").toLowerCase();
    const sortValue = sortSelect?.value || "newest";

    let filtered = getUserBills(user.email).filter(bill => {
      const matchesStatus = statusValue === "all" || bill.status === statusValue;
      const matchesSearch = bill.id.toLowerCase().includes(searchValue) || bill.service.toLowerCase().includes(searchValue);
      return matchesStatus && matchesSearch;
    });

    filtered = filtered.sort((a, b) => {
      if (sortValue === "highest") return b.amount - a.amount;
      if (sortValue === "lowest") return a.amount - b.amount;
      return parseLocalDateString(b.date) - parseLocalDateString(a.date);
    });

    table.innerHTML = filtered.length ? filtered.map(bill => `
      <tr>
        <td>${bill.id}</td>
        <td>${bill.service}</td>
        <td>${bill.date}</td>
        <td>${bill.dueDate}</td>
        <td>${formatAmount(bill.amount)}</td>
        <td><span class="status-badge ${getStatusBadgeClass(bill.status)}">${bill.status}</span></td>
        <td>
          <div class="customer-actions">
            <a href="invoice-details.html?id=${encodeURIComponent(bill.id)}" class="action-btn">Detaje</a>
            ${bill.status !== "Paguar" ? `<a href="payments.html?bill=${encodeURIComponent(bill.id)}" class="action-btn">Paguaj</a>` : `<button class="action-btn" disabled>Paguar</button>`}
          </div>
        </td>
      </tr>
    `).join("") : `<tr><td colspan="7" class="empty-row py-4">Nuk u gjet asnjë faturë.</td></tr>`;
  }

  statusFilter?.addEventListener("change", updateTable);
  searchInput?.addEventListener("input", updateTable);
  sortSelect?.addEventListener("change", updateTable);
  updateTable();
}

function renderInvoiceDetails() {
  const user = getCurrentUser();
  if (!user) return;
  const params = new URLSearchParams(window.location.search);
  const invoiceId = params.get("id");

  // Admin can see any bill, regular user only their own
  let bill;
  if (user.role === "admin") {
    bill = telecomData.bills.find(item => item.id === invoiceId) || telecomData.bills[0];
  } else {
    const userBills = getUserBills(user.email);
    bill = userBills.find(item => item.id === invoiceId) || userBills[0];
  }

  if (!bill) return;

  setText("invoiceHeaderTitle", `Fatura ${bill.id}`);
  setText("invoiceId", bill.id);
  setText("invoiceService", bill.service);
  setText("invoiceDate", bill.date);
  setText("invoiceDueDate", bill.dueDate);
  setText("invoiceCustomer", bill.customer);
  setText("invoiceStatusText", bill.status);
  setText("invoiceAmount", formatAmount(bill.amount));

  const badge = document.getElementById("invoiceStatusBadge");
  if (badge) {
    badge.textContent = bill.status;
    badge.className = `status-badge ${getStatusBadgeClass(bill.status)}`;
  }

  const itemsTable = document.getElementById("invoiceItemsTable");
  if (itemsTable) {
    itemsTable.innerHTML = bill.items.map(item => `
      <tr>
        <td>${item.description}</td>
        <td>${item.qty}</td>
        <td>${formatAmount(item.price)}</td>
        <td>${formatAmount(item.qty * item.price)}</td>
      </tr>
    `).join("");
  }

}


function renderPaymentPage() {
  const user = getCurrentUser();
  const billSelect = document.getElementById("billSelect");
  const form = document.getElementById("paymentForm");
  if (!billSelect || !user || !form) return;

  const params = new URLSearchParams(window.location.search);
  const preselectedBill = params.get("bill");
  const unpaidBills = getUserBills(user.email).filter(bill => bill.status !== "Paguar");

  billSelect.innerHTML = unpaidBills.length
    ? `<option value="">Zgjidh...</option>` + unpaidBills.map(bill => `
        <option value="${bill.id}" ${preselectedBill === bill.id ? "selected" : ""}>${bill.id} - ${bill.service} - ${formatAmount(bill.amount)}</option>
      `).join("")
    : `<option value="">Nuk ka fatura për pagesë</option>`;

  setText("paymentCustomerName", `${user.profile.firstName} ${user.profile.lastName}`);

  const cardNumber = document.getElementById("cardNumber");
  const expiryDate = document.getElementById("expiryDate");
  const cvv = document.getElementById("cvv");
  const bankIban = document.getElementById("bankIban");

  attachInputFormatter(cardNumber, formatCardNumberInput);
  attachInputFormatter(expiryDate, formatExpiryInput);
  attachInputFormatter(cvv, value => normalizeDigits(value).slice(0, 4));
  bindCardCvvBehavior(cardNumber, cvv);
  attachInputFormatter(bankIban, formatIbanInput);

  const syncMethodFields = togglePaymentFields({
    methodSelectId: "paymentMethod",
    cardSectionId: "cardPaymentFields",
    paypalSectionId: "paypalPaymentFields",
    bankSectionId: "bankTransferFields",
    cardFieldIds: ["cardHolder", "cardNumber", "expiryDate", "cvv"],
    paypalFieldIds: ["paypalEmail"],
    bankFieldIds: ["bankName", "bankIban"]
  });

  function refreshBillOptions() {
    const freshUnpaid = getUserBills(user.email).filter(bill => bill.status !== "Paguar");
    billSelect.innerHTML = freshUnpaid.length
      ? `<option value="">Zgjidh...</option>` + freshUnpaid.map(bill => `
          <option value="${bill.id}">${bill.id} - ${bill.service} - ${formatAmount(bill.amount)}</option>
        `).join("")
      : `<option value="">Nuk ka fatura për pagesë</option>`;
  }

  function updateSummary() {
    const selectedId = billSelect.value;
    const bill = getUserBills(user.email).find(item => item.id === selectedId && item.status !== "Paguar");

    setText("paymentAmount", bill ? formatAmount(bill.amount) : "0 ALL");
    setText("paymentService", bill ? bill.service : "-");
    setText("paymentStatus", bill ? bill.status : "Papaguar");
  }

  billSelect.addEventListener("change", updateSummary);
  updateSummary();
  syncMethodFields();

  handleCustomValidation(form, () => {
    const selectedId = billSelect.value;
    const paymentMethod = document.getElementById("paymentMethod")?.value || "";
    const billIndex = telecomData.bills.findIndex(item => item.id === selectedId && item.userEmail === user.email);

    if (!selectedId || billIndex === -1) {
      setFieldError(billSelect, "Zgjidh një faturë të vlefshme për pagesë.");
      return;
    }

    if (!paymentMethod) {
      setFieldError(document.getElementById("paymentMethod"), "Zgjidh metodën e pagesës.");
      return;
    }

    telecomData.bills[billIndex].status = "Paguar";
    telecomData.transactions.unshift({
      id: `TRX-2026-${Math.floor(Math.random() * 9000 + 1000)}`,
      date: new Date().toLocaleDateString("sq-AL"),
      method: paymentMethod,
      amount: telecomData.bills[billIndex].amount,
      status: "Sukses",
      userEmail: user.email
    });
    telecomData.notifications.unshift({
      id: `NTF-${Date.now()}`,
      title: "Pagesa u regjistrua me sukses",
      message: `Fatura ${selectedId} u pagua me sukses për shumën ${formatAmount(telecomData.bills[billIndex].amount)}.`,
      type: "payment",
      date: new Date().toLocaleDateString("sq-AL"),
      audience: "user",
      userEmail: user.email
    });
    persistTelecomData();

    const paidBill = telecomData.bills[billIndex];
    setText("paymentSuccessBill", paidBill.id);
    setText("paymentSuccessMethod", paymentMethod);
    setText("paymentSuccessAmount", formatAmount(paidBill.amount));
    openSimpleModal("paymentSuccessModal");

    form.reset();
    refreshBillOptions();
    syncMethodFields();
    updateSummary();
  });

  document.getElementById("closePaymentSuccessModal")?.addEventListener("click", () => closeSimpleModal("paymentSuccessModal"));
  document.getElementById("paymentSuccessDoneBtn")?.addEventListener("click", () => closeSimpleModal("paymentSuccessModal"));
  document.getElementById("paymentSuccessModal")?.addEventListener("click", event => {
    if (event.target === document.getElementById("paymentSuccessModal")) closeSimpleModal("paymentSuccessModal");
  });
}

function renderTransactions() {
  const user = getCurrentUser();
  const table = document.getElementById("transactionsTableBody");
  const statusFilter = document.getElementById("transactionStatusFilter");
  const searchInput = document.getElementById("transactionSearchInput");
  if (!table || !user) return;

  function updateTable() {
    const statusValue = statusFilter?.value || "all";
    const searchValue = (searchInput?.value || "").toLowerCase();

    const filtered = getUserTransactions(user.email).filter(item => {
      const matchesStatus = statusValue === "all" || item.status === statusValue;
      const matchesSearch = item.id.toLowerCase().includes(searchValue) || item.method.toLowerCase().includes(searchValue);
      return matchesStatus && matchesSearch;
    });

    table.innerHTML = filtered.length ? filtered.map(item => `
      <tr>
        <td>${item.id}</td>
        <td>${item.date}</td>
        <td>${item.method}</td>
        <td>${formatAmount(item.amount)}</td>
        <td><span class="status-badge ${getStatusBadgeClass(item.status)}">${item.status}</span></td>
      </tr>
    `).join("") : `<tr><td colspan="5" class="empty-row py-4">Nuk u gjet asnjë transaksion.</td></tr>`;
  }

  statusFilter?.addEventListener("change", updateTable);
  searchInput?.addEventListener("input", updateTable);
  updateTable();
}


function renderNotifications() {
  const user = getCurrentUser();
  const list = document.getElementById("notificationsPageList");
  const typeFilter = document.getElementById("notificationTypeFilter");
  const searchInput = document.getElementById("notificationSearchInput");
  if (!list || !user) return;

  const readKey = `telecomReadNotifs_${user.email}`;
  let readIds = (() => { try { return JSON.parse(localStorage.getItem(readKey) || "[]"); } catch { return []; } })();

  function saveReadIds() {
    localStorage.setItem(readKey, JSON.stringify(readIds));
  }

  function markRead(id) {
    if (!readIds.includes(id)) {
      readIds.push(id);
      saveReadIds();
    }
  }

  function markAllRead() {
    getNotificationsForUser(user).forEach(item => {
      if (!readIds.includes(item.id)) readIds.push(item.id);
    });
    saveReadIds();
  }

  markAllRead();

  function updateUnreadBadge(notifs) {
    const badge = document.getElementById("unreadBadge");
    if (!badge) return;
    const count = notifs.filter(n => !readIds.includes(n.id)).length;
    badge.style.display = count > 0 ? "inline-flex" : "none";
    badge.textContent = `${count} të palexuara`;
  }

  function updateList() {
    const typeValue = typeFilter?.value || "all";
    const searchValue = (searchInput?.value || "").toLowerCase();
    const all = getNotificationsForUser(user);

    const filtered = all.filter(item => {
      const matchesType = typeValue === "all" || item.type === typeValue;
      const matchesSearch = item.title.toLowerCase().includes(searchValue) || item.message.toLowerCase().includes(searchValue);
      return matchesType && matchesSearch;
    });

    updateUnreadBadge(all);

    const typeIcons = { billing: "◈", payment: "◇", service: "▣", system: "⬡", default: "◉" };

    list.innerHTML = filtered.length ? filtered.map(item => {
      const isRead = readIds.includes(item.id);
      return `
        <div class="timeline-card ${isRead ? "" : "timeline-card--unread"}" data-notif-id="${item.id}" style="${isRead ? "" : "border-left: 3px solid var(--indigo); padding-left: 17px;"}">
          <div class="d-flex justify-content-between flex-wrap gap-2 align-items-start">
            <div class="d-flex align-items-center gap-2">
              ${!isRead ? '<span style="width:8px;height:8px;background:var(--indigo);border-radius:50%;flex-shrink:0;margin-top:4px;display:inline-block"></span>' : ''}
              <strong>${item.title}</strong>
            </div>
            <span class="notification-pill">${typeIcons[item.type] || typeIcons.default} ${item.type}</span>
          </div>
          <p class="mb-2 mt-2">${item.message}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="timeline-meta">${item.date}</div>
            ${!isRead ? `<button type="button" class="btn-mark-read" data-id="${item.id}" style="background:none;border:none;color:var(--indigo);font-size:0.75rem;cursor:pointer;padding:0">✓ Shëno si të lexuar</button>` : ''}
          </div>
        </div>
      `;
    }).join("") : `<div class="timeline-card"><strong>Nuk ka njoftime</strong><p class="mb-0">Nuk u gjet asnjë njoftim sipas filtrit aktual.</p></div>`;

    list.querySelectorAll(".btn-mark-read").forEach(btn => {
      btn.addEventListener("click", () => {
        markRead(btn.dataset.id);
        updateList();
      });
    });
  }

  document.getElementById("markAllReadBtn")?.addEventListener("click", () => {
    markAllRead();
    updateList();
    if (window.toast) window.toast.show("Të gjitha njoftimet u shënuan si të lexuara.", "success");
  });

  typeFilter?.addEventListener("change", updateList);
  searchInput?.addEventListener("input", updateList);
  updateList();
}


function renderServices() {
  const user = getCurrentUser();
  const currentPlanCard = document.getElementById("currentPlanCard");
  const servicesGrid = document.getElementById("servicesGrid");
  const purchaseForm = document.getElementById("servicePurchaseForm");
  if (!currentPlanCard || !servicesGrid || !user) return;

  currentPlanCard.innerHTML = (() => {
    const current = TELECOM_SERVICES.find(item => item.name === user.profile.plan) || TELECOM_SERVICES[0];
    const isFree = current.name === "No active plan";
    return `
      <div class="plan-card current-plan">
        <span class="notification-pill">${current.category}</span>
        <h4 class="mb-1">${current.name}</h4>
        <div class="plan-price">${isFree ? "Falas" : formatAmount(current.price)}</div>
        <div class="text-muted">${current.speed} • ${current.data}</div>
        <ul class="plan-features mt-2">
          ${current.features.map(feature => `<li>${feature}</li>`).join("")}
        </ul>
      </div>
    `;
  })();

  servicesGrid.innerHTML = TELECOM_SERVICES.map(item => {
    const isCurrentPlan = item.name === user.profile.plan;
    const isFree = item.name === "No active plan";
    return `
    <div class="col-md-6">
      <div class="plan-card ${isCurrentPlan ? "current-plan" : ""}">
        <span class="notification-pill">${item.category}</span>
        <h5 class="mb-1">${item.name}</h5>
        <div class="plan-price">${isFree ? "Falas" : formatAmount(item.price)}</div>
        <div class="text-muted">${item.speed} • ${item.data}</div>
        <ul class="plan-features">
          ${item.features.map(feature => `<li>${feature}</li>`).join("")}
        </ul>
        <button class="btn ${isCurrentPlan ? "btn-outline-primary" : "btn-primary"} mt-auto service-select-btn" data-plan="${item.name}" data-free="${isFree}" type="button" ${isCurrentPlan ? "disabled" : ""}>
          ${isCurrentPlan ? "Plani Aktual" : isFree ? "Hiq Planin Aktiv" : "Zgjidh Paketën"}
        </button>
      </div>
    </div>
  `}).join("");

  const serviceCardNumber = document.getElementById("serviceCardNumber");
  const serviceExpiryDate = document.getElementById("serviceExpiryDate");
  const serviceCvv = document.getElementById("serviceCvv");
  const serviceBankIban = document.getElementById("serviceBankIban");

  attachInputFormatter(serviceCardNumber, formatCardNumberInput);
  attachInputFormatter(serviceExpiryDate, formatExpiryInput);
  attachInputFormatter(serviceCvv, value => normalizeDigits(value).slice(0, 4));
  bindCardCvvBehavior(serviceCardNumber, serviceCvv);
  attachInputFormatter(serviceBankIban, formatIbanInput);

  const syncServiceMethodFields = togglePaymentFields({
    methodSelectId: "servicePaymentMethod",
    cardSectionId: "serviceCardPaymentFields",
    paypalSectionId: "servicePaypalPaymentFields",
    bankSectionId: "serviceBankTransferFields",
    cardFieldIds: ["serviceCardHolder", "serviceCardNumber", "serviceExpiryDate", "serviceCvv"],
    paypalFieldIds: ["servicePaypalEmail"],
    bankFieldIds: ["serviceBankName", "serviceBankIban"]
  });

  function populateServiceModal(serviceName) {
    const selectedService = TELECOM_SERVICES.find(item => item.name === serviceName);
    if (!selectedService) return;

    document.getElementById("serviceSelectedPlan").value = selectedService.name;
    setText("serviceModalPlanName", selectedService.name);
    setText("serviceModalPlanAmount", formatAmount(selectedService.price));
    setText("serviceModalPlanMeta", `${selectedService.category} • ${selectedService.speed} • ${selectedService.data}`);

    purchaseForm?.reset();
    document.getElementById("serviceSelectedPlan").value = selectedService.name;
    syncServiceMethodFields();
    openSimpleModal("servicePurchaseModal");
  }

  document.querySelectorAll(".service-select-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedPlan = btn.dataset.plan;
      const isFree = btn.dataset.free === "true";
      if (!selectedPlan || selectedPlan === user.profile.plan) return;

      if (isFree) {
        // Show confirmation dialog for removing plan
        const confirmModal = document.getElementById("serviceConfirmFreePlanModal");
        if (confirmModal) {
          confirmModal.classList.add("active");
          document.getElementById("confirmFreePlanYes")?.addEventListener("click", () => {
            confirmModal.classList.remove("active");
            updateUser(user.email, { profile: { plan: "No active plan" } });
            telecomData.notifications.unshift({
              id: `NTF-${Date.now()}`,
              title: "Plani u hoq",
              message: "Plani aktiv u hoq me sukses. Mund të zgjedhësh një paketë të re kur të jesh gati.",
              type: "service",
              date: new Date().toLocaleDateString("sq-AL"),
              audience: "user",
              userEmail: user.email
            });
            persistTelecomData();
            if (window.toast) window.toast.show("Plani u hoq me sukses.", "success");
            renderServices();
          }, { once: true });
          document.getElementById("confirmFreePlanNo")?.addEventListener("click", () => {
            confirmModal.classList.remove("active");
          }, { once: true });
          confirmModal.addEventListener("click", e => {
            if (e.target === confirmModal) confirmModal.classList.remove("active");
          }, { once: true });
        }
        return;
      }

      populateServiceModal(selectedPlan);
    });
  });

  if (purchaseForm && !purchaseForm.dataset.bound) {
    purchaseForm.dataset.bound = "true";
    handleCustomValidation(purchaseForm, () => {
      const selectedPlan = document.getElementById("serviceSelectedPlan")?.value || "";
      const paymentMethod = document.getElementById("servicePaymentMethod")?.value || "";
      const selectedService = TELECOM_SERVICES.find(item => item.name === selectedPlan);

      if (!selectedService) return;
      if (!paymentMethod) {
        setFieldError(document.getElementById("servicePaymentMethod"), "Zgjidh metodën e pagesës.");
        return;
      }

      updateUser(user.email, { profile: { plan: selectedService.name } });

      telecomData.transactions.unshift({
        id: `TRX-2026-${Math.floor(Math.random() * 9000 + 1000)}`,
        date: new Date().toLocaleDateString("sq-AL"),
        method: paymentMethod,
        amount: selectedService.price,
        status: "Sukses",
        userEmail: user.email
      });
      telecomData.notifications.unshift({
        id: `NTF-${Date.now()}`,
        title: "Paketa u aktivizua me sukses",
        message: `Paketa ${selectedService.name} u aktivizua pas pagesës ${formatAmount(selectedService.price)}.`,
        type: "service",
        date: new Date().toLocaleDateString("sq-AL"),
        audience: "user",
        userEmail: user.email
      });
      persistTelecomData();

      closeSimpleModal("servicePurchaseModal");
      setText("serviceSuccessPlan", selectedService.name);
      setText("serviceSuccessAmount", formatAmount(selectedService.price));
      setText("serviceSuccessMethod", paymentMethod);
      openSimpleModal("serviceSuccessModal");
      renderServices();
    });
  }

  document.getElementById("closeServicePurchaseModal")?.addEventListener("click", () => closeSimpleModal("servicePurchaseModal"));
  document.getElementById("cancelServicePurchaseBtn")?.addEventListener("click", () => closeSimpleModal("servicePurchaseModal"));
  document.getElementById("servicePurchaseModal")?.addEventListener("click", event => {
    if (event.target === document.getElementById("servicePurchaseModal")) closeSimpleModal("servicePurchaseModal");
  });

  document.getElementById("closeServiceSuccessModal")?.addEventListener("click", () => closeSimpleModal("serviceSuccessModal"));
  document.getElementById("serviceSuccessDoneBtn")?.addEventListener("click", () => closeSimpleModal("serviceSuccessModal"));
  document.getElementById("serviceSuccessModal")?.addEventListener("click", event => {
    if (event.target === document.getElementById("serviceSuccessModal")) closeSimpleModal("serviceSuccessModal");
  });
}

function renderProfile() {
  const user = getCurrentUser();
  if (!user || user.role === "admin") return;

  const profile = user.profile;
  setText("profileName", `${profile.firstName} ${profile.lastName}`);
  setText("profileEmailText", user.email);
  setText("profilePlan", profile.plan);
  setText("profilePhoneText", profile.phone);
  setText("profileStatus", user.status);

  const profileAvatar = document.getElementById("profileAvatar");
  if (profileAvatar) profileAvatar.textContent = `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`.toUpperCase();

  const firstName = document.getElementById("profileFirstName");
  const lastName = document.getElementById("profileLastName");
  const email = document.getElementById("profileEmail");
  const phone = document.getElementById("profilePhone");
  const address = document.getElementById("profileAddress");
  const plan = document.getElementById("profilePlanSelect");

  if (firstName) firstName.value = profile.firstName;
  if (lastName) lastName.value = profile.lastName;
  if (email) email.value = user.email;
  if (phone) {
    phone.value = formatPhoneInput(profile.phone);
    attachInputFormatter(phone, formatPhoneInput);
  }
  if (address) address.value = profile.address;
  if (plan) plan.value = profile.plan;

  const form = document.getElementById("profileForm");
  if (form && form.dataset.profileBound !== "true") {
    form.dataset.profileBound = "true";
    const profileFields = [firstName, lastName, email, phone, address, plan].filter(Boolean);

    profileFields.forEach(field => {
      field.addEventListener("input", () => validateField(field));
      field.addEventListener("change", () => validateField(field));
    });

    form.addEventListener("submit", event => {
      event.preventDefault();

      let isValid = true;
      profileFields.forEach(field => {
        if (!validateField(field)) isValid = false;
      });
      if (!isValid) return;

      const freshUser = getCurrentUser();
      if (!freshUser) return;

      const nextEmail = email.value.trim().toLowerCase();
      if (emailExistsForAnotherUser(nextEmail, freshUser.email)) {
        setFieldError(email, "Ky email përdoret nga një llogari tjetër.");
        return;
      }

      const previousEmail = freshUser.email;
      updateUser(previousEmail, {
        email: nextEmail,
        profile: {
          firstName: normalizeTextSpaces(firstName.value),
          lastName: normalizeTextSpaces(lastName.value),
          phone: normalizePhoneStorage(phone.value),
          address: normalizeTextSpaces(address.value),
          plan: plan.value
        }
      });

      updateLinkedUserEmail(previousEmail, nextEmail);

      const auth = getAuthData();
      if (auth) {
        setAuth(auth.role, nextEmail, !!localStorage.getItem(APP_STORAGE.auth));
      }

      renderProfile();
      if (window.toast) window.toast.show("Profili u përditësua me sukses.", "success");
      else alert("Ndryshimet u ruajtën me sukses.");
    });
  }

  const pwForm = document.getElementById("changePasswordForm");
  if (pwForm && pwForm.dataset.passwordBound !== "true") {
    pwForm.dataset.passwordBound = "true";
    pwForm.addEventListener("submit", e => {
      e.preventDefault();
      let valid = true;

      const currentPw = document.getElementById("currentPassword");
      const currentPwErr = document.getElementById("currentPasswordError");
      const newPw = document.getElementById("newPasswordProfile");
      const newPwErr = document.getElementById("newPasswordProfileError");
      const confirmPw = document.getElementById("confirmNewPasswordProfile");
      const confirmPwErr = document.getElementById("confirmNewPasswordProfileError");

      const freshUser = getCurrentUser();
      if (!freshUser || currentPw.value !== freshUser.password) {
        if (currentPwErr) currentPwErr.textContent = "Fjalëkalimi aktual është i gabuar.";
        currentPw.classList.add("is-invalid");
        valid = false;
      } else {
        if (currentPwErr) currentPwErr.textContent = "";
        currentPw.classList.remove("is-invalid");
      }

      if (!isStrongPassword(newPw.value)) {
        if (newPwErr) newPwErr.textContent = "Fjalëkalimi i ri duhet të ketë të paktën 8 karaktere, një shkronjë të madhe, një të vogël dhe një numër.";
        newPw.classList.add("is-invalid");
        valid = false;
      } else {
        if (newPwErr) newPwErr.textContent = "";
        newPw.classList.remove("is-invalid");
      }

      if (newPw.value !== confirmPw.value) {
        if (confirmPwErr) confirmPwErr.textContent = "Fjalëkalimet nuk përputhen.";
        confirmPw.classList.add("is-invalid");
        valid = false;
      } else {
        if (confirmPwErr) confirmPwErr.textContent = "";
        confirmPw.classList.remove("is-invalid");
      }

      if (!valid || !freshUser) return;

      updateUser(freshUser.email, { password: newPw.value });
      pwForm.reset();
      if (window.toast) window.toast.show("Fjalëkalimi u ndryshua me sukses.", "success");
    });
  }

  const deleteForm = document.getElementById("deleteAccountForm");
  if (deleteForm && deleteForm.dataset.deleteBound !== "true") {
    deleteForm.dataset.deleteBound = "true";
    deleteForm.addEventListener("submit", event => {
      event.preventDefault();

      const freshUser = getCurrentUser();
      if (!freshUser) return;

      const confirmPhraseInput = document.getElementById("deleteAccountConfirmText");
      const confirmPasswordInput = document.getElementById("deleteAccountPassword");
      const confirmPhraseError = document.getElementById("deleteAccountConfirmTextError");
      const confirmPasswordError = document.getElementById("deleteAccountPasswordError");
      const requiredPhrase = "FSHI";
      let valid = true;

      if (String(confirmPhraseInput?.value || "").trim().toUpperCase() !== requiredPhrase) {
        if (confirmPhraseError) confirmPhraseError.textContent = `Shkruaj saktë fjalën ${requiredPhrase}.`;
        confirmPhraseInput?.classList.add("is-invalid");
        valid = false;
      } else {
        if (confirmPhraseError) confirmPhraseError.textContent = "";
        confirmPhraseInput?.classList.remove("is-invalid");
      }

      if ((confirmPasswordInput?.value || "") !== freshUser.password) {
        if (confirmPasswordError) confirmPasswordError.textContent = "Fjalëkalimi aktual nuk është i saktë.";
        confirmPasswordInput?.classList.add("is-invalid");
        valid = false;
      } else {
        if (confirmPasswordError) confirmPasswordError.textContent = "";
        confirmPasswordInput?.classList.remove("is-invalid");
      }

      if (!valid) return;

      const confirmed = window.confirm("Je i sigurt? Kjo do ta fshijë llogarinë dhe të gjitha të dhënat e lidhura me të. Ky veprim nuk kthehet mbrapsht.");
      if (!confirmed) return;

      const deleted = deleteUserAccount(freshUser.email);
      if (!deleted) {
        if (window.toast) window.toast.show("Llogaria nuk u fshi. Provo përsëri.", "error");
        return;
      }

      setFlashMessage("Llogaria u fshi me sukses.", "success");
      window.location.href = "index.html";
    });
  }
}

function renderAdmin() {
  if (!isAdmin()) return;

  const users = getUsers();
  const customers = users.filter(user => user.role !== "admin");
  setText("adminCustomers", String(customers.filter(user => user.status === "Aktiv").length));
  setText("adminOpenBills", String(telecomData.bills.filter(b => b.status !== "Paguar").length));
  setText("adminMonthlyRevenue", formatAmount(telecomData.transactions.filter(item => item.status === "Sukses").reduce((sum, item) => sum + item.amount, 0)));
  setText("adminPaymentsToday", "148");

  const customersTable = document.getElementById("adminCustomersTable");
  const billsTable = document.getElementById("adminBillsTable");

  if (customersTable) {
    customersTable.innerHTML = customers.map(customer => `
      <tr>
        <td>${customer.profile.firstName} ${customer.profile.lastName}</td>
        <td>${customer.email}</td>
        <td>${customer.profile.plan}</td>
        <td><span class="status-badge ${getStatusBadgeClass(customer.status)}">${customer.status}</span></td>
        <td>
          <div class="customer-actions">
            <button class="action-btn notify-customer-btn" type="button" data-email="${customer.email}">Njofto</button>
          </div>
        </td>
      </tr>
    `).join("");
  }

  if (billsTable) {
    const openBills = telecomData.bills.filter(bill => bill.status !== "Paguar");
    billsTable.innerHTML = openBills.map(bill => `
      <tr>
        <td>${bill.id}</td>
        <td>${bill.customer}</td>
        <td>${formatAmount(bill.amount)}</td>
      </tr>
    `).join("");
  }

  initAdminActions();
}

function openSimpleModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("active");
}

function closeSimpleModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove("active");
}

function initAdminActions() {
  const searchInput = document.getElementById("adminCustomerSearch");

  if (searchInput) {
    searchInput.oninput = () => {
      const value = searchInput.value.trim().toLowerCase();
      document.querySelectorAll("#adminCustomersTable tr").forEach(row => {
        row.classList.toggle("hidden", !row.textContent.toLowerCase().includes(value));
      });
    };
  }

  document.getElementById("closeAdminCustomerModal")?.addEventListener("click", () => closeSimpleModal("adminCustomerModal"));
  document.getElementById("cancelAdminCustomerModal")?.addEventListener("click", () => closeSimpleModal("adminCustomerModal"));
  document.getElementById("closeBroadcastModal")?.addEventListener("click", () => closeSimpleModal("broadcastModal"));
  document.getElementById("cancelBroadcastModal")?.addEventListener("click", () => closeSimpleModal("broadcastModal"));

  document.getElementById("adminCustomerModal")?.addEventListener("click", e => {
    if (e.target === document.getElementById("adminCustomerModal")) closeSimpleModal("adminCustomerModal");
  });
  document.getElementById("broadcastModal")?.addEventListener("click", e => {
    if (e.target === document.getElementById("broadcastModal")) closeSimpleModal("broadcastModal");
  });

  document.querySelectorAll(".notify-customer-btn").forEach(button => {
    button.onclick = () => {
      const email = button.dataset.email;
      const user = findUserByEmail(email);
      if (!user) return;
      currentManagedUserEmail = email;
      setText("adminCustomerMeta", `${user.profile.firstName} ${user.profile.lastName} • ${user.email}`);
      document.getElementById("adminCustomerNote").value = `Përshëndetje ${user.profile.firstName}, kemi një njoftim për llogarinë tuaj.`;
      openSimpleModal("adminCustomerModal");
    };
  });

  const saveBtn = document.getElementById("saveAdminCustomerBtn");
  if (saveBtn) {
    saveBtn.onclick = () => {
      if (!currentManagedUserEmail) return;
      const note = document.getElementById("adminCustomerNote").value.trim();
      if (!note) {
        const noteField = document.getElementById("adminCustomerNote");
        setFieldError(noteField, "Shkruaj njoftimin që do të dërgohet.");
        noteField?.focus();
        return;
      }

      setFieldError(document.getElementById("adminCustomerNote"), "");
      telecomData.notifications.unshift({
        id: `NTF-${Date.now()}`,
        title: "Njoftim nga administratori",
        message: note,
        type: "system",
        date: new Date().toLocaleDateString("sq-AL"),
        audience: "user",
        userEmail: currentManagedUserEmail
      });
      persistTelecomData();
      closeSimpleModal("adminCustomerModal");
      if (window.toast) window.toast.show("Njoftimi u dërgua me sukses.", "success");
    };
  }

  const adminBroadcastBtn = document.getElementById("adminBroadcastBtn");
  if (adminBroadcastBtn) {
    adminBroadcastBtn.onclick = () => openSimpleModal("broadcastModal");
  }

  const sendBtn = document.getElementById("sendBroadcastBtn");
  if (sendBtn) {
    sendBtn.onclick = () => {
      const title = document.getElementById("broadcastTitle").value.trim();
      const message = document.getElementById("broadcastMessage").value.trim();
      if (!title || !message) return;
      telecomData.notifications.unshift({
        id: `NTF-${Date.now()}`,
        title,
        message,
        type: "system",
        date: new Date().toLocaleDateString("sq-AL"),
        audience: "all"
      });
      persistTelecomData();
      document.getElementById("broadcastTitle").value = "";
      document.getElementById("broadcastMessage").value = "";
      closeSimpleModal("broadcastModal");
      if (window.toast) window.toast.show("Njoftimi u dërgua me sukses për të gjithë klientët.", "success");
    };
  }

  // Admin CSV export button
  const adminTopbarActions = document.querySelector('.topbar .topbar-actions');
  if (adminTopbarActions && !document.getElementById('adminCSVBtn')) {
    const csvBtn = document.createElement('button');
    csvBtn.id = 'adminCSVBtn';
    csvBtn.type = 'button';
    csvBtn.className = 'btn btn-outline-primary';
    csvBtn.innerHTML = '⬇ Eksporto Klientët';
    csvBtn.addEventListener('click', () => {
      const users = getUsers().filter(u => u.role !== 'admin');
      if (window.exportCSV) {
        window.exportCSV(users.map(u => ({
          name: `${u.profile.firstName} ${u.profile.lastName}`,
          email: u.email,
          plan: u.profile.plan,
          phone: u.profile.phone,
          status: u.status
        })), [
          { label: 'Emri', key: 'name' },
          { label: 'Email', key: 'email' },
          { label: 'Paketa', key: 'plan' },
          { label: 'Telefoni', key: 'phone' },
          { label: 'Statusi', key: 'status' }
        ], `klientet_${new Date().toISOString().slice(0,10)}.csv`);
      }
    });
    adminTopbarActions.insertBefore(csvBtn, adminTopbarActions.firstChild);
  }
}

function buildCityEmbedUrl(cityName) {
  const cityData = telecomStoreData[cityName];
  const cityQuery = cityData?.cityMapQuery || cityName;
  return `https://maps.google.com/maps?hl=sq&q=${encodeURIComponent(cityQuery)}&z=13&output=embed`;
}

function showCityOnMap(cityName) {
  const mapFrame = document.getElementById("storeMapFrame");
  const cityData = telecomStoreData[cityName];
  if (!mapFrame || !cityData) return;

  mapFrame.src = buildCityEmbedUrl(cityName);
  mapFrame.title = `Dyqanet Telecom Albania në ${cityName}`;

  document.querySelectorAll(".city-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.city === cityName);
  });
}

function initStoreMap() {
  const mapFrame = document.getElementById("storeMapFrame");
  if (!mapFrame) return;

  document.querySelectorAll(".city-btn").forEach(btn => {
    btn.addEventListener("click", () => showCityOnMap(btn.dataset.city));
  });

  showCityOnMap("Tirane");
}

function cleanupStaleModalState() {

  if (document.querySelector(".modal.show")) return;
  document.body.classList.remove("modal-open");
  document.body.style.removeProperty("padding-right");
  document.querySelectorAll(".modal-backdrop").forEach(backdrop => backdrop.remove());
}

function getModalInstance(modalId) {
  if (!window.bootstrap) return null;
  const modalEl = document.getElementById(modalId);
  if (!modalEl) return null;

  if (!modalEl.dataset.cleanupBound) {
    modalEl.addEventListener("hidden.bs.modal", cleanupStaleModalState);
    modalEl.dataset.cleanupBound = "true";
  }

  return bootstrap.Modal.getOrCreateInstance(modalEl);
}

function createChatMessage(type, sender, text) {
  return `
    <div class="chat-message ${type}">
      <span class="chat-meta">${sender}</span>
      ${text}
    </div>
  `;
}

function getEmployeeReply(message) {
  const lower = message.toLowerCase();
  if (lower.includes("fatur")) return "Për faturat, mund të kontrollosh seksionin 'Faturat' ose të hapësh detajet e secilës faturë nga lista.";
  if (lower.includes("pages") || lower.includes("pagu") || lower.includes("kart")) return "Për pagesat, përdor seksionin 'Pagesat'. Sigurohu që të kesh zgjedhur faturën e saktë dhe të kesh plotësuar të gjitha fushat e kartës.";
  if (lower.includes("internet") || lower.includes("rrjet") || lower.includes("teknik")) return "Për probleme teknike me internetin ose rrjetin, mund të regjistrojmë një kërkesë teknike dhe ekipi do ta verifikojë sa më shpejt.";
  if (lower.includes("paket") || lower.includes("shërbim") || lower.includes("sherbim")) return "Ne ofrojmë paketa të ndryshme për internet, telefon dhe kombinime shërbimesh. Mund t’i krahasosh te seksioni 'Shërbimet'.";
  return "Faleminderit për mesazhin. Një përfaqësues i customer service do të të ndihmojë për këtë kërkesë. Mund të japësh edhe më shumë detaje.";
}

function getAIReply(message) {
  const lower = message.toLowerCase();
  if (lower.includes("fatur")) return "Mund t’i kontrollosh faturat te faqja 'Faturat', ku mund të filtroni sipas statusit dhe të hapni edhe detajet e faturës.";
  if (lower.includes("pages") || lower.includes("kart")) return "Për të kryer pagesë, hap faqen 'Pagesat', zgjidh faturën dhe plotëso të dhënat e nevojshme. Sigurohu që të gjitha fushat të jenë plotësuar saktë.";
  if (lower.includes("transaksion")) return "Historikun e transaksioneve mund ta gjesh te faqja 'Transaksionet', ku mund të kërkosh sipas ID-së ose statusit.";
  if (lower.includes("profil") || lower.includes("email") || lower.includes("telefon")) return "Të dhënat e profilit mund t’i ndryshosh te faqja 'Profili'. Pas ruajtjes së ndryshimeve, ndërfaqja përditësohet automatikisht.";
  if (lower.includes("dyqan") || lower.includes("qytet") || lower.includes("maps")) return "Në faqen kryesore mund të zgjedhësh qytetin dhe të shohësh pikat e dyqaneve direkt në hartë.";
  if (lower.includes("paket")) return "Faqja 'Shërbimet' të lejon të krahasosh paketat dhe të zgjedhësh një plan tjetër.";
  return "Mund të të ndihmoj për faturat, pagesat, transaksionet, profilin, paketat ose dyqanet. Shkruaj pyetjen më konkretisht.";
}

function loadSupportIntro(channel) {
  const chatMessages = document.getElementById("chatMessages");
  if (!chatMessages) return;

  if (channel === "employee") {
    chatMessages.innerHTML = `
      ${createChatMessage("bot", "Punonjësi", "Përshëndetje! Mirë se erdhe te customer service. Si mund të të ndihmoj sot?")}
      ${createChatMessage("bot", "Punonjësi", "Mund të bësh pyetje për faturat, pagesat, paketat ose probleme teknike.")}
    `;
  } else {
    chatMessages.innerHTML = `
      ${createChatMessage("bot", "AI Chatbot", "Përshëndetje! Unë jam AI Chatbot i platformës Telecom Albania.")}
      ${createChatMessage("bot", "AI Chatbot", "Mund të të ndihmoj me pyetje rreth faturave, pagesave, profilit, transaksioneve dhe pikave të dyqaneve.")}
    `;
  }
}

function switchSupportChannel(channel) {
  currentSupportChannel = channel;
  document.getElementById("employeeChannelBtn")?.classList.toggle("active", channel === "employee");
  document.getElementById("aiChannelBtn")?.classList.toggle("active", channel === "ai");

  if (channel === "employee") {
    setText("chatTitle", "Bisedë me Punonjësin");
    setText("chatSubtitle", "Mund të bësh pyetje për faturat, pagesat dhe shërbimet.");
    setText("supportStatusText", "Punonjësi është online");
  } else {
    setText("chatTitle", "Bisedë me AI Chatbot");
    setText("chatSubtitle", "Merr përgjigje të shpejta për pyetjet më të zakonshme.");
    setText("supportStatusText", "AI Chatbot është aktiv");
  }
  loadSupportIntro(channel);
}

function initCustomerService() {
  const chatMessages = document.getElementById("chatMessages");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  if (!chatMessages || !chatForm || !chatInput) return;

  document.getElementById("employeeChannelBtn")?.addEventListener("click", () => switchSupportChannel("employee"));
  document.getElementById("aiChannelBtn")?.addEventListener("click", () => switchSupportChannel("ai"));

  const faqChipList = document.getElementById("faqChipList");
  if (faqChipList) {
    faqChipList.innerHTML = telecomData.faqs.map(question => `<button type="button" class="faq-chip" data-question="${question}">${question}</button>`).join("");
    faqChipList.querySelectorAll(".faq-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        chatInput.value = btn.dataset.question;
        chatInput.focus();
      });
    });
  }

  loadSupportIntro("employee");

  chatForm.addEventListener("submit", event => {
    event.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;

    chatMessages.innerHTML += createChatMessage("user", "Ti", message);
    chatInput.value = "";

    const reply = currentSupportChannel === "employee" ? getEmployeeReply(message) : getAIReply(message);
    const sender = currentSupportChannel === "employee" ? "Punonjësi" : "AI Chatbot";

    setTimeout(() => {
      chatMessages.innerHTML += createChatMessage("bot", sender, reply);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  });
}


function initGlobalActionBindings() {
  document.getElementById("sidebarSignOutBtn")?.addEventListener("click", signOutToHomepage);

  document.querySelectorAll("[data-history-back]").forEach(btn => {
    if (btn.dataset.bound === "true") return;
    btn.dataset.bound = "true";
    btn.addEventListener("click", () => window.history.back());
  });

  document.querySelectorAll("[data-toggle-password]").forEach(btn => {
    if (btn.dataset.bound === "true") return;
    btn.dataset.bound = "true";
    btn.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      const inputId = btn.getAttribute("data-toggle-password");
      const input = document.getElementById(inputId);
      if (!input) return;
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      btn.textContent = isPassword ? "🙈" : "👁";
      btn.setAttribute("aria-label", isPassword ? "Fshih fjalëkalimin" : "Shfaq fjalëkalimin");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  seedUsers();
  applyThemePreference();
  injectThemeToggle();

  if (guardPageAccess()) return;

  updateHomepageUI();
  protectLinks();
  updateSessionLinks();
  syncRoleUI();
  initGlobalActionBindings();
  consumeFlashMessage();

  initForms();
  initForgotPasswordForm();
  initResetPasswordForm();

  renderDashboard();
  renderBills();
  renderInvoiceDetails();
  renderPaymentPage();
  renderTransactions();
  renderNotifications();
  renderServices();
  renderProfile();
  renderAdmin();

  initStoreMap();
  initCustomerService();
});

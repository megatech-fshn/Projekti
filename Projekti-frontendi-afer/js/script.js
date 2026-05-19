const DEFAULT_USERS = [
  {
    email: "admin@telecomplus.al",
    password: "admin12345",
    role: "admin",
    status: "Aktiv",
    createdAt: "01/04/2026",
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
    createdAt: "04/05/2026",
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
    mapCenter: { lat: 41.3231, lng: 19.4414, label: "Durrës" },
    mapZoom: 13,
    showSearchPins: true,
    stores: [
      {
        name: "ONE Albania - Aleksandër Goga",
        address: "Lagjja nr. 6, Rruga Aleksandër Goga, Durrës",
        mapQuery: "ONE Albania, Lagjja nr.6, Rruga Aleksander Goga, Durres, Albania"
      },
      {
        name: "ONE Albania - Rruga Dëshmorët",
        address: "Lagjja nr. 12, Rruga Dëshmorët, Durrës",
        mapQuery: "ONE Albania, Lagjja nr.12, Rruga Deshmoret, Durres, Albania"
      },
      {
        name: "ONE Albania - Plazh",
        address: "Lagjja nr. 13, Rruga Pavarësia, Durrës",
        mapQuery: "ONE Albania, Lagjja nr. 13, Rruga Pavaresia, Durres, Albania"
      }
    ]
  },
  Vlore: {
    cityMapQuery: "ONE Albania stores in Vlore, Albania",
    mapCenter: { lat: 40.4661, lng: 19.4914, label: "Qendra e Vlorës" },
    mapZoom: 14,
    showSearchPins: true,
    stores: [
      {
        name: "ONE Albania - Qendra Vlorë",
        address: "Qendra e Vlorës, pranë Sheshit të Flamurit",
        mapQuery: "ONE Albania Vlore city center, Albania"
      },
      {
        name: "ONE Albania - Bulevardi Skele",
        address: "Lagjia Lef Sallata, Bulevardi Skele, Vlorë",
        mapQuery: "ONE Albania, Bulevardi Skele, Vlore, Albania"
      },
      {
        name: "ONE Albania - Aranit Serbi",
        address: "Lagjia 29 Nëntori, Rruga Aranit Serbi, Vlorë",
        mapQuery: "ONE Albania, Rruga Aranit Serbi, Vlore, Albania"
      },
      {
        name: "ONE Albania - Çole",
        address: "Lagjia Çole, Rruga Qeriba Derri, Vlorë",
        mapQuery: "ONE Albania, Rruga Qeriba Derri, Vlore, Albania"
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
    { id: "TRX-2026-1003", date: "28/02/2026", method: "Transfertë Bankare", amount: 2500, status: "Në proces", userEmail: "arber.kola@telecomplus.al" },
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

function formatTodayDate() {
  const now = new Date();
  const pad = value => String(value).padStart(2, "0");
  return `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
}

function formatDateDisplay(value) {
  if (!value) return "-";
  const raw = String(value).trim();
  const normalized = raw.replace(/[.-]/g, "/");
  let match = normalized.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  const pad = item => String(item).padStart(2, "0");
  if (match) return `${pad(match[1])}/${pad(match[2])}/${match[3]}`;

  match = normalized.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
  if (match) return `${pad(match[3])}/${pad(match[2])}/${match[1]}`;

  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return raw;
  return `${pad(parsed.getDate())}/${pad(parsed.getMonth() + 1)}/${parsed.getFullYear()}`;
}

function normalizeBrandCasing(value) {
  return String(value || "").replace(/telecom/ig, "TeleCom");
}

function normalizeUserForStorage(user) {
  const next = { ...user, profile: { ...(user.profile || {}) } };
  if (!next.createdAt) next.createdAt = formatTodayDate();
  if (String(next.role || "").toLowerCase() === "admin") {
    next.profile.firstName = normalizeBrandCasing(next.profile.firstName || "Admin");
    next.profile.lastName = normalizeBrandCasing(next.profile.lastName || "TeleCom");
  }
  return next;
}

function getUserDisplayName(user) {
  if (!user) return "-";
  const firstName = normalizeBrandCasing(user.profile?.firstName || "");
  const lastName = normalizeBrandCasing(user.profile?.lastName || "");
  return `${firstName} ${lastName}`.trim() || user.email || "-";
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
const USER_ONLY_PAGES = [
  "dashboard.html",
  "bills.html",
  "payments.html",
  "transactions.html",
  "profile.html",
  "notifications.html",
  "services.html",
  "invoice-details.html"
];
const GUEST_ONLY_PAGES = ["login.html", "register.html", "forgot-password.html", "reset-password.html"];

let currentSupportChannel = "employee";
let currentManagedUserEmail = null;
let adminCustomerModalInstance = null;
let broadcastModalInstance = null;

function seedUsers() {
  const rawUsers = localStorage.getItem(APP_STORAGE.users);
  if (!rawUsers) {
    localStorage.setItem(APP_STORAGE.users, JSON.stringify(DEFAULT_USERS.map(normalizeUserForStorage)));
    return;
  }

  try {
    const users = JSON.parse(rawUsers) || [];
    const normalized = users.map(normalizeUserForStorage);
    if (JSON.stringify(users) !== JSON.stringify(normalized)) {
      localStorage.setItem(APP_STORAGE.users, JSON.stringify(normalized));
    }
  } catch {
    localStorage.setItem(APP_STORAGE.users, JSON.stringify(DEFAULT_USERS.map(normalizeUserForStorage)));
  }
}

function getUsers() {
  seedUsers();
  try {
    return (JSON.parse(localStorage.getItem(APP_STORAGE.users)) || []).map(normalizeUserForStorage);
  } catch {
    return DEFAULT_USERS.map(normalizeUserForStorage);
  }
}

function saveUsers(users) {
  localStorage.setItem(APP_STORAGE.users, JSON.stringify((users || []).map(normalizeUserForStorage)));
}

function upsertUser(user) {
  if (!user?.email) return;
  const users = getUsers();
  const idx = users.findIndex(item => item.email.toLowerCase() === String(user.email).toLowerCase());
  const normalized = normalizeUserForStorage(user);
  if (idx === -1) users.push(normalized);
  else users[idx] = { ...users[idx], ...normalized, profile: { ...users[idx].profile, ...normalized.profile } };
  saveUsers(users);
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
  const auth = getAuthData();
  return !!auth?.isLoggedIn && !!findUserByEmail(auth.email);
}

function isAdmin() {
  const auth = getAuthData();
  if (!auth?.isLoggedIn || auth.role !== "admin") return false;
  return findUserByEmail(auth.email)?.role === "admin";
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

function isApiEnabled() {
  return !!window.TelecomAPI?.enabled;
}

async function runApiAction(methodName, payload, errorTarget = null) {
  if (!isApiEnabled() || typeof window.TelecomAPI?.[methodName] !== "function") return true;
  try {
    await window.TelecomAPI[methodName](payload);
    return true;
  } catch (error) {
    console.warn(`API ${methodName} failed`, error);
    const message = error?.message || "Lidhja me backend dështoi. Kontrollo API endpoint-in në XAMPP.";
    if (errorTarget) setFieldError(errorTarget, message);
    if (window.toast) window.toast.show(message, "error");
    return false;
  }
}

async function runApiLogin(email, password, rememberUser) {
  if (!isApiEnabled() || typeof window.TelecomAPI?.login !== "function") return null;
  try {
    return await window.TelecomAPI.login({ email, password, remember: rememberUser });
  } catch (error) {
    console.warn("API login failed", error);
    if (window.toast) window.toast.show(error?.message || "Login nga backend dështoi.", "error");
    return false;
  }
}

function clearAuth() {
  localStorage.removeItem(APP_STORAGE.auth);
  sessionStorage.removeItem(APP_STORAGE.authSession);
}

function redirectAfterLogin() {
  window.location.href = isAdmin() ? "admin.html" : "dashboard.html";
}

function signOutToHomepage() {
  clearAuth();
  window.location.href = "index.html";
}

function formatAmount(value) {
  return `${Number(value || 0).toLocaleString()} ALL`;
}

function parseLocalDateString(value) {
  const raw = String(value || "").trim();
  if (!raw) return new Date(0);

  const normalized = raw.replace(/[.-]/g, "/");
  let match = normalized.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (match) {
    const [, day, month, year] = match;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  match = normalized.match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
  if (match) {
    const [, year, month, day] = match;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed;
}

function getStatusBadgeClass(status) {
  if (["Paguar", "Sukses", "Aktiv"].includes(status)) return "success";
  if (["Papaguar", "Në proces", "Në pritje"].includes(status)) return "warning";
  return "danger";
}

function isBillPayable(status) {
  return ["Papaguar", "Vonuar"].includes(String(status || ""));
}

function getNonPayableMessage(status) {
  if (["Dështuar", "Deshtuar"].includes(String(status || ""))) {
    return "Kjo pagesë është shënuar si e dështuar dhe nuk mund të paguhet përsëri.";
  }
  if (String(status || "") === "Paguar") return "Kjo faturë është paguar tashmë.";
  return "Kjo faturë nuk mund të paguhet në këtë status.";
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function escapeAttr(value) {
  return escapeHTML(value).replace(/`/g, "&#96;");
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
    window.location.href = "login.html#login";
    return true;
  }

  if (ADMIN_ONLY_PAGES.includes(page) && isLoggedIn() && !isAdmin()) {
    window.location.href = "dashboard.html";
    return true;
  }

  if (USER_ONLY_PAGES.includes(page) && isLoggedIn() && isAdmin()) {
    window.location.href = "admin.html";
    return true;
  }

  if (GUEST_ONLY_PAGES.includes(page) && isLoggedIn()) {
    redirectAfterLogin();
    return true;
  }

  if (page === "reset-password.html") {
    const storedResetEmail = sessionStorage.getItem(APP_STORAGE.resetEmail);
    const resetIsAllowed = sessionStorage.getItem(APP_STORAGE.resetAllowed) === "true";
    if (!resetIsAllowed || !storedResetEmail || !findUserByEmail(storedResetEmail)) {
      sessionStorage.removeItem(APP_STORAGE.resetAllowed);
      sessionStorage.removeItem(APP_STORAGE.resetEmail);
      window.location.href = "forgot-password.html";
      return true;
    }
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
          window.location.href = "login.html#login";
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
  document.querySelectorAll(".sidebar-footer > a:not([data-sidebar-auth-link])").forEach(link => {
    link.textContent = "Kthehu në homepage";
    link.setAttribute("href", "index.html");
  });
}

function syncSidebarSessionUI() {
  const loggedIn = isLoggedIn();

  document.querySelectorAll("#sidebarUserInfo").forEach(el => {
    el.hidden = !loggedIn;
    el.style.display = loggedIn ? "" : "none";
  });

  document.querySelectorAll("#sidebarSignOutBtn").forEach(btn => {
    btn.hidden = !loggedIn;
    btn.style.display = loggedIn ? "" : "none";
  });

  document.querySelectorAll(".sidebar-footer").forEach(footer => {
    const existingGuestActions = footer.querySelector("[data-sidebar-guest-auth]");

    if (loggedIn) {
      existingGuestActions?.remove();
      return;
    }

    if (existingGuestActions) return;

    const guestActions = document.createElement("div");
    guestActions.className = "sidebar-guest-auth d-grid gap-2 mt-2";
    guestActions.setAttribute("data-sidebar-guest-auth", "true");
    guestActions.innerHTML = `
      <a href="login.html#login" class="btn btn-primary w-100" data-sidebar-auth-link="true">Login</a>
      <a href="login.html#register" class="btn btn-outline-light w-100" data-sidebar-auth-link="true">Register</a>
    `;
    footer.appendChild(guestActions);
  });
}

function syncRoleUI() {
  if (!isAdmin()) {
    document.querySelectorAll('a[href="admin.html"]').forEach(link => {
      link.style.display = "none";
    });
    return;
  }

  USER_ONLY_PAGES.forEach(page => {
    document.querySelectorAll(`a[href="${page}"]`).forEach(link => {
      link.style.display = "none";
    });
  });
}

function syncSidebarUserInfo() {
  syncSidebarSessionUI();

  const user = getCurrentUser();
  if (!user) {
    document.querySelectorAll("#sidebarUserName").forEach(el => {
      el.textContent = "—";
    });
    document.querySelectorAll("#sidebarUserRole").forEach(el => {
      el.textContent = "—";
      el.classList.remove("active-account-badge");
    });
    return;
  }

  const roleLabel = user.role === "admin" ? "⚙ Admin Aktiv" : "◉ Klient Aktiv";
  document.querySelectorAll("#sidebarUserName").forEach(el => {
    el.textContent = getUserDisplayName(user);
  });
  document.querySelectorAll("#sidebarUserRole").forEach(el => {
    el.textContent = roleLabel;
    el.classList.add("active-account-badge");
  });
}

const THEME_MODES = {
  light: { icon: "☀️", label: "White Mode", description: "Pamje e bardhë" },
  dark: { icon: "🌙", label: "Dark Mode", description: "Pamje e errët" },
  system: { icon: "💻", label: "System Mode", description: "Ndjek pajisjen" }
};

function getStoredThemeMode() {
  const savedTheme = localStorage.getItem(APP_STORAGE.theme);
  return THEME_MODES[savedTheme] ? savedTheme : "system";
}

function getSystemThemeMode() {
  if (!window.matchMedia) return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getEffectiveThemeMode(mode = getStoredThemeMode()) {
  return mode === "system" ? getSystemThemeMode() : mode;
}

function injectThemeToggle() {
  if (document.getElementById("themeFab")) return;

  const switcher = document.createElement("div");
  switcher.id = "themeSwitcher";
  switcher.className = "theme-switcher";
  switcher.innerHTML = `
    <button id="themeFab" class="theme-fab" type="button" aria-label="Zgjidh temën" aria-expanded="false" aria-controls="themeMenu">
      <span class="theme-fab-icon" aria-hidden="true">💻</span>
      <span class="theme-fab-text">System</span>
    </button>
    <div class="theme-menu" id="themeMenu" role="menu" aria-label="Zgjedhja e temës">
      ${Object.entries(THEME_MODES).map(([mode, data]) => `
        <button class="theme-menu-option" type="button" role="menuitemradio" data-theme-choice="${mode}" aria-checked="false" aria-label="${data.label}" title="${data.label}">
          <span class="theme-menu-icon" aria-hidden="true">${data.icon}</span>
          <span>
            <strong>${data.label}</strong>
            <small>${data.description}</small>
          </span>
        </button>
      `).join("")}
    </div>
  `;

  document.body.appendChild(switcher);
  lockThemeSwitcherToViewport(switcher);

  const fab = document.getElementById("themeFab");
  const menu = document.getElementById("themeMenu");

  fab.addEventListener("click", event => {
    event.stopPropagation();
    const isOpen = switcher.classList.toggle("open");
    fab.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("[data-theme-choice]").forEach(option => {
    option.addEventListener("click", () => {
      setThemeMode(option.dataset.themeChoice);
      switcher.classList.remove("open");
      fab.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", event => {
    if (!switcher.contains(event.target)) {
      switcher.classList.remove("open");
      fab.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      switcher.classList.remove("open");
      fab.setAttribute("aria-expanded", "false");
    }
  });

  initSystemThemeListener();
  syncThemeIcon();
}

function lockThemeSwitcherToViewport(switcher) {
  if (!switcher) return;

  const applyFixedPosition = () => {
    switcher.style.setProperty("position", "fixed", "important");
    switcher.style.setProperty("left", "var(--theme-switcher-left)", "important");
    switcher.style.setProperty("right", "auto", "important");
    switcher.style.setProperty("top", "auto", "important");
    switcher.style.setProperty("bottom", "var(--theme-switcher-bottom)", "important");
    switcher.style.setProperty("z-index", "10001", "important");
  };

  applyFixedPosition();
  window.addEventListener("resize", applyFixedPosition, { passive: true });
  window.addEventListener("orientationchange", applyFixedPosition, { passive: true });
}

function applyThemePreference() {
  const selectedMode = getStoredThemeMode();
  const effectiveMode = getEffectiveThemeMode(selectedMode);

  if (effectiveMode === "light") {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.removeAttribute("data-theme");
  }

  document.body.setAttribute("data-theme-mode", selectedMode);
  document.body.setAttribute("data-effective-theme", effectiveMode);
  syncThemeIcon();
}

function syncThemeIcon() {
  const btn = document.getElementById("themeFab");
  if (!btn) return;

  const selectedMode = getStoredThemeMode();
  const effectiveMode = getEffectiveThemeMode(selectedMode);
  const modeData = THEME_MODES[selectedMode];
  const shortLabel = selectedMode === "light" ? "White" : selectedMode === "dark" ? "Dark" : "System";

  btn.querySelector(".theme-fab-icon").textContent = modeData.icon;
  btn.querySelector(".theme-fab-text").textContent = shortLabel;
  btn.title = `${modeData.label} (${effectiveMode === "light" ? "White active" : "Dark active"})`;

  document.querySelectorAll(".theme-menu-option").forEach(option => {
    const isSelected = option.dataset.themeChoice === selectedMode;
    option.classList.toggle("active", isSelected);
    option.setAttribute("aria-checked", String(isSelected));
  });
}

function setThemeMode(mode) {
  if (!THEME_MODES[mode]) return;
  localStorage.setItem(APP_STORAGE.theme, mode);
  applyThemePreference();
  window.toast?.show?.(`${THEME_MODES[mode].label} u aktivizua.`, "success");
}

function toggleTheme() {
  const order = ["system", "light", "dark"];
  const current = getStoredThemeMode();
  const next = order[(order.indexOf(current) + 1) % order.length] || "system";
  setThemeMode(next);
}

function initSystemThemeListener() {
  if (window.__telecomSystemThemeListener || !window.matchMedia) return;
  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
  const onSystemThemeChange = () => {
    if (getStoredThemeMode() === "system") applyThemePreference();
  };

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", onSystemThemeChange);
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(onSystemThemeChange);
  }

  window.__telecomSystemThemeListener = true;
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
      <a href="login.html#register" class="btn btn-primary w-100 mt-4">Krijo Llogari</a>
    `;
    return;
  }

  const userEmail = getAuthData()?.email;
  const userBills = telecomData.bills.filter(b => b.userEmail === userEmail);
  const unpaidBills = userBills.filter(b => isBillPayable(b.status));
  const totalUnpaid = unpaidBills.reduce((sum, b) => sum + Number(b.amount || 0), 0);
  const recentBills = unpaidBills.length > 0 ? unpaidBills.slice(0, 2) : userBills.slice(0, 2);
  const hasUnpaid = unpaidBills.length > 0;

  const billRows = recentBills.map(b => `
    <div class="hero-bill-item">
      <div>
        <h6>${escapeHTML(b.service)}</h6>
        <small>${escapeHTML(b.id)} | ${escapeHTML(b.date)}</small>
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
        <li class="nav-item"><a class="nav-link" href="login.html#login">Login</a></li>
        <li class="nav-item"><a class="nav-link" href="login.html#register">Register</a></li>
      `;
    }

    if (heroActionArea) {
      heroActionArea.innerHTML = `
        <a href="login.html#login" class="btn btn-primary btn-lg px-4">Futu në Sistem</a>
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
        <a href="admin.html" class="btn btn-outline-light btn-lg px-4">Menaxho Klientët</a>
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
  return method === "Transfertë Bankare";
}

function getCardBrand(cardNumber) {
  const digits = normalizeDigits(cardNumber);
  if (/^3[47]/.test(digits)) return "amex";
  if (/^4/.test(digits)) return "visa";
  if (/^(?:5[1-5]|2(?:2[2-9]|[3-6]|7[01]|720))/.test(digits)) return "mastercard";
  if (/^3(?:0[0-5]|[68])/.test(digits)) return "diners";
  if (/^6(?:011|5)/.test(digits)) return "discover";
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

  form.addEventListener("submit", async event => {
    event.preventDefault();
    let isValid = true;
    fields.forEach(field => {
      if (!validateField(field)) isValid = false;
    });
    if (isValid && typeof onSuccess === "function") {
      const submitter = form.querySelector('[type="submit"]');
      const previousText = submitter?.textContent;
      if (submitter) submitter.disabled = true;
      try {
        await onSuccess(event, form);
      } finally {
        if (submitter) {
          submitter.disabled = false;
          submitter.textContent = previousText;
        }
      }
    }
  });
}


function initHomepageLoginPopup() {
  // Login is now part of the unified login/register page, not a separate popover.
}


function getRequestedAuthMode() {
  const page = getCurrentPage();
  const hashMode = window.location.hash.replace("#", "").trim().toLowerCase();
  const queryMode = new URLSearchParams(window.location.search).get("mode")?.trim().toLowerCase();

  if (["login", "register"].includes(hashMode)) return hashMode;
  if (["login", "register"].includes(queryMode)) return queryMode;
  return page === "register.html" ? "register" : "login";
}

function setAuthMode(mode, options = {}) {
  const normalizedMode = mode === "register" ? "register" : "login";
  const titles = {
    login: "Hyr në Llogari",
    register: "Krijo Llogari"
  };
  const subtitles = {
    login: "Vendos kredencialet për të hyrë në panelin tënd.",
    register: "Plotëso të dhënat për të krijuar profilin tënd në platformë."
  };

  document.querySelectorAll(".auth-tab[data-auth-tab]").forEach(tab => {
    const isActive = tab.dataset.authTab === normalizedMode;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  document.querySelectorAll("[data-auth-panel]").forEach(panel => {
    const isActive = panel.dataset.authPanel === normalizedMode;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });

  setText("authPageTitle", titles[normalizedMode]);
  setText("authPageSubtitle", subtitles[normalizedMode]);
  document.title = `Telecom Albania | ${normalizedMode === "register" ? "Register" : "Login"}`;

  if (options.updateHash) {
    const newUrl = `${window.location.pathname}${window.location.search}#${normalizedMode}`;
    history.replaceState(null, "", newUrl);
  }

  if (options.focus) {
    const firstInput = document.querySelector(`[data-auth-panel="${normalizedMode}"] input, [data-auth-panel="${normalizedMode}"] select`);
    setTimeout(() => firstInput?.focus(), 80);
  }
}

function initAuthSwitcher() {
  if (!document.querySelector(".auth-combined-card")) return;

  setAuthMode(getRequestedAuthMode(), { updateHash: false });

  document.querySelectorAll("[data-auth-tab]").forEach(control => {
    if (control.dataset.authSwitchBound === "true") return;
    control.dataset.authSwitchBound = "true";
    control.addEventListener("click", event => {
      event.preventDefault();
      setAuthMode(control.dataset.authTab, { updateHash: true, focus: true });
    });
  });

  window.addEventListener("hashchange", () => setAuthMode(getRequestedAuthMode(), { updateHash: false, focus: true }));
}

function initForms() {
  const loginForm = document.getElementById("loginForm");
  handleCustomValidation(loginForm, async () => {
    const email = document.getElementById("loginEmail")?.value.trim().toLowerCase() || "";
    const password = document.getElementById("loginPassword")?.value || "";
    const rememberUser = document.getElementById("rememberMe")?.checked || false;
    const loginError = document.getElementById("loginErrorMessage");

    const apiLogin = await runApiLogin(email, password, rememberUser);
    if (apiLogin === false) {
      loginError?.classList.remove("d-none");
      return;
    }
    if (apiLogin?.user) {
      const apiUser = normalizeUserForStorage({
        email: apiLogin.user.email || email,
        password: "",
        role: apiLogin.user.role || "user",
        status: apiLogin.user.status || "Aktiv",
        createdAt: apiLogin.user.createdAt || apiLogin.user.created_at || formatTodayDate(),
        profile: {
          firstName: apiLogin.user.firstName || apiLogin.user.first_name || apiLogin.user.profile?.firstName || "Përdorues",
          lastName: apiLogin.user.lastName || apiLogin.user.last_name || apiLogin.user.profile?.lastName || "",
          phone: apiLogin.user.phone || apiLogin.user.profile?.phone || "",
          address: apiLogin.user.address || apiLogin.user.profile?.address || "",
          plan: apiLogin.user.plan || apiLogin.user.profile?.plan || "No active plan",
          customerType: apiLogin.user.customerType || apiLogin.user.customer_type || apiLogin.user.profile?.customerType || "Individual"
        }
      });
      upsertUser(apiUser);
      loginError?.classList.add("d-none");
      setAuth(apiUser.role, apiUser.email, rememberUser);
      redirectAfterLogin();
      return;
    }

    const user = findUserByEmail(email);
    if (!user || user.password !== password || user.status !== "Aktiv") {
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

  handleCustomValidation(registerForm, async () => {
    const email = document.getElementById("registerEmail")?.value.trim().toLowerCase() || "";

    if (findUserByEmail(email)) {
      registerError?.classList.remove("d-none");
      return;
    }

    registerError?.classList.add("d-none");

    const city = document.getElementById("registerCity")?.value || "";
    const createdAt = formatTodayDate();
    const newUser = normalizeUserForStorage({
      email,
      password: document.getElementById("registerPassword")?.value || "",
      role: "user",
      status: "Aktiv",
      createdAt,
      profile: {
        firstName: normalizeTextSpaces(document.getElementById("firstName")?.value || ""),
        lastName: normalizeTextSpaces(document.getElementById("lastName")?.value || ""),
        phone: normalizePhoneStorage(document.getElementById("phoneNumber")?.value || ""),
        address: city || "Adresa nuk është specifikuar",
        plan: "No active plan",
        customerType: "Individual"
      }
    });

    const apiOk = await runApiAction("register", {
      email: newUser.email,
      password: newUser.password,
      firstName: newUser.profile.firstName,
      lastName: newUser.profile.lastName,
      phone: newUser.profile.phone,
      address: newUser.profile.address,
      createdAt: newUser.createdAt
    }, document.getElementById("registerEmail"));
    if (!apiOk) return;

    const users = getUsers();
    users.push(newUser);
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

    window.location.href = "login.html#login";
  });
}

function initForgotPasswordForm() {
  const form = document.getElementById("forgotPasswordForm");
  if (!form) return;

  const showForgotFeedback = (message, type = "danger") => {
    const feedbackMessage = document.getElementById("forgotFeedbackMessage");
    if (!feedbackMessage) return;

    feedbackMessage.textContent = message;
    feedbackMessage.className = `alert alert-${type} mt-4`;
  };

  const clearForgotFeedback = () => {
    const feedbackMessage = document.getElementById("forgotFeedbackMessage");
    if (!feedbackMessage) return;

    feedbackMessage.textContent = "";
    feedbackMessage.className = "alert mt-4 d-none";
  };

  handleCustomValidation(form, () => {
    const emailField = document.getElementById("forgotEmail");
    const email = emailField?.value.trim().toLowerCase() || "";
    const user = findUserByEmail(email);

    clearForgotFeedback();
    setFieldError(emailField, "");
    sessionStorage.removeItem(APP_STORAGE.resetAllowed);
    sessionStorage.removeItem(APP_STORAGE.resetEmail);

    if (!user) {
      showForgotFeedback("Ky email nuk ekziston në sistem. Kontrollo email-in ose krijo një llogari të re.", "danger");
      return;
    }

    sessionStorage.setItem(APP_STORAGE.resetAllowed, "true");
    sessionStorage.setItem(APP_STORAGE.resetEmail, email);
    showForgotFeedback("Email-i u gjet. Po të drejtojmë te faqja për të vendosur fjalëkalimin e ri.", "success");

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
    const emailField = document.getElementById("resetEmail");
    const email = emailField?.value.trim().toLowerCase() || "";
    const expectedEmail = sessionStorage.getItem(APP_STORAGE.resetEmail)?.trim().toLowerCase() || "";
    const newPassword = document.getElementById("newPassword")?.value || "";
    const user = findUserByEmail(email);

    if (!expectedEmail || email !== expectedEmail || !user) {
      setFieldError(emailField, "Kërkesa e rivendosjes nuk është e vlefshme. Nise procesin përsëri.");
      return;
    }

    updateUser(email, { password: newPassword });

    sessionStorage.removeItem(APP_STORAGE.resetAllowed);
    sessionStorage.removeItem(APP_STORAGE.resetEmail);

    successMessage?.classList.remove("d-none");

    setTimeout(() => {
      window.location.href = "login.html#login";
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
        <td>${escapeHTML(bill.id)}</td>
        <td>${escapeHTML(bill.service)}</td>
        <td>${escapeHTML(bill.date)}</td>
        <td>${formatAmount(bill.amount)}</td>
        <td><span class="status-badge ${getStatusBadgeClass(bill.status)}">${escapeHTML(bill.status)}</span></td>
      </tr>
    `).join("") || `<tr><td colspan="5" class="empty-row py-4">Nuk ka të dhëna faturash për këtë llogari.</td></tr>`;
  }

  const dashboardNotifications = document.getElementById("dashboardNotifications");
  if (dashboardNotifications) {
    dashboardNotifications.innerHTML = notifications.map(item => `
      <div class="notification-item">
        <strong>${escapeHTML(item.title)}</strong>
        <p>${escapeHTML(item.message)}</p>
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

    const overdueTitle = document.getElementById("overdueAlertTitle");
    const overdueDesc = document.getElementById("overdueAlertDesc");

    if (overdueBills.length > 0) {
      overdueAlert.style.display = "flex";
      if (overdueTitle) {
        overdueTitle.textContent =
          `⚠ Ke ${overdueBills.length} faturë${overdueBills.length > 1 ? " të vonuara" : " të vonuar"}!`;
      }
      if (overdueDesc) {
        overdueDesc.textContent =
          "Kryej pagesën sa më shpejt për të shmangur penalitete shtesë.";
      }
    } else if (dueSoonBills.length > 0) {
      overdueAlert.style.display = "flex";
      overdueAlert.style.background = "rgba(251,191,36,0.07)";
      overdueAlert.style.borderColor = "rgba(251,191,36,0.25)";
      if (overdueTitle) {
        overdueTitle.style.color = "var(--warning)";
        overdueTitle.textContent =
          `⏰ Ke ${dueSoonBills.length} faturë${dueSoonBills.length > 1 ? " me afat brenda 3 ditëve" : " me afat nesër ose sot"}!`;
      }
      if (overdueDesc) {
        overdueDesc.textContent =
          "Kontrollo faturat dhe kryej pagesën para afatit.";
      }
    }
  }
}

function renderMonthlyPaymentsChart(transactions) {
  const container = document.getElementById("monthlyPaymentsChart");
  if (!container) return;

  const MONTH_LABELS = ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Kor", "Gus", "Sht", "Tet", "Nën", "Dhj"];

  const monthTotals = {};
  transactions.filter(t => t.status === "Sukses").forEach(t => {
    const parts = (t.date || "").split("/");
    if (parts.length < 3) return;
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    const key = `${year}-${month}`;
    monthTotals[key] = (monthTotals[key] || { month, year, value: 0 });
    monthTotals[key].value += Number(t.amount || 0);
  });

  const now = new Date();
  const monthly = [];
  for (let i = 3; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const month = d.getMonth();
    const year = d.getFullYear();
    const key = `${year}-${month}`;
    monthly.push({ label: MONTH_LABELS[month], value: monthTotals[key]?.value || 0 });
  }

  const max = Math.max(...monthly.map(item => item.value), 1);

  if (monthly.every(item => item.value === 0)) {
    container.innerHTML = `<p class="text-muted" style="font-size:0.82rem;text-align:center;padding:20px 0">Nuk ka transaksione të suksesshme për t'u shfaqur.</p>`;
    return;
  }

  container.innerHTML = monthly.map(item => `
    <div class="simple-chart-row">
      <span class="chart-label">${item.label}</span>
      <div class="chart-track"><div class="chart-bar" style="width:${(item.value / max) * 100}%"></div></div>
      <span class="chart-value">${item.value > 0 ? item.value.toLocaleString("sq-AL") : "-"}</span>
    </div>
  `).join("");
}

function renderBillStatusChart(bills) {
  const container = document.getElementById("billStatusChart");
  if (!container) return;

  const paid = bills.filter(item => item.status === "Paguar").length;
  const unpaid = bills.filter(item => item.status === "Papaguar").length;
  const overdue = bills.filter(item => item.status === "Vonuar").length;
  const total = paid + unpaid + overdue;

  let donutStyle;
  if (total === 0) {
    donutStyle = "background: var(--bd);";
  } else {
    const paidPct = (paid / total) * 100;
    const unpaidPct = (unpaid / total) * 100;
    const p1 = paidPct.toFixed(1);
    const p2 = (paidPct + unpaidPct).toFixed(1);
    donutStyle = `background: conic-gradient(#16a34a 0 ${p1}%, #d97706 ${p1}% ${p2}%, #dc2626 ${p2}% 100%);`;
  }

  container.innerHTML = `
    <div class="donut-visual" style="${donutStyle}"></div>
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
        <td>${escapeHTML(bill.id)}</td>
        <td>${escapeHTML(bill.service)}</td>
        <td>${escapeHTML(bill.date)}</td>
        <td>${escapeHTML(bill.dueDate)}</td>
        <td>${formatAmount(bill.amount)}</td>
        <td><span class="status-badge ${getStatusBadgeClass(bill.status)}">${escapeHTML(bill.status)}</span></td>
        <td>
          <div class="customer-actions">
            <a href="invoice-details.html?id=${encodeURIComponent(bill.id)}" class="action-btn">Detaje</a>
            ${isBillPayable(bill.status) ? `<a href="payments.html?bill=${encodeURIComponent(bill.id)}" class="action-btn">Paguaj</a>` : `<button class="action-btn" disabled>${escapeHTML(bill.status)}</button>`}
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
        <td>${escapeHTML(item.description)}</td>
        <td>${escapeHTML(item.qty)}</td>
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
  const unpaidBills = getUserBills(user.email).filter(bill => isBillPayable(bill.status));

  billSelect.innerHTML = unpaidBills.length
    ? `<option value="">Zgjidh...</option>` + unpaidBills.map(bill => `
        <option value="${escapeAttr(bill.id)}" ${preselectedBill === bill.id ? "selected" : ""}>${escapeHTML(bill.id)} - ${escapeHTML(bill.service)} - ${formatAmount(bill.amount)}</option>
      `).join("")
    : `<option value="">Nuk ka fatura për pagesë</option>`;

  setText("paymentCustomerName", getUserDisplayName(user));

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
    const freshUnpaid = getUserBills(user.email).filter(bill => isBillPayable(bill.status));
    billSelect.innerHTML = freshUnpaid.length
      ? `<option value="">Zgjidh...</option>` + freshUnpaid.map(bill => `
          <option value="${escapeAttr(bill.id)}">${escapeHTML(bill.id)} - ${escapeHTML(bill.service)} - ${formatAmount(bill.amount)}</option>
        `).join("")
      : `<option value="">Nuk ka fatura për pagesë</option>`;
  }

  function updateSummary() {
    const selectedId = billSelect.value;
    const bill = getUserBills(user.email).find(item => item.id === selectedId && isBillPayable(item.status));

    setText("paymentAmount", bill ? formatAmount(bill.amount) : "0 ALL");
    setText("paymentService", bill ? bill.service : "-");
    setText("paymentStatus", bill ? bill.status : "-");
  }

  billSelect.addEventListener("change", updateSummary);
  updateSummary();
  syncMethodFields();

  handleCustomValidation(form, async () => {
    const selectedId = billSelect.value;
    const paymentMethod = document.getElementById("paymentMethod")?.value || "";
    const billIndex = telecomData.bills.findIndex(item => item.id === selectedId && item.userEmail === user.email);

    if (!selectedId || billIndex === -1) {
      setFieldError(billSelect, "Zgjidh një faturë të vlefshme për pagesë.");
      return;
    }

    if (!isBillPayable(telecomData.bills[billIndex].status)) {
      setFieldError(billSelect, getNonPayableMessage(telecomData.bills[billIndex].status));
      return;
    }

    if (!paymentMethod) {
      setFieldError(document.getElementById("paymentMethod"), "Zgjidh metodën e pagesës.");
      return;
    }

    const apiOk = await runApiAction("payBill", {
      billId: selectedId,
      userEmail: user.email,
      method: paymentMethod,
      amount: telecomData.bills[billIndex].amount
    }, billSelect);
    if (!apiOk) return;

    telecomData.bills[billIndex].status = "Paguar";
    telecomData.transactions.unshift({
      id: `TRX-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`,
      date: formatTodayDate(),
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
      date: formatTodayDate(),
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
        <td>${escapeHTML(item.id)}</td>
        <td>${escapeHTML(item.date)}</td>
        <td>${escapeHTML(item.method)}</td>
        <td>${formatAmount(item.amount)}</td>
        <td><span class="status-badge ${getStatusBadgeClass(item.status)}">${escapeHTML(item.status)}</span></td>
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
              ${!isRead ? '<span style="width:8px;height:8px;background:var(--indigo);border-radius:50%;flex-shrink:0;margin-top:4px;display:inline-block"></span><span class="notification-new-badge">New</span>' : ''}
              <strong>${escapeHTML(item.title)}</strong>
            </div>
            <span class="notification-pill">${typeIcons[item.type] || typeIcons.default} ${escapeHTML(item.type)}</span>
          </div>
          <p class="mb-2 mt-2">${escapeHTML(item.message)}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="timeline-meta">${escapeHTML(item.date)}</div>
            ${!isRead ? `<button type="button" class="btn-mark-read" data-id="${escapeAttr(item.id)}" style="background:none;border:none;color:var(--indigo);font-size:0.75rem;cursor:pointer;padding:0">✓ Shëno si të lexuar</button>` : ''}
          </div>
        </div>
      `;
    }).join("") : `<div class="timeline-card"><strong>Nuk ka njoftime</strong><p class="mb-0">Nuk u gjet asnjë njoftim sipas filtrit aktual.</p></div>`;

    list.querySelectorAll(".btn-mark-read").forEach(btn => {
      btn.addEventListener("click", async () => {
        const apiOk = await runApiAction("markNotificationRead", { notificationId: btn.dataset.id, userEmail: user.email });
        if (!apiOk) return;
        markRead(btn.dataset.id);
        updateList();
      });
    });

    list.querySelectorAll(".timeline-card--unread").forEach(card => {
      const markFromHover = async () => {
        const id = card.dataset.notifId;
        if (!id || readIds.includes(id)) return;
        const apiOk = await runApiAction("markNotificationRead", { notificationId: id, userEmail: user.email });
        if (!apiOk) return;
        markRead(id);
        updateList();
      };
      card.addEventListener("mouseenter", markFromHover, { once: true });
      card.addEventListener("focusin", markFromHover, { once: true });
      card.addEventListener("touchstart", markFromHover, { once: true, passive: true });
    });
  }

  document.getElementById("markAllReadBtn")?.addEventListener("click", async () => {
    const apiOk = await runApiAction("markAllNotificationsRead", { userEmail: user.email });
    if (!apiOk) return;
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
        <span class="notification-pill">${escapeHTML(current.category)}</span>
        <h4 class="mb-1">${escapeHTML(current.name)}</h4>
        <div class="plan-price">${isFree ? "Falas" : formatAmount(current.price)}</div>
        <div class="text-muted">${escapeHTML(current.speed)} • ${escapeHTML(current.data)}</div>
        <ul class="plan-features mt-2">
          ${current.features.map(feature => `<li>${escapeHTML(feature)}</li>`).join("")}
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
        <span class="notification-pill">${escapeHTML(item.category)}</span>
        <h5 class="mb-1">${escapeHTML(item.name)}</h5>
        <div class="plan-price">${isFree ? "Falas" : formatAmount(item.price)}</div>
        <div class="text-muted">${escapeHTML(item.speed)} • ${escapeHTML(item.data)}</div>
        <ul class="plan-features">
          ${item.features.map(feature => `<li>${escapeHTML(feature)}</li>`).join("")}
        </ul>
        <button class="btn ${isCurrentPlan ? "btn-outline-primary" : "btn-primary"} mt-auto service-select-btn" data-plan="${escapeAttr(item.name)}" data-free="${isFree}" type="button" ${isCurrentPlan ? "disabled" : ""}>
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

    const selectedPlanInput = document.getElementById("serviceSelectedPlan");
    if (selectedPlanInput) selectedPlanInput.value = selectedService.name;
    setText("serviceModalPlanName", selectedService.name);
    setText("serviceModalPlanAmount", formatAmount(selectedService.price));
    setText("serviceModalPlanMeta", `${selectedService.category} • ${selectedService.speed} • ${selectedService.data}`);

    purchaseForm?.reset();
    if (selectedPlanInput) selectedPlanInput.value = selectedService.name;
    syncServiceMethodFields();
    openSimpleModal("servicePurchaseModal");
  }

  document.querySelectorAll(".service-select-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedPlan = btn.dataset.plan;
      const isFree = btn.dataset.free === "true";
      if (!selectedPlan || selectedPlan === user.profile.plan) return;

      if (isFree) {
        // Show confirmation dialog for removing plan.
        // Use onclick assignments so cancel/reopen cycles cannot stack stale listeners.
        const confirmModal = document.getElementById("serviceConfirmFreePlanModal");
        const confirmYes = document.getElementById("confirmFreePlanYes");
        const confirmNo = document.getElementById("confirmFreePlanNo");
        if (confirmModal) {
          const closeFreePlanModal = () => confirmModal.classList.remove("active");
          confirmModal.classList.add("active");

          if (confirmYes) {
            confirmYes.onclick = async () => {
              closeFreePlanModal();
              const apiOk = await runApiAction("removeServicePlan", { userEmail: user.email });
              if (!apiOk) return;
              updateUser(user.email, { profile: { plan: "No active plan" } });
              telecomData.notifications.unshift({
                id: `NTF-${Date.now()}`,
                title: "Plani u hoq",
                message: "Plani aktiv u hoq me sukses. Mund të zgjedhësh një paketë të re kur të jesh gati.",
                type: "service",
                date: formatTodayDate(),
                audience: "user",
                userEmail: user.email
              });
              persistTelecomData();
              if (window.toast) window.toast.show("Plani u hoq me sukses.", "success");
              renderServices();
            };
          }

          if (confirmNo) confirmNo.onclick = closeFreePlanModal;
          confirmModal.onclick = event => {
            if (event.target === confirmModal) closeFreePlanModal();
          };
        }
        return;
      }

      populateServiceModal(selectedPlan);
    });
  });

  if (purchaseForm && !purchaseForm.dataset.bound) {
    purchaseForm.dataset.bound = "true";
    handleCustomValidation(purchaseForm, async () => {
      const selectedPlan = document.getElementById("serviceSelectedPlan")?.value || "";
      const paymentMethod = document.getElementById("servicePaymentMethod")?.value || "";
      const selectedService = TELECOM_SERVICES.find(item => item.name === selectedPlan);

      if (!selectedService) return;
      if (!paymentMethod) {
        setFieldError(document.getElementById("servicePaymentMethod"), "Zgjidh metodën e pagesës.");
        return;
      }

      const apiOk = await runApiAction("buyService", {
        userEmail: user.email,
        serviceId: selectedService.id,
        serviceName: selectedService.name,
        amount: selectedService.price,
        paymentMethod: document.getElementById("servicePaymentMethod")?.value || ""
      });
      if (!apiOk) return;

      updateUser(user.email, { profile: { plan: selectedService.name } });

      telecomData.transactions.unshift({
        id: `TRX-${new Date().getFullYear()}-${Math.floor(Math.random() * 9000 + 1000)}`,
        date: formatTodayDate(),
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
        date: formatTodayDate(),
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
  setText("profileCreatedAt", formatDateDisplay(user.createdAt));

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
    const profileFields = [firstName, lastName, email, phone, address].filter(Boolean);

    profileFields.forEach(field => {
      field.addEventListener("input", () => validateField(field));
      field.addEventListener("change", () => validateField(field));
    });

    form.addEventListener("submit", async event => {
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
      const apiOk = await runApiAction("updateProfile", {
        previousEmail,
        email: nextEmail,
        firstName: normalizeTextSpaces(firstName.value),
        lastName: normalizeTextSpaces(lastName.value),
        phone: normalizePhoneStorage(phone.value),
        address: normalizeTextSpaces(address.value)
      }, email);
      if (!apiOk) return;

      updateUser(previousEmail, {
        email: nextEmail,
        profile: {
          firstName: normalizeTextSpaces(firstName.value),
          lastName: normalizeTextSpaces(lastName.value),
          phone: normalizePhoneStorage(phone.value),
          address: normalizeTextSpaces(address.value)
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
  const now = new Date();
  const successfulTransactions = telecomData.transactions.filter(item => item.status === "Sukses");
  const transactionsThisMonth = successfulTransactions.filter(item => {
    const trxDate = parseLocalDateString(item.date);
    return trxDate.getFullYear() === now.getFullYear() && trxDate.getMonth() === now.getMonth();
  });
  const paymentsToday = successfulTransactions.filter(item => {
    const trxDate = parseLocalDateString(item.date);
    return trxDate.getFullYear() === now.getFullYear()
      && trxDate.getMonth() === now.getMonth()
      && trxDate.getDate() === now.getDate();
  });

  setText("adminCustomers", String(customers.filter(user => user.status === "Aktiv").length));
  setText("adminOpenBills", String(telecomData.bills.filter(b => isBillPayable(b.status)).length));
  setText("adminMonthlyRevenue", formatAmount(transactionsThisMonth.reduce((sum, item) => sum + item.amount, 0)));
  setText("adminPaymentsToday", String(paymentsToday.length));

  const customersTable = document.getElementById("adminCustomersTable");
  const billsTable = document.getElementById("adminBillsTable");

  if (customersTable) {
    customersTable.innerHTML = customers.map(customer => `
      <tr>
        <td>${escapeHTML(getUserDisplayName(customer))}</td>
        <td>${escapeHTML(customer.email)}</td>
        <td>${escapeHTML(customer.profile.plan)}</td>
        <td><span class="status-badge ${getStatusBadgeClass(customer.status)}">${escapeHTML(customer.status)}</span></td>
        <td>
          <div class="customer-actions">
            <button class="action-btn notify-customer-btn" type="button" data-email="${escapeAttr(customer.email)}">Njofto</button>
          </div>
        </td>
      </tr>
    `).join("");
  }

  if (billsTable) {
    const openBills = telecomData.bills.filter(bill => isBillPayable(bill.status));
    billsTable.innerHTML = openBills.map(bill => `
      <tr>
        <td>${escapeHTML(bill.id)}</td>
        <td>${escapeHTML(bill.customer)}</td>
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
      setText("adminCustomerMeta", `${getUserDisplayName(user)} • ${user.email}`);
      const noteField = document.getElementById("adminCustomerNote");
      if (noteField) {
        noteField.value = `Përshëndetje ${normalizeBrandCasing(user.profile.firstName)}, kemi një njoftim për llogarinë tuaj.`;
      }
      openSimpleModal("adminCustomerModal");
    };
  });

  const saveBtn = document.getElementById("saveAdminCustomerBtn");
  if (saveBtn) {
    saveBtn.onclick = async () => {
      if (!currentManagedUserEmail) return;
      const noteField = document.getElementById("adminCustomerNote");
      const note = noteField?.value.trim() || "";
      if (!note) {
        setFieldError(noteField, "Shkruaj njoftimin që do të dërgohet.");
        noteField?.focus();
        return;
      }

      setFieldError(noteField, "");
      const apiOk = await runApiAction("sendCustomerNotification", {
        userEmail: currentManagedUserEmail,
        title: "Njoftim nga administratori",
        message: note,
        type: "system"
      }, noteField);
      if (!apiOk) return;

      telecomData.notifications.unshift({
        id: `NTF-${Date.now()}`,
        title: "Njoftim nga administratori",
        message: note,
        type: "system",
        date: formatTodayDate(),
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
    sendBtn.onclick = async () => {
      const titleField = document.getElementById("broadcastTitle");
      const messageField = document.getElementById("broadcastMessage");
      const title = titleField?.value.trim() || "";
      const message = messageField?.value.trim() || "";
      if (!title || !message) {
        if (!title) setFieldError(titleField, "Shkruaj titullin e njoftimit.");
        if (!message) setFieldError(messageField, "Shkruaj mesazhin e njoftimit.");
        return;
      }
      setFieldError(titleField, "");
      setFieldError(messageField, "");
      const apiOk = await runApiAction("broadcastNotification", { title, message, type: "system" });
      if (!apiOk) return;

      telecomData.notifications.unshift({
        id: `NTF-${Date.now()}`,
        title,
        message,
        type: "system",
        date: formatTodayDate(),
        audience: "all"
      });
      persistTelecomData();
      if (titleField) titleField.value = "";
      if (messageField) messageField.value = "";
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
  if (!cityData) {
    return `https://maps.google.com/maps?hl=sq&q=${encodeURIComponent(cityName)}&z=13&output=embed`;
  }

  const zoom = cityData.mapZoom || 13;
  const cityQuery = cityData.cityMapQuery || cityName;

  if (cityData.mapCenter && cityData.showSearchPins) {
    const { lat, lng } = cityData.mapCenter;
    return `https://maps.google.com/maps?hl=sq&q=${encodeURIComponent(cityQuery)}&ll=${lat},${lng}&z=${zoom}&output=embed`;
  }

  if (cityData.mapCenter) {
    const { lat, lng, label } = cityData.mapCenter;
    const pointLabel = label || cityName;
    const coordinateQuery = `${lat},${lng} (${pointLabel})`;
    return `https://maps.google.com/maps?hl=sq&q=${encodeURIComponent(coordinateQuery)}&z=${zoom}&output=embed`;
  }

  return `https://maps.google.com/maps?hl=sq&q=${encodeURIComponent(cityQuery)}&z=${zoom}&output=embed`;
}

function renderCityStoreList() {
  const container = document.getElementById("cityStoresList");
  if (container) {
    container.replaceChildren();
    container.hidden = true;
  }
}

function showCityOnMap(cityName) {
  const mapFrame = document.getElementById("storeMapFrame");
  const cityData = telecomStoreData[cityName];
  if (!mapFrame || !cityData) return;

  mapFrame.src = buildCityEmbedUrl(cityName);
  mapFrame.title = `Dyqanet Telecom Albania në ${cityName}`;
  renderCityStoreList();

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
  const safeType = type === "user" ? "user" : "bot";
  return `
    <div class="chat-message ${safeType}">
      <span class="chat-meta">${escapeHTML(sender)}</span>
      ${escapeHTML(text)}
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
    faqChipList.innerHTML = telecomData.faqs.map(question => `<button type="button" class="faq-chip" data-question="${escapeAttr(question)}">${escapeHTML(question)}</button>`).join("");
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

    chatMessages.insertAdjacentHTML("beforeend", createChatMessage("user", "Ti", message));
    chatInput.value = "";

    const reply = currentSupportChannel === "employee" ? getEmployeeReply(message) : getAIReply(message);
    const sender = currentSupportChannel === "employee" ? "Punonjësi" : "AI Chatbot";

    setTimeout(() => {
      chatMessages.insertAdjacentHTML("beforeend", createChatMessage("bot", sender, reply));
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
  initHomepageLoginPopup();
  initAuthSwitcher();
  protectLinks();
  updateSessionLinks();
  syncRoleUI();
  syncSidebarUserInfo();
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

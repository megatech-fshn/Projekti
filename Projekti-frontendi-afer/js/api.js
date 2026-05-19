/*
  Telecom Albania API client
  --------------------------
  This file prepares the frontend for a PHP/MySQL backend running in XAMPP.
  Demo mode stays active until TELECOM_API_BASE_URL or localStorage.telecomApiBaseUrl is set.

  Example in browser console while backend is running:
  localStorage.setItem("telecomApiBaseUrl", "http://localhost/telecom-api");
*/
(function () {
  const DEFAULT_BASE_URL = window.TELECOM_API_BASE_URL || localStorage.getItem("telecomApiBaseUrl") || "";

  function normalizeBaseUrl(value) {
    return String(value || "").trim().replace(/\/+$/, "");
  }

  async function request(path, options = {}) {
    const baseUrl = normalizeBaseUrl(localStorage.getItem("telecomApiBaseUrl") || DEFAULT_BASE_URL);
    if (!baseUrl) {
      throw new Error("API base URL is not configured.");
    }

    const response = await fetch(`${baseUrl}${path}`, {
      method: options.method || "GET",
      headers: {
        "Accept": "application/json",
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...(options.headers || {})
      },
      credentials: "include",
      body: options.body ? JSON.stringify(options.body) : undefined
    });

    let data = null;
    const text = await response.text();
    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Backend returned invalid JSON.");
      }
    }

    if (!response.ok || data?.success === false) {
      throw new Error(data?.message || `API request failed (${response.status}).`);
    }

    return data || { success: true };
  }

  const api = {
    get baseUrl() {
      return normalizeBaseUrl(localStorage.getItem("telecomApiBaseUrl") || DEFAULT_BASE_URL);
    },
    get enabled() {
      return Boolean(this.baseUrl);
    },
    setBaseUrl(url) {
      localStorage.setItem("telecomApiBaseUrl", normalizeBaseUrl(url));
    },
    clearBaseUrl() {
      localStorage.removeItem("telecomApiBaseUrl");
    },

    login(payload) {
      return request("/auth/login.php", { method: "POST", body: payload });
    },
    register(payload) {
      return request("/auth/register.php", { method: "POST", body: payload });
    },
    updateProfile(payload) {
      return request("/users/update-profile.php", { method: "POST", body: payload });
    },
    changePassword(payload) {
      return request("/users/change-password.php", { method: "POST", body: payload });
    },

    getBills(email) {
      return request(`/bills/list.php?email=${encodeURIComponent(email)}`);
    },
    payBill(payload) {
      return request("/payments/pay-bill.php", { method: "POST", body: payload });
    },
    getTransactions(email) {
      return request(`/transactions/list.php?email=${encodeURIComponent(email)}`);
    },

    buyService(payload) {
      return request("/services/buy.php", { method: "POST", body: payload });
    },
    removeServicePlan(payload) {
      return request("/services/remove-plan.php", { method: "POST", body: payload });
    },

    getNotifications(email) {
      return request(`/notifications/list.php?email=${encodeURIComponent(email)}`);
    },
    markNotificationRead(payload) {
      return request("/notifications/mark-read.php", { method: "POST", body: payload });
    },
    markAllNotificationsRead(payload) {
      return request("/notifications/mark-all-read.php", { method: "POST", body: payload });
    },

    sendCustomerNotification(payload) {
      return request("/admin/send-notification.php", { method: "POST", body: payload });
    },
    broadcastNotification(payload) {
      return request("/admin/broadcast-notification.php", { method: "POST", body: payload });
    },
    getStores() {
      return request("/stores/list.php");
    }
  };

  window.TelecomAPI = api;
})();

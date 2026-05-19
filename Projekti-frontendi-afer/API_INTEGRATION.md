# API Integration për backend PHP/MySQL/XAMPP

Ky version ka shtuar `js/api.js`, një shtresë API që lidh frontend-in me backend-in pa prishur demo-n me `localStorage`.

## Si aktivizohet API

Kur backend-i PHP është gati në XAMPP, vendos base URL nga browser console:

```js
localStorage.setItem("telecomApiBaseUrl", "http://localhost/telecom-api");
```

Ose vendose direkt në `js/api.js` te `DEFAULT_BASE_URL`.

Nëse base URL është bosh, faqja punon në demo mode me `localStorage`.

## Endpoint-et që frontend-i pret

Backend-i mund t'i krijojë këto file PHP:

```text
POST /auth/login.php
POST /auth/register.php
POST /users/update-profile.php
POST /users/change-password.php
GET  /bills/list.php?email=...
POST /payments/pay-bill.php
GET  /transactions/list.php?email=...
POST /services/buy.php
POST /services/remove-plan.php
GET  /notifications/list.php?email=...
POST /notifications/mark-read.php
POST /notifications/mark-all-read.php
POST /admin/send-notification.php
POST /admin/broadcast-notification.php
GET  /stores/list.php
```

## Formati i përgjigjes JSON

Për sukses:

```json
{ "success": true, "message": "OK" }
```

Për login sukses mund të kthehet edhe user-i:

```json
{
  "success": true,
  "user": {
    "email": "arber.kola@telecomplus.al",
    "role": "user",
    "status": "Aktiv",
    "firstName": "Arbër",
    "lastName": "Kola",
    "phone": "+355692457812",
    "address": "Tiranë",
    "plan": "Internet Unlimited 300 Mbps",
    "createdAt": "04/05/2026"
  }
}
```

Për gabim:

```json
{ "success": false, "message": "Mesazhi i gabimit" }
```

## Shënim për pagesat e dështuara

Frontend-i tani lejon pagesë vetëm për faturat me status:

```text
Papaguar
Vonuar
```

Nëse statusi është `Dështuar` ose `Paguar`, fatura nuk lejohet të paguhet përsëri.

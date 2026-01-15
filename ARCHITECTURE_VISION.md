# Architecture Strategy: The "Loose Coupling" Model

You asked two critical questions:
1.  **Does Firebase Free Tier work?** (Yes, it's excellent).
2.  **Should we keep Chat CRM separate from the Website?** (Yes, absolutely).

Here is the recommendation based on your "No Code Change" and "Low Maintenance" constraints.

---

## 1. The Verdict: Keep Them Separate (For Now)

**Do NOT try to build a "Unified Super App" yet.**
Trying to make your website, CRM, and Chat all one system usually leads to "Zombie Code"—features that are hard to maintain and expensive to fix.

### The Recommended "Triad" Model:

1.  **The Storefront (Website/Netlify)**
    *   **Role:** Catch interest, explain value, capture leads.
    *   **Tech:** React (Vite) on Netlify.
    *   **Data:** Sends leads to **Google Sheets/Airtable** (via Tally).
    *   **Auth:** *None needed yet.* Public access.

2.  **The Engine (LMS + Chat CRM)**
    *   **Role:** Sell and Teach.
    *   **Tech:**
        *   **Sales:** WhatsApp (WAPlus) / Telegram.
        *   **Delivery:** Your external LMS (`learn.greybrain.ai`).
    *   **Auth:** handled by the LMS (Teachable/Thinkific/Canvas etc already have login).

3.  **The Future Layer (Firebase)**
    *   **Role:** Custom Tools (e.g., if you build a custom "AI Diagnosis Tool").
    *   **Tech:** Firebase Auth + Firestore.

---

## 2. Firebase Free Tier: The Facts

If you *do* decide to add Login later (e.g., for a "Alumni Directory" on the site):

*   **Auth:** Free for **50,000 monthly active users**. (Huge limit).
*   **Database (Firestore):** Free for **1GB storage** and **50k reads/day**. (Plenty for text data).
*   **Hosting:** Firebase Hosting is free (similar to Netlify).
*   **Verdict:** It is the best Free Tier in the industry.

### However, "Using Auth" = "Code Changes"
Even though the *service* is free, using it requires building:
*   Sign Up / Login Forms.
*   "Forgot Password" flows.
*   Protected Routes (redirecting if not logged in).
*   State Management (tracking `currentUser`).

**Since you requested "No Code Change" right now, stick to the Tally form approach.** It gives you the *data* of a registered user without the *engineering cost* of an Auth system.

---

## 3. Summary Map

| Component | Current Solution (Fast) | Future Solution (Scalable) |
| :--- | :--- | :--- |
| **Hosting** | **Netlify** (Free, automated git deploys) | Netlify or Firebase Hosting |
| **Database** | **Google Sheets** (Connected via Tally) | Firebase Firestore |
| **Auth** | **None** (LMS handles student logins) | Firebase Auth |
| **CRM** | **WAPlus** (Browser Extension) | Dedicated CRM (HubSpot/Salesforce) |

**Final Advice:**
Host on Netlify. Use Tally -> Google Sheets for leads. Keep using WhatsApp for sales.
**Only turn on Firebase Auth when you build a specific tool (like a custom AI app) that requires it.** Don't add it just for a static info site.

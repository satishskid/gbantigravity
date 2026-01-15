# LMS Styling & Announcment Guide

## 1. Matching 'Learn.GreyBrain.AI' to the Corporate Style

To unify your LMS (likely running on a platform like Graphy, Teachable, or similar) with the new `greybrain.ai` aesthetic, you need to apply a few key "Design Tokens."

### **Design Tokens (The Genetic Code of the Brand)**

*   **Font Family:** `Inter`, `system-ui`, `-apple-system`, `sans-serif`.
*   **Headings:** Thick, Bold (weights 700-900). Ideally `Outfit` or `Plus Jakarta Sans`, but standard bold sans-serif works.
*   **Colors:**
    *   **Background:** `#FFFFFF` (White) or `#F9FAFB` (Gray-50).
    *   **Text:** `#111827` (Gray-900) for headings, `#6B7280` (Gray-500) for body.
    *   **Accent/Links:** `#2563EB` (Blue-600) or Black `#000000`.
    *   **Buttons:** Black background, White text. Rounded corners.
*   **Shapes:**
    *   **Cards:** `border-radius: 16px` or `24px` (Large roundness).
    *   **Buttons:** `border-radius: 8px` or `12px`.
    *   **Shadows:** Soft, diffused shadows. `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);`

### **CSS Snippet (For Custom CSS / Code Injection)**

If your LMS allows "Custom CSS" or "Code Injection" in the header, paste this:

```css
/* Typography */
body, html {
    font-family: 'Inter', system-ui, sans-serif !important;
    color: #111827;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 800 !important;
    letter-spacing: -0.025em; /* Tight tracking */
}

/* Primary Buttons */
.btn-primary, button.primary, .course-enroll-btn {
    background-color: #111827 !important; /* Gunmetal/Black */
    color: #ffffff !important;
    border-radius: 12px !important;
    padding: 12px 24px !important;
    font-weight: 600 !important;
    text-transform: none !important; /* Avoid all caps */
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border: none !important;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

/* Cards (Course Cards) */
.card, .course-card {
    border-radius: 20px !important;
    border: 1px solid #E5E7EB !important;
    background: #FFFFFF !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05) !important;
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
}
```

---

## 2. Integrating LMS Announcements

To show announcements from `learn.greybrain.ai` on your main website:

### **Strategy A: The Manual (No-Code) approach (Recommended for now)**
Since most turnkey LMS platforms don't have an open public API for *announcements* specifically, the most reliable way is to have a dedicated formatting component on your `Home` or `Academy` page that you manually update.

**Why?** It ensures perfect styling and prevents "Empty State" or broken widget errors.

**Implementation:**
We can add an "Alert Bar" or "News Ticker" to the top of the Academy page.
*   **Example:** "New Course Dropped: GenAI Express Batch 4 starts Dec 15"

### **Strategy B: The Widget / Embed**
If your LMS supports "Widgets", they usually provide an `<iframe>` code.
*   *Downside:* Iframes are ugly, slow, and hard to style. They will break the "Jony Ive" aesthetic.

### **Recommendation**
stick to the **Manual Ticker** inside your React code or use a Headless CMS (like Contentful or Sanity) later to push updates to both the site and the LMS without touching code.

For now, rely on your **Telegram/WhatsApp** channels as the *primary* real-time notification engine (which we just added to the site!).

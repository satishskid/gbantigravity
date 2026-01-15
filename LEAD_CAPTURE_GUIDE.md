# How to Set Up the "Smart Lead Form"

> **Goal:** Unified data capture. When a user clicks "Subscribe" or "Join", they go to ONE form, filling their details once. The Admin sees all data in ONE place (Airtable).

## Step 1: Create the Form (Tally.so - Recommended)

1.  Go to **[Tally.so](https://tally.so)** (Free, No Code).
2.  Create a New Form called **"GreyBrain Community"**.
3.  Add these Questions:
    *   **Name** (Short Answer)
    *   **Email** (Email)
    *   **Phone / WhatsApp** (Number) - *Crucial for your Chat CRM.*
    *   **"What are you interested in?"** (Multiple Choice):
        *   [ ] Just Subscribing to Newsletter
        *   [ ] GenAI Institute (Fellowship)
        *   [ ] GenAI Express (Workshop)
        *   [ ] Spiritual Health (Community)
4.  **Publish** the form. Copy the **Share URL**.

## Step 2: Connect to a Database (The "Truth" DB)

You have two main options:

### Option A: Airtable (Best Interface)
*   **Cost:** Free for up to 1,000 records (rows) per base.
*   **Pros:** Looks like a real app, easy to filter/sort.
*   **Cons:** Paid plan ($20/mo) needed if you grow past 1,000 leads.
*   **Setup:** In Tally, Go to **Integrations** -> **Airtable**.

### Option B: Google Sheets (100% Free & Unlimited)
*   **Cost:** Free forever.
*   **Pros:** Unlimited rows, everyone knows how to use it.
*   **Cons:** It's just a spreadsheet, less "app-like".
*   **Setup:**
    1.  In Tally, Go to **Integrations** -> **Google Sheets**.
    2.  Connect your Google Account.
    3.  Select "Create new spreadsheet".
    4.  **Result:** Every signup adds a row to your sheet automatically.

## Step 3: Update the Website Link

1.  Copy your Tally Form URL (e.g., `https://tally.so/r/w7e0K9`).
2.  Open the file `src/constants.js` in your project.
3.  Update the line:
    ```javascript
    LEAD_CAPTURE: "https://tally.so/r/YOUR_FORM_ID", 
    ```
4.  **Done!** Now every "Subscribe" and "Notify Me" button on your site instantly sends data to your new system.

---

## Why this works better?
*   **Single Click:** User clicks -> Form -> Done.
*   **Central Data:** No more checking emails vs LMS vs WhatsApp. It's all in Airtable.
*   **Instant Stats:** Airtable creates charts ("50 new leads today") automatically.

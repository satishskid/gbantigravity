# GreyBrain Blog Strategy: The "Daily Hack" Protocol

**To:** Content Team
**From:** Global Marketing Manager
**Subject:** MANDATORY Metadata Tags for Website Automation

**Context:**
Our website (`greybrain.ai`) is now **INTELLIGENT**. It automatically reads our Medium posts to update the "Daily Tools" on the homepage.
For this to work, you **MUST** include specific "Hidden Tags" in your articles.

---

## 1. Writing for "ClinicalAI" (@GreyBrain)

Every time you write a technical article or a model review, you must include **TWO** invisible tags at the very bottom of the article.

### The Tags to Copy-Paste:
1.  **The Model Tag:**
    *   **Format:** `[[MODEL: Model Name Here]]`
    *   *Example:* `[[MODEL: DeepSeek-V3-Medical]]`
    *   *Where:* Bottom of article.

2.  **The Prompt Tag:**
    *   **Format:** `[[PROMPT: Paste the exact prompt text here]]`
    *   *Example:* `[[PROMPT: Act as a triage nurse. Review the attached symptoms list and output a priority score (1-5) with reasoning.]]`
    *   *Where:* Bottom of article.

### Example Article Structure:
> **Title:** Why DeepSeek is the new Medical Standard
>
> **Body:** ... (Your normal 500-word article) ...
>
> **Footer (Crucial for Website):**
> `[[MODEL: DeepSeek-R1 (Open Source)]]`
> `[[PROMPT: Analyze this patient history for subtle autoimmune markers. Cross-reference with 2025 Rheumatology guidelines.]]`

---

## 2. Writing for "SoulAI" (@Sage_AI)

Every time you write a reflection or philosophical piece, include **ONE** invisible tag for the "Daily Soul Hack".

### The Tag to Copy-Paste:
1.  **The Hack Tag:**
    *   **Format:** `[[SOUL_HACK: Actionable advice here]]`
    *   *Example:* `[[SOUL_HACK: Before your first meeting, close your eyes for 60 seconds. VISUALIZE the outcome you want, not the stress you fear.]]`
    *   *Where:* Bottom of article.

### Example Article Structure:
> **Title:** The Neuroscience of Silence
>
> **Body:** ... (Your normal article on meditation) ...
>
> **Footer (Crucial for Website):**
> `[[SOUL_HACK: The "4-7-8 Breath": Inhale for 4s, Hold for 7s, Exhale for 8s. Repeat 3 times to reset cortisol.]]`

---

## 3. Writing for "Lens" (Cinema & Culture)

For the **Lens** page, we display a "Daily Intelligence Briefing" at the top. This is a longer, multi-paragraph summary.

### The Tag to Copy-Paste:
1.  **The Narrative Tag:**
    *   **Format:** `[[LENS_NARRATIVE: Paste your full text here]]`
    *   *Note:* You can include newlines and multiple paragraphs inside the brackets.
    *   *Where:* Bottom of article.

### Example Article Structure:
> **Title:** Review: The Smuggler's Web
>
> **Body:** ... (Your normal movie review) ...
>
> **Footer (Crucial for Website):**
> `[[LENS_NARRATIVE:`
> `🎬 Today's Morning Brief: Jan 15, 2026`
>
> `1. Most Popular`
> `Taskaree: The Smuggler's Web (Netflix) is trending #1.`
>
> `2. Most Critiqued`
> `Haq (Netflix): A courtroom drama...]]`

---

---

## 4. THE COPY-PASTE CHEAT SHEET (Use This!)

**Instructions:** 
1. Go to the very bottom of your Medium article.
2. Hit "Enter" to create a new line.
3. **Copy the exact block below** for your category.
4. Replace the text inside the brackets with your content.
5. **Publish.**

### 🏥 For ClinicalAI (@GreyBrain Posts)
*Copy this block and fill it in:*
```text
[[MODEL: Model Name (e.g. DeepSeek-V3)]]
[[PROMPT: Paste your full prompt here. It can be long.]]
```

### 🧘 For SoulAI (@Sage_AI Posts)
*Copy this block and fill it in:*
```text
[[SOUL_HACK: Actionable advice here. e.g. "Take a 5-min walk."]]
```

### 🎬 For Lens (@GreyBrainer Posts)
*Copy this block and fill it in:*
```text
[[LENS_NARRATIVE:
🎬 Today's Morning Brief: Jan 15, 2026

1. Trending Now
Movie Name (Platform): Short summary.

2. Critical View
Movie Name (Platform): Why it matters.
]]
```

**⚠️ IMPORTANT:** Do not change the spelling of `[[MODEL:` or `[[PROMPT:` etc. The website robot matches these exact words.

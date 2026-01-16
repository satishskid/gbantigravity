# Retrospective: Content System & Feed Architecture

## 1. The "Robust Feed Fetcher" Pattern
We encountered significant instability with `api.rss2json.com` (returning 500 errors). To guarantee content delivery, we implemented a dual-strategy fetcher in `src/utils/mediumService.js`:
- **Primary Strategy**: standard `rss2json` (best for JSON).
- **Fallback Strategy**: Fetch raw XML via a CORS proxy (`api.allorigins.win`) and parse it client-side using `DOMParser`.

**Key Lesson**: Do not rely on a single public RSS-to-JSON bridge. Always have a raw XML fallback.

## 2. Dynamic Content via Metadata Hooks
To power widgets like "Prompt of the Day" or "Soul Hacks" without a backend, we use **Metadata Hooks** in Medium posts.

### Syntax
Place these tags anywhere in your Medium article body. They are stripped from the preview text but extracted by the app.
- `[[PROMPT: ...]]` -> Populates DIY Prompt widget.
- `[[MODEL: Name | Tag | Description | URL]]` -> Populates Model of the Day.
- `[[SOUL_HACK: ...]]` -> Populates Daily Soul Hack card.
- `[[LENS_NARRATIVE: ...]]` -> Populates Live Intelligence Briefing.

**Important**: The system automatically strips HTML tags (like `<p>`) from these extracted values to ensure clean rendering.

## 3. Configuration & Routing
We clarified the mapping between routes, components, and feed handles:

| UI Section | Route | Component | Correct Feed Handle |
| :--- | :--- | :--- | :--- |
| **The Lab** | `/lab` | `Lab.jsx` | `@ClinicalAI` |
| **Clinical AI** | `/clinical-ai` | `Health.jsx` | `@ClinicalAI` |
| **Soul** | `/soul` | `Soul.jsx` | `@Sage_AI` |
| **Lens** | `/lens` | `Lens.jsx` | `@GreyBrainer` |

**Missed Step Resolved**: We initially missed updating `Health.jsx` (`/clinical-ai`) which was pointing to the legacy `@GreyBrain` handle, causing a "Loading stream..." hang. Both Lab and Health now correctly point to `@ClinicalAI`.

## 4. Typography Rules
- **Modules**: For 2-line module names with long words (e.g. "Physician-Scientist"), use **abbreviations** (e.g., "Phy-Sci-") to maintain standard font sizes (`text-sm` or `text-base`). Avoid reducing font size (`text-xs`) just to fit text, as it breaks visual hierarchy.

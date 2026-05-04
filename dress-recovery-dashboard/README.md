# DRESS Recovery Dashboard

**[Open the dashboard →](index.html)**

A bilingual (English / Nepali) family-facing recovery tracker for a patient with DRESS Syndrome (Drug Reaction with Eosinophilia and Systemic Symptoms). Displays 20+ lab markers across four organ systems — kidneys, liver, blood & immune, electrolytes — with daily scoring, trend analysis, composite charts, and a heatmap calendar.

No build step. No server. Open `index.html` in any modern browser.

---

## What it shows

| Tab | Content |
|---|---|
| Overview | Recovery ring cards, composite trend chart, clinical timeline |
| DRESS | Plain-language explainer of DRESS Syndrome |
| Kidney | Creatinine, BUN, eGFR, urine output — full marker set with charts |
| Liver | ALT, AST, bilirubin, ALP — trend charts |
| Blood & Immune | CBC, eosinophils, ferritin — trend charts |
| Electrolytes | Sodium, potassium, CO₂, phosphorus — trend charts |
| Graphs | All-system composite views |
| Heatmap | 20-day recovery calendar |

---

## Technology

| Layer | Choice |
|---|---|
| Runtime | Vanilla HTML / CSS / JS — no framework, no bundler |
| Charts | [Chart.js](https://www.chartjs.org/) (CDN) |
| Fonts | Google Fonts (CDN) — Newsreader, Inter Tight, Noto Sans Devanagari |
| Languages | English and Nepali, switchable in the toolbar |
| Palettes | Warm (default), Clinical, Editorial — switchable in the toolbar |

---

## Privacy

No patient name, date of birth, location, or other identifying information is present in this repository. Lab values and clinical timeline are the only data.

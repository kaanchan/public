// Auto-generated — do not edit by hand.
// Source: feedback/*.md files bundled for offline use in feedback-ui/index.html
// Regenerate by re-running the build task for issue #39.

window.V1_REPORTS = {
  grammar: `# Grammar & Punctuation Review

**Document:** LiaZamfir.ReaserchPractice.WorkInProgress.md  
**Analysis Date:** 2026-05-30  
**Pass:** Light  
**Analyzer:** Grammar & Language  
**Language Quality Score:** 7.5/10  

---

## Summary

The dissertation is written in fluent, scholarly Romanian with a consistent academic register appropriate for a psychology master's thesis. The theoretical sections demonstrate sophisticated syntactic control and precise use of domain-specific terminology. The most significant systematic problem is a large volume of **backslash artifacts** inherited from Google Docs Markdown export — these appear on virtually every page and will look unprofessional to an examiner. There are no cedilla-form diacritic errors (ş/ţ); all Romanian diacritics use the correct comma-below forms (ș/ț). Beyond the backslash issue, the principal concerns are: a handful of repeated-word and misspelling errors, inconsistent hyphenation of the key term *autocritică* / *auto-critică*, at least two citation year mismatches between in-text references and the reference list, and two lines of APA template placeholder text that were not removed before submission.

---

## Issues Found

### GRAM-001
- **Pass:** light
- **Severity:** critical
- **Section:** Throughout document (virtually every section)
- **Line:** ~17, 39, 72, 76, 97, 99, 104, 118, 136, 147, 154, 200, and all table rows with numeric values
- **Category:** backslash-artifact
- **Original:** \`(Single-Case Experimental Design \\- SCED)\` / \`\\*p*\\<.05\` / \`*a\\*b\\*c*\` / \`Tabel 1\\.\` / \`*α*\\=.852\` / \`n\\<3\`
- **Suggested:** \`(Single-Case Experimental Design – SCED)\` / \`*p*<.05\` / \`*a*×*b*×*c*\` / \`Tabel 1.\` / \`*α*=.852\` / \`n<3\`
- **Reason:** Google Docs Markdown export escapes special characters with a leading backslash. In rendered Markdown the backslash disappears, but in raw text (as submitted) every escaped character appears as \`\\-\`, \`\\.\`, \`\\*\`, \`\\<\`, \`\\=\`, \`\\(\`, \`\\)\`. This is a systematic export artifact affecting dozens of occurrences throughout the document. All backslashes before punctuation marks (\`-\`, \`.\`, \`*\`, \`<\`, \`=\`, \`(\`, \`)\`, \`[\`, \`]\`) must be removed.

---

### GRAM-002
- **Pass:** light
- **Severity:** critical
- **Section:** Document header / before Introducere section
- **Line:** ~23–25
- **Category:** register
- **Original:** \`**The Title of Your Paper**\` / \`Start your paper here. Be sure to indent all paragraphs in the body of your paper.\`
- **Suggested:** (delete both lines entirely)
- **Reason:** These are APA Word template placeholder strings that were not removed before submission. Their presence in a submitted dissertation is a critical formatting error that signals the document was not properly finalised.

---

### GRAM-003
- **Pass:** light
- **Severity:** high
- **Section:** Măsuri și Materiale — Măsuri
- **Line:** ~100
- **Category:** grammar
- **Original:** \`Vivacitatea imagisticii mentale (moderator-trăsătură) a fost evaluată evaluată prin Vividness of Visual Imagery Questionnaire\`
- **Suggested:** \`Vivacitatea imagisticii mentale (moderator-trăsătură) a fost evaluată prin Vividness of Visual Imagery Questionnaire\`
- **Reason:** Verbul *evaluată* este repetat de două ori consecutiv — eroare de editare.

---

### GRAM-004
- **Pass:** light
- **Severity:** high
- **Section:** Măsuri și Materiale — Măsuri
- **Line:** ~104
- **Category:** grammar
- **Original:** \`forma scurtă a scalei de experinețiere (The Experiencing Scale\`
- **Suggested:** \`forma scurtă a scalei de experiențiere (The Experiencing Scale\`
- **Reason:** Cuvântul *experiențiere* este ortografiat incorect (*experinețiere* — literele *n* și *ț* sunt inversate). Aceasta este o eroare de tastare în denumirea unui instrument de măsurare central al studiului.

---

### GRAM-005
- **Pass:** light
- **Severity:** high
- **Section:** Rezultate — Analiza idiografică
- **Line:** ~283
- **Category:** grammar
- **Original:** \`identificate prin mărimea efectului (ES) și regresia segmentat.\`
- **Suggested:** \`identificate prin mărimea efectului (ES) și regresia segmentată.\`
- **Reason:** *Regresia* este substantiv feminin și cere acordul adjectival feminin *segmentată*, nu forma masculin-neutră *segmentat*.

---

### GRAM-006
- **Pass:** light
- **Severity:** high
- **Section:** Rezultate — Mecanismele schimbării din sesiuni
- **Line:** ~313
- **Category:** grammar
- **Original:** \`efectul direct al calității imaginilor din sesiune asupra autocriticii a fost complet nesemnificati\`
- **Suggested:** \`efectul direct al calității imaginilor din sesiune asupra autocriticii a fost complet nesemnificativ\`
- **Reason:** *Nesemnificativ* este ortografiat incomplet (*nesemnificati* — lipsește litera *v* finală). Aceasta este o eroare de tastare în propoziția ce enunță rezultatul principal al Ipotezei 2.

---

### GRAM-007
- **Pass:** light
- **Severity:** high
- **Section:** Discuții — Mecanismele de sesiune
- **Line:** ~323
- **Category:** grammar
- **Original:** \`aceasta din urmă fiind predictorul direct direct al scăderii auto-criticii zilnice\`
- **Suggested:** \`aceasta din urmă fiind predictorul direct al scăderii autocriticii zilnice\`
- **Reason:** *Direct* este repetat de două ori consecutiv — eroare de editare.

---

### GRAM-008
- **Pass:** light
- **Severity:** high
- **Section:** Rezumat
- **Line:** ~19
- **Category:** grammar
- **Original:** \`unii subiecți au reflectat un proces clinic pozitiv de de-automatizare și conștientizare\`
- **Suggested:** \`unii subiecți au reflectat un proces clinic pozitiv de de-automatizare a conștientizării\`
- **Reason:** Construcția \`de de-automatizare\` produce un șir fonetic \`de de-\` stângaci din cauza coliziunii prepoziției *de* cu prefixul *de-* al termenului compus. O soluție este reformularea prepoziției sau a structurii nominale. Dacă termenul *de-automatizare* este preferat (ca termen tehnic), varianta minimă acceptabilă este eliminarea primului *de*: \`un proces clinic pozitiv de de-automatizare și conștientizare a modului dur de autoraportare\` rămâne cu ambiguitate fonică; varianta \`un proces clinic pozitiv de conștientizare și de-automatizare a modului dur de autoraportare\` evită coliziunea. Aceeași construcție apare și la linia ~316 și ~325.

---

### GRAM-009
- **Pass:** light
- **Severity:** high
- **Section:** Introducere
- **Line:** ~28
- **Category:** grammar
- **Original:** \`(Dao et. al, 2020; Halamova et al., 2022)\` și \`(Dao et. al, 2020)\`
- **Suggested:** \`(Dao et al., 2020; Halamová et al., 2022)\` și \`(Dao et al., 2020)\`
- **Reason:** Două erori distincte: (1) *et. al* este o formă greșită — abrevierea corectă este *et al.* (punctul urmează *al*, nu *et*); (2) numele autorului apare ca *Halamova* (fără accent) în timp ce toate celelalte apariții și lista de referințe folosesc forma corectă *Halamová*. Aceeași eroare \`et. al\` apare de două ori la linia 28.

---

### GRAM-010
- **Pass:** light
- **Severity:** high
- **Section:** Cadru teoretic — Mecanismul procesual
- **Line:** ~50
- **Category:** grammar
- **Original:** \`(Marciniak et al, 2020; Dao et al., 2021)\`
- **Suggested:** \`(Marciniak et al., 2020; Dao et al., 2021)\`
- **Reason:** *et al* este lipsit de punctul final obligatoriu (*et al.*). Forma corectă este *et al.,* cu punct după *al* și virgulă după an în paranteze APA.

---

### GRAM-011
- **Pass:** light
- **Severity:** high
- **Section:** Introducere / Cadru teoretic
- **Line:** ~27, ~33
- **Category:** grammar
- **Original:** \`(Wakelin et al., 2021; Werner et al., 2015; Gilbert & Irons, 2005)\` și \`constituind un factor de vulnerabilitate transdiagnostic (Gilbert & Irons, 2005)\`
- **Suggested:** \`(Gilbert & Irons, 2004)\` în ambele locuri
- **Reason:** Citatele în text folosesc anul 2005, dar lista de referințe conține două lucrări Gilbert & Irons cu anul 2004 și nicio lucrare din 2005. Examinatorul va observa această neconcordanță. Anul trebuie verificat și corectat în conformitate cu sursa primară.

---

### GRAM-012
- **Pass:** light
- **Severity:** high
- **Section:** Cadru teoretic — Autocritica și autocompasiunea
- **Line:** ~34
- **Category:** grammar
- **Original:** \`(Blatt et al., 1982; Firestone, 2001)\`
- **Suggested:** \`(Blatt et al., 1982; Firestone, 2025)\`
- **Reason:** Citatul în text indică *Firestone, 2001*, dar lista de referințe conține o singură lucrare Firestone, datată 2025. Neconcordanță an-referință care trebuie corectată.

---

### GRAM-013
- **Pass:** light
- **Severity:** high
- **Section:** Ipotezele Cercetării
- **Line:** ~73
- **Category:** punctuation
- **Original:** \`cu niveluri mai ridicate de experiențiere (Exp) , activare emoțională\`
- **Suggested:** \`cu niveluri mai ridicate de experiențiere (Exp), activare emoțională\`
- **Reason:** Spațiu înainte de virgulă — regulă de punctuație română: niciun spațiu nu precede semnele de punctuație \`,\` \`;\` \`:\` \`.\` \`!\` \`?\`.

---

### GRAM-014
- **Pass:** light
- **Severity:** high
- **Section:** Măsuri și Materiale — Măsuri
- **Line:** ~99
- **Category:** punctuation
- **Original:** \`(Karvounides et al., 2016\\) , utilizând o singură întrebare  cu ancorare numerică\`
- **Suggested:** \`(Karvounides et al., 2016), utilizând o singură întrebare cu ancorare numerică\`
- **Reason:** Două erori: (1) spațiu înainte de virgulă (același tipar ca GRAM-013); (2) spațiu dublu înainte de *cu*. Ambele sunt artefacte de export.

---

### GRAM-015
- **Pass:** light
- **Severity:** high
- **Section:** Cuvinte-cheie
- **Line:** ~21
- **Category:** punctuation
- **Original:** \`conștientizare emoțională,  studiu de caz unic\`
- **Suggested:** \`conștientizare emoțională, studiu de caz unic\`
- **Reason:** Spațiu dublu după virgulă în lista de cuvinte-cheie — artefact de formatare.

---

### GRAM-016
- **Pass:** light
- **Severity:** high
- **Section:** Cadru teoretic — Autocritica și autocompasiunea
- **Line:** ~39
- **Category:** backslash-artifact
- **Original:** \`Neff (2003, 2022\\) a plasat\` și \`(Wong et al., 2025\\)\`
- **Suggested:** \`Neff (2003, 2022) a plasat\` și \`(Wong et al., 2025)\`
- **Reason:** Backslash înainte de paranteza închisă — instanțe specifice ale artefactului sistematic descris în GRAM-001, subliniate aici deoarece apar în mijlocul unei propoziții narative și distrag atenția în mod vizibil.

---

### GRAM-017
- **Pass:** light
- **Severity:** high
- **Section:** Cadru teoretic — Abordări terapeutice
- **Line:** ~45
- **Category:** punctuation
- **Original:** \`modificarea tiparelor de gândire disfuncționale și dezvoltarea unor abilități de coping pentru situații stresante (Lane et al., 2015; Marciniak et al., 2020). În cadrul acestei paradigme, autocritica este adesea abordată prin restructurare cognitivă, urmărind identificarea și testarea validității gândurilor negative despre sine însă cercetările indică faptul că simpla înțelegere rațională\`
- **Suggested:** \`modificarea tiparelor de gândire disfuncționale și dezvoltarea unor abilități de coping pentru situații stresante (Lane et al., 2015; Marciniak et al., 2020). În cadrul acestei paradigme, autocritica este adesea abordată prin restructurare cognitivă, urmărind identificarea și testarea validității gândurilor negative despre sine, însă cercetările indică faptul că simpla înțelegere rațională\`
- **Reason:** Conjuncția adversativă *însă* care introduce o clauză contradictorie trebuie precedată de virgulă când unește două propoziții principale. Lipsa virgulei înainte de *însă* face propoziția greu de parcurs.

---

### GRAM-018
- **Pass:** light
- **Severity:** high
- **Section:** Discuții / Rezultate (multiple apariții)
- **Line:** ~319–325
- **Category:** grammar
- **Original:** \`auto-critica\` / \`auto-critică\` / \`auto-compasiune\` (3 apariții în secțiunea Discuții)
- **Suggested:** \`autocritica\` / \`autocritică\` / \`autocompasiune\`
- **Reason:** Termenul apare preponderent scris fără cratimă (*autocritică*, *autocompasiune*) în tot restul lucrării — acesta este și forma standard în psihologia românească contemporană. Cele 3 apariții cu cratimă din secțiunea Discuții constituie o inconsistență terminologică care poate crea confuzie sau poate sugera că se referă la concepte diferite.

---

### GRAM-019
- **Pass:** light
- **Severity:** high
- **Section:** Tabel 1 — rândul P12
- **Line:** ~169
- **Category:** grammar
- **Original:** \`| P12 | 1 | 3 | 7 | 6 | 50.0% |\`
- **Suggested:** \`| P12 | 1 | 3 | 7 | 10 | 50.0% |\`
- **Reason:** Coloana *Total înregistrări* ar trebui să fie suma coloanelor *Puncte observație baseline (A)* și *Puncte observație intervenție (B)*: 3 + 7 = 10, nu 6. Toate celelalte rânduri din tabel respectă această formulă de adunare. Aceasta este o eroare numerică în tabelul de date care va fi observată de examinator.

---

## Strengths

- **Diacriticele corecte:** Toate literele românești cu semne diacritice (ă, â, î, ș, ț) folosesc formele corecte Unicode cu virgulă dedesubt (U+0219/U+021B), nu variantele cedilă. Aceasta demonstrează atenție față de standardul DOOM al limbii române.
- **Ghilimelele românești:** Citatele și termenii speciali sunt marcați consecvent cu ghilimele române „..." pe tot parcursul lucrării, fără nicio apariție a ghilimelelor englezești.
- **Registrul academic:** Stilul narativ este consistent academic — autoarea evită colocvialismele și menține un ton formal adecvat pe tot parcursul lucrării, inclusiv în secțiunile de discuții unde autorii uneori alunecă spre informalitate.
- **Terminologie tehnică:** Termenii-cheie din psihologie și statistică (modelare ierarhică, reconsolidare, activare emoțională, vivacitate a imageriei) sunt folosiți consistent și precis, demonstrând stăpânire reală a domeniului.
- **Structura propozițiilor:** Propozițiile sunt, în general, bine structurate gramatical, cu o bună gestionare a frazelor lungi specifice stilului academic românesc. Autoarea folosește corect modurile și timpurile verbale în contexte complexe.

---

## Score: 7.5/10

Scorul reflectă o scriere academică solidă, redusă de o serie de erori sistematice din exportul Google Docs (backslash-uri), câteva greșeli de editare (cuvinte duble, o greșeală de ortografie în numele unui instrument central), inconsistențe de citare și prezența unor rânduri de text-șablon APA neșterse. Remedierea integrală a GRAM-001 (backslash-uri) și a GRAM-002 (placeholderele APA) urmată de corectarea celorlalte 17 probleme identificate ar ridica scorul estimat la 9/10.
`,
  apa7: `# APA 7 Style Compliance Review

**Document:** LiaZamfir.ReaserchPractice.WorkInProgress.md  
**Analysis Date:** 2026-05-30  
**Pass:** Light  
**Analyzer:** APA 7 Style  
**Overall APA 7 Compliance Score:** 6/10  

---

## Summary

The dissertation is broadly well-organized and demonstrates strong command of APA-style statistical reporting (italicized symbols, exact *p* values, confidence intervals, effect sizes). However, three categories pull the score down significantly. First, leftover APA template artifacts (lines 23, 25) and pervasive Google Docs Markdown export backslash artifacts (\`\\-\`, \`\\<\`, \`\\.\`, \`\\=\`, escaped parentheses, and stray \`\\\` before closing parentheses in years) appear throughout the body and statistics. Second, there is a substantial set of in-text citation / reference-list mismatches — at least seven cited works have years that disagree with the reference list (Firestone, Neff, Gilbert & Irons, Gu, Werner), and several cited works are missing from the reference list entirely (Halamová et al., 2018; Halamová et al., 2023; Neff 2003/2022). Third, table and figure labels use Romanian-localized forms ("Tabel"/"Tabelul") inconsistently and place a period inside the bold label, and Tables 1–4 mix label/title formatting. The reference list also contains type-formatting errors (missing or non-italicized journal/volume elements, lowercase journal titles, trailing periods after DOIs). The most critical fixes before submission are the template artifacts and the citation-year mismatches, which affect scholarly accuracy.

---

## Critical Issues (Fix Before Submission)

### APA7-001
- **Pass:** light
- **Severity:** critical
- **Section:** Abstract / Introduction boundary
- **Line:** ~23
- **Category:** template-artifact
- **Original:** \`**The Title of Your Paper**\`
- **Corrected:** *(delete entirely)*
- **Rule:** APA 7 §2.1–2.4 (paper structure); template boilerplate must not remain
- **Explanation:** This is residual text from the APA student-paper Word template. It is not part of the dissertation and must be removed. (If a running page-top title is desired, it should be the actual dissertation title, not the placeholder.)

### APA7-002
- **Pass:** light
- **Severity:** critical
- **Section:** Introduction
- **Line:** ~24
- **Category:** template-artifact
- **Original:** \`Start your paper here. Be sure to indent all paragraphs in the body of your paper.\`
- **Corrected:** *(delete entirely)*
- **Rule:** APA 7 §2.1 (template boilerplate)
- **Explanation:** Placeholder instruction text from the APA template. Must be removed; the "Introducere" heading and body text follow.

### APA7-003
- **Pass:** light
- **Severity:** critical
- **Section:** Introduction
- **Line:** ~27 (appears twice on line 27)
- **Category:** citation-format
- **Original:** \`(Dao et. al, 2020)\`
- **Corrected:** \`(Dao et al., 2020)\`
- **Rule:** APA 7 §8.17
- **Explanation:** "et al." is an abbreviation of the Latin *et alii*: no period after "et" (it is a full word), one period after "al", no period between. Occurs twice on line 27.

### APA7-004
- **Pass:** light
- **Severity:** critical
- **Section:** Theory / References
- **Line:** ~33, ~35 vs ~350
- **Category:** citation-format / reference-list
- **Original:** In-text \`Firestone, 2001\` (line 33) and \`Firestone (2021)\` / \`Firestone, 2021\` (line 35); reference list entry \`Firestone, R. W. (2025). The enemy within...\` (line 350)
- **Corrected:** Reconcile to a single correct year. The DOI \`10.1177/00221678211025354\` and *Journal of Humanistic Psychology* 65(6) point to a 2025 publication, so in-text citations should read \`(Firestone, 2025)\` throughout — unless 2001/2021 refer to different works, in which case those works must be added to the reference list.
- **Rule:** APA 7 §8.4 (every in-text citation must match a reference-list entry by author + year)
- **Explanation:** Three different years (2001, 2021, 2025) are used for what appears to be one Firestone source. In-text years must match the reference list exactly.

### APA7-005
- **Pass:** light
- **Severity:** critical
- **Section:** Introduction / References
- **Line:** ~26 vs ~379
- **Category:** citation-format / reference-list
- **Original:** In-text \`Werner et al., 2015\` (line 26); reference list \`Werner, A. M., Tibubos, A. N., Rohrmann, S., & Reiss, N. (2019)\` (line 379)
- **Corrected:** \`(Werner et al., 2019)\` in text (or add the 2015 source to the reference list if it is a distinct work).
- **Rule:** APA 7 §8.4
- **Explanation:** Year mismatch between in-text citation (2015) and reference list (2019).

### APA7-006
- **Pass:** light
- **Severity:** critical
- **Section:** Theory / References
- **Line:** ~38 vs ~370
- **Category:** citation-format / reference-list
- **Original:** In-text \`Neff (2003, 2022)\` and \`Neff, 2022\` (line 38), \`Neff, 2023\` (line 47); reference list contains only \`Neff, K. D. (2023)\` (line 370)
- **Corrected:** Either cite \`(Neff, 2023)\` consistently, or add the 2003 (*Self and Identity*) and 2022 works to the reference list. Note \`\\)\` escaped parenthesis artifacts also appear: \`Neff (2003, 2022\\)\`.
- **Rule:** APA 7 §8.4
- **Explanation:** Neff is cited with years 2003 and 2022 that have no matching reference-list entries. Every cited year needs a reference entry.

### APA7-007
- **Pass:** light
- **Severity:** critical
- **Section:** Theory / References
- **Line:** ~26, ~32 vs ~353
- **Category:** citation-format / reference-list
- **Original:** In-text \`Gilbert & Irons, 2005\` (lines 26, 32); reference list \`Gilbert, P., & Irons, C. (2004)\` (line 353)
- **Corrected:** \`(Gilbert & Irons, 2004)\` (or add a 2005 Gilbert & Irons work to the reference list).
- **Rule:** APA 7 §8.4
- **Explanation:** Year mismatch (2005 in text vs 2004 in list).

### APA7-008
- **Pass:** light
- **Severity:** critical
- **Section:** Measures / References
- **Line:** ~98 vs ~357
- **Category:** citation-format / reference-list
- **Original:** In-text \`Sussex-Oxford Compassion Scales (SOCS, Gu et al., 2019)\` (line 98); reference list \`Gu, J., Strauss, C., Bond, R., & Cavanagh, K. (2020)\` (line 357)
- **Corrected:** \`(Gu et al., 2020)\`.
- **Rule:** APA 7 §8.4
- **Explanation:** Year mismatch (2019 vs 2020).

### APA7-009
- **Pass:** light
- **Severity:** critical
- **Section:** Theory / References
- **Line:** ~36, ~55, ~50, ~61, ~64, ~65 (no matching reference)
- **Category:** citation-format / reference-list
- **Original:** In-text \`Halamová et al., 2018\` (lines 36, 55) and \`Halamová et al., 2023\` (lines 50, 61, 64, 65)
- **Corrected:** Add reference-list entries for Halamová et al. (2018) and Halamová et al. (2023), or correct the in-text years to match existing entries (the list contains Halamová & Kanovský 2019, Halamová et al. 2021, Halamová et al. 2022).
- **Rule:** APA 7 §8.4
- **Explanation:** Two Halamová year-citations (2018, 2023) have no corresponding reference-list entry. This is a missing-reference error, the most serious citation-integrity failure.

---

## High-Priority Issues

### APA7-010
- **Pass:** light
- **Severity:** high
- **Section:** Throughout body, statistics, references
- **Line:** ~16, 38, 72, 76, 87, 97, 99, 152+ tables, 206–238, 252–307, 365
- **Category:** backslash-artifact
- **Original:** Google Docs export backslashes, e.g. \`SCED \\-\`, \`Neff (2003, 2022\\)\`, \`(n\\<3)\`, \`113\\.\`, \`697-717\` is fine but \`*α*\\=.852\`, \`*n*\\=12\`, \`\\< .001\`, \`\\-0.0365\`, \`Scherer et al., 2022\\)\`, \`e0228355\`, escaped DOI \`\\(SICI\\)...\\(199806\\)\`
- **Corrected:** Remove all stray backslashes: \`\\-\` → \`-\` (or proper minus/en dash), \`\\<\` → \`<\`, \`\\=\` → \`=\`, \`\\.\` → \`.\`, \`\\)\` → \`)\`. Example: \`*α* = .852\` not \`*α*\\=.852\`; \`(n < 3)\` not \`(n\\<3)\`; \`< .001\` not \`\\< .001\`.
- **Rule:** Mechanical/typographic cleanliness; APA 7 §6.1 (clarity). Not a style rule per se but renders as visible artifacts in the PDF.
- **Explanation:** The Markdown export escaped many literal characters. These backslashes will appear in the rendered document. They are pervasive across the abstract, methodology, all four statistical tables, and several references (notably the Kwekkeboom 1998 DOI on line 365). A global find/replace pass is required. Note also missing spaces around operators introduced by the same export (e.g., \`*β*\\=0.11\` should be \`β = 0.11\`).

### APA7-011
- **Pass:** light
- **Severity:** high
- **Section:** Results — Tables 1–4
- **Line:** ~154, 200, 247, 290
- **Category:** table
- **Original:** \`**Tabel 1\\.**\` (line 154); \`**Tabelul 2\\.**\` (line 200); \`**Tabelul 3**\` (line 247); \`**Tabelul 4**\` (line 290)
- **Corrected:** Use a consistent label form on its own line, bold, with no terminal period, followed by the title in italic title-style on the next line. e.g.:  
  \`**Tabelul 1**\`  
  \`*Numărul punctelor de observație pe faze și rata de aderență pe participant*\`  
  Apply the same to Tables 2–4.
- **Rule:** APA 7 §7.8–7.10 (table setup): bold table number, then italic title on the next line, no period after the number.
- **Explanation:** Three problems: (1) inconsistent label noun — "Tabel 1" vs "Tabelul 2/3/4"; pick one (Romanian convention favors "Tabelul N"). (2) Tables 1 and 2 carry a period after the number (\`Tabel 1.\` / \`Tabelul 2.\`), which APA does not use. (3) The numbers also contain the \`\\.\` backslash artifact. Titles are correctly italicized — good.

### APA7-012
- **Pass:** light
- **Severity:** high
- **Section:** Results — Tables 1, 4
- **Line:** ~156–157 (Table 1 header), ~292, ~309 (Table 4 surrounding \`---\`)
- **Category:** table
- **Original:** Markdown column-separator rows (\`| :---- | :---- | ...\`) render as table cells; Table 4 is wrapped in horizontal-rule lines \`---\` (lines 292, 309)
- **Corrected:** When converting to the final document, ensure tables use only horizontal borders (top, below header row, bottom) and NO vertical rules. Remove the Markdown \`:----\` alignment rows and the \`---\` horizontal-rule artifacts so they do not render as content.
- **Rule:** APA 7 §7.8 (no vertical lines in tables; limited horizontal lines)
- **Explanation:** In the source Markdown these are syntactic, but on export they can produce vertical gridlines and stray rules. The \`---\` lines bracketing Table 4 are Markdown thematic breaks that will appear as lines in the body. Verify the rendered table has horizontal borders only.

### APA7-013
- **Pass:** light
- **Severity:** high
- **Section:** Results — Table 4
- **Line:** ~294, 306, 307
- **Category:** table / figure
- **Original:** Header cells and a data cell contain embedded images: \`![][image2]𝜷\` (line 294 header), \`![][image3]\` (line 306 header), and \`\\-0.256![][image4]\` (line 307)
- **Corrected:** Replace the image-rendered symbols with proper typed, italicized characters: the standardized-coefficient column should read *β* (italic Greek beta), and remove the inline \`![][imageN]\` artifacts from cells. The value should read \`-0.256\` with no trailing image.
- **Rule:** APA 7 §6.44 (statistical symbols set in italic), §7.10 (table body formatting)
- **Explanation:** The β symbol and other glyphs were pasted as images rather than text. These will not render as selectable/consistent text and break the table. Type them as Unicode italic symbols. Also the standardized-coefficient symbol is inconsistently shown as \`𝜷\` (math-bold) vs \`β\`; use a single italic *β* throughout.

### APA7-014
- **Pass:** light
- **Severity:** high
- **Section:** Results — Figure 1
- **Line:** ~193–195
- **Category:** figure
- **Original:** \`**Figura 1**\` then \`*Grafice individuale de nivelul 1 cu date brute*\` then \`![][image1]\`
- **Corrected:** Order is essentially correct (number bold, italic caption, then image), but: (1) ensure the figure number and title sit ABOVE the image (they do — good), (2) add a \`Notă.\` line below the figure if any abbreviations (A/B phases, axis units) need defining, and (3) confirm "Figura 1" is consistent with the in-text bold reference \`**Figura 1**\` on line 192 — in APA, in-text references to figures are NOT bold (\`Figura 1\`, plain).
- **Rule:** APA 7 §7.22–7.24 (figure setup: number bold, title italic below number, note below image)
- **Explanation:** The figure label block is mostly compliant. The main fixes are removing bold from in-text figure mentions and adding a note defining abbreviations. Same applies to in-text bold table mentions (\`**Tabelul 2**\`, \`**Tabelul 3**\`, \`**Figura 1**\` on lines 192, 198, 246) — these should be plain text, not bold.

### APA7-015
- **Pass:** light
- **Severity:** high
- **Section:** Headings — throughout
- **Line:** ~25, 30, 31, 42, 51, 56, 60, 63, 66, 74, 75, 84, 318
- **Category:** heading
- **Original:** Mixed bold (\`**Cadru teoretic**\`, \`**Autocritica și autocompasiunea...**\`) and bold-italic (\`***Abordări terapeutice...***\`, \`***Selecție și fluxul participanților***\`) headings, plus indented \`\\t\\t\\t**Metodologie**\` (line 74) and a leading-space heading \`&nbsp;***Corelația proceselor de stare***\` (line 63)
- **Corrected:** Map the hierarchy explicitly to APA 5 levels and apply consistently:  
  - Level 1: centered, bold, title case (e.g., **Introducere**, **Cadru teoretic**, **Metodologie**, **Rezultate**, **Discuții**) — should NOT be indented; remove the tab indentation before "Metodologie" (line 74).  
  - Level 2: flush-left, bold (e.g., **Designul cercetării**, **Participanți**).  
  - Level 3: flush-left, bold italic (e.g., ***Selecție și fluxul participanților***).  
  Remove stray leading whitespace before headings (line 63).
- **Rule:** APA 7 §2.27 (five-level heading system)
- **Explanation:** The document uses two visual levels (bold = §2.27 Level 1/2, bold-italic = Level 3), which is acceptable, but Level 1 section headings are centered in APA whereas these are flush-left bold (Level 2 style). The biggest concrete defects are the tab-indented "Metodologie" and the leading-space "Corelația proceselor de stare", which break alignment. Confirm major sections (Introducere, Cadru teoretic, Metodologie, Rezultate, Discuții) are formatted identically as the top level.

### APA7-016
- **Pass:** light
- **Severity:** high
- **Section:** References — journal article formatting
- **Line:** ~340, 360, 379, multiple
- **Category:** reference-list
- **Original:** Examples: \`*Journal of consulting and clinical psychology*, *50*(1), 113\\.\` (line 340, lowercase journal title + page artifact); \`*International Journal of Environmental Research and Public Health, 1*9(21), 13759\` (line 360, italics broken mid-number: \`1*9\`); \`*Journal of affective disorders*\` (line 379, lowercase)
- **Corrected:** Journal titles in Title Case and fully italicized: \`*Journal of Consulting and Clinical Psychology*, *50*(1), 113.\`; fix \`*International Journal of Environmental Research and Public Health*, *19*(21), 13759\`; \`*Journal of Affective Disorders*\`. Italicize the volume number, not the issue number or stray digits.
- **Rule:** APA 7 §9.25 (periodical references: journal name and volume italic, Title Case for journal name)
- **Explanation:** Several journal titles are in sentence case (should be Title Case) and at least one entry (Halamová et al., 2022, line 360) has the italic span break inside the volume number (\`*1*9\` → \`*19*\`). Italic must cover the journal name and the volume number only.

### APA7-017
- **Pass:** light
- **Severity:** high
- **Section:** References — volume/issue and page formatting inconsistency
- **Line:** ~348, 349, 362, 367, 374, 376, others
- **Category:** reference-list
- **Original:** Issue numbers placed inside the italic volume span, e.g. \`American Psychological Association, 40(12)*\` (line 348), \`*Emotion, 20(8)*\` (line 362), \`*Therapeutic innovation & regulatory science, 55(4)*\` (line 367), \`*Journal of sports science & medicine, 15 3*\` (line 374)
- **Corrected:** Italicize only the journal title and volume; the issue number in parentheses is NOT italic and follows the volume with no space: \`*Emotion, 20*(8), 1495.\`; \`*Therapeutic Innovation & Regulatory Science, 55*(4), 755–764.\`; \`*Journal of Sports Science & Medicine, 15*(3), 434–450.\`
- **Rule:** APA 7 §9.25
- **Explanation:** Many entries include the issue number inside the italic run and/or use a space instead of parentheses (Slimani, line 374: "15 3"). The pattern should be *Volume*(Issue), page–page. This is inconsistent across the list and should be standardized.

### APA7-018
- **Pass:** light
- **Severity:** high
- **Section:** References — missing italics / incomplete entries
- **Line:** ~342, 345, 356, 364, 373, 375
- **Category:** reference-list
- **Original:** Entries with no italic journal title at all, e.g. \`Behavior Research Methods, 52, 177–192.\` (line 345, Declercq); \`Journal of Clinical Psychology, 62(10), 1211–1230.\` (line 356, Greenberg & Pascual-Leone); \`Pediatric Dimensions, 1(4), 105–109.\` (line 364, Karvounides); \`JMIR Mental Health, 9(5), e35273.\` (line 373, Scherer); \`Experiential Learning & Teaching in Higher Education, 4(1), 3–21.\` (line 375, Stock & Kolb). Also Bouwmeester (line 342) lacks the comma after author initials and uses \`(2020)\` without the period style and a non-italic journal with the issue glued to italics oddly.
- **Corrected:** Italicize the journal name and volume in each: \`*Behavior Research Methods*, *52*, 177–192.\`; \`*Journal of Clinical Psychology*, *62*(10), 1211–1230.\`; \`*Pediatric Dimensions*, *1*(4), 105–109.\`; \`*JMIR Mental Health*, *9*(5), e35273.\`; \`*Experiential Learning & Teaching in Higher Education*, *4*(1), 3–21.\`
- **Rule:** APA 7 §9.25
- **Explanation:** Roughly a third of journal entries are missing the required italics on the journal name and volume, making the reference list internally inconsistent. The Bouwmeester entry (line 342) additionally has a malformed author block (\`Bouwmeester S, Jongerling J (2020)\` — missing periods after initials and comma before year): should be \`Bouwmeester, S., & Jongerling, J. (2020).\`

### APA7-019
- **Pass:** light
- **Severity:** high
- **Section:** References — trailing periods after DOIs and broken DOI
- **Line:** ~344, 350, 368, 378, 369, 365
- **Category:** reference-list
- **Original:** Trailing period after DOI link, e.g. \`...22890](https://doi.org/10.2196/22890).\` (line 344); \`...025354](...).\` (line 350); Maner (line 368) ends with page range and NO DOI; Kwekkeboom (line 365) uses a raw escaped Wiley URL with backslashes instead of a DOI: \`...\\(SICI\\)1098-240X\\(199806\\)21:3%3C189...\`
- **Corrected:** APA 7 ends a reference with the DOI as a clean URL and NO terminal period: \`https://doi.org/10.2196/22890\` (no period after). For Kwekkeboom, locate and use the DOI (\`https://doi.org/10.1002/(SICI)1098-240X(199806)21:3<189::AID-NUR2>3.0.CO;2-D\`) without backslash escapes, or a stable URL.
- **Rule:** APA 7 §9.35–9.36 (DOIs/URLs: no period after a DOI or URL that ends the reference)
- **Explanation:** Several DOIs have a stray period after them (creates ambiguity/broken links). One reference (Kwekkeboom) has the DOI mangled by export backslashes. Maner et al. (2023) has no DOI — add one if available.

### APA7-020
- **Pass:** light
- **Severity:** high
- **Section:** Measures
- **Line:** ~97
- **Category:** citation-format
- **Original:** \`(Robillard et al., 2025 Kiekens et al., 2024; Mason et al., 2021)\`
- **Corrected:** \`(Robillard et al., 2025; Kiekens et al., 2024; Mason et al., 2021)\` — and add Robillard, Kiekens, and Mason to the reference list (none appear in the list reviewed).
- **Rule:** APA 7 §8.12 (multiple works in one parenthetical separated by semicolons, alphabetical order) and §8.4
- **Explanation:** Missing semicolon between the first two citations (currently merged). Additionally these three sources, plus Scherer (cited line 97) appear to need verification against the reference list — Scherer is present (line 373) but Robillard, Kiekens, and Mason are not in the list reviewed; if absent they must be added.

### APA7-021
- **Pass:** light
- **Severity:** high
- **Section:** Theory
- **Line:** ~49
- **Category:** citation-format
- **Original:** \`(Marciniak et al, 2020; Dao et al., 2021)\`
- **Corrected:** \`(Marciniak et al., 2020; Dao et al., 2021)\` — period after "al". Also note the Dao reference list entry (line 344) is dated 2020, but Dao is cited as 2021 on lines 49, 60, 61; reconcile the year.
- **Rule:** APA 7 §8.17 and §8.4
- **Explanation:** Missing period after "al" in "Marciniak et al". Separately, "Dao et al., 2021" (lines 49, 60, 61) does not match the reference-list year 2020 (line 344) — another year mismatch to resolve.

### APA7-022
- **Pass:** light
- **Severity:** high
- **Section:** Methodology / Participants / Results
- **Line:** ~90, 99, 151, 152, 207–236
- **Category:** statistics / numbers
- **Original:** Decimal comma in \`medie de vârstă de 26,28 ani\` (line 90) and percentage \`79,31%\`; "11 participanți", "4 participanți", "7 participanți", "6 participanți", "3 puncte"; statistics symbols \`Time\`/\`Timp\` mixed.
- **Corrected:** Decide on a single decimal convention. APA 7 (English-language statistical reporting) uses the decimal point: \`26.28\`, \`79.31%\`. The numeric tables already use points (e.g., 2.3393), so the age/percentage should match: \`26.28 ani\`, \`79.31%\`. Numbers below 10 used as counts ("4 bărbați", "3 puncte de observație") are correctly given — APA permits numerals for participants/sample sizes regardless of magnitude (§6.32, exact numbers in samples), so these are acceptable. Standardize the predictor label "Time"/"Timp" (Table 4 model 4 uses "Time" on lines 230, 233 while other models use "Timp").
- **Rule:** APA 7 §6.32 (numbers), §6.44–6.45 (statistics), and decimal consistency
- **Explanation:** The document mixes decimal comma (Romanian locale, line 90: 26,28; 79,31%; line 286: 11,41) with decimal point (everywhere in the statistical tables). For an APA-7 statistics document this must be one convention — the point is used in all the inferential output, so the narrative figures should align. Also align the "Time"/"Timp" variable label across Table 2 models.

### APA7-023
- **Pass:** light
- **Severity:** high
- **Section:** Results
- **Line:** ~313
- **Category:** statistics (typo affecting reporting)
- **Original:** \`efectul direct al calității imaginilor din sesiune asupra autocriticii a fost complet nesemnificati (*β* \\= 0.001, *p* \\= .991)\`
- **Corrected:** \`...complet nesemnificativ (*β* = 0.001, *p* = .991)\` — fix truncated word "nesemnificati" → "nesemnificativ" and remove backslashes around \`=\`.
- **Rule:** APA 7 §6.44 (clarity of statistical statements)
- **Explanation:** Word truncation plus backslash artifacts in an inline statistical report. Also note line 323 contains a doubled word "predictorul direct direct" — minor but should be corrected.

---

## Score: 6/10

The strong statistical-reporting fundamentals (correct italicization of *n*, *p*, *M*, *SD*, *β*, *t*, *r*, *α*; exact *p* values; 95% CIs reported; effect sizes with intervals) keep this from scoring lower. The deductions are driven by: critical template artifacts, a cluster of citation/reference-year mismatches and missing references (a scholarly-integrity issue), pervasive export backslash artifacts, and inconsistent table/reference-list type formatting. None of these are conceptual; all are mechanical and fixable in a focused editing pass.

## Summary Table

| Category | Issues Found | Severity |
|----------|--------------|---------|
| Template artifacts | 2 (APA7-001, 002) | critical |
| Citation format | 8 (APA7-003, 004, 005, 006, 007, 008, 009, 020, 021 — incl. year mismatches & missing refs) | critical / high |
| Statistics reporting | 2 (APA7-022, 023) | high |
| Tables/Figures | 4 (APA7-011, 012, 013, 014) | high |
| Headings | 1 (APA7-015) | high |
| Reference list | 4 (APA7-016, 017, 018, 019) | high |
| Backslash artifacts | 1 pervasive (APA7-010) | high |
`,
  references: `# Reference Cross-Check & Table of Contents

**Document:** LiaZamfir.ReaserchPractice.WorkInProgress.md
**Analysis Date:** 2026-05-30
**Analyzer:** Reference Integrity
**Reference Accuracy Score:** 4/10

---

## PART 1: TABLE OF CONTENTS

The document currently uses bold-text headings without numbering. Below is a structured, numbered Table of Contents in Romanian academic style, derived from the actual headings present in the manuscript. Page numbers are placeholders — the author fills these in once the document is paginated in Google Docs / PDF.

\`\`\`
CUPRINS

Rezumat ............................................................. p. __
Cuvinte-cheie ....................................................... p. __

1. Introducere ...................................................... p. __

2. Cadru teoretic .................................................. p. __
   2.1 Autocritica și autocompasiunea: perspective transdiagnostice .. p. __
   2.2 Abordări terapeutice în gestionarea autocriticii ............. p. __
   2.3 Mecanismul procesual al schimbării în EFT ................... p. __
   2.4 Imageria mentală voluntară ca motor al activării emoționale .. p. __
   2.5 Intervenția digitală EFT-SCP ................................ p. __
   2.6 Corelația proceselor de stare ............................... p. __

3. Obiectivele și Ipotezele Cercetării ............................. p. __
   3.1 Obiectivele cercetării ...................................... p. __
   3.2 Ipotezele cercetării ........................................ p. __

4. Metodologie ..................................................... p. __
   4.1 Designul cercetării ......................................... p. __
   4.2 Modificări procedurale și replicare ......................... p. __
   4.3 Randomizarea și orbirea/mascarea ............................ p. __
   4.4 Participanți ................................................ p. __
       4.4.1 Selecție și fluxul participanților .................... p. __
       4.4.2 Caracteristicile participanților ...................... p. __
   4.5 Aprobări (Etică și consimțământ) ............................ p. __
   4.6 Măsuri și Materiale ......................................... p. __
       4.6.1 Măsuri ................................................ p. __
       4.6.2 Echipament ............................................ p. __
   4.7 Intervenție ................................................. p. __
   4.8 Fidelitate procedurală ...................................... p. __
   4.9 Analiza datelor ............................................. p. __
       4.9.1 Analiza vizuală și descriptivă ........................ p. __
       4.9.2 Modelarea ierarhic liniară (HLM) a eficienței globale .. p. __
       4.9.3 Analiza predicțiilor și a mărimii efectului (Nivelul 1)  p. __
       4.9.4 Analiza procesului intra-fază în etapa de intervenție .. p. __

5. Rezultate ....................................................... p. __
   5.1 Secvență finalizată ......................................... p. __
       Tabel 1. Numărul punctelor de observație pe faze și rata
                de aderență pe participant ......................... p. __
   5.2 Rezultate și estimare ....................................... p. __
       Figura 1. Grafice individuale de nivelul 1 cu date brute .... p. __
   5.3 Impactul general al intervenției și moderarea prin
       abilitatea de imagerie (analiza macro) ..................... p. __
       Tabelul 2. Coeficienții Efectelor Fixe din MultiSCED ....... p. __
   5.4 Analiza idiografică: variabilitatea răspunsului individual
       la ziua 14 (MultiSCED) ..................................... p. __
       Tabelul 3. Mărimile efectului prezise la ziua a 14-a ....... p. __
   5.5 Mecanismele schimbării din sesiuni (analiza micro în Jamovi)   p. __
       Tabelul 4. Estimările parametrilor modelului structural
                  global (Nivelul 1) .............................. p. __
   5.6 Evenimente adverse .......................................... p. __

6. Discuții ........................................................ p. __
   6.1 Interpretare ................................................ p. __
   6.2 Limitări .................................................... p. __
   6.3 Aplicabilitate .............................................. p. __

Referințe bibliografice ............................................ p. __
\`\`\`

*Note: Page numbers are placeholders — fill in final numbers before submission.*

**Secondary observations on headings (not part of the TOC, but worth fixing):**
- Line 23 contains a leftover English template heading **"The Title of Your Paper"** and line 24 placeholder text **"Start your paper here. Be sure to indent all paragraphs..."** — these are APA template artifacts that must be deleted before submission.
- The manuscript headings are not numbered. If the author wants the numbered TOC above to match the body, the body headings should be numbered to correspond. Alternatively the TOC can be left unnumbered to mirror the current body exactly.
- "Obiectivele și Ipotezele Cercetării" (line 66) and "Ipotezele Cercetării" (line 70) appear as two separate bold headings; the TOC groups them logically as 3.1 / 3.2.

---

## PART 2: REFERENCE CROSS-CHECK

### Summary
Total distinct in-text citations found: 50 distinct works
Total reference list entries: 41 entries (lines 340–380)
Inconsistencies found: 26 (15 orphan citations, 8 orphan references, 8 year/name mismatches — several works fall into more than one category)

This is a manually formatted reference list (no Zotero/Mendeley). The error rate is high: roughly one in three body citations has a problem. The most serious systemic issue is that **the most heavily-cited author in the entire dissertation — Greenberg, 2021 — has no matching reference entry at all**, and neither do Wong et al. (2025), Pascual-Leone & Greenberg (2007), Vidal & Soldevilla (2022), Zuroff et al. (2021), or Halamová et al. (2023), all of which appear repeatedly in the body.

### Complete In-Text Citation List

| Citation (as appears in text) | Found in Reference List | Notes |
|-------------------------------|-------------------------|-------|
| Wakelin et al. (2021) | ✅ Match (378) | |
| Werner et al. (2015) | ⚠️ Listed as 2019 (379) | Year mismatch |
| Gilbert & Irons (2005) | ⚠️ Listed as 2004 (353) | Year mismatch |
| Wong et al. (2025) | ❌ MISSING | Orphan — cited 7+ times, no entry |
| Dao et. al (2020) | ✅ Match (344) | "et. al" punctuation malformed in text |
| Dao et al. (2021) | ⚠️ Listed as 2020 (344) | Same work cited under two years (2020 & 2021) |
| Halamova et al. (2022) | ✅ Match (360) | Diacritic dropped: "Halamova" vs "Halamová" |
| Marciniak et al. (2020) | ✅ Match (369) | One instance written "Marciniak et al, 2020" (missing period) |
| Boccaccio et al. (2024) | ✅ Match (341) | |
| Holmes & Mathews (2010) | ✅ Match (361) | |
| Timulak & Keogh (2022) | ✅ Match (377) | |
| Vidal & Soldevilla (2022) | ❌ MISSING | Orphan — cited 5+ times, no entry |
| Blatt et al. (1982) | ✅ Match (340) | |
| Firestone (2001) | ❌ MISSING | No 2001 entry; list has Firestone 2025 (350) |
| Firestone (2021) | ⚠️ Listed as 2025 (350) | Year mismatch (body says 2021, list says 2025) |
| Whelton & Greenberg (2005) | ✅ Match (380) | |
| Longe et al. (2010) | ❌ MISSING | Orphan citation |
| Gilbert (2004) | ✅ Match (352) | Entry is "Gilbert, Clark, Hempel, Miles, & Irons (2004)" |
| Maner et al. (2022) | ⚠️ Listed as 2023 (368) | Year mismatch |
| Halamová et al. (2018) | ❌ MISSING | Orphan — earliest Halamová entry is 2019 |
| Greenberg (2021) | ❌ MISSING | Orphan — cited 6+ times; list has Greenberg 2006/2019 only |
| Neff (2003, 2022) | ⚠️ Listed as 2023 (370) | Neither 2003 nor 2022 matches the 2023 entry |
| Neff (2022) | ⚠️ Listed as 2023 (370) | Year mismatch |
| Neff (2023) | ✅ Match (370) | |
| Randhawa & Vella-Brodrick (2025) | ✅ Match (371) | |
| Zuroff et al. (2021) | ❌ MISSING | Orphan — cited 3+ times; Zuroff appears only as co-author in Blatt 1982 |
| Lane et al. (2015) | ✅ Match (366) | |
| Gilbert (2009) | ✅ Match (351) | |
| Halamová et al. (2021) | ✅ Match (359) | |
| Halamová et al. (2023) | ❌ MISSING | Orphan — cited 4+ times, no 2023 entry |
| Pascual-Leone & Greenberg (2007) | ❌ MISSING | Orphan — cited 4+ times, no entry |
| Elliott et al. (2004) | ✅ Match (347) | |
| Paivio (2013) | ❌ MISSING | Orphan citation |
| Kosslyn et al. (2006) | ❌ MISSING | Orphan citation |
| Marks (1973) | ❌ MISSING | Orphan — VVIQ original source not listed |
| Imbriano et al. (2020) | ✅ Match (362) | |
| Blomkvist & Marks (2023) | ❌ MISSING | Orphan — aphantasia source not listed |
| Runge et al. (2017) | ✅ Match (372) | |
| Bouwmeester & Jongerling (2020) | ✅ Match (342) | |
| Epstein et al. (2021) | ✅ Match (348) | |
| Levin & Kratochwill (2021) | ✅ Match (367) | |
| Epstein & Dallery (2022) | ✅ Match (349) | |
| Elliott (2002) | ✅ Match (346) | |
| Robillard et al. (2025) | ❌ MISSING | Orphan citation (line 97) |
| Kiekens et al. (2024) | ❌ MISSING | Orphan citation (line 97) — also missing a comma before it in text |
| Mason et al. (2021) | ❌ MISSING | Orphan citation (line 97) |
| Scherer et al. (2022) | ✅ Match (373) | |
| Gu et al. (2019) | ⚠️ Listed as 2020 (357) | Year mismatch |
| Karvounides et al. (2016) | ✅ Match (364) | |
| Stock & Kolb (2021) | ✅ Match (375) | |
| Declercq et al. (2020) | ✅ Match (345) | |

### Complete Reference List

| Reference Entry | Cited in Body | Notes |
|-----------------|---------------|-------|
| Blatt et al. (1982) — 340 | ✅ Yes | |
| Boccaccio et al. (2024) — 341 | ✅ Yes | |
| Bouwmeester & Jongerling (2020) — 342 | ✅ Yes | |
| Dao et al. (2020) — 344 | ✅ Yes | Body also cites it as 2021 |
| Declercq et al. (2020) — 345 | ✅ Yes | |
| Elliott (2002) — 346 | ✅ Yes | |
| Elliott et al. (2004) — 347 | ✅ Yes | |
| Epstein et al. (2021) — 348 | ✅ Yes | |
| Epstein & Dallery (2022) — 349 | ✅ Yes | |
| Firestone (2025) — 350 | ⚠️ Partial | Body cites Firestone 2021 and 2001, never 2025 |
| Gilbert (2009) — 351 | ✅ Yes | |
| Gilbert et al. (2004) — 352 | ✅ Yes | Cited as "Gilbert (2004)" |
| Gilbert & Irons (2004) — 353 | ⚠️ Partial | Body cites it as 2005 |
| Greenberg & Goldman (2019) — 354 | ❌ No | Orphan reference |
| Greenberg (2006) — 355 | ❌ No | Orphan reference |
| Greenberg & Pascual-Leone (2006) — 356 | ❌ No | Orphan reference |
| Gu et al. (2020) — 357 | ⚠️ Partial | Body cites it as 2019 |
| Halamová & Kanovský (2019) — 358 | ❌ No | Orphan reference |
| Halamová et al. (2021) — 359 | ✅ Yes | |
| Halamová et al. (2022) — 360 | ✅ Yes | |
| Holmes & Mathews (2010) — 361 | ✅ Yes | |
| Imbriano et al. (2020) — 362 | ✅ Yes | |
| Jacobson et al. (2016) — 363 | ❌ No | Orphan reference (guided imagery / knee surgery — off-topic) |
| Karvounides et al. (2016) — 364 | ✅ Yes | |
| Kwekkeboom et al. (1998) — 365 | ❌ No | Orphan reference |
| Lane et al. (2015) — 366 | ✅ Yes | |
| Levin & Kratochwill (2021) — 367 | ✅ Yes | |
| Maner et al. (2023) — 368 | ⚠️ Partial | Body cites it as 2022 |
| Marciniak et al. (2020) — 369 | ✅ Yes | |
| Neff (2023) — 370 | ⚠️ Partial | Body also cites Neff 2003 and 2022 |
| Randhawa & Vella-Brodrick (2025) — 371 | ✅ Yes | |
| Runge et al. (2017) — 372 | ✅ Yes | |
| Scherer et al. (2022) — 373 | ✅ Yes | |
| Slimani et al. (2016) — 374 | ❌ No | Orphan reference (mental imagery / muscular strength — off-topic) |
| Stock & Kolb (2021) — 375 | ✅ Yes | |
| Suica et al. (2022) — 376 | ❌ No | Orphan reference |
| Timulak & Keogh (2022) — 377 | ✅ Yes | |
| Wakelin et al. (2021) — 378 | ✅ Yes | |
| Werner et al. (2019) — 379 | ⚠️ Partial | Body cites it as 2015 |
| Whelton & Greenberg (2005) — 380 | ✅ Yes | |

### Inconsistencies Found

#### REF-001
- **Type:** orphan-citation
- **Severity:** critical
- **In-text:** \`(Greenberg, 2021)\` — appears at least 6 times (lines 37, 43, 48, 51, 52, 53, 64)
- **In reference list:** MISSING. The list contains Greenberg & Goldman (2019), Greenberg (2006), and Greenberg & Pascual-Leone (2006), but no Greenberg 2021.
- **Recommended fix:** Adăugați în lista de referințe sursa Greenberg (2021) care fundamentează cadrul EFT, sau modificați citările din text pentru a corespunde uneia dintre lucrările Greenberg deja listate (de ex. Greenberg & Goldman, 2019). Aceasta este cea mai citată sursă din lucrare și absența ei este eroarea cea mai gravă.

#### REF-002
- **Type:** orphan-citation
- **Severity:** critical
- **In-text:** \`(Wong et al., 2025)\` — appears 7+ times (lines 26, 33, 38, 39, 40, 41)
- **In reference list:** MISSING
- **Recommended fix:** Adăugați referința completă pentru Wong et al. (2025) în lista bibliografică.

#### REF-003
- **Type:** orphan-citation
- **Severity:** critical
- **In-text:** \`(Pascual-Leone & Greenberg, 2007)\` — appears 4 times (lines 53, 64)
- **In reference list:** MISSING. The list has Greenberg & Pascual-Leone (2006), a different work and different author order.
- **Recommended fix:** Adăugați referința Pascual-Leone & Greenberg (2007), sau, dacă este vorba de aceeași sursă, aliniați anul și ordinea autorilor între text și listă.

#### REF-004
- **Type:** orphan-citation
- **Severity:** high
- **In-text:** \`(Vidal & Soldevilla, 2022)\` — appears 5+ times (lines 32, 36, 44, 46, 47)
- **In reference list:** MISSING
- **Recommended fix:** Adăugați referința completă pentru Vidal & Soldevilla (2022).

#### REF-005
- **Type:** orphan-citation
- **Severity:** high
- **In-text:** \`(Zuroff et al., 2021)\` — appears 3 times (lines 40, 41)
- **In reference list:** MISSING. Zuroff appears only as a co-author within Blatt et al. (1982).
- **Recommended fix:** Adăugați referința completă pentru Zuroff et al. (2021).

#### REF-006
- **Type:** orphan-citation
- **Severity:** high
- **In-text:** \`(Halamová et al., 2023)\` — appears 4 times (lines 50, 61, 64, 65)
- **In reference list:** MISSING. The earliest Halamová entry is 2019; there are entries for 2021 and 2022 but not 2023.
- **Recommended fix:** Adăugați referința Halamová et al. (2023), sau verificați dacă citarea ar trebui să fie 2022.

#### REF-007
- **Type:** orphan-citation
- **Severity:** high
- **In-text:** \`(Halamová et al., 2018)\` — appears twice (lines 36, 55)
- **In reference list:** MISSING. Earliest Halamová entry is 2019.
- **Recommended fix:** Adăugați Halamová et al. (2018), sau verificați dacă este de fapt Halamová & Kanovský (2019), deja prezentă în listă (358), care nu este citată nicăieri.

#### REF-008
- **Type:** orphan-citation
- **Severity:** medium
- **In-text:** \`(Longe et al., 2010)\` — line 35
- **In reference list:** MISSING
- **Recommended fix:** Adăugați referința Longe et al. (2010) — studiul de neuroimagistică citat pentru activarea cerebrală în autocritică.

#### REF-009
- **Type:** orphan-citation
- **Severity:** medium
- **In-text:** \`(Kosslyn et al., 2006)\` — line 57
- **In reference list:** MISSING
- **Recommended fix:** Adăugați referința Kosslyn et al. (2006).

#### REF-010
- **Type:** orphan-citation
- **Severity:** medium
- **In-text:** \`(Marks, 1973)\` — line 58 (sursa originală a chestionarului VVIQ)
- **In reference list:** MISSING
- **Recommended fix:** Adăugați Marks (1973) — sursa de origine a VVIQ, esențială dat fiind că instrumentul este central în studiu.

#### REF-011
- **Type:** orphan-citation
- **Severity:** medium
- **In-text:** \`(Blomkvist & Marks, 2023)\` — line 58
- **In reference list:** MISSING
- **Recommended fix:** Adăugați referința Blomkvist & Marks (2023).

#### REF-012
- **Type:** orphan-citation
- **Severity:** medium
- **In-text:** \`(Paivio, 2013)\` — line 54
- **In reference list:** MISSING
- **Recommended fix:** Adăugați referința Paivio (2013).

#### REF-013
- **Type:** orphan-citation
- **Severity:** high
- **In-text:** \`(Robillard et al., 2025 Kiekens et al., 2024; Mason et al., 2021)\` — line 97 (instrumentul de măsurare a autocriticii)
- **In reference list:** All three MISSING
- **Recommended fix:** Adăugați cele trei referințe (Robillard et al., 2025; Kiekens et al., 2024; Mason et al., 2021). Notă suplimentară: lipsește un punct și virgulă între "Robillard et al., 2025" și "Kiekens et al., 2024" în text — corectați în \`(Robillard et al., 2025; Kiekens et al., 2024; Mason et al., 2021)\`.

#### REF-014
- **Type:** orphan-citation
- **Severity:** medium
- **In-text:** \`(Firestone, 2001)\` — line 33
- **In reference list:** MISSING. List has Firestone (2025) only.
- **Recommended fix:** Verificați anul corect pentru lucrarea Firestone citată. Textul folosește trei ani diferiți pentru același autor (2001 la linia 33, 2021 la liniile 35), iar lista conține doar 2025. Unificați la o singură sursă consecventă.

#### REF-015
- **Type:** year-mismatch
- **Severity:** high
- **In-text:** \`(Firestone, 2021)\` — appears 4 times (line 35)
- **In reference list:** \`Firestone, R. W. (2025). The enemy within...\` (350)
- **Recommended fix:** Aliniați anul. Verificați dacă lucrarea este 2021 sau 2025 și corectați text/listă pentru a corespunde. (Vezi și REF-014 — același autor citat cu trei ani diferiți.)

#### REF-016
- **Type:** year-mismatch
- **Severity:** high
- **In-text:** \`(Werner et al., 2015)\` — line 26
- **In reference list:** \`Werner, A. M., Tibubos, A. N., Rohrmann, S., & Reiss, N. (2019)...\` (379)
- **Recommended fix:** Schimbați anul din text în 2019 pentru a corespunde listei (\`Werner et al., 2019\`).

#### REF-017
- **Type:** year-mismatch
- **Severity:** high
- **In-text:** \`(Gilbert & Irons, 2005)\` — line 26, 32
- **In reference list:** \`Gilbert, P., & Irons, C. (2004)...\` (353)
- **Recommended fix:** Schimbați anul din text în 2004 (\`Gilbert & Irons, 2004\`).

#### REF-018
- **Type:** year-mismatch
- **Severity:** high
- **In-text:** \`(Maner et al., 2022)\` — lines 36, 62
- **In reference list:** \`Maner, S., Morris, P. G., & Flewitt, B. I. (2023)...\` (368)
- **Recommended fix:** Schimbați anul din text în 2023 (\`Maner et al., 2023\`).

#### REF-019
- **Type:** year-mismatch
- **Severity:** high
- **In-text:** \`(Gu et al., 2019)\` — line 98
- **In reference list:** \`Gu, J., Strauss, C., Bond, R., & Cavanagh, K. (2020)...\` (357)
- **Recommended fix:** Schimbați anul din text în 2020 (\`Gu et al., 2020\`).

#### REF-020
- **Type:** year-mismatch
- **Severity:** high
- **In-text:** \`Neff (2003, 2022)\` (line 38) and \`(Neff, 2022)\` (line 38)
- **In reference list:** Only \`Neff, K. D. (2023)...\` (370) exists
- **Recommended fix:** Niciunul dintre anii citați (2003, 2022) nu are corespondent în listă; există doar Neff (2023). Fie adăugați referințele Neff (2003) și Neff (2022), fie corectați citările din text la 2023 dacă este vorba de aceeași sursă.

#### REF-021
- **Type:** year-mismatch / duplicate-year
- **Severity:** high
- **In-text:** \`(Dao et. al, 2020)\` (lines 27, 27) AND \`(Dao et al., 2021)\` (lines 49, 49, 60)
- **In reference list:** \`Dao, K., De Cocker, K., Tong, H., ... (2020)...\` (344) — single entry, year 2020
- **Recommended fix:** Aceeași lucrare este citată sub doi ani diferiți (2020 și 2021). Unificați toate citările la 2020 pentru a corespunde listei. De asemenea, corectați punctuația malformată "et. al" → "et al."

#### REF-022
- **Type:** orphan-reference
- **Severity:** medium
- **In-text:** never cited
- **In reference list:** \`Greenberg & Goldman (2019)\` (354), \`Greenberg (2006)\` (355), \`Greenberg & Pascual-Leone (2006)\` (356)
- **Recommended fix:** Aceste trei lucrări Greenberg sunt în listă, dar niciuna nu este citată în text (textul citează doar "Greenberg, 2021", care lipsește — vezi REF-001). Fie citați-le în text, fie eliminați-le din listă, fie folosiți una dintre ele pentru a înlocui citarea orfană Greenberg (2021).

#### REF-023
- **Type:** orphan-reference
- **Severity:** low
- **In-text:** never cited
- **In reference list:** \`Halamová, J. & Kanovský, M. (2019)...\` (358)
- **Recommended fix:** Citați în text sau eliminați. (Posibil candidat pentru a rezolva REF-007 dacă citarea "Halamová et al., 2018" se referă de fapt la această sursă.)

#### REF-024
- **Type:** orphan-reference
- **Severity:** low
- **In-text:** never cited
- **In reference list:** \`Jacobson et al. (2016)\` (363), \`Kwekkeboom et al. (1998)\` (365), \`Slimani et al. (2016)\` (374), \`Suica et al. (2022)\` (376)
- **Recommended fix:** Aceste patru lucrări (imagerie ghidată în context medical/sportiv — proteză de genunchi, forță musculară etc.) nu sunt citate nicăieri în text și par în afara temei. Eliminați-le din listă sau, dacă sunt relevante, integrați-le în cadrul teoretic.

#### REF-025
- **Type:** name/format-inconsistency
- **Severity:** low
- **In-text:** \`(Halamova et al., 2022)\` (line 27) vs \`(Halamová et al., 2022)\` elsewhere
- **In reference list:** \`Halamová...\` (with diacritic)
- **Recommended fix:** Folosiți consecvent diacriticul: "Halamová" în toate citările din text.

#### REF-026
- **Type:** format-inconsistency
- **Severity:** low
- **In-text:** \`(Marciniak et al, 2020)\` (line 49) — missing period after "al"; \`(Dao et. al, 2020)\` (line 27) — period after "et"
- **In reference list:** n/a (formatting only)
- **Recommended fix:** Standardizați abrevierea la "et al." (punct după "al", fără punct după "et") în toate citările din text.

---

## Score: 4/10

**Rationale:** The matched citations that exist are mostly accurate, and the reference list itself is well-formatted (consistent APA style, DOIs included). However, the integrity between body and list is poor for a manually-managed dissertation:

- **15 orphan citations**, including the single most-cited source in the entire paper (Greenberg, 2021) and the central measurement instruments (Robillard/Kiekens/Mason for self-criticism EMA). Six of these are cited 3+ times each.
- **8 orphan references**, four of which (Jacobson, Kwekkeboom, Slimani, Suica) appear off-topic and were likely left over from an earlier literature pool.
- **7 year/name mismatches**, including one work (Dao) cited under two different years.

The orphan citations are the critical problem — a reader cannot locate the sources for major theoretical claims. The author should resolve every CRITICAL and HIGH item before submission; once the missing references are added and years reconciled, the reference apparatus would jump to roughly 8/10. The two off-topic clusters (REF-024) strongly suggest doing a clean pass with a reference manager (Zotero/Mendeley) to eliminate manual drift.
`,
  content: `# Content & Argument Quality Analysis

**Document:** LiaZamfir.ReaserchPractice.WorkInProgress.md
**Analysis Date:** 2026-05-30
**Pass:** Light
**Analyzer:** Content & Argument
**Overall Score:** 8/10

---

## Overall Assessment

This dissertation makes a genuinely sophisticated and well-conceived contribution for a master's-level work. Its central contribution is the integration of three demanding components that rarely appear together at this level: a Single-Case Experimental Design with randomized staggered multiple baselines (N=29, 543 observations), intensive Ecological Momentary Assessment data collection, and a Multilevel Structural Equation Model (MSEM) that tests a serial process chain derived directly from Emotion-Focused Therapy theory (VR → EAc → EAw → ACr). The author does not merely ask "does the app work" — she asks the more interesting and theoretically grounded questions of *for whom* (the VVIQ moderation question) and *through what mechanism* (the within-session emotional process chain). This dual nomothetic-idiographic logic is mature, and the alignment between the three hypotheses, the two analytic stages (macro in MultiSCED, micro in Jamovi), and the EFT theory is tight and coherent.

The single most significant strength is the methodological architecture and the honesty with which results are interpreted. The null group-level effect (Model 1) is not buried or spun; instead it is correctly attributed to extreme between-subject heterogeneity (random intercept SD = 2.60) and then productively decomposed at the idiographic level into responders, stable cases, and reactive/backdraft cases. The reframing of rising self-criticism scores as a clinically positive *de-automatization* process — triangulated against participant journals — is the intellectual high point of the work. It converts what a naive reader would call a failure into a theoretically meaningful finding, and it is supported rather than merely asserted. The serial mediation result (indirect effect = -0.256, p = .012) cleanly confirms the EFT process chain and gives the dissertation a real, defensible take-home message.

The most critical gap is the discrepancy between the precision of the analysis and the under-specification of two process measures. The "Activarea emoțională" (EAc) and "Conștientizarea emoțională" (EAw) variables — which carry the entire weight of the central mediation finding — are described in a single vague sentence (lines 106) with no item wording, no scale anchors, no number of items, and no reliability coefficients, in sharp contrast to the carefully documented self-criticism, self-compassion, experiencing, and stress measures. An examiner testing the chain VR → EAc → EAw → ACr will immediately ask what EAc and EAw actually *are*, and the current text cannot answer. A second-tier but real concern is the abstract/introduction framing: the document still carries template boilerplate ("The Title of Your Paper", "Start your paper here...") at line 22-24, which is the kind of surface flaw that disproportionately damages a first impression at an A-level defense.

On balance this is strong, examiner-impressing work whose grade is currently held back not by its reasoning — which is excellent — but by a handful of measurement-reporting omissions, some terminological inconsistencies in the results, and surface polish. These are all fixable without altering the author's voice or the substance of the analysis.

---

## Per-Section Scores

| Section | Score (/10) | Brief Note |
|---------|-------------|------------|
| Abstract | 8 | Clear, complete, accurately previews findings; marred by adjacent template boilerplate |
| Introduction | 8 | Tight funnel from self-criticism → digital intervention → imagery as moderator; well-cited |
| Theoretical Framework | 9 | Excellent synthesis (Blatt, Firestone, Gilbert, EFT, imagery state/trait distinction); coherent and purposeful |
| Research Objectives & Hypotheses | 9 | Three hypotheses precisely operationalized and mapped to analyses; H3 correctly flagged exploratory |
| Methodology | 8 | Sophisticated design well-justified; weakened by under-specified EAc/EAw measures and thin equipment/intervention validity detail |
| Results | 7 | Rich and honest, but key process measures undefined, some statistic inconsistencies, and a typo-level finding label |
| Discussion | 8 | Strong mechanistic interpretation and clinically meaningful reframing; limitations section is candid and intelligent |
| **Overall** | **8** | Methodologically ambitious, theoretically coherent, honestly interpreted; held back by measurement reporting and polish |

---

## Strengths

### CONT-S001
- **Section:** Methodology / Overall design
- **Lines:** ~76-82, 130-148
- **Strength:** The SCED with randomized staggered multiple-baseline starts (days 6/8/10), combined with EMA and a two-tier analytic plan (HLM macro in MultiSCED, MSEM micro in Jamovi), is methodologically advanced for a master's dissertation. The author correctly justifies HLM over classical parametric tests on the grounds of error autocorrelation, and correctly uses cluster-mean (Centered Clusterwise) centering to isolate within-person day-to-day variation from between-person differences.
- **Why it matters:** This is precisely the design sophistication that distinguishes an A-grade dissertation. It demonstrates command of contemporary single-case methodology and multilevel modeling, not just textbook ANOVA.

### CONT-S002
- **Section:** Results / Discussion
- **Lines:** ~239, 283-286, 315-316, 325
- **Strength:** Honest handling of the null group-level effect. Rather than treating the non-significant fixed effect as a failure, the author attributes it correctly to extreme between-subject heterogeneity, then decomposes it idiographically and reframes rising self-criticism as a clinically positive *de-automatization* process — triangulated against participant journals (P20, P26).
- **Why it matters:** Examiners reward intellectual honesty and the ability to extract theoretically meaningful signal from a "messy" result. This converts a potential weakness into the most original contribution of the thesis.

### CONT-S003
- **Section:** Theoretical Framework
- **Lines:** ~56-65
- **Strength:** The state/trait distinction in mental imagery (VVIQ trait vs. moment-to-moment Vividness Ratings, citing Runge et al., 2017) is clearly drawn and then used to justify why the trait measure is a Level-2 moderator while VR is a Level-1 process predictor.
- **Why it matters:** This conceptual precision directly motivates the multilevel structure and gives the hypotheses theoretical legitimacy rather than ad hoc statistical convenience.

### CONT-S004
- **Section:** Research Objectives & Hypotheses
- **Lines:** ~66-73
- **Strength:** Hypotheses are precisely stated, operationalized, and each maps cleanly to a specific analysis; H3 is explicitly labeled exploratory, which is methodologically correct given the contemporaneous measurement.
- **Why it matters:** Clear hypothesis-analysis alignment is a hallmark of rigorous design and makes the results section easy to evaluate.

### CONT-S005
- **Section:** Results / Serial mediation
- **Lines:** ~287-314
- **Strength:** The serial mediation (VR → EAc → EAw → ACr, indirect effect = -0.256, p = .012) cleanly confirms the EFT process chain, including the correct interpretation of *total mediation* (direct VR→ACr effect non-significant at p = .991 while the indirect path is significant).
- **Why it matters:** This is the dissertation's defensible empirical core and demonstrates the author can interpret a mediation model correctly, including the subtle distinction between direct and indirect effects.

### CONT-S006
- **Section:** Discussion / Limitations
- **Lines:** ~326-331
- **Strength:** The limitations section is genuinely self-critical and theoretically aware: it names the contemporaneous-measurement problem (no strict temporal precedence, so covariation not causation), protocol fatigue/desirability, fragmentary adherence over the holiday period, and conceptual saturation of a psychology-student sample.
- **Why it matters:** Candid, specific limitations signal scientific maturity. The contemporaneous-measurement limitation in particular shows the author understands the boundary of her own causal claims.

---

## Weaknesses & Gaps (Light Pass — highest priority issues)

### CONT-001
- **Pass:** light
- **Severity:** critical
- **Section:** Methodology / Measures
- **Lines:** ~106 (and the construct definitions feeding Tables 4)
- **Issue:** The two process variables that carry the entire central mediation result — Activarea emoțională (EAc) and Conștientizarea emoțională (EAw) — are defined in a single vague clause: "Evaluări ale gradului de activare și ușurinței experimentării emoțiilor." No item wording, response scale/anchors, number of items, or internal reliability is given. Every other measure (autocritică α=.852, autocompasiune α=.852, experiențiere α=.954, VR scale 1-5) is fully documented by contrast.
- **Impact on grade:** An examiner will immediately ask "what exactly are EAc and EAw, and how were they scored?" Because these two variables are the mediators in the headline finding, the inability to answer undermines the credibility of the strongest result. This is the single most likely point of attack at defense.
- **Recommendation:** Add 2-3 sentences in *Măsuri* mirroring the existing format, e.g.: "Activarea emoțională (EAc) a fost evaluată printr-un item care a surprins intensitatea trăirilor resimțite în timpul exercițiului (scală [X]–[Y], ancore: '[...]'). Conștientizarea emoțională (EAw) a fost evaluată prin [N] item(i) [...] (scală [...]; ancore '[...]')." Report the response scale and, if available, reliability. Keep the author's existing concise documentary style.

### CONT-002
- **Pass:** light
- **Severity:** high
- **Section:** Abstract / Introduction
- **Lines:** ~22-24
- **Issue:** Template boilerplate remains in the document: "**The Title of Your Paper**" followed by "Start your paper here. Be sure to indent all paragraphs in the body of your paper." sits between the Romanian abstract and *Introducere*.
- **Impact on grade:** This is a surface flaw that creates a disproportionately bad first impression at an A-level review — it reads as unproofed. Cheap to fix, high reputational cost if left.
- **Recommendation:** Delete lines 22-24 entirely. If an English-language title/abstract is required by the faculty template, replace with the actual translated title and abstract; otherwise remove.

### CONT-003
- **Pass:** light
- **Severity:** high
- **Section:** Results / Idiographic classification
- **Lines:** ~257-280 (Table 3), ~285
- **Issue:** The clinical classification logic appears internally inconsistent with effect-size sign. P5 (ES = -11.554) and P15 (ES = -23.68) are labeled "Responder (Scădere)" (decrease) while positive ES cases (e.g., P6 = +6.031, P12 = +13.271) are labeled "Reactiv/Backdraft" — implying negative ES = improvement. Yet the text at line 285 states 10 participants "reacționat prin creșterea scorurilor brute," and the abstract frames lower self-criticism as the desired outcome. The directionality of the ES metric (does negative mean reduced self-criticism?) is never explicitly stated, so a reader cannot verify the responder/reactive assignment.
- **Impact on grade:** Without an explicit statement of what the sign of the effect size means, the central idiographic table is uninterpretable on its own, and an examiner may suspect a labeling error. This weakens the responder/backdraft narrative that the discussion relies on.
- **Recommendation:** Add one sentence before or in the Table 3 note stating the convention explicitly, e.g.: "*Notă*: Mărimea efectului este exprimată astfel încât valorile negative indică o reducere a autocriticii (răspuns favorabil), iar valorile pozitive o creștere (reacție de tip backdraft)." Verify each classification against this rule.

### CONT-004
- **Pass:** light
- **Severity:** high
- **Section:** Results / Observation counts
- **Lines:** ~152, 169, 177, 188 (Table 1)
- **Issue:** Internal arithmetic inconsistencies in Table 1. P12 row: baseline 3 + intervention 7 should total 10, but "Total înregistrări" reads 6. P20 row: baseline 3 + intervention 10 = 13 (consistent), but the *staggered design* assigned Group 1 a 5-day baseline (note says Grupul 1 = 5 zile) — yet P12 and P20 (both Group 1) show 3 baseline points; the text (line 152) explains P12 as missing data but does not explain P20's 3 baseline points. Also the running text says P12 had "3 puncte de observație în faza de baseline și 7 în cea de intervenție (aderență de 50%)" — totaling 10, contradicting the table's "6".
- **Impact on grade:** Table-text numerical contradictions are exactly what a careful examiner spot-checks. Even if the underlying data are fine, the discrepancy signals lack of proofreading and casts doubt on the 543-observation total.
- **Recommendation:** Recompute and reconcile Table 1 so each row's Total = baseline + intervention, and ensure the P12 narrative matches the table. Confirm the column sum equals 543. If baseline counts below the planned 5/7/9 reflect missing data, add a brief note ("valorile sub eșalonarea planificată reflectă omisiuni în baseline").

### CONT-005
- **Pass:** light
- **Severity:** high
- **Section:** Results / MSEM sample size and fit reporting
- **Lines:** ~288-289, 311-313
- **Issue:** Two reporting gaps in the MSEM. (a) The intervention-phase observation count is given as 359 (line 288), but no derivation links this to the 543 total or to the per-participant B-phase counts in Table 1 — the reader cannot reconstruct it. (b) Model fit is described only in lay narrative ("modelul structural global este stabil, valid și corect din punct de vedere statistic," line 289) with no fit indices (CFI, RMSEA, SRMR, χ²). For an MSEM this is a notable omission.
- **Impact on grade:** Quantitative reviewers expect explicit fit statistics for any SEM; "the program confirmed it is valid" is not acceptable evidence. The unexplained jump to 359 observations also invites the question of how the analytic sample was constructed.
- **Recommendation:** (a) State briefly how 359 is obtained (B-phase observations with complete process data). (b) Replace the lay sentence with actual fit indices if the SEMLj output provides them, e.g.: "Indicii de potrivire au indicat un model adecvat (CFI = [...], RMSEA = [...], SRMR = [...])." If a saturated model precludes conventional fit indices, state that explicitly instead.

### CONT-006
- **Pass:** light
- **Severity:** high
- **Section:** Discussion / internal consistency of mechanism claim
- **Lines:** ~300, 336
- **Issue:** The Aplicabilitate section (line 336) states "la Nivelul 2 conștientizarea nu a prezit auto-critica" (at Level 2, awareness did not predict self-criticism), but the Results (line 300, Table 4) report EAw → ACr at the Level-1 within-person path as significant (β = -0.158, p = .011). The discussion appears to conflate or mislabel the level at which the awareness→self-criticism link held, or introduces a Level-2 null result that was never reported in the results section.
- **Impact on grade:** A results/discussion contradiction on the *key mediating link* is a serious coherence problem. Either a Level-2 analysis exists and must be reported, or the discussion sentence misstates the finding.
- **Recommendation:** Reconcile: if the claim refers to an unreported between-person (Level-2) path, add that estimate to the results; if it is a slip, correct line 336 to reflect that the within-person EAw→ACr path *was* significant, and reframe the "limits of self-guidance" argument on other grounds (e.g., heterogeneity, backdraft cases).

### CONT-007
- **Pass:** light
- **Severity:** high
- **Section:** Methodology / Measures — VVIQ validity for moderation
- **Lines:** ~58, 100, 135, 223, 242
- **Issue:** VVIQ-P ("subscala de vizualizare a persoanelor apropiate"/faces) is the moderator with the strongest effect (β = -0.366, p = .012) and is foregrounded in the abstract, yet the standard VVIQ (Marks, 1973) is not formally divided into a validated "persoane/faces" subscale. The text introduces VVIQ-P as if it were an established subscale without explaining how it was derived from the VVIQ items (which items, why those constitute a "faces/people" factor, any reliability for the subscale).
- **Impact on grade:** Because VVIQ-P drives a headline claim, an examiner will question whether this subscale is psychometrically defensible or a post hoc item grouping. Unexplained, it reads as a researcher-degrees-of-freedom risk.
- **Recommendation:** Add a sentence in *Măsuri* specifying which VVIQ items comprise the VVIQ-P composite and the rationale (the VVIQ's first item-set concerns a familiar person/face), plus subscale reliability if computable. If it is a principled a priori grouping, say so; this defuses the objection.

### CONT-008
- **Pass:** light
- **Severity:** high
- **Section:** Results — typo in a reported finding label
- **Lines:** ~313
- **Issue:** "efectul direct al calității imaginilor din sesiune asupra autocriticii a fost complet nesemnificati" — "nesemnificati" is a truncated/misspelled "nesemnificativ." Minor in isolation, but it sits in the sentence stating the central total-mediation result.
- **Impact on grade:** Typos in the load-bearing results sentence undercut the impression of rigor at exactly the moment the author is making her strongest claim.
- **Recommendation:** Correct to "complet nesemnificativ." Proofread the surrounding results paragraph (also "predictorul direct direct," line 323; "regresia segmentat," line 283).

### CONT-009
- **Pass:** light
- **Severity:** high
- **Section:** References / citation consistency
- **Lines:** ~35, 350 (Firestone); ~36, 352 (Gilbert 2004); throughout
- **Issue:** Citation-year inconsistencies between body and reference list. Firestone is cited in-text as "(2021)" and "(2001)" (lines 33, 35) but the reference entry is dated 2025 (line 350). Gilbert "(2004)" appears in text (line 36) and there are two 2004 Gilbert entries (lines 352-353) without a/b disambiguation. Several in-text citations (e.g., "Dao et. al, 2020" line 27 vs. "Dao et al., 2021" line 49) vary in year for what may be the same source. Only ~34 references appear to be present; verify completeness against all in-text citations (e.g., Neff 2003/2022/2023, Kosslyn et al. 2006, Marks 1973, Imbriano et al. 2020, Blomkvist & Marks 2023, Paivio 2013, Stock & Kolb 2021, Scherer et al. 2022, Karvounides et al. 2016, Gu et al. 2019, Robillard et al. 2025, Kiekens et al. 2024, Mason et al. 2021, Maner et al. 2022, Wakelin et al. 2021, Werner et al. 2015, Whelton & Greenberg 2005, Longe et al. 2010, Lane et al. 2015, Vidal & Soldevilla 2022, Randhawa & Vella-Brodrick 2025, Zuroff et al. 2021).
- **Impact on grade:** APA accuracy is explicitly graded. Year mismatches and missing reference entries are easy deductions and signal carelessness.
- **Recommendation:** Run a systematic body-to-list reconciliation: every in-text citation must have a matching dated entry, and vice versa. Disambiguate the two Gilbert 2004 entries as 2004a/2004b. Fix the Firestone year (decide 2021 vs. 2025 and apply consistently). Standardize "et al." (remove the stray "et." in "Dao et. al"). The ~34 link count suggests several cited works may be absent from the list — confirm.

---

## Summary Recommendations

1. **Fully document the EAc and EAw process measures** (CONT-001). These mediators carry the headline finding; add item wording, scale/anchors, item count, and reliability in the *Măsuri* section in the same format as the other measures. This is the highest-leverage fix.

2. **Reconcile the Results↔Discussion contradiction on the EAw→ACr link and report MSEM fit/sample derivation** (CONT-006, CONT-005). Fix the Level-1/Level-2 inconsistency at line 336, state how the 359 observations were obtained, and replace "the program confirmed it is valid" with actual fit indices (CFI/RMSEA/SRMR) or an explicit statement of why they are unavailable.

3. **Fix the numerical and labeling integrity of the results tables** (CONT-003, CONT-004, CONT-008). Reconcile Table 1 arithmetic (P12, P20, column total = 543), state the effect-size sign convention for Table 3, and correct the typos in the central results sentences.

4. **Justify the VVIQ-P subscale** (CONT-007). Specify which VVIQ items form the "faces/people" composite and the rationale, with subscale reliability if possible, so the strongest moderation claim is psychometrically defensible.

5. **Remove template boilerplate and run a full APA citation reconciliation** (CONT-002, CONT-009). Delete the "The Title of Your Paper / Start your paper here" placeholder, and systematically match every in-text citation to a correctly dated reference entry (Firestone year, Gilbert 2004a/b, Dao years, missing entries). These are cheap fixes with high impact on the examiner's first impression.
`,
  structure: `# Structure & Flow Review

**Document:** LiaZamfir.ReaserchPractice.WorkInProgress.md  
**Analysis Date:** 2026-05-30  
**Pass:** Light  
**Analyzer:** Structure & Flow  
**Structure Score:** 6.5/10  

---

## Summary

The dissertation presents a sophisticated and methodologically mature study. The theoretical framework is well-developed and the analytical sections are detailed. However, the document has several significant structural problems: a critical template artifact left in the body text, two missing standard master's dissertation components (Conclusions section and Appendices), disproportionately short Discussion and Conclusions sections relative to the elaborate Results, weak signposting between major sections, and a redundant paragraph at the Cadru teoretic → Introducere boundary. The abstract is strong. The Introduction-to-Theory and Theory-to-Methodology coherence is good but not explicit. Results-to-Discussion alignment is partial — one result cluster (the backdraft cases and the Exp variable finding) is addressed but not fully developed in the Discussion.

---

## Structural Issues (Light Pass)

### STRUCT-001
- **Pass:** light
- **Severity:** critical
- **Issue:** APA template artifacts remain in the submitted document. Lines 22-24 contain "The Title of Your Paper" (bold heading) and "Start your paper here. Be sure to indent all paragraphs in the body of your paper." — these are boilerplate placeholder text from the APA 7th edition Word template. They appear between the Keywords section and the Introducere heading, creating a jarring non-sequitur visible to any reader or examiner.
- **Affected section:** Between Rezumat and Introducere
- **Lines:** ~22-24
- **Recommendation:** Delete lines 22-24 entirely. The transition from keywords to the Introducere heading is self-sufficient without any bridging text.

---

### STRUCT-002
- **Pass:** light
- **Severity:** critical
- **Issue:** The document has no Concluzii (Conclusions) section. The Discuții section ends at line 337 and is immediately followed by Referințe bibliografice. At master's level, Concluzii is a mandatory standalone section distinct from Discuții — it synthesises the study's contribution, answers the research questions directly, and points to future directions. The current Aplicabilitate subsection (~lines 332-336) partially fills this role but reads as applied implications rather than academic conclusions. Without a proper Concluzii, the dissertation ends abruptly.
- **Affected section:** End of Discuții / before Referințe
- **Lines:** ~337 (missing section)
- **Recommendation:** Add a Concluzii section (approximately 300-500 words) between Aplicabilitate and Referințe bibliografice. It should: (1) directly restate the research questions and answer each one based on results; (2) summarise the theoretical contribution (confirmation of the EFT process chain via MSEM, protective-trait role of VVIQ-P); (3) acknowledge the partial confirmation of Ipoteza 1 and its implications; (4) identify 2-3 concrete directions for future research; (5) close with a sentence on the study's broader significance for digital mental health design.

---

### STRUCT-003
- **Pass:** light
- **Severity:** high
- **Issue:** No Appendices are present. The dissertation uses four custom-adapted measurement instruments (the 4-item self-criticism EMA scale, the adapted SOCS 3-item scale, the adapted single-item VVIQ for in-session vividness, the Experiencing Scale short form). None of these adapted instruments are reproduced in full in the document — only brief descriptions appear in the Măsuri subsection. Romanian university regulations and APA standards both require that adapted or composite instruments be included in an Appendix so that replication is possible.
- **Affected section:** Post-references (missing)
- **Lines:** ~388+ (missing section)
- **Recommendation:** Add a minimum of two appendices after Referințe bibliografice: (A) Protocolul de monitorizare EMA — the full daily questionnaire items as presented to participants in both phases; (B) Scala de autocritică adaptată — the four items with exact wording, response anchors, and source citation for each item. If the Experiencing Scale and VVIQ adaptation can be reproduced under fair use, include those as well. Label appendices per APA 7: "Anexa A", "Anexa B", etc.

---

### STRUCT-004
- **Pass:** light
- **Severity:** high
- **Issue:** The Discussion section (Discuții, lines 317-337) is disproportionately short relative to the Results section (lines 149-316). Results spans approximately 167 lines including tables; Discussion spans only approximately 20 lines of interpretive prose (Interpretare subsection) plus 8 lines for Limitări and 5 lines for Aplicabilitate. A 167:33 ratio is severely unbalanced at this level. The Interpretare subsection essentially narrates the statistics a second time rather than interpreting them against the theoretical framework established in Cadrul teoretic.
- **Affected section:** Discuții
- **Lines:** ~317-337
- **Recommendation:** Expand the Interpretare subsection substantially (target 400-600 words). Specifically: (1) compare findings against prior EFT process research (Pascual-Leone & Greenberg, 2007; Halamová et al., 2022) already cited in the theory; (2) discuss why VVIQ-P predicted trait-level self-criticism but not intervention slope — this is a novel finding that deserves theoretical elaboration; (3) address the backdraft cases not just descriptively but in terms of what they mean for the EFT process model; (4) discuss why Exp did not predict self-criticism and link this back to the theory-measurement gap noted at line 324.

---

### STRUCT-005
- **Pass:** light
- **Severity:** high
- **Issue:** No Declaration of Authenticity (Declarație de autenticitate / Declarație pe propria răspundere) is present. This is a mandatory administrative component of every master's dissertation submitted at Romanian public universities, including Universitatea București. Its absence likely means it was a separate attached document — but if it is not present in the submitted manuscript file, this is a formal deficiency.
- **Affected section:** Pre-content pages (missing)
- **Lines:** Before or after cover page (missing)
- **Recommendation:** Confirm whether this declaration was submitted as a separate document. If the final submission is to be a single file, add a Declarație de autenticitate page immediately after the cover page, signed and dated by the author.

---

### STRUCT-006
- **Pass:** light
- **Severity:** high
- **Issue:** The Corelația proceselor de stare subsection (lines 63-65) functions as a theoretical summary/bridge to the hypotheses, but it is presented as a heading-level subsection of Cadrul teoretic, making it appear to be a standalone theoretical topic. In content, it is transitional prose that anticipates the hypotheses — it does not introduce new theoretical content. This creates a structural ambiguity: is it part of the theory or part of the objectives section?
- **Affected section:** Cadrul teoretic → Obiectivele Cercetării transition
- **Lines:** ~63-66
- **Recommendation:** Two options: (1) Remove the heading "Corelația proceselor de stare" and integrate the paragraph as the closing paragraph of the preceding subsection (Intervenția digitală EFT-SCP), framing it explicitly as the theoretical rationale that motivates the hypotheses; or (2) Rename it "Raționalul teoretic al studiului" and add one explicit signposting sentence: "Aceste relații teoretice stau la baza obiectivelor și ipotezelor formulate în continuare." This makes the transition intentional rather than abrupt.

---

### STRUCT-007
- **Pass:** light
- **Severity:** high
- **Issue:** The Obiectivele și Ipotezele Cercetării section (lines 66-73) presents objectives and hypotheses in list form without any framing prose. There is no opening sentence explaining why these specific objectives were chosen given the theoretical gaps identified, and no closing sentence bridging into the methodology. The section reads as a bare list, which weakens the logical chain from theory to design.
- **Affected section:** Obiectivele și Ipotezele Cercetării
- **Lines:** ~66-73
- **Recommendation:** Add 2-3 sentences before the objectives list: a framing sentence that references the gaps in the literature (variability in response to EFT digital interventions, unclear mechanism of imagery) and states that these objectives address them. Add a transitional sentence at the end of Ipoteza 3: "Aceste trei ipoteze au orientat alegerile de design și analitice descrise în secțiunea de metodologie." This creates an explicit logical bridge.

---

### STRUCT-008
- **Pass:** light
- **Severity:** high
- **Issue:** The Results section lacks an introductory paragraph. The section header Rezultate (line 149) is immediately followed by Secvență finalizată, which begins with participant-flow data. There is no orienting sentence telling the reader how the results are organised or in what order the hypotheses will be addressed. The reader must infer the structure.
- **Affected section:** Rezultate
- **Lines:** ~149-150
- **Recommendation:** Add 3-4 sentences after the Rezultate heading and before Secvență finalizată: state the two analytical stages (MultiSCED macro analysis for Hypotheses 1 and 2; Jamovi micro analysis for Hypothesis 3), identify which tables and figures address which hypotheses, and note the progression from group-level to session-level analysis. This is standard APA dissertation practice and costs little space.

---

## Missing Expected Components

| Component | Status | Recommendation |
|---|---|---|
| Concluzii (Conclusions) | Absent | Add standalone section between Aplicabilitate and Referințe — see STRUCT-002 |
| Appendices with measurement instruments | Absent | Add Anexa A (EMA protocol) and Anexa B (adapted scales) — see STRUCT-003 |
| Declaration of Authenticity | Absent from file | Confirm if submitted separately; add to file if single-document submission required — see STRUCT-005 |
| Acknowledgements (Mulțumiri) | Absent | Optional but conventional at master's level; the dual academic/research context (supervisor role, Self-growth Institute app access) warrants acknowledgement |
| List of Tables / List of Figures | Absent | APA 7 recommends including these for documents with 3+ tables or figures; with 4 tables and 1 figure, a brief list after the abstract would aid navigation |
| Ethics approval reference number | Absent | The ethics section (~line 92) describes consent procedures but does not cite a faculty ethics committee approval number or date; this is a standard requirement for research involving human participants |

---

## Transition Analysis

**Cover page → Rezumat:** Clean. No transition needed; the abstract follows naturally.

**Rezumat → Introducere:** Broken by the APA template artifacts (STRUCT-001). Once those three lines are removed, the transition will be adequate, though a brief descriptive subheading structure could be clearer.

**Introducere → Cadru teoretic:** Weak. The introduction ends at line 29 with a research question statement ("investighează rolul..."), and then the Cadru teoretic heading appears immediately. There is no explicit signposting sentence such as "În cele ce urmează, prezentăm cadrul teoretic al acestor constructe." The reader is dropped into the theory without being told why this particular theoretical architecture was chosen. The introduction does mention the three constructs (self-criticism, self-compassion, imagery, digital delivery), which is good — the missing piece is a one-sentence map of how the theory section is organised.

**Cadru teoretic → Obiectivele și Ipotezele Cercetării:** Moderate. The Corelația proceselor de stare subsection (lines 63-65) provides some bridging content, but its ambiguous status as a theory section vs. transitional passage weakens the join (see STRUCT-006). The final sentence of that subsection ("activarea acestui lanț procesual... ar trebui să aibă ca rezultat reducerea autocriticii zilnice") is an effective lead-in, but it is not explicitly flagged as the theoretical motivation for the hypotheses.

**Obiectivele și Ipotezele Cercetării → Metodologie:** Absent. The section ends with Ipoteza 3 and the Metodologie heading follows immediately. A closing sentence linking theoretical predictions to methodological choices would close this gap (see STRUCT-007).

**Metodologie → Rezultate:** Adequate. The Analiza datelor subsection (lines 129-148) concludes with a methodological rationale sentence, and Rezultate begins with participant flow data, which is conventional. This is one of the stronger transitions in the document.

**Rezultate → Discuții:** Weak. The Discuții heading appears immediately after the adverse events paragraph (line 315-316). There is no summary sentence in Results that orients the reader towards the discussion, and the Discussion's opening sentence ("Scopul principal al acestui studiu...") restates the study aim rather than pivoting from results. A closing Results sentence summarising the three hypotheses' outcomes would strengthen this transition considerably.

**Discuții → Referințe bibliografice:** Critically broken by the missing Concluzii section (STRUCT-002). The discussion ends on a practical implication and then references begin — there is no synthesis or closing of the intellectual argument.

---

## Structural Strengths

**1. Theory-to-methodology coherence is strong.** The theoretical framework methodically builds the rationale for every design choice: the SCED with multiple baselines is justified by the need to capture intra-individual variability (introduced in lines 40-41); the MSEM is justified by the EFT process chain (lines 52-55); the VVIQ-P subscale choice is justified by the interpersonal imagery argument (lines 57-59). This level of design justification is above average for a master's dissertation.

**2. The abstract is nearly complete.** It covers topic, method, participants (N=29, 543 observations), key results for all three hypotheses, and a clinical/practical conclusion. The only minor gap is that the type of intervention is described but the duration (14 days) appears only in the methods, not the abstract. This is a minor editorial point, not a structural one.

**3. The Results section addresses all three hypotheses explicitly.** Each hypothesis is referred to by name at the relevant result (lines 240, 313, 314), and the confirmatory/partial-confirmatory status of each is stated clearly. This is methodologically disciplined and rare at this level.

**4. The Limitări subsection is specific and clinically honest.** The identification of retrospective same-prompt data collection as a temporal precedence limitation (line 328), the conceptual saturation of the sample (line 331), and the protocol fatigue issue (line 329) are all accurate and substantive. These are not generic disclaimers but limitations genuinely specific to this study's design.

**5. The Aplicabilitate subsection links results directly to design implications.** The recommendation to avoid excessively long reflective writing tasks (line 335) flows directly from the protocol fatigue limitation and the backdraft findings — this is good logical closure within the section.

---

## Score: 6.5/10

**Rationale:** The intellectual content and methodological rigour are strong (would merit 8+/10 on content alone). The score is held back by: the critical template artifact (STRUCT-001, -1.5 points); the missing Concluzii section which is a mandatory academic component (STRUCT-002, -0.75 points); the missing Appendices which compromise reproducibility (STRUCT-003, -0.5 points); and the weak transitions at three key junctions — Introducere→Cadru teoretic, Obiective→Metodologie, and Discuții→[Concluzii] (STRUCT-006/007, -0.5 points). Addressing the two critical issues (STRUCT-001 and STRUCT-002) alone would lift the score to approximately 7.5/10.
`
};
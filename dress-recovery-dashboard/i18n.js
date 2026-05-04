/* ═══════════════════════════════════════════════════════════
   i18n — English + Nepali strings
   Usage: t('key') → string in current language
          tM('CREAT','name') → marker name in current lang
          tSys('kidney','label') → system label in current lang
   ═══════════════════════════════════════════════════════════ */

const LANGS = {
  en: {
    name:'English', label:'EN', dir:'ltr',
    strings:{
      h_sub:        'Lab results · April 8 to May 3, 2026 · Discharged Apr 25 · Outpatient',
      h_updated:    'Updated May 3',
      tab_overview: 'Overview',
      tab_dress:    'About DRESS',
      tab_kidney:   'Kidneys',
      tab_liver:    'Liver',
      tab_blood:    'Blood & Immune',
      tab_electrolytes:'Electrolytes',
      tab_graphs:   'Graphs',
      tab_heatmap:  'Heatmap',
      sec_systems:  'How each system is doing — click to explore',
      sec_timeline: 'What has happened, day by day',
      badge_ok:     'In range',
      badge_hi:     'Above range',
      badge_lo:     'Below range',
      badge_imp:    'Improving',
      badge_watch:  'In focus',
      badge_hold:   'Holding steady',
      badge_dial:   'Dialysis rhythm',
      badge_tx:     'Transfusion-supported',
      badge_what:   'What is this?',
      badge_incase: "In KA's case:",
      badge_normal: 'Normal range:',
      comp_title:   'Overall health status · all systems · 0 = biological critical · 100 = fully healthy',
      disclaimer:   '<strong style="color:var(--amber)">Disclaimer:</strong> This page is for educational purposes based on lab results provided by doctors, independent research, and AI collaboration. The visualizations and explanations are conceptual in nature and an exploration of how to understand daily systemic shifts in an easier way. The information presented here does not replace professional medical advice. Always consult a qualified physician for personal medical decisions.',
      story_title:  'KA’s recovery — what happened, and where things stand',
      story_p1:     'On April 8th, KA was admitted facing several health challenges that arrived together and required intensive support: the kidneys needed dialysis to handle filtration, the liver had sustained an acute injury, blood cell production had slowed, and the body’s electrolyte balance needed careful correction.',
      story_p2:     'The weeks since admission have been a story of each system responding and recovering. The liver\'s injury phase is complete — AST, ALT, and bilirubin are fully normal, and albumin jumped from 2.4 at discharge to 3.4 on Apr 28, nearly at the 3.5 normal floor. 🎉 Platelets are now at 174 — solidly above the 150 normal floor — and hemoglobin is rising independently to 8.4. The kidneys are on outpatient dialysis and producing urine steadily: output crossed the 2,000 mL/day normal range on May 1 and reached 3,205 mL by May 3. Each system is rebuilding.',
      story_diag_l: 'Diagnosis · ',
      story_diag:   'KA has been diagnosed with <strong><a onclick="switchTab(\'dress\')" style="color:var(--amber);cursor:pointer;text-decoration:underline;text-underline-offset:3px">DRESS Syndrome</a></strong> (Drug Reaction with Eosinophilia and Systemic Symptoms) — a rare immune reaction triggered by a Sulfa medication.',
      story_prog_l: 'Prognosis · ',
      story_prog:   'Continued steroid therapy and dialysis support over the coming weeks, alongside close monitoring of all organ systems. The outlook is encouraging: all systems are expected to fully recover, with the kidneys being the slowest to complete their journey. Most people with DRESS return to a completely normal quality of life.',
      story_asof_l: 'As of May 3rd, ',
      story_asof:   'KA is home on outpatient dialysis. Urine output has crossed the 2,000 mL/day normal range and reached 3,205 mL on May 3 — a major kidney recovery milestone. Albumin is approaching normal. Platelets and hemoglobin are climbing without transfusion. The arc across all systems is positive.',
      tl_1:  'Admitted. White cells very low, sodium 115, liver enzymes rising, creatinine elevated.',
      tl_2:  'Bladder irrigation. CT scan. Dialysis initiated — kidneys at 5% filtration.',
      tl_3:  "PT/OT begins. Second dialysis session.",
      tl_4:  'Dialysis session.',
      tl_5:  "Urinary catheter removed at KA's request.",
      tl_6:  'Dialysis session. First blood transfusion.',
      tl_7:  'Kidney biopsy. Chest X-ray (clear). Second transfusion.',
      tl_8:  'Third transfusion. Dialysis session. Prednisone started.',
      tl_9:  'Bladder camera, clot removal. Chest catheter placed for outpatient dialysis.',
      tl_10: 'Fourth blood transfusion.',
      tl_11: 'Bladder flush, internal scope. Chest catheter confirmed for outpatient dialysis.',
      tl_12: 'Foley catheter removed. Dialysis session. Amoxicillin continues.',
      tl_13: 'ALT enters normal range — both AST and ALT now fully normal. Liver injury phase complete. 🎉 Post-dialysis creatinine 6.67 (lowest since week 1). GFR of 10 (highest post-dialysis in two weeks).',
      tl_14: '🏡 Discharged home. Outpatient dialysis continues. First independent urine output recorded: 445 mL. ALT confirmed below detection threshold. Platelets touch 150 — lower edge of normal.',
      tl_15: 'Urine output 605 mL — rising.',
      tl_16: 'Urine output 895 mL — crossed the 800 mL/day normal floor.',
      tl_17: 'First outpatient dialysis at Ascend Clinical. 242 min, 2.9 L removed. Pre 81.0 kg, post 78.0 kg. Kt/V 1.12, URR 61% — first-session calibration. Urine output 1,055 mL.',
      tl_18: 'Urine output 1,490 mL — continuing to rise strongly.',
      tl_19: 'Second outpatient dialysis. ~4 hrs, 1.2 L removed. Pre ~77.0 kg, post ~75.5 kg. Urine output 1,995 mL — approaching the 2,000 mL/day normal floor.',
      tl_20: '🎉 Urine output 2,140 mL — first day crossing the 2,000 mL/day normal range. Weight 73.6 kg. Blood pressure 127/79 mmHg.',
      tl_21: 'Third outpatient dialysis. ~2.5 hrs, 0.7 L net removed. Pre ~74.0 kg, post ~72.8 kg. Last standing BP 160/61. Urine output 3,330 mL.',
      tl_22: 'Urine output 3,205 mL — sustained above 3,000 mL/day. Blood pressure 124/75 mmHg. Independent kidney recovery clearly underway.',
      gp_overview_title: 'All systems · composite health score · 0 = biological critical · 100 = fully healthy',
      gp_hide_raw:  'Hide raw',
      gp_show_raw:  'Show raw',
      gp_composite: 'Composite',
      gp_from_prev: 'from last reading',
      gp_hero_eyebrow: 'ANALYTICAL DEEP-DIVE',
      gp_hero_title: 'Each system at a glance, with sub-group splits and every marker on the same scale',
      gp_hero_p: 'One chart per system. Prominent lines are sub-group composites (e.g. marrow output vs oxygen capacity for blood). Dashed lines are individual markers, normalised to the same 0–100 health scale. Toggle raw data on or off; hover any line to isolate it.',
      gp_chart_sub: 'individual marker scores · 0–100',
      gp_math_title: 'Normalisation per marker',
      gp_target_normal: 'target normal',
      gp_th_marker: 'Marker',
      gp_th_dir:    'Direction',
      gp_th_formula:'Formula',
      gp_th_score:  'Score today',
      gp_chart_only:'(chart only)',
      gp_caveat_kidney: '<strong>Note:</strong> Composite = GFR only. Creatinine and BUN charts oscillate with dialysis sessions — this is expected and visible in the drill-down.',
      gp_caveat_blood:  '<strong>Note:</strong> Composite = WBC, HGB, PLT, RDW. RBC and HCT are shown in drill-down for reference but excluded (r≥0.99 with HGB). HGB is partially transfusion-supported.',
      gp_caveat_lossy:  '<strong>Note:</strong> Each system score is the mean of its composite markers. Markers moving in opposite directions within a system partially cancel — always drill down for a score that looks unexpectedly flat.',
      dress_intro_h:  'Understanding DRESS Syndrome',
      dress_intro_p:  'This page is a plain-language guide to help family and close friends understand what happened, what recovery looks like, and what it means for you personally as a blood relative.',
      dress_tag_edu:  'Educational',
      dress_tag_risk: 'Family Risk Info',
      dress_tag_ok:   'Recovery Outlook: Good',
      dress_toc_1:    'What is DRESS?',
      dress_toc_2:    'Symptoms to Watch For',
      dress_toc_3:    'Family Risk & Genetics',
      dress_toc_4:    'The Recovery Process',
      dress_toc_5:    'Recovery & Outlook',
      dress_toc_qa:   'Questions & Answers',
      page_title:     'KA · Recovery Dashboard',
      h_title_em:     'KA',
      h_title_rest:   '— Recovery Dashboard',
      proj_dial:      'Following the expected dialysis rhythm — values build before each session and clear after.',
      proj_tx:        'Transfusion-supported. We are watching for hemoglobin holding or rising between transfusions — a sign of independent marrow output.',
      proj_norm:      'Currently within the normal range — a positive milestone reached.',
      proj_watch:     'Being carefully watched. More readings over the coming days will clarify the direction.',
      proj_imp_pre:   'Trending toward the normal range — at this pace, approximately ',
      proj_imp_day:   ' day',
      proj_imp_days:  ' days',
      proj_imp_post:  ' from now. Every reading in the right direction matters.',
      legend_dial:    'D = dialysis session',
      legend_tx:      'T = blood transfusion',
      legend_band:    'Shaded band = normal range · Dashed line = projected trend if current pace continues',
      legend_cone:    'Cone band = forecast uncertainty',
      chart_projected:'Projected',
      ceil_note_pre:  'About these early readings:',
      ceil_note_body: 'The first values all show {VAL} U/L — the highest number the lab equipment could display. The actual levels were at least this high, likely higher. The machine reached its ceiling. Every single drop since then is real and confirmed.',
      m_UO_name: 'Urine Output',
      m_UO_what: 'The total volume of urine produced in 24 hours. Any urine output in a dialysis patient means the kidneys are filtering independently.',
      m_UO_why:  'After 17 days of zero output, urine returned on Apr 25 (445 mL) and has risen every day since — crossing the 800 mL/day normal floor on Apr 27, crossing 2,000 mL on May 1, and reaching 3,205 mL on May 3. The daily totals line shows the arc; the stacked bar chart shows each individual void event.',
      gp_uo_events_title: 'Urine Output · Individual Events',
      gp_uo_events_sub:   'Each bar segment = one void event · 9 days · 51 events total',
      gp_uo_normal_line:  '2,000 mL/day normal floor',
      gp_uo_daily_total:  'Daily total',
    }
  },
  ne: {
    name:'नेपाली', label:'नेपाली', dir:'ltr',
    strings:{
      h_title_em:'का',
      h_title_rest:'— पुनर्प्राप्ति ड्यासबोर्ड',
      h_sub:'ल्याब नतिजा · अप्रिल ८ देखि मे ३, २०२६ · डिस्चार्ज अप्रिल २५ · बाह्य विभाग',
      h_updated:'अद्यावधिक मे ३',
      tab_overview:'सारांश',
      tab_dress:'DRESS बारे',
      tab_kidney:'मिर्गौला',
      tab_liver:'कलेजो',
      tab_blood:'रगत र प्रतिरक्षा',
      tab_electrolytes:'इलेक्ट्रोलाइट',
      tab_graphs:'ग्राफ',
      tab_heatmap:'ताप नक्सा',
      sec_systems:'अङ्ग प्रणालीहरू — थिच्नुहोस् र थप हेर्नुहोस्',
      sec_timeline:'समयरेखा — दिनदिनको घटनाक्रम',
      badge_ok:'सामान्य',
      badge_hi:'उच्च',
      badge_lo:'कम',
      badge_normal:'सामान्य दायरा:',
      badge_imp:'सुधार हुँदै',
      badge_watch:'नजिकबाट हेरिँदै',
      badge_hold:'स्थिर',
      badge_dial:'डायलिसिस सहारा',
      badge_tx:'रक्तसञ्चार सहारा',
      badge_what:'यो के हो:',
      badge_incase:'यस अवस्थामा:',
      proj_dial:'यो मान अहिले डायलिसिस (रक्तशोधन) को तालसँग सम्बन्धित छ। मिर्गौलाले आफैं योगदान दिन थालेको संकेत हेरिँदैछौं।',
      proj_tx:'यो मान हाल Blood transfusion (रक्तसञ्चार) को सहाराले प्रभावित हुन सक्छ।',
      proj_norm:'यो मान अहिले सामान्य दायराभित्र छ।',
      proj_watch:'अहिलेलाई प्रवृत्ति हेरिँदैछ।',
      proj_imp_pre:'यही प्रवृत्ति जारी रहे करिब ',
      proj_imp_day:' दिनमा ',
      proj_imp_days:' दिनमा ',
      proj_imp_post:' सामान्य दायरा पुग्न सक्छ।',
      chart_projected:'अनुमानित',
      comp_title:'समग्र स्वास्थ्य स्थिति · सबै प्रणाली · ० = जैविक संकट · १०० = पूर्ण स्वस्थ',
      legend_dial:'डायलिसिस प्रभाव',
      legend_tx:'रक्तसञ्चार प्रभाव',
      legend_band:'छायाँ = सामान्य दायरा · झिकी रेखा = अनुमानित प्रवृत्ति',
      legend_cone:'शंकु ब्यान्ड = पूर्वानुमान अनिश्चितता', // TODO NE verify
      ceil_note_pre:'नोट:',
      ceil_note_body:'{VAL} यो मेसिनले नाप्न सक्ने माथिल्लो सीमा थियो; वास्तविक मान अझ बढी हुन सक्थ्यो।',
      gp_overview_title:'सबै प्रणाली · संयुक्त स्वास्थ्य स्कोर · ० = जैविक संकट · १०० = पूर्ण स्वस्थ',
      gp_hide_raw:'कच्चा डेटा लुकाउ',
      gp_show_raw:'कच्चा डेटा देखाउ',
      gp_composite:'संयुक्त सूचक',
      gp_from_prev:'अघिल्लो पाठनबाट', // TODO NE verify
      gp_hero_eyebrow:'विश्लेषणात्मक विवरण', // TODO NE verify
      gp_hero_title:'प्रत्येक प्रणाली एक नजरमा, उप-समूह विभाजन र सबै सूचकांकसहित', // TODO NE verify
      gp_hero_p:'प्रत्येक प्रणालीका लागि एउटा चार्ट। प्रमुख रेखाहरू उप-समूह composites हुन्। Dashed रेखाहरू व्यक्तिगत सूचकांक हुन्।', // TODO NE verify
      gp_chart_sub:'व्यक्तिगत सूचकांक स्कोर · ०–१००', // TODO NE verify
      gp_math_title:'प्रति सूचकांक सामान्यीकरण', // TODO NE verify
      gp_target_normal:'लक्ष्य सामान्य', // TODO NE verify
      gp_th_marker:'सूचकांक', // TODO NE verify
      gp_th_dir:'दिशा', // TODO NE verify
      gp_th_formula:'सूत्र', // TODO NE verify
      gp_th_score:'आजको स्कोर', // TODO NE verify
      gp_chart_only:'(चार्ट मात्र)', // TODO NE verify
      gp_caveat_kidney:'<strong>नोट:</strong> Composite = GFR मात्र। Creatinine र BUN चार्टहरू डायलिसिस सत्रसँग उतारचढाव देखाउँछन् — यो अपेक्षित हो।',
      gp_caveat_blood:'<strong>नोट:</strong> Composite = WBC, HGB, PLT, RDW। RBC र HCT समावेश छैनन् (HGB सँग r≥0.99)।',
      gp_caveat_lossy:'<strong>नोट:</strong> प्रत्येक प्रणाली स्कोर यसको composite markers को औसत हो।',
      disclaimer:'<strong>सूचना:</strong> यो परिवारका लागि बनाइएको व्याख्यात्मक ड्यासबोर्ड हो। यो चिकित्सकीय निर्णयको विकल्प होइन।',
      story_title:'काको निको हुने यात्रा — के भयो र अहिलेको अवस्था',
      story_p1:'गम्भीर औषधिजन्य प्रतिरक्षा प्रतिक्रिया (DRESS Syndrome) पछि का अस्पतालमा भर्ना भए, जहाँ मिर्गौला, कलेजो, र रगतसम्बन्धी सूचकहरू नजिकबाट हेरिए।',
      story_p2:'भर्नापछि बितेका हप्ताहरू प्रत्येक प्रणालीले प्रतिक्रिया दिँदै र सुधारिँदै गएको कथा भएका छन्। कलेजोको चोटको चरण अब समाप्त भएको छ — AST, ALT, र bilirubin सबै पूर्ण रूपमा सामान्य छन्। 🎉 WBC र platelets सामान्य सन्दर्भ दायरामा फर्किएका छन्। Hemoglobin अझ सामान्यभन्दा तल छ। मिर्गौलाले डायलिसिस सहारा जारी राखेको छ।',
      story_diag_l:'निदान · ',
      story_diag:"कालाई <strong><a onclick=\"switchTab('dress')\" style=\"color:var(--amber);cursor:pointer;text-decoration:underline;text-underline-offset:3px\">DRESS Syndrome (औषधिजन्य गम्भीर प्रतिरक्षा प्रतिक्रिया)</a></strong> द्वारा निदान गरिएको छ — एक स्ल्फा औषधिमार्फत प्रतिरक्षा प्रतिक्रिया।",
      story_prog_l:'प्रगति · ',
      story_prog:'स्टेरोइड थेरापी र डायलिसिस सहायता जारी। सबै अङ्ग प्रणालीहरू पूर्ण पुनर्प्राप्ति हुने अपेक्षा छ।',
      story_asof_l:'मे ३ सम्मको स्थिति:',
      story_asof:'मे ३ सम्म, मूत्र उत्पादन ३,२०५ mL पुगेको छ — यो सामान्य दायराभित्र राम्रो स्तर हो। मिर्गौलाको कार्यक्षमता क्रमशः सुधार हुँदैछ। डायलिसिस बाह्य विभागमा जारी छ।', 
      dress_intro_h:'DRESS बुझ्ने परिचय',
      dress_intro_p:'DRESS, सुधार, र जोखिम सन्दर्भको परिवार-मैत्री व्याख्या।',
      dress_tag_edu:'शैक्षिक',
      dress_tag_risk:'जोखिम',
      dress_tag_ok:'सुधार',
      dress_toc_1:'DRESS के हो?',
      dress_toc_2:'हेर्नुपर्ने लक्षणहरू',
      dress_toc_3:'पारिवारिक जोखिम र आनुवंशिकी',
      dress_toc_4:'सुधार प्रक्रिया',
      dress_toc_5:'सुधार र भविष्य दृष्टि',
      dress_toc_qa:'प्रश्नोत्तर',
      tl_1:'भर्ना। सेतो रक्तकोष निकै कम, सोडियम ११५ mmol/L, कलेजो एन्जाइम बढ्दै, क्रिएटिनिन बढेको।',
      tl_2:'रक्तस्रावका लागि मूत्राशय सिंचाई। CT स्क्यान। डायलिसिस सुरु — मिर्गौला ५% क्षमतामा।',
      tl_3:'शारीरिक र व्यवसायिक चिकित्सा सुरु। दोस्रो डायलिसिस।',
      tl_4:'डायलिसिस सत्र।',
      tl_5:'काको अनुरोधमा मूत्र नली हटाइयो।',
      tl_6:'डायलिसिस सत्र। पहिलो रक्तसञ्चार।',
      tl_7:'मिर्गौला बायोप्सी। छातीको X-ray (सफा)। दोस्रो रक्तसञ्चार।',
      tl_8:'तेस्रो रक्तसञ्चार। डायलिसिस सत्र। Prednisone सुरु।',
      tl_9:'मूत्राशय क्यामेरा, clot हटाइयो। Chest catheter राखियो।',
      tl_10:'चौथो रक्तसञ्चार।',
      tl_11:'मूत्राशय सिंचाई, आन्तरिक स्कोप। बाह्य विभाग डायलिसिसका लागि Chest catheter पुष्टि।',
      tl_12:'Foley catheter हटाइयो। डायलिसिस सत्र। Amoxicillin जारी।',
      tl_13:'ALT पहिलो पटक सामान्य दायरामा — AST र ALT दुवै पूर्ण सामान्य। कलेजोको चोटको चरण समाप्त। 🎉 Post-dialysis creatinine 6.67 (पहिलो हप्तापछि सबैभन्दा कम)। GFR 10 (दुई हप्तामा सबैभन्दा उच्च post-dialysis GFR)।',
      tl_14:'🏡 घर डिस्चार्ज। बाह्य विभाग डायलिसिस जारी। पहिलो मूत्र उत्पाद रेकर्ड: ४४५ mL — मिर्गौलाको स्वतन्त्र फिल्ट्रेसन सुरु। ALT सामान्यभन्दा तल। Platelets १५० — सामान्य दायराको निम्न सीमा।',
      tl_15:'मूत्र उत्पाद बढ्दैछ: ६०५ mL।',
      tl_16:'मूत्र उत्पाद ८९५ mL — ८०० mL/दिन सामान्य सीमा पार भयो।',
      tl_17:'अप्रिल २८ — पहिलो बाह्य विभाग डायलिसिस। सत्रअगाडि CREAT 9.26, सत्रपछि BUN 11 मा घट्यो। मूत्र उत्पादन १,०५५ mL।', 
      tl_18:'अप्रिल २९ — मूत्र उत्पादन १,४९० mL — सामान्य न्यून सीमातर्फ नजिकिँदै।', 
      tl_19:'अप्रिल ३० — दोस्रो बाह्य विभाग डायलिसिस। मूत्र उत्पादन १,९९५ mL — सामान्य न्यून सीमा पुगेको।', 
      tl_20:'मे १ — मूत्र उत्पादन २,१४० mL — सामान्य दायरा पार गर्यो (८००–२,००० mL/दिन)।', 
      tl_21:'मे २ — तेस्रो बाह्य विभाग डायलिसिस। मूत्र उत्पादन ३,३३० mL — सामान्य दायराभित्र राम्रो स्तरमा।', 
      tl_22:'मे ३ — मूत्र उत्पादन ३,२०५ mL। मिर्गौलाको कार्यक्षमता सुधार हुँदैछ।', 
      sys_kidney_name:'मिर्गौला',
      sys_kidney_label:'मिर्गौला',
      sys_kidney_status:'बाह्य विभाग डायलिसिस × ३ (डिस्चार्जपछि)', 
      sys_kidney_desc:'मिर्गौला (वृक्क) फिल्ट्रेशन प्रणालीको स्थिति।',
      sys_kidney_hl:'मूत्र उत्पादन ३,२०५ mL (मे ३) · स्वतन्त्र कार्यक्षमताको स्पष्ट सुधार संकेत', 
      sys_liver_name:'कलेजो',
      sys_liver_label:'कलेजो',
      sys_liver_status:'चोटको चरण समाप्त 🎉 · प्रोटिन संश्लेषण पुनर्निर्माण जारी',
      sys_liver_desc:'कलेजोको सुधारका दुई फरक चरण छन्, र का अहिले कुन चरणमा छन् भन्ने बुझ्नु उपयोगी हुन्छ। पहिलो चरण — चोटको चरण — समाप्त भइसकेको छ: AST, ALT, र bilirubin सबै पूर्ण रूपमा सामान्य छन्, जसको अर्थ कलेजोमा अब क्षति भइरहेको छैन र सूजन शान्त भएको छ। दोस्रो चरण — प्रोटिन संश्लेषण पुनर्निर्माण — त्यसपछिको ढिलो तर अपेक्षित जैविक प्रक्रिया हो: albumin को करिब २० दिनको serum अर्ध-जीवन हुन्छ, त्यसैले पूर्ण रूपमा निको भएको कलेजोपछि पनि शरीरले यसलाई बिस्तारै पुनर्निर्माण गर्छ। albumin र total protein दायरा भन्दा तल हुनु चलिरहेको क्षतिको संकेत होइन — यो कलेजोले आफ्नो पुनर्निर्माण कार्य गरिरहेको अवस्था हो।',
      sys_liver_hl:'AST, ALT र bilirubin पूर्ण सामान्य · कुनै नयाँ परीक्षण आवश्यक छैन', 
      sys_blood_name:'रगत र प्रतिरक्षा',
      sys_blood_label:'रगत र प्रतिरक्षा',
      sys_blood_status:'अस्थिमज्जा सक्रिय हुँदै',
      sys_blood_desc:'रगतका तीन कार्यरत घटकहरू छन्: श्वेत रक्त कोशिकाहरू (संक्रमणसँग लड्छन्), रातो रक्त कोशिकाहरू र हिमोग्लोबिन (अक्सिजन बोक्छन्), र प्लेटलेटहरू (रक्तस्राव रोक्छन्)। अप्रिलको शुरुमा तीनै दबिएका थिए; अहिले तीनै सुधरिँदैछन्। WBC र platelets अस्थिमज्जाको वास्तविक पुनर्निर्माणबाट सामान्य दायरामा फर्केका छन्।',
      sys_blood_hl:'WBC र platelets सामान्य दायरामा · Hemoglobin क्रमशः सुधार हुँदै', 
      sys_electrolytes_name:'इलेक्ट्रोलाइट',
      sys_electrolytes_label:'इलेक्ट्रोलाइट',
      sys_electrolytes_status:'धेरै मानहरू स्थिर हुँदै',
      sys_electrolytes_desc:'तरल र रासायनिक सन्तुलन स्थिति।',
      sys_electrolytes_hl:'अधिकांश स्तरहरू स्थिर · बाह्य विभाग मानहरू स्थिर प्रवृत्तिमा', 
      m_CREAT_name:'क्रिएटिनिन',
      m_CREAT_what:'मांसपेशी क्रियाबाट बन्ने फोहोर पदार्थ।',
      m_CREAT_why:'यो मान अहिले डायलिसिस (रक्तशोधन) को प्रभावले प्रभावित हुन सक्छ।',
      m_BUN_name:'ब्लड युरिया नाइट्रोजन (BUN)',
      m_BUN_what:'प्रोटिन टुट्दा बन्ने पदार्थ।',
      m_BUN_why:'डायलिसिसको तालसँग सम्बन्धित।',
      m_GFR_name:'मिर्गौला फिल्ट्रेशन दर (GFR)',
      m_GFR_what:'मिर्गौलाले कति रगत फिल्टर गर्छ।',
      m_GFR_why:'मिर्गौलालाई अहिले डायलिसिसले पूर्ण सहारा दिइरहेको छ।',
      m_UO_name:'मूत्र उत्पाद',
      m_UO_what:'२४ घण्टामा उत्पाद गरिएको मूत्रको कुल मात्रा। डायलिसिस बिरामीमा कुनै पनि मूत्र उत्पाद मिर्गौलाले स्वतन्त्र रूपमा फिल्टर गरिरहेको संकेत हो।',
      m_UO_why:'मे ३ मा ३,२०५ mL मूत्र उत्पादन रेकर्ड भयो — अहिले सामान्य दायराभित्र राम्रो स्तरमा पुगेको छ। सुरुका दिनहरूमा कम (oliguric) स्तर भए पनि, समयसँगै निरन्तर वृद्धि देखिएको छ। गम्भीर AKI पछि यस्तो वृद्धि हुनु मिर्गौलाले स्वतन्त्र रूपमा फेरि काम गर्न थालिरहेको एक महत्त्वपूर्ण संकेत हो।', 
      m_BUN_CREAT_name:'BUN/Creatinine अनुपात',
      m_BUN_CREAT_what:'BUN र Creatinine बीचको सम्बन्ध।',
      m_BUN_CREAT_why:'सहायक सूचक।',
      m_AST_name:'AST (लिभर एन्जाइम)',
      m_AST_what:'कलेजो कोष तनाव सूचक।',
      m_AST_why:'कलेजोमा वास्तविक सुधारको बलियो संकेत।',
      m_ALT_name:'ALT (लिभर एन्जाइम)',
      m_ALT_what:'कलेजोसँग सम्बन्धित एन्जाइम।',
      m_ALT_why:'ALT घट्दै जानु कलेजो निको हुँदै गएको संकेत।',
      m_ALKP_name:'अल्कलाइन फस्फाटेज',
      m_ALKP_what:'पित्त प्रवाहसँग सम्बन्धित सूचक।',
      m_ALKP_why:'पित्त प्रवाह र कलेजो पुनर्सन्तुलन सन्दर्भमा।',
      m_BILT_name:'कुल बिलिरुबिन',
      m_BILT_what:'कलेजोले प्रशोधन गर्ने रङ्गद्रव्य।',
      m_BILT_why:'स्पष्ट सकारात्मक माइलस्टोन।',
      m_ALB_name:'एल्बुमिन',
      m_ALB_what:'मुख्य रगत प्रोटिन।',
      m_ALB_why:'बिस्तारै सुधार हुने मान; छिटो परिवर्तन अपेक्षित हुँदैन।',
      m_TPROT_name:'कुल प्रोटिन',
      m_TPROT_what:'प्रोटिनहरूको संयुक्त मापन।',
      m_TPROT_why:'पोषण, सूजन, र पुनर्प्राप्तिसँग सन्दर्भित।',
      m_WBC_name:'सेतो रक्तकोष (WBC)',
      m_WBC_what:'प्रतिरक्षा प्रणालीको भाग।',
      m_WBC_why:'प्रतिरक्षा प्रणाली र अस्थिमज्जा गतिविधिको उपयोगी सूचक।',
      m_HGB_name:'हिमोग्लोबिन',
      m_HGB_what:'अक्सिजन बोक्ने भाग।',
      m_HGB_why:'रक्तसञ्चारको प्रभाव सन्दर्भमा।',
      m_PLT_name:'प्लेटलेट',
      m_PLT_what:'रक्त जमाउन मद्दत गर्छ।',
      m_PLT_why:'Platelet उत्पादन पुनःसक्रिय भएको संकेत।',
      m_RBC_name:'रातो रक्तकोष',
      m_RBC_what:'अक्सिजन बोक्ने कोष।',
      m_RBC_why:'समयसँग सुधार हेरिँदैछ।',
      m_HCT_name:'हेमाटोक्रिट',
      m_HCT_what:'रातो रक्तकोष प्रतिशत।',
      m_HCT_why:'हिमोग्लोबिनसँग मिल्दोजुल्दो प्रवृत्ति।',
      m_RDW_name:'रातो रक्तकोष आकार भिन्नता (RDW)',
      m_RDW_what:'कोष आकार भिन्नता मापन।',
      m_RDW_why:'रातो रक्तकोष उत्पादन फेरबदलसँग सम्बन्धित।',
      m_NA_name:'सोडियम',
      m_NA_what:'मुख्य इलेक्ट्रोलाइट।',
      m_NA_why:'सोडियम बिस्तारै सुधार गर्नु सुरक्षित हुन्छ।',
      m_K_name:'पोटासियम',
      m_K_what:'हृदय तालसँग सम्बन्धित।',
      m_K_why:'हृदय तालसँग सम्बन्धित भएकाले नजिकबाट हेरिन्छ।',
      m_CL_name:'क्लोराइड',
      m_CL_what:'अम्ल-क्षार सन्तुलन इलेक्ट्रोलाइट।',
      m_CL_why:'स्थिर व्यवस्थापनमा।',
      m_CO2_name:'बाइकार्बोनेट (CO₂)',
      m_CO2_what:'अम्ल-क्षार बफर।',
      m_CO2_why:'राम्रो स्थिरता।',
      m_ANION_name:'Anion Gap',
      m_ANION_what:'असामान्य अम्ल संकेत।',
      m_ANION_why:'अम्ल-क्षार सन्तुलन सन्दर्भको सहायक सूचक।',
      m_GLU_name:'रक्त चिनी (Glucose)',
      m_GLU_what:'मुख्य इन्धन।',
      m_GLU_why:'Prednisone वा तनाव प्रतिक्रियाले प्रभाव पार्न सक्छ।',
      m_CA_name:'क्याल्सियम',
      m_CA_what:'स्नायु र मांसपेशीका लागि आवश्यक।',
      m_CA_why:'बिस्तारै उकालो सकारात्मक संकेत।',
      gp_uo_events_title:'मूत्र उत्पादन · व्यक्तिगत घटनाहरू', 
      gp_uo_events_sub:'प्रत्येक बार खण्ड = एक पटकको मूत्र विसर्जन · ९ दिन · जम्मा ५१ घटना', 
      gp_uo_normal_line:'२,००० mL/दिन — सामान्य न्यून सीमा', 
      gp_uo_daily_total:'दैनिक कुल', 
    }
  }
};

/* ── DRESS section content (full bilingual HTML blocks) ───────
   EN from [1] (KA_labs_i18n.html) — complete educational content
   NE from [1] — translator-reviewed, Apr 24 2026
   Used by tDress(key) helper below.
   ──────────────────────────────────────────────────────────── */
const DRESS_CONTENT = {
  en: {
    s1: `<h2><span class="ds-num">1</span>What is DRESS Syndrome?</h2>
      <p><strong>DRESS</strong> stands for <strong>Drug Reaction with Eosinophilia and Systemic Symptoms.</strong> It is a rare, life-threatening immune reaction triggered by certain medications — in KA's case, a Sulfa drug (Bactrim).</p>
      <p>Unlike a typical allergic reaction that happens within minutes, DRESS is a <strong>delayed reaction</strong> that usually appears 2 to 8 weeks after starting the medication. By the time symptoms appear, the immune system has become hyper-activated and begins attacking the body's own organs and skin.</p>
      <div class="dress-info"><p><strong>A helpful way to think about it:</strong> The immune system misidentifies the drug as a dangerous invader, launches a full-scale response, and cannot turn itself off. It is not a flaw in the person — it is a rare genetic predisposition that most people never discover unless exposed to a specific trigger drug.</p></div>
      <p>The condition affects multiple organ systems simultaneously — which is why you see kidney, liver, and blood markers all impacted at the same time in KA's labs.</p>`,
    s2: `<h2><span class="ds-num">2</span>Symptoms to Watch For</h2>
      <p>DRESS is a whole-body event. The following signs — in yourself or anyone in the family — within 2–8 weeks of starting any new medication should prompt an immediate call to a doctor:</p>
      <ul class="dress-ul">
        <li><strong>The "Flu" Start</strong> — High fever and extreme exhaustion that seems disproportionate to a normal illness.</li>
        <li><strong>Skin Changes</strong> — A widespread red rash that progresses to peeling skin, especially on the face, palms, and soles of the feet.</li>
        <li><strong>Swelling</strong> — Noticeable swelling of the face, neck, or lymph nodes.</li>
        <li><strong>Organ Warning Signs</strong> — These are the most serious:
          <ul class="dress-sub dress-ul">
            <li><strong>Liver:</strong> <em>Yellowing of the eyes or skin (jaundice)</em></li>
            <li><strong>Kidneys:</strong> <em>Sudden change in urine output, dark urine, or leg swelling</em></li>
            <li><strong>Blood:</strong> <em>Easy bruising or signs of internal bleeding (low hemoglobin)</em></li>
          </ul>
        </li>
      </ul>
      <div class="dress-warn"><p><strong>If any combination of these appears after starting a new medication:</strong> stop the medication and go to an emergency room immediately. Tell them you have a family member diagnosed with DRESS Syndrome.</p></div>`,
    s3: `<h2><span class="ds-num">3</span>Family Risk &amp; Genetics</h2>
      <p>You do not directly inherit the "allergy" — but you do inherit the <strong>genetic blueprint</strong> (called HLA genes) that makes this reaction possible when exposed to a trigger drug. Think of it as inheriting a lock; the drug is the key.</p>
      <ul class="dress-ul">
        <li><strong>Asian Ancestry</strong> — There is a statistically higher risk in South and East Asian populations due to specific HLA genetic markers that are more prevalent in these groups.</li>
        <li><strong>The Sibling Rule</strong> — Because KA had this reaction, <strong>immediate family members (parents, siblings, children) are at higher risk</strong> and should exercise extreme caution with Sulfa drugs and related medications.</li>
      </ul>
      <div class="dress-info"><p><strong>Testing options for family members:</strong> Ask your doctor for <strong>High-Resolution HLA Typing</strong>. Two markers are most relevant:<br><br>
      <strong>HLA-B*1502</strong> — Associated with high risk for severe skin and drug reactions including DRESS.<br>
      <strong>HLA-A*3101</strong> — Strongly linked to Sulfa drug and anti-seizure medication reactions.<br><br>
      This is a simple blood test that can give you and your doctor meaningful information before you ever need to take a high-risk medication.</p></div>
      <div class="dress-warn"><p><strong>The most important practical step for every family member:</strong> Add "Sulfonamide / Sulfa drug allergy — family history of DRESS" to your medical record today. This ensures no doctor prescribes it to you without being aware of the risk.</p></div>`,
    s4: `<h2><span class="ds-num">4</span>The Recovery Process</h2>
      <p>Recovery from DRESS is a marathon, not a sprint. The immune system needs time to fully reset, and the process happens in two distinct phases:</p>
      <ul class="dress-ul">
        <li><strong>The Second Wave</strong> — Just as a patient begins to improve, the immune system can flare again — particularly when steroids are being tapered, or if a dormant virus (such as HHV-6) reactivates. This is expected and managed by the care team. It is not a setback — it is a known feature of DRESS recovery.</li>
        <li><strong>The Long Tail</strong> — Full immune system reset takes <strong>6 to 12 months</strong>. During this period, the thyroid and liver are monitored closely, as they are often the last systems to fully stabilise. Regular follow-up appointments are essential.</li>
      </ul>
      <div class="dress-info"><p><strong>In KA's case:</strong> Prednisone (steroids) and dialysis support will continue for some weeks as the kidneys recover and the immune system is gradually brought down from its hyper-active state. The care team expects all systems to fully recover — the kidneys will be the slowest, but meaningful recovery is expected over time.</p></div>`,
    s5: `<h2><span class="ds-num">5</span>Recovery &amp; Outlook</h2>
      <table class="dress-stat-table">
        <thead><tr><th>Category</th><th>Fact</th></tr></thead>
        <tbody>
          <tr><td>Survival Rate</td><td>With modern intensive care including dialysis and steroids, <strong>90% of patients recover fully.</strong></td></tr>
          <tr><td>The Golden Rule</td><td>KA must <strong>never take Sulfonamides (Bactrim / Sulfa drugs) again.</strong> A second exposure triggers a faster and more severe reaction.</td></tr>
          <tr><td>Organ Recovery Order</td><td>The <strong>liver</strong> usually recovers first. <strong>Kidneys</strong> can take weeks to months of dialysis support but often regain significant function over time.</td></tr>
          <tr><td>Full Health</td><td>Most survivors return to a <strong>completely normal quality of life</strong> once the long tail (6–12 months) is complete.</td></tr>
          <tr><td>Monitoring Period</td><td>Thyroid and liver function are watched closely for up to 12 months post-discharge as the immune system fully resets.</td></tr>
          <tr><td>For Family Members</td><td>Avoid Sulfa drugs as a precaution. Consider HLA typing. Add family history of DRESS to your medical records.</td></tr>
        </tbody>
      </table>`,
    qa: `<h2><span class="ds-num" style="background:var(--z-warn)">Q</span>Questions &amp; Answers</h2>
      <p style="font-size:13px;color:var(--t3);margin-bottom:18px">Questions from family and friends, answered in plain language.</p>
      <div class="dress-qa-item">
        <div class="dress-qa-q">
          <div class="dress-qa-q-text">Why didn't DRESS devastate the small or large intestines?</div>
        </div>
        <div class="dress-qa-body">
          <p>In DRESS, while the skin and liver are the classic targets, the kidneys and bone marrow are the next most commonly affected. The gastrointestinal tract is often largely spared. Three reasons:</p>
          <ol class="dress-qa-ol">
            <li><strong>Different gut immunology.</strong> The immune system inside the gut operates almost independently. DRESS is driven by T-cells that migrate toward the skin, liver, and kidneys because of how those organs process and display the drug.
              <ul class="dress-qa-sub">
                <li><strong>Liver:</strong> Where the drug is broken down — toxic byproducts become trapped in liver cells.</li>
                <li><strong>Kidneys:</strong> Where the drug is filtered — concentration is highest in the kidney tubules.</li>
                <li><strong>Intestines:</strong> By the time the drug reaches the lower intestine it is mostly already processed.</li>
              </ul>
            </li>
            <li><strong>The drug's metabolic path.</strong> The liver and kidneys receive the highest concentration of the drug and its toxic breakdown products. The intestines receive what's left after those organs have done their work.</li>
            <li><strong>Regeneration speed.</strong> The intestinal lining replaces itself every 3 to 5 days. Even if DRESS causes minor gut irritation, the intestines repair the damage faster than it accumulates.</li>
          </ol>
          <div class="dress-qa-highlight"><p><strong>In short:</strong> The intestines are spared because the immune attack targets organs where the drug concentrates most, and because the gut heals quickly enough to stay ahead of any minor damage that does occur.</p></div>
          <p><strong>A note on bone marrow and hemoglobin.</strong> The bone marrow is affected because it is highly sensitive to the cytokine storm DRESS triggers. When the body is in severe immune activation, the marrow can slow red blood cell production — which is why transfusions have been needed even though there is no intestinal bleeding. The problem is production and immune destruction, not blood loss.</p>
        </div>
      </div>`
  },
  ne: {
    s1: `<h2><span class="ds-num">1</span> DRESS के हो?</h2><p><strong>DRESS Syndrome (औषधिजन्य गम्भीर प्रतिरक्षा प्रतिक्रिया)</strong> केही औषधिप्रति हुने दुर्लभ तर गम्भीर प्रतिरक्षात्मक प्रतिक्रिया हो — काको अवस्थामा एक Sulfa औषधि (ब्याक्ट्रिम) ले घटायो।</p><p>सामान्य एलर्जीको सट्टै हुने प्रतिक्रियाभन्दा फरक, DRESS औषधि सुरु गरेको २–५ हप्तापछि देखिने <strong>ढिला प्रतिक्रिया</strong> हो। त्यतिसम्म, प्रतिरक्षा प्रणाली अति सक्रिय भएर शरीरका आफ्नै अङ्गहरूमा आक्रमण गर्न थाल्छ।</p><div class="dress-info"><p><strong>यसलाई बुझ्ने सरल तरिका:</strong> प्रतिरक्षा प्रणालीले औषधिलाई खतरनाक शत्रु समझेर पूर्ण शक्तिसँग प्रतिक्रिया गर्छ र बन्द गर्न सक्दैन। यो व्यक्तिको दोष होइन — यो एक दुर्लभ आनुवंशिक पूर्वाधार हो जसलाई धेरैजसोले निर्दिष्ट ट्रिगर औषधिसँग सम्पर्क नआउन्जेल थाहा हुनन।</p></div><p>यो अवस्थाले एकैसाथ कई अङ्ग प्रणालीहरूमा असर गर्छ — त्यसैले काको lab मा मिर्गौला, कलेजो, र रगतको मानहरू एकैसाथ प्रभावित देखिन्छ।</p>`,
    s2: `<h2><span class="ds-num">2</span>हेर्नुपर्ने लक्षणहरू</h2>
<p>DRESS शरीरभर असर गर्ने अवस्था हो। कुनै नयाँ औषधि सुरु गरेको २–८ हप्ताभित्र आफूमा वा परिवारका कसैमा तलका संकेत देखिए तुरुन्त चिकित्सकलाई सम्पर्क गर्नुहोस्:</p>
<ul class="dress-ul">
  <li><strong>"Flu" जस्तो सुरुवात</strong> — सामान्य बिरामीभन्दा असामान्य रूपमा धेरै ज्वरो र अत्यधिक थकान।</li>
  <li><strong>छालामा परिवर्तन</strong> — फैलिएको रातो दाना, पछि छाला खुइलिनेसम्म पुग्न सक्छ, विशेष गरी अनुहार, हातको हत्केला, र खुट्टाको तलुवामा।</li>
  <li><strong>सुन्निनु</strong> — अनुहार, घाँटी, वा लसिका ग्रन्थि सुन्निनु।</li>
  <li><strong>अंगमा समस्या देखिने चेतावनी संकेत</strong> — यी सबैभन्दा गम्भीर हुन्:
    <ul class="dress-sub dress-ul">
      <li><strong>कलेजो:</strong> <em>आँखा वा छाला पहेँलो हुनु (jaundice)</em></li>
      <li><strong>मिर्गौला:</strong> <em>पिसाबको मात्रा अचानक बदलिनु, गाढा पिसाब, वा खुट्टा सुन्निनु</em></li>
      <li><strong>रगत:</strong> <em>सजिलै निलडाम पर्नु वा भित्री रक्तस्रावका संकेत (कम hemoglobin)</em></li>
    </ul>
  </li>
</ul>
<div class="dress-warn"><p><strong>नयाँ औषधि सुरु गरेपछि यीमध्ये कुनै संयोजन देखिए:</strong> औषधि रोक्नुहोस् र तुरुन्त आपत्कालीन कक्षमा जानुहोस्। परिवारमा DRESS Syndrome निदान भएको सदस्य छ भनेर बताउनुहोस्।</p></div>`,
    s3: `<h2><span class="ds-num">3</span>पारिवारिक जोखिम &amp; आनुवंशिकी</h2>
<p>तपाईंले प्रत्यक्ष रूपमा "allergy" वंशानुगत पाउनुहुन्न — तर <strong>आनुवंशिक बनावट</strong> (HLA genes) वंशानुगत हुन सक्छ, जसले ट्रिगर औषधि परे यस्तो प्रतिक्रिया सम्भव बनाउँछ।</p>
<ul class="dress-ul">
<li><strong>Asian Ancestry</strong> — South र East Asian समूहमा केही HLA genetic markers बढी देखिने भएकाले सांख्यिक रूपमा जोखिम बढी हुन सक्छ।</li>
<li><strong>Sibling Rule</strong> — कालाई यस्तो प्रतिक्रिया भएकोले <strong>निकट परिवार (अभिभावक, दाजुभाइ-दिदीबहिनी, सन्तान) मा जोखिम बढी</strong> मानिन्छ र Sulfa औषधिमा अत्यधिक सावधानी आवश्यक छ।</li>
</ul>
<div class="dress-info"><p><strong>परिवारका लागि परीक्षण विकल्प:</strong> चिकित्सकसँग <strong>High-Resolution HLA Typing</strong> बारे सोध्न सकिन्छ।<br><br>
<strong>HLA-B*1502</strong> — DRESS सहित गम्भीर औषधि प्रतिक्रियासँग सम्बन्धित।<br>
<strong>HLA-A*3101</strong> — Sulfa drug र anti-seizure औषधि प्रतिक्रियासँग सम्बन्धित।<br><br>
यो साधारण blood test हो जसले उच्च-जोखिम औषधि लिनु अघि उपयोगी जानकारी दिन सक्छ।</p></div>
<div class="dress-warn"><p><strong>हरेक परिवार सदस्यका लागि महत्त्वपूर्ण व्यावहारिक कदम:</strong> आफ्नो medical record मा "Sulfonamide / Sulfa drug allergy — family history of DRESS" थप्नुहोस्।</p></div>`,
    s4: `<h2><span class="ds-num">4</span>सुधार प्रक्रिया</h2>
<p>DRESS बाट निको हुनु छोटो दौड होइन, लामो यात्रा हो। प्रतिरक्षा प्रणाली पूर्ण रूपमा पुनःस्थिर हुन समय लाग्छ, र यो दुई चरणमा हुन सक्छ:</p>
<ul class="dress-ul">
<li><strong>दोस्रो उतारचढाव</strong> — बिरामी सुधारिँदै गर्दा प्रतिरक्षा प्रणाली फेरि सक्रिय हुन सक्छ, विशेष गरी steroids घटाउँदा वा HHV-6 जस्तो सुप्त virus फेरि सक्रिय हुँदा। यो चिनिएको विशेषता हो, अनिवार्य रूपमा setback होइन।</li>
<li><strong>Long Tail</strong> — पूर्ण प्रतिरक्षा पुनःस्थिरतामा <strong>६ देखि १२ महिना</strong> लाग्न सक्छ। यो समयमा thyroid र कलेजो नजिकबाट हेरिन्छ। नियमित follow-up आवश्यक हुन्छ।</li>
</ul>
<div class="dress-info"><p><strong>काको अवस्थामा:</strong> Prednisone (steroids) र dialysis support केही समय जारी रहन सक्छ। मिर्गौला सुधार ढिलो हुन सक्छ, तर समयसँग अर्थपूर्ण सुधार अपेक्षित छ।</p></div>`,
    s5: `<h2><span class="ds-num">5</span>सुधार &amp; भविष्य दृष्टि</h2>
<table class="dress-stat-table">
<thead><tr><th>श्रेणी</th><th>तथ्य</th></tr></thead>
<tbody>
<tr><td>बाँच्ने दर</td><td>आधुनिक intensive care सहित <strong>९०% बिरामी पूर्ण रूपमा निको हुन्छन्।</strong></td></tr>
<tr><td>Golden Rule</td><td>काले <strong>Sulfonamides (Bactrim / Sulfa drugs) फेरि कहिल्यै नलिनुहोस्।</strong></td></tr>
<tr><td>अंग सुधार क्रम</td><td><strong>कलेजो</strong> प्रायः पहिले सुधार हुन्छ। <strong>मिर्गौला</strong> ले समय लिन सक्छ।</td></tr>
<tr><td>पूर्ण स्वास्थ्य</td><td>धेरैजसो व्यक्तिहरू <strong>सामान्य जीवनस्तर</strong> मा फर्कन्छन्।</td></tr>
<tr><td>निगरानी अवधि</td><td>१२ महिनासम्म thyroid र liver function हेरिन सक्छ।</td></tr>
<tr><td>परिवारका लागि</td><td>Sulfa औषधि टार्ने, HLA typing विचार गर्ने, DRESS पारिवारिक इतिहास record मा राख्ने।</td></tr>
</tbody>
</table>`,
    qa: `<h2><span class="ds-num" style="background:var(--z-warn)">Q</span>प्रश्न &amp; उत्तर</h2>
<p style="font-size:13px;color:var(--t3);margin-bottom:18px">परिवार र साथीहरूका प्रश्न, सरल भाषामा।</p>
<div class="dress-qa-item">
<div class="dress-qa-q">
<div class="dress-qa-q-text">DRESS ले सानो वा ठूलो आन्द्रालाई किन गम्भीर असर नगरेजस्तो देखियो?</div></div>
<div class="dress-qa-body">
<p>DRESS मा छाला र कलेजो प्रमुख लक्ष्य भए पनि मिर्गौला र अस्थिमज्जा पनि असर पर्न सक्छ। आन्द्रा धेरैजसो जोगिन सक्छ। तीन कारण:</p>
<ol class="dress-qa-ol">
<li><strong>भिन्न gut immunology.</strong> आन्द्राभित्रको प्रतिरक्षा प्रणाली केही हदसम्म फरक काम गर्छ।</li>
<li><strong>औषधिको metabolic path.</strong> कलेजो र मिर्गौलाले औषधि प्रशोधन गर्दा उच्च exposure पाउँछन्।</li>
<li><strong>Regeneration speed.</strong> आन्द्राको तह छिटो नवीकरण हुन्छ।</li>
</ol>
<div class="dress-qa-highlight"><p><strong>छोटकरीमा:</strong> औषधि बढी केन्द्रित हुने अंगहरू मुख्य लक्ष्य बन्छन्, र gut छिटो मर्मत हुन सक्छ।</p></div>
<p><strong>अस्थिमज्जा र hemoglobin बारे:</strong> cytokine storm ले अस्थिमज्जामा असर गर्न सक्छ, त्यसैले transfusion आवश्यक पर्न सक्छ।</p>
</div></div>`
  }
};

function t(key) {
  const lang = document.body.getAttribute('data-lang') || 'en';
  return LANGS[lang]?.strings?.[key] ?? LANGS.en.strings[key] ?? key;
}

function tM(mk, f) {
  const lang = document.body.getAttribute('data-lang') || 'en';
  if (lang === 'en') return M[mk]?.[f] ?? '';
  return LANGS[lang]?.strings?.['m_' + mk + '_' + f] ?? M[mk]?.[f] ?? '';
}

function tSys(sk, f) {
  const lang = document.body.getAttribute('data-lang') || 'en';
  if (lang === 'en') return SYSTEMS[sk]?.[f] ?? '';
  return LANGS[lang]?.strings?.['sys_' + sk + '_' + f] ?? SYSTEMS[sk]?.[f] ?? '';
}

function tDress(key) {
  const lang = document.body.getAttribute('data-lang') || 'en';
  return DRESS_CONTENT[lang]?.[key] ?? DRESS_CONTENT.en[key] ?? '';
}

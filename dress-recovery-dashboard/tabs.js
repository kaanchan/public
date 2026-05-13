function renderOverview(){
  const sysCards=Object.keys(SYSTEMS).map(ringCard).join('');
  const tl=TIMELINE.map((it,idx)=>{
    const tags=it.tags.map(tag=>`<span class="tl-tag ${tag}">${tag}</span>`).join('');
    const isToday=idx===TIMELINE.length-1;
    return `<div class="tl-row${isToday?' today':''}">
      <div class="tl-date">${it.d}</div>
      <div class="tl-body"><span class="tl-tags">${tags}</span>${t('tl_'+(idx+1)) || it.t}</div>
    </div>`;
  }).join('');
  const compLeg=GP_SYS_KEYS.map(k=>{
    const subs=COMP_SUBGROUPS[k]||null;
    if(subs) return subs.map((sub,si)=>
      `<div class="cc-leg"><div style="width:18px;height:0;border-top:${si===0?'2.5':'1.8'}px solid ${sub.color};flex-shrink:0"></div>${subLabel(sub)}</div>`
    ).join('');
    return `<div class="cc-leg"><span class="dot" style="background:${sysHex(k)}"></span>${tSys(k,'name')}</div>`;
  }).join('')+`
    <div class="cc-leg"><span class="ev" style="background:var(--kidney)">D</span>Dialysis</div>
    <div class="cc-leg"><span class="ev" style="background:var(--blood)">T</span>Transfusion</div>
    <div class="cc-leg"><span class="ev" style="background:var(--z-normal)">★</span>Milestone</div>`;

  document.getElementById('ov-inner').innerHTML=`
    <div class="notice">${t('disclaimer')}</div>

    <div class="hero">
      <div class="hero-eyebrow">${t('h_phase')}</div>
      <h2>${t('story_title')}</h2>
      <p>${t('story_p1')}</p>
      <p>${t('story_p2')}</p>
      <p><strong>${t('story_diag_l')}</strong>${t('story_diag')}</p>
      <p><strong>${t('story_prog_l')}</strong>${t('story_prog')}</p>
      <p><strong>${t('story_asof_l')}</strong>${t('story_asof')}</p>
      <div class="meta-row">
        <div class="meta-pill"><div class="lbl">Days tracked</div><div class="val"><em>26</em></div></div>
        <div class="meta-pill"><div class="lbl">Dialysis sessions</div><div class="val"><em>11</em></div></div>
        <div class="meta-pill"><div class="lbl">Transfusions</div><div class="val"><em>4</em></div></div>
        <div class="meta-pill"><div class="lbl">Liver injury</div><div class="val">Resolved <em>🎉</em></div></div>
        <div class="meta-pill"><div class="lbl">UO Apr 25–May 3</div><div class="val"><em>445→3,205 mL</em></div></div>
        <div class="meta-pill"><div class="lbl">Outlook</div><div class="val">Encouraging</div></div>
      </div>
    </div>

    <div class="sec"><h3>${t('sec_systems')} <em style="font-style:italic;color:var(--t2)">· since last reading</em></h3><div class="sec-line"></div><span class="sec-sub">click to explore</span></div>
    <div class="sys-grid">${sysCards}</div>

    <div class="composite-card">
      <div class="cc-head">
        <div>
          <div class="cc-title">All systems · annotated recovery timeline</div>
          <div class="cc-sub">0 = critical · 100 = fully healthy · key events marked above</div>
        </div>
      </div>
      <div class="cc-chart"><canvas id="cc-canvas"></canvas></div>
      <div class="cc-legend">${compLeg}</div>
    </div>

    <div class="composite-card" style="margin-top:var(--gap)">
      <div class="cc-head">
        <div>
          <div class="cc-title">${t('gp_uo_events_title')}</div>
          <div class="cc-sub">${t('gp_uo_events_sub')}</div>
        </div>
      </div>
      <div class="cc-chart"><canvas id="uo-ov-canvas"></canvas></div>
      <div class="cc-legend">
        <div class="cc-leg"><span class="dot" style="background:var(--kidney)"></span>${t('gp_uo_daily_total')}</div>
        <div class="cc-leg"><span class="legend-band"></span>${t('legend_band')}</div>
      </div>
    </div>

    <div class="sec"><h3>${t('sec_timeline')}</h3><div class="sec-line"></div><span class="sec-sub">timeline</span></div>
    <div class="tl-card">${tl}</div>
  `;
  setTimeout(()=>{
    renderCompositeAnnotated();
    renderUOEventsChart('uo-ov-canvas');
  },80);
}

/* ═══════════════════════════════════════════════════════════════
   SYSTEM TABS
   ═══════════════════════════════════════════════════════════════ */
function markerCard(mKey,full){
  const m=M[mKey];if(!m)return'';
  const clean=m.v.filter(v=>v!==null);
  const cur=clean[clean.length-1];
  const st=vstatus(cur,m);
  const tr=trendOf(mKey,m);
  const p=projOf(mKey,m);
  const score=cNorm(mKey,cur);
  const zone=zoneOf(score);
  const cid=`c-${mKey}-${cc++}`;
  const stLbl=st==='ok'?t('badge_ok'):st==='hi'?t('badge_hi'):st==='lo'?t('badge_lo'):'No data';
  const valZone=`z-${zone}`;
  const trMap={imp:t('badge_imp'),watch:t('badge_watch'),hold:t('badge_hold'),dial:t('badge_dial'),tx:t('badge_tx')};
  const trCls={imp:'trend-imp',watch:'trend-watch',hold:'trend-hold',dial:'tx-dial',tx:'tx-tx'};
  const pCls={imp:'imp',dial:'dial',tx:'tx',watch:'watch',hold:'hold'};
  setTimeout(()=>mkChart(cid,mKey),60);
  return`<div class="mc${full?' span2':''}">
    <div class="mc-top">
      <div><div class="mc-name">${tM(mKey,'name')}</div><div class="mc-abbr">${m.abbr}</div></div>
      <div style="text-align:right"><div class="mc-val ${valZone}">${cur}</div><div class="mc-unit">${m.unit}</div></div>
    </div>
    <div class="badges">
      <span class="bdg ${valZone}">${stLbl}</span>
      <span class="bdg ${trCls[tr]||'trend-hold'}">${trMap[tr]||t('badge_hold')}</span>
    </div>
    <div class="chart-wrap"><canvas id="${cid}" role="img" aria-label="${tM(mKey,'name')} trend"></canvas></div>
    <div class="mc-range">${t('badge_normal')} <strong>${m.nL} – ${m.nH} ${m.unit}</strong></div>
    <div class="mc-edu clinical-only">
      <strong>${t('badge_what')}</strong> ${tM(mKey,'what')}
      <span class="div"></span>
      <strong>${t('badge_incase')}</strong> ${tM(mKey,'why')}
    </div>
    <div class="mc-edu family-only">
      ${tM(mKey,'why')}
    </div>
    <div class="mc-proj ${pCls[p.type]||'hold'}">${p.text}</div>
  </div>`;
}

function renderSys(key){
  const el=document.getElementById(`${key}-inner`);
  if(!el)return;
  if(key==='kidney') setTimeout(()=>renderUOEventsChart('uo-events-canvas'),120);
  const s=SYSTEMS[key];
  const hasDial=s.markers.some(k=>M[k].dial);
  const hasTx=s.markers.some(k=>M[k].tx||TX_DIRECT.includes(k));
  const legend=`<div class="legend-row">
    ${hasDial?`<div class="legend-item"><span class="legend-line"></span>${t('legend_dial')}</div>`:''}
    ${hasTx?`<div class="legend-item"><span class="legend-line tx"></span>${t('legend_tx')}</div>`:''}
    <div class="legend-item"><span class="legend-band"></span>${t('legend_band')}</div>
    <div class="legend-item" style="color:var(--t3);font-size:10.5px">${t('legend_cone')}</div>
  </div>`;
  const hl=tSys(key,'hl');
  const cards=s.markers.map((k,i)=>markerCard(k,s.markers.length%2!==0&&i===s.markers.length-1)).join('');
  el.innerHTML=`
    <div class="sys-header" style="--sys-color:var(--${s.color})">
      <h2>${tSys(key,'name')}</h2>
      <p>${tSys(key,'desc')}</p>
      ${hl?`<div class="sys-hl">${hl}</div>`:''}
      ${legend}
    </div>
    <div class="mgrid">${cards}</div>
    ${key==='kidney'?`
    <div class="composite-card" style="margin-top:var(--gap)">
      <div class="cc-head">
        <div>
          <div class="cc-title">${t('gp_uo_events_title')}</div>
          <div class="cc-sub">${t('gp_uo_events_sub')}</div>
        </div>
      </div>
      <div class="cc-chart" style="height:280px"><canvas id="uo-events-canvas"></canvas></div>
      <div class="cc-legend">
        <div class="cc-leg"><span class="dot" style="background:var(--kidney)"></span>${t('gp_uo_events_title')} (stacked by void)</div>
        <div class="cc-leg"><span class="legend-band"></span>${t('legend_band')}</div>
      </div>
    </div>`:''}
  `;
}

/* ═══════════════════════════════════════════════════════════════
   HEATMAP CALENDAR
   ═══════════════════════════════════════════════════════════════ */
function renderHeatmap(){
  const el=document.getElementById('heatmap-inner');
  if(!el)return;
  const sections=Object.keys(SYSTEMS).map(sysKey=>{
    const s=SYSTEMS[sysKey];
    const lbl=`<div class="heat-section-lbl" style="color:var(--${s.color})">${tSys(sysKey,'name')}</div>`;
    const rows=s.markers.map(mKey=>{
      const m=M[mKey];
      const lblCell=`<div class="heat-row-lbl">${tM(mKey,'name')} <span class="abbr">${m.abbr}</span></div>`;
      const cells=DATES.map((d,i)=>{
        const v=m.v[i];
        if(v==null){let sc='';for(let j=i-1;j>=0;j--){if(m.v[j]!=null){sc=zoneHex(zoneOf(cNorm(mKey,m.v[j])));break;}}return '<div class="heat-cell empty"'+(sc?' style="--stripe-color:'+sc+'"':'')+'></div>';}
        const score=cNorm(mKey,v);
        const zone=zoneOf(score);
        const bg=zoneHex(zone);
        const op=score!=null?Math.max(0.35,score>=85?0.95:0.55+(100-score)/180):0.3;
        return `<div class="heat-cell" style="background:${bg};opacity:${op.toFixed(2)}"
          data-marker="${tM(mKey,'name')}" data-date="${d}" data-val="${v}" data-unit="${m.unit}" data-zone="${zone}" data-score="${score!=null?Math.round(score):'—'}"></div>`;
      }).join('');
      return lblCell+cells;
    }).join('');
    return lbl+rows;
  }).join('');
  const dateHeader='<div class="heat-row-lbl"></div>'+DATES.map(d=>`<div class="heat-date">${d.replace('Apr ','')}</div>`).join('');
  el.innerHTML=`
    <div class="hero" style="margin-bottom:var(--gap)">
      <div class="hero-eyebrow">${t('hm_eyebrow')}</div>
      <h2>${t('hm_title')}</h2>
      <p>${t('hm_intro')}</p>
    </div>
    <div class="heat-card">
      <div class="heat-grid" style="grid-template-columns:120px repeat(${DATES.length},minmax(20px,1fr))">${dateHeader}${sections}</div>
      <div class="heat-legend">
        <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--t3);text-transform:uppercase;letter-spacing:.6px">Zones:</span>
        <div class="heat-leg"><span class="heat-leg-dot" style="background:var(--z-normal)"></span>Normal (85–100)</div>
        <div class="heat-leg"><span class="heat-leg-dot" style="background:var(--z-warn)"></span>Warning (60–84)</div>
        <div class="heat-leg"><span class="heat-leg-dot" style="background:var(--z-danger)"></span>Danger (30–59)</div>
        <div class="heat-leg"><span class="heat-leg-dot" style="background:var(--z-critical)"></span>Critical (0–29)</div>
        <div class="heat-leg" style="margin-left:auto;color:var(--t3)"><span class="heat-leg-dot" style="background:linear-gradient(transparent 37.5%,var(--t3) 37.5%,var(--t3) 62.5%,transparent 62.5%),repeating-linear-gradient(45deg,var(--t3) 0 2px,transparent 2px 5px);opacity:.4"></span>No reading</div>
      </div>
    </div>
  `;
  // Tooltips
  const tip=document.getElementById('heat-tip');
  el.querySelectorAll('.heat-cell:not(.empty)').forEach(c=>{
    c.addEventListener('mouseenter',e=>{
      const d=c.dataset;
      tip.innerHTML=`<strong>${d.marker}</strong> · ${d.date}<br>${d.val} ${d.unit} · score ${d.score}/100<span class="tip-zone">${d.zone}</span>`;
      tip.style.display='block';
    });
    c.addEventListener('mousemove',e=>{
      tip.style.left=(e.clientX+12)+'px';
      tip.style.top=(e.clientY+12)+'px';
    });
    c.addEventListener('mouseleave',()=>{tip.style.display='none';});
  });
}

/* ═══════════════════════════════════════════════════════════════
   DRESS — diagnosis explainer
   ═══════════════════════════════════════════════════════════════ */
function renderDress(){
  const el=document.getElementById('dress-inner');
  if(!el)return;
  const lang=document.body.getAttribute('data-lang')||'en';
  if(lang!=='en'){
    el.innerHTML=['s1','s2','s3','s4','s5','qa'].map(k=>
      `<div class="dress-section">${tDress(k)}</div>`
    ).join('');
    return;
  }
  const noHead=html=>html.replace(/^<h2[\s\S]*?<\/h2>\s*(<p[^>]*color:var\(--t3\)[^>]*>[\s\S]*?<\/p>\s*)?/,'');
  el.innerHTML=`
    <div class="hero">
      <div class="hero-eyebrow">DIAGNOSIS · DRESS SYNDROME</div>
      <h2>What DRESS is, and why every system was hit at once</h2>
      <p><strong>DRESS</strong> stands for <em>Drug Reaction with Eosinophilia and Systemic Symptoms</em> — a rare, delayed immune reaction to a medication. In KA's case, the trigger was a <strong>Sulfa antibiotic</strong>. The reaction does not appear at the moment of taking the drug; it develops over 2–8 weeks as the immune system slowly mounts a response, and then all of that response arrives together.</p>
      <p>That timing is why so many systems showed injury simultaneously on admission. The kidneys, liver, blood-cell production, and electrolyte balance were not failing for separate reasons — they were responding to a single, shared immune storm.</p>
    </div>

    <div class="sec"><h3>How it presents</h3><div class="sec-line"></div><span class="sec-sub">classic features</span></div>
    <div class="sys-grid" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr))">
      <div class="ring-card" style="--sys-color:var(--liver);padding:18px 20px">
        <div class="ring-name" style="margin-bottom:8px">Skin rash</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.55">Widespread rash, often the first visible sign. May appear feverish or measles-like.</div>
      </div>
      <div class="ring-card" style="--sys-color:var(--blood);padding:18px 20px">
        <div class="ring-name" style="margin-bottom:8px">Eosinophilia</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.55">A specific type of white blood cell — the eosinophil — rises sharply. This is the immune signature that gives DRESS its name.</div>
      </div>
      <div class="ring-card" style="--sys-color:var(--kidney);padding:18px 20px">
        <div class="ring-name" style="margin-bottom:8px">Organ involvement</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.55">Liver and kidneys are the most commonly affected. Marrow suppression and electrolyte disruption are also typical.</div>
      </div>
      <div class="ring-card" style="--sys-color:var(--elec);padding:18px 20px">
        <div class="ring-name" style="margin-bottom:8px">Fever</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.55">Often high and prolonged. Part of the systemic inflammatory response.</div>
      </div>
    </div>

    <div class="sec"><h3>How it's treated</h3><div class="sec-line"></div><span class="sec-sub">two pillars</span></div>
    <div class="composite-card" style="padding:22px 24px">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
        <div>
          <div style="font-family:'Newsreader',serif;font-size:18px;color:var(--ink);margin-bottom:8px">1 · Stop the trigger</div>
          <div style="font-size:13px;color:var(--t2);line-height:1.6">The Sulfa antibiotic was identified and discontinued immediately on admission. This is the single most important step — without it, the reaction continues to escalate.</div>
        </div>
        <div>
          <div style="font-family:'Newsreader',serif;font-size:18px;color:var(--ink);margin-bottom:8px">2 · Calm the immune response</div>
          <div style="font-size:13px;color:var(--t2);line-height:1.6"><strong>Prednisone</strong> (a steroid, started Apr 19) suppresses the over-active immune response so each affected organ has space to heal. The taper happens slowly over weeks to months.</div>
        </div>
      </div>
      <div style="margin-top:18px;padding-top:18px;border-top:1px solid var(--line-soft);font-size:12.5px;color:var(--t3);line-height:1.6">
        <strong style="color:var(--t2)">Supportive care for each affected organ —</strong> dialysis for the kidneys, transfusions for blood, electrolyte correction, and close monitoring of liver enzymes — runs alongside the immune treatment until each system can sustain itself.
      </div>
    </div>

    <div class="sec"><h3>What recovery looks like</h3><div class="sec-line"></div><span class="sec-sub">timeline</span></div>
    <div class="tl-card">
      <div class="tl-row">
        <div class="tl-date">Days</div>
        <div class="tl-body">Stop the trigger. Begin steroids. Stabilise each affected organ with supportive care.</div>
      </div>
      <div class="tl-row">
        <div class="tl-date">Weeks</div>
        <div class="tl-body">Acute injury phases resolve in sequence. Liver enzymes typically normalise first. Bone marrow restarts production. Inflammation subsides.</div>
      </div>
      <div class="tl-row">
        <div class="tl-date">Months</div>
        <div class="tl-body">Steroid taper. Kidneys may take longer than other organs to fully resume independent function. Slow rebuild of liver-made proteins (albumin) continues even after the liver itself is healed.</div>
      </div>
      <div class="tl-row today">
        <div class="tl-date">Long&nbsp;term<small>outlook</small></div>
        <div class="tl-body">DRESS is rare, but most patients recover fully when the trigger is identified early and the immune response is calmed. Avoiding the offending drug class for life is essential.</div>
      </div>
    </div>

    <div class="sec"><h3>Family Risk &amp; Genetics</h3><div class="sec-line"></div><span class="sec-sub">for your family</span></div>
    <div class="dress-section">${noHead(tDress('s3'))}</div>

    <div class="sec"><h3>Recovery</h3><div class="sec-line"></div><span class="sec-sub">process &amp; outlook</span></div>
    <div class="dress-section">${noHead(tDress('s4'))}</div>
    <div class="dress-section">${noHead(tDress('s5'))}</div>

    <div class="sec"><h3>Questions &amp; Answers</h3><div class="sec-line"></div><span class="sec-sub">from the family</span></div>
    <div class="dress-section">${noHead(tDress('qa'))}</div>

    <div class="notice" style="margin-top:var(--gap)">${t('disclaimer')}</div>
  `;
}

/* ═══════════════════════════════════════════════════════════════
   GRAPHS — per-system deep-dive (composite + every marker overlaid)
   ═══════════════════════════════════════════════════════════════ */
/* ── Graphs tab constants (ported from [1] KA_labs_i18n.html) ── */
const GP_SYS_KEYS=['kidney','liver','blood','electrolytes'];
const GP_PALETTES={
  kidney:['#58a6ff','#a5c8ff','#1f6feb','#8ecae6'],
  liver: ['#d29922','#e3b341','#b08800','#f0c040','#a8d5a2','#c8e6c9'],
  blood: {marrow:['#ffb347','#ffd280'],oxygen:['#f78166','#ff9580','#ffc0b0','#e05c40']},
  electrolytes:['#bc8cff','#d8b4fe','#a56dff','#8b5cf6','#c4b5fd','#ddd6fe','#ede9fe'],
};
const GP_SYS_MARKERS={
  kidney:['CREAT','BUN','GFR','BUN_CREAT'],
  liver: ['AST','ALT','ALKP','BILT','ALB','TPROT'],
  blood: ['WBC','HGB','PLT','RBC','HCT','RDW'],
  electrolytes:['NA','K','CL','CO2','ANION','GLU','CA'],
};
const GP_MARKER_META={
  CREAT:{label:'Creatinine',unit:'mg/dL',grp:null},BUN:{label:'BUN',unit:'mg/dL',grp:null},
  GFR:{label:'GFR',unit:'mL/min',grp:null},BUN_CREAT:{label:'BUN:Cr',unit:'ratio',grp:null},
  AST:{label:'AST',unit:'U/L',grp:null},ALT:{label:'ALT',unit:'U/L',grp:null},
  ALKP:{label:'ALKP',unit:'U/L',grp:null},BILT:{label:'Bilirubin',unit:'mg/dL',grp:null},
  ALB:{label:'Albumin',unit:'g/dL',grp:null},TPROT:{label:'T.Protein',unit:'g/dL',grp:null},
  WBC:{label:'WBC',unit:'K/µL',grp:'marrow'},HGB:{label:'HGB',unit:'g/dL',grp:'oxygen'},
  PLT:{label:'Platelets',unit:'K/µL',grp:'marrow'},RBC:{label:'RBC',unit:'M/µL',grp:'oxygen'},
  HCT:{label:'HCT',unit:'%',grp:'oxygen'},RDW:{label:'RDW',unit:'%',grp:'oxygen'},
  NA:{label:'Sodium',unit:'mmol/L',grp:null},K:{label:'Potassium',unit:'mmol/L',grp:null},
  CL:{label:'Chloride',unit:'mmol/L',grp:null},CO2:{label:'CO2',unit:'mmol/L',grp:null},
  ANION:{label:'Anion Gap',unit:'mmol/L',grp:null},GLU:{label:'Glucose',unit:'mg/dL',grp:null},
  CA:{label:'Calcium',unit:'mg/dL',grp:null},
};
function gpMarkerSeries(key){return DATES.map((_,i)=>cNorm(key,M[key]?M[key].v[i]:null));}
function gpMColor(key,sysKey){
  const pal=GP_PALETTES[sysKey];
  if(sysKey==='blood'){
    const grp=GP_MARKER_META[key].grp||'oxygen';
    const arr=pal[grp];
    const mkrs=GP_SYS_MARKERS[sysKey].filter(k=>GP_MARKER_META[k].grp===grp);
    return arr[mkrs.indexOf(key)%arr.length];
  }
  return pal[GP_SYS_MARKERS[sysKey].indexOf(key)%pal.length];
}

const graphCharts={};
function renderGraphs(){
  const el=document.getElementById('graphs-inner');
  if(!el)return;
  Object.values(graphCharts).forEach(c=>c.destroy());
  Object.keys(graphCharts).forEach(k=>delete graphCharts[k]);

  // Score cards (clickable — scroll to system section)
  const cardHtml=GP_SYS_KEYS.map(k=>{
    const hex=sysHex(k);
    const avg=COMP_AVG[k];
    const valid=avg.filter(v=>v!=null);
    const curr=valid[valid.length-1]??null;
    const rawValid=COMP_RAW[k].filter(v=>v!=null);
    const currRaw=rawValid[rawValid.length-1]??null,prevRaw=rawValid[rawValid.length-2]??null;
    const delta=currRaw!=null&&prevRaw!=null?currRaw-prevRaw:0;
    const sign=delta>.5?'↑':delta<-.5?'↓':'→';
    const dc=delta>.5?'color:var(--z-normal)':delta<-.5?'color:var(--z-danger)':'color:var(--t3)';
    const _li=lastKnownIdx(avg),_nd=_li>=0?daysAgo(DATES[_li]):null;
    const _ago=_nd!=null&&_nd>0?' ('+_nd+'d ago)':'';
    return `<div class="gp-card" id="gp-card-${k}" style="--gp-ac:${hex}" onclick="document.getElementById('gp-sec-${k}').scrollIntoView({behavior:'smooth',block:'start'})">
      <div class="gp-sys" style="color:${hex}">${tSys(k,'name')}</div>
      <div class="gp-scr" style="color:${hex}">${curr!=null?Math.round(curr):'—'}<span style="font-size:.9rem;font-weight:400;color:var(--t3)">/100</span></div>
      <div class="gp-sub" style="${dc}">${sign} ${Math.abs(delta).toFixed(1)} ${t('gp_from_prev')}${_ago}</div>
      <div class="gp-bar"><div class="gp-fill" style="width:${curr??0}%;background:${hex}33;border-right:2px solid ${hex}"></div></div>
    </div>`;
  }).join('');

  // Top-down system chart sections
  const sectionHtml=GP_SYS_KEYS.map(k=>{
    const hex=sysHex(k);
    const subs=COMP_SUBGROUPS[k]||null;
    const curr=lastKnown(COMP_AVG[k]);
    const subNote=subs
      ?`<p style="margin-top:10px;font-size:.7rem;color:var(--t3)">`+
        subs.map(s=>`<span style="color:${s.color};font-weight:600">■ ${subLabel(s)}</span> — ${s.markers.join(', ')}`).join(' &nbsp;·&nbsp; ')+
        `</p>`:'';
    return `<div class="gp-sys-section" id="gp-sec-${k}">
      <div class="sec" style="margin-bottom:16px">
        <h3 style="color:${hex}">${tSys(k,'name')}</h3>
        <div class="sec-line"></div>
        <span class="sec-sub">${curr!=null?Math.round(curr)+'/100':'—'}</span>
      </div>
      <div class="gp-chart-card">
        <div class="gp-chart-hdr">
          <span class="gp-chart-title">${tSys(k,'name')} · ${t('gp_chart_sub')}</span>
          <button class="gp-toggle on" id="gp-tog-${k}">${t('gp_hide_raw')}</button>
        </div>
        <div class="gp-chart-wrap"><canvas id="gp-c-${k}"></canvas></div>
        <div class="gp-legend" id="gp-leg-${k}"></div>
        ${subNote}
      </div>
    </div>`;
  }).join('');

  // Normalisation math table
  const mathHtml=GP_SYS_KEYS.map(k=>{
    const hex=sysHex(k);
    const rows=GP_SYS_MARKERS[k].map(mk=>{
      const cm=COMP_MARKERS[mk];
      const meta=GP_MARKER_META[mk];
      const score=cNorm(mk,M[mk]?lastKnown(M[mk].v):null);
      const isChartOnly=cm&&cm.sys==='_chart';
      const dir=cm?cm.dir:'?';
      const f=!cm?'—':dir==='lower'?`4-zone ↓ best≤${cm.best}`
               :dir==='higher'?`4-zone ↑ best≥${cm.best}`
               :`4-zone ± normal ${cm.nL}–${cm.nH}`;
      const grp=meta.grp?`<span class="gp-grp-pill" style="background:${meta.grp==='marrow'?'#ffb34722':'#f7816622'};color:${meta.grp==='marrow'?'#ffb347':'#f78166'}">${meta.grp}</span>`:'';
      const chartBadge=isChartOnly?`<span style="font-size:.65rem;color:var(--t3);margin-left:4px">${t('gp_chart_only')}</span>`:'';
      return `<tr>
        <td>${grp}${meta.label}${chartBadge}</td>
        <td class="gp-dim">${dir==='lower'?'↓ lower':dir==='higher'?'↑ higher':'± optimal'}</td>
        <td class="gp-dim">${f}</td>
        <td style="color:${isChartOnly?'var(--t3)':hex};font-weight:500">${score!=null?Math.round(score):'—'}${isChartOnly?' *':''}</td>
      </tr>`;
    }).join('');
    return `<div class="gp-sys-block">
      <div class="gp-sys-name" style="color:${hex}">${tSys(k,'name')}</div>
      <table class="gp-mtable">
        <thead><tr><th>${t('gp_th_marker')}</th><th>${t('gp_th_dir')}</th><th>${t('gp_th_formula')}</th><th>${t('gp_th_score')}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  }).join('');

  el.innerHTML=`
    <div class="hero" style="margin-bottom:var(--gap)">
      <div class="hero-eyebrow">${t('tab_graphs').toUpperCase()} · ${t('gp_hero_eyebrow')}</div>
      <h2>${t('gp_hero_title')}</h2>
      <p>${t('gp_hero_p')}</p>
    </div>
    <div class="gp-cards" style="margin-bottom:var(--gap)">${cardHtml}</div>
    ${sectionHtml}
    <div class="gp-sys-section" id="gp-sec-uo" style="margin-top:var(--gap)">
      <div class="sec" style="margin-bottom:16px">
        <h3 style="color:var(--kidney)">${t('gp_uo_events_title')}</h3>
        <div class="sec-line"></div>
        <span class="sec-sub">${t('gp_uo_events_sub')}</span>
      </div>
      <div class="gp-chart-card">
        <div class="gp-chart-hdr">
          <span class="gp-chart-title">${t('gp_uo_events_title')} · ${t('gp_uo_events_sub')}</span>
        </div>
        <div class="gp-chart-wrap"><canvas id="gp-uo-canvas"></canvas></div>
        <div class="gp-legend">
          <div class="gp-leg"><div class="gp-leg-line" style="border-top:2px solid var(--kidney);margin-top:1px;width:18px"></div>${t('gp_uo_daily_total')}</div>
          <div class="gp-leg"><div class="gp-leg-line" style="border-top:1px dashed var(--kidney);margin-top:1px;width:18px;opacity:.4"></div>${t('gp_uo_normal_line')}</div>
        </div>
      </div>
    </div>
    <div class="gp-math" style="margin-top:var(--gap)">
      <h2>${t('gp_math_title')}</h2>
      ${mathHtml}
    </div>
    <div class="gp-note" style="margin-top:var(--gap)">
      <p class="gp-caveat">${t('gp_caveat_kidney')}</p>
      <p class="gp-caveat" style="margin-top:12px">${t('gp_caveat_blood')}</p>
      <p class="gp-caveat" style="margin-top:12px">${t('gp_caveat_lossy')}</p>
    </div>
  `;

  // Build charts after DOM mounts
  setTimeout(()=>renderUOEventsChart('gp-uo-canvas'),80);
  setTimeout(()=>{
    const t3c=cvar('--t3'), lineSoft=cvar('--line-soft');
    const gpShowRaw={};
    GP_SYS_KEYS.forEach(sysKey=>{
      const hex=sysHex(sysKey);
      const subs=COMP_SUBGROUPS[sysKey]||null;
      gpShowRaw[sysKey]=true;

      function buildDs(incRaw){
        const ds=[];
        if(subs){
          subs.forEach((sub,si)=>{
            if(incRaw) ds.push({label:subLabel(sub)+' (raw)',data:COMP_SUBRAW[sysKey][sub.key],
              borderColor:sub.color+'40',backgroundColor:'transparent',
              borderWidth:1,borderDash:[2,2],pointRadius:0,tension:.35,spanGaps:true,order:20+si});
            ds.push({label:subLabel(sub),data:COMP_SUBAVG[sysKey][sub.key],
              borderColor:sub.color,backgroundColor:'transparent',
              borderWidth:3,pointRadius:0,tension:.35,spanGaps:true,order:si});
          });
        } else {
          ds.push({label:t('gp_composite'),data:COMP_AVG[sysKey],borderColor:hex+'88',backgroundColor:'transparent',
            borderWidth:2.5,pointRadius:0,tension:.35,spanGaps:true,order:10});
        }
        GP_SYS_MARKERS[sysKey].forEach(key=>{
          const col=gpMColor(key,sysKey);
          const series=gpMarkerSeries(key);
          const avg=cRolling(series);
          if(incRaw) ds.push({label:GP_MARKER_META[key].label+' (raw)',data:series,
            borderColor:col+'45',backgroundColor:'transparent',
            borderWidth:1,borderDash:[2,2],pointRadius:0,tension:.25,spanGaps:true});
          ds.push({label:GP_MARKER_META[key].label,data:avg,borderColor:col,backgroundColor:'transparent',
            borderWidth:1.5,borderDash:[5,3],pointRadius:2,pointBackgroundColor:col,
            pointHoverRadius:5,tension:.3,spanGaps:true});
        });
        return ds;
      }

      const canvas=document.getElementById('gp-c-'+sysKey);
      if(!canvas)return;
      const _ref={current:null};
      graphCharts['gp-'+sysKey]=new Chart(canvas,{
        type:'line',
        data:{labels:DATES,datasets:buildDs(true)},
        options:{
          responsive:true,maintainAspectRatio:false,animation:false,
          interaction:{mode:'index',intersect:false},
          onHover:mkHover(_ref),
          plugins:{legend:{display:false},tooltip:mkTooltip(_ref)},
          scales:{
            x:{grid:{color:lineSoft+'60'},ticks:{color:t3c,font:{size:9,family:'JetBrains Mono'},maxRotation:40,autoSkip:true,maxTicksLimit:10},border:{display:false}},
            y:{min:0,max:110,grid:{color:lineSoft+'60'},
               ticks:{color:t3c,font:{size:9,family:'JetBrains Mono'},maxTicksLimit:6,callback:v=>v===100?['Normal','100']:v===0?'Critical':v>100?null:v},
               border:{display:false}},
          },
        },
        plugins:[{id:'gpTargetLine',afterDraw(chart){
          const{ctx,chartArea:{left,right},scales:{y}}=chart;
          const yp=y.getPixelForValue(100);
          const tc=cvar('--t3');
          ctx.save();ctx.strokeStyle=tc+'60';ctx.lineWidth=1;ctx.setLineDash([4,4]);
          ctx.beginPath();ctx.moveTo(left,yp);ctx.lineTo(right,yp);ctx.stroke();ctx.setLineDash([]);
          ctx.fillStyle=tc;ctx.font='9px JetBrains Mono,monospace';
          ctx.textAlign='right';ctx.fillText(t('gp_target_normal'),right-4,yp-4);ctx.restore();
        }}],
      });

      // Build legend
      const legEl=document.getElementById('gp-leg-'+sysKey);
      if(legEl){
        if(subs){
          legEl.innerHTML=subs.map(sub=>
            `<div class="gp-leg"><div class="gp-leg-line" style="border-top:3px solid ${sub.color};margin-top:1px;width:18px"></div><span style="font-weight:600">${subLabel(sub)}</span></div>`
          ).join('');
        } else {
          legEl.innerHTML=`<div class="gp-leg"><div class="gp-leg-line" style="border-top:2px solid ${hex}88;margin-top:1px;width:18px"></div><span>${t('gp_composite')}</span></div>`;
        }
        GP_SYS_MARKERS[sysKey].forEach(key=>{
          const col=gpMColor(key,sysKey);
          const isChartOnly=COMP_MARKERS[key]&&COMP_MARKERS[key].sys==='_chart';
          legEl.innerHTML+=`<div class="gp-leg"><div class="gp-leg-line" style="border-top:2px dashed ${col};margin-top:1px;width:18px"></div>${GP_MARKER_META[key].label}${isChartOnly?` <span style="color:var(--t3);font-size:.65rem">${t('gp_chart_only')}</span>`:''}</div>`;
        });
      }

      // Raw toggle
      const togBtn=document.getElementById('gp-tog-'+sysKey);
      if(togBtn){
        togBtn.addEventListener('click',function(){
          gpShowRaw[sysKey]=!gpShowRaw[sysKey];
          this.classList.toggle('on',gpShowRaw[sysKey]);
          this.textContent=gpShowRaw[sysKey]?t('gp_hide_raw'):t('gp_show_raw');
          graphCharts['gp-'+sysKey].data.datasets=buildDs(gpShowRaw[sysKey]);
          graphCharts['gp-'+sysKey].update('none');
        });
      }
    });
  },80);
}

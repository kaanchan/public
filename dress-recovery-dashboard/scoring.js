/* ═══════════════════════════════════════════════════════════════
   SCORING — 4-zone, identical to v1
   ═══════════════════════════════════════════════════════════════ */
const COMP_MARKERS={
  GFR:  {sys:'kidney', dir:'higher',  best:60,   warn:30,    crit:10,    worst:0},
  AST:  {sys:'liver',  dir:'lower',   best:40,   warn:200,   crit:1000,  worst:10000},
  ALT:  {sys:'liver',  dir:'lower',   best:56,   warn:200,   crit:1000,  worst:10000},
  ALKP: {sys:'liver',  dir:'lower',   best:147,  warn:400,   crit:1000,  worst:2000},
  BILT: {sys:'liver',  dir:'lower',   best:1.2,  warn:3.0,   crit:15.0,  worst:30.0},
  ALB:  {sys:'liver',  dir:'higher',  best:3.5,  warn:2.5,   crit:1.5,   worst:1.0},
  TPROT:{sys:'liver',  dir:'higher',  best:6.0,  warn:4.5,   crit:3.0,   worst:1.5},
  WBC:  {sys:'blood',  dir:'optimal', nL:4.5,  nH:11.0, wL:2.0,  wH:20.0, cL:1.0,  cH:30.0, wstL:0.5, wstH:50.0},
  HGB:  {sys:'blood',  dir:'higher',  best:13.5, warn:8.0,   crit:6.0,   worst:4.0},
  PLT:  {sys:'blood',  dir:'higher',  best:150,  warn:50,    crit:20,    worst:5},
  RDW:  {sys:'blood',  dir:'optimal', nL:11.5, nH:14.5, wL:9.0,  wH:18.0, cL:7.0,  cH:23.0, wstL:5.0, wstH:28.0},
  NA:   {sys:'electrolytes', dir:'optimal', nL:136, nH:145, wL:125, wH:155, cL:111, cH:160, wstL:105, wstH:180},
  K:    {sys:'electrolytes', dir:'optimal', nL:3.5, nH:5.0, wL:3.0, wH:5.5, cL:2.5, cH:6.0, wstL:1.5, wstH:7.0},
  CL:   {sys:'electrolytes', dir:'optimal', nL:98,  nH:106, wL:80,  wH:115, cL:70,  cH:125, wstL:60,  wstH:140},
  CO2:  {sys:'electrolytes', dir:'optimal', nL:23,  nH:29,  wL:18,  wH:35,  cL:15,  cH:45,  wstL:10,  wstH:55},
  ANION:{sys:'electrolytes', dir:'lower',   best:12,  warn:17,  crit:25,    worst:35},
  GLU:  {sys:'electrolytes', dir:'optimal', nL:70,  nH:100, wL:50,  wH:200, cL:40,  cH:400, wstL:20,  wstH:600},
  CA:   {sys:'electrolytes', dir:'optimal', nL:8.5, nH:10.5, wL:7.0, wH:12.0, cL:6.0, cH:14.0, wstL:5.0, wstH:16.0},
  CREAT:{sys:'_chart', dir:'lower',   best:1.2,  warn:3.5,   crit:10.0,  worst:15.0},
  BUN:  {sys:'_chart', dir:'lower',   best:20,   warn:50,    crit:100,   worst:150},
  BUN_CREAT:{sys:'_chart', dir:'optimal', nL:10, nH:20, wL:5, wH:30, cL:2, cH:40, wstL:0, wstH:60},
  RBC:  {sys:'_chart', dir:'higher',  best:4.5,  warn:3.0,   crit:2.0,   worst:1.0},
  HCT:  {sys:'_chart', dir:'higher',  best:41,   warn:25,    crit:18,    worst:12},
  UO:   {sys:'_chart', dir:'higher',  best:1500, warn:400,   crit:100,   worst:0},
};

function cNorm(key,val){
  if(val==null||isNaN(val))return null;
  const m=COMP_MARKERS[key];if(!m)return null;
  if(m.dir==='lower'){
    if(val<=m.best)return 100;
    if(val<=m.warn)return 100-30*(val-m.best)/(m.warn-m.best);
    if(val<=m.crit)return 70-50*(val-m.warn)/(m.crit-m.warn);
    if(val<=m.worst)return 20-20*(val-m.crit)/(m.worst-m.crit);
    return 0;
  }
  if(m.dir==='higher'){
    if(val>=m.best)return 100;
    if(val>=m.warn)return 100-30*(m.best-val)/(m.best-m.warn);
    if(val>=m.crit)return 70-50*(m.warn-val)/(m.warn-m.crit);
    if(val>=m.worst)return 20-20*(m.crit-val)/(m.crit-m.worst);
    return 0;
  }
  if(m.dir==='optimal'){
    if(val>=m.nL&&val<=m.nH)return 100;
    if(val<m.nL){
      if(val>=m.wL)return 100-30*(m.nL-val)/(m.nL-m.wL);
      if(val>=m.cL)return 70-50*(m.wL-val)/(m.wL-m.cL);
      if(val>=m.wstL)return 20-20*(m.cL-val)/(m.cL-m.wstL);
      return 0;
    }
    if(val<=m.wH)return 100-30*(val-m.nH)/(m.wH-m.nH);
    if(val<=m.cH)return 70-50*(val-m.wH)/(m.cH-m.wH);
    if(val<=m.wstH)return 20-20*(val-m.cH)/(m.wstH-m.cH);
    return 0;
  }
  return null;
}

function zoneOf(score){
  if(score==null)return 'unk';
  if(score>=85)return 'normal';
  if(score>=60)return 'warn';
  if(score>=30)return 'danger';
  return 'critical';
}

function cRolling(arr,w=3){
  const h=Math.floor(w/2);
  return arr.map((_,i)=>{
    const sl=arr.slice(Math.max(0,i-h),Math.min(arr.length,i+h+1)).filter(v=>v!==null);
    return sl.length?+(sl.reduce((a,b)=>a+b,0)/sl.length).toFixed(1):null;
  });
}
function cSysComposite(sysKey){
  const mkrs=Object.keys(COMP_MARKERS).filter(k=>COMP_MARKERS[k].sys===sysKey);
  return DATES.map((_,i)=>{
    const sc=mkrs.map(k=>cNorm(k,M[k]?M[k].v[i]:null)).filter(s=>s!==null);
    return sc.length?+(sc.reduce((a,b)=>a+b,0)/sc.length).toFixed(1):null;
  });
}

const COMP_RAW={},COMP_AVG={};
Object.keys(SYSTEMS).forEach(k=>{COMP_RAW[k]=cSysComposite(k);COMP_AVG[k]=cRolling(COMP_RAW[k]);});

/* Sub-group definitions — split composites for Graphs tab drill-down */
const COMP_SUBGROUPS={
  kidney:[
    {key:'function', label:'Kidney · Function (GFR)',          label_ne:'मिर्गौला · कार्यक्षमता (GFR)',       color:'#1565c0', markers:['GFR']},
    {key:'dialysis', label:'Kidney · Dialysis effectiveness',  label_ne:'मिर्गौला · डायलिसिस प्रभावकारिता',  color:'#64b5f6', markers:['CREAT']},
    {key:'urine',    label:'Kidney · Urine output',            label_ne:'मिर्गौला · मूत्र उत्पादन',           color:'#00897b', markers:['UO']},
  ],
  liver:[
    {key:'injury',    label:'Liver · Injury phase',            label_ne:'कलेजो · चोटको चरण',                  color:'#bf360c', markers:['AST','ALT','ALKP','BILT']},
    {key:'synthesis', label:'Liver · Synthesis & repair',      label_ne:'कलेजो · प्रोटिन पुनर्निर्माण',       color:'#ffb300', markers:['ALB','TPROT']},
  ],
  blood:[
    {key:'marrow', label:'Blood · Marrow output',              label_ne:'रगत · अस्थिमज्जा उत्पादन',           color:'#6a1b9a', markers:['WBC','PLT','RDW']},
    {key:'oxygen', label:'Blood · Oxygen capacity',            label_ne:'रगत · अक्सिजन क्षमता',               color:'#ce93d8', markers:['HGB']},
  ],
};
function subLabel(sub){
  return (document.body.getAttribute('data-lang')==='ne'&&sub.label_ne)?sub.label_ne:sub.label;
}
const COMP_SUBRAW={},COMP_SUBAVG={};
Object.keys(COMP_SUBGROUPS).forEach(sys=>{
  COMP_SUBRAW[sys]={};COMP_SUBAVG[sys]={};
  COMP_SUBGROUPS[sys].forEach(sub=>{
    const raw=DATES.map((_,i)=>{
      const sc=sub.markers.map(k=>cNorm(k,M[k]?M[k].v[i]:null)).filter(s=>s!==null);
      return sc.length?+(sc.reduce((a,b)=>a+b,0)/sc.length).toFixed(1):null;
    });
    COMP_SUBRAW[sys][sub.key]=raw;
    COMP_SUBAVG[sys][sub.key]=cRolling(raw);
  });
});

/* Shared tooltip + hover-highlight for multi-line Graphs charts */
function mkTooltip(chartRef){
  return {
    backgroundColor:cvar('--ink'),borderColor:cvar('--border'),borderWidth:1,
    titleColor:cvar('--t3'),bodyColor:cvar('--card'),padding:9,
    filter:item=>!item.dataset.label.includes('(raw)'),
    callbacks:{
      label(ctx){
        const active=chartRef.current?._hovDs;
        const pre=(active==null||ctx.datasetIndex===active)?'▶ ':'  ';
        const val=ctx.raw!=null?ctx.raw.toFixed(1)+'/100':'—';
        return pre+ctx.dataset.label+': '+val;
      },
      labelTextColor(ctx){
        const active=chartRef.current?._hovDs;
        if(active==null)return cvar('--card');
        return ctx.datasetIndex===active?cvar('--card'):cvar('--t3');
      },
    },
  };
}
function mkHover(chartRef){
  return function(event,_activeEls,chart){
    chartRef.current=chart;
    const nearest=chart.getElementsAtEventForMode(event,'nearest',{intersect:false},false);
    const idx=nearest.length?nearest[0].datasetIndex:null;
    if(chart._hovDs===idx)return;
    chart._hovDs=idx;
    chart.data.datasets.forEach((ds,i)=>{
      if(ds.label&&ds.label.includes('(raw)'))return;
      const base=ds._baseWidth||(ds._baseWidth=ds.borderWidth||2);
      ds.borderWidth=idx===null||i===idx?base*1.8:base*0.6;
      ds.pointRadius=idx===null||i===idx?3:0;
    });
    chart.update('none');
  };
}

/* Linear regression for forecast */
function lr(vals){
  const pts=vals.filter(v=>v!==null&&!isNaN(v));
  if(pts.length<2)return{slope:0,intercept:pts[0]||0};
  const n=pts.length;let sx=0,sy=0,sxy=0,sx2=0;
  pts.forEach((y,x)=>{sx+=x;sy+=y;sxy+=x*y;sx2+=x*x;});
  const s=(n*sxy-sx*sy)/(n*sx2-sx*sx);
  return{slope:s,intercept:(sy-s*sx)/n};
}

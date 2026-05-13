/* ═══════════════════════════════════════════════════════════════
   UO EVENTS — stacked-bar chart (one segment per void event per day)
   ═══════════════════════════════════════════════════════════════ */
function renderUOEventsChart(canvasId){
  const el=document.getElementById(canvasId);if(!el)return;
  if(charts[canvasId]){charts[canvasId].destroy();delete charts[canvasId];}
  const nDays=UO_EVENT_LABELS.length;
  // Group events by day index
  const byDay=Array.from({length:nDays},()=>[]);
  UO_EVENTS.forEach(([di,,v])=>byDay[di].push(v));
  const maxEvt=Math.max(...byDay.map(d=>d.length));
  // Compute daily totals for reference in tooltips
  const dailyTotals=byDay.map(day=>day.reduce((a,b)=>a+b,0));
  // Build one dataset per event slot; hex encodes opacity to create a depth gradient
  const kidneyHex=cvar('--kidney');
  const datasets=[];
  for(let n=0;n<maxEvt;n++){
    const alpha=Math.round((0.45+(n/maxEvt)*0.50)*255).toString(16).padStart(2,'0');
    datasets.push({
      label:`Event ${n+1}`,
      data:byDay.map(day=>day[n]??null),
      backgroundColor:kidneyHex+alpha,
      borderColor:'transparent',borderWidth:0,stack:'uo',
    });
  }
  const t3=cvar('--t3'),lineSoft=cvar('--line-soft');
  charts[canvasId]=new Chart(el,{type:'bar',data:{labels:UO_EVENT_LABELS,datasets},options:{
    responsive:true,maintainAspectRatio:false,animation:{duration:600},
    interaction:{intersect:false,mode:'index'},
    plugins:{
      legend:{display:false},
      tooltip:{
        backgroundColor:cvar('--ink'),titleColor:cvar('--card'),bodyColor:cvar('--card'),
        titleFont:{family:'Inter Tight',size:11,weight:'600'},bodyFont:{family:'Inter Tight',size:11},padding:8,
        callbacks:{
          title:items=>`${items[0].label} — ${t('gp_uo_daily_total')}: ${dailyTotals[items[0].dataIndex].toLocaleString()} mL`,
          label:item=>item.raw!=null?`  ${t('m_UO_name').split(' ')[0]} ${item.datasetIndex+1}: ${item.raw} mL`:null,
        }
      },
      zoneBand:{nL:M.UO.nL,nH:M.UO.nH},
    },
    scales:{
      x:{stacked:true,ticks:{color:t3,font:{size:9,family:'JetBrains Mono'}},grid:{color:lineSoft+'80'},border:{display:false}},
      y:{stacked:true,min:0,
        ticks:{color:t3,font:{size:9,family:'JetBrains Mono'},maxTicksLimit:5,callback:v=>v>=1000?(v/1000).toFixed(1)+'k':v},
        grid:{color:lineSoft+'80'},border:{display:false}},
    }
  }});
}

/* CSS var helpers */
function cvar(name){return getComputedStyle(document.body).getPropertyValue(name).trim();}
function sysHex(sysKey){
  const map={kidney:'--kidney',liver:'--liver',blood:'--blood',electrolytes:'--elec'};
  return cvar(map[sysKey])||'#888';
}
function sysSoftHex(sysKey){
  const map={kidney:'--kidney-soft',liver:'--liver-soft',blood:'--blood-soft',electrolytes:'--elec-soft'};
  return cvar(map[sysKey])||'#bbb';
}
function zoneHex(zone){
  const map={normal:'--z-normal',warn:'--z-warn',danger:'--z-danger',critical:'--z-critical'};
  return cvar(map[zone])||'#888';
}

/* Last non-null value in a series — used for score display when recent dates have no labs */
function lastKnown(arr){
  for(let i=arr.length-1;i>=0;i--){if(arr[i]!=null)return arr[i];}
  return null;
}
function lastKnownIdx(arr){
  for(let i=arr.length-1;i>=0;i--){if(arr[i]!=null)return i;}
  return -1;
}
function daysAgo(dateStr){
  const d=new Date(dateStr.replace(/ (AM|PM)$/,'')+', 2026');
  const now=new Date(); now.setHours(0,0,0,0); d.setHours(0,0,0,0);
  return Math.round((now-d)/864e5);
}

/* Status helpers */
function vstatus(v,m){if(v==null||isNaN(v))return'unk';if(v>=m.nL&&v<=m.nH)return'ok';return v>m.nH?'hi':'lo';}
function isTxDriven(mKey){return TX_DIRECT.includes(mKey)&&M[mKey].v.slice(-3).some((_,i)=>TX_IDX.includes(M[mKey].v.length-3+i));}
function trendOf(mKey,m){
  if(m.dial)return'dial';
  if(m.tx||isTxDriven(mKey))return'tx';
  const recent=m.v.filter(v=>v!==null).slice(-5);
  if(recent.length<2)return'hold';
  const{slope}=lr(recent);
  const rng=Math.max(...recent)-Math.min(...recent);
  if(rng===0||Math.abs(slope)<rng*.035)return'hold';
  const cur=recent[recent.length-1];
  const above=cur>m.nH,below=cur<m.nL;
  if(!above&&!below)return'hold';
  if(above&&slope<0)return'imp';
  if(below&&slope>0)return'imp';
  return'watch';
}
function projOf(mKey,m){
  if(m.dial)return{type:'dial',text:t('proj_dial')};
  if(m.tx||isTxDriven(mKey))return{type:'tx',text:t('proj_tx')};
  const clean=m.v.filter(v=>v!==null);
  const cur=clean[clean.length-1];
  if(cur>=m.nL&&cur<=m.nH)return{type:'imp',text:t('proj_norm')};
  const n=Math.min(6,clean.length);
  const{slope,intercept}=lr(clean.slice(-n));
  const above=cur>m.nH,below=cur<m.nL;
  if((above&&slope<0)||(below&&slope>0)){
    const tgt=above?m.nH:m.nL;
    const xT=(tgt-intercept)/slope;
    const days=Math.ceil(xT-(n-1));
    if(days>0&&days<=90)return{type:'imp',text:t('proj_imp_pre')+days+t(days===1?'proj_imp_day':'proj_imp_days')+t('proj_imp_post'),days};
  }
  return{type:'watch',text:t('proj_watch')};
}

const charts={};
const sparkCharts={};

Chart.register({id:'zoneBand',beforeDraw(chart){
  const cfg=chart.options.plugins?.zoneBand;if(!cfg)return;
  const{ctx,chartArea:ca,scales:{y}}=chart;if(!ca||!y)return;
  const yL=y.getPixelForValue(cfg.nL),yH=y.getPixelForValue(cfg.nH);
  if(!isFinite(yL)||!isFinite(yH))return;
  const top=Math.min(yL,yH),ht=Math.abs(yL-yH);
  if(!isFinite(top)||!isFinite(ht)||ht<=0)return;
  ctx.save();
  const grad=ctx.createLinearGradient(0,top,0,top+ht);
  grad.addColorStop(0,'rgba(44,138,71,.06)');
  grad.addColorStop(0.5,'rgba(44,138,71,.13)');
  grad.addColorStop(1,'rgba(44,138,71,.06)');
  ctx.fillStyle=grad;
  ctx.fillRect(ca.left,top,ca.right-ca.left,ht);
  ctx.strokeStyle='rgba(44,138,71,.32)';ctx.lineWidth=1;ctx.setLineDash([3,4]);
  [top,top+ht].forEach(yp=>{if(yp>=ca.top-1&&yp<=ca.bottom+1){ctx.beginPath();ctx.moveTo(ca.left,yp);ctx.lineTo(ca.right,yp);ctx.stroke();}});
  ctx.setLineDash([]);ctx.restore();
}});

Chart.register({id:'evtMarkers',afterDraw(chart){
  const cfg=chart.options.plugins?.evtMarkers;if(!cfg?.events?.length)return;
  const{ctx,chartArea:ca,scales:{x}}=chart;if(!ca||!x)return;
  cfg.events.forEach(ev=>{
    const xp=x.getPixelForValue(ev.idx);if(xp<ca.left||xp>ca.right)return;
    ctx.save();
    ctx.strokeStyle=ev.color+'66';ctx.lineWidth=1;ctx.setLineDash([2,3]);
    ctx.beginPath();ctx.moveTo(xp,ca.top+8);ctx.lineTo(xp,ca.bottom);ctx.stroke();ctx.setLineDash([]);
    ctx.fillStyle=ev.color;
    ctx.beginPath();ctx.arc(xp,ca.top+5,5,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#fff';ctx.font='bold 7px JetBrains Mono,monospace';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(ev.label,xp,ca.top+5);
    ctx.restore();
  });
}});

function projLine(mKey,m){
  if(m.dial||m.tx||isTxDriven(mKey))return{pl:[],pd:[]};
  const clean=m.v.filter(v=>v!==null);
  const cur=clean[clean.length-1];
  if(cur>=m.nL&&cur<=m.nH)return{pl:[],pd:[]};
  const n=Math.min(6,clean.length);
  const{slope}=lr(clean.slice(-n));
  const above=cur>m.nH,below=cur<m.nL;
  if((above&&slope>=0)||(below&&slope<=0))return{pl:[],pd:[]};
  const pl=[],pd=[];
  for(let d=1;d<=21;d++){
    const v=cur+slope*d;
    const day=24+d;
    pl.push(day<=30?`Apr ${day}`:`May ${day-30}`);
    pd.push(parseFloat(v.toFixed(2)));
    if((above&&v<=m.nH)||(below&&v>=m.nL))break;
  }
  return{pl,pd};
}

function mkChart(id,mKey){
  const m=M[mKey];if(!m)return;
  const el=document.getElementById(id);if(!el)return;
  if(charts[id]){charts[id].destroy();delete charts[id];}
  const{pl,pd}=projLine(mKey,m);
  const allLabels=[...DATES,...pl];
  const main=[...m.v,...pl.map(()=>null)];
  const projD=[...new Array(m.v.length-1).fill(null),m.v[m.v.length-1],...pd];
  const clean=m.v.filter(v=>v!==null);
  const minV=Math.min(...clean),maxV=Math.max(...clean);
  const isLog=m.log===true;
  let yMin,yMax;
  if(isLog){yMin=Math.max(1,m.nL*.5);yMax=maxV*1.12;}
  else{const pad=(maxV-minV)*.15||maxV*.1;yMin=Math.max(0,minV-pad);yMax=maxV+pad;if(m.nH>yMax)yMax=m.nH*1.1;if(m.nL>0&&m.nL<yMin)yMin=m.nL*.85;}
  const cur=clean[clean.length-1];
  const sysHexC=sysHex(m.sys);
  const sysSoftHexC=sysSoftHex(m.sys);
  const t2=cvar('--t2');
  const t3=cvar('--t3');
  const lineSoft=cvar('--line-soft');

  const events=[];
  if(m.dial)DIAL_IDX.forEach(i=>events.push({idx:i,label:'D',color:cvar('--kidney')}));
  if(m.tx||isTxDriven(mKey))TX_IDX.forEach(i=>events.push({idx:i,label:'T',color:cvar('--blood')}));

  const datasets=[{
    label:m.name,data:main,
    borderColor:sysHexC,backgroundColor:'transparent',
    borderWidth:2,tension:.4,spanGaps:false,
    pointRadius:main.map((v,i)=>v===null?0:i===m.v.length-1?5:2.5),
    pointBackgroundColor:main.map((v,i)=>v===null?'transparent':i===m.v.length-1?sysHexC:cvar('--card')),
    pointBorderColor:sysHexC,pointBorderWidth:2,
    fill:{target:'origin',above:sysSoftHexC+'00',below:sysSoftHexC+'33'},
  }];
  if(pd.length>0){
    // Forecast cone — upper/lower bands
    const slope=Math.abs(pd.length>1?(pd[pd.length-1]-pd[0])/pd.length:0)||0.1;
    const stderr=Math.max(slope*.3,Math.abs(cur)*.05);
    const upper=pd.map((v,i)=>parseFloat((v+stderr*Math.sqrt(i+1)).toFixed(2)));
    const lower=pd.map((v,i)=>parseFloat((v-stderr*Math.sqrt(i+1)).toFixed(2)));
    const upD=[...new Array(m.v.length).fill(null),...upper];
    const loD=[...new Array(m.v.length).fill(null),...lower];
    datasets.push({
      label:'Upper bound',data:upD,borderColor:'transparent',backgroundColor:sysSoftHexC+'33',
      pointRadius:0,fill:'+1',tension:.3,spanGaps:true,order:5,
    });
    datasets.push({
      label:'Lower bound',data:loD,borderColor:'transparent',backgroundColor:'transparent',
      pointRadius:0,fill:false,tension:.3,spanGaps:true,order:6,
    });
    datasets.push({
      label:'Projected',data:projD,
      borderColor:sysHexC,backgroundColor:'transparent',
      borderWidth:1.5,borderDash:[5,4],tension:.4,spanGaps:true,
      pointRadius:projD.map((v,i)=>v!==null&&i>=m.v.length-1?2:0),
      pointBackgroundColor:cvar('--card'),pointBorderColor:sysHexC,pointBorderWidth:1.5,
      order:1,
    });
  }
  charts[id]=new Chart(el,{type:'line',data:{labels:allLabels,datasets},options:{
    responsive:true,maintainAspectRatio:false,animation:{duration:600},
    interaction:{intersect:false,mode:'index'},
    plugins:{
      legend:{display:false},
      tooltip:{
        backgroundColor:cvar('--ink'),titleColor:cvar('--card'),bodyColor:cvar('--card'),
        titleFont:{family:'Inter Tight',size:11,weight:'600'},bodyFont:{family:'Inter Tight',size:11},padding:8,
        filter:item=>item.dataset.label!=='Upper bound'&&item.dataset.label!=='Lower bound',
        callbacks:{label(ctx){if(ctx.raw==null)return null;const p=ctx.dataset.label==='Projected'?'(forecast) ':'';return`${p}${ctx.raw} ${m.unit}`;}}},
      zoneBand:{nL:m.nL,nH:m.nH},
      evtMarkers:{events},
    },
    scales:{
      x:{ticks:{color:t3,font:{size:9,family:'JetBrains Mono'},maxRotation:45,autoSkip:true,maxTicksLimit:8},grid:{color:lineSoft+'80'},border:{display:false}},
      y:{type:isLog?'logarithmic':'linear',min:yMin,max:yMax,
        ticks:{color:t3,font:{size:9,family:'JetBrains Mono'},maxTicksLimit:4,callback(v){if(v>=1000)return(v/1000).toFixed(1)+'k';return v>=100?Math.round(v):parseFloat(v.toFixed(1));}},
        grid:{color:lineSoft+'80'},border:{display:false}}
    }
  }});
}

/* ═══════════════════════════════════════════════════════════════
   OVERVIEW — ring cards + composite + heatmap-mini + timeline
   ═══════════════════════════════════════════════════════════════ */
let cc=0;
function ringCard(sysKey){
  const s=SYSTEMS[sysKey];
  const avg=COMP_AVG[sysKey];
  const valid=avg.filter(v=>v!=null);
  const curr=valid[valid.length-1]??null;
  const rawValid=COMP_RAW[sysKey].filter(v=>v!=null);
  const currRaw=rawValid[rawValid.length-1]??null;
  const prevRaw=rawValid[rawValid.length-2]??null;
  const delta=(currRaw!=null&&prevRaw!=null)?currRaw-prevRaw:0;
  const sign=delta>.5?'↑':delta<-.5?'↓':'→';
  const dCls=delta>.5?'up':delta<-.5?'dn':'flat';
  const lastIdx=lastKnownIdx(avg);
  const _n=lastIdx>=0?daysAgo(DATES[lastIdx]):null;
  const asOf=_n!=null&&_n>0?` (${_n}d ago)`:``;

  const score=curr!=null?Math.round(curr):0;
  const C=2*Math.PI*30;
  const dash=(score/100)*C;
  const sparkId='spk-'+sysKey;
  setTimeout(()=>{
    const el=document.getElementById(sparkId);
    if(!el)return;
    if(sparkCharts[sysKey])sparkCharts[sysKey].destroy();
    const hex=sysHex(sysKey);
    sparkCharts[sysKey]=new Chart(el,{type:'line',
      data:{labels:DATES,datasets:[
        {data:COMP_RAW[sysKey],borderColor:hex+'40',borderWidth:1,borderDash:[2,2],pointRadius:0,tension:.3,spanGaps:true},
        {data:COMP_AVG[sysKey],borderColor:hex,borderWidth:1.5,pointRadius:0,tension:.35,spanGaps:true,
         backgroundColor:hex+'14',fill:'origin'},
      ]},
      options:{responsive:true,maintainAspectRatio:false,animation:false,
        plugins:{legend:{display:false},tooltip:{enabled:false}},
        scales:{x:{display:false},y:{display:false,min:0,max:100}}}});
  },50);
  return `<div class="ring-card" style="--sys-color:var(--${s.color})" onclick="switchTab('${sysKey}')">
    <div class="ring-top">
      <div class="ring-name">${tSys(sysKey,'name')}</div>
      <div class="ring-badge">${score}/100</div>
    </div>
    <div class="ring-mid">
      <div class="ring-svg">
        <svg viewBox="0 0 72 72">
          <circle class="ring-bg" cx="36" cy="36" r="30" stroke-width="6"></circle>
          <circle class="ring-fg" cx="36" cy="36" r="30" stroke-width="6" stroke-dasharray="${dash} ${C}"></circle>
        </svg>
        <div class="ring-score">
          <div class="ring-num">${score}</div>
          <div class="ring-of">/100</div>
        </div>
      </div>
      <div class="ring-info">
        <div class="ring-status">${tSys(sysKey,'status')}</div>
        <div class="ring-delta flat"><span style="opacity:.7">${_n!=null&&_n>0?t('h_as_of_pre')+_n+t('h_d_ago'):_n===0?t('h_current'):''}</span></div>
      </div>
    </div>
    <div class="ring-spark"><canvas id="${sparkId}"></canvas></div>
  </div>`;
}

let compChart=null;
function renderCompositeAnnotated(){
  const el=document.getElementById('cc-canvas');
  if(!el)return;
  if(compChart){compChart.destroy();compChart=null;}
  const t3=cvar('--t3'),lineSoft=cvar('--line-soft');
  const datasets=[];
  GP_SYS_KEYS.forEach(k=>{
    const hex=sysHex(k);
    const subs=COMP_SUBGROUPS[k]||null;
    if(subs){
      subs.forEach((sub,si)=>{
        datasets.push({label:subLabel(sub)+' (raw)',data:COMP_SUBRAW[k][sub.key],
          borderColor:sub.color+'50',backgroundColor:'transparent',
          borderWidth:1,borderDash:[2,2],pointRadius:0,tension:.3,spanGaps:true,order:20+si});
        datasets.push({label:subLabel(sub),data:COMP_SUBAVG[k][sub.key],
          borderColor:sub.color,backgroundColor:'transparent',
          borderWidth:si===0?2.5:1.8,pointRadius:0,tension:.35,spanGaps:true,order:si});
      });
    } else {
      datasets.push({label:tSys(k,'name')+' (raw)',data:COMP_RAW[k],
        borderColor:hex+'55',backgroundColor:'transparent',
        borderWidth:1,borderDash:[2,2],pointRadius:0,tension:.3,spanGaps:true,order:10});
      datasets.push({label:tSys(k,'name'),data:COMP_AVG[k],
        borderColor:hex,backgroundColor:'transparent',
        borderWidth:2,pointRadius:0,tension:.35,spanGaps:true,order:1});
    }
  });
  // Annotation events
  const annotations=[
    {idx:3,label:'Dialysis',color:cvar('--kidney')},
    {idx:10,label:'Transfusions begin',color:cvar('--blood')},
    {idx:11,label:'Kidney biopsy',color:cvar('--kidney-deep')},
    {idx:12,label:'Prednisone',color:cvar('--liver')},
    {idx:17,label:'ALT normal 🎉',color:cvar('--z-normal')},
  ];
  const _ccRef={current:null};
  compChart=new Chart(el,{type:'line',data:{labels:DATES,datasets},options:{
    responsive:true,maintainAspectRatio:false,animation:{duration:600},
    interaction:{intersect:false,mode:'index'},
    onHover:mkHover(_ccRef),
    plugins:{
      legend:{display:false},
      tooltip:mkTooltip(_ccRef),
    },
    scales:{
      x:{ticks:{color:t3,font:{size:9,family:'JetBrains Mono'},maxRotation:40,autoSkip:true,maxTicksLimit:10},grid:{color:lineSoft+'60'},border:{display:false}},
      y:{min:0,max:110,
        ticks:{color:t3,font:{size:9,family:'JetBrains Mono'},maxTicksLimit:6,callback:v=>v===100?['Normal','100']:v===0?'Critical':v>100?null:v},
        grid:{color:lineSoft+'60'},border:{display:false}},
    },
  },plugins:[{
    id:'annotationLayer',
    beforeDraw(chart){
      const{ctx,chartArea:ca,scales:{y}}=chart;
      const bands=[
        {lo:85,hi:100,color:cvar('--z-normal-bg')},
        {lo:60,hi:85, color:cvar('--z-warn-bg')},
        {lo:30,hi:60, color:cvar('--z-danger-bg')},
        {lo:0, hi:30, color:cvar('--z-critical-bg')},
      ];
      ctx.save();
      ctx.globalAlpha=0.5;
      bands.forEach(b=>{
        const yTop=y.getPixelForValue(b.hi);
        const yBot=y.getPixelForValue(b.lo);
        ctx.fillStyle=b.color;
        ctx.fillRect(ca.left,yTop,ca.right-ca.left,yBot-yTop);
      });
      ctx.restore();
    },
    afterDraw(chart){
      const{ctx,chartArea:ca,scales:{x}}=chart;
      annotations.forEach((a,i)=>{
        const xp=x.getPixelForValue(a.idx);if(xp<ca.left||xp>ca.right)return;
        ctx.save();
        ctx.strokeStyle=a.color+'60';ctx.lineWidth=1;ctx.setLineDash([2,3]);
        ctx.beginPath();ctx.moveTo(xp,ca.top+18);ctx.lineTo(xp,ca.bottom);ctx.stroke();ctx.setLineDash([]);
        // pill at top
        ctx.font='500 9px Inter Tight,sans-serif';
        const tw=ctx.measureText(a.label).width;
        const padX=6,padY=3,h=14;
        const yOff=4+(i%2)*16;
        ctx.fillStyle=a.color;
        ctx.beginPath();
        const x0=xp-tw/2-padX, y0=ca.top-2+yOff, w=tw+padX*2;
        ctx.moveTo(x0+4,y0);ctx.arcTo(x0+w,y0,x0+w,y0+h,4);ctx.arcTo(x0+w,y0+h,x0,y0+h,4);
        ctx.arcTo(x0,y0+h,x0,y0,4);ctx.arcTo(x0,y0,x0+w,y0,4);ctx.closePath();ctx.fill();
        ctx.fillStyle='#fff';ctx.textBaseline='middle';ctx.textAlign='center';
        ctx.fillText(a.label,xp,y0+h/2);
        ctx.restore();
      });
    },
  }]});
}

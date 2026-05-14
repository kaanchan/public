/* ═══════════════════════════════════════════════════════════════
   DATA  —  Apr 8 → May 12, 2026  (36 date points)
   ═══════════════════════════════════════════════════════════════ */
const DATES=['Apr 8','Apr 9','Apr 10 AM','Apr 10 PM','Apr 11','Apr 12','Apr 13','Apr 14','Apr 15','Apr 16','Apr 17','Apr 18','Apr 19','Apr 20','Apr 21','Apr 22','Apr 23','Apr 24','Apr 25','Apr 26','Apr 27','Apr 28','Apr 29','Apr 30','May 1','May 2','May 3','May 4','May 5','May 6','May 7','May 8','May 9','May 10','May 11','May 12'];
const DIAL_IDX=[4,6,8,10,12,14,16,18,21,23,25,28,30,32,35]; // inpatient + outpatient (Apr 28, Apr 30, May 2, May 5, May 7, May 9, May 12)
const DISCHARGE_IDX=18; // Apr 25 — discharged home, outpatient dialysis continues
const TX_IDX=[10,11,12,14];
const TX_DIRECT=['HGB','RBC','HCT'];

const M={
  CREAT:{abbr:'CREAT',unit:'mg/dL',sys:'kidney',nL:0.6,nH:1.2,
    v:[3.6,6.3,4.7,4.37,5.04,7.23,9.32,7.91,9.63,8.37,10.47,12.29,8.99,10.76,12.52,8.72,10.46,6.67,8.76,null,null,9.26,null,null,null,null,null,null,2.56,null,null,null,1.98,null,null,null,null],dir:'lower',dial:true},
  BUN:{abbr:'BUN',unit:'mg/dL',sys:'kidney',nL:7,nH:20,
    v:[31,56,33,30,39,50,63,45,54,35,43,54,36,45,53,31,38,24,35,null,null,28,null,null,null,null,null,null,20,null,null,null,20,null,null,null,null],dir:'lower',dial:true},
  GFR:{abbr:'GFR',unit:'mL/min',sys:'kidney',nL:60,nH:120,
    v:[20,10,15,16,14,9,6,8,6,7,6,5,7,5,5,7,6,10,7,null,null,6.5,null,null,null,null,null,null,30,null,null,null,41,null,null,null,null],dir:'higher',dial:true},
  BUN_CREAT:{abbr:'BUN:Cr',unit:'ratio',sys:'kidney',nL:10,nH:20,
    v:[null,null,null,7,8,7,7,6,6,4,4,4,4,4,4,4,4,6.67,8.76,null,null,3,null,null,null,null,null,null,7.8,null,null,null,10.1,null,null,null,null],dir:'optimal',dial:true},

  AST:{abbr:'AST',unit:'U/L',sys:'liver',nL:10,nH:40,
    v:[5604,5604,5604,3973,2318,901,516,279,170,119,88,68,53,47,39,31,27,23,21,null,null,27,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'lower',log:true,ceil:5604},
  ALT:{abbr:'ALT',unit:'U/L',sys:'liver',nL:7,nH:56,
    v:[3273,3273,3273,3111,2389,1737,1313,873,706,573,462,362,276,229,174,155,85,19,7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'lower',log:true,ceil:3273},
  ALKP:{abbr:'ALP',unit:'U/L',sys:'liver',nL:44,nH:147,
    v:[236,272,310,356,320,275,254,213,172,165,152,140,130,117,104,100,102,96,91,null,null,94,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'lower'},
  BILT:{abbr:'BILI',unit:'mg/dL',sys:'liver',nL:0.2,nH:1.2,
    v:[2.4,3.7,4.0,4.0,3.5,3.2,2.7,1.9,1.4,1.2,1.0,0.9,0.8,0.7,0.7,0.7,0.6,0.6,0.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'lower'},
  ALB:{abbr:'ALB',unit:'g/dL',sys:'liver',nL:3.5,nH:5.0,
    v:[3.5,2.4,2.4,2.4,2.0,2.5,2.4,2.3,2.3,2.3,2.3,2.3,2.1,2.3,2.3,2.4,2.6,2.3,2.4,null,null,3.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'higher'},
  TPROT:{abbr:'T.PROT',unit:'g/dL',sys:'liver',nL:6.0,nH:8.5,
    v:[6.5,5.2,4.9,4.9,4.4,4.5,4.5,4.6,4.7,4.8,4.9,4.9,4.7,4.7,4.4,4.9,5.1,4.8,4.9,null,null,5.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'higher'},

  WBC:{abbr:'WBC',unit:'K/µL',sys:'blood',nL:4.5,nH:11.0,
    v:[0.67,0.97,1.61,1.5,1.4,2.0,3.0,5.0,5.5,6.0,6.2,8.4,7.4,7.5,7.3,5.6,8.0,6.5,7.8,null,null,7.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'higher'},
  HGB:{abbr:'HGB',unit:'g/dL',sys:'blood',nL:13.5,nH:17.5,
    v:[12.2,11.3,11.4,11.4,10.2,9.5,9.8,8.5,7.3,7.2,6.9,7.4,6.3,7.0,7.4,7.5,7.4,7.2,7.4,null,null,8.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'higher',tx:true},
  PLT:{abbr:'PLT',unit:'K/µL',sys:'blood',nL:150,nH:400,
    v:[89,73,77,82,65,65,79,112,139,187,193,233,232,210,195,205,191,161,150,null,null,174,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'higher'},
  RBC:{abbr:'RBC',unit:'M/µL',sys:'blood',nL:4.5,nH:5.5,
    v:[4.0,3.62,3.69,3.74,3.34,3.07,3.22,2.83,2.39,2.37,2.29,2.46,2.07,2.37,2.54,2.49,2.51,2.43,2.45,null,null,2.78,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'higher',tx:true},
  HCT:{abbr:'HCT',unit:'%',sys:'blood',nL:41,nH:53,
    v:[34.6,30.5,31.0,31.8,28.8,26.3,27.1,23.5,20.5,20.8,20.2,21.2,18.1,19.8,21.6,21.3,21.8,21.2,21.3,null,null,25.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'higher',tx:true},
  RDW:{abbr:'RDW',unit:'%',sys:'blood',nL:11.5,nH:14.5,
    v:[11.3,11.2,11.1,11.7,11.7,11.9,11.4,11.6,12.3,12.5,12.4,13.0,13.0,14.5,14.0,14.3,14.2,14.2,14.3,null,null,15.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'optimal'},

  NA:{abbr:'Na',unit:'mmol/L',sys:'electrolytes',nL:136,nH:145,
    v:[119,115,127,132,134,132,133,137,138,136,134,131,133,127,129,131,132,135,130,null,null,134,null,null,null,null,null,null,139,null,null,null,135,null,null,null,null],dir:'optimal'},
  K:{abbr:'K',unit:'mmol/L',sys:'electrolytes',nL:3.5,nH:5.0,
    v:[4.1,5.1,4.9,4.6,4.4,4.2,4.1,3.6,4.1,4.1,4.0,4.3,4.1,4.2,4.3,4.5,4.8,4.4,4.1,null,null,4.2,null,null,null,null,null,null,3.8,null,null,null,4.0,null,null,null,null],dir:'optimal'},
  CL:{abbr:'Cl',unit:'mmol/L',sys:'electrolytes',nL:98,nH:106,
    v:[86,80,88,96,96,92,93,98,98,96,94,94,96,92,95,98,96,98,93,null,null,95,null,null,null,null,null,null,101,null,null,null,97,null,null,null,null],dir:'optimal'},
  CO2:{abbr:'CO₂',unit:'mmol/L',sys:'electrolytes',nL:23,nH:29,
    v:[23,18,28,27,26,25,23,25,24,27,26,24,27,24,23,25,25,30,27,null,null,26,null,null,null,null,null,null,27,null,null,null,26,null,null,null,null],dir:'optimal'},
  ANION:{abbr:'AG',unit:'mmol/L',sys:'electrolytes',nL:8,nH:12,
    v:[10,17,10.6,13.6,16.4,19.2,21.1,17.6,20.1,17.1,18.0,17.3,14.1,15.2,15.3,12.5,15.8,11.4,14.1,null,null,13,null,null,null,null,null,null,11,null,null,null,12,null,null,null,null],dir:'lower'},
  GLU:{abbr:'GLU',unit:'mg/dL',sys:'electrolytes',nL:70,nH:100,
    v:[101,133,112,127,181,116,108,104,108,90,91,87,91,94,85,122,109,87,82,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'optimal'},
  CA:{abbr:'Ca',unit:'mg/dL',sys:'electrolytes',nL:8.5,nH:10.5,
    v:[7.9,6.6,7.2,7.3,6.6,6.9,6.8,7.2,7.0,7.3,7.1,7.2,7.2,7.2,7.2,7.7,7.9,7.6,8.0,null,null,8.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],dir:'optimal'},
};

const SYSTEMS={
  kidney:{color:'kidney',markers:['UO','GFR','BUN','CREAT','BUN_CREAT']},
  liver:{color:'liver',markers:['AST','ALT','ALKP','BILT','ALB','TPROT']},
  blood:{color:'blood',markers:['WBC','HGB','PLT','RBC','HCT','RDW']},
  electrolytes:{color:'elec',markers:['NA','K','CL','CO2','ANION','GLU','CA']},
};

// UO — first independent kidney signal; returned Apr 25, now well above normal range
M.UO={abbr:'UO',unit:'mL/day',sys:'kidney',nL:800,nH:2000,noProj:true,
  v:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,445,605,895,1055,1490,1995,2140,3330,3205,3150,3810,2310,3000,1800,2815,1595,2850,null,null],dir:'higher'};

// Trim all marker arrays to DATES length so adding dates never leaves orphan nulls
Object.values(M).forEach(m=>{if(m.v)m.v.length=DATES.length;});

// Individual void events for stacked-bar chart (51 events, Apr 25–May 3)
// Each entry: [dayIndex (0=Apr 25 … 8=May 3), timeHHMM, volumeMl]
const UO_EVENT_LABELS=['Apr 25','Apr 26','Apr 27','Apr 28','Apr 29','Apr 30','May 1','May 2','May 3','May 4','May 5','May 6','May 7','May 8','May 9','May 10','May 11'];
const UO_EVENTS=[
  [0,'21:30',445],
  [1,'08:40',240],[1,'18:37',240],[1,'22:11',125],
  [2,'08:59',425],[2,'11:44',80],[2,'16:50',180],[2,'20:13',170],[2,'21:35',40],
  [3,'02:57',275],[3,'09:56',350],[3,'11:13',50],[3,'18:54',320],[3,'20:49',50],[3,'21:08',10],
  [4,'02:50',390],[4,'06:42',260],[4,'07:35',25],[4,'13:29',320],[4,'15:30',110],[4,'19:35',275],[4,'21:32',100],[4,'21:53',10],
  [5,'04:50',660],[5,'07:25',225],[5,'09:47',240],[5,'11:31',90],[5,'18:38',640],[5,'21:43',130],[5,'22:08',10],
  [6,'02:56',550],[6,'08:18',520],[6,'12:45',280],[6,'15:11',240],[6,'17:30',200],[6,'19:14',200],[6,'21:38',150],
  [7,'02:29',750],[7,'07:14',680],[7,'09:08',250],[7,'11:19',120],[7,'13:39',350],[7,'16:51',790],[7,'21:17',300],[7,'22:07',90],
  [8,'01:56',800],[8,'04:26',430],[8,'07:30',575],[8,'09:50',400],[8,'14:37',575],[8,'21:00',200],[8,'22:08',225],
  [9,'01:53',875],[9,'04:39',675],[9,'06:53',450],[9,'08:42',150],[9,'09:25',100],[9,'15:52',350],[9,'18:41',200],[9,'22:05',275],[9,'22:52',75],
  [10,'00:49',630],[10,'03:32',120],[10,'05:50',825],[10,'08:40',693],[10,'13:45',512],[10,'18:45',880],[10,'21:27',80],[10,'22:47',20],[10,'23:32',50],
  [11,'02:00',700],[11,'06:56',775],[11,'10:32',225],[11,'14:15',260],[11,'19:21',300],[11,'20:36',50],
  [12,'00:25',690],[12,'05:47',690],[12,'08:36',425],[12,'13:30',175],[12,'18:45',940],[12,'21:39',80],
  [13,'05:59',925],[13,'10:16',425],[13,'17:06',225],[13,'23:01',225],
  [14,'03:06',950],[14,'07:02',525],[14,'10:07',250],[14,'13:21',290],[14,'18:37',700],[14,'20:24',50],[14,'23:10',50],
  [15,'03:49',625],[15,'08:42',620],[15,'16:07',150],[15,'22:39',200],
  [16,'03:37',825],[16,'07:11',625],[16,'10:54',400],[16,'14:03',590],[16,'21:38',410],
];

const TIMELINE=[
  {d:'Apr 8', tags:['blood','kidney'],t:'Admitted. White cells very low, sodium 115, liver enzymes rising, creatinine elevated.'},
  {d:'Apr 11',tags:['kidney','procedure'],t:'Bladder irrigation. CT scan. Dialysis initiated — kidneys at 5% filtration.'},
  {d:'Apr 13',tags:['procedure','kidney'],t:'PT/OT begins. Second dialysis session.'},
  {d:'Apr 15',tags:['kidney'],t:'Dialysis session.'},
  {d:'Apr 16',tags:['procedure'],t:'Urinary catheter removed at KA\'s request.'},
  {d:'Apr 17',tags:['kidney','blood'],t:'Dialysis session. First blood transfusion.'},
  {d:'Apr 18',tags:['kidney','blood','procedure'],t:'Kidney biopsy. Chest X-ray (clear). Second transfusion.'},
  {d:'Apr 19',tags:['blood','kidney'],t:'Third transfusion. Dialysis session. Prednisone started.'},
  {d:'Apr 20',tags:['procedure','kidney'],t:'Bladder camera, clot removal. Chest catheter placed for outpatient dialysis.'},
  {d:'Apr 21',tags:['blood'],t:'Fourth blood transfusion.'},
  {d:'Apr 22',tags:['procedure'],t:'Bladder flush, internal scope. Chest catheter confirmed for outpatient dialysis.'},
  {d:'Apr 23',tags:['procedure','kidney'],t:'Foley catheter removed. Dialysis session. Amoxicillin continues.'},
  {d:'Apr 24',tags:['liver','milestone'],t:'ALT enters normal range — both AST and ALT now fully normal. Liver injury phase complete. 🎉 Post-dialysis creatinine 6.67 (lowest since week 1). GFR of 10 (highest post-dialysis in two weeks).'},
  {d:'Apr 25',tags:['kidney','milestone'],t:'🏡 Discharged home. Outpatient dialysis continues. First independent urine output recorded: 445 mL. ALT confirmed below detection threshold. Platelets touch 150 — lower edge of normal.'},
  {d:'Apr 26',tags:['kidney'],t:'Urine output 605 mL — rising.'},
  {d:'Apr 27',tags:['kidney'],t:'Urine output 895 mL — crossed the 800 mL/day normal floor.'},
  {d:'Apr 28',tags:['kidney','procedure'],t:'First outpatient dialysis at Ascend Clinical. 242 min, 2.9 L removed. Pre 81.0 kg, post 78.0 kg. Kt/V 1.12, URR 61% — first-session calibration. Urine output 1,055 mL.'},
  {d:'Apr 29',tags:['kidney'],t:'Urine output 1,490 mL — continuing to rise strongly.'},
  {d:'Apr 30',tags:['kidney','procedure'],t:'Second outpatient dialysis. ~4 hrs, 1.2 L removed. Pre ~77.0 kg, post ~75.5 kg. Urine output 1,995 mL — approaching the 2,000 mL/day normal ceiling.'},
  {d:'May 1', tags:['kidney','milestone'],t:'🎉 Urine output 2,140 mL — first day crossing the 2,000 mL/day normal range. Weight 73.6 kg. Blood pressure 127/79 mmHg.'},
  {d:'May 2', tags:['kidney','procedure'],t:'Third outpatient dialysis. ~2.5 hrs, 0.7 L net removed. Pre ~74.0 kg, post ~72.8 kg. Last standing BP 160/61. Urine output 3,330 mL.'},
  {d:'May 3', tags:['kidney','milestone'],t:'Urine output 3,205 mL — sustained above 3,000 mL/day. Blood pressure 124/75 mmHg. Independent kidney recovery clearly underway.'},
  {d:'May 5', tags:['kidney','procedure'],t:'Fourth outpatient dialysis (Treatment #4) at Ascend Clinical. Creatinine 2.56 — down from 9.26 on Apr 28. BUN 20, within normal range. Kidney recovery accelerating.'},
  {d:'May 7', tags:['kidney','procedure'],t:'Fifth outpatient dialysis (Treatment #5) at Ascend Clinical.'},
  {d:'May 9', tags:['kidney','milestone'],t:'🎉 Sixth outpatient dialysis (Treatment #6). Creatinine 1.98 — down from a peak of 12.52. BUN 20. Kidneys approaching near-normal waste clearance independently.'},
  {d:'May 12',tags:['kidney','procedure'],t:'Seventh outpatient dialysis (Treatment #7) at Ascend Clinical. 24-hour urine collection submitted — results pending, will directly quantify independent kidney output.'},
];

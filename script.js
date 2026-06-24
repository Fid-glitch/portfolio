document.getElementById('yr').textContent = new Date().getFullYear();

/* ══════════════════════════════════════════════════════
   PATH HELPER — THE ONLY ENCODING RULE THAT MATTERS:
   Spaces → %20. Everything else (apostrophes, parentheses,
   ampersands, dots, dashes) stays LITERAL so the browser
   finds files exactly as they are named on disk.
   
   Your folder is called "assests" (not "assets") — that
   spelling is used throughout. Change ASSET_ROOT if you
   ever rename it.
══════════════════════════════════════════════════════ */
function p(path){
  return path.split('/').map(s => s.replace(/ /g,'%20')).join('/');
}

const ASSET_ROOT = 'assests'; // ← exact folder name on disk

/* ════ PROJECT DATA ════ */
const PROJECT_DATA = [
  {
    featured:true, tag:'team', tagLabel:'Team Project',
    role:'Lead Developer & Interface Designer',
    title:'Neural NFT Validator',
    desc:'Detecting NFT plagiarism using image similarity and deep learning. Led implementation and testing; designed the web interface for similarity scores, top matches, and risk verdicts.',
    accent:'AI',
    media:[
      { type:'video', src:p(`${ASSET_ROOT}/videos/neuralnftvalidator.mp4`), label:'Demo' },
    ],
  },
  { tag:'solo', tagLabel:'Individual', role:'UI/UX Design Concept', title:'Figma Focus Timer', desc:'A calm, distraction-free focus timer screen. Explored layout, hierarchy, and colour to create a clean productivity interface with clear controls and session tracking.', accent:'UX', media:[] },
  { tag:'solo', tagLabel:'Individual', role:'Python Tool', title:'Image-to-GIF Converter', desc:'A Python project converting images into GIF-style outputs. Reflects interest in playful utility tools and experimenting with visual outputs through code.', accent:'Py', media:[] },
  { tag:'team', tagLabel:'Team Project', role:'UI Contributor — Android Dev', title:'Jyothi 360', desc:'A college utility app for academic resources. Contributed to UI design and feature implementation during Android development internship.', accent:'📱', media:[] },
  { tag:'hack', tagLabel:'Hackathon', role:'API & Alert System Contributor', title:'SafeTrack', desc:'Live weather forecasting and disaster alert system built at NASA Space Apps Challenge. Integrated weather APIs and shaped the alert logic for real-time notifications.', accent:'⚡', media:[] },
];

/* ════ POSTER DATA
   src = exact relative path to the file, spaces only encoded as %20.
   The browser needs the path to match the filename exactly.
════ */
const POSTER_DATA = [
  { src:p(`${ASSET_ROOT}/posters/INNOVISTA'26.jpg`),                                        label:"Innovista '26",       sub:'Event Poster',          type:'event',    bg:'#070d1c', accent:'#60a8ff' },
  { src:p(`${ASSET_ROOT}/posters/UNION DAY UNION DAY.jpg`),                                 label:'Union Day',           sub:'College Event',         type:'event',    bg:'#0c0816', accent:'#a78bfa' },
  { src:p(`${ASSET_ROOT}/posters/Hackathena.jpg`),     label:"HackAthena '26",      sub:'Coming Soon',           type:'event',    bg:'#060e14', accent:'#38bdf8' },
  { src:p(`${ASSET_ROOT}/posters/CSE Banner for techfest.png`),                             label:'Tech Fest',           sub:'CSE Department Banner', type:'event',    bg:'#0c0816', accent:'#a78bfa' },
  { src:p(`${ASSET_ROOT}/posters/laser tag.png`),                                           label:'Laser Tag',           sub:'Event Poster',          type:'event',    bg:'#060e0a', accent:'#60a8ff' },
  { src:p(`${ASSET_ROOT}/posters/live talk show.png`),                                      label:'Live Talk Show',      sub:'Event Poster',          type:'event',    bg:'#100810', accent:'#f472b6' },
  { src:p(`${ASSET_ROOT}/posters/ILLUMINATE 2.0.png`),                                      label:'Illuminate 2.0',      sub:'Event Poster',          type:'event',    bg:'#070d1c', accent:'#38bdf8' },
  { src:p(`${ASSET_ROOT}/posters/green porsche.png`),                                       label:'Green Porsche',       sub:'Poster Design',         type:'personal', bg:'#04100e', accent:'#60a8ff' },
  { src:p(`${ASSET_ROOT}/posters/The BMW M3 GTR (E46).jpg`),                                label:'BMW M3 GTR (E46)',    sub:'Car Photography',       type:'personal', bg:'#0c0816', accent:'#a78bfa' },
  { src:p(`${ASSET_ROOT}/posters/SUPRA.jpg`),                                               label:'Supra',               sub:'Car Photography',       type:'personal', bg:'#060e14', accent:'#38bdf8' },
  { src:p(`${ASSET_ROOT}/posters/&brie.png`),                                               label:'&brie',               sub:'Car Photography',       type:'personal', bg:'#100810', accent:'#f472b6' },
  { src:p(`${ASSET_ROOT}/posters/defender.jpg`),                 label:'Defender',  sub:'Car Photography',       type:'personal', bg:'#060e0a', accent:'#60a8ff' },
  { src:p(`${ASSET_ROOT}/posters/GOLF.jpg`),                                                label:'Golf',                sub:'Car Photography',       type:'personal', bg:'#100c04', accent:'#a78bfa' },
  { src:p(`${ASSET_ROOT}/posters/BMW.jpg`),                                                 label:'BMW',                 sub:'Car Photography',       type:'personal', bg:'#070d1c', accent:'#60a8ff' },
];

/* ════ CERTIFICATE DATA ════ */
const CERT_DATA = [
  {
    cls:'', issuer:'ICT Academy', name:'Android Development',
    meta:'Internship Completion · 2024', note:'Built Jyothi 360 app with my team ✦',
    stroke:'rgba(96,168,255,.8)',
    files:[{ type:'pdf', src:p(`${ASSET_ROOT}/certificates/Android_App_Development-AT_AI_IN_AAD_02_JULY_2024_BATCH_01_GROUP_CERTIFICATE_17696.pdf`), label:'Certificate' }],
  },
  {
    cls:'c2', issuer:"NEC '25", name:'National Entrepreneurship Challenge',
    meta:'E-Cell JEC — IIT Bombay · 8th Rank Nationally', note:'CTO of the team ✦',
    stroke:'rgba(167,139,250,.8)',
    files:[
      { type:'pdf', src:p(`${ASSET_ROOT}/certificates/Certificate of Fidha Farook.pdf`), label:'Certificate' },
      { type:'pdf', src:p(`${ASSET_ROOT}/certificates/NEC JEC CERT.pdf`), label:'Team Certificate' },
    ],
  },
  {
    cls:'c3', issuer:'EDD — IIT Madras', name:'Entrepreneurship & Development Drive',
    meta:'IIT Madras · 7th Rank', note:'Designer of the team ✦',
    stroke:'rgba(56,189,248,.8)',
    files:[
      { type:'pdf', src:p(`${ASSET_ROOT}/certificates/EDD JEC CERT.pdf`), label:'Team Certificate' },
      { type:'pdf', src:p(`${ASSET_ROOT}/certificates/EDD.pdf`), label:'Certificate' },
    ],
  },
  {
    cls:'c4', issuer:'Coursera — Google UX', name:'Foundations of UX Design',
    meta:'Figma · Layout · Hierarchy · Color', note:'Always learning ✦',
    stroke:'rgba(244,114,182,.8)',
    files:[{ type:'pdf', src:p(`${ASSET_ROOT}/certificates/Coursera Foundation of UX Design.pdf`), label:'Certificate' }],
  },
  {
    cls:'c5', issuer:'Brand Buzz', name:'Graphic Design Competition',
    meta:'College Event · Design Track', note:'Competed in poster & branding design ✦',
    stroke:'rgba(167,139,250,.8)',
    files:[
      { type:'pdf', src:p(`${ASSET_ROOT}/certificates/BRAND BUZZ 2025 CERTIFICATES - BRAND BUZZ 2025 CERTIFICATES.pdf`), label:'Participation' }
    ],
  },
  {
    cls:'c6', issuer:'NASA Space Apps', name:'Hackathon Participation',
    meta:'Offline Event · SafeTrack Team', note:'Real-world problem → real solution ✦',
    stroke:'rgba(255,202,244,.85)',
    files:[{ type:'pdf', src:p(`${ASSET_ROOT}/certificates/NasaSpaceApp-participant_certificate.pdf`), label:'Certificate' }],
  },
];

const FORAGE_DATA = [
  {
    cls:'', issuer:'Forage — Deloitte', name:'Data Analytics Job Simulation',
    meta:'Virtual Work Experience', note:'Hands-on simulation of real industry tasks ✦',
    stroke:'rgba(96,168,255,.8)',
    files:[{ type:'pdf', src:p(`${ASSET_ROOT}/certificates/deloittedataanalyticsjob_completion_certificate.pdf`), label:'Certificate' }],
  },
  {
    cls:'c3', issuer:'Forage — EY', name:'Tech Risk Job Simulation',
    meta:'Virtual Work Experience', note:'Applied risk & technology consulting tasks ✦',
    stroke:'rgba(56,189,248,.8)',
    files:[{ type:'pdf', src:p(`${ASSET_ROOT}/certificates/EY_TechRisk-certificate.pdf`), label:'Certificate' }],
  },
  {
    cls:'c4', issuer:'Forage', name:'AI in Action Job Simulation',
    meta:'Virtual Work Experience', note:'Explored practical AI use cases ✦',
    stroke:'rgba(244,114,182,.8)',
    files:[{ type:'pdf', src:p(`${ASSET_ROOT}/certificates/AI_inAction-certificate.pdf`), label:'Certificate' }],
  },
];

const COURSERA_PROJECT_DATA = [
  {
    cls:'c2', issuer:'Coursera', name:'Introduction to Data Analysis using Microsoft Excel',
    meta:'Guided Project', note:'Applied learning through a real project ✦',
    stroke:'rgba(167,139,250,.8)',
    files:[{ type:'pdf', src:p(`${ASSET_ROOT}/certificates/Coursera Introduction to Data Analysis using Microsoft Excel.pdf`), label:'Certificate' }],
  },
  {
    cls:'c3', issuer:'Coursera', name:'Build a Free Website with WordPress',
    meta:'Guided Project', note:'Applied learning through a real project ✦',
    stroke:'rgba(56,189,248,.8)',
    files:[{ type:'pdf', src:p(`${ASSET_ROOT}/certificates/Coursera Build a free website with WordPress.pdf`), label:'Certificate' }],
  },
  {
    cls:'c4', issuer:'Coursera', name:'Getting Started with Microsoft Excel',
    meta:'Guided Project', note:'Applied learning through a real project ✦',
    stroke:'rgba(244,114,182,.8)',
    files:[{ type:'pdf', src:p(`${ASSET_ROOT}/certificates/Coursera Getting Started with Microsoft Excel.pdf`), label:'Certificate' }],
  },
];

/* ════ BUILD PROJECT GRID ════ */
(function(){
  const grid = document.getElementById('projects-grid');
  const playIcon  = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  const stackIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="13" height="13" rx="2"/><path d="M9 16v2a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/></svg>`;
  const tagClass = { team:'tag-team', solo:'tag-solo', hack:'tag-hack' };

  PROJECT_DATA.forEach((proj, i) => {
    const hasMedia = proj.media && proj.media.length > 0;
    const card = document.createElement('div');
    card.className = `project-card${proj.featured?' featured':''} reveal${hasMedia?'':' no-media'}`;
    card.style.transitionDelay = (i*0.07)+'s';
    const mc = hasMedia ? proj.media.length : 0;
    const badge = mc>1 ? `<span class="media-count-badge">${stackIcon}${mc}</span>` : '';
    const hint = hasMedia
      ? `<div class="project-video-hint">${playIcon}${mc>1?'View Demo &amp; Screens':'Watch Demo'}</div>`
      : `<div class="project-video-hint" style="opacity:.45">Demo coming soon</div>`;
    card.innerHTML = `${badge}<span class="project-tag ${tagClass[proj.tag]}">${proj.tagLabel}</span><p class="project-role">${proj.role}</p><h3 class="project-title">${proj.title}</h3><p class="project-desc">${proj.desc}</p>${hint}<div class="project-accent">${proj.accent}</div>`;
    if(hasMedia){
      card.setAttribute('role','button'); card.setAttribute('tabindex','0');
      const open = () => openGallery(proj.media, proj.title);
      card.addEventListener('click', open);
      card.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' ') open(); });
    }
    grid.appendChild(card);
  });
})();

/* ════ BUILD POSTER GRID ════ */
(function(){
  const grid = document.getElementById('poster-grid');
  const hintSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M10 14L21 3M9 3H3v18h18v-6"/></svg>`;

  POSTER_DATA.forEach((poster, i) => {
    const card = document.createElement('div');
    card.className = 'poster-card reveal';
    card.style.transitionDelay = (i*0.06)+'s';
    card.setAttribute('role','button'); card.setAttribute('tabindex','0');

    const badge = `<span class="poster-type-badge">${poster.type==='event'?'Event':'Personal'}</span>`;

    /* Try loading the image. On success → show it and enable click.
       On failure → show placeholder (no click / cursor:default).     */
    const img = new Image();

    img.onload = () => {
      card.innerHTML = `${badge}<div class="poster-img-wrap"><img src="${poster.src}" alt="${poster.label}" loading="lazy"></div><div class="poster-hover-label">${hintSVG}${poster.label}</div>`;
      card.addEventListener('click', () => openGallery([{type:'image', src:poster.src, label:poster.label}], poster.label));
      card.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' ') openGallery([{type:'image',src:poster.src,label:poster.label}],poster.label); });
    };

    img.onerror = () => {
      card.classList.add('no-img');
      card.style.cursor = 'default';
      card.innerHTML = `${badge}<div class="poster-mock" style="background:${poster.bg}"><div class="poster-shape" style="width:160px;height:160px;background:${poster.accent};top:-40px;right:-40px"></div><p class="poster-text">${poster.label}</p><p class="poster-sub-label">${poster.sub}</p></div>`;
    };

    img.src = poster.src;
    grid.appendChild(card);
  });
})();

/* ════ BUILD CERT GRIDS ════ */
function renderCertGrid(gridId, data, withPlaceholder){
  const grid = document.getElementById(gridId);
  if(!grid) return;
  const ribbonSVG = s => `<svg viewBox="0 0 24 24" fill="none" stroke="${s}" stroke-width="1.5"><circle cx="12" cy="8" r="6"/><path d="M9 12l-4 9 7-3 7 3-4-9"/></svg>`;
  const viewIcon  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M10 14L21 3M9 3H3v18h18v-6"/></svg>`;
  const stackIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="13" height="13" rx="2"/><path d="M9 16v2a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/></svg>`;

  data.forEach((c, i) => {
    const card = document.createElement('div');
    card.className = `cert-card ${c.cls} reveal`;
    card.style.transitionDelay = (i*0.08)+'s';
    card.setAttribute('role','button'); card.setAttribute('tabindex','0');
    const rb = c.stroke.replace(/[\d.]+\)$/,'0.1)');
    const rbBord = c.stroke.replace(/[\d.]+\)$/,'0.2)');
    const fc = c.files.length;
    const badge = fc>1 ? `<span class="media-count-badge" style="top:18px;right:58px">${stackIcon}${fc}</span>` : '';
    card.innerHTML = `${badge}<div class="cert-ribbon" style="background:${rb};border-color:${rbBord}">${ribbonSVG(c.stroke)}</div><p class="cert-issuer">${c.issuer}</p><h3 class="cert-name">${c.name}</h3><p class="cert-meta">${c.meta}</p><p class="cert-note">${c.note}</p><span class="cert-view-hint">${viewIcon} ${fc>1?`View ${fc} Certificates`:'View Certificate'}</span>`;
    const open = () => openGallery(c.files, c.name);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' ') open(); });
    grid.appendChild(card);
  });

  if(withPlaceholder){
    const ph = document.createElement('div');
    ph.className='cert-card reveal';
    ph.style.cssText='border-style:dashed;opacity:.4;cursor:default;transition-delay:'+(data.length*0.08)+'s';
    ph.innerHTML=`<p class="cert-issuer" style="color:var(--text-dim)">Coming Soon</p><h3 class="cert-name" style="color:var(--text-dim)">More Certifications</h3><p class="cert-meta" style="color:var(--text-dim)">Currently pursuing ···</p><p class="cert-note" style="color:var(--text-dim)">Watch this space ✦</p>`;
    grid.appendChild(ph);
  }
}

renderCertGrid('cert-grid', CERT_DATA, true);
renderCertGrid('forage-grid', FORAGE_DATA, true);
renderCertGrid('coursera-projects-grid', COURSERA_PROJECT_DATA, true);

/* ════ LIGHTBOX ════ */
const lb      = document.getElementById('lightbox');
const lbInner = document.getElementById('lightbox-inner');
const lbClose = document.getElementById('lightbox-close');

function closeLightbox(){
  lb.classList.remove('open');
  lbInner.innerHTML='';
  document.body.style.overflow='';
}
lbClose.addEventListener('click', closeLightbox);
lb.addEventListener('click', e => { if(e.target===lb) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key==='Escape') closeLightbox(); });

const iconFor = t => {
  if(t==='video') return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
  if(t==='pdf')   return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>`;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`;
};

function renderMedia(item){
  /* "Open in new tab" shown under every item so user can always access the file */
  const fallback = `<a class="lb-open-link" href="${item.src}" target="_blank" rel="noopener">Open in new tab ↗</a>`;

  if(item.type==='video') return `<div class="lightbox-video"><video controls autoplay playsinline preload="metadata"><source src="${item.src}" type="video/mp4"></video></div>${fallback}`;
  if(item.type==='pdf')   return `<div class="lightbox-pdf"><iframe src="${item.src}" title="${item.label}"></iframe></div>${fallback}`;
  return `<img class="lightbox-img" src="${item.src}" alt="${item.label}">${fallback}`;
}

function showLoadError(item){
  const wrap = lbInner.querySelector('.lightbox-pdf, .lightbox-video, .lightbox-img');
  if(!wrap) return;
  const errHTML = `<div class="lightbox-error"><strong>⚠ File not found</strong><div class="err-path">${decodeURIComponent(item.src)}</div><span>Check that the file exists at this exact path. Filenames are case-sensitive — spaces, apostrophes, parentheses must match exactly.</span></div>`;
  wrap.outerHTML = errHTML;
}

function openGallery(items, groupLabel){
  let active = 0;

  function paint(){
    const item = items[active];
    const tabs = items.length > 1
      ? `<div class="lightbox-thumbs">${items.map((it,idx)=>`<button class="lightbox-thumb${idx===active?' active':''}" data-idx="${idx}">${iconFor(it.type)}${it.label}</button>`).join('')}</div>`
      : '';

    lbInner.innerHTML = renderMedia(item)
      + `<p class="lightbox-label">${groupLabel}${items.length>1?' — '+item.label:''}</p>`
      + tabs;

    /* Attach error handlers so user gets a helpful message, not a broken frame */
    const vid = lbInner.querySelector('video');
    if(vid){ vid.addEventListener('error', ()=>showLoadError(item), {once:true}); const src=vid.querySelector('source'); if(src) src.addEventListener('error',()=>showLoadError(item),{once:true}); }
    const img = lbInner.querySelector('img.lightbox-img');
    if(img) img.addEventListener('error', ()=>showLoadError(item), {once:true});

    lbInner.querySelectorAll('.lightbox-thumb').forEach(btn => {
      btn.addEventListener('click', e => { e.stopPropagation(); active=parseInt(btn.dataset.idx,10); paint(); });
    });
  }

  paint();
  lb.classList.add('open');
  document.body.style.overflow='hidden';
}

/* ════ SPACE CANVAS ════ */
(function(){
  const canvas=document.getElementById('space-canvas'), ctx=canvas.getContext('2d');
  let W,H,stars,nebulas,constellations,shootingStars,moonX,moonY,moonR;
  const planets=[];
  const rand=(a,b)=>a+Math.random()*(b-a);
  const randInt=(a,b)=>Math.floor(rand(a,b+1));

  function resize(){
    W=canvas.width=window.innerWidth;
    H=canvas.height=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,window.innerHeight);
    init();
  }
  function init(){
    const N=Math.floor((W*H)/4200);
    stars=Array.from({length:N},()=>({x:rand(0,W),y:rand(0,H),r:rand(0.3,2.2),alpha:rand(0.2,1),twinkleSpeed:rand(0.004,0.018),twinkleOffset:rand(0,Math.PI*2),color:['rgba(255,255,255,','rgba(180,210,255,','rgba(200,190,255,','rgba(150,220,255,','rgba(255,230,200,'][randInt(0,4)]}));
    nebulas=Array.from({length:7},()=>({x:rand(0,W),y:rand(0,H),rx:rand(80,300),ry:rand(60,200),color:[[96,168,255],[167,139,250],[56,189,248],[244,114,182],[80,120,200]][randInt(0,4)],alpha:rand(0.016,0.055),rotation:rand(0,Math.PI)}));
    const makeC=(cx,cy,n)=>{const pts=Array.from({length:n},()=>({x:cx+rand(-120,120),y:cy+rand(-80,80)}));const lines=[];for(let i=0;i<pts.length-1;i++){if(Math.random()>.3)lines.push([i,i+1]);if(i>0&&Math.random()>.6)lines.push([i,randInt(0,i-1)])}return{pts,lines}};
    constellations=[];const cols=Math.ceil(W/500),rows=Math.ceil(H/500);
    for(let c=0;c<cols;c++)for(let r=0;r<rows;r++){if(Math.random()>0.45)continue;constellations.push(makeC((c+0.5)*(W/cols),(r+0.5)*(H/rows),randInt(4,8)))}
    shootingStars=[];
    moonX=W*rand(0.72,0.85);moonY=H*rand(0.03,0.10);moonR=rand(38,52);
    planets.length=0;
    const pd=[{color:'#2a4a7a',ring:true,ringColor:'rgba(96,168,255,0.22)',size:rand(20,30)},{color:'#4a2a5a',ring:false,ringColor:'',size:rand(11,17)},{color:'#1a4a4a',ring:false,ringColor:'',size:rand(7,12)},{color:'#6a3a2a',ring:true,ringColor:'rgba(244,114,182,0.18)',size:rand(15,22)},{color:'#2a3a5a',ring:false,ringColor:'',size:rand(6,10)},{color:'#5a4a2a',ring:false,ringColor:'',size:rand(9,14)},{color:'#3a2a5a',ring:true,ringColor:'rgba(167,139,250,0.2)',size:rand(13,19)}];
    const bandH=H/pd.length;
    pd.forEach((def,i)=>{let x,y,tries=0;do{x=rand(W*0.04,W*0.96);y=bandH*i+rand(bandH*0.1,bandH*0.9);tries++}while(tries<8&&Math.abs(x-moonX)<(moonR+def.size+90)&&Math.abs(y-moonY)<(moonR+def.size+90));planets.push({x,y,r:def.size,color:def.color,ring:def.ring,ringColor:def.ringColor})});
  }
  let t=0;
  const lighten=(h,a)=>{const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return`rgb(${Math.min(255,r+a)},${Math.min(255,g+a)},${Math.min(255,b+a)})`};
  const darken=(h,a)=>{const r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return`rgb(${Math.max(0,r-a)},${Math.max(0,g-a)},${Math.max(0,b-a)})`};
  function spawnShooting(){if(Math.random()>0.011)return;const burst=Math.random()>0.82?2:1;for(let n=0;n<burst;n++){const angle=rand(-0.45,-0.08),speed=rand(3,7);shootingStars.push({x:rand(-100,W+100),y:rand(-50,H*0.55),dx:Math.cos(angle)*speed,dy:Math.sin(angle+0.3)*speed,trailLen:rand(60,150),life:1})}}
  function drawMoon(){
    const glow=ctx.createRadialGradient(moonX,moonY,moonR*0.5,moonX,moonY,moonR*3.5);glow.addColorStop(0,'rgba(200,220,255,0.07)');glow.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=glow;ctx.beginPath();ctx.arc(moonX,moonY,moonR*3.5,0,Math.PI*2);ctx.fill();
    const mg=ctx.createRadialGradient(moonX-moonR*0.25,moonY-moonR*0.2,moonR*0.1,moonX,moonY,moonR);mg.addColorStop(0,'#d0daf0');mg.addColorStop(0.5,'#8090b8');mg.addColorStop(1,'#3a4a6a');ctx.fillStyle=mg;ctx.beginPath();ctx.arc(moonX,moonY,moonR,0,Math.PI*2);ctx.fill();
    const sh=ctx.createRadialGradient(moonX+moonR*0.4,moonY,moonR*0.1,moonX+moonR*0.4,moonY,moonR*1.1);sh.addColorStop(0,'rgba(4,7,15,0.72)');sh.addColorStop(1,'rgba(4,7,15,0)');ctx.fillStyle=sh;ctx.beginPath();ctx.arc(moonX,moonY,moonR,0,Math.PI*2);ctx.fill();
    [[moonX-moonR*0.28,moonY-moonR*0.15,moonR*0.12],[moonX-moonR*0.05,moonY+moonR*0.30,moonR*0.07],[moonX-moonR*0.40,moonY+moonR*0.08,moonR*0.05]].forEach(([cx,cy,cr])=>{ctx.beginPath();ctx.arc(cx,cy,cr,0,Math.PI*2);ctx.fillStyle='rgba(40,55,90,0.35)';ctx.fill()});
  }
  function drawPlanets(){
    planets.forEach(pl=>{
      const g=ctx.createRadialGradient(pl.x,pl.y,pl.r*0.3,pl.x,pl.y,pl.r*2.8);g.addColorStop(0,'rgba(96,140,200,0.08)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(pl.x,pl.y,pl.r*2.8,0,Math.PI*2);ctx.fill();
      const pg=ctx.createRadialGradient(pl.x-pl.r*0.3,pl.y-pl.r*0.3,pl.r*0.05,pl.x,pl.y,pl.r);pg.addColorStop(0,lighten(pl.color,40));pg.addColorStop(0.5,pl.color);pg.addColorStop(1,darken(pl.color,30));ctx.fillStyle=pg;ctx.beginPath();ctx.arc(pl.x,pl.y,pl.r,0,Math.PI*2);ctx.fill();
      if(pl.ring){ctx.save();ctx.translate(pl.x,pl.y);ctx.rotate(0.5);ctx.scale(1,0.32);ctx.beginPath();ctx.arc(0,0,pl.r*2.1,0,Math.PI*2);ctx.arc(0,0,pl.r*1.3,0,Math.PI*2,true);ctx.fillStyle=pl.ringColor;ctx.fill();ctx.restore()}
    });
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    const grad=ctx.createLinearGradient(0,0,W*.6,H);grad.addColorStop(0,'#04070f');grad.addColorStop(0.4,'#060a14');grad.addColorStop(0.7,'#050810');grad.addColorStop(1,'#04070f');ctx.fillStyle=grad;ctx.fillRect(0,0,W,H);
    nebulas.forEach(n=>{ctx.save();ctx.translate(n.x,n.y);ctx.rotate(n.rotation);const g=ctx.createRadialGradient(0,0,0,0,0,n.rx);const[r,g2,b]=n.color;g.addColorStop(0,`rgba(${r},${g2},${b},${n.alpha})`);g.addColorStop(0.5,`rgba(${r},${g2},${b},${n.alpha*.4})`);g.addColorStop(1,'rgba(0,0,0,0)');ctx.scale(1,n.ry/n.rx);ctx.fillStyle=g;ctx.beginPath();ctx.arc(0,0,n.rx,0,Math.PI*2);ctx.fill();ctx.restore()});
    constellations.forEach(c=>{ctx.strokeStyle='rgba(100,160,255,0.08)';ctx.lineWidth=0.6;c.lines.forEach(([a,b])=>{ctx.beginPath();ctx.moveTo(c.pts[a].x,c.pts[a].y);ctx.lineTo(c.pts[b].x,c.pts[b].y);ctx.stroke()});c.pts.forEach(pt=>{ctx.beginPath();ctx.arc(pt.x,pt.y,1.5,0,Math.PI*2);ctx.fillStyle='rgba(160,200,255,0.55)';ctx.fill()})});
    drawPlanets();drawMoon();
    stars.forEach(s=>{const tw=0.5+0.5*Math.sin(t*s.twinkleSpeed+s.twinkleOffset),alpha=s.alpha*(0.5+0.5*tw);ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=s.color+alpha+')';ctx.fill();if(s.r>1.4&&tw>0.7){const glow=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r*5);glow.addColorStop(0,s.color+(alpha*.3)+')');glow.addColorStop(1,'rgba(0,0,0,0)');ctx.beginPath();ctx.arc(s.x,s.y,s.r*5,0,Math.PI*2);ctx.fillStyle=glow;ctx.fill()}});
    spawnShooting();
    for(let i=shootingStars.length-1;i>=0;i--){const s=shootingStars[i];s.life-=0.012;if(s.life<=0){shootingStars.splice(i,1);continue}s.x+=s.dx;s.y+=s.dy;const mag=Math.sqrt(s.dx*s.dx+s.dy*s.dy),nx=s.dx/mag,ny=s.dy/mag,tx=s.x-nx*s.trailLen,ty=s.y-ny*s.trailLen;const g=ctx.createLinearGradient(tx,ty,s.x,s.y);g.addColorStop(0,'rgba(255,255,255,0)');g.addColorStop(0.7,`rgba(180,220,255,${s.life*0.4})`);g.addColorStop(1,`rgba(220,240,255,${s.life*0.75})`);ctx.strokeStyle=g;ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(tx,ty);ctx.lineTo(s.x,s.y);ctx.stroke()}
    t++;requestAnimationFrame(draw);
  }
  const ro=new ResizeObserver(()=>{clearTimeout(window._ro);window._ro=setTimeout(resize,120)});
  ro.observe(document.body);
  window.addEventListener('resize',()=>{clearTimeout(window._wr);window._wr=setTimeout(resize,200)});
  resize();draw();
})();

/* ── Cursor ── */
const cursor=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
if(cursor&&ring&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px'});
  (function a(){rx+=(mx-rx)*.11;ry+=(my-ry)*.11;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(a)})();
}

/* ── Nav ── */
const nb=document.getElementById('navbar');
window.addEventListener('scroll',()=>nb.classList.toggle('scrolled',window.scrollY>60));

/* ── Reveal ── */
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),60);obs.unobserve(e.target)}})},{threshold:0.08});
function observeReveals(){document.querySelectorAll('.reveal:not([data-obs])').forEach(el=>{el.setAttribute('data-obs','1');obs.observe(el)})}
observeReveals();setTimeout(observeReveals,400);

/* ── Orbital parallax ── */
const orbital=document.getElementById('orbital');
if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  document.addEventListener('mousemove',e=>{const cx=window.innerWidth/2,cy=window.innerHeight/2,dx=(e.clientX-cx)/cx,dy=(e.clientY-cy)/cy;if(orbital)orbital.style.transform=`translate(${dx*6}px,${dy*6}px)`;document.querySelectorAll('.deco-star').forEach((s,i)=>{s.style.transform=`translate(${dx*(5+i*2.5)}px,${dy*(5+i*2.5)}px)`})});
}

const META={
  en:{
    title:"Estonia Property Intelligence API — Land, Buildings, Energy & Permits | PropData",
    description:"Resolve Estonia property identity into cadastral land intelligence, parcel and building geometry, EHR building specifications, energy certificates, document history and source provenance through one API.",
    ogTitle:"Estonia's property intelligence layer. One API.",
    ogDescription:"Official-source Estonian addresses, cadastral land data, parcel and building geometry, EHR building intelligence, energy certificates and document history — normalized by PropData."
  },
  et:{
    title:"Eesti kinnisvaraintelligentsi API — maa, hooned, energia ja load | PropData",
    description:"Lahenda Eesti kinnisvaraidentiteet katastri maaandmeteks, krundi- ja hoonegeomeetriaks, EHR hooneandmeteks, energiamärgisteks, dokumendiajalooks ja allikapõhiseks päritoluks ühe API kaudu.",
    ogTitle:"Eesti kinnisvaraintelligentsi kiht. Üks API.",
    ogDescription:"Eesti ametlikud aadressid, katastri maaandmed, krundi- ja hoonegeomeetria, EHR hooneinfo, energiamärgised ja dokumendiajalugu — PropData poolt normaliseeritud."
  }
};

function setMeta(selector,attr,value){const el=document.querySelector(selector);if(el)el.setAttribute(attr,value)}
function setLanguage(lang){
  if(!META[lang])lang='en';
  document.documentElement.lang=lang;
  localStorage.setItem('propdata_ee_lang',lang);
  const url=new URL(location.href);url.searchParams.set('lang',lang);history.replaceState({},'',url);
  document.querySelectorAll('[data-en][data-et]').forEach(el=>{const value=el.dataset[lang];if(value!=null)el.textContent=value});
  document.querySelectorAll('.lang-btn').forEach(btn=>{const active=btn.dataset.lang===lang;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active))});
  const m=META[lang];document.title=m.title;
  setMeta('meta[name="description"]','content',m.description);
  setMeta('meta[property="og:title"]','content',m.ogTitle);
  setMeta('meta[property="og:description"]','content',m.ogDescription);
  setMeta('meta[name="twitter:title"]','content',m.ogTitle);
  setMeta('meta[name="twitter:description"]','content',m.ogDescription);
}

document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
const requested=new URLSearchParams(location.search).get('lang');
const preferred=requested||localStorage.getItem('propdata_ee_lang')||((navigator.language||'').toLowerCase().startsWith('et')?'et':'en');
setLanguage(preferred);

const header=document.getElementById('site-header');
const onScroll=()=>header?.classList.toggle('scrolled',scrollY>16);
addEventListener('scroll',onScroll,{passive:true});onScroll();

const menuButton=document.getElementById('menu-toggle');
const nav=document.getElementById('primary-nav');
menuButton?.addEventListener('click',()=>{const open=nav?.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(Boolean(open)))});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false')}));

document.addEventListener('click',e=>{document.querySelectorAll('.network-menu[open]').forEach(details=>{if(!details.contains(e.target))details.removeAttribute('open')})});

const observer='IntersectionObserver'in window?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -20px'}):null;
document.querySelectorAll('.reveal').forEach(el=>observer?observer.observe(el):el.classList.add('visible'));

const success=new URLSearchParams(location.search).get('success');
if(success==='1')document.getElementById('success')?.classList.add('show');

const copyButton=document.querySelector('.copy-btn');
copyButton?.addEventListener('click',async()=>{
  const code=document.getElementById('code-sample')?.innerText||'';
  try{
    await navigator.clipboard.writeText(code);
    const label=copyButton.querySelector('span');
    const lang=document.documentElement.lang;
    const old=label.textContent;label.textContent=lang==='et'?'Kopeeritud':'Copied';
    setTimeout(()=>label.textContent=old,1300);
  }catch{}
});

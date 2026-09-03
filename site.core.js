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

function mountDeepIntelligence(){
  const heroP=document.querySelector('.hero-copy > p');
  if(heroP){
    heroP.dataset.en="Resolve an Estonian address, native cadastral code or coordinate into property identity, land use, assessed land value, available parcel geometry and — where covered — EHR building specifications, building footprints, energy certificates and document history.";
    heroP.dataset.et="Lahenda Eesti aadress, katastritunnus või koordinaat kinnisvaraidentiteediks, maakasutuseks, maa hinnatud väärtuseks, olemasolevaks katastrigeomeetriaks ning katvuse korral EHR hooneandmeteks, hoonegeomeetriaks, energiamärgisteks ja dokumendiajalooks.";
  }

  const heroActions=document.querySelector('.hero-actions');
  if(heroActions&&!document.querySelector('.deep-rollout-chip')){
    const chip=document.createElement('div');
    chip.className='deep-rollout-chip';
    chip.innerHTML='<span class="live-dot"></span><b data-en="LAND INTELLIGENCE LIVE NATIONALLY" data-et="MAA-INTELLIGENTS RIIKLIKULT LIVE">LAND INTELLIGENCE LIVE NATIONALLY</b><small data-en="778K+ cadastral units enriched · deeper EHR coverage expanding" data-et="778K+ rikastatud katastriüksust · EHR süvakatvus laieneb">778K+ cadastral units enriched · deeper EHR coverage expanding</small>';
    heroActions.insertAdjacentElement('afterend',chip);
  }

  const metrics=document.querySelectorAll('.hero-metrics > div');
  if(metrics[1]){metrics[1].querySelector('b').textContent='778K+';const s=metrics[1].querySelector('span');s.dataset.en='Land-enriched cadastral units';s.dataset.et='Maaandmetega rikastatud katastriüksust';}

  document.querySelectorAll('a[href="https://propdata.proptechusa.ai/docs"]').forEach(a=>a.setAttribute('href','/docs'));

  const dataSection=document.getElementById('data');
  if(dataSection&&!document.getElementById('intelligence')){
    const section=document.createElement('section');
    section.className='deep-intel-section';section.id='intelligence';
    section.innerHTML=`
      <div class="shell deep-intel-shell">
        <div class="deep-intel-heading reveal visible">
          <div><div class="section-kicker" data-en="DEEP PROPERTY INTELLIGENCE" data-et="SÜGAV KINNISVARAINTELLIGENTS">DEEP PROPERTY INTELLIGENCE</div><h2 data-en="A cadastral API that keeps going." data-et="Katastri-API, mis ei peatu katastritunnuse juures.">A cadastral API that keeps going.</h2></div>
          <p data-en="PropData now joins Estonia's official cadastral layer with the national Construction Register (EHR). Land intelligence is nationally loaded; building, energy and document layers are coverage-aware and expanding through the same contract." data-et="PropData ühendab nüüd Eesti ametliku katastrikihi riikliku Ehitisregistriga (EHR). Maa-intelligents on riiklikult laaditud; hoone-, energia- ja dokumendikihid on katvusteadlikud ning laienevad sama lepingu kaudu.">PropData now joins Estonia's official cadastral layer with the national Construction Register (EHR). Land intelligence is nationally loaded; building, energy and document layers are coverage-aware and expanding through the same contract.</p>
        </div>
        <div class="deep-status-grid">
          <div class="deep-status live"><small data-en="NATIONAL · LIVE" data-et="RIIKLIK · LIVE">NATIONAL · LIVE</small><b>778,325</b><span data-en="cadastral units with area, intended use, registration date and assessed land value" data-et="katastriüksust pindala, sihtotstarbe, registreerimiskuupäeva ja maa hinnatud väärtusega">cadastral units with area, intended use, registration date and assessed land value</span></div>
          <div class="deep-status expanding"><small data-en="EXPANDING" data-et="LAIENEB">EXPANDING</small><b>Geometry</b><span data-en="National parcel geometry reconciliation is actively increasing materialized polygon coverage." data-et="Riiklik katastrigeomeetria lepitamine suurendab aktiivselt materialiseeritud polügoonide katvust.">National parcel geometry reconciliation is actively increasing materialized polygon coverage.</span></div>
          <div class="deep-status expanding"><small data-en="COVERAGE-AWARE" data-et="KATVUSTEADLIK">COVERAGE-AWARE</small><b>EHR</b><span data-en="Building specifications, footprints, energy certificates and document history return where the building layer is populated." data-et="Hoone tehnilised andmed, geomeetria, energiamärgised ja dokumendiajalugu tagastatakse seal, kus hoonekiht on laaditud.">Building specifications, footprints, energy certificates and document history return where the building layer is populated.</span></div>
        </div>
        <div class="deep-feature-grid">
          <article><span>01</span><h3 data-en="Land intelligence" data-et="Maa-intelligents">Land intelligence</h3><p data-en="Area, intended uses and percentages, cultivated/grassland/forest/courtyard/other area, ownership type, registered immovable number, registration and change dates." data-et="Pindala, sihtotstarbed ja protsendid, haritav/rohumaa/mets/õuemaa/muu maa, omandivorm, kinnistu number ning registreerimis- ja muutmiskuupäevad.">Area, intended uses and percentages, cultivated/grassland/forest/courtyard/other area, ownership type, registered immovable number, registration and change dates.</p></article>
          <article><span>02</span><h3 data-en="Assessed land value" data-et="Maa hinnatud väärtus">Assessed land value</h3><p data-en="Official assessed land value in EUR, kept separate from market valuation and returned with source revision and provenance." data-et="Ametlik maa hinnatud väärtus eurodes, hoitud turuväärtusest eraldi ning tagastatud koos allika revisjoni ja päritoluga.">Official assessed land value in EUR, kept separate from market valuation and returned with source revision and provenance.</p></article>
          <article><span>03</span><h3 data-en="Building specifications" data-et="Hoone tehnilised andmed">Building specifications</h3><p data-en="EHR building identity, status, first-use year, floors, closed net area, footprint, volume, primary use, construction materials and technical systems where available." data-et="EHR hooneidentiteet, olek, esmase kasutuse aasta, korrused, suletud netopind, ehitisealune pind, maht, põhikasutus, materjalid ja tehnosüsteemid katvuse korral.">EHR building identity, status, first-use year, floors, closed net area, footprint, volume, primary use, construction materials and technical systems where available.</p></article>
          <article><span>04</span><h3 data-en="Parcel + building geometry" data-et="Krundi + hoone geomeetria">Parcel + building geometry</h3><p data-en="GeoJSON-ready parcel polygons and EHR building footprints with explicit source identity and coverage semantics." data-et="GeoJSON-valmis katastripolügoonid ja EHR hoonegeomeetria koos selge allikaidentiteedi ja katvuse semantikaga.">GeoJSON-ready parcel polygons and EHR building footprints with explicit source identity and coverage semantics.</p></article>
          <article><span>05</span><h3 data-en="Energy certificates" data-et="Energiamärgised">Energy certificates</h3><p data-en="Certificate number, ETA/KEK type and value, energy class, status, issue date and expiry date when published by EHR." data-et="Energiamärgise number, ETA/KEK tüüp ja väärtus, energiaklass, olek, väljastamise kuupäev ja kehtivuse lõpp EHR avaldamise korral.">Certificate number, ETA/KEK type and value, energy class, status, issue date and expiry date when published by EHR.</p></article>
          <article><span>06</span><h3 data-en="Permits & document history" data-et="Load ja dokumendiajalugu">Permits & document history</h3><p data-en="Normalized EHR timeline including building permits, permit applications, occupancy/use records, construction-start notices, design conditions, registry events and restriction notices." data-et="Normaliseeritud EHR ajajoon ehituslubade, loataotluste, kasutuslubade/-teatiste, ehitamise alustamise teatiste, projekteerimistingimuste, registrisündmuste ja piirangute teadetega.">Normalized EHR timeline including building permits, permit applications, occupancy/use records, construction-start notices, design conditions, registry events and restriction notices.</p></article>
        </div>
        <div class="deep-example">
          <div class="deep-example-copy"><small>LIVE RESPONSE · 78404:406:4330</small><h3 data-en="One cadastral lookup. Multiple official systems." data-et="Üks katastripäring. Mitu ametlikku süsteemi.">One cadastral lookup. Multiple official systems.</h3><p data-en="A live property can already return a 600 m² residential land parcel, private ownership type, €123,108 assessed land value, registered immovable number, parcel polygon, a linked EHR building, building dimensions and systems, an energy certificate and a 14-event document timeline." data-et="Live kinnisvara võib juba tagastada 600 m² elamumaa krundi, eraomandi liigi, 123 108 € maa hinnatud väärtuse, kinnistu numbri, katastripolügooni, seotud EHR hoone, hoone mõõdud ja süsteemid, energiamärgise ning 14 sündmusega dokumendiajaloo.">A live property can already return a 600 m² residential land parcel, private ownership type, €123,108 assessed land value, registered immovable number, parcel polygon, a linked EHR building, building dimensions and systems, an energy certificate and a 14-event document timeline.</p><a href="/docs#deep-enrichment" data-en="Explore the deep response contract →" data-et="Tutvu süvavastuse lepinguga →">Explore the deep response contract →</a></div>
          <pre><code>{
  "match_level": "cadastral_code",
  "estonia": {
    "land": {
      "area_sqm": 600,
      "intended_uses": [{"use":"ELAMUMAA","percent":100}],
      "ownership_type": "Eraomand",
      "assessed_land_value_eur": 123108,
      "registered_immovable_number": "3298301"
    },
    "ehr_buildings": [{
      "ehr_code": "101000361",
      "first_usage_year": 1956,
      "dimensions": {"floors_count":2,"closed_net_area_sqm":113},
      "energy_certificate_history": {"count":1},
      "documents": {"count":14}
    }]
  }
}</code></pre>
        </div>
      </div>`;
    dataSection.insertAdjacentElement('afterend',section);
  }

  const style=document.createElement('style');
  style.textContent=`
    .deep-rollout-chip{margin-top:18px;display:inline-grid;grid-template-columns:auto 1fr;gap:0 9px;align-items:center;padding:10px 13px;border:1px solid rgba(122,226,255,.28);border-radius:12px;background:rgba(4,20,37,.55);backdrop-filter:blur(12px);color:#fff}.deep-rollout-chip .live-dot{grid-row:1/3}.deep-rollout-chip b{font-size:10px;letter-spacing:.11em}.deep-rollout-chip small{font-size:11px;color:#aec4d8}.deep-intel-section{background:#071426;color:#fff;padding:96px 0}.deep-intel-shell{display:grid;gap:34px}.deep-intel-heading{display:grid;grid-template-columns:1.05fr .95fr;gap:60px;align-items:end}.deep-intel-heading h2{font-size:clamp(38px,5vw,64px);line-height:1;letter-spacing:-.05em;margin:8px 0 0}.deep-intel-heading p{color:#aebfd1;font-size:17px;margin:0}.deep-status-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.deep-status{padding:20px;border:1px solid #18334f;border-radius:16px;background:#0b1e35}.deep-status small{display:block;font-size:9px;font-weight:900;letter-spacing:.13em;color:#68dff7}.deep-status b{display:block;font-size:28px;margin:6px 0}.deep-status span{display:block;font-size:12px;color:#9eb1c7}.deep-status.live{border-color:#1e5f55;background:linear-gradient(145deg,#0a2a2a,#0a1d31)}.deep-feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.deep-feature-grid article{padding:24px;border:1px solid #18334f;border-radius:17px;background:linear-gradient(145deg,#0b1d34,#091829)}.deep-feature-grid article>span{font:900 10px ui-monospace,monospace;color:#61dafa}.deep-feature-grid h3{font-size:18px;margin:12px 0 6px}.deep-feature-grid p{font-size:12px;color:#9eb1c7;margin:0}.deep-example{display:grid;grid-template-columns:.85fr 1.15fr;border:1px solid #1a3958;border-radius:20px;overflow:hidden;background:#08192b}.deep-example-copy{padding:34px}.deep-example-copy small{font:800 10px ui-monospace,monospace;color:#69dcf8}.deep-example-copy h3{font-size:28px;line-height:1.08;margin:12px 0}.deep-example-copy p{color:#9fb2c8}.deep-example-copy a{display:inline-block;margin-top:10px;color:#76ddff;font-weight:800}.deep-example pre{margin:0;padding:30px;background:#04111f;color:#d8e8f7;overflow:auto;font-size:11px;line-height:1.65}.deep-intel-section .section-kicker{color:#63dbf6}@media(max-width:900px){.deep-intel-heading,.deep-example{grid-template-columns:1fr}.deep-status-grid,.deep-feature-grid{grid-template-columns:1fr 1fr}}@media(max-width:620px){.deep-status-grid,.deep-feature-grid{grid-template-columns:1fr}.deep-intel-section{padding:70px 0}.deep-intel-heading{gap:18px}.deep-example-copy{padding:24px}}`;
  document.head.appendChild(style);

  const ld=document.createElement('script');ld.type='application/ld+json';ld.textContent=JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"PropData Estonia Property Intelligence API","applicationCategory":"DeveloperApplication","areaServed":{"@type":"Country","name":"Estonia"},"featureList":["Official address resolution","Native cadastral-code lookup","National cadastral land intelligence","Assessed land value","Registered immovable number","Available parcel geometry","EHR building specifications","Available building footprints","Energy certificate history","Permit and document history","Source provenance and coverage semantics"]});document.head.appendChild(ld);
}

mountDeepIntelligence();
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
  try{await navigator.clipboard.writeText(code);const label=copyButton.querySelector('span');const lang=document.documentElement.lang;const old=label.textContent;label.textContent=lang==='et'?'Kopeeritud':'Copied';setTimeout(()=>label.textContent=old,1300)}catch{}
});

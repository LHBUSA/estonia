(()=>{
  const KEY='propdata_ee_lang';
  const META={
    docs:{
      en:{title:'PropData Estonia API Docs | National Property Graph, Cadastre, Buildings, Energy & EHR',description:'Deep production documentation for PropData Estonia: ADS address and object identity, cadastral land and legal-change context, assessed land value, parcel geometry, relationship graphs, EHR buildings, technical systems, energy certificates, permits, documents, provenance and contract-gated land-register workflows.',ogTitle:'PropData Estonia | National Property Intelligence Graph API Docs',ogDescription:'Document the full Estonia property graph: address and cadastral identity, land, geometry, object relationships, buildings, technical systems, energy, documents and source provenance.',locale:'en_US'},
      et:{title:'PropData Eesti API dokumentatsioon | Riiklik kinnisvaragraaf, kataster, hooned, energia ja EHR',description:'PropData Eesti sügav tootmisdokumentatsioon: ADS aadressi- ja objektiidentiteet, katastrimaa ja õigusliku muudatuse kontekst, hinnatud maaväärtus, katastrigeomeetria, seostegraafid, EHR hooned, tehnosüsteemid, energiamärgised, load, dokumendid, päritolu ja lepingupõhine kinnistusraamatu kiht.',ogTitle:'PropData Eesti | Riikliku kinnisvaragraafi API dokumentatsioon',ogDescription:'Dokumenteerib kogu Eesti kinnisvaragraafi: aadressi- ja katastriidentiteet, maa, geomeetria, objektiseosed, hooned, tehnosüsteemid, energia, dokumendid ja allikapäritolu.',locale:'et_EE'}
    },
    workspace:{
      en:{title:'PropData Estonia Workspace | Country API Console',description:'Estonia-scoped PropData workspace for live API testing, cadastral property resolution, coverage inspection, account usage and developer handoff.',ogTitle:'PropData Estonia Workspace',ogDescription:'Country-scoped Estonia property API testing, coverage, usage and production integration.',locale:'en_US'},
      et:{title:'PropData Eesti töölaud | Riigipõhine API konsool',description:'Eesti-põhine PropData töölaud API päringute testimiseks, katastri kinnisvara lahendamiseks, katvuse kontrolliks, kasutuse jälgimiseks ja arendaja üleandeks.',ogTitle:'PropData Eesti töölaud',ogDescription:'Eesti-põhine kinnisvara API testimine, katvus, kasutus ja tootmisesse integreerimine.',locale:'et_EE'}
    }
  };

  function setMeta(selector,attr,value){const el=document.querySelector(selector);if(el&&value)el.setAttribute(attr,value)}
  function currentSurface(){return document.body?.dataset?.surface||'docs'}
  function normalize(lang){return lang==='et'?'et':'en'}
  function applyText(lang){
    document.querySelectorAll('[data-en][data-et]').forEach(el=>{const value=el.dataset[lang];if(value!=null)el.textContent=value});
    document.querySelectorAll('[data-en-html][data-et-html]').forEach(el=>{const value=el.dataset[`${lang}Html`];if(value!=null)el.innerHTML=value});
    document.querySelectorAll('[data-en-placeholder][data-et-placeholder]').forEach(el=>{const value=el.dataset[`${lang}Placeholder`];if(value!=null)el.setAttribute('placeholder',value)});
    document.querySelectorAll('[data-en-aria][data-et-aria]').forEach(el=>{const value=el.dataset[`${lang}Aria`];if(value!=null)el.setAttribute('aria-label',value)});
  }
  function setLanguage(input,{updateUrl=true,emit=true}={}){
    const lang=normalize(input);
    document.documentElement.lang=lang==='et'?'et-EE':'en';
    try{localStorage.setItem(KEY,lang)}catch{}
    applyText(lang);
    document.querySelectorAll('.lang-btn').forEach(btn=>{const active=btn.dataset.lang===lang;btn.classList.toggle('active',active);btn.setAttribute('aria-pressed',String(active))});
    const meta=META[currentSurface()]?.[lang];
    if(meta){
      document.title=meta.title;
      setMeta('meta[name="description"]','content',meta.description);
      setMeta('meta[property="og:title"]','content',meta.ogTitle);
      setMeta('meta[property="og:description"]','content',meta.ogDescription);
      setMeta('meta[property="og:locale"]','content',meta.locale);
      setMeta('meta[name="twitter:title"]','content',meta.ogTitle);
      setMeta('meta[name="twitter:description"]','content',meta.ogDescription);
    }
    if(updateUrl){const u=new URL(location.href);if(lang==='en')u.searchParams.delete('lang');else u.searchParams.set('lang',lang);history.replaceState({},'',u)}
    if(emit)window.dispatchEvent(new CustomEvent('propdata-ee-language',{detail:{lang}}));
    return lang;
  }
  function getLanguage(){return document.documentElement.lang.toLowerCase().startsWith('et')?'et':'en'}
  function initialLanguage(){
    const requested=new URLSearchParams(location.search).get('lang');
    if(requested==='en'||requested==='et')return requested;
    let stored='';try{stored=localStorage.getItem(KEY)||''}catch{}
    if(stored==='en'||stored==='et')return stored;
    return (navigator.language||'').toLowerCase().startsWith('et')?'et':'en';
  }

  window.PropDataEEI18n={setLanguage,getLanguage,applyText,key:KEY};
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
  setLanguage(initialLanguage(),{updateUrl:false,emit:false});

  if(document.body?.dataset?.surface==='docs'){
    const s=document.createElement('script');
    s.src='/docs-depth.js';
    s.defer=true;
    document.body.appendChild(s);
  }
})();

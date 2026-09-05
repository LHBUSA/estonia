(()=>{
  const KEY='propdata_ee_lang';
  const META={
    docs:{
      en:{title:'PropData Estonia API Docs | Cadastral Land, Buildings, Energy & Permits',description:'Production documentation for PropData Estonia: official addresses, cadastral land intelligence, assessed value, geometry, ADS relationships, EHR buildings, energy certificates and document history.',ogTitle:'PropData Estonia API Documentation',ogDescription:'One Estonia-native property contract spanning cadastral identity, land intelligence, relationships, buildings, energy and permitting context.',locale:'en_US'},
      et:{title:'PropData Eesti API dokumentatsioon | Kataster, hooned, energia ja load',description:'PropData Eesti tootmisdokumentatsioon: ametlikud aadressid, katastri maaandmed, hinnatud väärtus, geomeetria, ADS seosed, EHR hooned, energiamärgised ja dokumendiajalugu.',ogTitle:'PropData Eesti API dokumentatsioon',ogDescription:'Üks Eesti-põhine kinnisvaraleping katastriidentiteedi, maaandmete, seoste, hoonete, energia ja lubade kontekstiga.',locale:'et_EE'}
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

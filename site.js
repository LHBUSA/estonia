(()=>{
  const LOCAL_MAP='/assets/estonia-property-map.svg';
  const HERO_FALLBACK='/assets/identity-graph.svg';

  function makeImagesReliable(){
    document.querySelectorAll('.hero-map-card img, .coverage-visual img').forEach(img=>{
      if(img.getAttribute('src')!==LOCAL_MAP){
        img.src=LOCAL_MAP;
        img.removeAttribute('srcset');
        img.removeAttribute('crossorigin');
      }
    });

    const hero=document.querySelector('.hero-photo');
    if(hero){
      const useFallback=()=>{
        if(hero.getAttribute('src')!==HERO_FALLBACK){
          hero.src=HERO_FALLBACK;
          hero.style.objectPosition='center';
          hero.style.filter='saturate(.9) contrast(1.04) brightness(.72)';
        }
      };
      hero.addEventListener('error',useFallback,{once:true});
      if(hero.complete && hero.naturalWidth===0) useFallback();
    }
  }

  function currentLanguage(){
    try{return localStorage.getItem('propdata_ee_lang')==='et'?'et':'en'}catch{return 'en'}
  }

  function localizeNode(node){
    const lang=currentLanguage();
    node.querySelectorAll('[data-en][data-et]').forEach(el=>{
      const value=el.dataset[lang];
      if(value!=null)el.textContent=value;
    });
  }

  function mountDeveloperSurfaces(){
    const nav=document.getElementById('primary-nav');
    if(nav&&!nav.querySelector('[data-ee-developer-nav="docs"]')){
      const pricing=nav.querySelector('a[href="#pricing"]');
      const docs=document.createElement('a');
      docs.href='/docs';
      docs.dataset.eeDeveloperNav='docs';
      docs.innerHTML='<span data-en="API Docs" data-et="API dokumendid">API Docs</span>';
      const workspace=document.createElement('a');
      workspace.href='/workspace';
      workspace.dataset.eeDeveloperNav='workspace';
      workspace.innerHTML='<span data-en="Workspace" data-et="Töölaud">Workspace</span>';
      if(pricing){nav.insertBefore(docs,pricing);nav.insertBefore(workspace,pricing)}else{nav.append(docs,workspace)}
      localizeNode(nav);
    }

    const developerHead=[...document.querySelectorAll('.footer-col h4')].find(h=>/DEVELOPERS|ARENDAJATELE/i.test(h.textContent||''));
    const developerCol=developerHead?.parentElement;
    if(developerCol&&!developerCol.querySelector('[data-ee-footer-workspace]')){
      const workspace=document.createElement('a');
      workspace.href='/workspace';
      workspace.dataset.eeFooterWorkspace='1';
      workspace.dataset.en='Country Workspace';
      workspace.dataset.et='Riigi töölaud';
      workspace.textContent=currentLanguage()==='et'?'Riigi töölaud':'Country Workspace';
      const docs=[...developerCol.querySelectorAll('a')].find(a=>a.getAttribute('href')==='/docs'||a.href.includes('propdata.proptechusa.ai/docs'));
      if(docs)docs.insertAdjacentElement('afterend',workspace);else developerCol.appendChild(workspace);
    }
  }

  makeImagesReliable();

  const core=document.createElement('script');
  core.src='/site.core.js';
  core.async=false;
  core.onload=()=>{makeImagesReliable();mountDeveloperSurfaces()};
  core.onerror=()=>console.error('PropData Estonia core script failed to load');
  document.head.appendChild(core);
})();

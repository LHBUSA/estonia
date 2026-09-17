(()=>{
  function preservePremiumVisuals(){
    const hero=document.querySelector('.hero-photo');
    if(hero){
      hero.style.removeProperty('object-position');
      hero.style.removeProperty('filter');
      hero.addEventListener('error',()=>{hero.removeAttribute('src');document.querySelector('.hero')?.classList.add('hero-photo-unavailable')},{once:true});
    }
    document.querySelectorAll('.hero-map-card img, .coverage-visual img').forEach(img=>{img.removeAttribute('srcset');img.removeAttribute('crossorigin')});
    if(!document.getElementById('ee-premium-visual-guard')){const style=document.createElement('style');style.id='ee-premium-visual-guard';style.textContent='.hero-photo-unavailable{background:linear-gradient(115deg,#051425 0%,#0b2843 56%,#113b53 100%)}';document.head.appendChild(style)}
  }
  function currentLanguage(){try{return localStorage.getItem('propdata_ee_lang')==='et'?'et':'en'}catch{return'en'}}
  function localizeNode(node){const lang=currentLanguage();node.querySelectorAll('[data-en][data-et]').forEach(el=>{const value=el.dataset[lang];if(value!=null)el.textContent=value})}
  function mountDeveloperSurfaces(){
    const nav=document.getElementById('primary-nav');
    if(nav&&!nav.querySelector('[data-ee-developer-nav="docs"]')){
      const pricing=nav.querySelector('a[href="#pricing"]');const docs=document.createElement('a');docs.href='/docs';docs.dataset.eeDeveloperNav='docs';docs.innerHTML='<span data-en="API Docs" data-et="API dokumendid">API Docs</span>';const workspace=document.createElement('a');workspace.href='/workspace';workspace.dataset.eeDeveloperNav='workspace';workspace.innerHTML='<span data-en="Workspace" data-et="Töölaud">Workspace</span>';if(pricing){nav.insertBefore(docs,pricing);nav.insertBefore(workspace,pricing)}else{nav.append(docs,workspace)}localizeNode(nav)
    }
    const developerHead=[...document.querySelectorAll('.footer-col h4')].find(h=>/DEVELOPERS|ARENDAJATELE/i.test(h.textContent||''));const developerCol=developerHead?.parentElement;
    if(developerCol&&!developerCol.querySelector('[data-ee-footer-workspace]')){const workspace=document.createElement('a');workspace.href='/workspace';workspace.dataset.eeFooterWorkspace='1';workspace.dataset.en='Country Workspace';workspace.dataset.et='Riigi töölaud';workspace.textContent=currentLanguage()==='et'?'Riigi töölaud':'Country Workspace';const docs=[...developerCol.querySelectorAll('a')].find(a=>a.getAttribute('href')==='/docs'||a.href.includes('propdata.proptechusa.ai/docs'));if(docs)docs.insertAdjacentElement('afterend',workspace);else developerCol.appendChild(workspace)}
  }
  function mountSalesContact(){
    const footer=document.querySelector('footer');
    if(!footer||footer.querySelector('[data-proptech-sales-contact]'))return;
    if(!document.getElementById('proptech-sales-contact-style')){const style=document.createElement('style');style.id='proptech-sales-contact-style';style.textContent='.proptech-sales-contact{width:min(1200px,calc(100% - 40px));margin:0 auto;padding:18px 0;border-top:1px solid rgba(127,127,127,.28);display:flex;align-items:center;justify-content:center;gap:12px 22px;flex-wrap:wrap;font-size:12px}.proptech-sales-contact span{font-size:9px;font-weight:800;letter-spacing:.12em;opacity:.55}.proptech-sales-contact a{color:inherit;text-decoration:none;font-weight:800;opacity:.82}.proptech-sales-contact a:hover,.proptech-sales-contact a:focus-visible{opacity:1;text-decoration:underline}';document.head.appendChild(style)}
    const row=document.createElement('div');row.className='proptech-sales-contact';row.dataset.proptechSalesContact='true';row.setAttribute('aria-label','PropTechUSA.ai sales contact');row.innerHTML='<span>CONTACT PROPTECHUSA.AI</span><a href="tel:18887843881" aria-label="Call PropTechUSA.ai sales at 1-888-784-3881">1-888-784-3881</a><a href="mailto:sales@proptechusa.ai" aria-label="Email PropTechUSA.ai sales at sales@proptechusa.ai">sales@proptechusa.ai</a>';footer.appendChild(row)
  }
  function loadDemo(){const demo=document.createElement('script');demo.src='/product-demo.js';demo.async=false;document.head.appendChild(demo)}
  preservePremiumVisuals();
  mountSalesContact();
  const trust=document.createElement('script');trust.src='/trust-badges.js';trust.async=false;document.head.appendChild(trust);
  const core=document.createElement('script');core.src='/site.core.js';core.async=false;core.onload=()=>{preservePremiumVisuals();mountDeveloperSurfaces();mountSalesContact();loadDemo()};core.onerror=()=>console.error('PropData Estonia core script failed to load');document.head.appendChild(core);
})();

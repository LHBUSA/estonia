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

  makeImagesReliable();

  const core=document.createElement('script');
  core.src='/site.core.js';
  core.async=false;
  core.onload=makeImagesReliable;
  core.onerror=()=>console.error('PropData Estonia core script failed to load');
  document.head.appendChild(core);
})();

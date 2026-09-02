const translations={
  en:{
    nav_product:'Product',nav_coverage:'Coverage',nav_api:'API',nav_pricing:'Pricing',nav_docs:'Docs',nav_access:'Get API access',
    hero_badge:'ESTONIA · NATIONAL PROPERTY INFRASTRUCTURE',hero_title:'Estonia’s property data.<br><em>One API.</em>',
    hero_copy:'Resolve Estonian addresses, cadastral units and coordinates into official property identity, parcel geometry, buildings and source-aware relationships — without building and maintaining the national data pipeline yourself.',
    hero_start:'Start for €49/month',hero_response:'See the API response',hero_proof1:'Official-source provenance',hero_proof2:'Country-scoped access',hero_proof3:'No fabricated property facts',
    success:'Subscription received. Your Estonia API access is being provisioned under the selected plan.',
    stat1:'cadastral-unit objects in the national graph',stat2:'property/address objects',stat3:'object ↔ address relationships',stat4:'building ↔ parcel relationships',
    product_kicker:'PROPERTY IDENTITY GRAPH',product_title:'More than an address endpoint.',product_copy:'PropData Estonia connects addresses to the cadastral and building graph underneath them — with normalized geometry, lifecycle status, match semantics and provenance.',
    f1_title:'Address → property',f1_copy:'Resolve official Estonian addresses into normalized property context instead of treating an address as a standalone string.',
    f2_title:'Cadastral geometry',f2_copy:'Return parcel identity and available geometry for mapping, underwriting, GIS and AI workflows.',
    f3_title:'Buildings + relationships',f3_copy:'Traverse building-to-parcel and object-to-address relationships across the national property graph.',
    f4_title:'Source-aware responses',f4_copy:'Preserve source identity, lifecycle and coverage status so unavailable data never becomes an invented fact.',
    coverage_kicker:'ESTONIA · REAL GEOGRAPHY',coverage_title:'Built around the country, not a generic global schema.',coverage_copy:'The Estonia product is country-scoped from purchase through API usage. We preserve local identifiers and official-source semantics while exposing them through the normalized PropData contract.',
    map_title:'Estonia property intelligence',map_copy:'National address and cadastral sources normalized into a developer-ready property graph.',map_pill:'EE · COUNTRY SCOPED',
    proof1_title:'Official address system',proof1_copy:'ADS is the authoritative address layer for cadastral parcels, buildings and building parts.',
    proof2_title:'Cadastral identity',proof2_copy:'Cadastral-unit identifiers and geometry are preserved as source-native property anchors.',
    proof3_title:'Relationship graph',proof3_copy:'Address, object, building and parcel relationships remain explicit instead of being flattened away.',
    proof4_title:'Fail-closed facts',proof4_copy:'If a property fact is not available or verified, the response stays null or unavailable.',
    arch_kicker:'HOW IT WORKS',arch_title:'From an Estonian address to structured property context.',arch_copy:'The API resolves source-native records into one consistent response without hiding the underlying match and provenance signals.',
    a1:'Input',a1_title:'Address or coordinate',a1_copy:'Send an address, cadastral identifier or latitude/longitude.',a2:'Resolve',a2_title:'Cadastral unit',a2_copy:'Match the official address and property identity to the correct cadastral context.',a3:'Attach',a3_title:'Buildings + geometry',a3_copy:'Attach available parcel geometry and explicit property-object relationships.',a4:'Return',a4_title:'Normalized API',a4_copy:'Return structured JSON with coverage, match semantics and source provenance.',
    api_kicker:'DEVELOPER CONTRACT',api_title:'One lookup. Property context back.',api_copy:'The Estonia surface stays country-scoped while running on the production PropData property graph. Credentials belong in the x-api-key header and production keys stay server-side.',
    api_p1:'Address, cadastral identifier and coordinate resolution',api_p2:'Explicit match level and coverage status',api_p3:'Available parcel geometry and building relationships',api_p4:'Official-source provenance preserved in the response',copy:'Copy',copied:'Copied',
    prov_kicker:'PROVENANCE',prov_title:'Source-native underneath. Normalized on top.',prov_copy:'The value is not republishing a flat government file. It is maintaining the ingestion, identity resolution, relationship graph and stable developer contract above the official source systems.',
    prov1_title:'Maa- ja Ruumiamet',prov1_copy:'Official Estonian address and cadastral sources form the national identity foundation. Public responses should retain source attribution and data age where applicable.',
    prov2_title:'PropData normalization',prov2_copy:'PropData turns source-native records into a stable API contract with deterministic match semantics, geometry handling, relationship traversal and production authentication.',
    s1:'ADS address data',s2:'Land cadastre',s3:'Cadastral units',s4:'Official provenance',s5:'Normalized IDs',s6:'Property graph',s7:'REST API',s8:'Production auth',
    pricing_kicker:'PRICING',pricing_title:'Start building today.',pricing_copy:'Every self-serve plan is scoped to Estonia. The same property contract is available at each tier; the difference is monthly request volume and support.',
    dev:'Developer',builder:'Builder',scale:'Scale',month:'/ month',p1_quota:'10,000 requests / month',p2_quota:'50,000 requests / month',p3_quota:'250,000 requests / month',popular:'Most popular',subscribe:'Subscribe',
    p_a:'Address, parcel & coordinate resolution',p_b:'Available parcel geometry',p_c:'Official-source provenance',p_d:'Production API key',p_e:'Everything in Developer',p_f:'Building + parcel relationships',p_g:'Priority support',p_h:'Everything in Builder',p_i:'Higher-volume workloads',p_j:'Platform integration use',
    enterprise:'Enterprise',enterprise_copy:'Bulk delivery, custom limits, SLAs and tailored integrations for teams that need Estonia data as infrastructure.',contact_sales:'Contact sales',
    cta_title:'Build on Estonia’s property layer.',cta_copy:'Start with self-serve API access today, then expand into bulk delivery, custom integrations and deeper Estonia enrichment as your use case grows.',cta_start:'Choose a plan',cta_docs:'Read PropData docs',
    footer:'PropData Estonia · Property & Cadastral API by PropTechUSA.ai',credit:'Map: NordNordWest · CC BY-SA 3.0 DE',legal:'Estonian address and cadastral source data is attributed to Maa- ja Ruumiamet. Product metrics describe the PropData normalized graph and may differ from raw source record counts.'
  },
  et:{
    nav_product:'Toode',nav_coverage:'Katvus',nav_api:'API',nav_pricing:'Hinnad',nav_docs:'Dokumentatsioon',nav_access:'Hangi API ligipääs',
    hero_badge:'EESTI · RIIKLIK KINNISVARAANDMETE TARISTU',hero_title:'Eesti kinnisvaraandmed.<br><em>Üks API.</em>',
    hero_copy:'Lahenda Eesti aadressid, katastriüksused ja koordinaadid ametlikuks objektiidentiteediks, katastrigeomeetriaks, hooneteks ja kontrollitavateks seosteks — ilma riiklikku andmetorustikku ise ehitamata ja hooldamata.',
    hero_start:'Alusta €49/kuu',hero_response:'Vaata API vastust',hero_proof1:'Ametliku allika päritolu',hero_proof2:'Eestile piiratud ligipääs',hero_proof3:'Väljamõeldud kinnisvarafakte ei ole',
    success:'Tellimus on vastu võetud. Valitud paketi Eesti API ligipääsu loomine on käivitunud.',
    stat1:'katastriüksuse objekti riiklikus graafis',stat2:'kinnisvara- ja aadressiobjekti',stat3:'objekti ↔ aadressi seost',stat4:'hoone ↔ katastriüksuse seost',
    product_kicker:'KINNISVARA IDENTITEEDIGRAAF',product_title:'Rohkem kui aadressiotsing.',product_copy:'PropData Estonia ühendab aadressi selle taga oleva katastri- ja hoonegraafiga — koos normaliseeritud geomeetria, oleku, vaste semantika ja andmete päritoluga.',
    f1_title:'Aadress → kinnisvara',f1_copy:'Lahenda Eesti ametlik aadress normaliseeritud kinnisvarakontekstiks, mitte lihtsalt eraldiseisvaks tekstiväljaks.',
    f2_title:'Katastrigeomeetria',f2_copy:'Tagasta katastriüksuse identiteet ja olemasolev geomeetria kaartide, GIS-i, analüüsi ja tehisintellekti töövoogude jaoks.',
    f3_title:'Hooned + seosed',f3_copy:'Liigu hoone–katastriüksuse ja objekti–aadressi seoste kaudu kogu riiklikus kinnisvaragraafis.',
    f4_title:'Allikateadlik vastus',f4_copy:'Säilita allikas, olek ja katvuse staatus, et puuduvast andmest ei saaks kunagi väljamõeldud fakti.',
    coverage_kicker:'EESTI · TEGELIK GEOGRAAFIA',coverage_title:'Ehitatud Eesti jaoks, mitte üldise globaalse skeemi peale.',coverage_copy:'Eesti toode on riigipõhiselt piiratud alates ostust kuni API kasutuseni. Kohalikud identifikaatorid ja ametliku allika semantika säilivad PropData normaliseeritud lepingu sees.',
    map_title:'Eesti kinnisvaraintelligents',map_copy:'Riiklikud aadressi- ja katastriallikad normaliseeritud arendajasõbralikuks kinnisvaragraafiks.',map_pill:'EE · RIIGIPÕHINE',
    proof1_title:'Ametlik aadressisüsteem',proof1_copy:'ADS on katastriüksuste, hoonete ja hooneosade ametlike aadresside põhikiht.',
    proof2_title:'Katastriidentiteet',proof2_copy:'Katastritunnused ja geomeetria säilivad allikapõhiste kinnisvaraankrutena.',
    proof3_title:'Seoste graaf',proof3_copy:'Aadressi, objekti, hoone ja katastriüksuse seosed jäävad nähtavaks ega kao üheks lamedaks reaks.',
    proof4_title:'Kontrollitud faktid',proof4_copy:'Kui kinnisvarafakt ei ole saadaval või kinnitatud, jääb vastus nulliks või märgitakse kättesaamatuks.',
    arch_kicker:'KUIDAS SEE TÖÖTAB',arch_title:'Eesti aadressist struktureeritud kinnisvarakontekstini.',arch_copy:'API lahendab allikapõhised kirjed üheks järjepidevaks vastuseks, säilitades samal ajal vaste- ja päritolusignaalid.',
    a1:'Sisend',a1_title:'Aadress või koordinaat',a1_copy:'Saada aadress, katastritunnus või laius- ja pikkuskraad.',a2:'Lahenda',a2_title:'Katastriüksus',a2_copy:'Seo ametlik aadress ja objektiidentiteet õige katastrikontekstiga.',a3:'Lisa',a3_title:'Hooned + geomeetria',a3_copy:'Lisa olemasolev katastrigeomeetria ja selged objekti seosed.',a4:'Tagasta',a4_title:'Normaliseeritud API',a4_copy:'Tagasta JSON koos katvuse, vaste semantika ja allika päritoluga.',
    api_kicker:'ARENDAJA LEPING',api_title:'Üks päring. Kinnisvarakontekst tagasi.',api_copy:'Eesti API pind jääb riigipõhiseks, kasutades sama tootmisklassi PropData kinnisvaragraafi. Võti saadetakse x-api-key päises ja tootmisvõtmeid hoitakse serveripoolel.',
    api_p1:'Aadressi, katastritunnuse ja koordinaadi lahendamine',api_p2:'Selge vaste tase ja katvuse staatus',api_p3:'Olemasolev katastrigeomeetria ja hooneseosed',api_p4:'Ametliku allika päritolu säilib vastuses',copy:'Kopeeri',copied:'Kopeeritud',
    prov_kicker:'PÄRITOLU',prov_title:'Allikapõhine all. Normaliseeritud peal.',prov_copy:'Väärtus ei ole lihtsalt riikliku faili edasimüük. Väärtus on ingestimise, identiteedi lahendamise, seoste graafi ja stabiilse arendajalepingu pidev haldamine ametlike allikate kohal.',
    prov1_title:'Maa- ja Ruumiamet',prov1_copy:'Eesti ametlikud aadressi- ja katastriallikad moodustavad riikliku identiteedikihi. Avalikes vastustes säilitame vajadusel allikaviite ja andmete vanuse.',
    prov2_title:'PropData normaliseerimine',prov2_copy:'PropData muudab allikapõhised kirjed stabiilseks API lepinguks koos deterministliku vaste semantika, geomeetria, seoste ja tootmisautentimisega.',
    s1:'ADS aadressiandmed',s2:'Maakataster',s3:'Katastriüksused',s4:'Ametlik päritolu',s5:'Normaliseeritud ID-d',s6:'Kinnisvaragraaf',s7:'REST API',s8:'Tootmisautentimine',
    pricing_kicker:'HINNAD',pricing_title:'Alusta ehitamist täna.',pricing_copy:'Kõik iseteeninduspaketid on piiratud Eestiga. Kinnisvara API leping on sama; erinevad kuu päringumaht ja toe tase.',
    dev:'Developer',builder:'Builder',scale:'Scale',month:'/ kuu',p1_quota:'10 000 päringut / kuu',p2_quota:'50 000 päringut / kuu',p3_quota:'250 000 päringut / kuu',popular:'Kõige populaarsem',subscribe:'Telli',
    p_a:'Aadressi, katastriüksuse ja koordinaadi lahendamine',p_b:'Olemasolev katastrigeomeetria',p_c:'Ametliku allika päritolu',p_d:'Tootmis-API võti',p_e:'Kõik Developer paketis',p_f:'Hoone + katastriüksuse seosed',p_g:'Prioriteetne tugi',p_h:'Kõik Builder paketis',p_i:'Suurema mahuga töövood',p_j:'Platvormi integratsioonid',
    enterprise:'Enterprise',enterprise_copy:'Bulk-tarne, kohandatud limiidid, SLA-d ja integratsioonid meeskondadele, kes kasutavad Eesti andmeid infrastruktuurina.',contact_sales:'Võta müügiga ühendust',
    cta_title:'Ehita Eesti kinnisvarakihi peale.',cta_copy:'Alusta iseteenindusliku API ligipääsuga ning laienda hiljem bulk-tarne, kohandatud integratsioonide ja sügavama Eesti rikastuse suunas.',cta_start:'Vali pakett',cta_docs:'Loe PropData dokumentatsiooni',
    footer:'PropData Estonia · kinnisvara- ja katastriandmete API · PropTechUSA.ai',credit:'Kaart: NordNordWest · CC BY-SA 3.0 DE',legal:'Eesti aadressi- ja katastriallikad on viidatud Maa- ja Ruumiametile. Tootemõõdikud kirjeldavad PropData normaliseeritud graafi ning võivad erineda toorallika kirjete arvust.'
  }
};

function setLanguage(lang){
  if(!translations[lang]) lang='en';
  const t=translations[lang];
  document.documentElement.lang=lang;
  localStorage.setItem('propdata_ee_lang',lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(t[k]!=null)el.textContent=t[k]});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{const k=el.dataset.i18nHtml;if(t[k]!=null)el.innerHTML=t[k]});
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));
  document.title=lang==='et'?'Eesti kinnisvara- ja katastriandmete API | PropData':'Estonia Property & Cadastral API | PropData';
  const desc=lang==='et'?'Eesti ametliku allika kinnisvarataristu: aadressid, katastriüksused, geomeetria, hooned ja seosed ühe normaliseeritud API kaudu.':'Official-source Estonia property infrastructure: addresses, cadastral units, geometry, buildings and relationships through one normalized API.';
  document.querySelector('meta[name="description"]').setAttribute('content',desc);
}

document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
const preferred=localStorage.getItem('propdata_ee_lang') || ((navigator.language||'').toLowerCase().startsWith('et')?'et':'en');
setLanguage(preferred);

const nav=document.querySelector('.nav-shell');
const onScroll=()=>nav.classList.toggle('scrolled',window.scrollY>12);window.addEventListener('scroll',onScroll,{passive:true});onScroll();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.13});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const params=new URLSearchParams(location.search);if(params.get('success')==='1')document.getElementById('success')?.classList.add('show');

document.querySelector('.copy-btn')?.addEventListener('click',async e=>{const code=document.getElementById('code-sample')?.innerText||'';try{await navigator.clipboard.writeText(code);const lang=document.documentElement.lang;e.currentTarget.textContent=translations[lang]?.copied||'Copied';setTimeout(()=>e.currentTarget.textContent=translations[document.documentElement.lang]?.copy||'Copy',1400)}catch{}});

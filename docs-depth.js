(()=>{
  if(document.body?.dataset?.surface!=='docs')return;

  const $=(s,root=document)=>root.querySelector(s);
  const apply=()=>window.PropDataEEI18n?.applyText(window.PropDataEEI18n?.getLanguage?.()||'en');
  const meta=(selector,value)=>{const el=$(selector);if(el)el.setAttribute('content',value)};

  const style=document.createElement('style');
  style.textContent=`
    .depth-banner{margin:24px 0 0;padding:18px 20px;border:1px solid #cbdcf4;border-radius:14px;background:linear-gradient(135deg,#f2f7ff,#f8fffb)}
    .depth-banner strong{display:block;font-size:13px;margin-bottom:5px}.depth-banner span{display:block;color:#587087;font-size:11px;line-height:1.65}
    .schema-path{font:850 10px/1.5 var(--mono);color:#075fc7;word-break:break-word}.schema-card{min-height:190px}.schema-card ul{margin:10px 0 0;padding-left:17px;color:#617086;font-size:10px;line-height:1.7}.schema-card li+li{margin-top:2px}
    .depth-table td:first-child{white-space:nowrap;font:800 11px var(--mono);color:#075fc7}.depth-table td:nth-child(2){font:800 10px var(--mono);color:#405972}.depth-table td:nth-child(3){color:#617086}
    .graph-counts{display:grid;grid-template-columns:repeat(5,1fr);gap:9px;margin:18px 0}.graph-counts div{padding:15px;border:1px solid var(--l);border-radius:11px;background:#f8fafc}.graph-counts b{display:block;font-size:19px;letter-spacing:-.03em}.graph-counts span{display:block;margin-top:4px;color:#6a7d8b;font-size:9px;line-height:1.4}
    .contract-flow{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin:18px 0}.contract-flow div{position:relative;padding:12px;border:1px solid var(--l);border-radius:10px;background:#fff}.contract-flow div:not(:last-child):after{content:'→';position:absolute;right:-7px;top:50%;transform:translate(50%,-50%);z-index:2;color:#7b91a2;font-weight:900}.contract-flow small,.contract-flow b{display:block}.contract-flow small{font:900 7px/1 var(--mono);letter-spacing:.09em;color:#08794c}.contract-flow b{font-size:10px;margin-top:5px}
    .delivery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}.delivery-grid .card{min-height:135px}.doc-chip-row{display:flex;gap:6px;flex-wrap:wrap;margin:13px 0}.doc-chip{display:inline-flex;padding:6px 8px;border-radius:999px;background:#eef4ff;color:#205fba;font:850 8px var(--mono)}
    @media(max-width:1050px){.graph-counts{grid-template-columns:repeat(3,1fr)}.contract-flow{grid-template-columns:repeat(3,1fr)}.delivery-grid{grid-template-columns:1fr 1fr}}
    @media(max-width:780px){.graph-counts,.contract-flow,.delivery-grid{grid-template-columns:1fr}.contract-flow div:not(:last-child):after{display:none}.depth-table{display:block;overflow-x:auto}}
  `;
  document.head.appendChild(style);

  document.title='PropData Estonia API Docs | National Property Graph, Cadastre, Buildings, Energy & EHR';
  meta('meta[name="description"]','Deep production documentation for PropData Estonia: ADS address and object identity, cadastral land and legal-change context, assessed land value, parcel geometry, relationship graphs, EHR buildings, technical systems, energy certificates, permits, documents, provenance and contract-gated land-register workflows.');
  meta('meta[property="og:title"]','PropData Estonia | National Property Intelligence Graph API Docs');
  meta('meta[property="og:description"]','Document the full Estonia property graph: address and cadastral identity, land, geometry, object relationships, buildings, technical systems, energy, documents and source provenance.');
  meta('meta[name="twitter:title"]','PropData Estonia | National Property Intelligence Graph API Docs');
  meta('meta[name="twitter:description"]','ADS identity, cadastre, land value, geometry, relationship graphs, EHR buildings, energy and documents behind one Estonia-native property contract.');

  const hero=$('#overview');
  if(hero){
    const h1=$('h1',hero);
    if(h1)h1.innerHTML='<span data-en="The Estonia property graph." data-et="Eesti kinnisvaragraaf.">The Estonia property graph.</span><br><span data-en="Documented end to end." data-et="Dokumenteeritud otsast lõpuni.">Documented end to end.</span>';
    const p=$('p',hero);
    if(p){
      p.setAttribute('data-en','A single Estonia property resolution can traverse official ADS address identity, source-native cadastral identity, parcel geometry, national land attributes, assessed land value, registration and legal-change context, property-object relationships, linked buildings, EHR specifications, construction materials, technical systems, building footprints, energy-certificate history, permits, document events, lifecycle state and provenance. The HTTP surface is compact; the response graph is not.');
      p.setAttribute('data-et','Üks Eesti kinnisvarapäring võib läbida ametliku ADS aadressiidentiteedi, allikapõhise katastriidentiteedi, katastrigeomeetria, riiklikud maaandmed, hinnatud maaväärtuse, registreerimis- ja õigusliku muudatuse konteksti, kinnisvaraobjektide seosed, seotud hooned, EHR tehnilised andmed, ehitusmaterjalid, tehnosüsteemid, hoone geomeetria, energiamärgiste ajaloo, load, dokumendisündmused, elutsükli oleku ja päritolu. HTTP pind on kompaktne; vastusegraaf ei ole.');
    }
    const actions=$('.hero-actions',hero);
    actions?.insertAdjacentHTML('afterend',`<div class="depth-banner"><strong data-en="Route count is not capability count." data-et="Endpointide arv ei ole võimekuste arv.">Route count is not capability count.</strong><span data-en="Estonia deliberately exposes a compact resolver surface. The depth lives inside the governed property response, where one match can attach many independent official-source intelligence domains with their own coverage state." data-et="Eesti kasutab teadlikult kompaktset resolveri pinda. Sügavus asub hallatud kinnisvaravastuses, kus üks vaste võib lisada palju sõltumatuid ametliku allika andmekihte, igal oma katvuse olekuga.">Estonia deliberately exposes a compact resolver surface. The depth lives inside the governed property response, where one match can attach many independent official-source intelligence domains with their own coverage state.</span></div>`);
  }

  const proof=$('.proof');
  if(proof&&!proof.querySelector('[data-depth-proof]')){
    proof.insertAdjacentHTML('beforeend','<div data-depth-proof><b>99.47%</b><span data-en="of current cadastral-unit graph land-enriched" data-et="praegusest katastriüksuste graafist maaandmetega rikastatud">of current cadastral-unit graph land-enriched</span></div>');
  }

  const quick=$('#quickstart');
  if(quick&&!$('#response-atlas')){
    quick.insertAdjacentHTML('afterend',`
      <section class="section" id="response-atlas">
        <h2 data-en="The response atlas: what one property can actually contain." data-et="Vastuse atlas: mida üks kinnisvara tegelikult võib sisaldada.">The response atlas: what one property can actually contain.</h2>
        <p data-en="The public contract is intentionally relationship-first. A property response is a graph envelope, not a flat parcel row. These domains are independently coverage-aware and can coexist in one resolved response." data-et="Avalik leping on teadlikult seosepõhine. Kinnisvaravastus on graafi ümbrik, mitte lame katastririda. Need domeenid on iseseisvalt katvusteadlikud ja võivad olla ühes lahendatud vastuses koos.">The public contract is intentionally relationship-first. A property response is a graph envelope, not a flat parcel row. These domains are independently coverage-aware and can coexist in one resolved response.</p>
        <div class="contract-flow">
          <div><small>01 · RESOLVE</small><b>Address / cadastral code / canonical ID / coordinates</b></div>
          <div><small>02 · IDENTITY</small><b>ADS + native cadastral identity</b></div>
          <div><small>03 · LAND</small><b>Area + use + value + change context</b></div>
          <div><small>04 · GRAPH</small><b>Addresses + objects + parcels + buildings</b></div>
          <div><small>05 · EHR</small><b>Building + systems + energy + documents</b></div>
          <div><small>06 · CONTRACT</small><b>Coverage + lifecycle + provenance</b></div>
        </div>
        <div class="layer-grid">
          <article class="card schema-card"><b>Resolution contract</b><code class="schema-path">country_code · match_level · coverage_status · parcel_resolution</code><ul><li data-en="Separates match quality from enrichment availability." data-et="Eristab vaste kvaliteedi rikastuse saadavusest.">Separates match quality from enrichment availability.</li><li data-en="Keeps partial enrichment from invalidating a verified base property." data-et="Ei lase osalisel rikastusel kehtivat baaskinnisvara tühistada.">Keeps partial enrichment from invalidating a verified base property.</li></ul></article>
          <article class="card schema-card"><b>Official address identity</b><code class="schema-path">address.*</code><ul><li>global_address_id · address_id · full_address · postcode</li><li>latitude · longitude · source_coordinates</li><li>address_lifecycle · validity · native_identity</li><li>hierarchy_levels[]</li></ul></article>
          <article class="card schema-card"><b>Native cadastral identity</b><code class="schema-path">estonia.native_identity.*</code><ul><li>cadastral_code · ads_oid · adob_id</li><li>canonical_parcel_id · global_parcel_id</li><li>object_class · object_class_name</li><li>source_revision</li></ul></article>
          <article class="card schema-card"><b>Parcel spatial context</b><code class="schema-path">parcel.*</code><ul><li>global_parcel_id · parcel_id</li><li>centroid · geometry · bbox</li><li>source · fetched_at</li></ul></article>
          <article class="card schema-card"><b>Cadastral land intelligence</b><code class="schema-path">estonia.land.*</code><ul><li>area + intended uses + land-cover composition</li><li>assessed land value + registered-immovable reference</li><li>registration/change/legal-basis context</li><li>source revision + provenance</li></ul></article>
          <article class="card schema-card"><b>Relationship graph</b><code class="schema-path">related_objects · parcel_object · related_addresses · building_relationships</code><ul><li data-en="Preserves explicit object↔address and building↔parcel relationships." data-et="Säilitab selged objekt↔aadress ja hoone↔katastriüksus seosed.">Preserves explicit object↔address and building↔parcel relationships.</li><li data-en="Avoids flattening many official objects into one guessed record." data-et="Väldib paljude ametlike objektide surumist üheks oletuslikuks kirjeks.">Avoids flattening many official objects into one guessed record.</li></ul></article>
          <article class="card schema-card"><b>EHR building dossier</b><code class="schema-path">estonia.ehr_buildings[]</code><ul><li>identity · status · kind · ownership category</li><li>first-use year · primary use · dimensions · uses</li><li>technical indicators · systems · materials</li><li>source addresses · cadastral units · energy · documents</li></ul></article>
          <article class="card schema-card"><b>Energy-certificate history</b><code class="schema-path">energy_certificate_history.*</code><ul><li>certificate/document number</li><li>ETA / KEK type + value</li><li>energy class + status</li><li>issue / validity dates where published</li></ul></article>
          <article class="card schema-card"><b>Document timeline</b><code class="schema-path">documents.*</code><ul><li>document ID + source type + number</li><li>normalized category + registry state</li><li>event date + bounded item counts</li><li>permit / occupancy / notice / design / energy / registry events</li></ul></article>
        </div>
        <div class="callout blue"><strong data-en="The key architectural point:" data-et="Peamine arhitektuuriline mõte:">The key architectural point:</strong> <span data-en="the API does not make customers reproduce ADS object joins, cadastral reconciliation, spatial attachment, EHR integration, document normalization, lifecycle interpretation or source-provenance rules themselves." data-et="API ei sunni klienti ise kordama ADS objektiseoseid, katastri lepitamist, ruumilist sidumist, EHR integratsiooni, dokumentide normaliseerimist, elutsükli tõlgendamist ega allika päritolu reegleid.">the API does not make customers reproduce ADS object joins, cadastral reconciliation, spatial attachment, EHR integration, document normalization, lifecycle interpretation or source-provenance rules themselves.</span></div>
      </section>
    `);
  }

  const land=$('#land');
  if(land&&!land.querySelector('.depth-table')){
    land.insertAdjacentHTML('beforeend',`
      <h3 data-en="Land field contract" data-et="Maaandmete väljade leping">Land field contract</h3>
      <table class="table depth-table"><thead><tr><th>Field</th><th data-en="Domain" data-et="Domeen">Domain</th><th data-en="Meaning" data-et="Tähendus">Meaning</th></tr></thead><tbody>
        <tr><td>area_sqm</td><td>geometry / land</td><td data-en="Official cadastral area." data-et="Ametlik katastripindala.">Official cadastral area.</td></tr>
        <tr><td>intended_uses[]</td><td>land use</td><td data-en="Published intended-use categories with percentages." data-et="Avaldatud sihtotstarbe kategooriad koos protsentidega.">Published intended-use categories with percentages.</td></tr>
        <tr><td>land_cover.*</td><td>land composition</td><td data-en="Cultivated, natural grassland, forest, courtyard and other area in square metres where published." data-et="Haritava maa, loodusliku rohumaa, metsa, õuemaa ja muu maa pindala ruutmeetrites, kui avaldatud.">Cultivated, natural grassland, forest, courtyard and other area in square metres where published.</td></tr>
        <tr><td>ownership_type</td><td>legal category</td><td data-en="Official ownership category — not named owner identity." data-et="Ametlik omandikategooria — mitte omaniku nimi.">Official ownership category — not named owner identity.</td></tr>
        <tr><td>assessed_land_value_eur</td><td>official value</td><td data-en="Official assessed cadastral land value in EUR; not a market AVM." data-et="Ametlik hinnatud katastrimaa väärtus eurodes; mitte turu-AVM.">Official assessed cadastral land value in EUR; not a market AVM.</td></tr>
        <tr><td>registered_immovable_number</td><td>registry reference</td><td data-en="Published registered-immovable reference where available." data-et="Avaldatud kinnistu viide, kui saadaval.">Published registered-immovable reference where available.</td></tr>
        <tr><td>registration_date</td><td>lifecycle</td><td data-en="Cadastral registration date." data-et="Katastri registreerimise kuupäev.">Cadastral registration date.</td></tr>
        <tr><td>modified_date</td><td>lifecycle</td><td data-en="Published source modification date." data-et="Avaldatud allika muutmise kuupäev.">Published source modification date.</td></tr>
        <tr><td>last_change_reason</td><td>change context</td><td data-en="Reason associated with the most recent published cadastral change." data-et="Viimase avaldatud katastrimuudatusega seotud põhjus.">Reason associated with the most recent published cadastral change.</td></tr>
        <tr><td>legal_basis_last_change</td><td>legal context</td><td data-en="Published legal basis for the latest cadastral change where supplied by source." data-et="Viimase katastrimuudatuse avaldatud õiguslik alus, kui allikas selle annab.">Published legal basis for the latest cadastral change where supplied by source.</td></tr>
        <tr><td>ads_oid · adob_id</td><td>native identity</td><td data-en="Source-native identifiers connecting the land record back into the ADS graph." data-et="Allikapõhised identifikaatorid, mis seovad maa kirje tagasi ADS graafi.">Source-native identifiers connecting the land record back into the ADS graph.</td></tr>
        <tr><td>export_date · source_revision</td><td>provenance</td><td data-en="Source snapshot/revision context for traceability." data-et="Allika väljavõtte/revisjoni kontekst jälgitavuse jaoks.">Source snapshot/revision context for traceability.</td></tr>
      </tbody></table>
    `);
  }

  const relationships=$('#relationships');
  if(relationships&&!relationships.querySelector('.graph-counts')){
    relationships.insertAdjacentHTML('beforeend',`
      <div class="graph-counts"><div><b>1.39M+</b><span data-en="official-source address identities" data-et="ametliku allika aadressiidentiteeti">official-source address identities</span></div><div><b>2.44M+</b><span data-en="property objects" data-et="kinnisvaraobjekti">property objects</span></div><div><b>10.27M+</b><span data-en="object ↔ address relationships" data-et="objekt ↔ aadress seost">object ↔ address relationships</span></div><div><b>971K+</b><span data-en="building ↔ parcel relationships" data-et="hoone ↔ katastriüksuse seost">building ↔ parcel relationships</span></div><div><b>778K+</b><span data-en="land-enriched cadastral units" data-et="maaandmetega rikastatud katastriüksust">land-enriched cadastral units</span></div></div>
      <div class="grid">
        <article class="card"><b><code>related_objects</code></b><p data-en="Source-aware property objects related to the resolved address or parcel context." data-et="Allikateadlikud kinnisvaraobjektid, mis on seotud lahendatud aadressi või katastri kontekstiga.">Source-aware property objects related to the resolved address or parcel context.</p></article>
        <article class="card"><b><code>estonia.parcel_object</code></b><p data-en="The cadastral/property object attached to the canonical parcel identity where resolved." data-et="Katastri/kinnisvara objekt, mis on seotud kanoonilise katastriidentiteediga, kui lahendatud.">The cadastral/property object attached to the canonical parcel identity where resolved.</p></article>
        <article class="card"><b><code>estonia.source_address</code></b><p data-en="The official source address used inside the Estonia graph rather than only a normalized display string." data-et="Eesti graafis kasutatav ametlik allika aadress, mitte ainult normaliseeritud kuvatekst.">The official source address used inside the Estonia graph rather than only a normalized display string.</p></article>
        <article class="card"><b><code>estonia.related_addresses</code></b><p data-en="Additional address relationships preserved when the official object graph supports more than one address context." data-et="Täiendavad aadressiseosed säilitatakse, kui ametlik objektigraaf toetab rohkem kui üht aadressikonteksti.">Additional address relationships preserved when the official object graph supports more than one address context.</p></article>
        <article class="card"><b><code>estonia.building_relationships</code></b><p data-en="Explicit building-to-cadastral relationships stay separate from the EHR building dossier itself." data-et="Selged hoone-katastri seosed jäävad EHR hoonedosjeest eraldi.">Explicit building-to-cadastral relationships stay separate from the EHR building dossier itself.</p></article>
        <article class="card"><b><code>address.hierarchy_levels[]</code></b><p data-en="Preserves official address hierarchy instead of collapsing locality and administrative context into one string." data-et="Säilitab ametliku aadressihierarhia, selle asemel et asukoha ja halduskonteksti üheks tekstiks kokku suruda.">Preserves official address hierarchy instead of collapsing locality and administrative context into one string.</p></article>
      </div>
    `);
  }

  const buildings=$('#buildings');
  if(buildings&&!buildings.querySelector('[data-building-depth]')){
    buildings.insertAdjacentHTML('beforeend',`
      <div data-building-depth>
        <h3 data-en="EHR building response map" data-et="EHR hoone vastusekaart">EHR building response map</h3>
        <div class="layer-grid">
          <article class="card schema-card"><b>Identity & classification</b><code class="schema-path">ehr_code · global_building_id</code><ul><li>building_name · full_address</li><li>status · building_kind · ownership_type</li><li>first_usage_year · primary_use</li></ul></article>
          <article class="card schema-card"><b>Dimensions & use</b><code class="schema-path">dimensions · uses[]</code><ul><li>floors_count</li><li>footprint_area_sqm</li><li>closed_net_area_sqm</li><li>gross_volume_cubic_m</li><li data-en="residential / non-residential areas where published" data-et="elu- / mitteeluruumide pindalad, kui avaldatud">residential / non-residential areas where published</li></ul></article>
          <article class="card schema-card"><b>Construction intelligence</b><code class="schema-path">technical_indicators[] · technical_systems[] · construction_materials[]</code><ul><li data-en="Published technical characteristics" data-et="Avaldatud tehnilised näitajad">Published technical characteristics</li><li data-en="Building systems and installations" data-et="Hoone süsteemid ja paigaldised">Building systems and installations</li><li data-en="Construction material records" data-et="Ehitusmaterjalide kirjed">Construction material records</li></ul></article>
          <article class="card schema-card"><b>Relationship context</b><code class="schema-path">source_addresses[] · source_cadastral_units[]</code><ul><li data-en="Keeps EHR's own source address links visible." data-et="Säilitab EHR enda allika aadressiseosed nähtavana.">Keeps EHR's own source address links visible.</li><li data-en="Keeps source cadastral links alongside canonical PropData relationships." data-et="Säilitab allika katastriseosed koos PropData kanooniliste seostega.">Keeps source cadastral links alongside canonical PropData relationships.</li></ul></article>
          <article class="card schema-card"><b>Physical geometry</b><code class="schema-path">building footprint geometry</code><ul><li data-en="Building footprint is a separate source-aware spatial layer from parcel geometry." data-et="Hoone geomeetria on katastrigeomeetriast eraldi allikateadlik ruumikiht.">Building footprint is a separate source-aware spatial layer from parcel geometry.</li><li data-en="Returned where the EHR layer publishes/materializes it." data-et="Tagastatakse seal, kus EHR kiht selle avaldab/materialiseerib.">Returned where the EHR layer publishes/materializes it.</li></ul></article>
          <article class="card schema-card"><b>History</b><code class="schema-path">energy_certificate_history · documents</code><ul><li data-en="Energy metrics and validity history." data-et="Energia näitajad ja kehtivusajalugu.">Energy metrics and validity history.</li><li data-en="Normalized permit, occupancy, notice, design and registry events." data-et="Normaliseeritud loa-, kasutus-, teate-, projekteerimis- ja registrisündmused.">Normalized permit, occupancy, notice, design and registry events.</li></ul></article>
        </div>
      </div>
    `);
  }

  const energy=$('#energy');
  if(energy&&!energy.querySelector('.depth-table')){
    energy.insertAdjacentHTML('beforeend',`
      <table class="table depth-table"><thead><tr><th>Field</th><th data-en="What it carries" data-et="Mida väli kannab">What it carries</th><th data-en="Contract note" data-et="Lepingu märkus">Contract note</th></tr></thead><tbody>
        <tr><td>document_number</td><td data-en="Published certificate/document identifier." data-et="Avaldatud märgise/dokumendi identifikaator.">Published certificate/document identifier.</td><td data-en="Source fact." data-et="Allikafakt.">Source fact.</td></tr>
        <tr><td>eta_kek_type</td><td data-en="ETA or KEK metric type." data-et="ETA või KEK näitaja tüüp.">ETA or KEK metric type.</td><td data-en="Preserve source semantics." data-et="Säilita allika semantika.">Preserve source semantics.</td></tr>
        <tr><td>eta_kek_value</td><td data-en="Published energy-performance metric value." data-et="Avaldatud energiatõhususe näitaja väärtus.">Published energy-performance metric value.</td><td data-en="Do not reinterpret without source context." data-et="Ära tõlgenda ilma allikakontekstita ümber.">Do not reinterpret without source context.</td></tr>
        <tr><td>energy_class</td><td data-en="Published energy class." data-et="Avaldatud energiaklass.">Published energy class.</td><td data-en="Historical certificate context may differ over time." data-et="Ajaloolise märgise kontekst võib ajas erineda.">Historical certificate context may differ over time.</td></tr>
        <tr><td>status</td><td data-en="Certificate/source status where published." data-et="Märgise/allika olek, kui avaldatud.">Certificate/source status where published.</td><td data-en="Coverage-aware." data-et="Katvusteadlik.">Coverage-aware.</td></tr>
        <tr><td>issue / valid_from</td><td data-en="Published start or issue date." data-et="Avaldatud algus- või väljastuskuupäev.">Published start or issue date.</td><td data-en="Use returned source field semantics." data-et="Kasuta tagastatud allikavälja semantikat.">Use returned source field semantics.</td></tr>
        <tr><td>valid_to</td><td data-en="Published expiry/end date." data-et="Avaldatud lõpp-/aegumiskuupäev.">Published expiry/end date.</td><td data-en="Not proof of current building condition." data-et="Ei tõesta hoone praegust seisukorda.">Not proof of current building condition.</td></tr>
      </tbody></table>
    `);
  }

  const documents=$('#documents');
  if(documents&&!documents.querySelector('[data-doc-depth]')){
    documents.insertAdjacentHTML('beforeend',`
      <div data-doc-depth>
        <h3 data-en="Normalized document vocabulary" data-et="Normaliseeritud dokumendisõnavara">Normalized document vocabulary</h3>
        <div class="doc-chip-row"><span class="doc-chip">building_permit</span><span class="doc-chip">building_permit_application</span><span class="doc-chip">occupancy_permit</span><span class="doc-chip">use_notice</span><span class="doc-chip">construction_start_notice</span><span class="doc-chip">design_conditions</span><span class="doc-chip">energy_certificate</span><span class="doc-chip">restriction_notice</span><span class="doc-chip">registry_correction</span><span class="doc-chip">address_record_event</span></div>
        <p data-en="The normalized category is additive: PropData keeps source document identifiers and type text so applications can group events without losing the original EHR meaning." data-et="Normaliseeritud kategooria on lisakiht: PropData säilitab allika dokumendi identifikaatorid ja tüübi teksti, et rakendused saaksid sündmusi rühmitada ilma EHR algset tähendust kaotamata.">The normalized category is additive: PropData keeps source document identifiers and type text so applications can group events without losing the original EHR meaning.</p>
        <table class="table depth-table"><thead><tr><th>Field</th><th data-en="Purpose" data-et="Otstarve">Purpose</th><th data-en="Example / behaviour" data-et="Näide / käitumine">Example / behaviour</th></tr></thead><tbody>
          <tr><td>document_id</td><td data-en="Source event identity." data-et="Allika sündmuse identiteet.">Source event identity.</td><td>9522946</td></tr>
          <tr><td>document_type_id</td><td data-en="Source-native type identifier." data-et="Allikapõhine tüübi identifikaator.">Source-native type identifier.</td><td>12229</td></tr>
          <tr><td>document_type</td><td data-en="Original EHR type text." data-et="Algne EHR tüübi tekst.">Original EHR type text.</td><td>Ehitusluba ehitise laiendamiseks</td></tr>
          <tr><td>document_number</td><td data-en="Published document/reference number." data-et="Avaldatud dokumendi/viite number.">Published document/reference number.</td><td>36591</td></tr>
          <tr><td>category</td><td data-en="PropData normalized event family." data-et="PropData normaliseeritud sündmuseperekond.">PropData normalized event family.</td><td>building_permit</td></tr>
          <tr><td>state_text</td><td data-en="Published registry state text." data-et="Avaldatud registri oleku tekst.">Published registry state text.</td><td>Registrisse kantud</td></tr>
          <tr><td>date</td><td data-en="Published event/document date." data-et="Avaldatud sündmuse/dokumendi kuupäev.">Published event/document date.</td><td>2009-02-02T22:00:00+00:00</td></tr>
          <tr><td>count / returned / truncated / scanned</td><td data-en="Collection-level delivery semantics." data-et="Kogumi taseme tarne semantika.">Collection-level delivery semantics.</td><td data-en="Distinguish total history from bounded returned items." data-et="Erista kogu ajalugu piiratud tagastatud kirjetest.">Distinguish total history from bounded returned items.</td></tr>
        </tbody></table>
      </div>
    `);
  }

  const platform=$('#platform');
  if(platform&&!$('#delivery')){
    platform.insertAdjacentHTML('afterend',`
      <section class="section" id="delivery">
        <h2 data-en="Estonia is one country product inside a larger delivery platform." data-et="Eesti on üks riigipõhine toode suuremas tarneplatvormis.">Estonia is one country product inside a larger delivery platform.</h2>
        <p data-en="The Estonia graph does not have to be consumed only as browser-visible REST calls. PropData supports multiple commercial delivery shapes while keeping the same source-aware country semantics." data-et="Eesti graafi ei pea tarbima ainult brauseris nähtavate REST päringutena. PropData toetab mitut kommertslikku tarneviisi, säilitades samad allikateadlikud riigisemantikad.">The Estonia graph does not have to be consumed only as browser-visible REST calls. PropData supports multiple commercial delivery shapes while keeping the same source-aware country semantics.</p>
        <div class="delivery-grid">
          <article class="card"><b>REST API</b><p data-en="Country-scoped production property resolution through the shared PropData edge." data-et="Riigipõhine tootmiskinnisvara lahendus jagatud PropData edge'i kaudu.">Country-scoped production property resolution through the shared PropData edge.</p></article>
          <article class="card"><b>OAuth MCP</b><p data-en="Customer-safe AI-client delivery through the separate OAuth-protected MCP authorization flow." data-et="Kliendile ohutu AI-kliendi tarne eraldi OAuth-kaitstud MCP autoriseerimisvoo kaudu.">Customer-safe AI-client delivery through the separate OAuth-protected MCP authorization flow.</p></article>
          <article class="card"><b>Bulk / licensed delivery</b><p data-en="Enterprise graph delivery for workflows that should not be modeled as one request at a time." data-et="Enterprise graafitarne töövoogudele, mida ei ole mõistlik modelleerida ühe päringu kaupa.">Enterprise graph delivery for workflows that should not be modeled as one request at a time.</p></article>
          <article class="card"><b>White-label / embedded</b><p data-en="Embed the property-intelligence contract inside a customer product without rebuilding Estonia ingestion and joins." data-et="Integreeri kinnisvaraandmete leping kliendi tootesse ilma Eesti ingest'i ja seoseid uuesti ehitamata.">Embed the property-intelligence contract inside a customer product without rebuilding Estonia ingestion and joins.</p></article>
          <article class="card"><b>Custom endpoints</b><p data-en="Workflow-specific response contracts for enterprise applications when the standard resolver shape is not the best product interface." data-et="Töövoopõhised vastuselepingud enterprise rakendustele, kui standardne resolver ei ole parim tooteliides.">Workflow-specific response contracts for enterprise applications when the standard resolver shape is not the best product interface.</p></article>
          <article class="card"><b>Multi-country PropData</b><p data-en="Reuse one broader platform relationship across Estonia and other supported PropData country graphs." data-et="Kasuta sama laiemat platvormisuhet Eesti ja teiste toetatud PropData riigigraafide vahel.">Reuse one broader platform relationship across Estonia and other supported PropData country graphs.</p></article>
        </div>
      </section>
      <section class="section" id="land-register-boundary">
        <h2 data-en="The land-register layer is deeper — and deliberately gated." data-et="Kinnistusraamatu kiht on sügavam — ja teadlikult piiratud.">The land-register layer is deeper — and deliberately gated.</h2>
        <p data-en="The Estonia response contract reserves a separate land-register domain for RIK e-Land Register workflows. Named owners, current mortgages and current registered legal rights/restrictions are not inferred from open cadastral ownership categories or historical EHR notices. Those workflows require the applicable access, licensing and downstream controls." data-et="Eesti vastuselepingus on eraldi kinnistusraamatu domeen RIK e-kinnistusraamatu töövoogude jaoks. Nimetatud omanikke, kehtivaid hüpoteeke ega registreeritud õigusi/piiranguid ei tuletata avatud katastri omandikategooriatest ega ajaloolistest EHR teadetest. Need töövood nõuavad vastavat ligipääsu, litsentsi ja downstream-kontrolle.">The Estonia response contract reserves a separate land-register domain for RIK e-Land Register workflows. Named owners, current mortgages and current registered legal rights/restrictions are not inferred from open cadastral ownership categories or historical EHR notices. Those workflows require the applicable access, licensing and downstream controls.</p>
        <div class="callout warn"><strong data-en="Important boundary:" data-et="Oluline piir:">Important boundary:</strong> <span data-en="open cadastral ownership_type is a category, not named ownership; historical EHR document events are not a substitute for current land-register legal rights." data-et="avatud katastri ownership_type on kategooria, mitte omaniku nimi; ajaloolised EHR dokumendisündmused ei asenda kehtivaid kinnistusraamatu õigusi.">open cadastral ownership_type is a category, not named ownership; historical EHR document events are not a substitute for current land-register legal rights.</span></div>
      </section>
    `);
  }

  const aside=$('aside');
  if(aside&&!aside.querySelector('[href="#response-atlas"]')){
    aside.insertAdjacentHTML('beforeend',`
      <div class="st" data-en="Response graph" data-et="Vastusegraaf">Response graph</div>
      <a class="sl" href="#response-atlas" data-en="Full response atlas" data-et="Täielik vastuse atlas">Full response atlas</a>
      <a class="sl" href="#land" data-en="Land field contract" data-et="Maa väljade leping">Land field contract</a>
      <a class="sl" href="#relationships" data-en="Relationship graph" data-et="Seostegraaf">Relationship graph</a>
      <a class="sl" href="#buildings" data-en="EHR building schema" data-et="EHR hoone skeem">EHR building schema</a>
      <a class="sl" href="#energy" data-en="Energy schema" data-et="Energia skeem">Energy schema</a>
      <a class="sl" href="#documents" data-en="Document vocabulary" data-et="Dokumendisõnavara">Document vocabulary</a>
      <div class="st" data-en="Delivery & legal" data-et="Tarne ja õigus">Delivery & legal</div>
      <a class="sl" href="#delivery" data-en="Delivery modes" data-et="Tarneviisid">Delivery modes</a>
      <a class="sl" href="#land-register-boundary" data-en="Land-register boundary" data-et="Kinnistusraamatu piir">Land-register boundary</a>
    `);
  }

  apply();
  window.addEventListener('propdata-ee-language',apply);
})();

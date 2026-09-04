from pathlib import Path

PATH = Path('index.html')
text = PATH.read_text(encoding='utf-8')


def replace_once(old: str, new: str, label: str) -> None:
    global text
    count = text.count(old)
    if count != 1:
        raise SystemExit(f'{label}: expected exactly 1 match, found {count}')
    text = text.replace(old, new, 1)


replace_once(
    '<title>Estonia Property Data API — Addresses, Cadastral Parcels & Geometry | PropData</title>',
    '<title>Estonia Property Intelligence API — Land, Buildings, Energy & Permits | PropData</title>',
    'title',
)
replace_once(
    '<meta name="description" content="Build on Estonia\'s official property data with normalized addresses, cadastral identity, available parcel geometry, buildings, relationships and source provenance through one API.">',
    '<meta name="description" content="Resolve Estonia property identity into national cadastral land intelligence, assessed land value, ADS relationships, available geometry and coverage-aware EHR buildings, energy certificates and document history through one PropData API.">',
    'meta description',
)
replace_once(
    '<meta property="og:title" content="Estonia\'s property infrastructure. One API.">',
    '<meta property="og:title" content="Estonia\'s property intelligence layer. One API.">',
    'og title',
)
replace_once(
    '<meta property="og:description" content="Official-source Estonian addresses, cadastral identity, available parcel geometry, buildings and property relationships — normalized for developers by PropData.">',
    '<meta property="og:description" content="Official-source Estonia property identity, national cadastral land intelligence, assessed value, ADS relationships, geometry and coverage-aware EHR building, energy and document history — normalized by PropData.">',
    'og description',
)
replace_once(
    '<meta name="twitter:title" content="Estonia\'s property infrastructure. One API.">',
    '<meta name="twitter:title" content="Estonia\'s property intelligence layer. One API.">',
    'twitter title',
)
replace_once(
    '<meta name="twitter:description" content="Official-source Estonian property identity, cadastral context, buildings and available geometry through one normalized developer API.">',
    '<meta name="twitter:description" content="National cadastral land intelligence, assessed value, relationships, geometry and coverage-aware EHR building, energy and document history through one Estonia-native PropData contract.">',
    'twitter description',
)
replace_once(
    '"description":"Estonia property and cadastral data API with official-source address identity, cadastral context, available geometry, buildings, relationships and provenance-aware responses.",',
    '"description":"Estonia property intelligence API with official-source address and cadastral identity, national land intelligence, assessed land value, ADS relationships, available geometry and coverage-aware EHR building, energy and document history.",',
    'schema description',
)
replace_once(
    '''        "featureList":[
          "Official Estonian address resolution",
          "Cadastral identity and identifiers",
          "Available parcel geometry",
          "Building-to-parcel relationships",
          "Source provenance and match semantics",
          "REST API access"
        ],''',
    '''        "featureList":[
          "Official Estonian address resolution",
          "Native cadastral-code property resolution",
          "National cadastral land intelligence",
          "Official assessed land value",
          "ADS property-object relationships",
          "Available parcel geometry",
          "Building-to-parcel relationships",
          "Coverage-aware EHR building specifications",
          "Energy certificate history",
          "Permit and document history",
          "Source provenance and coverage semantics",
          "REST API access"
        ],''',
    'schema feature list',
)
replace_once(
    '"text":"PropData Estonia normalizes official-source Estonian address and cadastral records into a developer API with property identity, available parcel geometry, buildings, explicit relationships, match status and source provenance."',
    '"text":"PropData Estonia normalizes official-source Estonian address, cadastral and EHR systems into a country-native property API with national land intelligence, assessed land value, explicit relationships, available geometry and coverage-aware building, energy and document history."',
    'schema FAQ answer',
)
replace_once(
    '<p data-en="Resolve Estonian addresses, cadastral units or coordinates into official property identity, available parcel geometry and building relationships — powered by official sources and normalized by PropData." data-et="Lahenda Eesti aadress, katastriüksus või koordinaadid ametlikuks kinnisvaraidentiteediks, olemasolevaks katastrigeomeetriaks ja hooneseosteks — ametlike allikate põhjal ning PropData poolt normaliseerituna.">Resolve Estonian addresses, cadastral units or coordinates into official property identity, available parcel geometry and building relationships — powered by official sources and normalized by PropData.</p>',
    '<p data-en="Resolve an Estonian address, native cadastral code or coordinate into property identity, national land intelligence, assessed land value, available parcel geometry and — where covered — EHR building specifications, energy certificates and document history." data-et="Lahenda Eesti aadress, katastritunnus või koordinaat kinnisvaraidentiteediks, riiklikuks maa-intelligentsiks, maa hinnatud väärtuseks, olemasolevaks katastrigeomeetriaks ning katvuse korral EHR hooneandmeteks, energiamärgisteks ja dokumendiajalooks.">Resolve an Estonian address, native cadastral code or coordinate into property identity, national land intelligence, assessed land value, available parcel geometry and — where covered — EHR building specifications, energy certificates and document history.</p>',
    'hero lead',
)
replace_once(
    '<div><b>505K+</b><span data-en="Parcels with geometry" data-et="Geomeetriaga katastriüksust">Parcels with geometry</span></div>',
    '<div><b>778K+</b><span data-en="Land-enriched cadastral units" data-et="Maaandmetega rikastatud katastriüksust">Land-enriched cadastral units</span></div>',
    'hero metric',
)

PATH.write_text(text, encoding='utf-8')
print('ESTONIA HOMEPAGE DEEP CONTRACT PROMOTION: PASS')

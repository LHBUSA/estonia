# 🇪🇪 Estonia Property Intelligence — PropData

### From cadastral identity to property intelligence.

**PropData Estonia** gives developers a source-aware API over Estonia's official property infrastructure.

Resolve an **official address, native cadastral code, canonical parcel ID, or coordinate** into a governed property graph that can include:

- official cadastral land attributes
- assessed land value
- registered-immovable reference
- available parcel geometry
- ADS identities and address hierarchy
- building ↔ parcel relationships
- EHR building specifications
- available building footprints
- energy certificate history
- building permits and document history
- explicit match, coverage, lifecycle, and provenance signals

> **Coverage is explicit.** PropData returns source facts that are actually available for the resolved property. Missing or unverified source facts are not fabricated.

---

## Current Estonia Coverage

### Cadastral land intelligence — live nationally

The current national baseline contains **778K+ land-enriched cadastral units**, representing approximately **99.47% of the current PropData cadastral-unit graph**.

For loaded cadastral units, the API can include area, intended land use and percentages, land-cover areas, ownership type, official assessed land value in EUR, registered immovable number, registration/change dates, change reason, legal basis, source revision, and provenance.

### Geometry — coverage-aware

National parcel geometry reconciliation is expanding materialized polygon coverage. If geometry is returned for a property, use it. Do not infer that a cadastral unit has no polygon merely because geometry is unavailable.

### EHR building intelligence — coverage-aware

For populated EHR-linked buildings, responses can include building status, first-use year, primary use, floors, closed net area, footprint, volume, construction materials, technical systems, available building footprint geometry, energy certificates, permits, and document history.

---

## Core Workflows

| Workflow | Route |
|---|---|
| Address → property | `GET /v1/property` |
| Native cadastral code → property | `GET /v1/property` |
| Canonical parcel ID → property | `GET /v1/property` |
| Coordinates → property | `GET /v1/property/by-location` |
| Country capabilities | `GET /v1/countries` |
| API health | `GET /v1/health` |
| Platform stats | `GET /v1/stats` |
| Production changes | `GET /v1/changelog` |

The HTTP surface stays intentionally compact. The depth is in the **property response**, not in dozens of disconnected endpoints.

---

## Quick Start

### Native cadastral code

```http
GET /v1/property?country=EE&parcel=78404:406:4330
```

### Address

```http
GET /v1/property?country=EE&address=Viljandi%20maakond%2C%20Mulgi%20vald%2C%20Abja-Paluoja%20linn%2C%20Pärnu%20mnt%2051a
```

### Coordinates

```http
GET /v1/property/by-location?country=EE&lat=58.12511901&lng=25.34680635
```

RapidAPI supplies marketplace authentication headers in its generated requests.

---

## Example: One Cadastral Lookup, Multiple Official Systems

```json
{
  "country_code": "EE",
  "match_level": "cadastral_code",
  "coverage_status": "live_enriched",
  "parcel": {
    "global_parcel_id": "EE:MAARUUM:CADASTRE:ads_ky.10761487",
    "geometry": { "type": "Polygon" }
  },
  "estonia": {
    "land": {
      "cadastral_code": "78404:406:4330",
      "area_sqm": 600,
      "intended_uses": [{ "use": "ELAMUMAA", "percent": 100 }],
      "ownership_type": "Eraomand",
      "assessed_land_value_eur": 123108,
      "registered_immovable_number": "3298301"
    },
    "ehr_buildings": [{
      "ehr_code": "101000361",
      "first_usage_year": 1956,
      "dimensions": {
        "floors_count": 2,
        "closed_net_area_sqm": 113,
        "footprint_area_sqm": 92
      },
      "energy_certificate_history": { "count": 1 },
      "documents": { "count": 14 }
    }]
  }
}
```

Exact fields depend on source coverage for the resolved property.

---

## Land Intelligence

`estonia.land` can include official cadastral area, intended uses, land-cover areas, ownership category, assessed land value, registered-immovable reference, registration/change dates, and source/legal-change context.

**`assessed_land_value_eur` is an official cadastral assessed value, not a market AVM.**

**`ownership_type` is an ownership category, not named owner identity.**

---

## EHR Building Intelligence

For populated linked buildings, `estonia.ehr_buildings[]` can contain EHR identity, status, first-use year, dimensions, uses, construction materials, technical systems, source addresses/cadastral links, energy certificate history, and document history.

---

## Permits & Document Timeline

PropData normalizes EHR document vocabulary into categories such as:

- `building_permit`
- `building_permit_application`
- `occupancy_permit`
- `use_notice`
- `construction_start_notice`
- `design_conditions`
- `energy_certificate`
- `restriction_notice`
- `registry_correction`
- `address_record_event`

Historical document events are not substitutes for current land-register legal rights.

---

## Important Legal-Data Boundary

Named owners, current mortgages, and current registered rights/restrictions belong to Estonia's **RIK e-Land Register** access model. They are not implied by the open cadastral `ownership_type` field or historical EHR document events.

---

## Plans

| Plan | Monthly Price | Included Requests |
|---|---:|---:|
| **BASIC** | Free | **20** |
| **PRO** | **$79** | **10,000** |
| **ULTRA** | **$229** | **50,000** |
| **MEGA** | **$619** | **250,000** |

The Basic plan is a small evaluation allowance, not a production tier.

---

## Official Sources

- **Maa- ja Ruumiamet** — address, cadastral identity, land attributes, and parcel geometry
- **Estonia Register of Construction Works (EHR)** — building specifications, building geometry, energy certificates, and document history

PropData is an independent product of **PropTechUSA.ai** and is not operated by or affiliated with the Estonian government.

**Product:** https://ee.proptechusa.ai  
**Docs:** https://ee.proptechusa.ai/docs  
**Global PropData:** https://propdata.proptechusa.ai  
**Support:** sales@proptechusa.ai

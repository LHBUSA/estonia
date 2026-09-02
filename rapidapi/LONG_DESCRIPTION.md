# Estonia's Property Intelligence Layer. One API.

**PropData Estonia** turns Estonia's official property systems into a normalized, developer-ready property intelligence contract.

Start with an **official address, native cadastral code, canonical parcel identity, or coordinate** and resolve into source-aware property context that can include:

- cadastral land attributes
- assessed land value
- registered-immovable reference
- parcel geometry
- ADS property identity
- building ↔ parcel relationships
- EHR building specifications
- available building footprints
- energy certificate history
- building permits and document history
- explicit match, coverage, lifecycle, and provenance signals

Instead of maintaining separate government downloads, cadastral joins, spatial pipelines, EHR integrations, identifier reconciliation, and source-specific document mappings, your application can consume the normalized graph through one API.

## National Cadastral Land Intelligence

The current PropData Estonia baseline contains **778K+ land-enriched cadastral units**, representing approximately **99.47% of the current PropData cadastral-unit graph**.

For loaded cadastral units, responses can include official area, intended land use and percentages, cultivated/grassland/forest/courtyard/other area, ownership type, assessed land value in EUR, registered immovable number, cadastral registration date, modification date, last-change reason, legal basis, source revision, and provenance.

**Assessed land value is an official cadastral value, not a PropData market AVM.**

**Ownership type is an official ownership category, not named owner identity.**

## Building Intelligence from EHR

Where the linked building layer is populated, PropData can attach information from the **Estonia Register of Construction Works (EHR)**, including EHR building code, status and kind, first-use year, primary use, floors, closed net area, footprint area, gross volume, residential/non-residential area, construction materials, technical systems, available building footprint geometry, source addresses, and cadastral links.

## Energy Certificate History

Published EHR certificate data can include certificate/document number, ETA or KEK type, ETA/KEK value, energy class, certificate status, issue date, and expiry date.

## Permits & Document History

PropData normalizes EHR's document vocabulary into a building timeline that can include building permits, permit applications, occupancy permits, use notices, construction-start notices, design conditions, energy-certificate events, restriction notices, registry corrections, and address-record events.

Applications and issued permits remain distinct. Historical restriction/owner notices are not represented as current legal ownership.

## Parcel + Building Geometry

Parcel polygons and building footprints are separate official-source layers. PropData normalizes available geometry into GeoJSON-compatible WGS84 output and preserves source identity and coverage semantics.

National parcel-geometry reconciliation is actively expanding materialized coverage, so applications should inspect the response rather than assume every cadastral unit currently has a polygon.

## One Property Contract

The HTTP surface is intentionally compact:

- `GET /v1/property` — address, native cadastral code, or canonical parcel resolution
- `GET /v1/property/by-location` — coordinate resolution
- `GET /v1/countries` — country capabilities
- `GET /v1/health` — service health
- `GET /v1/stats` — platform statistics
- `GET /v1/changelog` — production changes

The depth lives in the property response, not in dozens of disconnected endpoints.

## Source-Aware by Design

Property data should not become more certain simply because it passed through an API.

PropData preserves match level, coverage status, source-native identifiers, lifecycle information, source revision, and provenance. If a source does not publish or verify a fact, PropData keeps it unavailable instead of manufacturing one.

## Important Land-Register Boundary

Named owners, current mortgages, and current registered legal rights/restrictions belong to the **RIK e-Land Register** access model. They are not implied by the open cadastral `ownership_type` field or historical EHR document events. Licensed or enterprise legal-data workflows are handled separately.

## Built for Real Products

Use PropData Estonia for PropTech applications, GIS and mapping products, property research, due diligence, construction software, lending and underwriting workflows, AI agents, property analytics, real estate data platforms, and internal property infrastructure.

## Part of the PropData Global Platform

PropData Estonia is a dedicated Estonia commercial surface built on the broader PropData global property intelligence platform.

**Product:** https://ee.proptechusa.ai  
**Docs:** https://ee.proptechusa.ai/docs  
**Global PropData:** https://propdata.proptechusa.ai  
**Support:** sales@proptechusa.ai

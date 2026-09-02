# RapidAPI Feature Configuration

Recommended feature order:

| Feature | BASIC | PRO | ULTRA | MEGA |
|---|:---:|:---:|:---:|:---:|
| Estonia Property Lookup | ✓ | ✓ | ✓ | ✓ |
| National Cadastral Land Intelligence | ✓ | ✓ | ✓ | ✓ |
| Official Assessed Land Value | ✓ | ✓ | ✓ | ✓ |
| Native Cadastral Code Resolution | ✓ | ✓ | ✓ | ✓ |
| Coordinate → Property Resolution | ✓ | ✓ | ✓ | ✓ |
| Available Parcel Geometry | ✓ | ✓ | ✓ | ✓ |
| Building ↔ Parcel Relationships | ✓ | ✓ | ✓ | ✓ |
| EHR Building Specifications | ✓ | ✓ | ✓ | ✓ |
| Available Building Footprints | ✓ | ✓ | ✓ | ✓ |
| Energy Certificate History | ✓ | ✓ | ✓ | ✓ |
| Permits & Document Timeline | ✓ | ✓ | ✓ | ✓ |
| Source Provenance & Coverage Semantics | ✓ | ✓ | ✓ | ✓ |
| Commercial Production Use | — | ✓ | ✓ | ✓ |
| Priority Support | — | — | ✓ | ✓ |
| High-Volume Platform Workloads | — | — | — | ✓ |

Coverage-aware features return when the corresponding official source layer is populated for the resolved property. Do not describe optional EHR or geometry fields as guaranteed on every property.

## Feature descriptions

**Estonia Property Lookup**  
Resolve properties by official address, native cadastral code, canonical parcel identity, or supported location input.

**National Cadastral Land Intelligence**  
Official cadastral area, intended use, land-cover areas, registration/change context, ownership category, and registered-immovable reference where published.

**Official Assessed Land Value**  
Official cadastral assessed land value in EUR. This is distinct from a market valuation or AVM.

**Native Cadastral Code Resolution**  
Use Estonia's katastritunnus directly as a first-class property lookup input.

**Coordinate → Property Resolution**  
Resolve WGS84 latitude/longitude into containing Estonia property context.

**Available Parcel Geometry**  
GeoJSON-compatible parcel geometry where currently materialized.

**Building ↔ Parcel Relationships**  
Explicit ADS/EHR-connected relationships between cadastral units and buildings.

**EHR Building Specifications**  
Building use, status, first-use year, floors, areas, volume, materials, technical systems, and other published EHR attributes where covered.

**Available Building Footprints**  
WGS84 building footprint geometry when published by EHR.

**Energy Certificate History**  
Published certificate number, ETA/KEK metrics, energy class, status, issue date, and expiry date where covered.

**Permits & Document Timeline**  
Normalized building permits, applications, occupancy/use records, construction notices, design conditions, energy events, and registry history where covered.

**Source Provenance & Coverage Semantics**  
Preserve source identity, match level, lifecycle, revision, and coverage instead of fabricating missing source facts.

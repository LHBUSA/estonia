# RapidAPI Dashboard Paste Sheet — PropData Estonia

## API Name

**Estonia Property Intelligence — PropData**

## Short Description

**Official-source Estonia property intelligence API. Resolve addresses, native cadastral codes and coordinates into cadastral land data, assessed land value, available geometry, EHR building specifications, energy certificates, permits, document history and provenance.**

## Category

**Data** / Real Estate / Property Data, depending on available RapidAPI category choices.

## Website

https://ee.proptechusa.ai

## Documentation

https://ee.proptechusa.ai/docs

## Spotlight

### Title

**Estonia's Property Intelligence Layer. One API.**

### Description

**See how PropData connects official Estonian cadastral data with EHR building intelligence — land use, assessed land value, parcel and building geometry, energy certificates, permits, document history and source-aware property identity through one developer contract.**

### Link

https://ee.proptechusa.ai/

## Plans

| Plan | Price | Included Requests | Suggested Overage |
|---|---:|---:|---:|
| BASIC | $0 | 20 / month | Hard stop |
| PRO | $79 / month | 10,000 | $0.009 / request |
| ULTRA | $229 / month | 50,000 | $0.006 / request |
| MEGA | $619 / month | 250,000 | $0.004 / request |

### Suggested Rate Limits

- BASIC: 5 requests/minute
- PRO: 60 requests/minute
- ULTRA: 180 requests/minute
- MEGA: 600 requests/minute

## Current Coverage Language

Use this wording while the national deep backfills are running:

> **National cadastral land intelligence is live across 778K+ cadastral units. Parcel geometry, EHR building specifications, building footprints, energy certificates and document history are coverage-aware layers and return where currently populated. PropData does not fabricate unavailable source facts.**

Do **not** claim named owners, mortgages, or current land-register restrictions are included in the standard open-data product. Those belong to a separate RIK e-Land Register licensing/access layer.

## Endpoint Surface

- `GET /v1/property`
  - address → property
  - native cadastral code → property
  - canonical parcel ID → property
- `GET /v1/property/by-location`
  - coordinates → property
- `GET /v1/countries`
- `GET /v1/health`
- `GET /v1/stats`
- `GET /v1/changelog`

The API deliberately uses a compact route surface. Deep Estonia enrichment is returned in the resolved property response rather than fragmented into separate endpoint families.

## Upload File

Use `rapidapi/openapi.yaml` from this repository or the generated PropData Estonia RapidAPI OpenAPI v1.2 file.

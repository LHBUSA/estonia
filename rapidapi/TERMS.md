# PropData Estonia — Terms of Use

_Last updated: September 2, 2026_

By accessing or using PropData Estonia, you agree to these Terms of Use.

## Permitted Use

PropData Estonia may be used in lawful software applications, PropTech products, GIS tools, analytics platforms, AI systems, research tools, underwriting workflows, construction software, internal business systems, and other legitimate commercial or technical applications subject to your subscription and these Terms.

## Prohibited Use

You may not use the API for unlawful, fraudulent, deceptive, abusive, or discriminatory purposes; bypass authentication, usage limits, rate limits, or security controls; share or publicly expose API credentials; attack, interfere with, or reverse engineer PropData infrastructure; bulk extract the service to create a substitute PropData database; or resell the PropData API as a substantially identical competing API without written permission.

## Official-Source Data

PropData Estonia normalizes information derived from official Estonian source systems, including data associated with **Maa- ja Ruumiamet** and the **Estonia Register of Construction Works (EHR)**.

PropData is an independent product of PropTechUSA.ai and is not operated by, endorsed by, or affiliated with the Estonian government, Maa- ja Ruumiamet, EHR, or RIK.

Source data may change, contain errors, be delayed, become unavailable, or vary in completeness by property and source layer.

## Coverage & Missing Facts

PropData is designed to preserve truthful source coverage. If an official property fact is unavailable or cannot be verified, the API may return null, unavailable, unmatched, or limited-coverage results rather than manufacturing a value.

A successful API response does not mean every optional enrichment layer is available for that property.

## Land Value & Ownership Fields

`assessed_land_value_eur`, when returned, represents an official cadastral assessed land value and is not a PropData market valuation, appraisal, sale price, or AVM.

`ownership_type`, when returned from open cadastral sources, is an ownership category and must not be interpreted as named owner identity.

Named owners, mortgages, and current registered legal rights/restrictions belong to separate land-register access and licensing arrangements, including RIK e-Land Register services where applicable. Standard marketplace access does not imply that those licensed legal-data fields are included.

## EHR Documents & Historical Events

Building permits, permit applications, occupancy/use records, construction notices, energy-certificate events, restriction notices, registry corrections, legacy owner notices, and other EHR documents are historical/source events.

A historical document event must not automatically be interpreted as the current legal status of the property, building, ownership, mortgage, restriction, or right unless the response explicitly identifies it as current and the underlying source supports that interpretation.

## Credentials & Security

API credentials are provided solely to the subscribing customer or authorized user. You are responsible for protecting credentials and all requests made through your account. Credentials may not be exposed in public repositories, browser bundles, logs, screenshots, or other insecure environments.

PropData may suspend or revoke credentials that are compromised, abused, shared improperly, or used in violation of these Terms.

## RapidAPI Plans & Billing

Marketplace access is subject to the quotas, rate limits, pricing, and features of your selected RapidAPI subscription. RapidAPI manages marketplace billing and may apply its own terms, taxes, payment processing, and marketplace policies.

The free plan is intended for evaluation and testing, not production workloads.

## Commercial Use & Redistribution

Unless restricted by your subscription, API responses may be incorporated into your own applications and workflows. Your subscription does not transfer ownership of PropData infrastructure, normalization methods, schemas, proprietary systems, or source databases.

Bulk redistribution, sublicensing, white-label delivery, creation of a substitute database/API, or direct resale of PropData datasets may require a separate written agreement.

## No Professional Advice

PropData provides property information and software infrastructure. It does not provide legal, financial, lending, appraisal, surveying, title, environmental, tax, investment, engineering, or other professional advice.

Users are responsible for independently verifying information when making decisions requiring professional, legal, regulatory, financial, surveying, title, or transactional certainty.

## Availability

We aim to provide reliable production infrastructure but do not guarantee uninterrupted or error-free service. Availability and data coverage may be affected by maintenance, infrastructure, government source systems, source revisions, network conditions, security events, or other circumstances outside our control.

Endpoints, fields, and enrichment layers may evolve. PropData will make reasonable efforts to avoid unnecessary breaking changes to production integrations.

## Disclaimer & Limitation of Liability

The API and data are provided **as is** and **as available**. To the maximum extent permitted by law, PropData and PropTechUSA.ai disclaim warranties regarding completeness, accuracy, merchantability, fitness for a particular purpose, uninterrupted availability, or suitability for any particular transaction or decision.

To the maximum extent permitted by applicable law, PropData, PropTechUSA.ai, and their owners, affiliates, employees, contractors, and suppliers will not be liable for indirect, incidental, special, consequential, exemplary, or lost-profit damages resulting from use of or inability to use the service. Where liability cannot legally be excluded, aggregate liability will not exceed the amount paid for the affected service during the preceding three months.

## Suspension & Termination

Access may be suspended or terminated for nonpayment, credential misuse, security threats, abusive traffic, circumvention of plan limits, violation of these Terms, or conduct that materially threatens PropData, its customers, source providers, or infrastructure.

## Enterprise & Custom Licensing

Enterprise, bulk, white-label, licensed legal-data, government, and custom-integration customers may operate under separate written commercial and licensing terms that supersede these standard self-service Terms where applicable.

## Contact

**PropData / PropTechUSA.ai**  
**sales@proptechusa.ai**  
**https://ee.proptechusa.ai**

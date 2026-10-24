# Architecture

Public HTML is server rendered. React handles navigation, gallery, form steps and owner controls. D1 tables: leads, activities, notifications, cms_pages, quotes and rate_limits. Migration 0000_mean_sabra.sql owns schema creation; requests do not create tables.

Submission inserts lead + consent snapshot + activity + notification atomically. Unique replay keys prevent duplicate submission records. Incomplete form data stays in memory. Source query strings are removed; no email or contact information is put into URLs. Server Zod validation, request size limits, same-origin mutation checks, honeypot and hashed short-lived rate keys apply.

Owner identity is stored as `_owner` in cms_pages. Bootstrap is explicitly enabled only during owner-private review. Every admin operation independently compares trusted platform identity. When moving away from Sites, replace the identity gateway; never trust arbitrary inbound auth headers. Owner binding must be completed and bootstrap disabled before public access.

Draft CMS rows use `_draft:` prefixes, separate from published overrides. Plain title/body blocks are React-escaped; arbitrary HTML is not accepted. Publication is limited to implemented routes. Homepage/legal publication requires a source release. This is not a complete editorial versioning system.

Quotes snapshot line items and integer-cent totals into independent draft versions. No send/payment/signature/booking operation exists. Requested calendar dates are not availability. Manually marking a lead won is not proof of realized revenue.

Media: logo.svg is unchanged supplied SVG. dexarm.webp is the supplied arm image compressed. robot-concept.webp is generated using that arm as reference, visibly marked illustration. No client/guest photography or fabricated proof is published.

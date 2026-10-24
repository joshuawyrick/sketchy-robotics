# Sketchy Robotics — event website and owner workspace

Owner-private preview of the real robotic caricature event business. This is a functional first release, not completion of every module in the 73-route roadmap. The supplied wordmark is unchanged; the supplied DexArm photo is featured. Concept art is clearly labelled.

## Implemented

Responsive branded marketing pages for weddings, private events, corporate/trade-show activations, venue pilots, pricing, FAQs, gallery and six distinct priority regions. Dedicated multistep private/corporate/venue forms plus general messages. Server validation, origin checks, honeypot, throttling, consent, source attribution, opaque references, idempotency and atomic D1 submission/activity/outbox writes.

Owner workspace `/admin/`: real lead inbox, search/filter/CSV export, statuses/notes, requested-event calendar, verified private travel calculation, proposal drafts, metadata/block editing, full route registry, notification outbox and audit actions. Unapproved city, Spanish and editorial routes remain drafts/404.

## Stack decision

Strict TypeScript, React and Next App Router APIs through Vinext on the supported Sites Cloudflare Worker runtime. Native D1/Drizzle and Sites identity replace external Supabase/Postgres/Auth. This provides hosted persistence/auth without requiring separate service accounts. A future Vercel/Supabase move needs storage/auth adapter migration. No full team-role or separate MFA matrix is implemented: this release has one server-authorized, identity-bound owner.

## Owner setup

Open `/admin/` while owner-private. With ALLOW_OWNER_BOOTSTRAP=true, the first authenticated owner visit binds the stable Sites ID in D1 `_owner`. All later admin calls must match it. Disable bootstrap once bound and before expanding audience. Never clear that binding on a public site.

Optional owner notification email requires RESEND_API_KEY, NOTIFY_EMAIL and MAIL_FROM with a verified sender. Unconfigured/failed delivery is visible in the outbox. Customer receipt emails and scheduled retries are not enabled. No actual emails were sent during QA.

## Checks

`node node_modules/typescript/bin/tsc --noEmit`
`node --test tests/rules.test.ts`
`node tests/http-smoke.mjs` with TEST_ORIGIN set to a reachable local server. Managed executor port access prevented this script running here; browser E2E and direct local D1 queries verified persistence.

Use the Sites build/source/deploy helpers. Source-controlled migrations live in drizzle/. Current domain/DNS is untouched. PUBLIC_INDEXING_ENABLED defaults false. Read PUBLISHING_CHECKLIST.md before public launch.

## Remaining roadmap

Real drawing video and approved physical artwork, verified business contacts/legal operator, final policies, provider email receipts/retries, analytics/GSC/Bing, full multiuser roles/MFA, rich-text/revision UI, media-rights workflow, claim approvals, attachment scanning, contract/PDF sending, backups/retention automation, expanded original guides and Spanish review. No fake connection states, reviews, pricing, speed or ROI promises.

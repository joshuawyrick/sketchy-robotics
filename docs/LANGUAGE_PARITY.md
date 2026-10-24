# English / Spanish parity

All 71 visitor-facing English routes now have Spanish counterparts, including the homepage, service and local-area pages, 15 planning guides, gallery, calculator, legal drafts and all four inquiry forms. English remains primary. The header switch links to the corresponding page; established Spanish wedding and quinceañera URLs are preserved.

Spanish renderers in generated/es are generated from the English templates by scripts/generate-spanish.cjs, using lib/spanish.json and translated data adapters. Keep images, markup, layout classes and behavior in the English templates; add corresponding dictionary translations when editing copy. Run npm run i18n:generate after template changes. The build regenerates and checks parity automatically.

Validation: scripts/check-spanish.cjs confirms 71 routes per language, invertible route pairs, translated page content, FAQs and local descriptions, related-link targets, section/list parity, and identical image assets/layout classes. TypeScript checks passed. Browser checks covered the Spanish homepage, Visalia area, guide index, gallery, private inquiry flow through review without submitting a fake lead, and calculator output (3 hours, 2 stations, 6 minutes, 20% buffer, shared limit 10/hour produces 24 sessions versus 48 drawing capacity).

Localized metadata includes canonical and English/Spanish alternate URLs. Private-preview noindex and audience settings are preserved. Email delivery and public-launch configuration remain separate from localization. Concept-image labels and travel qualifications retain their original meaning.

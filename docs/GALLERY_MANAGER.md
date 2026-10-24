# Gallery Manager

Open /admin and select Gallery Manager. Owner identity is enforced on the server for every upload/edit/library request. Upload JPEG, PNG or WebP (up to 25 MB source). The browser resizes to 2400px maximum, re-encodes JPEG and removes EXIF metadata; the server validates signatures and limits the streamed upload to 5 MB. Media is persisted in R2; metadata and publication state in D1.

Uploads start as drafts. Add English and Spanish titles, descriptions, and optional paired captions. Select category and actual drawing/event photo/concept label. Confirm publishing permission. Featured photos appear first, then numeric display order, then creation time. Publish updates the shared collection consumed by both languages. Hide, draft and archive withdraw an item; archive is reversible by saving as draft or republishing. There is no destructive delete button.

The image endpoint checks publication status on every request; unpublished media requires owner access and is not publicly cached. Public metadata excludes storage keys and drafts. Once any images are published they replace the starter concept gallery. With no published images, the existing concepts remain. Public gallery filters and lightbox retain the site styling.

Validation: schema/migration inspection; tests/gallery.cjs covers bilingual publishing, rights confirmation, draft allowances, category/order and image signatures; TypeScript, route/image/layout parity and production build. Local browser owner workspace was protected by sign-in, so authenticated upload/publish has not been exercised end-to-end in the browser. No owner authentication bypass or production sample photos were introduced.

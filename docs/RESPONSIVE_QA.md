# Responsive review — October 24, 2026

## Changes
- Breakpoint navigation switches before the header crowds; mobile navigation supports Escape, outside click, link selection, and scrolling within short viewports.
- Shared grid children can shrink; long bilingual headings and links wrap. Tablet cards and gallery grids adjust their column counts.
- Mobile inputs use 16px text, forms use one column, and primary controls have generous touch targets.
- Form step changes focus and scroll to the next heading; Back preserves entered values.
- Both gallery implementations use centered, height-bounded dialogs with scroll locking and backdrop dismissal.
- Mobile footers retain location links. Muted header links and white-button text have corrected contrast.
- Spanish generator imports its error translator independently of React hook imports.

## Browser validation
`tests/responsive-check.html` is a local QA harness, not a production route. To repeat, temporarily copy it into `public/__responsive-qa.html`, use the managed preview, and click Audit pages in the browser. Remove that public copy before packaging.

It measures the 71 public English routes and their Spanish counterparts at 320, 768, 1024 and 1440 CSS pixels (568 combinations), flagging overflowing headings, text, links, buttons and fields. Intentional horizontally scrollable tables, hidden dialogs and honeypots are excluded. Measurements complement visual checks; they do not establish real-device browser compatibility.

Manual browser checks covered English phone homepage, Spanish 320px and 1024px homepages, desktop header/dropdown, mobile menu open/Escape, Spanish FAQ expansion, English gallery dialog open/Escape, Spanish inquiry dialog centering and localized destinations, and mobile private quote Continue/Back with retained city data. Mobile viewport metadata was confirmed.

## Limits
Checks use Chromium and constrained-width iframes. Physical iPhone Safari/Android browser testing, mobile keyboards, and authenticated gallery management were not exercised. No inquiry was submitted during this responsive review. Existing gallery validation, FAQ coverage, local-link integrity, Spanish parity and TypeScript checks were also run.

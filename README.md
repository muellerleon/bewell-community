# BeWell Community — CCA

A working prototype of the CCA **BeWell Community** portal: members browse local groups,
classes and one-off events, and every path ends in the same place — a call with a Care Concierge.

Built from the Figma file `SBYmX1dTuJMNwjcLnGoXat` and CCA Brand Guidelines v1.0 (01.08.2025).

## Pages

| Route | What it is |
| --- | --- |
| `/` | Landing: hero + explainer video, featured activities, categories, member stories, concierge band, tag index |
| `/browse` | Every activity, searchable and filterable, in one row per category |
| `/activity/:id` | A single activity — overview, what's included, practical details, inquiry card |
| `/category/:id` | A category — what to expect, plus every group running inside it |
| `/credits` | Photo licences and attribution |

The concierge request modal and its confirmation are global: any CTA on any page opens the same flow.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

## Stack

Vite + React, hand-written CSS (no framework), `HashRouter` so it works on GitHub Pages
without server-side rewrites. No backend — the request form is a front-end prototype and
submits nothing anywhere.

## Before this becomes a real product

- **Photography is placeholder.** Openly licensed stand-ins; the CC BY / CC BY-SA ones carry
  attribution and share-alike obligations, and nobody pictured consented to appear as a CCA
  member. See `/credits`.
- **The explainer video is a TED talk** (Robert Waldinger on the Harvard study of adult
  development), standing in for CCA's own film.
- **Copy is illustrative.** Prices, group counts, schedules, the phone number and the member
  quotes are written for the prototype, not supplied by CCA.

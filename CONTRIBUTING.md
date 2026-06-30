# Contributing to Stashly

Thanks for your interest! Stashly is a small, dependency-free project.

## Getting started

```bash
git clone https://github.com/shahriar-ahmed-seam/Stashly.git
cd bulkFb-media-download
npm test       # run the test suite (uses Node's built-in runner, no installs)
```

Load the extension while developing: `chrome://extensions` → **Developer mode**
→ **Load unpacked** → select the `extension/` folder. After editing, click the
reload icon on the extension card.

## Project conventions

- **No runtime dependencies.** Tooling uses Node built-ins only.
- **Keep background logic testable.** Put non-trivial logic in pure,
  `chrome`-free modules (see `background/match-pattern.js`,
  `background/storage-actions.js`) and unit-test it. The service worker should
  stay a thin I/O wrapper.
- **`injects/app.js` is a pretty-printed third-party bundle.** Change it only
  with surgical, literal edits and always re-run `npm test` (the integrity test
  re-checks syntax and that no foreign branding/URLs slipped in).

## Before opening a PR

1. `npm test` passes.
2. `npm run build` succeeds.
3. If you touched the manifest, the manifest test still passes (permissions,
   description length, file references).

## Reporting bugs

Facebook changes its internals often, which can break downloads. When filing an
issue, include your Chrome version, the page type (album / profile / group /
viewer), and any console errors.

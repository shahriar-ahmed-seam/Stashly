<div align="center">

<img src="extension/assets/logo.svg" width="84" alt="Stashly logo" />

# Stashly

**Bulk media downloader for Facebook — albums, profiles, groups & the photo viewer.**

Save entire Facebook photo collections straight to a folder on disk, in one click.
Fully client-side: no login, no servers, no tracking.

[![CI](https://github.com/shahriar-ahmed-seam/Stashly/actions/workflows/ci.yml/badge.svg)](https://github.com/shahriar-ahmed-seam/Stashly/actions/workflows/ci.yml)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-8b5cf6)
![Chrome 103+](https://img.shields.io/badge/Chrome-103%2B-6366f1)
![License: MIT](https://img.shields.io/badge/License-MIT-34d399)

</div>

---

> [!IMPORTANT]
> **For personal archival use only.** You are responsible for complying with
> Facebook's Terms of Service and the copyright of any content you download.
> Only download media you have the right to. See [disclaimer](#disclaimer).

## ✨ Features

- **Whole-album downloads** — grab an entire album, profile photo set, or group gallery in one click
- **Carousel grabs** — pull every photo from the Facebook photo viewer
- **Direct-to-disk** — saves to a folder you pick via the File System Access API (no zip step)
- **Format conversion** — export as JPG, PNG, or WEBP
- **Custom naming** — file-name and folder-name templates
- **Resume** — interrupted downloads pick up where they left off
- **Skip duplicates** — remembers already-downloaded files
- **Captions** — optional `.caption.txt` sidecar files
- **Gentle mode** — configurable per-request delay to respect rate limits
- **Private by design** — everything runs locally; the extension makes zero calls to any first-party server

## 🚀 Install (from source)

1. Download the latest `stashly-vX.Y.Z.zip` from [Releases](https://github.com/shahriar-ahmed-seam/Stashly/releases) and unzip it — **or** clone this repo.
2. Open `chrome://extensions` in Chrome (or any Chromium browser).
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked** and select the `extension/` folder (the one containing `manifest.json`).
5. Open Facebook, go to an album / profile photos / group photos page — the **Stashly** button appears automatically.

> Requires Chrome 103+ for the File System Access API and MV3 dynamic content scripts.

## 🖱️ Usage

1. Navigate to a Facebook album, a profile's photos, a group's photos, or open a photo in the viewer.
2. Click the **Stashly** download button that appears in the page.
3. Choose options (format, naming, delay, resume…), then pick a destination folder.
4. Let it run — progress shows inline, and you can stop any time.

The toolbar **popup** shows live status and stats; the **options page** lets you
review activity and clear download history or resume points.

## 🛠️ Development

No build step is needed to run the extension — `extension/` loads directly as an
unpacked extension. Tooling is dependency-free (Node built-ins only).

```bash
npm test       # run the unit + integrity test suite (Node's built-in runner)
npm run build  # package extension/ into dist/stashly-v<version>.zip
```

The non-trivial background logic lives in pure, `chrome`-free modules
(`background/match-pattern.js`, `background/storage-actions.js`) so it can be
unit-tested in plain Node. See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## 📦 Project structure

```
.
├── extension/            # the loadable / releasable extension
│   ├── manifest.json
│   ├── background/       # service worker + pure logic modules
│   ├── content/          # ISOLATED-world bridge
│   ├── injects/          # MAIN-world proxy + UI + download engine
│   ├── pages/            # popup & options UI
│   └── assets/           # icons + logo
├── tests/                # node:test suite
├── scripts/build-zip.js  # release packager
├── docs/ARCHITECTURE.md
└── .github/workflows/    # CI + release automation
```

## ❓ FAQ

**Is my data sent anywhere?** No. Stashly has no backend. Downloads use your own
authenticated Facebook session and the File System Access API. See [PRIVACY.md](PRIVACY.md).

**Why does it need to remove CSP headers?** Facebook's Content-Security-Policy
blocks injected scripts. Stashly removes it only on `facebook.com` so its UI can run.

**The download button disappeared / errors out.** Facebook frequently changes its
internal module and GraphQL identifiers, which this kind of tool depends on. Updates
may be required when that happens — please [open an issue](https://github.com/shahriar-ahmed-seam/Stashly/issues).

**Will this be on the Chrome Web Store?** Possibly, but not guaranteed — extensions
that modify Facebook and remove CSP headers carry review risk. For now, install from source.

## Disclaimer

Stashly is an independent, fully client-side tool intended for downloading media
you own or have permission to download, for personal archival purposes. It is not
affiliated with, endorsed by, or sponsored by Meta or Facebook. "Facebook" is a
trademark of Meta Platforms, Inc. Use of this software may be subject to
Facebook's Terms of Service; you are solely responsible for how you use it.

## License

[MIT](LICENSE)

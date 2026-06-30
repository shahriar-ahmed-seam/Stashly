# Privacy Policy

_Last updated: 2026_

**Stashly does not collect, store, transmit, or sell any personal data.**

## What Stashly does

Stashly runs entirely on your device. It has no backend server and makes no
first-party network requests. Specifically:

- **No accounts, no login, no telemetry, no analytics.**
- Downloads use **your own authenticated Facebook session** (the same one your
  browser already has) and Facebook's own internal APIs. Stashly does not read,
  store, or transmit your Facebook credentials, cookies, or session tokens.
- Files are written directly to a folder **you choose** via the browser's File
  System Access API. Stashly never uploads your files anywhere.

## Data stored locally

For features to work, Stashly stores a small amount of data using
`chrome.storage.local` **on your device only**:

| Data | Purpose |
|------|---------|
| Downloaded-file IDs | Skip files you've already downloaded |
| Resume cursors | Resume an interrupted download |
| UI settings | Remember your chosen options |

This data never leaves your machine. You can clear it any time from the
extension's **Options** page, or by removing the extension.

## Permissions

| Permission | Why |
|------------|-----|
| `scripting` | Inject the download UI into Facebook pages |
| `storage` | Save the local data described above |
| `tabs` | Detect when you're on a supported Facebook page |
| `declarativeNetRequest`, `declarativeNetRequestWithHostAccess` | Remove Facebook's CSP headers (only on `facebook.com`) so the injected UI can run |
| Host access to `*.facebook.com` | The extension only operates on Facebook |

## Contact

Questions? Open an issue:
<https://github.com/shahriar-ahmed-seam/Stashly/issues>

/* Stashly popup logic. */

const REPO_URL = "https://github.com/shahriar-ahmed-seam/Stashly";
const FB_PHOTOS_URL = "https://www.facebook.com/me/photos_albums";
const FB_HOSTS = ["www.facebook.com", "web.facebook.com"];

function $(id) {
  return document.getElementById(id);
}

function sendMessage(action, ...payload) {
  return new Promise((resolve) => {
    try {
      chrome.runtime.sendMessage({ action, payload }, (res) => {
        if (chrome.runtime.lastError || !res) return resolve(null);
        resolve(res.status === "success" ? res.result : null);
      });
    } catch {
      resolve(null);
    }
  });
}

function setStatus(ok, text) {
  const el = $("status");
  el.className = "pill " + (ok ? "pill--ok" : "pill--warn");
  $("status-text").textContent = text;
}

async function init() {
  const manifest = chrome.runtime.getManifest();
  $("version").textContent = "v" + manifest.version;
  $("github").href = REPO_URL;

  // Detect whether the active tab is a supported Facebook page.
  let onFacebook = false;
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.url) {
      const host = new URL(tab.url).hostname;
      onFacebook = FB_HOSTS.includes(host);
    }
  } catch {
    /* ignore */
  }

  if (onFacebook) {
    setStatus(true, "Ready on this page");
    $("hint").textContent =
      "You're on Facebook. Go to an album, profile photos, or group photos — the Stashly button is there.";
  } else {
    setStatus(false, "Open Facebook");
    $("hint").textContent =
      "Open a Facebook album, profile photos, or group photos page — the Stashly download button appears automatically.";
  }

  // Live stats from the background storage API.
  const stats = await sendMessage("getStats");
  $("downloaded-count").textContent = stats ? formatNum(stats.downloadedCount) : "0";
  $("resume-count").textContent = stats ? formatNum(stats.resumeCount) : "0";
}

function formatNum(n) {
  if (typeof n !== "number") return "0";
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + "k";
  return String(n);
}

$("open-fb").addEventListener("click", () => {
  chrome.tabs.create({ url: FB_PHOTOS_URL });
  window.close();
});

$("open-options").addEventListener("click", () => {
  if (chrome.runtime.openOptionsPage) chrome.runtime.openOptionsPage();
  else chrome.tabs.create({ url: chrome.runtime.getURL("pages/options/index.html") });
});

init();

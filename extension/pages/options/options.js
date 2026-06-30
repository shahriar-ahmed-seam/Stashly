/* Stashly options/settings page logic. */

const REPO_URL = "https://github.com/shahriar-ahmed-seam/Stashly";

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

let toastTimer;
function toast(msg) {
  const el = $("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

function formatNum(n) {
  if (typeof n !== "number") return "0";
  return n.toLocaleString("en-US");
}

async function refreshStats() {
  const stats = await sendMessage("getStats");
  $("downloaded-count").textContent = stats ? formatNum(stats.downloadedCount) : "0";
  $("resume-count").textContent = stats ? formatNum(stats.resumeCount) : "0";
  const ok = stats !== null;
  $("status-num").textContent = ok ? "✓" : "—";
  $("status-num").style.webkitTextFillColor = ok ? "" : "var(--muted)";
  $("status-lbl").textContent = ok ? "Active" : "Idle";
}

async function init() {
  const manifest = chrome.runtime.getManifest();
  $("version").textContent = "v" + manifest.version;
  $("github").href = REPO_URL;

  // Cinematic hero backdrop (bundled, offline).
  const bg = $("hero-bg");
  if (bg) {
    bg.style.backgroundImage = `url("${chrome.runtime.getURL(
      "assets/img/hero.jpg",
    )}")`;
  }

  // Unsplash attribution (required by their API guidelines).
  try {
    const res = await fetch(chrome.runtime.getURL("assets/img/credits.json"));
    const credits = await res.json();
    const hero = credits.find((c) => c.file === "hero.jpg") || credits[0];
    if (hero) {
      $("credit").innerHTML =
        `Hero photo by <a href="${hero.profile}" target="_blank" rel="noopener">${hero.photographer}</a> on ` +
        `<a href="${hero.unsplash}" target="_blank" rel="noopener">Unsplash</a>`;
    }
  } catch {
    /* attribution is best-effort */
  }

  await refreshStats();
}

$("clear-history").addEventListener("click", async () => {
  await sendMessage("clearDownloadedFilesId");
  await refreshStats();
  toast("Download history cleared");
});

$("clear-resume").addEventListener("click", async () => {
  await sendMessage("clearResumeCursors");
  await refreshStats();
  toast("Resume points cleared");
});

init();

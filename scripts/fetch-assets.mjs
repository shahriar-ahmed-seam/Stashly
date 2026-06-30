#!/usr/bin/env node
/**
 * Build-time asset fetcher (Unsplash).
 *
 * Pulls a small, curated set of cinematic images and BUNDLES them locally into
 * extension/assets/img/ so the shipped extension stays fully self-contained
 * (no runtime network calls, no API key in the build).
 *
 * The Unsplash Access Key is read from the environment and is NEVER written to
 * disk or committed:
 *
 *   PowerShell:  $env:UNSPLASH_ACCESS_KEY="xxxx"; node scripts/fetch-assets.mjs
 *   bash:        UNSPLASH_ACCESS_KEY=xxxx node scripts/fetch-assets.mjs
 *
 * Per the Unsplash API Guidelines this also triggers each photo's download
 * endpoint and records photographer attribution in img/credits.json.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../extension/assets/img");

const KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY) {
  console.error("Missing UNSPLASH_ACCESS_KEY environment variable.");
  process.exit(1);
}

// Curated shots that suit Stashly's dark-violet, cinematic aesthetic.
const SHOTS = [
  { name: "hero", query: "dark cinematic aurora purple night sky", w: 2000 },
  { name: "popup", query: "dark abstract gradient violet", w: 1100 },
  { name: "aurora", query: "deep space nebula purple blue", w: 2000 },
];

const api = (url) =>
  fetch(url, { headers: { Authorization: `Client-ID ${KEY}` } });

async function fetchShot(shot) {
  const res = await api(
    `https://api.unsplash.com/photos/random?orientation=landscape&content_filter=high&query=${encodeURIComponent(
      shot.query,
    )}`,
  );
  if (!res.ok) throw new Error(`random ${shot.name}: HTTP ${res.status}`);
  const photo = await res.json();

  // Download the rendered image at the requested width.
  const imgUrl = `${photo.urls.raw}&q=80&w=${shot.w}&fm=jpg&fit=crop`;
  const imgRes = await fetch(imgUrl);
  if (!imgRes.ok) throw new Error(`image ${shot.name}: HTTP ${imgRes.status}`);
  const buf = Buffer.from(await imgRes.arrayBuffer());
  fs.writeFileSync(path.join(OUT_DIR, `${shot.name}.jpg`), buf);

  // Trigger the download endpoint (Unsplash API Guideline compliance).
  try {
    if (photo.links?.download_location) {
      await api(photo.links.download_location);
    }
  } catch {
    /* non-fatal */
  }

  const kb = (buf.length / 1024).toFixed(0);
  console.log(`saved img/${shot.name}.jpg (${kb} KB) — by ${photo.user.name}`);

  return {
    file: `${shot.name}.jpg`,
    id: photo.id,
    photographer: photo.user.name,
    profile: `${photo.user.links.html}?utm_source=Stashly&utm_medium=referral`,
    unsplash: "https://unsplash.com/?utm_source=Stashly&utm_medium=referral",
  };
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const credits = [];
  for (const shot of SHOTS) {
    try {
      credits.push(await fetchShot(shot));
    } catch (err) {
      console.warn(`! ${shot.name} failed: ${err.message}`);
    }
  }
  if (credits.length === 0) {
    console.error("No images fetched.");
    process.exit(2);
  }
  fs.writeFileSync(
    path.join(OUT_DIR, "credits.json"),
    JSON.stringify(credits, null, 2),
  );
  console.log(`\nWrote ${credits.length} image(s) + credits.json`);
}

main();

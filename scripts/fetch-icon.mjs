#!/usr/bin/env node
/**
 * Build-time icon fetcher (Unsplash).
 *
 * Pulls one striking, brand-fitting image and renders it at every Chrome icon
 * size as PNG using Unsplash's on-the-fly CDN resizing (fm=png, fit=crop) — no
 * local image tooling required. Overwrites extension/assets/icons/favicon-*.png.
 *
 *   $env:UNSPLASH_ACCESS_KEY="xxxx"; node scripts/fetch-icon.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = path.resolve(__dirname, "../extension/assets/icons");
const IMG_DIR = path.resolve(__dirname, "../extension/assets/img");
const SIZES = [16, 19, 32, 38, 48, 128];

const KEY = process.env.UNSPLASH_ACCESS_KEY;
if (!KEY) {
  console.error("Missing UNSPLASH_ACCESS_KEY environment variable.");
  process.exit(1);
}

const QUERY = "glowing neon purple sphere orb dark background";
const api = (url) =>
  fetch(url, { headers: { Authorization: `Client-ID ${KEY}` } });

function pngUrl(raw, size) {
  return `${raw}&fm=png&w=${size}&h=${size}&fit=crop&crop=entropy&q=90`;
}

async function main() {
  fs.mkdirSync(ICONS_DIR, { recursive: true });

  const res = await api(
    `https://api.unsplash.com/photos/random?orientation=squarish&content_filter=high&query=${encodeURIComponent(
      QUERY,
    )}`,
  );
  if (!res.ok) throw new Error(`random: HTTP ${res.status}`);
  const photo = await res.json();
  console.log(`source photo ${photo.id} by ${photo.user.name}`);

  for (const size of SIZES) {
    const r = await fetch(pngUrl(photo.urls.raw, size));
    if (!r.ok) throw new Error(`size ${size}: HTTP ${r.status}`);
    const buf = Buffer.from(await r.arrayBuffer());
    // Sanity: PNG signature.
    if (buf[0] !== 0x89 || buf[1] !== 0x50) {
      throw new Error(`size ${size}: not a PNG`);
    }
    fs.writeFileSync(path.join(ICONS_DIR, `favicon-${size}.png`), buf);
    console.log(`wrote favicon-${size}.png (${(buf.length / 1024).toFixed(1)} KB)`);
  }

  // Trigger the download endpoint (Unsplash API Guideline compliance).
  try {
    if (photo.links?.download_location) await api(photo.links.download_location);
  } catch {
    /* non-fatal */
  }

  // Record icon attribution alongside the other image credits.
  try {
    const creditsPath = path.join(IMG_DIR, "credits.json");
    const credits = JSON.parse(fs.readFileSync(creditsPath, "utf8"));
    const filtered = credits.filter((c) => c.file !== "icon");
    filtered.push({
      file: "icon",
      id: photo.id,
      photographer: photo.user.name,
      profile: `${photo.user.links.html}?utm_source=Stashly&utm_medium=referral`,
      unsplash: "https://unsplash.com/?utm_source=Stashly&utm_medium=referral",
    });
    fs.writeFileSync(creditsPath, JSON.stringify(filtered, null, 2));
  } catch {
    /* credits file optional */
  }

  console.log("\nIcon updated from Unsplash.");
}

main();

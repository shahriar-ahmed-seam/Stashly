import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EXT = path.resolve(__dirname, "../extension");

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

const allFiles = walk(EXT);
const jsFiles = allFiles.filter((f) => f.endsWith(".js"));

test("every JS file in the extension parses without syntax errors", () => {
  for (const file of jsFiles) {
    let code = fs.readFileSync(file, "utf8");
    // vm.Script can't parse ES module syntax. For files that are genuine ES
    // modules, neutralise module syntax for a syntax-only smoke test WITHOUT
    // removing the declarations themselves:
    //   - drop `import ... from "..."` (including multi-line named imports)
    //   - drop side-effect `import "..."`
    //   - drop `export { ... }` re-export blocks
    //   - strip a leading `export`/`export default` keyword, keep the decl
    const isModule = /^\s*(import|export)\b/m.test(code);
    if (isModule) {
      code = code
        .replace(/import\s+[\s\S]*?\s+from\s*["'][^"']+["']\s*;?/g, "")
        .replace(/^\s*import\s+["'][^"']+["']\s*;?/gm, "")
        .replace(/^\s*export\s*\{[^}]*\}\s*;?\s*$/gm, "")
        .replace(/^\s*export\s+(default\s+)?/gm, "");
    }
    assert.doesNotThrow(
      () => new vm.Script(code),
      `syntax error in ${path.relative(EXT, file)}`,
    );
  }
});

test("no ESUIT / esuit.dev branding remains anywhere in the build", () => {
  const textFiles = allFiles.filter((f) =>
    /\.(js|css|html|json|svg)$/.test(f),
  );
  for (const file of textFiles) {
    const text = fs.readFileSync(file, "utf8");
    assert.ok(
      !/esuit\.dev/i.test(text),
      `esuit.dev reference left in ${path.relative(EXT, file)}`,
    );
    assert.ok(
      !/ESUIT/.test(text),
      `ESUIT branding left in ${path.relative(EXT, file)}`,
    );
  }
});

test("required extension files are present", () => {
  const required = [
    "manifest.json",
    "background/service-worker-loader.js",
    "background/service-worker.js",
    "background/match-pattern.js",
    "background/storage-actions.js",
    "content/loader.js",
    "content/bridge.js",
    "content/constants.js",
    "injects/proxy.js",
    "injects/vendors.js",
    "injects/app.js",
    "injects/app.css",
    "pages/popup/index.html",
    "pages/popup/popup.js",
    "pages/options/index.html",
    "pages/options/options.js",
    "pages/styles.css",
    "assets/logo.svg",
    "assets/img/hero.jpg",
    "assets/img/popup.jpg",
    "assets/img/credits.json",
  ];
  for (const rel of required) {
    assert.ok(fs.existsSync(path.join(EXT, rel)), `missing: ${rel}`);
  }
});

test("the abandoned options-page bundles are not shipped", () => {
  const banned = [
    "assets/index-Bns6A62T.js",
    "assets/index-C1oC9I1t.js",
    "assets/index.ts-CV4GNR7f.js",
  ];
  for (const rel of banned) {
    assert.ok(!fs.existsSync(path.join(EXT, rel)), `should not ship: ${rel}`);
  }
});

test("content-script loader points at the renamed bridge module", () => {
  const loader = fs.readFileSync(path.join(EXT, "content/loader.js"), "utf8");
  assert.match(loader, /content\/bridge\.js/);
});

test("popup and options HTML reference their local assets", () => {
  const popup = fs.readFileSync(path.join(EXT, "pages/popup/index.html"), "utf8");
  const options = fs.readFileSync(
    path.join(EXT, "pages/options/index.html"),
    "utf8",
  );
  for (const html of [popup, options]) {
    assert.match(html, /styles\.css/);
    assert.match(html, /logo\.svg/);
  }
});

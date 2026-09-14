const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join("public", "images", "logo");

async function main() {
  // Transparent PNG of primary lockup for any PNG consumers
  await sharp(path.join(dir, "logo-primary.svg"), { density: 300 })
    .resize(486, 120, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(path.join(dir, "logo.png"));
  console.log("wrote logo.png");

  // App icon: folded mark on navy rounded square
  const appIconSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#071A3D"/>
  <g transform="translate(96 96) scale(8)">
    <g clip-path="url(#c)">
      <rect x="8" y="10" width="12" height="36" rx="4" transform="rotate(18 8 10)" fill="#176BFF"/>
      <rect x="36" y="10" width="12" height="36" rx="4" transform="rotate(18 36 10)" fill="#176BFF"/>
      <rect x="20" y="20" width="16" height="26" rx="4" transform="rotate(-18 20 20)" fill="#38D67A"/>
    </g>
    <defs><clipPath id="c"><rect width="40" height="40" fill="white"/></clipPath></defs>
  </g>
</svg>`);

  await sharp(appIconSvg).png().toFile(path.join(dir, "app-icon.png"));
  await sharp(appIconSvg).resize(32, 32).png().toFile("public/favicon.png");
  await sharp(appIconSvg)
    .resize(180, 180)
    .png()
    .toFile("public/apple-touch-icon.png");
  // Next.js app icon
  if (!fs.existsSync("app")) fs.mkdirSync("app");
  await sharp(appIconSvg).resize(32, 32).png().toFile("app/icon.png");
  console.log("wrote app icons");

  // Canonical paths: light = primary SVG, dark offcanvas legacy logo.svg → dark lockup
  fs.copyFileSync(
    path.join(dir, "logo-primary.svg"),
    path.join(dir, "logo-light.svg")
  );
  // Off-canvas is dark — logo.svg must be the dark lockup
  fs.copyFileSync(path.join(dir, "logo-dark.svg"), path.join(dir, "logo.svg"));

  for (const obsolete of ["logo-header.svg"]) {
    const p = path.join(dir, obsolete);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }

  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

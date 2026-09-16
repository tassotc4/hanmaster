'use strict';
// tests/regression/light-contrast-audit-test.cjs
// Regression: light-theme token pairings must clear WCAG AA 4.5:1.
// Deterministic (pure Node — parses the REAL .theme-light hex tokens from
// public/css/app.css, computes every fg-on-surface pairing, asserts >= 4.5).
// Nonzero exit on any FAIL. Run via: node tests/regression/light-contrast-audit-test.cjs
var fs = require('fs');
var css = fs.readFileSync('public/css/app.css', 'utf8');
var block = css.match(/\.theme-light\s*\{([^}]*)\}/)[1];
var tok = {};
var re = /--([a-z0-9]+)\s*:\s*(#[0-9a-fA-F]{6})/g;
var m;
while ((m = re.exec(block)) !== null) tok[m[1]] = m[2].toUpperCase();
var lin = function (c) { var s = c / 255; return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4); };
var lum = function (h) { var n = [1, 3, 5].map(function (i) { return parseInt(h.slice(i, i + 2), 16); }); return 0.2126 * lin(n[0]) + 0.7152 * lin(n[1]) + 0.0722 * lin(n[2]); };
var cr = function (a, b) { var la = lum(a), lb = lum(b); return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05); };
// Foreground tokens vs the surfaces they may sit on. 'fgL'/'fgM' map to
// existing tokens (fg is #131110, fg2 #4A423A, muted #5A5248); colors are
// the light-FG values; exclude white (only used as fill on accent button).
var FG = ['fg', 'fg2', 'muted', 'accent', 'accent2', 'gold', 'green', 'green2', 'blue', 'purple', 'ok', 'tone', 'wrong'];
var SURF = ['bg', 'bg2', 'card', 'card2'];
var fail = [];
for (var i = 0; i < FG.length; i++) {
  for (var j = 0; j < SURF.length; j++) {
    var a = tok[FG[i]], b = tok[SURF[j]];
    if (!a || !b) continue;
    var r = cr(a, b);
    if (r < 4.5) fail.push(FG[i] + ' on ' + SURF[j] + ' = ' + r.toFixed(2));
  }
}
if (fail.length) {
  console.error('LIGHT CONTRAST REGRESSION FAILED (' + fail.length + '):');
  fail.forEach(function (f) { console.error('  ' + f); });
  process.exit(1);
}
console.log('LIGHT CONTRAST REGRESSION PASS — ' + (FG.length * SURF.length) + ' pairings >= 4.5:1');

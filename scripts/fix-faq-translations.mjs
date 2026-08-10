import fs from 'fs';

const v2 = JSON.parse(fs.readFileSync('scripts/faq-translations2.json', 'utf8'));

const pwaKey = "Yes! MandarinCourse is a Progressive Web App (PWA) that caches all scripts, assets, writing animations, and logic locally. The tone visualizer, character writing quizzes, and SRS flashcards run 100% offline client-side. Features that require internet: Live AI Tutor Mode, Document AI upload, and Grammar Check.";

const fixes = {
  es: { yes: '¡Sí!', pwa: 'MandarinCourse es una aplicación web progresiva (PWA) que almacena en caché todos los scripts, recursos, animaciones de escritura y lógica localmente.' },
  fr: { yes: 'Oui!', pwa: 'MandarinCourse est une application Web progressive (PWA) qui met en cache localement tous les scripts, ressources, animations d\'écriture et logique.' },
  de: { yes: 'Ja!', pwa: 'MandarinCourse ist eine Progressive Web App (PWA), die alle Skripte, Assets, Schreibanimationen und Logik lokal zwischenspeichert.' },
  pt: { yes: 'Sim!', pwa: 'MandarinCourse é um Progressive Web App (PWA) que armazena em cache todos os scripts, ativos, escrita de animações e lógica localmente.' },
  it: { yes: 'SÌ!', pwa: 'MandarinCourse è un\'app Web progressiva (PWA) che memorizza nella cache locale tutti gli script, le risorse, le animazioni di scrittura e la logica.' },
  ru: { yes: 'Да!', pwa: 'MandarinCourse — это прогрессивное веб-приложение (PWA), которое локально кэширует все скрипты, ресурсы, анимацию и логику.' },
  vi: { yes: 'Đúng!', pwa: 'MandarinCourse là một Ứng dụng web lũy tiến (PWA) lưu trữ tất cả các tập lệnh, nội dung, hoạt ảnh viết và logic cục bộ.' },
  ja: { yes: 'はい！', pwa: 'MandarinCourse は、すべてのスクリプト、アセット、アニメーションの作成、ロジックをローカルにキャッシュするプログレッシブ Web アプリ (PWA) です。' },
  ko: { yes: '예!', pwa: 'MandarinCourse는 모든 스크립트, 자산, 애니메이션 작성 및 논리를 로컬로 캐시하는 PWA(프로그레시브 웹 앱)입니다.' }
};

for (const [code, f] of Object.entries(fixes)) {
  if (v2[code] && v2[code][pwaKey]) {
    const current = v2[code][pwaKey];
    // Find the first sentence ending - look for first '.' after the exclamation
    const exclIdx = current.indexOf('!');
    if (exclIdx >= 0) {
      // Everything after "Yes! " is the rest (sentences 2+3)
      const rest = current.substring(exclIdx + 1);
      v2[code][pwaKey] = f.yes + ' ' + f.pwa + rest;
      console.log(code + ' OK');
    }
  }
}

const outPath = 'scripts/faq-translations-fixed.json';
fs.writeFileSync(outPath, JSON.stringify(v2, null, 2), 'utf8');

function escapeJson(str) {
  return str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\t/g, '\\t');
}

let output = '';
for (const [code, dict] of Object.entries(v2)) {
  if (!dict || Object.keys(dict).length === 0) continue;
  output += `  "${code}": {\n`;
  const entries = Object.entries(dict);
  const lines = entries.map(([k, v]) => `    "${escapeJson(k)}":"${escapeJson(v)}"`);
  output += lines.join(',\n') + '\n  },\n';
}
fs.writeFileSync('scripts/faq-translations-output-final.txt', output, 'utf8');
console.log('\nDone! ' + Object.keys(v2).length + ' languages written');

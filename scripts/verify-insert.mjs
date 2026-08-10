import fs from 'fs';

const code = fs.readFileSync('public/js/app.js', 'utf8');

const checks = [
  ['Pinyin Chart', 'Gráfico Pinyin'],
  ['Pinyin Chart', 'Graphique Pinyin'],
  ['Pinyin Chart', 'Biểu đồ bính âm'],
  ['Pinyin Chart', 'ピンイン表'],
  ['Pinyin Chart', '병음 차트'],
  ['Show all FAQ', 'Mostrar todas las preguntas frecuentes'],
  ['Show all FAQ', 'すべての FAQ を表示'],
  ['Show all FAQ', 'FAQ 모두 표시'],
  ['Interactive Pinyin Chart', 'Gráfico Pinyin Interactivo'],
  ['Interactive Pinyin Chart', 'Biểu đồ bính âm tương tác'],
];

let allOk = true;
for (const [key, val] of checks) {
  const search = `"${key}":"${val}"`;
  if (code.includes(search)) {
    console.log(`OK: ${key} -> ${val}`);
  } else {
    console.log(`MISSING: ${key} -> ${val}`);
    allOk = false;
  }
}

if (allOk) console.log('\nAll checks passed!');
else console.log('\nSome checks failed!');

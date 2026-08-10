import fs from 'fs';

const pwaKey = "Yes! MandarinCourse is a Progressive Web App (PWA) that caches all scripts, assets, writing animations, and logic locally. The tone visualizer, character writing quizzes, and SRS flashcards run 100% offline client-side. Features that require internet: Live AI Tutor Mode, Document AI upload, and Grammar Check.";

// Correct translations from earlier API calls
const data = {
  es: {
    yes: '¡Sí!',
    pwa: 'MandarinCourse es una aplicación web progresiva (PWA) que almacena en caché todos los scripts, recursos, animaciones de escritura y lógica localmente.',
    s2: 'El visualizador de tonos, las pruebas de escritura de personajes y las tarjetas didácticas SRS se ejecutan 100 % fuera de línea en el lado del cliente.',
    s3: 'Funciones que requieren Internet: Modo Tutor AI en vivo, carga de documentos AI y revisión gramatical.'
  },
  fr: {
    yes: 'Oui!',
    pwa: "MandarinCourse est une application Web progressive (PWA) qui met en cache localement tous les scripts, ressources, animations d'écriture et logique.",
    s2: "Le visualiseur de tonalités, les quiz d'écriture de personnages et les flashcards SRS fonctionnent à 100 % côté client hors ligne.",
    s3: 'Fonctionnalités nécessitant Internet\u00a0: mode Tuteur Live AI, téléchargement de documents AI et vérification de la grammaire.'
  },
  de: {
    yes: 'Ja!',
    pwa: 'MandarinCourse ist eine Progressive Web App (PWA), die alle Skripte, Assets, Schreibanimationen und Logik lokal zwischenspeichert.',
    s2: 'Der Tonvisualisierer, Quiz zum Schreiben von Charakteren und SRS-Lernkarten laufen zu 100 % offline auf der Clientseite.',
    s3: 'Funktionen, die Internet erfordern: Live-KI-Lehrermodus, Hochladen von Dokumenten-KI und Grammatikprüfung.'
  },
  pt: {
    yes: 'Sim!',
    pwa: 'MandarinCourse é um Progressive Web App (PWA) que armazena em cache todos os scripts, ativos, escrita de animações e lógica localmente.',
    s2: 'O visualizador de tons, os testes de escrita de caracteres e os flashcards SRS são executados 100% offline no lado do cliente.',
    s3: 'Recursos que exigem internet: modo Live AI Tutor, upload de documento AI e verificação gramatical.'
  },
  it: {
    yes: 'SÌ!',
    pwa: "MandarinCourse è un'app Web progressiva (PWA) che memorizza nella cache locale tutti gli script, le risorse, le animazioni di scrittura e la logica.",
    s2: 'Il visualizzatore di toni, i quiz sulla scrittura dei caratteri e le flashcard SRS funzionano offline al 100% sul lato client.',
    s3: 'Funzionalità che richiedono Internet: modalità tutor AI live, caricamento documenti AI e controllo grammaticale.'
  },
  ru: {
    yes: 'Да!',
    pwa: 'MandarinCourse — это прогрессивное веб-приложение (PWA), которое локально кэширует все скрипты, ресурсы, анимацию и логику.',
    s2: 'Визуализатор тона, тесты по написанию символов и карточки SRS работают на 100% в автономном режиме на стороне клиента.',
    s3: 'Функции, требующие подключения к Интернету: режим Live AI Tutor, загрузка документов AI и проверка грамматики.'
  },
  vi: {
    yes: 'Đúng!',
    pwa: 'MandarinCourse là một Ứng dụng web lũy tiến (PWA) lưu trữ tất cả các tập lệnh, nội dung, hoạt ảnh viết và logic cục bộ.',
    s2: 'Trình hiển thị giọng điệu, câu đố viết ký tự và thẻ flash SRS chạy 100% phía máy khách ngoại tuyến.',
    s3: 'Các tính năng cần có internet: Chế độ gia sư AI trực tiếp, Tải lên tài liệu AI và Kiểm tra ngữ pháp.'
  },
  ja: {
    yes: 'はい！',
    pwa: 'MandarinCourse は、すべてのスクリプト、アセット、アニメーションの作成、ロジックをローカルにキャッシュするプログレッシブ Web アプリ (PWA) です。',
    s2: 'トーン ビジュアライザー、文字ライティング クイズ、および SRS フラッシュカードは、100% オフラインのクライアント側で実行されます。',
    s3: 'インターネットを必要とする機能: ライブ AI 講師モード、ドキュメント AI アップロード、文法チェック。'
  },
  ko: {
    yes: '예!',
    pwa: 'MandarinCourse는 모든 스크립트, 자산, 애니메이션 작성 및 논리를 로컬로 캐시하는 PWA(프로그레시브 웹 앱)입니다.',
    s2: '톤 시각화 장치, 문자 쓰기 퀴즈 및 SRS 플래시카드는 100% 오프라인 클라이언트 측에서 실행됩니다.',
    s3: '인터넷이 필요한 기능: 라이브 AI 튜터 모드, Document AI 업로드, 문법 검사.'
  }
};

// Read v2 as base
const v2 = JSON.parse(fs.readFileSync('scripts/faq-translations2.json', 'utf8'));

// Rebuild the PWA key for each language
for (const [code, d] of Object.entries(data)) {
  v2[code][pwaKey] = d.yes + ' ' + d.pwa + ' ' + d.s2 + ' ' + d.s3;
  console.log(code + ' [' + v2[code][pwaKey].length + ' chars] - fixed');
}

fs.writeFileSync('scripts/faq-translations-final.json', JSON.stringify(v2, null, 2), 'utf8');

// Generate output format for insertion
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
console.log('\nAll done! ' + Object.keys(v2).length + ' languages');

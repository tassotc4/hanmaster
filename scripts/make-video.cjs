#!/usr/bin/env node
// Local-only MP4 generator — the former /api/social/generate-video endpoint,
// removed from the serverless bundle (the 80.8MB ffmpeg-static never ran on
// Vercel: IS_SERVERLESS refused the endpoint with 509, but the static NFT
// still traced the require into the function bundle). Jo runs:
//   node scripts/make-video.cjs <image-path> "<tts text>"
// Writes to output/videos/ (gitignored, outside public/).
const path = require('path');
const fs = require('fs');

const imageArg = process.argv[2];
const text = process.argv[3];
if (!imageArg || !text) {
  console.error('usage: node scripts/make-video.cjs <image-path> "<tts-text>"');
  process.exit(1);
}
const imgPath = path.resolve(imageArg);
if (!fs.existsSync(imgPath)) {
  console.error('image not found: ' + imgPath);
  process.exit(1);
}

const outDir = path.join(__dirname, '..', 'output', 'videos');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const tempId = Date.now() + '-' + Math.round(Math.random() * 1E6);
const tempAudio = path.join(outDir, 'temp-' + tempId + '.mp3');
const outVideo = path.join(outDir, 'video-' + tempId + '.mp4');

(async () => {
  try {
    const url = 'https://translate.googleapis.com/translate_tts?ie=UTF-8&tl=zh-CN&client=gtx&q=' +
      encodeURIComponent(text.substring(0, 200)) + '&ttsspeed=1.0';
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('TTS upstream failed: ' + resp.status);
    fs.writeFileSync(tempAudio, Buffer.from(await resp.arrayBuffer()));

    const ffmpegPath = require('ffmpeg-static');
    const { execSync } = require('child_process');
    const cmd = '"' + ffmpegPath + '" -y -loop 1 -i "' + imgPath + '" -i "' + tempAudio +
      '" -c:v libx264 -tune stillimage -c:a aac -b:a 192k -pix_fmt yuv420p -shortest "' + outVideo + '"';
    execSync(cmd, { stdio: 'pipe' });
    console.log('video written: ' + outVideo);
  } catch (e) {
    console.error('FAILED: ' + e.message);
    process.exit(1);
  } finally {
    try { if (fs.existsSync(tempAudio)) fs.unlinkSync(tempAudio); } catch (e) {}
  }
})();

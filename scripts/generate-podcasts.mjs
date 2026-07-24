import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const episodes = [
  {
    id: 'podcast-ep1', title: 'Greetings & Introductions',
    lines: ['你好，欢迎来到 MandarinCourse 播客。', '今天我们要学习打招呼和自我介绍。', '你好，我叫小明。', '请问你叫什么名字？', '认识你很高兴。', '他是我的好朋友。', '她是我们班的同学。', '大家一起说中文吧。', '再见，下次再见！']
  },
  {
    id: 'podcast-ep2', title: 'Numbers & Daily Life',
    lines: ['大家好，欢迎收听第二集。', '今天我们来学习数字和日常生活。', '一二三四五六七八九十。', '我每天早上六点起床。', '我吃早饭然后去上班。', '我晚上十点睡觉。', '今天是二零二六年七月二十三日。', '明天是星期六，我们不用上班。', '祝你每天都有好心情！']
  },
  {
    id: 'podcast-ep3', title: 'Food & Restaurant',
    lines: ['大家好，欢迎收听第三集。', '今天我们聊聊食物和餐厅。', '你喜欢吃什么？', '我喜欢吃面条和饺子。', '这家餐厅的菜很好吃。', '我要一个汉堡和一杯可乐。', '请问这个多少钱？', '太贵了，可以便宜一点吗？', '谢谢，很好吃！']
  },
  {
    id: 'podcast-ep4', title: 'Travel & Directions',
    lines: ['大家好，欢迎收听第四集。', '今天我们学习旅行和问路。', '请问去故宫怎么走？', '往前走然后右转。', '坐地铁比坐公交车快。', '我要买两张去北京的火车票。', '飞机票多少钱一张？', '酒店已经订好了。', '祝你们旅途愉快！']
  },
  {
    id: 'podcast-ep5', title: 'Chinese Culture & Customs',
    lines: ['大家好，欢迎收听第五集。', '今天我们来聊聊中国文化。', '春节是中国最重要的节日。', '过年的时候大家吃饺子。', '红色代表好运和幸福。', '中秋节吃月饼赏月亮。', '端午节吃粽子赛龙舟。', '中国人的礼仪很重要。', '谢谢收听，下次再见！']
  }
];

async function generateAudio(text, lang = 'zh-CN') {
  const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&tl=${lang}&client=gtx&q=${encodeURIComponent(text)}`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`TTS failed: ${resp.status}`);
  return Buffer.from(await resp.arrayBuffer());
}

async function generatePodcast() {
  const audioDir = join(__dirname, '..', 'public', 'audio');
  if (!existsSync(audioDir)) mkdirSync(audioDir, { recursive: true });

  for (const ep of episodes) {
    console.log(`\nGenerating ${ep.id} - ${ep.title}...`);
    const segments = [];
    for (let i = 0; i < ep.lines.length; i++) {
      const line = ep.lines[i];
      process.stdout.write(`  [${i + 1}/${ep.lines.length}] "${line}"... `);
      try {
        const buf = await generateAudio(line);
        const segmentPath = join(audioDir, `_seg_${ep.id}_${i}.mp3`);
        writeFileSync(segmentPath, buf);
        segments.push(segmentPath);
        console.log('OK');
      } catch (e) {
        console.log(`FAILED: ${e.message}`);
      }
      // Small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 500));
    }

    if (segments.length > 0) {
      console.log(`  Concatenating ${segments.length} segments with ffmpeg...`);
      const { default: ffmpegPath } = await import('ffmpeg-static');
      const { execSync } = await import('child_process');
      const listPath = join(audioDir, `_list_${ep.id}.txt`);
      writeFileSync(listPath, segments.map(s => `file '${s.replace(/'/g,"'\\''")}'`).join('\n'));
      const outPath = join(audioDir, `${ep.id}.mp3`);
      try {
        execSync(`"${ffmpegPath}" -f concat -safe 0 -i "${listPath}" -c copy "${outPath}"`, { stdio: 'pipe' });
        const { statSync } = await import('fs');
        const size = statSync(outPath).size;
        console.log(`  Done! ${ep.id}.mp3 → ${(size / 1024).toFixed(0)}KB`);
      } catch (e) {
        console.log(`  ffmpeg failed: ${e.message}`);
        const { copyFileSync } = await import('fs');
        copyFileSync(segments[0], outPath);
        console.log(`  Fallback: copied first segment as ${ep.id}.mp3`);
      }
      // Cleanup
      const fsMod = await import('fs');
      for (const s of segments) { try { fsMod.unlinkSync(s); } catch {} }
      try { fsMod.unlinkSync(listPath); } catch {}
    }
  }
  console.log('\nAll podcasts generated!');
}

generatePodcast().catch(e => console.error('Fatal:', e));

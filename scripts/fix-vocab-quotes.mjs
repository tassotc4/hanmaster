import fs from 'fs';
import { execSync } from 'child_process';

const files = ['public/js/vocab-data.js', 'public/js/vocab-extra-data.js'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Find lines with pinyin containing apostrophes inside single-quoted strings
  // Pattern: ,p:'...'...' — the apostrophe in pinyin like nǚ'ér breaks the string
  content = content.replace(/,p:'([^']*?)'([a-z])/g, (match, before, after) => {
    // Escape the apostrophe by replacing with \'
    return ",p:'" + before + "\\'" + after;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    const diff = content.split('\n').length - original.split('\n').length;
    console.log(`Fixed ${file}`);
  } else {
    console.log(`No changes in ${file}`);
  }

  // Verify syntax
  try {
    execSync(`node --check "${file}"`, { stdio: 'pipe' });
    console.log(`  Syntax: OK`);
  } catch (e) {
    console.error(`  Syntax ERROR: ${e.stderr.toString().split('\n')[0]}`);
  }
}

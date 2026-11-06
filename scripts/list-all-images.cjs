const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = getFiles('src');
const urlRegex = /(https:\/\/images\.unsplash\.com\/[^\s'\"\`\)]+)/g;
const usages = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, lineIdx) => {
    let match;
    while ((match = urlRegex.exec(line)) !== null) {
      const fullUrl = match[1];
      const photoId = fullUrl.split('?')[0].replace('https://images.unsplash.com/', '');
      usages.push({
        file: path.relative('src', f),
        line: lineIdx + 1,
        photoId,
        snippet: line.trim().slice(0, 100)
      });
    }
  });
});

console.log(`Found ${usages.length} image occurrences across src/:\n`);
usages.forEach(u => {
  console.log(`${u.file}:${u.line} [${u.photoId}] -> ${u.snippet}`);
});

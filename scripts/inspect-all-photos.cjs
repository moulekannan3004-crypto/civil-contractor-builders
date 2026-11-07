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
const urlRegex = /(https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+)[^\s'\"\`\)]*/g;
const photos = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, lineIdx) => {
    let match;
    while ((match = urlRegex.exec(line)) !== null) {
      const fullUrl = match[0];
      const photoId = match[1].replace('https://images.unsplash.com/', '');
      photos.push({
        file: path.relative('src', f),
        line: lineIdx + 1,
        photoId,
        snippet: line.trim()
      });
    }
  });
});

console.log(`Found ${photos.length} photos:`);
photos.forEach((p, i) => {
  console.log(`[#${i + 1}] ${p.file}:${p.line}`);
  console.log(`    ID: ${p.photoId}`);
  console.log(`    Context: ${p.snippet.substring(0, 120)}`);
});

const fs = require('fs');
const path = require('path');

function getFiles(dir, exts) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        results = results.concat(getFiles(fullPath, exts));
      }
    } else {
      if (exts.some(ext => file.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

const files = getFiles('.', ['.js', '.jsx', '.html']);
const urlRegex = /(https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+)/g;
const urlMap = {};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    const cleanUrl = match[1];
    if (!urlMap[cleanUrl]) urlMap[cleanUrl] = new Set();
    urlMap[cleanUrl].add(path.relative('.', f));
  }
});

console.log('Total files scanned:', files.length);
console.log('Total unique photo IDs found:', Object.keys(urlMap).length);

console.log('\nDUPLICATE USAGES ACROSS PROJECT:');
let dupes = 0;
for (const [url, fSet] of Object.entries(urlMap)) {
  const fList = Array.from(fSet);
  // Separate into src files vs compiled root html files
  const srcFiles = fList.filter(f => f.startsWith('src'));
  if (srcFiles.length > 1) {
    dupes++;
    console.log(`[${srcFiles.length}x in src] ${url}`);
    console.log(`     in: ${srcFiles.join(', ')}`);
  }
}
console.log(`\nFound ${dupes} duplicate images in src.`);

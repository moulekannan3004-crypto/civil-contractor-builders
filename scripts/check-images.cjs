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
const urlRegex = /(https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+)/g;
const urlMap = {};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    const cleanUrl = match[1];
    if (!urlMap[cleanUrl]) urlMap[cleanUrl] = [];
    urlMap[cleanUrl].push(path.relative('src', f));
  }
});

console.log('Total unique photo IDs found:', Object.keys(urlMap).length);
console.log('\nDUPLICATE PHOTOS ACROSS SITE:');
let dupCount = 0;
for (const [url, fList] of Object.entries(urlMap)) {
  if (fList.length > 1) {
    dupCount++;
    console.log(`[${fList.length}x] ${url}`);
    console.log(`     in: ${fList.join(', ')}`);
  }
}
console.log(`\nFound ${dupCount} duplicate images.`);

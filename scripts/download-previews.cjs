const fs = require('fs');
const path = require('path');
const https = require('https');

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
const photosMap = new Map();

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, lineIdx) => {
    let match;
    while ((match = urlRegex.exec(line)) !== null) {
      const fullUrl = match[0];
      const photoId = match[1].replace('https://images.unsplash.com/', '');
      if (!photosMap.has(photoId)) {
        photosMap.set(photoId, {
          id: photoId,
          firstFile: path.relative('src', f),
          line: lineIdx + 1,
          snippet: line.trim()
        });
      }
    }
  });
});

console.log('Total distinct photos:', photosMap.size);

const outDir = path.join(__dirname, 'previews');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const entries = Array.from(photosMap.values());
let completed = 0;

function downloadOne(entry) {
  return new Promise((resolve) => {
    const thumbUrl = `https://images.unsplash.com/${entry.id}?auto=format&fit=crop&w=200&q=70`;
    const dest = path.join(outDir, `${entry.id}.jpg`);
    const file = fs.createWriteStream(dest);
    
    https.get(thumbUrl, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          completed++;
          resolve({ id: entry.id, status: 200, size: fs.statSync(dest).size });
        });
      } else {
        file.close();
        fs.unlinkSync(dest);
        resolve({ id: entry.id, status: res.statusCode, size: 0 });
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve({ id: entry.id, status: 'ERROR', error: err.message });
    });
  });
}

async function run() {
  const batchSize = 10;
  const results = [];
  for (let i = 0; i < entries.length; i += batchSize) {
    const batch = entries.slice(i, i + batchSize);
    const res = await Promise.all(batch.map(downloadOne));
    results.push(...res);
    console.log(`Progress: ${completed} / ${entries.length}`);
  }
  console.log('Download complete.');
}

run();

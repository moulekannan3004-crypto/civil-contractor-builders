const fs = require('fs');
const path = require('path');
const https = require('https');

function getAllExistingPhotos() {
  function scan(dir) {
    let list = [];
    fs.readdirSync(dir).forEach(file => {
      const full = path.join(dir, file);
      if (fs.statSync(full).isDirectory()) {
        list = list.concat(scan(full));
      } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
        const content = fs.readFileSync(full, 'utf8');
        const matches = content.match(/photo-[a-zA-Z0-9-]+/g) || [];
        matches.forEach(m => list.push(m));
      }
    });
    return list;
  }
  return new Set(scan(path.join(__dirname, '..', 'src')));
}

const existing = getAllExistingPhotos();

const batch2 = [
  // Industrial PEB & Steel Framing for Home 2
  { id: 'photo-1504328345606-18bbc8c9d7d1', desc: 'Heavy metal structural fabrication' }, // in src? check
  { id: 'photo-1581093458791-9f3c3900df4b', desc: 'Engineers on industrial site with blueprints' },
  { id: 'photo-1581093588401-fbb62a02f120', desc: 'Industrial logistics warehouse' },
  { id: 'photo-1586528116311-ad8dd3c8310d', desc: 'Logistics cargo facility' },
  { id: 'photo-1513828583688-c52646db42da', desc: 'Construction crane steel beams' },
  { id: 'photo-1581092335878-2d9ff86ca2bf', desc: 'Industrial factory trusses' },
  { id: 'photo-1581092162384-8987c1d64718', desc: 'Heavy engineering plant' },

  // Engineering Journal / Research / Lab for Blog
  { id: 'photo-1532094349884-543bc11b234d', desc: 'Laboratory testing and technical research' },
  { id: 'photo-1507668077129-56e32842fceb', desc: 'Technical library and blueprints' },
  { id: 'photo-1497366811353-6870744d04b2', desc: 'Corporate research center' },
  { id: 'photo-1451187580459-43490279c0fa', desc: 'Digital network / engineering tech' },
  { id: 'photo-1518770660439-4636190af475', desc: 'Technology circuit board' },
  { id: 'photo-1581093806997-124204d9fa9d', desc: 'Civil lab concrete testing' },

  // Service Details (Execution & Technical Specs)
  { id: 'photo-1581092795360-fd1ca04f0952', desc: 'Architect drawing specs' },
  { id: 'photo-1503387762-592deb58ef4e', desc: 'Blueprint plan drafting' },
  { id: 'photo-1504917599217-d4dc5ebe6122', desc: 'Steel girder frame' },
  { id: 'photo-1581093450021-4a7360e9a6b5', desc: 'Civil engineering blueprints hardhat' }
];

function checkOne(item) {
  return new Promise((resolve) => {
    const req = https.get(`https://images.unsplash.com/${item.id}?auto=format&fit=crop&w=600&q=80`, { timeout: 3500 }, (res) => {
      resolve({ ...item, status: res.statusCode, isUsedInSrc: existing.has(item.id) });
    });
    req.on('timeout', () => { req.destroy(); resolve({ ...item, status: 0, isUsedInSrc: existing.has(item.id) }); });
    req.on('error', () => { resolve({ ...item, status: 0, isUsedInSrc: existing.has(item.id) }); });
  });
}

Promise.all(batch2.map(checkOne)).then(results => {
  console.log('\n--- BATCH 2 RESULTS ---');
  results.filter(r => r.status === 200 && !r.isUsedInSrc).forEach(r => {
    console.log(`[200 UNUSED] ${r.id} -> ${r.desc}`);
  });
});

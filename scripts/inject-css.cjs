const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const assetsDir = path.join(rootDir, 'assets');
const distAssetsDir = path.join(distDir, 'assets');
const buildVersion = Date.now();

// Ensure dist and dist/assets directories exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}
if (!fs.existsSync(distAssetsDir)) {
  fs.mkdirSync(distAssetsDir, { recursive: true });
}

// Sync main.css to index.css in both root assets and dist assets
const mainCssPath = path.join(assetsDir, 'main.css');
const indexCssPath = path.join(assetsDir, 'index.css');

if (fs.existsSync(mainCssPath)) {
  fs.copyFileSync(mainCssPath, indexCssPath);
  fs.copyFileSync(mainCssPath, path.join(distAssetsDir, 'main.css'));
  fs.copyFileSync(mainCssPath, path.join(distAssetsDir, 'index.css'));
}

// Copy favicon and images to dist
['favicon.svg', 'about-civil-engineers.jpg', 'home-hero-construction.jpg', 'home2-hero-industrial.jpg', 'bim-5d-modeling.jpg', 'safety-toolbox-briefing.jpg', 'green-concrete-foundations.jpg'].forEach(file => {
  const src = path.join(assetsDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distAssetsDir, file));
  }
});

const cssContent = fs.existsSync(indexCssPath) ? fs.readFileSync(indexCssPath, 'utf8') : '';

const pages = [
  {
    fileName: 'index.html',
    title: 'ApexBuild | Civil Contractor & Builders | Home 1',
    description: 'Leading civil contractor and commercial & residential builders. Delivering high-quality structural works, industrial facilities, and turnkey construction with strength, precision, and trust.'
  },
  {
    fileName: 'home-2.html',
    title: 'Industrial Infrastructure & Pre-Engineered Steel (PEB) | ApexBuild EPC | Home 2',
    description: 'Turnkey industrial EPC contracting, pre-engineered steel warehouses, clear-span framing, heavy machinery foundations, and manufacturing plants.'
  },
  {
    fileName: 'about.html',
    title: 'About Us | ApexBuild Civil Contractors & Master Builders',
    description: 'Learn about ApexBuild: 26+ years of civil contracting, Class-A contractor licensing, ISO 9001 quality assurance, and our executive engineering leadership.'
  },
  {
    fileName: 'services.html',
    title: 'Construction Services | Turnkey Civil & Building Contracting | ApexBuild',
    description: 'Explore our 8 turnkey civil construction capabilities: Residential, Commercial, Industrial, Renovations, Deep Foundations, Civil Works, Finishes, and Project Management.'
  },
  {
    fileName: 'service-details.html',
    title: 'Service Specifications & Execution Phases | ApexBuild Civil Contracting',
    description: 'In-depth engineering scope, material specifications, 5-stage milestone phases, square-foot rate tables, and client FAQs.'
  },
  {
    fileName: 'projects.html',
    title: 'Projects Portfolio | Landmark Civil & Commercial Builds | ApexBuild',
    description: 'Browse our portfolio of completed landmark commercial towers, industrial logistics parks, luxury villas, and highway civil infrastructure.'
  },
  {
    fileName: 'pricing.html',
    title: 'Construction Cost Estimator & Pricing Packages | ApexBuild',
    description: 'Interactive square footage cost calculator, turnkey contracting tiers, specification comparison matrix, and financial milestone schedules.'
  },
  {
    fileName: 'blog.html',
    title: 'Engineering Journal & Technical Whitepapers | ApexBuild Knowledge Base',
    description: 'Filterable and searchable engineering articles, geotechnical whitepapers, BIM cost optimization guides, and OSHA job-site safety frameworks.'
  },
  {
    fileName: 'blog-details.html',
    title: 'Deep Foundation Engineering Case Study | ApexBuild Technical Journal',
    description: 'Technical analysis of bored piling, bentonite slurry stabilization, and ultrasonic non-destructive testing for coastal high-rise towers.'
  },
  {
    fileName: 'contact.html',
    title: 'Contact & Free Construction Quote | ApexBuild Civil Contractors',
    description: 'Request a free construction quote, submit architectural blueprints, or connect directly with our engineering estimating desk in Metro City.'
  },
  {
    fileName: 'auth.html',
    title: 'Client Portal & Subcontractor Login | ApexBuild Contracting Cloud',
    description: 'Secure client portal login and trade contractor onboarding for 24/7 site cameras, daily inspection logs, and billing statements.'
  },
  {
    fileName: '404.html',
    title: 'Page Not Found (404) | ApexBuild Civil Contractors',
    description: 'The requested blueprint or construction page has been moved or is under active development.'
  }
];

pages.forEach((page) => {
  const filePath = path.join(rootDir, page.fileName);
  const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./assets/favicon.svg?v=${buildVersion}" />
    <link rel="alternate icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%23F28C28'/><g transform='translate(4, 4)' fill='none' stroke='%23070F19' stroke-width='2.3' stroke-linecap='round' stroke-linejoin='round'><rect x='4' y='2' width='16' height='20' rx='2'/><path d='M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3'/><path d='M8 6h.01'/><path d='M12 6h.01'/><path d='M16 6h.01'/><path d='M8 10h.01'/><path d='M12 10h.01'/><path d='M16 10h.01'/><path d='M8 14h.01'/><path d='M12 14h.01'/><path d='M16 14h.01'/></g></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="keywords" content="civil contractor, builders, commercial construction, residential construction, structural engineering, civil engineering, industrial warehouses, renovations" />
    
    <!-- Google Fonts: Montserrat & Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@500;600;700;800;900&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
    
    <!-- External CSS Link -->
    <link rel="stylesheet" href="./assets/index.css?v=${buildVersion}">
    <link rel="stylesheet" href="./assets/main.css?v=${buildVersion}">
    
    <!-- Inlined Compiled Tailwind CSS (guarantees instant styling in Live Server & all browsers) -->
    <style>
${cssContent}
    </style>
  </head>
  <body class="font-sans text-charcoal-800 bg-white antialiased selection:bg-construction-500 selection:text-white">
    <div id="root"></div>
    <script type="module" src="./assets/index.js?v=${buildVersion}"></script>
  </body>
</html>`;

  fs.writeFileSync(filePath, htmlContent, 'utf8');
  fs.writeFileSync(path.join(distDir, page.fileName), htmlContent, 'utf8');
  console.log(`Generated: ${page.fileName} (root & dist)`);
});

console.log(`All ${pages.length} pages generated and synced with latest bundle.`);

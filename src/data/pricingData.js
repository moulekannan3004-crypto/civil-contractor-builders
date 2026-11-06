export const pricingPackages = [
  {
    id: 'residential-turnkey',
    name: 'Residential Turnkey',
    tagline: 'Custom villas, multi-family housing & residential estates',
    rateSqFt: '$185 – $260',
    ratePeriod: 'per square foot',
    popular: false,
    badge: 'Standard Quality',
    description: 'Complete end-to-end contracting for private landowners, custom home builders, and luxury residential developments.',
    features: [
      'Engineered Raft / Isolated RCC Footing & Soil Testing',
      'Fe-550D TMT Reinforcement & M25 Grade Ready-Mix Concrete',
      'Full Exterior Wall Masonry & Acoustic Insulation',
      'Complete Plumbing, Electrical, and HVAC Rough-Ins',
      'Standard Architectural Windows & Double Glazed Doors',
      'Municipal Permits, Code Inspections & Sign-offs',
      '10-Year Structural Defect Warranty'
    ],
    timeline: '8 – 14 Months',
    paymentStructure: 'Milestone-based (10% Advance, 20% Foundation, 25% Frame, 25% Finishes, 20% Handover)'
  },
  {
    id: 'commercial-general',
    name: 'Commercial Turnkey',
    tagline: 'Office towers, retail centers & tech headquarters',
    rateSqFt: '$240 – $380',
    ratePeriod: 'per square foot',
    popular: true,
    badge: 'Most Popular',
    description: 'Turnkey commercial civil engineering delivering modern Class-A floorplates, high-performance facades, and advanced MEP integration.',
    features: [
      'Subterranean Diaphragm Retaining Walls & Multi-Level Basements',
      'Post-Tensioned (PT) Slabs for Wide Column-Free Clear Spans',
      'Unitized High-Performance Curtain Wall Glazing & Architectural Facade',
      'Integrated Building Management System (BMS) & Central HVAC',
      'Full Fire Suppression (NFPA Sprinklers, Hydrants & Pressurized Stairwells)',
      '5D BIM Clash Detection & Automated Value Engineering',
      'Dedicated On-Site PMP Project Manager & QA/QC Inspector',
      'LEED Gold / WELL Building Compliance Guarantee'
    ],
    timeline: '12 – 24 Months',
    paymentStructure: 'AIA G702/G703 Monthly Progress Billing with 5% Retainage'
  },
  {
    id: 'industrial-epc',
    name: 'Industrial EPC & PEB',
    tagline: 'Logistics hubs, cold storage & manufacturing plants',
    rateSqFt: '$140 – $220',
    ratePeriod: 'per square foot',
    popular: false,
    badge: 'Industrial Grade',
    description: 'Engineering, Procurement & Construction (EPC) with Pre-Engineered Steel (PEB) up to 60-meter clear spans and heavy machinery foundations.',
    features: [
      'Heavy Equipment Machine Pit Foundations with Vibration Dampening',
      'Structural Steel PEB Framing with Hot-Dip Galvanized Purlins',
      'Up to 60m Column-Free Clear Span for Automated Forklifts / Cranes',
      'Laser-Screed High-Tolerance Superflat Industrial Flooring (FM2 Spec)',
      'Insulated Metal Sandwich Panels (PIR / Rockwool Fire-Rated)',
      'Automated Dock Levelers, High-Speed Overhead Sectional Doors',
      'High-Bay Industrial LED Lighting & HVLS Air Circulation',
      '20-Year Weather-Tight Roof Guarantee'
    ],
    timeline: '6 – 12 Months',
    paymentStructure: 'EPC Milestone Payments tied to Factory Fabrication and Site Erection'
  }
];

export const pricingComparisonFeatures = [
  { feature: 'Geotechnical Soil Testing & Boring Report', residential: true, commercial: true, industrial: true },
  { feature: '3D & 5D BIM Virtual Clash Detection', residential: 'Basic 3D', commercial: 'Full 5D BIM', industrial: 'Full 5D BIM' },
  { feature: 'Structural Frame Warranty', residential: '10 Years', commercial: '15 Years', industrial: '20 Years' },
  { feature: 'Column-Free Clear Span', residential: 'Up to 8m', commercial: 'Up to 14m (PT)', industrial: 'Up to 60m (PEB)' },
  { feature: 'Automated Fire Suppression Systems', residential: 'Smoke/Alarm', commercial: 'NFPA Sprinklers', industrial: 'NFPA + Deluge Foam' },
  { feature: 'Floor Load Capacity (psf)', residential: '60 – 100 psf', commercial: '150 – 250 psf', industrial: '500 – 2,000+ psf' },
  { feature: 'Dedicated PMP Certified Project Director', residential: false, commercial: true, industrial: true },
  { feature: '24/7 Live Job Site Camera Access', residential: true, commercial: true, industrial: true }
];

export const pricingFaqs = [
  {
    q: 'How does ApexBuild calculate the exact construction cost for a project?',
    a: 'We provide itemized, transparent Bills of Quantities (BOQ) using 5D BIM estimation software. Pricing is calculated based on exact structural steel tonnage, concrete cubic yardage, soil conditions, foundation depths, and architectural finish schedules—ensuring zero unexpected hidden fees.'
  },
  {
    q: 'Do you offer fixed-price guaranteed maximum price (GMP) contracts?',
    a: 'Yes. For qualified commercial and residential projects, we execute Guaranteed Maximum Price (GMP) and Lump-Sum Turnkey contracts where ApexBuild absorbs material fluctuation risks after design finalization.'
  },
  {
    q: 'What is the standard payment milestone schedule?',
    a: 'Payments are strictly milestone-driven. For residential builds, we use 5 clear inspection gates (Advance, Foundation, Frame, Finishes, Handover). For large commercial projects, we utilize standard AIA G702/G703 monthly progress billing with 5% retainage released upon certificate of occupancy.'
  },
  {
    q: 'Can we submit our existing architectural blueprints for cost estimation?',
    a: 'Absolutely. You can upload CAD or PDF drawings via our online Quote Portal or email them to quotes@apexbuildcivil.com. Our engineering estimating desk delivers a detailed itemized preliminary estimate within 48 to 72 business hours.'
  }
];

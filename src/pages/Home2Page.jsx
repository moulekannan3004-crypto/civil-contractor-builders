import React, { useState } from 'react';
import { 
  Building, 
  ShieldCheck, 
  HardHat, 
  Truck, 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  Factory, 
  Zap, 
  Clock, 
  Download, 
  Calculator,
  Compass,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Award,
  Layers,
  FileText,
  Phone,
  Calendar,
  Warehouse,
  ExternalLink,
  Flame,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  Activity,
  Maximize2
} from 'lucide-react';
import { companyInfo, companyStats } from '../data/companyData';
import { projectsData } from '../data/projectsData';

export default function Home2Page({ setCurrentPage, openQuoteModal, setSelectedProject }) {
  // Industrial Cost Estimator State
  const [buildingType, setBuildingType] = useState('warehouse');
  const [squareFootage, setSquareFootage] = useState(35000);
  const [includeClearSpan, setIncludeClearSpan] = useState(true);
  const [includeCraneRunway, setIncludeCraneRunway] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  const calculateEstimate = () => {
    let rate = 145; // base rate per sq.ft
    if (buildingType === 'manufacturing') rate = 180;
    if (buildingType === 'coldstorage') rate = 220;
    if (buildingType === 'hangar') rate = 205;
    if (buildingType === 'cleanroom') rate = 265;
    if (includeClearSpan) rate += 15;
    if (includeCraneRunway) rate += 22;
    return (squareFootage * rate).toLocaleString();
  };

  // Self-Owned Heavy Machinery Fleet Data
  const fleetEquipment = [
    {
      name: '50-Ton & 100-Ton All-Terrain Telescopic Cranes',
      category: 'Heavy Lifting & Erection',
      desc: 'Hydraulic boom cranes ensuring safe, millimeter-accurate positioning of 40m+ roof rafters and heavy structural trusses.',
      capacity: 'Up to 100 Metric Tons / 68m Reach'
    },
    {
      name: 'Somero S-22EZ Laser Screed Floor Units',
      category: 'Industrial Concrete Finishing',
      desc: 'Fully automated 3D laser-guided screeding delivering jointless TR-34 FM2 superflat industrial floors at 50,000 sq.ft/day.',
      capacity: 'Tolerance: +/- 2mm across 3m grid'
    },
    {
      name: 'Hydraulic Rotary Soil Piling Rigs',
      category: 'Deep Geotechnical Foundations',
      desc: 'High-torque hydraulic piling rigs capable of boring through marine clay and dense bedrock to anchor heavy column footings.',
      capacity: 'Up to 36m Bore Depth / 1500mm Diameter'
    },
    {
      name: 'Automated Submerged-Arc Beam Welding Line',
      category: 'In-House Steel Fabrication',
      desc: 'Computer-controlled twin-wire SAW welding lines producing high-tensile built-up plate girders meeting AWS D1.1 specifications.',
      capacity: '2,500 Metric Tons Monthly Capacity'
    },
    {
      name: 'Concrete Transit Fleet & 42m Boom Pumps',
      category: 'Continuous Concrete Placement',
      desc: 'Dedicated mobile fleet eliminating cold-joint risks during continuous mass concrete slab and raft foundation pours.',
      capacity: '140 m³/hour Pumping Velocity'
    },
    {
      name: 'Caterpillar Heavy Earthmoving Fleet (D8 / 336 Excavators)',
      category: 'Site Grading & Civil Earthworks',
      desc: 'GPS-guided bulk grading and soil stabilization machinery to rapidly prepare 50+ acre industrial parcels.',
      capacity: '10,000 m³ Daily Earthwork Volume'
    }
  ];

  // Industrial Projects
  const industrialProjects = projectsData.filter(p => p.category === 'Industrial' || p.category === 'Civil Works').slice(0, 3);

  // Technical FAQ Data
  const industrialFaqs = [
    {
      q: 'What is the maximum column-free clear span possible with ApexBuild pre-engineered steel?',
      a: 'Through our computer-optimized tapered plate girder technology and high-tensile steel (Grade 50 / 345 MPa), ApexBuild regularly designs and erects clear-span buildings up to 60 meters (nearly 200 feet) completely free of internal columns. For even wider spans, we utilize modular rigid frames or multi-span layouts with minimal internal posts.'
    },
    {
      q: 'How does ApexBuild achieve DIN TR-34 FM2 superflat industrial floor tolerances?',
      a: 'We operate our own fleet of Somero laser screed machines integrated with digital optical level transmitters. We utilize specialized low-shrinkage concrete mix designs, steel fiber reinforcement matrix, and dry-shake mineral hardeners. Following the pour, every square meter is independently profiled using digital walking floor profilers to issue certified compliance certificates for automated guided vehicles (AGV).'
    },
    {
      q: 'What is the typical project timeline from architectural sign-off to full handover?',
      a: 'A standard 100,000 sq.ft industrial distribution center is typically engineered, fabricated, erected, and fully handed over in approximately 4 to 6 months. Because our civil site preparation and foundation piling occur concurrently with off-site automated steel fabrication, we eliminate up to 40% of conventional construction downtime.'
    },
    {
      q: 'Are your industrial pre-engineered facilities compliant with FM Global and NFPA fire safety standards?',
      a: 'Yes. All ApexBuild industrial structural steel buildings are engineered in accordance with international building codes (IBC), American Institute of Steel Construction (AISC) standards, and FM Global fire underwriting guidelines. We provide factory-applied 2-hour intumescent coatings, UL-certified PIR fire-rated wall panels, and complete NFPA 13 automatic fire sprinkler infrastructure.'
    },
    {
      q: 'How do you handle geotechnical foundations on soft, marshy, or low-bearing industrial soils?',
      a: 'Our in-house geotechnical engineering division conducts comprehensive standard penetration testing (SPT) and core drilling before structural design. Based on soil mechanics, we execute deep bored cast-in-situ friction piles, driven precast piles, stone column vibro-replacement, or lime stabilization to guarantee zero structural settlement under heavy racking loads.'
    }
  ];

  return (
    <div className="w-full">
      {/* =========================================================================
          1. INDUSTRIAL HERO SECTION & LIVE RAPID ESTIMATOR
          ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-950 text-white overflow-hidden py-20 lg:py-24">
        {/* Background Overlay with Clearly Visible Industrial Structural Steel Superstructure */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=2000&q=80"
            alt="Industrial pre-engineered steel superstructure, PEB framing, and warehouse logistics facility"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-navy-950/40" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Industrial Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-construction-500/10 border border-construction-500/40 text-construction-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <Factory className="w-4 h-4 text-construction-500" />
                <span>Niche EPC Division &bull; Heavy Industrial Infrastructure</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] text-white">
                Turnkey Industrial Plants & <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-400 to-amber-500">
                  Pre-Engineered Steel.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                From 100,000+ sq.ft logistics distribution centers to automated manufacturing facilities, ApexBuild delivers complete turnkey EPC engineering, deep foundation piling, and structural steel framing designed for high production uptime.
              </p>

              {/* Key Highlights Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-navy-900/80 p-3 rounded-lg border border-navy-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-construction-400 flex-shrink-0" />
                  <span>Up to 60m Clear Span</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-navy-900/80 p-3 rounded-lg border border-navy-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-construction-400 flex-shrink-0" />
                  <span>Laser Superflat Floors</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200 bg-navy-900/80 p-3 rounded-lg border border-navy-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-construction-400 flex-shrink-0" />
                  <span>40% Faster Handover</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button
                  onClick={() => openQuoteModal({ serviceCategory: 'Industrial' })}
                  className="h-14 w-full sm:w-[240px] rounded-lg bg-construction-500 hover:bg-construction-600 active:bg-construction-700 text-white font-heading font-bold text-base tracking-wide border-2 border-construction-500 shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2.5"
                >
                  <span>Request Industrial RFP</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <a
                  href="#quickCalculator"
                  className="h-14 w-full sm:w-[240px] rounded-lg bg-navy-900/90 hover:bg-navy-800 active:bg-navy-700 text-white font-heading font-bold text-base tracking-wide border-2 border-slate-700 shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2.5"
                >
                  <Calculator className="w-5 h-5 text-construction-400" />
                  <span>Instant PEB Estimator</span>
                </a>
              </div>

              {/* Client Stats Badge */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-navy-800 text-slate-400 text-xs">
                <div>
                  <strong className="text-white text-lg font-black block font-heading text-construction-400">2.8M+ Sq.Ft</strong>
                  <span className="text-[11px] text-slate-300">Industrial Space Built</span>
                </div>
                <div className="border-l border-navy-800 pl-4">
                  <strong className="text-white text-lg font-black block font-heading text-construction-400">OSHA Star</strong>
                  <span className="text-[11px] text-slate-300">Zero Lost Time Incidents</span>
                </div>
                <div className="border-l border-navy-800 pl-4">
                  <strong className="text-white text-lg font-black block font-heading text-construction-400">Class-A</strong>
                  <span className="text-[11px] text-slate-300">Licensed EPC Contractor</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive PEB Rapid Estimator */}
            <div className="lg:col-span-5" id="quickCalculator">
              <div className="bg-navy-900/95 border-2 border-construction-500/50 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative">
                <div className="absolute -top-3 right-6 bg-construction-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                  Interactive Estimator
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-construction-500/20 rounded-xl text-construction-400">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black font-heading text-white">PEB Warehouse &amp; Plant Estimator</h3>
                    <p className="text-xs text-slate-300">Instant budgetary rough-order-of-magnitude</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Building Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Facility Classification
                    </label>
                    <select
                      value={buildingType}
                      onChange={(e) => setBuildingType(e.target.value)}
                      className="w-full bg-navy-950 border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-construction-500"
                    >
                      <option value="warehouse">Logistics Warehouse / Distribution ($145/sq.ft)</option>
                      <option value="manufacturing">Heavy Manufacturing &amp; Assembly ($180/sq.ft)</option>
                      <option value="coldstorage">Temperature-Controlled Cold Storage ($220/sq.ft)</option>
                      <option value="hangar">Aviation Hangar &amp; Wide Clear-Span ($205/sq.ft)</option>
                      <option value="cleanroom">Precision Pharmaceutical Cleanroom ($265/sq.ft)</option>
                    </select>
                  </div>

                  {/* Square Footage Slider */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-200 mb-2">
                      <span className="uppercase tracking-wider">Total Built-Up Area</span>
                      <span className="text-construction-400 font-heading text-sm">{squareFootage.toLocaleString()} SQ.FT</span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="150000"
                      step="5000"
                      value={squareFootage}
                      onChange={(e) => setSquareFootage(Number(e.target.value))}
                      className="w-full accent-construction-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>10,000 sq.ft</span>
                      <span>75,000 sq.ft</span>
                      <span>150,000 sq.ft</span>
                    </div>
                  </div>

                  {/* Add-on toggles */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between p-2.5 bg-navy-950/80 border border-slate-800 rounded-lg">
                      <div>
                        <span className="text-xs font-bold text-slate-200 block">Clear Span Post-Tensioned Framing</span>
                        <span className="text-[10px] text-slate-400">Zero interior columns up to 60m span</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={includeClearSpan}
                        onChange={(e) => setIncludeClearSpan(e.target.checked)}
                        className="w-4 h-4 accent-construction-500 rounded cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-navy-950/80 border border-slate-800 rounded-lg">
                      <div>
                        <span className="text-xs font-bold text-slate-200 block">Heavy Overhead Crane Gantry System</span>
                        <span className="text-[10px] text-slate-400">Runway beams rated for 20-ton hoist</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={includeCraneRunway}
                        onChange={(e) => setIncludeCraneRunway(e.target.checked)}
                        className="w-4 h-4 accent-construction-500 rounded cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Calculated Output Box */}
                  <div className="p-4 bg-navy-950 rounded-xl border border-construction-500/40 text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Estimated Turnkey EPC Budget
                    </span>
                    <div className="text-3xl sm:text-4xl font-black font-heading text-construction-400">
                      ${calculateEstimate()}
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-1">
                      Includes foundation, PEB steel frame, insulated sandwich cladding &amp; rough MEP
                    </span>
                  </div>

                  <button
                    onClick={() => openQuoteModal({
                      serviceCategory: 'Industrial',
                      notes: `Requested estimate for ${squareFootage.toLocaleString()} sq.ft ${buildingType} facility (~$${calculateEstimate()}). Includes clear-span: ${includeClearSpan}, Crane: ${includeCraneRunway}.`
                    })}
                    className="w-full py-3.5 px-4 rounded-lg bg-construction-500 hover:bg-construction-600 active:bg-construction-700 text-white font-heading font-black text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                  >
                    Lock In Formal Engineering RFP
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. THE 4-STEP INDUSTRIAL EPC METHODOLOGY
          ========================================================================= */}
      <section className="py-20 bg-surface-light border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-construction-600 bg-construction-500/10 px-3 py-1 rounded-full border border-construction-500/30">
              Engineered Execution Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-3">
              The ApexBuild Industrial EPC Methodology
            </h2>
            <div className="flex items-center justify-center gap-2 my-4">
              <div className="h-1.5 w-14 bg-construction-500 rounded-full"></div>
              <div className="h-1.5 w-3.5 bg-navy-800 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-navy-600 rounded-full"></div>
            </div>
            <p className="text-slate-600 leading-relaxed text-base">
              We streamline geotechnical civil foundations, precision automated steel fabrication, and turnkey mechanical utilities under a single point of unified contractual accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:border-construction-500 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-5xl font-black font-heading text-slate-100 group-hover:text-construction-500/20 absolute top-4 right-4 transition-colors font-mono">01</span>
                <div className="w-12 h-12 rounded-lg bg-navy-950 text-construction-400 flex items-center justify-center font-bold mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">Geotechnical &amp; Deep Piling</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Borehole standard penetration testing, dynamic pile load tests, high-capacity driven/bored piles, and isolated machine vibration pits.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-construction-600">
                &bull; Zero Foundation Settlement
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:border-construction-500 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-5xl font-black font-heading text-slate-100 group-hover:text-construction-500/20 absolute top-4 right-4 transition-colors font-mono">02</span>
                <div className="w-12 h-12 rounded-lg bg-navy-950 text-construction-400 flex items-center justify-center font-bold mb-4">
                  <Factory className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">Automated CNC Fabrication</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  High-tensile Grade-50 steel, CNC plasma cut tapered plate girders, automated submerged-arc welding, and shot-blasting to SA 2.5 standards.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-construction-600">
                &bull; AISC &amp; AWS D1.1 Certified
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:border-construction-500 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-5xl font-black font-heading text-slate-100 group-hover:text-construction-500/20 absolute top-4 right-4 transition-colors font-mono">03</span>
                <div className="w-12 h-12 rounded-lg bg-navy-950 text-construction-400 flex items-center justify-center font-bold mb-4">
                  <HardHat className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">Rapid Erection &amp; Laser Slab</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Torqued Grade 8.8 bolt erection, Somero laser-screeded jointless FM2 superflat industrial concrete, and insulated PIR envelopes.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-construction-600">
                &bull; 50,000 Sq.Ft/Day Pour Velocity
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:border-construction-500 hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="text-5xl font-black font-heading text-slate-100 group-hover:text-construction-500/20 absolute top-4 right-4 transition-colors font-mono">04</span>
                <div className="w-12 h-12 rounded-lg bg-navy-950 text-construction-400 flex items-center justify-center font-bold mb-4">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-950 mb-2">Commissioning &amp; Handover</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  Overhead crane load certification, NFPA fire sprinkler hydrostatic tests, municipal occupancy permits, and 25-year Galvalume warranties.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-xs font-bold text-construction-600">
                &bull; Zero-Punchlist Turnkey Keys
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SELF-OWNED HEAVY MACHINERY FLEET YARD (NEW!)
          ========================================================================= */}
      <section className="py-20 bg-navy-950 text-white border-b border-navy-800 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 blueprint-grid-dark opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded border bg-navy-900 text-construction-400 border-navy-800 mb-3">
              <Truck className="w-4 h-4 text-construction-400" />
              <span>Dedicated Plant &amp; Equipment Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
              Why ApexBuild Controls Project Timelines: <br />
              <span className="text-construction-400">100% Self-Owned Machinery Fleet</span>
            </h2>
            <div className="flex items-center justify-center gap-2 my-4">
              <div className="h-1.5 w-14 bg-construction-500 rounded-full"></div>
              <div className="h-1.5 w-3.5 bg-navy-800 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-navy-600 rounded-full"></div>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              We never depend on third-party equipment rental brokers. With complete in-house ownership of heavy telescopic cranes, laser screeds, and piling rigs, your industrial project mobilizes within 48 hours without logistical bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetEquipment.map((eq, idx) => (
              <div key={idx} className="bg-navy-900/90 border border-navy-800 p-6 rounded-xl hover:border-construction-500/60 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-construction-400 block mb-1">
                    {eq.category}
                  </span>
                  <h3 className="text-base font-bold font-heading text-white mb-2">
                    {eq.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {eq.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-navy-800 text-xs font-mono text-construction-300 flex items-center justify-between">
                  <span>Capacity:</span>
                  <span className="font-bold">{eq.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. FEATURED INDUSTRIAL LANDMARK PROJECTS (NEW!)
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-construction-600">Landmark Engineering</span>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-2">
                Featured Industrial Infrastructure Builds
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <div className="h-1.5 w-14 bg-construction-500 rounded-full"></div>
                <div className="h-1.5 w-3.5 bg-navy-800 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-navy-600 rounded-full"></div>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage('projects')}
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-bold text-construction-600 hover:text-construction-700 font-heading"
            >
              <span>Explore All Projects Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industrialProjects.map((project) => (
              <div key={project.id} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between bg-white group">
                <div>
                  <div className="h-60 overflow-hidden relative">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      onError={(e) => { e.currentTarget.src = 'assets/about-civil-engineers.jpg'; }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 bg-construction-500 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded shadow">
                      {project.category}
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center justify-between">
                      <span>{project.location}</span>
                      <span className="font-mono text-construction-400 font-bold">{project.builtUpArea}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold font-heading text-navy-950 mb-2 group-hover:text-construction-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-100 text-slate-700">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Contract Value:</span>
                        <strong className="text-navy-950 font-heading">{project.contractValue}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Timeline:</span>
                        <strong className="text-navy-950 font-heading">{project.duration}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded bg-navy-950 hover:bg-navy-900 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>View Project Blueprint</span>
                    <Maximize2 className="w-3.5 h-3.5 text-construction-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. INDUSTRIAL QUALITY, SAFETY & COMPLIANCE BADGES (NEW!)
          ========================================================================= */}
      <section className="py-14 bg-surface-light border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <Award className="w-10 h-10 text-construction-500 mb-2" />
              <h4 className="text-base font-bold font-heading text-navy-950">AISC Fabricator</h4>
              <p className="text-xs text-slate-500 mt-1">Certified Structural Steel Fabricator</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <ShieldCheck className="w-10 h-10 text-construction-500 mb-2" />
              <h4 className="text-base font-bold font-heading text-navy-950">OSHA VPP Star</h4>
              <p className="text-xs text-slate-500 mt-1">Zero Lost-Time Incidents Record</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <FileCheck className="w-10 h-10 text-construction-500 mb-2" />
              <h4 className="text-base font-bold font-heading text-navy-950">ISO 9001:2015</h4>
              <p className="text-xs text-slate-500 mt-1">Rigorous ASTM Steel Testing QA</p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <Zap className="w-10 h-10 text-construction-500 mb-2" />
              <h4 className="text-base font-bold font-heading text-navy-950">AWS D1.1 Certified</h4>
              <p className="text-xs text-slate-500 mt-1">Ultrasonic Non-Destructive Welds</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. INDUSTRIAL PRE-ENGINEERED STEEL FAQS (NEW!)
          ========================================================================= */}
      <section className="py-20 bg-surface-light border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-construction-600 bg-construction-500/10 px-3 py-1 rounded-full border border-construction-500/30">
              Technical Clarity
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 mt-3">
              Industrial EPC &bull; Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-2 my-4">
              <div className="h-1.5 w-14 bg-construction-500 rounded-full"></div>
              <div className="h-1.5 w-3.5 bg-navy-800 rounded-full"></div>
              <div className="h-1.5 w-1.5 bg-navy-600 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-4">
            {industrialFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-navy-950 hover:text-construction-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-construction-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. TURNKEY INDUSTRIAL RFP / TENDER SUBMISSION BANNER
          ========================================================================= */}
      <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-construction-400 bg-navy-900 border border-construction-500/40 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Direct Estimating Desk
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading text-white mb-4">
            Have an Upcoming Industrial or Infrastructure Bid?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
            Send us your tender specifications, architectural layouts, or structural drawings. Our senior industrial estimating desk delivers itemized Bills of Quantities and schedule models within 72 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => openQuoteModal({ serviceCategory: 'Industrial' })}
              className="h-14 px-8 w-full sm:w-auto rounded-lg bg-construction-500 hover:bg-construction-600 active:bg-construction-700 text-white font-heading font-black text-sm uppercase tracking-wider shadow-solid-orange transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Submit Tender Package (RFP)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="h-14 px-7 w-full sm:w-auto rounded-lg bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm border-2 border-slate-700 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-construction-400" />
              <span>Direct Estimator: {companyInfo.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

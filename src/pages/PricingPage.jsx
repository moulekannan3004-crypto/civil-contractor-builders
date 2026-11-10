import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  BadgeCheck, 
  Layers, 
  Download,
  Building
} from 'lucide-react';
import { pricingPackages, pricingComparisonFeatures, pricingFaqs } from '../data/pricingData';

export default function PricingPage({ setCurrentPage, openQuoteModal }) {
  // Calculator state
  const [calcProject, setCalcProject] = useState('commercial');
  const [calcArea, setCalcArea] = useState(25000);
  const [calcTier, setCalcTier] = useState('standard');
  const [openFaq, setOpenFaq] = useState(0);

  const getEstimatedCost = () => {
    let baseSqFt = 240; // commercial
    if (calcProject === 'residential') baseSqFt = 190;
    if (calcProject === 'industrial') baseSqFt = 155;
    if (calcProject === 'renovation') baseSqFt = 110;

    let multiplier = 1.0;
    if (calcTier === 'economy') multiplier = 0.85;
    if (calcTier === 'premium') multiplier = 1.35;

    const total = Math.round(calcArea * baseSqFt * multiplier);
    return {
      total: total.toLocaleString(),
      rate: Math.round(baseSqFt * multiplier)
    };
  };

  const estimate = getEstimatedCost();

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* 1. PRICING HEADER HERO */}
      <section className="bg-navy-950 text-white py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
            alt="Architectural blueprints, precision scale ruler, drafting tools, and quantity surveying cost calculations"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/65" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-construction-500/20 text-construction-400 text-xs font-bold uppercase tracking-wider mb-4 border border-construction-500/30">
            <Calculator className="w-4 h-4" />
            <span>Transparent Construction Estimating</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black font-heading tracking-tight mb-4 text-white">
            Predictable Turnkey Pricing. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-construction-400 to-amber-500">
              Zero Hidden Surprises.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From preliminary square-foot budgetary metrics to certified line-item Bills of Quantities (BOQ), explore our milestone-based commercial, residential, and industrial construction pricing.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE SQ.FT COST ESTIMATOR CALCULATOR */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-heading text-charcoal-900">
                  Instant Construction Cost Calculator
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Estimate total project investment based on building classification and square footage.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-construction-600 bg-construction-50 px-3 py-1.5 rounded-full border border-construction-200">
                <BadgeCheck className="w-4 h-4" /> 2026 Material Index Calibrated
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Controls - Perfectly Distributed */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full py-0.5">
                {/* 1. Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    1. Select Construction Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: 'residential', label: 'Residential' },
                      { id: 'commercial', label: 'Commercial' },
                      { id: 'industrial', label: 'Industrial / PEB' },
                      { id: 'renovation', label: 'Renovations' }
                    ].map(type => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setCalcProject(type.id)}
                        className={`h-11 px-2.5 rounded-lg text-xs font-bold border transition-all text-center flex items-center justify-center ${
                          calcProject === type.id
                            ? 'bg-construction-500 text-white border-construction-500 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Area */}
                <div className="my-6">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                    <span className="uppercase tracking-wider">2. Total Built-Up Area</span>
                    <span className="text-construction-600 font-heading text-base font-black px-2.5 py-0.5 rounded bg-construction-50 border border-construction-200">
                      {calcArea.toLocaleString()} SQ.FT
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="100000"
                    step="1000"
                    value={calcArea}
                    onChange={(e) => setCalcArea(Number(e.target.value))}
                    className="w-full accent-construction-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-mono">
                    <span>2,000 sq.ft</span>
                    <span>50,000 sq.ft</span>
                    <span>100,000 sq.ft</span>
                  </div>
                </div>

                {/* 3. Finish Tier */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    3. Finish &amp; Specification Tier
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'economy', label: 'Core & Shell' },
                      { id: 'standard', label: 'Standard Turnkey' },
                      { id: 'premium', label: 'Premium Class-A' }
                    ].map(t => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setCalcTier(t.id)}
                        className={`h-11 px-2 rounded-lg text-xs font-bold border transition-all text-center flex items-center justify-center ${
                          calcTier === t.id
                            ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Output Box - Level and Equal Height */}
              <div className="lg:col-span-5 bg-navy-950 text-white p-6 sm:p-8 rounded-2xl border border-navy-800 text-center shadow-lg relative overflow-hidden flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] font-bold text-construction-400 uppercase tracking-widest block mb-1">
                    Estimated Turnkey Investment
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-heading text-white mb-1">
                    ${estimate.total}
                  </div>
                  <span className="text-xs font-bold text-slate-400 block mb-6">
                    ~${estimate.rate} / sq.ft comprehensive
                  </span>

                  <div className="space-y-2.5 text-left text-xs text-slate-300 border-t border-navy-800 pt-4">
                    <div className="flex justify-between">
                      <span>Civil &amp; Structural Framing:</span>
                      <strong className="text-white">~55%</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>MEP &amp; HVAC Systems:</span>
                      <strong className="text-white">~25%</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Finishes, Permitting &amp; Testing:</span>
                      <strong className="text-white">~20%</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => openQuoteModal({
                      notes: `Calculator estimate: ${calcArea.toLocaleString()} sq.ft ${calcProject} project (~$${estimate.total}).`
                    })}
                    className="w-full h-12 rounded-xl bg-construction-500 hover:bg-construction-600 text-white font-heading font-black text-xs uppercase tracking-wider shadow-solid-orange hover:shadow-none transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Itemized Proposal &amp; BOQ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE TURNKEY PACKAGES CARDS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-black font-heading text-charcoal-900">
              Turnkey Contracting Packages
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every package is backed by bonded guarantees, Class-A licensing, and independent 3rd party testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingPackages.map(pkg => (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl border shadow-sm flex flex-col justify-between p-8 relative transition-all ${
                  pkg.popular
                    ? 'border-2 border-construction-500 shadow-xl ring-4 ring-construction-500/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-construction-500 text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{pkg.tagline}</span>
                    <h3 className="text-2xl font-black font-heading text-charcoal-900 mt-1">{pkg.name}</h3>
                  </div>

                  <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-3xl font-black font-heading text-charcoal-900">{pkg.rateSqFt}</div>
                    <span className="text-xs text-slate-500 font-medium">{pkg.ratePeriod}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-800 block">
                      Scope Included:
                    </span>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-construction-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <div className="text-xs text-slate-500 flex justify-between">
                    <span>Build Timeline:</span>
                    <strong className="text-charcoal-900">{pkg.timeline}</strong>
                  </div>
                  <button
                    onClick={() => openQuoteModal({ serviceCategory: pkg.name })}
                    className={`w-full py-3 rounded font-heading font-black text-xs uppercase tracking-wider transition-all ${
                      pkg.popular
                        ? 'bg-construction-500 hover:bg-construction-600 text-white shadow-solid-orange'
                        : 'bg-navy-900 hover:bg-navy-800 text-white'
                    }`}
                  >
                    Select {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE SPECIFICATION COMPARISON MATRIX */}
      <section className="py-20 bg-surface-light border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-50 text-navy-800 text-xs font-bold uppercase tracking-wider border border-navy-200 mb-3">
              <Layers className="w-3.5 h-3.5 text-construction-500" />
              <span>Cross-Sector Technical Matrix</span>
            </div>

            {/* 3-tier brand decorative accent */}
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <span className="w-10 h-1 bg-construction-500 rounded-full" />
              <span className="w-2.5 h-1 bg-navy-950 rounded-full" />
              <span className="w-1.5 h-1 bg-navy-400 rounded-full" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
              Contracting Comparison Matrix
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-600 mt-2">
              Cross-sector engineering specifications, structural frame tolerances, and compliance standards.
            </p>
          </div>

          {/* Unique Comparison Table Card Container */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-navy-950 text-white divide-x divide-navy-800">
                    <th className="pt-7 pb-4 px-6 w-5/12 font-heading font-black text-xs uppercase tracking-wider align-middle">
                      Technical Feature &amp; Inspection
                    </th>
                    <th className="pt-7 pb-4 px-4 text-center font-heading font-bold text-xs uppercase tracking-wider w-7/36 align-middle">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-slate-300">Residential</span>
                        <span className="text-[10px] font-normal text-slate-400 normal-case">Custom &amp; Multi-Family</span>
                      </div>
                    </th>
                    <th className="pt-7 pb-4 px-4 text-center font-heading font-black text-xs uppercase tracking-wider w-8/36 bg-navy-900 border-x-2 border-construction-500 relative align-middle">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-construction-500 text-navy-950 text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-b shadow-sm whitespace-nowrap">
                        Most Requested
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-construction-400">Commercial</span>
                        <span className="text-[10px] font-normal text-slate-300 normal-case">Towers &amp; Corporate</span>
                      </div>
                    </th>
                    <th className="pt-7 pb-4 px-4 text-center font-heading font-bold text-xs uppercase tracking-wider w-7/36 align-middle">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-slate-300">Industrial</span>
                        <span className="text-[10px] font-normal text-slate-400 normal-case">PEB &amp; Logistics Hubs</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pricingComparisonFeatures.map((row, idx) => {
                    const isEvenRow = idx % 2 === 0;
                    return (
                      <tr 
                        key={idx} 
                        className={`transition-colors divide-x divide-slate-100 ${
                          isEvenRow ? 'bg-white' : 'bg-slate-50/50'
                        } hover:bg-construction-50/20`}
                      >
                        {/* Feature Name */}
                        <td className="py-4 px-6 font-semibold text-navy-950 flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-construction-500 shrink-0" />
                          <span>{row.feature}</span>
                        </td>

                        {/* Residential */}
                        <td className="py-4 px-4 text-center">
                          {typeof row.residential === 'boolean' ? (
                            row.residential ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs">
                                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                              </span>
                            ) : (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-300">
                                <X className="w-3.5 h-3.5 stroke-[2]" />
                              </span>
                            )
                          ) : (
                            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-bold font-mono bg-slate-100 text-slate-700 border border-slate-200">
                              {row.residential}
                            </span>
                          )}
                        </td>

                        {/* Commercial (Highlighted Column) */}
                        <td className="py-4 px-4 text-center bg-construction-50/40 border-x-2 border-construction-500/20">
                          {typeof row.commercial === 'boolean' ? (
                            row.commercial ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-construction-500 text-white shadow-xs">
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              </span>
                            ) : (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-300">
                                <X className="w-3.5 h-3.5 stroke-[2]" />
                              </span>
                            )
                          ) : (
                            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-black font-mono bg-construction-100/80 text-construction-800 border border-construction-300 shadow-xs">
                              {row.commercial}
                            </span>
                          )}
                        </td>

                        {/* Industrial */}
                        <td className="py-4 px-4 text-center">
                          {typeof row.industrial === 'boolean' ? (
                            row.industrial ? (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-navy-900 text-construction-400 border border-navy-800 shadow-xs">
                                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                              </span>
                            ) : (
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-300">
                                <X className="w-3.5 h-3.5 stroke-[2]" />
                              </span>
                            )
                          ) : (
                            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-bold font-mono bg-navy-950 text-white border border-navy-900 shadow-xs">
                              {row.industrial}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Bottom Engineering Footnote Strip */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-construction-600 shrink-0" />
                <span>All parameters backed by AISC, IBC, and OSHA accredited compliance certifications.</span>
              </div>
              <button
                onClick={() => openQuoteModal({ notes: 'Inquiry regarding comparison matrix specifications' })}
                className="text-construction-600 hover:text-construction-700 font-bold font-heading inline-flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>Request Custom Technical Specification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING FAQS ACCORDION */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-black font-heading text-charcoal-900">
              Pricing & Estimation FAQs
            </h3>
            <p className="text-xs text-slate-500 mt-1">Frequently asked financial and contract questions</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 divide-y divide-slate-200">
            {pricingFaqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left font-bold text-sm text-charcoal-900 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-construction-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

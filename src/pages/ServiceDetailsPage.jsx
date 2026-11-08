import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  Layers, 
  Compass, 
  FileText, 
  Calendar, 
  Phone, 
  ChevronDown,
  ChevronUp,
  Download,
  Flame,
  Award
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { pricingPackages } from '../data/pricingData';

export default function ServiceDetailsPage({ setCurrentPage, openQuoteModal, selectedServiceId = 'commercial-construction', setSelectedServiceId }) {
  const service = servicesData.find(s => s.id === selectedServiceId) || servicesData[1]; // default to commercial
  const [activeTab, setActiveTab] = useState('specs');
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'What is the typical lead time before physical site mobilization begins?',
      a: 'Following contract execution and municipal plan submission, site mobilization—including perimeter safety fencing, temporary utilities, and survey grid setup—typically begins within 14 to 21 business days.'
    },
    {
      q: 'How are material price fluctuations managed during long-term builds?',
      a: 'We offer both Guaranteed Maximum Price (GMP) contracts with pre-purchased bulk steel and cement hedging, as well as transparent escalation indices linked to published producer price indices.'
    },
    {
      q: 'What QA/QC documentation is provided to the client during construction?',
      a: 'Clients receive weekly digitized photo logs, 3rd party independent concrete cylinder compression test reports, rebar mill test certificates, ultrasonic weld inspections, and real-time drone progression footage.'
    },
    {
      q: 'What structural warranty and defect liability coverage is included?',
      a: 'Every turnkey structural contract includes a 12-month Defect Liability Period (DLP) covering all MEP and architectural finishes, backed by a comprehensive 10 to 20-year structural integrity warranty.'
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* 1. SERVICE HEADER HERO */}
      <section className="bg-navy-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage || service.image}
            onError={(e) => {
              if (!e.currentTarget.dataset.retried) {
                e.currentTarget.dataset.retried = '1';
                e.currentTarget.src = 'assets/civil-engineering-infrastructure.jpg';
              }
            }}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-navy-950/45" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-construction-500/20 text-construction-400 text-xs font-bold uppercase tracking-wider mb-4 border border-construction-500/30">
              <Building2 className="w-4 h-4" />
              <span>Turnkey Construction Service Division</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight mb-4 text-white">
              {service.title}
            </h1>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {service.shortDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => openQuoteModal({ serviceCategory: service.category, serviceTitle: service.title })}
                className="px-6 py-3 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-black text-sm uppercase tracking-wider shadow-solid-orange transition-all"
              >
                Request Service Proposal
              </button>
              <button
                onClick={() => setCurrentPage('services')}
                className="px-5 py-3 rounded bg-navy-900 hover:bg-navy-800 text-slate-200 border border-slate-700 font-bold text-sm transition-all"
              >
                &larr; Back to All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN BODY & TECHNICAL TABS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Columns: Service Deep Dive */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Comprehensive Description Card */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <h2 className="text-2xl font-black font-heading text-charcoal-900">
                  Engineering Scope & Overview
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  {service.fullDesc}
                </p>

                {/* Key Features Bullet Grid */}
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-charcoal-700 mb-4">
                    Key Deliverables & Standards
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 bg-slate-50 p-3 rounded border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-construction-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Specifications & Milestones Tabs */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="flex border-b border-slate-200 bg-slate-50">
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`flex-1 py-4 px-6 text-sm font-bold text-center border-b-2 transition-all ${
                      activeTab === 'specs'
                        ? 'border-construction-500 text-construction-600 bg-white'
                        : 'border-transparent text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Structural Specs
                  </button>
                  <button
                    onClick={() => setActiveTab('phases')}
                    className={`flex-1 py-4 px-6 text-sm font-bold text-center border-b-2 transition-all ${
                      activeTab === 'phases'
                        ? 'border-construction-500 text-construction-600 bg-white'
                        : 'border-transparent text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Execution Phases
                  </button>
                  <button
                    onClick={() => setActiveTab('pricing')}
                    className={`flex-1 py-4 px-6 text-sm font-bold text-center border-b-2 transition-all ${
                      activeTab === 'pricing'
                        ? 'border-construction-500 text-construction-600 bg-white'
                        : 'border-transparent text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    Rate & Pricing Table
                  </button>
                </div>

                <div className="p-8">
                  {/* Tab 1: Specs */}
                  {activeTab === 'specs' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold font-heading text-charcoal-900">
                        Material & Quality Standards
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                            Concrete Design Mix
                          </span>
                          <strong className="text-base text-charcoal-900 block font-heading">
                            M30 / M35 Self-Compacting
                          </strong>
                          <span className="text-xs text-slate-500 mt-1 block">
                            Automated batch plant, slump test certified & 28-day cube crushing verified.
                          </span>
                        </div>

                        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                            Reinforcement Steel
                          </span>
                          <strong className="text-base text-charcoal-900 block font-heading">
                            Fe-550D High-Ductility TMT
                          </strong>
                          <span className="text-xs text-slate-500 mt-1 block">
                            Anti-corrosive epoxy coating with certified seismic bend elongation tests.
                          </span>
                        </div>

                        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                            Subterranean Waterproofing
                          </span>
                          <strong className="text-base text-charcoal-900 block font-heading">
                            HDPE Membrane System
                          </strong>
                          <span className="text-xs text-slate-500 mt-1 block">
                            Pre-applied fully bonded membrane protecting substructure from water tables.
                          </span>
                        </div>

                        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                            Quality Verification
                          </span>
                          <strong className="text-base text-charcoal-900 block font-heading">
                            ISO 9001:2015 QA/QC
                          </strong>
                          <span className="text-xs text-slate-500 mt-1 block">
                            Independent 3rd party testing lab reports delivered with every pour.
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 2: Execution Phases */}
                  {activeTab === 'phases' && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-bold font-heading text-charcoal-900">
                        Milestone Progression
                      </h3>
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-construction-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                            1
                          </div>
                          <div>
                            <strong className="text-sm font-bold text-charcoal-900 block">Pre-Construction & 5D BIM Simulation</strong>
                            <p className="text-xs text-slate-600 mt-0.5">Soil boring, municipal permits, MEP clash detection, and procurement scheduling.</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-construction-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                            2
                          </div>
                          <div>
                            <strong className="text-sm font-bold text-charcoal-900 block">Substructure & Foundation Pour</strong>
                            <p className="text-xs text-slate-600 mt-0.5">Excavation, bored piles / raft slab, damp-proof membranes, and basement retaining walls.</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-construction-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                            3
                          </div>
                          <div>
                            <strong className="text-sm font-bold text-charcoal-900 block">Superstructure Framing</strong>
                            <p className="text-xs text-slate-600 mt-0.5">RCC column casting, post-tensioned floor slabs, structural steel erection, and core shear walls.</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-construction-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                            4
                          </div>
                          <div>
                            <strong className="text-sm font-bold text-charcoal-900 block">Facade, Enclosure & MEP Rough-Ins</strong>
                            <p className="text-xs text-slate-600 mt-0.5">Curtain wall glazing, HVAC ducting, electrical risers, and fire suppression plumbing.</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-construction-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                            5
                          </div>
                          <div>
                            <strong className="text-sm font-bold text-charcoal-900 block">Commissioning & Occupancy Handover</strong>
                            <p className="text-xs text-slate-600 mt-0.5">BMS integration testing, municipal inspections, occupancy certificate, and 10-year warranty delivery.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tab 3: Pricing Table */}
                  {activeTab === 'pricing' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold font-heading text-charcoal-900">
                          Square Footage Rate Table
                        </h3>
                        <span className="text-xs text-slate-500">*Rates vary by soil & finishes</span>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm border-collapse">
                          <thead>
                            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase text-slate-600">
                              <th className="py-3 px-4">Scope Level</th>
                              <th className="py-3 px-4">Rate / Sq.Ft</th>
                              <th className="py-3 px-4">Foundation Type</th>
                              <th className="py-3 px-4">Warranty</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            <tr>
                              <td className="py-3.5 px-4 font-bold text-charcoal-900">Standard Civil Core & Shell</td>
                              <td className="py-3.5 px-4 text-construction-600 font-bold">$140 – $180</td>
                              <td className="py-3.5 px-4 text-slate-600">Isolated / Strip Footings</td>
                              <td className="py-3.5 px-4 text-slate-600">10 Years</td>
                            </tr>
                            <tr className="bg-construction-50/40">
                              <td className="py-3.5 px-4 font-bold text-charcoal-900">Commercial Class-A Turnkey</td>
                              <td className="py-3.5 px-4 text-construction-600 font-bold">$240 – $380</td>
                              <td className="py-3.5 px-4 text-slate-600">Raft / Bored Piles</td>
                              <td className="py-3.5 px-4 text-slate-600">15 Years</td>
                            </tr>
                            <tr>
                              <td className="py-3.5 px-4 font-bold text-charcoal-900">Industrial Heavy EPC & PEB</td>
                              <td className="py-3.5 px-4 text-construction-600 font-bold">$160 – $240</td>
                              <td className="py-3.5 px-4 text-slate-600">Machine Pit & Piling</td>
                              <td className="py-3.5 px-4 text-slate-600">20 Years</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <button
                        onClick={() => setCurrentPage('pricing')}
                        className="text-xs font-bold text-construction-600 hover:text-construction-700 flex items-center gap-1.5"
                      >
                        <span>Open Interactive Sq.Ft Cost Calculator &rarr;</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Service FAQs Accordion */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-black font-heading text-charcoal-900">
                  Frequently Asked Questions
                </h3>
                <div className="divide-y divide-slate-200">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="py-4">
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                        className="w-full flex items-center justify-between text-left font-bold text-sm text-charcoal-900 focus:outline-none"
                      >
                        <span>{faq.q}</span>
                        {openFaq === idx ? (
                          <ChevronUp className="w-4 h-4 text-construction-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                      {openFaq === idx && (
                        <p className="mt-2 text-sm text-slate-600 leading-relaxed animate-fadeIn">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 4 Columns: Quick Proposal Box & Contact */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Quote Card */}
              <div className="bg-navy-900 text-white p-6 sm:p-8 rounded-xl border border-navy-800 shadow-xl">
                <span className="text-[10px] font-black uppercase tracking-widest text-construction-400 bg-construction-500/10 px-3 py-1 rounded inline-block mb-3">
                  Direct Estimating Desk
                </span>
                <h3 className="text-xl font-black font-heading text-white mb-2">
                  Request a Formal Proposal
                </h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Have architectural drawings ready? Upload your specifications for a line-item estimate within 48-72 hours.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-construction-400" />
                    <span>Fixed Guaranteed Maximum Price (GMP)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-construction-400" />
                    <span>Class-A Master Contractor Licensed</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-construction-400" />
                    <span>Comprehensive 10-Year Warranty</span>
                  </div>
                </div>

                <button
                  onClick={() => openQuoteModal({ serviceCategory: service.category, serviceTitle: service.title })}
                  className="w-full py-3.5 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-black text-sm uppercase tracking-wider shadow-solid-orange transition-all mb-4"
                >
                  Request Project Estimate
                </button>

                <div className="pt-4 border-t border-navy-800 text-center">
                  <span className="text-xs text-slate-400 block mb-1">Direct Engineering Hotline</span>
                  <a href="tel:+18005552739" className="text-sm font-black font-heading text-construction-400 hover:text-construction-300">
                    +1 (800) 555-APEX
                  </a>
                </div>
              </div>

              {/* Related Services Links */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h4 className="text-sm font-bold font-heading text-charcoal-900 mb-3 uppercase tracking-wider">
                  Other Civil Capabilities
                </h4>
                <div className="space-y-2">
                  {servicesData.filter(s => s.id !== service.id).slice(0, 4).map(s => (
                    <button
                      key={s.id}
                      onClick={() => {
                        if (setSelectedServiceId) setSelectedServiceId(s.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full text-left text-xs font-semibold text-slate-700 hover:text-construction-600 p-2 rounded hover:bg-slate-50 transition-colors flex items-center justify-between"
                    >
                      <span className="truncate">{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-50 flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

            </aside>

          </div>
        </div>
      </section>
    </div>
  );
}

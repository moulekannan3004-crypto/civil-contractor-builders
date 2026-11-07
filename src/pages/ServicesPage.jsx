import React, { useState } from 'react';
import { 
  Building, 
  Building2, 
  Factory, 
  Hammer, 
  ShieldCheck, 
  Wrench, 
  Layers, 
  ClipboardCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Check,
  ChevronDown
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { servicesData } from '../data/servicesData';

export default function ServicesPage({ setCurrentPage, openQuoteModal, onSelectServiceDetails }) {
  const [activeTab, setActiveTab] = useState('all');

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Home': return <Building className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Factory': return <Factory className="w-6 h-6" />;
      case 'Hammer': return <Hammer className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6" />;
      default: return <Building className="w-6 h-6" />;
    }
  };

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-20 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2000&q=80"
            alt="Commercial high-rise civil construction and heavy engineering"
            className="w-full h-full object-cover opacity-30 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/90" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-construction-500/40 text-construction-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Turnkey Engineering & Contracting Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white mb-4">
            Our Construction Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            From foundational ground-engineering to skyward structural steel and turnkey architectural fit-outs, explore our comprehensive range of licensed civil contracting capabilities.
          </p>
        </div>
      </section>

      {/* Services List / Detailed Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
                  {/* Visual Column (Equal 50% Width) */}
                  <div className={`flex flex-col w-full ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group flex-1 w-full min-h-[440px] flex flex-col justify-between">
                      <img
                        src={service.image}
                        alt={service.title}
                        onError={(e) => { e.currentTarget.src = 'assets/about-civil-engineers.jpg'; }}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-navy-950/30 pointer-events-none" />
                      
                      {/* Floating Service Badge */}
                      <div className="relative z-10 m-5 self-start bg-navy-900/90 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider border border-navy-700/80 shadow flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-construction-500 animate-pulse"></span>
                        {service.category}
                      </div>

                      {/* Technical Specs Overlay Card at bottom */}
                      {service.technicalHighlights && (
                        <div className="relative z-10 m-5 bg-navy-950/95 backdrop-blur-md text-white p-4 rounded-xl border border-navy-800 shadow-xl space-y-1">
                          <p className="font-bold text-construction-400 uppercase tracking-wider text-[10px]">
                            Technical Specification Highlight:
                          </p>
                          <p className="text-slate-300 text-xs sm:text-sm font-medium leading-snug">
                            {Object.values(service.technicalHighlights)[0]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Column (Equal 50% Width) */}
                  <div className={`flex flex-col justify-between space-y-6 w-full ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-navy-900 text-construction-400 flex items-center justify-center shrink-0 shadow-sm border border-navy-800">
                          {getServiceIcon(service.icon)}
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-construction-600 block">
                            Service Capability 0{index + 1}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-black font-heading text-navy-950">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
                        {service.fullDesc}
                      </p>

                      {/* Features & Benefits Split Box */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        {/* Key Features */}
                        <div className="p-4 rounded-xl bg-surface-light border border-slate-200 flex flex-col justify-between">
                          <div>
                            <h4 className="text-xs font-heading font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                              <CheckCircle2 className="w-4 h-4 text-construction-500 shrink-0" />
                              <span>Key Features</span>
                            </h4>
                            <ul className="space-y-1.5">
                              {service.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                                <li key={fIdx} className="text-xs text-charcoal-700 flex items-start gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-construction-500 mt-1 shrink-0"></span>
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Client Benefits */}
                        <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60 flex flex-col justify-between">
                          <div>
                            <h4 className="text-xs font-heading font-bold text-navy-950 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                              <Sparkles className="w-4 h-4 text-construction-600 shrink-0" />
                              <span>Client Value &amp; Benefits</span>
                            </h4>
                            <ul className="space-y-1.5">
                              {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                                <li key={bIdx} className="text-xs text-charcoal-800 flex items-start gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-construction-600 mt-1 shrink-0"></span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Action Row - Perfectly Paired */}
                    <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center gap-3">
                      <button
                        onClick={() => {
                          if (onSelectServiceDetails) onSelectServiceDetails(service.id);
                          else setCurrentPage('service-details');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="h-11 px-6 rounded bg-navy-950 hover:bg-navy-900 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all flex-1 sm:flex-none"
                      >
                        <span>Full Specs &amp; Phases</span>
                        <ArrowRight className="w-4 h-4 text-construction-400" />
                      </button>

                      <button
                        onClick={() => openQuoteModal({ category: service.category, title: service.title })}
                        className="h-11 px-6 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-solid-orange hover:shadow-none transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none"
                      >
                        <span>Request Quote for {service.category}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Divider between services */}
                {index < servicesData.length - 1 && (
                  <div className="mt-20 border-b border-slate-200" />
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Quotation CTA Banner */}
      <section className="py-16 bg-navy-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl font-black font-heading text-white">
            Need a Customized Civil Engineering Solution?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Our estimating department is prepared to evaluate your architectural sets, CAD drawings, and municipal guidelines for tender submissions.
          </p>
          <div className="pt-2">
            <button
              onClick={openQuoteModal}
              className="px-8 py-3.5 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-sm shadow-solid-orange hover:shadow-none transition-all"
            >
              Request a Free Quote Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

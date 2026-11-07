import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Phone,
  Building,
  Hammer,
  Factory,
  Layers,
  MapPin,
  ExternalLink,
  Award,
  Check
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { companyInfo, companyStats, workProcessSteps } from '../data/companyData';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';

export default function HomePage({ setCurrentPage, openQuoteModal, setSelectedProject }) {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-navy-950 text-white overflow-hidden">
        {/* Background Image with Crisp Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=2000&q=85"
            alt="Modern civil construction site and engineering scaffolding"
            className="w-full h-full object-cover object-center"
          />
          {/* Balanced gradient overlay so cranes & sunset remain visible while text is legible */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/70" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-15 pointer-events-none" />
        </div>

        {/* Hero Content (Centered, Balanced & Symmetrical) */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center text-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-800/80 border border-construction-500/50 text-construction-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-construction-500 animate-ping"></span>
            Licensed Master Civil Contractor • Established 1998
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] mb-6 text-white max-w-4xl mx-auto">
            Building Your Vision with{' '}
            <span className="text-construction-500">
              Strength, Quality & Trust.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
            From heavy commercial towers and industrial logistics complexes to custom residential estates and civil infrastructure, ApexBuild delivers turnkey construction engineering built to endure for generations.
          </p>

          {/* Two Action CTAs (Equal Dimensions, Centered Baseline) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={() => {
                setCurrentPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="h-14 w-full sm:w-[240px] rounded-lg bg-construction-500 hover:bg-construction-600 active:bg-construction-700 text-white font-heading font-bold text-base tracking-wide border-2 border-construction-500 shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2.5"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={openQuoteModal}
              className="h-14 w-full sm:w-[240px] rounded-lg bg-white hover:bg-slate-100 active:bg-slate-200 text-navy-950 font-heading font-bold text-base tracking-wide border-2 border-white shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2.5"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-5 h-5 text-construction-500" />
            </button>
          </div>

          {/* Live Trust Badges under buttons (Properly & Equally Aligned) */}
          <div className="pt-6 border-t border-slate-700/60 w-full max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60 text-xs text-slate-300">
              <div className="flex items-center justify-center gap-2 py-1 px-3">
                <Check className="w-4 h-4 text-construction-400 shrink-0" />
                <span className="font-medium whitespace-nowrap">Fixed-Price Guarantee</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-1 px-3">
                <Check className="w-4 h-4 text-construction-400 shrink-0" />
                <span className="font-medium whitespace-nowrap">10-Year Structural Warranty</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-1 px-3">
                <Check className="w-4 h-4 text-construction-400 shrink-0" />
                <span className="font-medium whitespace-nowrap">Zero Safety Lost-Time Record</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Stats Strip (Equally Distributed Columns & Divider Lines) */}
        <div 
          className="absolute bottom-0 left-0 right-0 z-10 border-t border-navy-800 hidden md:block"
          style={{ backgroundColor: '#070F19' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <div className="grid grid-cols-4 divide-x divide-navy-800 text-center">
              {companyStats.slice(0, 4).map((stat, idx) => (
                <div key={idx} className="px-4 py-1">
                  <div className="text-2xl lg:text-3xl font-black font-heading text-construction-400">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: COMPANY INTRODUCTION
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-stretch">
            {/* Visual Column */}
            <div className="relative lg:h-full">
              <div className="relative min-h-[460px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 lg:h-full">
                <img
                  src="./assets/about-civil-engineers.jpg"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80";
                  }}
                  alt="Civil engineers inspecting structural construction blueprints on site"
                  className="w-full h-[460px] lg:h-full object-cover"
                />
                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 bg-navy-900/95 text-white p-5 rounded-xl shadow-2xl border border-navy-700 max-w-xs backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-construction-500 flex items-center justify-center font-black text-navy-950 text-xl font-heading shrink-0">
                      26+
                    </div>
                    <div>
                      <h4 className="text-sm font-bold font-heading text-white">
                        Years of Engineering
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Trusted by top developers, government bodies & corporations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative engineering corner accent */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-construction-500/10 rounded-2xl -z-10 border border-construction-500/20" />
            </div>

            {/* Text Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded border bg-construction-50 text-construction-600 border-construction-200">
                <span>About ApexBuild Civil Contractors</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 leading-tight">
                Pioneering Structural Excellence with Modern Engineering Precision.
              </h2>

              {/* Decorative Construction Accent Line */}
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-14 bg-construction-500 rounded-full"></div>
                <div className="h-1.5 w-3.5 bg-navy-800 rounded-full"></div>
                <div className="h-1.5 w-1.5 bg-navy-600 rounded-full"></div>
              </div>

              <p className="text-charcoal-700 leading-relaxed text-base">
                ApexBuild is a premier, full-service civil contracting firm specializing in large-scale commercial, industrial, high-end residential, and civic infrastructure developments. Since our founding in 1998, we have maintained an unwavering standard of structural integrity, stringent adherence to safety protocols, and transparent client communication.
              </p>

              <p className="text-charcoal-700 leading-relaxed text-base">
                Whether executing deep bored pile foundations, erecting pre-engineered steel warehouses, or supervising turnkey architectural fit-outs, our licensed civil engineers and project managers bring disciplined value engineering to every milestone.
              </p>

              {/* Core Strengths Checklist (Equally Aligned Border Lines) */}
              <div className="py-5 border-y border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-navy-950">
                    <CheckCircle2 className="w-5 h-5 text-construction-500 shrink-0" />
                    <span>Licensed Class-A General Contractor</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-navy-950">
                    <CheckCircle2 className="w-5 h-5 text-construction-500 shrink-0" />
                    <span>In-House Fleet of Heavy Machinery</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-navy-950">
                    <CheckCircle2 className="w-5 h-5 text-construction-500 shrink-0" />
                    <span>100% On-Site Safety Compliance</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-navy-950">
                    <CheckCircle2 className="w-5 h-5 text-construction-500 shrink-0" />
                    <span>Transparent Fixed-Fee Contracting</span>
                  </div>
                </div>
              </div>

              {/* CTA Learn More & Direct Phone (Equal Heights & Aligned Baseline) */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    setCurrentPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="h-12 px-6 rounded-lg bg-navy-950 hover:bg-navy-900 active:bg-navy-800 text-white font-heading font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-construction-400" />
                </button>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="h-12 px-5 rounded-lg border-2 border-slate-200 hover:border-construction-500 bg-white hover:bg-slate-50 text-sm font-bold text-navy-950 hover:text-construction-600 transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-construction-500" />
                  <span>{companyInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: OUR SERVICES OVERVIEW
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded border bg-construction-50 text-construction-600 border-construction-200 mb-3">
                <span>Core Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 tracking-tight">
                Comprehensive Civil & Building Services
              </h2>
              <p className="text-charcoal-600 text-base max-w-2xl mt-2">
                From ground-up civil engineering to turnkey commercial fit-outs, we manage every phase of construction with unmatched technical expertise.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-construction-600 hover:text-construction-700 font-bold font-heading text-sm uppercase tracking-wider group"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col group"
              >
                {/* Service Image with Category Badge */}
                <div className="relative h-56 overflow-hidden bg-navy-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded bg-navy-900/90 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider border border-navy-700">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-navy-950 mb-2 group-hover:text-construction-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-charcoal-600 line-clamp-3 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      {service.keyFeatures.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-700">
                          <Check className="w-3.5 h-3.5 text-construction-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setCurrentPage('services');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-navy-900 hover:text-construction-600 flex items-center gap-1 transition-colors"
                    >
                      <span>Service Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={openQuoteModal}
                      className="px-3 py-1.5 rounded bg-construction-50 hover:bg-construction-500 text-construction-600 hover:text-white font-bold text-xs transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION F: FEATURED COMPLETED PROJECTS
          ========================================================================= */}
      <section className="py-20 bg-navy-950 text-white relative">
        <div className="absolute inset-0 blueprint-grid-dark opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded border bg-navy-900 text-construction-400 border-navy-700 mb-3">
                <span>Proven Track Record</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">
                Featured Completed Projects
              </h2>
              <p className="text-slate-300 text-base max-w-2xl mt-2">
                Explore a showcase of our landmark commercial, industrial, luxury residential, and civil infrastructure achievements.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-sm tracking-wide shadow-solid-orange hover:shadow-none transition-all"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-xl overflow-hidden bg-navy-900 border border-navy-800 shadow-xl cursor-pointer hover:border-construction-500/70 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider bg-construction-500 text-navy-950 shadow-md">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-navy-900/90 text-white border border-navy-700 backdrop-blur-sm">
                      {project.contractValue}
                    </span>
                  </div>

                  {/* Bottom Information Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-construction-400 font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.builtUpArea}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-construction-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2">
                      {project.subtitle}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-xs font-bold text-construction-400 group-hover:underline">
                      <span>Inspect Project Case Study</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION G: OUR WORK PROCESS
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The ApexBuild Methodology"
            title="Our Four-Step Construction Process"
            subtitle="From initial site feasibility through architectural engineering and final handover, we ensure predictable quality and budget discipline."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {workProcessSteps.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-surface-light p-6 rounded-xl border border-slate-200 flex flex-col justify-between hover:border-construction-400 hover:shadow-md transition-all group"
              >
                <div>
                  {/* Step Number */}
                  <div className="mb-4">
                    <span className="text-3xl font-black font-heading text-construction-500 font-mono">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-navy-950 mb-2 group-hover:text-construction-600 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block mb-1">
                    Key Deliverables:
                  </span>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-charcoal-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-construction-500 shrink-0"></span>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION H: CALL-TO-ACTION
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
        {/* Decorative caution bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-construction-500" />
        <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded border bg-navy-800 text-construction-400 border-navy-700">
            <span>Direct Contractor Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
            Ready to Build Your Dream Project?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are preparing a commercial bidding package, developing industrial warehousing, or building a bespoke residential complex, our senior structural estimators are ready to review your blueprints.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={openQuoteModal}
              className="w-full sm:w-auto px-8 py-4 rounded bg-construction-500 hover:bg-construction-600 active:bg-construction-700 text-white font-heading font-black text-base tracking-wide shadow-solid-orange hover:shadow-none hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 rounded border-2 border-slate-400 hover:border-white text-white font-heading font-bold text-base tracking-wide hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <span>Contact Headquarters</span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}

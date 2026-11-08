import React from 'react';
import { 
  Building, 
  ShieldCheck, 
  HardHat, 
  Award, 
  ArrowRight, 
  Users, 
  Clock, 
  Phone,
  Layers,
  FileCheck2,
  Sparkles,
  Trophy
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { 
  companyInfo, 
  companyStats, 
  companyMilestones, 
  leadershipTeam, 
  whyChooseUsFeatures 
} from '../data/companyData';

export default function AboutPage({ setCurrentPage, openQuoteModal }) {
  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-20 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1661684631842-6ab0a828468f?auto=format&fit=crop&w=2000&q=80" alt="Civil engineering leadership and project directors reviewing structural site blueprints" onError={(e) => { e.currentTarget.src = 'assets/about-civil-engineers.jpg'; }}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/65" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-construction-500/40 text-construction-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>Company Profile & Engineering Heritage</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white mb-4">
            About ApexBuild
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Founded on engineering rigor, structural honesty, and uncompromising quality, we are the civil contractor of choice for monumental structures that withstand the test of time.
          </p>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-navy-900 border-y border-navy-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {companyStats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`p-2 ${idx === 4 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <div className="text-2xl sm:text-3xl font-black font-heading text-construction-400">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: ABOUT THE COMPANY & EXPERIENCE
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Text Side */}
            <div className="flex flex-col justify-between h-full space-y-6 lg:space-y-0">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded border bg-construction-50 text-construction-600 border-construction-200">
                  <span>Our Engineering Heritage</span>
                </div>

                {/* 3-tier brand decorative accent */}
                <div className="flex items-center gap-1.5 mt-3 mb-4">
                  <span className="w-10 h-1 bg-construction-500 rounded-full" />
                  <span className="w-2.5 h-1 bg-navy-950 rounded-full" />
                  <span className="w-1.5 h-1 bg-navy-400 rounded-full" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-black font-heading text-navy-950 leading-tight mb-4">
                  26+ Years of Proven Civil Contracting & Structural Mastery
                </h2>

                <p className="text-charcoal-700 leading-relaxed text-base mb-4">
                  Established in 1998 in Metro City, ApexBuild has grown from a specialized foundation and earthmoving contractor into a recognized powerhouse in turnkey civil contracting. Over the past two and a half decades, we have shaped regional skylines, engineered high-capacity industrial logistics corridors, erected multi-tier commercial complexes, and built luxury residential developments.
                </p>

                <p className="text-charcoal-700 leading-relaxed text-base">
                  We believe that superior construction begins long before the first shovel breaks ground. By integrating in-house structural engineers, veteran quantity surveyors, master builders, and self-owned modern equipment fleets, we eliminate the costly inefficiencies, delays, and disputes typical of subcontracted work.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-light border border-slate-200 grid grid-cols-2 gap-4 mt-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 block">
                    Headquarters
                  </span>
                  <span className="text-sm font-bold text-navy-950 mt-1 block">
                    Metro City, NY
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 block">
                    Contractor License
                  </span>
                  <span className="text-sm font-bold text-navy-950 mt-1 block font-mono">
                    Class-A #CIV-98402
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 block">
                    Permanent Staff
                  </span>
                  <span className="text-sm font-bold text-navy-950 mt-1 block">
                    140+ Engineers & Artisans
                  </span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-500 block">
                    Bonding Capacity
                  </span>
                  <span className="text-sm font-bold text-construction-600 mt-1 block font-mono">
                    $100M+ Single Project
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Side: 2x2 Perfectly Aligned Symmetrical Grid */}
            <div className="h-full grid grid-cols-2 grid-rows-2 gap-4 sm:gap-5 min-h-[500px] lg:min-h-0">
              {/* Box 1: Top-Left Architectural Drafting Image */}
              <div className="h-full min-h-[220px] lg:min-h-0 rounded-xl overflow-hidden shadow-sm border border-slate-200 group">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" alt="Architectural structure and engineering blueprints"
                  onError={(e) => { e.currentTarget.src = 'assets/about-civil-engineers.jpg'; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Box 2: Top-Right 10-Year Warranty Card */}
              <div className="h-full min-h-[220px] lg:min-h-0 p-5 sm:p-6 rounded-xl bg-construction-500 text-navy-950 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-navy-950/10 flex items-center justify-center mb-3">
                    <ShieldCheck className="w-5 h-5 text-navy-950" />
                  </div>
                  <h4 className="font-heading font-black text-navy-950 text-base sm:text-lg leading-tight">
                    10-Year Warranty
                  </h4>
                  <p className="text-xs sm:text-sm text-navy-950/85 font-medium mt-2 leading-relaxed">
                    Backed by institutional warranty reserves for all reinforced concrete and structural steel.
                  </p>
                </div>
                <div className="pt-3 border-t border-navy-950/15 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-navy-950/75">
                  <span>Institutional Grade</span>
                  <span>100% Insured</span>
                </div>
              </div>

              {/* Box 3: Bottom-Left Award-Winning Safety Card */}
              <div className="h-full min-h-[220px] lg:min-h-0 p-5 sm:p-6 rounded-xl bg-navy-950 text-white flex flex-col justify-between shadow-sm border border-navy-800">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                    <Trophy className="w-5 h-5 text-construction-400" />
                  </div>
                  <h4 className="font-heading font-bold text-white text-base sm:text-lg leading-tight">
                    Award-Winning Safety
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    Recognized with the National Builders HSE Excellence citation three years running.
                  </p>
                </div>
                <div className="pt-3 border-t border-navy-800 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-construction-400">
                  <span>OSHA VPP Star</span>
                  <span>Zero Incidents</span>
                </div>
              </div>

              {/* Box 4: Bottom-Right Civil Construction Image */}
              <div className="h-full min-h-[220px] lg:min-h-0 rounded-xl overflow-hidden shadow-sm border border-slate-200 group">
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80" alt="Civil construction site and structural engineering works"
                  onError={(e) => { e.currentTarget.src = 'assets/about-civil-engineers.jpg'; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR CONSTRUCTION APPROACH
          ========================================================================= */}
      <section className="py-20 bg-navy-950 text-white relative">
        <div className="absolute inset-0 blueprint-grid-dark opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            dark={true}
            badge="Engineering Methodology"
            title="The Four Pillars of Our Construction Approach"
            subtitle="How we blend lean construction principles with digital BIM technology to guarantee predictability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-navy-900 p-6 rounded-xl border border-navy-800 space-y-3 hover:border-construction-500 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-navy-800 text-construction-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                BIM 3D Modeling
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Before fabrication, we simulate the complete MEP, structural steel, and concrete layout in 3D BIM to identify and resolve clashes in advance.
              </p>
            </div>

            <div className="bg-navy-900 p-6 rounded-xl border border-navy-800 space-y-3 hover:border-construction-500 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-navy-800 text-construction-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                Lean Jobsite Logistics
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Just-in-time material staging prevents site congestion, eliminates weather damage, and optimizes crane hoist productivity.
              </p>
            </div>

            <div className="bg-navy-900 p-6 rounded-xl border border-navy-800 space-y-3 hover:border-construction-500 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-navy-800 text-construction-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                Value Engineering
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our quantity surveyors optimize slab design, post-tensioning runs, and material specifications to save budget without compromising structural safety.
              </p>
            </div>

            <div className="bg-navy-900 p-6 rounded-xl border border-navy-800 space-y-3 hover:border-construction-500 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-navy-800 text-construction-400 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                Transparent Reporting
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Clients receive weekly cloud dashboard progress summaries, drone orthomosaic imagery, and updated Gantt schedule baselines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: COMPANY ACHIEVEMENTS & MILESTONES (TIMELINE)
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Company Milestones"
            title="A History of Milestone Construction Handcrafted in Time"
            subtitle="Over a quarter century of growth from localized foundation earthworks to multi-million dollar structural landmarks."
          />

          <div className="relative border-l-2 border-construction-500/40 ml-4 md:ml-32 space-y-12">
            {companyMilestones.map((milestone, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                {/* Timeline Pin Node */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-navy-900 border-4 border-white flex items-center justify-center shadow group-hover:bg-construction-500 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                </div>

                {/* Content Box */}
                <div className="bg-surface-light p-6 rounded-xl border border-slate-200 hover:border-construction-400 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-base font-black font-heading text-construction-600 font-mono">
                      {milestone.year}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-charcoal-500">
                      Phase {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-navy-950 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: SENIOR ENGINEERING & LEADERSHIP TEAM
          ========================================================================= */}
      <section className="py-20 bg-surface-light border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership & Engineering"
            title="The Minds Behind the Concrete & Steel"
            subtitle="Licensed professional engineers and veteran construction managers steering every project with technical rigor."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 overflow-hidden bg-navy-900">
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => { e.currentTarget.src = 'assets/about-civil-engineers.jpg'; }}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-construction-600 block mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-navy-950 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                  {member.credentials}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: CTA TO CONTACT
          ========================================================================= */}
      <section className="py-16 bg-navy-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
            Partner with a Civil Contractor Who Delivers on Every Promise
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            Discuss your upcoming architectural drawings, commercial tender, or industrial development directly with our senior partners.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openQuoteModal}
              className="w-full sm:w-auto px-7 py-3.5 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-sm tracking-wide shadow-solid-orange hover:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded border border-slate-400 hover:border-white text-white font-heading font-bold text-sm transition-all"
            >
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

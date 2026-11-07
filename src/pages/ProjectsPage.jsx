import React from 'react';
import { 
  Building, 
  MapPin, 
  ArrowRight, 
  Calendar, 
  ExternalLink, 
  Check, 
  Layers,
  ChevronRight
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { projectsData } from '../data/projectsData';

export default function ProjectsPage({ setSelectedProject, openQuoteModal }) {

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-20 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=2000&q=80"
            alt="Structural construction framing and completed landmark building"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/75" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-15 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-construction-500/40 text-construction-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>Master Builders Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white mb-4">
            Completed Construction Projects
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our diverse portfolio of landmark commercial office towers, heavy industrial warehouses, custom residential estates, and complex civil infrastructure.
          </p>
        </div>
      </section>

      {/* Main Filter & Gallery Section */}
      <section className="py-16 bg-white min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col group cursor-pointer hover:border-construction-300"
                >
                  {/* Thumbnail Container */}
                  <div className="relative h-64 overflow-hidden bg-navy-900">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      onError={(e) => { e.currentTarget.src = 'assets/about-civil-engineers.jpg'; }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                    {/* Category Label */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded bg-navy-900/90 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider border border-navy-700">
                        {project.category}
                      </span>
                    </div>

                    {/* Value Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded bg-construction-500 text-navy-950 text-[11px] font-bold font-mono shadow-sm">
                        {project.contractValue}
                      </span>
                    </div>

                    {/* Location Pin */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-construction-400" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-navy-950 mb-2 group-hover:text-construction-600 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed mb-4">
                        {project.subtitle}
                      </p>

                      <div className="grid grid-cols-2 gap-2 text-[11px] text-charcoal-600 bg-surface-light p-2.5 rounded border border-slate-200 mb-4">
                        <div>
                          <span className="text-charcoal-400 block font-semibold">Area:</span>
                          <span className="font-bold text-navy-950">{project.builtUpArea}</span>
                        </div>
                        <div>
                          <span className="text-charcoal-400 block font-semibold">Duration:</span>
                          <span className="font-bold text-navy-950">{project.duration.split(' ')[0]} {project.duration.split(' ')[1]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-navy-900 group-hover:text-construction-600 flex items-center gap-1 transition-colors">
                        <span>Inspect Project</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="text-[11px] font-mono font-bold text-slate-400">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* Quotation CTA Banner */}
      <section className="py-16 bg-navy-950 text-white text-center border-t border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl font-black font-heading text-white">
            Have a Project Requiring Similar Technical Scope?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Contact our project management desk to arrange blueprint evaluations, preliminary bill of quantities, and site logistics planning.
          </p>
          <div className="pt-2">
            <button
              onClick={openQuoteModal}
              className="px-8 py-3.5 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-sm shadow-solid-orange hover:shadow-none transition-all"
            >
              Request a Free Construction Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

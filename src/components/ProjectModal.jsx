import React, { useState, useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Building, 
  DollarSign, 
  CheckCircle2, 
  Award, 
  ArrowRight,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenQuote }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.thumbnail];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy-900 text-white border-b border-navy-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider bg-construction-500 text-navy-950">
              {project.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-construction-400" />
              <span>{project.location}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-navy-950">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-charcoal-600 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Interactive Image Showcase */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-navy-900 border border-slate-200 shadow-md">
              <img
                src={images[activeImageIndex]}
                alt={`${project.title} slide ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute bottom-3 right-3 bg-navy-900/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded font-medium">
                Photo {activeImageIndex + 1} of {images.length}
              </div>
            </div>

            {/* Thumbnail selector */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-construction-500 ring-2 ring-construction-500/30'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-surface-light border border-slate-200 text-center">
            <div className="p-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block">
                Duration
              </span>
              <span className="text-sm font-bold text-navy-950 mt-0.5 block">
                {project.duration}
              </span>
            </div>
            <div className="p-2 border-l border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block">
                Built-Up Area
              </span>
              <span className="text-sm font-bold text-navy-950 mt-0.5 block">
                {project.builtUpArea}
              </span>
            </div>
            <div className="p-2 border-t sm:border-t-0 sm:border-l border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block">
                Project Value
              </span>
              <span className="text-sm font-bold text-construction-600 mt-0.5 block font-mono">
                {project.contractValue}
              </span>
            </div>
            <div className="p-2 border-t sm:border-t-0 border-l border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 block">
                Year Built
              </span>
              <span className="text-sm font-bold text-navy-950 mt-0.5 block">
                {project.year}
              </span>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <h4 className="text-sm font-heading font-bold text-navy-900 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-construction-500" />
              <span>Project Overview & Engineering Architecture</span>
            </h4>
            <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
            <div className="mt-3 p-3 bg-navy-50 rounded-lg border border-navy-100 flex items-start gap-2.5 text-xs text-navy-900">
              <Shield className="w-4 h-4 text-navy-800 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Structural Typology: </span>
                <span>{project.structuralType}</span>
              </div>
            </div>
          </div>

          {/* Scope of Work */}
          <div>
            <h4 className="text-sm font-heading font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-construction-500" />
              <span>Contract Scope of Work Delivered</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.scopeOfWork.map((scope, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-charcoal-700 bg-white p-2.5 rounded border border-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-construction-500 mt-2 shrink-0"></span>
                  <span>{scope}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Highlights */}
          <div>
            <h4 className="text-sm font-heading font-bold text-navy-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-construction-500" />
              <span>Key Project Highlights & Achievements</span>
            </h4>
            <div className="space-y-2">
              {project.projectHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-charcoal-800 bg-amber-50/60 p-3 rounded-lg border border-amber-200/70">
                  <Award className="w-4 h-4 text-construction-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          {project.testimonial && (
            <div className="p-5 rounded-xl bg-navy-900 text-white relative overflow-hidden">
              <div className="absolute right-3 bottom-0 text-7xl font-serif text-white/5 pointer-events-none select-none">
                “
              </div>
              <p className="text-sm sm:text-base italic text-slate-200 leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div className="mt-3 pt-3 border-t border-navy-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-construction-400">
                    {project.testimonial.author}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {project.testimonial.role}
                  </p>
                </div>
                <div className="text-xs font-semibold text-slate-400">
                  Client Organization
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-charcoal-600 text-center sm:text-left">
            Have a project with similar structural scope? Our team can evaluate your blueprints.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded border border-slate-300 hover:bg-slate-200 text-charcoal-700 font-semibold text-sm transition-colors flex-1 sm:flex-none"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                if (onOpenQuote) onOpenQuote(project);
              }}
              className="px-5 py-2.5 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-sm tracking-wide shadow-solid-orange hover:shadow-none transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none"
            >
              <span>Inquire About Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

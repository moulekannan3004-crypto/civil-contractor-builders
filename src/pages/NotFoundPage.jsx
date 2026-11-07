import React from 'react';
import { HardHat, ArrowLeft, Home, Building, Phone } from 'lucide-react';

export default function NotFoundPage({ setCurrentPage }) {
  return (
    <div className="relative min-h-[85vh] w-full bg-navy-950 flex items-center justify-center py-20 px-4 text-center overflow-hidden">
      {/* Background Image with Dark Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=2000&q=80"
          alt="Active civil construction safety zone and caution boundary"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/65" />
        <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-lg bg-white rounded-2xl border border-slate-200 shadow-2xl p-8 sm:p-12">
        <div className="w-20 h-20 rounded-2xl bg-construction-500/10 border-2 border-construction-500/30 flex items-center justify-center mx-auto mb-6 text-construction-600">
          <HardHat className="w-10 h-10 stroke-[2]" />
        </div>

        <span className="text-xs font-black tracking-widest uppercase text-construction-600 bg-construction-50 px-3 py-1 rounded-full inline-block mb-3">
          Error 404 &bull; Page Under Construction
        </span>

        <h1 className="text-3xl sm:text-4xl font-black font-heading text-charcoal-900 mb-3">
          Blueprint Not Found
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          The structural path or document you are seeking has been relocated, demolished, or is currently being framed by our engineering team.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setCurrentPage('home')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </button>

          <button
            onClick={() => setCurrentPage('services')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Building className="w-4 h-4" />
            <span>View Services</span>
          </button>
        </div>
      </div>
    </div>
  );
}

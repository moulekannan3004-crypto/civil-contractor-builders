import React from 'react';
import { HardHat, ArrowLeft, Home, Building, Phone } from 'lucide-react';

export default function NotFoundPage({ setCurrentPage }) {
  return (
    <div className="w-full bg-slate-50 min-h-[80vh] flex items-center justify-center py-20 px-4 text-center">
      <div className="max-w-lg bg-white rounded-2xl border border-slate-200 shadow-xl p-8 sm:p-12">
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

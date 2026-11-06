import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3 rounded border ${
          dark 
            ? 'bg-navy-800/80 text-construction-400 border-navy-700' 
            : 'bg-construction-50 text-construction-600 border-construction-200 dark:bg-navy-900 dark:text-construction-400 dark:border-navy-700'
        }`}>
          <span className="w-2 h-2 rounded-full bg-construction-500 animate-pulse"></span>
          {badge}
        </div>
      )}
      
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-4 ${
        dark ? 'text-white' : 'text-navy-900 dark:text-white'
      }`}>
        {title}
      </h2>

      {/* Decorative Construction Accent Line */}
      <div className={`flex items-center gap-2 mb-4 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-1 w-12 bg-construction-500 rounded-full"></div>
        <div className="h-1 w-3 bg-navy-800 dark:bg-slate-700 rounded-full"></div>
        <div className="h-1 w-1 bg-navy-600 dark:bg-slate-600 rounded-full"></div>
      </div>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-charcoal-600 dark:text-slate-300'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

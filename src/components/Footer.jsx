import React from 'react';
import { 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  BookOpen,
  Lock
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { servicesData } from '../data/servicesData';

export default function Footer({ setCurrentPage, openQuoteModal }) {
  const handleNav = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t-4 border-construction-500">
      {/* Upper CTA Banner inside footer */}
      <div className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-construction-400 font-bold uppercase tracking-wider text-xs">
                Civil Engineering & Contracting Excellence
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mt-1">
                Have an Upcoming Construction or Infrastructure Project?
              </h3>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Speak directly with our senior quantity surveyors and structural estimators for a complimentary feasibility evaluation and BOQ quote.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded border border-slate-700 bg-navy-800/80 hover:bg-navy-850 hover:border-slate-500 text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-construction-400" />
                <span>Call {companyInfo.phone}</span>
              </a>
              <button
                onClick={openQuoteModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-sm tracking-wide shadow-solid-orange hover:shadow-none transition-all"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-10 items-start">
          {/* Col 1: Brand Identity */}
          <div className="space-y-4">
            <a 
              href="index.html"
              onClick={(e) => {
                if (e) e.preventDefault();
                handleNav('home');
                try {
                  if (window.location.protocol === 'file:') {
                    if (!window.location.pathname.endsWith('index.html')) {
                      window.location.href = 'index.html';
                    }
                  } else {
                    if (window.history && window.history.pushState) {
                      window.history.pushState({ page: 'home' }, '', '/');
                    }
                  }
                } catch (err) {
                  window.location.href = 'index.html';
                }
              }}
              className="inline-flex items-center gap-3 group focus:outline-none cursor-pointer"
              title="ApexBuild Civil Contractors - Return to Home Page"
              aria-label="ApexBuild Civil Contractors & Builders - Return to Home"
            >
              <div className="w-11 h-11 rounded-xl bg-construction-500 group-hover:bg-construction-400 flex items-center justify-center text-navy-950 font-black shadow-solid-orange flex-shrink-0 transition-colors">
                <Building className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black font-heading text-white tracking-wider group-hover:text-construction-400 transition-colors">
                  APEX<span className="text-construction-500">BUILD</span>
                </span>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-slate-300 transition-colors">
                  Civil Contractors & Builders
                </p>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed">
              Established in 1998, ApexBuild is a premier licensed Class-A civil contracting firm delivering heavy commercial, industrial, and infrastructure assets engineered with strength, precision, and trust.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={companyInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded bg-navy-900 hover:bg-construction-500 text-slate-300 hover:text-navy-950 flex items-center justify-center transition-all border border-navy-800"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a
                href={companyInfo.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded bg-navy-900 hover:bg-construction-500 text-slate-300 hover:text-navy-950 flex items-center justify-center transition-all border border-navy-800"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a
                href={companyInfo.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded bg-navy-900 hover:bg-construction-500 text-slate-300 hover:text-navy-950 flex items-center justify-center transition-all border border-navy-800"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a
                href={companyInfo.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded bg-navy-900 hover:bg-construction-500 text-slate-300 hover:text-navy-950 flex items-center justify-center transition-all border border-navy-800"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" /></svg>
              </a>
            </div>

          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-construction-500 pl-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-construction-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-construction-500" />
                  <span>Home 1 &bull; Civil Construction</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home-2')} className="hover:text-construction-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-construction-500" />
                  <span>Home 2 &bull; Industrial EPC</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-construction-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-construction-500" />
                  <span>About Us &amp; Team</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-construction-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-construction-500" />
                  <span>Services &amp; Capabilities</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-construction-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-construction-500" />
                  <span>Projects Portfolio</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-construction-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-construction-500" />
                  <span>Cost Estimator &amp; Pricing</span>
                </button>
              </li>
              <li>
                <button onClick={openQuoteModal} className="hover:text-construction-400 transition-colors flex items-center gap-1.5 text-construction-400 font-bold">
                  <ArrowRight className="w-3.5 h-3.5 text-construction-500" />
                  <span>Request a Free Quote</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Civil Capabilities */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-construction-500 pl-2.5">
              Civil Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              {servicesData.slice(0, 7).map(svc => (
                <li key={svc.id}>
                  <button 
                    onClick={() => handleNav('service-details')} 
                    className="hover:text-construction-400 transition-colors flex items-center gap-1.5 truncate max-w-full"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-construction-500 flex-shrink-0" />
                    <span className="truncate">{svc.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Headquarters */}
          <div>
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-construction-500 pl-2.5">
              Headquarters
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-construction-400 shrink-0 mt-0.5" />
                <span>{companyInfo.address.street}, {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-construction-400 shrink-0" />
                <a href={`tel:${companyInfo.phoneRaw}`} className="hover:text-white font-bold text-white">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-construction-400 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white truncate">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-construction-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-medium">Mon - Fri: 7:30 AM - 6:00 PM</span>
                  <span className="text-[11px] text-slate-400">Sat: 8:00 AM - 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800 text-xs text-slate-500 text-center">
          <p>&copy; {new Date().getFullYear()} ApexBuild Civil Contractors &amp; Builders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

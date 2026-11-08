import React, { useState, useEffect } from 'react';
import { 
  Building, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown,
  Sun, 
  Moon, 
  Phone, 
  Clock,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Navbar({ 
  currentPage, 
  setCurrentPage, 
  openQuoteModal,
  isDark = false,
  toggleTheme,
  isRtl = false,
  toggleRtl
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId, e) => {
    if (e) e.preventDefault();
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setHomeDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomeActive = currentPage === 'home' || currentPage === 'home-2';
  const isServicesActive = currentPage === 'services' || currentPage === 'service-details';
  const isBlogActive = currentPage === 'blog' || currentPage === 'blog-details';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-navy-800 ${
          isScrolled ? 'shadow-2xl' : 'shadow-xl'
        }`}
        style={{ backgroundColor: '#070F19' }}
      >
        {/* Main Navbar - Guaranteed 100% Solid Opaque Navy at All Times (No Transparency Leak on Scroll) */}
        <nav 
          className="w-full text-white"
          style={{ backgroundColor: '#070F19' }}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="h-16 sm:h-20 flex items-center justify-between gap-1.5 sm:gap-2 lg:gap-3 xl:gap-6 min-w-0">
            
            {/* 1. Brand Logo (Left - Aligned & Flexible Sizing) */}
            <div className="flex items-center justify-start min-w-0 flex-1 sm:flex-initial">
              <button 
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 text-left group focus:outline-none min-w-0"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 xl:w-11 xl:h-11 rounded-lg sm:rounded-xl bg-construction-500 flex items-center justify-center text-navy-950 font-black shadow-solid-orange group-hover:bg-construction-400 transition-all shrink-0">
                  <Building className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 stroke-[2.5]" />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <div className="flex items-center gap-1 leading-none">
                    <span className="text-base sm:text-lg xl:text-2xl font-black font-heading text-white tracking-wider group-hover:text-construction-400 transition-colors whitespace-nowrap">
                      APEX<span className="text-construction-500">BUILD</span>
                    </span>
                  </div>
                  <p className="text-[8px] sm:text-[9px] xl:text-[10px] tracking-tight sm:tracking-wider xl:tracking-widest uppercase font-bold text-slate-300 mt-0.5 xl:mt-1 leading-none whitespace-nowrap truncate">
                    Civil Contractors & Builders
                  </p>
                </div>
              </button>
            </div>

            {/* 2. Desktop Navigation Links (Center - Equal Spacing & High-Contrast White Text) */}
            <div className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-2 2xl:gap-3 flex-1">
              
              {/* Home Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setHomeDropdownOpen(true)}
                onMouseLeave={() => setHomeDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setHomeDropdownOpen(prev => !prev)}
                  className={`h-9 xl:h-10 inline-flex items-center justify-center gap-1 px-2 xl:px-3 rounded-lg text-xs xl:text-sm font-semibold tracking-normal xl:tracking-wide whitespace-nowrap transition-all relative ${
                    isHomeActive 
                      ? 'text-construction-400 font-bold' 
                      : 'text-white hover:text-construction-400 hover:bg-navy-900/80'
                  }`}
                >
                  <span>{currentPage === 'home-2' ? 'Home 2' : 'Home'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${homeDropdownOpen ? 'rotate-180 text-construction-400' : 'opacity-80'}`} />
                  {isHomeActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-construction-500 rounded-full" />
                  )}
                </button>

                {homeDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 w-60 border border-navy-800 rounded-xl shadow-2xl p-1.5 animate-fadeIn z-50"
                    style={{ backgroundColor: '#070F19' }}
                  >
                    <a
                      href="index.html"
                      onClick={(e) => handleNavClick('home', e)}
                      className={`block px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                        currentPage === 'home'
                          ? 'bg-navy-800 text-construction-400 font-bold'
                          : 'text-white hover:bg-navy-900'
                      }`}
                    >
                      Home 1 &bull; Civil Construction
                    </a>
                    <a
                      href="home-2.html"
                      onClick={(e) => handleNavClick('home-2', e)}
                      className={`block px-3 py-2 rounded-lg text-xs font-bold transition-colors mt-1 ${
                        currentPage === 'home-2'
                          ? 'bg-navy-800 text-construction-400 font-bold'
                          : 'text-white hover:bg-navy-900'
                      }`}
                    >
                      Home 2 &bull; Industrial EPC &amp; Steel
                    </a>
                  </div>
                )}
              </div>

              {/* About Us */}
              <a
                href="about.html"
                onClick={(e) => handleNavClick('about', e)}
                className={`h-9 xl:h-10 inline-flex items-center justify-center px-2 xl:px-3 rounded-lg text-xs xl:text-sm font-semibold tracking-normal xl:tracking-wide whitespace-nowrap transition-all relative ${
                  currentPage === 'about'
                    ? 'text-construction-400 font-bold' 
                    : 'text-white hover:text-construction-400 hover:bg-navy-900/80'
                }`}
              >
                <span>About Us</span>
                {currentPage === 'about' && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-construction-500 rounded-full" />
                )}
              </a>

              {/* Services */}
              <a
                href="services.html"
                onClick={(e) => handleNavClick('services', e)}
                className={`h-9 xl:h-10 inline-flex items-center justify-center px-2 xl:px-3 rounded-lg text-xs xl:text-sm font-semibold tracking-normal xl:tracking-wide whitespace-nowrap transition-all relative ${
                  isServicesActive 
                    ? 'text-construction-400 font-bold' 
                    : 'text-white hover:text-construction-400 hover:bg-navy-900/80'
                }`}
              >
                <span>Services</span>
                {isServicesActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-construction-500 rounded-full" />
                )}
              </a>

              {/* Projects */}
              <a
                href="projects.html"
                onClick={(e) => handleNavClick('projects', e)}
                className={`h-9 xl:h-10 inline-flex items-center justify-center px-2 xl:px-3 rounded-lg text-xs xl:text-sm font-semibold tracking-normal xl:tracking-wide whitespace-nowrap transition-all relative ${
                  currentPage === 'projects'
                    ? 'text-construction-400 font-bold' 
                    : 'text-white hover:text-construction-400 hover:bg-navy-900/80'
                }`}
              >
                <span>Projects</span>
                {currentPage === 'projects' && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-construction-500 rounded-full" />
                )}
              </a>

              {/* Pricing */}
              <a
                href="pricing.html"
                onClick={(e) => handleNavClick('pricing', e)}
                className={`h-9 xl:h-10 inline-flex items-center justify-center px-2 xl:px-3 rounded-lg text-xs xl:text-sm font-semibold tracking-normal xl:tracking-wide whitespace-nowrap transition-all relative ${
                  currentPage === 'pricing'
                    ? 'text-construction-400 font-bold' 
                    : 'text-white hover:text-construction-400 hover:bg-navy-900/80'
                }`}
              >
                <span>Pricing</span>
                {currentPage === 'pricing' && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-construction-500 rounded-full" />
                )}
              </a>

              {/* Blog */}
              <a
                href="blog.html"
                onClick={(e) => handleNavClick('blog', e)}
                className={`h-9 xl:h-10 inline-flex items-center justify-center px-2 xl:px-3 rounded-lg text-xs xl:text-sm font-semibold tracking-normal xl:tracking-wide whitespace-nowrap transition-all relative ${
                  isBlogActive 
                    ? 'text-construction-400 font-bold' 
                    : 'text-white hover:text-construction-400 hover:bg-navy-900/80'
                }`}
              >
                <span>Blog</span>
                {isBlogActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-construction-500 rounded-full" />
                )}
              </a>

              {/* Contact */}
              <a
                href="contact.html"
                onClick={(e) => handleNavClick('contact', e)}
                className={`h-9 xl:h-10 inline-flex items-center justify-center px-2 xl:px-3 rounded-lg text-xs xl:text-sm font-semibold tracking-normal xl:tracking-wide whitespace-nowrap transition-all relative ${
                  currentPage === 'contact'
                    ? 'text-construction-400 font-bold' 
                    : 'text-white hover:text-construction-400 hover:bg-navy-900/80'
                }`}
              >
                <span>Contact</span>
                {currentPage === 'contact' && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-construction-500 rounded-full" />
                )}
              </a>
            </div>

            {/* 3. Right Action Controls (Uniform Height h-9/h-10, Perfect Aspect Ratio & High-Contrast Styling) */}
            <div className="hidden lg:flex items-center justify-end gap-1.5 xl:gap-2.5 flex-shrink-0">
              
              {/* LTR / RTL Unique Segmented Switch */}
              <button
                type="button"
                onClick={toggleRtl}
                title={`Layout: ${isRtl ? 'Right-to-Left (RTL)' : 'Left-to-Right (LTR)'} - Click to switch`}
                className="h-9 xl:h-10 p-0.5 xl:p-1 rounded-full bg-navy-950 border border-slate-700/80 hover:border-slate-500 inline-flex items-center gap-0.5 xl:gap-1 transition-all shadow-inner flex-shrink-0"
              >
                <span 
                  className={`h-6 xl:h-7 px-2 xl:px-2.5 rounded-full text-[10px] xl:text-[11px] font-black tracking-wider inline-flex items-center justify-center transition-all duration-300 ${
                    !isRtl 
                      ? 'bg-construction-500 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  LTR
                </span>
                <span 
                  className={`h-6 xl:h-7 px-2 xl:px-2.5 rounded-full text-[10px] xl:text-[11px] font-black tracking-wider inline-flex items-center justify-center transition-all duration-300 ${
                    isRtl 
                      ? 'bg-construction-500 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  RTL
                </span>
              </button>

              {/* Dark / Light Mode Toggle (Guaranteed 1:1 Circular Button) */}
              <button
                type="button"
                onClick={toggleTheme}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="w-9 h-9 xl:w-10 xl:h-10 flex-shrink-0 aspect-square rounded-full bg-navy-900 hover:bg-navy-800 text-white border border-slate-700 inline-flex items-center justify-center transition-all shadow-sm"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-200 shrink-0" />
                )}
              </button>

              {/* Primary CTA Button (Matches Screenshot: Orange with Arrow, Identical h-9/h-10 height) */}
              <button
                onClick={openQuoteModal}
                className="h-9 px-3.5 xl:h-10 xl:px-5 rounded-lg bg-construction-500 hover:bg-construction-600 active:bg-construction-700 text-white font-heading font-bold text-[11px] xl:text-xs uppercase tracking-wider shadow-solid-orange hover:shadow-none hover:translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-1.5 xl:gap-2 flex-shrink-0"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              </button>
            </div>

            {/* Mobile Controls (Menu Toggle) */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle visual theme"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-navy-900 text-white border border-slate-700 flex items-center justify-center shrink-0 hover:bg-navy-800 transition-colors"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-200" />}
              </button>
              <button
                onClick={openQuoteModal}
                className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-construction-500 hover:bg-construction-600 active:bg-construction-700 text-white font-bold text-[11px] sm:text-xs shadow-sm shrink-0 transition-colors"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-1.5 sm:p-2 rounded-lg bg-navy-900 text-white border border-slate-700 hover:bg-navy-800 focus:outline-none shrink-0 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden border-t border-navy-800 px-4 pt-4 pb-6 space-y-2 animate-fadeIn max-h-[85vh] overflow-y-auto"
            style={{ backgroundColor: '#070F19' }}
          >
            
            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              <a
                href="index.html"
                onClick={(e) => handleNavClick('home', e)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
                  currentPage === 'home' ? 'bg-navy-800 text-construction-400 font-bold' : 'text-white hover:bg-navy-900'
                }`}
              >
                Home 1 &bull; Civil Construction
              </a>
              <a
                href="home-2.html"
                onClick={(e) => handleNavClick('home-2', e)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
                  currentPage === 'home-2' ? 'bg-navy-800 text-construction-400 font-bold' : 'text-white hover:bg-navy-900'
                }`}
              >
                Home 2 &bull; Industrial EPC &amp; Steel
              </a>
              <a
                href="about.html"
                onClick={(e) => handleNavClick('about', e)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
                  currentPage === 'about' ? 'bg-navy-800 text-construction-400 font-bold' : 'text-white hover:bg-navy-900'
                }`}
              >
                About Us
              </a>
              <a
                href="services.html"
                onClick={(e) => handleNavClick('services', e)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
                  isServicesActive ? 'bg-navy-800 text-construction-400 font-bold' : 'text-white hover:bg-navy-900'
                }`}
              >
                Services
              </a>
              <a
                href="projects.html"
                onClick={(e) => handleNavClick('projects', e)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
                  currentPage === 'projects' ? 'bg-navy-800 text-construction-400 font-bold' : 'text-white hover:bg-navy-900'
                }`}
              >
                Projects
              </a>
              <a
                href="pricing.html"
                onClick={(e) => handleNavClick('pricing', e)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
                  currentPage === 'pricing' ? 'bg-navy-800 text-construction-400 font-bold' : 'text-white hover:bg-navy-900'
                }`}
              >
                Pricing & Estimator
              </a>
              <a
                href="blog.html"
                onClick={(e) => handleNavClick('blog', e)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
                  isBlogActive ? 'bg-navy-800 text-construction-400 font-bold' : 'text-white hover:bg-navy-900'
                }`}
              >
                Blog & News
              </a>
              <a
                href="contact.html"
                onClick={(e) => handleNavClick('contact', e)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold ${
                  currentPage === 'contact' ? 'bg-navy-800 text-construction-400 font-bold' : 'text-white hover:bg-navy-900'
                }`}
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-navy-800 space-y-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleRtl}
                  className="flex-1 py-2 rounded bg-navy-900 border border-slate-700 text-xs font-bold text-white"
                >
                  Layout: {isRtl ? 'RTL (Right to Left)' : 'LTR (Left to Right)'}
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-sm shadow-md"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>

    {/* Spacer to preserve natural document flow under fixed navbar */}
    <div className="h-16 sm:h-20 w-full shrink-0" aria-hidden="true" />
  </>
  );
}

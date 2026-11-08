import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Home2Page from './pages/Home2Page';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import ProjectsPage from './pages/ProjectsPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import BlogDetailsPage from './pages/BlogDetailsPage';
import ContactPage from './pages/ContactPage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectModal from './components/ProjectModal';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const getInitialPage = () => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (path.includes('home-2') || hash === '#home-2') return 'home-2';
    if (path.includes('about') || hash === '#about') return 'about';
    if (path.includes('service-details') || hash === '#service-details') return 'service-details';
    if (path.includes('services') || hash === '#services') return 'services';
    if (path.includes('projects') || hash === '#projects') return 'projects';
    if (path.includes('pricing') || hash === '#pricing') return 'pricing';
    if (path.includes('blog-details') || hash === '#blog-details') return 'blog-details';
    if (path.includes('blog') || hash === '#blog') return 'blog';
    if (path.includes('contact') || hash === '#contact') return 'contact';
    if (path.includes('auth') || hash === '#auth' || path.includes('login')) return 'auth';
    if (path.includes('404') || hash === '#404') return '404';

    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState('commercial-construction');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState('deep-foundation-engineering');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  // Dark / Light Mode State
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('apex_theme');
    return saved === 'dark';
  });

  // RTL State
  const [isRtl, setIsRtl] = useState(() => {
    const saved = localStorage.getItem('apex_dir');
    return saved === 'rtl';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('apex_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('apex_theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    if (isRtl) {
      document.documentElement.setAttribute('dir', 'rtl');
      localStorage.setItem('apex_dir', 'rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      localStorage.setItem('apex_dir', 'ltr');
    }
  }, [isRtl]);

  const toggleTheme = () => setIsDark(prev => !prev);
  const toggleRtl = () => setIsRtl(prev => !prev);

  // Sync browser URL and popstate navigation
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (window.history && window.history.pushState) {
      const pageFile = newPage === 'home' ? 'index.html' : `${newPage}.html`;
      window.history.pushState({ page: newPage }, '', pageFile);
    }
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Dynamic Page Title & Meta tags for SEO
  useEffect(() => {
    const titles = {
      'home': 'ApexBuild | Civil Contractor & Builders | Strength, Quality & Trust',
      'home-2': 'Industrial Infrastructure & Pre-Engineered Steel (PEB) | ApexBuild EPC',
      'about': 'About Us | ApexBuild Civil Contractors & Master Builders',
      'services': 'Construction Services | Turnkey Civil & Building Contracting | ApexBuild',
      'service-details': 'Service Specifications & Execution Phases | ApexBuild Civil Contracting',
      'projects': 'Projects Portfolio | Landmark Civil & Commercial Builds | ApexBuild',
      'pricing': 'Construction Cost Estimator & Pricing Packages | ApexBuild',
      'blog': 'Engineering Journal & Technical Whitepapers | ApexBuild Knowledge Base',
      'blog-details': 'Deep Foundation Engineering Case Study | ApexBuild Technical Journal',
      'contact': 'Contact & Free Construction Quote | ApexBuild Civil Contractors',
      'auth': 'Client Portal & Subcontractor Login | ApexBuild Contracting Cloud',
      '404': 'Page Not Found (404) | ApexBuild Civil Contractors'
    };
    document.title = titles[currentPage] || 'ApexBuild Civil Contractors & Builders';
  }, [currentPage]);

  const handleOpenQuoteModal = (initialData = null) => {
    setQuoteInitialData(initialData);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setQuoteInitialData(null);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-navy-950 text-charcoal-800 dark:text-slate-100 antialiased selection:bg-construction-500 selection:text-white ${isDark ? 'dark' : ''}`}>
      {/* Sticky Main Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        openQuoteModal={() => handleOpenQuoteModal()}
        isDark={isDark}
        toggleTheme={toggleTheme}
        isRtl={isRtl}
        toggleRtl={toggleRtl}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={handlePageChange}
            openQuoteModal={() => handleOpenQuoteModal()}
            setSelectedProject={setSelectedProject}
          />
        )}

        {currentPage === 'home-2' && (
          <Home2Page
            setCurrentPage={handlePageChange}
            openQuoteModal={() => handleOpenQuoteModal()}
            setSelectedProject={setSelectedProject}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            setCurrentPage={handlePageChange}
            openQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            setCurrentPage={handlePageChange}
            openQuoteModal={handleOpenQuoteModal}
            onSelectServiceDetails={(svcId) => {
              setSelectedServiceId(svcId);
              handlePageChange('service-details');
            }}
          />
        )}

        {currentPage === 'service-details' && (
          <ServiceDetailsPage
            setCurrentPage={handlePageChange}
            openQuoteModal={handleOpenQuoteModal}
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            setSelectedProject={setSelectedProject}
            openQuoteModal={() => handleOpenQuoteModal()}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            setCurrentPage={handlePageChange}
            openQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            setCurrentPage={handlePageChange}
            setSelectedArticleSlug={setSelectedArticleSlug}
          />
        )}

        {currentPage === 'blog-details' && (
          <BlogDetailsPage
            setCurrentPage={handlePageChange}
            articleSlug={selectedArticleSlug}
            setSelectedArticleSlug={setSelectedArticleSlug}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'auth' && (
          <AuthPage setCurrentPage={handlePageChange} />
        )}

        {(currentPage === '404' || ![
          'home', 'home-2', 'about', 'services', 'service-details', 
          'projects', 'pricing', 'blog', 'blog-details', 'contact', 'auth'
        ].includes(currentPage)) && (
          <NotFoundPage setCurrentPage={handlePageChange} />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentPage={handlePageChange}
        openQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenQuote={(proj) => handleOpenQuoteModal(proj)}
        />
      )}

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialData={quoteInitialData}
      />
    </div>
  );
}

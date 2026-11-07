import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Bookmark, 
  FileText, 
  BookOpen, 
  Download, 
  CheckCircle2
} from 'lucide-react';
import { blogArticles } from '../data/blogData';

export default function BlogPage({ setCurrentPage, setSelectedArticleSlug }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  const toggleBookmark = (id, e) => {
    e.stopPropagation();
    if (bookmarkedArticles.includes(id)) {
      setBookmarkedArticles(bookmarkedArticles.filter(item => item !== id));
    } else {
      setBookmarkedArticles([...bookmarkedArticles, id]);
    }
  };

  const filteredArticles = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return blogArticles;
    return blogArticles.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.author.name.toLowerCase().includes(query) ||
      article.tag.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleArticleClick = (slug) => {
    if (setSelectedArticleSlug) setSelectedArticleSlug(slug);
    setCurrentPage('blog-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* 1. BLOG HERO HEADER */}
      <section className="bg-navy-950 text-white py-20 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2000&q=80"
            alt="Civil engineering materials research, structural testing laboratory and technical journal"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/65" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-10 pointer-events-none" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-construction-500/20 text-construction-400 text-xs font-bold uppercase tracking-wider mb-4 border border-construction-500/30">
            <BookOpen className="w-4 h-4" />
            <span>ApexBuild Engineering Knowledge Base</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black font-heading tracking-tight mb-4 text-white">
            Insights in Civil Engineering & Construction
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Technical whitepapers, structural case studies, BIM workflows, and OSHA safety standards penned by our licensed master builders.
          </p>

          {/* Search Input Box */}
          <div className="max-w-xl mx-auto relative">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const el = document.getElementById('articles-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center bg-white rounded-full p-1.5 shadow-xl border border-slate-200"
            >
              <div className="pl-4 pr-2 text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic (e.g., Piling, BIM, Steel, Safety)..."
                className="w-full bg-transparent text-sm text-charcoal-900 placeholder:text-slate-400 focus:outline-none py-2"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 text-slate-400 hover:text-slate-600 mr-2"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 2. ARTICLES GRID */}
      <section id="articles-grid" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-slate-200 p-8 max-w-md mx-auto">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold font-heading text-charcoal-900 mb-1">No Matching Articles Found</h3>
              <p className="text-xs text-slate-500 mb-4">Try clearing your search query.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-4 py-2 rounded bg-construction-500 text-white font-bold text-xs"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(article => {
                const isBookmarked = bookmarkedArticles.includes(article.id);
                return (
                  <article
                    key={article.id}
                    onClick={() => handleArticleClick(article.slug)}
                    className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-construction-500/50 transition-all flex flex-col cursor-pointer group"
                  >
                    {/* Featured Image */}
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        onError={(e) => { e.currentTarget.src = 'assets/about-civil-engineers.jpg'; }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded">
                        {article.categoryLabel}
                      </span>
                      <button
                        onClick={(e) => toggleBookmark(article.id, e)}
                        title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Article'}
                        className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-colors ${
                          isBookmarked 
                            ? 'bg-construction-500 text-white' 
                            : 'bg-navy-950/60 text-white hover:bg-navy-950'
                        }`}
                      >
                        <Bookmark className="w-3.5 h-3.5 fill-current" />
                      </button>
                    </div>

                    {/* Article Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {article.publishedDate}
                          </span>
                          <span>&bull;</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {article.readTime}
                          </span>
                        </div>

                        <h2 className="text-lg font-black font-heading text-charcoal-900 group-hover:text-construction-600 transition-colors line-clamp-2 mb-3">
                          {article.title}
                        </h2>

                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Author Strip & Read Link */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2.5">
                          <img
                            src={article.author.avatar}
                            alt={article.author.name}
                            className="w-7 h-7 rounded-full object-cover border border-slate-200"
                          />
                          <div>
                            <span className="text-xs font-bold text-charcoal-800 block leading-tight">{article.author.name}</span>
                            <span className="text-[10px] text-slate-400 block">{article.author.role}</span>
                          </div>
                        </div>

                        <span className="text-xs font-bold text-construction-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* 4. FREE BLUEPRINT RESOURCE DOWNLOAD BANNER */}
          <div className="mt-16 bg-navy-900 text-white rounded-2xl p-8 sm:p-12 border border-navy-800 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-3">
                <span className="text-[11px] font-black uppercase tracking-widest text-construction-400 bg-construction-500/10 px-3 py-1 rounded inline-block">
                  Free Contractor Resource
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                  Download the 2026 Commercial Construction Cost & Estimating Handbook
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                  A 36-page comprehensive PDF guide covering square-foot cost benchmarks across 12 commercial and industrial categories, steel escalation metrics, and MEP budgeting formulas.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-construction-400" /> Instant PDF Download</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-construction-400" /> 2026 Material Indices</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-construction-400" /> 100% Free</span>
                </div>
              </div>

              <div className="lg:col-span-4">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Thank you! The Commercial Cost Handbook has been dispatched to your email.');
                  }}
                  className="bg-navy-950 p-6 rounded-xl border border-navy-800 space-y-3"
                >
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Your Business Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="engineer@company.com"
                    className="w-full bg-navy-900 border border-slate-700 rounded-md p-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-construction-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Free Handbook</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

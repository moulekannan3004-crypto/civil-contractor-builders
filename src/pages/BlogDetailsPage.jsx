import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Bookmark, 
  Search, 
  Tag, 
  CheckCircle2, 
  Download, 
  MessageSquare,
  ThumbsUp,
  User,
  ArrowRight
} from 'lucide-react';
import { blogArticles } from '../data/blogData';

export default function BlogDetailsPage({ setCurrentPage, articleSlug = 'deep-foundation-engineering', setSelectedArticleSlug }) {
  const article = blogArticles.find(a => a.slug === articleSlug) || blogArticles[0];
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      name: 'James Reynolds, PE',
      date: 'November 3, 2026',
      text: 'Superb breakdown on bentonite slurry hydrostatic stabilization. We used a similar bored piling methodology on the Hudson River marina development with zero borehole deviation.'
    },
    {
      name: 'Sarah Lin',
      date: 'November 4, 2026',
      text: 'The cross-hole sonic logging (CSL) verification is crucial for high-rise insurance. Great to see ApexBuild prioritizing non-destructive testing as standard practice.'
    }
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentName || !commentText) return;
    setComments([
      ...comments,
      {
        name: commentName,
        date: 'Just now',
        text: commentText
      }
    ]);
    setCommentName('');
    setCommentText('');
    alert('Thank you for contributing! Your comment is posted.');
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Back Link */}
        <div className="mb-6">
          <button
            onClick={() => setCurrentPage('blog')}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-construction-600 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Engineering Journal</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Body (8 Cols) */}
          <main className="lg:col-span-8 space-y-8">
            <article className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
              
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                <span className="px-3 py-1 rounded bg-construction-500/10 text-construction-600 font-bold uppercase tracking-wider">
                  {article.categoryLabel}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.publishedDate}
                </span>
                <span className="text-slate-400">&bull;</span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl font-black font-heading text-charcoal-900 leading-tight mb-6">
                {article.title}
              </h1>

              {/* Author Card */}
              <div className="flex items-center justify-between py-4 border-y border-slate-100 mb-8">
                <div className="flex items-center gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-construction-500"
                  />
                  <div>
                    <strong className="text-sm font-bold text-charcoal-900 block font-heading">{article.author.name}</strong>
                    <span className="text-xs text-slate-500">{article.author.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Article URL copied to clipboard!');
                      }
                    }}
                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                    title="Share Article"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Featured Visual */}
              <div className="rounded-xl overflow-hidden mb-8 border border-slate-200 shadow-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full max-h-[420px] object-cover"
                />
              </div>

              {/* Body Text */}
              <div className="space-y-6 text-slate-700 text-base leading-relaxed">
                <p className="text-lg font-medium text-slate-800 leading-relaxed border-l-4 border-construction-500 pl-4 bg-slate-50 py-3 rounded-r">
                  {article.excerpt}
                </p>

                {article.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}

                {/* Key Takeaways Box */}
                <div className="my-8 p-6 bg-navy-950 text-white rounded-xl border border-navy-800">
                  <h3 className="text-base font-bold font-heading text-construction-400 mb-3 uppercase tracking-wider">
                    Core Engineering Takeaways
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {article.takeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-construction-400 flex-shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-xl font-bold font-heading text-charcoal-900 pt-4">
                  Quality Assurance & Ultrasonic Pile Integrity Testing
                </h2>
                <p>
                  To eliminate subsurface voids, honeycomb defects, or soil inclusion in deep shafts, cross-hole sonic logging (CSL) tubes are embedded directly within the rebar cage prior to tremie concrete placement. Sonic wave propagation velocity through the cured shaft maps compressive density across 100% of the pile length, delivering unassailable proof of load capability to municipal building inspectors and structural underwriters.
                </p>
              </div>

              {/* Social Share & Tag Strip */}
              <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">#{article.tag}</span>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">#ApexBuild</span>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded">#CivilEngineering</span>
                </div>
              </div>
            </article>

            {/* Comments Thread Section */}
            <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <MessageSquare className="w-5 h-5 text-construction-500" />
                <h3 className="text-lg font-bold font-heading text-charcoal-900">
                  Professional Discussion ({comments.length})
                </h3>
              </div>

              <div className="space-y-4">
                {comments.map((c, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-xs font-bold text-charcoal-900">{c.name}</strong>
                      <span className="text-[10px] text-slate-400">{c.date}</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{c.text}</p>
                  </div>
                ))}
              </div>

              {/* Post Comment Form */}
              <form onSubmit={handleCommentSubmit} className="pt-4 border-t border-slate-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-800">
                  Leave a Technical Reflection or Question
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    placeholder="Your Name & Title (e.g. David Vance, PE)"
                    className="p-2.5 bg-slate-50 border border-slate-200 rounded text-xs text-charcoal-900 focus:outline-none focus:border-construction-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Professional Email (kept private)"
                    className="p-2.5 bg-slate-50 border border-slate-200 rounded text-xs text-charcoal-900 focus:outline-none focus:border-construction-500"
                  />
                </div>
                <textarea
                  rows="3"
                  required
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Share job-site insights or ask about specific geotechnical specifications..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs text-charcoal-900 focus:outline-none focus:border-construction-500"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  Post Reflection
                </button>
              </form>
            </section>
          </main>

          {/* Right Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Search Box Widget */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-800 mb-3">
                Search Articles
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search engineering articles..."
                  className="w-full p-2.5 pr-8 bg-slate-50 border border-slate-200 rounded text-xs text-charcoal-900 focus:outline-none focus:border-construction-500"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setCurrentPage('blog');
                  }}
                />
                <Search className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5" />
              </div>
            </div>

            {/* Author Bio Widget */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-construction-500"
              />
              <h4 className="text-sm font-bold font-heading text-charcoal-900">{article.author.name}</h4>
              <p className="text-xs text-construction-600 font-medium mb-2">{article.author.role}</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Licensed Civil & Structural Engineer with 22+ years overseeing deep foundation, seismic retrofitting, and high-rise commercial framing across Metro City.
              </p>
            </div>

            {/* Recent Articles Widget */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-800 border-b border-slate-100 pb-2">
                Recent Case Studies
              </h4>
              <div className="space-y-3">
                {blogArticles.filter(a => a.id !== article.id).slice(0, 3).map(rec => (
                  <button
                    key={rec.id}
                    onClick={() => {
                      if (setSelectedArticleSlug) setSelectedArticleSlug(rec.slug);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full text-left group flex items-start gap-3"
                  >
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-14 h-14 rounded object-cover flex-shrink-0"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-charcoal-900 group-hover:text-construction-600 line-clamp-2 transition-colors">
                        {rec.title}
                      </h5>
                      <span className="text-[10px] text-slate-400 mt-1 block">{rec.publishedDate}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Estimating CTA Box */}
            <div className="bg-navy-950 text-white p-6 rounded-xl border border-navy-800 shadow-md space-y-3">
              <span className="text-[10px] font-bold text-construction-400 uppercase tracking-widest block">
                Have a Commercial Project?
              </span>
              <h4 className="text-base font-black font-heading text-white">
                Request an Itemized Engineering Estimate
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Speak directly with our estimating desk or submit drawings for review.
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="w-full py-2.5 rounded bg-construction-500 hover:bg-construction-600 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                Connect Estimators
              </button>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}

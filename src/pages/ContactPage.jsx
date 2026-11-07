import React, { useState } from 'react';
import { 
  Building, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  MessageCircle, 
  ExternalLink,
  Copy,
  Check,
  FileText
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { companyInfo } from '../data/companyData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: '',
    projectLocation: '',
    estimatedBudget: '',
    projectDescription: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    const trimmedName = formData.fullName.trim();
    if (!trimmedName) {
      errs.fullName = 'Full Name is required';
    } else if (trimmedName.length < 3) {
      errs.fullName = 'Full name must be at least 3 characters';
    } else if (!/^[a-zA-Z\s'-]+$/.test(trimmedName)) {
      errs.fullName = 'Full name must contain letters only (no numbers or symbols)';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (/[a-zA-Z]/.test(formData.phone)) {
      errs.phone = 'Phone number must contain numbers only (no alphabets)';
    } else if (phoneDigits.length < 10) {
      errs.phone = 'Please provide a valid phone number (minimum 10 digits)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.projectType) {
      errs.projectType = 'Please select a project type from the list';
    }

    if (!formData.projectLocation.trim()) {
      errs.projectLocation = 'Project site location / city is required';
    }

    if (!formData.estimatedBudget) {
      errs.estimatedBudget = 'Please choose an estimated budget tier';
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please describe your project scope or architectural requirements';
    } else if (formData.projectDescription.trim().length < 15) {
      errs.projectDescription = 'Please provide additional detail (minimum 15 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === 'fullName') {
      // Disallow numbers and symbols: only letters, spaces, hyphens, and apostrophes
      sanitizedValue = value.replace(/[^a-zA-Z\s'-]/g, '');
    } else if (name === 'phone') {
      // Disallow alphabets: only digits, spaces, hyphens, plus, and parentheses
      sanitizedValue = value.replace(/[^\d+()\s-]/g, '');
    }

    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const referenceId = `APX-${Math.floor(100000 + Math.random() * 900000)}`;
        const timestamp = new Date().toISOString();
        const payload = {
          id: referenceId,
          timestamp,
          ...formData
        };

        // Secure persistence to browser localStorage
        const existing = JSON.parse(localStorage.getItem('apex_quotations') || '[]');
        existing.push(payload);
        localStorage.setItem('apex_quotations', JSON.stringify(existing));

        setIsSubmitting(false);
        setSubmissionSuccess({
          referenceId,
          timestamp: new Date().toLocaleString(),
          data: payload
        });
      } catch (err) {
        setIsSubmitting(false);
        setErrors({ submit: 'An unexpected transmission error occurred. Please call our office directly.' });
      }
    }, 800);
  };

  const copyRef = () => {
    if (!submissionSuccess?.referenceId) return;
    navigator.clipboard.writeText(submissionSuccess.referenceId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectType: '',
      projectLocation: '',
      estimatedBudget: '',
      projectDescription: ''
    });
    setErrors({});
    setSubmissionSuccess(null);
  };

  const whatsappUrl = `https://wa.me/${companyInfo.phoneRaw}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative py-20 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=2000&q=80"
            alt="Civil engineers and estimators discussing blueprints in project consultation office"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/75" />
          <div className="absolute inset-0 blueprint-grid-dark opacity-15 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-construction-500/40 text-construction-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>Direct Commercial & Engineering Enquiries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white mb-4">
            Contact & Request a Quote
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to initiate your civil contracting project? Connect with our senior estimating department, request a site feasibility visit, or receive a formal Bill of Quantities (BOQ).
          </p>
        </div>
      </section>

      {/* Main Content Grid: Info & Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* =========================================================================
                COLUMN A: CONTACT INFORMATION & ADDITIONAL OPTIONS (5 cols)
                ========================================================================= */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-surface-light p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-slate-200 shadow-lg flex flex-col justify-between h-full">
                <div>
                  {/* Header aligned symmetrically with Quote Form Header */}
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-construction-600 block">
                      Head Office & Dispatch
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black font-heading text-navy-950 mt-1">
                      Get in Touch Directly
                    </h2>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed">
                      Our project superintendents, structural engineers, and estimating staff are available for immediate consultation and site walkthroughs.
                    </p>
                  </div>

                  {/* Direct Info Cards */}
                  <div className="space-y-3">
                    {/* Office Address */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                      <div className="w-10 h-10 rounded-lg bg-navy-900 text-construction-400 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                          Corporate Headquarters
                        </h4>
                        <p className="text-sm font-bold text-navy-950 mt-0.5">
                          {companyInfo.address.street}
                        </p>
                        <p className="text-xs text-charcoal-600">
                          {companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}
                        </p>
                      </div>
                    </div>

                    {/* Click-to-Call Phone */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                      <div className="w-10 h-10 rounded-lg bg-navy-900 text-construction-400 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                          Telephone / Direct Line
                        </h4>
                        <a 
                          href={`tel:${companyInfo.phoneRaw}`} 
                          className="text-sm font-bold text-navy-950 hover:text-construction-600 transition-colors mt-0.5 block"
                        >
                          {companyInfo.phone}
                        </a>
                        <p className="text-xs text-charcoal-600">
                          Direct Site Office: {companyInfo.phoneDirect}
                        </p>
                      </div>
                    </div>

                    {/* Email Inquiry Link */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                      <div className="w-10 h-10 rounded-lg bg-navy-900 text-construction-400 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                          Email Communication
                        </h4>
                        <a 
                          href={`mailto:${companyInfo.email}`} 
                          className="text-sm font-bold text-navy-950 hover:text-construction-600 transition-colors mt-0.5 block"
                        >
                          {companyInfo.email}
                        </a>
                        <a 
                          href={`mailto:${companyInfo.quoteEmail}`} 
                          className="text-xs text-construction-600 hover:underline block mt-0.5"
                        >
                          Tenders & BOQ: {companyInfo.quoteEmail}
                        </a>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                      <div className="w-10 h-10 rounded-lg bg-navy-900 text-construction-400 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                          Operating Working Hours
                        </h4>
                        <div className="text-xs text-navy-950 mt-1 space-y-0.5">
                          <p><span className="font-semibold">Monday – Friday:</span> 7:30 AM – 6:00 PM</p>
                          <p><span className="font-semibold">Saturday:</span> 8:00 AM – 2:00 PM</p>
                          <p className="text-construction-600 font-semibold">Sunday: Emergency Structural Response 24/7</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Cards */}
                <div className="mt-6 space-y-3">
                  {/* Instant WhatsApp Action Button */}
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-emerald-950">
                          Instant WhatsApp Construction Enquiry
                        </h4>
                        <p className="text-[11px] text-emerald-700">
                          Direct connection to on-duty site superintendents.
                        </p>
                      </div>
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Start WhatsApp Conversation</span>
                    </a>
                  </div>

                  {/* Contractor Certification Badge */}
                  <div className="p-3.5 rounded-xl bg-navy-950 text-white flex items-center gap-3.5 border border-navy-900">
                    <ShieldCheck className="w-7 h-7 text-construction-400 shrink-0" />
                    <div className="text-xs">
                      <p className="font-bold text-white uppercase tracking-wider">
                        Licensed Master Contractor
                      </p>
                      <p className="text-[11px] text-slate-300 font-mono mt-0.5">
                        State License #CIV-98402-NY • Fully Bonded & Insured to $100M
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                COLUMN B: GET A FREE QUOTE FORM (7 cols)
                ========================================================================= */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-surface-light p-6 sm:p-8 lg:p-10 rounded-2xl border-2 border-slate-200 shadow-lg flex flex-col justify-between h-full">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-construction-600 block">
                    Detailed Scope Submission
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-navy-950 mt-1">
                    Request a Free Construction Quote
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                    Fill out the form below. Our estimating team will analyze your project requirements and provide a preliminary feasibility report and budget breakdown within 24 hours.
                  </p>
                </div>

                {submissionSuccess ? (
                  /* Success Feedback Card */
                  <div className="bg-white p-8 rounded-xl border border-emerald-200 text-center space-y-5 animate-fadeIn flex-1 flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div>
                      <h4 className="text-2xl font-black font-heading text-navy-950">
                        Quotation Request Submitted Successfully!
                      </h4>
                      <p className="text-sm text-charcoal-600 mt-1 max-w-md mx-auto">
                        Thank you, <strong className="text-navy-900">{submissionSuccess.data.fullName}</strong>. Your civil project specifications have been logged in our estimator dispatch queue.
                      </p>
                    </div>

                    {/* Reference ID Pill */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-light border border-slate-300 rounded-lg text-sm mx-auto">
                      <span className="text-charcoal-600 font-medium">Tracking Reference:</span>
                      <span className="font-mono font-bold text-navy-950 text-base">
                        {submissionSuccess.referenceId}
                      </span>
                      <button
                        onClick={copyRef}
                        className="p-1 text-slate-500 hover:text-navy-900 transition-colors"
                        title="Copy Reference ID"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Summary of Submitted Scope */}
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-left text-xs space-y-1 text-charcoal-700 max-w-md mx-auto w-full">
                      <p><strong className="text-navy-950">Category:</strong> {submissionSuccess.data.projectType}</p>
                      <p><strong className="text-navy-950">Site Location:</strong> {submissionSuccess.data.projectLocation}</p>
                      <p><strong className="text-navy-950">Budget Bracket:</strong> {submissionSuccess.data.estimatedBudget}</p>
                      <p><strong className="text-navy-950">Submission Timestamp:</strong> {submissionSuccess.timestamp}</p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                      <a
                        href={`tel:${companyInfo.phoneRaw}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded border border-slate-300 hover:bg-slate-100 text-navy-950 font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-construction-500" />
                        <span>Call Estimating Office</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Form View */
                  <form onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col justify-between">
                    <div className="space-y-4">
                      {errors.submit && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 shrink-0" />
                          <span>{errors.submit}</span>
                        </div>
                      )}

                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                          Full Name <span className="text-construction-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          pattern="[a-zA-Z\s'-]+"
                          title="Letters and spaces only (numbers not accepted)"
                          placeholder="e.g. David Sterling"
                          className={`w-full px-4 py-2.5 rounded border text-sm transition-colors bg-white focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                            errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                      </div>

                      {/* Phone & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                            Phone Number <span className="text-construction-600">*</span>
                          </label>
                          <input
                            type="tel"
                            inputMode="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="[\d+()\s-]+"
                            title="Numbers only (alphabets not accepted)"
                            placeholder="e.g. +1 (555) 392-8471"
                            className={`w-full px-4 py-2.5 rounded border text-sm transition-colors bg-white focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                              errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                            }`}
                          />
                          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                            Email Address <span className="text-construction-600">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. david@firm.com"
                            className={`w-full px-4 py-2.5 rounded border text-sm transition-colors bg-white focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                              errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                            }`}
                          />
                          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      {/* Project Type & Location Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                            Project Type <span className="text-construction-600">*</span>
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className={`w-full px-4 py-2.5 rounded border text-sm transition-colors bg-white focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                              errors.projectType ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                            }`}
                          >
                            <option value="">Select Project Type...</option>
                            <option value="Residential Construction">Residential Building Construction</option>
                            <option value="Commercial Construction">Commercial Building Construction</option>
                            <option value="Industrial Construction">Industrial Construction & Warehousing</option>
                            <option value="Renovation & Remodeling">Renovation & Structural Remodeling</option>
                            <option value="Structural Construction">Structural Concrete & Deep Foundations</option>
                            <option value="Civil Engineering Works">Civil Engineering & Road Infrastructure</option>
                            <option value="Interior & Exterior Works">Interior & Exterior Architectural Works</option>
                            <option value="Project Management">Project Management & Consultancy</option>
                          </select>
                          {errors.projectType && <p className="text-xs text-red-600 mt-1">{errors.projectType}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                            Project Location <span className="text-construction-600">*</span>
                          </label>
                          <input
                            type="text"
                            name="projectLocation"
                            value={formData.projectLocation}
                            onChange={handleChange}
                            placeholder="e.g. Metro City, North District"
                            className={`w-full px-4 py-2.5 rounded border text-sm transition-colors bg-white focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                              errors.projectLocation ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                            }`}
                          />
                          {errors.projectLocation && <p className="text-xs text-red-600 mt-1">{errors.projectLocation}</p>}
                        </div>
                      </div>

                      {/* Estimated Budget Dropdown */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                          Estimated Budget Range <span className="text-construction-600">*</span>
                        </label>
                        <select
                          name="estimatedBudget"
                          value={formData.estimatedBudget}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded border text-sm transition-colors bg-white focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                            errors.estimatedBudget ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                          }`}
                        >
                          <option value="">Select Estimated Budget...</option>
                          <option value="Under $250,000">Under $250,000 (Renovations / Minor Civil)</option>
                          <option value="$250,000 - $1,000,000">$250,000 – $1,000,000 (Residential Villas / Fit-Outs)</option>
                          <option value="$1,000,000 - $5,000,000">$1,000,000 – $5,000,000 (Commercial Hubs / Medium Industrial)</option>
                          <option value="$5,000,000 - $20,000,000">$5,000,000 – $20,000,000 (Multi-Story Towers / Mega Logistics)</option>
                          <option value="$20,000,000+">$20,000,000+ (Major Civil Infrastructure & Highways)</option>
                        </select>
                        {errors.estimatedBudget && <p className="text-xs text-red-600 mt-1">{errors.estimatedBudget}</p>}
                      </div>

                      {/* Project Description */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                          Project Description & Scope <span className="text-construction-600">*</span>
                        </label>
                        <textarea
                          name="projectDescription"
                          rows={4}
                          value={formData.projectDescription}
                          onChange={handleChange}
                          placeholder="Please include land size, number of floors, target commencement date, architectural blueprints availability, or structural specifications..."
                          className={`w-full px-4 py-2.5 rounded border text-sm transition-colors bg-white focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                            errors.projectDescription ? 'border-red-500 bg-red-50/20' : 'border-slate-300 hover:border-slate-400'
                          }`}
                        ></textarea>
                        {errors.projectDescription && (
                          <p className="text-xs text-red-600 mt-1">{errors.projectDescription}</p>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Section aligned symmetrically */}
                    <div className="mt-6 space-y-3">
                      {/* Confidentiality Note */}
                      <div className="flex items-center gap-2 text-xs text-charcoal-500">
                        <ShieldCheck className="w-4 h-4 text-construction-500" />
                        <span>All architectural plans and project estimates are protected under NDA.</span>
                      </div>

                      {/* Submit Button */}
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 px-6 rounded bg-construction-500 hover:bg-construction-600 active:bg-construction-700 text-white font-heading font-black text-base tracking-wide shadow-solid-orange hover:shadow-none hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              <span>Submitting Scope to Estimators...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Request a Free Quote</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: EMBEDDED GOOGLE MAP & SITE LOGISTICS
          ========================================================================= */}
      <section className="py-12 bg-surface-light border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl font-heading font-bold text-navy-950">
                Corporate Headquarters & Equipment Yard Location
              </h3>
              <p className="text-xs text-charcoal-600">
                742 Industrial Parkway, Engineering District, Metro City, NY 10001
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-construction-600 hover:underline"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map Frame */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-slate-300 shadow-md relative bg-slate-200">
            <iframe
              title="ApexBuild Civil Headquarters Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

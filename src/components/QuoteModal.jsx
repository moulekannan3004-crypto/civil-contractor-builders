import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Copy, 
  Check 
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function QuoteModal({ isOpen, onClose, initialData = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: initialData?.category || initialData?.serviceCategory || '',
    projectLocation: '',
    estimatedBudget: '',
    projectDescription: initialData ? `Inquiry regarding ${initialData.title || initialData.serviceTitle || initialData.serviceCategory || ''}` : ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [copied, setCopied] = useState(false);

  // Sync formData whenever initialData changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmissionSuccess(null);
      setErrors({});
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        projectType: initialData?.category || initialData?.serviceCategory || '',
        projectLocation: '',
        estimatedBudget: '',
        projectDescription: initialData 
          ? `Inquiry regarding ${initialData.title || initialData.serviceTitle || initialData.serviceCategory || ''}` 
          : ''
      });
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    const trimmedName = formData.fullName.trim();
    if (!trimmedName) {
      errs.fullName = 'Full Name is required';
    } else if (trimmedName.length < 3) {
      errs.fullName = 'Please enter at least 3 characters';
    } else if (!/^[a-zA-Z\s'-]+$/.test(trimmedName)) {
      errs.fullName = 'Full name must contain letters only (no numbers or symbols)';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (/[a-zA-Z]/.test(formData.phone)) {
      errs.phone = 'Phone number must contain numbers only (no alphabets)';
    } else if (phoneDigits.length < 10) {
      errs.phone = 'Please provide a valid contact phone number (min 10 digits)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.projectType) {
      errs.projectType = 'Please select a project type';
    }

    if (!formData.projectLocation.trim()) {
      errs.projectLocation = 'Project location / city is required';
    }

    if (!formData.estimatedBudget) {
      errs.estimatedBudget = 'Please choose an estimated budget tier';
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please describe your project scope or architectural requirements';
    } else if (formData.projectDescription.trim().length < 15) {
      errs.projectDescription = 'Please provide a few more details (minimum 15 characters)';
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

    // Simulate reliable secure transmission and store in localStorage
    setTimeout(() => {
      try {
        const referenceId = `APX-${Math.floor(100000 + Math.random() * 900000)}`;
        const timestamp = new Date().toISOString();
        const payload = {
          id: referenceId,
          timestamp,
          ...formData
        };

        // Persist to local storage for user/audit retrieval
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
    }, 900);
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-navy-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy-900 text-white px-6 py-5 flex items-center justify-between border-b border-navy-800">
          <div>
            <span className="text-construction-400 font-bold uppercase tracking-wider text-xs">
              Direct Engineering Consultation
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white mt-0.5">
              Request a Free Construction Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submissionSuccess ? (
            /* Success View */
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-heading font-black text-navy-950">
                  Quotation Request Received!
                </h4>
                <p className="text-sm text-charcoal-600 mt-1 max-w-md mx-auto">
                  Thank you, <strong className="text-navy-900">{submissionSuccess.data.fullName}</strong>. Your civil project specifications have been dispatched to our senior estimating team.
                </p>
              </div>

              {/* Reference ID Pill */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-light border border-slate-300 rounded-lg text-sm">
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

              {/* Next Steps Checklist */}
              <div className="p-4 bg-navy-50 rounded-lg border border-navy-100 text-left space-y-2 text-xs sm:text-sm text-navy-900">
                <p className="font-bold text-navy-950 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-construction-500" />
                  What happens next?
                </p>
                <p className="text-charcoal-700">
                  1. Our senior quantity surveyor will review your scope and location within 24 business hours.
                </p>
                <p className="text-charcoal-700">
                  2. We will contact you at <strong className="text-navy-900">{submissionSuccess.data.phone}</strong> or <strong className="text-navy-900">{submissionSuccess.data.email}</strong> to confirm blueprint details or schedule a preliminary site visit.
                </p>
                <p className="text-charcoal-700">
                  3. You will receive an initial preliminary Bill of Quantities (BOQ) and cost estimation breakdown.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm transition-colors"
                >
                  Done & Close
                </button>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded border border-slate-300 hover:bg-slate-100 text-navy-950 font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-construction-500" />
                  <span>Call Office Immediately</span>
                </a>
              </div>
            </div>
          ) : (
            /* Form View */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
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
                  placeholder="e.g. Robert Sterling"
                  className={`w-full px-4 py-2.5 rounded border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                    errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 hover:border-slate-400'
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
                    placeholder="e.g. +1 (555) 234-5678"
                    className={`w-full px-4 py-2.5 rounded border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                      errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-300 hover:border-slate-400'
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
                    placeholder="e.g. robert@company.com"
                    className={`w-full px-4 py-2.5 rounded border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                      errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300 hover:border-slate-400'
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
                      errors.projectType ? 'border-red-500 bg-red-50/30' : 'border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <option value="">Select Project Type...</option>
                    <option value="Residential">Residential Building Construction</option>
                    <option value="Commercial">Commercial Building Construction</option>
                    <option value="Industrial">Industrial Construction & Warehousing</option>
                    <option value="Renovation">Renovation & Structural Retrofitting</option>
                    <option value="Structural">Structural Concrete & Foundation Works</option>
                    <option value="Civil Works">Civil Infrastructure & Roadworks</option>
                    <option value="Interior Exterior">Interior & Exterior Architectural Works</option>
                    <option value="Consultancy">Project Management & Consultation</option>
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
                    className={`w-full px-4 py-2.5 rounded border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                      errors.projectLocation ? 'border-red-500 bg-red-50/30' : 'border-slate-300 hover:border-slate-400'
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
                    errors.estimatedBudget ? 'border-red-500 bg-red-50/30' : 'border-slate-300 hover:border-slate-400'
                  }`}
                >
                  <option value="">Select Estimated Budget...</option>
                  <option value="Under $250,000">Under $250,000 (Small Works / Renovation)</option>
                  <option value="$250,000 - $1,000,000">$250,000 – $1,000,000 (Residential / Fit-Outs)</option>
                  <option value="$1,000,000 - $5,000,000">$1,000,000 – $5,000,000 (Commercial / Industrial)</option>
                  <option value="$5,000,000 - $20,000,000">$5,000,000 – $20,000,000 (Multi-Story / Large Industrial)</option>
                  <option value="$20,000,000+">$20,000,000+ (Major Civil / Infrastructure)</option>
                </select>
                {errors.estimatedBudget && <p className="text-xs text-red-600 mt-1">{errors.estimatedBudget}</p>}
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1.5">
                  Project Description & Specifications <span className="text-construction-600">*</span>
                </label>
                <textarea
                  name="projectDescription"
                  rows={4}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Please describe site dimensions, number of floors, desired completion timeline, and any special architectural or structural requirements..."
                  className={`w-full px-4 py-2.5 rounded border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-construction-500 ${
                    errors.projectDescription ? 'border-red-500 bg-red-50/30' : 'border-slate-300 hover:border-slate-400'
                  }`}
                ></textarea>
                {errors.projectDescription && (
                  <p className="text-xs text-red-600 mt-1">{errors.projectDescription}</p>
                )}
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-charcoal-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-construction-500" />
                  100% Confidential
                </span>
                <span>•</span>
                <span>Fixed Price Guarantee</span>
                <span>•</span>
                <span>No Obligation Feasibility Review</span>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded bg-construction-500 hover:bg-construction-600 active:bg-construction-700 text-white font-heading font-bold text-base tracking-wide shadow-solid-orange hover:shadow-none hover:translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing Specifications...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request a Free Quote</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Helmet } from 'react-helmet-async';
import { db, storage } from '../../services/firebase';
import { Reveal } from '../../components/UI/Reveal';
import { Lock, Save, CheckCircle, Upload, Palette } from 'lucide-react';

interface OnboardingData {
  customerId: string;
  surname: string;
  businessName: string;
  businessType: string;
  serviceDescription: string;
  currentWebsite: string;
  hasCurrentWebsite: boolean;
  websiteUrl: string;
  websiteUsername: string;
  websitePassword: string;
  needsBookingSystem: boolean;
  hasExistingBookingSystem: boolean;
  bookingSystemType: string;
  needsContactForm: boolean;
  needsOnlinePayments: boolean;
  logoUrl: string;
  logoFileName: string;
  needsLogoRedraw: boolean;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  domainName: string;
  domainProvider: string;
  domainUsername: string;
  domainPassword: string;
  launchDate: string;
  hostingProvider: string;
  hostingUsername: string;
  hostingPassword: string;
  additionalInfo: string;
  completedSteps: number;
  lastSaved: string;
}

const ServiceOnboarding = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const [surname, setSurname] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [saveStatus, setSaveStatus] = useState('');

  const [formData, setFormData] = useState<Partial<OnboardingData>>({
    businessName: '',
    businessType: '',
    serviceDescription: '',
    currentWebsite: '',
    hasCurrentWebsite: false,
    websiteUrl: '',
    websiteUsername: '',
    websitePassword: '',
    needsBookingSystem: false,
    hasExistingBookingSystem: false,
    bookingSystemType: '',
    needsContactForm: true,
    needsOnlinePayments: false,
    logoUrl: '',
    logoFileName: '',
    needsLogoRedraw: false,
    primaryColor: '#000000',
    secondaryColor: '#ffffff',
    accentColor: '#00ff00',
    domainName: '',
    domainProvider: '',
    domainUsername: '',
    domainPassword: '',
    launchDate: '',
    hostingProvider: '',
    hostingUsername: '',
    hostingPassword: '',
    additionalInfo: '',
    completedSteps: 0,
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-save every 30 seconds if authenticated
  useEffect(() => {
    if (isAuthenticated && customerId) {
      const autoSaveInterval = setInterval(() => {
        handleSave();
      }, 30000); // 30 seconds

      return () => clearInterval(autoSaveInterval);
    }
  }, [isAuthenticated, formData, customerId]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Check if customer exists in Firestore
      const customerRef = doc(db, 'onboarding', customerId.toUpperCase());
      const customerSnap = await getDoc(customerRef);

      if (customerSnap.exists()) {
        const data = customerSnap.data();
        
        // Verify surname (case-insensitive)
        if (data.surname.toLowerCase() === surname.toLowerCase()) {
          setIsAuthenticated(true);
          
          // Load saved progress if it exists
          if (data.formData) {
            setFormData(data.formData);
          }
        } else {
          setError('Invalid Customer ID or Surname');
        }
      } else {
        setError('Customer not found. Please check your Customer ID.');
      }
    } catch (err) {
      console.error('Error authenticating:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!customerId) return;

    try {
      const customerRef = doc(db, 'onboarding', customerId.toUpperCase());
      
      await setDoc(customerRef, {
        surname,
        formData: {
          ...formData,
          lastSaved: new Date().toISOString(),
        },
        updatedAt: new Date().toISOString(),
      }, { merge: true });

      setSaveStatus('✓ Saved');
      setTimeout(() => setSaveStatus(''), 2000);
    } catch (err) {
      console.error('Error saving:', err);
      setSaveStatus('✗ Error saving');
    }
  };

  const handleInputChange = (field: keyof OnboardingData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a PNG, JPG, or PDF file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    if (!customerId) {
      alert('Please log in first');
      return;
    }

    setLogoFile(file);
    setUploadingLogo(true);

    try {
      // Create a unique filename with timestamp to avoid conflicts
      const timestamp = Date.now();
      const fileExtension = file.name.split('.').pop();
      const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const fileName = `${timestamp}_${sanitizedFileName}`;
      
      // Upload to Firebase Storage
      const storageRef = ref(storage, `logos/${customerId.toUpperCase()}/${fileName}`);
      
      // Upload the file
      await uploadBytes(storageRef, file);
      
      // Wait a moment for the file to be fully processed
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      // Update form data
      setFormData(prev => ({
        ...prev,
        logoUrl: downloadURL,
        logoFileName: file.name,
      }));

      setSaveStatus('✓ Logo uploaded successfully');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (err: any) {
      console.error('Error uploading logo:', err);
      const errorMessage = err?.message || 'Unknown error';
      const errorCode = err?.code || 'unknown';
      
      let userMessage = `Failed to upload logo: ${errorMessage}`;
      
      if (errorCode === 'storage/unauthorized') {
        userMessage += '\n\nStorage rules may be blocking the upload. Please check Firebase Storage rules.';
      } else if (errorCode === 'storage/object-not-found') {
        userMessage += '\n\nThe upload may have failed. Please check your Firebase Storage configuration and try again.';
      }
      
      alert(userMessage);
    } finally {
      setUploadingLogo(false);
    }
  };

  const calculateProgress = () => {
    const requiredFields: string[] = [
      'businessName',
      'businessType',
      'serviceDescription',
      'primaryColor',
      'secondaryColor',
      'accentColor',
      'domainName',
      'domainProvider',
      'domainUsername',
      'domainPassword',
      'launchDate',
    ];
    
    // Logo is always required (either uploaded OR logo redraw requested)
    const logoComplete = !!(formData.logoUrl || formData.needsLogoRedraw);
    
    // Add conditional required fields based on current website
    if (formData.hasCurrentWebsite) {
      requiredFields.push('websiteUrl', 'websiteUsername', 'websitePassword');
    }
    
    // Booking system fields are optional - only required if they need booking AND have existing system
    if (formData.needsBookingSystem && formData.hasExistingBookingSystem) {
      requiredFields.push('bookingSystemType');
    }
    
    // Count completed required fields
    const completed = requiredFields.filter(field => !!formData[field as keyof OnboardingData]).length;
    
    // Total required = required fields + logo (if not complete)
    const totalRequired = requiredFields.length + (logoComplete ? 0 : 1);
    const totalCompleted = completed + (logoComplete ? 1 : 0);
    
    return totalRequired > 0 ? Math.round((totalCompleted / totalRequired) * 100) : 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSave();
    setIsSubmitted(true);
  };

  const progress = calculateProgress();

  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-screen bg-concrete flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full">
          <Reveal>
            <div className="bg-ink text-neon p-8 border border-neon/20">
              <div className="flex items-center gap-3 mb-6 border-b border-neon/20 pb-4">
                <Lock size={24} />
                <h1 className="text-2xl font-black uppercase">Service Website Onboarding</h1>
              </div>

              <p className="text-sm text-concrete/80 mb-6 font-mono">
                Enter your Customer ID and Surname to access your onboarding form.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 font-bold">
                    Customer ID
                  </label>
                  <input
                    type="text"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    placeholder="e.g., CD-2024-001"
                    className="w-full px-4 py-3 bg-concrete text-ink border border-neon/20 focus:border-neon focus:outline-none font-mono"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider mb-2 font-bold">
                    Surname
                  </label>
                  <input
                    type="text"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Your surname"
                    className="w-full px-4 py-3 bg-concrete text-ink border border-neon/20 focus:border-neon focus:outline-none"
                    required
                  />
                </div>

                {error && (
                  <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-neon text-ink px-6 py-3 font-black uppercase hover:bg-neon/80 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Verifying...' : 'Access Form'}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
      </>
    );
  }

  // Success Screen
  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="min-h-screen bg-concrete pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="bg-white border border-ink/10 p-12 text-center">
              {/* Success Icon */}
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto bg-neon rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={64} className="text-ink" />
                </div>
                <h1 className="text-4xl font-black uppercase mb-4 text-ink">
                  Onboarding Complete!
                </h1>
                <p className="text-lg text-ink/70">
                  Thank you for completing your service website onboarding form.
                </p>
              </div>

              {/* Next Steps */}
              <div className="bg-ink/5 border border-ink/10 p-8 mb-8 text-left">
                <h2 className="text-xl font-black uppercase mb-6 text-ink border-b-2 border-neon pb-2">
                  What Happens Next?
                </h2>
                <div className="space-y-4 text-ink/80">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-neon text-ink rounded-full flex items-center justify-center font-black text-sm mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-bold mb-1">Review & Planning</p>
                      <p className="text-sm">We'll review your information and prepare a custom proposal for your service website.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-neon text-ink rounded-full flex items-center justify-center font-black text-sm mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-bold mb-1">Onboarding Call</p>
                      <p className="text-sm">We'll schedule a call to discuss your requirements, timeline, and answer any questions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-neon text-ink rounded-full flex items-center justify-center font-black text-sm mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-bold mb-1">Design & Development</p>
                      <p className="text-sm">Once approved, we'll begin building your custom service website with all the features you requested.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-neon text-ink rounded-full flex items-center justify-center font-black text-sm mt-0.5">
                      4
                    </div>
                    <div>
                      <p className="font-bold mb-1">Launch & Support</p>
                      <p className="text-sm">We'll launch your site and provide ongoing support to ensure everything runs smoothly.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-ink text-neon p-6 border border-neon/20">
                <p className="text-sm font-bold uppercase mb-2">Need to Make Changes?</p>
                <p className="text-sm text-concrete/80 mb-4">
                  You can return to this form anytime using your Customer ID: <span className="font-mono font-bold text-neon">{customerId}</span>
                </p>
                <p className="text-sm text-concrete/80">
                  Questions? Email us at <a href="mailto:hello@costellodigital.co.uk" className="text-neon hover:underline font-bold">hello@costellodigital.co.uk</a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-concrete pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-ink text-neon p-6 mb-8 border border-neon/20">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black uppercase mb-2">Service Website Onboarding</h1>
              <p className="text-sm font-mono text-concrete/80">Customer ID: {customerId}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black">{progress}%</div>
              <div className="text-xs uppercase text-concrete/60">Complete</div>
            </div>
          </div>
          <div className="mt-4 bg-concrete/10 h-2">
            <div 
              className="bg-neon h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Save Status */}
        {saveStatus && (
          <div className="bg-ink text-neon px-4 py-2 mb-4 text-sm font-mono flex items-center gap-2">
            {saveStatus}
          </div>
        )}

        {/* Onboarding Form */}
        <div className="bg-white border border-ink/10 p-8">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Business Information */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-6 border-b-2 border-neon pb-2">
                Business Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    placeholder="Your business name"
                    className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase mb-2">
                    Business Type *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleInputChange('businessType', e.target.value)}
                    className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none"
                  >
                    <option value="">Select type</option>
                    <option value="restaurant">Restaurant / Cafe</option>
                    <option value="tradesperson">Tradesperson / Contractor</option>
                    <option value="consultant">Consultant / Professional Services</option>
                    <option value="beauty">Beauty / Wellness</option>
                    <option value="fitness">Fitness / Gym</option>
                    <option value="medical">Medical / Healthcare</option>
                    <option value="legal">Legal Services</option>
                    <option value="education">Education / Training</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase mb-2">
                    Service Description *
                  </label>
                  <textarea
                    value={formData.serviceDescription}
                    onChange={(e) => handleInputChange('serviceDescription', e.target.value)}
                    placeholder="Tell us about your services, what you offer, and who your target customers are..."
                    rows={4}
                    className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none"
                  />
                  <p className="text-xs text-ink/60 mt-1">This helps us understand your business and design accordingly</p>
                </div>

                {/* Current Website */}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      checked={formData.hasCurrentWebsite || false}
                      onChange={(e) => handleInputChange('hasCurrentWebsite', e.target.checked)}
                      className="w-5 h-5 accent-neon"
                    />
                    <span className="text-sm font-bold uppercase">Do you currently have a website?</span>
                  </label>

                  {formData.hasCurrentWebsite && (
                    <div className="bg-neon/10 border-l-4 border-neon p-6 space-y-4">
                      <p className="text-sm font-bold uppercase mb-4 text-ink/80">
                        🔒 Current Website Access (Required for Migration/Updates)
                      </p>
                      
                      <div>
                        <label className="block text-sm font-bold uppercase mb-2">
                          Website URL *
                        </label>
                        <input
                          type="url"
                          value={formData.websiteUrl}
                          onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                          placeholder="https://yourwebsite.com"
                          className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold uppercase mb-2">
                          Admin Username / Email *
                        </label>
                        <input
                          type="text"
                          value={formData.websiteUsername}
                          onChange={(e) => handleInputChange('websiteUsername', e.target.value)}
                          placeholder="admin@yourwebsite.com"
                          className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold uppercase mb-2">
                          Admin Password *
                        </label>
                        <input
                          type="password"
                          value={formData.websitePassword}
                          onChange={(e) => handleInputChange('websitePassword', e.target.value)}
                          placeholder="••••••••"
                          className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm"
                        />
                        <p className="text-xs text-ink/60 mt-1">🔐 Stored securely - needed to access your current site</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Website Features */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-6 border-b-2 border-neon pb-2">
                Website Features
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      checked={formData.needsBookingSystem || false}
                      onChange={(e) => handleInputChange('needsBookingSystem', e.target.checked)}
                      className="w-5 h-5 accent-neon"
                    />
                    <span className="text-sm font-bold uppercase">Do you need a booking/appointment system?</span>
                  </label>

                  {formData.needsBookingSystem && (
                    <div className="ml-8 mb-4 space-y-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.hasExistingBookingSystem || false}
                          onChange={(e) => handleInputChange('hasExistingBookingSystem', e.target.checked)}
                          className="w-5 h-5 accent-neon"
                        />
                        <span className="text-sm font-bold uppercase">Do you already have a booking system?</span>
                      </label>

                      {formData.hasExistingBookingSystem && (
                        <div>
                          <label className="block text-sm font-bold uppercase mb-2">
                            Which booking system do you use?
                          </label>
                          <input
                            type="text"
                            value={formData.bookingSystemType}
                            onChange={(e) => handleInputChange('bookingSystemType', e.target.value)}
                            placeholder="e.g., Calendly, Acuity, Square Appointments, etc."
                            className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      checked={formData.needsContactForm || true}
                      onChange={(e) => handleInputChange('needsContactForm', e.target.checked)}
                      className="w-5 h-5 accent-neon"
                    />
                    <span className="text-sm font-bold uppercase">Contact form for inquiries</span>
                  </label>
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer mb-4">
                    <input
                      type="checkbox"
                      checked={formData.needsOnlinePayments || false}
                      onChange={(e) => handleInputChange('needsOnlinePayments', e.target.checked)}
                      className="w-5 h-5 accent-neon"
                    />
                    <span className="text-sm font-bold uppercase">Online payment processing (Stripe, PayPal, etc.)</span>
                  </label>
                </div>
              </div>
            </section>

            {/* Branding & Design */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-6 border-b-2 border-neon pb-2 flex items-center gap-3">
                <Palette size={28} />
                Branding & Design
              </h2>
              
              <div className="space-y-6">
                {/* Logo Upload */}
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">
                    Business Logo *
                  </label>
                  <p className="text-sm text-ink/70 mb-4">
                    Upload a high-quality logo in <strong>PNG, JPG, or PDF</strong> format (max 10MB)
                  </p>

                  <div className="border-2 border-dashed border-ink/20 hover:border-neon transition-colors p-8 text-center">
                    <input
                      type="file"
                      id="logo-upload"
                      accept=".png,.jpg,.jpeg,.pdf"
                      onChange={handleLogoUpload}
                      className="hidden"
                      disabled={uploadingLogo}
                    />
                    
                    {formData.logoUrl ? (
                      <div className="space-y-4">
                        <CheckCircle className="mx-auto text-neon" size={48} />
                        <p className="font-bold text-neon">Logo Uploaded Successfully</p>
                        <p className="text-sm text-ink/60 font-mono">{formData.logoFileName}</p>
                        <label
                          htmlFor="logo-upload"
                          className="inline-block bg-ink text-neon px-6 py-3 font-bold uppercase hover:bg-neon hover:text-ink transition-colors cursor-pointer"
                        >
                          Replace Logo
                        </label>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="mx-auto text-ink/30" size={48} />
                        <label
                          htmlFor="logo-upload"
                          className="inline-block bg-ink text-neon px-6 py-3 font-bold uppercase hover:bg-neon hover:text-ink transition-colors cursor-pointer"
                        >
                          {uploadingLogo ? 'Uploading...' : 'Upload Logo'}
                        </label>
                        <p className="text-xs text-ink/60">or drag and drop here</p>
                      </div>
                    )}
                  </div>

                  {/* Logo Redraw Service */}
                  <div className="mt-4 bg-neon/10 border border-neon/30 p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.needsLogoRedraw || false}
                        onChange={(e) => handleInputChange('needsLogoRedraw', e.target.checked)}
                        className="mt-1 w-5 h-5 accent-neon"
                      />
                      <div>
                        <p className="font-bold uppercase text-sm">🎨 Need a Logo Redraw?</p>
                        <p className="text-sm text-ink/70 mt-1">
                          We can professionally redraw your logo in high-resolution vector format. 
                          This is helpful if you only have a low-quality image or need a refresh.
                        </p>
                        <p className="text-xs text-ink/60 mt-2 italic">
                          +£150 one-time fee - We'll send you files in SVG, PNG, and PDF formats
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Color Palette */}
                <div className="bg-ink/5 border border-ink/10 p-6">
                  <p className="text-sm font-bold uppercase mb-4">🎨 Brand Color Palette *</p>
                  <p className="text-sm text-ink/70 mb-6">
                    Select the main colors that represent your brand. These will be used throughout your website design.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Primary Color */}
                    <div>
                      <label className="block text-sm font-bold uppercase mb-3">
                        Primary Color
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={formData.primaryColor}
                          onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                          className="w-20 h-20 rounded cursor-pointer border-2 border-ink/20"
                        />
                        <div className="flex-1">
                          <input
                            type="text"
                            value={formData.primaryColor}
                            onChange={(e) => handleInputChange('primaryColor', e.target.value)}
                            placeholder="#000000"
                            className="w-full px-3 py-2 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm uppercase"
                          />
                          <p className="text-xs text-ink/60 mt-1">Main brand color</p>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Color */}
                    <div>
                      <label className="block text-sm font-bold uppercase mb-3">
                        Secondary Color
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={formData.secondaryColor}
                          onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                          className="w-20 h-20 rounded cursor-pointer border-2 border-ink/20"
                        />
                        <div className="flex-1">
                          <input
                            type="text"
                            value={formData.secondaryColor}
                            onChange={(e) => handleInputChange('secondaryColor', e.target.value)}
                            placeholder="#ffffff"
                            className="w-full px-3 py-2 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm uppercase"
                          />
                          <p className="text-xs text-ink/60 mt-1">Background/text</p>
                        </div>
                      </div>
                    </div>

                    {/* Accent Color */}
                    <div>
                      <label className="block text-sm font-bold uppercase mb-3">
                        Accent Color
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="color"
                          value={formData.accentColor}
                          onChange={(e) => handleInputChange('accentColor', e.target.value)}
                          className="w-20 h-20 rounded cursor-pointer border-2 border-ink/20"
                        />
                        <div className="flex-1">
                          <input
                            type="text"
                            value={formData.accentColor}
                            onChange={(e) => handleInputChange('accentColor', e.target.value)}
                            placeholder="#00ff00"
                            className="w-full px-3 py-2 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm uppercase"
                          />
                          <p className="text-xs text-ink/60 mt-1">Buttons/highlights</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Color Preview */}
                  <div className="mt-6 pt-6 border-t border-ink/10">
                    <p className="text-xs font-bold uppercase mb-3 text-ink/60">Preview</p>
                    <div className="flex gap-2">
                      <div 
                        className="flex-1 h-16 rounded flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: formData.primaryColor }}
                      >
                        PRIMARY
                      </div>
                      <div 
                        className="flex-1 h-16 rounded flex items-center justify-center text-ink font-bold text-sm border border-ink/20"
                        style={{ backgroundColor: formData.secondaryColor }}
                      >
                        SECONDARY
                      </div>
                      <div 
                        className="flex-1 h-16 rounded flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: formData.accentColor }}
                      >
                        ACCENT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Domain & Launch */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-6 border-b-2 border-neon pb-2">
                Domain & Hosting Access
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase mb-2">
                    Domain Name *
                  </label>
                  <input
                    type="text"
                    value={formData.domainName}
                    onChange={(e) => handleInputChange('domainName', e.target.value)}
                    placeholder="yourbusiness.com"
                    className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono"
                  />
                  <p className="text-xs text-ink/60 mt-2">The domain you want to use for your website</p>
                </div>

                <div className="bg-neon/10 border-l-4 border-neon p-6 space-y-4">
                  <p className="text-sm font-bold uppercase mb-4 text-ink/80">
                    🌐 Domain Registrar Access (Required to Point Domain)
                  </p>

                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">
                      Domain Provider *
                    </label>
                    <select
                      value={formData.domainProvider}
                      onChange={(e) => handleInputChange('domainProvider', e.target.value)}
                      className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none"
                    >
                      <option value="">Select provider</option>
                      <option value="godaddy">GoDaddy</option>
                      <option value="namecheap">Namecheap</option>
                      <option value="google">Google Domains</option>
                      <option value="cloudflare">Cloudflare</option>
                      <option value="123reg">123-reg</option>
                      <option value="ionos">IONOS</option>
                      <option value="fasthosts">Fasthosts</option>
                      <option value="other">Other</option>
                    </select>
                    <p className="text-xs text-ink/60 mt-1">Where you bought your domain name</p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">
                      Domain Registrar Login Email *
                    </label>
                    <input
                      type="email"
                      value={formData.domainUsername}
                      onChange={(e) => handleInputChange('domainUsername', e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">
                      Domain Registrar Password *
                    </label>
                    <input
                      type="password"
                      value={formData.domainPassword}
                      onChange={(e) => handleInputChange('domainPassword', e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm"
                    />
                    <p className="text-xs text-ink/60 mt-1">🔐 Needed to update DNS records and point domain</p>
                  </div>
                </div>

                {/* Optional: Current Hosting Details */}
                {formData.hasCurrentWebsite && (
                  <div className="bg-ink/5 border border-ink/10 p-6 space-y-4">
                    <p className="text-sm font-bold uppercase mb-4 text-ink/80">
                      🖥️ Current Hosting Provider (Optional but Helpful)
                    </p>

                    <div>
                      <label className="block text-sm font-bold uppercase mb-2">
                        Hosting Provider
                      </label>
                      <input
                        type="text"
                        value={formData.hostingProvider}
                        onChange={(e) => handleInputChange('hostingProvider', e.target.value)}
                        placeholder="e.g., SiteGround, Bluehost, WP Engine"
                        className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold uppercase mb-2">
                          Hosting Username
                        </label>
                        <input
                          type="text"
                          value={formData.hostingUsername}
                          onChange={(e) => handleInputChange('hostingUsername', e.target.value)}
                          placeholder="hosting username"
                          className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold uppercase mb-2">
                          Hosting Password
                        </label>
                        <input
                          type="password"
                          value={formData.hostingPassword}
                          onChange={(e) => handleInputChange('hostingPassword', e.target.value)}
                          placeholder="••••••••"
                          className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none font-mono text-sm"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-ink/60">This helps us access backups and ensure smooth migration</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold uppercase mb-2">
                    Target Launch Date *
                  </label>
                  <input
                    type="date"
                    value={formData.launchDate}
                    onChange={(e) => handleInputChange('launchDate', e.target.value)}
                    className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Additional Information */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-6 border-b-2 border-neon pb-2">
                Additional Information
              </h2>
              
              <div>
                <label className="block text-sm font-bold uppercase mb-2">
                  Anything else we should know?
                </label>
                <textarea
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  placeholder="Special requirements, preferred design style, inspiration websites, target audience details, etc."
                  rows={6}
                  className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none"
                />
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-ink/10">
              <button
                type="button"
                onClick={handleSave}
                className="flex items-center gap-2 bg-ink text-neon px-6 py-3 font-bold uppercase hover:bg-neon hover:text-ink transition-colors"
              >
                <Save size={18} />
                Save Progress
              </button>
              
              <button
                type="submit"
                disabled={progress < 100}
                className="flex-1 bg-neon text-ink px-6 py-3 font-black uppercase hover:bg-neon/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {progress === 100 ? 'Submit Onboarding' : `Complete ${100 - progress}% more to submit`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceOnboarding;


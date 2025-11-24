import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { Reveal } from '../../components/UI/Reveal';
import { Lock, Save, CheckCircle } from 'lucide-react';

interface OnboardingData {
  customerId: string;
  surname: string;
  businessName: string;
  currentPlatform: string;
  monthlyRevenue: string;
  productCount: string;
  domainName: string;
  launchDate: string;
  additionalInfo: string;
  completedSteps: number;
  lastSaved: string;
}

const ShopifyOnboarding = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const [surname, setSurname] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [saveStatus, setSaveStatus] = useState('');

  const [formData, setFormData] = useState<Partial<OnboardingData>>({
    businessName: '',
    currentPlatform: '',
    monthlyRevenue: '',
    productCount: '',
    domainName: '',
    launchDate: '',
    additionalInfo: '',
    completedSteps: 0,
  });

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

  const handleInputChange = (field: keyof OnboardingData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateProgress = () => {
    const fields = [
      'businessName',
      'currentPlatform',
      'monthlyRevenue',
      'productCount',
      'domainName',
      'launchDate',
    ];
    
    const completed = fields.filter(field => formData[field as keyof OnboardingData]).length;
    return Math.round((completed / fields.length) * 100);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-concrete flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full">
          <Reveal>
            <div className="bg-ink text-neon p-8 border border-neon/20">
              <div className="flex items-center gap-3 mb-6 border-b border-neon/20 pb-4">
                <Lock size={24} />
                <h1 className="text-2xl font-black uppercase">Shopify Onboarding</h1>
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
                    className="w-full px-4 py-3 bg-concrete text-ink border border-neon/20 focus:border-neon focus:outline-none font-mono"
                    required
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm font-mono">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-neon text-ink py-3 px-6 font-bold uppercase tracking-widest hover:bg-white transition-all disabled:opacity-50"
                >
                  {loading ? 'Verifying...' : 'Access Onboarding'}
                </button>
              </form>

              <p className="text-xs text-concrete/60 mt-6 font-mono text-center">
                Don't have your Customer ID? Check your welcome email or contact us.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  const progress = calculateProgress();

  return (
    <div className="min-h-screen bg-concrete py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-ink text-neon p-6 mb-8 border border-neon/20">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-black uppercase mb-2">Shopify Migration Onboarding</h1>
              <p className="text-sm font-mono text-concrete/80">Customer ID: {customerId}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black">{progress}%</div>
              <div className="text-xs uppercase tracking-wider">Complete</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 h-2 bg-concrete/20">
            <div 
              className="h-full bg-neon transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
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
          <form className="space-y-8">
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
                    Current E-commerce Platform *
                  </label>
                  <select
                    value={formData.currentPlatform}
                    onChange={(e) => handleInputChange('currentPlatform', e.target.value)}
                    className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none"
                  >
                    <option value="">Select platform</option>
                    <option value="woocommerce">WooCommerce</option>
                    <option value="magento">Magento</option>
                    <option value="bigcommerce">BigCommerce</option>
                    <option value="wix">Wix</option>
                    <option value="squarespace">Squarespace</option>
                    <option value="custom">Custom Built</option>
                    <option value="none">Starting Fresh</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">
                      Monthly Revenue *
                    </label>
                    <select
                      value={formData.monthlyRevenue}
                      onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                      className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none"
                    >
                      <option value="">Select range</option>
                      <option value="0-5k">£0 - £5,000</option>
                      <option value="5k-10k">£5,000 - £10,000</option>
                      <option value="10k-25k">£10,000 - £25,000</option>
                      <option value="25k-50k">£25,000 - £50,000</option>
                      <option value="50k+">£50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase mb-2">
                      Number of Products *
                    </label>
                    <input
                      type="number"
                      value={formData.productCount}
                      onChange={(e) => handleInputChange('productCount', e.target.value)}
                      placeholder="Approximate number"
                      className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Domain & Launch */}
            <section>
              <h2 className="text-2xl font-black uppercase mb-6 border-b-2 border-neon pb-2">
                Domain & Launch Details
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
                  <p className="text-xs text-ink/60 mt-2">The domain you want to use for your Shopify store</p>
                </div>

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
                  rows={6}
                  placeholder="Any specific requirements, integrations, or features you need..."
                  className="w-full px-4 py-3 border border-ink/20 focus:border-neon focus:outline-none resize-none"
                />
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t border-ink/10">
              <button
                type="button"
                onClick={handleSave}
                className="flex-1 flex items-center justify-center gap-2 bg-ink text-neon py-4 px-6 font-bold uppercase tracking-widest hover:bg-neon hover:text-ink transition-all"
              >
                <Save size={20} />
                Save Progress
              </button>
              
              {progress === 100 && (
                <button
                  type="button"
                  onClick={() => {
                    handleSave();
                    alert('Onboarding submitted! We\'ll be in touch soon.');
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-neon text-ink py-4 px-6 font-bold uppercase tracking-widest hover:bg-white transition-all"
                >
                  <CheckCircle size={20} />
                  Submit
                </button>
              )}
            </div>
          </form>

          <p className="text-xs text-ink/60 mt-6 text-center font-mono">
            Your progress is automatically saved every 30 seconds. You can close this page and return anytime using your Customer ID.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopifyOnboarding;


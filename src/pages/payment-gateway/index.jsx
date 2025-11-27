import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

import PlanSummary from './components/PlanSummary';
import PaymentMethods from './components/PaymentMethods';
import BillingDetails from './components/BillingDetails';
import SecurityBadges from './components/SecurityBadges';
import ProgressSteps from './components/ProgressSteps';

const PaymentGateway = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  
  const { service, tier } = location?.state || {};

  useEffect(() => {
    if (!service || !tier) {
      navigate('/services');
    }
  }, [service, tier, navigate]);

  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gst: ''
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    bankAccount: '',
    ifsc: ''
  });

  const handleBillingChange = (e) => {
    setBillingInfo({ ...billingInfo, [e?.target?.name]: e?.target?.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e?.target?.name]: e?.target?.value });
  };

  const calculateTotal = () => {
    const basePrice = tier?.price || 0;
    const gst = basePrice * 0.18;
    const processingFee = basePrice * 0.02;
    return {
      basePrice,
      gst,
      processingFee,
      total: basePrice + gst + processingFee
    };
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePayment = async (e) => {
    e?.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/payment-success', {
        state: {
          service,
          tier,
          billingInfo,
          orderDetails: {
            orderId: `ORD${Date.now()}`,
            date: new Date()?.toLocaleDateString(),
            ...calculateTotal()
          }
        }
      });
    }, 2000);
  };

  if (!service || !tier) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Secure Payment - {service?.title} | Marketverse</title>
        <meta name="description" content="Complete your service purchase securely with multiple payment options including cards, UPI, net banking, and digital wallets." />
      </Helmet>
      <div className="min-h-screen bg-[#FAFBFC]">
        <Header />

        <main className="main-content py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <button
              onClick={() => navigate('/services')}
              className="flex items-center gap-2 text-[#1B365D] hover:text-[#7C3AED] transition-colors mb-6"
            >
              <Icon name="ArrowLeft" size={20} />
              <span className="font-medium">Back to Services</span>
            </button>

            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-2">Complete Your Purchase</h1>
              <p className="text-[#4A5568]">Secure payment processing for {service?.title}</p>
            </div>

            <ProgressSteps currentStep={currentStep} />

            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
                  {currentStep === 1 && (
                    <BillingDetails
                      billingInfo={billingInfo}
                      onChange={handleBillingChange}
                      onContinue={handleContinue}
                    />
                  )}

                  {currentStep === 2 && (
                    <PaymentMethods
                      selectedMethod={selectedPaymentMethod}
                      onMethodChange={setSelectedPaymentMethod}
                      paymentDetails={paymentDetails}
                      onChange={handlePaymentChange}
                      onContinue={handleContinue}
                      onBack={handleBack}
                    />
                  )}

                  {currentStep === 3 && (
                    <div>
                      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Review & Confirm</h2>
                      
                      <div className="space-y-6">
                        <div className="p-4 bg-[#F3F4F6] rounded-lg">
                          <h3 className="font-semibold text-[#1A1A1A] mb-3">Billing Information</h3>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="text-[#4A5568]">Name:</span>
                              <span className="ml-2 text-[#1A1A1A] font-medium">{billingInfo?.fullName}</span>
                            </div>
                            <div>
                              <span className="text-[#4A5568]">Email:</span>
                              <span className="ml-2 text-[#1A1A1A] font-medium">{billingInfo?.email}</span>
                            </div>
                            <div>
                              <span className="text-[#4A5568]">Phone:</span>
                              <span className="ml-2 text-[#1A1A1A] font-medium">{billingInfo?.phone}</span>
                            </div>
                            <div>
                              <span className="text-[#4A5568]">Company:</span>
                              <span className="ml-2 text-[#1A1A1A] font-medium">{billingInfo?.company || 'N/A'}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-[#F3F4F6] rounded-lg">
                          <h3 className="font-semibold text-[#1A1A1A] mb-3">Payment Method</h3>
                          <div className="flex items-center gap-3">
                            <Icon name={selectedPaymentMethod === 'card' ? 'CreditCard' : selectedPaymentMethod === 'upi' ? 'Smartphone' : 'Building2'} size={20} color="#1B365D" />
                            <span className="text-[#1A1A1A] font-medium capitalize">{selectedPaymentMethod}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-4 bg-[#E8F5E9] rounded-lg">
                          <Icon name="Shield" size={20} color="#2E8B57" className="flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm text-[#1A1A1A]">
                              <strong>Secure Payment:</strong> Your payment information is encrypted and secure. We comply with PCI DSS standards.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Button variant="outline" onClick={handleBack} fullWidth>
                            Back
                          </Button>
                          <Button
                            variant="default"
                            onClick={handlePayment}
                            disabled={loading}
                            fullWidth
                            iconName={loading ? '' : 'Lock'}
                            iconPosition="left"
                          >
                            {loading ? 'Processing...' : `Pay ₹${calculateTotal()?.total?.toLocaleString('en-IN')}`}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <SecurityBadges />
              </div>

              <div className="lg:col-span-1">
                <PlanSummary service={service} tier={tier} pricing={calculateTotal()} />
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-[#1A1A1A] text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <p className="text-white/60">
              &copy; {new Date()?.getFullYear()} Marketverse. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PaymentGateway;
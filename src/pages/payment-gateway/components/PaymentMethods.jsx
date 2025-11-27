import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const PaymentMethods = ({ selectedMethod, onMethodChange, paymentDetails, onChange, onContinue, onBack }) => {
  const paymentMethods = [
    { id: 'card', label: 'Credit/Debit Card', icon: 'CreditCard', description: 'Visa, Mastercard, RuPay, Amex' },
    { id: 'upi', label: 'UPI', icon: 'Smartphone', description: 'Google Pay, PhonePe, Paytm' },
    { id: 'netbanking', label: 'Net Banking', icon: 'Building2', description: 'All major Indian banks' },
    { id: 'wallet', label: 'Digital Wallet', icon: 'Wallet', description: 'Paytm, Mobikwik, Freecharge' }
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
    onContinue();
  };

  const isFormValid = () => {
    if (selectedMethod === 'card') {
      return paymentDetails?.cardNumber && paymentDetails?.cardName && 
             paymentDetails?.expiryDate && paymentDetails?.cvv;
    } else if (selectedMethod === 'upi') {
      return paymentDetails?.upiId;
    } else if (selectedMethod === 'netbanking') {
      return paymentDetails?.bankAccount && paymentDetails?.ifsc;
    }
    return true;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Choose Payment Method</h2>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {paymentMethods?.map((method) => (
          <button
            key={method?.id}
            onClick={() => onMethodChange(method?.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedMethod === method?.id
                ? 'border-[#1B365D] bg-[#1B365D]/5'
                : 'border-[#E5E7EB] hover:border-[#1B365D]/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon name={method?.icon} size={24} color={selectedMethod === method?.id ? '#1B365D' : '#4A5568'} />
              <span className="font-semibold text-[#1A1A1A]">{method?.label}</span>
            </div>
            <p className="text-sm text-[#4A5568]">{method?.description}</p>
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {selectedMethod === 'card' && (
          <>
            <Input
              label="Card Number"
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={paymentDetails?.cardNumber}
              onChange={onChange}
              maxLength="19"
              required
            />
            <Input
              label="Cardholder Name"
              type="text"
              name="cardName"
              placeholder="Name as on card"
              value={paymentDetails?.cardName}
              onChange={onChange}
              required
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Expiry Date"
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                value={paymentDetails?.expiryDate}
                onChange={onChange}
                maxLength="5"
                required
              />
              <Input
                label="CVV"
                type="text"
                name="cvv"
                placeholder="123"
                value={paymentDetails?.cvv}
                onChange={onChange}
                maxLength="3"
                required
              />
            </div>
          </>
        )}

        {selectedMethod === 'upi' && (
          <Input
            label="UPI ID"
            type="text"
            name="upiId"
            placeholder="yourname@upi"
            value={paymentDetails?.upiId}
            onChange={onChange}
            required
          />
        )}

        {selectedMethod === 'netbanking' && (
          <>
            <Input
              label="Bank Account Number"
              type="text"
              name="bankAccount"
              placeholder="Enter account number"
              value={paymentDetails?.bankAccount}
              onChange={onChange}
              required
            />
            <Input
              label="IFSC Code"
              type="text"
              name="ifsc"
              placeholder="BANK0001234"
              value={paymentDetails?.ifsc}
              onChange={onChange}
              required
            />
          </>
        )}

        {selectedMethod === 'wallet' && (
          <div className="p-6 bg-[#F3F4F6] rounded-lg text-center">
            <Icon name="Smartphone" size={48} color="#1B365D" className="mx-auto mb-4" />
            <p className="text-[#1A1A1A] font-medium mb-2">Select Your Wallet</p>
            <p className="text-sm text-[#4A5568] mb-4">You'll be redirected to your wallet app to complete payment</p>
            <div className="flex justify-center gap-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-[#1B365D]">Paytm</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-[#1B365D]">Mobikwik</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-[#1B365D]">Freecharge</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-start gap-3 p-4 bg-[#E8F5E9] rounded-lg">
          <Icon name="Lock" size={20} color="#2E8B57" className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-[#1A1A1A] font-medium mb-1">Secure Payment</p>
            <p className="text-xs text-[#4A5568]">
              Your payment information is encrypted using 256-bit SSL and is PCI DSS compliant.
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Button variant="outline" onClick={onBack} fullWidth>
            Back
          </Button>
          <Button
            type="submit"
            variant="default"
            fullWidth
            disabled={!isFormValid()}
            iconName="ArrowRight"
            iconPosition="right"
          >
            Review Order
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethods;
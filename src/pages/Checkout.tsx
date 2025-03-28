
import React from 'react';
import Navbar from '@/components/Navbar';
import { CheckoutForm } from '@/components/CheckoutForm';
import { Footer } from '@/components/Footer';

const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-finance-navy">
              Complete sua compra
            </h1>
            <p className="text-gray-600 mt-2">
              Você está a um passo de ter sua consultoria financeira no WhatsApp
            </p>
          </div>
          
          <CheckoutForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;

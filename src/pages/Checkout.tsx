
import React from 'react';
import Navbar from '@/components/Navbar';
import { CheckoutForm } from '@/components/CheckoutForm';
import { Footer } from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 py-12 px-4 bg-gray-50 relative">
        <Link to="/" className="absolute top-4 left-4">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            dataBotao="voltar"
            dataPosicao="topo-pagina"
            dataPagina="checkout"
          >
            <ArrowLeft size={18} />
            Voltar
          </Button>
        </Link>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-finance-navy">
              Complete sua assinatura
            </h1>
            <p className="text-gray-600 mt-2">
              Informe seu WhatsApp e escolha como deseja pagar sua consultoria financeira
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


import React from 'react';
import { Button } from "@/components/ui/button";
import { WhatsAppChat } from './WhatsAppChat';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/checkout');
  };

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-finance-navy leading-tight">
            Sua Consultoria Financeira no WhatsApp – Inteligente, Personalizada e por <span className="text-finance-green">R$ 14,99/mês</span>
          </h1>
          
          <p className="mt-4 text-lg text-gray-600 mb-8">
            Tire dúvidas, receba recomendações e alertas sobre seus investimentos direto no WhatsApp, com ajuda de IA e especialistas de verdade.
          </p>
          
          <Button 
            onClick={handleCTAClick}
            className="bg-finance-green hover:bg-green-600 text-white font-medium px-6 py-3 text-lg rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            Quero Assinar por R$ 14,99
            <ArrowRight size={18} />
          </Button>
          
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <span className="mr-2">✓</span>
            <span>Cancele quando quiser</span>
            <span className="mx-3">|</span>
            <span className="mr-2">✓</span>
            <span>Sem fidelidade</span>
            <span className="mx-3">|</span>
            <span className="mr-2">✓</span>
            <span>Sem cobranças surpresa</span>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <WhatsAppChat />
        </div>
      </div>
    </section>
  );
};

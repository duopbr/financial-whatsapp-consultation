
import React from 'react';
import { Button } from "@/components/ui/button";
import { WhatsAppChat } from './WhatsAppChat';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

export const HeroSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleCTAClick = () => {
    navigate('/checkout');
  };

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text content - force this to be first on mobile with flex order */}
        <div className="flex-1 md:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-finance-navy leading-tight">
            Sua Consultoria Financeira no WhatsApp – Inteligente, Personalizada e por <span className="text-finance-green">R$ 34,99/mês</span>
          </h1>
          
          <p className="mt-4 text-lg text-gray-600 mb-8">
            Tire dúvidas, receba recomendações e alertas sobre seus investimentos direto no WhatsApp, com ajuda de IA e especialistas de verdade.
          </p>
          
          <Button 
            onClick={handleCTAClick}
            className="bg-finance-green hover:bg-green-600 text-white font-medium px-6 py-3 text-lg rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
            dataBotao="queroassinarporr$34,99"
            dataPosicao="hero-section"
            dataPagina="home"
          >
            Quero Assinar por R$ 34,99
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
        
        {/* Chat content - force this to be second on mobile with flex order */}
        <div className="flex-1 md:order-2">
          <div className="flex justify-center">
            <WhatsAppChat />
          </div>
        </div>
      </div>
    </section>
  );
};

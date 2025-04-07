
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const CTASection = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/checkout');
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-finance-navy text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Pronto para transformar a maneira como você investe?
        </h2>
        
        <p className="text-lg mb-8 text-gray-300">
          Por apenas R$ 14,99 por mês, tenha acesso a consultores financeiros, análises e alertas direto no seu WhatsApp.
        </p>
        
        <Button 
          onClick={handleCTAClick}
          className="bg-finance-green hover:bg-green-600 text-white font-medium px-8 py-3 text-lg rounded-full flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transition-all"
          dataBotao="querotestarporr$14,99"
          dataPosicao="cta-section"
          dataPagina="home"
        >
          Quero testar por R$ 24,99
          <ArrowRight size={18} />
        </Button>
        
        <p className="mt-4 text-sm text-gray-400">
          Cancele quando quiser. Sem compromisso. Sem taxas escondidas.
        </p>
      </div>
    </section>
  );
};


import React from 'react';
import { Check, Shield, Zap } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "Finalmente entendi onde estava errando nos meus investimentos!",
    author: "Carlos M.",
    position: "Investidor há 2 anos"
  },
  {
    text: "Os alertas de dividendos salvaram minha vida. Nunca mais perdi uma data de pagamento.",
    author: "Marina L.",
    position: "Investidora iniciante"
  },
  {
    text: "A análise de FIIs da Paula me ajudou a aumentar minha renda passiva em 32%.",
    author: "Roberto S.",
    position: "Investidor experiente"
  }
];

const SEALS = [
  {
    icon: <Shield size={18} />,
    text: "Sem viés comercial"
  },
  {
    icon: <Zap size={18} />,
    text: "Respostas rápidas com IA"
  },
  {
    icon: <Check size={18} />,
    text: "Análises independentes"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-finance-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-finance-navy mb-12">
          O que nossos assinantes dizem
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="mb-4 text-gray-700 pl-6">{testimonial.text}</p>
              <div className="mt-4 pt-4 border-t">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          {SEALS.map((seal, index) => (
            <div key={index} className="seal-badge">
              {seal.icon}
              <span>{seal.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

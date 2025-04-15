
import React from 'react';
import { CreditCard, Smartphone, MessageCircle } from 'lucide-react';

const STEPS = [
  {
    icon: <CreditCard size={24} />,
    title: "Assine por R$ 34,99",
    description: "Faça sua assinatura com cartão de crédito de forma segura."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Receba acesso via WhatsApp",
    description: "Você receberá o link de acesso no seu WhatsApp cadastrado."
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Comece a conversar",
    description: "Tire suas dúvidas e receba alertas personalizados diariamente."
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-finance-navy mb-12">
          Como funciona
        </h2>
        
        <div className="step-container">
          {STEPS.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon">
                {step.icon}
              </div>
              <div className="step-text">
                <div className="font-semibold">{step.title}</div>
                <div className="text-sm text-gray-500 mt-1 hidden sm:block">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { MessageSquare, Bell, Building2, LineChart, Newspaper } from 'lucide-react';

const SERVICE_ITEMS = [
  {
    icon: <MessageSquare size={28} className="text-finance-green" />,
    title: "Consultor de Carteira – Nicolas Arquimedes",
    description: "Tire dúvidas, receba recomendações personalizadas e acompanhamento constante para sua carteira de investimentos."
  },
  {
    icon: <Bell size={28} className="text-finance-green" />,
    title: "Alertas Automáticos",
    description: "Receba notificações sobre dividendos, publicações de balanços e notícias importantes sobre seus investimentos."
  },
  {
    icon: <Building2 size={28} className="text-finance-green" />,
    title: "Consultora de FIIs – Paula Pitágoras",
    description: "Análise especializada, comparação entre fundos e seleção dos melhores FIIs para seu perfil de investidor."
  },
  {
    icon: <LineChart size={28} className="text-finance-green" />,
    title: "Analista de Ações – Julia Nakamura",
    description: "Análise fundamentalista, múltiplos comparativos, notícias relevantes e oportunidades de mercado."
  },
  {
    icon: <Newspaper size={28} className="text-finance-green" />,
    title: "Notícias e Fatos Relevantes",
    description: "Receba explicações claras sobre impactos macro e microeconômicos no mercado e em seus investimentos."
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-finance-navy mb-12">
          O que está incluso na sua consultoria
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_ITEMS.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-finance-navy">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

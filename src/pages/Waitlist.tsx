
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageSquare } from 'lucide-react';

const Waitlist = () => {
  const handleWhatsAppChat = () => {
    const phoneNumber = "5521973973673";
    const message = encodeURIComponent("Olá! Gostaria de solicitar um período de teste para o produto Duop.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm text-center relative">
          <Link to="/" className="absolute top-4 left-4">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              dataServico="navegacao"
              dataPlano="n/a"
              dataOrigem="waitlist"
            >
              <ArrowLeft size={18} />
              Voltar
            </Button>
          </Link>
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-finance-light text-finance-green mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-finance-navy mb-4">
            As vagas para nossa consultoria esgotaram!
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Agradecemos pelo seu interesse! Neste momento todas as vagas estão preenchidas, mas você já está na lista de espera. Assim que abrirmos novas vagas, você será o primeiro a saber.
          </p>
          
          <p className="text-lg text-gray-600 mb-8">
            Se você deseja experimentar um período de teste do nosso produto, clique no botão abaixo para conversar diretamente com nossa equipe no WhatsApp.
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleWhatsAppChat}
              className="bg-green-500 hover:bg-green-600 text-white"
              dataServico="consultoria-financeira"
              dataPlano="teste"
              dataOrigem="waitlist"
            >
              <MessageSquare size={20} />
              Solicitar período de teste
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Waitlist;

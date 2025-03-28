
import React from 'react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <Logo />
            <span className="ml-2 font-semibold text-finance-navy">Duop</span>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>© 2023 Duop. Todos os direitos reservados.</p>
            <p className="mt-1">Este é um serviço fictício para fins de teste. Nenhum valor será cobrado.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

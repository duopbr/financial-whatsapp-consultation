
import React from 'react';
import { Button } from "@/components/ui/button";
import { Logo } from './Logo';
import { MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/checkout';
  const isWaitlistPage = location.pathname === '/waitlist';

  const currentPage = isCheckoutPage ? 'checkout' : 
                     isWaitlistPage ? 'waitlist' : 'home';

  return (
    <nav className="border-b py-3 px-4 sm:px-6 lg:px-8 bg-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
          <span className="ml-2 font-semibold text-lg text-finance-navy">Duop</span>
        </Link>
        
        {!isCheckoutPage && !isWaitlistPage && (
          <Link to="/checkout">
            <Button 
              className="flex items-center gap-2 bg-finance-green hover:bg-green-600"
              dataPosicao="navbar"
              dataPagina={currentPage}
            >
              <MessageSquare size={18} />
              <span className="hidden sm:inline">Quero Assinar</span>
              <span className="inline sm:hidden">Assinar</span>
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

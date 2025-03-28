
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/sonner";
import { Loader2 } from 'lucide-react';

export const CheckoutForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    phone: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form validation
    if (!formData.cardName || !formData.cardNumber || !formData.cardExpiry || !formData.cardCVV || !formData.phone) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    
    // Simulate processing
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/waitlist');
    }, 2000);
  };
  
  return (
    <div className="checkout-container">
      <h2 className="text-2xl font-bold mb-6 text-center text-finance-navy">
        Complete sua assinatura
      </h2>
      
      <p className="mb-6 text-center text-gray-600">
        Assine nossa consultoria financeira por apenas R$ 14,99/mês
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardName">Nome no cartão</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            className="card-input"
            placeholder="Nome como aparece no cartão"
            value={formData.cardName}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="cardNumber">Número do cartão</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            className="card-input"
            placeholder="0000 0000 0000 0000"
            value={formData.cardNumber}
            onChange={handleChange}
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="cardExpiry">Validade</label>
            <input
              type="text"
              id="cardExpiry"
              name="cardExpiry"
              className="card-input"
              placeholder="MM/AA"
              value={formData.cardExpiry}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="cardCVV">CVV</label>
            <input
              type="text"
              id="cardCVV"
              name="cardCVV"
              className="card-input"
              placeholder="123"
              value={formData.cardCVV}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Número de WhatsApp</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="card-input"
            placeholder="(00) 00000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        <Button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-finance-green hover:bg-green-600 text-white font-medium py-3 text-lg rounded-md mt-4"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processando...
            </>
          ) : (
            "Ativar Minha Consultoria"
          )}
        </Button>
        
        <p className="mt-4 text-xs text-center text-gray-500">
          Você não será cobrado. Este é um produto fictício para fins de teste.
        </p>
      </form>
    </div>
  );
};

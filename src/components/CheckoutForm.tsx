
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";
import { Loader2, CreditCard, QrCode } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

export const CheckoutForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm({
    defaultValues: {
      paymentMethod: "credit",
      phone: "",
    }
  });
  
  const handleSubmit = form.handleSubmit(async (data) => {
    // Validate that phone number is provided
    if (!data.phone) {
      toast({
        title: "Erro",
        description: "Por favor, informe seu número de WhatsApp",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Enviar dados para o Google Sheets
      await fetch('https://script.google.com/macros/s/AKfycbz9ufY-A23bGZGrQdkZgsJSW7V8WjYMw2lihe5q2HJdcFg02rN9YvI4tOq9ZqUWc6J6Mw/exec', {
        method: 'POST',
        body: JSON.stringify({
          telefone: data.phone,
          metodoPagamento: data.paymentMethod,
          valor: "24.99" // Valor fixo mencionado no formulário
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Continua com o fluxo normal
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/waitlist');
      }, 1500);
  
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      toast({
        title: "Erro ao salvar",
        description: "Houve um problema ao enviar seus dados. Tente novamente mais tarde.",
        variant: "destructive"
    });
      setTimeout(() => {
      setIsSubmitting(false);
      navigate('/waitlist');
  }, 1500);
}
  });
  
  // Get the current payment method to use for the data-pagamento attribute
  const paymentMethod = form.watch('paymentMethod');
  const dataPagamento = paymentMethod === 'pix' ? 'pix' : 'cartao';
  
  // Function to handle clicking anywhere in the payment method box
  const handleBoxClick = (value: string) => {
    form.setValue('paymentMethod', value);
  };
  
  return (
    <div className="checkout-container">
      <h2 className="text-2xl font-bold mb-6 text-center text-finance-navy">
        Complete sua assinatura
      </h2>
      
      <p className="mb-6 text-center text-gray-600">
        Assine nossa consultoria financeira por apenas R$ 24,99/mês
      </p>
      
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-base font-medium">Método de Pagamento</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-3"
                  >
                    <div 
                      className="flex items-center space-x-3 space-y-0 border rounded-md p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleBoxClick('credit')}
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0 m-0 cursor-pointer">
                        <FormControl>
                          <RadioGroupItem value="credit" />
                        </FormControl>
                        <FormLabel className="flex items-center gap-2 font-normal cursor-pointer">
                          <CreditCard className="h-5 w-5 text-finance-navy" />
                          <span>Cartão de Crédito/Débito</span>
                        </FormLabel>
                      </FormItem>
                    </div>
                    
                    <div 
                      className="flex items-center space-x-3 space-y-0 border rounded-md p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleBoxClick('pix')}
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0 m-0 cursor-pointer">
                        <FormControl>
                          <RadioGroupItem value="pix" />
                        </FormControl>
                        <FormLabel className="flex items-center gap-2 font-normal cursor-pointer">
                          <QrCode className="h-5 w-5 text-finance-navy" />
                          <span>PIX</span>
                        </FormLabel>
                      </FormItem>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          
          <div className="form-group">
            <label htmlFor="phone">Número de WhatsApp</label>
            <input
              type="tel"
              className="card-input"
              placeholder="(00) 00000-0000"
              autoComplete="tel"
              {...form.register("phone", { required: true })}
            />
            <p className="text-xs text-gray-500 mt-1">
              Você receberá o link de acesso neste número
            </p>
          </div>
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-finance-green hover:bg-green-600 text-white font-medium py-3 text-lg rounded-md mt-4"
            dataBotao="assinar agora"
            dataPosicao="formulario"
            dataPagina="checkout"
            data-pagamento={dataPagamento}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              "Assinar Agora"
            )}
          </Button>
          
          <p className="mt-4 text-xs text-center text-gray-500">
            Você não será cobrado. Este é um produto fictício para fins de teste.
          </p>
        </form>
      </Form>
    </div>
  );
};

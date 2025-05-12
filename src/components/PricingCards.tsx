
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, CreditCard, Check, Copy } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const plans = [
  {
    id: "monthly",
    name: "Plano Mensal",
    price: "34,99",
    period: "mês",
    discount: "50%",
    popular: false,
    description: "Ideal para quem quer testar a consultoria e acompanhar o mercado mês a mês.",
    equivalentPrice: null,
    stripeUrl: "https://checkout.stripe.com/c/pay/cs_live_a1cCNA3URxpWirxzzPWvJV3LLDNyOjcCc7SDZ1UkWvfqgDkrQUinoUxsBl#fidkdWxOYHwnPyd1blpxYHZxWjA0TjE0PW1PTVdTPXZ1YzVUbTJNf3JAYX1qNTVoQn9gb31JRk89d3N%2FYGhidndiPUlDfGp2SnY1aX9qNTVvQGlvMWR9YHZOYWJhNTVwUn9gMUBAV39tSH1jdj1gNTVvNTV1VycpJ3VpbGtuQiptdmElfWpwcWB3SUQxRycpJ0ptbGp3MGwmeWBnYycpJ3dgbHEnPydgYmRhfSkoYmBrZmp2YSkoZnBkZSkoZmBqbykoeCknKSdwYmRhfSkoYmBrZmp2YSkoZnBkZSkoZmBqbykoeCknKSdwZmdqYScpJ2x3YHVgYidwJ2BrZmppYCknaWR8anBhJz9xd3BgWyknZ3gpJ3dgcHEnPydtYGZhdHFnZCd4JSd3YGBpdWF3TGRmYCcpJ21xcXV2PyoqdXZ0JyknaWpmZGltJz9rdXdgJ3gl"
  },
  {
    id: "quarterly",
    name: "Plano Trimestral",
    price: "94,99",
    period: "trimestre",
    discount: "60%",
    popular: true,
    description: "Economize e acompanhe o mercado com continuidade por 3 meses.",
    equivalentPrice: "31,66",
    stripeUrl: "https://checkout.stripe.com/c/pay/cs_live_a1jn7TSq5CdcV5FHgfyZorhPjCd74o8IWDmScjiaiQGJfMTZY674d1vIbh#fidkdWxOYHwnPyd1blpxYHZxWjA0TjE0PW1PTVdTPXZ1YzVUbTJNf3JAYX1qNTVoQn9gb31JRk89d3N%2FYGhidndiPUlDfGp2SnY1aX9qNTVvQGlvMWR9YHZOYWJhNTVwUn9gMUBAV39tSH1jdj1gNTVvNTV1VycpJ3VpbGtuQiptdmElfWpwcWB3SUQxRycpJ0ptbGp3MGwmeWBnYycpJ3dgbHEnPydgYmRhfSkoYmBrZmp2YSkoZnBkZSkoZmBqbykoeCknKSdwYmRhfSkoYmBrZmp2YSkoZnBkZSkoZmBqbykoeCknKSdwZmdqYScpJ2x3YHVgYidwJ2BrZmppYCknaWR8anBhJz9xd3BgWyknZ3gpJ3dgcHEnPydtYGZhdHFnZCd4JSd3YGBpdWF3TGRmYCcpJ21xcXV2PyoqdHEqJyknaWpmZGltJz9rdXdgJ3gl"
  },
  {
    id: "biannual",
    name: "Plano Semestral",
    price: "167,99",
    period: "semestre",
    discount: "70%",
    popular: false,
    description: "Para quem quer compromisso de longo prazo e o melhor custo-benefício.",
    equivalentPrice: "27,99",
    stripeUrl: "https://checkout.stripe.com/c/pay/cs_live_a19Dhf0AeFTxEtnQihBayJifX2HfDxzCxzBXyNkbnpTSfvRS5MsF1fAnuL#fidkdWxOYHwnPyd1blpxYHZxWjA0TjE0PW1PTVdTPXZ1YzVUbTJNf3JAYX1qNTVoQn9gb31JRk89d3N%2FYGhidndiPUlDfGp2SnY1aX9qNTVvQGlvMWR9YHZOYWJhNTVwUn9gMUBAV39tSH1jdj1gNTVvNTV1VycpJ3VpbGtuQiptdmElfWpwcWB3SUQxRycpJ0ptbGp3MGwmeWBnYycpJ3dgbHEnPydgYmRhfSkoYmBrZmp2YSkoZnBkZSkoZmBqbykoeCknKSdwYmRhfSkoYmBrZmp2YSkoZnBkZSkoZmBqbykoeCknKSdwZmdqYScpJ2x3YHVgYidwJ2BrZmppYCknaWR8anBhJz9xd3BgWyknZ3gpJ3dgcHEnPydtYGZhdHFnZCd4JSd3YGBpdWF3TGRmYCcpJ21xcXV2PyoqdnwqJyknaWpmZGltJz9rdXdgJ3gl"
  }
];

export const PricingCards = () => {
  const [pixDialogOpen, setPixDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const navigate = useNavigate();

  const handleStripePayment = (stripeUrl: string) => {
    window.open(stripeUrl, '_blank');
    setTimeout(() => {
      navigate('/waitlist');
    }, 1500);
  };

  const openPixDialog = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setPixDialogOpen(true);
  };

  const copyPixKey = () => {
    navigator.clipboard.writeText("financeapi@gmail.com");
    toast({
      title: "Copiado!",
      description: "Chave Pix copiada para a área de transferência.",
    });
  };

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.id} className={`flex flex-col h-full ${
            plan.popular ? 'border-finance-green border-2 relative shadow-lg' : 'shadow'
          }`}>
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <Badge className="bg-finance-green text-white">Mais Popular</Badge>
              </div>
            )}
            <CardHeader className="pb-0">
              <CardTitle className="text-xl font-bold text-finance-navy">
                {plan.name}
              </CardTitle>
              <div className="mt-2 space-y-1">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-finance-navy">R$ {plan.price}</span>
                  <span className="text-sm text-gray-500 ml-2">/{plan.period}</span>
                </div>
                {plan.equivalentPrice && (
                  <p className="text-sm text-gray-600">
                    Equivalente a R$ {plan.equivalentPrice}/mês
                  </p>
                )}
                <p className="font-medium text-finance-green">
                  {plan.discount} de desconto sobre o plano mensal
                </p>
              </div>
            </CardHeader>
            <CardContent className="flex-grow py-4">
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-finance-green mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Acesso completo ao assistente financeiro no WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-finance-green mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Oferta por tempo limitado</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3 pt-0">
              <Button 
                onClick={() => handleStripePayment(plan.stripeUrl)}
                className="w-full bg-finance-green hover:bg-green-600 flex items-center justify-center gap-2"
                dataBotao={`pagar-cartao-${plan.id}`}
                dataPosicao="card-plano"
                dataPagina="checkout"
                data-pagamento="cartao"
              >
                <CreditCard size={16} /> Pagar com Cartão
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-finance-green text-finance-green hover:bg-finance-green/10 flex items-center justify-center gap-2"
                onClick={() => openPixDialog(plan)}
                dataBotao={`pagar-pix-${plan.id}`}
                dataPosicao="card-plano"
                dataPagina="checkout"
                data-pagamento="pix"
              >
                <QrCode size={16} /> Pagar via Pix
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={pixDialogOpen} onOpenChange={setPixDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-finance-navy">
              Pagamento via Pix {selectedPlan && `- ${selectedPlan.name}`}
            </DialogTitle>
            <DialogDescription className="text-center">
              Valor: R$ {selectedPlan?.price} {selectedPlan && `/${selectedPlan.period}`}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-white p-4 rounded-lg border">
              {/* QR Code image placeholder - In a real implementation, this would be dynamically generated */}
              <div className="w-48 h-48 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
                QR Code Pix
              </div>
            </div>
            
            <div className="w-full">
              <p className="text-sm text-gray-600 mb-2">Chave Pix:</p>
              <div className="flex items-center">
                <Input value="financeapi@gmail.com" readOnly className="bg-gray-50" />
                <Button variant="outline" size="sm" onClick={copyPixKey} className="ml-2">
                  <Copy size={16} />
                </Button>
              </div>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm text-yellow-800 w-full">
              <p className="font-medium">Importante:</p>
              <p className="mt-1">Após realizar o pagamento, envie o comprovante para nosso WhatsApp para confirmação rápida do seu acesso.</p>
              <p className="mt-1">WhatsApp: (11) 99999-9999</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

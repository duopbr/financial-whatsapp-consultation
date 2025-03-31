
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const WhatsAppChat = () => {
  return (
    <div className="whatsapp-chat-container">
      <div className="whatsapp-header">
        <div className="whatsapp-avatar bg-[#1DBAED] overflow-hidden">
          <img 
            src="/lovable-uploads/124e85e1-85e1-4251-915e-7d3c49f2b0c8.png" 
            alt="Duop Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <div className="font-semibold">Duop</div>
        </div>
      </div>
      
      <div className="whatsapp-body">
        <div className="chat-area">
          <div className="message received">
            <Avatar className="inline-block mr-2 h-6 w-6 bg-[#1DBAED]">
              <AvatarImage src="/lovable-uploads/124e85e1-85e1-4251-915e-7d3c49f2b0c8.png" alt="Duop" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <div>Olá! Sou o Nicolas da Duop. Como posso ajudar com seus investimentos hoje?</div>
            <div className="message-time">09:42</div>
          </div>
          
          <div className="message sent">
            <div>Oi Nicolas! Estou pensando em investir em FIIs, mas não sei por onde começar.</div>
            <div className="message-time">09:43</div>
          </div>
          
          <div className="message received">
            <Avatar className="inline-block mr-2 h-6 w-6 bg-[#1DBAED]">
              <AvatarImage src="/lovable-uploads/124e85e1-85e1-4251-915e-7d3c49f2b0c8.png" alt="Duop" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <div>Vou chamar a Paula, nossa especialista em FIIs para te ajudar! Enquanto isso, você pode me dizer qual seu perfil de investidor?</div>
            <div className="message-time">09:43</div>
          </div>
          
          <div className="message sent">
            <div>Sou conservador, busco renda mensal.</div>
            <div className="message-time">09:44</div>
          </div>
          
          <div className="message received">
            <Avatar className="inline-block mr-2 h-6 w-6 bg-[#1DBAED]">
              <AvatarImage src="/lovable-uploads/124e85e1-85e1-4251-915e-7d3c49f2b0c8.png" alt="Duop" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <div>Olá, sou Paula! Para investidores conservadores em busca de renda mensal, recomendo começar por FIIs de tijolo com baixa vacância e histórico de dividendos consistentes. Posso te enviar uma análise dos 5 melhores FIIs com esse perfil?</div>
            <div className="message-time">09:45</div>
          </div>
          
          <div className="message sent">
            <div>Sim, por favor!</div>
            <div className="message-time">09:45</div>
          </div>
          
          <div className="message received">
            <Avatar className="inline-block mr-2 h-6 w-6 bg-[#1DBAED]">
              <AvatarImage src="/lovable-uploads/124e85e1-85e1-4251-915e-7d3c49f2b0c8.png" alt="Duop" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <div>📊 <strong>Análise de FIIs para Renda</strong> <br/><br/>
              1. HGLG11: Yield 7,8% a.a. <br/>
              2. XPLG11: Yield 7,5% a.a. <br/>
              3. VISC11: Yield 7,3% a.a. <br/>
              4. HGRU11: Yield 7,1% a.a. <br/>
              5. RECT11: Yield 8,2% a.a.
            </div>
            <div className="message-time">09:46</div>
          </div>
          
          <div className="message received">
            <Avatar className="inline-block mr-2 h-6 w-6 bg-[#1DBAED]">
              <AvatarImage src="/lovable-uploads/124e85e1-85e1-4251-915e-7d3c49f2b0c8.png" alt="Duop" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <div>Quer que eu te explique mais sobre algum desses FIIs? Ou prefere que eu agende um alerta para te avisar sobre os próximos dividendos?</div>
            <div className="message-time">09:46</div>
          </div>
        </div>
      </div>
    </div>
  );
};

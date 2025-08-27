import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Send, Bot } from "lucide-react";
import { ChatMessage } from "@/components/ChatMessage";
import { QuickActions } from "@/components/QuickActions";
import { SolicitudForm } from "@/components/SolicitudForm";
import { MunicipalHeader } from "@/components/MunicipalHeader";
import { faqData, getResponseByKeywords, getGreetingResponse, getDefaultResponse } from "@/data/faqData";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showSolicitudForm, setShowSolicitudForm] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mensaje de bienvenida inicial
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      content: getGreetingResponse(),
      isBot: true,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    // Auto scroll al final cuando hay nuevos mensajes
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const addMessage = (content: string, isBot: boolean = false) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = async () => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
    setIsTyping(false);
  };

  const getBotResponse = async (userMessage: string): Promise<string> => {
    await simulateTyping();

    // Buscar respuesta en FAQ
    const faqResponse = getResponseByKeywords(userMessage);
    if (faqResponse) {
      return faqResponse.answer;
    }

    // Respuesta por defecto
    return getDefaultResponse();
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue("");
    
    // Agregar mensaje del usuario
    addMessage(userMessage);

    // Obtener y agregar respuesta del bot
    const botResponse = await getBotResponse(userMessage);
    addMessage(botResponse, true);
  };

  const handleQuickAction = async (actionId: string) => {
    let userMessage = "";
    
    switch (actionId) {
      case "horarios":
        userMessage = "¿Cuáles son los horarios de atención?";
        break;
      case "pagos":
        userMessage = "¿Cómo puedo pagar mis impuestos?";
        break;
      case "tramites":
        userMessage = "¿Qué trámites puedo realizar?";
        break;
      case "ubicacion":
        userMessage = "¿Dónde está ubicada la municipalidad?";
        break;
      case "contacto":
        userMessage = "¿Cómo puedo contactar con un funcionario?";
        break;
      case "solicitud":
        setShowSolicitudForm(true);
        return;
      default:
        return;
    }

    // Agregar mensaje del usuario
    addMessage(userMessage);

    // Obtener y agregar respuesta del bot
    const botResponse = await getBotResponse(userMessage);
    addMessage(botResponse, true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (showSolicitudForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-municipal-light to-background flex items-center justify-center p-4">
        <SolicitudForm onClose={() => setShowSolicitudForm(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-municipal-light to-background">
      <div className="max-w-4xl mx-auto">
        <MunicipalHeader />
        
        <div className="h-[calc(100vh-200px)] flex flex-col">
          {/* Chat Area */}
          <Card className="flex-1 m-4 mb-2 border-0 shadow-lg bg-background/95 backdrop-blur">
            <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.content}
                  isBot={message.isBot}
                  timestamp={message.timestamp}
                />
              ))}
              
              {isTyping && (
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:0ms]"></div>
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:150ms]"></div>
                      <div className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:300ms]"></div>
                    </div>
                  </div>
                </div>
              )}
            </ScrollArea>
          </Card>

          {/* Quick Actions */}
          <div className="mx-4 mb-2">
            <QuickActions onActionClick={handleQuickAction} />
          </div>

          {/* Input Area */}
          <Card className="mx-4 mb-4 border-0 shadow-lg">
            <div className="flex gap-2 p-4">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu consulta aquí..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;

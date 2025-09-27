"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2, Maximize2, Heart, Sparkles } from "lucide-react";

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatFlutuanteProps {
  className?: string;
}

export function ChatFlutuante({ className }: ChatFlutuanteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "bot",
      content: "Olá! 🔥 Sou a Luna, sua assistente virtual do HotLovers! Como posso te ajudar hoje?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = [
    "💕 Que pergunta interessante! Vou te ajudar com isso...",
    "🔥 Adorei sua mensagem! Deixe-me explicar melhor...",
    "😘 Claro, querido! Posso te ajudar com informações sobre nossos planos premium!",
    "✨ Nossa plataforma tem as modelos mais sensuais! Quer saber mais?",
    "💎 Temos conteúdo exclusivo esperando por você! Que tal dar uma olhada?",
    "🌟 Fico feliz em conversar contigo! O que mais posso esclarecer?",
    "💋 Essa é uma ótima questão! Deixe-me te dar todos os detalhes...",
    "🔥 Você está no lugar certo para conteúdo premium! Como posso ajudar?"
  ];

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newUserMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setMessage("");
    setIsTyping(true);

    // Simular resposta do bot
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: randomResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`${className || ""}`}>
      {/* Botão flutuante */}
      {!isOpen && (
        <div className="fixed bottom-32 right-8 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative w-16 h-16 bg-hotlovers-gradient rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
          >
            <MessageCircle className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            
            {/* Badge de notificação */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-xs font-bold text-black">!</span>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              💬 Fale comigo!
              <div className="absolute top-full right-4 border-4 border-transparent border-t-black/80"></div>
            </div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-8 z-50 animate-scale-in">
          <div className={`bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
            isMinimized ? 'w-80 h-16' : 'w-80 h-96'
          }`}>
            
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border rounded-t-2xl bg-hotlovers-gradient">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">🔥</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">Luna - Assistente VIP</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white/80">Online agora</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 text-white/70 hover:text-white transition-colors"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            {!isMinimized && (
              <>
                <div className="flex-1 p-4 h-64 overflow-y-auto space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl ${
                          msg.type === 'user'
                            ? 'bg-hotlovers-gradient text-white'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted px-4 py-2 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-hotlovers-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Digite sua mensagem..."
                        className="w-full p-3 rounded-xl bg-muted border-0 focus:outline-none focus:ring-2 focus:ring-hotlovers-red/50 resize-none text-sm"
                        rows={1}
                        disabled={isTyping}
                      />
                    </div>
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim() || isTyping}
                      className="p-3 bg-hotlovers-gradient rounded-xl text-white hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex items-center space-x-2 mt-3 text-xs">
                    <button
                      onClick={() => setMessage("Quero saber sobre os planos premium")}
                      className="px-3 py-1 bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors"
                    >
                      💎 Planos
                    </button>
                    <button
                      onClick={() => setMessage("Como funciona a plataforma?")}
                      className="px-3 py-1 bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ❓ Ajuda
                    </button>
                    <button
                      onClick={() => setMessage("Quero ser modelo")}
                      className="px-3 py-1 bg-muted rounded-full text-muted-foreground hover:text-foreground transition-colors"
                    >
                      🔥 Ser Modelo
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatFlutuante;

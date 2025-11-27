import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies
    const consent = localStorage.getItem("gfi-cookie-consent");
    if (!consent) {
      // Pequeno delay para não aparecer imediatamente ao carregar a página (melhor UX)
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setIsClosing(true);
    localStorage.setItem("gfi-cookie-consent", "true");
    setTimeout(() => setIsVisible(false), 300); // Tempo da animação de saída
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 transition-all duration-500 ${
        isClosing ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      <Card className="border-l-4 border-l-secondary shadow-2xl bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-secondary/10 rounded-full shrink-0">
              <Cookie className="w-6 h-6 text-secondary" />
            </div>
            
            <div className="space-y-3 flex-1">
              <div>
                <h4 className="font-heading font-bold text-foreground text-lg">
                  Nós valorizamos sua privacidade
                </h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência e oferecer conteúdo personalizado. Ao continuar navegando, você concorda com nossa{" "}
                  <Link to="/politica-de-privacidade" className="text-primary underline hover:text-secondary transition-colors">
                    Política de Privacidade
                  </Link>.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <Button 
                  onClick={handleAccept}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold flex-1"
                >
                  Aceitar e Continuar
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={handleAccept} // Simplificação: recusar fecha o modal, mas em um sistema real poderia desativar trackers
                  className="text-muted-foreground hover:text-foreground"
                >
                  Recusar
                </Button>
              </div>
            </div>

            <button 
              onClick={handleAccept} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;
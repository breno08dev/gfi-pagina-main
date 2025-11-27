import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
      <SEO title="Página não encontrada" description="A página que você tentou acessar não existe." />
      
      {/* Background Texture Sutil */}
      <div className="absolute inset-0 metallic-texture opacity-10" />

      <div className="container px-4 text-center relative z-10">
        {/* Efeito de Texto Grande no Fundo */}
        <h1 className="text-[10rem] md:text-[15rem] font-black text-gray-200/50 leading-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          404
        </h1>

        <div className="space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/10 text-secondary mb-4">
            <ArrowLeft className="w-10 h-10" />
          </div>
          
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
            Página não encontrada
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            O conteúdo que você procurou pode ter sido movido ou não existe mais.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg shadow-lg hover:-translate-y-1 transition-transform">
              <Link to="/">
                <Home className="mr-2 w-5 h-5" />
                Voltar para o Início
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg bg-white">
              <Link to="/contato">
                Falar com Suporte
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
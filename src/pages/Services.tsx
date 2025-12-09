import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Hammer, 
  Box, 
  Warehouse, 
  Wrench, 
  ArrowRight, 
  Check, 
  HardHat, 
  ClipboardCheck, 
  Flame 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import SEO from "@/components/SEO";

// Imagens atualizadas para .webp (performance e correção de nomes)
import estruturaImage from "@/assets/ImageEstrutura2.webp";
import imageMercado from "@/assets/ImageMercado.webp";
import mezaninoImage from "@/assets/mezanino.webp";
import coberturaImage from "@/assets/cobertura-metalica.webp";
import caldeiraria from "@/assets/manutencaoCaldeiraria.webp";
import montagemCaldeiraria from "@/assets/montandoCaldeiraria.webp";
import manutencaoTelhados from "@/assets/ManutencaoTelhados.webp";
import inspecaoImage from "@/assets/InspecaoMetalica.webp";

// --- Componente Auxiliar para Animação de Scroll (FadeInItem) ---
const FadeInItem = ({ children, index, className = "" }: { children: React.ReactNode; index: number; className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" } // Começa a carregar um pouco antes de entrar totalmente
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      // Delay escalonado levemente apenas para grids lado a lado, ou fixo para listas verticais
      style={{ transitionDelay: `${(index % 3) * 150}ms` }}
      className={`
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
// ---------------------------------------------------

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Estruturas Metálicas",
      description: "Desenvolvimento completo de estruturas metálicas para uso industrial, comercial e residencial.",
      image: estruturaImage,
      features: [
        "Projetos estruturais completos",
        "Cálculo estrutural detalhado",
        "Fabricação com aço certificado",
        "Montagem com equipe especializada",
        "Garantia de qualidade",
      ],
    },
    {
      icon: Hammer,
      title: "Coberturas Metálicas",
      description: "Sistemas de cobertura metálica com alta durabilidade, resistência térmica e acústica.",
      image: coberturaImage,
      features: [
        "Diversos tipos de telhas",
        "Isolamento térmico e acústico",
        "Sistemas de calhas e rufos",
        "Estrutura dimensionada",
        "Instalação profissional",
      ],
    },
    {
      icon: Box,
      title: "Mezaninos",
      description: "Soluções inteligentes para aproveitamento de espaço vertical em ambientes industriais e comerciais.",
      image: mezaninoImage,
      features: [
        "Projeto personalizado",
        "Estrutura modular",
        "Fácil montagem e desmontagem",
        "Alta capacidade de carga",
        "Acabamento de qualidade",
      ],
    },
    {
      icon: Warehouse,
      title: "Galpões Industriais",
      description: "Construção completa de galpões industriais com estrutura metálica de alta performance.",
      image: imageMercado,
      features: [
        "Projeto arquitetônico completo",
        "Estrutura robusta e durável",
        "Prazos de entrega reduzidos",
        "Melhor custo-benefício",
        "Garantia estrutural",
      ],
    },
    {
      icon: HardHat,
      title: "Montagem de Estruturas",
      description: "Serviço especializado de montagem de estruturas metálicas em geral com rigor técnico e segurança.",
      image: montagemCaldeiraria,
      features: [
        "Equipe altamente qualificada",
        "Equipamentos de içamento próprios",
        "Segurança do trabalho rigorosa",
        "Montagem ágil e precisa",
        "Supervisão técnica constante",
      ],
    },
    {
      icon: Wrench,
      title: "Manutenções de Telhados",
      description: "Serviços de manutenção preventiva e corretiva para garantir a integridade da sua cobertura.",
      image: manutencaoTelhados,
      features: [
        "Substituição de telhas danificadas",
        "Impermeabilização e vedação",
        "Limpeza e desobstrução de calhas",
        "Reforço estrutural",
        "Eliminação de goteiras e infiltrações",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Inspeções Técnicas",
      description: "Avaliação detalhada em estruturas metálicas e caldeiraria para garantir segurança e conformidade.",
      image: inspecaoImage,
      features: [
        "Laudos técnicos estruturais",
        "Identificação de patologias",
        "Ensaios não destrutivos",
        "Verificação de soldas e conexões",
        "Plano de manutenção recomendado",
      ],
    },
    {
      icon: Flame,
      title: "Caldeiraria",
      description: "Montagem e manutenção especializada em serviços de caldeiraria industrial leve e pesada.",
      image: caldeiraria,
      features: [
        "Fabricação de peças especiais",
        "Soldas de alta precisão",
        "Reparos em tanques e tubulações",
        "Corte e dobra de chapas",
        "Montagem industrial",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Serviços" 
        description="Conheça nossos serviços: Estruturas Metálicas, Coberturas, Mezaninos, Galpões, Montagem e Caldeiraria." 
        canonical="/servicos"
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 metallic-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 animate-fade-up">
              Nossos Serviços
            </h1>
            <p className="text-xl leading-relaxed text-primary-foreground/90 animate-fade-up delay-100">
              Soluções completas em estruturas metálicas, manutenção e montagem para atender todas as necessidades do seu projeto com qualidade e precisão.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              // Usamos index={0} aqui para que o delay seja mínimo, já que os itens aparecem um abaixo do outro
              <FadeInItem key={service.title} index={0} className="block">
                <div 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h2 className="font-heading font-bold text-4xl text-foreground">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Nosso Processo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Metodologia comprovada para garantir a excelência em cada etapa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Consulta Inicial", description: "Entendimento das necessidades e objetivos do projeto" },
              { number: "02", title: "Projeto e Orçamento", description: "Desenvolvimento técnico e proposta comercial detalhada" },
              { number: "03", title: "Fabricação/Execução", description: "Produção e execução com controle de qualidade rigoroso" },
              { number: "04", title: "Entrega Técnica", description: "Finalização, inspeção e entrega com garantia" },
            ].map((step, index) => (
              <FadeInItem key={step.number} index={index}>
                <Card className="h-full border-t-4 border-t-secondary hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="font-heading font-bold text-5xl text-secondary/20">
                      {step.number}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 metallic-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Pronto para Iniciar seu Projeto?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Entre em contato conosco e receba um orçamento personalizado sem compromisso
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg px-8"
            >
              <Link to="/contato">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
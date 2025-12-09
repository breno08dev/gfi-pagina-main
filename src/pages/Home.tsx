import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { 
  ArrowRight, 
  Building2, 
  Hammer, 
  Box, 
  Warehouse, 
  Wrench, 
  Shield, 
  Users, 
  Award, 
  ClipboardCheck, // Novo ícone para Inspeções
  HardHat         // Novo ícone para Manutenção
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-industrial.webp";
// Logo das empresas que confiam na GFI
import logoAtacadaão from "@/assets/logo.atacadao.png"
import logoAssai from "@/assets/logo.assai.png"
import logoCocaCola from "@/assets/logo.coca.png"
import logoDia from "@/assets/logo.dia.png"
import logoMax from "@/assets/logo.max.png"
import logoSuperAtacado from "@/assets/logo.superAtacado.png"
import logoSerRio from "@/assets/logo.serRio.png"
import logoEneva from "@/assets/logo.eneva.png"
import logoMabex from "@/assets/logo.mabex.png"


const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Estruturas Metálicas",
      description: "Desenvolvimento de estruturas metálicas robustas e precisas para diversos fins industriais e comerciais.",
    },
    {
      icon: Hammer,
      title: "Coberturas",
      description: "Sistemas de cobertura metálica com alta durabilidade, resistência e excelente custo-benefício.",
    },
    {
      icon: Box,
      title: "Mezaninos",
      description: "Soluções inteligentes de mezaninos para otimização de espaço em ambientes industriais e comerciais.",
    },
    {
      icon: Warehouse,
      title: "Galpões Industriais",
      description: "Construção de galpões industriais completos com estrutura metálica de alta performance.",
    },
    {
      icon: Wrench,
      title: "Projetos Especiais",
      description: "Desenvolvimento de projetos customizados atendendo necessidades específicas do seu negócio.",
    },
    // Novos Serviços Adicionados
    {
      icon: ClipboardCheck,
      title: "Inspeções Técnicas",
      description: "Avaliação detalhada da integridade estrutural, garantindo segurança e conformidade com normas.",
    },
    {
      icon: HardHat,
      title: "Manutenção em Telhados",
      description: "Serviços de reparo, vedação e manutenção preventiva para prolongar a vida útil da sua cobertura.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Processos certificados e materiais de primeira linha.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais experientes e altamente qualificados.",
    },
    {
      icon: Award,
      title: "Excelência Comprovada",
      description: "Mais de 500 projetos entregues com sucesso.",
    },
  ];

  // Logos das empresas para o carrossel
  const clients = [
    { name: "Atacadão", logo: logoAtacadaão },
    { name: "Atacadão Dia a Dia", logo: logoDia },
    { name: "Assaí", logo: logoAssai },
    { name: "CocaCola", logo: logoCocaCola },
    { name: "Atacadão Obra Max", logo: logoMax },
    { name: "SuperAtacado Leve Max", logo: logoSuperAtacado },
    { name: "Ser Rio Construtora", logo: logoSerRio },
    { name: "Eneva", logo: logoEneva },
    { name: "Mabex", logo: logoMabex },

  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Início" 
        description="Especialistas em estruturas metálicas, galpões industriais e caldeiraria em Sertãozinho e região. Projetos com precisão e qualidade garantida." 
        canonical="/"
      />

      {/* Hero Section - Mantida igual */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          <div className="absolute inset-0 metallic-texture" />
        </div>

        <div className="relative container mx-auto px-4 py-32 z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary-foreground mb-6 animate-fade-up">
              Soluções Metálicas e Construções com{" "}
              <span className="text-secondary">Precisão</span> e{" "}
              <span className="text-secondary">Excelência</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up delay-100">
              Especialistas em estruturas metálicas, coberturas e galpões industriais. Transformamos projetos em realidade com qualidade incomparável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-200">
              <Button 
                asChild 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg px-8 group"
              >
                <Link to="/contato">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 font-semibold text-lg px-8 backdrop-blur-sm"
              >
                <Link to="/portfolio">
                  Ver Portfólio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mantida igual */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em estruturas metálicas para atender todas as necessidades do seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={`delay-${(index + 1) * 100}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Mantida igual */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Por Que Escolher a GFI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprometimento com excelência em cada projeto que realizamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={item.title}
                className={`text-center space-y-4 animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section (Carrossel Infinito - MODIFICADO) */}
      <section className="py-24 bg-background border-t border-border/50 overflow-hidden">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Clientes que confiam na GFI
          </h2>
          <p className="text-lg text-muted-foreground">
            Grandes marcas que contam com a nossa qualidade e segurança
          </p>
        </div>

        {/* Carrossel Infinito */}
        <div className="relative w-full flex overflow-hidden mask-gradient-x">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Adicionado hover:[animation-play-state:running] para garantir que não pare */}
          <div className="flex animate-scroll whitespace-nowrap items-center hover:[animation-play-state:running]">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div 
                key={`${client.name}-${index}`} 
                // ALTERADO: Estilo "esquadrado", fundo branco, sombra suave e sem grayscale
                className="mx-6 flex items-center justify-center h-40 w-40 bg-white rounded-2xl shadow-sm border border-border/40 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-md"
              >
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`} 
                  // Ajustado para conter a imagem dentro do quadrado
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const span = document.createElement('span');
                    span.innerText = client.name;
                    span.className = "text-sm font-bold text-muted-foreground text-center whitespace-normal";
                    e.currentTarget.parentElement?.appendChild(span);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mantida igual */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 metallic-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Pronto para Começar seu Projeto?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Entre em contato conosco e receba um orçamento personalizado para sua necessidade
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg px-8"
            >
              <Link to="/contato">
                Falar com Especialista
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
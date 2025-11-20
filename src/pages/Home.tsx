import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Hammer, Box, Warehouse, Wrench, Shield, Users, Award, ChevronRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-industrial.jpg";
import galpaoImage from "@/assets/galpao-metalico.jpg";
import mezaninoImage from "@/assets/mezanino.jpg";
import coberturaImage from "@/assets/cobertura-metalica.jpg";

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

  const projects = [
    { image: galpaoImage, title: "Galpão Industrial 2000m²" },
    { image: mezaninoImage, title: "Mezanino Comercial" },
    { image: coberturaImage, title: "Cobertura Metálica" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
          <div className="absolute inset-0 metallic-texture" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 py-32 z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary-foreground mb-6 animate-fade-up">
              Soluções Metálicas e Construções com{" "}
              <span className="text-secondary">Precisão</span> e{" "}
              <span className="text-secondary">Excelência</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up delay-100">
              Especialistas em estruturas metálicas, coberturas, mezaninos e galpões industriais. Transformamos projetos em realidade com qualidade incomparável.
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-primary-foreground rotate-90" />
        </div>
      </section>

      {/* Services Section */}
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

      {/* Why Choose Us Section */}
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

      {/* Projects Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Projetos Recentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos nossos trabalhos realizados com excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`group relative overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-primary-foreground">
                    <h3 className="font-heading font-bold text-xl mb-2">
                      {project.title}
                    </h3>
                    <Button 
                      asChild 
                      variant="secondary" 
                      size="sm"
                      className="mt-2"
                    >
                      <Link to="/portfolio">
                        Ver Detalhes
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
              <Link to="/portfolio">
                Ver Todos os Projetos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Hammer, Box, Warehouse, Wrench, ArrowRight, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import galpaoImage from "@/assets/estrutura6.jpg";
import mezaninoImage from "@/assets/estrutura3.jpg";
import coberturaImage from "@/assets/estrutura4.jpg";
import obraEspecial from "@/assets/atacadao.jpg"

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Estruturas Metálicas",
      description: "Desenvolvimento completo de estruturas metálicas para uso industrial, comercial e residencial.",
      image: galpaoImage,
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
      title: "Estruturas Metálicas de Grande Porte",
      description: "Soluções robustas para galpões, coberturas e projetos industriais de alta performance.",
      image: mezaninoImage,
      features: [
        "Engenharia precisa em treliças metálicas",
        "Montagem em altura com total segurança",
        "Estruturas amplas para vãos extensos",
        "Alta resistência e durabilidade",
        "Ideal para obras industriais de grande escala",
      ],
    },
    {
      icon: Warehouse,
      title: "Galpões Industriais",
      description: "Construção completa de galpões industriais com estrutura metálica de alta performance.",
      image: galpaoImage,
      features: [
        "Projeto arquitetônico completo",
        "Estrutura robusta e durável",
        "Prazos de entrega reduzidos",
        "Melhor custo-benefício",
        "Garantia estrutural",
      ],
    },
    {
      icon: Wrench,
      title: "Galpões Industriais de Grande Escala",
      description: "Execução completa de estruturas metálicas para obras comerciais e logísticas de alta demanda.",
      image: obraEspecial,
      features: [
        "Estrutura robusta para grandes vãos",
        "Montagem rápida e segura em campo",
        "Projetos dimensionados para cargas elevadas",
        "Alta durabilidade e desempenho estrutural",
        "Ideal para centros de distribuição e grandes redes varejistas",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 metallic-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 animate-fade-up">
              Nossos Serviços
            </h1>
            <p className="text-xl leading-relaxed text-primary-foreground/90 animate-fade-up delay-100">
              Soluções completas em estruturas metálicas para atender todas as necessidades do seu projeto com qualidade e precisão.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
              { number: "03", title: "Fabricação", description: "Produção com controle de qualidade rigoroso" },
              { number: "04", title: "Montagem e Entrega", description: "Instalação profissional e acompanhamento técnico" },
            ].map((step, index) => (
              <Card 
                key={step.number}
                className={`border-t-4 border-t-secondary animate-fade-up delay-${(index + 1) * 100}`}
              >
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

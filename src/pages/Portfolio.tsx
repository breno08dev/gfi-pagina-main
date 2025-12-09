import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO"; // Importação do SEO adicionada para consistência

//Galpão
import galpaoImage from "@/assets/mercado2.webp";
import galpaoImage2 from "@/assets/atacadao.webp";
import galpaoImage3 from "@/assets/ImageGalpao2.webp";
import Mercado from "@/assets/ImageMercado.webp";

//Caldeiraria
import caldeiraria from "@/assets/caldeiraria.webp";
import caldeiraria3 from "@/assets/caldeiraria3.webp";
//Estrutura Metalicas
import estruturaImage from "@/assets/estrutura3.webp";
import estruturaImage2 from "@/assets/estrutura6.webp";
import estruturaImage3 from "@/assets/ImageGalpao.webp"
//Coberturas 
import coberturaImage from "@/assets/cobertura.webp";
import coberturaImage2 from "@/assets/cobertura2.webp";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filters = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "galpoes", label: "Galpões e Varejo" },
    { id: "estruturas", label: "Estruturas" },
    { id: "coberturas", label: "Coberturas" },
    { id: "caldeiraria", label: "Caldeiraria" },
  ];

  const projects = [
    {
      id: 1,
      title: "Megaloja Atacadista",
      category: "galpoes",
      location: "São Paulo - SP",
      year: "2023",
      image: galpaoImage, // mercado2.jpg
      description: "Estrutura de grande porte com fechamento lateral e cobertura termoacústica para rede de varejo.",
    },
    {
      id: 2,
      title: "Home Center e Estacionamento",
      category: "galpoes",
      location: "Rio de Janeiro", 
      year: "2022",
      image: Mercado, // ImageMercado.jpg
      description: "Obra completa para rede de varejo, abrangendo loja principal, marquises e áreas externas.",
    },
    {
      id: 3,
      title: "Esqueleto Estrutural Industrial",
      category: "estruturas",
      location: "Guarulhos - SP",
      year: "2024",
      image: estruturaImage2, // estrutura6.jpg
      description: "Montagem de pórticos e tesouras metálicas para galpão industrial de pé-direito elevado.",
    },
    {
      id: 4,
      title: "Expansão Rede Atacadista",
      category: "galpoes",
      location: "Osasco - SP",
      year: "2023",
      image: galpaoImage2, // atacadao.jpg
      description: "Execução de estrutura metálica pesada para nova unidade, com foco em agilidade e grandes vãos livres.",
    },
    {
      id: 5,
      title: "Sistema de Cobertura Roll-On",
      category: "coberturas",
      location: "São Bernardo - SP",
      year: "2024",
      image: coberturaImage, // cobertura.jpg
      description: "Instalação de sistema de cobertura metálica de alta eficiência para grandes áreas logísticas.",
    },
    {
      id: 6,
      title: "Planta de Processamento Industrial",
      category: "caldeiraria",
      location: "Barueri - SP",
      year: "2024",
      image: caldeiraria3, // caldeiraria3.jpg
      description: "Complexo industrial com estruturas de acesso, pipe racks e suporte para equipamentos pesados.",
    },
    {
      id: 7,
      title: "Cobertura em Treliça Espacial",
      category: "estruturas",
      location: "Jundiaí - SP",
      year: "2023",
      image: estruturaImage, // estrutura3.jpg
      description: "Sistema de treliças metálicas projetado para vencimento de grandes vãos com leveza estrutural.",
    },
    {
      id: 8,
      title: "Galpão Industrial com Utilidades",
      category: "coberturas",
      location: "Sorocaba - SP",
      year: "2024",
      image: coberturaImage2, // cobertura2.jpg
      description: "Estrutura de cobertura preparada para instalações industriais, com suporte integrado para redes de incêndio.",
    },
    {
      id: 9,
      title: "Ampliação de Parque Fabril",
      category: "estruturas",
      location: "Rio de Janeiro", 
      year: "2021",
      image: estruturaImage3, // ImageGalpão.jpg
      description: "Estrutura metálica personalizada para expansão de área produtiva e armazenamento.",
    },
    {
      id: 10,
      title: "Centro de Distribuição Logística",
      category: "galpoes",
      location: "Mato Grosso do Sul", 
      year: "2021",
      image: galpaoImage3, // ImageGalpao2.jpg
      description: "Execução completa de CD Logístico, desde a fundação até o fechamento metálico.",
    },
    {
      id: 11,
      title: "Tanques de Armazenamento",
      category: "caldeiraria",
      location: "Campinas - SP",
      year: "2023",
      image: caldeiraria, // caldeiraria.jpg
      description: "Fabricação e montagem de campo de tanques industriais com rigoroso controle de solda.",
    },
  ];

  const filteredProjects = activeFilter === "todos" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Portfólio" 
        description="Confira nossos projetos realizados em estruturas metálicas, galpões e caldeiraria industrial." 
        canonical="/portfolio"
      />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 metallic-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 animate-fade-up">
              Nosso Portfólio
            </h1>
            <p className="text-xl leading-relaxed text-primary-foreground/90 animate-fade-up delay-100">
              Conheça alguns dos projetos que realizamos com excelência e compromisso com a qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={
                  activeFilter === filter.id
                    ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                    : "font-medium"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className={`group overflow-hidden border-none shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-up delay-${Math.min((index + 1) * 100, 400)}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      {/* Pequeno ponto para decorar */}
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                      {project.location}
                    </span>
                    <span className="font-mono text-xs border border-border px-2 py-0.5 rounded">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 metallic-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Projetos em Números
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projetos Entregues" },
              { number: "150k+", label: "m² Construídos" },
              { number: "98%", label: "Clientes Satisfeitos" },
              { number: "5+", label: "Anos de Experiência" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="font-heading font-bold text-5xl md:text-6xl text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-primary-foreground/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
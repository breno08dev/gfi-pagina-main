import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
//Galpão
import galpaoImage from "@/assets/mercado2.jpg";
import galpaoImage2 from "@/assets/atacadao.jpg";
import galpaoImage3 from "@/assets/ImageGalpao2.jpg";
import Mercado from "@/assets/ImageMercado.jpg";
//Caldeiraria
import caldeiraria from "@/assets/caldeiraria.jpg";
import caldeiraria3 from "@/assets/caldeiraria3.jpg";
//Estrutura Metalicas
import estruturaImage from "@/assets/estrutura3.jpg";
import estruturaImage2 from "@/assets/estrutura6.jpg";
import estruturaImage3 from "@/assets/ImageGalpão.jpg"
//Coberturas 
import coberturaImage from "@/assets/cobertura.jpg";
import coberturaImage2 from "@/assets/cobertura2.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filters = [
    { id: "todos", label: "Todos os Projetos" },
    { id: "galpoes", label: "Galpões" },
    { id: "estruturas", label: "Estruturas" },
    { id: "coberturas", label: "Coberturas" },
    { id: "caldeiraria", label: "Caldeiraria" },
  ];

  const projects = [
    {
      id: 1,
      title: "Galpão Industrial 2000m²",
      category: "galpoes",
      location: "São Paulo - SP",
      year: "2023",
      image: galpaoImage,
      description: "Construção completa de galpão industrial com estrutura metálica para operação logística.",
    },
    {
      id: 2,
      title: "Loja Comercial Atacado",
      category: "galpoes",
      location: "Rio de Janeiro", 
      year: "2022",
      image: Mercado,
      description: "Loja Atacadão, estrutura personalidade completa",
    },
    {
      id: 3,
      title: "Estrutura Industrial Complexa",
      category: "estruturas",
      location: "Guarulhos - SP",
      year: "2024",
      image: estruturaImage2,
      description: "Estrutura metálica robusta para expansão de linha de produção.",
    },
    {
      id: 4,
      title: "Galpão Logístico 3500m²",
      category: "galpoes",
      location: "Osasco - SP",
      year: "2023",
      image: galpaoImage2,
      description: "Galpão metálico de grande porte para centro de distribuição.",
    },
    {
      id: 5,
      title: "Cobertura para Estacionamento",
      category: "coberturas",
      location: "São Bernardo - SP",
      year: "2024",
      image: coberturaImage,
      description: "Cobertura metálica projetada para 50 vagas de estacionamento.",
    },
    {
      id: 6,
      title: "Complexo Industrial com Estruturas Metálicas",
      category: "caldeiraria",
      location: "Barueri - SP",
      year: "2024",
      image: caldeiraria3,
      description: "Conjunto industrial com plataformas, tanques e acessos metálicos.",
    },
    {
      id: 7,
      title: "Estrutura Metálica Para Armazém",
      category: "estruturas",
      location: "Jundiaí - SP",
      year: "2023",
      image: estruturaImage,
      description: "Estrutura metálica leve com grande vão para suporte de equipamentos.",
    },
    {
      id: 8,
      title: "Cobertura Metálica Quadra Esportiva",
      category: "coberturas",
      location: "Sorocaba - SP",
      year: "2024",
      image: coberturaImage2,
      description: "Cobertura de grande vão livre para quadra poliesportiva.",
    },
    {
      id: 9,
      title: "Estrutura Personalizada",
      category: "estruturas",
      location: "Rio de Janeiro", 
      year: "2021",
      image: estruturaImage3,
      description: "Galpão de armazenamento comercial",
    },
    {
      id: 10,
      title: "Estrutura Personalizada",
      category: "galpoes",
      location: "Mato Grosso do Sul", 
      year: "2021",
      image: galpaoImage3,
      description: "Armazem de veneno",
    },
    {
      id: 11,
      title: "Unidade de Caldeiraria",
      category: "caldeiraria",
      location: "Campinas - SP",
      year: "2023",
      image: caldeiraria,
      description: "Fabricação e montagem de equipamento industrial com acesso estrutural.",
    },
  ];

  const filteredProjects = activeFilter === "todos" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
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
                {/* AQUI: Alterado de aspect-[4/3] para aspect-video (16:9) */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
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
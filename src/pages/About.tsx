import { Shield, Target, Eye, Award, Users, TrendingUp } from "lucide-react";
import equipeImage from "@/assets/equipe-industrial.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Qualidade",
      description: "Compromisso inabalável com padrões de excelência em todos os projetos.",
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Execução meticulosa e atenção aos detalhes técnicos em cada etapa.",
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalho em equipe e parceria com clientes para resultados superiores.",
    },
    {
      icon: TrendingUp,
      title: "Inovação",
      description: "Busca constante por novas tecnologias e métodos de construção.",
    },
  ];

  const timeline = [
    { year: "2010", title: "Fundação", description: "Início das operações focado em pequenas estruturas metálicas" },
    { year: "2014", title: "Expansão", description: "Ampliação da equipe e aquisição de equipamentos de ponta" },
    { year: "2018", title: "Consolidação", description: "100 projetos entregues e certificação ISO 9001" },
    { year: "2022", title: "Líder Regional", description: "Referência em estruturas metálicas no estado" },
    { year: "2024", title: "Hoje", description: "Mais de 500 projetos e equipe de 50 profissionais" },
  ];

  const stats = [
    { number: "500+", label: "Projetos Entregues" },
    { number: "50+", label: "Profissionais" },
    { number: "14", label: "Anos de Experiência" },
    { number: "98%", label: "Clientes Satisfeitos" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 metallic-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 animate-fade-up">
              Sobre a GFI Soluções Metálicas
            </h1>
            <p className="text-xl leading-relaxed text-primary-foreground/90 animate-fade-up delay-100">
              Há mais de uma década transformando ideias em estruturas sólidas, com compromisso inabalável com a qualidade e satisfação dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Image & Text */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
                <img
                  src={equipeImage}
                  alt="Equipe GFI"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10" />
            </div>
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-4xl text-foreground">
                Nossa História
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fundada em 2010, a GFI Soluções Metálicas nasceu do sonho de oferecer soluções em estruturas metálicas que combinassem qualidade, precisão e atendimento personalizado.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ao longo dos anos, crescemos de uma pequena oficina para uma das principais referências do setor no estado, mantendo sempre nossos valores fundamentais de excelência e compromisso com cada cliente.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoje, com uma equipe de mais de 50 profissionais especializados e equipamentos de última geração, continuamos dedicados a entregar projetos que superam expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card rounded-lg p-8 shadow-card">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-4">
                Missão
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fornecer soluções em estruturas metálicas com excelência técnica, 
                inovação e compromisso, superando as expectativas dos nossos clientes 
                e contribuindo para o desenvolvimento sustentável da indústria.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-card">
              <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-3xl text-foreground mb-4">
                Visão
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser reconhecida como referência nacional em soluções metálicas, 
                destacando-se pela qualidade, inovação e pela capacidade de 
                transformar projetos complexos em realidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Princípios que guiam cada decisão e ação em nossa empresa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`text-center space-y-4 animate-fade-up delay-${(index + 1) * 100}`}
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Nossa Trajetória
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Evolução e crescimento ao longo dos anos
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary/20 hidden md:block" />
              
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`relative mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pr-12' : 'md:mr-auto md:pl-12'}`}>
                    <div className="bg-card rounded-lg p-6 shadow-card">
                      <div className="font-heading font-bold text-3xl text-secondary mb-2">
                        {item.year}
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-6 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-muted hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 metallic-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

export default About;

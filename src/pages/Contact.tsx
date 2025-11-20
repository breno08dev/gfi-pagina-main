import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: ["(11) 3456-7890", "(11) 98765-4321"],
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@gfisolucoes.com.br", "orcamento@gfisolucoes.com.br"],
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: ["São Paulo - SP", "Brasil"],
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      details: ["Segunda a Sexta: 8h - 18h", "Sábado: 8h - 12h"],
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
              Entre em Contato
            </h1>
            <p className="text-xl leading-relaxed text-primary-foreground/90 animate-fade-up delay-100">
              Estamos prontos para atender você e transformar seu projeto em realidade. Fale conosco!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background -mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className={`border-none shadow-elegant animate-fade-up delay-${(index + 1) * 100}`}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail) => (
                      <p key={detail} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="mb-8">
                <h2 className="font-heading font-bold text-4xl text-foreground mb-4">
                  Solicite um Orçamento
                </h2>
                <p className="text-lg text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(00) 00000-0000"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                    Assunto *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Qual serviço você precisa?"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Conte-nos mais sobre seu projeto..."
                    className="min-h-[150px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg h-14"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Map & WhatsApp */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card className="border-none shadow-elegant overflow-hidden">
                <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <MapPin className="w-16 h-16 text-secondary mx-auto" />
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                        Nossa Localização
                      </h3>
                      <p className="text-muted-foreground">
                        São Paulo - SP, Brasil
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="border-none shadow-elegant bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white">
                <CardContent className="p-8 text-center space-y-4">
                  <MessageCircle className="w-16 h-16 mx-auto" />
                  <div>
                    <h3 className="font-heading font-bold text-2xl mb-2">
                      Fale Conosco pelo WhatsApp
                    </h3>
                    <p className="text-white/90 mb-6">
                      Atendimento rápido e personalizado para seu projeto
                    </p>
                    <Button 
                      asChild
                      size="lg"
                      className="bg-white hover:bg-white/90 text-[#25D366] font-heading font-semibold w-full"
                    >
                      <a 
                        href="https://wa.me/5511987654321?text=Olá! Gostaria de solicitar um orçamento." 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 w-5 h-5" />
                        Iniciar Conversa
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="border-none shadow-elegant">
                <CardContent className="p-8 space-y-4">
                  <h3 className="font-heading font-bold text-2xl text-foreground">
                    Por que nos escolher?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Resposta em até 24 horas",
                      "Orçamento gratuito e sem compromisso",
                      "Atendimento personalizado",
                      "Equipe técnica qualificada",
                      "Garantia de qualidade",
                    ].map((item) => (
                      <li key={item} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

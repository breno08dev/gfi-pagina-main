import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, Building2 } from "lucide-react";
import SEO from "@/components/SEO"; // <--- IMPORTANTE: Importação do SEO

// Componente do Ícone do WhatsApp
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const Contact = () => {
  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  // Atualiza o estado conforme o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envia para o WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Olá, me chamo ${formData.name}, gostaria de falar sobre o assunto ${formData.subject}, ${formData.message}`;
    const phoneNumber = "5516996166838";
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      value: "Antônio José Bobato, 140",
      subValue: "Sertãozinho / SP",
    },
    {
      icon: Phone,
      title: "Telefone & WhatsApp",
      value: "(16) 99616-6838",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "gabriel@gfisolucoes.com.br",
    },
    {
      icon: Clock,
      title: "Atendimento",
      value: "Seg a Sex: 8h às 18h",
      subValue: "Sáb: 8h às 12h",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50/50">
      {/* --- SEO CONFIG --- */}
      <SEO 
        title="Contato" 
        description="Fale com a GFI Soluções Metálicas. Solicite seu orçamento para galpões, caldeiraria e estruturas metálicas via WhatsApp ou E-mail." 
        canonical="/contato"
      />

      {/* --- HERO SECTION --- */}
       <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 metallic-texture" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 animate-fade-up">
              Contato
            </h1>
            <p className="text-xl leading-relaxed text-primary-foreground/90 animate-fade-up delay-100">
              Fale com a nossa equipe. Estamos prontos para tirar suas dúvidas, ajudar no seu projeto e responder rapidamente pelo WhatsApp
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* --- COLUNA DA ESQUERDA: INFORMAÇÕES + MAPA --- */}
          <div className="lg:col-span-5 space-y-8 animate-fade-in delay-200 pt-8 lg:pt-0">
            {/* Card de Informações */}
            <div className="bg-white border border-border/40 rounded-2xl shadow-lg p-8">
              <h3 className="font-heading font-bold text-2xl mb-8 flex items-center gap-3 text-foreground">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-secondary" />
                </div>
                Canais Oficiais
              </h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-5 items-start group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="pt-1">
                      <p className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wider">
                        {info.title}
                      </p>
                      <p className="font-heading font-medium text-lg text-foreground cursor-default select-text">
                        {info.value}
                      </p>
                      {info.subValue && (
                        <p className="text-sm text-muted-foreground mt-1">{info.subValue}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-white border border-border/40 rounded-2xl shadow-lg overflow-hidden h-[320px] relative group">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.589458976782!2d-47.9904889!3d-21.1363999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9d16200b50531%3A0x8f50a6f3f5f5f5f5!2sR.%20Ant%C3%B4nio%20Jos%C3%A9%20Bobato%2C%20140%20-%20Sert%C3%A3ozinho%2C%20SP%2C%2014160-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da GFI Soluções Metálicas"
                className="grayscale group-hover:grayscale-0 transition-all duration-500 opacity-90 group-hover:opacity-100"
              ></iframe>
            </div>
          </div>

          {/* --- COLUNA DA DIREITA: FORMULÁRIO PRO (CARD DESTACADO) --- */}
          <div className="lg:col-span-7 animate-fade-in delay-300">
            <Card className="border-none shadow-2xl h-full bg-white relative overflow-hidden rounded-2xl">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary" />
              
              <CardContent className="p-8 md:p-12">
                <div className="mb-10">
                  <h2 className="font-heading font-bold text-3xl text-foreground mb-3">
                    Envie uma mensagem direta
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Preencha os campos abaixo. Ao clicar em enviar, você será redirecionado para o WhatsApp com sua mensagem pronta.
                  </p>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-foreground/80 ml-1">
                        Seu Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Digite seu nome completo"
                        className="h-14 px-4 bg-white border-gray-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all duration-300 text-base shadow-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-foreground/80 ml-1">
                        Assunto
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Ex: Orçamento Galpão"
                        className="h-14 px-4 bg-white border-gray-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all duration-300 text-base shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-foreground/80 ml-1">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Olá, gostaria de saber mais sobre..."
                      className="min-h-[200px] p-4 bg-white border-gray-200 focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all duration-300 text-base resize-none shadow-sm"
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-heading font-bold text-lg h-16 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <WhatsAppIcon className="w-6 h-6 fill-current" />
                      Iniciar Conversa no WhatsApp
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                      <Clock className="w-3 h-3" />
                      Tempo médio de resposta: 10 minutos em horário comercial
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center font-heading font-bold text-secondary-foreground text-xl">
                GFI
              </div>
              <div>
                <div className="font-heading font-bold text-lg">
                  GFI Soluções Metálicas
                </div>
                <div className="text-xs text-primary-foreground/80">
                  e Construções
                </div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Especialistas em estruturas metálicas com precisão e excelência desde 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/sobre", label: "Sobre Nós" },
                { path: "/servicos", label: "Serviços" },
                { path: "/portfolio", label: "Portfólio" },
                { path: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                "Estruturas Metálicas",
                "Coberturas",
                "Mezaninos",
                "Galpões Industriais",
                "Projetos Especiais",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-primary-foreground/80">(11) 3456-7890</div>
                  <div className="text-primary-foreground/80">(11) 98765-4321</div>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contato@gfisolucoes.com.br"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  contato@gfisolucoes.com.br
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  São Paulo - SP, Brasil
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-primary-foreground group-hover:text-secondary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-secondary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-secondary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} GFI Soluções Metálicas e Construções. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/60">
            CNPJ: 12.345.678/0001-90
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
